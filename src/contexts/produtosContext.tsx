import React,{ createContext, ReactNode, useContext, useState } from 'react';
import { Produtos } from 'common/utils/data';
import IListaProdutos from 'Interfaces/IListaProdutos';




interface ProdutosProviderProps{
  children: ReactNode; 
}


interface ProdutosContextProps{
  produt : IListaProdutos[],
  setProdutos:(produt:IListaProdutos[])=>void
}


export const ProdutosContext = createContext<ProdutosContextProps>({produt:[],setProdutos: (produt: IListaProdutos[])=>[]});
ProdutosContext.displayName= "listaProdutos";
export default function ProdutosProvider({ children }:ProdutosProviderProps){
  const [produt, setProdutos] = useState< IListaProdutos[]>(Produtos);

  
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