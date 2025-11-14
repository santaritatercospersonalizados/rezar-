'use client';

import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { useTheme, ThemeType } from '@/contexts/ThemeContext';

const temas = [
  {
    id: 'claro' as ThemeType,
    nome: 'Claro Devocional',
    descricao: 'Tons bege, dourado suave e branco',
    preview: {
      bg: '#F7F3E9',
      accent: '#CFAF6D',
      text: '#2A2A2A',
    }
  },
  {
    id: 'escuro' as ThemeType,
    nome: 'Escuro Devocional',
    descricao: 'Azul-marinho profundo com dourado',
    preview: {
      bg: '#1A1A2E',
      accent: '#D4AF37',
      text: '#F5F5F5',
    }
  },
  {
    id: 'mariano' as ThemeType,
    nome: 'Mariano (Azul)',
    descricao: 'Azul claro com acentos dourados',
    preview: {
      bg: '#E8F4F8',
      accent: '#4A90E2',
      text: '#1A3A52',
    }
  },
  {
    id: 'bento' as ThemeType,
    nome: 'São Bento',
    descricao: 'Preto e dourado com detalhes prata',
    preview: {
      bg: '#0D0D0D',
      accent: '#D4AF37',
      text: '#F5F5F5',
    }
  },
  {
    id: 'rose' as ThemeType,
    nome: 'Rosé',
    descricao: 'Tons rosé, creme e dourado',
    preview: {
      bg: '#FFF5F7',
      accent: '#D4A5A5',
      text: '#4A4A4A',
    }
  },
];

export default function AparenciaPage() {
  const { theme, setTheme, colors } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <header className="py-4 px-6 border-b" style={{ borderColor: `${colors.border}33` }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <button 
              className="p-2 rounded-lg transition-colors hover:opacity-70"
              style={{ color: colors.accent }}
            >
              <ArrowLeft size={24} />
            </button>
          </Link>
          <h1 className="font-serif text-xl font-bold" style={{ color: colors.accent }}>
            Aparência
          </h1>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-bold mb-2" style={{ color: colors.text }}>
            Escolha seu Tema
          </h2>
          <p className="text-base" style={{ color: colors.text, opacity: 0.7 }}>
            Personalize a aparência do Rezar+ de acordo com sua preferência
          </p>
        </div>

        <div className="space-y-4">
          {temas.map((tema) => (
            <button
              key={tema.id}
              onClick={() => setTheme(tema.id)}
              className="w-full p-6 rounded-2xl transition-all hover:scale-[1.02] relative"
              style={{ 
                backgroundColor: colors.cardBg,
                border: `2px solid ${theme === tema.id ? colors.accent : colors.border}`,
                boxShadow: theme === tema.id ? `0 4px 12px ${colors.accent}40` : 'none'
              }}
            >
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div 
                    className="w-12 h-12 rounded-lg border-2"
                    style={{ 
                      backgroundColor: tema.preview.bg,
                      borderColor: tema.preview.accent
                    }}
                  />
                  <div className="flex flex-col gap-1">
                    <div 
                      className="w-8 h-5 rounded"
                      style={{ backgroundColor: tema.preview.accent }}
                    />
                    <div 
                      className="w-8 h-5 rounded"
                      style={{ backgroundColor: tema.preview.text }}
                    />
                  </div>
                </div>

                <div className="flex-1 text-left">
                  <h3 className="font-serif text-lg font-semibold mb-1" style={{ color: colors.text }}>
                    {tema.nome}
                  </h3>
                  <p className="text-sm" style={{ color: colors.text, opacity: 0.7 }}>
                    {tema.descricao}
                  </p>
                </div>

                {theme === tema.id && (
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.accent }}
                  >
                    <Check size={20} style={{ color: colors.cardBg }} />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <div 
          className="mt-8 p-6 rounded-xl"
          style={{ 
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}50`
          }}
        >
          <p className="text-sm text-center" style={{ color: colors.text, opacity: 0.7 }}>
            Sua preferência será salva automaticamente e aplicada em todo o Rezar+
          </p>
        </div>
      </main>
    </div>
  );
}
