//1
{
let name = prompt('What is your name?');// ввод имени пользователем;
alert(`Hello, ${name}!`);// приветствие;
}
//2
{
let str = prompt('Введите фразу');//ввод фразы;
alert(str.split(',').join(', блин'));//вывод, блин;
}
//3
{
    let str = prompt('Введите строку');//ввод строки;
    let firstSymbol = str.slice(0, 1).toUpperCase();//вырезаем первый символ и делаем его заглавным;
    let otherString = str.slice(1).toLowerCase();//вырезаем остаток строки и делаем его в нижнем регистре;
    let result = alert(firstSymbol+otherString);//вывод строки;
}
//4
{
    let str = prompt('Введите строку');//ввод строки;
    alert(str.split(' ').length);//вывод длинны массива;
}
//5
{
    let surname = prompt('Введите фамилию');//ввод фамилии;
    let name = prompt('Введите имя');//ввод имени;
    let lastname = prompt('Введите отчество');//ввод отчества;
    let newSurname = surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase();//capitalize фамилии;
    let newName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();//capitalize имени;
    let newLastname = lastname.slice(0, 1).toUpperCase() + lastname.slice(1).toLowerCase();//capitalize отчества;
    let fullName = alert(`${newSurname.trim()} ${newName.trim()} ${newLastname.trim()}`);//вывод ФИО

}
//6
{
    let str = "Было жарко. Василий пил пиво вприкуску с креветками";//строка по умолчанию;
    let result = str.replace('пиво', 'чай');//реплейс;
    alert(result);//вывод результата;
}
//7
{
    let str = "какой-то текст в котором есть один тэг <br/> и всякое другое";//строка по умолчанию;
    let index1 = str.indexOf('<br/>');//вычисление индекса тега;
    let index2 = '<br/>'.length;//вычисление длинны тега;
    let index3 = index1 + index2;//вычисление индекса конца тега;
    let result = str.slice(0, index1) + str.slice(index3);//склейка фрагментов без тега;
    alert(result);// вывод результата;
}
//8
{
    let str = "какой-то текст в котором есть один тэг <br/> и всякое другое";//строка по умолчанию;
    let index1 = str.indexOf('<br/>');//вычисление индекса тега;
    let index2 = '<br/>'.length;//вычисление длинны тега;
    let index3 = index1 + index2;//вычисление индекса конца тега;
    let result = str.slice(0, index1) + str.slice(index1,index3).toUpperCase() + str.slice(index3);//склейка фрагментов c заглавным тегом;
    alert(result);// вывод результата;
}
//9
{
    let str = prompt('Введите строку');//ввод строки;
    let arr = str.split('\\n');//разделение строки в массив;
    let result = arr.join('\n');//используем перенос строки в качестве разделителя
    alert(result);// вывод результата;
}
//10
{
    let youTube = prompt('Введите ссылку с видео');//вводим ссылку на видео;
    const regExp = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/;//пишем регулярное выражение для проверки ссылки;
    let arr = youTube.match(regExp);//применяем регулярное выражение для проверки ссылки;
    let video_ID = arr.join([1]);//извлекаем ID видоса;
    document.write(`<iframe width="560" height="315" src="https://www.youtube.com/embed/${video_ID}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);//отправляем видос на страницу;
}