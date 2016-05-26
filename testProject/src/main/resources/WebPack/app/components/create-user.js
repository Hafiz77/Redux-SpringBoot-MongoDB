/**
 * Created by Hafiz on 5/2/2016.
 */

import React from 'react';
import  ReactDOM  from 'react-dom';
import { connect } from 'react-redux';
import { CreateUsers } from '../actions/user_actions';
import CreateSuccess from './create-success';


const UserCreate = React.createClass({

     getInitialState: function() {
         return {
             users:""
        }
     },

    create:function(e){
        e.preventDefault();
        var self=this;
        var user={
            firstname: ReactDOM.findDOMNode(self.refs.fname).value,
            lastname: ReactDOM.findDOMNode(self.refs.lname).value,
            email:ReactDOM.findDOMNode(self.refs.email).value,
            phone:ReactDOM.findDOMNode(self.refs.phone).value,
            cell:ReactDOM.findDOMNode(self.refs.cell).value,
            age:ReactDOM.findDOMNode(self.refs.age).value

        };

        CreateUsers(user).then(function(response) {
            self.setState({
                         users: response.data
                     })
                 });

        ReactDOM.findDOMNode(self.refs.fname).value="";
        ReactDOM.findDOMNode(self.refs.lname).value="";
        ReactDOM.findDOMNode(self.refs.email).value="";
        ReactDOM.findDOMNode(self.refs.phone).value="";
        ReactDOM.findDOMNode(self.refs.cell).value="";
        ReactDOM.findDOMNode(self.refs.age).value="";
    },


    render: function() {
        // return (
        //     <Users users={this.state.users}/>
        // )
        var inputStyle = {padding: '3px'};
        var containerStyle = {paddingTop: '3px'};
        return (
            this.state.users =="" ?
            <div className="container" style={containerStyle}>
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
                        <form className="form-horizontal">
                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">First Name</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control" placeholder="First Name" ref="fname"/>
                                </div>
                            </div>

                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">Last Name</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control" placeholder="Last Name" ref="lname"/>
                                </div>
                            </div>

                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">Email</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control" placeholder="Email" ref="email"/>
                                </div>
                            </div>

                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">Phone</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control" placeholder="Phone Number" ref="phone"/>
                                </div>
                            </div>
                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">Cell</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control" placeholder="Cell" ref="cell"/>
                                </div>
                            </div>

                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">Age</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control" placeholder="Age" ref="age"/>
                                </div>
                            </div>
                            <div className="form-group" style={inputStyle}>
                                <div className=" col-xs-8 col-xs-offset-2 col-sm-8  col-sm-offset-2 col-md-8  col-md-offset-2 col-lg-8  col-lg-offset-2">
                                    <input type="submit" className="form-control btn btn-sm btn-info pull-right"
                                           value="Create" onClick={this.create}/>
                                </div>
                            </div>
                         </form>
                    </div>
                </div>
            </div>:<CreateSuccess user={this.state.users.apiresponse}/>
        )
    }

});

const stateToProps = function(state) {
    return {
        users: state.userReducer.users
    }
}

export default connect(stateToProps)(UserCreate)
