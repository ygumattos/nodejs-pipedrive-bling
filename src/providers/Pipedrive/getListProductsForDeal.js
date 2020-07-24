const pipedrive = require('./config');

const getDetailDeal = async (id) => {
  try {
    const responseDeal = await pipedrive.DealsController.listProductsAttachedToADeal({ id });
    return responseDeal;
  } catch (error) {
    console.log(error)
  }
}
module.exports = getDetailDeal;

