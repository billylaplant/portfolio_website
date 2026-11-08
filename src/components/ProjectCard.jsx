export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tag-list">
        {project.tags.map((tag, i) => (
          <li key={i} className="tag">{tag}</li>
        ))}
      </ul>
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" className="card-link">
          View project →
        </a>
      )}
    </article>
  )
}
