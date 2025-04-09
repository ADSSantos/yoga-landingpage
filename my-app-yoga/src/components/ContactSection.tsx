"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    content: "(11) 99999-9999",
    link: "tel:+5511999999999"
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@yoga.com.br",
    link: "mailto:contato@yoga.com.br"
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua das Flores, 123 - São Paulo, SP",
    link: "https://maps.google.com"
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@yoga.professora",
    link: "https://instagram.com/yoga.professora"
  }
]

export function ContactSection() {
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
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estou à disposição para tirar suas dúvidas e agendar sua primeira aula
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 p-6 rounded-lg text-center"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {item.content}
              </p>
              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Entrar em Contato
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 