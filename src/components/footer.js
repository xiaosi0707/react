export default class Footer extends React.Component{
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{0}</strong>
                    <span>item left</span>
                </span>
                <ul className="filters">
                    <li>
                        <a href="jvascript:;">All</a>
                    </li>
                    <li>
                        <a href="jvascript:;">Active</a>
                    </li>
                    <li>
                        <a href="jvascript:;">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed">
                    clear all completed
                </button>
            </footer>
        )
    }
}