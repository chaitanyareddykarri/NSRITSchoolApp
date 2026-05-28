const SERIAL_WIDTH = 4;
const BRANCH_CODE_WIDTH = 2;

export const normalizeBranchCode = branchCode =>
  String(branchCode || '').padStart(BRANCH_CODE_WIDTH, '0').slice(-BRANCH_CODE_WIDTH);

export const formatStudentId = ({admissionYear, branchCode, serialNumber}) => {
  const year = String(admissionYear);
  const normalizedBranchCode = normalizeBranchCode(branchCode);
  const serial = String(serialNumber).padStart(SERIAL_WIDTH, '0');

  return `${year}${normalizedBranchCode}${serial}`;
};

export const parseStudentId = studentId => ({
  admissionYear: Number(String(studentId).slice(0, 4)),
  branchCode: String(studentId).slice(4, 6),
  serialNumber: Number(String(studentId).slice(6, 10)),
});

export const getNextSerialNumber = lastSerialNumber => Number(lastSerialNumber || 0) + 1;

export const buildStudentIdPayload = ({admissionYear, branchCode, lastSerialNumber}) => {
  const serialNumber = getNextSerialNumber(lastSerialNumber);

  return {
    admissionYear: Number(admissionYear),
    branchCode: normalizeBranchCode(branchCode),
    serialNumber,
    studentId: formatStudentId({admissionYear, branchCode, serialNumber}),
  };
};
