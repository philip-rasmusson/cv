import { useHistory } from 'react-router-dom'

import '../../shared/global/css/Global.css'

import RoutingPath from '../../routes/RoutingPath'
import { menuItemsEnglish } from '../../data/MenuItemsEnglish'
import { MenuItem } from './MenuItem'

export const MenuItems = () => {
  const history = useHistory()
  return (
    <>
      <ul className='menu-items'>
        <li>
          <MenuItem
            link={RoutingPath.aboutMeView}
            title={menuItemsEnglish.omMig}
          />
        </li>
        <li>
          <MenuItem
            link={RoutingPath.portfoliView}
            title={menuItemsEnglish.portfolio}
          />
        </li>
        <li>
          <MenuItem
            link={RoutingPath.educationView}
            title={menuItemsEnglish.utbildningArbete}
          />
        </li>
      </ul>
    </>
  )
}
