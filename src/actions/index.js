const ADD_CONTENT = "ADD_CONTENT";
const REMOVE_CONTENT = "REMOVE_CONTENT";
export const FETCH_INITIAL_CONTENT = 'FETCH_INITIAL_CONTENT'

export function addContent(payload) {
  return { type: ADD_CONTENT, payload }
};

export function removeContent(payload) {
  return { type: REMOVE_CONTENT, payload }
};

export function fetchInitialContent(payload) {
  console.log("Payload", payload)
  return { type: FETCH_INITIAL_CONTENT, payload }
}