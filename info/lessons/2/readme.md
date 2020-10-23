##Урок 2. Основы React - React, JSX.д7 Компоненты.


[Назад](./../../../README.md)
*****
*React*
-

***Вводная по React***

React — это библиотека JavaScript с открытым исходным кодом, 
которая используется для создания пользовательского интерфейса. 
Она была создана компанией Facebook.

Для чего разрабатывали реакт:
1. Базовая цель была разбить интерфейс на отдельные логические блоки в компоненты;
2. Быстродействие. Есть большая проблема у javascript - это работа с дом деревом. 
Постоянное обращение к дом дереву является ресурсо затратным и медленным процессом.
На маленьких приложениях это незаметно, но на больших это ощутимо. Данную задачу 
разработчики решили при помощи виртуалДом. Структура компонента создается с помощью 
реакт, реакт запоминает и при изменении какой то части, изменяет только эту часть, 
не изменяя остальные и это увеличило скорость рендеринга страницы. 
Задача у ***React*** одна - это отрисовка элементов на странице. Так как библиотека, 
это позволяет использовать дополнительные инструменты для приложения и ненавязывает 
инструменты.

*****
***VirtualDom***

например:

    {
        element: 'body',
        atttrbutes: null,
        children: [
            {
                element: 'header',
                atttrbutes: null,
                children: [
                    {
                        element: 'p',
                        atttrbutes: {
                            className: 'test1 test2'
                            style: 'asdfa',
                        },
                        children: 'Некоторые текст в p'
                    },
                    {...},
                ]
            },
            {
                element: 'main',
                atttrbutes: null,
                children: [
                    {...},
                    {...},
                ]
            },
        ]
    }
Так, грубо говоря, выглядит страница в **React**, он считает этот объект и выводит.

    const render React.createElement('div', null,
        React.createElement('header', null,
            React.createElement(
                'p', 
                {
                     className: 'test1 test2'
                     style: 'asdfa',
                 },
                 'Некоторые текст в p'
             )
        ),
        React.createElement('main', null,),
    )
    
    ReactDOM.render(что вставлять, куда вставлять)
    ReactDOM.render(render, document.getElementById('root'))


****

*JSX*
-
    const render React.createElement('div', null,
        React.createElement('header', null,
            React.createElement(
                'p', 
                {
                     className: 'test1 test2'
                     style: 'asdfa',
                 },
                 'Некоторые текст в p'
             )
        ),
        React.createElement('main', null,),
    )
    //ReactDOM.render(что вставлять, куда вставлять)
    ReactDOM.render(render, document.getElementById('root'))
Так делать было неудобно и стали использовать JSX

    const render React.createElement('div', null,
        React.createElement('header', null,
            React.createElement(
                'p', 
                {
                     className: 'test1 test2'
                     style: 'asdfa',
                 },
                 'Некоторые текст в p'
             )
        ),
        React.createElement('main', null,),
    )
    const renderJSX = (
        <div>
            <header>
                <p style = "asdfa" className="test1 test2"></p>
            </header>
            <main>
            </main>
        </div>
    );
    //ReactDOM.render(что вставлять, куда вставлять)
    ReactDOM.render(<renderJSX/>, document.getElementById('root'))
Такой синтаксис не поддерживается, для его поддержки необходимо использовать babel, чтобы babel
заработал с режимом CDN необходимо:

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script defer src='script,js" type="text/babel">
****
    const name = 'GENNA';
    
    //в названия свойств css - использовать camelCase
    //Таким образом мы передаем стили inline styles
    //Но для медиа запросов такой вариант не оч удобен
    const color = {
        color: 'fff000',
        fontSize: '30px',
    }
    
    const alertHello = () => {
        alert('Hello');
    };
    
    const renderJSX = (
        <div>
            <header>
                //Для написания метода также используется camelCase
                //по клику вызовется alertHello
                <p style = "{color}" className="test1 test2" onClick={alertHello} >{name}</p>
                //onClick - это не тот же метод который в js
            </header>
            <main>
            </main>
        </div>
    );
***Компоненты***
-
***Основные принципы React***

1. Декларативность
2. Основан на компонентах (Компоненты)
****
***Декларативность***

*Декларативность* - 
создавать интерактивные пользовательские интерфейсы на React — приятно и просто. 
Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях. 
React будет своевременно их обновлять, когда данные изменяются.
Декларативные представления сделают код более предсказуемым и упростят отладку.

Нам не нужно думать как и что работает, а только используете компоненты.
****
***Компоненты***

Создавайте инкапсулированные компоненты с собственным состоянием, 
а затем объединяйте их в сложные пользовательские интерфейсы.

