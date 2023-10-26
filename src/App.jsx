import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    //alert(todoText);
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    // alert(index);
    const newTodos = [...incompleteTodos];
    // spliceは指定した要素からいくつ削除するか
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompeteTodos = [...incompleteTodos];
    newIncompeteTodos.splice(index, 1);

    const newCompleteTodo = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompeteTodos);
    setCompleteTodos(newCompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompeteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompeteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul className="">
          {incompleteTodos.map((todo, index) => {
            return (
              // 一番外の要素にkeyをつける
              <div key={todo} className="list-row">
                <li className="">{todo}</li>
                <button className="" onClick={() => onClickComplete(index)}>
                  完了
                </button>
                {/* イベント関数に引数を渡す時はアロー関数う経由にしないと即時実行される */}
                <button className="" onClick={() => onClickDelete(index)}>
                  削除
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul className="">
          {completeTodos.map((todo, index) => {
            return (
              // 一番外の要素にkeyをつける
              <div key={todo} className="list-row">
                <li className="">{todo}</li>
                <button className="" onClick={() => onClickBack(index)}>
                  戻す
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
