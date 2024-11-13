"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-white font-bold">Gustavo Braz.</span>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href="#hero" className="text-white hover:text-gray-300 transition-colors">
              Início
            </Link>
            <Link href="#tech" className="text-white hover:text-gray-300 transition-colors">
              Tecnologias
            </Link>
            <Link href="#projects" className="text-white hover:text-gray-300 transition-colors">
              Projetos
            </Link>
            <Link href="#contact" className="text-white hover:text-gray-300 transition-colors">
              Contato
            </Link>
          </div>

          {/* Menu Mobile Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              <Link 
                href="#hero" 
                className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="#tech" 
                className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Tecnologias
              </Link>
              <Link 
                href="#projects" 
                className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </Link>
              <Link 
                href="#contact" 
                className="block px-3 py-2 text-white hover:bg-slate-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 