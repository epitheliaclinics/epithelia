'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="font-aboreto text-xl mb-4 text-white">
              Hyderabad&apos;s destination for advanced skin, hair and anti-ageing solutions
            </h3>
           <div className="flex space-x-4 mt-6">
  {/* Instagram */}
  <a 
    href="https://www.instagram.com/epitheliaclinic/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition-colors"
    aria-label="Instagram"
  >
    <Instagram size={24} strokeWidth={2} />
  </a>
  
  {/* Facebook */}
  <a 
    href="https://www.facebook.com/epitheliaclinic" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition-colors"
    aria-label="Facebook"
  >
    <Facebook size={24} strokeWidth={2} />
  </a>
  
  {/* WhatsApp - Using Lucide-style SVG */}
  <a 
    href="https://wa.me/919391111888" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition-colors"
    aria-label="WhatsApp"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  </a>
  
  {/* YouTube */}
  <a 
    href="https://www.youtube.com/@epitheliaclinic" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition-colors"
    aria-label="YouTube"
  >
    <Youtube size={24} strokeWidth={2} />
  </a>
</div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="font-aboreto text-lg mb-4 text-white">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/treatments" className="text-white/80 hover:text-white transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-white/80 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Epithelia
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-white/80 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-white/80 hover:text-white transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments Section */}
          <div>
            <h4 className="font-aboreto text-lg mb-4 text-white">TREATMENTS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/treatments/hair-rejuvenation" className="text-white/80 hover:text-white transition-colors">
                  Hair Rejuvenation
                </Link>
              </li>
              <li>
                <Link href="/treatments/skin-rejuvenation" className="text-white/80 hover:text-white transition-colors">
                  Skin Rejuvenation
                </Link>
              </li>
              <li>
                <Link href="/treatments/laser-light-therapy" className="text-white/80 hover:text-white transition-colors">
                  Laser &amp; Light Therapy
                </Link>
              </li>
              <li>
                <Link href="/treatments/anti-ageing" className="text-white/80 hover:text-white transition-colors">
                  Anti-ageing
                </Link>
              </li>
              <li>
                <Link href="/treatments/laser-hair-reduction" className="text-white/80 hover:text-white transition-colors">
                  Laser Hair Reduction
                </Link>
              </li>
              <li>
                <Link href="/treatments/preventive-care" className="text-white/80 hover:text-white transition-colors">
                  Preventive Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-aboreto text-lg mb-4 text-white">CONTACT</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-white/80 mt-1 flex-shrink-0" />
                <a href="tel:+919391111888" className="text-white/80 hover:text-white transition-colors">
                  (+91) 93911 11888
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-white/80 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  MON - SUN<br />
                  08:00AM - 9:00PM
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-white/80 mt-1 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/place/Epithelia+Clinic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  ADP Blvd, Financial District<br />
                  Nanakramguda, Hyderabad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Epithelia Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
