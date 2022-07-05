import BotaoPesquisar from 'components/BotaoPesquisar';
import Layout from 'components/layout';
import Sacola from 'components/Sacola';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';



const Carrinho: NextPageWithLayout = () => {

 

  return(
    <>

    <BotaoPesquisar/>
      <Sacola/>   
    
    </>
  )

}

Carrinho.getLayout = function getLayout(page: ReactElement) {

  return (

    <Layout>

      {page}

    </Layout>

  )

}



export default Carrinho;