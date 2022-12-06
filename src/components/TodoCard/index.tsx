import { DeleteOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Itodo } from "../../interfaces";
import { todoDataActions } from "../../store/todoData";
import "./index.css";

const TodoCard: FC<Itodo> = ({ todo, index }) => {
  const [newTodo, setNewTodo] = useState<string>(todo);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { deleteTodo, editTodo } = todoDataActions;

  const onFinish = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(editTodo({ index, newTodo }));
    setIsEdit(false);
  };

  return (
    <div className="todo-card">
      {!isEdit ? (
        <>
          <p>{todo}</p>
          <div className="icons">
            <EditOutlined onClick={() => setIsEdit(true)} />
            <DeleteOutlined onClick={() => dispatch(deleteTodo(index))} />
          </div>
        </>
      ) : (
        <form
          onSubmit={(e) => {
            onFinish(e);
          }}
        >
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type="submit">
            <CheckOutlined />
          </button>
        </form>
      )}
    </div>
  );
};

export default TodoCard;
