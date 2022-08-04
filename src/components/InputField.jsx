const InputField = (props) => {
    const { handleChange, name, type, value, placeholder } = props;
    return (
      <div className="mb-5">
        <input className=" outline-none text-gray-700 w-full bg-gray-100 mt-4 rounded-lg p-3" type={type} onChange={handleChange} value={value} name={name} required placeholder={placeholder} />
      </div>
    )
  }
  
  export default InputField