import { View, Image, Text, ScrollView, TouchableOpacity, StatusBar, TextInput, Alert } from "react-native";
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../assets/project_image/logo.png"
import Feather from '@expo/vector-icons/Feather';
import { router, useRouter } from "expo-router";
import Checkbox from 'expo-checkbox';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';
const newpassword = () => {
  return (
      <SafeAreaView className="h-screen">
            <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
            <Text className='text-center text-xl font-bold'>Verify</Text>
            <MaterialIcons name="arrow-back-ios-new" className='absolute top-[20] left-2 ' size={24} color="black" />

            <View className='top-6 px-3'>
                <Text className='px-4'>Enter the code we have sent to your email.</Text>

                <View className='px-4'>
                    <View className='relative'>
                    <Text className="text-black mt-4 mb-2 px-5">New Password</Text>
                    <TextInput className="h-10 relative border border-gray-600 text-black rounded px-2"
                        secureTextEntry
                        keyboardType="password" />
                        <Octicons className='absolute bottom-[9] right-5' name="eye-closed" size={24} color="black" />
                    </View>

                    <View className='relative'>
                    <Text className="text-black mt-4 mb-2 px-5">Comfirm Password</Text>
                    <TextInput className="h-10 relative border border-gray-600 text-black rounded px-2"
                        secureTextEntry
                        keyboardType="password" />
                        <Octicons className='absolute bottom-[9] right-5' name="eye-closed" size={24} color="black" />
                    </View>


                    <View className='mt-3'>
                        <View className='flex-row gap-6 items-center'><Ionicons  name="checkmark-circle" size={16} color="#23AA49" />
                        <Text className='ml-3'>Minimum 8 characters</Text> 
                        </View>

                        <View className='flex-row gap-6 items-center'><Ionicons  name="checkmark-circle" size={16} color="#23AA49" />
                        <Text className='ml-3'>Minimum 1 letter, 1 symbol & 1 number</Text> 
                        </View>


                        <View className='flex-row gap-6 items-center'><Foundation  name="x-circle" size={16} color="#ee2e2e" />
                        <Text className='ml-3'>Minimum 1 letter, 1 symbol & 1 number</Text> 
                        </View>
                        {/* <Foundation name="x-circle" size={24} color="black" /> */}
                    </View>


                    <TouchableOpacity onPress={() => router.push('/success')} className='bg-[#23AA49] mt-10 py-3 rounded-lg'>
                        <Text className='text-lg text-white font-bold text-center'>Change Password</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </SafeAreaView>
  )
}

export default newpassword