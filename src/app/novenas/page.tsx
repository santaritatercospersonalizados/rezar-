'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Check } from 'lucide-react';
import { novenasCompletas, getNovenaById, type NovenaCompleta } from '@/data/novenas';
import { useTheme } from '@/contexts/ThemeContext';
import { getDefaultImageForDevocao } from '@/utils/getDefaultImageForDevocao';

export default function NovenasPage() {
  const { colors } = useTheme();
  const [novenaSelecionada, setNovenaSelecionada] = useState<string | null>(null);
  const [diaAtual, setDiaAtual] = useState<number>(1);
  const [diasConcluidos, setDiasConcluidos] = useState<Set<number>>(new Set());

  const novena = novenaSelecionada ? getNovenaById(novenaSelecionada) : null;

  const handleConcluirDia = (dia: number) => {
    const novoSet = new Set(diasConcluidos);
    if (novoSet.has(dia)) {
      novoSet.delete(dia);
    } else {
      novoSet.add(dia);
    }
    setDiasConcluidos(novoSet);
  };

  const handleVoltar = () => {
    setNovenaSelecionada(null);
    setDiaAtual(1);
    setDiasConcluidos(new Set());
  };

  const handleProximoDia = () => {
    if (novena && diaAtual < novena.duracao) {
      setDiaAtual(diaAtual + 1);
    }
  };

  const handleDiaAnterior = () => {
    if (diaAtual > 1) {
      setDiaAtual(diaAtual - 1);
    }
  };

  if (novena) {
    const diaData = novena.dias[diaAtual - 1];
    const progresso = (diasConcluidos.size / novena.duracao) * 100;

    return (
      <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
        <header className="py-6 px-6 border-b" style={{ borderColor: `${colors.border}33` }}>
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <button 
              onClick={handleVoltar}
              className="p-2 rounded-lg transition-colors"
              style={{ color: colors.accent }}
            >
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1">
              <h1 className="font-serif text-2xl font-bold" style={{ color: colors.accent }}>
                {novena.nome}
              </h1>
              <p className="text-sm" style={{ color: colors.text, opacity: 0.7 }}>
                {novena.santo}
              </p>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-8">
          {/* Imagem do Santo */}
          <div className="mb-8 flex justify-center">
            <div 
              className="w-48 h-72 rounded-2xl bg-cover bg-center shadow-lg"
              style={{ 
                backgroundImage: `url(${novena.imagem})`,
                backgroundColor: colors.beadActive
              }}
            />
          </div>

          {/* Barra de Progresso */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold" style={{ color: colors.text }}>
                Dia {diaAtual} de {novena.duracao}
              </span>
              <span className="text-sm" style={{ color: colors.text, opacity: 0.7 }}>
                {diasConcluidos.size} dias concluídos
              </span>
            </div>
            <div 
              className="w-full h-3 rounded-full overflow-hidden"
              style={{ backgroundColor: `${colors.border}33` }}
            >
              <div 
                className="h-full transition-all duration-500 rounded-full"
                style={{ 
                  width: `${progresso}%`,
                  backgroundColor: colors.beadActive
                }}
              />
            </div>
          </div>

          {/* Conteúdo do Dia */}
          <div 
            className="p-8 rounded-2xl mb-6"
            style={{ 
              backgroundColor: colors.cardBg,
              border: `2px solid ${colors.border}`
            }}
          >
            <h2 className="font-serif text-2xl font-bold mb-6 text-center" style={{ color: colors.accent }}>
              {diaData.titulo}
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-lg" style={{ color: colors.text }}>
                  Oração Inicial:
                </h3>
                <p className="text-base leading-relaxed" style={{ color: colors.text, opacity: 0.9 }}>
                  {diaData.oracaoInicial}
                </p>
              </div>
              
              <div className="my-6 h-px" style={{ backgroundColor: `${colors.border}33` }} />
              
              <div>
                <h3 className="font-semibold mb-3 text-lg" style={{ color: colors.text }}>
                  Reflexão:
                </h3>
                <p className="text-base leading-relaxed italic" style={{ color: colors.text, opacity: 0.85 }}>
                  {diaData.reflexao}
                </p>
              </div>
              
              <div className="my-6 h-px" style={{ backgroundColor: `${colors.border}33` }} />
              
              <div>
                <h3 className="font-semibold mb-3 text-lg" style={{ color: colors.text }}>
                  Oração do Dia:
                </h3>
                <p className="text-base leading-relaxed" style={{ color: colors.text, opacity: 0.9 }}>
                  {diaData.oracaoDoDia}
                </p>
              </div>
              
              <div className="my-6 h-px" style={{ backgroundColor: `${colors.border}33` }} />
              
              <div>
                <h3 className="font-semibold mb-3 text-lg" style={{ color: colors.text }}>
                  Oração Final:
                </h3>
                <p className="text-base leading-relaxed" style={{ color: colors.text, opacity: 0.9 }}>
                  {diaData.oracaoFinal}
                </p>
              </div>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="space-y-4">
            <button
              onClick={() => handleConcluirDia(diaAtual)}
              className="w-full py-4 rounded-xl transition-all font-semibold text-lg"
              style={{ 
                backgroundColor: diasConcluidos.has(diaAtual) ? colors.beadActive : colors.cardBg,
                border: `2px solid ${colors.border}`,
                color: diasConcluidos.has(diaAtual) ? '#ffffff' : colors.text
              }}
            >
              {diasConcluidos.has(diaAtual) ? '✓ Dia Concluído' : 'Marcar Dia Como Concluído'}
            </button>

            <div className="flex gap-4">
              <button
                onClick={handleDiaAnterior}
                disabled={diaAtual === 1}
                className="flex-1 py-3 rounded-xl transition-all disabled:opacity-30"
                style={{ 
                  backgroundColor: colors.cardBg,
                  border: `2px solid ${colors.border}`,
                  color: colors.text
                }}
              >
                ← Dia Anterior
              </button>
              <button
                onClick={handleProximoDia}
                disabled={diaAtual === novena.duracao}
                className="flex-1 py-3 rounded-xl transition-all disabled:opacity-30"
                style={{ 
                  backgroundColor: colors.cardBg,
                  border: `2px solid ${colors.border}`,
                  color: colors.text
                }}
              >
                Próximo Dia →
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="font-serif text-lg italic" style={{ color: colors.text, opacity: 0.7 }}>
              Que sua oração seja luz no caminho.
            </p>
            <p className="mt-2 text-sm" style={{ color: colors.accent }}>
              — Rezar+
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <header className="py-6 px-6 border-b" style={{ borderColor: `${colors.border}33` }}>
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link href="/">
            <button 
              className="p-2 rounded-lg transition-colors"
              style={{ color: colors.accent }}
            >
              <ArrowLeft size={24} />
            </button>
          </Link>
          <h1 className="font-serif text-3xl font-bold" style={{ color: colors.accent }}>
            Novenas
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-center mb-8 text-lg" style={{ color: colors.text, opacity: 0.8 }}>
          Escolha a novena que deseja rezar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {novenasCompletas.map((novena) => (
            <button
              key={novena.id}
              onClick={() => setNovenaSelecionada(novena.id)}
              className="w-full"
            >
              <div 
                className="rounded-2xl overflow-hidden cursor-pointer transition-all hover:shadow-lg text-left"
                style={{ 
                  backgroundColor: colors.cardBg,
                  border: `2px solid ${colors.border}`
                }}
              >
                <div 
                  className="w-full h-48 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${novena.imagem})`,
                    backgroundColor: colors.beadActive
                  }}
                />
                
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <BookOpen size={24} style={{ color: colors.accent, marginTop: '2px' }} />
                    <div className="flex-1">
                      <h2 className="font-serif text-xl font-semibold mb-2" style={{ color: colors.text }}>
                        {novena.santo}
                      </h2>
                      <p className="text-sm mb-2" style={{ color: colors.text, opacity: 0.7 }}>
                        {novena.duracao} dias de oração
                      </p>
                      <p className="text-xs leading-relaxed" style={{ color: colors.text, opacity: 0.6 }}>
                        {novena.descricao}
                      </p>
                    </div>
                  </div>
                  
                  <div 
                    className="mt-4 py-2 text-center rounded-lg font-semibold"
                    style={{ 
                      backgroundColor: `${colors.accent}15`,
                      color: colors.accent
                    }}
                  >
                    Iniciar Novena
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif text-lg italic" style={{ color: colors.text, opacity: 0.7 }}>
            "A oração constante nos aproxima de Deus."
          </p>
          <p className="mt-2 text-sm" style={{ color: colors.accent }}>
            — Rezar+
          </p>
        </div>
      </main>
    </div>
  );
}
