/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, TodoCard } from "../../components";
import { todoDataActions } from "../../store/todoData";
import "./index.css";

const TodoListPage: FC = () => {
  const dispatch = useDispatch();
  const { addTodo } = todoDataActions;
  const { todoData }: any = useSelector((state) => state);
  const [todo, setTodo] = useState<string>("");

  const handleTodo = (): void => {
    if (todo) dispatch(addTodo(todo));
  };

  return (
    <>
      <Header />
      <div className="todo-form">
        <input
          type="text"
          placeholder="Write your todo here"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="button" onClick={handleTodo}>
          add
        </button>
      </div>
      <div className="todo-container">
        {todoData.data.map((e: string) => (
          <TodoCard todo={e} />
        ))}
      </div>
    </>
  );
};

export default TodoListPage;
