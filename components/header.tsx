'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, Download, Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Fecha o menu móvel ao redimensionar para tela grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Evita rolagem da página quando o menu móvel estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="brand" href="#top" aria-label="Maurício Costa — início" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">MC</span>
          <span className="brand-name">Maurício Costa</span>
        </a>

        {/* Navegação Desktop */}
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
          <a href="/MauricioCV.pdf" download="MauricioCV.pdf">Currículo</a>
        </nav>

        <a className="nav-cta" href="mailto:mc611641@gmail.com">
          Vamos conversar <ArrowUpRight aria-hidden="true" />
        </a>

        {/* Botão Hambúrguer Mobile */}
        <button
          className="mobile-menu"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
      </div>

      {/* Menu / Drawer Mobile */}
      {isOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <nav className="mobile-nav-links" aria-label="Menu móvel">
              <a href="#sobre" onClick={() => setIsOpen(false)}>
                <span className="nav-idx">01</span> Sobre
              </a>
              <a href="#projetos" onClick={() => setIsOpen(false)}>
                <span className="nav-idx">02</span> Projetos
              </a>
              <a href="#contato" onClick={() => setIsOpen(false)}>
                <span className="nav-idx">03</span> Contato
              </a>
              <a href="/MauricioCV.pdf" download="MauricioCV.pdf" onClick={() => setIsOpen(false)}>
                <span className="nav-idx">04</span> Baixar CV <Download size={16} style={{ marginLeft: 'auto' }} />
              </a>
            </nav>

            <div className="mobile-drawer-cta">
              <a
                className="button button-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                href="mailto:mc611641@gmail.com"
                onClick={() => setIsOpen(false)}
              >
                Vamos conversar <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

