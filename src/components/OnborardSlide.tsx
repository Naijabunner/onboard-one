import { Dimensions, Image , ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { oboardItems } from "../../data/onboardData"
import { Colors } from "../../constants/Colors"
import { FC } from "react";
const { width, height } = Dimensions.get('window');

type props ={
    currentSlideIndex: number
}

const Pagination: FC<props> = ({ currentSlideIndex }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 8, marginVertical: 50 }}>
      {oboardItems.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={[{ height: 10, width: 10, borderRadius: '100%' }, index !== currentSlideIndex ? { backgroundColor: '#D9D9D9' } : { backgroundColor: Colors['primary-500'] }]}>
          </TouchableOpacity>
        )
      })}
    </View>)
}
  
  
  
   const OnboardSlide = ({ item, currentSlideIndex }: { item: { image: ImageSourcePropType, title: string, description: string }, currentSlideIndex: number }) => {
      const { image, title, description } = item
      return (<View style={[styles.SlideContainer]}>
        <Image
          source={image}
          style={{ width, resizeMode: 'contain' }}
        />
        <View style={
          {
              maxWidth:400,
            marginHorizontal:'auto',
            alignItems:'center'
          }
        }>
          <Pagination currentSlideIndex={currentSlideIndex}/>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>
      </View>
      ) 
    }

    export default OnboardSlide

    const styles = StyleSheet.create({
        SlideContainer:{
          flex:1,
          // paddingTop:80,
          alignItems:'center',
          justifyContent:'center',
          //  backgroundColor:'blue'
        },
        description:{
          maxWidth:'70%',
          textAlign:'center',
          lineHeight:20,
          fontSize:16,
          fontWeight:'regular'
        },
        title:{
          maxWidth:'70%',
          textAlign:'center',
          // marginBottom:10,
          fontSize:18,
          fontWeight:'bold',
          lineHeight:36,
          color:Colors['primary-500']
        },
      })