import { FC } from 'react';
import { Itodo } from '../../interfaces';
import './index.css';

const TodoCard: FC <Itodo> = ({ todo }) => {
  return (
    <div className="todo-card">
      <p>{todo}</p>
    </div>
  );
};

export default TodoCard;
