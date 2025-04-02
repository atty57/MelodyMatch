import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { AnimatedInput } from '@/components/ui/animated-input';
import { AnimatedTextarea } from '@/components/ui/animated-textarea';
import { AnimatedButton } from '@/components/ui/animated-button';
import { FormSubmissionAnimation } from '@/components/ui/form-submission-animation';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters long",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [validationStates, setValidationStates] = useState({
    name: { valid: false, touched: false },
    email: { valid: false, touched: false },
    subject: { valid: false, touched: false },
    message: { valid: false, touched: false }
  });
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: 'onChange',
  });
  
  // Watch form fields for validation animations
  const watchedFields = {
    name: form.watch('name'),
    email: form.watch('email'),
    subject: form.watch('subject'),
    message: form.watch('message')
  };
  
  // Update validation states as the user enters data
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    setValidationStates({
      name: { 
        valid: watchedFields.name.length >= 2, 
        touched: !!watchedFields.name 
      },
      email: { 
        valid: emailRegex.test(watchedFields.email), 
        touched: !!watchedFields.email 
      },
      subject: { 
        valid: watchedFields.subject.length >= 5, 
        touched: !!watchedFields.subject 
      },
      message: { 
        valid: watchedFields.message.length >= 10, 
        touched: !!watchedFields.message 
      }
    });
  }, [watchedFields]);
  
  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      setIsSubmitting(true);
      setIsSuccess(false);
      setIsError(false);
      
      // Simulate a delay to show loading animation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      try {
        const result = await apiRequest('POST', '/api/contact', values);
        return result;
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : "There was an error sending your message. Please try again.";
        setErrorMessage(errorMsg);
        throw error;
      }
    },
    onSuccess: () => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully. We'll get back to you soon.",
        });
        form.reset();
        setIsSuccess(false);
        setSubmitSuccess(false);
        setValidationStates({
          name: { valid: false, touched: false },
          email: { valid: false, touched: false },
          subject: { valid: false, touched: false },
          message: { valid: false, touched: false }
        });
      }, 1500);
    },
    onError: (error) => {
      setIsSubmitting(false);
      setIsError(true);
      
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  function onSubmit(values: FormValues) {
    mutation.mutate(values);
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Have questions about music compliance? We're here to help. Reach out to our team of experts.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 mb-8">
                  Our team is ready to assist with any questions about music industry compliance, our resources, or how we can help you navigate regulatory challenges.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Email Us</h3>
                      <p className="text-gray-300 mt-1">info@musicpliance.com</p>
                      <p className="text-gray-300">support@musicpliance.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Call Us</h3>
                      <p className="text-gray-300 mt-1">+1 (555) 123-4567</p>
                      <p className="text-gray-300">Monday-Friday, 9am-5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                      <p className="text-gray-300 mt-1">123 Music Avenue</p>
                      <p className="text-gray-300">Nashville, TN 37203</p>
                      <p className="text-gray-300">United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                      <p className="text-gray-300 mt-1">Monday-Friday: 9:00 AM - 5:00 PM EST</p>
                      <p className="text-gray-300">Saturday-Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="glass-dark p-8 rounded-lg border border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">Your Name</FormLabel>
                              <FormControl>
                                <AnimatedInput 
                                  placeholder="John Doe" 
                                  {...field} 
                                  className="bg-gray-800/50 border-gray-700 text-white"
                                  successState={validationStates.name.valid && validationStates.name.touched}
                                  errorState={!validationStates.name.valid && validationStates.name.touched && watchedFields.name.length > 0}
                                />
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
                              <FormLabel className="text-gray-200">Email Address</FormLabel>
                              <FormControl>
                                <AnimatedInput 
                                  placeholder="john@example.com" 
                                  {...field} 
                                  className="bg-gray-800/50 border-gray-700 text-white"
                                  successState={validationStates.email.valid && validationStates.email.touched}
                                  errorState={!validationStates.email.valid && validationStates.email.touched && watchedFields.email.length > 0}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Subject</FormLabel>
                            <FormControl>
                              <AnimatedInput 
                                placeholder="How can we help you?" 
                                {...field} 
                                className="bg-gray-800/50 border-gray-700 text-white"
                                successState={validationStates.subject.valid && validationStates.subject.touched}
                                errorState={!validationStates.subject.valid && validationStates.subject.touched && watchedFields.subject.length > 0}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Message</FormLabel>
                            <FormControl>
                              <AnimatedTextarea 
                                placeholder="Please describe your question or request" 
                                className="min-h-[150px] bg-gray-800/50 border-gray-700 text-white"
                                {...field}
                                successState={validationStates.message.valid && validationStates.message.touched}
                                errorState={!validationStates.message.valid && validationStates.message.touched && watchedFields.message.length > 0}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="relative">
                        <AnimatedButton 
                          type="submit" 
                          className="w-full md:w-auto bg-gradient-to-r from-accent to-blue-600 hover:opacity-90 text-white font-medium"
                          disabled={mutation.isPending || isSubmitting}
                          isLoading={isSubmitting}
                          loadingText="Sending..."
                          success={submitSuccess}
                          successText="Message Sent!"
                        >
                          Send Message
                        </AnimatedButton>
                        
                        <div className="mt-4">
                          <FormSubmissionAnimation 
                            isSubmitting={isSubmitting}
                            isSuccess={isSuccess}
                            isError={isError}
                            successMessage="Your message has been sent successfully!"
                            errorMessage={errorMessage || "There was an error sending your message. Please try again."}
                          />
                        </div>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Find quick answers to common questions about our services and music compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="glass-dark p-6 rounded-lg border border-gray-700/50 bg-gray-800/40 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">How quickly can I expect a response to my inquiry?</h3>
                <p className="text-gray-300">
                  We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please mark your subject line as "URGENT".
                </p>
              </div>
              
              <div className="glass-dark p-6 rounded-lg border border-gray-700/50 bg-gray-800/40 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer consultations for specific compliance issues?</h3>
                <p className="text-gray-300">
                  Yes, we offer personalized consultations with our compliance experts. You can request a consultation through our contact form.
                </p>
              </div>
              
              <div className="glass-dark p-6 rounded-lg border border-gray-700/50 bg-gray-800/40 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">How can I be listed in your industry directory?</h3>
                <p className="text-gray-300">
                  To be included in our directory, please fill out the contact form with "Directory Listing Request" as the subject, and we'll guide you through the process.
                </p>
              </div>
              
              <div className="glass-dark p-6 rounded-lg border border-gray-700/50 bg-gray-800/40 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-2">Is there a cost to access your compliance resources?</h3>
                <p className="text-gray-300">
                  Many of our basic resources are available for free. Premium tools and in-depth guides may require a subscription. Contact us for pricing details.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
