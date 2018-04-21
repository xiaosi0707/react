import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Item from 'components/item.js'
import Footer from 'components/footer.js'
import './common/style/base.css'
import './common/style/index.css'

export default class App extends React.Component{
    constructor() {
        super();
        // 初始化数据
        this.state = {
            todosData: [],
            inputVal: ''
        };
        // 改变this指向
        this.handleKeyDownPost = this.handleKeyDownPost.bind(this);
        this.onDestroy = this.onDestroy.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.onToggle = this.onToggle.bind(this);
    }
    // 添加
    handleKeyDownPost(ev) {
        // 可控写法
        let { inputVal } = this.state;
        let value = inputVal + '小四'; // 可控的好处可以拦截/截断。自定义
        // 判断条件
        if (ev.keyCode !== 13) return;
        // let value = ev.target.value.trim(); // 非可控写法
        if (value === '') return;

        // 创建数据对象
        let todo = {};
        todo.id = new Date().getTime();
        todo.value = value;
        todo.hasCompleted = false;

        let { todosData } = this.state;
        todosData.push(todo);

        // 更新数据
        this.setState({
            todosData
        });

        // 清空input  - 非可控
        // ev.target.value = '';
        this.setState({
            inputVal: ''
        })
    }
    // 单条删除
    onDestroy(todo) {
        let { todosData } = this.state;
        todosData = todosData.filter((item) => {
            return item.id !== todo.id
        });
        this.setState({
            todosData
        });
    }

    // 选中删除
    onClearCompleted() {
        let { todosData } = this.state;
        todosData = todosData.filter((item) => {
            return !item.hasCompleted
        });
        this.setState({
            todosData
        })
    }

    // input改值
    inputChange(ev) {
        this.setState({
            inputVal: ev.target.value
        })
    }
    // 全选状态
    toggleAll(ev) {
        let { checked } = ev.target;
        let { todosData } = this.state;
        todosData = todosData.map((item) => {
            item.hasCompleted = checked;
            return item;
        });
        this.setState({
            todosData
        })
    }

    // 单个状态
    onToggle(todo) {

        let { todosData } = this.state;
        todosData = todosData.map((item) => {
            console.log(item.id === todo.id);
            if (todo.id === item.id) {
                item.hasCompleted = !item.hasCompleted
            }
            return item
        });
        this.setState({
            todosData
        })
    }
    render() {
        let { handleKeyDownPost, onDestroy, inputChange, onToggle, toggleAll } = this;
        let { todosData, inputVal } = this.state;
        // 遍历数据填充到列表
        let items = todosData.map((item, index) => {
            return (
                <Item todo={item} func={ onDestroy } key={index} func1={ onToggle }/>
            )
        })

        return (
            <div>
                <header className='header'>
                    <h1>todos</h1>
                    {/*
                        1、value不能输入任何值，受到了react的控制
                        2、value='默认值' 会报错
                        3、defaultValue='默认值' 就可以了 但是Input依旧是一个不受控的组件
                        4、改造成受控的组件
                            1、声明inputVal变量
                            2、render函数中取出变量
                            3、绑定change事件
                        5、可控好处：可以截断/拦截,value值进行自定义特殊处理等操作
                        */}
                    <input type="text" className="new-todo" onKeyDown={ handleKeyDownPost } value={ inputVal } onChange={ inputChange }/>
                </header>
                <section className="main">
                    <input type="checkbox" className="toggle-all" onClick={toggleAll}/>
                    <ul className="todo-list">
                        { items }
                    </ul>
                </section>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
