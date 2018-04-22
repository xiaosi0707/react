
export default class Item extends React.Component{
    constructor(props) {
        super(props)
        console.log(props);
        this.state = {
            inEdit: false,
            val: ''
        };
        this.onEdit = this.onEdit.bind(this);
    }
    onEdit() {
        let { value } = this.props.todo;
        this.setState({
            inEdit: true,
            val: value
        })
    }
    render() {
        let { todo, func, func1 } = this.props;
        let { inEdit, val } = this.state;
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
                <input type="text" className="edit" value={val}/>
            </li>
        )
    }
};

