'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <div style={{ maxWidth: 'var(--page-max-width)', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

            {/* Logo — wordmark */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="11,1 21,6 21,16 11,21 1,16 1,6" stroke="#8052ff" strokeWidth="1.5" fill="none"/>
                <polygon points="11,6 16,8.5 16,13.5 11,16 6,13.5 6,8.5" stroke="#8052ff" strokeWidth="1" fill="none" opacity="0.5"/>
              </svg>
              <span style={{
                fontWeight: 600,
                fontSize: '18px',
                letterSpacing: '0.021em',
                color: 'var(--color-bone)',
              }}>
                Hammad
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="dala-nav-link"
                  style={pathname === item.href ? { color: 'var(--color-bone)' } : {}}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA pill */}
            <div className="hidden md:flex" style={{ alignItems: 'center', gap: '12px' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/contact"
                  className="dala-btn-primary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>

            {/* Mobile icon — Hammad logo */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(true)}
              className="md:hidden"
              style={{
                width: '40px', height: '40px',
                border: '1px solid rgba(128,82,255,0.35)',
                borderRadius: '24px',
                background: 'rgba(128,82,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}
              aria-label="Open menu"
            >
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="11,1 21,6 21,16 11,21 1,16 1,6" stroke="#8052ff" strokeWidth="1.5" fill="none"/>
                <polygon points="11,6 16,8.5 16,13.5 11,16 6,13.5 6,8.5" stroke="#8052ff" strokeWidth="1" fill="none" opacity="0.7"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.7)',
                zIndex: 50,
              }}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '100%', maxWidth: '320px',
                backgroundColor: 'var(--color-void)',
                borderLeft: '1px solid rgba(255,255,255,0.10)',
                zIndex: 51,
                display: 'flex', flexDirection: 'column',
              }}
            >
              {/* Drawer header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '24px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}>
                <span style={{ fontWeight: 600, fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--color-smoke)' }}>
                  Menu
                </span>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  style={{
                    width: '36px', height: '36px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '24px',
                    background: 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Close menu"
                >
                  <X style={{ width: '16px', height: '16px', color: 'var(--color-bone)' }} />
                </motion.button>
              </div>

              {/* Nav items */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.08 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'block',
                        padding: '14px 16px',
                        borderRadius: '24px',
                        fontSize: '15px',
                        fontWeight: pathname === item.href ? 600 : 400,
                        letterSpacing: '0.021em',
                        color: pathname === item.href ? 'var(--color-bone)' : 'var(--color-smoke)',
                        background: pathname === item.href ? 'rgba(128,82,255,0.12)' : 'transparent',
                        border: pathname === item.href ? '1px solid rgba(128,82,255,0.28)' : '1px solid transparent',
                        textDecoration: 'none',
                        transition: 'color 0.2s, background 0.2s',
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer footer CTA */}
              <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="dala-btn-primary"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
