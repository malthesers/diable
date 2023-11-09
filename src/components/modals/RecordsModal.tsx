import { useModals } from '@/src/context/ModalsProvider';
import ModalTemplate from './ModalTemplate';
import RecordItem from '../game/records/RecordItem';
import { useRecords } from '@/src/context/RecordsProvider';

export default function RecordsModal() {
  const { showRecords, toggleShowRecords } = useModals()
  const { records } = useRecords()

  return (
    <ModalTemplate showModal={showRecords} closeModal={() => toggleShowRecords(false)} title='Records'>
      <div className='text-base sm:text-xl text-center space-y-2'>
        <p>Below is a list of your fastest victories including the guessed item, the amount of guesses and the included qualities.</p>
        <div className='grid gap-2'>
          { records.map(record =>
            <RecordItem key={record.id} record={record}/>
          )}
        </div>
      </div>
    </ModalTemplate>
  )
}