# Генератор форм
__Демо:__ [https://mltsk.github.io/form-generator/](https://mltsk.github.io/form-generator/)
___

Генератор форм — модуль, преобразующий `JSON` с описанием контента формы — в готовую вёрстку.

## Установка:
Скопируйте репозиторий

```
git clone https://github.com/mltsk/vk-test-assignment.git
```
Импортируйте функцию `formGenerator`.

```Javascript
<script type="module">
    import formGenerator from "./module/formGenerator.js";
</script>
```
Функция `formGenerator` принимает `JSON` и возвращает `HTML` и `CSS`.


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
преобразуется в такой `HTML` и `CSS`:

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

Стили добавляются автоматически в зависимости от используемых элементов.
## Описание контента формы в JSON

В `JSON`'е описывается сама форма и её теги. В корне `JSON`'a должны находиться три обязательных __специальных свойства__: `form`, `button` и `elements`. `form` и `button` должны содержать _объект_ со описанием соответствующего тега.
`elements` должен содержать массив _объектов_, которые описывают теги формы. 

_Объект_, описывающий теги, может содержать __специальные__ и обычные свойства, где обычные свойства — это имя атрибута элемента, а значение свойства соответствует значению атрибута элемента.

### Специальные свойства:

- `form` — должно находиться в корне JSON. Описывает тег from. 

- `button` — должно находиться в корне JSON. описывает тег button, который располагается в конце вёрскти формы. 

- `elements` — должно находиться в корне JSON и может находиться в других объектах. Значение должно содержать массив объектов, где каждый объект описывает тег. Свойство создаёт дочерние теги.
Родительским тегом является `from`, если свойство находиться в корне JSON. Если данное свойство находиться в объекте, то родителем является тег, который описан данным объектом.

__Пример:__<br>
`JSON`:

```JSON
{
 "form": {
  "action": "https://example.com",
  "method": "GET"
 },
 "button": {
  "text": "Найти",
  "type": "submit"
 },
 "elements": [
  {
   "element": "input",
   "type": "text",
   "name": "search"
  }
 ]
}
```

`HTML`:

```HTML
<form action="https://example.com" method="GET">
    <input type="text" name="search">
    <button type="submit">Найти</button>
</form>
```

- `element` — значение задаёт название тега.
- `text` — значение задаёт содержимое тега.

__Пример:__<br>
Фрагмент `JSON`:

```JSON
...
  {
   "element": "button",
   "type": "reset",
   "text": "Сбросить"
  }
...
```

Фрагмент `HTML`:

```HTML
...
<button type="reset">Сбросить</button>
...
```
- `label` — создает тег label и связывает его с тегом описанный в данном объекте.

__Пример:__<br>
Фрагмент `JSON`:

```JSON
...
  {
   "element": "input",
   "type": "text",
   "name": "first_name",
   "id": "first_name",
   "label": "Имя"
  }
...
```

Фрагмент `HTML`:

```HTML
...
<label for="first_name">Имя</label>
<input type="text" name="first_name" id="first_name">
...
```
- `legend` — создает дочерний тег legend, родителем является тег описанный в данном объекте. Значение задаёт содержимое тега.

__Пример:__<br>
Фрагмент `JSON`:

```JSON
...
  {
   "element": "fieldset",
   "legend": "День рождение",
   "elements": [
    {
     "element": "input",
     "type": "number",
     "name": "day",
     "placeholder": "31"
    }
   ]
  }
...
```

Фрагмент `HTML`:

```HTML
...
<fieldset>
    <legend>День рождение</legend>
    <input type="number" name="day" placeholder="31">
</fieldset>
...
```

- `option` — создает дочерний теги option, родителем является тег описанный в данном объекте. Используется при описание элемента select. Значение должно содержать массив. Массив может содержать как строки, так и объекты с описание элемента option.

__Пример:__<br>
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
    "Незаконченное высшее"
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
    <option>Незаконченное высшее</option>
</select>
...
```
