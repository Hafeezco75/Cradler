import axios from "axios";
import * as promise from "axios";


axios.post('v1/api/register', {
    firstName: '',
    lastName: '',
    email_address: '',
    password: '',
    confirm_password: '',
})
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
    console.log(error)
    })


axios.post('v1/api/login', {
    userName: '',
    password: '',
})
    .then(function(response) {
    console.log(response)
    })
    .catch(function(error) {
    console.log(error)
    })


function getAllEvents() {
    axios.get('v1/api/events');
}

function getAllTickets() {
    axios.get('v1/api/tickets/');
}


promise.all([getAllEvents],[getAllTickets])
    .then(function ([user, tickets]) {
        console.log(user) ? console.log(tickets) : null;
    })
    .catch(function(error) {
        console.log(error)
})