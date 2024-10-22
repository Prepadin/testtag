import Image from "next/image";
import Script from "next/script";


export default function Home() {
  return (
    <>
            <Script id="next"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-9MYP8S5GV6`}>
            </Script>
            <Script id="next">
                {
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'MEASUREMENT-ID');`
                }
            </Script>
            <main >
                <h2>
                    Hello, This is nextjs
                    app with Google analytics.
                </h2>
            </main>
        </>
  );
}
