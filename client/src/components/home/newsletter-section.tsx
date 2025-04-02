import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AnimatedInput } from '@/components/ui/animated-input';
import { AnimatedButton } from '@/components/ui/animated-button';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormValues = z.infer<typeof formSchema>;

export const NewsletterSection = () => {
  const { toast } = useToast();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationState, setValidationState] = useState({
    email: { valid: false, touched: false }
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  
  // Watch for email changes to animate validation
  const watchedEmail = form.watch('email');
  
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(watchedEmail);
    
    if (watchedEmail) {
      setValidationState(prev => ({
        ...prev,
        email: { ...prev.email, valid: isValid, touched: true }
      }));
    }
  }, [watchedEmail]);

  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      // Simulate a short delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 800));
      return apiRequest('POST', '/api/subscribe', values);
    },
    onSuccess: () => {
      setSubmitSuccess(true);
      setTimeout(() => {
        toast({
          title: "Success!",
          description: "You've been successfully subscribed to our newsletter.",
          variant: "default",
        });
        form.reset();
        setSubmitSuccess(false);
        setValidationState({ email: { valid: false, touched: false } });
      }, 1000);
    },
    onError: (error) => {
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Stay Updated
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Subscribe to our newsletter for the latest updates on music industry compliance, regulations, and resources.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 sm:flex justify-center">
                <div className="min-w-0 flex-1">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <AnimatedInput
                            type="email" 
                            placeholder="Your email address"
                            className="block w-full px-4 py-3 rounded-md bg-gray-800/50 border-gray-700 text-white"
                            successState={validationState.email.valid && validationState.email.touched}
                            errorState={!validationState.email.valid && validationState.email.touched && watchedEmail.length > 0}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-left text-red-400 mt-1" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <AnimatedButton 
                    type="submit" 
                    className="block w-full sm:w-auto px-5 py-3 rounded-md bg-purple-600 text-white hover:bg-purple-700"
                    disabled={mutation.isPending || !form.formState.isValid}
                    isLoading={mutation.isPending}
                    success={submitSuccess}
                    loadingText="Subscribing..."
                    successText="Subscribed!"
                  >
                    Subscribe
                  </AnimatedButton>
                </div>
              </form>
            </Form>
          </motion.div>
          
          <motion.p 
            className="mt-3 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We care about your data. Read our <Link href="/privacy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link>.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
