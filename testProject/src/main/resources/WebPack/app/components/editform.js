/**
 * Created by Hafiz on 5/4/2016.
 */

import React from 'react';
export default React.createClass({
    getInitialState: function() {
        var self=this;
        console.log("edit",self.props.user);
        return {
            firstName:self.props.user.firstname,
            lastName:self.props.user.lastname,
            email:self.props.user.email,
            phone:self.props.user.phone,
            cell:self.props.user.cell,
            age:self.props.user.age
        }
    },
    firstNameHandler:function(e){
        this.setState({firstName: e.target.value});
    },
    lastNameHandler:function(e){
        this.setState({lastName: e.target.value});
    },
    emailHandler:function(e){
        this.setState({email: e.target.value});
    },
    phoneHandler:function(e){
        this.setState({phone: e.target.value});
    },
    cellHandler:function(e){
        this.setState({cell: e.target.value});
    },
    ageHandler:function(e){
        this.setState({age: e.target.value});
    },

    render(){
        var inputStyle = {padding: '3px'};
        var containerStyle = {paddingTop: '3px'};
        return(
            <div style={containerStyle}>
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
                        <form className="form-horizontal">
                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">First Name</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control"  onChange={this.firstNameHandler} value={this.state.firstName}/>
                                </div>
                            </div>

                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">Last Name</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control" onChange={this.lastNameHandler} value={this.state.lastName}/>
                                </div>
                            </div>

                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">Email</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control"  onChange={this.emailHandler} value={this.state.email}/>
                                </div>
                            </div>

                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">Phone</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control"  onChange={this.phoneHandler} value={this.state.phone}/>
                                </div>
                            </div>
                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">Cell</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control"  onChange={this.cellHandler} value={this.state.cell}/>
                                </div>
                            </div>

                            <div className="form-group" style={inputStyle}>
                                <label htmlFor="address" className="col-xs-2  col-sm-2   col-md-2   col-lg-2 control-label">Age</label>
                                <div className="col-xs-8  col-sm-8   col-md-8   col-lg-8">
                                    <input type="text" className="form-control" onChange={this.ageHandler} value={this.state.age}/>
                                </div>
                            </div>
                            <div className="form-group" style={inputStyle}>
                                <div className=" col-xs-8 col-xs-offset-2 col-sm-8  col-sm-offset-2 col-md-8  col-md-offset-2 col-lg-8  col-lg-offset-2">
                                    <input type="submit" className="form-control btn btn-sm btn-info pull-right"
                                           value="Update" onClick={this.create}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

})