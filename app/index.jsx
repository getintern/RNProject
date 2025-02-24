import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

import { images } from "../constants";
import { useGlobalContext } from "../context/GlobalProvider";
export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain" />
          <Image source={images.cards} className="max-w-[380px] h-[300px]" resizeMode="contain" />
          <View className="relative mt-5">
            <Text className="font-bold text-3xl text-white text-center">
              Discover Endless Possibilities With <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" resizeMode="contain" />
          </View>
          <Text className="text-center  font-pregular text-sm text-gray-100 mt-7">
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>
          <CustomButton title="Continue with Email" handlePress={() => router.push("/sign-in")} containerStyles="mt-7 w-full" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
