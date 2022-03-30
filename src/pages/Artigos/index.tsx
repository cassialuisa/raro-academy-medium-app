import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { geraArtigos } from "../../stories/helpers/gerador-artigos";

export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  useEffect(() => {
    setArticles(geraArtigos(5));
  }, []);

  if (geraArtigos(0)) {
    <div >
      <h1>Ainda não temos artigos publicados</h1>
    </div>
  }
  return (
    <div className="my-30">
      <ArticleList
        articles={articles}
      />
    </div>
  );
};