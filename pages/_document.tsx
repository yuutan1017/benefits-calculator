import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@NYou0611" />
          <meta
            name="twitter:title"
            content="育休中に働いた場合はどうなるか、自動でシミュレーションします"
          />
          <meta
            name="twitter:description"
            content="主に、給与や給付金などお金のことについてまとめています。"
          />
          <meta
            name="twitter:image"
            content="https://paternity-leave.vercel.app/images/top.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
