const LINKED_ACCOUNTS = {
  AssetAccountSupplierDeposits: {
    AccountId: 39,
  },
  AssetAccountTrackingReceivables: {
    AccountId: 37,
  },
  BankAccountCashPayments: {
    AccountId: 33,
  },
  BankAccountChequePayments: {
    AccountId: 33,
  },
  BankAccountCustomerReceipts: {
    AccountId: 33,
  },
  BankAccountElectronicPayments: {
    AccountId: 36,
  },
  BankAccountPayingBills: {
    AccountId: 33,
  },
  BankAccountUndepositedFunds: {
    AccountId: 35,
  },
  EmploymentExpenseAccount: {
    AccountId: 98,
  },
  EquityAccountCurrentEarnings: {
    AccountId: 69,
  },
  EquityAccountRetainedEarnings: {
    AccountId: 68,
  },
  EquityHistoricalBalancing: {
    AccountId: 70,
  },
  LiabilityAccountTrackingPayables: {
    AccountId: 49,
  },
  WagesExpenseAccount: {
    AccountId: 97,
  },
  TaxDeductionsPayableAccount: {
    AccountId: 53,
  },
  DefaultSuperPayable: {
    AccountId: 54,
  },
};

const LINES = [
  {
    TaxCodeId: 4,
    Id: 215,
    AccountId: 179,
    Memo: "",
    DisplayIndex: 0,
    Amount: 3660.5,
    LineSubTypeId: 8,
    TaxAmount: 0,
  },
  {
    TaxCodeId: 4,
    Id: 216,
    AccountId: 36,
    Memo: "",
    DisplayIndex: 1,
    Amount: 3660.5,
    LineSubTypeId: 8,
    TaxAmount: 0,
  },
];

function getNotPersonalAccountId(linkedAccounts, lines) {
  const personalExpenseAccount =
    linkedAccounts.BankAccountElectronicPayments.AccountId;

  // @TODO: what to do here
  if (!personalExpenseAccount) return 100;

  const notPersonalAccountId = lines.find(
    (line) => line.AccountId !== personalExpenseAccount
  );

  //@TODO: what to do here:
  if (!notPersonalAccountId) return 120;

  return notPersonalAccountId.AccountId;
}

console.log(
  // ======
  getNotPersonalAccountId(LINKED_ACCOUNTS, LINES)
  // ======
);
