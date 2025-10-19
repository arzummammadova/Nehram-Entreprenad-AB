'use client';

import Title from '@/components/Title';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  tel: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    tel: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Mesajınız göndərildi!');
        setFormData({
          name: '',
          email: '',
          tel: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.');
      }
    } catch (error) {
      console.error(error);
      alert('Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.');
    }
  };

  return (
   <div className="">
    <Title/>
     <div className="w-full max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
      {/* Left Image */}
      <div className="md:w-1/2">
        <img
          src="https://static.wixstatic.com/media/9c608a_4a326440e02247b2892f7ee5794fffe3.jpg/v1/fill/w_876,h_615,al_c,q_85,enc_avif,quality_auto/9c608a_4a326440e02247b2892f7ee5794fffe3.jpg"
          alt="Contact"
          className="w-full rounded"
        />
      </div>

      {/* Right Contact Info & Form */}
      <div className="md:w-1/2 flex flex-col gap-6">
        {/* Contact Info */}
        <div className="text-gray-600">
          <p>Hammarängsvägen 1E</p>
          <p>13755 Tungelsta</p>
          <p>
            Email:{' '}
            <a href="mailto:info@r-rservice.com" className="text-teal-600">
            Info@nehrem.se
            </a>
          </p>
          <p>
            Tel:{' '}
            <a href="tel:+46762622221" className="text-teal-600">
              +46762622221
            </a>
          </p>
          <p className="mt-2">f</p> {/* Burada Facebook iconu əlavə oluna bilər */}
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Namn"
            value={formData.name}
            onChange={handleChange}
            className="border border-teal-600 p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-teal-600 p-2 rounded"
            required
          />
          <input
            type="tel"
            name="tel"
            placeholder="Tel"
            value={formData.tel}
            onChange={handleChange}
            className="border border-teal-600 p-2 rounded"
          />
          <input
            type="text"
            name="subject"
            placeholder="Ämne"
            value={formData.subject}
            onChange={handleChange}
            className="border border-teal-600 p-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Meddelande"
            value={formData.message}
            onChange={handleChange}
            className="border border-teal-600 p-2 rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
          >
            Skicka
          </button>
        </form>
      </div>
    </div>
   </div>
  );
};

export default ContactPage;
