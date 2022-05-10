import React from 'react';
import commonstyle from './../../common/style.module.css';
import style from './style.module.css';
import {wrapForm, DataEntry} from './../nigaForm/nigaForm';
import {email} from './../../components/nigaForm/validators'
import {tooltip} from './tooltip';
import {Input}from './input';

const Example = (props) => {

    return (
        <>  
            <div className={commonstyle.page}>
                <div className={commonstyle.content}>
                    <div className={style.exampleForm}>
                        <h2>Пример формы авторизации на сайте</h2>
                        <div className={style.login}>
                            <h3>Вход</h3>
                            <form onSubmit={props.submitEvent}>
                                <DataEntry dataСollection={props.dataСollection}
                                        validators={[email]}
                                        placeholder="Email"
                                        hint={tooltip}
                                        typedataentry={Input}
                                        required name="email"/>
                                        <br />
                                <DataEntry  dataСollection={props.dataСollection}
                                            placeholder='Пароль'
                                            hint={tooltip}
                                            required name="password"/>
                                <br />
                                <input type="submit" value="Войти" />
                            </form>
                        </div>
                        
                    </div>
                    <br />
                    <div>
                        <h3>Результат выполнения onSubmit</h3>
                        <div className={style.result} name="resultonsubmitfom">
                            Данные не были отправлены...
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
}
const wrapExample = wrapForm()(Example);
export default wrapExample;
