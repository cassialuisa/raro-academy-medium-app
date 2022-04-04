import { ArticleForm } from "../../components/ArticleForm";
import { useEffect, useState } from "react";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { useParams } from "react-router-dom";
import apiClient from "../../Services/api-client";

export const EditarArquivoPage = () => {
  const [artigo, setArtigo] = useState<ArticleThumbnailProps>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      buscarArtigo();
    }
  }, [id]);

  async function buscarArtigo() {
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`
    );

    setArtigo(response.data);
  }
  const handleSubmit = async (artigo: ArticleThumbnailProps) => {
    if (artigo.id) {
      const response = await apiClient.patch<ArticleThumbnailProps>(
        `/artigos/${artigo.id}`,
        {
          'titulo': artigo.titulo,
          'imagem': artigo.imagem,
          'resumo': artigo.resumo,
          'conteudo': artigo.conteudo
        }
      )
    } else {
      const response = await apiClient.post<ArticleThumbnailProps>(
        '/artigos',
        {
          'titulo': artigo.titulo,
          'imagem': artigo.imagem,
          'resumo': artigo.resumo,
          'conteudo': artigo.conteudo
        }
      )
    }
  }
  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm
          article={artigo}
          onSubmit={handleSubmit} />
      </div>
    </>
  );
};