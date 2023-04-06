//16
{
let taskNumber = +prompt('Введите номер задания от 1 до 15');
if (taskNumber===1){
{
let num = +prompt('Введите целое число');//Ввод данных пользователем;
if(!Number.isInteger(num)){//Проверка на целое число;
    alert('Введенные данные не есть целое число');//Вывод сообщение если введено не целое число;
    }
    else if(num%2 === 0){
    alert('Число четное');}//Проверка на четность и вывод сообщения если число четное;
    
    else {
    alert('Число нечетное');//Вывод сообщения если число нечетное
    }
}
}
else if(taskNumber===2){
{
let text = prompt('Введите текст без некорректных слов!');//Ввод текста пользователем;
if(text.indexOf(' жопа')||text.includes('хутин')){//Проверка на некорректные слова;
    alert('Фу, как некрасиво!');//Вывод сообщения если такие слова присутствуют;
}
else {
    alert('Приятно иметь дело с культурным человеком!')//Вывод сообщения если некорректные слова отсутствуют;
    }
}
}
else if(taskNumber===3){
{
let question = prompt('Задайте дихотомический вопрос?');//Просим пользователя сформулировать вопрос;
let answer = confirm(question);//Задаем вопрос пользователю;
if (answer) {//При истинном условии т.е. при нажатии ОК;
    var yes = 'Да';//Присваиваем переменной ответ "Да";
    alert(yes);//Выводим ответ;
}
else {//При ложном условии т.е. при нажатии Cancel;
    var no = 'Нет';//Присваиваем переменной ответ "Нет";
    alert(no);//Выводим ответ;
    }
}
}
else if(taskNumber===4){
{
let question = 'Нравится ли Вам изучать JS?';//формулируем вопрос;
let answer = confirm(question);//Задаем вопрос пользователю;
if (answer) {//При истинном условии т.е. при нажатии ОК;
    var yes = 'Вы будущий кодер!';//Присваиваем переменной ответ "Да";
    alert(yes);//Выводим ответ;
}
else {//При ложном условии т.е. при нажатии Cancel;
    var no = 'Похоже Вы дизайнер';//Присваиваем переменной ответ "Нет";
    alert(no);//Выводим ответ;
}
}
}
else if(taskNumber===5){
{
let size = +prompt('Введите свой размер верхней одежды');//Ввод пользователем размера одежды;
if (size >= 38 && size <= 41){//условие по размеру S;
    alert('Ваш размер по сетке США S(6).');
}
else if (size >= 42 && size <= 43){//условие по размеру М;
    alert('Ваш размер по сетке США M(8).');
}
else if (size >= 44 && size <= 47){//условие по размеру L;
    alert('Ваш размер по сетке США L(10-14).');
}
else if (size >= 48 && size <= 53){//условие по размеру XL;
    alert('Ваш размер по сетке США XL(16-18).');
}
else if (size >= 54 && size <= 55){//условие по размеру XXL;
    alert('Ваш размер по сетке США XXL(14-18).');
}
else if (size > 55){//условие по большому размеру;
    alert('Вы великан!');
}
else {//условие по маленькому размеру;
    alert('Вы Дюймовочка!');
}
}
}
else if(taskNumber===6){
{
let sex = confirm('Вы мужчина?') ? alert('Вы мужчина') : alert('Вы женщина');//тернарный оператор определения пола;
}
}
else if(taskNumber===7){
{
!!2//true
!!0//false
!!1//true
// or
2 || 1//2
2 || 0//2
//and
2 && 1//1
1 && 2//2
0 && 2//0
// or and and difference
0 || 1 || 2//1
0 && 1 && 2//0
2 || 1 || 0//2
2 && 1 && 0//0
confirm('left') || confirm('right')//в зависимости от выбора пользователя: если нажать ок => true, если нажать cancel будет вычислен правый операнд при этом если нажать ок => true, если нажать cancel => false. 
confirm('left') && confirm('right')//в зависимости от выбора пользователя: если нажать ок будет вычислен правый операнд при этом если нажать ок => true, если нажать cancel => false, если нажать cancel слева => false. 
//null, undefined, so on
null || 2//2
undefined && 1//undefined
alert("Hello") && confirm('Are you sexy?');//выведется alert за тем резульат => undefined(разбирали на лекции).
alert("Hello") || confirm('Are you drunk?');//выведется alert за тем резульат в зависимости от выбора пользователя: если нажать ок => true, если нажать cancel => false;
//brackets and complex expressions
(undefined || 2) && (3 || 0)//3
(2 && 1) || (null && 0)//1
(2 > 1) && "greater"//"greater"
(2 < 1) && null//false
null && (2 < 1)//null
// ternary operator
1 ? "one" : "not one"//"one"
0 ? "zero" : "not zero"//"not zero"
"0" ? "\"zero\"" : "not `zero`"//""zero""
parseInt("0") ? 'true' : 'false'//'false'
("" || 2) && (3 || "3.5") || (4 && 5)//3
(-1 + 1) && "zero"//0
"-1" + 1 && "oups"//"oups"
(typeof null === 'object') ? "null is object" : "null is null"//"null is object"
// ternary && ||
Math.random() < 0.5 && 'less' || 'more'//в зависимости от вычисления Math.random(), если Math.random() будет < 0.5 резульат => 'less', если Math.random() будет > 0.5 резульат => 'more';
(a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a//в зависимости от вычисления Math.random(), если Math.random() будет < 0.5 резульат => 'less':`значение Math.random()`, если Math.random() будет > 0.5 резульат => 'more':`значение Math.random()`;
//in for array
[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found'//'prime'
}
}
else if(taskNumber===8){
{
let age = +prompt('Введите свой возраст')||alert('Введите корректный возраст');//ввод возраста пользователем или вывод ошибки если пользователь не введет возраст или нажмет отмену;
let birdthYear = (2023 - age);//~вычисление года рождения или сообщение с ошибкой;
    alert('Год рождения: ' + birdthYear);// вывдод ~ года рождения;
}
}
else if(taskNumber===9){
{
let shopBot = confirm('Шопинг?')||alert('Бяка!');//капризный робот;
}
}
else if(taskNumber===10){
{
let shopBot = confirm('Шопинг?');//капризный робот с if/else;
if(shopBot){
    alert('Ура!');
}
else {
    alert('Бяка!');
}
}
}
else if(taskNumber===11){
{
let surname = prompt('Введите фамилию')||'Петренко';//ввод фамилии;
let name = prompt('Введите имя')||'Петр';//ввод имени;
let lastname = prompt('Введите отчество')||'Петрович';//ввод отчества;
let fullName = alert(`${surname} ${name} ${lastname}`);//вывод ФИО
}
}
else if(taskNumber===12){
{
let surname = prompt('Введите фамилию');
if(!surname){
    surname='Петренко';
}
let name = prompt('Введите имя');
if(!name){
    name='Петро';
}
let lastname = prompt('Введите отчество');
if(!lastname){
    lastname='Петрович';
}
let fullName = alert(`${surname} ${name} ${lastname}`);//то же самое с if/else;
}
}
else if(taskNumber===13){
{
let login = prompt('Введите логин');//Ввод логина пользователем;
let password;//Объявление переменной для пароля;
if (login==='admin'){//Проверка логина на корректность;
    if (password = prompt('Введите пароль')==='qwerty'){//Вложенный if для проверки пароля;
        alert('Добро пожаловать!');//Вывод сообщения если пароль и логин правильные;
    }
    else {
        alert('Неверный пароль');//Вывод сообщения если пароль неверный;
    }
} 
else{
    alert('Неверный логин');//Вывод сообщения если логин неверный;
}
}
}
else if(taskNumber===14){
{
let cuurency = prompt('Введите название валюты');//Ввод названия валюты;
let exchangeType = confirm('Нажмите "Оk" для покупки валюты и "Отмена" для продажи');//Выбор операции
let rate;//Объявление переменной для курса;
if ((cuurency.toLowerCase())==='usd'){//Условие для доллара США;
    rate = (exchangeType ? 37.40 : 36.90);//Вычисление нужного курса;
    }
else if ((cuurency.toLowerCase())==='eur'){//Условие для Евро;
    rate = (exchangeType ? 40.80 : 40.00);//Вычисление нужного курса;
    }
else if ((cuurency.toLowerCase())==='pln'){//Условие для Злотого;
    rate = (exchangeType ? 8.82 : 8.43);//Вычисление нужного курса;
    }
let sum = +prompt('Введите сумму для обмена');//Ввод суммы для обмена;
let cuurencyExchange = exchangeType ?  sum/rate : sum*rate;//Вычисление операции обмена;
alert(cuurencyExchange);//Вывод результата;
}
}
else if(taskNumber===15){
{
let userValue = prompt('Введите значение: камень, ножницы, бумага или колодец');//Ввод значения пользователем;
let comuterValue = Math.random();//Вычисление значения компьютера;
if (comuterValue >0.75){
    comuterValue = 'колодец';
}
else if (comuterValue > 0.5 && comuterValue < 0.75){
    comuterValue = 'бумага';
}
else if (comuterValue > 0.25 && comuterValue < 0.5){
    comuterValue = 'ножницы';
}
else{
    comuterValue = 'камень';
}
alert(comuterValue);//Вывод значения компьютера;
if (userValue === comuterValue){//Ничья;
    alert('Ничья');//Вывод результата;
}
else if (userValue === 'камень' && comuterValue === 'колодец'||comuterValue === 'бумага'){//Вычисление победителя через условие;
    alert('Ты проиграл');//Вывод результата;
}
else if (userValue ==='камень'&& comuterValue==='ножницы'){//Вычисление победителя через условие;
    alert('Ты выиграл');//Вывод результата;
}
else if (userValue ==='ножницы' && comuterValue ==='колодец'||comuterValue === 'камень'){//Вычисление победителя через условие;
    alert('Ты проиграл');//Вывод результата;
}
else if (userValue === 'ножницы'&& comuterValue === 'бумага'){//Вычисление победителя через условие;
    alert('Ты выиграл');//Вывод результата;
}
else if (userValue==='бумага' && comuterValue === 'колодец'||comuterValue === 'камень'){//Вычисление победителя через условие;
    alert('Ты выиграл');//Вывод результата;
}
else if (userValue === 'бумага' && comuterValue === 'ножницы'){//Вычисление победителя через условие;
    alert('Ты проиграл');//Вывод результата;
}
else if (userValue === 'колодец' && comuterValue === 'ножницы'||comuterValue==='камень'){//Вычисление победителя через условие;
    alert('Ты выиграл');//Вывод результата;
}
else if (userValue === 'колодец' && comuterValue==='бумага'){//Вычисление победителя через условие;
    alert('Ты проиграл');//Вывод результата;
}
}
}
}
