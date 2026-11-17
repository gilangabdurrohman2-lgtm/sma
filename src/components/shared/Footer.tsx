"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconBrandInstagram, IconPhone, IconMapPin, IconSparkles } from "@tabler/icons-react";

export const Footer = () => (
  <footer className="relative overflow-hidden border-t border-amber-100 bg-[#fffdf5] py-16 font-sans">
    <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-200/30 blur-3xl" />
    <div className="relative mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] md:px-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-amber-100 bg-white p-7 shadow-sm">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-950 text-sm font-black text-yellow-300">PiK</div>
        <h2 className="flex items-center gap-2 text-xl font-black tracking-tight text-amber-950">PiKIR <IconSparkles size={17} className="text-amber-500"/></h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-stone-600">Praktisi Kewirausahaan, Inovasi, dan Riset SMA Darul Ulum 1 — tempat ide bertemu aksi dan menghasilkan dampak.</p>
        <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-stone-400">© {new Date().getFullYear()} PiKIR SMA Darul Ulum 1 · GEN 14</p>
      </motion.div>
      <div className="rounded-3xl border border-amber-100 bg-white p-7 shadow-sm">
        <h3 className="mb-5 text-xs font-black uppercase tracking-[.18em] text-amber-800">Hubungi kami</h3>
        <a href="https://www.instagram.com/officialpikir_smadu1/" target="_blank" rel="noreferrer" className="mb-4 flex items-center gap-3 text-sm font-bold text-stone-700 hover:text-amber-800"><IconBrandInstagram size={18} className="text-amber-700"/> @officialpikir_smadu1</a>
        <p className="mb-4 flex items-start gap-3 text-sm font-semibold leading-6 text-stone-600"><IconMapPin size={18} className="mt-0.5 shrink-0 text-amber-700"/> Jl. KH. Romli Tamim No. 15a, Jombang</p>
        <a href="tel:+628212922924" className="flex items-center gap-3 text-sm font-bold text-stone-700 hover:text-amber-800"><IconPhone size={18} className="text-amber-700"/> +62 821-2922-924</a>
      </div>
      <div className="rounded-3xl border border-amber-100 bg-white p-7 shadow-sm">
        <h3 className="mb-5 text-xs font-black uppercase tracking-[.18em] text-amber-800">Jelajahi</h3>
        <div className="grid grid-cols-2 gap-3 text-sm font-bold text-stone-600"><a href="/#tentang" className="hover:text-amber-800">Tentang PiKIR</a><a href="/#program" className="hover:text-amber-800">Program</a><a href="/#kegiatan" className="hover:text-amber-800">Kegiatan</a><a href="/#portfolio" className="hover:text-amber-800">Portofolio</a><a href="/#pembina" className="hover:text-amber-800">Pembina</a><a href="/#organisasi" className="hover:text-amber-800">Pengurus</a></div>
      </div>
    </div>
  </footer>
);
