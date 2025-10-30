export function checkStatus(status, actionType) {
  if (status >= 400) {
    throw new Error(
      `Something went wrong with ${actionType}. Error status is ${status}`
    );
  }
}
export function setPending(state) {
  state.isPending = true;
  state.error = null;
}
export function setError(state, { payload }) {
  state.isPending = false;
  state.error = payload;
}