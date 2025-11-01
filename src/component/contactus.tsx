import { useState } from 'react';
import facebook from '../../public/facebook.png';
import instagram from '../../public/insta.png';
import gmail from '../../public/email.png';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: '',
    });
  };

  return (
    <div className="bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Social Media Card */}
            <div className="bg-[#f5f5f5] rounded-lg shadow-xl p-4">
              <h2 className="text-xl font-bold text-center mb-6">
                Reach out through Social Media
              </h2>
              <div className="flex justify-center gap-6">
                {/* Instagram */}
                <a
                  href="#"
                  className="transform hover:scale-110 transition-transform"
                >
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="transform hover:scale-110 transition-transform"
                >
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                    <img
                      src={facebook}
                      alt="Facebook"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </a>

                {/* Gmail */}
                <a
                  href="#"
                  className="transform hover:scale-110 transition-transform"
                >
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                    <img
                      src={gmail}
                      alt="Gmail"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689234866!2d85.2911!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Feedback Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-bold text-center mb-6">
              Your Feedback is Precious!
            </h2>

            <div className="space-y-5">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  First Name :
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter Your First Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#BEBEBE] border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Last Name :
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Your Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#BEBEBE] border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-[#BEBEBE] border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone :
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-[#BEBEBE] border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Description :
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe Your Feedback or Query"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-[#BEBEBE] border-none focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleSubmit}
                  className="px-12 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
