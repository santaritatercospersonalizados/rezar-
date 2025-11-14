// Função para gerar imagem padrão para devoções
export function getDefaultImageForDevocao(devocao: string): string {
  const devocaoLower = devocao.toLowerCase();

  // Mapeamento de devoções para imagens do Unsplash
  const imageMap: Record<string, string> = {
    'nossa senhora aparecida': 'https://images.unsplash.com/photo-1509289093826-c84a5e1b0b70?w=400&h=600&fit=crop',
    'aparecida': 'https://images.unsplash.com/photo-1509289093826-c84a5e1b0b70?w=400&h=600&fit=crop',
    'nossa senhora de fátima': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
    'fatima': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
    'nossa senhora do carmo': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop',
    'carmo': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop',
    'nossa senhora das graças': 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=600&fit=crop',
    'graças': 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=600&fit=crop',
    'são josé': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
    'jose': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
    'são miguel': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    'miguel': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    'são bento': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop',
    'bento': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop',
    'santa rita': 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=600&fit=crop',
    'rita': 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=600&fit=crop',
    'santa luzia': 'https://images.unsplash.com/photo-1509289093826-c84a5e1b0b70?w=400&h=600&fit=crop',
    'luzia': 'https://images.unsplash.com/photo-1509289093826-c84a5e1b0b70?w=400&h=600&fit=crop',
    'sagrado coração': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop',
    'sagrado coracao': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop',
    'divina misericórdia': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
    'divina misericordia': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop',
    'santo antônio': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
    'antonio': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
    'padre pio': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    'pio': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    'são francisco': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
    'francisco': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop',
  };

  // Buscar imagem correspondente
  for (const [key, url] of Object.entries(imageMap)) {
    if (devocaoLower.includes(key)) {
      return url;
    }
  }

  // Imagem padrão caso não encontre
  return 'https://images.unsplash.com/photo-1509289093826-c84a5e1b0b70?w=400&h=600&fit=crop';
}

// Função para gerar placeholder SVG com estilo mariano
export function generateMarianPlaceholder(santo: string): string {
  const firstLetter = santo.charAt(0).toUpperCase();
  
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="400" height="600" fill="url(#grad)"/>
      <circle cx="200" cy="300" r="80" fill="#fbbf24" opacity="0.2" filter="url(#glow)"/>
      <text x="200" y="330" font-family="serif" font-size="120" fill="#fbbf24" text-anchor="middle" filter="url(#glow)">${firstLetter}</text>
      <text x="200" y="520" font-family="serif" font-size="24" fill="white" text-anchor="middle" opacity="0.9">${santo}</text>
    </svg>
  `)}`;
}
