
import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ApplicationFormDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationFormDialog = ({ isOpen, onOpenChange }: ApplicationFormDialogProps) => {
  const navigate = useNavigate();
  
  const handleFullApplication = () => {
    navigate("/apply");
    onOpenChange(false);
  };
  
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="overflow-y-auto w-full sm:max-w-xl">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl">Apply to BootCamp</SheetTitle>
          <SheetDescription>
            Begin your journey to becoming a full-stack developer
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6">
          <div className="bg-bootcamp-purple/10 p-4 rounded-md border border-bootcamp-purple/20">
            <h3 className="font-medium mb-2">Quick Application</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Enter your details below to start the process, or proceed to the full application form.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <Button className="w-full">Submit Quick Application</Button>
            </form>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">Want to complete the full application?</p>
            <Button variant="outline" onClick={handleFullApplication}>
              Go to Full Application <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ApplicationFormDialog;
