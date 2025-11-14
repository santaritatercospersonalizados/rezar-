export interface Conta {
  id: number;
  tipo: 'cruz' | 'grande' | 'pequena' | 'entremeio' | 'misterio';
  oracao: string;
  titulo?: string;
  jaculatoria?: string;
  reflexao?: string;
  audioUrl?: string;
}

export interface Misterio {
  titulo: string;
  reflexao: string;
}

export interface TercoData {
  id: string;
  nome: string;
  contas: Conta[];
  descricao?: string;
}

// Mistérios do Rosário
export const misteriosGozosos: Misterio[] = [
  {
    titulo: '1º Mistério Gozoso – A Anunciação',
    reflexao: 'Maria nos ensina a dizer "sim" ao plano de Deus, mesmo quando não entendemos tudo. Que nosso coração seja dócil como o dela.'
  },
  {
    titulo: '2º Mistério Gozoso – A Visitação',
    reflexao: 'Maria leva Jesus até Isabel, servindo com amor. Que saibamos levar Cristo aos nossos irmãos através do serviço generoso.'
  },
  {
    titulo: '3º Mistério Gozoso – O Nascimento de Jesus',
    reflexao: 'Jesus nasce pobre e humilde, mostrando que Deus se faz pequeno por amor. Que acolhamos Jesus em nossos corações com simplicidade.'
  },
  {
    titulo: '4º Mistério Gozoso – A Apresentação no Templo',
    reflexao: 'Maria e José oferecem Jesus ao Pai. Que saibamos consagrar nossa vida e nossos projetos a Deus com confiança.'
  },
  {
    titulo: '5º Mistério Gozoso – A Perda e o Encontro no Templo',
    reflexao: 'Jesus permanece no Templo cumprindo a vontade do Pai. Que busquemos sempre fazer a vontade de Deus em nossa vida.'
  }
];

export const misteriosDolorosos: Misterio[] = [
  {
    titulo: '1º Mistério Doloroso – A Agonia no Horto',
    reflexao: 'Jesus aceita a vontade do Pai mesmo em profundo sofrimento. Que tenhamos coragem de aceitar a cruz que Deus nos confia.'
  },
  {
    titulo: '2º Mistério Doloroso – A Flagelação',
    reflexao: 'Jesus sofre em silêncio por nossos pecados. Que saibamos reparar nossas faltas e acolher o perdão divino.'
  },
  {
    titulo: '3º Mistério Doloroso – A Coroação de Espinhos',
    reflexao: 'Jesus é humilhado e zombado, mas permanece em paz. Que saibamos perdoar aqueles que nos ferem e humilham.'
  },
  {
    titulo: '4º Mistério Doloroso – O Caminho do Calvário',
    reflexao: 'Jesus carrega a cruz com amor por nós. Que carreguemos nossas cruzes diárias unidos a Cristo, com esperança.'
  },
  {
    titulo: '5º Mistério Doloroso – A Crucificação e Morte',
    reflexao: 'Jesus entrega sua vida por amor. Que saibamos doar nossa vida em pequenos gestos de amor ao próximo.'
  }
];

export const misteriosGloriosos: Misterio[] = [
  {
    titulo: '1º Mistério Glorioso – A Ressurreição',
    reflexao: 'Jesus vence a morte e nos dá vida nova. Que vivamos como ressuscitados, cheios de esperança e alegria.'
  },
  {
    titulo: '2º Mistério Glorioso – A Ascensão',
    reflexao: 'Jesus sobe aos céus e nos prepara um lugar. Que nossa vida seja orientada para o céu, nossa verdadeira pátria.'
  },
  {
    titulo: '3º Mistério Glorioso – A Vinda do Espírito Santo',
    reflexao: 'O Espírito Santo transforma os apóstolos. Que nos abramos à ação do Espírito Santo em nossa vida.'
  },
  {
    titulo: '4º Mistério Glorioso – A Assunção de Maria',
    reflexao: 'Maria é elevada ao céu em corpo e alma. Que sigamos o exemplo de Maria, vivendo sempre voltados para Deus.'
  },
  {
    titulo: '5º Mistério Glorioso – A Coroação de Maria',
    reflexao: 'Maria é coroada Rainha do Céu e da Terra. Que confiemos sempre na intercessão poderosa de nossa Mãe do céu.'
  }
];

