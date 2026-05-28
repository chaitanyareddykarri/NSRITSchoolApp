import React from 'react';
import {List} from 'react-native-paper';
import {Header, ScreenContainer} from '../../components';

const students = ['Aarav Kumar', 'Meera Rao', 'Kavya Reddy'];

const renderStudentIcon = props => <List.Icon {...props} icon="account" />;

const StudentsListScreen = () => (
  <ScreenContainer>
    <Header title="Students" subtitle="Assigned class roster" />
    {students.map(student => (
      <List.Item
        key={student}
        title={student}
        description="Class 1 - Section A"
        left={renderStudentIcon}
      />
    ))}
  </ScreenContainer>
);

export default StudentsListScreen;
