javascript
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing, radius } from '../../constants/spacing';

const AppButton = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon = null,
  style,
}) => {
  const isBlocked = disabled || loading;

  const variantStyles = {
    primary: {
      bg: colors.PRIMARY,
      text: colors.TEXT_INVERSE,
      border: colors.PRIMARY,
    },
    secondary: {
      bg: colors.PRIMARY_LIGHT,
      text: colors.PRIMARY,
      border: colors.PRIMARY_LIGHT,
    },
    outline: {
      bg: 'transparent',
      text: colors.PRIMARY,
      border: colors.PRIMARY,
    },
    danger: {
      bg: colors.ERROR,
      text: colors.TEXT_INVERSE,
      border: colors.ERROR,
    },
  }[variant];

  const sizeStyles = {
    sm: { paddingVertical: spacing.SM, paddingHorizontal: spacing.MD, fontSize: 13 },
    md: { paddingVertical: spacing.MD, paddingHorizontal: spacing.LG, fontSize: 15 },
    lg: { paddingVertical: spacing.LG, paddingHorizontal: spacing.XL, fontSize: 16 },
  }[size];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isBlocked}
      activeOpacity={0.75}
      style={[
        styles.base,
        {
          backgroundColor: variantStyles.bg,
          borderColor: variantStyles.border,
          paddingVertical: sizeStyles.paddingVertical,
          paddingHorizontal: sizeStyles.paddingHorizontal,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variantStyles.text} />
      ) : (
        <View style={styles.content}>
          {leftIcon}
          <Text
            style={[
              styles.text,
              {
                color: variantStyles.text,
                fontSize: sizeStyles.fontSize,
                marginLeft: leftIcon ? spacing.SM : 0,
              },
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.LG,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
  },
});

export default AppButton;