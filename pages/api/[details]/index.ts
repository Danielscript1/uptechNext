import { produtosCarrinho } from 'common/utils/produtosCarrinho';
import { NextApiRequest, NextApiResponse } from 'next';
import {Produtos} from '../../../src/common/utils/data';


const handler = (request: NextApiRequest, response: NextApiResponse) => {

  const { method } = request;



  if (method === "GET") {

    return response.status(200).json(Produtos);

  }

  if (method === "POST") {

                const id = request.body.id;
                const nome = request.body.nome;
                const url = request.body.url;
                const preco = request.body.preco;
                const descricao = request.body.descricao;
                const tamanhos_disponiveis = request.body.tamanhos_disponiveis;
                const quantidade_disponivel = request.body.quantidade_disponivel;
                const secaoProdutos = request.body.secaoProdutos;
                const imagens = request.body.imagens;
                const novoProduto = {
                    id,
                    nome,
                    url,
                    preco,
                    descricao,
                    tamanhos_disponiveis,
                    quantidade_disponivel,
                    secaoProdutos,
                    imagens
                }
                produtosCarrinho.push(novoProduto)
               return response.status(201).json(novoProduto);
 

  }

};




export default handler;




