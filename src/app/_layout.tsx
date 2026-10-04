import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} // oculta o cabeçalho padrão para usar o seu SafeAreaView
      />
    </Stack>
  );
}