import { generateShortUuid } from "custom-uuid";

const variants = [
  {
    id: generateShortUuid(),
    productId: 1,
    qtyInStock: 10,
    variantDescription: "Table, white, 100x60 cm",
    price: 59,
    color: "white",
    size: "100x60",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 1,
    qtyInStock: 5,
    variantDescription: "Desk, black-brown, 100x60 cm",
    price: 59,
    color: "black-brown",
    size: "100x60",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/linnmon-adils-desk-black-brown__0974302_pe812345_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 2,
    qtyInStock: 5,
    variantDescription: "Desk, white, 160x80 cm",
    price: 329,
    color: "white",
    size: "100x60",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/bekant-desk-white__0736420_pe740535_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 2,
    qtyInStock: 5,
    variantDescription: "Desk, linoleum blue/black, 160x80 cm",
    price: 329,
    color: "black",
    size: "160x80",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/bekant-desk-linoleum-blue-black__0736416_pe740531_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 3,
    qtyInStock: 10,
    variantDescription: "Coffee table, black, 70 cm",
    price: 99,
    color: "black",
    size: "70",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/bekant-desk-linoleum-blue-black__0736416_pe740531_s5.jpg?f=xlhttps://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0983032_pe815898_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 3,
    qtyInStock: 10,
    variantDescription: "Coffee table, birch veneer, 70 cm",
    price: 99,
    color: "birch veneer",
    size: "70",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-birch-veneer__0987623_pe817609_s5.jpg?f=xl",
  },
  {
    id: generateShortUuid(),
    productId: 4,
    qtyInStock: 10,
    variantDescription: "Coffee table, dark grey/birch, 50 cm",
    price: 99,
    color: "dark grey, birch",
    size: "50",
    material: "",
    variantImages:
      "https://www.ikea.com/sg/en/images/products/ypperlig-coffee-table-dark-grey-birch__0505344_pe633869_s5.jpg?f=xl",
  },
];

module.exports = variants;
