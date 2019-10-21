import React from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicatiorIOS as TestSplitPlatform
} from 'react-native'

export const TestInlineStyles = () => {
  return (
    <View style={{ flex: 1 }} />
  )
}

export const TestColorLiterals = () => {
  const styles = StyleSheet.create({
    test: {
      backgroundColor: 'red'
    }
  })

  return <View style={styles.test} />
}

const TestUnusedStyles = StyleSheet.create({
  unusedStyle: {
    flex: 1
  }
})

console.log('use tests', TestSplitPlatform, TestUnusedStyles)
