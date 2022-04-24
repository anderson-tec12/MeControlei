type register = {
  name:string;
  value:number;
  type: 'outflows' | 'deposit',
  date: Date,
  isPay:boolean,
  create_at:Date,
  update_at:Date
}


type collection = register[]