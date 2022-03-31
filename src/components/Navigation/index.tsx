import { Link } from 'react-router-dom';

//por último, não temos os itens de menu que nos direcionam para a tela de login, 
//quando o usuário não está autenticado. Nem o botão de logout, para quando o usuário está logado. 
//Por agora, basta criar ambos, e deixa-los disponíveis na nossa lista.
export const Navigation = () => {
  return (
      <>
        <Link to="/">Home</Link>
        <Link to="/artigos">Meus Artigos</Link>
        <Link to="/artigos/novo">Novo Artigo</Link>
        <Link to="/Login">Login</Link>
      </>
  );
};