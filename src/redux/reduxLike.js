export function createStore(reducer) {
  let state;
  const listeners = [];

  const subscribe = (subscriber, context = null) => {
    listeners.push({
      subscriber,
      context,
    });
  };

  const publish = () => {
    listeners.forEach(({ subscriber, context }) => {
      console.log(subscriber, context);
      subscriber(context);
    });
  };

  // 상태 반환 함수
  const getState = () => {
    return { ...state };
  };

  // 상태 업데이트 함수
  const dispatch = (action) => {
    state = reducer(state, action);
  };
  return {
    getState,
    dispatch,
    subscribe,
  };
}

export const createAction = (type, payload = {}) => ({
  type,
  payload: { ...payload },
});
