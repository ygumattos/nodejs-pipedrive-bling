import { Document } from 'mongoose';
import ConsolidatedModel from '../models/ConsolidatedModel';

class ConsolidatedRepository {
  // public async findByDate(date: Date): Promise<Appointment | null> {
  //   const findAppointment = await this.findOne({
  //     where: { date },
  //   });

  //   return findAppointment || null;
  // }

  public async find(): Promise<Document[]> {
    const findConsolidated = await ConsolidatedModel.find({});
    return findConsolidated;
  }
}

export default ConsolidatedRepository;
