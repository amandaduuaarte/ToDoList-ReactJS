import React from "react";
import { Contatiner } from "./style";
import Icon from "../../assets/imgs/Rectangle.svg";
import dotIcon from "../../assets/imgs/DotIcon.svg";

import { useTasks } from "../../hooks/context";

export function Task() {
  const { tasks } = useTasks();

  console.log(tasks);
  return (
    <Contatiner>
      {tasks.map((task) => {
        return (
          <div>
            <head>
              <img src={Icon} alt="RectangleIcon" />
              <h2>{task.title}</h2>
              <img src={dotIcon} alt="icon" />
            </head>
            <main>
              <p>{task.description}</p>
            </main>
            <footer>
              <p>
                Created{" "}
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(task.createdAt)
                )}
              </p>
            </footer>
          </div>
        );
      })}
    </Contatiner>
  );
}
