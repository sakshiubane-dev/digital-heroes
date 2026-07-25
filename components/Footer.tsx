export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#262626] py-14 relative z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1360px]">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-[#B5B5B5]">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="font-bold tracking-wider text-xs uppercase text-[#F7F7F5]">
              NorthPeak <span className="text-[#B5B5B5] font-light">Digital</span>
            </span>
            <span className="hidden sm:inline text-[#262626]">•</span>
            <span>&copy; {new Date().getFullYear()} NorthPeak Digital Studio. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center text-[#B5B5B5] hover:text-[#F7F7F5] hover:border-[#4F8CFF] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center text-[#B5B5B5] hover:text-[#F7F7F5] hover:border-[#4F8CFF] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
            </a>
            <a href="#" aria-label="GitHub" className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center text-[#B5B5B5] hover:text-[#F7F7F5] hover:border-[#4F8CFF] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
            </a>
            <a href="#" aria-label="Dribbble" className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center text-[#B5B5B5] hover:text-[#F7F7F5] hover:border-[#4F8CFF] transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 3.6c5 6 7 10.5 7.5 16.2" /><path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" /><path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" /></svg>
            </a>
          </div>

            <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#151515] border border-[#262626] hover:border-[#4F8CFF] text-xs text-[#B5B5B5] hover:text-[#4F8CFF] transition-all font-medium hover-underline"
            >
                <span>Built for Digital Heroes Training Task</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#4F8CFF]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>
            </a>

        </div>

      </div>
    </footer>
  );
}
