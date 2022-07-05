import Blog from 'components/Blog';
import BotaoPesquisar from 'components/BotaoPesquisar';
import Layout from 'components/layout';
import { ListaDeProdutos } from 'components/ListaProdutos';
import Painel from 'components/painel';
import { ProdutosContext } from 'contexts/produtosContext';
import { useContext, ReactElement } from 'react';
import { NextPageWithLayout } from './_app';



const Home: NextPageWithLayout = () => {
 
 
  const {produt} = useContext(ProdutosContext);
  console.log(produt)
  const secaoProdutos1 = produt.filter(produto => produto.secaoProdutos === 1) ;
  console.log(secaoProdutos1)
  const secaoProdutos2 = produt.filter(produto => produto.secaoProdutos === 2) ;
    
  return(
    <>

  
     
      <BotaoPesquisar/>
        <ListaDeProdutos titulo='Últimos lançamentos'  Produtos={secaoProdutos1}/>
        <Painel/>
        <ListaDeProdutos titulo='Coleção de Verão 2022' Produtos={secaoProdutos2}/>
        <Blog/>
    
       
   
       
       
       
   
    </>
   
    
  )
}

Home.getLayout = function getLayout(page: ReactElement) {

  return (

    <Layout>

      {page}

    </Layout>

  )

}



export default Home;