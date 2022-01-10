import {Contatiner} from './style'
import Icon from '../../assets/imgs/Rectangle.svg';
import dotIcon from '../../assets/imgs/DotIcon.svg';

interface taskProps {
 newTask:{
   title: string,
   description: string
 };
}
export function Task () {
  
  return(
    <Contatiner>

          <div>
            <head>
              <img src={Icon} alt="RectangleIcon" />
              <h2>task.title</h2>
              <img src={dotIcon} alt="icon"/>
            </head>
            <main>
              <p>task.description</p>
            </main>
            <footer>
              <p>Created March 30, 2021 1:24pm</p>
            </footer>
          </div>
    </Contatiner>
  )
}