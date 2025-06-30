import { View, Image, Text, ScrollView, TouchableOpacity, StatusBar, TextInput, Alert } from "react-native";
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../assets/project_image/logo.png"
import Feather from '@expo/vector-icons/Feather';
import { router, useRouter } from "expo-router";
import Checkbox from 'expo-checkbox';
import AntDesign from '@expo/vector-icons/AntDesign';
const signin = () => {
    const [isChecked, setChecked] = useState(false);
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
                    <Text className="text-black mt-4 mb-2">Email</Text>
                    <TextInput className="h-10  border border-gray-600 text-black rounded px-5" keyboardType="email-address" />

                    <Text className="text-black mt-4 mb-2 px-5">Password</Text>
                    <TextInput className="h-10 relative border border-gray-600 text-black rounded px-2"
                        secureTextEntry
                        keyboardType="password" />
                    <Text className='absolute bottom-[128] right-5'><Feather name="eye" size={24} color="black" /></Text>
                    {/* <Feather name="eye-off" size={24} color="black" /> */}
                    {/* ----------------------------Cheak box */}
                    <View className='mt-6 flex-row justify-between items-center'>
                        <View className=" flex-row items-center gap-2">
                            <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? '#4630EB' : undefined}/>
                            <Text className="text-base ">Remember me</Text>
                        </View>

                        <TouchableOpacity onPress={()=>router.push('/forgotpassword')} className="border-b-2">
                            <Text className=' text-base  '>forget password</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity className='bg-[#23AA49] mt-10 py-3 rounded-lg'>
                        <Text className='text-lg text-white font-bold text-center'>Login</Text>
                    </TouchableOpacity>



                </View>

            </View>

            <View className='absolute bottom-10 left-2 right-2'>
           <View className='flex-row justify-between '>
                <Text>Don’t have an account?</Text>
                <TouchableOpacity onPress={()=>router.push('/signup')}><Text className='font-bold'> Register <AntDesign name="caretright" size={10} color="black" /></Text></TouchableOpacity>
            </View>
            </View>


        </SafeAreaView>
    )
}

export default signin