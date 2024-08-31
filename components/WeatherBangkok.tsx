import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import { styleWeatherBangkok } from '../styles/styles';

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
  currentDate: Date | null; // Allow null initially
}

const formatDate = (date: Date | null): string => {
  if (!date) return ''; // Return an empty string if date is null
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('th-TH', options);
};

const WeatherBangkok = (): React.JSX.Element => {

  const [state, setState] = useState<WeatherState>({
    data: null,
    loading: true,
    error: null,
    currentDate: new Date(),
  });

  const fetchWeatherData = async () => {
    const API_KEY = 'd78aaab2d84844433d115114fb3bb62e';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${API_KEY}&units=metric&lang=th`;
    try {
      const response = await axios.get(URL);
      setState({
        data: response.data,
        loading: false,
        error: null,
        currentDate: new Date(),
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: 'Failed to fetch weather data',
        currentDate: null,
      });
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (state.loading) {
    return (
      <View style={styleWeatherBangkok.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (state.error) {
    return (
      <View style={styleWeatherBangkok.errorContainer}>
        <Text style={styleWeatherBangkok.errorText}>{state.error}</Text>
      </View>
    );
  }

  return (
    <View style={styleWeatherBangkok.container}>
      <Text style={styleWeatherBangkok.dateText}>
        {formatDate(state.currentDate)}
        {/* {state.currentDate ? state.currentDate.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' }) : ''} */}
      </Text>
      <Text style={styleWeatherBangkok.cityName}>{state.data.name}</Text>
      <Text style={styleWeatherBangkok.temp}>{state.data.main.temp}°C</Text>
      <Text style={styleWeatherBangkok.weatherMain}>{state.data.weather[0].main}</Text>
      <Text style={styleWeatherBangkok.weatherDescription}>{state.data.weather[0].description}</Text>

      <FlatList
        data={[
          { key: 'รู้สึกเหมือน', value: `${state.data.main.feels_like}°C` },
          { key: 'อุณหภูมิต่ำสุด', value: `${state.data.main.temp_min}°C` },
          { key: 'อุณหภูมิสูงสุด', value: `${state.data.main.temp_max}°C` },
          { key: 'ความชื้น', value: `${state.data.main.humidity}%` },
          { key: 'ความกดอากาศ', value: `${state.data.main.pressure} hPa` },
        ]}
        renderItem={({ item }) => (
          <View style={styleWeatherBangkok.detailContainer}>
            <Text style={styleWeatherBangkok.detailKey}>{item.key}:</Text>
            <Text style={styleWeatherBangkok.detailValue}>{item.value}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styleWeatherBangkok.details}
      />
    </View>
  );
};

export default WeatherBangkok;