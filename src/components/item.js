
export default class Item extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            inEdit: false,
            val: ''
        };
        this.onEdit = this.onEdit.bind(this);
        this.editDone = this.editDone.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.onEnter = this.onEnter.bind(this);
    }
    // 双击编辑
    onEdit() {
        let { value } = this.props.todo;
        this.setState({
            inEdit: true,
            val: value
        })
    }
    // 公用方法
    editDone() {
        let { itemEditDone, todo } = this.props;
        itemEditDone(todo, this.state.val);
        this.setState({
            inEdit: false
        })
    }
    // 更新input值
    inputChange(ev) {
        this.setState({
            val: ev.target.value
        })
    }
    // 回车保存
    onEnter(ev) {
        if(ev.keyCode!== 13) return;
        console.log('13');
        this.editDone();
    }
    render() {
        let { todo, func, func1, itemEditDone } = this.props;
        let { inEdit, val } = this.state;
        let { onEdit, inputChange, onEnter } = this;
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
                <input type="text" className="edit" value={val} onChange={inputChange} onKeyDown={onEnter}/>
            </li>
        )
    }
};

