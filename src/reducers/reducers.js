import { combineReducers } from 'redux'
// import { reducer as reduxFormReducer } from 'redux-form'
// import { reducer as toastrReducer } from 'react-redux-toastr'

import userReducer     	            from './userReducer'

const rootReducer = combineReducers({
    userReducer
})

export default rootReducer