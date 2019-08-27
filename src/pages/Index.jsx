/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Index.css';
import React from 'react';
import { connect } from 'dva'
import router from 'umi/router'
import { Form, Row, Col, Input, Button, Icon, Table, Pagination } from 'antd';

const mapStateToProps = ({ tableData }) => {
  const { list, pageNum, pageSize, total } = tableData
  return {
    list,
    pageNum,
    pageSize,
    total,
  }
}

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

@connect(mapStateToProps)
class QueryTable extends React.Component {

  state = {
    expand: false,
  };

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
        align: 'center',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        align: 'center',
      },
      {
        title: '网站',
        dataIndex: 'website',
        key: 'website',
        align: 'center',
      },
      {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
        align: 'center',

      },
      {
        title: '操作',
        dataIndex: 'id',
        key: 'action',
        align: 'center',
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

  // To generate mock Form.Item
  getFields = () => {
    const count = this.state.expand ? 8 : 6;
    const children = [];
    const name = [
      '姓名',
      '邮箱',
      '网站',
      '电话',
      '其他',
      '其他',
      '其他',
      '其他',
    ]
    for (let i = 0; i < 8; i++) {
      children.push(
        <Col span={6} offset={2} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <Form.Item style={{ display: 'flex' }} label={name[i]}>
            <Input placeholder="请输入" />
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render() {
    const { list, pageNum, pageSize, total } = this.props
    return (
      <div>
        <div>
          <Form className={styles.ant_advanced_search_form} onSubmit={this.handleSearch}>
            <Row gutter={24}>{this.getFields()}</Row>
            <Row>
              <Col span={24} style={{ textAlign: 'right' }}>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                  清空
                </Button>
                {this.state.expand ? (
                  <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                    收起 <Icon type={'up'} />
                  </a>)
                  : (
                    <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                      展开 <Icon type={'down'} />
                    </a>
                  )
                }
              </Col>
            </Row>
          </Form>
        </div>
        <div style={{ padding: '30px 0px 0px 0px', borderRadius: '6px' }}>
          <Table rowSelection={rowSelection} columns={this.columns()} dataSource={list} rowKey="id" pagination={false} />
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

const IndexPage = Form.create()(QueryTable);

export default IndexPage;
