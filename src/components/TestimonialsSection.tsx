
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer at TechCorp",
      image: "https://source.unsplash.com/random/100x100?woman",
      text: "The bootcamp completely transformed my career. I went from knowing almost nothing about coding to landing a job as a frontend developer within a month of graduating."
    },
    {
      name: "Michael Chen",
      role: "Full-Stack Engineer at StartupX",
      image: "https://source.unsplash.com/random/100x100?man",
      text: "Building the Urau-Mart project was the best part of the bootcamp. It gave me a real-world application for my portfolio that impressed employers and helped me stand out."
    },
    {
      name: "Jessica Smith",
      role: "UX/UI Designer at DesignLab",
      image: "https://source.unsplash.com/random/100x100?woman=2",
      text: "The UX/UI portion of the curriculum was exceptional. I discovered my passion for design during the bootcamp and pivoted from development to design with the skills I gained."
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student <span className="gradient-text">Testimonials</span></h2>
          <p className="text-lg text-bootcamp-darkgray max-w-3xl mx-auto">
            Hear from our graduates who have transformed their careers through our bootcamp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-bootcamp-darkgray text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <blockquote>
                <p className="text-bootcamp-darkgray italic">"{testimonial.text}"</p>
              </blockquote>
              
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className="h-5 w-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-bootcamp-purple/20 rounded-full blur-xl opacity-50"></div>
                <img 
                  src="https://source.unsplash.com/random/200x200?ceo" 
                  alt="Program Director" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <blockquote className="text-lg italic text-bootcamp-darkgray">
                "Our bootcamp isn't just about teaching code—it's about transforming lives and careers. 
                We focus on practical skills that employers are actively looking for, and our project-based 
                curriculum ensures you graduate with the confidence to tackle real-world challenges."
              </blockquote>
              <div className="mt-4">
                <p className="font-bold">David Rodriguez</p>
                <p className="text-bootcamp-darkgray">Program Director & Lead Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
