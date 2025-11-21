'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contacts() {
  const [activeDepartment, setActiveDepartment] = useState('reception')

  const departments = [
    {
      id: 'reception',
      name: 'Регистратура',
      phone: '+7 (999) 111-11-11',
      email: 'reception@medcare.ru',
      hours: 'Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00',
      description: 'Запись на прием, справки, вопросы по услугам'
    },
    {
      id: 'therapy',
      name: 'Терапевтическое отделение',
      phone: '+7 (999) 222-22-22',
      email: 'therapy@medcare.ru',
      hours: 'Пн-Пт: 8:00-18:00',
      description: 'Консультации терапевтов, общие вопросы по здоровью'
    },
    {
      id: 'diagnostics',
      name: 'Диагностический центр',
      phone: '+7 (999) 333-33-33',
      email: 'diagnostics@medcare.ru',
      hours: 'Пн-Сб: 7:00-20:00',
      description: 'Запись на анализы, УЗИ, ЭКГ и другие исследования'
    },
    {
      id: 'administration',
      name: 'Администрация',
      phone: '+7 (999) 444-44-44',
      email: 'admin@medcare.ru',
      hours: 'Пн-Пт: 9:00-17:00',
      description: 'Вопросы по организации работы, жалобы и предложения'
    }
  ]

  const currentDepartment = departments.find(dept => dept.id === activeDepartment)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Контакты
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мы всегда на связи, чтобы помочь вам с вопросами о здоровье. 
            Выберите удобный способ связи и обратитесь к нам.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl text-blue-600">
                      📍
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Адрес</h4>
                      <p className="text-gray-600">
                        г. Ростов-на-Дону,<br />
                        ул. Красноармейская, 11
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl text-blue-600">
                      📞
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Телефон</h4>
                      <a href="#" className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors duration-300">
                        +7 (999) 999-99-99
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Круглосуточно</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl text-blue-600">
                      ✉️
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                        info@medcare.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl text-blue-600">
                      🕒
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Часы работы</h4>
                      <p className="text-gray-600">
                        Пн-Пт: 8:00-20:00<br />
                        Сб-Вс: 9:00-18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl">
                    🚨
                  </div>
                  <h4 className="font-bold text-blue-800 text-lg">Экстренная помощь</h4>
                </div>
                <p className="text-blue-700 mb-4 text-sm">
                  При острой боли, травмах и других неотложных состояниях
                </p>
                <a 
                  href="#" 
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
                >
                  103 (Скорая помощь)
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Отделения и телефоны</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setActiveDepartment(dept.id)}
                      className={`p-4 rounded-xl text-left transition-all duration-300 ${
                        activeDepartment === dept.id
                          ? 'bg-blue-100 border-2 border-blue-500 shadow-md'
                          : 'bg-gray-50 border-2 border-transparent hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      <h4 className="font-semibold text-gray-800 mb-1">{dept.name}</h4>
                      <p className="text-sm text-gray-600">{dept.description}</p>
                    </button>
                  ))}
                </div>

                {currentDepartment && (
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-3">{currentDepartment.name}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Телефон:</span>
                        <a href='#' className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300">
                          {currentDepartment.phone}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <a href={`mailto:${currentDepartment.email}`} className="font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300">
                          {currentDepartment.email}
                        </a>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Часы работы:</span>
                        <span className="font-semibold text-gray-800">{currentDepartment.hours}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Обратная связь</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                      <input 
                        type="text" 
                        placeholder="Иван Иванов" 
                        className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com" 
                      className="w-full px-4 py-3 border text-gray-900 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Отделение</label>
                    <select className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                      <option>Выберите отделение</option>
                      {departments.map((dept) => (
                        <option className='text-gray-900' key={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                    <textarea 
                      rows="4"
                      placeholder="Опишите ваш вопрос или проблему..."
                      className="w-full px-4 py-3 border text-gray-900 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}