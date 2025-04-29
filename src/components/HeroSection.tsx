
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate()

  const handleFullApplication = () => {
    navigate("/apply");
    // onOpenChange(false);
  };
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-white via-gray-50 to-bootcamp-gray">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Become a <span className="gradient-text">Full-Stack Developer</span> in 3 Months!
          </h1>
          
          <p className="text-lg md:text-xl text-bootcamp-darkgray">
            Master modern web development skills through hands-on 
            training and build a real-world e-commerce platform in our immersive bootcamp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button className="bg-bootcamp-blue hover:bg-bootcamp-lightblue text-white px-8 py-6 text-lg"
            onClick={handleFullApplication}
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-bootcamp-blue text-bootcamp-blue hover:bg-bootcamp-blue/10 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-300"
                  style={{ backgroundImage: `url(https://source.unsplash.com/random/150x150?person=${i})`, backgroundSize: 'cover' }}
                ></div>
              ))}
            </div>
            <p className="text-sm text-bootcamp-darkgray">
              <span className="font-bold">200+</span> developers trained
            </p>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-bootcamp-purple/30 rounded-lg blur-3xl opacity-30 animate-float"></div>
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=500" 
              alt="Coding Bootcamp" 
              className="relative z-10 w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg z-20 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-sm font-medium">Next cohort starts in 14 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#fff">
          <path fillOpacity="1" d="M0,96L60,80C120,64,240,32,360,26.7C480,21,600,43,720,53.3C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
