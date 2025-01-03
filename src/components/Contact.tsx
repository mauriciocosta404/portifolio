import React, { useState } from 'react';
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        'service_lrl9x8q',
        'template_tqif97k',
        {
          to_email: 'mc611641@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '0QAonOmHswydvJEci'
      );

      if (result.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-white mb-12">Get In Touch</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <FadeIn direction="left">
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-purple-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  <p className="text-gray-400">mc611641@gmail.com</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-purple-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.4}>
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-purple-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                  <p className="text-gray-400">Your City, Country</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="right">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;