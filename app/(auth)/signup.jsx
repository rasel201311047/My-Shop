import { View, Image, Text, ScrollView, TouchableOpacity, StatusBar, TextInput, Alert } from "react-native";
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../assets/project_image/logo.png"
import Feather from '@expo/vector-icons/Feather';
import { router, useRouter } from "expo-router";
import Checkbox from 'expo-checkbox';
import AntDesign from '@expo/vector-icons/AntDesign';
import google from '../../assets/project_image/google.png'
const signup = () => {
  return (
        <SafeAreaView className="h-screen">
            <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />

            <View className='flex-col items-center mt-12'>
                <Image source={logo} className='h-32 w-32' />
                <Text className='text-[#23AA49] text-xl font-bold'>My Shopper</Text>
            </View>

            {/*----------------------------------- login--------------------- */}
            <View className='top-6'>
                <Text className='text-center text-xl font-bold'>Login as a user</Text>

                <View className='px-4'>
                    <Text className="text-black mt-4 mb-2">Name</Text>
                    <TextInput className="h-10  border border-gray-600 text-black rounded px-5" keyboardType="name" />

                    <Text className="text-black mt-4 mb-2">Email</Text>
                    <TextInput className="h-10  border border-gray-600 text-black rounded px-5" keyboardType="email-address" />

                    <Text className="text-black mt-4 mb-2 px-5">Password</Text>
                    <TextInput className="h-10 relative border border-gray-600 text-black rounded px-2"
                        secureTextEntry
                        keyboardType="password" />
                    <Text className='absolute bottom-[128] right-5'><Feather name="eye" size={24} color="black" /></Text>
                    {/* <Feather name="eye-off" size={24} color="black" /> */}


                    <TouchableOpacity className='bg-[#23AA49] mt-10 py-3 rounded-lg'>
                        <Text className='text-lg text-white font-bold text-center'>Register</Text>
                    </TouchableOpacity>

                    <View className="flex-row justify-center items-center my-5">
                        <Text className='h-0.5 bg-slate-800 w-[40%]'></Text> <Text>or</Text> <Text className='h-0.5 bg-slate-800 w-[40%]'></Text>
                    </View>

                    <View className="flex-row justify-center px-7">
                        <View className='flex-row justify-between items-center border px-2 py-2 border-gray-600'>
                            <View className="flex-row items-center">
                                <Image source={google} className="w-6 h-6"/>
                                <Text>Continue with Google</Text>
                            </View>
                            <Text><Feather name="arrow-up-right" size={24} color="black" /></Text>
                        </View>
                    </View>



                </View>

            </View>

            <View className='absolute bottom-10 left-2 right-2'>
           <View className='flex-row justify-between '>
                <Text>Don’t have an account?</Text>
                <TouchableOpacity onPress={()=>router.push('/signin')}><Text className='font-bold'> Login <AntDesign name="caretright" size={10} color="black" /></Text></TouchableOpacity>
            </View>
            </View>


        </SafeAreaView>
  )
}

export default signup