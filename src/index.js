module.exports = function check(str, bracketsConfig) {
  let brackets = str.split('');
  // максимум возможные варианты обхода циклом 2 раза меньше длины списка так как при удалении убирается по два элемента
  let halfLength = Math.floor(brackets.length/2);
  for(let j=0; j<halfLength; j++){
    for(let i=0; i<bracketsConfig.length; i++){
      // преобразовываем пару скобок каждого элемента в строку для поиска в строке str
      let pairOfBrackets = bracketsConfig[i].join('');
      // спиок преобразуем в строку и находим центральные парные скопки
      let index = brackets.join('').indexOf(pairOfBrackets); 
      if(index !== -1) {
        brackets.splice(index, 2); // если есть пара скобок расположенные рядом то их вырезаем из списка
      }
    }
  }
  return brackets.length === 0;
}
