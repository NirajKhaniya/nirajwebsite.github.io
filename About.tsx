import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
              About Me
            </h2>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left - Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <RevealOnScroll className="w-full flex justify-center">
              <div className="relative w-full max-w-[300px] aspect-[4/5] md:w-full md:h-[450px] md:max-w-none md:aspect-auto rounded-2xl overflow-hidden shadow-2xl md:transform md:rotate-3 md:hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://image.n.jpg?q=80&w=1000&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-2/3 space-y-6">
            <RevealOnScroll delay={200}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left">
                I'm Niraj
              </h3>
              <h4 className="text-xl text-primary font-medium font-serif text-center md:text-left">
                निरज भन्छन मलाई
              </h4>
              
              <p className="text-gray-600 leading-relaxed text-lg text-left md:text-left">
                An accountant who loves trekking, photography, and exploring Android app development whenever inspiration strikes. Often found chasing trails or capturing moments through the camera lens, sharing life beyond the 9-to-5.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium flex items-start md:items-center"><span className="text-primary font-bold w-24 shrink-0 inline-block">age :</span> खोइ कति पो हो</p>
                  <p className="text-gray-700 font-medium flex items-start md:items-center"><span className="text-primary font-bold w-24 shrink-0 inline-block">phone :</span> +977 9864065482</p>
                  <p className="text-gray-700 font-medium flex items-start md:items-center"><span className="text-primary font-bold w-24 shrink-0 inline-block">email :</span> [email protected]</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium flex items-start md:items-center"><span className="text-primary font-bold w-24 shrink-0 inline-block">place :</span> Chitwan Nepal</p>
                </div>
              </div>

              <div className="pt-6 text-center md:text-left">
                <button className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-primary transition-colors">
                  थप जानकारी
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
