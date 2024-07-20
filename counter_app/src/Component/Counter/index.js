import {Component} from 'react'
import './index.css'
class Counter extends Component {
    state = {count:0}

    OnIncrement = () => {
        this.setState(prevState => {
            console.log(`Previous State Value ${prevState.count}`)
        return {count:prevState.count+1}
        })
    }

    onDecrement = () => {
        this.setState(prevState => {
            console.log(`Previous State Value ${prevState.count}`)
        return {count:prevState.count-1}
        })
    }
    render () {
        const {count} = this.state
        return (
            <div className='container'>
                <h1 className='heading'>Counter</h1>
                <p className='para'>{count}</p>
                <div>
                    <button className='button' onClick={this.OnIncrement}>Increase</button>
                    <button className='button' onClick={this.onDecrement}>Decrease</button>
                </div>
            </div>
        )
    }
}

export default Counter