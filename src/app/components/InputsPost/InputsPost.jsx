import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeInputs } from 'app_redux/features/form';

import './InputsPost.scss';

const InputsPost = ({ actions, id, title, body }) => {
    
    const changeHandler = (e) => {
        const { name, value } = e.target;
        actions.changeInputs({ name, value }, id)
    }
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
                    value={title}
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
                    value={body}
                    onChange={changeHandler}
                    ></textarea>
            </div>
        </>
        
    );
}

const mapStateToProps = ({  }) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            changeInputs
        }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputsPost);