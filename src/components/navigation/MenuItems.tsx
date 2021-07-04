import '../../shared/global/css/Global.css'
import { menuItemsEnglish } from '../../data/MenuItemsEnglish'

export const MenuItems = () => {
  return (
    <div>
      <ul className='font-grey'>
        <li className='menu-item-1'>{menuItemsEnglish.itemOne}</li>
        <li className='menu-item-2'>{menuItemsEnglish.itemTwo}</li>
        <li className='menu-item-3'>{menuItemsEnglish.itemThree}</li>
        <li className='menu-item-4'>{menuItemsEnglish.itemFour}</li>
        <li className='menu-item-5'>{menuItemsEnglish.itemFive}</li>
      </ul>
    </div>
  )
}
