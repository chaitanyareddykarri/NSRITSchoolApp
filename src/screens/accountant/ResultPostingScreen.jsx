import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Pressable,
  FlatList,
} from 'react-native';
import {IconButton, Searchbar, Portal, Dialog, Button, Avatar} from 'react-native-paper';
import {colors, spacing, radius, shadows} from '../../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const INITIAL_BATCHES = [
  {
    id: 'b1',
    subject: 'Advanced Mathematics',
    className: 'XII-A',
    teacher: 'Prof. M. Sharma',
    avatarLabel: 'MS',
    status: 'Ready to Post',
    totalStudents: 32,
    submittingDate: '2026-06-08',
  },
  {
    id: 'b2',
    subject: 'Organic Chemistry',
    className: 'XII-B',
    teacher: 'Dr. A. Sen',
    avatarLabel: 'AS',
    status: 'Ready to Post',
    totalStudents: 28,
    submittingDate: '2026-06-07',
  },
  {
    id: 'b3',
    subject: 'Modern History',
    className: 'XII-C',
    teacher: 'Prof. L. Dsouza',
    avatarLabel: 'LD',
    status: 'Draft',
    totalStudents: 30,
    submittingDate: '2026-06-09',
  },
  {
    id: 'b4',
    subject: 'Physical Education',
    className: 'XII-A',
    teacher: 'Coach R. Kumar',
    avatarLabel: 'RK',
    status: 'Posted',
    totalStudents: 32,
    submittingDate: '2026-06-05',
  },
  {
    id: 'b5',
    subject: 'English Literature',
    className: 'XI-A',
    teacher: 'Ms. S. Iyer',
    avatarLabel: 'SI',
    status: 'Draft',
    totalStudents: 35,
    submittingDate: '2026-06-09',
  },
  {
    id: 'b6',
    subject: 'Business Studies',
    className: 'XI-B',
    teacher: 'Mr. J. Shah',
    avatarLabel: 'JS',
    status: 'Posted',
    totalStudents: 34,
    submittingDate: '2026-06-04',
  },
];

