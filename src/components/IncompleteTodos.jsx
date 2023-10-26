import { useState } from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul className="">
        {todos.map((todo, index) => {
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
  );
};
