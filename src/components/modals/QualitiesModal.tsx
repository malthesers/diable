import { useModals } from '@/src/context/ModalsProvider';
import { useItems } from '@/src/context/ItemsProvider';
import ModalTemplate from './ModalTemplate';
import { useEffect, useRef } from 'react';
import { ChosenQualities } from '@/src/interfaces/ChosenQualities';

export default function QualitiesModal() {
  const { showQualities, toggleShowQualities } = useModals()
  const { chosen, toggleChosen, resetGame } = useItems()
  const startChosen = useRef<ChosenQualities>({...chosen})

  function closeModal() {
    toggleShowQualities(false)
    // Only reset game if chosen qualities were changed
    if (JSON.stringify(startChosen.current) !== JSON.stringify(chosen)) {
      resetGame()
    }
  }

  // Set chosen qualities on opening of modal
  useEffect(() => {
    if (showQualities) {
      startChosen.current = {...chosen}
    }
  }, [showQualities])

  return (
    <ModalTemplate
      showModal={showQualities}
      closeModal={() => closeModal()}
      title='Qualities'
    >
      <p className='text-xl text-center'>Below you can toggle item qualities, dictating which items will be <span className='text-green-600'>included</span> and <span className='text-red-800'>excluded</span> in the list of possible answers.</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2'>
        { Object.entries(chosen).map(([quality, active]) => 
          <div onClick={() => toggleChosen(quality as keyof typeof chosen)} key={quality} className={'grid bg-undefined-icon text-center cursor-pointer duration-200 hover:shadow-quality-inner'}>
            <div className={(active ? 'bg-green-600' : 'bg-red-800') + ' bg-opacity-40 grid-center duration-300'}></div>
            <p className='uppercase p-4 grid-center'>{quality}</p>
          </div>
        )}
      </div>
    </ModalTemplate>
  )
}