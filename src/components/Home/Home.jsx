import React from 'react';
import commonstyle from './../../common/style.module.css';
import { NavLink } from 'react-router-dom';


const Home = () => {

    return (
        <>
            
            <div className={commonstyle.page}>
                <div className={commonstyle.content }>
                    <h1>Здравствуете!</h1>
                    <p className={commonstyle.p1}>
                        Предлагаем вашему вниманию удобную и простую библеотеку для настройки и валидации пользовательских форм. 
                        nigaForm - это hoc написанный простым и потнятным языком исспользующий для валидации формы React хуки.
                        Вы можете использовать встроенные поля html разметки а так же подключать свои собственные поля ввода 
                        как отдельные компоненты React.
                    </p>
                    <hr />
                    <p className={commonstyle.p2 }>
                        Вы можете узнать больше на примерах и из подробной документации
                    </p>
                    <div className={commonstyle.btn }>
                        <NavLink to="/documentation">Узнать больше</NavLink>
                    </div>
                </div>
                
            </div>
        </>
        )
}
export default Home;
