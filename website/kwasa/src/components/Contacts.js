import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/contacts';
import PropTypes from 'prop-types';

class Contacts extends Component{
    constructor(props){
        super(props);
            this.state = {
                name: '',
                email: '',
                subject: '',
                message: ''
        }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, email, subject, message } = this.state;
      const contacts = { name, email, subject, message };
      this.props.addContact(contacts);

    };

    static propTypes = {
        addContact: PropTypes.func.isRequired,
    }

    render() {
        const { name, email, subject, message } = this.state;
        return (
            <div className="form-box" data-aos="flip-right">
                <h2 className="display-6 text-uppercase text-center py-3">Contact Us</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-row mr-auto">
                        <div className="justify-content-center mb-4 col-md-12">
                            <input type="text"
                            size="40"
                            className="form-control px-4 py-2"
                            name="name"
                            placeholder='Name'
                            onChange={this.onChange}
                            value={name}/>
                        </div>
                        <div className="justify-content-center mb-4 col-md-6">
                            <input type="email"
                            size="40"
                            className="form-control px-4 py-2"
                            name="email"
                            placeholder='Email'
                            onChange={this.onChange}
                            value={email}/>
                        </div>
                        <div className="justify-content-center mb-4 col-md-6">
                            <input type="text"
                            size="40"
                            className="form-control px-4 py-2"
                            name="subject"
                            placeholder='Subject'
                            onChange={this.onChange}
                            value={subject}/>
                        </div>
                        <div className="justify-content-center mb-4 col-md-12">
                            <textarea
                            cols='30'
                            rows='10'
                            className="form-control px-4 py-2"
                            name="message"
                            placeholder='Message'
                            onChange={this.onChange}
                            value={message}/>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-center">submit</button>
                </form>
            </div>
        );
    }
}


export default connect(null, { addContact })(Contacts);
