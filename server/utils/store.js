// function to add final cart proce with tax
exports.finalCartCalculatons = (items) => {
  let total_cart_price = 0;
  let total_cart_tax = 0;
  items.map((item) => {
    total_cart_price = total_cart_price + item.priceWithTax;
    total_cart_tax = total_cart_tax + item.tax_gst;
  });

  return {
    total_cart_price,
    total_cart_tax,
  };
};
