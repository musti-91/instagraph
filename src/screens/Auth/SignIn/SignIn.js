import React, { Component } from "react"
import PropTypes from "prop-types"

import Icon from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux"

import { validate } from "../../../utility/validator"

import SplashScreen from "react-native-splash-screen"

import { styles } from "./styles"
import {
  SafeAreaView,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  Platform
} from "react-native"
import {
  Card,
  Title,
  TextInput,
  IconButton,
  DarkTheme,
  Colors,
  Divider,
  Dialog,
  ScrollArea,
  Modal,
  Portal,
  Checkbox,
  HelperText,
  FAB,
  Switch
} from "react-native-paper"
class SignIn extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: "#001211",
    statusBarColor: "#001211",
    navBarButtonColor: "#dcc"
  }
  constructor(props) {
    super(props)
    this.state = {
      modalVisibility: false,
      email: "",
      password: "",
      emailError: null,
      passwordError: null,
      securePassword: false
    }
  }

  render() {
    const { container } = styles
    const { handleSubmit, submitting } = this.props
    const {
      email,
      password,
      emailError,
      passwordError,
      modalVisibility,
      securePassword
    } = this.state
    return (
      <ImageBackground
        style={container}
        resizeMode="cover"
        source={require("../../../assets/backgroundImage.png")}
      >
        <ScrollView>
          <Image
            source={require("../../../assets/lion.png")}
            resizeMethod="auto"
            resizeMode="contain"
          />
          <Field name="email" component={this._renderField} />
          <Field name="password" component={this._renderField} />
          <FAB
            onPress={handleSubmit(this.onTextFieldsSubmitted)}
            icon="forward"
            label="Sign in"
          />
        </ScrollView>
      </ImageBackground>
    )
  }

  _renderField = ({ input: { onChange, name } }, meta, label) => (
    <View style={{ marginBottom: 15 }}>
      <View>
        <TextInput
          onChangeText={onChange}
          label={name}
          mode="outlined"
          error={meta.error}
          underlineColor={Colors.blue500}
          secureTextEntry={this.state.securePassword}
          theme={{
            colors: { primary: Colors.amber100, text: Colors.amber100 }
          }}
        />
        <HelperText type="error" visible={meta.touched && meta.error}>
          {meta.error}
        </HelperText>
      </View>
      {name === "password" && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Switch
            value={this.state.securePassword}
            onValueChange={() =>
              this.setState(() => ({
                securePassword: !this.state.securePassword
              }))
            }
            color="#001211"
          />
          <Text
            style={{ marginLeft: 15, fontSize: 12, color: Colors.amber100 }}
          >
            Show password
          </Text>
        </View>
      )}
    </View>
  )

  onTextFieldsSubmitted = values => alert(JSON.stringify(values))
}
// ************ render diffrent styles depends in system *************
if (Platform.OS === "android") {
  SignIn.navigatorStyle = {
    navBarBackgroundColor: "#001211",
    navBarButtonColor: "#dcc"
  }
}

export default connect(
  null,
  null
)(
  reduxForm({
    form: "signin",
    destroyOnUnmount: true,
    validate
  })(SignIn)
)
