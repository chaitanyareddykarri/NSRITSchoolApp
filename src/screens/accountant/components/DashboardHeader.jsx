import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {Avatar, Badge, IconButton, Text} from 'react-native-paper';
import {colors, spacing, shadows} from '../../../theme';

const DashboardHeader = ({
  title = 'NSRIT Connect',
  subtitle = 'Accounting Portal',
  onMenuPress,
  onNotificationPress,
  notificationCount = 3,
  userAvatar,
  userName = 'Jane Doe, CPA',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <IconButton
          icon="menu"
          iconColor={colors.text}
          size={24}
          onPress={onMenuPress}
          style={styles.menuButton}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Pressable onPress={onNotificationPress} style={styles.notificationWrapper}>
          <IconButton
            icon="bell-outline"
            iconColor={colors.text}
            size={24}
            style={styles.bellButton}
          />
          {notificationCount > 0 && (
            <Badge style={styles.badge} size={16}>
              {notificationCount}
            </Badge>
          )}
        </Pressable>

        <Pressable style={styles.avatarWrapper}>
          {userAvatar ? (
            <Avatar.Image size={36} source={{uri: userAvatar}} />
          ) : (
            <Avatar.Text
              size={36}
              label={userName.split(' ').map(n => n[0]).join('')}
              style={styles.avatarPlaceholder}
              labelStyle={styles.avatarLabel}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    elevation: 2,
    ...shadows.soft,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  menuButton: {
    margin: 0,
  },
  titleContainer: {
    marginLeft: spacing.xs,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '500',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  notificationWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellButton: {
    margin: 0,
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: colors.danger,
    color: colors.white,
    fontWeight: '700',
  },
  avatarWrapper: {
    paddingRight: spacing.xs,
  },
  avatarPlaceholder: {
    backgroundColor: colors.primarySoft,
  },
  avatarLabel: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 13,
  },
});

export default DashboardHeader;
