
import { ArrowRight, Laptop, User, Calendar, Clock, Code, Book, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const FeaturesSection = () => {
  const [isRouterAvailable, setIsRouterAvailable] = useState(true);
  
  // Check if we're in a valid router context
  useEffect(() => {
    try {
      // This will throw an error if we're not in a router context
      useNavigate();
    } catch (error) {
      console.log("Router context not available, using anchor tags instead");
      setIsRouterAvailable(false);
    }
  }, []);

  const features = [
    {
      icon: <User className="h-6 w-6 text-bootcamp-blue" />,
      title: "Career Support",
      description: "Resume help, interview prep, and direct connections to our hiring partners."
    },
    {
      icon: <Laptop className="h-6 w-6 text-bootcamp-blue" />,
      title: "Live Mentoring",
      description: "Regular 1-on-1 sessions with experienced developers to support your learning."
    },
    {
      icon: <Code className="h-6 w-6 text-bootcamp-blue" />,
      title: "Team Collaboration",
      description: "Work alongside other students using industry-standard collaboration tools."
    },
    {
      icon: <Book className="h-6 w-6 text-bootcamp-blue" />,
      title: "Lifetime Access",
      description: "Permanent access to all course materials, recordings, and future updates."
    },
    {
      icon: <Clock className="h-6 w-6 text-bootcamp-blue" />,
      title: "Flexible Learning",
      description: "Access recordings and materials on your own schedule in addition to live sessions."
    },
    {
      icon: <Award className="h-6 w-6 text-bootcamp-blue" />,
      title: "Certification",
      description: "Receive an industry-recognized certificate upon successful completion."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-bootcamp-blue to-bootcamp-purple text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">BootCamp Features</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Our bootcamp is designed to provide you with everything you need to succeed as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition duration-300">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-white text-bootcamp-blue hover:bg-white/90 px-8 py-6 text-lg font-medium" asChild>
            {isRouterAvailable ? (
              <Link to="/apply">
                Apply Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            ) : (
              <a href="/apply">
                Apply Today <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
