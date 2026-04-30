"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, Activity } from "lucide-react";

export default function ProcessingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: "Reading prescription...", icon: FileText, color: "text-blue-500" },
    { text: "Detecting medicines...", icon: Search, color: "text-teal-500" },
    { text: "Evaluating urgency...", icon: Activity, color: "text-rose-500" },
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 1500);
    const timer2 = setTimeout(() => setCurrentStep(2), 3000);
    const timer3 = setTimeout(() => onComplete(), 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  const CurrentIcon = steps[currentStep].icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50"
    >
      <div className="relative flex items-center justify-center w-40 h-40 mb-12">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 rounded-full border-4 border-slate-200 border-t-teal-500 border-r-blue-500"
        />
        {/* Inner pulsing circle */}
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-4 rounded-full bg-white shadow-xl flex items-center justify-center"
        >
          <CurrentIcon className={`w-12 h-12 ${steps[currentStep].color}`} />
        </motion.div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
        Analyzing your data...
      </h2>

      <div className="h-8">
        <motion.p
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-slate-500 font-medium"
        >
          {steps[currentStep].text}
        </motion.p>
      </div>

      <div className="w-64 h-1.5 bg-slate-200 rounded-full mt-8 overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.5, ease: "linear" }}
          className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}
