const SAMPLE_ENTRIES = [
  {
    JournalLineId: 1,
    AccountName: "string",
    AccountIdentifier: "1-301C",
    BusinessEventId: 1,
    BusinessEventType: "CashPayment",
    DateOccurred: "2021-12-03",
    Credit: 0,
    Debit: 0,
    DisplayId: "E23434G",
    Description: "Desc",
    SourceJournal: "CashPayment",
    IsSystem: true,
  },
  {
    JournalLineId: 2,
    AccountName: "string",
    AccountIdentifier: "1-301C",
    BusinessEventId: 2,
    BusinessEventType: "CashReceipt",
    DateOccurred: "2021-12-03",
    Credit: 0,
    Debit: 0,
    DisplayId: "E23434G",
    Description: "Desc",
    SourceJournal: "CashReceipt",
    IsSystem: true,
  },
  {
    JournalLineId: 3,
    AccountName: "string",
    AccountIdentifier: "1-301C",
    BusinessEventId: 3,
    BusinessEventType: "CashPayment",
    DateOccurred: "2021-12-03",
    Credit: 0,
    Debit: 0,
    DisplayId: "E23434G",
    Description: "Desc",
    SourceJournal: "CashPayment",
    IsSystem: true,
  },
  {
    JournalLineId: 4,
    AccountName: "string",
    AccountIdentifier: "1-301C",
    BusinessEventId: 4,
    BusinessEventType: "CashPayment",
    DateOccurred: "2021-11-03",
    Credit: 0,
    Debit: 0,
    DisplayId: "E23434G",
    Description: "Desc",
    SourceJournal: "CashPayment",
    IsSystem: true,
  },
  {
    JournalLineId: 5,
    AccountName: "string",
    AccountIdentifier: "1-301C",
    BusinessEventId: 5,
    BusinessEventType: "CashReceipt",
    DateOccurred: "2021-12-04",
    Credit: 0,
    Debit: 0,
    DisplayId: "E23434G",
    Description: "Desc",
    SourceJournal: "CashReceipt",
    IsSystem: true,
  },
  {
    JournalLineId: 6,
    AccountName: "string",
    AccountIdentifier: "1-301C",
    BusinessEventId: 6,
    BusinessEventType: "CashPayment",
    DateOccurred: "2021-10-13",
    Credit: 0,
    Debit: 600,
    DisplayId: "E23434G",
    Description: "Desc",
    SourceJournal: "CashPayment",
    IsSystem: true,
  },
  {
    JournalLineId: 7,
    AccountName: "string",
    AccountIdentifier: "1-301C",
    BusinessEventId: 7,
    BusinessEventType: "CashPayment",
    DateOccurred: "2021-09-03",
    Credit: 500,
    Debit: 0,
    DisplayId: "E23434G",
    Description: "",
    SourceJournal: "CashPayment",
    IsSystem: true,
  },
];

const FINAL_SHAPE = [
  {
    dateTitle: "Yesterday, 17th August",
    transactions: [
      {
        id: "number",
        description: "string",
        type: "string",
        total: "string",
      },
      {
        id: "number",
        description: "string",
        type: "string",
        total: "string",
      },
    ],
  },
  {
    dateTitle: "Wednesday, 16th August",
    transactions: [
      {
        id: "number",
        description: "string",
        type: "string",
        total: "string",
      },
      {
        id: "number",
        description: "string",
        type: "string",
        total: "string",
      },
    ],
  },
];

function sortTransactionsByDate(transactions) {
  // first step, make k:v pair of trans based on date.
  const transDateMap = {};

  transactions.forEach((trans) => {
    // console.log(trans);
    transDateMap[trans.DateOccurred]
      ? transDateMap[trans.DateOccurred].push(trans)
      : (transDateMap[trans.DateOccurred] = [trans]);
  });

  // format into FINAL_SHAPE's shape.
  const finalShapeArr = [];

  for (const [k, v] of Object.entries(transDateMap)) {
    const rObj = {};

    rObj.dateTitle = k;
    rObj.transactions = filterTransactionFields(v);
    finalShapeArr.push(rObj);
  }

  // sort the array by date.

  // convert date to string thing.

  return JSON.stringify(finalShapeArr);
}

function filterTransactionFields(trans) {
  const r = [];

  trans.forEach((el) => {
    const rEl = {};
    rEl.id = el.BusinessEventId;
    rEl.description = convertDescription(el.Description);
    rEl.type = convertPaymentType(el.BusinessEventType);
    // @TODO: is this correct?, also check for 0 values etc.
    rEl.total = el.Debit - el.Credit;

    r.push(rEl);
  });

  return r;
}

function convertDescription(desc) {
  return desc || "Expense / Income";
}

function convertPaymentType(payType) {
  return payType === "CashPayment"
    ? "Expense"
    : payType === "CashReceipt"
    ? "Income"
    : payType;
}

console.log(
  ///
  sortTransactionsByDate(SAMPLE_ENTRIES)
  ///
);
