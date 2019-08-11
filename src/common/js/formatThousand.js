// 格式化，三位加一个逗号
export function formatThousand(arr) {
  let result = []
  arr.map((item) => {
    let num = []
    format(item)

    function format(item) {
      let left = Math.floor(item / 1000)
      let right = item % 1000
      num.unshift(right)
      if (left) {
        format(left)
      }
    }
    result.push(num.join(','))
  })
  return result
}
