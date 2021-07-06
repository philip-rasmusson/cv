import { useHistory } from 'react-router-dom'


import '../../shared/global/css/Global.css'

import RoutingPath from '../../routes/RoutingPath'
import { menuItemsEnglish } from '../../data/MenuItemsEnglish'

export const MenuItems = () => {
  const history = useHistory()
  return (
    <div>
      <ul className='font-grey menu-items'>
        <li className='menu-item-1' onClick={() => history.push(RoutingPath.aboutMeView)}>{menuItemsEnglish.itemOne}</li>
        <li className='menu-item-2' onClick={() => history.push(RoutingPath.projectsView)}>{menuItemsEnglish.itemTwo}</li>
        <li className='menu-item-3' onClick={() => history.push(RoutingPath.competenceView)}>{menuItemsEnglish.itemThree}</li>
        <li className='menu-item-4' onClick={() => history.push(RoutingPath.educationView)}>{menuItemsEnglish.itemFour}</li>
        <li className='menu-item-5' onClick={() => history.push(RoutingPath.worklifeView)}>{menuItemsEnglish.itemFive}</li>
      </ul>
    </div>
  )
}
