import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4008Reducer from '../features/EmailAuth4008/redux/reducers';
import EmailAuth4006Reducer from '../features/EmailAuth4006/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4008: EmailAuth4008Reducer,
EmailAuth4006: EmailAuth4006Reducer,
EmailAuth: EmailAuthReducer,

});