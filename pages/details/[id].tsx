import BotaoPesquisar from 'components/BotaoPesquisar';
import BotaoSacola from 'components/BotaoSacola';
import Layout from 'components/layout';
import { ListaDeProdutos, Props } from 'components/ListaProdutos';
import Painel, { Descricao } from 'components/painel';
import TamanhosDisponivel from 'components/TamanhosDisponivel';
import ProdutosProvider, { ProdutosContext } from 'contexts/produtosContext';
import router, { useRouter } from 'next/router';




import { ReactElement, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Titulo } from '../../styles';
import { SecaoImagem } from '../../styles';
import NotFound from '../404';
import { NextPageWithLayout } from '../_app';


const PaginaDetalhe = styled.section`
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media screen and (max-width: 700px){
          grid-template-columns: 1fr ;
        }
`;



const SecaoInformacoes = styled.section`
font-size: 5rem;
display: grid;
align-self: center;
gap: 2rem;
p{
  text-align: start;
}


`;

const SecaoModelos = styled.section`
          
 //adicinar breakpoints

`;
const SecaoContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;



const DetalhesProdutos : NextPageWithLayout = () => {

  

  const router = useRouter();
  const {produt,setProdutos} = useContext(ProdutosContext);
  const secaoProdutos1 = produt.filter(produto => produto.secaoProdutos === 1) ;
  const id = router.query.id;
  const detalhes =produt && produt.find(item=> item.id === Number(id));


  return(
   
  <>

     <BotaoPesquisar/>
    
  <PaginaDetalhe>
   
     
    
      <SecaoImagem src={detalhes?.imagens[0].url} width="100"/>
      <SecaoInformacoes>

    <Titulo>{detalhes?.nome}, R$ {detalhes?.preco}</Titulo>
      <Descricao>{detalhes?.descricao}</Descricao>
      <SecaoModelos>
        <SecaoImagem src={detalhes?.imagens[0].url}/>
        <SecaoImagem src={detalhes?.imagens[0].url}/>
        <SecaoImagem src={detalhes?.imagens[0].url}/>
        <SecaoImagem src={detalhes?.imagens[0].url}/>
        
    </SecaoModelos>
    <SecaoContainer>
      
      <BotaoSacola   onClick={()=>(detalhes)} >POR NA SACOLA</BotaoSacola>
    </SecaoContainer>
      
      
    </SecaoInformacoes>

    
   
  
   </PaginaDetalhe>
  

      <Painel/>
      <ListaDeProdutos titulo='Últimos lançamentos'  Produtos={secaoProdutos1}/>

      </>
   
  )

}

DetalhesProdutos.getLayout = function getLayout(page: ReactElement) {

  return (

    <Layout>

      {page}

    </Layout>

  )

}


export default DetalhesProdutos;