/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header, TodoCard } from "../../components";
import { todoDataActions } from "../../store/todoData";
import "./index.css";

const TodoListPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addTodo } = todoDataActions;
  const { todoData, userAuth }: any = useSelector((state) => state);
  const [todo, setTodo] = useState<string>("");

  useEffect(() => {
    if (!userAuth.isLoggedIn) navigate("/login");
  }, [userAuth.isLoggedIn]);

  const handleTodo = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) dispatch(addTodo(todo));
  };

  return (
    <div id="todo-page">
      <Header />
      <form className="todo-form" onSubmit={handleTodo}>
        <input
          type="text"
          placeholder="Write your todo here"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <div className="todo-container">
        {todoData.data.map((e: string, i: number) => (
          <TodoCard todo={e} index={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TodoListPage;
