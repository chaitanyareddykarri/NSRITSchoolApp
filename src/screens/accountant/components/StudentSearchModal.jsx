import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  FlatList,
  Pressable,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {IconButton, Searchbar, Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {colors, spacing, radius, shadows} from '../../../theme';
import studentService from '../../../services/students/studentService';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const StudentSearchModal = ({visible, onClose, onSelectStudent}) => {
  const {user, role} = useSelector(state => state.auth);
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!visible) {
      setSearchText('');
      setResults([]);
      setError(null);
      return;
    }
  }, [visible]);

  useEffect(() => {
    if (!searchText.trim()) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        const scope = {role, userId: user?.id};
        const searchResults = await studentService.searchStudents(
          {
            branchId: user?.branchId,
            searchText: searchText,
            limit: 20,
          },
          scope,
        );
        setResults(searchResults || []);
      } catch (err) {
        console.error('Search error:', err);
        setError('Failed to search students');
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchText, user, role]);

  const renderStudentItem = ({item}) => {
    const classSection = [item.className, item.sectionName]
      .filter(Boolean)
      .join(' - ');

    return (
      <Pressable
        style={({pressed}) => [
          styles.studentCard,
          pressed && styles.studentCardPressed,
        ]}
        onPress={() => {
          onSelectStudent(item);
          onClose();
        }}>
        <Avatar.Text
          size={40}
          label={item.fullName ? item.fullName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'ST'}
          style={styles.avatar}
          labelStyle={styles.avatarLabel}
        />
        <View style={styles.studentInfo}>
          <Text style={styles.studentName}>{item.fullName}</Text>
          <Text style={styles.studentIdText}>ID: {item.studentId}</Text>
          {Boolean(classSection) && (
            <Text style={styles.studentClassText}>{classSection}</Text>
          )}
        </View>
        <IconButton
          icon="chevron-right"
          iconColor={colors.textSoft}
          size={20}
        />
      </Pressable>
    );
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Select Student</Text>
            <IconButton
              icon="close"
              size={24}
              iconColor={colors.text}
              onPress={onClose}
              style={styles.closeButton}
            />
          </View>

          {/* Search bar */}
          <View style={styles.searchContainer}>
            <Searchbar
              placeholder="Type student name or ID..."
              onChangeText={setSearchText}
              value={searchText}
              style={styles.searchBar}
              inputStyle={styles.searchInput}
              loading={loading}
              placeholderTextColor={colors.textSoft}
              iconColor={colors.textMuted}
            />
          </View>

          {/* Results Area */}
          {loading && results.length === 0 ? (
            <View style={styles.centered}>
              <ActivityIndicator size="large" color={colors.secondary} />
              <Text style={styles.helperText}>Searching registry...</Text>
            </View>
          ) : error ? (
            <View style={styles.centered}>
              <IconButton icon="alert-circle-outline" iconColor={colors.danger} size={40} />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : results.length === 0 ? (
            <View style={styles.centered}>
              <IconButton
                icon={searchText ? "account-search-outline" : "account-group-outline"}
                iconColor={colors.textSoft}
                size={48}
              />
              <Text style={styles.noResultsTitle}>
                {searchText ? 'No Students Found' : 'Find Student'}
              </Text>
              <Text style={styles.noResultsSub}>
                {searchText
                  ? 'Double-check spelling or try searching with student ID'
                  : 'Start typing name or ID above to find students in this branch.'}
              </Text>
            </View>
          ) : (
            <FlatList
              data={results}
              keyExtractor={item => item.id || item.studentId}
              renderItem={renderStudentItem}
              contentContainerStyle={styles.listContent}
              keyboardShouldPersistTaps="handled"
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    height: SCREEN_HEIGHT * 0.85,
    elevation: 24,
    ...shadows.soft,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.white,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  closeButton: {
    margin: 0,
  },
  searchContainer: {
    padding: spacing.md,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  searchBar: {
    backgroundColor: colors.background,
    borderRadius: radius.md,
    elevation: 0,
    borderWidth: 1,
    borderColor: colors.border,
    height: 48,
  },
  searchInput: {
    fontSize: 14,
    color: colors.text,
    alignSelf: 'center',
  },
  listContent: {
    padding: spacing.md,
    gap: spacing.sm,
  },
  studentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  studentCardPressed: {
    backgroundColor: colors.background,
    borderColor: colors.textSoft,
  },
  avatar: {
    backgroundColor: colors.primarySoft,
  },
  avatarLabel: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14,
  },
  studentInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  studentName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  studentIdText: {
    fontSize: 12,
    color: colors.textSoft,
    marginTop: 2,
    fontWeight: '500',
  },
  studentClassText: {
    fontSize: 12,
    color: colors.secondary,
    fontWeight: '600',
    marginTop: 2,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  helperText: {
    marginTop: spacing.sm,
    fontSize: 14,
    color: colors.textMuted,
  },
  errorText: {
    fontSize: 14,
    color: colors.danger,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  noResultsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.sm,
  },
  noResultsSub: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.xs,
    lineHeight: 18,
  },
});

export default StudentSearchModal;
