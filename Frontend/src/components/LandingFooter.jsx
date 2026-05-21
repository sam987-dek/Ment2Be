import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Send } from 'lucide-react';
import logoHat from '../assets/logo-hat.png';

const LandingFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      id="footer"
      className="relative z-10 bg-white dark:bg-[#0a0a0a] border-t border-slate-200 dark:border-gray-800/80 transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient background glow circles */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <div className="flex items-center space-x-3">
              <img
                src={logoHat}
                alt="Ment2Be Logo"
                className="w-9 h-9 dark:brightness-0 dark:invert transition-transform duration-500 hover:rotate-[360deg]"
              />
              <span className="text-slate-900 dark:text-white text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-cyan-100 dark:to-white bg-clip-text text-transparent">
                Ment2Be
              </span>
            </div>
            
            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              Accessible and tailored mentorship experience for everyone. Connect, learn, and grow with experts to elevate your career journey.
            </p>

            {/* Pulsating online status badge */}
            <div className="flex items-center space-x-2 bg-slate-50 dark:bg-gray-900/40 border border-slate-200 dark:border-gray-800/60 px-3 py-1.5 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-500 dark:text-gray-400 text-xs font-medium">
                120+ Mentors Active Online
              </span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://www.linkedin.com/in/arsh-c246/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group p-2.5 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-500 hover:text-white dark:bg-gray-900/40 dark:hover:bg-cyan-400/10 dark:text-gray-400 dark:hover:text-cyan-300 border border-slate-200 dark:border-gray-800/80 dark:hover:border-cyan-500/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-950 dark:focus-visible:ring-cyan-400"
              >
                <Linkedin size={18} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://github.com/arshchouhan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group p-2.5 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-500 hover:text-white dark:bg-gray-900/40 dark:hover:bg-cyan-400/10 dark:text-gray-400 dark:hover:text-cyan-300 border border-slate-200 dark:border-gray-800/80 dark:hover:border-cyan-500/50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-950 dark:focus-visible:ring-cyan-400"
              >
                <Github size={18} className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Column 2: Features */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">
              Features
            </h4>
            <ul className="flex flex-col space-y-2.5">
              <li>
                <Link
                  to="/"
                  state={{ fromNavbar: true }}
                  className="group relative inline-flex items-center text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 text-sm py-0.5 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 -mx-1"
                >
                  <span>Dashboard</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-slate-900 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ fromNavbar: true }}
                  className="group relative inline-flex items-center text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 text-sm py-0.5 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 -mx-1"
                >
                  <span>Mentorship</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-slate-900 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="flex flex-col space-y-2.5">
              <li>
                <Link
                  to="/solutions"
                  state={{ fromNavbar: true }}
                  className="group relative inline-flex items-center text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 text-sm py-0.5 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 -mx-1"
                >
                  <span>For Students</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-slate-900 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  state={{ fromNavbar: true }}
                  className="group relative inline-flex items-center text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 text-sm py-0.5 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 -mx-1"
                >
                  <span>For Mentors</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-slate-900 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  state={{ fromNavbar: true }}
                  className="group relative inline-flex items-center text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 text-sm py-0.5 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 -mx-1"
                >
                  <span>For Teams</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-slate-900 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Resources */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">
              Resources
            </h4>
            <ul className="flex flex-col space-y-2.5">
              <li>
                <Link
                  to="/contact-us"
                  state={{ fromNavbar: true }}
                  className="group relative inline-flex items-center text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 text-sm py-0.5 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 -mx-1"
                >
                  <span>Contact Us</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-slate-900 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  state={{ fromNavbar: true }}
                  className="group relative inline-flex items-center text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 text-sm py-0.5 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 -mx-1"
                >
                  <span>Support & FAQ</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-slate-900 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  state={{ fromNavbar: true }}
                  className="group relative inline-flex items-center text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 text-sm py-0.5 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 -mx-1"
                >
                  <span>Terms & Conditions</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-slate-900 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-slate-500 dark:text-gray-400 text-xs leading-relaxed">
              Mentorship insights and updates directly to your inbox.
            </p>

            {isSubscribed ? (
              <div className="flex flex-col items-center justify-center p-3.5 bg-slate-50 dark:bg-gray-900/30 rounded-xl border border-dashed border-slate-200 dark:border-gray-800/80 animate-fade-in text-center space-y-1">
                <span className="text-emerald-500 dark:text-cyan-400 text-sm font-bold">✨ Subscribed!</span>
                <p className="text-slate-500 dark:text-gray-400 text-[10px]">You have joined our mailing list.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center w-full mt-2">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-3 pr-10 py-2 rounded-xl bg-slate-50 dark:bg-gray-900/50 border border-slate-200 dark:border-gray-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 dark:focus:ring-cyan-400 text-xs transition-all duration-300"
                  aria-label="Newsletter email address"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 p-1.5 rounded-lg bg-slate-900 dark:bg-cyan-400 text-white dark:text-black hover:bg-slate-800 dark:hover:bg-cyan-300 transition-colors duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-950 dark:focus-visible:ring-cyan-400"
                  aria-label="Subscribe to newsletter"
                >
                  <Send size={12} />
                </button>
              </form>
            )}
            <span className="text-[10px] text-slate-400 dark:text-gray-500">
              We value your privacy. Unsubscribe anytime.
            </span>
          </div>

        </div>

        {/* Divider & Footer Bottom */}
        <div className="border-t border-slate-200/60 dark:border-gray-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 dark:text-gray-500 text-xs text-center sm:text-left">
            © 2026 Ment2Be. All rights reserved. Built with passion for accessible mentorship.
          </p>
          <div className="flex space-x-6 text-xs text-slate-400 dark:text-gray-500">
            <Link
              to="/terms-of-service"
              className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;


