import { Document } from 'mongoose';
import moment from 'moment';
import ConsolidatedModel from '../models/ConsolidatedModel';

class ConsolidatedRepository {
  public async findByDate(date: Date): Promise<Document[] | null> {
    const start = moment(date).startOf('day').subtract(3, 'hours');
    const end = moment(date).endOf('day').subtract(3, 'hours');

    const findConsolidatedDeals = await ConsolidatedModel.find({
      date: { $gte: start, $lte: end },
    });

    const t = moment('2020-07-25').toDate().getDate();
    const d = moment().toDate().getDate();
    const f = t === d;
    console.log(f);

    return findConsolidatedDeals || null;
  }
}

export default ConsolidatedRepository;
