import React, { Component } from 'react';
import { connect } from 'react-redux';

import ErrorIndicator from '../ErrorIndicator';

class ErrorBoundry extends Component {

    state = {
        hasErorr: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {

        const { error, err } = this.props;

        if (error || err !== null) {
            return <ErrorIndicator error={error || err}/>
        }

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return this.props.children;
    };
};

const mapStateToProps = ({ posts, form }) => {

    const { error } = posts;

    const { err } = form;

    return {
        error,
        err
    }
}

export default connect(mapStateToProps)(ErrorBoundry);