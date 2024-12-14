
import Footer from "@/component/Footer";
import Header from "../component/Header";
import "./globals.css";



export const metadata = {
  title: "Ozark Company",
  description: "Created by CWL pvt. ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Spartan%3A400%2C500%2C600%2C700%2C800%2C900%7CInter%3A300%2C400%2C500%2C600%2C700%2C800%2C900&amp;subset=latin%2Clatin-ext" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/owl.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/jquery.fancybox.min.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/icomoon.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/flexslider.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/style.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/scss/elements/theme-css.css" type="text/css" media="all" />
        <link rel="stylesheet" id="creote-color-switcher-css" href="assets/css/scss/elements/color-switcher/color.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/woocommerce-layout.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/woocommerce.css" type="text/css" media="all" />
        <link rel="stylesheet" href="/assets/css/responsiv.css" />
      </head>

      <body>

        <Header />

        {children}

        <Footer />



      </body>
    </html>
  );
}
