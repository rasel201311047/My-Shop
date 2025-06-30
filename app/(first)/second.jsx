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
const second = () => {
    return (
        <SafeAreaView className='bg-white h-screen'>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />

            {/* second commonent */}

            <View className='h-screen'>
                <View className='mx-auto  mt-[35%]'>
                    <View className='bg-[#FFF4E0] w-40 h-40 rounded-full flex-row items-center justify-center'>
                        <View className='bg-[#FFBD42]  rounded-full w-32 h-32 flex-row items-center justify-center'>
                            <View className='bg-[#D08802] rounded-full w-24 h-24 flex-row items-center justify-center'>
                                <Image source={im102} className='w-16 h-16 ' />

                            </View>
                        </View>
                    </View>
                </View>

                <View className='mt-[10%] px-8'>
                    <Text className='text-[#D08802] text-3xl font-extrabold mb-3'>Offers fresh and quality groceries for you</Text>
                    <Text className='text-[#777777] text-lg'>All items have real freshness and we are intended of your needs.</Text>
                </View>
                <View className='bg-inherit absolute bottom-48 right-0 left-0'>
                    <View className='flex-row justify-around'>
                        <TouchableOpacity  onPress={() => router.push('/home')}><Text className="text-[#D08802] text-lg bg-[#F0F0F0] w-20 py-2 rounded-lg text-center font-bold">Skip</Text></TouchableOpacity>
                        {/* 3 dote caursole */}
                        <Text className='text-[#D08802]'>...</Text>
                        {/* next commpnent */}
                        <TouchableOpacity onPress={() => router.push('/third')} className="w-10 h-10 bg-[#FFBD42] rounded-full items-center justify-center">
                            <MaterialIcons name="arrow-forward" size={24} color="white" />
                        </TouchableOpacity >

                    </View>
                </View>
            </View>


        </SafeAreaView>
    )
}

export default second