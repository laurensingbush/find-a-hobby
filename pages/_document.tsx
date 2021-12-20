import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render(): ReactElement {
        return (
            <Html>
                <Head>
                    <link 
                      href='https://fonts.googleapis.com/css2?family=Caveat&family=Roboto:wght@300;400;500;700&display=swap'
                      rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <div id='modal-root'></div>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;