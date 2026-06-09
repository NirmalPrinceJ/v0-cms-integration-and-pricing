import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Continuity Bridge', href: '/', isMain: true },
  { label: 'Platform', href: '/platform', submenu: ['Digital Twin', 'Knowledge', 'Governance', 'Workbench', 'Operations', 'Integrations'] },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Docs', href: '/docs' },
  { label: 'Company', href: '/company' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-iw-paper/95 backdrop-blur-sm border-b border-iw-rule">
      <div className="section-padding flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src="./images/logo-dark.webp" alt="IntegrateWise" className="h-8 w-auto" />
          <span className="font-iw-display text-xl tracking-wide">
            <span className="text-iw-ink">INTEGRATE</span>
            <span className="text-iw-gold">WISE</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.href} className="relative group">
              <Link
                to={link.href}
                className={`font-iw-mono text-xs uppercase tracking-widest transition-colors flex items-center gap-1 ${
                  location.pathname === link.href ? 'text-iw-forest' : 'text-iw-slate hover:text-iw-forest'
                }`}
              >
                {link.label}
                {'submenu' in link && link.submenu && <span className="text-xs">▼</span>}
              </Link>
              
              {/* Dropdown menu for Platform */}
              {'submenu' in link && link.submenu && (
                <div className="absolute left-0 mt-0 w-48 bg-iw-paper border border-iw-rule rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40 py-2">
                  {link.submenu.map((item) => (
                    <a
                      key={item}
                      href={`/platform/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 font-iw-sans text-xs text-iw-slate hover:text-iw-forest hover:bg-iw-paper-warm transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://calendar.app.google/EcRkSqxwtchuF4Qf6"
            className="px-5 py-2 bg-iw-forest text-iw-paper font-iw-sans font-semibold text-xs rounded-full hover:bg-iw-forest-bright transition-colors"
          >
            Sign In
          </a>
          <a
            href="#"
            className="px-5 py-2 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-xs rounded-full hover:bg-iw-gold-light transition-colors"
          >
            Start Free
          </a>
        </nav>

        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden section-padding pb-6 border-t border-iw-rule">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link to={link.href} onClick={() => setMenuOpen(false)} className="font-iw-mono text-xs uppercase tracking-widest text-iw-slate hover:text-iw-forest transition-colors block mb-2">
                  {link.label}
                </Link>
                {'submenu' in link && link.submenu && (
                  <div className="ml-4 flex flex-col gap-2 mb-4">
                    {link.submenu.map((item) => (
                      <a
                        key={item}
                        href={`/platform/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="font-iw-sans text-xs text-iw-slate hover:text-iw-forest transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-block px-5 py-2 bg-iw-forest text-iw-paper font-iw-sans font-semibold text-xs rounded-full text-center hover:bg-iw-forest-bright">
              Sign In
            </a>
            <a href="#" className="inline-block px-5 py-2 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-xs rounded-full text-center hover:bg-iw-gold-light">
              Start Free
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
