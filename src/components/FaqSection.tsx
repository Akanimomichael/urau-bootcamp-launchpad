
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Do I need prior coding experience?",
      answer: "No prior coding experience is required. Our curriculum is designed to take you from the basics to advanced concepts. However, completing our free prep course is recommended to ensure you're ready for the pace of the bootcamp."
    },
    {
      question: "What is the time commitment?",
      answer: "This is a full-time, intensive program requiring approximately 40-50 hours per week. Classes run Monday through Friday from 9am to 5pm, with additional time needed for homework and projects."
    },
    {
      question: "What kind of job support do you offer?",
      answer: "We offer comprehensive career support including resume reviews, portfolio development, interview preparation, networking events with hiring partners, and one-on-one career coaching. Our job placement team works directly with you until you secure a position."
    },
    {
      question: "What is the job placement rate for graduates?",
      answer: "Our graduates have a 91% job placement rate within 6 months of program completion. The average starting salary for our graduates is $75,000."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, if you don't secure a job within 6 months of graduation and have actively participated in our career services program, you may be eligible for a partial tuition refund."
    },
    {
      question: "Can I attend the bootcamp remotely?",
      answer: "Yes, we offer both in-person and remote options for the bootcamp. Remote students have access to the same curriculum, instructors, and support as in-person students."
    },
    {
      question: "What computer/equipment do I need?",
      answer: "You'll need a relatively modern laptop (less than 5 years old) with at least 8GB of RAM and 256GB of storage. Both Mac and Windows computers are supported, though many web developers prefer Mac."
    },
    {
      question: "How is the Urau-Mart project structured?",
      answer: "The Urau-Mart project is built progressively throughout the bootcamp. You'll work in teams using agile methodology, with each team member responsible for different aspects of the application while collaborating on the overall architecture and integration."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-lg text-bootcamp-darkgray max-w-3xl mx-auto">
            Find answers to our most commonly asked questions about the bootcamp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-bootcamp-darkgray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-lg font-medium mb-4">Still have questions?</p>
            <a 
              href="#contact" 
              className="text-bootcamp-blue hover:text-bootcamp-lightblue underline underline-offset-4"
            >
              Contact us for more information
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
