import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductPreview from '../components/ProductPreview';
import LaunchSection from '../components/LaunchSection';
import Footer from '../components/Footer';

export default function ComingSoon() {
  return (
    <div className="coming-soon-page">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProductPreview />
        <LaunchSection />
      </main>
      <Footer />
    </div>
  );
}
