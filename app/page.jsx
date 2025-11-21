'use client'

import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('doctors')
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('ru-RU', { 
          weekday: 'short', 
          day: 'numeric', 
          month: 'short' 
        })
      })
    }
    return dates
  }

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', 
    '14:00', '15:00', '16:00', '17:00'
  ]

  const doctors = [
  {
    id: 1,
    name: "Иванова Анна Сергеевна",
    specialty: "Терапевт",
    experience: "15 лет",
    rating: 4.9,
    reviews: 127,
    image: "👩‍⚕️",
    schedule: ["Пн", "Вт", "Чт", "Пт"],
    price: "1500 ₽"
  },
  {
    id: 2,
    name: "Петров Владимир Игоревич",
    specialty: "Кардиолог",
    experience: "12 лет",
    rating: 4.8,
    reviews: 89,
    image: "👨‍⚕️",
    schedule: ["Вт", "Ср", "Чт", "Сб"],
    price: "2000 ₽"
  },
  {
    id: 3,
    name: "Сидорова Мария Константиновна",
    specialty: "Невролог",
    experience: "10 лет",
    rating: 4.9,
    reviews: 156,
    image: "👩‍⚕️",
    schedule: ["Пн", "Ср", "Пт", "Сб"],
    price: "1800 ₽"
  },
  {
    id: 4,
    name: "Козлов Дмитрий Александрович",
    specialty: "Стоматолог",
    experience: "8 лет",
    rating: 4.7,
    reviews: 203,
    image: "👨‍⚕️",
    schedule: ["Пн", "Вт", "Ср", "Чт", "Пт"],
    price: "2200 ₽"
  },
  {
    id: 5,
    name: "Николаева Елена Викторовна",
    specialty: "Педиатр",
    experience: "14 лет",
    rating: 4.9,
    reviews: 215,
    image: "👩‍⚕️",
    schedule: ["Пн", "Вт", "Ср", "Пт"],
    price: "1700 ₽"
  },
  {
    id: 6,
    name: "Волков Артем Сергеевич",
    specialty: "Хирург",
    experience: "18 лет",
    rating: 4.8,
    reviews: 167,
    image: "👨‍⚕️",
    schedule: ["Вт", "Ср", "Чт", "Пт"],
    price: "2500 ₽"
  },
  {
    id: 7,
    name: "Орлова Ольга Дмитриевна",
    specialty: "Гинеколог",
    experience: "11 лет",
    rating: 4.7,
    reviews: 142,
    image: "👩‍⚕️",
    schedule: ["Пн", "Ср", "Чт", "Сб"],
    price: "1900 ₽"
  },
  {
    id: 8,
    name: "Федоров Михаил Андреевич",
    specialty: "Офтальмолог",
    experience: "9 лет",
    rating: 4.6,
    reviews: 98,
    image: "👨‍⚕️",
    schedule: ["Вт", "Чт", "Пт", "Сб"],
    price: "1600 ₽"
  }
]

  const stats = [
    { number: "25,000+", label: "Довольных пациентов", icon: "😊" },
    { number: "15+", label: "Врачей специалистов", icon: "👨‍⚕️" },
    { number: "98%", label: "Рекомендуют клинику", icon: "⭐" },
    { number: "5-10 мин", label: "Среднее время ожидания", icon: "⏱️" }
  ]

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor)
    setIsModalOpen(true)
  }

  const handleSubmitAppointment = (e) => {
    e.preventDefault()
    alert(`Запись к ${selectedDoctor.name} на ${selectedDate} в ${selectedTime} подтверждена!`)
    setIsModalOpen(false)
    setSelectedDate('')
    setSelectedTime('')
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-blue-200 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Онлайн запись 24/7</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              MedCare
            </span>
            <br />
            <span className="text-2xl md:text-4xl font-light text-gray-700">
              Современная поликлиника
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Забота о вашем здоровье с современным подходом. Онлайн запись, 
            электронная карта и квалифицированные специалисты в одном месте.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href='doctors'
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg cursor-pointer hover:shadow-xl"
            >
              Записаться на прием
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          {(
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Современная медицина <span className="text-blue-600">для всей семьи</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    MedCare — это современная поликлиника, где сочетаются передовые медицинские 
                    технологии и индивидуальный подход к каждому пациенту. Мы создали пространство, 
                    где вам окажут квалифицированную помощь в комфортных условиях.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Высококвалифицированные специалисты</h3>
                        <p className="text-gray-600 text-sm">Врачи с опытом работы от 5 лет</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                        ⚡
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Современное оборудование</h3>
                        <p className="text-gray-600 text-sm">Диагностика и лечение по последним стандартам</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                        💻
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Цифровые решения</h3>
                        <p className="text-gray-600 text-sm">Электронная карта и онлайн-запись 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-black text-blue-600 mb-2">15+</div>
                      <div className="text-gray-700 font-medium">Медицинских направлений</div>
                    </div>
                    <div className="bg-green-50 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-black text-green-600 mb-2">98%</div>
                      <div className="text-gray-700 font-medium">Пациентов рекомендуют нас</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-purple-50 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-black text-purple-600 mb-2">10 мин</div>
                      <div className="text-gray-700 font-medium">Среднее время приема</div>
                    </div>
                    <div className="bg-orange-50 rounded-2xl p-6 text-center">
                      <div className="text-3xl font-black text-orange-600 mb-2">24/7</div>
                      <div className="text-gray-700 font-medium">Онлайн запись</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-100 rounded-2xl p-8 text-black">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl mb-3">🏥</div>
                <h3 className="font-bold text-lg mb-2">Удобное расположение</h3>
                    <p className="text-blue-900">Центр города</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🕒</div>
                    <h3 className="font-bold text-lg mb-2">Гибкий график</h3>
                    <p className="text-blue-900">Работаем с 8:00 до 21:00</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🚗</div>
                    <h3 className="font-bold text-lg mb-2">Парковка</h3>
                    <p className="text-blue-900">Бесплатная парковка для пациентов</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {isModalOpen && selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Запись на прием</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-6 p-4 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">
                {selectedDoctor.image}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{selectedDoctor.name}</h4>
                <p className="text-blue-600">{selectedDoctor.specialty}</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmitAppointment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  required
                  placeholder="Иван Иванов" 
                  className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+7 (___) ___-__-__" 
                  className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Дата приема</label>
                <div className="grid grid-cols-4 gap-2">
                  {getAvailableDates().map((dateObj) => (
                    <button
                      key={dateObj.date}
                      type="button"
                      onClick={() => setSelectedDate(dateObj.date)}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        selectedDate === dateObj.date
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                      }`}
                    >
                      {dateObj.display}
                    </button>
                  ))}
                </div>
              </div>
              
              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Время приема</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <button 
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Подтвердить запись
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}