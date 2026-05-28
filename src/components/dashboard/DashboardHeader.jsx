import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROLE_LABELS} from '../../config/constants';
import CustomButton from '../buttons/CustomButton';
import {colors, radius, shadows, spacing, typography} from '../../theme';

const DashboardHeader = ({name, role, subtitle, onLogout}) => (
  <View style={styles.container}>
    <View style={styles.topRow}>
      <View style={styles.iconBubble}>
        <MaterialCommunityIcons
          name="school-outline"
          size={24}
          color={colors.white}
        />
      </View>
      {onLogout ? (
        <CustomButton compact mode="contained-tonal" onPress={onLogout}>
          Logout
        </CustomButton>
      ) : null}
    </View>
    <Text style={styles.caption}>Welcome back</Text>
    <Text style={styles.title}>
      {name || ROLE_LABELS[role] || 'NSRIT User'}
    </Text>
    <Text style={styles.subtitle}>{subtitle || ROLE_LABELS[role]}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...shadows.medium,
    backgroundColor: colors.primary,
    borderRadius: radius.xl,
    marginBottom: spacing.xl,
    padding: spacing.xl,
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  iconBubble: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: radius.pill,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  caption: {
    ...typography.caption,
    color: 'rgba(255,255,255,0.78)',
    textTransform: 'uppercase',
  },
  title: {
    ...typography.hero,
    color: colors.white,
    marginTop: spacing.xs,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.82)',
    marginTop: spacing.sm,
  },
});

export default DashboardHeader;
