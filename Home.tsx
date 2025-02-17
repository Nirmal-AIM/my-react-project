import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-[1000px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5), #009688), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1986&q=80')"
          }}
        />
        <div className="relative text-center text-white z-10">
          <h1 className="text-8xl mb-4">
            A.A.N.M & V.V.R.S.R college
          </h1>
          <p className="text-3xl italic mb-16">
            knowledge is power
          </p>
          <div className="mt-16">
            <Link
              to="/about"
              className="inline-block px-12 py-3 text-white border border-white relative overflow-hidden group hover:text-black transition-colors duration-500"
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full" />
              <span className="relative">Read More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;