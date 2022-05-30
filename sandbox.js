// @TODO: put these in tests

const ENTRY_DRAFT = {
  Id: 378,
  BalanceDue: 133,
  CustomerName: "The Motor Company",
  PurchaseOrderReference: "Order1",
  DateOccurred: "2018-12-03",
  DateDue: "2019-01-31",
  DateClosed: "2018-03-27",
  DisplayId: "00000005",
  Status: "Open",
  TermsPaymentType: "Prepaid",
  Amount: 249,
  CalloutActivityType: "email_rejected",
  Type: "Standard",
};

const ENTRY_PAID = {
  Id: 378,
  BalanceDue: 0,
  CustomerName: "The Motor Company",
  PurchaseOrderReference: "Order1",
  DateOccurred: "2018-12-03",
  DateDue: "2019-01-31",
  DateClosed: "2018-03-27",
  DisplayId: "00000005",
  Status: "Open",
  TermsPaymentType: "Prepaid",
  Amount: 249,
  CalloutActivityType: "email_delivered",
  Type: "Standard",
};

const ENTRY_DUE_YESTERDAY = {
  Id: 378,
  BalanceDue: 110,
  CustomerName: "The Motor Company",
  PurchaseOrderReference: "Order1",
  DateOccurred: "2018-12-03",
  DateDue: "2022-05-29",
  DateClosed: "2018-03-27",
  DisplayId: "00000005",
  Status: "Open",
  TermsPaymentType: "Prepaid",
  Amount: 249,
  CalloutActivityType: "email_delivered",
  Type: "Standard",
};

const ENTRY_DUE_PARTIALLY_PAID = {
  Id: 378,
  BalanceDue: 110,
  CustomerName: "The Motor Company",
  PurchaseOrderReference: "Order1",
  DateOccurred: "2018-12-03",
  DateDue: getTomorrowsDateString(),
  DateClosed: "2018-03-27",
  DisplayId: "00000005",
  Status: "Open",
  TermsPaymentType: "Prepaid",
  Amount: 249,
  CalloutActivityType: "email_delivered",
  Type: "Standard",
};

const ENTRY_DUE_UNPAID = {
  Id: 378,
  BalanceDue: 249,
  CustomerName: "The Motor Company",
  PurchaseOrderReference: "Order1",
  DateOccurred: "2018-12-03",
  DateDue: getTomorrowsDateString(),
  DateClosed: "2018-03-27",
  DisplayId: "00000005",
  Status: "Open",
  TermsPaymentType: "Prepaid",
  Amount: 249,
  CalloutActivityType: "email_delivered",
  Type: "Standard",
};

// @TODO: put this in common:
function getTomorrowsDateString() {
  const today = new Date();
  const tomorrowsDate = new Date(today.setDate(today.getDate() + 1))
    .toISOString()
    .split("T")[0];
  console.log("tomorrowsdate: ", tomorrowsDate);
  return tomorrowsDate;
}

const notSentStatuses = ["", "email_rejected", "email_bounced"];

const buildInvoiceStatus = (entry) => {
  const todaysDate = new Date().toISOString().split("T")[0];
  console.log("todays date: ", todaysDate);

  if (notSentStatuses.includes(entry.CalloutActivityType)) {
    return "Draft";
  }
  if (entry.BalanceDue === 0) {
    return "Paid";
  }
  if (
    entry.DateDue !== "Prepaid" &&
    entry.DateDue !== "CashOnDelivery" &&
    todaysDate > entry.DateDue &&
    entry.BalanceDue > 0
  ) {
    return "Overdue";
  }

  if (entry.Amount > entry.BalanceDue) return "Partially paid";

  if (entry.Amount === entry.BalanceDue) return "Unpaid";
};

const invoiceStatusToColourMap = {
  Draft: "default",
  Credit: "blue",
  Paid: "green",
  Overdue: "red",
  "Partially paid": "purple",
  Unpaid: "orange",
};

console.log("entry draft: ", buildInvoiceStatus(ENTRY_DRAFT));
console.log("entry paid: ", buildInvoiceStatus(ENTRY_PAID));
console.log("entry overdue: ", buildInvoiceStatus(ENTRY_DUE_YESTERDAY));
console.log(
  "entry partially paid: ",
  buildInvoiceStatus(ENTRY_DUE_PARTIALLY_PAID)
);
console.log("entry unpaid: ", buildInvoiceStatus(ENTRY_DUE_UNPAID));
