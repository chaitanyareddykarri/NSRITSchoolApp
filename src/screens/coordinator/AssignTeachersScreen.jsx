import React, {useState} from 'react';
import {HelperText} from 'react-native-paper';
import {
  CustomButton,
  CustomInput,
  Header,
  ScreenContainer,
} from '../../components';
import teacherService from '../../services/teachers/teacherService';

const AssignTeachersScreen = () => {
  const [form, setForm] = useState({
    teacherId: '',
    teacherName: '',
    classId: '',
    sectionId: '',
    wing: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const updateField = (field, value) =>
    setForm(current => ({...current, [field]: value}));

  const handleAssign = async () => {
    setLoading(true);
    setMessage('');
    await teacherService.assignTeacher(form);
    setMessage('Teacher assignment saved');
    setLoading(false);
  };

  return (
    <ScreenContainer>
      <Header
        title="Assign Teachers"
        subtitle="Map a teacher to a class, section, and wing"
      />
      <CustomInput
        label="Teacher ID"
        value={form.teacherId}
        onChangeText={value => updateField('teacherId', value)}
      />
      <CustomInput
        label="Teacher name"
        value={form.teacherName}
        onChangeText={value => updateField('teacherName', value)}
      />
      <CustomInput
        label="Class ID"
        value={form.classId}
        onChangeText={value => updateField('classId', value)}
      />
      <CustomInput
        label="Section ID"
        value={form.sectionId}
        onChangeText={value => updateField('sectionId', value)}
      />
      <CustomInput
        label="Wing"
        value={form.wing}
        onChangeText={value => updateField('wing', value)}
      />
      <HelperText type="info" visible={Boolean(message)}>
        {message}
      </HelperText>
      <CustomButton
        loading={loading}
        disabled={!form.teacherId || !form.classId || loading}
        onPress={handleAssign}>
        Save Assignment
      </CustomButton>
    </ScreenContainer>
  );
};

export default AssignTeachersScreen;
