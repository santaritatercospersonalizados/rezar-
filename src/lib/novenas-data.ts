export interface DiaNovena {
  dia: number;
  titulo: string;
  oracao: string;
  reflexao: string;
}

export interface NovenaData {
  id: string;
  nome: string;
  santo: string;
  descricao: string;
  dias: DiaNovena[];
}

// 1. Novena de Santa Rita
export const novenaSantaRita: NovenaData = {
  id: 'santa-rita',
  nome: 'Novena de Santa Rita',
  santo: 'Santa Rita de Cássia',
  descricao: 'Advogada das causas impossíveis',
  dias: [
    {
      dia: 1,
      titulo: 'Primeiro Dia - Fé',
      oracao: 'Ó gloriosa Santa Rita, que pela vossa fé inabalável alcançastes de Deus tantos milagres, intercedei por nós junto ao Senhor. Apresentai-lhe nossas necessidades e alcançai-nos a graça de uma fé viva e operante. Que possamos confiar plenamente na providência divina, mesmo nas situações mais difíceis. Santa Rita, rogai por nós.',
      reflexao: 'Santa Rita nos ensina que a fé move montanhas. Confiemos em Deus em todas as circunstâncias, sabendo que Ele jamais nos abandona.',
    },
    {
      dia: 2,
      titulo: 'Segundo Dia - Esperança',
      oracao: 'Santa Rita, advogada das causas impossíveis, depositamos em vós nossa esperança. Apresentai ao Senhor nossas súplicas e alcançai-nos a graça de nunca desanimar diante das dificuldades. Que vossa intercessão nos fortaleça e nos dê a certeza de que Deus sempre nos ouve. Santa Rita, rogai por nós.',
      reflexao: 'Mesmo nas situações mais difíceis, Santa Rita nunca perdeu a esperança em Deus. Que seu exemplo nos inspire a perseverar na oração.',
    },
    {
      dia: 3,
      titulo: 'Terceiro Dia - Caridade',
      oracao: 'Ó Santa Rita, que vivestes o amor ao próximo de forma heroica, ensinai-nos a amar como Jesus nos amou. Ajudai-nos a ser instrumentos de paz e caridade em nosso meio. Que possamos servir aos irmãos com generosidade e dedicação. Santa Rita, rogai por nós.',
      reflexao: 'O amor ao próximo é o caminho para a santidade que Santa Rita trilhou. Que possamos seguir seus passos na prática da caridade.',
    },
    {
      dia: 4,
      titulo: 'Quarto Dia - Paciência',
      oracao: 'Santa Rita, modelo de paciência nas tribulações, dai-nos força para suportar nossas cruzes com resignação. Ensinai-nos a aceitar a vontade de Deus em todas as circunstâncias. Que possamos encontrar na cruz o caminho da salvação. Santa Rita, rogai por nós.',
      reflexao: 'A paciência de Santa Rita diante do sofrimento é exemplo para todos nós. Que aprendamos a carregar nossa cruz com amor e confiança.',
    },
    {
      dia: 5,
      titulo: 'Quinto Dia - Perdão',
      oracao: 'Ó Santa Rita, que perdoastes os assassinos de vosso esposo, ensinai-nos a perdoar de coração. Livrai-nos do ressentimento e da amargura. Que possamos experimentar a paz que vem do perdão sincero. Santa Rita, rogai por nós.',
      reflexao: 'O perdão liberta o coração e nos aproxima de Deus. Santa Rita nos mostra que perdoar é um ato de amor e libertação.',
    },
    {
      dia: 6,
      titulo: 'Sexto Dia - Humildade',
      oracao: 'Santa Rita, exemplo de humildade, ajudai-nos a reconhecer nossa pequenez diante de Deus. Livrai-nos do orgulho e da vaidade. Que possamos servir ao Senhor com simplicidade e verdade. Santa Rita, rogai por nós.',
      reflexao: 'A humildade é o caminho para a verdadeira grandeza espiritual. Santa Rita viveu esta virtude de forma admirável.',
    },
    {
      dia: 7,
      titulo: 'Sétimo Dia - Obediência',
      oracao: 'Ó Santa Rita, que fostes obediente à vontade de Deus, ensinai-nos a fazer sempre o que Ele deseja. Ajudai-nos a discernir os caminhos do Senhor e a segui-los com fidelidade. Santa Rita, rogai por nós.',
      reflexao: 'A obediência a Deus nos conduz à paz e à felicidade verdadeira. Santa Rita é modelo de docilidade à vontade divina.',
    },
    {
      dia: 8,
      titulo: 'Oitavo Dia - Perseverança',
      oracao: 'Santa Rita, que perseverastes na oração e na vida religiosa, dai-nos força para não desistir. Que possamos ser fiéis até o fim, mesmo diante das dificuldades. Fortalecei nossa fé e nossa esperança. Santa Rita, rogai por nós.',
      reflexao: 'A perseverança na fé é fundamental para alcançarmos a vida eterna. Santa Rita nos ensina a nunca desistir de buscar a Deus.',
    },
    {
      dia: 9,
      titulo: 'Nono Dia - Gratidão',
      oracao: 'Ó gloriosa Santa Rita, agradecemos por vossa intercessão. Que possamos sempre louvar a Deus por suas bênçãos. Apresentai ao Senhor nossos pedidos e alcançai-nos as graças que necessitamos. Que nossa vida seja um hino de gratidão ao Criador. Santa Rita, rogai por nós.',
      reflexao: 'A gratidão abre nosso coração para receber ainda mais graças de Deus. Agradeçamos sempre pela intercessão de Santa Rita.',
    },
  ],
};

