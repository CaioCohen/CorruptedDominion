export class Sessao {
    titulo: string = "";
    descricao: string= "";
  
    constructor(init?: Partial<Sessao>) {
      Object.assign(this, init);
    }
  }
  
  export class NPC {
    urlImagem: string= "";
    nome: string= "";
    descricao: string= "";
    tipo: number = 0;
  
    constructor(init?: Partial<NPC>) {
      Object.assign(this, init);
    }
  }

  
  export class Lore {
    titulo: string= "";
    descricao: string= "";
  
    constructor(init?: Partial<Lore>) {
      Object.assign(this, init);
    }
  }
  
  export class Mapa {
    titulo: string= "";
    urlImagem: string= "";
  
    constructor(init?: Partial<Mapa>) {
      Object.assign(this, init);
    }
  }
  
  export class Campanha {
    sessoes: Sessao[];
    npcs: NPC[];
    lores: Lore[];
    mapas: Mapa[];
  
    constructor(init?: Partial<Campanha>) {
      this.sessoes = init?.sessoes?.map(sessao => new Sessao(sessao)) || [];
      this.npcs = init?.npcs?.map(npc => new NPC(npc)) || [];
      this.lores = init?.lores?.map(lore => new Lore(lore)) || [];
      this.mapas = init?.mapas?.map(mapa => new Mapa(mapa)) || [];
    }
  }
  