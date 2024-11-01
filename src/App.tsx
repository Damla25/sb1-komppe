import React, { useState } from 'react';
import { Brain, Rocket, Zap, Code2, Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Packages from './components/Packages';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001F54] to-[#4B0082] text-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16">
        <Hero />
        <Features />
        <Packages />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}