Поскольку логика компонента написана на JavaScript, а не содержится в шаблонах, можно с 
лёгкостью передавать самые разные данные по всему приложению и держать состояние вне DOM.
    
    //script.js
    //renderJSX - это элемент
    const renderJSX = (
        <div>
            <header>
                <p style = "{color}" className="test1 test2" onClick={alertHello} >{name}</p>
            </header>
            <main>
            </main>
        </div>
    );
    
    ReactDOM.render(renderJSX, document.getElementById('root'))
**Компонент** - это функция или класс.
Теперь тот же код, только уже как компонент.
    
    //Название пишется с большой буквы
    const RenderJSX = () => (
        <div>
            <header>
                <p style = "{color}" className="test1 test2" onClick={alertHello} >{name}</p>
            </header>
            <main>
            </main>
        </div>
    );
    //<RenderJSX /> - так вставляется компонент, притом функциональный
    ReactDOM.render(<RenderJSX />, document.getElementById('root'))
****
***Функциональные компоненты и Пропсы***
    
    const name = 'GENNA';
    const color = {
        color: 'fff000',
        fontSize: '30px',
    }
    const alertHello = () => {
        alert('Hello');
    };
    // Hello - функциональный компонент
    const Hello 
        = ()
        => <p style = "{color}" className="test1 test2" onClick={alertHello} >{name}</p>; 
        //или
        //props - это объект, через который можно передовать любые данные
        = props
        => <p style = "{color}" className="test1 test2" onClick={alertHello} >{props.name}</p>;
    const RenderJSX = () => (
        <div>
            <header>
    //Работют все переменные и функции внутри Hello
                <Hello name="Genna 1" />  
    //все копии компонентов независимы друг от друга
                <Hello name="Genna 1"/>  
    //Name в данном случаи является props
                <Hello name="Genna 1" />  
            </header>
            <main>
            </main>
        </div>
    );
    //<RenderJSX /> - так вставляется компонент, притом функциональный
    ReactDOM.render(<RenderJSX />, document.getElementById('root'))
****
***Классовые компоненты***

    const name = 'GENNA';
    const color = {
        color: 'fff000',
        fontSize: '30px',
    }
    const alertHello = () => {
        alert('Hello');
    };
    // Hello - функциональный компонент
    const Hello = props => <p style = "{color}" className="test1 test2" onClick={alertHello} >{props.name}</p>;
    
    //extends React.Component - нужен для объявления класса
    //Такие компоненты (классовые) могут хранить состояния и изменять данные на лету
    Class RenderJSX extends React.Component{
        constructor(){
            super();
            this.state = {
                counter: 0
            }
        },
        //просто метод
        changeCounter(){
            //так как функция changeCounter - обработчик события то она не имеет контекста this
            this.state.counter += 1;
        }
        
        //render - возвращает верстку
        render(){
            return (
               <div>
                   <header>
                        <button style={color} onClick={this.changeCounter}>{this.state.counter}</button>
                        //Работют все переменные и функции внутри Hello
                       <Hello name="Genna 1" />  
                        //все копии компонентов независимы друг от друга
                       <Hello name="Genna 1"/>  
                        //Name в данном случаи является props
                       <Hello name="Genna 1" />  
                   </header>
                   <main>
                   </main>
               </div>
           )
        }
    };
    
    //<RenderJSX /> - так вставляется компонент, притом функциональный
    ReactDOM.render(<RenderJSX />, document.getElementById('root'))
    
Три метода исправления проблемы changeCounter с контекстом вызова и всеми ими пользуются:

    1. Метод из доки и самый простой:
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        this.changeCounter = this.changeCounter.bind(this)
    },
    //State меняется, но данные в шаблоне изменяются - будет ниже.

    2. Второй способ в он клик при помощи стрелочной функции вызвать через this changeCounter
    <button style={color} onClick={() => this.changeCounter}>{this.state.counter}</button>
    //State меняется, но данные в шаблоне изменяются - будет ниже.
    
    3. Способ, которым чаще пользуются, также через () => {}
    changeCounter = () => {
        //так как функция changeCounter - обработчик события то она не имеет контекста this
        this.state.counter += 1;
    }
    //State меняется, но данные в шаблоне изменяются - будет ниже.
    
Для того чтобы this.state.counter менялся, необходимо сообщить чтобы React заменил state, сейчас делается напрямую

    changeCounter = () => {
        //так мы  не меняем свойство, которое записано в state, мы сообщаем реакту, что хотим сделать перерендеринг
        //и реакт запланирует его и когда реакт сможет, он его сделает
        //setState - планирует обновления внутреннего состояния компонента и перерендеринг
        this.setState({
            counter: this.state.counter += 1;
        })
    }

****
***Словарик***
-
1. Инкапсуляция – это свойство системы, позволяющее объединить данные 
и методы, работающие с ними, (в классе, компоненте) и скрыть детали
реализации от пользователя.
                  
*****
[Назад](./../../../README.md)
