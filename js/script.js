`use strict`;

const employers = [
	'АртеМ',
	'максим',
	'Владимир',
	'сергей',
	'НикиТа',
	'евГений',
	' Дарья',
	' ',
	'виктория ',
	'ЕкаТерина',
	'',
	' Андрей ',
	'КИРИЛЛ'
];
const nameCourse = 'Базовый React';
const command = employers
	.filter(val => (val.trim() !== '' ? val.trim() : ''))
	.map(item => (item.trim()[0].toUpperCase() + item.trim().toLowerCase().slice(1)));

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own = 0, ...args) => {
	own = own || 0;
	const everyCash = args[0];
	let total = own;
	everyCash.forEach(item => {
		total += +item;
	});
	return total;
};

const lesson = calcCash(null, data.cash);


const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	const sumTech = data.react.concat(data.add, 'и другие');
	console.log(
		`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`
	);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log(...sumTech);

};

makeBusiness(...['Артем', null, lesson, command, nameCourse]);
