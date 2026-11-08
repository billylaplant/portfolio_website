import ProjectCard from '../components/ProjectCard.jsx'
import { projects, awards } from '../data/portfolio_data.js'

export default function ProjectsPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="page-title">Projects</h1>
          <p className="page-intro">A selection of things I've built.</p>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Awards</h2>
          <ul className="awards-list">
            {awards.map((award, i) => (
              <li key={i} className="card award">
                <div>
                  <h3>{award.title}</h3>
                  <p>{award.issuer}</p>
                </div>
                <span className="award-year">{award.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