export const misteriosLuminosos: Misterio[] = [
  {
    titulo: '1º Mistério Luminoso – O Batismo de Jesus',
    reflexao: 'Jesus é batizado e o Pai o declara seu Filho amado. Que vivamos nossa vocação batismal com fidelidade e alegria.'
  },
  {
    titulo: '2º Mistério Luminoso – As Bodas de Caná',
    reflexao: 'Jesus realiza seu primeiro milagre por intercessão de Maria. Que confiemos na intercessão de Maria em nossas necessidades.'
  },
  {
    titulo: '3º Mistério Luminoso – O Anúncio do Reino',
    reflexao: 'Jesus anuncia o Reino e chama à conversão. Que acolhamos o chamado à conversão e vivamos o Evangelho com alegria.'
  },
  {
    titulo: '4º Mistério Luminoso – A Transfiguração',
    reflexao: 'Jesus revela sua glória aos discípulos. Que contemplemos a face de Cristo e sejamos transformados por sua luz.'
  },
  {
    titulo: '5º Mistério Luminoso – A Instituição da Eucaristia',
    reflexao: 'Jesus se dá como alimento. Que participemos da Eucaristia com fé, reconhecendo Jesus presente no pão e no vinho.'
  }
];

// Função para obter mistérios do dia
export function getMisteriosDoDia(): { dia: string; tipo: string; misterios: Misterio[] } {
  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const hoje = new Date().getDay();
  const nomeDia = diasDaSemana[hoje];
  
  let tipo = '';
  let misterios: Misterio[] = [];
  
  switch (hoje) {
    case 0: // Domingo
      tipo = 'Gloriosos';
      misterios = misteriosGloriosos;
      break;
    case 1: // Segunda
      tipo = 'Gozosos';
      misterios = misteriosGozosos;
      break;
    case 2: // Terça
      tipo = 'Dolorosos';
      misterios = misteriosDolorosos;
      break;
    case 3: // Quarta
      tipo = 'Gloriosos';
      misterios = misteriosGloriosos;
      break;
    case 4: // Quinta
      tipo = 'Luminosos';
      misterios = misteriosLuminosos;
      break;
    case 5: // Sexta
      tipo = 'Dolorosos';
      misterios = misteriosDolorosos;
      break;
    case 6: // Sábado
      tipo = 'Gozosos';
      misterios = misteriosGozosos;
      break;
  }
  
  return { dia: nomeDia, tipo, misterios };
}

// Função auxiliar para criar estrutura padrão do rosário
function criarEstruturaRosario(
  oracaoPequena: string,
  jaculatoria?: string,
  titulosPaiNosso?: string[]
): Conta[] {
  const contas: Conta[] = [];
  let id = 1;

  // Cruz
  contas.push({
    id: id++,
    tipo: 'cruz',
    titulo: 'Sinal da Cruz',
    oracao: 'Pelo sinal da Santa Cruz, livrai-nos Deus, Nosso Senhor, dos nossos inimigos. Em nome do Pai, do Filho e do Espírito Santo. Amém.',
    audioUrl: '/audio/sinal-da-cruz.mp3'
  });

  // Primeira conta grande (Creio)
  contas.push({
    id: id++,
    tipo: 'grande',
    titulo: 'Creio',
    oracao: 'Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado. Desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.',
    audioUrl: '/audio/creio.mp3'
  });

  // 3 contas pequenas (Ave Maria)
  for (let i = 0; i < 3; i++) {
    contas.push({
      id: id++,
      tipo: 'pequena',
      titulo: 'Ave Maria',
      oracao: 'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
      audioUrl: '/audio/ave-maria.mp3'
    });
  }

  // Conta grande (Glória ao Pai)
  contas.push({
    id: id++,
    tipo: 'grande',
    titulo: 'Glória ao Pai',
    oracao: 'Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.',
    audioUrl: '/audio/gloria.mp3'
  });

  // Entremeio
  contas.push({
    id: id++,
    tipo: 'entremeio',
    titulo: 'Entremeio',
    oracao: 'Início dos Mistérios'
  });

  // 5 dezenas
  for (let dezena = 1; dezena <= 5; dezena++) {
    // Pai Nosso
    contas.push({
      id: id++,
      tipo: 'grande',
      titulo: titulosPaiNosso ? titulosPaiNosso[dezena - 1] : `Pai Nosso - ${dezena}º Mistério`,
      oracao: 'Pai nosso, que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.',
      audioUrl: '/audio/pai-nosso.mp3'
    });

    // 10 Ave Marias
    for (let i = 0; i < 10; i++) {
      contas.push({
        id: id++,
        tipo: 'pequena',
        titulo: oracaoPequena === 'Ave Maria' ? 'Ave Maria' : oracaoPequena,
        oracao: oracaoPequena === 'Ave Maria' 
          ? 'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.'
          : oracaoPequena,
        jaculatoria: jaculatoria,
        audioUrl: '/audio/ave-maria.mp3'
      });
    }

    // Glória ao Pai
    contas.push({
      id: id++,
      tipo: 'grande',
      titulo: 'Glória ao Pai',
      oracao: 'Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.',
      audioUrl: '/audio/gloria.mp3'
    });
  }

  return contas;
}

