import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    // Normally here you would handle the form submission (e.g., send data to a server)
    console.log('Form data:', values);
    alert('Message sent!');
    resetForm();
  };

  return (
    <section className="p-6 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Contact Me</h2>
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send a Message</h3>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
        
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h3>
          <p className="text-gray-700 mb-4">
            Feel free to reach out to me via email or phone. I'm always open to discussing new projects or opportunities.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 10.001 20.001A10 10 0 0012 2zm0 18a8 8 0 100-16 8 8 0 000 16zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z"></path>
              </svg>
              <span className="text-gray-700">mansoor72373@gmail.com</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 10.001 20.001A10 10 0 0012 2zm0 18a8 8 0 100-16 8 8 0 000 16zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z"></path>
              </svg>
              <span className="text-gray-700">+923489833750</span>
            </li>
          </ul>
        </div>
        
        {/* Embedded Map */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Find Me Here</h3>
          <div className="relative w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26460.43234600144!2d71.49199219894183!3d34.003986783169616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d91703ef946b3b%3A0x5b2fd75844408df8!2sTehkal%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721413590187!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
