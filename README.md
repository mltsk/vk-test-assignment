# Генератор форм
Демо: [https://mltsk.github.io/vk-test/](https://mltsk.github.io/vk-test/)
___

Генератор форм — модуль, преобразующая `JSON` с описанием контента формы — в готовую вёрстку.

Например этот `JSON`:

```json
{
 "form": {
  "action": "https://example.com",
  "method": "POST",
  "autocomplete": "off"
 },
 "button": {
  "text": "Отправить",
  "type": "submit"
 },
 "elements": [
  {
   "element": "input",
   "type": "text",
   "name": "last_name",
   "id": "last_name",
   "label": "Фамилия"
  }
 ]
}
```
преобразуется в такой `HTML`:

```HTML
<form action="https://example.com" method="POST" autocomplete="off">
<p>
<label for="last_name">Фамилия</label>
<input type="text" name="last_name" id="last_name">
</p>
<button type="submit">Отправить</button>
<style>
button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 36px;
    
    padding-top: 1px;
    padding-bottom: 1px;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 12px;
    
    font-family: Helvetica Neue, Roboto, sans-serif;
    color: #fff;
    
    background-color: rgb(81, 129, 184);
    border-radius: 4px;
    border: 0px;
}
    
button:hover {
    background-color: rgb(81, 129, 164);
}
    
button:active {
    background-color: rgb(61, 129, 164);
}

label {
    color: rgb(129, 140, 153);
    font-family: Helvetica Neue, Roboto, sans-serif;
    font-size: 14px;
    
    padding-top: 2px;
    padding-bottom: 6px;
}

p {
    display: flex;
    flex-wrap: wrap;
    
    margin: 0;
    padding-top: 12px;
    padding-bottom: 2px;
}

input {
    height: 34px;
    width: 100%;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 11px;
    padding-right: 11px;

    line-height: 20px;
    font-size: 15px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    background-color: #f7f8fa;
}

input:hover {
    border-color: #bcbdbe;
    outline: none;
}
    
input:focus {
    border-color: #5181b8;
    outline: none;
}
</style>
</form>
```

### Описание контента формы в JSON

В `JSON`'е описывается сама форма и её теги. В корне `JSON`'a должны находиться три обязательных __специальных свойства__: `form`, `button`, `elements`. `form` и `button` должны содержать объект со описанием соответствующего тега.
`elements` должен содержать массив объектов, которые описывают теги формы. 
Объект может содержать ___специальные__ и обычные свойства, где обычные свойства — это имя атрибута, а значение свойства соответствует значению атрибута.

__Специальные свойства__:

- `form` — должно находиться в корне JSON. Описывает тег from. 
<!-- Значение должно являться объектом. В объекте описываются атрибуты тега, где свойство объекта — это имя атрибута, а значение объекта соответствует значению атрибута.  -->

- `button` — должно находиться в корне JSON. описывает тег button, который располагается в конце вёрскти формы. 
<!-- Значение должно являться объектом. В объекте может находиться специальное свойство text, значение которое записывается в содержимое элемента. Остальные свойства описывают атрибуты тега, аналогично в `form`. -->

- `elements` — должно находиться в корне JSON и может находиться в других объектах. Значение должно содержать массив объектов, где каждый объект описывает тег. Свойство создаёт дочерние теги.
Родительским тегом является `from`, если свойство находиться в корне JSON. Если данное свойство находиться в объекте, родителем является тег, который описан данным объектом.

<!-- 
 Свойство описывает теги формы (если находиться в коре JSON'а) либо теги тега элементы тега, если находиться в объекте описания элемента. Значение должно содержать массив объектов, где каждый объект описывает элемент. -->

- `element` — значение задаёт название тега.
- `text` — значение задаёт содержимое тега.
- `label` — создает тег label и связывает его с тегом описанный в данном объекте.
- `legend` — создает дочерний тег legend, родителем является тег описанный в данном объекте. Значение задаёт содержимое тега.
- `option` — создает дочерний теги option, родителем является тег описанный в данном объекте. Используется при описание элемента select. Значение должно содержать массив. Массив может содержать как строки, так и объекты с описание элемента option.

__Пример:__

Фрагмент `JSON`:

```JSON
...
 {
   "element": "select",
   "name": "education",
   "id": "education",
   "option": [
    {
     "text": "Среднее",
     "disabled": "disabled"
    },
    "Высшее",
    "Второе"
   ]
  }
...
```

Фрагмент `HTML`:

```HTML
...
<select name="education" id="education">
<option disabled="disabled">Среднее</option>
<option>Высшее</option>
<option>Второе</option>
</select>
...
```


####Описание элементов в специальном свойстве `elements`:


__JSON__

```json
...
    "key": "123"
...
```