
export default class Item extends React.Component{
    render() {
        let { todo } = this.props;
        return (
            <li>
                <div className="view">
                    <input type="text" className="toggle"/>
                    <label htmlFor="">
                        { todo.value }
                    </label>
                    <button className="destroy"></button>
                </div>
                <input type="text" className="edit"/>
            </li>
        )
    }
};