const ResultPostingScreen = ({navigation}) => {
  const [batches, setBatches] = useState(INITIAL_BATCHES);
  const [searchText, setSearchText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedClass, setSelectedClass] = useState('All');
  const [confirmDialogVisible, setConfirmDialogVisible] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);

  const filterStatuses = ['All', 'Ready to Post', 'Draft', 'Posted'];
  const filterClasses = ['All', 'XI', 'XII'];

  const filteredBatches = batches.filter(batch => {
    const matchesSearch =
      batch.subject.toLowerCase().includes(searchText.toLowerCase()) ||
      batch.teacher.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || batch.status === selectedStatus;
    const matchesClass =
      selectedClass === 'All' || batch.className.startsWith(selectedClass);

    return matchesSearch && matchesStatus && matchesClass;
  });

  const getStatusColor = status => {
    switch (status) {
      case 'Ready to Post':
        return {bg: colors.successSoft, text: colors.success};
      case 'Draft':
        return {bg: colors.warningSoft, text: colors.warning};
      case 'Posted':
        return {bg: colors.primarySoft, text: colors.primary};
      default:
        return {bg: colors.background, text: colors.textMuted};
    }
  };

  const handlePostPress = batch => {
    setSelectedBatch(batch);
    setConfirmDialogVisible(true);
  };

  const confirmPost = () => {
    if (!selectedBatch) return;

    // Update state to set the selected batch status to 'Posted'
    setBatches(prev =>
      prev.map(item =>
        item.id === selectedBatch.id ? {...item, status: 'Posted'} : item
      )
    );

    setConfirmDialogVisible(false);
    setSelectedBatch(null);
  };

  const renderBatchItem = ({item}) => {
    const statusStyle = getStatusColor(item.status);
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardHeaderLeft}>
            <View style={[styles.statusBadge, {backgroundColor: statusStyle.bg}]}>
              <Text style={[styles.statusBadgeText, {color: statusStyle.text}]}>
                {item.status}
              </Text>
            </View>
            <Text style={styles.classText}>Grade {item.className}</Text>
          </View>
          <Text style={styles.dateText}>{item.submittingDate}</Text>
        </View>

        <Text style={styles.subjectText}>{item.subject}</Text>

        <View style={styles.cardFooter}>
          <View style={styles.teacherRow}>
            <Avatar.Text
              size={24}
              label={item.avatarLabel}
              style={styles.avatar}
              labelStyle={styles.avatarLabel}
            />
            <Text style={styles.teacherName}>{item.teacher}</Text>
          </View>
          <View style={styles.studentsCountRow}>
            <MaterialCommunityIcons name="account-group-outline" size={16} color={colors.textSoft} />
            <Text style={styles.studentsCountText}>{item.totalStudents} students</Text>
          </View>
        </View>

        {item.status === 'Ready to Post' && (
          <Button
            mode="contained"
            buttonColor={colors.secondary}
            textColor={colors.white}
            style={styles.postButton}
            labelStyle={styles.postButtonLabel}
            onPress={() => handlePostPress(item)}>
            Post Results
          </Button>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
            <Text style={styles.headerTitle}>Result Posting Console</Text>
            <Text style={styles.headerSubtitle}>Publish term grades to parent feeds</Text>
          </View>
        </View>
      </View>

      {/* Filter panel */}
      <View style={styles.filterPanel}>
        <Searchbar
          placeholder="Search by subject or teacher..."
          onChangeText={setSearchText}
          value={searchText}
          style={styles.searchBar}
          inputStyle={styles.searchInput}
          placeholderTextColor={colors.textSoft}
          iconColor={colors.textMuted}
        />

        {/* Horizontal filter scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}>
          {/* Status chips */}
          {filterStatuses.map(status => {
            const isSelected = selectedStatus === status;
            return (
              <Pressable
                key={status}
                style={[
                  styles.filterChip,
                  isSelected && styles.filterChipSelected,
                ]}
                onPress={() => setSelectedStatus(status)}>
                <Text
                  style={[
                    styles.filterChipLabel,
                    isSelected && styles.filterChipLabelSelected,
                  ]}>
                  {status}
                </Text>
              </Pressable>
            );
          })}

          <View style={styles.verticalDivider} />

          {/* Class chips */}
          {filterClasses.map(grade => {
            const isSelected = selectedClass === grade;
            return (
              <Pressable
                key={grade}
                style={[
                  styles.filterChip,
                  isSelected && styles.filterChipSelected,
                ]}
                onPress={() => setSelectedClass(grade)}>
                <Text
                  style={[
                    styles.filterChipLabel,
                    isSelected && styles.filterChipLabelSelected,
                  ]}>
                  {grade === 'All' ? 'All Grades' : `Grade ${grade}`}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* Batches list */}
      <FlatList
        data={filteredBatches}
        keyExtractor={item => item.id}
        renderItem={renderBatchItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons
              name="clipboard-remove-outline"
              size={48}
              color={colors.textSoft}
            />
            <Text style={styles.emptyTitle}>No batches found</Text>
            <Text style={styles.emptySubtitle}>
              Try adjustments to your search queries or active filter tags.
            </Text>
          </View>
        }
      />

      {/* Publish Confirmation Dialog */}
      <Portal>
        <Dialog
          visible={confirmDialogVisible}
          onDismiss={() => setConfirmDialogVisible(false)}
          style={styles.dialog}>
          <Dialog.Title style={styles.dialogTitle}>Publish Batch Results</Dialog.Title>
          <Dialog.Content>
            <Text style={styles.dialogText}>
              Are you sure you want to publish final grades for{' '}
              <Text style={{fontWeight: '700', color: colors.text}}>
                {selectedBatch?.subject} (Grade {selectedBatch?.className})
              </Text>
              ? This will broadcast immediate result updates to student portfolios and parent dashboard streams.
            </Text>
          </Dialog.Content>
          <Dialog.Actions style={styles.dialogActions}>
            <Button
              textColor={colors.textMuted}
              onPress={() => setConfirmDialogVisible(false)}>
              Cancel
            </Button>
            <Button
              mode="contained"
              buttonColor={colors.secondary}
              textColor={colors.white}
              style={{borderRadius: radius.md}}
              onPress={confirmPost}>
              Post Results
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.white,
    paddingTop: spacing.sm,
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
  filterPanel: {
    backgroundColor: colors.white,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  searchBar: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    elevation: 0,
    borderWidth: 1,
    borderColor: colors.border,
    height: 44,
  },
  searchInput: {
    fontSize: 13,
    color: colors.text,
    alignSelf: 'center',
  },
  filterScroll: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    gap: spacing.xs,
  },
  filterChip: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterChipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterChipLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
  },
  filterChipLabelSelected: {
    color: colors.white,
    fontWeight: '700',
  },
  verticalDivider: {
    width: 1,
    height: 20,
    backgroundColor: colors.border,
    marginHorizontal: spacing.xs,
  },
  listContainer: {
    padding: spacing.lg,
    gap: spacing.md,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    elevation: 1,
    ...shadows.soft,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  statusBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  classText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textMuted,
  },
  dateText: {
    fontSize: 10,
    color: colors.textSoft,
    fontWeight: '500',
  },
  subjectText: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.md,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.background,
    paddingTop: spacing.sm,
  },
  teacherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  avatar: {
    backgroundColor: colors.primarySoft,
  },
  avatarLabel: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 10,
  },
  teacherName: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '600',
  },
  studentsCountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  studentsCountText: {
    fontSize: 11,
    color: colors.textSoft,
    fontWeight: '500',
  },
  postButton: {
    marginTop: spacing.md,
    borderRadius: radius.md,
  },
  postButtonLabel: {
    fontSize: 13,
    fontWeight: '700',
  },
  emptyContainer: {
    paddingVertical: spacing.xxl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginTop: spacing.sm,
  },
  emptySubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 4,
    paddingHorizontal: spacing.xl,
    lineHeight: 18,
  },
  dialog: {
    backgroundColor: colors.white,
    borderRadius: radius.lg,
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  dialogText: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
  dialogActions: {
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.sm,
  },
});

export default ResultPostingScreen;
