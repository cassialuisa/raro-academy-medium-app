import { ArticleForm } from "../../components/ArticleForm";
import { useEffect, useState } from "react";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import axios from 'axios';
import { useParams } from "react-router-dom";

export const EditarArquivoPage = () => {
  const [ artigo, setArtigo ] = useState<ArticleThumbnailProps>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      buscarArtigo();
    }
  }, [id]);
  async function buscarArtigo() {
    const token = localStorage.getItem("access_token");
    const response = await axios.get<ArticleThumbnailProps>(
      `http://3.221.159.196:3307/artigos/${id}`,
      {
        headers: {
          'Authorization': `bearer ${token}`
        }
      }
    );

    setArtigo(response.data);
  }

  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm />
      </div>
    </>
  );
};