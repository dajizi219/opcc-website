'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {Link} from '../i18n/navigation';
import {usePathname} from '../i18n/navigation';

export default function Navigation() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(pathname.startsWith('/en') ? 'en' : 'zh');

  const navItems = [
    {key: 'home', label: t('home'), href: '/'},
    {key: 'about', label: t('about'), href: '#about'},
    {key: 'tickets', label: t('tickets'), href: '#tickets'},
    {key: 'booth', label: t('booth'), href: '#booth'},
    {key: 'ai', label: t('ai'), href: '#ai'},
    {key: 'faq', label: t('faq'), href: '#register'},
  ];

  const toggleLanguage = () => {
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    setCurrentLang(newLang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|zh)/, `/${newLang}`);
    window.location.href = newPath === `/${newLang}` ? newPath + '/' : newPath;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">OPCC 2026</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              {currentLang === 'zh' ? 'EN' : '中文'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm"
            >
              {currentLang === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
