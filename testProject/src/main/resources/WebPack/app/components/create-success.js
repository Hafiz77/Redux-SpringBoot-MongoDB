/**
 * Created by Hafiz on 5/4/2016.
 */
import React from 'react';

export default React.createClass({
    render: function() {
        var s={textAlign:'center'};
        var containerStyle = {paddingTop: '3px'};
        return (
            <div className="container" style={containerStyle}>
                <div className="row">
                    <div className="alert alert-success" role="alert">
                        <h4 style={s}> Welcome {this.props.user.firstname}{"  "}{this.props.user.lastname}</h4>
                    </div>
                </div>
            </div>
        )
    }
})