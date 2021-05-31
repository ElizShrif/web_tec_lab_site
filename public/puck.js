// Изменение наименования раздела страницы
var parentDOM = document.querySelector(".nazv");
var testg = document.getElementsByClassName("nav__link")[0];
var tests = document.getElementsByClassName("nav__link")[1];
if(testg.classList.contains("nav__selected")) {
    parentDOM.textContent = testg.textContent;
}
if(tests.classList.contains("nav__selected")) {
    parentDOM.textContent = tests.textContent;
}

// Обработка события нажатия на кнопку формы
const send = document.querySelector('.submitt');
send?.addEventListener("click", async function (event) {
   // Предотвращаем перезагрузку страницы
   event.preventDefault();

   // Создаем объект формы
   const formNode = document.querySelector(".form_ncm");
   const form = new FormData(formNode);

   // Формируем тело запроса
   const body = {
      fam: form.get('fam'),
      name: form.get('name'),
      ot: form.get('ot'),
      film: form.get('fil'),
      serial: form.get('ser'),
      email: form.get('ema'),
   };

   // Отправляем запрос
   const response = await fetch('/api/aboutyourequest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
   });

   // Получаем ответ в виде текста
   const message = await response.text();

   //На основе полученного ответа, выводим результат на страницу 
   const p = document.createElement('p');
   p.textContent = message;
   formNode.insertAdjacentElement('beforeend', p);
});

// Обработка события нажатия на кнопку формы
/*var bt = document.querySelector(".submitt");

function nz(){
    var kuk = document.getElementsByClassName("nap")[0].value;
    var kuk1 = document.getElementsByClassName("nap2")[0].value;
    var kuk2 = document.getElementsByClassName("nap3")[0].value;
    str = "Добро пожаловать "+ kuk +" "+ kuk1 +" "+kuk2 + "!";
    alert(str);  
}
bt.onclick = nz;*/
// Создание анимации скрытия таблицы
var isHidden = false
var ny = document.querySelector(".nazv1");
$(".tab").hide();
ny.addEventListener('click', function () {
    $( ".tab" ).slideToggle(3000, function () {
        isHidden = !isHidden;
  
        $('.nazv1').css('color', isHidden ? 'rgb(247, 10, 10)' : '')
     });
 })
// Изменение размера и формы изображения
$(".im img").hover(
    function() {
    $(this).animate({
    width: "350px",
    height: "200px",
    borderRadius: "2%"
    }, "slow");
    }, function() {
    $(this).animate({
    width: "320px",
    height: "180px",
    borderRadius: "10%"
    }, "slow");
    }); 
   
// Сортировка таблицы по нажатию на заголовок столбца

let table = document.querySelector('.table')

table.querySelectorAll('th').forEach((th) => {
   const mySort = (isInverse = false) => {
      const stolb = th.cellIndex

      let sortedRows = Array.from(table.rows) //HTMLCollection => Array
         .slice(1) //отсекаем заголовки
         .sort((rowA, rowB) => {
            let a = isFinite(rowA.cells[stolb].textContent) ? +rowA.cells[stolb].textContent : rowA.cells[stolb].textContent
            let b = isFinite(rowB.cells[stolb].textContent) ? +rowB.cells[stolb].textContent : rowB.cells[stolb].textContent

            if (!isInverse) {
               return a > b ? 1 : -1
            } else {
               return a > b ? -1 : 1
            }
         });

      table.tBodies[0].append(...sortedRows);
   };

   th.addEventListener('click', () => {
      mySort()
   })

   th.addEventListener('dblclick', () => {
      mySort(true)
   })
})
