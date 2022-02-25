import React, {Component} from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form
                onSubmit={this.onSubmit}
                className='item-add-form d-flex'>
                <input
                    type='text'
                    placeholder='What need to be done'
                    className='form-control rounded'
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button
                    className='btn btn-success rounded'>Add
                </button>
            </form>
        );
    };
}
