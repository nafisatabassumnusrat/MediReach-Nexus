"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Star, AlertTriangle, Thermometer, Wind, Car, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { hospitals, environmentData } from "@/lib/mock-data";

export default function DashboardScreen({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-slate-50 flex flex-col md:flex-row"
    >
      {/* LEFT/TOP PANE: Dashboard Content */}
      <div className="w-full md:w-1/2 lg:w-5/12 p-6 overflow-y-auto h-screen scrollbar-hide flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Smart Results</h2>
          <p className="text-slate-500 text-sm">Based on your condition and environment.</p>
        </div>

        {/* Environmental Alert Panel */}
        <Card className="bg-red-50/80 border-red-100 p-4 rounded-2xl shadow-sm backdrop-blur-md">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-red-800">Environmental Alerts</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="destructive" className="bg-red-500 flex items-center gap-1">
                  <Wind className="w-3 h-3" /> {environmentData.aqiStatus} (AQI {environmentData.aqi})
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 hover:bg-orange-200 border-none flex items-center gap-1">
                  <Thermometer className="w-3 h-3" /> {environmentData.tempStatus} ({environmentData.temperature})
                </Badge>
                <Badge variant="outline" className="border-amber-200 text-amber-700 flex items-center gap-1">
                  <Car className="w-3 h-3" /> {environmentData.traffic} Traffic
                </Badge>
              </div>
              <p className="text-sm text-red-600 mt-3 font-medium flex gap-4">
                <span>• Wear a mask</span>
                <span>• Stay hydrated</span>
              </p>
            </div>
          </div>
        </Card>

        {/* Recommendation Cards */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-slate-800 text-lg">Top Recommendations</h3>
          
          {hospitals.map((hospital, index) => (
            <motion.div
              key={hospital.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-5 rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                   <Badge className={hospital.risk === 'safe' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-amber-500 hover:bg-amber-600'}>
                     {hospital.risk === 'safe' ? '🟢 Safe Route' : '🟡 Mod. Risk Route'}
                   </Badge>
                </div>
                
                <h4 className="text-xl font-bold text-slate-800 mb-1">{hospital.name}</h4>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {hospital.distance}
                  </span>
                  <span className="flex items-center gap-1 text-blue-600 font-medium">
                    <Clock className="w-4 h-4" /> {hospital.time}
                  </span>
                  <span className="flex items-center gap-1 text-amber-500 font-medium">
                    <Star className="w-4 h-4 fill-amber-500" /> {hospital.rating}
                  </span>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-700">Suggested Pharmacy</span>
                    <Badge variant="outline" className="bg-white text-teal-600 border-teal-200">
                      In Stock
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">MediPlus Pharmacy</p>
                </div>

                <div className="flex gap-3 mt-2">
                  <Button onClick={onNavigate} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-sm">
                    View Route
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-xl text-slate-700">
                    Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT/BOTTOM PANE: Map Area */}
      <div className="w-full md:w-1/2 lg:w-7/12 h-[50vh] md:h-screen bg-slate-200 relative overflow-hidden hidden md:block">
        {/* Placeholder for an actual map */}
        <div className="absolute inset-0 bg-[#e5e3df] flex flex-col items-center justify-center text-slate-400">
           {/* Mock Map Texture */}
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, slate-400 1px, transparent 0)', backgroundSize: '32px 32px' }} />
           
           <Navigation className="w-16 h-16 mb-4 text-slate-300" />
           <p className="font-medium text-lg">Interactive Smart Map</p>
           <p className="text-sm">Displaying safest and fastest routes.</p>
           
           {/* Mock route line visual */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 100,200 Q 250,100 400,300 T 700,150" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 15" className="animate-[dash_20s_linear_infinite]" />
           </svg>
        </div>
      </div>
    </motion.div>
  );
}
