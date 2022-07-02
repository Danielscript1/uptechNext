import { rotas } from 'common/utils/rotas';
import { Titulo } from '../../../../styles';
import { Icones } from 'Interfaces/Icones';
import {Navegacao,ItemsNavegacao} from  './style';
import Link from 'next/dist/client/link';





export default function NavegacaoRodape({menu}:Icones){




  return(
    <>
    
   <Navegacao >
              <Titulo>{menu}</Titulo>
              {rotas.map((rotas,index)=>(
                  <ItemsNavegacao key={index}>
                     <Link href={rotas.to}>
                        {rotas.label}
                     </Link>

                  </ItemsNavegacao>
              ))}
           
   </Navegacao>
   </>
  )

}