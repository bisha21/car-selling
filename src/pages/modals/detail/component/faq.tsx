'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the mileage of the car?',
      answer:
        'The car has 35,691 miles on the odometer. It is a well-maintained vehicle with regular service history.',
    },
    {
      question: 'What should I do if my "check engine" light comes on?',
      answer:
        'If the check engine light comes on, you should have the vehicle scanned with a diagnostic tool to identify the issue. Common causes include a loose gas cap, faulty oxygen sensor, or catalytic converter problems.',
    },
    {
      question: 'Can I perform basic maintenance myself?',
      answer:
        'Yes, you can perform basic maintenance like oil changes, air filter replacements, and wiper blade changes. However, for more complex repairs, it is recommended to visit a professional mechanic.',
    },
    {
      question: 'How do I know if my tires are properly inflated?',
      answer:
        "Check your vehicle's door jamb or owner's manual for the recommended tire pressure. Use a tire pressure gauge to check the pressure when the tires are cold, and inflate or deflate as needed.",
    },
    {
      question: 'Why are my brakes making a grinding or squealing noise?',
      answer:
        'Grinding or squealing brakes usually indicate worn brake pads or rotors. Have your brakes inspected by a professional mechanic as soon as possible to prevent further damage.',
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">FAQs</h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-blue-100 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-200 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-[#2D93ED]/20 border-t border-blue-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
