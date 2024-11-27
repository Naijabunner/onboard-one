import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack, Tabs } from 'expo-router';
import { Colors } from '../../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors['primary-500'], tabBarStyle:{ height:70, paddingTop:10, shadowOpacity:0,} }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
       <Tabs.Screen
        name="MyCourses"
        options={{
          title: 'MyCourses',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="play" color={color} />,
        }}
      /> 
       <Tabs.Screen
        name="Blogs"
        options={{
          title: 'Blogs',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
        }}
      /> 
       <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      /> 
    </Tabs>
  );
}
