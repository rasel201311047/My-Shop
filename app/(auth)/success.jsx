import React, { useState } from 'react';
import { Dimensions, Image, StatusBar, TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { proimages } from '../../assets/Assets';
import im100 from '../../assets/project_image/1.png';
import im101 from '../../assets/project_image/2.png'
import im102 from '../../assets/project_image/3.png'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
const success = () => {
    return (
        <SafeAreaView className='bg-white h-screen'>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />

            {/* first commonent */}
            <View className='h-screen'>
                <View className='mx-auto  mt-[35%]'>
                    <View className='bg-[#C5FFE2] w-40 h-40 rounded-full flex-row items-center justify-center'>
                        <View className='bg-[#0BEE93]  rounded-full w-32 h-32 flex-row items-center justify-center'>
                            <View className='bg-[#009E5F] rounded-full w-24 h-24 flex-row items-center justify-center'>
                                <Image source={im101} className='w-16 h-16 ' />

                            </View>
                        </View>
                    </View>
                </View>

                <Text className=' text-center'>Password reset Successful</Text>
                <View className=''>
                <TouchableOpacity onPress={() => router.push('/signin')} className='bg-[#23AA49] mt-10 py-3 mx-9 rounded-lg'>
                    <Text className='text-lg text-white font-bold text-center'>Verify</Text>
                </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    )
}

export default success