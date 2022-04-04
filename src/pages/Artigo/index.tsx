import faker from "@faker-js/faker";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { ArticleView } from "../../components/ArticleView";
import { ArticleViewProps } from "../../components/ArticleView/ArticleView.type";
import apiClient from "../../Services/api-client";

export const ArtigoPage = () => {
  const [article, setArticle] = useState<ArticleThumbnailProps>();
  const { id } = useParams();
  const [dataPublicacao] = useState(new Date());

  //pega o artigo a ser aberto
  const getArtigos = async () => {
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`
    );
    setArticle(response.data)
  }
  console.log(article)
  useEffect(() => {
    getArtigos();
  }, []);

  return (
    <div className="m-10">
      <ArticleView
        article={article?.conteudo}
        autor={article?.autor}
        dataPublicacao={dataPublicacao}
        tempoLeitura={'10min'} />
    </div>
  );
};