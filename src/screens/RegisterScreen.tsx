// screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegister = () => {
    axios.post('http://localhost:5000/api/auth/register', { email, password })
      .then(response => {
        // Handle successful registration
        console.log(response.data);
      })
      .catch(error => {
        console.error('Registration error:', error);
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
      <Button title="Register" onPress={handleRegister} />
      <Text style={styles.loginText}>
        Already have an account? <Text onPress={() => navigation.navigate('Login')} style={styles.link}>Login</Text>
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
  loginText: {
    marginTop: 12,
    textAlign: 'center',
  },
  link: {
    color: 'blue',
  },
});

export default RegisterScreen;
