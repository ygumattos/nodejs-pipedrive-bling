import axios, { AxiosResponse } from 'axios';
import 'dotenv/config';
import Response from '../interfaces/FormatToBlingInterface';
import convertXML from '../common/convertXML';

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
