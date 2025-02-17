import React from 'react';
import { Library, Home, FlaskRound as Flask } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-4">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          About Us
        </h1>

        {/* Foundation Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-orange-600 mb-8 hover:text-orange-700 transition-colors">
            Foundation
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            A.A.N.M & V.V.R.S.R. Polytechnic was established in Gudlavalleru, Krishna Dist, AP, South India on 28th August 1981.
          </p>

          <h3 className="text-3xl font-bold text-gray-800 mb-6">Key Events:</h3>
          <ol className="list-decimal list-inside text-xl text-gray-700 space-y-4 ml-4">
            <li>Inaugurated on 13th November, 1981 by Sri Pinnamaneni Koteswara Rao.</li>
            <li>Recognized by AICTE (Memo No: F.24-63/B III/RC(MB)/89/15916, dt: 31-01-1994).</li>
            <li>Initial intake of 180 students across LCE, LME, and LECE branches in 1981.</li>
          </ol>
        </div>

        {/* Sponsoring Society Section */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-orange-600 mb-8 hover:text-orange-700 transition-colors">
            Sponsoring Society
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            The polytechnic is sponsored by the A.A.N.M & V.V.R.S.R. Educational Society, registered on 31st March 1981 (Regd No: 94).
          </p>

          <h3 className="text-3xl font-bold text-gray-800 mb-6">Founders:</h3>
          <ol className="list-decimal list-inside text-xl text-gray-700 space-y-4 ml-4">
            <li>Sri Adusumilli Aswardha Narayana Murthy</li>
            <li>Sri Vallurupalli Venkata Rama Seshadri Rao</li>
          </ol>
        </div>

        {/* Facilities Section */}
        <section className="mb-16 bg-white rounded-xl p-12 shadow-lg">
          <h2 className="text-5xl font-bold text-orange-600 text-center mb-12">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Library */}
            <div className="bg-white rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 shadow-xl border border-gray-100">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="College Library"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <Library className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-2xl font-bold text-orange-600 mb-2">College Library</h3>
                <p className="text-gray-600">
                  Access to a wide range of books, journals, and research materials in a conducive environment for academic success.
                </p>
              </div>
            </div>

            {/* Hostel */}
            <div className="bg-white rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 shadow-xl border border-gray-100">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Hostel Facilities"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <Home className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-2xl font-bold text-orange-600 mb-2">Hostel Facilities</h3>
                <p className="text-gray-600">
                  Safe and comfortable stay with essential facilities for outstation students.
                </p>
              </div>
            </div>

            {/* Labs */}
            <div className="bg-white rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 shadow-xl border border-gray-100">
              <div className="h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1986&q=80"
                  alt="College Labs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <Flask className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-2xl font-bold text-orange-600 mb-2">College Labs</h3>
                <p className="text-gray-600">
                  Modern labs providing hands-on experience and practical knowledge for students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-orange-600 text-center mb-12">
            Find Us Here
          </h2>
          <div className="w-full rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4240.795686798177!2d81.04164624765164!3d16.35085566825951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a361d8f3e77a1a7%3A0xe2aa990af93b5807!2sAANM%20%26%20VVRSR%20POLYTECHNIC%2C%20GUDLAVALLERU!5e1!3m2!1sen!2sin!4v1737902715226!5m2!1sen!2sin"
              className="w-full h-[450px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;