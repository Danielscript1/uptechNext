import { getPublicImageUrl } from 'common/funcoes/caminhoImagem';
import { Icones } from 'Interfaces/Icones';
import Link from 'next/link';
import styled from 'styled-components';
import { Icone, Titulo } from '../../../../styles';
import { ItemsNavegacao, Navegacao } from '../NavegacaoRodape/style';



const NavegacaoContato = styled.nav(Navegacao);

export function Contatos({ menu }: Icones){
  return(
    <NavegacaoContato>
     
     <Titulo>{menu}</Titulo>
        <ItemsNavegacao>
            <a  href="#">reviva@rchlo.com.br </a>
            <a  href="#">WhatsApp <Icone  src={getPublicImageUrl("icons","whats.svg")} /></a>
            <a  href="#">11 2123-3321 <Icone src={ getPublicImageUrl("icons","phone.svg")}/></a>
        </ItemsNavegacao>
        
    </NavegacaoContato>
  )

}