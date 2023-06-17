/**
 * Hello Gennadi
 * Pack a list of orders into vans.
 *
 * Put all of the orders for the same customer into the same van if possible.
 *
 * Vans have a maximum weight capacity of 5.
 *
 * EXTENSION:
 *
 * Report any van ids that contain orders for customers whose orders are spread across multiple vans (report in 'spreadVanIds').
 */

const exampleReturnValue = {
  vans: [
    {
      orders: ["abc", "ghi"],
    },
    {
      orders: ["def", "zzz"],
    },
    {
      etc: "etc...",
    },
  ],
  spreadVanIds: [1, 2],
};

const exampleOrders = [
  {
    customerId: 1,
    orderId: "abc",
    weight: 2,
  },
  {
    customerId: 2,
    orderId: "ghi",
    weight: 1,
  },
  {
    customerId: 1,
    orderId: "def",
    weight: 4,
  },
  {
    customerId: 1,
    orderId: "zzz",
    weight: 1,
  },
];

/**
 * Pack a list orders into vans.
 *
 * Put all of the orders for the same customer into the same van if possible
 *
 * Report any van ids that contain orders for customers whose orders are spread across multiple vans.
 *
 * Vans have a maximum weight capacity of 5.
 * @param {Array{Object}} orders
 */
function packAndReport(orders) {
  // Code here
  let r = {
    vans: [],
    spreadVanIds: [],
    // vans: [
    //   {
    //     orders: ["abc", "ghi"],
    //     customerId: [1, 2]
    //   },
    //   {
    //     orders: ["def", "zzz"],
    //   },
    //   {
    //     etc: "etc...",
    //   },
    // ],
    // spreadVanIds: [1, 2],
  };

  let sortedOrders = orders.sort((a, b) => a.customerId - b.customerId);

  console.log(sortedOrders);

  // customerOrder map
  // {
  // 1: [0, 1] customerId: [vanIds]
  // 2: [0] customerId: [vanIds]
  // }

  let cusOrderMap = {
    // cusId: [0, 1] if current van not here, push
    // cusId: [0]
  };

  // max weight 5 per van.
  let currVan = 0;
  let currVanWeight = 0;
  sortedOrders.forEach((order) => {
    if (currVanWeight + order.weight <= 5) {
      if (!r.vans[currVan]) {
        r.vans.push({
          orders: [order.orderId],
          customerId: [order.customerId],
        });
        // if current vanId is not assigned to current customer
        // add it to map
        if (!cusOrderMap[order.customerId].includes(currVan)) {
          cusOrderMap[order.customerId];
        }
        r.vans[currVan];
        currVanWeight += order.weight;
      } else {
        r.vans[currVan].orders.push(order.orderId);

        currVanWeight += order.weight;
      }
    } else {
      currVan++;
      currVanWeight = 0;
      if (!r.vans[currVan]) {
        r.vans.push({
          orders: [order.orderId],
          customerId: [order.customerId],
        });
        currVanWeight += order.weight;
      } else {
        r.vans[currVan].orders.push(order.orderId);

        currVanWeight += order.weight;
      }
    }
  });

  return r;
}

console.log(
  ///
  packAndReport(exampleOrders)
  ///
);
