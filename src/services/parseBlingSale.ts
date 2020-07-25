import Response from '../interfaces/FormatToBlingInterface';
import generateCPF from '../common/generateCPF';

interface Request {
  products: {
    code: number;
    description: string;
    unity: string;
    quantity: number;
    total_value: number;
  };
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
  public execute(deal: Request): Response {
    const parsedDeal = {
      pedido: {
        cliente: {
          nome: deal.person_id ? deal.person_id.name : deal.org_id.name,
          tipoPessoa: deal.person_id ? 'F' : 'J',
          cpf_cnpj: generateCPF('cpf'),
          ie_rg: generateCPF('rg'),
          fone: deal.person_id ? deal.person_id.phone[0].value : '',
          email: deal.person_id ? deal.person_id.email[0].value : '',
          endereco: deal.person_id ? '' : deal.org_id.address,
        },
        itens: {
          item: {
            codigo: deal.products.code,
            descricao: deal.products.description,
            un: 'un',
            qtde: 1,
            vlr_unit: deal.products.total_value,
          },
        },
        situacao: 'Em aberto',
        totalvenda: deal.products.total_value,
        vendedor: deal.user_id.name,
        date: deal.won_time,
      },
    };

    return parsedDeal;
  }
}
