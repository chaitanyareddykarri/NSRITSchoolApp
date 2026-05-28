import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {colors, radius, spacing} from '../../theme';

const SkeletonLoader = ({rows = 3}) => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          duration: 700,
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          duration: 700,
          toValue: 0.4,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <View>
      {Array.from({length: rows}).map((_, index) => (
        <Animated.View key={String(index)} style={[styles.row, {opacity}]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.md,
    height: 72,
    marginBottom: spacing.md,
  },
});

export default SkeletonLoader;
