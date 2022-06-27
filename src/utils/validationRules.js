export const isRequered = (val) => ({
  hasPassed: !!val,
  message: "Поле не должно быть пустым"
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "Вы превысили лимит"
});

export const numberCheck = (val) => ({
  hasPassed: !isNaN(val),
  message: "Введите корректное число"
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: 'Неверный имейл',
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d]).{7,256}$/.test(val),
  message: 'Пароль должен содержать одну цифру и один символ',
});
