import Data from '../classes/Data';

var data = new Data(null);

function rootReducer(state = data, {type, payload}) {
    switch(type) {
        default:
            console.log('entró al default');
            return state;
        case 'setCurrUser':
            state.currUser = payload;
            return state;
    }
}

export default rootReducer;