import Script from "next/script";
import React from "react";

const Analytics = () => {
  return (
    <>
      {/* Scheme.org */}
      <Script
        id="metadata"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: ` {
              "@context": "https://schema.org/", 
              "@type": "Product", 
              "name": "Page de vente sur-mesure",
              "image": "https://services.territa.fr/opengraph.png",
              "description": "Augmenter la conversion des visiteurs en leads qualifiés avec une page de vente authentique et sur-mesure.",
              "brand": {
                "@type": "Brand",
                "name": "Territa"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://services.territa.fr",
                "priceCurrency": "EUR",
                "price": "397",
                "availability": "https://schema.org/OnlineOnly",
                "itemCondition": "https://schema.org/NewCondition"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "5",
                "ratingCount": "3",
                "reviewCount": "3"
              },
              "review": [{
                "@type": "Review",
                "name": "Moulay E.",
                "reviewBody": "Je suis extrêmement satisfait du travail de Sébastien. Son professionnalisme et son expertise ont été remarquables. Il a parfaitement compris mes besoins et a livré un site web qui dépasse mes attentes. Je recommande vivement ses services",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "5"
                },
                "datePublished": "2024-03-11",
                "author": {"@type": "Person", "name": "Moulay"}
              },{
                "@type": "Review",
                "name": "Damien D.",
                "reviewBody": "Le savoir faire de Sébastien a été à la hauteur de mes attentes concernant le design de maquette web. Il a su contribuer à mes projets en proposant des idées pertinentes. Je recommande vivement ses prestations !",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "5"
                },
                "datePublished": "2024-03-14",
                "author": {"@type": "Person", "name": "Damien D."}
              },{
                "@type": "Review",
                "name": "Hugo G.",
                "reviewBody": "Excellent travail ! Sebastien a créé un site web parfait pour mon entreprise, en répondant rapidement à mes besoins et en étant très professionnel. Je le recommande vivement !",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "5"
                },
                "datePublished": "2024-03-04",
                "author": {"@type": "Person", "name": "Hugo"}
              }]
            }`,
        }}
      />

      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W5KP5B1X20"
      />
      <Script id="googleanalytics">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-W5KP5B1X20');
          `}</Script>

      {/* Cookies */}
      <Script id="Cookies">{`
      window.axeptioSettings= {
          clientId:"663ca8fb860add1fa3b8209d",
          cookiesVersion:"services-fr-EU",
          };
          
          (function(d,s) {
              let t = d.getElementsByTagName(s)[0],e = d.createElement(s);
              e.async = true;e.src = "//static.axept.io/sdk.js";
              t.parentNode.insertBefore(e, t);
              })(document, "script");
          `}</Script>
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
