import { Item } from '@/src/interfaces/item'
import ItemNameplate from './ItemNameplate'
import Image from 'next/image'

export default function ItemRow({ item }: { item: Item}) {
  return (
    <div className='w-[315px] sm:w-[350px] md:w-[420px] h-fit mx-auto bg-black border-zinc-800 border-4 p-1 space-y-2'>
      <ItemNameplate item={item}/>
      <div className='grid grid-cols-[4rem_auto] border-grey border-2 gap-4 p-2'>
        <div className={`bg-${item.quality}-icon border-${item.quality}-accent` + ' h-32 border rounded'}>
          <div className='h-full grid place-content-center icon-gradient'>
            {/* <span className='place-self-center text-4xl'>?</span> */}
            <Image
              src='/items/thunderfury.png'
              alt={item.name}
              width={64}
              height={(item.equipment.slot === ('waist' || 'neck' || 'finger')) ? 64 : 128}
            />
          </div>
        </div>
        <div className='font-sans capitalize'>
          <p className={`text-${item.quality}` + ' flex flex-col sm:flex-row gap-1'}>
            <span>{item.quality}</span>
            <span>{item.equipment.type}</span>
            <span className='sm:ml-auto text-neutral-500'>{item.equipment.slot}</span>
          </p>
          <p className='sm:text-right'>{item.class}</p>
        </div>
      </div>
    </div>
  )
}