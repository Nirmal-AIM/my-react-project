import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    createConfetti();
    setTimeout(() => {
      setShowSuccess(false);
      clearConfetti();
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const createConfetti = () => {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    
    container.innerHTML = '';
    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(confetti);
    }
  };

  const clearConfetti = () => {
    const container = document.getElementById('confettiContainer');
    if (container) {
      container.innerHTML = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Contact Us
        </h1>

        <div className="flex flex-wrap gap-8">
          {/* Address Section */}
          <div className="flex-1 min-w-[300px] bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Contact Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Address:</p>
                  <p className="text-gray-600">A.A.N.M. & V.V.R.S.R. Polytechnic,</p>
                  <p className="text-gray-600">Seshadri Rao Knowledge Village, Gudlavalleru,</p>
                  <p className="text-gray-600">Krishna District, Andhra Pradesh - 521356</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold mb-2">Email:</p>
                  <a href="mailto:poly.gvl@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    poly.gvl@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold mb-2">Phone:</p>
                  <a href="tel:9912342030" className="text-blue-600 hover:text-blue-800 transition-colors">
                    9912342030
                  </a>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-xl font-bold text-blue-600 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-[2] min-w-[300px] bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your Message*"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-200"
              >
                Send Message
              </button>
            </form>

            {/* Success Message */}
            <div
              className={`fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded transition-all duration-500 ${
                showSuccess ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
              }`}
            >
              Message sent successfully! We'll get back to you soon.
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Find Us Here</h2>
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4240.795686798177!2d81.04164624765164!3d16.35085566825951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a361d8f3e77a1a7%3A0xe2aa990af93b5807!2sAANM%20%26%20VVRSR%20POLYTECHNIC%2C%20GUDLAVALLERU!5e1!3m2!1sen!2sin!4v1737902715226!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Confetti Container */}
      <div
        id="confettiContainer"
        className="fixed inset-0 pointer-events-none z-50"
      />

      <style jsx>{`
        .confetti {
          position: absolute;
          width: 10px;
          height: 20px;
          animation: confetti-fall 3s ease-in-out infinite;
        }

        @keyframes confetti-fall {
          0% {
            transform: rotate(0deg) translateY(0);
            opacity: 1;
          }
          100% {
            transform: rotate(360deg) translateY(100vh);
            opacity: 0;
          }
        }

        .confetti:nth-child(8n + 1) { background-color: #FF5733; }
        .confetti:nth-child(8n + 2) { background-color: #FFC300; }
        .confetti:nth-child(8n + 3) { background-color: #DAF7A6; }
        .confetti:nth-child(8n + 4) { background-color: #28B463; }
        .confetti:nth-child(8n + 5) { background-color: #5DADE2; }
        .confetti:nth-child(8n + 6) { background-color: #AF7AC5; }
        .confetti:nth-child(8n + 7) { background-color: #F39C12; }
        .confetti:nth-child(8n + 8) { background-color: #F1948A; }
      `}</style>
    </div>
  );
};

export default Contact;