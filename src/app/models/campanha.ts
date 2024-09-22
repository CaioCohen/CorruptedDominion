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
  
    constructor(init?: Partial<NPC>) {
      Object.assign(this, init);
    }
  }
  
  export class NPCs {
    primarios: NPC[];
    secundarios: NPC[];
    terciarios: NPC[];
  
    constructor(init?: Partial<NPCs>) {
      this.primarios = init?.primarios?.map(npc => new NPC(npc)) || [];
      this.secundarios = init?.secundarios?.map(npc => new NPC(npc)) || [];
      this.terciarios = init?.terciarios?.map(npc => new NPC(npc)) || [];
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
    npcs: NPCs;
    lores: Lore[];
    mapas: Mapa[];
  
    constructor(init?: Partial<Campanha>) {
      this.sessoes = init?.sessoes?.map(sessao => new Sessao(sessao)) || [];
      this.npcs = new NPCs(init?.npcs);
      this.lores = init?.lores?.map(lore => new Lore(lore)) || [];
      this.mapas = init?.mapas?.map(mapa => new Mapa(mapa)) || [];
    }
  }
  