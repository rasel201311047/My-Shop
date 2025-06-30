import { View, Text, TouchableOpacity, StatusBar, Image, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { catagory } from '../../assets/Assets';
import { router } from 'expo-router';
const details = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />

      {/* -----------------------------Header------------------------------------- */}
      <View className="flex-row items-center justify-between px-4 py-2 bg-[#F3F5F7]">
        <TouchableOpacity onPress={()=>router.push('/home')}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color="black"
          className="shadow-black bg-white p-3 rounded-lg"
        />
        </TouchableOpacity>
        <Text className="text-xl font-semibold">All Category</Text>
        <Octicons
          name="search"
          size={24}
          color="black"
          className="shadow-black bg-white p-3 rounded-lg"
        />
      </View>
      </SafeAreaView>
  )
}

export default details