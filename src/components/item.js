
export default class Item extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            inEdit: false
        };
        this.onEdit = this.onEdit.bind(this);
    }
    onEdit() {
        console.log(1);
        this.setState({
            inEdit: true
        })
    }
    render() {
        let { todo, func, func1 } = this.props;
        let { inEdit } = this.state;
        let { onEdit } = this;
        let itemClassName = '';
        if (inEdit) itemClassName = 'editing';
        return (
            <li className={ itemClassName }>
                <div className="view">
                    <input type="checkbox" className="toggle" checked={todo.hasCompleted} onClick={event => func1(todo)}/>
                    <label onDoubleClick={ onEdit}>
                        { todo.value }
                    </label>
                    <button className="destroy" onClick={event => func(todo)}></button>
                </div>
                <input type="text" className="edit"/>
            </li>
        )
    }
};

