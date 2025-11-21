'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Reviews() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)

  const filters = [
    { id: 'all', name: 'Все отзывы' },
    { id: 'doctors', name: 'О врачах' },
    { id: 'service', name: 'О сервисе' },
    { id: 'facility', name: 'О клинике' }
  ]

  const reviews = [
    {
      id: 1,
      name: "Александр Петров",
      rating: 5,
      date: "15.12.2024",
      category: "doctors",
      text: "Отличная клиника! Врачи внимательные, оборудование современное. Записался через приложение без очереди. Доктор Иванова очень профессионально провела осмотр и назначила эффективное лечение.",
      doctor: "Иванова А.С.",
      service: "Консультация терапевта"
    },
    {
      id: 2,
      name: "Мария Сидорова",
      rating: 4,
      date: "14.12.2024",
      category: "service",
      text: "Хороший сервис, но немного пришлось подождать. Доктор Петров очень профессионально все объяснил. Администраторы вежливые, клиника чистая и уютная.",
      doctor: "Петров В.И.",
      service: "ЭКГ с расшифровкой"
    },
    {
      id: 3,
      name: "Иван Козлов",
      rating: 5,
      date: "13.12.2024",
      category: "facility",
      text: "Лучшая поликлиника в городе! Современный подход, удобная запись онлайн, вежливый персонал. Особенно порадовала электронная карта - все анализы и назначения всегда под рукой.",
      doctor: "Сидорова М.К.",
      service: "Консультация невролога"
    },
    {
      id: 4,
      name: "Елена Николаева",
      rating: 5,
      date: "12.12.2024",
      category: "doctors",
      text: "Выражаю огромную благодарность доктору Козлову! Профессионал высшего класса. Лечила зубы, все прошло абсолютно безболезненно. Теперь только к нему!",
      doctor: "Козлов Д.А.",
      service: "Лечение кариеса"
    },
    {
      id: 5,
      name: "Дмитрий Орлов",
      rating: 4,
      date: "10.12.2024",
      category: "service",
      text: "Удобное расположение, есть парковка. Записался на УЗИ, сделали быстро и качественно. Единственное - немного дороговато, но качество того стоит.",
      doctor: "Николаева Е.В.",
      service: "УЗИ брюшной полости"
    },
    {
      id: 6,
      name: "Ольга Васнецова",
      rating: 5,
      date: "08.12.2024",
      category: "facility",
      text: "Впервые в жизни получила удовольствие от посещения поликлиники! Красиво, чисто, нет толп и очередей. Персонал заботливый и внимательный. Рекомендую!",
      doctor: "Орлов С.М.",
      service: "Консультация офтальмолога"
    }
  ]

  const filteredReviews = activeFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.category === activeFilter)

  const getRatingStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating)
  }

  const handleStarClick = (rating) => {
    setSelectedRating(rating)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Отзывы пациентов
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Мнение наших пациентов - лучшая оценка качества работы. 
            Читайте реальные отзывы и делитесь своим опытом.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg transform -translate-y-0.5'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {activeFilter === 'all' ? 'Все отзывы' : filters.find(f => f.id === activeFilter)?.name}
            </h2>
            <button 
              onClick={() => setIsReviewModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>✏️</span>
              Написать отзыв
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-600 text-lg group-hover:scale-110 transition-transform duration-300">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-800 text-lg">{review.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-yellow-500 text-sm">{getRatingStars(review.rating)}</span>
                          <span className="text-gray-500 text-sm">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-sm border border-blue-100">
                        <span className="text-blue-600">👨‍⚕️</span>
                        <span className="font-medium text-blue-700">{review.doctor}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">{review.text}</p>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-blue-600 font-medium">
                        Услуга: {review.service}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {isReviewModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Написать отзыв</h3>
              <button 
                onClick={() => setIsReviewModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  required
                  placeholder="Иван Иванов" 
                  className="w-full px-4 text-gray-900 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Врач</label>
                <select className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                  <option>Выберите врача</option>
                  <option>Др. Иванова Анна Сергеевна</option>
                  <option>Др. Петров Владимир Игоревич</option>
                  <option>Др. Сидорова Мария Константиновна</option>
                  <option>Др. Козлов Дмитрий Александрович</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Оценка</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      className={`text-2xl transition-all duration-300 transform hover:scale-125 ${
                        star <= selectedRating ? 'text-yellow-500 scale-110' : 'text-gray-300'
                      }`}
                    >
                      ⭐
                    </button>
                  ))}
                </div>
                {selectedRating > 0 && (
                  <p className="text-sm text-blue-600 mt-2 font-medium">
                    Выбрано: {selectedRating} {selectedRating === 1 ? 'звезда' : selectedRating < 5 ? 'звезды' : 'звёзд'}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Текст отзыва</label>
                <textarea 
                  rows="4"
                  placeholder="Поделитесь вашими впечатлениями..."
                  className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Опубликовать отзыв
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}