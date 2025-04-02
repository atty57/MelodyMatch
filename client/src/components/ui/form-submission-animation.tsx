import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormSubmissionAnimationProps {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  successMessage?: string;
  errorMessage?: string;
}

export const FormSubmissionAnimation = ({
  isSubmitting,
  isSuccess,
  isError,
  successMessage = "Submission successful!",
  errorMessage = "An error occurred. Please try again."
}: FormSubmissionAnimationProps) => {
  return (
    <AnimatePresence>
      {isSubmitting && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <motion.div
                  className="h-16 w-16 rounded-full border-4 border-gray-200"
                  animate={{
                    rotate: 360,
                    transition: { duration: 1, repeat: Infinity, ease: "linear" }
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-purple-600"
                  animate={{
                    rotate: 360,
                    transition: { duration: 1, repeat: Infinity, ease: "linear" }
                  }}
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                Processing your submission...
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Please wait while we process your information.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {isSuccess && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center">
              <motion.div
                className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1], transition: { duration: 0.5 } }}
              >
                <svg
                  className="h-8 w-8 text-green-600 dark:text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <motion.h3
                className="mt-4 text-lg font-medium text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              >
                Success!
              </motion.h3>
              <motion.p
                className="mt-2 text-sm text-center text-gray-500 dark:text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              >
                {successMessage}
              </motion.p>
              <motion.button
                className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
              >
                Continue
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {isError && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center">
              <motion.div
                className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center dark:bg-red-900"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1], transition: { duration: 0.5 } }}
              >
                <svg
                  className="h-8 w-8 text-red-600 dark:text-red-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.div>
              <motion.h3
                className="mt-4 text-lg font-medium text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              >
                Error
              </motion.h3>
              <motion.p
                className="mt-2 text-sm text-center text-gray-500 dark:text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              >
                {errorMessage}
              </motion.p>
              <motion.button
                className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
              >
                Try Again
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};