import { useItems } from '@/src/context/ItemsProvider'
import { forwardRef } from 'react'

const SearchBar = forwardRef<HTMLInputElement>(function SearchBar(props, ref) {
  const { answer, known, search, setSearch } = useItems()
  const wasGuessed = answer?.name === known.name

  return (
    <label htmlFor='item-search' className='nameplate bg-undefined-name bg-no-repeat bg-cover bg-center aspect-[350/40] grid'>
      <input
        ref={ref}
        value={search}
        onChange={e => setSearch(e.target.value)}
        id='item-search'
        autoComplete='off'
        placeholder={ wasGuessed ? 'Item was guessed' : 'Enter item name...'}
        className='bg-transparent text-center uppercase focus:outline-none disabled:opacity-30'
        disabled={wasGuessed}
      ></input>
    </label>
  )
})

export default SearchBar