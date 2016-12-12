import formatConfig from './formatConfiguration';
import formatSchema from './formatSchema';

export default function init(config,schema){
  const c= formatConfig(config);
  const s= formatSchema(schema);
  return {
      verion:0.1,
      type:'ios'
    }
  }
