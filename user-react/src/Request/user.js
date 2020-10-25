import request from '../Common/request';

export async function userInfo (data){
//   console.log(data);
  const result = await request({
    url:'http://49.235.98.65:3000/user/userInfo',
    method:'get',
    data
  });
  return result;
}