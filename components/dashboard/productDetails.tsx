import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const ProductDetails = () => {
    return (
        <View style={{
            borderWidth: 1, paddingVertical: 20, paddingHorizontal: 15, borderRadius: 15,
            borderColor: '#F1F1F1',
            flexDirection: 'row',
            gap: 10

        }}>
            <View
                style={{ backgroundColor: '#F1F1F1', width: 68, height: 68, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
            >
                <Image
                    source={require('../../assets/dashboard/camera.png')}
                    width={50}
                    height={35}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>
                    Photoshop Course
                </Text>
                <View style={{ gap: 10, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        {/* ratings */}
                        <Ionicons name={'star'} size={16} color={'gold'} />
                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: 'medium' }} >

                            5.0
                        </Text>
                    </View>
                    <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: 'medium' }} >
                        10h 30m
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({})