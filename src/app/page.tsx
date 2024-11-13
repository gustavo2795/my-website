"use client"
import Image from "next/image"
import React from "react"
import { Header } from "../components/ui/header"
import { TechCarousel } from "../components/ui/tech-carousel"
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card"
import MeImage from '../images/me.jpeg'

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "/projects/project1.png",
    github: "https://github.com/seu-usuario/projeto1",
  },
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "/projects/project1.png",
    github: "https://github.com/seu-usuario/projeto1",
  },
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "/projects/project1.png",
    github: "https://github.com/seu-usuario/projeto1",
  },
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: "/projects/project1.png",
    github: "https://github.com/seu-usuario/projeto1",
  },
  // Adicione mais projetos aqui
]

export default function Home() {
  return (
    <main className="gradient-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-[90vh] flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Desenvolvedor Frontend & Engenheiro de Software
            </h1>
            <p className="text-xl text-gray-300">
              Transformando ideias em experiências digitais excepcionais
            </p>
          </div>
          <div className="flex-1">
            <div className="hover-rotate-animation">
              <Image
                src={MeImage}
                alt="Minha foto"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_0_rgba(79,70,229,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section id="tech" className="min-h-[70vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Tecnologias
          </h2>
          <TechCarousel />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Projetos
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <CardContainer key={index} className="w-full">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 sm:p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl sm:text-2xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={project.image}
                      height={400}
                      width={600}
                      className="w-full h-48 sm:h-64 object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={project.title}
                    />
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-xs sm:text-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem
                    translateZ="30"
                    className="mt-4"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      View on GitHub
                    </a>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[50vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Contato
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
