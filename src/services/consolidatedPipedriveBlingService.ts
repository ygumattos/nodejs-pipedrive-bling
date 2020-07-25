import moment from 'moment';
import WonDealsService from './getWonDealsServices';
import ParseBlingSale from './parseBlingSale';
import CreateBling from './createBlingSaleService';
import Response from '../interfaces/FormatToBlingInterface';

import getRandomInt from '../common/generateRandomNumber';

export default class Service {
  public async execute(): Promise<Response[]> {
    const wonDealsService = new WonDealsService();
    const wonDeals = await wonDealsService.execute();
    const wonDealsPersonWithProducts = wonDeals.map(deal => {
      const productsDeal = {
        code: getRandomInt(999, 1),
        description: deal.title,
        unity: 'un',
        quantity: deal.products_count,
        total_value: deal.value,
      };
      return { ...deal, products: { ...productsDeal } };
    });

    const parseBling = new ParseBlingSale();
    const parsedDeals = wonDealsPersonWithProducts.map(deal =>
      parseBling.execute(deal),
    );

    const createBling = new CreateBling();
    try {
      parsedDeals.map(async deal => {
        const formartDealDate = moment(deal.pedido.date).toDate().getDate();
        const TodayDate = moment().toDate().getDate();

        if (formartDealDate !== TodayDate) return false;
        const newDeal = await createBling.execute(deal);
        return newDeal;
      });
    } catch (error) {
      console.log(error);
    }

    return parsedDeals;
  }
}
