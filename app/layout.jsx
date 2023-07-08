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
        <body className="p-3 h-screen bg-gradient-to-b from-stone-100 to-stone-300 bg-cover">

          <Nav />

          { children }

        </body>
      </Provider>
    </html>
  )
}
