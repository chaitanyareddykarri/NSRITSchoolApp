import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import {IconButton, Avatar, Switch, Button, List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {colors, spacing, radius, shadows} from '../../theme';
import {logoutUser} from '../../store/slices/authSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountantProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);

  // Preference switches
  const [offlineCache, setOfflineCache] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(true);
  const [biometricAuth, setBiometricAuth] = useState(false);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <IconButton
            icon="arrow-left"
            iconColor={colors.text}
            size={24}
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          />
          <View>
            <Text style={styles.headerTitle}>Account Settings</Text>
            <Text style={styles.headerSubtitle}>Manage credentials & portal configurations</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Avatar.Text
            size={72}
            label={user?.fullName ? user.fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'JD'}
            style={styles.avatar}
            labelStyle={styles.avatarLabel}
          />
          <Text style={styles.nameText}>{user?.fullName || 'Jane Doe, CPA'}</Text>
          <Text style={styles.roleText}>Lead Finance Officer / Auditor</Text>
          <View style={styles.badgeRow}>
            <View style={styles.verifiedBadge}>
              <MaterialCommunityIcons name="check-decagram" size={14} color={colors.white} />
              <Text style={styles.verifiedBadgeText}>CPA Verified</Text>
            </View>
          </View>
        </View>

        {/* Identity Details */}
        <Text style={styles.sectionLabel}>Personal Information</Text>
        <View style={styles.infoGroup}>
          <List.Item
            title="Registered Phone"
            description={user?.phoneNumber || '+91 99887 76655'}
            left={props => <List.Icon {...props} icon="phone-outline" color={colors.textSoft} />}
            style={styles.listItem}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDesc}
          />
          <View style={styles.itemDivider} />
          <List.Item
            title="Designation Role"
            description="Accountant (Role ID: ACC-99)"
            left={props => <List.Icon {...props} icon="account-tie-outline" color={colors.textSoft} />}
            style={styles.listItem}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDesc}
          />
          <View style={styles.itemDivider} />
          <List.Item
            title="Allocated Branch"
            description="NSRIT Central Campus"
            left={props => <List.Icon {...props} icon="office-building" color={colors.textSoft} />}
            style={styles.listItem}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDesc}
          />
        </View>

        {/* Licensure Details */}
        <Text style={styles.sectionLabel}>Credentials & Compliance</Text>
        <View style={styles.infoGroup}>
          <List.Item
            title="License Code"
            description="CPA-IN-2026-89412"
            left={props => <List.Icon {...props} icon="certificate-outline" color={colors.textSoft} />}
            style={styles.listItem}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDesc}
          />
          <View style={styles.itemDivider} />
          <List.Item
            title="Signing Authority"
            description="Authorized (Level II Voucher Approver)"
            left={props => <List.Icon {...props} icon="draw" color={colors.textSoft} />}
            style={styles.listItem}
            titleStyle={styles.listTitle}
            descriptionStyle={styles.listDesc}
          />
        </View>

        {/* Settings & Security */}
        <Text style={styles.sectionLabel}>Portal Preferences</Text>
        <View style={styles.infoGroup}>
          <View style={styles.switchRow}>
            <View style={styles.switchTextContainer}>
              <Text style={styles.switchTitle}>Offline Ledger Cache</Text>
              <Text style={styles.switchDesc}>Keep fee registries available offline</Text>
            </View>
            <Switch
              value={offlineCache}
              onValueChange={setOfflineCache}
              color={colors.secondary}
            />
          </View>

          <View style={styles.itemDivider} />

          <View style={styles.switchRow}>
            <View style={styles.switchTextContainer}>
              <Text style={styles.switchTitle}>Automatic Session Timeout</Text>
              <Text style={styles.switchDesc}>Log out after 15 minutes of idle state</Text>
            </View>
            <Switch
              value={sessionTimeout}
              onValueChange={setSessionTimeout}
              color={colors.secondary}
            />
          </View>

          <View style={styles.itemDivider} />

          <View style={styles.switchRow}>
            <View style={styles.switchTextContainer}>
              <Text style={styles.switchTitle}>Biometric Verification</Text>
              <Text style={styles.switchDesc}>Verify fingerprints on payments upload</Text>
            </View>
            <Switch
              value={biometricAuth}
              onValueChange={setBiometricAuth}
              color={colors.secondary}
            />
          </View>
        </View>

        {/* Safety log out button */}
        <Button
          mode="outlined"
          textColor={colors.danger}
          style={styles.logoutButton}
          labelStyle={styles.logoutButtonLabel}
          onPress={handleLogout}
          icon="logout">
          Sign Out of Account
        </Button>

        <Text style={styles.versionText}>System Portal Version 2.4.1 (Build 108)</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? spacing.xl : spacing.sm,
    paddingBottom: spacing.sm,
    paddingHorizontal: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    elevation: 2,
    ...shadows.soft,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    margin: 0,
    marginRight: spacing.xs,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.primary,
  },
  headerSubtitle: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '500',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  profileCard: {
    backgroundColor: colors.white,
    borderRadius: radius.xl,
    paddingVertical: spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 1,
    ...shadows.soft,
    marginBottom: spacing.lg,
  },
  avatar: {
    backgroundColor: colors.primarySoft,
    marginBottom: spacing.sm,
  },
  avatarLabel: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 24,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
  },
  roleText: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '600',
    marginTop: 2,
  },
  badgeRow: {
    flexDirection: 'row',
    marginTop: spacing.sm,
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.pill,
    gap: 4,
  },
  verifiedBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.white,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: spacing.xs,
    marginTop: spacing.md,
  },
  infoGroup: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    marginBottom: spacing.md,
    elevation: 1,
    ...shadows.soft,
  },
  listItem: {
    paddingVertical: spacing.xs,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  listDesc: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '500',
    marginTop: 2,
  },
  itemDivider: {
    height: 1,
    backgroundColor: colors.background,
    marginHorizontal: spacing.md,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  switchTextContainer: {
    flex: 1,
    marginRight: spacing.md,
  },
  switchTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  switchDesc: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '500',
    marginTop: 2,
  },
  logoutButton: {
    marginTop: spacing.lg,
    borderColor: colors.danger,
    borderWidth: 1,
    borderRadius: radius.md,
    height: 48,
    justifyContent: 'center',
  },
  logoutButtonLabel: {
    fontSize: 14,
    fontWeight: '700',
  },
  versionText: {
    fontSize: 10,
    color: colors.textSoft,
    textAlign: 'center',
    marginTop: spacing.xl,
    fontWeight: '700',
  },
});

export default AccountantProfileScreen;
