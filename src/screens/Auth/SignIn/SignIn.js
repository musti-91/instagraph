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
      securePassword: false
    }
  }

  render() {
    const { container } = styles
    const { handleSubmit, submitting } = this.props
    const { modalVisibility, securePassword } = this.state
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
          <Field
            type="password"
            name="password"
            component={this._renderField}
          />
          <FAB
            onPress={handleSubmit(this.onTextFieldsSubmitted)}
            icon="forward"
            label="Sign in"
            theme={{ colors: { accent: "#ff9900" } }}
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
          secureTextEntry={name === "password" && this.state.securePassword}
          theme={{
            colors: {
              primary: "#ff9900",
              background: "#4f6d7a",
              placeholder: "#E3D9B3",
              text: "#E3D9B3"
            }
          }}
        />
      </View>
      <HelperText type="error" visible={meta.error}>
        {meta.error}
      </HelperText>
      {name === "password" && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Switch
            value={this.state.securePassword}
            onValueChange={() =>
              this.setState({ securePassword: !this.state.securePassword })
            }
            color="#ff9900"
          />
          <Text style={{ marginLeft: 15, fontSize: 12, color: "#ff9900" }}>
            Show password
          </Text>
        </View>
      )}
    </View>
  )
  onTextFieldsSubmitted = values => alert(JSON.stringify(values))
  onSecurePasswordPressed = () =>
    this.setState({ securePassword: !this.state.securePassword })
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
    destroyOnUnmount: true
  })(SignIn)
)
