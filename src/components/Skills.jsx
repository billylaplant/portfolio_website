import { skills } from '../data/portfolio_data.js'

const LEVELS = ['Familiar', 'Proficient', 'Expert']

function SkillBar({ level }) {
  const filled = LEVELS.indexOf(level) + 1
  return (
    <div className="skill-bar" aria-hidden="true">
      {LEVELS.map((_, i) => (
        <span key={i} className={i < filled ? 'skill-segment filled' : 'skill-segment'} />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="skills-legend">Level: Familiar · Proficient · Expert</p>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.group} className="card">
              <h3>{group.group}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item.name} className="skill">
                    <div className="skill-label">
                      <span className="skill-name">{item.name}</span>
                      {LEVELS.includes(item.level) && (
                        <span className="skill-level">{item.level}</span>
                      )}
                    </div>
                    {LEVELS.includes(item.level) && <SkillBar level={item.level} />}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
