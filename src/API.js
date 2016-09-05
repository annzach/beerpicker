import axios from 'axios'
import AppDispatcher from './AppDispatcher'
import RouteActions from './actions/RouteActions'
import UserActions from './actions/UserActions'
import ServerActions from './actions/ServerActions'
import SearchActions from './actions/SearchActions'

const API = {
  register(user) {
    axios.post('/api/users/register', user)
      .then(res => {
        RouteActions.route('/login');
      })
      .catch(console.error)
  },

  login(user) {
    axios.post('/api/users/login', user)
      .then(() => {
        UserActions.getProfile()
        RouteActions.route('/');
      })
      .catch(console.error)
  },

  logout() {
    axios.post('/api/users/logout')
      .then(() => {
        ServerActions.removeProfile()
        RouteActions.route('/')
      })
      .catch(console.error)
  },

  getProfile() {
    axios.get('/api/users/profile')
      .then(res => res.data)
      .then(ServerActions.receiveProfile)
      .catch(console.error)
  },
  editProfile(id,contents){
    axios.put('api/users/profile/'+id,contents)
         .then(res=>res.data)
         .then(ServerActions.receiveProfile)
         .catch(console.error);

  },
   search(){
    console.log("inside API search");
    axios.get(`api/beers/`)
    .then(response =>{
     console.log('APILookup:', response.data)
      return response.data;
    })
    .then(results =>{
      AppDispatcher.dispatch({
        type:'RECEIVE_RESULTS',
        results
      })
    })
    .catch(err =>console.log(err));
  }

}

export default API;
