const OBJ_ARR = [
  {
    id: "R-MNDL-210228491",
    href: "http://api/api/v1/npis-product-inventory/product/R-MNDL-210228491",
    description: "Opticomm FTTP Service",
    status: "active",
    accessServiceTechnologyType: "FTTP",
    isBundle: false,
    isCustomerVisible: true,
    name: "50129071",
    orderDate: "2021-06-07T09:17:29+10:00",
    startDate: "2021-06-16T14:25:33+10:00",
    billingAccount: {
      id: "OPTI",
    },
    place: [
      {
        id: "1000139",
        href: "http://api/api/v1/npis-address/geographicAddress/1000139",
        name: "Service Address",
        "@referredType": "GeographicAddress",
      },
    ],
    product: [
      {
        id: "EBS1000-50",
        href: "http://api/api/v1/npis-product-catalog/productOffering/EBS1000-50",
        name: "EBS Product",
      },
    ],
    productRef: [
      {
        id: "R-MNDL-210228491",
        accessServiceTechnologyType: "FTTP",
        productSpecification: {
          id: "AVCD",
          version: "1.0",
          specificationType: "Service Specification",
        },
        vlan: "1001",
        "@type": "AVCD",
        "@baseType": "Product",
      },
      {
        id: "2853285",
        productSpecification: {
          id: "NTD",
          version: "1.0",
          specificationType: "Resource Specification",
        },
        "@type": "NTD",
        "@baseType": "Product",
      },
      {
        id: "2853285-1",
        productSpecification: {
          id: "UNID",
          version: "1.0",
          specificationType: "Resource Specification",
        },
        portId: 1,
        "@type": "UNID",
        "@baseType": "Product",
      },
    ],
    "@type": "FTTP",
    "@baseType": "Product",
  },
  {
    id: "R-MNDL-210228493",
    href: "http://api/api/v1/npis-product-inventory/product/R-MNDL-210228493",
    description: "Opticomm FTTP Service",
    status: "created",
    accessServiceTechnologyType: "FTTP",
    isBundle: false,
    isCustomerVisible: true,
    name: "Unit-Test Class 3",
    orderDate: "2021-06-16T15:23:50+10:00",
    billingAccount: {
      id: "OPTI",
    },
    place: [
      {
        id: "1000139",
        href: "http://api/api/v1/npis-address/geographicAddress/1000139",
        name: "Service Address",
        "@referredType": "GeographicAddress",
      },
    ],
    product: [
      {
        id: "EBS50",
        href: "http://api/api/v1/npis-product-catalog/productOffering/EBS50",
        name: "EBS Product",
      },
    ],
    productRef: [
      {
        id: "R-MNDL-210228493",
        accessServiceTechnologyType: "FTTP",
        productSpecification: {
          id: "AVCD",
          version: "1.0",
          specificationType: "Service Specification",
        },
        vlan: "1002",
        "@type": "AVCD",
        "@baseType": "Product",
      },
      {
        id: "2853285",
        productSpecification: {
          id: "NTD",
          version: "1.0",
          specificationType: "Resource Specification",
        },
        "@type": "NTD",
        "@baseType": "Product",
      },
      {
        id: "2853285-1",
        productSpecification: {
          id: "UNID",
          version: "1.0",
          specificationType: "Resource Specification",
        },
        portId: 1,
        "@type": "UNID",
        "@baseType": "Product",
      },
    ],
    "@type": "FTTP",
    "@baseType": "Product",
  },
];

const tableFormatString = (obj, headerKey) => {
  switch (headerKey) {
    case "Type":
      return obj.product[0].name.replace("Product", "").trim();
    case "Product":
      return obj.product[0].id;
    case "Order Date":
      return dateFormat(obj.orderDate);
    case "Start Date":
      return dateFormat(obj.startDate);
    default:
      return obj;
  }
  //    "Type":   <td>{row.product[0].name.replace("Product", "").trim()}</td>
  // "Product": <td>{row.product[0].id}</td>
  // "Order Date": <td>{dateFormat(row.orderDate)}</td>
  // "Start Date": <td>{dateFormat(row.startDate)}</td>
};

const dateFormat = function (date) {
  if (date) {
    let d = new Date(date);
    return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  }

  return "";
};

const headers = [
  "Select",
  "ID",
  "Name",
  "Type",
  "Product",
  "Status",
  "Order Date",
  "Start Date",
];

console.log(tableFormatString(OBJ_ARR[0], "Order Date"));
