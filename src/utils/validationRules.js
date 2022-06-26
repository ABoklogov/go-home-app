export const isRequered = (val) => ({
  hasPassed: val,
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