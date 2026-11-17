"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { IconMenu2, IconX, IconChevronRight, IconSparkles } from "@tabler/icons-react";

const menuItems = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Tentang", href: "/#tentang" },
  { label: "Program", href: "/#program" },
  { label: "Kegiatan", href: "/#kegiatan" },
  { label: "Portofolio", href: "/#portfolio" },
  { label: "Pembina", href: "/#pembina" },
  { label: "Pengurus", href: "/#organisasi" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(current > 24);
    setVisible(current < 120 || current < previous);
  });

  return (
    <AnimatePresence>
      {visible && <motion.header initial={{ y: -90 }} animate={{ y: 0 }} exit={{ y: -90 }} transition={{ duration: 0.25 }} className="fixed inset-x-0 top-0 z-[100] px-4 pt-4 md:px-8">
        <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all md:px-6 ${scrolled ? "border border-amber-200/70 bg-[#fffdf5]/95 shadow-lg shadow-amber-950/5 backdrop-blur-xl" : "border border-white/20 bg-amber-950/35 backdrop-blur-md"}`}>
          <Link href="/#beranda" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 text-xs font-black tracking-tighter text-amber-950 shadow-md">PiK</span>
            <span className={`leading-none ${scrolled ? "text-amber-950" : "text-white"}`}><strong className="block text-sm font-black tracking-tight">PiKIR</strong><small className={`mt-1 block text-[8px] font-bold uppercase tracking-[.17em] ${scrolled ? "text-stone-500" : "text-amber-100/75"}`}>SMA Darul Ulum · GEN 14</small></span>
          </Link>
          <div className="hidden items-center gap-0.5 lg:flex">{menuItems.map((item) => <Link key={item.href} href={item.href} className={`rounded-full px-3 py-2 text-[11px] font-bold transition hover:bg-yellow-300/20 ${scrolled ? "text-stone-600 hover:text-amber-950" : "text-white/90 hover:text-white"}`}>{item.label}</Link>)}</div>
          <div className="hidden lg:block"><Link href="/#kontak" className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-5 py-2.5 text-[10px] font-black uppercase tracking-widest text-amber-950 transition hover:bg-yellow-200"><IconSparkles size={14}/> Hubungi</Link></div>
          <button type="button" aria-label={isOpen ? "Tutup menu" : "Buka menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className={`rounded-full border p-2 lg:hidden ${scrolled ? "border-amber-200 bg-white text-amber-950" : "border-white/30 bg-white/10 text-white"}`}>{isOpen ? <IconX size={20}/> : <IconMenu2 size={20}/>}</button>
        </nav>
        <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-7xl rounded-3xl border border-amber-100 bg-[#fffdf5] p-4 shadow-xl lg:hidden"><div className="grid gap-1">{menuItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold ${pathname === item.href ? "bg-amber-100 text-amber-950" : "text-stone-600 hover:bg-amber-50"}`}><span>{item.label}</span><IconChevronRight size={15}/></Link>)}<Link href="/#kontak" onClick={() => setIsOpen(false)} className="mt-2 rounded-xl bg-amber-900 px-4 py-3 text-center text-sm font-black text-white">Hubungi PiKIR</Link></div></motion.div>}</AnimatePresence>
      </motion.header>}
    </AnimatePresence>
  );
};
