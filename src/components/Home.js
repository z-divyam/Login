import classes from './Home.module.css'
import { useSelector } from 'react-redux'
export const Home = () => {
    const user=useSelector(state=>(state.users))
    console.log(user)
  return (
    <div className={ [ classes.Align ].join(' ') }>Login Successful {user.user.email.slice(0,user.user.email.indexOf("@"))
}</div>
  )
}
