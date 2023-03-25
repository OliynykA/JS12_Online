{ // Расчет количества багов в коде *по методике Bill Gates
    let numCodeStr = prompt("Введите количество строк кода"); //ввод количества строк кода пользователем.
    let debugCodeFault = +numCodeStr; //вычисление количества ошибок при отладке каждой строки кода. 
    let noDebugCodeFault = Number(numCodeStr)**2; //вычисление количества ошибок без отладки кода.
    let resultDebugCodeNum = alert(debugCodeFault); //вывод результата для кода с отладкой.
    let resultNoDebugCodeNum = alert(noDebugCodeFault); //вывод результата для кода без отладки.
}