export default interface Response {
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
    date: Date;
  };
}
