import Main from 'components/Main';
import Link from 'next/link';
import styled from 'styled-components';




function NotFound(){
  return (
    <Main>
    <img src="/images/notfound.webp" width={700}></img>
    <Link href="/">voltar para home</Link>
    </Main>
  )
}

export default NotFound;