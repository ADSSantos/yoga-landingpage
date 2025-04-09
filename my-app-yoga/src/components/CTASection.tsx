"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-green-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Vamos começar sua jornada no yoga?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo e entrarei em contato para agendarmos sua primeira aula
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-sm"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Nome
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="w-full"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Telefone
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              className="w-full"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Mensagem
            </label>
            <Textarea
              id="message"
              placeholder="Conte um pouco sobre você e seus objetivos com o yoga"
              className="w-full"
              rows={4}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white flex-1"
            >
              Enviar Mensagem
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
} 