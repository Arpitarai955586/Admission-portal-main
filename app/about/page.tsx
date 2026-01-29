"use client";

import React from "react";
import { 
  GraduationCap, 
  Target, 
  Users, 
  Award, 
  Heart, 
  Lightbulb, 
  Globe, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To democratize access to quality education by providing transparent, comprehensive, and personalized guidance to students worldwide.",
      color: "bg-[#EFEBE0] text-[#3B82F6]",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Our Vision",
      description: "To become the most trusted global platform that empowers millions of students to make informed decisions about their educational journey.",
      color: "bg-[#EFEBE0] text-[#FFB703]",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "Integrity, transparency, and student success are at the core of everything we do. We believe every student deserves access to quality education.",
      color: "bg-[#EFEBE0] text-[#3B82F6]",
    },
  ];

  const stats = [
    { number: "6000+", label: "Institutions", icon: <GraduationCap className="w-6 h-6" /> },
    { number: "200+", label: "Exams Covered", icon: <Award className="w-6 h-6" /> },
    { number: "50K+", label: "Students Helped", icon: <Users className="w-6 h-6" /> },
    { number: "150+", label: "Countries", icon: <Globe className="w-6 h-6" /> },
  ];

  const features = [
    {
      title: "Comprehensive Database",
      description: "Access to thousands of colleges, courses, and exam information in one place.",
    },
    {
      title: "Personalized Guidance",
      description: "AI-powered recommendations tailored to your academic profile and preferences.",
    },
    {
      title: "Real-time Updates",
      description: "Stay informed with the latest admission deadlines, exam dates, and results.",
    },
    {
      title: "Expert Support",
      description: "Connect with experienced counselors and get answers to all your queries.",
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
            <GraduationCap className="w-5 h-5 text-[#3B82F6]" />
            <span className="text-sm font-semibold text-[#2D2D2D]">About Admission Campus</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Empowering Students to{" "}
            <span className="text-[#3B82F6] italic">Unlock Their Potential</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#2D2D2D]/80 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make quality education accessible to everyone, 
            providing the tools and guidance you need to make informed decisions about your future.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-24 px-6 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              What Drives Us
            </h2>
            <p className="text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto">
              Our commitment to excellence and student success shapes everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#EFEBE0] rounded-3xl p-10 border border-transparent hover:border-[#EFEBE0] hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2D2D2D]">
                  {value.title}
                </h3>
                <p className="text-[#2D2D2D]/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#EFEBE0] to-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Our Impact
            </h2>
            <p className="text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto">
              Numbers that reflect our commitment to student success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#F9F7F2] rounded-2xl p-8 text-center border border-[#EFEBE0] hover:shadow-lg transition-all duration-300 hover:border-[#3B82F6]/20 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#3B82F6] rounded-xl text-white mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-[#2D2D2D]/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFEBE0] rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-[#3B82F6]" />
                <span className="text-sm font-semibold text-[#2D2D2D]">Our Story</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                Building the Future of{" "}
                <span className="text-[#3B82F6]">Education Access</span>
              </h2>
              
              <p className="text-lg text-[#2D2D2D]/80 mb-6 leading-relaxed">
                Key2Global was born from a simple observation: the college admission process 
                is overwhelming, fragmented, and often inaccessible. We set out to change that.
              </p>
              
              <p className="text-lg text-[#2D2D2D]/80 mb-8 leading-relaxed">
                Today, we're proud to be a trusted partner for thousands of students worldwide, 
                helping them navigate their educational journey with confidence and clarity.
              </p>

              <Link href="/college">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#3B82F6] text-white font-semibold rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                  Explore Colleges
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#EFEBE0] to-[#F9F7F2] rounded-3xl p-12 border border-[#EFEBE0] shadow-xl">
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#2D2D2D] mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-[#2D2D2D]/70 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFB703]/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#3B82F6] to-[#3B82F6] relative overflow-hidden">
        <div className="absolute -left-24 -top-24 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-white/10 rounded-full" />
        
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of students who have successfully navigated their college 
            admission journey with Key2Global.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <button className="px-8 py-4 rounded-xl bg-white text-[#3B82F6] font-semibold hover:bg-[#EFEBE0] transition-all transform hover:scale-105 shadow-lg">
                Get Started for Free
              </button>
            </Link>
            <Link href="/college">
              <button className="px-8 py-4 rounded-xl bg-[#FFB703] text-[#2D2D2D] font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                Explore Colleges
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
