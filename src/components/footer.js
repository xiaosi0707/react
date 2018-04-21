export default class Footer extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let { leftCount, showClearBtn } = this.props;
        let clearBtn = null;
        if (showClearBtn) clearBtn = (
            <button className="clear-completed">
                clear all completed
            </button>
        )
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{ leftCount }</strong>
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
                { clearBtn }
            </footer>
        )
    }
}