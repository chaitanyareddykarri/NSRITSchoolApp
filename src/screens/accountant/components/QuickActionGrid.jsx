import React from 'react';
import {StyleSheet, View, Pressable, Dimensions} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {colors, spacing, radius, shadows} from '../../../theme';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const ITEM_WIDTH = (SCREEN_WIDTH - spacing.lg * 2 - spacing.md) / 2;

const QuickActionGrid = ({navigation, actions}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.grid}>
        {actions.map((action, idx) => (
          <Pressable
            key={idx}
            style={({pressed}) => [
              styles.card,
              {borderColor: action.color || colors.primary},
              pressed && styles.pressedCard,
            ]}
            onPress={() => navigation.navigate(action.route)}>
            <View style={[styles.iconBadge, {backgroundColor: action.bgColor || colors.primarySoft}]}>
              <IconButton
                icon={action.icon}
                iconColor={action.color || colors.primary}
                size={24}
                style={styles.icon}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{action.title}</Text>
              <Text style={styles.subtitle}>{action.subtitle}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  card: {
    width: ITEM_WIDTH,
    backgroundColor: colors.white,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-start',
    ...shadows.soft,
  },
  pressedCard: {
    opacity: 0.85,
    transform: [{scale: 0.98}],
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  icon: {
    margin: 0,
  },
  textContainer: {
    width: '100%',
  },
  title: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    fontSize: 10,
    color: colors.textMuted,
    marginTop: 2,
  },
});

export default QuickActionGrid;
