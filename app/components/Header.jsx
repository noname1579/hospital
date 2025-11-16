'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './../../public/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Врачи', href: '/doctors' },
    { name: 'Услуги', href: '/services' },
    { name: 'Отзывы', href: '/reviews' },
    { name: 'Контакты', href: '/contacts' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <Image src={logo} width={100} />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col text-right text-gray-600">
              <span className="text-sm">Круглосуточно</span>
              <a 
                href="tel:+79999999999" 
                className="font-bold text-lg hover:text-blue-600 transition-colors duration-300"
              >
                +7 (999) 999-99-99
              </a>
            </div>
            
            <Link 
              href="/doctors"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
            >
              Записаться
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            aria-label="Открыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 mt-2 mb-4 p-6 animate-slide-down">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <a 
                  href="tel:+79999999999" 
                  className="block py-3 px-4 bg-blue-50 text-blue-600 font-bold rounded-lg text-center hover:bg-blue-100 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span>📞</span>
                  +7 (999) 999-99-99
                </a>
                
                <Link 
                  href="/doctors"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>📅</span>
                  Записаться на прием
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  )
}