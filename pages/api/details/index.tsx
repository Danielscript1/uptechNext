import { NextApiRequest, NextApiResponse } from 'next';
import {Produtos} from '../../../src/common/utils/data';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, query } = req;

    switch (method) {
      case 'GET':
        res.status(200).json(Produtos);
        console.log(Produtos)
        break;
      default:
        res.setHeader('Allow', ['GET', 'PUT']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "message "});
  }
};

export default handler;