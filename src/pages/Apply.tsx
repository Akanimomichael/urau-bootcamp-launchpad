
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import { 
  CalendarIcon, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Book, 
  Briefcase, 
  MessageSquare, 
  Search, 
  Banknote, 
  Copy, 
  Upload, 
  Check 
} from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dateOfBirth: z.date(),
  gender: z.string(),
  address: z.string().min(5, "Address must be at least 5 characters"),
  educationLevel: z.string(),
  occupation: z.string().min(2, "Occupation must be at least 2 characters"),
  whyJoin: z.string().min(20, "Please provide at least 20 characters"),
  heardFrom: z.string(),
  paymentPlan: z.string(),
  paymentSlip: z.instanceof(File).optional(),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ApplyPage = () => {
  const navigate = useNavigate();
  const { toast: hookToast } = useToast();
  const [progress, setProgress] = useState(33);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentSlipPreview, setPaymentSlipPreview] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      occupation: "",
      whyJoin: "",
      agreeTerms: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API request
    try {
      // This would be replaced with your actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Application submitted successfully!", {
        description: "We'll confirm your payment and email you soon.",
      });

      // Redirect after 5 seconds
      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    const currentStepFields: Record<number, string[]> = {
      1: ["fullName", "email", "phone", "dateOfBirth", "gender", "address", "educationLevel", "occupation", "whyJoin", "heardFrom"],
      2: ["paymentPlan"],
      3: ["paymentSlip", "agreeTerms"]
    };

    const fieldsToValidate = currentStepFields[step];
    const isValid = fieldsToValidate.every(field => {
      const result = form.trigger(field as any);
      return result;
    });

    if (isValid) {
      setStep(prev => prev + 1);
      setProgress(step === 1 ? 66 : 100);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    setProgress(step === 3 ? 66 : 33);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      if (!['image/jpeg', 'image/png', 'image/gif', 'application/pdf'].includes(file.type)) {
        toast.error("Invalid file type", {
          description: "Please upload an image or PDF file only.",
        });
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File too large", {
          description: "Please upload a file smaller than 5MB.",
        });
        return;
      }

      form.setValue("paymentSlip", file);
      
      // Generate preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPaymentSlipPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPaymentSlipPreview(null);
      }
    }
  };

  const copyBankDetails = () => {
    const details = "Bank Name: First Bank\nAccount Number: 1234567890\nAccount Name: Tech BootCamp Ltd";
    navigator.clipboard.writeText(details);
    toast.success("Bank details copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Apply to Our BootCamp</h1>
        <p className="text-center text-muted-foreground mb-8">Complete the application form and payment to secure your spot</p>
        
        <div className="max-w-4xl mx-auto">
          {/* Progress Tracker */}
          <div className="mb-10">
            <Progress value={progress} className="h-2 mb-2" />
            <div className="flex justify-between text-sm">
              <div className={`${step >= 1 ? 'text-bootcamp-blue font-medium' : 'text-muted-foreground'}`}>
                1. Personal Information
              </div>
              <div className={`${step >= 2 ? 'text-bootcamp-blue font-medium' : 'text-muted-foreground'}`}>
                2. Payment Details
              </div>
              <div className={`${step >= 3 ? 'text-bootcamp-blue font-medium' : 'text-muted-foreground'}`}>
                3. Upload & Submit
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Step 1: Application Form */}
              {step === 1 && (
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="h-4 w-4" /> Full Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="h-4 w-4" /> Email Address
                          </FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Phone className="h-4 w-4" /> Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="+234 800 123 4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" /> Date of Birth
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={`w-full pl-3 text-left font-normal ${!field.value && "text-muted-foreground"}`}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="h-4 w-4" /> Gender
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="educationLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Book className="h-4 w-4" /> Education Level
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your education level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="highSchool">High School</SelectItem>
                              <SelectItem value="college">College</SelectItem>
                              <SelectItem value="graduate">Graduate</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="occupation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" /> Current Occupation
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Software Developer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="heardFrom"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Search className="h-4 w-4" /> How did you hear about us?
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="socialMedia">Social Media</SelectItem>
                              <SelectItem value="friend">Friend</SelectItem>
                              <SelectItem value="googleSearch">Google Search</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-6">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" /> Address
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your complete address"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="mt-6">
                    <FormField
                      control={form.control}
                      name="whyJoin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" /> Why do you want to join the BootCamp?
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us why you're interested in our bootcamp..."
                              className="resize-none min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Payment Section */}
              {step === 2 && (
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
                  
                  <div className="mb-8 p-4 bg-bootcamp-purple/10 rounded-lg border border-bootcamp-purple/20">
                    <h3 className="flex items-center text-lg font-semibold mb-2">
                      <Banknote className="h-5 w-5 mr-2 text-bootcamp-purple" /> 
                      BootCamp Price: <span className="ml-2 text-bootcamp-purple">₦200,000</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Select a payment plan that works best for you below
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="paymentPlan"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Payment Plan Options</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="space-y-3"
                          >
                            <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                              <RadioGroupItem value="monthly" id="monthly" />
                              <label htmlFor="monthly" className="flex flex-col cursor-pointer w-full">
                                <span className="font-medium">Monthly Payment</span>
                                <span className="text-sm text-muted-foreground">₦70,000 × 3 months</span>
                              </label>
                            </div>
                            
                            <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                              <RadioGroupItem value="half" id="half" />
                              <label htmlFor="half" className="flex flex-col cursor-pointer w-full">
                                <span className="font-medium">Half Payment</span>
                                <span className="text-sm text-muted-foreground">₦100,000 first payment + ₦100,000 later</span>
                              </label>
                            </div>
                            
                            <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50 transition-colors">
                              <RadioGroupItem value="full" id="full" />
                              <label htmlFor="full" className="flex flex-col cursor-pointer w-full">
                                <span className="font-medium">Full Payment</span>
                                <span className="text-sm text-muted-foreground">₦200,000 at once</span>
                              </label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="mt-8">
                    <div className="rounded-md border border-gray-200 bg-gray-50">
                      <div className="p-5 space-y-2">
                        <h4 className="font-semibold">Bank Account Details</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <span className="text-muted-foreground">Bank Name:</span>
                          <span>First Bank</span>
                          <span className="text-muted-foreground">Account Number:</span>
                          <span>1234567890</span>
                          <span className="text-muted-foreground">Account Name:</span>
                          <span>Tech BootCamp Ltd</span>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={copyBankDetails}
                          className="mt-2 w-full sm:w-auto"
                        >
                          <Copy className="mr-2 h-4 w-4" /> Copy Account Details
                        </Button>
                      </div>
                      <div className="border-t border-gray-200 px-5 py-3 text-sm text-muted-foreground">
                        <p>• Payments are manually verified within 24-48 hours.</p>
                        <p>• Ensure your full name on the payment matches the name you filled in the application form.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Upload Payment Slip & Submit */}
              {step === 3 && (
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6">Upload Payment Proof & Submit</h2>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Upload className="h-4 w-4" />
                      <span className="font-medium">Upload Payment Slip</span>
                    </div>
                    
                    <div className="border-2 border-dashed border-gray-200 rounded-md p-8 text-center">
                      {paymentSlipPreview ? (
                        <div className="space-y-3">
                          <div className="mx-auto">
                            <img 
                              src={paymentSlipPreview} 
                              alt="Payment slip preview" 
                              className="max-h-48 mx-auto object-contain" 
                            />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            File uploaded successfully
                          </p>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => {
                              setPaymentSlipPreview(null);
                              form.setValue("paymentSlip", undefined);
                            }}
                          >
                            Change file
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Upload className="h-12 w-12 mx-auto text-muted-foreground" />
                          <div>
                            <label
                              htmlFor="payment-slip"
                              className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                            >
                              Choose file
                              <input
                                id="payment-slip"
                                type="file"
                                className="sr-only"
                                onChange={handleFileChange}
                                accept="image/jpeg,image/png,image/gif,application/pdf"
                              />
                            </label>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            JPG, PNG, GIF or PDF (max. 5MB)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="agreeTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the terms and conditions of the BootCamp
                          </FormLabel>
                          <FormDescription>
                            By checking this, you confirm that all information provided is accurate.
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                {step > 1 ? (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <Button type="button" onClick={nextStep}>
                    Next Step
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Check className="mr-2 h-4 w-4" /> Submit Application
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
