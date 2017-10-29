export default {
  validate: {
    checkMobile: (rules, value, callback) => {
      if (/^1[0-9]{10}$/.test(value)) {
        callback()
      } else {
        callback('请输入合法的手机号')
      }
    }
  }
}
