import { profile } from '../data/portfolio_data.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} {profile.name}</p>
      </div>
    </footer>
  )
}
