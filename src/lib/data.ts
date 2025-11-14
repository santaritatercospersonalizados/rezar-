export interface Prayer {
  id: string;
  text: string;
  audioUrl?: string; // Placeholder for audio
}

export interface Rosary {
  id: string;
  name: string;
  description: string;
  prayers: Prayer[];
  saint?: string;
  imageUrl?: string;
}

export const rosaries: Rosary[] = [
  {
    id: 'mariano',
    name: 'Terço Mariano',
    description: 'O terço dedicado à Virgem Maria, rezado em honra de Nossa Senhora.',
    saint: 'Nossa Senhora',
    prayers: [
      { id: '1', text: 'Pai Nosso...' },
      { id: '2', text: 'Ave Maria...' },
      // Add more prayers
    ],
  },
  {
    id: 'misericordia',
    name: 'Terço da Misericórdia',
    description: 'Terço dedicado à Divina Misericórdia.',
    saint: 'Divina Misericórdia',
    prayers: [
      { id: '1', text: 'Pai Nosso...' },
      // Add prayers
    ],
  },
  {
    id: 'sao-miguel',
    name: 'Terço de São Miguel Arcanjo',
    description: 'Terço dedicado ao Arcanjo São Miguel.',
    saint: 'São Miguel Arcanjo',
    prayers: [
      { id: '1', text: 'Pai Nosso...' },
      // Add prayers
    ],
  },
  {
    id: 'santa-rita',
    name: 'Terço de Santa Rita',
    description: 'Terço dedicado a Santa Rita de Cássia.',
    saint: 'Santa Rita',
    prayers: [
      { id: '1', text: 'Pai Nosso...' },
      // Add prayers
    ],
  },
];

export const saintRosaries: Rosary[] = [
  {
    id: 'ns-aparecida',
    name: 'Terço de Nossa Senhora Aparecida',
    description: 'Breve história de Nossa Senhora Aparecida.',
    saint: 'Nossa Senhora Aparecida',
    prayers: [],
  },
  {
    id: 'sao-bento',
    name: 'Terço de São Bento',
    description: 'Breve história de São Bento.',
    saint: 'São Bento',
    prayers: [],
  },
  // Add more
];