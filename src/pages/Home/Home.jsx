import React , {useEffect, useState} from 'react'
import api from '../../utils/api';
import Navbar from '../../components/Navbar/Navbar';


function Home() {
    const [saldo, setSaldo] = useState(0);

    useEffect(() => {
      const usuarioLogadoString = localStorage.getItem('_usuario_logado')
      const usuarioLogado = JSON.parse(usuarioLogadoString)
      api.get(`/api/usuarios/${usuarioLogado.id}/saldo`
    ).then(response => {
      setSaldo(response.data)
    }).catch(erro =>
      console.log(erro.response)
    )
  }, [saldo]);

  return (
    <>
    <Navbar />
    <div className="container">
    <div className="jumbotron">
    <h1 className="display-3">Bem vindo!</h1>
    <p className="lead">Esse é seu sistema de finanças.</p>
    <p className="lead">Seu saldo para o mês atual é de R$ {saldo} </p>
    <hr className="my-4" />
    <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
    <p className="lead">
        <a className="btn btn-primary btn-lg" 
        href="/usuarios" 
        role="button"><i className="pi pi-users"></i>  
         Cadastrar Usuário
        </a>
        <a className="btn btn-danger btn-lg" 
        href="/cadastro-lancamentos" 
        role="button"><i className="pi pi-money-bill"></i>  
         Cadastrar Lançamento
        </a>
    </p>
</div>
</div>
</>
  )
}

export default Home