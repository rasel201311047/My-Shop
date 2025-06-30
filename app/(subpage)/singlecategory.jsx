import { View, Text, TouchableOpacity, StatusBar, Image, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { router } from 'expo-router';
import { products } from '../../assets/Assets';
import Ionicons from '@expo/vector-icons/Ionicons';

const singlecategory = () => {

    const filteredProducts = products.filter(
        item => item.category === 'Fruits & Vegetables'
    );

    const renderProductCard = ({ item }) => (
        <TouchableOpacity className="w-44 h-80 bg-[#eeeff0] rounded-xl shadow-lg m-2">
            <View>
                <Image
                    source={item.image}
                    className="w-full h-40 rounded-t-xl"
                    resizeMode="cover"
                />
                <Ionicons
                    name="heart-outline"
                    size={22}
                    color="black"
                    style={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: 'white',
                        borderRadius: 50,
                        padding: 4
                    }}
                />
                <Text className="absolute top-2 left-0 bg-[#56A5FF] text-white px-2 py-0.5 rounded-tr-full rounded-br-full text-xs">
                    New
                </Text>
            </View>

            <View className="p-2">
                <View className="flex-row justify-between mb-1">
                    <Text className="bg-[#E4E4E4] px-1 rounded-md text-xs">
                        {item.category}
                    </Text>
                    <Text className="bg-[#FF5F00] px-1 rounded-md text-xs">
                        McDonalds
                    </Text>
                </View>

                <Text className="text-base font-semibold mb-1">{item.name}</Text>

                <View className="flex-row justify-between items-center">
                    <Text className="text-[#006B27] text-lg font-extrabold">
                        ${item.price}
                    </Text>
                    <Ionicons
                        name="basket"
                        size={22}
                        color="#006B27"
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 50,
                            padding: 4
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />

            {/* ------------------ Header ------------------- */}
            <View className="flex-row items-center justify-between px-4 py-2">
                <TouchableOpacity onPress={() => router.push('/home')}>
                    <MaterialIcons
                        name="keyboard-arrow-left"
                        size={30}
                        color="black"
                    />
                </TouchableOpacity>
                <Text className="text-xl font-semibold">Fruits & Vegetables</Text>
                <Octicons
                    name="search"
                    size={24}
                    color="black"
                />
            </View>

            {/* ------------------ Product Grid ------------------- */}
            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProductCard}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </SafeAreaView>
    );
};

export default singlecategory;
