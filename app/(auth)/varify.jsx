import { View, Image, Text, ScrollView, TouchableOpacity, StatusBar, TextInput, Alert } from "react-native";
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../assets/project_image/logo.png"
import Feather from '@expo/vector-icons/Feather';
import { router, useRouter } from "expo-router";
import Checkbox from 'expo-checkbox';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const varify = () => {
    return (
        <SafeAreaView className="h-screen">
            <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
            <Text className='text-center text-xl font-bold'>Verify</Text>
            <MaterialIcons name="arrow-back-ios-new" className='absolute top-[20] left-2 ' size={24} color="black" />

            <View className='top-6 px-3'>
                <Text className='px-4'>Enter the code we have sent to your email.</Text>

                <View className='px-4'>


                    <View className="flex-row gap-2 justify-center mt-10">
                        <TextInput className="h-10 w-10 shadow-black  border border-gray-600 text-black rounded px-5" keyboardType="number" />
                        <TextInput className="h-10 w-10 shadow-black  border border-gray-600 text-black rounded px-5" keyboardType="number" />
                        <TextInput className="h-10 w-10 shadow-black  border border-gray-600 text-black rounded px-5" keyboardType="number" />
                        <TextInput className="h-10 w-10 shadow-black  border border-gray-600 text-black rounded px-5" keyboardType="number" />
                        <TextInput className="h-10 w-10 shadow-black  border border-gray-600 text-black rounded px-5" keyboardType="number" />
                        <TextInput className="h-10 w-10 shadow-black  border border-gray-600 text-black rounded px-5" keyboardType="number" />
                        <TextInput className="h-10 w-10 shadow-black  border border-gray-600 text-black rounded px-5" keyboardType="number" />


                    </View>

                    <TouchableOpacity onPress={() => router.push('/newpassword')} className='bg-[#23AA49] mt-10 py-3 rounded-lg'>
                        <Text className='text-lg text-white font-bold text-center'>Verify</Text>
                    </TouchableOpacity>

                    <View className='mt-3'>
                        <View className='flex-row justify-between '>
                            <Text>Didn’t receive a code? </Text>
                            <TouchableOpacity onPress={() => router.push('/forgotpassword')}><Text className='font-bold [#23AA49] border border-[#23AA49]'> send again </Text> </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default varify