
export default class Item extends React.Component{
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        let { todo, func } = this.props;
        return (
            <li>
                <div className="view">
                    <input type="text" className="toggle"/>
                    <label htmlFor="">
                        { todo.value }
                    </label>
                    <button className="destroy" onClick={event => func(todo)}></button>
                </div>
                <input type="text" className="edit"/>
            </li>
        )
    }
};

