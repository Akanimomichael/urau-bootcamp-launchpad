import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const pricingFeatures = [
    "500+ hours of expert instruction",
    "Real-world project development",
    "Career services & job placement",
    "1-on-1 mentoring sessions",
    "Lifetime access to materials",
    "Industry-recognized certification",
    "Career networking events",
    "Portfolio development support",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment in Your <span className="gradient-text">Future</span>
          </h2>
          <p className="text-lg text-bootcamp-darkgray max-w-3xl mx-auto">
            Our bootcamp provides exceptional value with comprehensive training
            and career support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-bootcamp-blue text-white">
                <h3 className="text-2xl font-bold mb-2">Full Program</h3>
                <div className="flex items-end mb-6">
                  <span className="text-5xl font-bold">$1,500</span>
                  <span className="ml-2 text-white/80">USD</span>
                </div>

                <p className="mb-6 opacity-90">
                  Comprehensive 12-week immersive program with all features and
                  career support.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <Check className="h-4 w-4 text-bootcamp-blue" />
                    </div>
                    <span>Easy payment plans available</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <Check className="h-4 w-4 text-bootcamp-blue" />
                    </div>
                    <span>Scholarships for underrepresented groups</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <Check className="h-4 w-4 text-bootcamp-blue" />
                    </div>
                    <span>Income share agreements available</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-white text-bootcamp-blue hover:bg-white/90 w-full py-6">
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h4 className="text-xl font-bold mb-6">What's Included:</h4>

                <ul className="space-y-4">
                  {pricingFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="flex-shrink-0 w-6 h-6 bg-bootcamp-lightblue rounded-full flex items-center justify-center mr-3">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-bootcamp-darkgray">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-semibold mb-2">Financing Options</h5>
                  <p className="text-bootcamp-darkgray text-sm">
                    We partner with Climb Credit and Ascent Funding to offer
                    financing options with monthly payments as low as
                    $250/month.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-bootcamp-purple/10 rounded-lg p-6 border border-bootcamp-purple/30">
            <h4 className="font-bold text-xl mb-3 text-bootcamp-purple">
              Scholarships Available
            </h4>
            <p className="text-bootcamp-darkgray mb-4">
              We're committed to making tech education accessible. We offer
              diversity scholarships for underrepresented groups in tech and
              veterans.
            </p>
            <Button
              variant="outline"
              className="border-bootcamp-purple text-bootcamp-purple hover:bg-bootcamp-purple/10"
            >
              Learn About Scholarships
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
