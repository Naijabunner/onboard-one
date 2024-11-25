import { StyleSheet, Text, View } from "react-native";
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import BottomSheetComponent from "../ui/bottomSheet";
import Input from "../ui/input";
import Button from "../ui/button";
import { Colors } from "../../../constants/Colors";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

interface ForgotPasswordProps {
  setOnClose?: () => void;
}

const ForgotPassword = forwardRef<BottomSheetMethods, ForgotPasswordProps>(
  ({ setOnClose }, ref) => {
    const [resetStatus, setresetStatus] = useState(false);

    const handleSubmit = () => {
      setresetStatus(true);
    };

    const handleClose = () => {
      (ref as React.RefObject<BottomSheetMethods>).current?.close();
    };
    
    return (
      <>
        {!resetStatus ? (
          <BottomSheetComponent ref={ref} snapPoints={["55%"]} >
            <View style={styles.forgortPwContainer}>
              <Text style={styles.title}>Forgot your password</Text>
              <Text style={styles.subtitle}>
                Enter your email address and we will share a link to create a
                new password.
              </Text>
              <Input
                name={"email"}
                placeholder={"Enter Email Address"}
                type='email'
                isSecret={false}
              />
              <Button
                title='Send'
                style={styles.button}
                onPress={handleSubmit}
              />
            </View>
          </BottomSheetComponent>
        ) : (
          <BottomSheetComponent ref={ref} snapPoints={["40%"]}>
            <View
              style={[
                styles.forgortPwContainer,
                { paddingHorizontal: 10, padding: 20, gap: 5 },
              ]}
            >
              <Text style={styles.title}>Password reset successfull </Text>
              <Text style={[styles.subtitle, { fontSize: 16 }]}>
                You can now login with your new password.
              </Text>
              <Button
                title='Proceed'
                style={styles.button}
                onPress={handleClose}
              />
            </View>
          </BottomSheetComponent>
        )}
      </>
    );
  }
);

export default ForgotPassword;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
  },
  forgortPwContainer: {
    // gap:10,
  },
  button: {
    backgroundColor: Colors["primary-500"],
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
