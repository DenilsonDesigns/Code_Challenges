const InvoiceHistoryStatus = {
  CREATED: "CREATED",
  CREATED_FROM_QUOTE: "CREATED_FROM_QUOTE",
  VIEWED_ONLINE: "VIEWED_ONLINE",
  DOWNLOADED: "DOWNLOADED",
  PRINTED: "PRINTED",
  EXPORTED_TO_PDF: "EXPORTED_TO_PDF",
  PAID_ONLINE: "PAID_ONLINE",
  PAID_IN_BULK_ONLINE: "PAID_IN_BULK_ONLINE",
  PAYMENT_DECLINED: "PAYMENT_DECLINED",
  BULK_PAYMENT_DECLINED: "BULK_PAYMENT_DECLINED",
  PAYMENT_RECEIVED: "PAYMENT_RECEIVED",
  INVOICE_REVERSED: "INVOICE_REVERSED",
  EMAILED: "EMAILED",
  DELIVERY_FAILED: "DELIVERY_FAILED",
  CREDIT_APPLIED: "CREDIT_APPLIED",
  SENDING: "SENDING",
  AB: "AB",
  AP: "AP",
  RE: "RE",
  IP: "IP",
  UQ: "UQ",
  CA: "CA",
  PD: "PD",
  PD_WITH_PPD: "PD_WITH_PPD",
  INTRNL_SENT_AS_EINVOICE: "INTRNL_SENT_AS_EINVOICE",
};

const DATA = {
  invoiceHistory: [
    {
      status: "EXPORTED_TO_PDF",
      description: "",
      date: "2022-06-23T00:00:00",
    },
    {
      status: "CREATED",
      description: "",
      date: "2022-06-23T00:00:00",
    },
    {
      journalId: 222,
      sourceJournalType: "ReceivePayment",
      status: "PAYMENT_RECEIVED",
      description: "Received $253.00",
      referenceNo: "CR000017",
      date: "2022-06-22T00:00:00",
    },
    {
      journalId: 223,
      sourceJournalType: "ReceivePayment",
      status: "PAYMENT_RECEIVED",
      description: "Received $253.00",
      referenceNo: "CR000018",
      date: "2022-06-22T00:00:00",
    },
    {
      journalId: 224,
      sourceJournalType: "CreditApplied",
      status: "CREDIT_APPLIED",
      description: "Received $253,099.00",
      referenceNo: "CR000019",
      date: "2022-06-22T17:45:00",
    },
    {
      journalId: 227,
      status: "EMAILED",
      description:
        "To: mohamad.maarouf@myob.com, laika.team@myob.com, ameet.kumar@myob.com",
      additionalDescriptionLines: [],
      date: "2022-05-13T06:28:28.602Z",
    },
    {
      journalId: 225,
      sourceJournalType: "BulkPaymentDeclined",
      status: "BULK_PAYMENT_DECLINED",
      description: "Received $253.00",
      referenceNo: "CR000020",
      date: "2022-06-22T17:45:00",
    },
    {
      journalId: 226,
      sourceJournalType: "DeliveryFailed",
      status: "DELIVERY_FAILED",
      description: "Received $253.00",
      referenceNo: "CR000021",
      date: "2022-06-22T17:45:00",
    },
  ],
};

const sortExportedToPdfAfterCreate = (a, b) => {
  console.log("a.status: ", a.status);
  console.log("b.status: ", b.status);
  console.log(a.status === InvoiceHistoryStatus.CREATED);
  console.log(b.status === InvoiceHistoryStatus.EXPORTED_TO_PDF);
  const isCreateEventFirst =
    a.status === InvoiceHistoryStatus.CREATED ||
    a.status === InvoiceHistoryStatus.CREATED_FROM_QUOTE;
  const isExportedToPdfEventSecond =
    b.status === InvoiceHistoryStatus.EXPORTED_TO_PDF;

  console.log("isCreateEventFirst", isCreateEventFirst);
  console.log("isExportedToPdfEventSecond", isExportedToPdfEventSecond);

  if (isCreateEventFirst && isExportedToPdfEventSecond) {
    console.log("hit 1");
    return -1;
  }
  // console.log("hit 0");

  return 0;
};

const sortByJournalNumber = (a, b) => {
  return b.journalId - a.journalId;
};

const newData = DATA.invoiceHistory.sort(sortExportedToPdfAfterCreate);

console.log(
  //
  newData
  //
);