// Função para criar Terço Mariano com mistérios do dia
export function criarTercoMarianoComMisterios(): TercoData {
  const { misterios } = getMisteriosDoDia();
  const contas: Conta[] = [];
  let id = 1;

  // Cruz
  contas.push({
    id: id++,
    tipo: 'cruz',
    titulo: 'Sinal da Cruz',
    oracao: 'Pelo sinal da Santa Cruz, livrai-nos Deus, Nosso Senhor, dos nossos inimigos. Em nome do Pai, do Filho e do Espírito Santo. Amém.',
    audioUrl: '/audio/sinal-da-cruz.mp3'
  });

  // Primeira conta grande (Creio)
  contas.push({
    id: id++,
    tipo: 'grande',
    titulo: 'Creio',
    oracao: 'Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado. Desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.',
    audioUrl: '/audio/creio.mp3'
  });

  // 3 contas pequenas (Ave Maria)
  for (let i = 0; i < 3; i++) {
    contas.push({
      id: id++,
      tipo: 'pequena',
      titulo: 'Ave Maria',
      oracao: 'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
      audioUrl: '/audio/ave-maria.mp3'
    });
  }

  // Conta grande (Glória ao Pai)
  contas.push({
    id: id++,
    tipo: 'grande',
    titulo: 'Glória ao Pai',
    oracao: 'Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.',
    audioUrl: '/audio/gloria.mp3'
  });

  // Entremeio
  contas.push({
    id: id++,
    tipo: 'entremeio',
    titulo: 'Entremeio',
    oracao: 'Início dos Mistérios'
  });

  // 5 dezenas com mistérios
  for (let dezena = 0; dezena < 5; dezena++) {
    const misterio = misterios[dezena];
    
    // Anúncio do Mistério
    contas.push({
      id: id++,
      tipo: 'misterio',
      titulo: misterio.titulo,
      oracao: misterio.titulo,
      reflexao: misterio.reflexao
    });

    // Pai Nosso
    contas.push({
      id: id++,
      tipo: 'grande',
      titulo: 'Pai Nosso',
      oracao: 'Pai nosso, que estais nos céus, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.',
      audioUrl: '/audio/pai-nosso.mp3'
    });

    // 10 Ave Marias
    for (let i = 0; i < 10; i++) {
      contas.push({
        id: id++,
        tipo: 'pequena',
        titulo: 'Ave Maria',
        oracao: 'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
        jaculatoria: 'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu, principalmente as que mais precisarem.',
        audioUrl: '/audio/ave-maria.mp3'
      });
    }

    // Glória ao Pai
    contas.push({
      id: id++,
      tipo: 'grande',
      titulo: 'Glória ao Pai',
      oracao: 'Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.',
      audioUrl: '/audio/gloria.mp3'
    });
  }

  // Salve Rainha
  contas.push({
    id: id++,
    tipo: 'grande',
    titulo: 'Salve Rainha',
    oracao: 'Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.',
    audioUrl: '/audio/salve-rainha.mp3'
  });

  return {
    id: 'mariano',
    nome: 'Terço Mariano',
    descricao: 'Terço tradicional dedicado à Virgem Maria',
    contas
  };
}

// 1. Terço Mariano (será gerado dinamicamente)
export const tercoMariano: TercoData = criarTercoMarianoComMisterios();

// 2. Terço da Misericórdia
export const tercoDaMisericordia: TercoData = {
  id: 'misericordia',
  nome: 'Terço da Misericórdia',
  descricao: 'Terço revelado a Santa Faustina',
  contas: criarEstruturaRosario(
    'Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro.',
    'Ó Sangue e Água que jorraste do Coração de Jesus, como fonte de Misericórdia para nós, eu confio em Vós!'
  )
};

