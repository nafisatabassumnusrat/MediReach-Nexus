"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Map, Wind, ShieldCheck, Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import HomeScreen from "@/components/screens/HomeScreen";
import DashboardScreen from "@/components/screens/DashboardScreen";
import NavigationScreen from "@/components/screens/NavigationScreen";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-200">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-400/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold mb-6 shadow-sm border border-teal-200">
              <Zap className="w-4 h-4 text-amber-500" /> Hackathon MVP Ready
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              Healthcare Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                Smart City Intelligence
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              MediReach Nexus is an AI-powered prototype that analyzes your symptoms and environment to route you to the best hospitals using real-time data.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/prototype">
                <Button className="h-14 px-8 text-lg rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1">
                  Launch Prototype <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 transition-all">
                  Explore Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Core Features</h2>
            <p className="text-lg text-slate-500">Everything you need in a modern medical emergency.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 rounded-3xl border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">AI Symptom Triage</h3>
              <p className="text-slate-600">Upload prescriptions or describe symptoms. Our AI immediately evaluates the urgency of your condition.</p>
            </Card>

            <Card className="p-8 rounded-3xl border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                <Wind className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Environmental Context</h3>
              <p className="text-slate-600">Real-time AQI, heatwave alerts, and traffic data ensure you aren't routed through hazardous zones.</p>
            </Card>

            <Card className="p-8 rounded-3xl border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Map className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Smart Routing</h3>
              <p className="text-slate-600">Calculates the safest and fastest route to the nearest available hospital with the medicine you need in stock.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How it Works</h2>
            <p className="text-lg text-slate-400">A seamless flow from input to emergency resolution.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Input", desc: "User uploads data." },
              { step: "2", title: "AI Parse", desc: "Extracts key metrics." },
              { step: "3", title: "City Sync", desc: "Checks traffic & AQI." },
              { step: "4", title: "Navigate", desc: "Routes to safety." },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-teal-500 flex items-center justify-center text-2xl font-bold text-teal-400 mb-6 z-10">
                  {item.step}
                </div>
                {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-slate-700 -z-0" />}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prototype Sections */}
      <section id="prototype-input" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Step 1: Smart Input</h2>
          <p className="text-lg text-slate-500">Upload prescription or describe symptoms directly.</p>
        </div>
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative h-[600px]">
          <div className="absolute inset-0 overflow-y-auto pointer-events-none">
            <HomeScreen onNext={() => {}} />
          </div>
        </div>
      </section>

      <section id="prototype-dashboard" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Step 2: AI Dashboard</h2>
          <p className="text-lg text-slate-500">Real-time analysis, routing, and environmental alerts.</p>
        </div>
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative h-[800px]">
          <div className="absolute inset-0 overflow-y-auto">
             <DashboardScreen onNavigate={() => {}} />
          </div>
        </div>
      </section>

      <section id="prototype-navigation" className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Step 3: Safe Navigation</h2>
          <p className="text-lg text-slate-400">Emergency mode UI for reaching the safest hospital.</p>
        </div>
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative h-[800px]">
          <div className="absolute inset-0 overflow-y-auto">
             <NavigationScreen onBack={() => {}} />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200 text-center text-slate-500">
        <p>© 2026 MediReach Nexus. Built for the Hackathon.</p>
      </footer>
    </div>
  );
}
