import useAppState from "../../state/useAppState";

const Todo = props => {
    const { todo } = props;

    return (
        <div>
            <input type="checkbox" checked={todo.completed} />
            {todo.text}
        </div>
    );
}

const Todos = ({ selectedFilter }) => {
    const { state, dispatch } = useAppState();
    const { todos } = state;

    return (
        <div>
            {todos.filter(todo => {
                if (selectedFilter === "all") {
                    return true;
                }

                if (selectedFilter === "active") {
                    return !todo.completed;
                }

                return todo.completed;
            }).map(todo => {
                return <Todo key={todo.id} todo={todo} />;
            })}
        </div>
    )
}

export default Todos;
