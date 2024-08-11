// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <main className="flex-grow p-8 bg-black">
      <h2 className="text-3xl font-bold mb-4 text-center text-lime-500">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-slate-900 p-8 shadow-md rounded">
        <div className="mb-4">
          <label className="block  text-lime-500 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow bg-black appearance-none border rounded w-full py-2 px-3 text-lime-500 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
        </div>
        <div className="mb-4">
          <label className="block  text-lime-500 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow bg-black appearance-none border rounded w-full py-2 px-3 text-lime-500 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
        </div>
        <div className="mb-4">
          <label className="block text-lime-500 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow bg-black appearance-none border rounded w-full py-2 px-3 text-lime-500 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" rows="5"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-lime-400 hovetext-lime-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
