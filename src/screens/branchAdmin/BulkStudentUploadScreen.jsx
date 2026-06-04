import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HelperText, ProgressBar, Text} from 'react-native-paper';
import {CustomButton, CustomInput, ScreenContainer, SectionHeader} from '../../components';
import uploadService from '../../services/uploads/uploadService';
import {colors, spacing, typography} from '../../theme';

const BulkStudentUploadScreen = () => {
  const [csvText, setCsvText] = useState(uploadService.getStudentTemplate());
  const [defaults, setDefaults] = useState({
    branchId: '',
    branchCode: '',
    wingId: '',
    academicClassId: '',
    sectionId: '',
  });
  const [progress, setProgress] = useState({completed: 0, total: 0});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateDefault = (field, value) =>
    setDefaults(current => ({...current, [field]: value}));

  const handleUpload = async () => {
    setLoading(true);
    setResult(null);
    const response = await uploadService.uploadStudentsCsv(csvText, defaults, setProgress);
    setResult(response);
    setLoading(false);
  };

  const progressValue = progress.total ? progress.completed / progress.total : 0;

  return (
    <ScreenContainer>
      <SectionHeader title="Bulk Student Upload" subtitle="Paste CSV content or file text to validate and upload" />
      <View style={styles.grid}>
        <CustomInput label="Branch ID" value={defaults.branchId} onChangeText={value => updateDefault('branchId', value)} />
        <CustomInput label="Branch Code" value={defaults.branchCode} onChangeText={value => updateDefault('branchCode', value)} />
        <CustomInput label="Wing ID" value={defaults.wingId} onChangeText={value => updateDefault('wingId', value)} />
        <CustomInput label="Class ID" value={defaults.academicClassId} onChangeText={value => updateDefault('academicClassId', value)} />
        <CustomInput label="Section ID" value={defaults.sectionId} onChangeText={value => updateDefault('sectionId', value)} />
      </View>
      <CustomInput
        label="CSV content"
        value={csvText}
        multiline
        numberOfLines={10}
        onChangeText={setCsvText}
        style={styles.csvInput}
      />
      <ProgressBar progress={progressValue} color={colors.primary} style={styles.progress} />
      {result ? <Text style={styles.result}>{result.message}</Text> : null}
      <HelperText type="info" visible>
        Required CSV columns: Student Name, Gender, Parent Name, Parent Phone, Class, Section, Admission Year.
      </HelperText>
      <CustomButton loading={loading} disabled={loading || !csvText.trim()} onPress={handleUpload}>
        Upload Students
      </CustomButton>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  grid: {
    marginBottom: spacing.sm,
  },
  csvInput: {
    minHeight: 180,
  },
  progress: {
    height: 8,
    marginBottom: spacing.md,
  },
  result: {
    ...typography.sectionTitle,
    color: colors.text,
    marginBottom: spacing.sm,
  },
});

export default BulkStudentUploadScreen;
