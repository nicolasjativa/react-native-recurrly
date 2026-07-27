import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>SignUp</Text>
        <Link href="/(auth)/sign-up">Sign In</Link>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
