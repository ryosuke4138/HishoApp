const ErrorMessages = {
  required: '必須項目です。',
  email: '正しいメールアドレスの形式でご入力ください。',
  password: '英字、数字を組み合わせた8文字以上16文字以内で入力。',
  url: 'URLの形式が間違っています。 例：https://example.com'
}

const Regex = {
  email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  password: /^(?=.*?[a-zA-Z])(?=.*?\d)[!-\~]{8,16}$/,
  url: /^(https?)(:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#]+)$/
}

export const required = value => (value || typeof value === 'number' ? undefined : ErrorMessages.required)

export const email = value => (value && !Regex.email.test(value) ? ErrorMessages.email : undefined)

export const password = value => (value && !Regex.password.test(value) ? ErrorMessages.password : undefined)

export const url = value => (value && !Regex.url.test(value) ? ErrorMessages.url : undefined)

export const extendValidator = text => func => (func ? text : undefined)