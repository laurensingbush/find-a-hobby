import React, { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render(): ReactElement {
        return (
            <Html>
                <Head />
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