/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

const Meta = ({ site_title, keywords, description, logo }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="title" property="og:title" content={site_title} />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        property="og:description"
        content={description}
        key="ogdesc"
      />

      <meta property="og:site_name" content={site_title} key="ogsitename" />
      <meta property="og:url" content="https://merohealthapp.com" key="ogurl" />
      <title>{site_title}</title>
      <meta name="application-name" content={site_title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={site_title} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="msapplication-config"
        content="/static/icons/browserconfig.xml"
      />
      <meta name="msapplication-TileColor" content="#800000" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#800000" />

      <link rel="apple-touch-icon" sizes="180x180" href="/media/logo.png" />
      <link
        rel="icon"
        type="image/svg"
        sizes="16x16"
        href="/media/load-svg.svg"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://merohealth.com/" />
      <meta name="twitter:title" content={site_title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:creator" content="@MeroHealth" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

Meta.defaultProps = {
  site_title: "Mero Health",
  keywords: "Mero Health",
  description:
    "Home PCR test services and Other Lab test. Contact Us at Mobile number: +977 9866515852",
};

export default Meta;
