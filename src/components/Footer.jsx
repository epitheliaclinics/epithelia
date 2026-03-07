'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Clock, Mail } from 'lucide-react';

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
                <Instagram size={24} />
              </a>
              
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/epitheliaclinic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/919391111888" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
                <Youtube size={24} />
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
                <Link href="/treatments/laser-and-light-therapy" className="text-white/80 hover:text-white transition-colors">
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
                <Link href="/treatments/preventive-and-maintenance-care" className="text-white/80 hover:text-white transition-colors">
                  Preventive Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-aboreto text-lg mb-4 text-white">CONTACT</h4>
            <ul className="space-y-3">
              {/* Phone */}
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-white/80 mt-1 flex-shrink-0" />
                <a href="tel:+919391111888" className="text-white/80 hover:text-white transition-colors">
                  (+91) 93911 11888
                </a>
              </li>
              
              {/* Email */}
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-white/80 mt-1 flex-shrink-0" />
                <a href="mailto:info@epitheliaclinic.com" className="text-white/80 hover:text-white transition-colors">
                  info@epitheliaclinic.com
                </a>
              </li>
              
              {/* Timings */}
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-white/80 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  Mon - Sun<br />
                  10:00 AM - 7:00 PM
                </span>
              </li>
              
              {/* Location */}
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
