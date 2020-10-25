import * as ActionType from '../../../Redux/ActionType';
import { userInfo } from '../../../Request/user';

export function loadUser (history){

  return async (dispatch)=>{

    try {
    //   dispatch({ type: ActionType.SHOW_LOADING });

      const  user  = await userInfo({ id:'5f91445b7cac8518b1099c2a' });

      dispatch({ type: ActionType.LOAD_USER, data: { user } });

    } catch (error) {

      //   dispatch({ type: ActionType.SHOW_MODAL,data:{ message: '出错了',func:()=>{
      history.push('/homepage');
    //   } } });
    }finally{
    //   dispatch({ type: ActionType.HIDE_LOADING });
    }

  };
}