"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Maria Santos",
    role: "Aluna há 2 anos",
    image: "https://img.freepik.com/fotos-gratis/foto-vertical-de-uma-feliz-mulher-de-pele-escura-com-cabelo-encaracolado_273609-15519.jpg?t=st=1744223810~exp=1744227410~hmac=4bacaf23c67a0b307981f96c1887e76c3080f029f6a737b1a33c883f90218d68&w=740",
    text: "As aulas da professora Ana transformaram minha vida. Hoje me sinto mais flexível, forte e em paz comigo mesma."
  },
  {
    name: "João Silva",
    role: "Aluno há 1 ano",
    image: "https://img.freepik.com/fotos-gratis/homem-barbudo-ruivo-expressivo_176420-32277.jpg?t=st=1744223912~exp=1744227512~hmac=67f4786d30cc53e8ac51916cb6bf174228a5c4734474b59a99b2838fd303522a&w=996",
    text: "Excelente professora! As aulas são bem estruturadas e ela tem uma atenção especial com cada aluno."
  },
  {
    name: "Carla Oliveira",
    role: "Aluna há 6 meses",
    image: "https://img.freepik.com/fotos-gratis/casal-senior-sorridente-de-vista-frontal_23-2149894077.jpg?t=st=1744223946~exp=1744227546~hmac=ec7d1c49491f8c1e3493d2bfab98546537d30bf053bc088de35c03086dcd42aa&w=740",
    text: "Comecei a praticar yoga para aliviar o estresse e encontrei muito mais do que isso. Recomendo muito!"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Depoimentos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O que nossos alunos dizem sobre as aulas
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-green-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-green-600" />
          </button>
        </div>
      </div>
    </section>
  )
} 