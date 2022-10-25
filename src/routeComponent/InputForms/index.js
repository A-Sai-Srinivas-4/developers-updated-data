


const InputForms = ({name, type, onChangeEvent,value}) => {
    return (
        <>
        <div className="label-container">
        <label htmlFor={name} className="label_form">
        {name}
        </label> <br/>
        <input 
        type={type} 
        name={name} 
        value={value}
        onChange={onChangeEvent}
         />
        </div>
        

        </>
    )
}
export default InputForms