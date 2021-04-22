import '../styles/global.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
    domain="dev-acf50tly.eu.auth0.com"
    clientId="DK4EWRW49QDxupwJxC6LJBsnyf1zqVaM"
    redirectUri={process.env.NEXT_PUBLIC_URL}
  >
  
    <div className="antialiased text-gray-600">
      <Header />
      <main className="mt-6 mb-20">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
    </Auth0Provider>
   
  )
 }

export default MyApp
