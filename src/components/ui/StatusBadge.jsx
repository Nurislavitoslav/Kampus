javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { spacing, radius } from '../../constants/spacing';

const STATUS_CONFIG = {
  new: { label: 'Новый', bg: colors.INFO_LIGHT, text: colors.INFO },
  in_progress: { label: 'В работе', bg: colors.WARNING_LIGHT, text: colors.WARNING },
  completed: { label: 'Возвращено', bg: colors.SUCCESS_LIGHT, text: colors.SUCCESS },
  cancelled: { label: 'Отменен', bg: colors.ERROR_LIGHT, text: colors.ERROR },
};

export const getStatusConfig = (status) =>
  STATUS_CONFIG[status] || STATUS_CONFIG.new;

const StatusBadge = ({ status }) => {
  const cfg = getStatusConfig(status);
  return (
    <View style={[styles.badge, { backgroundColor: cfg.bg }]}>
      <Text style={[styles.text, { color: cfg.text }]}>{cfg.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: radius.PILL,
    paddingVertical: spacing.XS,
    paddingHorizontal: spacing.MD,
    alignSelf: 'flex-start',
  },
  text: { fontSize: 11, fontWeight: '600' },
});

export default StatusBadge;
