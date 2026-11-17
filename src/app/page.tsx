"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FlaskConical, Lightbulb, Rocket, Users, Microscope, Beaker, GraduationCap, Sparkles } from "lucide-react";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FacilityGallery } from "@/components/sections/FacilityGallery";
import { PrestasiHighlights } from "@/components/sections/PrestasiHighlights";
import { EventsSection } from "@/components/sections/EventsSection";
import { ProgramUnggulan } from "@/components/sections/ProgramUnggulan";
import { NewsSection } from "@/components/sections/NewsSection";
import { VisionAndStats } from "@/components/sections/VisionAndStats";
import { CallToAction } from "@/components/sections/CallToAction";

const CompetitionCarousel = dynamic(
  () => import("@/components/sections/HorizontalScrollCarousel").then((module) => module.HorizontalScrollCarousel),
  { ssr: false, loading: () => <div className="h-72 animate-pulse bg-amber-50" /> },
);

const programs = [
  { icon: Microscope, number: "01", name: "Riset & Analisis", text: "Menggali kebutuhan nyata, mengolah data, dan menemukan akar masalah sebagai awal dari sebuah solusi." },
  { icon: Lightbulb, number: "02", name: "Inovasi", text: "Mengembangkan ide menjadi konsep, prototipe, dan karya yang kreatif serta aplikatif." },
  { icon: Rocket, number: "03", name: "Kewirausahaan", text: "Belajar membangun model usaha, menguji peluang, dan membawa inovasi menuju dampak nyata." },
  { icon: Users, number: "04", name: "Kolaborasi", text: "Berkarya bersama lintas minat dan menjalin kemitraan untuk memperluas manfaat." },
];

const activities = [
  { title: "PiKIR Day", tag: "Kenali PiKIR", photo: "https://raw.githubusercontent.com/gilangabdurrohman2-lgtm/ORMAS-KUNING-GEN-14/main/mantap/DSC00852.JPG", text: "Berkenalan dengan organisasi, program, dan kesempatan untuk mulai berkarya." },
  { title: "FIKSA", tag: "Festival", photo: "https://raw.githubusercontent.com/gilangabdurrohman2-lgtm/ORMAS-KUNING-GEN-14/main/mantap/DSC05908.JPG", text: "Festival kewirausahaan yang menampilkan ide kreatif dan semangat bisnis siswa." },
  { title: "PiJAR & Studi Visit", tag: "Belajar bersama", photo: "https://raw.githubusercontent.com/gilangabdurrohman2-lgtm/ORMAS-KUNING-GEN-14/main/mantap/Screenshot%202026-11-16%20103637.png", text: "Berbagi ilmu, melakukan kunjungan, dan memperluas wawasan melalui pengalaman langsung." },
];

const mentors = [
  { name: "A. Chizam Baihaqy, M.Pd.", title: "Pembina", photo: "https://smadu1-jbg.sch.id/wp-content/uploads/2026/09/Guru-Sejarah-Kebudayaan-Islam-Ahmad-Chizam-Baihaqy-M.Pd_.I-scaled.jpg" },
  { name: "Ainun Tazkia, S.Pd.", title: "Pembina", photo: "https://smadu1-jbg.sch.id/wp-content/uploads/2024/11/ainun.jpg" },
  { name: "Rizki Yudha Sentika, M.Pd.", title: "Penasehat", photo: "https://smadu1-jbg.sch.id/wp-content/uploads/2026/09/RIZKY-YUDHA-SENTIKA-M.Pd-BIOLOGI-scaled.jpg" },
];

const teams = [
  { role: "Ketua", name: "A. Dzalwa Mazza", group: "Putra" },
  { role: "Ketua", name: "Velove Okca Kinanti", group: "Putri" },
  { role: "Wakil Ketua", name: "Farouzul Miqdad", group: "Putra" },
  { role: "Wakil Ketua", name: "Nadira Zafir atun Nissa", group: "Putri" },
  { role: "Sekretaris", name: "M. Hafiz Mubarok", group: "Putra" },
  { role: "Sekretaris I", name: "Anastasya Putri Aulia", group: "Putri" },
  { role: "Bendahara", name: "M. Gilang Abdurrohman", group: "Putra" },
  { role: "Bendahara", name: "Lia Zafira Lutfiatun Nisa", group: "Putri" },
  { role: "Koordinator Riset & Inovasi", name: "M. Ghani Ashraf Arif", group: "Putra" },
  { role: "Koordinator Kewirausahaan", name: "Lyvian Abiyyah Rizky", group: "Putri" },
  { role: "Koordinator Humas", name: "Fatkhul Azzam Taufiqqulah", group: "Putra" },
  { role: "Koordinator Web IT", name: "Allisah Qothrunnada", group: "Putri" },
];

