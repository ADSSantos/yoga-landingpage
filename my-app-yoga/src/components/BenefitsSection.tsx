"use client"

import { motion } from "framer-motion"
import { Heart, Zap, Moon, Activity } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Bem-estar",
    description: "Melhora a saúde física e mental, promovendo equilíbrio emocional"
  },
  {
    icon: Zap,
    title: "Energia",
    description: "Aumenta os níveis de energia e vitalidade no dia a dia"
  },
  {
    icon: Moon,
    title: "Sono",
    description: "Ajuda a melhorar a qualidade do sono e reduzir a insônia"
  },
  {
    icon: Activity,
    title: "Flexibilidade",
    description: "Desenvolve flexibilidade, força e consciência corporal"
  }
]

export function BenefitsSection() {
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
            Por que praticar yoga?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra os inúmeros benefícios que o yoga pode trazer para sua vida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 