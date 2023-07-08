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
        <body className=''>

          <Nav />

          <hr className='bg-gray-700 h-0.5 border-none' />

          { children }

        </body>
      </Provider>
    </html>
  )
}
