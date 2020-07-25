const getAllDeals = require('../providers/Pipedrive/getDeals');

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
  org_id: {
    name: string;
    address: string;
  };
  title: string;
  value: number;
  currency: string;
  status: string;
  products_count: number;
  won_time: Date;
}

export default class Service {
  public async execute(): Promise<data[]> {
    const { data } = await getAllDeals();
    const wonDeals = data.filter((deal: data) => deal.status === 'won');

    return wonDeals;
  }
}
