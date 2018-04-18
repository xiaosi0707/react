export default class Item extends React.Component{
    render() {
        return (
            <li>
                <div className="view">
                    <input type="text" className="toggle"/>
                    <label htmlFor="">
                        content
                    </label>
                    <button className="destroy"></button>
                </div>
                <input type="text" className="edit"/>
            </li>
        )
    }
}