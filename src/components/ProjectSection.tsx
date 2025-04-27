
import { Check } from "lucide-react";

const ProjectSection = () => {
  const projectFeatures = [
    "Responsive e-commerce front-end with React",
    "User authentication and profiles",
    "Product catalog with search and filtering",
    "Shopping cart and checkout system",
    "Admin dashboard for inventory management",
    "Payment processing integration"
  ];

  return (
    <section id="project" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hands-on <span className="gradient-text">Real Project</span></h2>
          <p className="text-lg text-bootcamp-darkgray max-w-3xl mx-auto">
            Throughout the bootcamp, you'll work on building Urau-Mart, a full-featured e-commerce platform 
            applying all the skills you learn in a real-world context.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6">Build "Urau-Mart": A Complete E-Commerce Platform</h3>
            
            <p className="text-bootcamp-darkgray mb-6">
              Instead of working on disconnected exercises, you'll build a complete, production-ready 
              e-commerce application from scratch. This project will showcase your abilities to potential employers 
              and provide you with valuable real-world development experience.
            </p>
            
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-3">Project Features:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-bootcamp-lightblue rounded-full flex items-center justify-center mr-3 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-bootcamp-darkgray">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h4 className="font-semibold text-lg mb-3">Development Process:</h4>
              <ol className="list-decimal list-inside text-bootcamp-darkgray space-y-2">
                <li>Define project requirements and create wireframes</li>
                <li>Design UI/UX and build frontend components</li>
                <li>Develop backend API and database architecture</li>
                <li>Implement user authentication and security</li>
                <li>Integrate payment processing and order management</li>
                <li>Deploy the application to production</li>
              </ol>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-bootcamp-lightblue/20 rounded-lg blur-3xl opacity-50"></div>
              
              <div className="relative z-10 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-bootcamp-blue p-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-xl mb-2">Urau-Mart</h4>
                    <div className="flex space-x-2">
                      <span className="text-xs bg-bootcamp-blue/10 text-bootcamp-blue px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-bootcamp-purple/10 text-bootcamp-purple px-2 py-1 rounded">Node.js</span>
                      <span className="text-xs bg-bootcamp-lightblue/10 text-bootcamp-lightblue px-2 py-1 rounded">MongoDB</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-12 bg-gray-100 rounded-md animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-40 bg-gray-100 rounded-md animate-pulse"></div>
                      <div className="h-40 bg-gray-100 rounded-md animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="h-20 bg-gray-100 rounded-md animate-pulse"></div>
                      <div className="h-20 bg-gray-100 rounded-md animate-pulse"></div>
                      <div className="h-20 bg-gray-100 rounded-md animate-pulse"></div>
                      <div className="h-20 bg-gray-100 rounded-md animate-pulse"></div>
                    </div>
                    <div className="h-12 bg-bootcamp-lightblue rounded-md"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg z-20 border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-bootcamp-purple flex items-center justify-center text-white font-bold">
                    A+
                  </div>
                  <div>
                    <p className="text-sm font-medium">Portfolio-Ready Project</p>
                    <p className="text-xs text-bootcamp-darkgray">Stand out to employers</p>
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

export default ProjectSection;
