
import { 
  Code, Laptop, Database, User, 
  Calendar, Clock, Project 
} from "lucide-react";

const CurriculumSection = () => {
  const technologies = [
    {
      name: "HTML & CSS",
      icon: <Code className="h-10 w-10 mb-3 text-bootcamp-blue" />,
      description: "Master the building blocks of web development with semantic HTML and modern CSS techniques."
    },
    {
      name: "JavaScript",
      icon: <Code className="h-10 w-10 mb-3 text-bootcamp-blue" />,
      description: "Build interactive web applications with JavaScript ES6+ features and DOM manipulation."
    },
    {
      name: "React.js",
      icon: <Code className="h-10 w-10 mb-3 text-bootcamp-blue" />,
      description: "Create dynamic user interfaces with the most popular front-end JavaScript library."
    },
    {
      name: "Node.js",
      icon: <Database className="h-10 w-10 mb-3 text-bootcamp-blue" />,
      description: "Develop scalable server-side applications with Node.js and Express framework."
    },
    {
      name: "UX/UI Design",
      icon: <Laptop className="h-10 w-10 mb-3 text-bootcamp-blue" />,
      description: "Learn user experience principles and design intuitive interfaces that users love."
    },
    {
      name: "Project Management",
      icon: <Calendar className="h-10 w-10 mb-3 text-bootcamp-blue" />,
      description: "Apply Agile methodologies and tools to successfully manage development projects."
    },
    {
      name: "DevOps",
      icon: <Project className="h-10 w-10 mb-3 text-bootcamp-blue" />,
      description: "Understand continuous integration, deployment, and basic cloud infrastructure."
    },
    {
      name: "Career Development",
      icon: <User className="h-10 w-10 mb-3 text-bootcamp-blue" />,
      description: "Build your professional brand with resume help, portfolio development, and interview practice."
    },
  ];

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Will <span className="gradient-text">Learn</span></h2>
          <p className="text-lg text-bootcamp-darkgray max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to equip you with all the skills needed to become a professional full-stack developer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="flex justify-center">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-bootcamp-blue">{tech.name}</h3>
              <p className="text-bootcamp-darkgray">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-bootcamp-blue p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Program Breakdown</h3>
            <p>Our 12-week program is structured to build your skills progressively</p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-4 border-bootcamp-blue pl-4">
                <h4 className="font-bold text-xl mb-3">Phase 1: Foundations</h4>
                <p className="text-bootcamp-darkgray mb-3">Weeks 1-4</p>
                <ul className="list-disc list-inside text-bootcamp-darkgray space-y-1">
                  <li>HTML5 & CSS3 Fundamentals</li>
                  <li>JavaScript Programming</li>
                  <li>Version Control with Git</li>
                  <li>Responsive Web Design</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-bootcamp-purple pl-4">
                <h4 className="font-bold text-xl mb-3">Phase 2: Frontend Development</h4>
                <p className="text-bootcamp-darkgray mb-3">Weeks 5-8</p>
                <ul className="list-disc list-inside text-bootcamp-darkgray space-y-1">
                  <li>React.js & Component Architecture</li>
                  <li>State Management</li>
                  <li>UI/UX Design Principles</li>
                  <li>Frontend Testing</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-bootcamp-lightblue pl-4">
                <h4 className="font-bold text-xl mb-3">Phase 3: Backend & Project</h4>
                <p className="text-bootcamp-darkgray mb-3">Weeks 9-12</p>
                <ul className="list-disc list-inside text-bootcamp-darkgray space-y-1">
                  <li>Node.js & Express</li>
                  <li>Database Design & Management</li>
                  <li>API Development</li>
                  <li>Final Project: Urau-Mart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
