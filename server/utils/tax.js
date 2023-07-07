exports.calculateGst = (items) => {
  const updatedItems = items.map((item) => {
    // item.costPrice = item.costPrice;
    item.tax_gst = 0;
    item.priceWithTax = 0;
    const cost_price = item.costPrice;
    const quantity = item.quantity;
    const total_cost_price = Number((cost_price * quantity).toFixed(2));

    console.log("TPCP", total_cost_price);

    // tax calulations assuming 12% gst

    const taxable_amout = total_cost_price * (12 / 100);

    item.tax_gst = taxable_amout;
    item.priceWithTax = Number((taxable_amout + total_cost_price).toFixed(2));

    return item;
  });

  return updatedItems;
};