export default function Home() {
  return (
    <main id="beranda" className="overflow-hidden bg-[#fffdf5] text-stone-800">
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-amber-950 px-6 pb-20 pt-32 text-white md:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(250,204,21,0.28),transparent_35%),radial-gradient(ellipse_at_10%_90%,rgba(217,119,6,0.22),transparent_40%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-yellow-200/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.22em] text-yellow-200"><Sparkles size={14} /> PiKIR · GEN 14</span>
            <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">Berpikir kritis.<br /><span className="text-yellow-300">Berkarya nyata.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-amber-100/80 md:text-lg">Praktisi Kewirausahaan, Inovasi, dan Riset SMA Darul Ulum 1. Wadah bagi siswa untuk mengubah rasa ingin tahu menjadi penelitian, inovasi, dan usaha yang bermanfaat.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#tentang" className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3.5 text-sm font-extrabold text-amber-950 transition hover:bg-yellow-200">Kenali PiKIR <ArrowUpRight size={17} /></a>
              <a href="#program" className="rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Lihat program</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-7">
              {[ ["14", "generasi"], ["Riset", "berbasis aksi"], ["Kolaborasi", "lintas ide"] ].map(([value, label]) => <div key={label}><p className="text-2xl font-black text-yellow-200">{value}</p><p className="mt-1 text-xs font-medium text-amber-100/60">{label}</p></div>)}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-yellow-300/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
              <img src="https://raw.githubusercontent.com/gilangabdurrohman2-lgtm/ORMAS-KUNING-GEN-14/main/mantap/DSC00852.JPG" alt="Kegiatan anggota PiKIR SMA Darul Ulum" className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[390px]" />
              <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/20 bg-amber-950/75 p-5 backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-[.18em] text-yellow-300">Riset → Inovasi → Dampak</p>
                <p className="mt-2 text-lg font-extrabold">Satu ide kecil bisa membawa perubahan besar.</p>
              </div>
            </div>
            <div className="absolute -left-7 top-10 hidden rounded-2xl border border-amber-100 bg-white p-4 text-amber-950 shadow-xl sm:block"><FlaskConical className="mb-2 text-amber-700" size={22}/><p className="text-xs font-black">Belajar dengan praktik</p></div>
            <a href="#tentang" aria-label="Gulir ke bagian tentang PiKIR" className="absolute -bottom-7 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-300 text-amber-950 shadow-xl transition hover:-translate-y-1"><ArrowDown size={20}/></a>
          </div>
        </div>
      </section>

      <section id="tentang" className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-black uppercase tracking-[.22em] text-amber-700">Tentang PiKIR</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-amber-950 md:text-5xl">Bukan hanya punya ide. Kami mengerjakannya.</h2></div>
          <div><p className="text-lg leading-8 text-stone-600">PiKIR merupakan organisasi siswa yang berfokus pada Praktisi Kewirausahaan, Inovasi, dan Riset. Kami mendorong siswa untuk melihat tantangan di sekitar, merancang jawaban kreatif, lalu mengujinya bersama.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{[["Visi", "Membangun ekosistem inovasi yang menghasilkan solusi nyata."], ["Misi", "Mengasah riset, inovasi aplikatif, dan kemandirian usaha."], ["Nilai", "Kreativitas, kolaborasi, integritas, dan kebermanfaatan."]].map(([title, text]) => <article key={title} className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm"><h3 className="font-black text-amber-900">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{text}</p></article>)}</div></div>
        </div>
      </section>

      <section id="program" className="bg-amber-50 px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl"><div className="mb-12 max-w-2xl"><p className="text-xs font-black uppercase tracking-[.22em] text-amber-700">Program PiKIR</p><h2 className="mt-4 text-4xl font-black tracking-tight text-amber-950 md:text-5xl">Dari rasa ingin tahu menjadi karya.</h2><p className="mt-4 leading-7 text-stone-600">Jelajahi berbagai cara untuk mencoba hal baru, mengembangkan potensi, dan memberikan manfaat.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{programs.map(({ icon: Icon, number, name, text }) => <article key={name} className="group rounded-3xl border border-amber-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"><div className="flex items-start justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-amber-800"><Icon size={22}/></span><span className="text-xs font-black tracking-widest text-amber-400">{number}</span></div><h3 className="mt-7 text-xl font-black text-amber-950">{name}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="kegiatan" className="px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[.22em] text-amber-700">Kegiatan</p><h2 className="mt-4 text-4xl font-black tracking-tight text-amber-950 md:text-5xl">Belajar lewat pengalaman.</h2></div><p className="max-w-md text-sm leading-6 text-stone-600">Ruang bertemu, mencoba, dan mengembangkan gagasan bersama teman serta komunitas.</p></div>
          <div className="grid gap-5 md:grid-cols-3">{activities.map((activity) => <article key={activity.title} className="group overflow-hidden rounded-[1.75rem] border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-60 overflow-hidden bg-amber-100"><img src={activity.photo} alt={`Dokumentasi kegiatan ${activity.title}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-amber-900">{activity.tag}</span></div><div className="p-6"><h3 className="text-xl font-black text-amber-950">{activity.title}</h3><p className="mt-2 text-sm leading-6 text-stone-600">{activity.text}</p></div></article>)}</div>
        </div>
      </section>

      <section id="portfolio" className="bg-amber-950 px-6 py-20 text-white md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_auto]"><div><p className="text-xs font-black uppercase tracking-[.22em] text-yellow-300">Portofolio & prestasi</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Karya terbaik tumbuh dari proses.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-amber-100/75">Dokumentasi kegiatan, proyek inovasi, riset, dan pencapaian siswa menjadi inspirasi untuk karya berikutnya.</p></div><a href="#prestasi" className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3.5 text-sm font-extrabold text-amber-950 transition hover:bg-yellow-200">Jelajahi portofolio <ArrowUpRight size={17}/></a></div>
      </section>

      <section id="pembina" className="px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl"><div className="mb-12 text-center"><p className="text-xs font-black uppercase tracking-[.22em] text-amber-700">Pembina organisasi</p><h2 className="mt-4 text-4xl font-black text-amber-950 md:text-5xl">Bertumbuh dengan bimbingan.</h2></div><div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">{mentors.map((mentor) => <article key={mentor.name} className="rounded-3xl border border-amber-100 bg-white p-6 text-center shadow-sm"><img src={mentor.photo} alt={mentor.name} loading="lazy" className="mx-auto mb-5 h-28 w-28 rounded-full border-4 border-yellow-100 object-cover"/><h3 className="font-black text-amber-950">{mentor.name}</h3><p className="mt-1 text-sm font-semibold text-amber-700">{mentor.title}</p></article>)}</div></div>
      </section>

      <section id="organisasi" className="bg-amber-50 px-6 py-24 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl"><div className="mb-10 flex items-end justify-between gap-6"><div><p className="text-xs font-black uppercase tracking-[.22em] text-amber-700">PiKIR GEN 14</p><h2 className="mt-4 text-4xl font-black text-amber-950 md:text-5xl">Kenali tim penggerak.</h2></div><GraduationCap className="hidden text-amber-700 sm:block" size={36}/></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{teams.map((member) => <article key={`${member.role}-${member.name}`} className="rounded-2xl border border-amber-100 bg-white p-5"><span className="text-[10px] font-black uppercase tracking-widest text-amber-700">{member.role} · {member.group}</span><h3 className="mt-2 font-extrabold text-stone-900">{member.name}</h3></article>)}</div><p className="mt-5 text-xs text-stone-500">Struktur organisasi PiKIR SMA Darul Ulum 1 Unggulan, Generasi 14.</p></div>
      </section>

      <div id="fitur-siswa"><FeaturesSection /></div>
      <div id="kompetisi"><CompetitionCarousel /></div>
      <div id="fasilitas"><FacilityGallery /></div>
      <div id="prestasi"><PrestasiHighlights /></div>
      <EventsSection />
      <ProgramUnggulan />
      <NewsSection />
      <VisionAndStats />
      <section id="kontak" className="bg-amber-950 px-6 py-20 text-white md:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-black uppercase tracking-[.22em] text-yellow-300">Mari berkolaborasi</p><h2 className="mt-3 text-3xl font-black md:text-4xl">Punya ide yang ingin diwujudkan?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-amber-100/75">Hubungi PiKIR dan mulai perjalanan berkarya bersama kami.</p></div><a href="https://www.instagram.com/officialpikir_smadu1/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 self-start rounded-full bg-yellow-300 px-6 py-3.5 text-sm font-extrabold text-amber-950 transition hover:bg-yellow-200 md:self-auto">Hubungi PiKIR <ArrowUpRight size={17}/></a></div></section>
      <CallToAction />
    </main>
  );
}
