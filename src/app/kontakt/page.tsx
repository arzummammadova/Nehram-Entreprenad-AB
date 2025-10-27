"use client";

import React, { useState, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  tel: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  tel?: string;
  subject?: string;
  message?: string;
}

const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 rounded border-2 transition-colors ${
        error
          ? 'border-red-500 bg-red-50 focus:outline-none focus:border-red-600'
          : 'border-teal-600 focus:outline-none focus:border-teal-700 focus:bg-teal-50'
      }`}
    />
    {error && (
      <p className="flex items-center gap-1 text-red-600 text-sm mt-1">
        <AlertCircle size={14} />
        {error}
      </p>
    )}
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    tel: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [successMessage, setSuccessMessage] = useState('');

  const validationRules = {
    name: {
      test: (val: string) => val.trim().length >= 2,
      message: 'Namnet måste innehålla minst 2 tecken.',
    },
    email: {
      test: (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      message: 'Ange en giltig e-postadress.',
    },
    tel: {
      test: (val: string) => {
        if (!val.trim()) return true;
        return /^[+]?[\d\s-()]{7,20}$/.test(val.replace(/\s/g, ''));
      },
      message: 'Telefonnumret måste vara mellan 7 och 20 siffror.',
    },
    subject: {
      test: (val: string) => val.trim().length >= 3,
      message: 'Ämnet måste innehålla minst 3 tecken.',
    },
    message: {
      test: (val: string) => val.trim().length >= 10,
      message: 'Meddelandet måste vara minst 10 tecken.',
    },
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof Errors]) {
      const isValid = validationRules[name as keyof typeof validationRules]?.test(value);
      if (isValid) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    }
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    Object.keys(validationRules).forEach((field) => {
      const value = formData[field as keyof FormData];
      const rule = validationRules[field as keyof typeof validationRules];
      if (!rule.test(value)) {
        newErrors[field as keyof Errors] = rule.message;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

  const emailTo = 'nehrem.info@gmail.com';
    
    const messageBody = `Namn: ${formData.name}
  E-post: ${formData.email}
  Telefon: ${formData.tel || 'Ej angiven'}

  Meddelande:
  ${formData.message}`;

    // Gmail və digər email servislərində işləyən URL sxemi
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailTo)}&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(messageBody)}`;
    
    // Fallback: Mailto linki (Gmail açılmazsa)
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(messageBody)}`;

    // Gmail link-i cəhd et
    window.open(gmailLink, '_blank');
    
    // 1 saniyə sonra mailto-ya keç əgər Gmail açılmazsa
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 1000);

  setSuccessMessage('✅ E-post öppnas. Ditt meddelande kommer att visas ifyllt.');
    setTimeout(() => {
      setFormData({ name: '', email: '', tel: '', subject: '', message: '' });
      setErrors({});
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div>
      <div className="w-full max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 flex-shrink-0">
          <img
            src="https://static.wixstatic.com/media/9c608a_4a326440e02247b2892f7ee5794fffe3.jpg/v1/fill/w_876,h_615,al_c,q_85,enc_avif,quality_auto/9c608a_4a326440e02247b2892f7ee5794fffe3.jpg"
            alt="Kontakta oss"
            className="w-full rounded shadow-lg"
          />
        </div>

        <div className="md:w-1/2 flex flex-col gap-8">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Kontaktuppgifter</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-teal-600" />
                <div>
                  <p>Hammarängsvägen 1E</p>
                  <p>13755 Tungelsta</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-teal-600" />
                <a
                  href="mailto:nehrem.info@gmail.com"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  nehrem.info@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-teal-600" />
                <a
                  href="tel:+46762622221"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  +46 76 262 2221
                </a>
              </div>
            </div>
          </div>

          {successMessage && (
            <div className="flex items-center gap-2 p-4 bg-green-100 border border-green-400 text-green-800 rounded">
              <CheckCircle size={20} />
              {successMessage}
            </div>
          )}

          <div className="flex flex-col gap-4">
            <InputField
              label="Namn"
              name="name"
              placeholder="Ditt namn"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
            />
            <InputField
              label="E-post"
              name="email"
              type="email"
              placeholder="e-post@example.com"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
            />
            <InputField
              label="Telefon"
              name="tel"
              type="tel"
              placeholder="+46 76 262 2221"
              value={formData.tel}
              error={errors.tel}
              onChange={handleChange}
            />
            <InputField
              label="Ämne"
              name="subject"
              placeholder="Skriv ämne"
              value={formData.subject}
              error={errors.subject}
              onChange={handleChange}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meddelande</label>
              <textarea
                name="message"
                placeholder="Skriv ditt meddelande..."
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded border-2 resize-none transition-colors ${
                  errors.message
                    ? 'border-red-500 bg-red-50 focus:outline-none focus:border-red-600'
                    : 'border-teal-600 focus:outline-none focus:border-teal-700 focus:bg-teal-50'
                }`}
                rows={5}
              />
              {errors.message && (
                <p className="flex items-center gap-1 text-red-600 text-sm mt-1">
                  <AlertCircle size={14} />
                  {errors.message}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3 px-4 rounded font-medium transition-all bg-teal-600 text-white hover:bg-teal-700 active:scale-95"
            >
              Skicka meddelande
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}