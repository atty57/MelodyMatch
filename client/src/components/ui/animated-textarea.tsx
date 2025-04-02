import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface AnimatedTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onFocusAnimation?: boolean;
  successState?: boolean;
  errorState?: boolean;
  className?: string;
}

export const AnimatedTextarea = ({
  onFocusAnimation = true,
  successState = false,
  errorState = false,
  className,
  ...props
}: AnimatedTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={
        successState 
          ? { x: [0, -5, 5, -5, 5, 0], transition: { duration: 0.4 } }
          : errorState 
            ? { x: [0, -3, 3, -3, 3, 0], transition: { duration: 0.4 } }
            : {}
      }
      className="relative"
    >
      <Textarea
        {...props}
        className={cn(
          "transition-all duration-300",
          successState ? "border-green-500 focus:ring-green-500/40" : "",
          errorState ? "border-red-500 focus:ring-red-500/40" : "",
          isFocused && onFocusAnimation ? "shadow-lg scale-[1.01]" : "",
          className
        )}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus && props.onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur && props.onBlur(e);
        }}
      />
      
      {successState && (
        <motion.div 
          className="absolute right-3 top-3 text-green-500"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
};