package com.mustafa.rncourse.instagraph;

import android.os.Bundle; // splach screen
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // splach screen

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this); // splach screen
    super.onCreate(savedInstanceState);
  }
}