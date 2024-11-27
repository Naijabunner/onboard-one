import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DashboardWelcomeTitle = () => {
    return (
        <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 5 }}>
                Hello, Name
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 'medium', opacity: 0.7 }}>
                What do you want to learn?
            </Text>
        </View>
    )
}

export default DashboardWelcomeTitle

const styles = StyleSheet.create({})