import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addGreeting } from '../actions/index'


const GreetingForm = (props) => {

    const [state, setState] = useState("")


    const greetingHandler = (e) => {
        e.preventDefault()

        props.addGreeting(state)
    }


    const textHandler = (e) => {

        setState(e.target.value)
    }

    return (
        <div>
            <form onSubmit={(e) => { greetingHandler(e) }}>
                <input
                    type="text"
                    placeholder="greeting"
                    name="greeting"
                    value={state}
                    onChange={(e) => textHandler(e)}
                />
                <button>submit</button>
            </form>
        </div>

    );
}
const mapStateToProps = (state) => {

    return {


    }
}

export default connect(mapStateToProps, { addGreeting })(GreetingForm);