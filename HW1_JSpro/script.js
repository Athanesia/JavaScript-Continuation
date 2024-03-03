// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLinkElement = document.getElementById("super_link");
console.log(superLinkElement);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinkElements = document.querySelectorAll('.card-link');
cardLinkElements.forEach(element => {
    element.textContent = 'ссылка';
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardBodyElement = document.querySelector('.card-body');
if (cardBodyElement) {
    const cardLinkElementsInCardBody = cardBodyElement.querySelectorAll('.card-link');
    console.log(cardLinkElementsInCardBody);
} else {
    console.log('Элемент с классом "card-body" не найден.');
}

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const elementWithDataNumber50 = document.querySelector('[data-number="50"]');

if (elementWithDataNumber50) {
    console.log(elementWithDataNumber50);
} else {
    console.log('Элемент с data-number="50" не найден.');
}

// 5. Выведите содержимое тега title в консоль.
console.log(document.title);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
const cardTitleElement = document.querySelector('.card-title');
if (cardTitleElement) {
    console.log(cardTitleElement.parentNode);
} else {
    console.log('Элемент с классом "card-title" не найден.');
}

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const paragraphElement = document.createElement('p');
paragraphElement.textContent = 'Привет';
const cardElement = document.querySelector('.card');

if (cardElement) {
    cardElement.insertBefore(paragraphElement, cardElement.firstChild);
} else {
    console.log('Элемент с классом "card" не найден.');
}

// 8. Удалите тег h6 на странице.
const h6Element = document.querySelector('h6');

if (h6Element) {
    h6Element.remove();
} else {
    console.log('Элемент h6 не найден.');
}