import { Component } from 'react'
import { ThemeContext } from './App'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.initialCount
        }
    }

    changeCount(amount) {
        this.setState(prevState => ({count: prevState.count + amount}))
    }

    render() {
        console.log("Rendering Counter Component")
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div>
                        <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={() => this.changeCount(1)}>+</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}