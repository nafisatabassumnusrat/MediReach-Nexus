"use client";

import { motion } from "framer-motion";
import { Upload, Activity, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function HomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50"
    >

      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4"
        >
          How can we help you today?
        </motion.h1>
        <p className="text-slate-500 text-lg">
          Get AI-powered healthcare & navigation assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Card
          onClick={onNext}
          className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-md p-10 flex flex-col items-center justify-center gap-6 rounded-3xl hover:-translate-y-1"
        >
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
            <Upload className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Upload Prescription</h2>
          <p className="text-slate-500 text-center text-sm">
            Snap a photo of your prescription for instant AI analysis.
          </p>
        </Card>

        <Card
          onClick={onNext}
          className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-md p-10 flex flex-col items-center justify-center gap-6 rounded-3xl hover:-translate-y-1"
        >
          <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
            <Activity className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Enter Symptoms</h2>
          <p className="text-slate-500 text-center text-sm">
            Describe how you're feeling to get immediate triage.
          </p>
        </Card>
      </div>
    </motion.div>
  );
}
