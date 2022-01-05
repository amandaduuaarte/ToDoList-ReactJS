import {Content} from "./style"
import LogoImg from '../../assets/imgs/Logo.svg'


export function Header (){
  return(
    <Content>
      <img src={LogoImg} alt="logo"/>
      <button type="button">New Task</button>
      </Content>
  )
}