import { supabase } from '@/lib/supabase';

export interface Terco {
  id: string;
  nome: string;
  imagem_url: string;
  descricao: string;
  categoria: string;
  cores: string[];
  criado_em?: string;
}

export const tercosService = {
  // Listar todos os terços
  async listarTercos(): Promise<Terco[]> {
    const { data, error } = await supabase
      .from('tercos')
      .select('*')
      .order('nome');
    
    if (error) throw error;
    return data || [];
  },

  // Buscar terço por ID
  async buscarTercoPorId(id: string): Promise<Terco | null> {
    const { data, error } = await supabase
      .from('tercos')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Criar terço
  async criarTerco(terco: Omit<Terco, 'id' | 'criado_em'>): Promise<Terco> {
    const { data, error } = await supabase
      .from('tercos')
      .insert([terco])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Atualizar terço
  async atualizarTerco(id: string, terco: Partial<Terco>): Promise<Terco> {
    const { data, error } = await supabase
      .from('tercos')
      .update(terco)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Deletar terço
  async deletarTerco(id: string): Promise<void> {
    const { error } = await supabase
      .from('tercos')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Seed inicial - popular banco com terços
  async seedTercos() {
    const tercosIniciais = [
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

    for (const terco of tercosIniciais) {
      const { error } = await supabase
        .from('tercos')
        .upsert([terco], { onConflict: 'id' });

      if (error) {
        console.error('Erro ao criar terço:', error);
      }
    }
  },
};
