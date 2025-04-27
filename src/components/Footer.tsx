
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bootcamp-blue text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Urau BootCamp</h3>
            <p className="text-white/80 mb-4">
              Transform your future with our intensive 3-month coding bootcamp. 
              Learn the skills employers demand and build a professional portfolio.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition">About</a></li>
              <li><a href="#curriculum" className="text-white/80 hover:text-white transition">Curriculum</a></li>
              <li><a href="#project" className="text-white/80 hover:text-white transition">Project</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-white transition">Testimonials</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition">Free Prep Course</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition">Student Handbook</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition">Financing Options</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition">Scholarships</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white/80 mr-3">📍</span>
                <span className="text-white/80">123 Tech Street, San Francisco, CA 94105</span>
              </li>
              <li className="flex items-start">
                <span className="text-white/80 mr-3">📧</span>
                <a href="mailto:info@uraubootcamp.com" className="text-white/80 hover:text-white transition">
                  info@uraubootcamp.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-white/80 mr-3">📞</span>
                <a href="tel:+11234567890" className="text-white/80 hover:text-white transition">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Urau BootCamp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
