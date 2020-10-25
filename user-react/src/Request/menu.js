import request from '../Common/request';

export async function menuList (){
//   console.log(data);
  const result = await request({
    url:'http://49.235.98.65:3000/shop/shopList',
    method:'get',
  });
  return result;
}