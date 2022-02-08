const ACCOUNTS = [
  {
    IsVisible: true,
    DisplayId: "1-0000",
    IsAllowedToMoveDown: false,
    SuggestedChildHeaderDisplayId: "1-1500",
    IsCredit: false,
    Uid: "6f194435-5144-4f5b-80c9-db48f8062420",
    SuggestedChildDetailDisplayId: "1-2521",
    AccountType: "Asset",
    IsAllowedToMoveUp: false,
    AccountRecordId: 30,
    IsCurrentEarnings: false,
    IsLinked: false,
    IsRetainedEarnings: false,
    CurrentBalance: -22162.16,
    Id: 30,
    OpeningBalance: 0,
    IsSystem: true,
    IsHeader: true,
    Level: 1,
    AccountName: "Assets",
    AccountSubType: "OtherAsset",
  },
  {
    IsVisible: true,
    DisplayId: "1-1000",
    IsAllowedToMoveDown: false,
    SuggestedChildHeaderDisplayId: "",
    IsCredit: false,
    Uid: "42fff476-245a-45d2-b59c-d86a66078555",
    SuggestedChildDetailDisplayId: "1-1211",
    AccountType: "Asset",
    IsAllowedToMoveUp: false,
    AccountRecordId: 31,
    IsCurrentEarnings: false,
    ParentAccountId: 30,
    IsLinked: false,
    ParentAccountRecordId: 30,
    IsRetainedEarnings: false,
    CurrentBalance: -22257.61,
    Id: 31,
    OpeningBalance: 0,
    IsSystem: false,
    IsHeader: true,
    Level: 2,
    AccountName: "Current Assets2",
    AccountSubType: "OtherAsset",
  },
  {
    IsVisible: true,
    DisplayId: "1-1100",
    IsAllowedToMoveDown: false,
    SuggestedChildHeaderDisplayId: "",
    IsCredit: false,
    Uid: "2a971db7-11e5-484d-8b2b-10798ff9df68",
    SuggestedChildDetailDisplayId: "1-1161",
    AccountType: "Asset",
    IsAllowedToMoveUp: true,
    AccountRecordId: 32,
    IsCurrentEarnings: false,
    ParentAccountId: 31,
    IsLinked: false,
    ParentAccountRecordId: 31,
    IsRetainedEarnings: false,
    CurrentBalance: -22513.18,
    Id: 32,
    OpeningBalance: 0,
    IsSystem: false,
    IsHeader: true,
    Level: 3,
    AccountName: "Bank Accounts",
    AccountSubType: "OtherAsset",
  },
  {
    TaxCodeId: 4,
    IsVisible: true,
    TaxCode: "N-T",
    DisplayId: "1-111011",
    IsAllowedToMoveDown: false,
    IsCredit: false,
    Uid: "b2a368b2-7eb1-4095-be53-8c864abf6a29",
    AccountType: "Asset",
    IsAllowedToMoveUp: true,
    AccountRecordId: 33,
    IsCurrentEarnings: true,
    ParentAccountId: 32,
    IsLinked: true,
    ParentAccountRecordId: 32,
    IsRetainedEarnings: true,
    CurrentBalance: -20638.18,
    Id: 33,
    OpeningBalance: 0,
    IsSystem: false,
    IsHeader: false,
    Level: 4,
    AccountName: "Main Business Account 2",
    AccountSubType: "Bank",
  },
];

const findAccountNameById = (accountList, id) => {
  // let foundAccountName = "";

  // Object.entries(accountList).forEach((el) => {
  //   if (el[1].AccountId === id) {
  //     foundAccountName = el[0];
  //   }
  // });

  // return foundAccountName;
  let found = accountList.find((el) => {
    return el.Id === id;
  });

  return (found && found.AccountName) || "Account Not Found";
};

console.log(findAccountNameById(ACCOUNTS, 33));
