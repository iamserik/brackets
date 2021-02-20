module.exports = function check(str, bracketsConfig) {
  let brackets = str;
  // максимум возможные варианты обхода циклом 2 раза меньше длины списка так как при удалении убирается по два элемента
  let halfLength = Math.floor(brackets.length/2);
  for(let j=0; j<halfLength; j++){
    for(let i=0; i<bracketsConfig.length; i++){
      // преобразовываем пару скобок каждого элемента в строку для поиска в строке str
      // Меняем рядом стоящих скобок на пустую строку (удаляем парные скобки)
      brackets = brackets.replace(bracketsConfig[i].join(''), '');
    }
  }
  return brackets.length === 0;
}
