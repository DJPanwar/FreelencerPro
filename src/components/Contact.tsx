import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   if (validate()) {
  //     setIsSubmitting(true);
      
  //     // Simulate form submission
  //     setTimeout(() => {
  //       setIsSubmitting(false);
  //       setSubmitSuccess(true);
  //       setFormData({
  //         name: '',
  //         email: '',
  //         subject: '',
  //         message: ''
  //       });
        
  //       // Reset success message after 5 seconds
  //       setTimeout(() => {
  //         setSubmitSuccess(false);
  //       }, 5000);
  //     }, 1500);
  //   }
  // };
  
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!validate()) return;
  
    setIsSubmitting(true);
  
    const submissionData = {
      access_key: "6829fa1f-c9be-44fa-8b9e-4357a63aff86", // your Web3Forms access key
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(submissionData)
      });
  
      const result = await response.json();
  
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
  
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-64 h-64 rounded-full bg-emerald-700 blur-3xl top-1/4 right-1/4"></div>
        <div className="absolute w-72 h-72 rounded-full bg-emerald-500 blur-3xl bottom-1/4 left-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss how I can help your business? Reach out to me using any of the methods below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-3 rounded-full mr-4">
                    <Mail className="text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300 break-all">freelencerpro@gmail.com</p>
                    <a href="mailto:hello@freelancepro.com" className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 inline-block mt-2">
                      Send an email
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-3 rounded-full mr-4">
                    <Phone className="text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+91 9521723305</p>
                    <a href="tel:+15551234567" className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 inline-block mt-2">
                      Call me
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="bg-emerald-500/20 p-3 rounded-full mr-4">
                    <MapPin className="text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                    <p className="text-gray-400 text-sm mt-2">Available for remote work worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>
              
              {submitSuccess && (
                <div className="bg-emerald-500/20 text-emerald-400 rounded-lg p-4 mb-6 flex items-center">
                  <div className="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>Your message has been sent! I'll get back to you as soon as possible.</p>
                </div>
              )}
              
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Your Name
                    </label>
                    <div className={`relative ${errors.name ? 'mb-8' : 'mb-0'}`}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 border ${
                          errors.name ? 'border-red-500' : 'border-gray-700'
                        } rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:border-emerald-500 transition-colors duration-300`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="absolute text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Your Email
                    </label>
                    <div className={`relative ${errors.email ? 'mb-8' : 'mb-0'}`}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-gray-800 border ${
                          errors.email ? 'border-red-500' : 'border-gray-700'
                        } rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:border-emerald-500 transition-colors duration-300`}
                        placeholder="john@gmail.com"
                      />
                      {errors.email && (
                        <p className="absolute text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle size={14} className="mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject
                  </label>
                  <div className={`relative ${errors.subject ? 'mb-8' : 'mb-0'}`}>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full bg-gray-800 border ${
                        errors.subject ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:border-emerald-500 transition-colors duration-300`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && (
                      <p className="absolute text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <div className={`relative ${errors.message ? 'mb-8' : 'mb-0'}`}>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full bg-gray-800 border ${
                        errors.message ? 'border-red-500' : 'border-gray-700'
                      } rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:border-emerald-500 transition-colors duration-300`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {errors.message && (
                      <p className="absolute text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle size={14} className="mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  className={`px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 font-medium flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;