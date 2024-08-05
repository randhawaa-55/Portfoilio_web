import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required.';
    tempErrors.email = formData.email ? '' : 'Email is required.';
    if (formData.email) {
      tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)
        ? ''
        : 'Email is not valid.';
    }
    tempErrors.message = formData.message ? '' : 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).every((x) => tempErrors[x] === '');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:5000/contact', formData);
        console.log(response.data);
        // Clear form data
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } catch (error) {
        console.error('There was an error submitting the form:', error);
      }
    }
  };

  return (
    <section id="contact" className="my-40 max-w-5xl mx-auto p-3">
      <h2 className="text-5xl font-bold text-indigo-500 text-center mb-10">
        Contact
      </h2>
      <div className="flex flex-col items-center gap-5 mb-10">
        <a
          rel="noreferrer"
          target="_blank"
          className="text-center hover:underline"
          href="https://instagram.com/"
        >
          Instagram:
          <span className="font-bold"> @3_Developers</span>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className="text-center hover:underline"
          href="https://twitter.com/"
        >
          Twitter:
          <span className="font-bold"> @3_Developers</span>
        </a>
      </div>
      <form onSubmit={handleSubmit} className="contact-form max-w-md mx-auto p-3 border border-gray-300 rounded-lg bg-white">
        <div className="form-group mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="form-group mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