// 2. Novena de São Bento
export const novenaSaoBento: NovenaData = {
  id: 'sao-bento',
  nome: 'Novena de São Bento',
  santo: 'São Bento',
  descricao: 'Protetor contra o mal e tentações',
  dias: [
    {
      dia: 1,
      titulo: 'Primeiro Dia - Proteção',
      oracao: 'Glorioso São Bento, protetor contra o mal, intercedei por nós junto a Deus. Livrai-nos de todo perigo espiritual e temporal. Que vossa medalha seja nosso escudo contra as tentações e armadilhas do inimigo. São Bento, rogai por nós.',
      reflexao: 'São Bento nos ensina a buscar a proteção divina através da oração e dos sacramentos.',
    },
    {
      dia: 2,
      titulo: 'Segundo Dia - Oração',
      oracao: 'São Bento, modelo de oração, ensinai-nos a rezar com fervor. Que possamos dedicar tempo diário ao diálogo com Deus. Ajudai-nos a fazer da oração o centro de nossa vida. São Bento, rogai por nós.',
      reflexao: 'A oração é o alimento da alma. São Bento viveu intensamente a vida de oração contemplativa.',
    },
    {
      dia: 3,
      titulo: 'Terceiro Dia - Fé',
      oracao: 'São Bento, defensor da fé, fortalecei nossa crença em Jesus Cristo. Livrai-nos das dúvidas e incertezas. Que possamos professar nossa fé com coragem e convicção. São Bento, rogai por nós.',
      reflexao: 'A fé nos sustenta nas provações. São Bento enfrentou muitas dificuldades com fé inabalável.',
    },
    {
      dia: 4,
      titulo: 'Quarto Dia - Trabalho',
      oracao: 'São Bento, exemplo de trabalho, abençoai nossas atividades diárias. Ensinai-nos a trabalhar com dedicação e honestidade. Que nosso trabalho seja oferecido a Deus como oração. São Bento, rogai por nós.',
      reflexao: 'O trabalho dignifica o homem. São Bento ensinou que "orar e trabalhar" é o caminho da santificação.',
    },
    {
      dia: 5,
      titulo: 'Quinto Dia - Santidade',
      oracao: 'São Bento, mestre da vida espiritual, guiai-nos no caminho da santidade. Ajudai-nos a vencer nossos defeitos e crescer nas virtudes. Que possamos seguir vosso exemplo de vida consagrada. São Bento, rogai por nós.',
      reflexao: 'A santidade é possível para todos. São Bento nos mostra que a vida comum pode ser extraordinária.',
    },
    {
      dia: 6,
      titulo: 'Sexto Dia - Família',
      oracao: 'São Bento, protetor das famílias, abençoai nossos lares. Livrai nossas casas de todo mal e discórdia. Que a paz de Cristo reine em nossas famílias. São Bento, rogai por nós.',
      reflexao: 'A família é o primeiro lugar de evangelização. São Bento protege e abençoa os lares cristãos.',
    },
    {
      dia: 7,
      titulo: 'Sétimo Dia - Tentações',
      oracao: 'São Bento, vencedor das tentações, livrai-nos do mal. Dai-nos força para resistir às seduções do mundo. Que possamos permanecer fiéis a Deus em todas as circunstâncias. São Bento, rogai por nós.',
      reflexao: 'Com Deus, podemos vencer todas as tentações. São Bento nos ensina a lutar espiritualmente.',
    },
    {
      dia: 8,
      titulo: 'Oitavo Dia - Comunidade',
      oracao: 'São Bento, fundador de mosteiros, ajudai-nos a construir comunidades de fé. Ensinai-nos a viver em fraternidade e caridade. Que possamos ser instrumentos de união e paz. São Bento, rogai por nós.',
      reflexao: 'Juntos somos mais fortes na fé. São Bento valorizava a vida comunitária e fraterna.',
    },
    {
      dia: 9,
      titulo: 'Nono Dia - Intercessão',
      oracao: 'São Bento, intercessor poderoso, apresentai nossas preces a Deus. Alcançai-nos as graças que necessitamos. Que vossa proteção nos acompanhe sempre. São Bento, rogai por nós.',
      reflexao: 'A intercessão dos santos nos aproxima de Deus. Confiemos na poderosa proteção de São Bento.',
    },
  ],
};

