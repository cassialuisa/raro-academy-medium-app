import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function autenticaUsuario(event: React.FormEvent<HTMLFormElement>) {

    //essa função impede que o form execute seu comportamento padrão de submit > reload. 
    //deve ser aplicada ao form por completo e não ao botão de submit. 
    event.preventDefault();
    const url = `http://3.221.159.196:3307/auth/login`;
    const response = await axios.post(url,{ login, senha });

    const { access_token, id } = response.data;
      if (access_token) {
    navigate("/artigos");
      }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://rarolabs.com.br/assets/logo-cae9beb1976500005b5e29dea19bdaa2761082232703a16beb71ffd2117014e5.png"
            alt="Workflow"
          />
        </div>
        <form className="mt-8 space-y-6" onSubmit={autenticaUsuario}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-5">
              <Input
                type="text"
                name="login"
                label="Login"
                placeholder="login"
                required
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />
            </div>

            <div className="mt-5">
              <Input
                type="password"
                name="senha"
                label="senha"
                placeholder="********"
                required
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
            </div>
          </div>
          <div>

            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  )
};