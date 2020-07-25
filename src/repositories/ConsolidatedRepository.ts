import { Document } from 'mongoose';
import moment from 'moment';
import ConsolidatedModel from '../models/ConsolidatedModel';

class ConsolidatedRepository {
  public async findByDate(date: Date): Promise<Document[] | null> {
    const start = moment(date).startOf('day').subtract(3, 'hours');
    const end = moment(date).endOf('day').subtract(3, 'hours');
    console.log(moment(start).toDate());
    console.log(moment(end).toDate());
    const findConsolidatedDeals = await ConsolidatedModel.find({
      date: { $gte: start, $lte: end },
    });

    return findConsolidatedDeals || null;
  }
}

export default ConsolidatedRepository;
