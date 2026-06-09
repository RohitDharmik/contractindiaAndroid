import React, { useCallback, useEffect } from 'react';

import { View, Text, ActivityIndicator } from 'react-native';

import { AuthService } from '../../services/auth/authService';
import { useAuthStore } from '../../store/authStore';

export default function SplashScreen() {
  const setAuth = useAuthStore(state => state.setAuth);

  const setLoading = useAuthStore(state => state.setLoading);
  const bootstrap = useCallback(async () => {
    try {
      const session = await AuthService.getSession();

      if (session?.token && session?.user) {
        setAuth(session.token, session.refreshToken, session.user);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [setAuth, setLoading]);

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: '700',
          marginBottom: 20,
          color: '#0F172A',
        }}
      >
        Enterprise Kit
      </Text>

      <ActivityIndicator size="large" color="#7C3AED" />
    </View>
  );
}
