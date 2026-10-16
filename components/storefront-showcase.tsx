'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, Minus, Plus, Search, ShoppingBag, Sparkles, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fashionProducts = [
  { name: 'Camiseta Niebla', detail: 'Algodón pesado · Negro', price: '$1,280', image: '/product-still-life.png' },
  { name: 'Pantalón Ruta', detail: 'Lona encerada · Carbón', price: '$2,950', image: '/fashion-campaign.png' },
  { name: 'Chamarra Distrito', detail: 'Nylon técnico · Crudo', price: '$4,800', image: '/product-still-life.png' },
]

function Header({ tenant, setTenant }: { tenant: 'fashion' | 'jewelry'; setTenant: (value: 'fashion' | 'jewelry') => void }) {
  return (
    <header className="site-header">
      <div className="announcement">Envío asegurado sin costo en compras mayores a $2,500 <span>·</span> CDMX / MX</div>
      <div className="nav-wrap">
        <Button variant="ghost" size="icon" className="mobile-menu" aria-label="Abrir menú"><Menu /></Button>
        <a className="wordmark" href="#inicio" aria-label="Casa Norte inicio">CASA NORTE</a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#coleccion">Colección</a><a href="#historia">La casa</a><a href="#ayuda">Ayuda</a>
        </nav>
        <div className="nav-actions">
          <button className="tenant-switch" onClick={() => setTenant(tenant === 'fashion' ? 'jewelry' : 'fashion')} aria-label="Cambiar experiencia">
            <span className={tenant === 'fashion' ? 'active' : ''}>Ropa</span><span>/</span><span className={tenant === 'jewelry' ? 'active' : ''}>Joyería</span>
          </button>
          <button className="icon-button" aria-label="Buscar"><Search /></button>
          <button className="bag-button" aria-label="Bolsa de compra"><ShoppingBag /><span>0</span></button>
        </div>
      </div>
    </header>
  )
}

