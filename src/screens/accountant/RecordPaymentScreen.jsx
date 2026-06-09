import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {IconButton, TextInput, Button, HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {colors, spacing, radius, shadows} from '../../theme';
import {uploadOfflinePayment} from '../../store/slices/feeSlice';
import StudentSearchModal from './components/StudentSearchModal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FEE_CATEGORIES = [
  {id: 'tuition', label: 'Tuition Fee', icon: 'school-outline'},
  {id: 'admission', label: 'Admission Fee', icon: 'account-plus-outline'},
  {id: 'exam', label: 'Exam Fee', icon: 'file-document-edit-outline'},
  {id: 'transport', label: 'Transport Fee', icon: 'bus-side'},
  {id: 'hostel', label: 'Hostel & Mess', icon: 'bed-double-outline'},
];

const RecordPaymentScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {submitting, error} = useSelector(state => state.fees);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [amount, setAmount] = useState('');
  const [receiptNo, setReceiptNo] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tuition');
  const [paymentDate, setPaymentDate] = useState('');
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    // Set payment date to today's date automatically
    const today = new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    setPaymentDate(today);
  }, []);

  const handleSelectStudent = student => {
    setSelectedStudent(student);
    setValidationError('');
  };

  const handleUpload = async () => {
    if (!selectedStudent) {
      setValidationError('Please select a student first.');
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setValidationError('Please enter a valid payment amount.');
      return;
    }
    if (!receiptNo.trim()) {
      setValidationError('Please enter the manual receipt number.');
      return;
    }

    setValidationError('');

    const categoryLabel = FEE_CATEGORIES.find(c => c.id === selectedCategory)?.label || 'Fee';

    const action = await dispatch(
      uploadOfflinePayment({
        studentId: selectedStudent.studentId,
        studentName: selectedStudent.fullName,
        amount: Number(amount),
        receiptNo: receiptNo.trim(),
        mode: 'Cash',
        category: categoryLabel,
        date: new Date().toISOString(),
      }),
    );

    if (uploadOfflinePayment.fulfilled.match(action)) {
      navigation.goBack();
    }
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
            <Text style={styles.headerTitle}>Record Offline Payment</Text>
            <Text style={styles.headerSubtitle}>Post manual cash collections</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {/* Student Selection Trigger */}
        <Text style={styles.sectionLabel}>Student Registry</Text>
        {!selectedStudent ? (
          <Pressable
            style={({pressed}) => [
              styles.selectorCard,
              pressed && styles.selectorCardPressed,
            ]}
            onPress={() => setSearchModalVisible(true)}>
            <View style={styles.selectorLeft}>
              <View style={styles.selectorIconCircle}>
                <MaterialCommunityIcons name="account-search-outline" size={24} color={colors.secondary} />
              </View>
              <View>
                <Text style={styles.selectorTitle}>Lookup Student</Text>
                <Text style={styles.selectorSubtitle}>Select recipient to apply ledger credit</Text>
              </View>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color={colors.textSoft} />
          </Pressable>
        ) : (
          <View style={styles.activeStudentCard}>
            <View style={styles.studentDetails}>
              <View style={styles.studentLeft}>
                <View style={styles.studentAvatarCircle}>
                  <Text style={styles.studentAvatarLabel}>
                    {selectedStudent.fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                  </Text>
                </View>
                <View style={styles.studentTextInfo}>
                  <Text style={styles.activeStudentName}>{selectedStudent.fullName}</Text>
                  <Text style={styles.activeStudentId}>ID: {selectedStudent.studentId}</Text>
                  <Text style={styles.activeStudentClass}>
                    {selectedStudent.className} - {selectedStudent.sectionName}
                  </Text>
                </View>
              </View>
              <IconButton
                icon="close-circle-outline"
                iconColor={colors.danger}
                size={22}
                onPress={() => setSelectedStudent(null)}
                style={styles.clearStudentBtn}
              />
            </View>
          </View>
        )}

        {/* Category Chip Selector */}
        <Text style={styles.sectionLabel}>Fee Category</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContainer}>
          {FEE_CATEGORIES.map(category => {
            const isSelected = selectedCategory === category.id;
            return (
              <Pressable
                key={category.id}
                style={[
                  styles.categoryChip,
                  isSelected && styles.categoryChipSelected,
                ]}
                onPress={() => setSelectedCategory(category.id)}>
                <MaterialCommunityIcons
                  name={category.icon}
                  size={16}
                  color={isSelected ? colors.white : colors.textMuted}
                  style={styles.chipIcon}
                />
                <Text
                  style={[
                    styles.categoryChipLabel,
                    isSelected && styles.categoryChipLabelSelected,
                  ]}>
                  {category.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Numeric Inputs */}
        <Text style={styles.sectionLabel}>Payment Parameters</Text>
        <View style={styles.formContainer}>
          <TextInput
            label="Amount (INR)"
            mode="outlined"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            placeholder="0.00"
            left={<TextInput.Affix text="₹ " />}
            style={styles.input}
            outlineColor={colors.border}
            activeOutlineColor={colors.secondary}
          />

          <TextInput
            label="Manual Receipt/Voucher Number"
            mode="outlined"
            value={receiptNo}
            onChangeText={setReceiptNo}
            placeholder="e.g. REC-26-8942"
            left={<TextInput.Icon icon="receipt" color={colors.textSoft} />}
            style={styles.input}
            outlineColor={colors.border}
            activeOutlineColor={colors.secondary}
          />

          <TextInput
            label="Value Date"
            mode="outlined"
            value={paymentDate}
            editable={false}
            left={<TextInput.Icon icon="calendar-today" color={colors.textSoft} />}
            style={[styles.input, styles.disabledInput]}
            outlineColor={colors.border}
          />
        </View>

        {/* Warning / Audit Info Card */}
        <View style={styles.infoCard}>
          <MaterialCommunityIcons
            name="shield-alert-outline"
            size={20}
            color={colors.warning}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>
            This cash transaction is double-logged in the general ledger. Once submitted, the receipt cannot be deleted or reversed without administrator audit overrides.
          </Text>
        </View>

        {/* Error Messaging */}
        {Boolean(validationError || error) && (
          <HelperText type="error" visible style={styles.errorText}>
            {validationError || error}
          </HelperText>
        )}
      </ScrollView>

      {/* Fixed Bottom Action Panel */}
      <View style={styles.actionPanel}>
        <Button
          mode="contained"
          loading={submitting}
          disabled={submitting}
          onPress={handleUpload}
          style={styles.submitButton}
          labelStyle={styles.submitButtonLabel}
          buttonColor={colors.secondary}>
          Upload Payment
        </Button>
      </View>

      {/* Student Registry Search Modal */}
      <StudentSearchModal
        visible={searchModalVisible}
        onClose={() => setSearchModalVisible(false)}
        onSelectStudent={handleSelectStudent}
      />
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
    marginBottom: spacing.xs,
  },
  selectorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 1,
    ...shadows.soft,
    marginBottom: spacing.lg,
  },
  selectorCardPressed: {
    backgroundColor: colors.background,
    borderColor: colors.textSoft,
  },
  selectorLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectorIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.secondarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  selectorTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  selectorSubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: '500',
    marginTop: 2,
  },
  activeStudentCard: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.secondary,
    padding: spacing.md,
    elevation: 1,
    ...shadows.soft,
    marginBottom: spacing.lg,
  },
  studentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  studentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  studentAvatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primarySoft,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  studentAvatarLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  studentTextInfo: {
    flex: 1,
  },
  activeStudentName: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
  },
  activeStudentId: {
    fontSize: 12,
    color: colors.textSoft,
    marginTop: 2,
    fontWeight: '500',
  },
  activeStudentClass: {
    fontSize: 12,
    color: colors.secondary,
    fontWeight: '700',
    marginTop: 2,
  },
  clearStudentBtn: {
    margin: 0,
  },
  categoryScroll: {
    marginBottom: spacing.lg,
  },
  categoryContainer: {
    gap: spacing.sm,
    paddingVertical: 4,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 1,
    ...shadows.soft,
  },
  categoryChipSelected: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  chipIcon: {
    marginRight: 6,
  },
  categoryChipLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
  },
  categoryChipLabelSelected: {
    color: colors.white,
    fontWeight: '700',
  },
  formContainer: {
    marginBottom: spacing.md,
  },
  input: {
    backgroundColor: colors.white,
    marginBottom: spacing.md,
  },
  disabledInput: {
    backgroundColor: colors.background,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.warningSoft,
    padding: spacing.md,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.25)',
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
});

export default RecordPaymentScreen;
