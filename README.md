# Rest и Spreat операторы. Диструктуризация. Классы.

****
***Rest оператор***

Три точки и обозначают рест оператор.
rest оператор - он собирает в массив все оставшиется переменные со всеми методами и свойствами.
Все не присвоенные операторы попадают в рест переменную.

    const foo = (a, b, ...rest) => {
    	console.log(rest);
    	console.log(a);
    	console.log(b);
    }
    foo(1,2,3,4,5,6);

****

***Spread оператор***

Три точки также обозначают и Spread оператор.
Очень похож на rest опертор, но используется в другом ключе.
Spread оператор - он размазывает наше значение из массива. 
По факту он объединяет массив и распихивает по значениям.

    const arrMy = [1, 2, 3];
    const multy = (a, b, c) => {
    	console.log(a);
    	console.log(b);
    	console.log(c);
    }
    multy(...arrMy);
    consol.log(...arrMy);
    consol.log(arrMy);
    
    
****

***Дистркуктуризация***

Диструктуризация применяется как к объектам так и к массивам.
По факту диструктуризаций, 
мы записываем в массив переменных данные из массива (Например: const [x,y,z] = [1,2,3];).
При диструктуризации можно также задавать значения по умолчанию.
Можно применять Rest оператор для записи значений.

    //с массивами
    сonst arr = [1,2,3];
    const [x,y,z] = arr; 
    const [x,,z] = arr;
    const [x = 2, y = 3, z = 1] = arr;
    const [x, ...newArrMy] = arr; 
    console.log(x,y,z);
    
    //с объектами
    const obj = {
        firstName: 'Ivan', 
        lastName: 'Ivanov', 
        secretId: '007'
    };
    const {firstName, lastName, secretId} = obj;
    console.log(firstName, lastName, secretId); //будет работать
Можно использовать значения по умолчанию. 

    const {firstName = 'Genna', lastName, secretId = '005'} = obj;
При дистркуктуризации объектов, необходимо, чтобы переменная называлась также как и свойство в массиве.
        
    const obj = {
        firstName: 'Ivan', 
        lastName: 'Ivanov', 
        secretId: '007'
    };
    //работать не будет
    const {first, last, key} = obj; 
    console.log(first, last, key);
    
Внутри дистркуктуризации можно применять вложенные диструктуризации. 
А также переимновывать.

    const obj = {
        firstName: 'Ivan', 
        lastName: 'Ivanov', 
        secretId: '007',
        films: [
            'Dr no',
            'SpiderMan',
            'GoldFinger'
        ],
        actor: {
            one: 'John',
            two: 'Ivan',
            three: 'Genna'
        }
    };
    const {
        firstName, 
        lastName: surname, 
        secretId,
        films: [oneFilm, , twoFilm],
        actor: {one: firstActor = 'DANYA', , two}
    } = obj;
    console.lgo(oneFilm);
    console.lgo(twoFilm);
    console.lgo(firstActor);
    console.lgo(two);
    console.lgo(films); //эта переменная не существует
    console.lgo(surname);
    console.lgo(lastName); //эта переменная не существует
Дистркуктуризацию можно применять при получении данных в функцию

    const obj = {
        firstName: 'Ivan', 
        lastName: 'Ivanov', 
        secretId: '007',
        films: [
            'Dr no',
            'SpiderMan',
            'GoldFinger'
        ],
        actor: {
            one: 'John',
            two: 'Ivan',
            three: 'Genna'
        },
    };
    const showAgent = agent => {
    	const {
    		firstName,
    		lastName: surname,
    		secretId,
    		films: [oneFilm, , twoFilm],
    		//actor: {one,three},
    		actor: {
    		    one: firstActor = 'DANYA',
    		    three: threeActor = 'Deda'
    		},
    	} = agent;
    	console.log(threeActor);
    	//console.log(three);
    };
    showAgent(obj);
Дистркуктуризацию можно использовать внутри круглых скобок.

    const obj = {
        firstName: 'Ivan', 
        lastName: 'Ivanov', 
        secretId: '007',
        films: [
            'Dr no',
            'SpiderMan',
            'GoldFinger'
        ],
        actor: {
            one: 'John',
            two: 'Ivan',
            three: 'Genna'
        },
    };
    const showAgent = ({
            firstName,
            lastName: surname,
            secretId,
            films,
            actor: {
                one: firstActor = 'DANYA',
                three: threeActor = 'Deda'
            },
        }) => {
    	console.log(threeActor);
    	console.log(films);
    };
    showAgent(obj);
    
    
****

***Class - классы***

Как раньше было до классов

    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    Car.prototype.showCar = function(name) {
        console.log('My name = ' + name +
        ', my car = ' + this.brand + ' ' + this.model)
    }
    var mercedes = new Car('Mers', 'GLC');
    mercedes.showCar('Genna')
Для наследования функиций должны были привязать контекст и привязать параметры.
После чего надо было скопировать прототип родителя и 

    function ElectroCar(brand, model, reserve) {
        Car.call(this, brand, model); //привязка контекста
        this.reserve = reserve; //создания перменной reserve для конструктора
    }
    ElectroCar.prototype = Object.create(Car.prototype)
    ElectroCar.prototype.constructor = Car //привязка конструктора
    const tesla = new ElectroCar('Tesla', 'X', 900);
    tesla.showCar('Genna');
    
Если выше код переписать в классы то получиться след:

    class Car {
        constructor(brand, model){
            this.brand = brand;
            this.model = model;
        }
        showCar(name) {
            console.log('My name = ' + name +
            ', my car = ' + this.brand + ' ' + this.model);
        }
    }

    
    
    
**Заметки**

- **Аргументов(arguments)** у стрелочных функций нет

- **функция apply()** в буквальном смысле позволяет нам выполнять 
функцию в массиве параметров, как-будто каждый параметр передаётся 
функции индивидуально, при её выполнении — отличное решение 
для вариативных функций; такие функции берут варьирующееся 
число аргументов, а не заданное количество, как делается в большинстве 
функций.
