import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい",
  ]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul className="">
          {incompleteTodos.map((todo) => {
            return (
              // 一番外の要素にkeyをつける
              <div key={todo} className="list-row">
                <li className="">{todo}</li>
                <button className="">完了</button>
                <button className="">削除</button>
              </div>
            );
          })}

          <div className="list-row">
            <li className="">いいいい</li>
            <button className="">完了</button>
            <button className="">削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul className="">
          <div className="list-row">
            <li className="">うううう</li>
            <button className="">戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
