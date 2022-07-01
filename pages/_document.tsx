import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';



export default class MyDocument extends Document {

  static async getInitialProps(

    ctx: DocumentContext

  ): Promise<DocumentInitialProps> {

    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage



    try {

      ctx.renderPage = () =>

        originalRenderPage({

          enhanceApp: (App) => (props) =>

            sheet.collectStyles(<App {...props} />),

        })



      const initialProps = await Document.getInitialProps(ctx)

      return {

        ...initialProps,

        styles: [

          <>

            {initialProps.styles}

            {sheet.getStyleElement()}

          </>,

        ],

      }

    } finally {

      sheet.seal()

    }

  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
        <link rel="shortcut icon" href="https://midia.fotos-riachuelo.com.br/spa-storefront/public/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Up!Tech Reviva Fashion by RCHLO</title>
        </Head>
        <body>
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}
  