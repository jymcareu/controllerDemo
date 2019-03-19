import request from '../utils/request';

export default {
  namespace: 'demo',
  state: {
    loading: false,
    url: "",
    data: {}
  },
  reducers: {
    request(state, payload) {
      return {...state, ...payload};
    },
    response(state, payload) {
      return {...state, ...payload};
    }
  },
  effects: {
    *'fetch'(action, {put, call}) {
      yield put({type: 'request', loading: true});

      let data = yield call((url) => {
        return new Promise(resolve => {
          let params = action.data;
          request({url: action.url, method: 'GET', params}).then((data) => {
            resolve(data);
          });
        });
      }, action.data);

      yield put({
        type: 'response',
        loading: false,
        data
      });
    }
  }
};
