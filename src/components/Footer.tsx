import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-iw-forest">
      <div className="section-padding py-12">
        <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-12">
          {/* Brand */}
          <div className="flex items-center gap-6">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src="./images/logo-light.png" alt="IntegrateWise" className="h-8 w-auto" />
              <span className="font-iw-display text-lg tracking-wide text-iw-paper hidden sm:inline">
                INTEGRATE<span className="text-iw-gold-light">WISE</span>
              </span>
            </Link>
            <div className="flex items-center gap-3 border-l border-iw-paper/20 pl-6">
              <a href="https://linkedin.com/company/integratewise" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-iw-paper/20 flex items-center justify-center text-iw-paper/50 hover:text-iw-paper transition-colors" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
              <a href="https://twitter.com/integratewise" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-iw-paper/20 flex items-center justify-center text-iw-paper/50 hover:text-iw-paper transition-colors" aria-label="Twitter">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link to="/platform" className="font-iw-sans text-iw-paper/70 hover:text-iw-paper transition-colors">Platform</Link>
            <Link to="/features" className="font-iw-sans text-iw-paper/70 hover:text-iw-paper transition-colors">Features</Link>
            <Link to="/solutions" className="font-iw-sans text-iw-paper/70 hover:text-iw-paper transition-colors">Solutions</Link>
            <Link to="/blog" className="font-iw-sans text-iw-paper/70 hover:text-iw-paper transition-colors">Blog</Link>
            <Link to="/pricing" className="font-iw-sans text-iw-paper/70 hover:text-iw-paper transition-colors">Pricing</Link>
            <Link to="/about" className="font-iw-sans text-iw-paper/70 hover:text-iw-paper transition-colors">About</Link>
            <div className="w-px h-4 bg-iw-paper/20"></div>
            <Link to="/privacy" className="font-iw-mono text-xs text-iw-paper/40 hover:text-iw-paper transition-colors">Privacy</Link>
            <Link to="/terms" className="font-iw-mono text-xs text-iw-paper/40 hover:text-iw-paper transition-colors">Terms</Link>
          </div>

          {/* CTA & Copyright */}
          <div className="flex items-center gap-6">
            <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center px-4 py-2 bg-iw-paper text-iw-forest font-iw-sans font-semibold text-xs rounded-full hover:bg-iw-gold-pale transition-colors whitespace-nowrap">
              Book a Demo
            </a>
            <p className="font-iw-mono text-xs text-iw-paper/40 whitespace-nowrap">&copy; {new Date().getFullYear()} IntegrateWise</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
