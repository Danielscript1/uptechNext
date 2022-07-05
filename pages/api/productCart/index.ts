import { produtosCarrinho } from 'common/utils/produtosCarrinho';
import type { NextApiRequest, NextApiResponse } from 'next'
 
const handlerCart = (request: NextApiRequest, response: NextApiResponse) => {
    try {
        const { method } = request;
        switch (method) {

           case "GET":
             return response.status(200).json({produtosCarrinho});  
            case "POST":
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
                console.log("teste 2",produtosCarrinho)


                return response.status(201).json({novoProduto});
            default:
                response.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (err) {
        response.status(500).json({ statusCode: 500, message: "message " });
    }
};
export default handlerCart;