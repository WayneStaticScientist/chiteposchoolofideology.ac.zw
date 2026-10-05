import {
  ArrowRight,
  ExternalLink,
  Globe,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import React from "react";

import { schoolIdentity } from "@/config/identity";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-red-600"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Image
                src={"/apple-touch-icon.png"}
                width={30}
                height={30}
                alt={"logo"}
              />
              <h2 className="font-black text-2xl tracking-tighter">
                CHITEPO <span className="text-green-500">SCHOOL</span>
              </h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-4 italic">
              {schoolIdentity.tagline}
            </p>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl mb-8">
              {schoolIdentity.mission}
            </p>
            <div className="flex gap-4">
              {["Twitter", "Facebook", "LinkedIn", "YouTube"].map((social) => (
                <button
                  key={social}
                  className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all duration-300"
                >
                  <Globe size={20} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-8 text-green-500 flex items-center gap-2">
              <MapPin size={18} /> Location
            </h3>
            <div className="space-y-4 text-slate-400">
              <p className="font-medium text-white">Main Campus</p>
              <p>
                53F3+QH7, Simon Muzenda St,
                <br />
                Harare, Zimbabwe
              </p>
              <p className="flex items-center gap-2 text-white font-bold">
                <Phone size={16} /> +27 61 804 6523
              </p>
              <a
                href="#"
                className="text-green-500 flex items-center gap-1 hover:underline text-sm pt-2"
              >
                Open Google Maps <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-8 text-green-500">
              Quick Links
            </h3>
            <ul className="space-y-4 text-slate-400">
              {[
                "Admissions",
                "Faculty",
                "Alumni",
                "Research",
                "Portal Login",
              ].map((item) => (
                <li key={item}>
                  <button className="hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />{" "}
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Chitepo School of Ideology.
            #DecolonisingTheMind
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
