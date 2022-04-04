import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../../Services/api-client";
import { ArticleThumbnailProps } from "../ArticleThumbnail/ArticleThumbnail.types";
import { Button } from "../Button";
import { DeleteButton } from "../DeleteButton";
import { Input } from "../Input";
import { RitchTextEditor } from "../RitchTextEditor";

type ArticleFormProps = {
  article?: ArticleThumbnailProps;
  onSubmit?: (article: ArticleThumbnailProps) => void;
}
export const ArticleForm: React.FC<ArticleFormProps> = ({
  article,
  onSubmit
}) => {

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [imagem, setImagem] = useState("");
  const [conteudo, setConteudo] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (article) {
      setTitulo(article.titulo);
      setResumo(article.resumo);
      setImagem(article.imagem);
      setConteudo(article.conteudo || '');
    }
  }, [article]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      const articleToSubmit = {
        ...article,
        titulo,
        resumo,
        imagem,
        conteudo,
      };
      onSubmit(articleToSubmit as ArticleThumbnailProps)
    }
  }
  const transformaImagemEmBase64 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      setImagem(event.target.result);
    };
  };
//dentre as props do delete button existe o ID, se a rota não possui id, o botão não é renderizado. 
  const excluirArtigo = async () => {
    await apiClient.delete<ArticleThumbnailProps>(
      `/artigos/${id}`
    );
    navigate("/artigos")
  }

  
  return (
    <div className="grid min-h-screen mx-10 ">
      <div>
        <h1 className="text-xl font-semibold">
          Hello there 👋,&nbsp;
          <span className="font-normal">please fill in your information to continue</span>
        </h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          <Input
            placeholder="Digite aqui o título"
            type="text"
            name="titulo"
            label="Titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <Input
            placeholder="Breve rewsumo do artigo"
            type="textarea"
            name="resumo"
            label="Resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />

          <Input
            type="file"
            name="image"
            label="Banner"
            onChange={transformaImagemEmBase64}
            value={""}
          />

          <RitchTextEditor
            label="Conteúdo"
            name="conteudo"
            value={conteudo}
            onChange={setConteudo}
          />

          <Button type="submit">Salvar</Button>
         <DeleteButton onClick={excluirArtigo} id={id}>Excluir</DeleteButton>
        </form>
      </div>
    </div>
  );
};