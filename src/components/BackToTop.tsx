import { useState, useEffect } from 'react'

const SCROLL_SEL = '[data-scroll-container]'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = document.querySelector(SCROLL_SEL)
    if (!el) return
    const onScroll = () => setShow(el.scrollTop > 400)
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => {
        const el = document.querySelector(SCROLL_SEL)
        if (el) el.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      style={{
        position: 'fixed', bottom: 32, right: 32,
        width: 44, height: 44, borderRadius: '50%',
        background: 'var(--primary)', color: '#fff',
        border: 'none', cursor: 'pointer', fontSize: 20,
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform .15s',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      title="返回顶部"
    >
      ↑
    </button>
  )
}
