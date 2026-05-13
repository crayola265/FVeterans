import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const links = [
    { href: '#mission', label: 'Mission' },
    { href: '#signup', label: 'Join Up' },
    { href: '#intel', label: 'Intel' },
    { href: '#shop', label: 'Shop' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b-2 transition-all duration-300 ${
          scrolled ? 'bg-[#1b1e16]/98 backdrop-blur-sm py-2.5 md:py-3' : 'bg-[#1b1e16]/95 py-2.5 md:py-3'
        }`}
        style={{ borderBottomColor: 'var(--khaki-dark)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 flex items-center justify-between">
          <div
            className="text-[18px] md:text-[22px] tracking-[0.5px] uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: '800',
              color: 'var(--khaki)',
            }}
          >
            Fuck <span style={{ color: 'var(--pink-primary)' }}>Veterans</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold tracking-[3px] uppercase transition-colors duration-200 hover:opacity-80"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: 'var(--dirty-white)',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
                style={{ background: 'var(--khaki)' }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
                style={{ background: 'var(--khaki)' }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
                style={{ background: 'var(--khaki)' }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(0,0,0,0.8)' }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-[60px] right-0 left-0 border-t-2 transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{
            background: '#1b1e16',
            borderColor: 'var(--khaki-dark)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-6 py-4 border-b transition-colors duration-200 active:bg-[#2b2e26]"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'var(--dirty-white)',
                borderColor: 'var(--od-light)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
