import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { icons } from "../constants";

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`spacey-2 ${otherStyles}`}>
      <Text className="text-base mb-1 text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2  border-black-200 w-full h-16 px-4 bg-black-100 flex-row  rounded-2xl items-center  focus:border-secondary">
        <TextInput
          className="flex-1  text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          autoCapitalize={false}
          autoCorrect={false}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image className="w-6 h-6" source={!showPassword ? icons.eye : icons.eyeHide} resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
