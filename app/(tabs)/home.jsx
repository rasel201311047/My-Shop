import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    FlatList,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { catagory, products, proimages } from '../../assets/Assets';

const Home = () => {
    const renderCategory = ({ item }) => (
        <TouchableOpacity className="mr-4">
            <View className="h-44 w-44 rounded-lg bg-white shadow-md shadow-black">
                <Image
                    source={item.image}
                    className="w-full h-3/4 rounded-t-lg"
                    resizeMode="cover"
                />
                <View className="flex-row justify-between items-center px-2 h-1/4">
                    <Text className="text-sm flex-1 text-black font-medium">
                        {item.category}
                    </Text>
                    <MaterialIcons name="arrow-outward" size={18} color="black" />
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderProductCard = (item) => (
        <TouchableOpacity className="w-52 h-80 bg-[#eeeff0] rounded-xl shadow-lg m-2">
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
                    className="absolute top-2 right-2 bg-white p-1 rounded-full"
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
                        className="bg-white p-1 rounded-full shadow-md"
                    />
                </View>
            </View>
        </TouchableOpacity>
    );

    const ListHeader = () => (
        <View>
            {/* -------- Location -------- */}
            <View className="flex-row items-center px-4 py-3">
                <Ionicons name="location-sharp" size={35} color="#23AA49" />
                <View className="ml-2">
                    <Text className="text-xl font-bold">Hello, Rajshahi</Text>
                    <Text className="text-[#777777]">Bangladesh</Text>
                </View>
            </View>

            {/* -------- Category -------- */}
            <View className="flex-row items-center justify-between px-4 py-2">
                <Text className="text-lg font-bold">Category</Text>
                <TouchableOpacity onPress={() => router.push('/allcatagory')}>
                    <Text className="text-base">
                        View all{' '}
                        <MaterialIcons name="arrow-forward-ios" size={10} color="black" />
                    </Text>
                </TouchableOpacity>
            </View>

            {catagory.length > 0 ? (
                <FlatList
                    data={catagory}
                    renderItem={renderCategory}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}
                    contentContainerStyle={{ paddingHorizontal: 16 }}
                />
            ) : (
                <ActivityIndicator animating color={'#fb9b33'} />
            )}

            {/* -------- Recommended Title -------- */}
            <View className="flex-row items-center justify-between px-4 py-4">
                <Text className="text-lg font-bold">Recommended for you</Text>
                <TouchableOpacity onPress={() => router.push('/allcatagory')}>
                    <Text className="text-base">
                        View all{' '}
                        <MaterialIcons name="arrow-forward-ios" size={10} color="black" />
                    </Text>
                </TouchableOpacity>
            </View>

            {/* -------- Recommended Items (Only 2 Products) -------- */}
            <View className="flex-row justify-center">
                {products.slice(0, 2).map((item) => (
                    <View key={item.id}>{renderProductCard(item)}</View>
                ))}
            </View>


            {/* -------- Best Seller Title -------- */}
            <View className="flex-row items-center justify-between px-4 py-4">
                <Text className="text-lg font-bold">Best Seller</Text>
                <TouchableOpacity onPress={() => router.push('/allcatagory')}>
                    <Text className="text-base">
                        View all{' '}
                        <MaterialIcons name="arrow-forward-ios" size={10} color="black" />
                    </Text>
                </TouchableOpacity>
            </View>

            {/* -------- Best Seller Items (Only 2 Products) -------- */}
            <View className="flex-row justify-center">
                {products.slice(0, 2).map((item) => (
                    <View key={item.id}>{renderProductCard(item)}</View>
                ))}
            </View>

        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
            <FlatList
                data={[]} // No main items, everything is in the header
                renderItem={null}
                ListHeaderComponent={ListHeader}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
            />
        </SafeAreaView>
    );
};

export default Home;
