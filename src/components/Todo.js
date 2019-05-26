import React from "react";

class Todo extends React.Component {
  render() {
    const { text, completed } = this.props;

    return (
      <div>
        <label>
          <input type="checkbox" ckecked={completed} onChange={this.handleChangeCompleted} />
          {text}
        </label>
        <button>編集</button>
        <button>削除</button>
      </div>
    );
  }

  handleChangeCompleted = () => {
    const { onChange, id, completed } = this.props;
    onChange(id, !completed);
  }
}

export default Todo;
