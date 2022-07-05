
import { IconeSacola } from '../../../styles';
import { getPublicImageUrl } from 'common/funcoes/caminhoImagem';
import LogoReviva from 'components/LogoReviva';
import {SecaoHeader} from  './style';
import Link from 'next/link';





const Header = () =>{

 
  return(
    <SecaoHeader>
      <LogoReviva/>
      <Link href='/cart'> 
        <IconeSacola  src="/images/icons/shopping.svg" alt="sacola de compra"/>
      </Link>
    </SecaoHeader>
  )
  
  }

  export default Header;