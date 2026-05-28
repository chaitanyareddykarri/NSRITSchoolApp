import React, {useState} from 'react';
import {HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  CustomButton,
  CustomInput,
  Header,
  ScreenContainer,
} from '../../components';
import {createClass} from '../../store/slices/classSlice';

const CreateClassScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const branchId = useSelector(state => state.auth.user?.branchId);
  const {loading, error} = useSelector(state => state.classes);
  const [form, setForm] = useState({name: '', wing: ''});

  const updateField = (field, value) =>
    setForm(current => ({...current, [field]: value}));

  const handleSubmit = async () => {
    const action = await dispatch(createClass({...form, branchId}));
    if (createClass.fulfilled.match(action)) {
      navigation.goBack();
    }
  };

  return (
    <ScreenContainer>
      <Header
        title="Create Class"
        subtitle="Define a class under the current branch"
      />
      <CustomInput
        label="Class name"
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
        disabled={!form.name || loading}
        loading={loading}
        onPress={handleSubmit}>
        Save Class
      </CustomButton>
    </ScreenContainer>
  );
};

export default CreateClassScreen;
