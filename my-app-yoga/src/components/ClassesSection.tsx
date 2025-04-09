"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { Button } from "@/components/ui/button"

const classes = [
  {
    title: "Aulas Presenciais",
    description: "Aulas em grupo ou individuais no estúdio",
    price: "A partir de R$ 12€",
    features: [
      "Turmas pequenas",
      "Acompanhamento personalizado",
      "Material incluso"
    ]
  },
  {
    title: "Aulas Online",
    description: "Pratique yoga no conforto da sua casa",
    price: "A partir de R$ 20€",
    features: [
      "Flexibilidade de horário",
      "Acesso às gravações",
      "Suporte via WhatsApp"
    ]
  },
  {
    title: "Yoga para Gestantes",
    description: "Aulas especiais para gestantes",
    price: "A partir de R$ 30€",
    features: [
      "Exercícios adaptados",
      "Preparação para o parto",
      "Grupo de apoio"
    ]
  }
]

export function ClassesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Nossas Aulas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos diferentes modalidades para atender às suas necessidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((yogaClass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {yogaClass.title}
              </h3>
              <p className="text-gray-600 mb-4">{yogaClass.description}</p>
              <p className="text-green-600 font-bold mb-4">{yogaClass.price}</p>
              
              <ul className="mb-6">
                {yogaClass.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Agendar Aula
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 