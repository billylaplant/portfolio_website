import { skills } from '../data/portfolio_data.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.group} className="card">
              <h3>{group.group}</h3>
              <ul className="tag-list">
                {group.items.map((item, i) => (
                  <li key={i} className="tag">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
