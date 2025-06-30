import { View, Text, TouchableOpacity, StatusBar, Image, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { catagory } from '../../assets/Assets';
import { router } from 'expo-router';

const AllCategory = () => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity onPress={()=>router.push('/singlecategory')} className="flex-1 m-2">
      <View className="h-52 rounded-lg bg-white shadow-md shadow-black">
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

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />

      {/* -----------------------------Header------------------------------------- */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <TouchableOpacity onPress={()=>router.push('/home')}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color="black"
          className="shadow-black bg-white p-3 rounded-lg"
        />
        </TouchableOpacity>
        <Text className="text-xl font-semibold">All Category</Text>
        <Octicons
          name="search"
          size={24}
          color="black"
          className="shadow-black bg-white p-3 rounded-lg"
        />
      </View>

      {/*------------------------------------- Grid ----------------------------------*/}
      {catagory.length > 0 ? (
        <FlatList
          data={catagory}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8, paddingBottom: 20 }}
        />
      ) : (
        <ActivityIndicator animating color={'#fb9b33'} size="large" />
      )}
    </SafeAreaView>
  );
};

export default AllCategory;
