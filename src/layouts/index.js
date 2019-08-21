import React from 'react'
import BasicLayout from './BasicLayout'
import UserLayout from './UserLayout'

export default class MainLayout extends React.Component {
  render() {
    const { children, location: { pathname } } = this.props

    return (
      <div>
        {(pathname === '/login' || pathname === '/registe') ? (
          <UserLayout {...this.props}>
            {children}
          </UserLayout>
        ) : (
            <BasicLayout {...this.props}>
              {children}
            </BasicLayout>
          )}
      </div>
    )
  }
}