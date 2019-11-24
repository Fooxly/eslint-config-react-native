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

export const TestSingleStyleArray = () => {
  const styles = StyleSheet.create({
    test: {
      flex: 1
    }
  })

  return <View style={[styles.test]} />
}

export const TestUnusedStyles = StyleSheet.create({
  unusedStyle: {
    flex: 1
  }
})

// Fixes unused variable error
console.log('use import', TestSplitPlatform)
