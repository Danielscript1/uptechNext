import IListaProdutos from "Interfaces/IListaProdutos";
import TamanhosDisponivel from 'components/TamanhosDisponivel';
import BotaoSacola from '../BotaoSacola';
import {Titulo,DescricaoItems,SecaoImagem } from '../../../styles/index';
import {Secao,ContainerBorda} from  './style';
import {CarrinhoProvider, useCarrinhoContext} from 'contexts/carrinhoContext';
import Link from 'next/link';



export interface imagens{
  url:string;
  descricao:string;
}

export interface Props{
  id:number;
  nome:string;
  url:string;
  preco:number;
  descricao:string;
  tamanhos_disponiveis:string[];
  quantidade_disponivel:number;
  secaoProdutos:number;
  imagens:imagens[]
}


interface listaProdutos{
  titulo:string;
  Produtos : IListaProdutos[];
  
  
}




export  function ListaDeProdutos({titulo,Produtos}:listaProdutos){
  
 

    const {carrinho,setCarrinho,adicionarProduto} = useCarrinhoContext();
     
  
 

 return(


<>




<Titulo>{titulo}</Titulo>
<Secao>

{Produtos.map((item) =>(

     
  <div  key={item.id}> 
      <ContainerBorda>
        <SecaoImagem width="100"  src={item.imagens[0].url} alt={item.imagens[0].descricao}/>
        <TamanhosDisponivel tamanhos={item.tamanhos_disponiveis}/>
      </ContainerBorda>
      <Link href={`/details/${item.id}`}><a>
        <Titulo>{item.nome}</Titulo>
        <DescricaoItems >R${item.preco}</DescricaoItems>

      </a>
        
       </Link> 
     
      <BotaoSacola  onClick={()=>adicionarProduto(item)}>POR NA SACOLA</BotaoSacola>
    
   


  </div>
))}
</Secao>



</>

)}