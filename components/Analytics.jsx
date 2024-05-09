import Script from "next/script";
import React from "react";

const Analytics = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W5KP5B1X20"
      />
      <Script
        id="Google Analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W5KP5B1X20');
                `,
        }}
      />

      {/* Cookies */}
      <Script
        id="Cookies"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.axeptioSettings= {
                clientId:"663ca8fb860add1fa3b8209d",
                cookiesVersion:"services-fr-EU",
                };
                
                (function(d,s) {
                    let t = d.getElementsByTagName(s)[0],e = d.createElement(s);
                    e.async = true;e.src = "//static.axept.io/sdk.js";
                    t.parentNode.insertBefore(e, t);
                    })(document, "script");
                `,
        }}
      />
      {/* Clarity */}
      <Script
        id="Clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "m9a7c3nele");
                `,
        }}
      />
    </>
  );
};

export default Analytics;