// 3. Novena de Nossa Senhora Aparecida
export const novenaNossaSenhoraAparecida: NovenaData = {
  id: 'aparecida',
  nome: 'Novena de Nossa Senhora Aparecida',
  santo: 'Nossa Senhora Aparecida',
  descricao: 'Padroeira do Brasil',
  dias: [
    {
      dia: 1,
      titulo: 'Primeiro Dia - Proteção',
      oracao: 'Ó Nossa Senhora Aparecida, Mãe e Padroeira do Brasil, protegei nossa nação e nossas famílias. Cobri-nos com vosso manto sagrado e livrai-nos de todo mal. Que possamos sempre recorrer a vós com confiança filial. Nossa Senhora Aparecida, rogai por nós.',
      reflexao: 'Maria é nossa Mãe e protetora. Confiemos sempre em sua maternal intercessão.',
    },
    {
      dia: 2,
      titulo: 'Segundo Dia - Fé',
      oracao: 'Nossa Senhora Aparecida, fortalecei nossa fé. Ajudai-nos a crer como vós crestes, com total confiança em Deus. Que possamos seguir vosso exemplo de fidelidade e amor. Nossa Senhora Aparecida, rogai por nós.',
      reflexao: 'A fé de Maria é modelo para todos nós. Que possamos imitar sua confiança em Deus.',
    },
    {
      dia: 3,
      titulo: 'Terceiro Dia - Esperança',
      oracao: 'Ó Mãe Aparecida, depositamos em vós nossa esperança. Nos momentos de dificuldade, sede nosso refúgio e consolação. Que nunca percamos a esperança na misericórdia divina. Nossa Senhora Aparecida, rogai por nós.',
      reflexao: 'Maria é a Mãe da Esperança. Ela nunca nos abandona em nossas necessidades.',
    },
    {
      dia: 4,
      titulo: 'Quarto Dia - Amor',
      oracao: 'Nossa Senhora Aparecida, ensinai-nos a amar como vós amastes. Que possamos amar a Deus sobre todas as coisas e ao próximo como a nós mesmos. Enchei nossos corações de caridade. Nossa Senhora Aparecida, rogai por nós.',
      reflexao: 'O amor de Maria é puro e generoso. Que possamos aprender com ela a amar verdadeiramente.',
    },
    {
      dia: 5,
      titulo: 'Quinto Dia - Família',
      oracao: 'Ó Mãe Aparecida, abençoai nossas famílias. Protegei nossos lares e mantende-os unidos no amor. Que a Sagrada Família seja modelo para todas as famílias brasileiras. Nossa Senhora Aparecida, rogai por nós.',
      reflexao: 'Maria é a Mãe da Sagrada Família. Que ela abençoe e proteja nossas famílias.',
    },
    {
      dia: 6,
      titulo: 'Sexto Dia - Brasil',
      oracao: 'Nossa Senhora Aparecida, Padroeira do Brasil, intercedei por nossa pátria. Livrai-nos da violência, da injustiça e da corrupção. Que o Brasil seja uma nação de paz e fraternidade. Nossa Senhora Aparecida, rogai por nós.',
      reflexao: 'Maria é a Padroeira do Brasil. Confiemos a ela o futuro de nossa nação.',
    },
    {
      dia: 7,
      titulo: 'Sétimo Dia - Conversão',
      oracao: 'Ó Mãe Aparecida, alcançai-nos a graça da conversão. Ajudai-nos a abandonar o pecado e a viver segundo o Evangelho. Que possamos ser verdadeiros discípulos de Jesus. Nossa Senhora Aparecida, rogai por nós.',
      reflexao: 'Maria nos conduz à conversão e à santidade. Que possamos responder generosamente ao chamado de Deus.',
    },
    {
      dia: 8,
      titulo: 'Oitavo Dia - Perseverança',
      oracao: 'Nossa Senhora Aparecida, dai-nos perseverança na fé. Que possamos permanecer fiéis a Deus até o fim de nossa vida. Fortalecei-nos nas tentações e dificuldades. Nossa Senhora Aparecida, rogai por nós.',
      reflexao: 'Maria perseverou até o pé da cruz. Que seu exemplo nos inspire a nunca desistir.',
    },
    {
      dia: 9,
      titulo: 'Nono Dia - Gratidão',
      oracao: 'Ó Nossa Senhora Aparecida, agradecemos por vossa maternal proteção. Que possamos sempre louvar a Deus por vossa intercessão. Apresentai ao Senhor nossas necessidades e alcançai-nos as graças que pedimos. Nossa Senhora Aparecida, rogai por nós.',
      reflexao: 'Agradeçamos sempre a Maria por sua constante intercessão. Ela é nossa Mãe do Céu.',
    },
  ],
};

