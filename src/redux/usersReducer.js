// import Axios from "axios"

// const INITIAL_STATE = {
//   users: [],
//   fetchingUsers: false,
//   fetchUsersError: null
// }

// const FETCH_USERS_START = "FETCH_USERS_START"
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
// const FETCH_USER_FAILED = "FETCH_USERS_FAILED"

// export const reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case FETCH_USERS_START:
//       state = { ...state, fetchingUsers: true }
//       break
//     case FETCH_USERS_SUCCESS:
//       state = {
//         ...state,
//         users: [...state.users, action.users],
//         fetchingUsers: false,
//         fetchUsersError: null
//       }
//       break
//     case FETCH_USER_FAILED:
//       state = {
//         ...state,
//         fetchUsersError: action.error,
//         fetchingUsers: false
//       }
//       break
//     default:
//       state = { ...state }
//   }
//   return state
// }

// export const fetchUsersStart = () => {
//   return { type: FETCH_USERS_START }
// }
// export const fetchUsersSuccess = dispatchEvent => {
//   Axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(res => dispatchEvent({ type: FETCH_USERS_SUCCESS, users: res.data }))
//     .catch(error => dispatchEvent({ type: FETCH_USER_FAILED, error }))
// }
