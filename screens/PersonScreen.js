import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';
import MovieList from '../components/movieList';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == "ios";
const verticalMargin = ios ? '' : 'mt-3';

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4])
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* back button */}
      <SafeAreaView className={" z-20 w-full flex-row justify-between item-center px-4" + verticalMargin}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
          <HeartIcon size="35" strokeWidth={3} color={isFavourite ? 'red' : "white"} />
        </TouchableOpacity>
      </SafeAreaView>
      <View>
        <View className="flex-row justify-center"
          style={{
            shadowColor: 'gray',
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,

          }}
        >
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
            <Image source={require('../assets/movie.jpg')}
              style={{ width: width * 0.74, height: height * 0.43 }}
            />
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            Keanu Reeves
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            London,United Kingdom
          </Text>
        </View>
        <View className="mx-3 p-4 mt-3 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 px-2 item-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 font-sm">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 item-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 font-sm">1964-34-23</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 item-center">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300 font-sm">Acting</Text>
          </View>
          <View className="border-r-neutral-400 px-2 item-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 font-sm">64.23</Text>
          </View>
        </View>
        <View className="my-6 mx-4 space-y-2">
          <Text className='text-white text-lg'>Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            Keanu Charles Reeves is a Canadian actor and musician. Born in Beirut and raised in Toronto, he made his acting debut in the Canadian television series Hangin In, before making his feature film debut in Youngblood.
          </Text>
        </View>
        {/* Movielist */}
        <MovieList title={'Movies'} hideSeeAll={true} data={personMovies} />
      </View>
    </ScrollView>
  )
}