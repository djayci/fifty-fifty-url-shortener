import Head from 'next/head';
import { FC } from 'react';

export const CustomHead: FC = () => {
    return (
        <Head>
            <title>50/50 url shortener ✨</title>
            <meta charSet="UTF-8" />
            <meta key="title" content="50/50" property="og:title" />
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`} />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.GTAG}', {
                            page_path: window.location.pathname,
                        });
                    `
                }}
            />
            {/* <link href="/favicon.ico" rel="shortcut icon" />
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link> */}
        </Head>
    );
}