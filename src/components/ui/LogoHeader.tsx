import React from 'react'
import { Image, StyleSheet, Text, } from 'react-native'
import { Colors } from '../../../constants/Colors'

const LogoHeader = ({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) => {
  return (
    <>
      <Image
        style={styles.image}
        source={require("../../../assets/logo-dark.png")}
      />
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </>
  );
};

export default LogoHeader

const styles = StyleSheet.create({
  image: {
    height: 101,
    width: 117,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors["primary-500"],
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "medium",
    color: Colors["primary-500"],
  },
});