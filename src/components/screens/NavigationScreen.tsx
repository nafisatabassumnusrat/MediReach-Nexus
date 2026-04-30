"use client";

import { motion } from "framer-motion";
import { Navigation, PhoneCall, Share2, ArrowLeft, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NavigationScreen({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="min-h-screen bg-slate-900 relative overflow-hidden"
    >
      {/* Mock Full Map Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1e293b] opacity-80 z-10" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, #475569 1px, transparent 0)', backgroundSize: '48px 48px' }} />
        
        {/* Animated Route Line */}
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 150,800 Q 300,500 500,600 T 800,200" fill="none" stroke="#10b981" strokeWidth="8" strokeLinecap="round" className="drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
          <circle cx="800" cy="200" r="12" fill="#10b981" className="animate-pulse" />
          <circle cx="150" cy="800" r="8" fill="#3b82f6" />
        </svg>
      </div>

      {/* Top Bar */}
      <div className="relative z-30 p-6 flex justify-between items-start">
        <Button onClick={onBack} variant="outline" size="icon" className="bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700 backdrop-blur-md rounded-full w-12 h-12">
          <ArrowLeft className="w-6 h-6" />
        </Button>
        
        <Card className="bg-slate-800/80 border-slate-700 backdrop-blur-md p-3 px-5 rounded-full flex items-center gap-3 shadow-2xl">
          <div className="bg-emerald-500/20 p-2 rounded-full">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Safest Route Selected</p>
            <p className="text-emerald-400 text-xs font-medium">Avoiding high AQI zones</p>
          </div>
        </Card>
      </div>

      {/* Bottom Panel */}
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 z-30 p-6"
      >
        <Card className="bg-white p-6 rounded-t-[40px] rounded-b-2xl shadow-2xl mx-auto max-w-2xl border-none">
          <div className="w-16 h-1.5 bg-slate-200 rounded-full mx-auto mb-6" />
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-800 mb-1">12 min</h2>
              <p className="text-slate-500 font-medium">3.5 km • Arrive at 10:45 AM</p>
            </div>
            <div className="text-right">
              <Badge className="bg-emerald-500 hover:bg-emerald-600 mb-1">Low Pollution Route</Badge>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8 bg-slate-50 p-4 rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">Destination</p>
              <p className="text-lg font-bold text-slate-800">CityCare Hospital (ER)</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-2xl py-6 text-lg font-semibold shadow-lg shadow-red-500/30">
              <PhoneCall className="w-6 h-6 mr-2" /> Call Ambulance
            </Button>
            <Button variant="outline" className="flex-1 rounded-2xl py-6 text-lg font-semibold border-slate-200 text-slate-700 hover:bg-slate-50">
              <Share2 className="w-6 h-6 mr-2" /> Share Location
            </Button>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
