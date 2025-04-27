
import { Check } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Immersive 3-month full-time curriculum",
    "Learn from industry professionals",
    "Build a real-world e-commerce application",
    "Master modern full-stack development",
    "100% hands-on project-based learning",
    "Career-ready portfolio upon graduation"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About the <span className="gradient-text">BootCamp</span></h2>
          <p className="text-lg text-bootcamp-darkgray max-w-3xl mx-auto">
            Our intensive 3-month coding bootcamp is designed to transform beginners into job-ready full-stack developers 
            through hands-on learning and real-world project development.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=500" 
              alt="Students coding" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Transform Your Career in Just 3 Months</h3>
            
            <p className="text-bootcamp-darkgray mb-6">
              Our full-time immersive bootcamp provides over 500 hours of coding practice, 
              professional development, and project-based learning. You'll learn directly from 
              industry experts who bring real-world experience to the classroom.
            </p>
            
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-bootcamp-lightblue rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-bootcamp-darkgray">{feature}</p>
                </li>
              ))}
            </ul>
            
            <div className="bg-gradient-to-r from-bootcamp-blue to-bootcamp-purple p-0.5 rounded-lg">
              <div className="bg-white p-6 rounded-[7px]">
                <div className="flex justify-between mb-3">
                  <div>
                    <p className="font-semibold text-bootcamp-blue">Duration</p>
                    <p className="text-bootcamp-darkgray">3 months (12 weeks)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-bootcamp-blue">Schedule</p>
                    <p className="text-bootcamp-darkgray">Monday-Friday, 9am-5pm</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold text-bootcamp-blue">Format</p>
                    <p className="text-bootcamp-darkgray">In-person & Online</p>
                  </div>
                  <div>
                    <p className="font-semibold text-bootcamp-blue">Next Cohort</p>
                    <p className="text-bootcamp-darkgray">June 15, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
