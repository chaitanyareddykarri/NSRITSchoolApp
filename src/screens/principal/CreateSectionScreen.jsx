import React, {useState} from 'react';
import {HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  CustomButton,
  CustomInput,
  Header,
  ScreenContainer,
} from '../../components';
import {createSection} from '../../store/slices/classSlice';

const CreateSectionScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.classes);
  const [form, setForm] = useState({classId: '', name: '', wing: ''});

  const updateField = (field, value) =>
    setForm(current => ({...current, [field]: value}));

  const handleSubmit = async () => {
    const action = await dispatch(createSection(form));
    if (createSection.fulfilled.match(action)) {
      navigation.goBack();
    }
  };

  return (
    <ScreenContainer>
      <Header
        title="Create Section"
        subtitle="Attach a section to an existing class"
      />
      <CustomInput
        label="Class ID"
        value={form.classId}
        onChangeText={value => updateField('classId', value)}
      />
      <CustomInput
        label="Section name"
        value={form.name}
        onChangeText={value => updateField('name', value)}
      />
      <CustomInput
        label="Wing"
        value={form.wing}
        onChangeText={value => updateField('wing', value)}
      />
      <HelperText type="error" visible={Boolean(error)}>
        {error}
      </HelperText>
      <CustomButton
        disabled={!form.classId || !form.name || loading}
        loading={loading}
        onPress={handleSubmit}>
        Save Section
      </CustomButton>
    </ScreenContainer>
  );
};

export default CreateSectionScreen;
