import crypto from 'utils/crypto.js'
// const token = '32d2fwefwefwfwefwewedsdae23e2'
const local = 'http://127.0.0.1:80/32d2fwefwefwfwefwewedsdae23e2'
const aws = 'http://3.66.84.141:80/32d2fwefwefwfwefwewedsdae23e2'

// async function request(sjson) {
// console.log('hello im "req" page')
// console.log(sjson)
const sendApi = async (sjson) => {
  // tanimsizda gonderme
  // if (sjson[0].key == undefined) { console.log('undefined key'); console.log(sjson[0].key); return false; }
  // bu 

  try {
    var strJsonn = JSON.stringify(sjson)
    var json = crypto.encode(strJsonn)
  } catch (error) {
    console.log(`json err`); console.log(error)
  }
  // console.log(sjson)
  return fetch(aws, {
    "method": "POST",
    "headers": {
      "key": "CZFR8Q7?OSwucyRaBG+FfNyKhxI3qlWClYHI5vBwl%5pIvuAfPIpi9H8cnT!T",
      "content-type": "application/json",
      "accept": "application/json"
    },
    "body": JSON.stringify([{ data: json }])
  })
    .then(response => response.json())
    .then(response => {
      try {
        response = response[0].data
        response = crypto.decode(response)
        response = JSON.parse(response)[0]
        console.log('///////-RESPONSE-///////')
        if (response == undefined) { console.log('response undefined'); return false }
        return response
      } catch (error) {
        console.log(`json err`); console.log(error)
        console.log(3)

        return false
      }
    })
    .catch(err => {
      console.log(err);
      console.log(4)
      return false
    });
}
//     console.log(5)

//     return await sendApi(sjson);
// }
export default sendApi;