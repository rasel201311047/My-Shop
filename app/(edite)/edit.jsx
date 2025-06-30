import { View, Image, Text, ScrollView, TouchableOpacity, StatusBar, TextInput, Alert } from "react-native";
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from '@expo/vector-icons/Feather';
import { router, useRouter } from "expo-router";
import Checkbox from 'expo-checkbox';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { catagory, products, proimages } from '../../assets/Assets';
const edit = () => {
  return (
    <SafeAreaView className="h-screen">
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
      <Text className='text-center text-xl mt-10 font-bold'>My Account</Text>
      <MaterialIcons name="arrow-back-ios-new" className='absolute top-[60] left-2 ' size={24} color="black" />


      <View className='my-6 flex-row justify-center'>
        <Image source={proimages.im2} className='w-32 h-32 rounded-full' />
      </View>

      <View className='top-14 px-3'>

        <View className='px-4'>
          <Text className='relative border border-gray-700 px-10 py-3 rounded-full'>Rasel Islam Babu

          </Text>
          <Text className='text-sm bg-white  absolute -top-2 left-14'>Name</Text>


          <View className='mt-8'>
            <Text className='relative border border-gray-700 px-10 py-3 rounded-full'>Rajshahi Bangladesh

            </Text>
            <Text className='text-sm bg-white  absolute -top-2 left-14'>Address</Text>
          </View>

          <TouchableOpacity onPress={() => router.push('/varify')} className='bg-[#23AA49] mt-10 py-3 rounded-full '>
            <Text className='text-lg text-white font-bold text-center'>save</Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  )
}

export default edit