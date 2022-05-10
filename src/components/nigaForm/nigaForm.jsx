import React from 'react';
import { useState, useEffect } from 'react';

const errorShow = {
    display: "block",
    color:"green"

}
const errorHide = {
    display: "none",
    color:"red"

}

const toString=(ins)=> {
    if(typeof ins === "object" && ins.length === undefined) {
        var pieces = [];
        for (var prop in ins) {
            if (ins.hasOwnProperty(prop)) {
                pieces.push(prop + ":" + ins[prop]);
            }
        }
        return pieces.join("; ");
    }
}

export const wrapForm = () => (WrappedComponent) => {

   class HOC extends React.Component {
        
       constructor(props) {
           
            super(props);
            this.dataСollection = this.dataСollection.bind(this);
            this.submitForm = this.submitForm.bind(this);
            this.state = {
                formData: {}
            };
        }

       submitForm(e){
           e.preventDefault();

           let result = Object.values(this.state.formData).filter(item => item.inValid)

           if (result.length > 0) {

               console.warn("Форма заполнена не корректно")
            
               result.forEach(item => {
                   let divError = e.target.querySelectorAll(`div[divameerror='${item.name}']`)
                   let divErrorText = e.target.querySelectorAll(`div[divmessagename='${item.name}']`)
                  
                   divErrorText[0].innerText = result[0].message;
                   divError[0].style.cssText=toString(errorShow); 
                   
                   
               })

           } else {

               let successfullyForm = {};
               Object.values(this.state.formData).map(item => {
                   successfullyForm[item.name] = item.value;
               });
               let divr = document.querySelectorAll('div[name=resultonsubmitfom]')
               
               divr[0].innerText = JSON.stringify(successfullyForm);
               console.warn("Форма готова к отправке")
               console.log(successfullyForm)
               
           }


       }

       dataСollection(obj) {
           
            console.log(this.state.formData);
            let newFormData = Object.assign(this.state.formData, obj);
            this.setState.formData=newFormData;

        }

        render() {
           
            return <WrappedComponent    dataСollection={this.dataСollection} 
                                        submitEvent={ this.submitForm } 
                                        result={this.state.result}/>;
        }
    }

    return HOC;
};

export const DataEntry = ({ value = '',//занчение поля по умолчанию можно передать через DataEntry
                            placeholder = 'введите данные',// если не передан из вне 
                            width = '300px',//по умолчанию
                            validators={},//список валидаторов пустой обьект еслини одного не получено
                            required,// поле обязательно для заполнения
                            name,// имя поля обязательный параметр
                            hint=tooltipBasic,
                             ...props }) => {


    if (typeof hint!=="function"){
        console.error("В качестве tooltip не выбран компонент");
        
    }

    const [isActive, toggleActive] = useState(false);
    const [textInputText, setNewText] = useState(value);
    const [error, setError] = useState(required ? true : false);
    const [errorText, setErrorText] = useState(required ? "Поле обязательно для заполнения" : "");
    const [valid, setValid] = useState(required ? "invalid" : "valid");
    const [visit, setVisit] = useState(false);

    if (!name) {
        console.error("Name is required");
    }
    if (!props.dataСollection) {
        console.error("Добавте обрабочик событий формы");
    }


    useEffect(() => {

        let obj = {};
        obj[name] = { name: name, value: textInputText, inValid: error, message: errorText };
        props.dataСollection(obj);


    }, [textInputText, errorText]);


    const setActiveInput = () => {
        setVisit(true);
        toggleActive(true);
        setErrorText("");
    }
    const setDeactiveInput = (e) => {

        toggleActive(false);
        let text = e.target.value

        if (text.length === 0 && required) {
            
            setError(true);
            setErrorText("Поле обязательно для заполнения");
            return
        }
        
        for (let i = 0; i < validators.length; i++) {
            let result = validators[i](text)


            if (result.length !== 0) {
                setError(true)
                setErrorText(result)
                setValid("false")
                break;
            } else {
                setValid("true")
            }

        }

    }
    const typingInputText = (e) => {
        setNewText(e.target.value);
        setError(false)
        setErrorText('')
    }


   if (props.typedataentry){
       return(<div>
       {props.typedataentry({"onChange":typingInputText,
                                "valid":valid,
                                "requiredinput":required ? "invalid" : "valid",
                                "onFocus":setActiveInput,
                                "onBlur":setDeactiveInput,
                                "value":textInputText,
                                })}
                                <Hint name={name} errorText={errorText} error={error} visit={visit} hint={hint}/>

       </div>
           
       )
   }


    return (
        <>
            <div>
                
                <input 
                    
                    name={name}
                    valid={valid}
                    requiredinput={required ? "invalid" : "valid"}
                    style={{ "width": width }}
                    onFocus={setActiveInput}
                    onBlur={setDeactiveInput}
                    onChange={typingInputText}
                    value={textInputText}
                    type='text' placeholder={placeholder} />
                
                <Hint name={name} errorText={errorText} error={error} visit={visit} hint={hint}/>
            </div>
        </>
    )
}

const Hint =(props)=>{

    return (
        <div divameerror={props.name}  style={props.error && props.visit ? errorShow : errorHide}>
            {props.hint({message:props.errorText,name:props.name})}
        </div> 
    )
}

const tooltipBasic = (props)=>{
    return(
        <div divmessagename={props.name}>{props.message}</div>
      )
}