"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  CheckCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "support@admissioncampus.in",
      subContent: "We'll respond within 24 hours",
      color: "bg-[#EFEBE0] text-[#3B82F6]",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subContent: "Mon-Fri 9am-6pm EST",
      color: "bg-[#EFEBE0] text-[#FFB703]",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Education Street",
      subContent: "New York, NY 10001",
      color: "bg-[#EFEBE0] text-[#3B82F6]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2D2D2D]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EFEBE0] via-[#F9F7F2] to-[#EFEBE0] pt-24 pb-16 px-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFB703]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFEBE0] rounded-full mb-6">
            <MessageSquare className="w-5 h-5 text-[#3B82F6]" />
            <span className="text-sm font-semibold text-[#2D2D2D]">Get in Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            We'd Love to{" "}
            <span className="text-[#3B82F6] italic">Hear from You</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#2D2D2D]/80 max-w-3xl mx-auto leading-relaxed">
            Have questions? Need support? We're here to help. Reach out to us and 
            we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-6 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-[#EFEBE0] rounded-2xl p-6 border border-transparent hover:border-[#EFEBE0] hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${info.color}`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-2">
                  {info.title}
                </h3>
                <p className="text-[#2D2D2D] font-semibold mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-[#2D2D2D]/70">
                  {info.subContent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 bg-[#F9F7F2]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFEBE0] rounded-full mb-6">
                <Clock className="w-5 h-5 text-[#3B82F6]" />
                <span className="text-sm font-semibold text-[#2D2D2D]">Response Time</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                Send Us a{" "}
                <span className="text-[#3B82F6]">Message</span>
              </h2>
              
              <p className="text-lg text-[#2D2D2D]/80 mb-8 leading-relaxed">
                Fill out the form and we'll get back to you within 24 hours. 
                For urgent inquiries, please call us directly.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#3B82F6] rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D] mb-1">Quick Response</h4>
                    <p className="text-sm text-[#2D2D2D]/70">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#FFB703] rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D] mb-1">Expert Support</h4>
                    <p className="text-sm text-[#2D2D2D]/70">
                      Our team of education experts is ready to assist you.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#3B82F6] rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D] mb-1">Privacy Protected</h4>
                    <p className="text-sm text-[#2D2D2D]/70">
                      Your information is secure and will never be shared.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#EFEBE0] rounded-3xl p-8 md:p-10 shadow-xl border border-[#EFEBE0]">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#3B82F6] rounded-full mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#2D2D2D]/70">
                    We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-[#EFEBE0] rounded-lg focus:ring-2 focus:ring-[#FFB703] focus:outline-none bg-[#F9F7F2] text-[#2D2D2D] placeholder:text-[#2D2D2D]/50 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-[#EFEBE0] rounded-lg focus:ring-2 focus:ring-[#FFB703] focus:outline-none bg-[#F9F7F2] text-[#2D2D2D] placeholder:text-[#2D2D2D]/50 transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#EFEBE0] rounded-lg focus:ring-2 focus:ring-[#FFB703] focus:outline-none bg-[#F9F7F2] text-[#2D2D2D] transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="admission">Admission Support</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2D2D2D] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 border border-[#EFEBE0] rounded-lg focus:ring-2 focus:ring-[#FFB703] focus:outline-none bg-[#F9F7F2] text-[#2D2D2D] placeholder:text-[#2D2D2D]/50 resize-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#3B82F6] to-[#3B82F6] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-xs text-[#2D2D2D]/60 text-center">
                    * Required fields
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#EFEBE0] to-[#F9F7F2]">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold mb-4 text-[#2D2D2D]">
            Prefer to Connect Differently?
          </h3>
          <p className="text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto mb-8">
            We're available through multiple channels. Choose what works best for you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@key2global.com"
              className="px-6 py-3 bg-[#F9F7F2] text-[#2D2D2D] font-semibold rounded-xl hover:bg-[#EFEBE0] transition-all border border-[#EFEBE0] flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Support
            </a>
            <a
              href="tel:+15551234567"
              className="px-6 py-3 bg-[#F9F7F2] text-[#2D2D2D] font-semibold rounded-xl hover:bg-[#EFEBE0] transition-all border border-[#EFEBE0] flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-[#FFB703] text-[#2D2D2D] font-semibold rounded-xl hover:opacity-90 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Live Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