function FashionExperience() {
  const [quickView, setQuickView] = useState<number | null>(null)
  return <div className="fashion-theme">
    <section className="fashion-hero" id="inicio">
      <div className="hero-copy"><p className="eyebrow">Otoño / Invierno 2026</p><h1>Vestir<br /><em>sin permiso.</em></h1><p className="hero-description">Uniformes para moverse distinto. Diseñados en México, construidos para durar.</p><a className="arrow-link" href="#coleccion">Ver colección <ArrowUpRight /></a></div>
      <div className="hero-image"><Image src="/fashion-campaign.png" alt="Modelo con prendas negras y crudas de Casa Norte" fill priority sizes="(max-width: 768px) 100vw, 58vw" /></div>
      <div className="hero-index">01 <span>/</span> 03</div>
    </section>
    <div className="marquee" aria-label="Manifiesto Casa Norte"><div>HECHO PARA EL MOVIMIENTO <span>✳</span> HECHO EN MÉXICO <span>✳</span> SIN TEMPORADA <span>✳</span> HECHO PARA EL MOVIMIENTO <span>✳</span></div></div>
    <section className="lookbook section-pad" id="coleccion"><div className="section-heading"><div><p className="eyebrow">Selección 01</p><h2>El uniforme<br /><i>de todos los días.</i></h2></div><a className="text-link" href="#productos">Explorar todo <ArrowUpRight /></a></div>
      <div className="product-scroller">{fashionProducts.map((product, index) => <article className="product-card" key={product.name} onMouseEnter={() => setQuickView(index)} onMouseLeave={() => setQuickView(null)}><div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 75vw, 30vw" />{quickView === index && <button className="quick-view" onClick={() => setQuickView(index)}>Vista rápida <ArrowUpRight /></button>}</div><div className="product-meta"><div><h3>{product.name}</h3><p>{product.detail}</p></div><span>{product.price}</span></div></article>)}</div>
    </section>
    <section className="category-grid section-pad"><div className="category-label"><p className="eyebrow">Por forma</p><p className="category-note">Una paleta precisa.<br />Una silueta libre.</p></div><a className="category-tile category-dark" href="#productos"><span>01 / Overshirts</span><strong>Capas<br /><i>abiertas.</i></strong><ArrowUpRight /></a><a className="category-tile category-paper" href="#productos"><span>02 / Pantalones</span><strong>El peso<br /><i>correcto.</i></strong><ArrowUpRight /></a></section>
    <section className="shop-panel section-pad" id="productos"><div><p className="eyebrow">Compra por criterio</p><h2>Menos ruido.<br /><i>Más intención.</i></h2></div><div className="filter-list"><button>Temperatura <ChevronDown /></button><button>Material <ChevronDown /></button><button>Corte <ChevronDown /></button><button>Guía de tallas <ArrowUpRight /></button></div></section>
  </div>
}

function JewelryExperience() {
  return <div className="jewelry-theme"><section className="jewelry-hero" id="inicio"><div className="jewelry-hero-copy"><p className="eyebrow">Casa Norte / Alta joyería</p><h1>Lo que permanece<br /><i>habla bajo.</i></h1><p>Objetos de memoria, hechos a mano en talleres mexicanos. Oro, piedras y tiempo.</p><a className="gold-link" href="#joyeria">Descubrir la colección <ArrowUpRight /></a></div><Image src="/jewelry-campaign.png" alt="Anillo de oro y perla sobre piedra negra" fill priority sizes="100vw" /></section><section className="jewelry-spotlight section-pad" id="joyeria"><div className="spotlight-copy"><p className="eyebrow">Pieza 01 / 06</p><h2>Signo<br /><i>de origen.</i></h2><p>Un anillo para llevar cerca. Oro de 18k, perla de río y una forma que no necesita explicación.</p><div className="price-line"><span>$18,900 MXN</span><button className="gold-link">Ver pieza <ArrowUpRight /></button></div></div><div id="jewelry-viewer" aria-label="Visor de producto 3D pendiente de cargar"></div></section><section className="craftsmanship section-pad" id="historia"><div className="craft-image"><Image src="/product-still-life.png" alt="Detalle de material y textura de Casa Norte" fill sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="craft-copy"><p className="eyebrow">El oficio</p><h2>La mano<br /><i>deja huella.</i></h2><p>Cada pieza se funde, pule y termina una a una. No buscamos la perfección industrial, sino la marca exacta de quien la hizo.</p><a className="gold-link" href="#ayuda">Conocer el proceso <ArrowUpRight /></a></div></section><div className="trust-strip"><span><Sparkles /> Oro certificado</span><span>GIA / <i>Autenticidad garantizada</i></span><span>Entrega asegurada</span></div></div>
}

function CheckoutPreview({ tenant }: { tenant: 'fashion' | 'jewelry' }) { const dark = tenant === 'jewelry'; return <section className={`checkout-preview ${dark ? 'checkout-dark' : ''}`} id="ayuda"><div className="checkout-head"><p className="eyebrow">Tu bolsa</p><span className="timer">15:00 reservados</span></div><div className="checkout-steps"><span className="current">01 Envío</span><span>02 Pago</span><span>03 Revisión</span></div><div className="checkout-body"><div className="checkout-form"><h3>¿A dónde lo enviamos?</h3><div className="form-grid"><label>Nombre completo<input placeholder="Tu nombre" /></label><label>Correo electrónico<input placeholder="nombre@correo.com" /></label><label className="wide">Dirección<input placeholder="Calle, número y colonia" /></label></div><Button className="checkout-continue">Continuar <ArrowUpRight /></Button></div><aside className="order-summary"><p className="eyebrow">Resumen</p><div className="summary-line"><span>Tu bolsa está vacía</span><span>$0</span></div><div className="summary-total"><span>Total</span><strong>$0 MXN</strong></div></aside></div></section> }

export default function StorefrontShowcase() { const [tenant, setTenant] = useState<'fashion' | 'jewelry'>('fashion'); return <main className={tenant === 'jewelry' ? 'site jewelry-site' : 'site'}><Header tenant={tenant} setTenant={setTenant} />{tenant === 'fashion' ? <FashionExperience /> : <JewelryExperience />}<CheckoutPreview tenant={tenant} /><footer><span>CASA NORTE</span><span>© 2026 / Ciudad de México</span><span>Instagram / Contacto</span></footer></main> }
