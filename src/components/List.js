import React from 'react';
import { connect } from 'react-redux';

const List = (props) => {

    return (
        <>
            <h1>I am a list</h1>
            {
                props.greeting.map((cur) => {
                    return <p>{cur}</p>
                })
            }
        </>
    );
}

const mapStateToProps = (state) => {

    return {
        greeting: state


    }
}

export default connect(mapStateToProps, {})(List);