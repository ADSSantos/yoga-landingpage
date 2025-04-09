"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const galleryItems = [
  {
    type: "image",
    src: "https://img.freepik.com/fotos-gratis/mulher-senior-fazendo-ioga-em-casa_23-2149260225.jpg?t=st=1744222642~exp=1744226242~hmac=cbc8e9fd038b3a9a9c725f65c27633e8a007a544e39f587580633b355d52c31d&w=740",
    alt: "Aula de yoga em grupo"
  },
  {
    type: "image",
    src: "https://img.freepik.com/fotos-gratis/mulheres-idosas-fazendo-exercicios-em-casa-juntos_23-2149260244.jpg?t=st=1744223460~exp=1744227060~hmac=e0732141affeb7eed60aed9e9bfc27feba94bfd5ef5123a7aa24b8db78ce80f4&w=996",
    alt: "Pose de yoga"
  },

  {
    type: "image",
    src: "https://img.freepik.com/fotos-gratis/homem-com-os-olhos-fechados-praticando-ioga_23-2148282882.jpg?t=st=1744223518~exp=1744227118~hmac=22f3d98d0d7745f1b7520f5fc35b9e256760cb225db8f3e2fda7225aa00ea139&w=740",
    alt: "Meditação em grupo"
  },{
    type: "video",
    src: "/yoga-video.mp4",
    alt: "Vídeo de aula de yoga"
  },
]

export function GallerySection() {
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
            Galeria
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Momentos especiais das nossas aulas e práticas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  controls
                />
              )}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 