'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

import img1 from './../../public/1.jpg'
import img2 from './../../public/2.jpg'
import img3 from './../../public/3.jpg'
import img4 from './../../public/4.jpg'
import img5 from './../../public/5.jpg'
import img6 from './../../public/6.jpg'

export default function Doctors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const specialties = [
    'Все специалисты',
    'Терапевт',
    'Кардиолог',
    'Невролог',
    'Стоматолог',
    'Хирург',
    'Офтальмолог'
  ]

  const doctors = [
    {
      id: 1,
      name: "Иванова Анна Сергеевна",
      specialty: "Терапевт",
      experience: "15 лет",
      rating: 4.9,
      reviews: 127,
      image: img4,
      education: "Ростовский государственный медицинский университет",
      schedule: ["Пн", "Вт", "Чт", "Пт"],
      price: "1500 ₽",
      description: "Специалист высшей категории. Занимается диагностикой и лечением заболеваний внутренних органов."
    },
    {
      id: 2,
      name: "Петров Владимир Игоревич",
      specialty: "Кардиолог",
      experience: "12 лет",
      rating: 4.8,
      reviews: 89,
      image: img2,
      education: "Московская медицинская академия",
      schedule: ["Вт", "Ср", "Чт", "Сб"],
      price: "2000 ₽",
      description: "Специалист по заболеваниям сердечно-сосудистой системы. Проводит комплексную диагностику."
    },
    {
      id: 3,
      name: "Сидоров Максим Константинович",
      specialty: "Невролог",
      experience: "10 лет",
      rating: 4.9,
      reviews: 156,
      image: img6,
      education: "Санкт-Петербургский государственный медицинский университет",
      schedule: ["Пн", "Ср", "Пт", "Сб"],
      price: "1800 ₽",
      description: "Эксперт в области диагностики и лечения заболеваний нервной системы."
    },
    {
      id: 4,
      name: "Козлов Дмитрий Александрович",
      specialty: "Стоматолог",
      experience: "8 лет",
      rating: 4.7,
      reviews: 203,
      image: img1,
      education: "Казанский государственный медицинский университет",
      schedule: ["Пн", "Вт", "Ср", "Чт", "Пт"],
      price: "2200 ₽",
      description: "Стоматолог-терапевт с опытом работы в эстетической стоматологии."
    },
    {
      id: 5,
      name: "Николаев Олег Викторович",
      specialty: "Хирург",
      experience: "14 лет",
      rating: 4.8,
      reviews: 94,
      image: img5,
      education: "Новосибирский государственный медицинский университет",
      schedule: ["Пн", "Ср", "Пт"],
      price: "2500 ₽",
      description: "Опытный хирург, специализирующийся на малоинвазивных операциях."
    },
    {
      id: 6,
      name: "Орлов Сергей Михайлович",
      specialty: "Офтальмолог",
      experience: "11 лет",
      rating: 4.9,
      reviews: 112,
      image: img3,
      education: "Ростовский государственный медицинский университет",
      schedule: ["Вт", "Чт", "Сб"],
      price: "1700 ₽",
      description: "Специалист по диагностике и лечению заболеваний глаз."
    }
  ]

  const filteredDoctors = selectedSpecialty === 'all' 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty)

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor)
    setIsModalOpen(true)
  }

  const renderDoctorImage = (image) => {
    if (typeof image === 'string' && (image.startsWith('👨') || image.startsWith('👩'))) {
      return (
        <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
          {image}
        </div>
      )
    } else {
      return (
        <div className="w-20 h-20 bg-blue-100 rounded-2xl overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Image 
            src={image} 
            alt="Doctor" 
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
      )
    }
  }

  const renderModalImage = (image) => {
    if (typeof image === 'string' && (image.startsWith('👨') || image.startsWith('👩'))) {
      return (
        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
          {image}
        </div>
      )
    } else {
      return (
        <div className="w-16 h-16 bg-blue-100 rounded-xl overflow-hidden flex items-center justify-center">
          <Image 
            src={image} 
            alt="Doctor" 
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Наши врачи
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Квалифицированные специалисты с многолетним опытом работы. 
            Мы собрали лучших врачей для вашего здоровья.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty === 'Все специалисты' ? 'all' : specialty)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  (selectedSpecialty === 'all' && specialty === 'Все специалисты') ||
                  selectedSpecialty === specialty
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  {renderDoctorImage(doctor.image)}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⭐ {doctor.rating}</span>
                      <span className="text-gray-500 text-sm">({doctor.reviews} отзывов)</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed grow">{doctor.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Опыт работы:</span>
                    <span className="font-semibold text-gray-800">{doctor.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Образование:</span>
                    <span className="font-semibold text-gray-800 text-right">{doctor.education}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Прием:</span>
                    <span className="font-semibold text-gray-800">{doctor.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">График:</span>
                    <span className="font-semibold text-gray-800">{doctor.schedule.join(', ')}</span>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => handleBookAppointment(doctor)}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all cursor-pointer duration-300"
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {isModalOpen && selectedDoctor && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Запись к {selectedDoctor.specialty}</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-6 p-4 bg-blue-50 rounded-xl">
              {renderModalImage(selectedDoctor.image)}
              <div>
                <h4 className="font-semibold text-gray-800">{selectedDoctor.name}</h4>
                <p className="text-blue-600">{selectedDoctor.specialty}</p>
                <p className="text-sm text-gray-600">{selectedDoctor.price}</p>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                <input 
                  type="text" 
                  required
                  placeholder="Иван Иванов" 
                  className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+7 (___) ___-__-__" 
                  className="w-full text-gray-900 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Записаться на прием
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}