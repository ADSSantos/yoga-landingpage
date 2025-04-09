"use client"

import { motion } from "framer-motion"


export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
          src="https://img.freepik.com/fotos-premium/encontrando-paz-dentro-de-mim-foto-recortada-de-uma-mulher-irreconhecivel-meditando-sozinha-em-um-estudio-de-ioga_590464-61207.jpg?w=996"
          alt="Professora de Yoga"
          className="w-full h-full object-cover"
        />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Sobre Mim</h2>
            <p className="text-gray-600 mb-4">
              Sou uma professora de yoga certificada com mais de 10 anos de experiência. 
              Minha jornada no yoga começou como uma busca pessoal por equilíbrio e 
              bem-estar, e hoje compartilho essa paixão com meus alunos.
            </p>
            <p className="text-gray-600 mb-4">
              Formada em Hatha Yoga e Vinyasa Flow, acredito que o yoga é uma 
              ferramenta poderosa para transformar vidas, promovendo não apenas 
              saúde física, mas também mental e emocional.
            </p>
            <p className="text-gray-600">
              Minha missão é ajudar as pessoas a encontrarem seu próprio caminho 
              para o bem-estar através de práticas acessíveis e personalizadas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 