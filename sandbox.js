const LINES = {
  lines: [
    {
      id: "2",
      accountId: "79",
      amount: "100",
      taxCodeId: "1",
      taxAmount: "8.08",
      lineSubTypeId: 8,
    },
  ],
};

const getGstIncludedInExpense = ({ lines }) => {
  if (!lines) return false;

  const gstAmount = lines.reduce((acc, el) => acc + Number(el.taxAmount), 0);

  return gstAmount > 0 ? true : false;
};

console.log(
  // ****
  getGstIncludedInExpense(LINES)

  // ****
);
