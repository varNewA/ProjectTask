import React from 'react'

class UserLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default UserLayout
