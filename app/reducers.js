import { combineReducers } from 'redux';
import * as MessagesReducers from './messages/reducers';

export default combineReducers(
    Object.assign({}, 
        MessagesReducers
    )
);
