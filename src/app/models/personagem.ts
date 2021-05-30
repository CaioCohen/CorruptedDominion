export class Personagem{
    public "nome": string;
    public "inventario": [Inventario];
}

export class Inventario{
    public "item": string;
    public "peso": string;
    public "valor": string;
    public "quantidade": number;
}