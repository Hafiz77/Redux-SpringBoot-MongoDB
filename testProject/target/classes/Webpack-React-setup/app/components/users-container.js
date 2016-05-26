/**
 * Created by Hafiz on 5/2/2016.
 */
import React from 'react';
import Users from './users';
import { connect } from 'react-redux';
import { getUsers } from '../actions/user_actions';

/**
 * The stuff commented out below represents what a beginner might do
 * if they didn't understand how to use react-redux correctly
 */

const UserContainer = React.createClass({

     getInitialState: function() {
         return {
             users: []
         }
     },

    componentWillMount: function() {
        var _this = this;
       getUsers().then(function(response) {
             _this.setState({
                users: response.data.apiresponse.list
             })
         })
    },

    render: function() {
        // return (
        //     <Users users={this.state.users}/>
        // )

        /*<Users {...this.props} />*/

        return (
            this.state.users.length ?
                <div className="users-page">
                    <h3>App: User</h3>
                    <table className="table table-bordered table-responsive">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Cell</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        {
                            this.state.users.map((user) => {
                                return(
                                    <Users key={user.id} user={user}/>
                                )


                            })
                        }

                    </table>
                </div> : null

        )
    }
});

const stateToProps = function(state) {
    return {
        users: state.userReducer.users
    }
}

const dispatchToProps = function(dispatch) {
    // In a real app, you would 'dispatch' an action here based
    // on the user being clicked
    return {
        onClick: () => {console.log('user was clicked')}
    }
}

export default connect(stateToProps, dispatchToProps)(UserContainer)