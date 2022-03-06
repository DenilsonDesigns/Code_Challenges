const objec = {
  "Get business name": [
    {
      subscriptionId: "896f35a7-9be1-4c84-aead-61a17319e1ab",
    },
  ],
  "trans/incomeExpenses: create expense succeeded": [
    { subscriptionId: "4bbd0e42-dbdf-4dba-a9b7-01ea611902db" },
    { subscriptionId: "c96d6576-a5e5-4f12-9327-76eb5c440b25" },
    { subscriptionId: "4b8a8aaf-a4da-4642-a4ff-7e08b9e49cce" },
    { subscriptionId: "ce01688d-f7a8-42eb-8cf0-c1a8e8c07e79" },
  ],
};

function unsubscribe(subscriptionId) {
  Object.keys(objec).forEach((event) => {
    console.log(event);
    objec[event] = objec[event].filter((callbackWithId) => {
      return callbackWithId.subscriptionId !== subscriptionId;
    });
  });

  console.log("objec: ", objec);
}

console.log(
  // *****************
  unsubscribe("c96d6576-a5e5-4f12-9327-76eb5c440b25")
  // *****************
);
