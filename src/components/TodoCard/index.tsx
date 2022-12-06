import { DeleteOutlined } from "@ant-design/icons";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { Itodo } from "../../interfaces";
import { todoDataActions } from "../../store/todoData";
import "./index.css";

const TodoCard: FC<Itodo> = ({ todo, index }) => {
  const dispatch = useDispatch();
  const { deleteTodo } = todoDataActions;

  return (
    <div className="todo-card">
      <p>{todo}</p>
      <DeleteOutlined onClick={() => dispatch(deleteTodo(index))} />
    </div>
  );
};

export default TodoCard;
