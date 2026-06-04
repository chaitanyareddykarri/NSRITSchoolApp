import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, HelperText, Modal, Portal, Text} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {CustomInput} from '../../../components';
import mainAdminService from '../../../services/mainAdmin/mainAdminService';
import {colors, radius, spacing, typography} from '../../../theme';

const initialForm = {
  fullName: '',
  countryCode: '+91',
  phoneNumber: '',
};

const AssignPrincipalModal = ({branchId, visible, onDismiss, onAssigned}) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!visible) {
      setForm(initialForm);
      setError('');
    }
  }, [visible]);

  const updateField = (field, value) =>
    setForm(current => ({...current, [field]: value}));

  const handleSave = async () => {
    try {
      setSaving(true);
      setError('');
      await mainAdminService.createAndAssignPrincipal({
        branchId,
        ...form,
      });
      Toast.show({type: 'success', text1: 'Principal created and assigned'});
      onAssigned?.();
      onDismiss?.();
    } catch (saveError) {
      setError(saveError.message || 'Unable to create principal');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.modal}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>Create Principal</Text>
          <CustomInput
            label="Full name"
            value={form.fullName}
            onChangeText={value => updateField('fullName', value)}
            autoCapitalize="words"
          />
          <View style={styles.phoneRow}>
            <CustomInput
              label="Code"
              value={form.countryCode}
              onChangeText={value => updateField('countryCode', value)}
              keyboardType="phone-pad"
              style={styles.countryCode}
            />
            <CustomInput
              label="Phone number"
              value={form.phoneNumber}
              onChangeText={value => updateField('phoneNumber', value)}
              keyboardType="phone-pad"
              style={styles.phoneNumber}
            />
          </View>
          <HelperText type="error" visible={Boolean(error)}>
            {error}
          </HelperText>
          <View style={styles.actions}>
            <Button onPress={onDismiss}>Cancel</Button>
            <Button
              mode="contained"
              loading={saving}
              disabled={!form.fullName || !form.phoneNumber || saving}
              onPress={handleSave}>
              Create
            </Button>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'flex-end',
    marginTop: spacing.sm,
  },
  countryCode: {
    flex: 0.35,
  },
  modal: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    margin: spacing.lg,
    padding: spacing.lg,
  },
  phoneNumber: {
    flex: 0.65,
  },
  phoneRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  title: {
    ...typography.subtitle,
    color: colors.text,
    marginBottom: spacing.md,
  },
});

export default AssignPrincipalModal;
