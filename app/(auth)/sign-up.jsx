import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { images } from "../../constants";
import { createUser } from "../../lib/appwrite";
const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.username || !form.email || !form.email) {
      Alert.alert("Error", "Please Fill in all the fields");
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.email);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full px-4 justify-center min-h-[83vh] my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign Up to Aora</Text>
          <FormField title="Username" value={form.username} handleChangeText={(e) => setForm({ ...form, username: e })} otherStyles="mt-10" />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} otherStyles="mt-7" />
          <CustomButton title="Sign Up " handlePress={submit} containerStyles="mt-7" />
          <View className="justify-center gap-2 pt-5 flex-row">
            <Text className="text-lg font-pregular text-gray-100">have an account already?</Text>
            <Link href="/sign-in" className="text-lg font-psemibold text-secondary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
