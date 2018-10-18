const INITIAL_STATE = {
  launchApp: false,
  pages: []
}
// types
const LAUNCH_APP = "LAUNCH_APP"
const FETCH_PAGES = "FETCH_PAGES"

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LAUNCH_APP:
      state = { ...state, launchApp: true }
      break
    case FETCH_PAGES:
      state = {
        ...state,
        launchApp: false,
        pages: [
          ...state.pages.filter(page => page !== action.page),
          action.page
        ]
      }
      break
    default:
      state = { ...state }
  }
  return state
}

export const startApp = () => ({
  type: LAUNCH_APP
})

export const fetchPages = pageName => ({
  type: FETCH_PAGES,
  page: pageName
})
