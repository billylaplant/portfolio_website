import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio_data.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className={profile.photo ? 'container hero-inner has-photo' : 'container hero-inner'}>
        <div className="hero-text">
          <p className="eyebrow">Hello, I'm</p>
          <h1>{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-bio">{profile.bio}</p>
          <div className="hero-actions">
            <Link to="/projects" className="button">View my work</Link>
            <Link to="/#contact" className="button button-outline">Get in touch</Link>
            {profile.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                Resume
              </a>
            )}
          </div>
        </div>
        {profile.photo && (
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            className="hero-photo"
            width="360"
            height="360"
            fetchPriority="high"
          />
        )}
      </div>
    </section>
  )
}
