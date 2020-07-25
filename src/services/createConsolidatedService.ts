import ConsolidatedModel from '../models/ConsolidatedModel';
import DealsFromBling from './getDealsfromBling';

export default class Service {
  public async execute(): Promise<void> {
    const dealsFromBling = new DealsFromBling();
    const { data } = await dealsFromBling.execute();
    try {
      data.retorno.pedidos.map(async thisPedido => {
        const consolidated = new ConsolidatedModel({
          name: thisPedido.pedido.cliente.nome,
          date: new Date(thisPedido.pedido.data),
          total_value: thisPedido.pedido.totalvenda || 0,
        });
        await consolidated.save();
      });
      return;
    } catch (error) {
      console.log(error);
    }
  }
}
