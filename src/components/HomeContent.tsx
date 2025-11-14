'use client';

import Link from 'next/link';
import { Sparkles, BookOpen, Heart, Palette } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function HomeContent() {
  const { colors } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <header className="py-8 px-6 text-center">
        <div className="flex justify-end mb-4 px-6">
          <Link href="/aparencia">
            <button 
              className="p-3 rounded-xl transition-all hover:scale-105"
              style={{ 
                backgroundColor: colors.cardBg,
                border: `2px solid ${colors.border}`,
                color: colors.accent
              }}
            >
              <Palette size={24} />
            </button>
          </Link>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2" style={{ color: colors.accent }}>
          Rezar+
        </h1>
        <p className="text-base" style={{ color: colors.text }}>
          Reze com fé e devoção
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <Link href="/rezar-terco">
            <div 
              className="p-8 rounded-2xl cursor-pointer transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: colors.cardBg,
                border: `2px solid ${colors.border}`
              }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Sparkles size={32} style={{ color: colors.accent }} />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-semibold mb-2" style={{ color: colors.text }}>
                    Rezar o Terço
                  </h2>
                  <p className="text-base" style={{ color: colors.text, opacity: 0.8 }}>
                    Escolha um terço e siga o guia passo a passo
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/novenas">
            <div 
              className="p-8 rounded-2xl cursor-pointer transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: colors.cardBg,
                border: `2px solid ${colors.border}`
              }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <BookOpen size={32} style={{ color: colors.accent }} />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-semibold mb-2" style={{ color: colors.text }}>
                    Novenas
                  </h2>
                  <p className="text-base" style={{ color: colors.text, opacity: 0.8 }}>
                    Participe de novenas completas com reflexões diárias
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/colecao">
            <div 
              className="p-8 rounded-2xl cursor-pointer transition-all hover:shadow-xl"
              style={{ 
                backgroundColor: colors.cardBg,
                border: `2px solid ${colors.border}`
              }}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Heart size={32} style={{ color: colors.accent }} />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl font-semibold mb-2" style={{ color: colors.text }}>
                    Coleção de Terços
                  </h2>
                  <p className="text-base" style={{ color: colors.text, opacity: 0.8 }}>
                    Explore terços dedicados aos santos mais venerados
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif text-lg italic" style={{ color: colors.text, opacity: 0.7 }}>
            "Que sua oração traga paz e bênçãos ao seu coração. A fé nos une."
          </p>
          <p className="mt-2 text-sm" style={{ color: colors.accent }}>
            — Rezar+
          </p>
        </div>
      </main>
    </div>
  );
}
