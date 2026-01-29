"use client";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#2F80ED] py-20">
      {/* Decorative Circles */}
      <div className="absolute -left-24 -top-24 w-64 h-64 bg-white/10 rounded-full" />
      <div className="absolute -right-32 -bottom-32 w-80 h-80 bg-white/10 rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Shape Your Future?
        </h2>

        <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
          Join over 10,000 students who have successfully navigated their
          college admission journey with us.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition">
            Get Started for Free
          </button>

          <button className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
