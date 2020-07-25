import axios, { AxiosResponse } from 'axios';
import 'dotenv/config';

const convertXML = require('../common/convertXML');

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
  public async execute(data: Response): Promise<AxiosResponse> {
    const xml = convertXML(data);
    const encodedXML = encodeURI(xml);
    const url = `https://bling.com.br/Api/v2/pedido/json?apikey=${process.env.TOKEN_BLING}&xml=${encodedXML}`;
    const response = await axios({
      method: 'post',
      url,
    });
    return response;
  }
}
