import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data/portfolio_data.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={close}>
          {profile.name}
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        <nav id="site-nav" className={open ? 'site-nav open' : 'site-nav'}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <Link to="/#skills" onClick={close}>Skills</Link>
          <NavLink to="/projects" onClick={close}>Projects</NavLink>
          <Link to="/#contact" onClick={close}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
