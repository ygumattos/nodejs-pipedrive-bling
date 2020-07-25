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
  title: string;
  value: number;
  currency: string;
  status: string;
  products_count: number;
}

interface Response {
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
}

export default class Service {
  public execute(deal: Request): Response {
    const parsedDeal = {
      cliente: {
        nome: deal.person_id.name,
        tipoPessoa: 'F',
        cpf_cnpj: '51547946059',
        ie_rg: '124281965',
        fone: deal.person_id.phone[0].value,
        email: deal.person_id.email[0].value,
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
    };

    return parsedDeal;
  }
}
