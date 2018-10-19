import React, { Component } from "react"
import PropTypes from "prop-types"
import { reduxForm, Field } from "redux-form"

import { styles } from "./styles"

import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import {
  TextInput,
  FAB,
  Title,
  HelperText,
  Colors,
  List
} from "react-native-paper"

import { api, key as APIKEY } from "../../utility/api"

import { assets } from "../../utility/placeholderData"

import { validate } from "../../utility/validator"

import PhotoGrid from "../components/PhotoGrid"

let Search = ({ handleSubmit, submitting }) => {
  const { container } = styles
  return (
    <ScrollView style={styles.container}>
      <Title>Using redux form</Title>
      <Field
        name="search"
        component={renderField}
        onBlur={handleSubmit(searchedValue)} // TODO: later should return message with alert : Are you want to sure to cancel search
      />
      <FAB
        onPress={handleSubmit(searchedValue)}
        icon="search"
        color="#00364A"
        label="search"
        disabled={submitting}
        theme={{
          colors: {
            accent: "#C57700",
            text: "#00364A"
          }
        }}
      />
      <PhotoGrid items={assets} />
    </ScrollView>
  )
}

const searchedValue = keyword => alert(keyword.search)

const renderField = ({ input: { onChange, ...restInputProps }, meta }) => (
  <View>
    <TextInput
      mode="outlined"
      onChangeText={onChange}
      label="Search things"
      error={meta.error}
      theme={{
        colors: {
          primary: "#00364A",
          background: "#C57700"
        }
      }}
      {...restInputProps}
    />
    <HelperText type="error" visible={meta.error}>
      {meta.error}
    </HelperText>
  </View>
)

// ********************* export app && connect with redux(forms) *********************

export default reduxForm({
  form: "search",
  destroyOnUnmount: true,
  validate
})(Search)
