
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ApplicationFormDialog from "./ApplicationFormDialog";
import { useNavigate } from "react-router-dom";

const CtaSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const navigate = useNavigate()

  const openApplicationForm = () => {
    setIsFormOpen(true);
  };

  const handleFullApplication = () => {
    navigate("/apply");
    // onOpenChange(false);
  };

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
            <Button 
              className="bg-white text-bootcamp-blue hover:bg-white/90 px-8 py-6 text-lg font-medium"
              // onClick={openApplicationForm}
              onClick={handleFullApplication}
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 px-8 py-6 text-lg font-medium">
              Download Syllabus
            </Button>
          </div>
          
          <p className="mt-8 opacity-80">
            Application deadline: May 15, 2025 • Next cohort starts: June 15, 2025
          </p>
        </div>
      </div>

      {/* Application Form Dialog */}
      <ApplicationFormDialog 
        isOpen={isFormOpen} 
        onOpenChange={setIsFormOpen} 
      />
    </section>
  );
};

export default CtaSection;
