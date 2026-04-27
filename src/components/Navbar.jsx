import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/distributor', label: 'Distributor' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#0D1F3C] border-b border-[#C9A84C]/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="font-['Playfair_Display'] text-xl font-bold text-white tracking-wide" onClick={() => setOpen(false)}>
          Finpeaks<span className="text-[#C9A84C]">Wealth</span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium pb-1 border-b-2 transition-colors ${
                  isActive
                    ? 'text-white border-[#C9A84C]'
                    : 'text-white/70 border-transparent hover:text-white hover:border-white/30'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0D1F3C] border-t border-[#C9A84C]/20 px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-[#C9A84C]' : 'text-white/75 hover:text-white'}`
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
