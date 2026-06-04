import React, {useState} from 'react';
import {HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {CustomButton, CustomInput, ScreenContainer, SectionHeader} from '../../components';
import {PREDEFINED_CLASSES} from '../../config/academic';
import {createStudent} from '../../store/slices/studentSlice';

const CreateStudentScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {submitting, error} = useSelector(state => state.students);
  const user = useSelector(state => state.auth.user);
  const [form, setForm] = useState({
    branchId: user?.branchId || '',
    branchCode: '',
    wingId: '',
    academicClassId: '',
    sectionId: '',
    className: PREDEFINED_CLASSES[0].value,
    sectionName: '',
    fullName: '',
    gender: '',
    dateOfBirth: '',
    parentName: '',
    parentPhoneNumber: '',
    alternateNumber: '',
    address: '',
    admissionDate: '',
    admissionYear: new Date().getFullYear(),
    countryCode: '+91',
  });

  const updateField = (field, value) => setForm(current => ({...current, [field]: value}));

  const handleSubmit = async () => {
    const action = await dispatch(
      createStudent({
        ...form,
        admissionYear: Number(form.admissionYear),
        phoneNumber: form.parentPhoneNumber,
      }),
    );

    if (createStudent.fulfilled.match(action)) {
      navigation.goBack();
    }
  };

  return (
    <ScreenContainer>
      <SectionHeader title="Create Student" subtitle="Branch, wing, class, section, parent, and admission details" />
      <CustomInput label="Branch ID" value={form.branchId} onChangeText={value => updateField('branchId', value)} />
      <CustomInput label="Branch Code" value={form.branchCode} onChangeText={value => updateField('branchCode', value)} />
      <CustomInput label="Wing ID" value={form.wingId} onChangeText={value => updateField('wingId', value)} />
      <CustomInput label="Class" value={form.className} onChangeText={value => updateField('className', value)} />
      <CustomInput label="Class ID" value={form.academicClassId} onChangeText={value => updateField('academicClassId', value)} />
      <CustomInput label="Section" value={form.sectionName} onChangeText={value => updateField('sectionName', value)} />
      <CustomInput label="Section ID" value={form.sectionId} onChangeText={value => updateField('sectionId', value)} />
      <CustomInput label="Student full name" value={form.fullName} onChangeText={value => updateField('fullName', value)} />
      <CustomInput label="Gender" value={form.gender} onChangeText={value => updateField('gender', value)} />
      <CustomInput label="DOB (YYYY-MM-DD)" value={form.dateOfBirth} onChangeText={value => updateField('dateOfBirth', value)} />
      <CustomInput label="Parent name" value={form.parentName} onChangeText={value => updateField('parentName', value)} />
      <CustomInput label="Parent phone" keyboardType="phone-pad" value={form.parentPhoneNumber} onChangeText={value => updateField('parentPhoneNumber', value)} />
      <CustomInput label="Alternate number" keyboardType="phone-pad" value={form.alternateNumber} onChangeText={value => updateField('alternateNumber', value)} />
      <CustomInput label="Address" value={form.address} onChangeText={value => updateField('address', value)} />
      <CustomInput label="Admission date (YYYY-MM-DD)" value={form.admissionDate} onChangeText={value => updateField('admissionDate', value)} />
      <CustomInput label="Admission year" keyboardType="numeric" value={String(form.admissionYear)} onChangeText={value => updateField('admissionYear', value)} />
      <HelperText type="error" visible={Boolean(error)}>{error}</HelperText>
      <CustomButton loading={submitting} disabled={submitting} onPress={handleSubmit}>
        Create Student
      </CustomButton>
    </ScreenContainer>
  );
};

export default CreateStudentScreen;
