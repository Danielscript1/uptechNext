import React,{ createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Produtos } from 'common/utils/data';
import IListaProdutos from 'Interfaces/IListaProdutos';




interface ProdutosProviderProps{
  children: ReactNode; 
}


interface ProdutosContextProps{
  produt : IListaProdutos[],
  setProdutos?:(produt:IListaProdutos[])=>void
}


export const ProdutosContext = createContext<ProdutosContextProps>({produt:[]});
ProdutosContext.displayName= "listaProdutos";
export default function ProdutosProvider({ children }:ProdutosProviderProps){
  const [produt, setProdutos] = useState< IListaProdutos[]>(Produtos);

  useEffect(()=>{
    fetch('/api/details')
    .then(response =>response.json())
    .then(data=>setProdutos(data))
    },[])
  
return(
  <ProdutosContext.Provider value={{produt,setProdutos}}>
    {children}
  </ProdutosContext.Provider>

)
 
 
}

export function useProdutoContext() {
  const {
    produt,
    setProdutos
  } = useContext(ProdutosContext);





return {
  setProdutos,
  produt,
  useProdutoContext
 
  }

}