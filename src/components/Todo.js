import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>
				{text}
			</li>
			<div onClick={completeHandler} className="complete-btn">
				<i className="fas fa-check"></i>
			</div>
			<div onClick={deleteHandler} className="trash-btn">
				<i className="fas fa-trash"></i>
			</div>
		</div>
	);
};

export default Todo;
