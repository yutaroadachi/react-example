import React from "react";

class App extends React.Component {
  render() {
    return (
    <div>
      <form>
        <input type="text" />
        <button>追加</button>
      </form>

      <label>
        <input type="checkbox" />
        全て完了にする
      </label>

      <select>
        <option>全て</option>
        <option>未完了</option>
        <option>完了済み</option>
      </select>

      <ul>
        <li>
          <label>
            <input type="checkbox" />
            洗濯する
          </label>
          <button>編集</button>
          <button>削除</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            宿題する
          </label>
          <button>編集</button>
          <button>削除</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            腹筋する
          </label>
          <button>編集</button>
          <button>削除</button>
        </li>
      </ul>

      <button>完了済みを全て削除</button>
    </div>
    );
  }
}

export default App;
