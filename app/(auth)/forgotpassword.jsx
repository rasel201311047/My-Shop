import { View, Image, Text, ScrollView, TouchableOpacity, StatusBar, TextInput, Alert } from "react-native";
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../assets/project_image/logo.png"
import Feather from '@expo/vector-icons/Feather';
import { router, useRouter } from "expo-router";
import Checkbox from 'expo-checkbox';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const forgotpassword = () => {
  return (
        <SafeAreaView className="h-screen">
            <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
            <Text className='text-center text-xl font-bold'>Forget Password</Text>
            <MaterialIcons name="arrow-back-ios-new" className='absolute top-[20] left-2 ' size={24} color="black" />

            <View className='top-6 px-3'>
                <Text className='px-4'>Enter your email address to verify it’s you. We will send a code to this email</Text>

                <View className='px-4'>
      
                    <Text className="text-black mt-4 mb-2">Email</Text>
                    <TextInput className="h-10 shadow-black  border border-gray-600 text-black rounded px-5" keyboardType="email-address" />

                    <TouchableOpacity onPress={()=>router.push('/varify')} className='bg-[#23AA49] mt-10 py-3 rounded-lg'>
                        <Text className='text-lg text-white font-bold text-center'>Send Code</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
  )
}

export default forgotpassword