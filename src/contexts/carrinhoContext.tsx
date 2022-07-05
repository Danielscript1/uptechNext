import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import   { useProdutoContext }  from './produtosContext';

interface ProdutosProviderProps{
  children: ReactNode; 
}

interface imagens{
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
  secaoProdutos:number,
  imagens:imagens[]
}

interface ProdutosContextProps{
  carrinho : Props[],
  setCarrinho:(carrinho:Props[])=>void;
}


export const CarrinhoContext = createContext<ProdutosContextProps>({carrinho:[],setCarrinho: (carrinho: Props[])=>[]});
CarrinhoContext.displayName = "Carrinho"

export const  CarrinhoProvider = ({ children }:ProdutosProviderProps) => {
  const [carrinho, setCarrinho] =  useState<Props[]>([]);



  return (
    <CarrinhoContext.Provider
      value={{carrinho,setCarrinho}}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinhoContext() {
  const {
    carrinho,
    setCarrinho
  } = useContext(CarrinhoContext);
 
  const mudarQuantidade = (id: number, quantidade: number) => carrinho.map(item => {
    if (item.id === id) item.quantidade_disponivel += quantidade;
    return item;
  });
  
  async function adicionarProduto(novoProduto: Props) {
    const temOProduto = carrinho.some((item)  => item.id === novoProduto.id);
 
    let novoCarrinho = [...carrinho];
    if (!temOProduto) {
     
      novoProduto.quantidade_disponivel =  novoProduto.quantidade_disponivel = 1;

      const response = await fetch('/api/productCart', {
        method: 'POST',
        body: JSON.stringify({
          id: novoProduto.id,
          nome: novoProduto.nome,
          url: novoProduto.url,
          preco: novoProduto.preco,
          descricao: novoProduto.descricao,
          tamanhos_disponiveis: novoProduto.tamanhos_disponiveis,
          quantidade_disponivel: novoProduto.quantidade_disponivel,
          secaoProdutos: novoProduto.secaoProdutos,
          imagens: novoProduto.imagens
        }),
        headers: {
        'Content-Type': 'application/json'
      }})

      const newProductCart = await response.json()

      novoCarrinho.push(novoProduto);
      return setCarrinho(novoCarrinho);

    
    } 
  
    novoCarrinho = mudarQuantidade(novoProduto.id, 1);
    setCarrinho(novoCarrinho);
        
    
   
   
      }

  function removerProduto(id:number) {
    const produto = carrinho.find(item => item.id === id);
    const ultimo = produto?.quantidade_disponivel === 1;
    let novoCarrinho;
    if (ultimo) {
      novoCarrinho = carrinho.filter(item => item.id !== id);
      return setCarrinho(novoCarrinho);
    } 
    novoCarrinho = mudarQuantidade(id, -1);
    setCarrinho(novoCarrinho);
  }


 
  
  return {
    carrinho,
    setCarrinho,
    adicionarProduto,
    mudarQuantidade,
    removerProduto,
    
   
  }
}


