import { StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, ReactNode, useMemo, useRef } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface BottomSheetComponentProps {
  children: React.ReactNode;
  backdropOnPress?: () => void;
  snapPoints?:any[] 
}

const BottomSheetComponent = forwardRef<BottomSheetMethods, BottomSheetComponentProps>(({ children, backdropOnPress, snapPoints }, ref) => {
//   const snapPoints = useMemo(() => ["50%"], []);
  return (
    <BottomSheet
      ref={ref}
      //   onChange={handleSheetChanges}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          onPress={backdropOnPress}
          
        />
      )}
    >
      <BottomSheetView style={styles.contentContainer}
      >
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
});

export default BottomSheetComponent

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
      },
      container: {
        flex: 1,
        backgroundColor: 'grey',
      },
})