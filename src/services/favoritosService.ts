import { supabase } from '@/lib/supabase';

export interface Favorito {
  id: string;
  usuario_id: string;
  tipo: 'terco' | 'novena';
  item_id: string;
  created_at?: string;
}

export const favoritosService = {
  // Listar favoritos do usuário
  async listarFavoritos(usuarioId: string): Promise<Favorito[]> {
    const { data, error } = await supabase
      .from('favoritos')
      .select('*')
      .eq('usuario_id', usuarioId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Adicionar favorito
  async adicionarFavorito(
    usuarioId: string,
    tipo: 'terco' | 'novena',
    itemId: string
  ): Promise<Favorito> {
    const { data, error } = await supabase
      .from('favoritos')
      .insert([{
        usuario_id: usuarioId,
        tipo,
        item_id: itemId,
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Remover favorito
  async removerFavorito(id: string): Promise<void> {
    const { error } = await supabase
      .from('favoritos')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Verificar se item é favorito
  async isFavorito(
    usuarioId: string,
    tipo: 'terco' | 'novena',
    itemId: string
  ): Promise<boolean> {
    const { data, error } = await supabase
      .from('favoritos')
      .select('id')
      .eq('usuario_id', usuarioId)
      .eq('tipo', tipo)
      .eq('item_id', itemId)
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return !!data;
  },

  // Toggle favorito
  async toggleFavorito(
    usuarioId: string,
    tipo: 'terco' | 'novena',
    itemId: string
  ): Promise<boolean> {
    const isFav = await this.isFavorito(usuarioId, tipo, itemId);
    
    if (isFav) {
      const { data } = await supabase
        .from('favoritos')
        .select('id')
        .eq('usuario_id', usuarioId)
        .eq('tipo', tipo)
        .eq('item_id', itemId)
        .single();
      
      if (data) {
        await this.removerFavorito(data.id);
      }
      return false;
    } else {
      await this.adicionarFavorito(usuarioId, tipo, itemId);
      return true;
    }
  },
};
