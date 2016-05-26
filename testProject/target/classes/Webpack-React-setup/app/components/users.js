/**
 * Created by Hafiz on 4/28/2016.
 */

/*
import React, { Component, PropTypes } from 'react'

class User extends Component {
    render() {
        console.log('ttt',this.props.user);
        return (
            <li>
                {this.props.user}
            </li>
        )
    }
}
export default User*/

import React from 'react';
import { GetUser} from '../actions/user_actions';
import { DeleteUser} from '../actions/user_actions';
import Edit from './editform';

export default React.createClass({


    getInitialState: function() {
        return {
            get_users:""
        }
    },
    get_user:function(e) {
        e.preventDefault();
        var self = this;
        GetUser(self.props.user.id).then(function(response) {
            self.setState({
                get_users:<Edit user={response.data.apiresponse}/>
            })
        });
    },
    delete_user:function(e) {
        e.preventDefault();
        var self = this;
        DeleteUser(self.props.user.id);
    },

    render: function() {

        console.log("Test Data",this.state.get_users);
        var self=this;
        return (

            <tbody>
            <tr>
                <td>{self.props.user.id}</td>
                <td>{self.props.user.firstname}</td>
                <td>{self.props.user.lastname}</td>
                <td>{self.props.user.email}</td>
                <td>{self.props.user.phone}</td>
                <td>{self.props.user.cell}</td>
                <td>{self.props.user.age}</td>
                <td>
                    <button type="button" onClick={self.get_user} className="btn btn-default btn-sm" data-toggle="modal" data-target="#edit">
                    <span className="glyphicon glyphicon-pencil"></span></button>

                    <div className="modal fade" id="edit" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                                </div>

                                <div className="modal-body">
                                    {this.state.get_users.props ? self.state.get_users:null}
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    &nbsp;&nbsp;<button type="button" className="btn btn-default btn-sm" onClick={self.delete_user}><span className="glyphicon glyphicon-trash"></span></button></td>
            </tr>
            </tbody>

        )
    }
});