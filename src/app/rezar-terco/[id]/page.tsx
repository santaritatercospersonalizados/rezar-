'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight, Home, Play, Pause } from 'lucide-react';
import { getTercoById, getMisteriosDoDia } from '@/lib/terco-data';
import { useTheme } from '@/contexts/ThemeContext';

export default function TercoGuiadoPage() {
  const params = useParams();
  const tercoId = params.id as string;
  const terco = getTercoById(tercoId);
  const { colors } = useTheme();
  
  const [contaAtual, setContaAtual] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Obter informações do dia
  const { dia, tipo } = getMisteriosDoDia();

  // Mapear ID do terço para nome da imagem do santo
  const getSantoImage = (id: string): string => {
    const santoMap: { [key: string]: string } = {
      'mariano': 'nossa-senhora-de-fatima.png',
      'sao-bento': 'sao-bento.png',
      'sao-jose': 'sao-jose.png',
      'santa-rita': 'santa-rita.png',
      'sagrado-coracao': 'sagrado-coracao.png'
    };
    return santoMap[id] || 'nossa-senhora-de-fatima.png';
  };

  useEffect(() => {
    // Parar áudio ao mudar de conta
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [contaAtual]);

  if (!terco) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.bg }}>
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4" style={{ color: colors.text }}>
            Terço não encontrado
          </h1>
          <Link href="/rezar-terco">
            <button 
              className="px-6 py-3 rounded-xl transition-all"
              style={{ 
                backgroundColor: colors.cardBg,
                border: `2px solid ${colors.border}`,
                color: colors.text
              }}
            >
              Voltar
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const conta = terco.contas[contaAtual];
  const totalContas = terco.contas.length;
  const isUltimaConta = contaAtual === totalContas - 1;

  const handleProxima = () => {
    if (contaAtual < totalContas - 1) {
      setContaAtual(contaAtual + 1);
    }
  };

  const handleAnterior = () => {
    if (contaAtual > 0) {
      setContaAtual(contaAtual - 1);
    }
  };

  const handleInicio = () => {
    setContaAtual(0);
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Renderizar rosário realista em formato correto (cruz embaixo)
  const renderRosario = () => {
    const contas = terco.contas;
    const santoImage = getSantoImage(tercoId);
    
    return (
      <div className="relative w-full max-w-2xl mx-auto" style={{ height: '500px' }}>
        <svg viewBox="0 0 600 500" className="w-full h-full">
          {/* Filtro de brilho */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <clipPath id="entremeioClip">
              <ellipse cx="300" cy="310" rx="12" ry="8" />
            </clipPath>
          </defs>

          {/* Rosário circular (5 dezenas) - NO TOPO */}
          {(() => {
            const centerX = 300;
            const centerY = 180;
            const radius = 120;
            const startAngle = -90; // Começar no topo
            
            let contaIndex = 7; // Após o entremeio
            const elementos = [];

            for (let dezena = 0; dezena < 5; dezena++) {
              const dezenaPosicao = dezena * (360 / 5);
              
              // Anúncio do Mistério (se for terço mariano)
              if (tercoId === 'mariano' && contas[contaIndex]?.tipo === 'misterio') {
                const anguloMisterio = startAngle + dezenaPosicao - 5;
                const xMisterio = centerX + (radius - 15) * Math.cos((anguloMisterio * Math.PI) / 180);
                const yMisterio = centerY + (radius - 15) * Math.sin((anguloMisterio * Math.PI) / 180);
                
                elementos.push(
                  <circle
                    key={`misterio-${contaIndex}`}
                    cx={xMisterio}
                    cy={yMisterio}
                    r={contaAtual === contaIndex ? 10 : 8}
                    fill={contaAtual === contaIndex ? colors.beadActive : contaAtual > contaIndex ? colors.beadActive : colors.beadSmall}
                    stroke={colors.text}
                    strokeWidth={contaAtual === contaIndex ? 3 : 1}
                    className="transition-all duration-300"
                    filter={contaAtual === contaIndex ? 'url(#glow)' : 'none'}
                  />
                );
                contaIndex++;
              }
              
              // Pai Nosso (conta grande)
              const anguloPaiNosso = startAngle + dezenaPosicao;
              const xPaiNosso = centerX + radius * Math.cos((anguloPaiNosso * Math.PI) / 180);
              const yPaiNosso = centerY + radius * Math.sin((anguloPaiNosso * Math.PI) / 180);
              
              elementos.push(
                <circle
                  key={`grande-${contaIndex}`}
                  cx={xPaiNosso}
                  cy={yPaiNosso}
                  r={contaAtual === contaIndex ? 12 : 10}
                  fill={contaAtual === contaIndex ? colors.beadActive : contaAtual > contaIndex ? colors.beadActive : colors.beadLarge}
                  stroke={colors.text}
                  strokeWidth={contaAtual === contaIndex ? 3 : 1}
                  className="transition-all duration-300"
                  filter={contaAtual === contaIndex ? 'url(#glow)' : 'none'}
                />
              );
              contaIndex++;

              // 10 Ave Marias (contas pequenas)
              for (let i = 0; i < 10; i++) {
                const anguloOffset = (360 / 5) * ((i + 1) / 12);
                const angulo = startAngle + dezenaPosicao + anguloOffset;
                const x = centerX + radius * Math.cos((angulo * Math.PI) / 180);
                const y = centerY + radius * Math.sin((angulo * Math.PI) / 180);
                
                elementos.push(
                  <circle
                    key={`pequena-${contaIndex}`}
                    cx={x}
                    cy={y}
                    r={contaAtual === contaIndex ? 8 : 6}
                    fill={contaAtual === contaIndex ? colors.beadActive : contaAtual > contaIndex ? colors.beadActive : colors.beadSmall}
                    stroke={colors.text}
                    strokeWidth={contaAtual === contaIndex ? 3 : 1}
                    className="transition-all duration-300"
                    filter={contaAtual === contaIndex ? 'url(#glow)' : 'none'}
                  />
                );
                contaIndex++;
              }

              // Glória ao Pai (conta grande)
              const anguloGloria = startAngle + dezenaPosicao + (360 / 5) * (11 / 12);
              const xGloria = centerX + radius * Math.cos((anguloGloria * Math.PI) / 180);
              const yGloria = centerY + radius * Math.sin((anguloGloria * Math.PI) / 180);
              
              elementos.push(
                <circle
                  key={`gloria-${contaIndex}`}
                  cx={xGloria}
                  cy={yGloria}
                  r={contaAtual === contaIndex ? 12 : 10}
                  fill={contaAtual === contaIndex ? colors.beadActive : contaAtual > contaIndex ? colors.beadActive : colors.beadLarge}
                  stroke={colors.text}
                  strokeWidth={contaAtual === contaIndex ? 3 : 1}
                  className="transition-all duration-300"
                  filter={contaAtual === contaIndex ? 'url(#glow)' : 'none'}
                />
              );
              contaIndex++;
            }

            return elementos;
          })()}

          {/* Entremeio com foto do santo (oval) - conecta círculo ao cordão */}
          {contas[6] && (
            <g>
              {/* Borda dourada */}
              <ellipse
                cx="300"
                cy="310"
                rx="15"
                ry="11"
                fill={colors.accent}
                stroke={colors.accent}
                strokeWidth="2"
                className="transition-all duration-300"
                filter={contaAtual === 6 ? 'url(#glow)' : 'none'}
              />
              {/* Imagem do santo */}
              <image
                href={`/santos/${santoImage}`}
                x="288"
                y="302"
                width="24"
                height="16"
                clipPath="url(#entremeioClip)"
                preserveAspectRatio="xMidYMid slice"
                className="transition-all duration-300"
              />
              {/* Borda adicional se for conta ativa */}
              {contaAtual === 6 && (
                <ellipse
                  cx="300"
                  cy="310"
                  rx="16"
                  ry="12"
                  fill="none"
                  stroke={colors.beadActive}
                  strokeWidth="3"
                  className="transition-all duration-300"
                />
              )}
            </g>
          )}

          {/* Conta grande (Glória) - cordão descendo */}
          {contas[5] && (
            <circle
              cx="300"
              cy="335"
              r={contaAtual === 5 ? 12 : 10}
              fill={contaAtual === 5 ? colors.beadActive : contaAtual > 5 ? colors.beadActive : colors.beadLarge}
              stroke={colors.text}
              strokeWidth={contaAtual === 5 ? 3 : 1}
              className="transition-all duration-300"
              filter={contaAtual === 5 ? 'url(#glow)' : 'none'}
            />
          )}

          {/* 3 contas pequenas (Ave Maria) - cordão descendo */}
          {[4, 3, 2].map((idx, i) => (
            <circle
              key={idx}
              cx="300"
              cy={360 + i * 20}
              r={contaAtual === idx ? 8 : 6}
              fill={contaAtual === idx ? colors.beadActive : contaAtual > idx ? colors.beadActive : colors.beadSmall}
              stroke={colors.text}
              strokeWidth={contaAtual === idx ? 3 : 1}
              className="transition-all duration-300"
              filter={contaAtual === idx ? 'url(#glow)' : 'none'}
            />
          ))}

          {/* Primeira conta grande (Creio) - antes da cruz */}
          {contas[1] && (
            <circle
              cx="300"
              cy="430"
              r={contaAtual === 1 ? 12 : 10}
              fill={contaAtual === 1 ? colors.beadActive : contaAtual > 1 ? colors.beadActive : colors.beadLarge}
              stroke={colors.text}
              strokeWidth={contaAtual === 1 ? 3 : 1}
              className="transition-all duration-300"
              filter={contaAtual === 1 ? 'url(#glow)' : 'none'}
            />
          )}

          {/* Cruz na parte INFERIOR */}
          {contas[0] && (
            <g className="transition-all duration-300">
              <rect
                x="290"
                y="450"
                width="20"
                height="40"
                rx="2"
                fill={contaAtual === 0 ? colors.beadActive : colors.accent}
                stroke={colors.text}
                strokeWidth={contaAtual === 0 ? '3' : '1'}
                className="transition-all duration-300"
                filter={contaAtual === 0 ? 'url(#glow)' : 'none'}
              />
              <rect
                x="280"
                y="465"
                width="40"
                height="15"
                rx="2"
                fill={contaAtual === 0 ? colors.beadActive : colors.accent}
                stroke={colors.text}
                strokeWidth={contaAtual === 0 ? '3' : '1'}
                className="transition-all duration-300"
                filter={contaAtual === 0 ? 'url(#glow)' : 'none'}
              />
            </g>
          )}
        </svg>

        <p className="text-center mt-4 text-sm font-medium" style={{ color: colors.text, opacity: 0.7 }}>
          {contaAtual + 1} de {totalContas}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.bg }}>
      {/* Header */}
      <header className="py-4 px-6 border-b" style={{ borderColor: `${colors.border}33` }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/rezar-terco">
            <button 
              className="p-2 rounded-lg transition-colors hover:opacity-70"
              style={{ color: colors.accent }}
            >
              <ArrowLeft size={24} />
            </button>
          </Link>
          <h1 className="font-serif text-xl font-bold" style={{ color: colors.accent }}>
            {terco.nome}
          </h1>
          <div className="w-10" />
        </div>
      </header>

      {/* Mensagem do dia (apenas para Terço Mariano) */}
      {tercoId === 'mariano' && contaAtual === 0 && (
        <div className="max-w-4xl mx-auto w-full px-6 pt-6">
          <div 
            className="p-4 rounded-xl text-center"
            style={{ 
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}50`
            }}
          >
            <p className="text-sm" style={{ color: colors.text, opacity: 0.8 }}>
              Hoje é <span className="font-semibold">{dia}</span>, rezamos os Mistérios <span className="font-semibold" style={{ color: colors.accent }}>{tipo}</span>.
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-6 py-8">
        {/* Visualização do Rosário Realista */}
        <div className="mb-8">
          {renderRosario()}
        </div>

        {/* Oração Atual */}
        <div 
          className="flex-1 p-8 rounded-2xl mb-6 transition-all duration-300"
          style={{ 
            backgroundColor: colors.cardBg,
            border: `2px solid ${colors.border}`,
            boxShadow: `0 4px 12px ${colors.accent}20`
          }}
        >
          {conta.titulo && (
            <h2 className="font-serif text-2xl font-bold mb-6 text-center" style={{ color: colors.accent }}>
              {conta.titulo}
            </h2>
          )}
          
          {/* Reflexão (se houver) */}
          {conta.reflexao && (
            <div 
              className="mb-6 p-4 rounded-lg"
              style={{ 
                backgroundColor: colors.secondary,
                borderLeft: `4px solid ${colors.beadActive}`
              }}
            >
              <p className="text-base leading-relaxed italic" style={{ color: colors.text, opacity: 0.9 }}>
                {conta.reflexao}
              </p>
            </div>
          )}
          
          <p className="text-lg leading-relaxed text-center mb-6" style={{ color: colors.text }}>
            {conta.oracao}
          </p>
          
          {conta.jaculatoria && (
            <p className="text-base leading-relaxed text-center italic mt-4" style={{ color: colors.text, opacity: 0.8 }}>
              {conta.jaculatoria}
            </p>
          )}

          {/* Player de Áudio - Desabilitado até adicionar arquivos */}
          {conta.audioUrl && conta.audioUrl.startsWith('/audio/') && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={toggleAudio}
                className="flex items-center gap-3 px-6 py-3 rounded-xl transition-all hover:scale-105"
                style={{ 
                  backgroundColor: colors.accent,
                  color: colors.cardBg,
                  boxShadow: `0 2px 8px ${colors.accent}40`
                }}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                <span className="font-medium">{isPlaying ? 'Pausar' : 'Ouvir Oração'}</span>
              </button>
              <audio
                ref={audioRef}
                onEnded={() => setIsPlaying(false)}
                onError={() => {
                  console.log('Áudio não disponível ainda');
                  setIsPlaying(false);
                }}
              >
                <source src={conta.audioUrl} type="audio/mpeg" />
              </audio>
            </div>
          )}
        </div>

        {/* Mensagem Final */}
        {isUltimaConta && (
          <div className="mb-8 text-center p-6 rounded-xl" style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.border}50` }}>
            <p className="font-serif text-lg italic mb-2" style={{ color: colors.text, opacity: 0.8 }}>
              Que sua oração seja luz no caminho.
            </p>
            <p className="text-sm font-medium" style={{ color: colors.accent }}>
              — Terços Santa Rita
            </p>
          </div>
        )}

        {/* Botões de Navegação */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={handleAnterior}
            disabled={contaAtual === 0}
            className="px-6 py-3 rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 hover:scale-105"
            style={{ 
              backgroundColor: colors.cardBg,
              border: `2px solid ${colors.border}`,
              color: colors.text
            }}
          >
            <ChevronLeft size={20} />
            Voltar
          </button>

          <button
            onClick={handleInicio}
            className="px-6 py-3 rounded-xl transition-all flex items-center gap-2 hover:scale-105"
            style={{ 
              backgroundColor: colors.cardBg,
              border: `2px solid ${colors.border}`,
              color: colors.text
            }}
          >
            <Home size={20} />
            Início
          </button>

          <button
            onClick={handleProxima}
            disabled={isUltimaConta}
            className="px-6 py-3 rounded-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 hover:scale-105"
            style={{ 
              backgroundColor: colors.cardBg,
              border: `2px solid ${colors.border}`,
              color: colors.text
            }}
          >
            Avançar
            <ChevronRight size={20} />
          </button>
        </div>
      </main>
    </div>
  );
}
