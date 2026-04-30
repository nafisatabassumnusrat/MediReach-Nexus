"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Activity, Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-4"
          : "bg-white/40 backdrop-blur-sm border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-blue-600 shadow-md group-hover:shadow-teal-500/40 transition-all duration-300 group-hover:scale-105">
            <Activity className="w-5 h-5 text-white" />
            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-900 tracking-tight leading-none">
              MediReach <span className="text-teal-600">Nexus</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-0.5">
              AI Platform
            </span>
          </div>
        </Link>

        {/* Middle: Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#features" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">
            How it Works
          </Link>
        </div>

        {/* Right Side: Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-slate-600 bg-slate-100/80 px-3 py-1.5 rounded-full text-xs font-semibold ring-1 ring-slate-200">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            Dhaka, BD
          </div>
          <Link href="#prototype-input">
            <Button className="bg-slate-900 text-white rounded-full px-6 hover:bg-slate-800 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition-all font-semibold">
              Try Prototype
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <Link href="#features" className="text-base font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="#how-it-works" className="text-base font-semibold text-slate-700" onClick={() => setMobileMenuOpen(false)}>
              How it Works
            </Link>
          </div>
          
          <div className="flex items-center gap-2 text-slate-600 bg-slate-100 px-4 py-2 rounded-lg text-sm font-semibold w-fit">
            <MapPin className="w-4 h-4 text-teal-600" />
            Dhaka, BD
          </div>

          <Link href="#prototype-input" className="w-full">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl w-full py-6 text-lg shadow-lg shadow-teal-600/20">
              Try Prototype
            </Button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