// 4. Novena de São Miguel Arcanjo
export const novenaSaoMiguel: NovenaData = {
  id: 'sao-miguel',
  nome: 'Novena de São Miguel Arcanjo',
  santo: 'São Miguel Arcanjo',
  descricao: 'Príncipe dos Exércitos Celestiais',
  dias: [
    {
      dia: 1,
      titulo: 'Primeiro Dia - Proteção',
      oracao: 'São Miguel Arcanjo, defendei-nos no combate. Sede nosso refúgio contra as maldades e ciladas do demônio. Que Deus o submeta, instantaneamente o pedimos. E vós, Príncipe da Milícia Celestial, pelo poder que Deus vos conferiu, precipitai no inferno a Satanás e aos outros espíritos malignos que andam pelo mundo para perder as almas. São Miguel, rogai por nós.',
      reflexao: 'São Miguel é nosso protetor contra as forças do mal. Confiemos em sua poderosa intercessão.',
    },
    {
      dia: 2,
      titulo: 'Segundo Dia - Fidelidade',
      oracao: 'Glorioso São Miguel, que permanecestes fiel a Deus quando Lúcifer se rebelou, ensinai-nos a fidelidade. Que possamos sempre escolher o bem e rejeitar o mal. Fortalecei nossa vontade para servir a Deus. São Miguel, rogai por nós.',
      reflexao: 'A fidelidade de São Miguel é exemplo para todos nós. Que possamos ser fiéis a Deus em todas as circunstâncias.',
    },
    {
      dia: 3,
      titulo: 'Terceiro Dia - Coragem',
      oracao: 'São Miguel Arcanjo, guerreiro de Deus, dai-nos coragem para enfrentar as batalhas espirituais. Livrai-nos do medo e da covardia. Que possamos lutar pela verdade e pela justiça. São Miguel, rogai por nós.',
      reflexao: 'São Miguel nos ensina a ter coragem na luta espiritual. Com Deus, somos invencíveis.',
    },
    {
      dia: 4,
      titulo: 'Quarto Dia - Humildade',
      oracao: 'Glorioso São Miguel, que proclamastes "Quem como Deus?", ensinai-nos a humildade. Livrai-nos do orgulho e da soberba. Que possamos reconhecer nossa dependência de Deus. São Miguel, rogai por nós.',
      reflexao: 'A humildade é a base de todas as virtudes. São Miguel nos mostra que Deus é o único digno de adoração.',
    },
    {
      dia: 5,
      titulo: 'Quinto Dia - Pureza',
      oracao: 'São Miguel Arcanjo, anjo puro e santo, ajudai-nos a viver na pureza. Livrai-nos de toda impureza de corpo e alma. Que possamos ser templos dignos do Espírito Santo. São Miguel, rogai por nós.',
      reflexao: 'A pureza nos aproxima de Deus. São Miguel nos ajuda a manter a pureza de coração.',
    },
    {
      dia: 6,
      titulo: 'Sexto Dia - Obediência',
      oracao: 'Glorioso São Miguel, que fostes obediente a Deus em tudo, ensinai-nos a obediência. Que possamos fazer sempre a vontade do Pai. Livrai-nos da rebeldia e da teimosia. São Miguel, rogai por nós.',
      reflexao: 'A obediência a Deus é o caminho da paz. São Miguel é modelo perfeito de obediência.',
    },
    {
      dia: 7,
      titulo: 'Sétimo Dia - Adoração',
      oracao: 'São Miguel Arcanjo, que adorais a Deus continuamente, ensinai-nos a adorar. Que possamos dar a Deus a glória que Ele merece. Ajudai-nos a viver em constante louvor. São Miguel, rogai por nós.',
      reflexao: 'A adoração é o mais nobre ato do ser humano. São Miguel nos ensina a adorar a Deus em espírito e verdade.',
    },
    {
      dia: 8,
      titulo: 'Oitavo Dia - Vigilância',
      oracao: 'Glorioso São Miguel, guardião vigilante, ensinai-nos a vigiar. Que possamos estar sempre alertas contra as tentações. Ajudai-nos a discernir os espíritos. São Miguel, rogai por nós.',
      reflexao: 'A vigilância espiritual é necessária para não cairmos em tentação. São Miguel nos ajuda a estar atentos.',
    },
    {
      dia: 9,
      titulo: 'Nono Dia - Vitória',
      oracao: 'São Miguel Arcanjo, vencedor de Satanás, alcançai-nos a vitória sobre o mal. Que possamos triunfar sobre o pecado e a tentação. Conduzi-nos à vitória final no céu. São Miguel, rogai por nós.',
      reflexao: 'Com São Miguel, temos a certeza da vitória. Que ele nos conduza ao triunfo eterno.',
    },
  ],
};

