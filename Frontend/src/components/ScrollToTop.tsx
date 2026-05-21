import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setVisible(scrollY > 300)
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const radius = 20
  const circumference = 2 * Math.PI * radius // ~125.66
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 group
        w-12 h-12 flex items-center justify-center
        bg-transparent border-0 outline-none
        text-slate-600 dark:text-cyan-400
        transition-all duration-500 ease-out
        hover:-translate-y-1.5 hover:scale-110
        hover:text-slate-900 dark:hover:text-cyan-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        focus-visible:ring-slate-950 dark:focus-visible:ring-cyan-400
        rounded-full
        ${visible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-90 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      {/* Scroll Progress Ring SVG */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          className="stroke-slate-200 dark:stroke-gray-800/80 transition-colors"
          strokeWidth="2.5"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          className="stroke-slate-900 dark:stroke-cyan-400 transition-all duration-150"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Icon centered */}
      <ArrowUp size={20} className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  )
}
