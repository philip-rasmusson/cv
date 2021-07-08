import { useHistory } from 'react-router-dom'


import '../../shared/global/css/Global.css'

import RoutingPath from '../../routes/RoutingPath'
import { menuItemsEnglish } from '../../data/MenuItemsEnglish'
import { MenuItem } from './MenuItem'

export const MenuItems = () => {
  const history = useHistory()
  return (
    <div>
      <ul className='menu-items'>
        <MenuItem
          link={RoutingPath.aboutMeView}
          title={menuItemsEnglish.itemOne}
        />
        <MenuItem
          link={RoutingPath.portfoliView}
          title={menuItemsEnglish.itemTwo}
        />
        <MenuItem
          link={RoutingPath.competenceView}
          title={menuItemsEnglish.itemThree}
        />
        <MenuItem
          link={RoutingPath.educationView}
          title={menuItemsEnglish.itemFour}
        />
        <MenuItem
          link={RoutingPath.worklifeView}
          title={menuItemsEnglish.itemFive}
        />
      </ul>
    </div>
  )
}
