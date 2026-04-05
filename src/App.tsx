/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Edit3, 
  Minus, 
  Plus, 
  ChevronDown, 
  User, 
  UserRound, 
  ArrowRight, 
  ArrowLeft,
  Check
} from 'lucide-react';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(7);
  const [schoolLevel, setSchoolLevel] = useState('SD');
  const [grade, setGrade] = useState('Kelas 1');
  const [gender, setGender] = useState<'cowok' | 'cewek' | null>(null);

  const handleAgeChange = (delta: number) => {
    setAge(prev => Math.max(3, Math.min(18, prev + delta)));
  };

  const schoolLevels = ['PAUD', 'SD', 'SMP', 'SMA'];
  const gradesMap: Record<string, string[]> = {
    'PAUD': ['Kelompok A', 'Kelompok B'],
    'SD': ['Kelas 1', 'Kelas 2', 'Kelas 3', 'Kelas 4', 'Kelas 5', 'Kelas 6'],
    'SMP': ['Kelas 7', 'Kelas 8', 'Kelas 9'],
    'SMA': ['Kelas 10', 'Kelas 11', 'Kelas 12']
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center py-12 px-6">
      {/* Background Decorative Blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-tertiary-container/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl" />
        
        {/* Bottom floating shapes like in the image */}
        <div className="absolute bottom-0 w-full flex items-end justify-around opacity-40">
          <div className="w-16 h-16 bg-primary-container rounded-t-full translate-y-4" />
          <div className="w-24 h-24 bg-tertiary-container rounded-t-full translate-y-8" />
          <div className="w-32 h-32 bg-secondary-container rounded-t-full translate-y-12" />
          <div className="w-20 h-20 bg-primary-container rounded-t-full translate-y-6" />
          <div className="w-28 h-28 bg-tertiary-container rounded-t-full translate-y-10" />
        </div>
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-6 border-4 border-primary-container">
          <Rocket className="w-10 h-10 text-primary fill-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-4">
          Ayo Mulai Belajar!
        </h1>
        <p className="text-on-primary-container text-lg font-medium opacity-80">
          Buat profilmu dan kumpulkan bintang sebanyak-banyaknya.
        </p>
      </motion.div>

      {/* Form Content */}
      <div className="w-full max-w-3xl space-y-8">
        {/* Step 1: Identity */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-3xl p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-on-primary text-xl font-bold">
              1
            </div>
            <h2 className="text-2xl font-extrabold text-on-surface-variant">Kenalan Yuk!</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name Input */}
            <div className="space-y-3">
              <label className="block text-on-primary-container font-bold text-lg px-2">Nama Panggilanmu</label>
              <div className="relative group">
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  placeholder="Contoh: Budi"
                />
                <Edit3 className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary opacity-50 group-focus-within:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Age Stepper */}
            <div className="space-y-3">
              <label className="block text-on-primary-container font-bold text-lg px-2">Umurmu Berapa?</label>
              <div className="bg-surface-container-highest rounded-full p-1.5 flex items-center justify-between">
                <button 
                  onClick={() => handleAgeChange(-1)}
                  className="stepper-button bg-white shadow-sm text-primary"
                >
                  <Minus className="w-6 h-6" />
                </button>
                <span className="text-xl font-black text-primary">{age} Tahun</span>
                <button 
                  onClick={() => handleAgeChange(1)}
                  className="stepper-button bg-primary text-on-primary shadow-lg shadow-primary/20"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* School Level */}
            <div className="space-y-3">
              <label className="block text-on-primary-container font-bold text-lg px-2">Jenjang Sekolah</label>
              <div className="relative">
                <select 
                  value={schoolLevel}
                  onChange={(e) => {
                    setSchoolLevel(e.target.value);
                    setGrade(gradesMap[e.target.value][0]);
                  }}
                  className="select-field"
                >
                  {schoolLevels.map(lvl => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary pointer-events-none" />
              </div>
            </div>

            {/* Grade */}
            <div className="space-y-3">
              <label className="block text-on-primary-container font-bold text-lg px-2">Kelas</label>
              <div className="relative">
                <select 
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="select-field"
                >
                  {gradesMap[schoolLevel].map(g => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Step 2: Gender */}
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-3xl p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center text-on-tertiary text-xl font-bold">
              2
            </div>
            <h2 className="text-2xl font-extrabold text-on-surface-variant">Jenis Kelamin</h2>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
            {/* Male */}
            <div 
              onClick={() => setGender('cowok')}
              className="gender-card group"
            >
              <div className={`gender-card-inner group-hover:scale-105 ${gender === 'cowok' ? 'ring-tertiary bg-tertiary-fixed' : 'ring-transparent'}`}>
                <div className="gender-icon-wrapper bg-primary-container">
                  <User className="w-10 h-10 text-primary fill-primary" />
                </div>
                <span className="text-xl font-bold text-on-surface-variant">Cowok</span>
              </div>
              <AnimatePresence>
                {gender === 'cowok' && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-2 right-2 bg-tertiary text-white rounded-full p-1 z-10"
                  >
                    <Check className="w-4 h-4 stroke-[4]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Female */}
            <div 
              onClick={() => setGender('cewek')}
              className="gender-card group"
            >
              <div className={`gender-card-inner group-hover:scale-105 ${gender === 'cewek' ? 'ring-tertiary bg-tertiary-fixed' : 'ring-transparent'}`}>
                <div className="gender-icon-wrapper bg-secondary-container">
                  <UserRound className="w-10 h-10 text-secondary fill-secondary" />
                </div>
                <span className="text-xl font-bold text-on-surface-variant">Cewek</span>
              </div>
              <AnimatePresence>
                {gender === 'cewek' && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-2 right-2 bg-tertiary text-white rounded-full p-1 z-10"
                  >
                    <Check className="w-4 h-4 stroke-[4]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-8 flex flex-col items-center gap-6"
        >
          <button className="w-full md:w-auto md:min-w-[320px] bg-primary text-on-primary text-2xl font-black py-6 px-12 rounded-full shadow-[0_12px_30px_rgba(0,96,169,0.3)] hover:translate-y-[-4px] active:scale-95 transition-all duration-300 flex items-center justify-center gap-4 group">
            SIAP BERPETUALANG!
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-primary/30 text-primary font-bold hover:bg-primary/5 transition-colors active:scale-95">
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>
        </motion.div>
      </div>
    </div>
  );
}
