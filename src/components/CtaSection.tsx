
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CtaSection = () => {
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

  return (
    <section className="py-20 bg-gradient-to-br from-bootcamp-purple to-bootcamp-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Launch Your Career in Tech?</h2>
          <p className="text-xl mb-10 opacity-90">
            Apply now for our next cohort and take the first step toward becoming a full-stack developer.
            Limited spots available!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button className="bg-white text-bootcamp-blue hover:bg-white/90 px-8 py-6 text-lg font-medium" asChild>
              {isRouterAvailable ? (
                <Link to="/apply">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              ) : (
                <a href="/apply">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              )}
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium">
              Download Syllabus
            </Button>
          </div>
          
          <p className="mt-8 opacity-80">
            Application deadline: May 15, 2025 • Next cohort starts: June 15, 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
