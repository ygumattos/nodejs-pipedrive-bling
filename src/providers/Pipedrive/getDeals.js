const pipedrive = require('./config');

const getDeals = async () => {
  const responseDeals = await pipedrive.DealsController.getAllDeals({ userId: 11637401 });
  return responseDeals;
}
module.exports = getDeals;

