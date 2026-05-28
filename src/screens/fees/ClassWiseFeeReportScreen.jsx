import React, {useMemo} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {
  DashboardCard,
  EmptyState,
  ScreenContainer,
  SectionHeader,
} from '../../components';
import {formatCurrency} from '../../utils/formatters/currency';

const ClassWiseFeeReportScreen = () => {
  const records = useSelector(state => state.fees.records);

  const reports = useMemo(() => {
    const grouped = records.reduce((acc, item) => {
      const key = `${item.className}-${item.sectionName}`;
      const current = acc[key] || {
        id: key,
        title: `${item.className} - Section ${item.sectionName}`,
        total: 0,
        paid: 0,
        due: 0,
      };

      current.total += item.totalFee;
      current.paid += item.paidAmount;
      current.due += item.dueAmount;
      acc[key] = current;
      return acc;
    }, {});

    return Object.values(grouped);
  }, [records]);

  return (
    <ScreenContainer>
      <SectionHeader
        title="Class-wise Due Report"
        subtitle="Fee collection grouped by class and section"
      />
      <FlatList
        data={reports}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({item}) => (
          <DashboardCard
            title={item.title}
            value={formatCurrency(item.due)}
            description={`${formatCurrency(
              item.paid,
            )} collected of ${formatCurrency(item.total)}`}
            icon="file-chart-outline"
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title="No report data"
            message="Fee records are needed for reports."
          />
        }
      />
    </ScreenContainer>
  );
};

export default ClassWiseFeeReportScreen;
