//2
{
let answer = [confirm('Вы мужчина?'), confirm('Вы старше 18?'), confirm('Вы Харьковчанин(ка)?')];//Создание массива с последующим сохранением ответов в него;
}
//3
{
let answer = [];//Создаем массив;
answer[0] = prompt('Как Вас зовут ?');//Создаем 1 элемент массива;
answer[1] = prompt('Какая у Вас фамилия ?');//Создаем 2 элемент массива;
answer[2] = prompt('Как давно интересуетесь JS ?');//Создаем 3 элемент массива;
}
//4
{
const array = ['Number', 'String', 'Boolean', 'Array', 'Object', 'Function'];//Создаем массив;
let element = array[prompt('Введите индекс элемента или \'length\'')];//Просим пользователя ввести индекс элемента массива или его длинну;
}
//5
{
const array =[];
array[prompt('Введите индекс элемента')] = prompt('Введите значение элемента');//Просим пользователя ввести индекс элемента массива и его значение;
}
//6
{
const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];//Декларируем массив с вложенным массивом;
let result = alert('Произведение = ' + arr[prompt('Введите первый множитель')][prompt('Введите второй множитель')]);//Просим пользователя ввести множители и выводим произведение;
}
//7
{
const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];//Декларируем массив с вложенным массивом;
let first = arr[1].slice(1);//Возвращаем первый массив без 0;
let second = arr[2].slice(1);//Возвращаем второй массив без 0;
let third = arr[3].slice(1);//Возвращаем третий массив без 0;
let fourth = arr[4].slice(1);//Возвращаем четвертый массив без 0;
const newArr = [first,second,third,fourth];//Создаем массив из массивов без 0;
}
//8
{
let string = prompt('Введите строку из нескольких слов');//Ввод строки пользователем;
let word = prompt('Введите искомое слово');//Ввод искомого слова пользователем;
let split = string.split(' ');//разбиваем строку на несколько строк и возвращаем массив;
let index = split.indexOf(word);//Поиск индекса искомого слова в массиве;
    if (index>=0){//Условие при индексе больше или равно 0;
        alert (index+1);//Вывод номера по порядку искомого слова в строке(+1, т.к. программисты считают с 0);
    } else{//Условие при индексе меньше 0, включая -1;
        alert('Искомое слово не найдено');//Вывод сообщения если искомое слово не найдено;
    }
}
//9
{
const arr = [];//Декларируем пустой массив;
arr.push(prompt('Введите 1-й элемент'));//Ввод 1-го элемента и занесение его в конец массива;
arr.push(prompt('Введите 2-й элемент'));//Ввод 2-го элемента и занесение его в конец массива;
arr.push(prompt('Введите 3-й элемент'));//Ввод 3-го элемента и занесение его в конец массива;
arr.push(prompt('Введите 4-й элемент'));//Ввод 4-го элемента и занесение его в конец массива;
arr.push(prompt('Введите 5-й элемент'));//Ввод 5-го элемента и занесение его в конец массива;
const newArr = [];//Декларируем пустой массив;
newArr.push(arr.pop());//Заносим в конец нового массива вырезанный последний элемент;
newArr.push(arr.pop());//Заносим в конец нового массива вырезанный последний элемент;
newArr.push(arr.pop());//Заносим в конец нового массива вырезанный последний элемент;
newArr.push(arr.pop());//Заносим в конец нового массива вырезанный последний элемент;
newArr.push(arr.pop());//Заносим в конец нового массива вырезанный последний элемент;
alert(newArr);//Вывод реверсного массива;
//10
const reverseArr = [];
reverseArr.unshift(newArr.shift());//Заносим в начало нового массива вырезанный первый элемент;
reverseArr.unshift(newArr.shift());//Заносим в начало нового массива вырезанный первый элемент;
reverseArr.unshift(newArr.shift());//Заносим в начало нового массива вырезанный первый элемент;
reverseArr.unshift(newArr.shift());//Заносим в начало нового массива вырезанный первый элемент;
reverseArr.unshift(newArr.shift());//Заносим в начало нового массива вырезанный первый элемент;
alert(reverseArr);//Вывод реверсного массива;
}
//11
{
const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];//Декларируем массив с вложенным массивом;
const arr2 = arr.slice();//создание неглубокой копии массива;
const arr3 =[...arr];//или так;
}
//12
{
const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];//Декларируем массив с вложенным массивом;
const arr2 = JSON.parse(JSON.stringify(arr));//создание глубокой копии массива;
}
//13
{
const arr1 = ['A', 'r', 'r', 'a', 'y'];//Декларируем массив;
const arr2 = arr1;//Присваеваем ссылку на массив в переменную;
alert(arr1 === arr2);//Сравниваем переменные;
}
//14
{
const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];//Декларируем массив с вложенным массивом;
const newArr = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]];//Создаем единый массив из элементов подмассивов;
}
//15
{
let str = prompt('Введите строку');//Ввод строки пользователем;
const [first, , , fourth, , , , , ninth] = str;//Деструктуризация;
alert(first + fourth + ninth);//Вывод искомых значений;
}
//16
{
let str = prompt('Введите строку');//Ввод строки пользователем;
const [, second = '!', , fourth = '!', fifth = '!'] = str;//Деструктуризация;
alert(second + fourth + fifth);//Вывод искомых значений или значений по умолчанию;
}
//17
{
const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];//Декларируем массив с вложенным массивом;
const[ ,[, ...first],[, ...second],[, ...third],[, ...fourth]] = arr;//Вложенная деструктуризация с обрезкой нолей;
const newArr = [...first, ...second, ...third, ...fourth];//Создаем новый массив путем вклейки элементов обрезанных массивов;
}
//18
{
const arr = ["John", "Paul", "George", "Ringo"];//Декларируем массив имен;
for (let item of arr) {//Перебираем циклом каждый элемент массива;
    alert(item);//Выводим каждый элемент массива;
}
}
//19
{
const currencies = ["USD", "EUR", "GBP", "UAH"];
let   str = "<select>";
for (let currency of currencies){
str += `<option>${currency}</option>`//Добавляем в переменную код для создания выпадающего списка;
}
str+= "</select>";
document.write(str);
}
//20
{
const names = ["John", "Paul", "George", "Ringo"];
let   str = "<table>";
for (const name of names){
str += `<td>${name}</td>`;//Добавляем в переменную код для создания ячеек таблицы по горизонтали;
}
str+= "</table>";
document.write(str);
}
//21
{
const names = ["John", "Paul", "George", "Ringo"];
let   str = "<table>";
for (let name of names){
str += `<tr><td>${name}</td></tr>`;//Добавляем в переменную код для создания ячеек таблицы по вертикали;
}
str+= "</table>";
document.write(str);
}
//22
{
const currencies = ["USD", "EUR", "GBP", "UAH"];
let   str = "<table>";
for (let currency of currencies){ //цикл создает строки;
    str +=`<tr>${currency}</tr>`;//создаем строки;
    console.log(currency);
    for (let letter of currency){ //цикл создает ЯЧЕЙКИ в ОДНОЙ СТРОКЕ;
        str +=`<td>${letter}</td>`;//создаем ячейки с буквами в каждой строке;
        console.log(letter);
    }
}
str+= "</table>";
document.write(str);
}
//23
{
const arr = [[0, 0, 0, 0, 0], [0, 1, 2, 3, 4], [0, 2, 4, 6, 8], [0, 3, 6, 9, 12], [0, 4, 8, 12, 16]];
let   str = "<table>";
for (let element of arr){ //цикл создает строки;
    str +=`<tr></tr>`;//создаем пустые строки;
    for (let item of element){ //цикл создает ячейки в одной строке;
        str +=`<td>${item}</td>`;//создаем ячейки с цифрами в каждой строке;
    }
}
str+= "</table>";
document.write(str);
}
//24
{
const capitalize = str => {
    let result
    result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();//Вводим код, который будет исполняться при запуске функции;
    return result //именно этот код обеспечит возврат результата функции
}
console.log(capitalize("cANBerRa")) //Canberra
}
//25
{
let str = prompt('Введите строку');//ввод строки;
const arr = str.split(' ');//разбиваем строку по пробелам;
let upString = arr.map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase());//Вводим код, который будет исполняться при запуске функции;
let result = upString.join(' ');//склеиваем строку;
alert(result);//выводим результат;
}
//26
{
const forbidden = ['хутин', 'рф', 'че', 'ВК', 'одноклассники', 'Яндекс'];//Декларируем массив запрещенных строк;
let str = prompt('Введите строку');//ввод строки;
const arr = str.split(' ');//разбиваем строку по пробелам;
const result = arr.filter((item) => !(forbidden.includes(item)));//Фильтруем массив на наличие запрещенных строк;
alert(result.join(' '));//выводим строку без запретных слов;
}
//27
{
const forbidden = ['хутин', 'рф', 'че', 'ВК', 'одноклассники', 'Яндекс'];//Декларируем массив запрещенных строк;
let str = prompt('Введите строку');//ввод строки;
let arr = str.split(' ');//разбиваем строку по пробелам;
const intersection = arr.map(item => forbidden.includes(item) ? 'BEEP' : item);//Используя map и тернарный оператор возвращаем из функции слово без изменений или BEEP;
let result = intersection.join(' ');//склеиваем строку;
alert(result);//выводим результат;
}
//28
{
const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";
    str += currencies.reduce( (a,b) => `${a} + <option>${b}</option>`,"");//Реализуем через reduce;
    str += "</select>"
str += "</select>";
document.write(str);
}
//29
{
    const line = prompt()
    const bracketsStack = []
    let   i             = 0
    for (let character of line){
        //не обращайте внимания на символы, кроме трех видов скобок 
        if (character === '('||character === '['||character === '{'){
            bracketsStack.push(character);//добавляем в стек открывающие скобки;
        }
        else if ((character === ')'&&bracketsStack[bracketsStack.length -1] === '(')||(character === ']' && bracketsStack[bracketsStack.length -1] === '[')||(character === '}' && bracketsStack[bracketsStack.length -1] === '{')){//если встречаем закрывающую скобку - удаляем из массива открывающую;
            bracketsStack.pop(character);
        }
        else if (character === ')'&&bracketsStack[bracketsStack.length -1] !== '('||character === ']'&&bracketsStack[bracketsStack.length -1] !== '['||character === '}'&&bracketsStack[bracketsStack.length -1] !== '{'){//если встечаем несоответствие, выводим ошибку;
            alert(`Error: ${line.indexOf(character)} in line`);
            break; //оператор break прерывает цикл преждевременно
        }
        if (bracketsStack.length === 0){
            alert('Congratulations!');//если в итоге имеем пустой массив, выводим поздравление;
        }
        }
    i++
}