import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    // TODO: Replace 'YOUR_FORM_ID' with your actual Formspree Form ID
    // You can get this by creating a new form at https://formspree.io
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
        // Optional: Reset status after a delay
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
              Get in Touch
            </h2>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info / Image */}
          <div className="w-full lg:w-1/3">
            <RevealOnScroll className="h-full">
              <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl h-full">
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-6">
                       <div className="flex items-start">
                          <Phone className="mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-orange-100 text-sm uppercase">Phone</p>
                            <p className="text-lg">+977 9864065482</p>
                          </div>
                       </div>
                       <div className="flex items-start">
                          <Mail className="mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-orange-100 text-sm uppercase">Email</p>
                            <p className="text-lg break-all">[email protected]</p>
                          </div>
                       </div>
                       <div className="flex items-start">
                          <MapPin className="mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-orange-100 text-sm uppercase">Address</p>
                            <p className="text-lg">Chitwan, Nepal</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Decorative Circles */}
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                 <div className="absolute top-10 -right-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
             <RevealOnScroll delay={200}>
              <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>
                
                {status === 'SUCCESS' ? (
                  <div className="bg-green-50 text-green-800 p-6 rounded-lg flex items-center justify-center flex-col text-center space-y-2 animate-fade-in">
                    <CheckCircle size={48} className="text-green-500 mb-2" />
                    <h4 className="text-xl font-bold">Message Sent!</h4>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setStatus('IDLE')}
                      className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe" 
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com" 
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4} 
                        placeholder="Write your message here..." 
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      ></textarea>
                    </div>

                    {status === 'ERROR' && (
                      <div className="flex items-center text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                        <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                        Something went wrong. Please try again later.
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={status === 'SUBMITTING'}
                      className="w-full md:w-auto inline-flex justify-center items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'SUBMITTING' ? (
                        <>
                          <Loader2 size={18} className="mr-2 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
