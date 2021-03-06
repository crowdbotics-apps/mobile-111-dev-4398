import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth4008Saga from '../features/EmailAuth4008/redux/sagas';
import EmailAuth4006Saga from '../features/EmailAuth4006/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth4008Saga,
EmailAuth4006Saga,
EmailAuthSaga,
    
  ]);
}