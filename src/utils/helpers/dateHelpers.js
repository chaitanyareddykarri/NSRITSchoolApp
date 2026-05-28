export const toISODate = date => {
  const value = date ? new Date(date) : new Date();
  return value.toISOString().slice(0, 10);
};

export const formatDisplayDate = date => {
  const value = date ? new Date(date) : new Date();
  return value.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};
