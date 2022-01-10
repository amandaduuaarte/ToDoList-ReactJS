import {Content} from "./style"
import LogoImg from '../../assets/imgs/Logo.svg'


interface headerProps {
  onOpenModalNewTaks: () => void,
}

export function Header ({onOpenModalNewTaks}:headerProps){
  return(
    <Content>
      <img src={LogoImg} alt="logo"/>
      <button type="button" onClick={onOpenModalNewTaks}>New Task</button>
      </Content>
  )
}