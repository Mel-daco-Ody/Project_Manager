import { useUser } from "@clerk/clerk-expo";
import { Redirect, useRootNavigationState } from "expo-router";
import { View } from "react-native";

export default function Index() {
  const { user } = useUser();
  const rootNavigationState = useRootNavigationState();

  // Kiểm tra nếu rootNavigationState chưa sẵn sàng
  if (!rootNavigationState?.key) {
    return null; // Hoặc hiển thị màn hình tải
  }

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href="/(tabs)/home" /> : <Redirect href="/login" />}
    </View>
  );
}
