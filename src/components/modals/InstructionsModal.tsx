import { useModals } from '@/src/context/ModalsProvider';
import ModalTemplate from './ModalTemplate';

export default function InstructionsModal() {
  const { showInstructions, toggleShowInstructions } = useModals()

  return (
    <ModalTemplate showModal={showInstructions} closeModal={() => toggleShowInstructions(false)} title='Instructions'>
      <div className='text-lg sm:text-xl text-center space-y-2'>
        <p>Search for an item and enter your guess. View guess to find correct and incorrect properties.</p>
        <p>A <span className='text-green-600'>green</span> background indicates a correct property, and a <span className='text-red-600'>red</span> background indicates an incorrect property.</p>
        <p>Revealed properties appear in the item tooltip. After 10 guesses, a blurred <span className='text-legendary'>legendary power</span> will also appear, and be revealed on hover.</p>
        <p>Item types of <span className='text-ethereal'>ethereals</span> are treated as the closest D3 item types, e.g. <span className='italic'>bone knife</span> as <span className='italic'>dagger</span>.</p>
        <p>Narrow down the possibilities until you find the right item!</p>
      </div>
    </ModalTemplate>
  )
}