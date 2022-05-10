import React from 'react';
import commonstyle from './../../common/style.module.css';
const Documentation = () => {
    return (
        <>
            &#123; &#125;
            <div className={commonstyle.page}>
                <div className={commonstyle.content}>
                    <h3>Documentation</h3>
                    <p className={commonstyle.p2}>
                        Для подключения функции нужно импортировать библиотеку. 
                    </p>
                    <div className={commonstyle.textCode}>
                        import &#123; wrapForm, DataEntry &#125; from './../nigaForm/nigaForm';
                    </div>
                    <p className={commonstyle.p2}>
                        Настройка использования:
                    </p>
                    <p className={commonstyle.p2}>
                        Добавить форме обработчик события <span style={{"color":"red"}}>onSabmit=&#123; props.submitEvent &#125;</span> 
                    </p>
                    <p className={commonstyle.p2}>
                        Обернуть компанент HOCком wrapForm 
                    </p>
                    <div className={commonstyle.textCode}>
                        const wrapExample = wrapForm()(Example);<br />
                        export default wrapExample;
                    </div>
                    <p className={commonstyle.p2}>
                         В nigaForm для указания полей используеться компанент  &lt;DataEntry/&gt; <br />
                         ему необходимо указаь обязательный обработчик событий <span style={{"color":"red"}}>dataСollection=&#123;props.dataСollection&#125;</span>
                    </p>
                    <p className={commonstyle.p2}>
                         Если вы хотите указать что это поле обязательно для заполнения укажите <b>required</b> <br />
                         обязательным полем как и в стандартной форме являеться поле <b>name="email"</b>
                         так же как и в стандартном импуте, поля <b>placeholder</b>  доступно для указания
                    </p>
                    <p className={commonstyle.p2}>
                        Для валидации полей формы, используются встроенные и пользовательские валидаторы, встроенный <b>required</b>
                        и прочие , полный список стандарных валидаторов можно посмотреть <span style={{"color":"red"}}>здесь</span>
                    </p>
                    <p className={commonstyle.p2}>
                         Пример пользовательской валидации:
                    </p>
                    <div className={commonstyle.textCode}>
                    import &#123;email&#125; from './../../components/nigaForm/validators';
                    <br /><br />
                    export const email = (text, error = '') = &gt; &#123; <br />
                           if (text.length === 0) return error; <br />
                           let re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]&#123;2,4&#125;$/i; <br />
                           if (!re.test(text)) error = 'Email не корректен'; <br />
                           return error <br />
                        &#125; <br />
                    </div>
                    <p className={commonstyle.p2}>
                        Код:
                    </p>
                    <div className={commonstyle.textCode}>
                    import React from 'react';<br />
                    import commonstyle from './../../common/style.module.css';<br />
                    import style from './style.module.css';<br />
                    import &#123;wrapForm, DataEntry&#125; from './../nigaForm/nigaForm';<br />
                    import &#123;email&#125; from './../../components/nigaForm/validators'<br />
                    import &#123;tooltip&#125; from './tooltip';  <br />
                    <br /><br />
                    &lt;form onSubmit=&#123;props.submitEvent&#125;&gt;<br />
                    &lt;DataEntry dataСollection=&#123;props.dataСollection&#125;<br />
                                        validators=&#123;[email]&#125;<br />
                                        placeholder="Email"<br />
                                        hint=&#123;tooltip&#125;<br />
                                        required name="email"/&gt;<br />
                                      <br />
                                        &lt;DataEntry  dataСollection=&#123;props.dataСollection&#125;<br />
                                            placeholder='Пароль'<br />
                                            hint=&#123;tooltip&#125;<br />
                                            required name="password"/&gt;<br />
                                <br />
                                &lt;input type="submit" value="Войти" /&gt;<br />
                                &lt;/form&gt;<br />
                    </div>
                    <p className={commonstyle.p2}>
                        <b>hind</b> - это еще один пользовательский элемент который позовяет 
                        настраивать стиль и расположение сообщений с ошибками его как и валидаторы импортировать 
                        в компонент . <br />
                        Для правильной работы <b>hind</b> необходимо указать в компаненте <b>div</b> блок  с атрибутом  
                        <b>divmessagename</b>

                    </p>
                    <div className={commonstyle.textCode}>
                    import React from 'react';<br />
                    export const tooltip=(props)=&gt;&#123;<br />
                    return(<br />
                         &lt;div divmessagename=&#123;props.name&#125;&gt;&#123;props.message&#125;&lt;/div&gt;<br />
                     )break
                    &#125;<br />
                    </div>
                    <p className={commonstyle.p2}>
                        <b>typedataentry</b> - этот атрибут дает возможность использовать пользовательские поля 
                        ввода импортированые как компоненты. Все что нужно сделать это деструктиризовать полученные пробсы. 
                    </p>
                    <p className={commonstyle.p2}>
                        Пример пользовательской компаненты поля input 
                    </p>
                    <div className={commonstyle.textCode}>
                        import React from 'react';<br />
                        import cn from './style.module.css';<br />
                        export const Input =(props)=&gt;&#123; <br />

                        return(&lt;div&gt;<br />
                            &lt;input type="text" name="email" placeholder='Emailuser' &#123;...props&#125; className=&#123;cn.inpt&#125; /&gt;<br />
                            &lt;/div&gt;<br />
                            
                        ) <br />
                        &#125;<br />
                    </div>
                    <p className={commonstyle.p1}>
                        Да прибудет с вами сила!
                    </p>
                </div>
            </div>
        </>
        )
}
export default Documentation;


