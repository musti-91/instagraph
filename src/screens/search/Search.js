import React, { Component } from "react"
import PropTypes from "prop-types"
import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux"

import { styles } from "./styles"
import { fetchAssets } from "../../redux/searchReducer"
import { customColors as colors } from "../../assets/colors"

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

import { validate } from "../../utility/validator"

import PhotoGrid from "../components/PhotoGrid"

let Search = ({
  handleSubmit,
  submitting,
  fetchAssets,
  fetchAssetsError,
  fetching,
  assets,
  asset
}) => {
  const { container } = styles
  return (
    <ScrollView style={styles.container}>
      <Title>Using redux form</Title>
      <Field name="search" component={renderField} />
      <FAB
        onPress={handleSubmit(searchedValue(fetchAssets))}
        icon="search"
        color="#00364A"
        label="search"
        disabled={submitting}
        theme={{
          colors: {
            accent: colors.orange,
            text: colors.dark
          }
        }}
      />
      <PhotoGrid items={assets} loading={fetching} />
    </ScrollView>
  )
}

const searchedValue = fetchAssets => keyword => fetchAssets(keyword.search)

const renderField = ({ input: { onChange, ...restInputProps }, meta }) => (
  <View>
    <TextInput
      mode="outlined"
      onChangeText={onChange}
      label="Search things"
      error={meta.error}
      theme={{
        colors: {
          primary: colors.dark,
          background: "#ccc"
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
const mapStateToProps = state => ({
  assets: state.ASSETS.assets,
  fetching: state.ASSETS.fetching,
  fetchAssetsError: state.ASSETS.fetchAssetsError
})

const mapDispatchToProps = dispatchEvent => ({
  fetchAssets: value => dispatchEvent(fetchAssets(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "search",
    destroyOnUnmount: true,
    validate
  })(Search)
)
