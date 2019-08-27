import * as pagService from '../pages/services/pag'

const initState = {
  list: [],
  pageNum: 1,
  pageSize: 5,
  total: 10,
}
const TableData = {
  namespace: 'tableData',
  state: initState,
  effects:{
    *fetch({ payload: { pageNum, pageSize } }, { call, put }) {
      const { data, headers, } = yield call(pagService.fetch, { pageNum, pageSize });
      yield put({
         type: 'save', 
         payload: {
            data,
            total: parseInt(headers['x-total-count']),
            pageNum: parseInt(pageNum, 10),
            pageSize,
          },
      });
    },
  },
  reducers: {
    save(state, { payload: { data: list, total, pageNum, pageSize } }) {
      return { ...state, list, total, pageNum, pageSize };
    },
  },
}

export default TableData
