
import axios from 'axios';
import store from '../store';
import $ from 'jquery';

export function getUsers() {
    return axios.get('http://localhost:8080/api/users/list/offset/0/limit/100').then(function(response) {

        //console.log(" Data Test--->",response.data.apiresponse.list);
        store.dispatch({
            type: 'GET_USERS',
            users: response.data.apiresponse.list
        });
        return response;

    }).catch(function(err) {
        console.error('Get Error',err);
    });

    /*return $.ajax({
        url: 'http://localhost:8080/api/users/list/offset/0/limit/100',
        type: 'GET',
        success: function (response) {
            //console.log('success', response.apiresponse.list);
            store.dispatch({
                type: 'GET_USERS',
                users: response.apiresponse.list
            });
            return response;
        },
        error: function () {
            console.error('error');
        }
    })*/
}
export function CreateUsers(user) {
    return axios.post('http://localhost:8080/api/users',user).then(function(response) {

        console.log(" Data Test--->",response.data.apiresponse);
        store.dispatch({
            type: 'CREATE_USERS',
            users: response.data.apiresponse
        });
        return response;

    }).catch(function(err) {
        console.error('Get Create User Error',err);
    });


    /*return $.ajax({
        url: 'http://localhost:8080/api/users',
        type: 'POST',
        data:user,
        contentType : 'application/json',

        success: function (response) {
            console.log('success', response.apiresponse);
            store.dispatch({
                type: 'CREATE_USERS',
                users: response.apiresponse
            });
            return response;
        },
        error: function () {
            console.error('error');
        }
    })*/
}

export function GetUser(id) {
    return axios.get('http://localhost:8080/api/users/'+id).then(function(response) {

        console.log(" Data Test--->",response.data.apiresponse);
        store.dispatch({
            type: 'GET_USER',
            users: response.data.apiresponse
        });
        return response;

    }).catch(function(err) {
        console.error('Get Create User Error',err);
    });


    /*return $.ajax({
     url: 'http://localhost:8080/api/users/'+id,
     type: 'GET',
     contentType : 'application/json',

     success: function (response) {
     console.log('success', response.apiresponse);
     store.dispatch({
     type: 'GET_USER',
     users: response.apiresponse
     });
     return response;
     },
     error: function () {
     console.error('error');
     }
     })*/
}
export function DeleteUser(id) {
    return axios.delete('http://localhost:8080/api/users/'+id).then(function(response) {

        console.log(" Data Test'--->",response.data.apiresponse);
        if(response.data.apiresponse==="true"){
            getUsers();
        }
        /*store.dispatch({
            type: 'DELETE_USER',
            users: response.data.apiresponse
        });*/
        return response;

    }).catch(function(err) {
        console.error(' Delete User Error',err);
    });


    /*return $.ajax({
     url: 'http://localhost:8080/api/users/'+id,
     type: 'GET',
     contentType : 'application/json',

     success: function (response) {
     console.log('success', response.apiresponse);
     store.dispatch({
     type: 'GET_USER',
     users: response.apiresponse
     });
     return response;
     },
     error: function () {
     console.error('error');
     }
     })*/
}
