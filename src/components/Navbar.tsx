
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ApplicationFormDialog from './ApplicationFormDialog';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openApplicationForm = () => {
    setIsFormOpen(true);
  };

  return (
    <nav className="bg-white py-4 shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-bootcamp-blue">
          Urau<span className="text-bootcamp-lightblue">BootCamp</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium">Home</a>
          <a href="#about" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium">About</a>
          <a href="#curriculum" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium">Curriculum</a>
          <a href="#project" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium">Project</a>
          <a href="#testimonials" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium">Testimonials</a>
          <a href="#faq" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium">FAQ</a>
          <Button 
            className="bg-bootcamp-blue text-white hover:bg-bootcamp-lightblue"
            onClick={openApplicationForm}
          >
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} className="p-1">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md py-4 px-4 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium" onClick={toggleMenu}>About</a>
            <a href="#curriculum" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium" onClick={toggleMenu}>Curriculum</a>
            <a href="#project" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium" onClick={toggleMenu}>Project</a>
            <a href="#testimonials" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium" onClick={toggleMenu}>Testimonials</a>
            <a href="#faq" className="text-bootcamp-darkgray hover:text-bootcamp-blue font-medium" onClick={toggleMenu}>FAQ</a>
            <Button 
              className="bg-bootcamp-blue text-white hover:bg-bootcamp-lightblue w-full"
              onClick={() => {
                setIsMenuOpen(false);
                openApplicationForm();
              }}
            >
              Apply Now
            </Button>
          </div>
        </div>
      )}

      {/* Application Form Dialog */}
      <ApplicationFormDialog 
        isOpen={isFormOpen} 
        onOpenChange={setIsFormOpen} 
      />
    </nav>
  );
};

export default Navbar;
