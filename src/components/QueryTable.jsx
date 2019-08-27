import styles from './QueryTable.css';
import { Table, Pagination } from 'antd';
import React from 'react';
import { connect } from 'dva'
import router from 'umi/router'

const mapStateToProps = ({ tableData }) => {
  const { list, pageNum, pageSize, total } = tableData
  return {
    list,
    pageNum,
    pageSize,
    total,
  }
}
/* 
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}; */

@connect(mapStateToProps)
class QueryTable extends React.Component {
  constructor(props) {
    super(props)
    this.changeList(1, 5)
  }

  goDetail = (id) => {
    /* const { match: { parmas: { id } } } = this.props  */
    router.push(`/information/${id}`)
  }

  columns = () => {
    return [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '网站',
        dataIndex: 'website',
        key: 'website',
      },
      {
        title: '联系方式',
        dataIndex: 'phone',
        key: 'phone',

      },
      {
        title: '操作',
        dataIndex: 'id',
        key: 'action',
        render: (id) => (
          <span>
            <span className={styles.table_column_btn} onClick={() => this.goDetail(id)}>详情</span>
          </span>
        )
      },
    ]
  }

  changeList = (pageNum, pageSize) => {
    const { dispatch } = this.props
    dispatch({
      type: 'tableData/fetch',
      payload: {
        pageNum,
        pageSize,
      },
    })
  }

  onShowSizeChange = (current, pageSize) => {
    this.changeList(1, pageSize)
  }

  pageChange = (current) => {
    const { pageSize } = this.props
    this.changeList(current, pageSize)
  }

  render() {
    const { list, pageNum, pageSize, total } = this.props
    return (
      <div>
        <div>
          <Table /* rowSelection={rowSelection} */ columns={this.columns()} dataSource={list} rowKey="id" pagination={false} />
        </div>
        <div>
          <Pagination
            className="ant-table-pagination"
            onChange={this.pageChange}
            onShowSizeChange={this.onShowSizeChange}
            showSizeChanger
            showQuickJumper
            pageSizeOptions={['5', '10']}
            defaultCurrent={pageNum}
            pageSize={pageSize}
            total={total}
          />
        </div>
      </div>
    )
  }
}

export default QueryTable;
