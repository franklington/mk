'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const menuItems = [
    { label: 'WORK', href: '/' },
    { label: 'ABOUT', href: '/info' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="w-full px-8 md:px-16 py-6 flex justify-between items-center">
        {/* Name/Logo - Left */}
        <Link 
          href="/" 
          className={`${isHome ? 'text-white' : 'text-black'} font-bold text-lg md:text-xl hover:opacity-70 transition-opacity`}
        >
          Martin Klaffensteiner
        </Link>
        
        {/* Menu items - Right */}
        <div className="flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${isHome ? 'text-white' : 'text-black'} text-sm font-medium hover:opacity-70 transition-opacity`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
