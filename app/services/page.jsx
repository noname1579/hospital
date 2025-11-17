'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'Все услуги',
    'Терапия',
    'Кардиология',
    'Неврология',
    'Стоматология',
    'Диагностика',
    'Хирургия'
  ]

  const services = [
    {
      id: 1,
      name: "Консультация терапевта",
      category: "Терапия",
      price: "1500 ₽",
      duration: "30 мин",
      description: "Первичный осмотр и консультация врача-терапевта",
      features: ["Осмотр пациента", "Сбор анамнеза", "Назначение анализов", "Рекомендации по лечению"],
      popular: true
    },
    {
      id: 2,
      name: "ЭКГ с расшифровкой",
      category: "Кардиология",
      price: "1200 ₽",
      duration: "20 мин",
      description: "Электрокардиограмма с полной расшифровкой результатов",
      features: ["Запись ЭКГ", "Анализ кардиолога", "Письменное заключение", "Рекомендации"],
      popular: true
    },
    {
      id: 3,
      name: "УЗИ брюшной полости",
      category: "Диагностика",
      price: "2500 ₽",
      duration: "40 мин",
      description: "Ультразвуковое исследование органов брюшной полости",
      features: ["Исследование печени", "Исследование почек", "Исследование поджелудочной", "Заключение врача"],
      popular: false
    },
    {
      id: 4,
      name: "Консультация невролога",
      category: "Неврология",
      price: "1800 ₽",
      duration: "40 мин",
      description: "Осмотр и консультация врача-невролога",
      features: ["Неврологический осмотр", "Проверка рефлексов", "Постановка диагноза", "Назначение лечения"],
      popular: true
    },
    {
      id: 5,
      name: "Профессиональная чистка зубов",
      category: "Стоматология",
      price: "3000 ₽",
      duration: "60 мин",
      description: "Комплексная профессиональная гигиена полости рта",
      features: ["Снятие зубного камня", "Удаление налета", "Полировка зубов", "Фторирование"],
      popular: false
    },
    {
      id: 6,
      name: "Хирургическая консультация",
      category: "Хирургия",
      price: "2000 ₽",
      duration: "30 мин",
      description: "Консультация врача-хирурга с осмотром",
      features: ["Осмотр хирурга", "Оценка состояния", "Рекомендации", "План лечения"],
      popular: false
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Наши услуги
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Полный спектр медицинских услуг для всей семьи. 
            Современное оборудование и индивидуальный подход к каждому пациенту.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'Все услуги' ? 'all' : category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  (selectedCategory === 'all' && category === 'Все услуги') ||
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg transform -translate-y-0.5'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300 group ${
                service.popular ? 'border-blue-300 relative' : 'border-gray-100'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Популярно
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Категория:</span>
                    <span className="font-semibold text-blue-600">{service.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Стоимость:</span>
                    <span className="font-semibold text-gray-800">{service.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Длительность:</span>
                    <span className="font-semibold text-gray-800">{service.duration}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Включает:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-blue-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Записаться
                  </button>
                  <button className="px-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:shadow-md">
                    ℹ️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-800 mb-6">
                Почему выбирают наши услуги?
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: "🎯", title: "Точная диагностика", text: "Современное оборудование для точной постановки диагноза" },
                  { icon: "👨‍⚕️", title: "Опытные врачи", text: "Квалифицированные специалисты с многолетним опытом" },
                  { icon: "💻", title: "Электронная карта", text: "Удобный доступ к истории болезни и результатам анализов" },
                  { icon: "🕒", title: "Без очередей", text: "Четкая организация записи и минимальное время ожидания" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:border-blue-200 border border-transparent">
                    <div className="text-2xl text-blue-500 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Нужна консультация?</h3>
              <p className="text-gray-800 mb-6">
                Не знаете, какая услуга вам подходит? Оставьте заявку, и наш специалист свяжется с вами для бесплатной консультации.
              </p>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
                <textarea 
                  placeholder="Опишите вашу проблему" 
                  rows="4"
                  className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                ></textarea>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Получить консультацию
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}