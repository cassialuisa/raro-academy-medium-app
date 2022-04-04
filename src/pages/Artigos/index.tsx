import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { SemArtigos } from "../../components/SemArtigos";
import apiClient from "../../Services/api-client";


export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  async function buscarArtigos() {
    const response = await apiClient.get<ArticleThumbnailProps[]>(
      `/artigos`
    );
    setArticles(response.data)
  }
  useEffect(() => {
    buscarArtigos();
  }, []);

  if (articles.length === 0) {
    return (
      <div >
        <SemArtigos />
      </div>
    )
  }
  return (
    <div className="my-30">
      <ArticleList
        articles={articles}
      />
    </div>
  );
};