import React, {useState} from 'react';
import {HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  CustomButton,
  CustomInput,
  ScreenContainer,
  SectionHeader,
} from '../../components';
import {uploadOfflinePayment} from '../../store/slices/feeSlice';

const UploadOfflinePaymentScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {submitting, error} = useSelector(state => state.fees);
  const [form, setForm] = useState({
    studentId: '',
    studentName: '',
    amount: '',
    receiptNo: '',
  });

  const updateField = (field, value) =>
    setForm(current => ({...current, [field]: value}));

  const handleSubmit = async () => {
    const action = await dispatch(
      uploadOfflinePayment({
        ...form,
        amount: Number(form.amount),
        mode: 'Cash',
      }),
    );

    if (uploadOfflinePayment.fulfilled.match(action)) {
      navigation.goBack();
    }
  };

  return (
    <ScreenContainer>
      <SectionHeader
        title="Upload Cash Payment"
        subtitle="Record offline fee payment into the ledger"
      />
      <CustomInput
        label="Student ID"
        value={form.studentId}
        onChangeText={value => updateField('studentId', value)}
      />
      <CustomInput
        label="Student name"
        value={form.studentName}
        onChangeText={value => updateField('studentName', value)}
      />
      <CustomInput
        label="Amount"
        keyboardType="numeric"
        value={form.amount}
        onChangeText={value => updateField('amount', value)}
      />
      <CustomInput
        label="Receipt number"
        value={form.receiptNo}
        onChangeText={value => updateField('receiptNo', value)}
      />
      <HelperText type="error" visible={Boolean(error)}>
        {error}
      </HelperText>
      <CustomButton
        loading={submitting}
        disabled={!form.studentId || !form.amount || submitting}
        onPress={handleSubmit}>
        Upload Payment
      </CustomButton>
    </ScreenContainer>
  );
};

export default UploadOfflinePaymentScreen;
