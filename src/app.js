import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Item from 'components/item.js'
import Footer from 'components/footer.js'
import './common/style/base.css'
import './common/style/index.css'

export default class App extends React.Component{
    render() {
        return (
            <div>
                <header className='header'>
                    <h1>todos</h1>
                    <input type="text" className="new-todo"/>
                </header>
                <section className="main">
                    <input type="text" className="toggle-all"/>
                    <ul className="todo-list">
                        <Item />
                        <Item />
                        <Item />
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
