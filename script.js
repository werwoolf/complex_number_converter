document.querySelector('.butAlgToShow').onclick = transAlgToShow;

function transAlgToShow() {
    // получаю значение из поля ввода
    let a = document.querySelector('.material').value;
    let b = document.querySelector('.imaginary').value;
    // преобразование полученого значения в числовой формат и получение его модуля
    a = +a; a = Math.abs(a);
    b = +b; b = Math.abs(b);

    let c = Math.sqrt(a*a + b*b);
    let d = (Math.atan2(b , a));
    let e = d * 180/Math.PI;
    // вывод результата
    document.querySelector('.out').innerHTML = c.toFixed(2);
    document.querySelector('.outgr').innerHTML = e.toFixed(2);
   
};


document.querySelector('.butShowToAlg').onclick = transShowToAlg;
function transShowToAlg() {
    // получаю значение из поля ввода
    let a = document.querySelector('.valueCompleks').value;
    let b = document.querySelector('.valueGradus').value;
   
    // действительная часть
    let c = a * (Math.cos(b*Math.PI/180));
    let d = a * (Math.sin(b*Math.PI/180));
    console.log(Math.cos(b*Math.PI/180));
    console.log(Math.sin(b*Math.PI/180));
    // вывод результата
    document.querySelector('.outMaterial').innerHTML = c.toFixed(2);
    document.querySelector('.outImaginary').innerHTML = d.toFixed(2);
   
};
