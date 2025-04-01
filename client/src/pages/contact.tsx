import React from 'react';
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
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      return apiRequest('POST', '/api/contact', values);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-neutral-600 mb-8">
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
                      <h3 className="text-lg font-semibold text-primary">Email Us</h3>
                      <p className="text-neutral-600 mt-1">info@musicpliance.com</p>
                      <p className="text-neutral-600">support@musicpliance.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-primary">Call Us</h3>
                      <p className="text-neutral-600 mt-1">+1 (555) 123-4567</p>
                      <p className="text-neutral-600">Monday-Friday, 9am-5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-primary">Visit Us</h3>
                      <p className="text-neutral-600 mt-1">123 Music Avenue</p>
                      <p className="text-neutral-600">Nashville, TN 37203</p>
                      <p className="text-neutral-600">United States</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-primary">Business Hours</h3>
                      <p className="text-neutral-600 mt-1">Monday-Friday: 9:00 AM - 5:00 PM EST</p>
                      <p className="text-neutral-600">Saturday-Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
                  <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
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
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" {...field} />
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
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help you?" {...field} />
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your question or request" 
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-accent hover:bg-accent/90"
                        disabled={mutation.isPending}
                      >
                        {mutation.isPending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Find quick answers to common questions about our services and music compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold text-primary mb-2">How quickly can I expect a response to my inquiry?</h3>
                <p className="text-neutral-600">
                  We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please mark your subject line as "URGENT".
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold text-primary mb-2">Do you offer consultations for specific compliance issues?</h3>
                <p className="text-neutral-600">
                  Yes, we offer personalized consultations with our compliance experts. You can request a consultation through our contact form.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold text-primary mb-2">How can I be listed in your industry directory?</h3>
                <p className="text-neutral-600">
                  To be included in our directory, please fill out the contact form with "Directory Listing Request" as the subject, and we'll guide you through the process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <h3 className="text-lg font-semibold text-primary mb-2">Is there a cost to access your compliance resources?</h3>
                <p className="text-neutral-600">
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
