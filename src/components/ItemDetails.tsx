import Button from './Button'
import { User } from './ItemsContainer'

function ItemDetails({user}:{user:User}) {
  return (
    <div className='bg-orange-100 rounded-2xl p-5 flex sm:flex-row flex-col sm:justify-between  gap-3 flex-wrap items-center'>
        <div className=' flex gap-3 flex-row justify-start flex-wrap items-center px-4'>
            <img src={user.image} className=' w-12 h-12 rounded-[100px]'/>
            <p className=' text-xl'> {user.name}</p>
        </div>
        <Button name='Select' type='button'/>
    </div>
  )
}

export default ItemDetails
