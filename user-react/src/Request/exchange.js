import request from '../Common/request';

export async function exchangeShop (data){
  console.log(data);
  const result = await request({
    url:'http://49.235.98.65:3000/shop/exchange',
    method:'put',
    data
  });
  return result;
}