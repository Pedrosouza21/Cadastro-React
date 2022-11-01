import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
     new Cliente('Pedro', 17, "1"),
     new Cliente('Bia', 15, "2"),
     new Cliente('Carlos', 34, "3"),
     new Cliente('Rodrigo', 54, "4"),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }


  function clienteExcluido(cliente: Cliente){
    console.log(` Excluir.. ${cliente.nome}` )
  }

  return (
    <div className= {`
    flex h-screen justify-center items-center
    bg-gradient-to-r  from-blue-500 to-purple-500 text-white
     `}> 

    <Layout titulo="Cadastro Simples">
      <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} 
      clienteExcluido={clienteExcluido}></Tabela>
    </Layout>
    </div>
  ) 
}
     
