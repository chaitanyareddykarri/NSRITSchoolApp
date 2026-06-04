import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {HelperText, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {APP_NAME} from '../../config/constants';
import {CustomButton, CustomInput, RoleCard, ScreenContainer} from '../../components';
import {clearAuthError, sendOtp} from '../../store/slices/authSlice';
import {colors, spacing, typography} from '../../theme';
import {validatePhoneLogin} from '../../utils/validators';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.auth);
  const [form, setForm] = useState({countryCode: '+91', phoneNumber: ''});
  const [localError, setLocalError] = useState('');

  const updateField = (field, value) => {
    if (error) {
      dispatch(clearAuthError());
    }
    setLocalError('');
    setForm(current => ({...current, [field]: value}));
  };

  const handleSendOtp = async () => {
    const validationError = validatePhoneLogin(form);
    if (validationError) {
      setLocalError(validationError);
      return;
    }

    const action = await dispatch(sendOtp(form));
    if (sendOtp.fulfilled.match(action)) {
      navigation.navigate('OTPVerification', {
        ...form,
        verificationId: action.payload.verificationId,
        fullPhoneNumber: action.payload.fullPhoneNumber,
      });
    }
  };

  return (
    <ScreenContainer>
      <View style={styles.hero}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{APP_NAME}</Text>
        <Text style={styles.subtitle}>Secure OTP access for school operations</Text>
      </View>

      <View style={styles.phoneRow}>
        <CustomInput
          label="Code"
          keyboardType="phone-pad"
          value={form.countryCode}
          style={styles.countryCode}
          onChangeText={value => updateField('countryCode', value)}
        />
        <CustomInput
          label="Phone number"
          keyboardType="phone-pad"
          value={form.phoneNumber}
          style={styles.phoneInput}
          onChangeText={value => updateField('phoneNumber', value)}
        />
      </View>
      <HelperText type="error" visible={Boolean(localError || error)}>
        {localError || error}
      </HelperText>
      <CustomButton loading={loading} disabled={loading} onPress={handleSendOtp}>
        Send OTP
      </CustomButton>

      <View style={styles.loginHint}>
        <RoleCard
          role="MAIN_ADMIN"
          description="Use the phone number registered by your school administrator. Your role is loaded after OTP verification."
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  hero: {
    marginBottom: spacing.xl,
  },
  image: {
    borderRadius: 8,
    height: 150,
    marginBottom: spacing.lg,
    width: '100%',
  },
  title: {
    ...typography.title,
    color: colors.primaryDark,
  },
  subtitle: {
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  phoneRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  countryCode: {
    flex: 0.32,
  },
  phoneInput: {
    flex: 1,
  },
  loginHint: {
    marginTop: spacing.xl,
  },
});

export default LoginScreen;
