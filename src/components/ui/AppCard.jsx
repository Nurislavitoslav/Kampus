javascript
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, shadows } from '../../constants/colors';
import { spacing, radius } from '../../constants/spacing';

const AppCard = ({ children, onPress, style }) => {
  const Container = onPress ? TouchableOpacity : View;
  return (
    <Container
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.card, style]}
    >
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.SURFACE,
    borderRadius: radius.XL,
    padding: spacing.LG,
    marginBottom: spacing.MD,
    ...shadows.cardShadow,
  },
});

export default AppCard;
