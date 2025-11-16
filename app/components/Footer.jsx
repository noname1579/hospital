'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from './../../public/logo.png'

export default function Footer() {

  const navigation = {
    main: [
      { name: 'Главная', href: '#home' },
      { name: 'Врачи', href: '#doctors' },
      { name: 'Услуги', href: '#services' },
      { name: 'Отзывы', href: '#reviews' },
      { name: 'Контакты', href: '#contacts' }
    ],
    services: [
      { name: 'Терапия', href: '#' },
      { name: 'Кардиология', href: '#' },
      { name: 'Неврология', href: '#' },
      { name: 'Стоматология', href: '#' },
      { name: 'Диагностика', href: '#' }
    ],
    contacts: [
      { 
        name: 'Адрес', 
        value: 'г.Ростов-на-Дону, ул.Красноармейская 11', 
        icon: '📍' 
      },
      { 
        name: 'Телефон', 
        value: '+7 (999) 999-99-99', 
        icon: '📞'
      },
      { 
        name: 'Email', 
        value: 'info@medcare.ru', 
        icon: '✉️'
      },
      { 
        name: 'Часы работы', 
        value: 'Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00', 
        icon: '🕒' 
      }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="lg:col-span-1">
            <Image src={logo} width={150} />
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Современная медицинская клиника, предоставляющая полный спектр 
              услуг для вашего здоровья с заботой и вниманием.
            </p>
            
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Навигация</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Услуги</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Контакты</h3>
              <div className="space-y-3">
                {navigation.contacts.map((contact) => (
                  <div key={contact.name} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{contact.icon}</span>
                    <div>
                      <div className="font-medium text-white">{contact.name}</div>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-gray-300">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              © 2025 MedCare. Все права защищены. 
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 group">
          <div className="flex items-center gap-2">
            <span className="text-xl">📞</span>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap">
              Записаться
            </span>
          </div>
        </button>
      </div>
    </footer>
  )
}