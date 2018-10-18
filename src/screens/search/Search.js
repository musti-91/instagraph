import React, { Component } from "react"
import PropTypes from "prop-types"
import { reduxForm, Field } from "redux-form"

import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import {
  TextInput,
  FAB,
  Title,
  HelperText,
  Colors,
  List
} from "react-native-paper"

import axios from "axios"
import { api, key as APIKEY } from "../../utility/api"
import { validate } from "../../utility/validator"

let Search = ({ handleSubmit, submitting }) => {
  const { container } = styles
  return (
    <ScrollView style={styles.container}>
      <Title>Using redux form</Title>
      <Field
        name="search"
        component={renderField}
        onBlur={handleSubmit(searchedValue)} // TODO: later should return message with alert aer you want to sure to cancel search
      />
      <FAB
        onPress={handleSubmit(searchedValue)}
        icon="search"
        label="search"
        disabled={submitting}
      />
    </ScrollView>
  )
}

const searchedValue = keyword => console.log(assets)

const renderField = ({ input: { onChange, ...restInputProps }, meta }) => (
  <View>
    <TextInput
      mode="outlined"
      onChangeText={onChange}
      {...restInputProps}
      label="search animal"
      error={meta.error}
      theme={{ colors: { primary: "#4f6d7a", text: "#4f6d7a" } }}
    />
    <HelperText type="error" visible={meta.touched && meta.error}>
      {meta.error}
    </HelperText>
  </View>
)

// ********************* Styling *****************************************
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: "#ccc",
    padding: 30
  },
  input: {
    marginHorizontal: 20
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f6d7a",
    fontSize: 30,
    margin: 20
  }
})

// ********************* export app && connect with redux(forms) *********************

export default reduxForm({
  form: "search",
  destroyOnUnmount: true,
  validate
})(Search)
