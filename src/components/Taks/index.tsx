import {Contatiner} from './style'
import Icon from '../../assets/imgs/Rectangle.svg';
import dotIcon from '../../assets/imgs/DotIcon.svg';

export function Task (){
  return(
    <Contatiner>
      <div>
        <head>
          <img src={Icon} alt="RectangleIcon" />
          <h2>Create Sign In validation</h2>
          <img src={dotIcon} alt="icon"/>
        </head>
        <main>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Ultricies eget neque, libero, massa morbi aliquam ornare. 
             Et tristique sit faucibus suspendisse massa sit turpis vitae. 
             Aliquam eget ipsum ut viverra est porta. Odio velit et, egestas in netus. 
             Porttitor amet erat scelerisque  aenean enim tortor, gravida quisque. 
             Egestas dui non commodo phasellus nibh volutpat nulla in. </p>
        </main>
        <footer>
          <p>Created March 30, 2021 1:24pm</p>
        </footer>
      </div>
    </Contatiner>
  )
}