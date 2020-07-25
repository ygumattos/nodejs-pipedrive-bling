import { Document } from 'mongoose';
import ConsolidatedModel from '../models/ConsolidatedModel';

export default class Service {
  public async execute(): Promise<Document> {
    try {
      const consolidated = new ConsolidatedModel({
        name: 'test 1',
        date: Date.now(),
        total_value: '1000',
      });
      await consolidated.save();
      return consolidated;
    } catch (error) {
      return error;
    }
  }
}