// 5. Novena de Santa Luzia
export const novenaSantaLuzia: NovenaData = {
  id: 'santa-luzia',
  nome: 'Novena de Santa Luzia',
  santo: 'Santa Luzia',
  descricao: 'Protetora da visão e luz espiritual',
  dias: [
    {
      dia: 1,
      titulo: 'Primeiro Dia - Luz',
      oracao: 'Ó gloriosa Santa Luzia, que preferistes a morte à perda da pureza, iluminai nossos caminhos. Livrai-nos de toda cegueira espiritual. Que possamos ver com os olhos da fé. Santa Luzia, rogai por nós.',
      reflexao: 'Santa Luzia é a luz que ilumina nossa vida. Que possamos enxergar com clareza o caminho de Deus.',
    },
    {
      dia: 2,
      titulo: 'Segundo Dia - Pureza',
      oracao: 'Santa Luzia, virgem pura, ajudai-nos a viver na castidade. Livrai-nos de toda impureza. Que possamos consagrar nossa vida a Deus com pureza de coração. Santa Luzia, rogai por nós.',
      reflexao: 'A pureza de Santa Luzia é exemplo para todos. Que possamos imitar sua virgindade consagrada.',
    },
    {
      dia: 3,
      titulo: 'Terceiro Dia - Visão',
      oracao: 'Ó Santa Luzia, protetora dos olhos, livrai-nos de todo mal da visão. Alcançai-nos a graça de usar bem nossos olhos para a glória de Deus. Protegei nossa visão física e espiritual. Santa Luzia, rogai por nós.',
      reflexao: 'Santa Luzia protege nossa visão. Que possamos usar nossos olhos para ver o bem e evitar o mal.',
    },
    {
      dia: 4,
      titulo: 'Quarto Dia - Coragem',
      oracao: 'Santa Luzia, mártir corajosa, dai-nos força para enfrentar as perseguições. Que possamos testemunhar nossa fé com coragem. Livrai-nos do medo de professar o nome de Jesus. Santa Luzia, rogai por nós.',
      reflexao: 'A coragem de Santa Luzia diante do martírio nos inspira. Que possamos ser corajosos na fé.',
    },
    {
      dia: 5,
      titulo: 'Quinto Dia - Fidelidade',
      oracao: 'Ó Santa Luzia, que permanecestes fiel a Cristo até a morte, ensinai-nos a fidelidade. Que possamos ser fiéis a Deus em todas as circunstâncias. Fortalecei nossa perseverança. Santa Luzia, rogai por nós.',
      reflexao: 'A fidelidade de Santa Luzia é admirável. Que possamos permanecer fiéis até o fim.',
    },
    {
      dia: 6,
      titulo: 'Sexto Dia - Caridade',
      oracao: 'Santa Luzia, que distribuístes vossos bens aos pobres, ensinai-nos a caridade. Que possamos ser generosos com os necessitados. Ajudai-nos a ver Cristo nos irmãos. Santa Luzia, rogai por nós.',
      reflexao: 'A caridade de Santa Luzia nos ensina a partilhar. Que possamos ser generosos como ela.',
    },
    {
      dia: 7,
      titulo: 'Sétimo Dia - Sabedoria',
      oracao: 'Ó Santa Luzia, iluminada pela sabedoria divina, alcançai-nos o dom da sabedoria. Que possamos discernir a vontade de Deus. Iluminai nossa inteligência. Santa Luzia, rogai por nós.',
      reflexao: 'A sabedoria de Santa Luzia vinha de Deus. Que possamos buscar a verdadeira sabedoria.',
    },
    {
      dia: 8,
      titulo: 'Oitavo Dia - Esperança',
      oracao: 'Santa Luzia, que esperastes na glória eterna, fortalecei nossa esperança. Que possamos confiar nas promessas de Deus. Livrai-nos do desânimo. Santa Luzia, rogai por nós.',
      reflexao: 'A esperança de Santa Luzia estava no céu. Que possamos ter os olhos fixos na vida eterna.',
    },
    {
      dia: 9,
      titulo: 'Nono Dia - Intercessão',
      oracao: 'Ó gloriosa Santa Luzia, apresentai a Deus nossas preces. Alcançai-nos as graças que necessitamos, especialmente a proteção de nossa visão. Que vossa luz nos guie sempre. Santa Luzia, rogai por nós.',
      reflexao: 'Santa Luzia intercede por nós no céu. Confiemos em sua poderosa intercessão.',
    },
  ],
};

