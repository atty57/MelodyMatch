import React, { useState } from 'react';
import { Link } from 'wouter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormValues = z.infer<typeof formSchema>;

export const NewsletterSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      return apiRequest('POST', '/api/subscribe', values);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been successfully subscribed to our newsletter.",
        variant: "default",
      });
      form.reset();
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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary">Stay Updated</h2>
          <p className="mt-4 text-lg text-neutral-600">
            Subscribe to our newsletter for the latest updates on music industry compliance, regulations, and resources.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 sm:flex justify-center">
              <div className="min-w-0 flex-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email" 
                          placeholder="Your email address"
                          className="block w-full px-4 py-3 rounded-md"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button 
                  type="submit" 
                  className="block w-full sm:w-auto px-5 py-3 rounded-md bg-accent text-white hover:bg-accent/90"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
            </form>
          </Form>
          
          <p className="mt-3 text-sm text-neutral-500">
            We care about your data. Read our <Link href="/privacy" className="text-accent hover:text-accent/80">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </section>
  );
};
