import { Heart, Users, DollarSign, Calendar, Mail, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useState } from "react";
// UNCOMMENT AFTER ADDING Social.jpg to /src/assets/images/
// import socialImage from "../../assets/images/Social.jpg";

export function GetInvolved() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6 text-gray-900">Get Involved</h1>
            <p className="text-xl text-gray-700">
              Join our community and help us share Tagore's artistic legacy while supporting
              wellness and cultural enrichment for all.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center text-gray-900">
            Ways to Get Involved
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Participate in Programs</h3>
              <p className="text-gray-600 mb-4">
                Join our workshops, listening circles, art classes, and cultural events to
                experience Tagore's legacy firsthand.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Share your time and talents to help us organize events, teach workshops, or
                support our community programs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Donate</h3>
              <p className="text-gray-600 mb-4">
                Support our mission with a tax-deductible donation to help us expand our
                programs and reach more communities.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Host an Event</h3>
              <p className="text-gray-600 mb-4">
                Partner with us to bring Neelmonilata (NEEL) House programs to your community center,
                library, or organization.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Spread the Word</h3>
              <p className="text-gray-600 mb-4">
                Help us reach more people by sharing our programs with friends, family, and
                your social networks.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Stay Connected</h3>
              <p className="text-gray-600 mb-4">
                Sign up for our newsletter to receive updates on programs, events, and ways
                to engage with our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Connect With Us</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We'd love to hear from you! Whether you're interested in participating in
                our programs, volunteering, or learning more about our mission, please fill
                out the form and we'll get back to you soon.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Email</h3>
                  <a
                    href="mailto:info@neelhouse.org"
                    className="text-amber-600 hover:text-amber-700"
                  >
                    info@neelhouse.org
                  </a>
                </div>

                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Follow Us</h3>
                  {/* UNCOMMENT AFTER ADDING Social.jpg to /src/assets/images/ */}
                  {/* <img src={socialImage} alt="Follow Us on Social Media" className="w-full h-[200px] object-cover rounded-lg shadow-lg mb-4" /> */}
                  <p className="text-gray-600 mb-3">
                    Stay updated on our latest programs and events:
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1770097042618-438684ff665f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzMzODc0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Community gathering and support"
                  className="w-full h-[300px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-6 text-gray-900">Send Us a Message</h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">
                    Thank you for your message! We'll be in touch soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm mb-2 text-gray-700">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Please select...</option>
                    <option value="programs">Participating in Programs</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donate">Making a Donation</option>
                    <option value="host">Hosting an Event</option>
                    <option value="newsletter">Newsletter Sign-up</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl mb-4 text-gray-900">Your Support Makes a Difference</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Every contribution, whether time, resources, or participation, helps us expand
              access to transformative arts experiences and cognitive wellness programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}