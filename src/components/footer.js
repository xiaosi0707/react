export default class Footer extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        let { leftCount, showClearBtn, view, changeView } = this.props;
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
                        <a href="jvascript:;" onClick={ event => changeView('all') } className={ view === 'all' ? 'selected' : ''}>All</a>
                    </li>
                    <li>
                        <a href="jvascript:;" onClick={ event => changeView('active') } className={ view === 'active' ? 'selected' : ''}>Active</a>
                    </li>
                    <li>
                        <a href="jvascript:;" onClick={ event => changeView('completed') } className={ view === 'completed' ? 'selected' : ''}>Completed</a>
                    </li>
                </ul>
                { clearBtn }
            </footer>
        )
    }
}