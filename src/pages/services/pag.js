
import request from '../utils/request';

export function fetch({ pageNum, pageSize }) {
  return request(`/api/users?_page=${pageNum}&_limit=${pageSize}`);
}