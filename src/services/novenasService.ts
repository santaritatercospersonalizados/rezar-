import { supabase } from '@/lib/supabase';

export interface Novena {
  id: string;
  nome: string;
  imagem_url: string;
  descricao: string;
  created_at?: string;
}

export interface NovenaDia {
  id: string;
  novena_id: string;
  dia: number;
  titulo: string;
  reflexao: string;
  oracao: string;
}

export const novenasService = {
  // Listar todas as novenas
  async listarNovenas(): Promise<Novena[]> {
    const { data, error } = await supabase
      .from('novenas')
      .select('*')
      .order('nome');
    
    if (error) throw error;
    return data || [];
  },

  // Buscar novena por ID
  async buscarNovenaPorId(id: string): Promise<Novena | null> {
    const { data, error } = await supabase
      .from('novenas')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Buscar dias de uma novena
  async buscarDiasNovena(novenaId: string): Promise<NovenaDia[]> {
    const { data, error } = await supabase
      .from('novenas_dias')
      .select('*')
      .eq('novena_id', novenaId)
      .order('dia');
    
    if (error) throw error;
    return data || [];
  },

  // Criar novena
  async criarNovena(novena: Omit<Novena, 'id' | 'created_at'>): Promise<Novena> {
    const { data, error } = await supabase
      .from('novenas')
      .insert([novena])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Criar dia de novena
  async criarDiaNovena(dia: Omit<NovenaDia, 'id'>): Promise<NovenaDia> {
    const { data, error } = await supabase
      .from('novenas_dias')
      .insert([dia])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Seed inicial - popular banco com novenas
  async seedNovenas(novenas: any[]) {
    for (const novena of novenas) {
      // Criar novena
      const { data: novenaData, error: novenaError } = await supabase
        .from('novenas')
        .insert([{
          id: novena.id,
          nome: novena.nome,
          imagem_url: novena.imagem,
          descricao: novena.descricao,
        }])
        .select()
        .single();

      if (novenaError) {
        console.error('Erro ao criar novena:', novenaError);
        continue;
      }

      // Criar dias da novena
      for (const dia of novena.dias) {
        const { error: diaError } = await supabase
          .from('novenas_dias')
          .insert([{
            novena_id: novenaData.id,
            dia: dia.dia,
            titulo: dia.titulo,
            reflexao: dia.reflexao,
            oracao: `${dia.oracaoInicial}\n\n${dia.oracaoDoDia}\n\n${dia.oracaoFinal}`,
          }]);

        if (diaError) {
          console.error('Erro ao criar dia da novena:', diaError);
        }
      }
    }
  },
};