// 6. Novena de Santo Antônio
export const novenaSantoAntonio: NovenaData = {
  id: 'santo-antonio',
  nome: 'Novena de Santo Antônio',
  santo: 'Santo Antônio de Pádua',
  descricao: 'Santo casamenteiro e das causas perdidas',
  dias: [
    {
      dia: 1,
      titulo: 'Primeiro Dia - Fé',
      oracao: 'Glorioso Santo Antônio, que pregastes o Evangelho com fervor, fortalecei nossa fé. Ajudai-nos a crer com firmeza nas verdades reveladas. Que possamos ser testemunhas corajosas de Cristo. Santo Antônio, rogai por nós.',
      reflexao: 'Santo Antônio foi grande pregador da fé. Que possamos imitar seu zelo apostólico.',
    },
    {
      dia: 2,
      titulo: 'Segundo Dia - Pobreza',
      oracao: 'Santo Antônio, que abraçastes a pobreza evangélica, ensinai-nos o desapego. Livrai-nos da ganância e do materialismo. Que possamos valorizar os bens espirituais. Santo Antônio, rogai por nós.',
      reflexao: 'A pobreza de Santo Antônio o tornou rico em Deus. Que possamos buscar as verdadeiras riquezas.',
    },
    {
      dia: 3,
      titulo: 'Terceiro Dia - Caridade',
      oracao: 'Ó Santo Antônio, amigo dos pobres, ensinai-nos a caridade. Que possamos ser generosos com os necessitados. Ajudai-nos a ver Cristo nos irmãos sofredores. Santo Antônio, rogai por nós.',
      reflexao: 'Santo Antônio amava os pobres com ternura. Que possamos imitar sua caridade fraterna.',
    },
    {
      dia: 4,
      titulo: 'Quarto Dia - Sabedoria',
      oracao: 'Santo Antônio, doutor da Igreja, alcançai-nos o dom da sabedoria. Que possamos conhecer e amar a Palavra de Deus. Iluminai nossa inteligência. Santo Antônio, rogai por nós.',
      reflexao: 'A sabedoria de Santo Antônio vinha do estudo e da oração. Que possamos buscar a verdadeira sabedoria.',
    },
    {
      dia: 5,
      titulo: 'Quinto Dia - Humildade',
      oracao: 'Ó Santo Antônio, modelo de humildade, livrai-nos do orgulho. Que possamos reconhecer nossa pequenez diante de Deus. Ensinai-nos a servir com simplicidade. Santo Antônio, rogai por nós.',
      reflexao: 'A humildade de Santo Antônio o tornou grande aos olhos de Deus. Que possamos ser humildes de coração.',
    },
    {
      dia: 6,
      titulo: 'Sexto Dia - Pureza',
      oracao: 'Santo Antônio, lírio de pureza, ajudai-nos a viver castamente. Livrai-nos de toda impureza. Que possamos consagrar nossa vida a Deus. Santo Antônio, rogai por nós.',
      reflexao: 'A pureza de Santo Antônio era admirável. Que possamos imitar sua castidade.',
    },
    {
      dia: 7,
      titulo: 'Sétimo Dia - Oração',
      oracao: 'Ó Santo Antônio, homem de oração, ensinai-nos a rezar. Que possamos dedicar tempo ao diálogo com Deus. Ajudai-nos a perseverar na oração. Santo Antônio, rogai por nós.',
      reflexao: 'Santo Antônio vivia em constante oração. Que possamos fazer da oração o centro de nossa vida.',
    },
    {
      dia: 8,
      titulo: 'Oitavo Dia - Milagres',
      oracao: 'Santo Antônio, operador de milagres, intercedei por nós. Apresentai a Deus nossas necessidades. Alcançai-nos as graças que pedimos, se forem para nosso bem. Santo Antônio, rogai por nós.',
      reflexao: 'Santo Antônio realizou muitos milagres. Confiemos em sua poderosa intercessão.',
    },
    {
      dia: 9,
      titulo: 'Nono Dia - Gratidão',
      oracao: 'Glorioso Santo Antônio, agradecemos por vossa intercessão. Que possamos sempre louvar a Deus por vossas graças. Apresentai ao Senhor nossos pedidos e alcançai-nos o que necessitamos. Santo Antônio, rogai por nós.',
      reflexao: 'Agradeçamos sempre a Santo Antônio por sua constante intercessão. Ele é nosso amigo no céu.',
    },
  ],
};

