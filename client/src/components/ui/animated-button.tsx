import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  success?: boolean;
  successText?: string;
  className?: string;
}

export const AnimatedButton = ({
  children,
  isLoading = false,
  loadingText = "Processing...",
  success = false,
  successText = "Success!",
  className,
  ...props
}: AnimatedButtonProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 1 }}
      animate={success ? { 
        scale: [1, 1.05, 1],
        transition: { duration: 0.5 }
      } : {}}
    >
      <Button
        {...props}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          success ? "bg-green-600 hover:bg-green-700" : "",
          className
        )}
        disabled={isLoading || success || props.disabled}
      >
        {isLoading && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-inherit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center space-x-2">
              <svg 
                className="animate-spin h-4 w-4 text-current" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                ></circle>
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>{loadingText}</span>
            </div>
          </motion.div>
        )}
        
        {success && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-inherit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center space-x-2">
              <svg 
                className="h-4 w-4 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>{successText}</span>
            </div>
          </motion.div>
        )}
        
        <span className={cn(
          "transition-opacity",
          (isLoading || success) ? "opacity-0" : "opacity-100"
        )}>
          {children}
        </span>
      </Button>
    </motion.div>
  );
};