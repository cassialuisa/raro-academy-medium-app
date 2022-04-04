import { useEffect, useState } from "react";
import axios from 'axios';
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import apiClient from "../../Services/api-client";
import { SemArtigos } from "../../components/SemArtigos";

export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  async function buscaMeusArtigos() {
    
    const response = await apiClient.get<ArticleThumbnailProps[]>(
      '/artigos/meus-artigos'
    )
    console.log(response.data)
    setArticles(response.data);
  }

  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  if (articles.length === 0) {
    return(
    <div >
      <SemArtigos />
    </div>
    )
  }
  return (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  );
};
