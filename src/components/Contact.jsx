import { contact } from '../data/portfolio_data.js'

export default function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container contact">
        <h2 className="section-title">Contact</h2>
        <p>I'm open to new opportunities and conversations. The best way to reach me is by email.</p>
        <a href={`mailto:${contact.email}`} className="button">{contact.email}</a>
        <ul className="contact-links">
          {contact.links.map((link) => (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
