import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _results = [] , details ={};

class SearchStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action=>{
        switch (action.type) {
          case 'RECEIVE_RESULTS': _results = action.results;
                                  this.emit('CHANGE');
                                  break;
    });
  }

  startListening(cb) {
    this.on('CHANGE',cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE',cb);
  }

  getAll(){
    return _results;
  }
  getDetails(){
    return details;
  }
}

export default new SearchStore();