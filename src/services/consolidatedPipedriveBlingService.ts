import WonDealsService from './getWonDealsServices';
import ParseBlingSale from './parseBlingSale';
import CreateBling from './createBlingSaleService';

import getRandomInt from '../common/generateRandomNumber';

interface data {
  id: number;
  user_id: {
    name: string;
  };
  person_id: {
    name: string;
    email: [
      {
        value: string;
      },
    ];
    phone: [
      {
        value: string;
      },
    ];
  };
  title: string;
  value: number;
  currency: string;
  status: string;
  products_count: number;
  products: {
    code: number;
    description: string;
    unity: string;
    quantity: number;
    total_value: number;
  };
}

interface Response {
  pedido: {
    cliente: {
      nome: string;
      tipoPessoa: string;
      cpf_cnpj: string;
      ie_rg: string;
      fone: string;
      email: string;
    };
    itens: {
      item: {
        codigo: number;
        descricao: string;
        un: string;
        qtde: number;
        vlr_unit: number;
      };
    };
    situacao: string;
    totalvenda: number;
    vendedor: string;
  };
}

export default class Service {
  public async execute(): Promise<Response[]> {
    const wonDealsService = new WonDealsService();
    const wonDeals = await wonDealsService.execute();
    const wonDealsPerson = wonDeals.filter(deal => deal.person_id);
    const wonDealsPersonWithProducts = wonDealsPerson.map(deal => {
      const productsDeal = {
        code: getRandomInt(999, 1),
        description: 'Acordo',
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
        const newDeal = await createBling.execute(deal);
        return newDeal;
      });
    } catch (error) {
      console.log(error);
    }

    return parsedDeals;
  }
}
