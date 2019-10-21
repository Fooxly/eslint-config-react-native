import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const TestComponent = props => {
  return (
    <Container>
      <Text style={{ fontSize: props.size }}>
        {props.user.name || 'no one'} says hi!
      </Text>
    </Container>
  )
}

TestComponent.propTypes = {
  size: PropTypes.number.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default TestComponent

const Container = styled.View`
  flex: 1;
`

const Text = styled.Text`
  color: blue;
`
