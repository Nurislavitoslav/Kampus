javascript
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { spacing, radius } from '../../constants/spacing';

const AppInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  icon,
  isPassword = false,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secure, setSecure] = useState(isPassword);

  const borderColor = error
    ? colors.ERROR
    : isFocused
    ? colors.BORDER_FOCUS
    : colors.BORDER;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputWrapper,
          { borderColor },
          multiline && { height: 24 * numberOfLines + 20, alignItems: 'flex-start' },
        ]}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color={isFocused ? colors.PRIMARY : colors.TEXT_MUTED}
            style={styles.leftIcon}
          />
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.TEXT_MUTED}
          secureTextEntry={secure}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.input,
            multiline && { textAlignVertical: 'top', paddingTop: spacing.SM },
          ]}
          {...restProps}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons
              name={secure ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={colors.TEXT_MUTED}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: spacing.LG },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.TEXT_SECONDARY,
    marginBottom: spacing.SM,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: radius.LG,
    backgroundColor: colors.SURFACE,
    paddingHorizontal: spacing.MD,
    minHeight: 48,
  },
  leftIcon: { marginRight: spacing.SM },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.TEXT_PRIMARY,
    paddingVertical: spacing.MD,
  },
  error: {
    fontSize: 12,
    color: colors.ERROR,
    marginTop: spacing.XS,
  },
});

export default AppInput;
