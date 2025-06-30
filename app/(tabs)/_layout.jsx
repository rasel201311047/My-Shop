import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

const Tabslayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          alignSelf: 'center', 
          width: 200,          
          backgroundColor: '#fff',
          borderRadius: 35,     
          height: 70,
          alignItems:'center',

          ...Platform.select({
            android: { elevation: 5 },
            ios: {
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowOffset: { width: 10, height: 10 },
              shadowRadius: 10,
            },
          }),
        },
      }}
      
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'HOME',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? '#23AA49' : '#748c94'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'PROFILE',
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? '#53B175' : '#748c94'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tabslayout;
