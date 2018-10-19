import React, { Component } from "react"
import PropTypes from "prop-types"
import { View, Text, StyleSheet } from "react-native"

import { Field, reduxForm } from "redux-form"
import { validate } from "../../utility/validator"

import { TextInput, FAB, Switch, HelperText } from "react-native-paper"

const Form = props => {
  const { handleSubmit, submitting, onFormSubmit, isHasButton } = props
  return (
    <View>
      <Field name="email" component={_renderField} />
      <Field name="password" component={_renderField} />
      {isHasButton && (
        <FAB
          type="submit"
          onPress={handleSubmit(onFormSubmit)}
          icon="forward"
          label="Sign in"
          disabled={submitting}
          theme={{ colors: { accent: "#ff9900" } }}
        />
      )}
    </View>
  )
}
/** render input */
const _renderField = ({
  input: { onChange, name },
  meta: { error, touched }
}) => (
  <View style={{ marginBottom: 15 }}>
    <TextInput
      onChangeText={onChange}
      label={name}
      mode="outlined"
      error={error}
      secureTextEntry={name == "password"}
      theme={{
        colors: {
          primary: "#ff9900",
          background: "#4f6d7a",
          placeholder: "#E3D9B3",
          text: "#E3D9B3"
        }
      }}
    />
    <HelperText type="error" visible={error}>
      {error}
    </HelperText>
  </View>
)

/** proptypes */
Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  isHasButton: PropTypes.bool,
  formName: PropTypes.string
}

Form.defaultProps = {
  isHasButton: true
}
/** connect reduxForm */
export default reduxForm({
  validate,
  form: "signin",
  destroyOnUnmount: true
})(Form)
