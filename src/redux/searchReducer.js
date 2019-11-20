import axios from "axios"
import { api, key as APIKEY } from "../utility/api"

const INITIAL_STATE = {
  fetching: false,
  fetchAssetsError: null,
  assets: [],
  requestedAsset: null
}

const FETCH_ASSETS_START = "FETCH_ASSETS_START"
const FETCH_ASSETS_SUCCESS = "FETCH_ASSETS_SUCCESS"
const FETCH_ASSETS_FAILED = "FETCH_ASSETS_FAILED"

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ASSETS_START:
      state = { ...state, fetching: true, requestAsset: action.requestedAsset }
      break
    case FETCH_ASSETS_SUCCESS:
      state = { ...state, fetching: false, assets: action.assets }
      break
    case FETCH_ASSETS_FAILED:
      state = { ...state, fetching: false, error: action.error }
      break
    default:
      state = { ...state }
  }
  return state
}

const receiveAssets = assets => ({ type: FETCH_ASSETS_SUCCESS, assets })
const requestAsset = asset => ({
  type: FETCH_ASSETS_START,
  requestedAsset: asset
})

export const fetchAssets = asset => dispatch => {
  dispatch(requestAsset(asset))
  return fetch(api + asset + APIKEY)
    .then(response => response.json())
    .then(res => dispatch(receiveAssets(res.assets)))
    .catch(error => dispatch(() => ({ type: FETCH_ASSETS_FAILED, error })))
}
