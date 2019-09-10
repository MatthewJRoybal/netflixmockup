// Export action types
export const ADD_CONTENT           = "ADD_CONTENT";
export const REMOVE_CONTENT        = "REMOVE_CONTENT";
export const FETCH_CONTENT_BEGIN   = "FETCH_CONTENT_BEGIN";
export const FETCH_CONTENT_SUCCESS = "FETCH_CONTENT_SUCCESS";
export const FETCH_CONTENT_FAILURE = "FETCH_CONTENT_FAILURE";

// Export actions
export const fetchContentBegin = () => ({
  type: FETCH_CONTENT_BEGIN
});

export const fetchContentSuccess = content => ({
  type: FETCH_CONTENT_SUCCESS,
  payload: { content }
});

export const fetchContentFailure = error => ({
  type: FETCH_CONTENT_FAILURE,
  payload: { error }
});

export const addContent = content => ({
  type: ADD_CONTENT,
  payload: content
});

export const removeContent = content => ({
  type: REMOVE_CONTENT,
  payload: content
});

// Export fetchContent action to retrieve json data (actual content)
export function fetchContent() {
  return dispatch => {
    dispatch(fetchContentBegin());
    return fetch('./data.json')
    .then(response => !response.ok ? Promise.reject() : response.json())
    .then(data => {
      dispatch(fetchContentSuccess(data));
      return data;
    })
    .catch(err => dispatch(fetchContentFailure(err)));
  }
}
