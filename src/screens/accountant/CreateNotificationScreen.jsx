import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {IconButton, TextInput, Button, Switch, HelperText, Portal, Dialog} from 'react-native-paper';
import {colors, spacing, radius, shadows} from '../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TARGETS = [
  {id: 'all', label: 'All Recipients', icon: 'account-group-outline'},
  {id: 'parents', label: 'Parents Only', icon: 'human-male-female-child'},
  {id: 'teachers', label: 'Teachers Only', icon: 'account-tie-outline'},
  {id: 'students', label: 'Students Only', icon: 'school-outline'},
];

const CreateNotificationScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [selectedTarget, setSelectedTarget] = useState('all');
  const [isPriority, setIsPriority] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [successVisible, setSuccessVisible] = useState(false);

  const handleBroadcast = () => {
    if (!title.trim()) {
      setValidationError('Please enter a notification title.');
      return;
    }
    if (!message.trim()) {
      setValidationError('Please type your notification message.');
      return;
    }

    setValidationError('');
    setLoading(true);

    // Mock API request delay
    setTimeout(() => {
      setLoading(false);
      setSuccessVisible(true);
    }, 1200);
  };

  const handleSuccessConfirm = () => {
    setSuccessVisible(false);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
            <Text style={styles.headerTitle}>Compose Notification</Text>
            <Text style={styles.headerSubtitle}>Broadcast financial alerts & system news</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {/* Audience Target Section */}
        <Text style={styles.sectionLabel}>Broadcast Target</Text>
        <View style={styles.targetGrid}>
          {TARGETS.map(target => {
            const isSelected = selectedTarget === target.id;
            return (
              <Pressable
                key={target.id}
                style={[
                  styles.targetCard,
                  isSelected && styles.targetCardSelected,
                ]}
                onPress={() => setSelectedTarget(target.id)}>
                <MaterialCommunityIcons
                  name={target.icon}
                  size={20}
                  color={isSelected ? colors.secondary : colors.textMuted}
                />
                <Text
                  style={[
                    styles.targetLabel,
                    isSelected && styles.targetLabelSelected,
                  ]}>
                  {target.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Input Fields */}
        <Text style={styles.sectionLabel}>Alert Details</Text>
        <View style={styles.formContainer}>
          <TextInput
            label="Notification Title"
            mode="outlined"
            value={title}
            onChangeText={setTitle}
            placeholder="e.g. Pending Fee Reminder - Term II"
            left={<TextInput.Icon icon="lead-pencil" color={colors.textSoft} />}
            style={styles.input}
            outlineColor={colors.border}
            activeOutlineColor={colors.secondary}
          />

          <TextInput
            label="Message Body"
            mode="outlined"
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message details here..."
            multiline
            numberOfLines={6}
            style={[styles.input, styles.textArea]}
            outlineColor={colors.border}
            activeOutlineColor={colors.secondary}
          />
        </View>

        {/* Priority Toggle */}
        <View style={styles.priorityCard}>
          <View style={styles.priorityLeft}>
            <View style={[styles.priorityIconCircle, isPriority && styles.priorityIconCircleActive]}>
              <MaterialCommunityIcons
                name="alert-decagram-outline"
                size={20}
                color={isPriority ? colors.danger : colors.textMuted}
              />
            </View>
            <View style={styles.priorityTextContainer}>
              <Text style={styles.priorityTitle}>Mark as High Priority</Text>
              <Text style={styles.prioritySubtitle}>Pin to the top of user screens & send push alerts</Text>
            </View>
          </View>
          <Switch
            value={isPriority}
            onValueChange={setIsPriority}
            color={colors.danger}
          />
        </View>

        {/* Audit/Voucher Info Card */}
        <View style={styles.infoCard}>
          <MaterialCommunityIcons
            name="information-outline"
            size={18}
            color={colors.info}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>
            Notifications are immediately processed by the notification dispatcher. Users with active push notification subscriptions will receive background banner alerts within 60 seconds.
          </Text>
        </View>

        {/* Error Messaging */}
        {Boolean(validationError) && (
          <HelperText type="error" visible style={styles.errorText}>
            {validationError}
          </HelperText>
        )}
      </ScrollView>

      {/* Fixed Bottom Action Panel */}
      <View style={styles.actionPanel}>
        <Button
          mode="contained"
          loading={loading}
          disabled={loading}
          onPress={handleBroadcast}
          style={styles.submitButton}
          labelStyle={styles.submitButtonLabel}
          buttonColor={colors.secondary}>
          Broadcast Alert
        </Button>
      </View>

      {/* Success Dialog */}
      <Portal>
        <Dialog visible={successVisible} onDismiss={handleSuccessConfirm} style={styles.dialog}>
          <Dialog.Icon icon="check-circle" size={48} color={colors.success} />
          <Dialog.Title style={styles.dialogTitle}>Broadcast Dispatched</Dialog.Title>
          <Dialog.Content>
            <Text style={styles.dialogText}>
              Your notification alert has been queued and successfully dispatched to the target recipient stream.
            </Text>
          </Dialog.Content>
          <Dialog.Actions style={styles.dialogActions}>
            <Button
              mode="contained"
              buttonColor={colors.secondary}
              textColor={colors.white}
              style={{borderRadius: radius.md, paddingHorizontal: spacing.md}}
              onPress={handleSuccessConfirm}>
              Acknowledge
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </KeyboardAvoidingView>
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
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: spacing.sm,
  },
  targetGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  targetCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '47%',
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.xs,
    elevation: 1,
    ...shadows.soft,
  },
  targetCardSelected: {
    borderColor: colors.secondary,
    backgroundColor: colors.secondarySoft,
  },
  targetLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  targetLabelSelected: {
    color: colors.secondary,
    fontWeight: '700',
  },
  formContainer: {
    marginBottom: spacing.md,
  },
  input: {
    backgroundColor: colors.white,
    marginBottom: spacing.md,
  },
  textArea: {
    textAlignVertical: 'top',
  },
  priorityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
    elevation: 1,
    ...shadows.soft,
  },
  priorityLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  priorityIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  priorityIconCircleActive: {
    backgroundColor: colors.dangerSoft,
  },
  priorityTextContainer: {
    flex: 1,
  },
  priorityTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  prioritySubtitle: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 2,
    fontWeight: '500',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.infoSoft,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.2)',
    marginBottom: spacing.lg,
  },
  infoIcon: {
    marginRight: spacing.sm,
    marginTop: 2,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 18,
    fontWeight: '500',
  },
  errorText: {
    fontSize: 13,
    color: colors.danger,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  actionPanel: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    padding: spacing.md,
    paddingBottom: Platform.OS === 'ios' ? spacing.xl : spacing.md,
  },
  submitButton: {
    height: 48,
    borderRadius: radius.md,
    justifyContent: 'center',
  },
  submitButtonLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.white,
  },
  dialog: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
    textAlign: 'center',
  },
  dialogText: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
    textAlign: 'center',
  },
  dialogActions: {
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: spacing.lg,
  },
});

export default CreateNotificationScreen;
