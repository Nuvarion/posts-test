import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTitle, changeBody } from 'app_redux/features/form';

import './InputEditPost.scss';

const InputEditPost = ({ actions, id, inputs }) => {
    const changeHandler = (e) => {
        const { name, value } = e.target;
        actions.changeTitle({ name, value }, id)
    }

    const { title, body } = inputs[id] || {};

    return (
        <React.Fragment>
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Title" 
                    aria-label="Username" 
                    aria-describedby="basic-addon1"
                    name="title"
                    value={title || ''}
                    onChange={changeHandler}
                    />
            </div>
            <div className="form-group">
                <textarea 
                    className="text-area form-control" 
                    placeholder="Text" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    name="body"
                    value={body || ''}
                    onChange={changeHandler}
                    ></textarea>
            </div>
        </React.Fragment>
        
    );
}

const mapStateToProps = ({ form }) => {

    const { title, body, inputs } = form;

    return {
        title,
        body,
        inputs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            changeTitle,
            changeBody
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputEditPost);