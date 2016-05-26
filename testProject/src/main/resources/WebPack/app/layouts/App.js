import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';


export default React.createClass({
   render() {
       var s={textAlign:'center'};
      return (
         <div>
            <h3 style={s}>Welcome to React Redux Setup...!!</h3>
             <div className="app">

                 <ul className="nav nav-tabs">
                     <li role="presentation"><Link to="/">Home</Link><br /></li>
                     <li role="presentation"><Link to="/create">Create User</Link><br /></li>
                     <li role="presentation"><Link to="/widgets">Widgets</Link><br /></li>
                     <li role="presentation"><Link to="/users">Users</Link></li>
                 </ul>

                 <main>
                     {this.props.children}
                 </main>

             </div>
         </div>
      );
   }
})

