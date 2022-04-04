export type ArticleThumbnailProps = {
  imagem: string;
  titulo: string;
  resumo: string;
  conteudo?:string;
  dataPublicacao: Date;
  tempoLeitura?: string;
  autor?: {
    nome: string;
    avatar: string;
    id: number;
  };
  id: number;
}
