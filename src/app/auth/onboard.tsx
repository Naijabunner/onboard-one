import { Dimensions, FlatList, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import Button from '../../components/ui/button';
import { Colors } from '../../../constants/Colors';
import { oboardItems } from '../../../data/onboardData';
import OnboardSlide from '../../components/OnborardSlide';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

interface OnboardItem {
  id: number;
  image: ImageSourcePropType;
  title: string;
  description: string
}

const { width, height } = Dimensions.get('window');

const onboard = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef<FlatList<OnboardItem> | null>(null);
  const router = useRouter()


  const updateCurrentSlideIndex = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != oboardItems.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    let prevSlideIndex = currentSlideIndex - 1;
    if (prevSlideIndex >= 0) {
      prevSlideIndex = currentSlideIndex === 1 ? -1 : prevSlideIndex
      const offset = width / prevSlideIndex;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = oboardItems.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
   
  const getStarted=()=>{
    router.replace('/auth/SignUp')
  }
// const Pagination =()=>{
//   return(
//     <View style={{ flexDirection:'row', gap:8, marginVertical:50 }}>
//       {oboardItems.map((item,index)=>{
//         return(
          
//             <TouchableOpacity key={index} style={[{ height: 10, width: 10, borderRadius: '100%'}, index !== currentSlideIndex? {backgroundColor: '#D9D9D9'}:{backgroundColor: Colors['primary-500']} ]}>
//             </TouchableOpacity>
        
//         )})}
//   </View>)
// }



//   const OnboardSlide = ({ item }: { item: { image: ImageSourcePropType, title: string, description: string } }) => {
//     const { image, title, description } = item
//     return (<View style={[styles.SlideContainer, {width, height: height }]}>
//       <Image
//         source={image}
//         style={{ width, resizeMode: 'contain' }}
//       />
//       <View style={
//         {
//             maxWidth:400,
//           marginHorizontal:'auto',
//           alignItems:'center'
//         }
//       }>
//         <Pagination/>
//         <Text style={styles.title}>
//           {title}
//         </Text>
//         <Text style={styles.description}>
//           {description}
//         </Text>
//       </View>
//     </View>
//     )
//   }


  return (
    <View style={{ flex: 1, margin:10 }}>
       <StatusBar translucent={false}/>
   {currentSlideIndex !== oboardItems.length-1 &&  <TouchableOpacity onPress={skip} style={{ alignSelf: 'flex-end', marginRight: 10, marginTop: 10, }}>
        <Text style={{ fontSize: 16, fontWeight: 'regular', color: Colors['primary-500'] }}>
          Skip
        </Text>
      </TouchableOpacity> }
      <View style={{  flex: 1 }}>
        <FlatList
        style={{   }}
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <OnboardSlide item={item} currentSlideIndex={currentSlideIndex} />}
          data={oboardItems}
          pagingEnabled
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          onScrollEndDrag={updateCurrentSlideIndex}
          snapToAlignment="center"
        />
        <View style={{ flexDirection: 'row', gap: 10,}}>
          <Button
            style={[{ flex: 1, backgroundColor: 'white' }, currentSlideIndex === 0 && { opacity: 0 }]}
            textStyle={{ color: Colors['primary-500'] }}
            title='Back'
            onPress={goToPrevSlide}
          />
          <Button
            onPress={currentSlideIndex === oboardItems.length - 1 ? getStarted : goToNextSlide}
            style={{ flex: 1 }}
            title={currentSlideIndex === oboardItems.length - 1 ? 'Get Started' : 'Continue'}
          // style={}
          />
        </View>
      </View>

    </View>
  )
}

export default onboard;

const styles = StyleSheet.create({

})