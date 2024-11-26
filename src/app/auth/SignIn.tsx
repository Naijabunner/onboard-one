import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../../constants/Colors";
import { Link, Stack, useRouter } from "expo-router";
import Input from "../../components/ui/input";
import Button from "../../components/ui/button";
import { SignInForm } from "../../../data/authForms";
import LogoHeader from "../../components/ui/LogoHeader";
import { RoutePathMap } from "../../../constants/Paths";
import BottomSheet from "@gorhom/bottom-sheet";
import ForgotPassword from "../../components/auth/forgotPassword";
import { signInHandler } from "../../../utils/auth";

const SignIn = () => {
  const router = useRouter();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [signInInput, setsignInInput] = useState({
    email: '',
    password: ''
  })

  const forgotPasswordHandler = () => {
    bottomSheetRef.current?.expand();
  };

  const handleOnchangeInput = (name: string, value: string) => {
    // @ts-ignore
    setsignInInput({ ...signInInput, [name]: value })
  }

  const handleSubmitForm = async () => {
    const { email, password } = signInInput
    const res = await signInHandler(email, password)
    console.log(res)
    if (res === 200) {
      router.replace('/dashboard/Home')
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <LogoHeader title='Welcome Back' subtitle='Login to continue' />
      <View style={styles.formContainer}>
        {SignInForm.map(({ title, placeholder, name, type }, index) => {
          return (
            <Input
              label={title}
              name={name}
              key={index}
              placeholder={placeholder}
              type={type}
              onChange={handleOnchangeInput}
              isSecret={false}
            />
          );
        })}
        <TouchableOpacity onPress={forgotPasswordHandler}>
          <Text
            style={{
              textAlign: "right",
              fontWeight: "bold",
              color: Colors["primary-500"],
            }}
          >
            Forgot password
          </Text>
        </TouchableOpacity>
        <Button
          title='LOG IN'
          style={styles.button}
          onPress={handleSubmitForm}
        />
      </View>
      <Link href={RoutePathMap.get("signup")} style={styles.redirectText}>
        Don’t have an account? <Text style={styles.spanText}>Sign up now </Text>
      </Link>
      <ForgotPassword ref={bottomSheetRef} />
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  formContainer: {
    width: "100%",
    marginTop: 65,
    paddingHorizontal: 20,
    rowGap: 20,
  },
  button: {
    backgroundColor: Colors["primary-500"],
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  redirectText: {
    fontSize: 14,
    fontWeight: "medium",
    paddingTop: 20,
  },
  spanText: {
    color: Colors["primary-500"],
    fontWeight: "bold",
  },
});
