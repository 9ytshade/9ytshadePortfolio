import React, { useState } from 'react';

const contactLinks = [
  {
    icon: 'fa-solid fa-phone-volume',
    label: 'Phone',
    value: '+234-814-995-6218',
    href: 'tel:+2348149956218'
  },
  {
    icon: 'fa-solid fa-envelopes-bulk',
    label: 'Email',
    value: 'flynnbright@gmail.com',
    href: 'mailto:flynnbright@gmail.com'
  },
  {
    icon: 'fa-solid fa-location-dot',
    label: 'Base',
    value: 'Uyo, Nigeria',
    href: 'https://www.google.com/maps/place/Uyo'
  },
  {
    icon: 'fa-brands fa-x-twitter',
    label: 'X / Twitter',
    value: 'x.com/9ytshade',
    href: 'https://x.com/9ytshade'
  },
  {
    icon: 'fa-brands fa-medium',
    label: 'Medium',
    value: '9ytshade.medium.com',
    href: 'https://9ytshade.medium.com/'
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ukpeflynn',
    href: 'https://www.linkedin.com/in/ukpeflynn/'
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b38fade7-91a2-4187-91b2-278fee29ff33',
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-kicker">Access</div>
        <div className="contact-layout">
          <div className="contact-copy">
            <h2 className="intro">Bring me in where clarity matters.</h2>
            <p>
              I am available for selected frontend builds, Web3 product interfaces, technical content,
              community operations, and training engagements.
            </p>
            <div className="contact--links-grid">
              {contactLinks.map((link) => (
                <a className="contact--links" href={link.href} key={link.label} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <i className={link.icon}></i>
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </div>

          <form className="contact--form" onSubmit={handleSubmit}>
            <div className="form-header">
              <span>Project Signal</span>
              <h3>Send a concise brief</h3>
            </div>
            <label className="form--group" htmlFor="form-name">
              <span>Name</span>
              <input type="text" id="form-name" name="name" className="form--control" required value={formData.name} onChange={handleChange} />
            </label>
            <label className="form--group" htmlFor="form-subject">
              <span>Subject</span>
              <input type="text" id="form-subject" name="subject" className="form--control" required value={formData.subject} onChange={handleChange} />
            </label>
            <label className="form--group" htmlFor="form-message">
              <span>Message</span>
              <textarea id="form-message" name="message" className="form--control" required value={formData.message} onChange={handleChange}></textarea>
            </label>
            <button type="submit" className={`buttons primary ${status === 'success' ? 'is-success' : ''}`} disabled={status === 'submitting'}>
              {status === 'idle' && <>Send Message <i className="fa-solid fa-paper-plane"></i></>}
              {status === 'submitting' && <>Sending <i className="fa-solid fa-spinner fa-spin"></i></>}
              {status === 'success' && <>Message Sent <i className="fa-solid fa-check"></i></>}
              {status === 'error' && <>Try Again <i className="fa-solid fa-xmark"></i></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
