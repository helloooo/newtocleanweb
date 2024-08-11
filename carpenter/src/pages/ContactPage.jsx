import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Debugging line

    emailjs.send(
      'service_b21nrtp', // Replace with your EmailJS service ID
      'template_7pnj13m', // Replace with your EmailJS template ID
      formData,
      'ABl7kz9gKN4pbqGZS'  // Replace with your EmailJS public key
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setShowPopup(true);
    }).catch((err) => {
      console.log('FAILED...', err);
    });
  };

  return (
    <div className="container mx-auto text-center p-8">
      <img src="/assets/contact1.png" alt="Sad Image" className="h-40 mx-auto mb-8" />
      <h1 className="text-4xl font-bold text-purple-700"></h1>

      <p className="text-lg mt-4 text-gray-800">If you have any question or request, please fill out the form below.</p>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded-md"
          style={{ color: 'black' }}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded-md"
          style={{ color: 'black' }}
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded-md"
          style={{ color: 'black' }}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <p className="text-lg mt-4 text-red-500"></p>
        <button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-md">Send message</button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg text-center">
            <p className="text-lg text-black">Your message sent. We will contact you soon</p>
            <button
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactPage;
