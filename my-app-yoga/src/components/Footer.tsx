import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

const footerLinks = [
  {
    title: "Links Úteis",
    links: [
      { label: "Início", href: "/" },
      { label: "Sobre", href: "/#sobre" },
      { label: "Aulas", href: "/#aulas" },
      { label: "Contato", href: "/#contato" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de Uso", href: "/termos" },
      { label: "Política de Privacidade", href: "/privacidade" }
    ]
  }
]

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/yoga.professora",
    label: "Instagram"
  },
  {
    icon: Facebook,
    href: "https://facebook.com/yoga.professora",
    label: "Facebook"
  },
  {
    icon: Youtube,
    href: "https://youtube.com/yoga.professora",
    label: "YouTube"
  }
]

export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Yoga com Ana Silva</h3>
            <p className="text-green-200">
              Encontre equilíbrio e paz interior através do yoga. Aulas presenciais e online para todos os níveis.
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-green-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-green-700">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-200 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <p className="text-green-200 text-sm">
            © {new Date().getFullYear()} Yoga com Ana Silva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 