// 7. Novena do Sagrado Coração de Jesus
export const novenaSagradoCoracao: NovenaData = {
  id: 'sagrado-coracao',
  nome: 'Novena do Sagrado Coração de Jesus',
  santo: 'Sagrado Coração de Jesus',
  descricao: 'Devoção ao amor infinito de Jesus',
  dias: [
    {
      dia: 1,
      titulo: 'Primeiro Dia - Amor',
      oracao: 'Ó Sagrado Coração de Jesus, fornalha ardente de amor, inflamai nossos corações. Ensinai-nos a amar como Vós amastes. Que possamos corresponder ao Vosso amor infinito. Sagrado Coração de Jesus, em Vós confio.',
      reflexao: 'O Coração de Jesus é fonte de amor infinito. Que possamos beber desta fonte inesgotável.',
    },
    {
      dia: 2,
      titulo: 'Segundo Dia - Misericórdia',
      oracao: 'Sagrado Coração de Jesus, oceano de misericórdia, tende piedade de nós. Perdoai nossos pecados e renovai nossos corações. Que possamos experimentar Vossa misericórdia. Sagrado Coração de Jesus, em Vós confio.',
      reflexao: 'A misericórdia de Jesus é infinita. Confiemos sempre em seu perdão.',
    },
    {
      dia: 3,
      titulo: 'Terceiro Dia - Reparação',
      oracao: 'Ó Sagrado Coração de Jesus, tantas vezes ofendido, aceitai nossa reparação. Que possamos consolar Vosso Coração pelas ofensas recebidas. Ajudai-nos a viver em santidade. Sagrado Coração de Jesus, em Vós confio.',
      reflexao: 'Jesus deseja nossa reparação pelos pecados. Que possamos consolar seu Coração.',
    },
    {
      dia: 4,
      titulo: 'Quarto Dia - Consagração',
      oracao: 'Sagrado Coração de Jesus, consagro-me inteiramente a Vós. Tomai posse de todo o meu ser. Que eu viva somente para Vós. Sagrado Coração de Jesus, em Vós confio.',
      reflexao: 'A consagração ao Sagrado Coração nos une intimamente a Jesus. Que possamos viver esta consagração.',
    },
    {
      dia: 5,
      titulo: 'Quinto Dia - Confiança',
      oracao: 'Ó Sagrado Coração de Jesus, em Vós confio plenamente. Depositamos em Vós todas as nossas esperanças. Que possamos confiar sempre em Vossa providência. Sagrado Coração de Jesus, em Vós confio.',
      reflexao: 'A confiança no Sagrado Coração nunca é vã. Confiemos sempre em Jesus.',
    },
    {
      dia: 6,
      titulo: 'Sexto Dia - Paz',
      oracao: 'Sagrado Coração de Jesus, Príncipe da Paz, dai-nos a paz. Que Vossa paz reine em nossos corações e famílias. Livrai o mundo das guerras e violências. Sagrado Coração de Jesus, em Vós confio.',
      reflexao: 'Jesus é nossa paz verdadeira. Que possamos viver em sua paz.',
    },
    {
      dia: 7,
      titulo: 'Sétimo Dia - Salvação',
      oracao: 'Ó Sagrado Coração de Jesus, salvação de todos os que em Vós confiam, salvai-nos. Livrai-nos do pecado e da condenação eterna. Conduzi-nos ao céu. Sagrado Coração de Jesus, em Vós confio.',
      reflexao: 'Jesus é nossa salvação. Que possamos acolher sua graça salvadora.',
    },
    {
      dia: 8,
      titulo: 'Oitavo Dia - Reinado',
      oracao: 'Sagrado Coração de Jesus, reinai sobre nós. Que Vosso reino de amor se estabeleça em nossos corações. Fazei-nos Vossos apóstolos. Sagrado Coração de Jesus, em Vós confio.',
      reflexao: 'Jesus quer reinar em nossos corações. Que possamos deixá-lo reinar completamente.',
    },
    {
      dia: 9,
      titulo: 'Nono Dia - Promessas',
      oracao: 'Ó Sagrado Coração de Jesus, que prometestes bênçãos aos que Vos honram, cumpri Vossas promessas. Abençoai-nos e santificai-nos. Que possamos viver eternamente convosco. Sagrado Coração de Jesus, em Vós confio.',
      reflexao: 'As promessas do Sagrado Coração são fiéis. Confiemos em suas palavras.',
    },
  ],
};

// Lista de todas as novenas
export const todasAsNovenas: NovenaData[] = [
  novenaSantaRita,
  novenaSaoBento,
  novenaNossaSenhoraAparecida,
  novenaSaoMiguel,
  novenaSantaLuzia,
  novenaSantoAntonio,
  novenaSagradoCoracao,
];

export const getNovenaById = (id: string): NovenaData | null => {
  return todasAsNovenas.find(novena => novena.id === id) || null;
};
