'use client';

import Link from 'next/link';
import { BookOpen, Heart, Sparkles } from 'lucide-react';
import { todosOsTercos } from '@/lib/terco-data';
import { useTheme } from '@/contexts/ThemeContext';

export default function RezarTercoPage() {
  const { colors } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <header className="py-6 px-6 border-b" style={{ borderColor: `${colors.border}33` }}>
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/">
            <button 
              className="p-2 rounded-lg transition-colors"
              style={{ color: colors.accent }}
            >
              ←
            </button>
          </Link>
          <h1 className="font-serif text-3xl font-bold" style={{ color: colors.accent }}>
            Rezar o Terço
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-center mb-8 text-lg" style={{ color: colors.text, opacity: 0.8 }}>
          Escolha o terço que deseja rezar
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {todosOsTercos.map((terco) => {
            const getIcon = () => {
              if (terco.id.includes('maria') || terco.id.includes('aparecida') || terco.id.includes('fatima')) {
                return <Heart size={24} style={{ color: colors.accent }} />;
              }
              if (terco.id.includes('miguel') || terco.id.includes('bento')) {
                return <Sparkles size={24} style={{ color: colors.accent }} />;
              }
              return <BookOpen size={24} style={{ color: colors.accent }} />;
            };

            return (
              <Link key={terco.id} href={`/rezar-terco/${terco.id}`}>
                <div 
                  className="p-6 rounded-2xl cursor-pointer transition-all hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.cardBg,
                    border: `2px solid ${colors.border}`
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {getIcon()}
                    </div>
                    <div className="flex-1">
                      <h2 className="font-serif text-xl font-semibold mb-2" style={{ color: colors.text }}>
                        {terco.nome}
                      </h2>
                      {terco.descricao && (
                        <p className="text-sm" style={{ color: colors.text, opacity: 0.7 }}>
                          {terco.descricao}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
