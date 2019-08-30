import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeInputs } from 'app_redux/features/form';

import './InputsEditPost.scss';

const InputEditPost = ({ actions, id, inputs }) => {
    
    const changeHandler = (e) => {
        const { name, value } = e.target;
        actions.changeInputs({ name, value }, id)
    }

    const { title, body } = inputs[id] || {};

    return (
        <>
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
        </>
        
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
            changeInputs
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputEditPost);