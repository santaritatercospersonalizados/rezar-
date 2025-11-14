'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeType = 'claro' | 'escuro' | 'mariano' | 'bento' | 'rose';

interface ThemeColors {
  bg: string;
  text: string;
  accent: string;
  beadSmall: string;
  beadLarge: string;
  beadActive: string;
  border: string;
  cardBg: string;
  secondary: string;
}

const themes: Record<ThemeType, ThemeColors> = {
  claro: {
    bg: '#F7F3E9',
    text: '#2A2A2A',
    accent: '#CFAF6D',
    beadSmall: '#CFAF6D',
    beadLarge: '#CFAF6D',
    beadActive: '#B7C8E6',
    border: '#CFAF6D',
    cardBg: '#FFFFFF',
    secondary: '#8B7355',
  },
  escuro: {
    bg: '#1A1A2E',
    text: '#F5F5F5',
    accent: '#D4AF37',
    beadSmall: '#D4AF37',
    beadLarge: '#FFD700',
    beadActive: '#87CEEB',
    border: '#D4AF37',
    cardBg: '#16213E',
    secondary: '#0F3460',
  },
  mariano: {
    bg: '#E8F4F8',
    text: '#1A3A52',
    accent: '#4A90E2',
    beadSmall: '#6DB3F2',
    beadLarge: '#FFFFFF',
    beadActive: '#FFD700',
    border: '#4A90E2',
    cardBg: '#FFFFFF',
    secondary: '#87CEEB',
  },
  bento: {
    bg: '#0D0D0D',
    text: '#F5F5F5',
    accent: '#D4AF37',
    beadSmall: '#2A2A2A',
    beadLarge: '#1A1A1A',
    beadActive: '#C0C0C0',
    border: '#C0C0C0',
    cardBg: '#1A1A1A',
    secondary: '#3A3A3A',
  },
  rose: {
    bg: '#FFF5F7',
    text: '#4A4A4A',
    accent: '#D4A5A5',
    beadSmall: '#E8B4B8',
    beadLarge: '#F5E6E8',
    beadActive: '#D4AF37',
    border: '#D4A5A5',
    cardBg: '#FFFFFF',
    secondary: '#F8E8E9',
  },
};

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>('claro');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('rezar-plus-theme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const colors = themes[theme];
    const root = document.documentElement;
    
    root.style.setProperty('--bg', colors.bg);
    root.style.setProperty('--text', colors.text);
    root.style.setProperty('--accent', colors.accent);
    root.style.setProperty('--bead-small', colors.beadSmall);
    root.style.setProperty('--bead-large', colors.beadLarge);
    root.style.setProperty('--bead-active', colors.beadActive);
    root.style.setProperty('--border', colors.border);
    root.style.setProperty('--card-bg', colors.cardBg);
    root.style.setProperty('--secondary', colors.secondary);
    
    document.body.style.backgroundColor = colors.bg;
    document.body.style.color = colors.text;
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('rezar-plus-theme', newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
