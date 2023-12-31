export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul className="">
        {todos.map((todo, index) => {
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
  );
};
