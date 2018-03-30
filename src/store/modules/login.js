/**
 * Created by Administrator on 2018/3/31.
 */
import {sysLogin} from '../../api/getData'

const actions = {
  sysSignin ({commit},payload) {
    let result = sysLogin(payload)

  }
}
