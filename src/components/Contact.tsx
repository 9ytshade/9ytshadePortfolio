import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // NOTE: Replace "YOUR_ACCESS_KEY_HERE" with your free Web3Forms access key
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
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="row padding-15">
          <div className="section-title">
            <h2 className="intro">Contact Me</h2>
          </div>
        </div>
        <h3 className="contacts--subheading padding-15">Reach out to me anytime you need my services!</h3>
        <div className="row padding-30">
          <div className="contact--links">
            <div className="icon"><i className="fa-solid fa-phone-volume"></i></div>
            <h4>Call Us On</h4>
            <a href="tel:+2348149956218">+234-814-995-6218</a>
          </div>
          <div className="contact--links">
            <div className="icon"><i className="fa-solid fa-envelopes-bulk"></i></div>
            <h4>Email</h4>
            <a href="mailto:flynnbright@gmail.com">flynnbright@gmail.com</a>
          </div>
          <div className="contact--links">
            <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
            <h4>Office</h4>
            <a href="#">Uyo, Nigeria</a>
          </div>
          <div className="contact--links">
            <div className="icon"><i className="fa-solid fa-globe"></i></div>
            <h4>Website</h4>
            <a href="https://x.com/9ytshade" target="_blank" rel="noopener noreferrer">x.com/9ytshade</a>
          </div>
        </div>
        <h3 className="contacts--subheading padding-15">Send Me An Email</h3>
        <div className="row">
          <form className="contact--form padding-15" onSubmit={handleSubmit}>
            <div className="row">
              <div className="form--input col-12 padding-15">
                <div className="form--group">
                  <input type="text" id="form-name" name="name" className="form--control" placeholder="Name" required value={formData.name} onChange={handleChange} />
                </div>
              </div>
              <div className="form--input col-12 padding-15">
                <div className="form--group">
                  <input type="email" id="form-email" name="email" className="form--control" placeholder="Email" required value={formData.email} onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form--input col-24 padding-15">
                <div className="form--group">
                  <input type="text" id="form-subject" name="subject" className="form--control" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form--input col-24 padding-15">
                <div className="form--group">
                  <textarea id="form-message" name="message" className="form--control" placeholder="Message" required value={formData.message} onChange={handleChange}></textarea>
                </div>
              </div>
            </div>
            <div className="row padding-15">
              <button type="submit" className="buttons" disabled={status === 'submitting'} style={{ border: 'none', background: status === 'success' ? '#589D67' : '' }}>
                {status === 'idle' && <>Send Email &nbsp; <i className="fa-solid fa-paper-plane"></i></>}
                {status === 'submitting' && <>Sending... &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></>}
                {status === 'success' && <>Message Sent! &nbsp; <i className="fa-solid fa-check"></i></>}
                {status === 'error' && <>Error Sending &nbsp; <i className="fa-solid fa-xmark"></i></>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
