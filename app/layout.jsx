import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'

export const metadata = {
  title: "FlavorBOT",
  description: 'You can now find and save recipes that suit your cravings!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className="p-3 min-h-screen h-full bg-gradient-to-b from-stone-100 to-stone-300 bg-cover flex flex-col">

          <Nav />

          { children }

          <Footer />
        </body>
      </Provider>
    </html>
  )
}
