
import { useHistory } from 'react-router-dom'


export const MenuItem = (props: { link?: any, title?: any }) => {

  const history = useHistory()

  const activeLink = (link: any) => {
    history.push(link)
  }

  return (
    <li onClick={() => activeLink(props.link)}>{props.title}</li>
  )
}
