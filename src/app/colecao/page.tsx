'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { tercosService, type Terco } from '@/services/tercosService';
import { getDefaultImageForDevocao } from '@/utils/getDefaultImageForDevocao';

export default function ColecaoPage() {
  const { colors } = useTheme();
  const [tercos, setTercos] = useState<Terco[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarTercos();
  }, []);

  async function carregarTercos() {
    try {
      const data = await tercosService.listarTercos();
      
      // Se não houver terços, fazer seed
      if (data.length === 0) {
        await tercosService.seedTercos();
        const novosData = await tercosService.listarTercos();
        setTercos(novosData);
      } else {
        setTercos(data);
      }
    } catch (error) {
      console.error('Erro ao carregar terços:', error);
      // Fallback para dados locais se Supabase não estiver configurado
      setTercos(colecaoLocal);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.bg }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: colors.accent }} />
          <p style={{ color: colors.text }}>Carregando coleção...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <header className="py-6 px-6 border-b" style={{ borderColor: `${colors.border}33` }}>
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link href="/">
            <button 
              className="p-2 rounded-lg transition-colors"
              style={{ color: colors.accent }}
            >
              <ArrowLeft size={24} />
            </button>
          </Link>
          <h1 className="font-serif text-3xl font-bold" style={{ color: colors.accent }}>
            Coleção de Terços
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tercos.map((terco) => (
            <div 
              key={terco.id}
              className="rounded-2xl overflow-hidden"
              style={{ 
                backgroundColor: colors.cardBg,
                border: `2px solid ${colors.border}`
              }}
            >
              <div 
                className="w-full h-48 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${terco.imagem_url || getDefaultImageForDevocao(terco.nome)})`,
                  backgroundColor: colors.beadActive
                }}
              />
              
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Heart size={20} style={{ color: colors.accent, marginTop: '2px' }} />
                  <div>
                    <h2 className="font-serif text-xl font-semibold mb-1" style={{ color: colors.text }}>
                      {terco.nome.replace('Terço de ', '')}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: colors.text, opacity: 0.7 }}>
                      {terco.descricao}
                    </p>
                  </div>
                </div>

                <Link href={`/rezar-terco/${terco.id}`}>
                  <button
                    className="w-full mt-4 py-3 rounded-xl transition-all hover:shadow-lg"
                    style={{ 
                      backgroundColor: colors.cardBg,
                      border: `2px solid ${colors.border}`,
                      color: colors.text
                    }}
                  >
                    Rezar este terço
                  </button>
                </Link>
              </div>
            </div>
          ))}
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

// Dados locais como fallback
const colecaoLocal: Terco[] = [
  {
    id: 'nossa-senhora-aparecida',
    nome: 'Terço de Nossa Senhora Aparecida',
    imagem_url: 'https://images.unsplash.com/photo-1509289093826-c84a5e1b0b70?w=400&h=300&fit=crop',
    descricao: 'Padroeira do Brasil, protetora e mãe de todos os brasileiros',
    categoria: 'Nossa Senhora',
    cores: ['#1e40af', '#fbbf24'],
  },
  {
    id: 'sao-jose',
    nome: 'Terço de São José',
    imagem_url: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=300&fit=crop',
    descricao: 'Pai adotivo de Jesus, protetor das famílias e trabalhadores',
    categoria: 'Santos',
    cores: ['#92400e', '#fbbf24'],
  },
  {
    id: 'santa-luzia',
    nome: 'Terço de Santa Luzia',
    imagem_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=300&fit=crop',
    descricao: 'Protetora da visão e da luz espiritual',
    categoria: 'Santos',
    cores: ['#1e40af', '#ffffff'],
  },
  {
    id: 'santo-antonio',
    nome: 'Terço de Santo Antônio',
    imagem_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    descricao: 'Santo casamenteiro e das causas perdidas',
    categoria: 'Santos',
    cores: ['#92400e', '#fbbf24'],
  },
  {
    id: 'santa-teresinha',
    nome: 'Terço de Santa Teresinha',
    imagem_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop',
    descricao: 'Doutora da Igreja, exemplo de amor e simplicidade',
    categoria: 'Santos',
    cores: ['#ec4899', '#ffffff'],
  },
  {
    id: 'sao-francisco',
    nome: 'Terço de São Francisco',
    imagem_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop',
    descricao: 'Patrono dos animais e da natureza, exemplo de humildade',
    categoria: 'Santos',
    cores: ['#92400e', '#22c55e'],
  },
];
