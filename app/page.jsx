import SearchForm from '@components/SearchForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="head_text text-center">
        Find & Edit
        <br />
        <span className="orange_gradient text-center"> Amazing Recipes!</span>
      </h1>
      <div className='desc'>
        <b>FlavorBOT</b> - A tool for finding, saving and editing recipes according to your taste.
      </div>

      <SearchForm />
    </main>
  )
}