// 3. Terço de São Bento
export const tercoDeSaoBento: TercoData = {
  id: 'sao-bento',
  nome: 'Terço de São Bento',
  descricao: 'Terço de proteção contra o mal',
  contas: criarEstruturaRosario(
    'Ó glorioso São Bento, sublime modelo de virtudes, vaso puríssimo de graça divina, eis-me aqui, humildemente prostrado diante de vós. Suplicando-vos vosso poderoso patrocínio. Protegei-me contra o mal.',
    'A Cruz Sagrada seja minha luz, não seja o dragão meu guia.'
  )
};

// 4. Terço de São José
export const tercoDeSaoJose: TercoData = {
  id: 'sao-jose',
  nome: 'Terço de São José',
  descricao: 'Terço dedicado ao pai adotivo de Jesus',
  contas: criarEstruturaRosario(
    'Ó São José, pai adotivo de Jesus e esposo de Maria, rogai por nós e por nossas famílias. Protegei-nos em todas as necessidades.',
    'São José, protetor das famílias, rogai por nós.'
  )
};

// 5. Terço de São Miguel Arcanjo
export const tercoDeSaoMiguel: TercoData = {
  id: 'sao-miguel',
  nome: 'Terço de São Miguel Arcanjo',
  descricao: 'Terço de proteção espiritual',
  contas: criarEstruturaRosario(
    'Por intercessão de São Miguel e do coro celeste dos Anjos, digne-se o Senhor conceder-nos a graça de sermos protegidos por eles nesta vida terrena e conduzidos à glória eterna no céu.',
    'São Miguel Arcanjo, defendei-nos no combate.'
  )
};

// 6. Terço de Santa Rita
export const tercoDeSantaRita: TercoData = {
  id: 'santa-rita',
  nome: 'Terço de Santa Rita',
  descricao: 'Terço das causas impossíveis',
  contas: criarEstruturaRosario(
    'Ó gloriosa Santa Rita, advogada das causas impossíveis, intercedei por nós junto a Deus. Apresentai ao Senhor nossas súplicas e alcançai-nos as graças que tanto necessitamos.',
    'Santa Rita, rogai por nós.'
  )
};

// 7. Terço de Nossa Senhora Aparecida
export const tercoDeNossaSenhoraAparecida: TercoData = {
  id: 'aparecida',
  nome: 'Terço de Nossa Senhora Aparecida',
  descricao: 'Terço à Padroeira do Brasil',
  contas: criarEstruturaRosario(
    'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
    'Nossa Senhora Aparecida, rogai por nós e pelo Brasil.'
  )
};

// 8. Terço de Nossa Senhora de Fátima
export const tercoDeNossaSenhoraDeFatima: TercoData = {
  id: 'fatima',
  nome: 'Terço de Nossa Senhora de Fátima',
  descricao: 'Terço pedido por Nossa Senhora em Fátima',
  contas: criarEstruturaRosario(
    'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
    'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu, principalmente as que mais precisarem.'
  )
};

// 9. Terço de Santa Luzia
export const tercoDeSantaLuzia: TercoData = {
  id: 'santa-luzia',
  nome: 'Terço de Santa Luzia',
  descricao: 'Terço pela proteção da visão e iluminação espiritual',
  contas: criarEstruturaRosario(
    'Ó gloriosa Santa Luzia, que preferistes a morte à perda da pureza, livrai-nos de todo o mal dos olhos e alcançai-nos a graça de usar bem a nossa vista para a glória de Deus.',
    'Santa Luzia, rogai por nós.'
  )
};

// 10. Terço do Espírito Santo
export const tercoDoEspiritoSanto: TercoData = {
  id: 'espirito-santo',
  nome: 'Terço do Espírito Santo',
  descricao: 'Terço para invocar os dons do Espírito Santo',
  contas: criarEstruturaRosario(
    'Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor. Enviai o vosso Espírito e tudo será criado, e renovareis a face da terra.',
    'Espírito Santo, iluminai-nos e guiai-nos.'
  )
};

// Lista de todos os terços
export const todosOsTercos: TercoData[] = [
  tercoMariano,
  tercoDaMisericordia,
  tercoDeSaoBento,
  tercoDeSaoJose,
  tercoDeSaoMiguel,
  tercoDeSantaRita,
  tercoDeNossaSenhoraAparecida,
  tercoDeNossaSenhoraDeFatima,
  tercoDeSantaLuzia,
  tercoDoEspiritoSanto
];

export const getTercoById = (id: string): TercoData | null => {
  // Se for o terço mariano, gerar com mistérios do dia
  if (id === 'mariano') {
    return criarTercoMarianoComMisterios();
  }
  return todosOsTercos.find(terco => terco.id === id) || null;
};
