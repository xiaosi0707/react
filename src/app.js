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
            todosData: []
        };
        // 改变this指向
        this.handleKeyDownPost = this.handleKeyDownPost.bind(this);
        this.onDestroy = this.onDestroy.bind(this);
    }
    // 添加
    handleKeyDownPost(ev) {
        // 判断条件
        if (ev.keyCode !== 13) return;
        let value = ev.target.value.trim();
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

        // 清空input
        ev.target.value = '';
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

    render() {
        let { handleKeyDownPost, onDestroy } = this;
        let { todosData } = this.state;
        // 遍历数据填充到列表
        let items = todosData.map((item, index) => {
            return (
                <Item todo={item} func={ onDestroy } key={index}/>
            )
        })

        return (
            <div>
                <header className='header'>
                    <h1>todos</h1>
                    <input type="text" className="new-todo" onKeyDown={ handleKeyDownPost }/>
                </header>
                <section className="main">
                    <input type="text" className="toggle-all"/>
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
