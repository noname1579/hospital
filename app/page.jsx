'use client'

import { useState, useEffect } from 'react'
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
    name: "Др. Иванова Анна Сергеевна",
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
    name: "Др. Петров Владимир Игоревич",
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
    name: "Др. Сидорова Мария Константиновна",
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
    name: "Др. Козлов Дмитрий Александрович",
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
    name: "Др. Николаева Елена Викторовна",
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
    name: "Др. Волков Артем Сергеевич",
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
    name: "Др. Орлова Ольга Дмитриевна",
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
    name: "Др. Федоров Михаил Андреевич",
    specialty: "Офтальмолог",
    experience: "9 лет",
    rating: 4.6,
    reviews: 98,
    image: "👨‍⚕️",
    schedule: ["Вт", "Чт", "Пт", "Сб"],
    price: "1600 ₽"
  }
]

const reviews = [
  {
    id: 1,
    name: "Александр Петров",
    rating: 5,
    date: "15.12.2024",
    text: "Отличная клиника! Врачи внимательные, оборудование современное. Записался через приложение без очереди.",
    doctor: "Др. Иванова А.С."
  },
  {
    id: 2,
    name: "Мария Сидорова",
    rating: 4,
    date: "14.12.2024",
    text: "Хороший сервис, но немного пришлось подождать. Доктор Петров очень профессионально все объяснил.",
    doctor: "Др. Петров В.И."
  },
  {
    id: 3,
    name: "Иван Козлов",
    rating: 5,
    date: "13.12.2024",
    text: "Лучшая поликлиника в городе! Современный подход, удобная запись онлайн, вежливый персонал.",
    doctor: "Др. Сидорова М.К."
  },
  {
    id: 4,
    name: "Екатерина Волкова",
    rating: 5,
    date: "12.12.2024",
    text: "Доктор Николаева - прекрасный педиатр! Ребенок перестал бояться врачей после визита к ней.",
    doctor: "Др. Николаева Е.В."
  },
  {
    id: 5,
    name: "Сергей Орлов",
    rating: 4,
    date: "11.12.2024",
    text: "Качественная операция, хороший послеоперационный уход. Доктор Волков - профессионал своего дела.",
    doctor: "Др. Волков А.С."
  },
  {
    id: 6,
    name: "Анна Федорова",
    rating: 5,
    date: "10.12.2024",
    text: "Очень деликатный и внимательный врач. Доктор Орлова подробно ответила на все вопросы.",
    doctor: "Др. Орлова О.Д."
  },
  {
    id: 7,
    name: "Дмитрий Николаев",
    rating: 4,
    date: "09.12.2024",
    text: "Быстро проверил зрение, выписал хорошие очки. Доктор Федоров вежлив и компетентен.",
    doctor: "Др. Федоров М.А."
  },
  {
    id: 8,
    name: "Ольга Козлова",
    rating: 5,
    date: "08.12.2024",
    text: "Отличный стоматолог! Безболезненное лечение, современное оборудование. Рекомендую!",
    doctor: "Др. Козлов Д.А."
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
            <button 
              onClick={() => setActiveTab('doctors')}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg cursor-pointer hover:shadow-xl"
            >
              Записаться на прием
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-black text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('doctors')}
              className={`px-6 py-3 font-semibold border-b-2 transition-all duration-300 ${
                activeTab === 'doctors'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Врачи и расписание
            </button>
          </div>

          {activeTab === 'doctors' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Наши специалисты</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                  <div key={doctor.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">
                        {doctor.image}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800">{doctor.name}</h3>
                        <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-yellow-500">⭐ {doctor.rating}</span>
                          <span className="text-gray-500 text-sm">({doctor.reviews} отзывов)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">Опыт работы:</span>
                        <span className="font-semibold text-gray-800">{doctor.experience}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">Прием:</span>
                        <span className="font-semibold text-gray-800">{doctor.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">График:</span>
                        <span className="font-semibold text-gray-800">{doctor.schedule.join(', ')}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleBookAppointment(doctor)}
                      className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all cursor-pointer duration-300"
                    >
                      Записаться на прием
                    </button>
                  </div>
                ))}
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