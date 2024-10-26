// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    axios.post('http://localhost:5000/api/auth/login', { email, password })
      .then(response => {
        // Handle successful login
        console.log(response.data);
      })
      .catch(error => {
        console.error('Login error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.registerText}>
        Don't have an account? <Text onPress={() => navigation.navigate('Register')} style={styles.link}>Register</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  registerText: {
    marginTop: 12,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
  },
});

export default LoginScreen;
