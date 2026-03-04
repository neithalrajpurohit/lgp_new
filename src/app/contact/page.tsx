import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Lakshmi Glass & Plywoods - Coimbatore",
  description:
    "Get in touch with Lakshmi Glass & Plywoods for free consultation, site visits, and quotes. Located in Coimbatore & Sathyamangalam.",
  keywords: [
    "contact Lakshmi Glass",
    "UPVC windows Coimbatore contact",
    "interior design Coimbatore phone number",
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 mb-8">
            Get in touch for free consultation and site visits
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold text-xl">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      Visit Our Showroom
                    </h4>
                    <p className="text-gray-400">
                      123, Industrial Estate, Gandhipuram
                      <br />
                      Coimbatore, Tamil Nadu 641012
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold text-xl">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Call Us</h4>
                    <p className="text-gray-400">
                      <a
                        href="tel:+919876543210"
                        className="hover:text-brand-gold transition-colors"
                      >
                        +91 9940863196
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold text-xl">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email Us</h4>
                    <p className="text-gray-400">
                      <a
                        href="mailto:info@lakshmiglass.com"
                        className="hover:text-brand-gold transition-colors"
                      >
                        info@lakshmiglass.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold text-xl">
                    🕐
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Working Hours</h4>
                    <p className="text-gray-400">
                      Mon - Sat: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-green-600 transition-colors"
                >
                  <span>💬</span> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <form className="bg-brand-gray p-8 rounded-lg border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">
                    Service Interested In *
                  </label>
                  <select className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors">
                    <option>UPVC Windows & Doors</option>
                    <option>Glass Solutions</option>
                    <option>Plywood & Hardware</option>
                    <option>Interior Designing</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-gold text-black font-bold py-4 rounded-lg hover:bg-white transition-colors uppercase tracking-wider"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-center">Our Location</h2>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62466.5!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae400000000001%3A0x0!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
