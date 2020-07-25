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
  title: string;
  value: number;
  currency: string;
  status: string;
  products_count: number;
}

export default class Service {
  public async execute(): Promise<data[]> {
    const { data } = await getAllDeals();
    const wonDeals = data.filter((deal: data) => deal.status === 'won');
    // const parsedWonDeals = wonDeals.map((deal: data) => {
    //   return {
    //     user_id: {
    //       name: deal.user_id.name,
    //     },
    //     title: deal.title,
    //     value: deal.value,
    //     currency: deal.currency,
    //     status: deal.status,
    //   };
    // });

    return wonDeals;
  }
}
