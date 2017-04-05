import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import { connect } from 'react-redux'

import Message from '../component/message'

const mutation = gql`
  query {
    messages {
      id,
      text
    }
  }
`

const withMessages = graphql(mutation, {
  props: ({ messageId, mutate }) => ({
    getMessage() {
      return mutate()
        .then((result) => {
          props.onShowMessage(result.id)
        })
    }
  })
})

const MessageList = ({ loading, messages }) => {
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {messages.map(({ id, text }) => (
        <div key={id}>{text}</div>
      ))}
    </div>
  )
}

const MessageListWithData = graphql(gql`
  query MessageList {
    messages {
      id,
      text
    }
  }
`, {
  props: ({ ownProps, data: { loading, messages } }) => ({
    loading, messages
  })
})(MessageList)

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMessage: (id) => {
      dispatch(showMessage(id))
    }
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(MessageListWithData)
