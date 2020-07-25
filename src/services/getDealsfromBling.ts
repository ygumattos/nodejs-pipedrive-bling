import axios from 'axios';

interface Reponse {
  data: {
    retorno: {
      pedidos: [
        {
          pedido: {
            data: string;
            totalvenda: string;
            vendedor: string;
            cliente: {
              nome: string;
            };
            itens: [
              {
                item: {
                  descricao: string;
                };
              },
            ];
          };
        },
      ];
    };
  };
}

export default class Service {
  public async execute(): Promise<Reponse> {
    const url = `https://bling.com.br/Api/v2/pedidos/json?apikey=${process.env.TOKEN_BLING}`;
    const response = await axios({
      method: 'get',
      url,
    });
    return {
      data: response.data,
    };
  }
}
