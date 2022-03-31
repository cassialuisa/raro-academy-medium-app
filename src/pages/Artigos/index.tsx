import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { geraArtigos } from "../../stories/helpers/gerador-artigos";
import { SemArtigos } from "../../components/SemArtigos";


export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  useEffect(() => {
    setArticles(geraArtigos(10));
  }, []);

  if (geraArtigos(0)) {
    <div >
      <SemArtigos/>
    </div>
  }
  return (
    <div className="my-30">
      //<ArticleList
        articles={articles}
      />
    </div>
  );
};