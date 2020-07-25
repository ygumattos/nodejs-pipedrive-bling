import Response from '../interfaces/FormatToBlingInterface';

const { toXML } = require('jstoxml');

export default function convertXml(data: Response): any {
  return toXML(data);
}
