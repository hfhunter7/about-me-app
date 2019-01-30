import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { getGithubRepo } from "../action/actionCreators";

class Welcome extends Component {
    componentDidMount() {
        this.props.getGithubRepo();
    }

    render() {
        return (
            <div>
                Welcome Page
            </div>
        );
    }
}

Welcome.defaultProps = {};

Welcome.propTypes = {
    getGithubRepo: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        repos: state.repos
    }
}

const mapDispatchToProps = {
    getGithubRepo: getGithubRepo
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Welcome));
