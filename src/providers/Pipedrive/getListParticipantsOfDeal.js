const pipedrive = require('./config');

const getListParticipantsOfDeal = async (id) => {
  try {
    const responseDeal = await pipedrive.DealsController.listParticipantsOfADeal({ id });
    return responseDeal;
  } catch (error) {
    console.log(error)
  }
}
module.exports = getListParticipantsOfDeal;

