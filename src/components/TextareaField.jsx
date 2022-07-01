const TextareaField = (props) => {
    const { handleChange, name, value, placeholder } = props;
    return (
      <div>
        <textarea onChange={handleChange} name={name} rows="4" className="w-full border-b-2 outline-none bg-gray-100 p-2 rounded-lg" value={value} placeholder={placeholder}></textarea>
      </div>
    )
  }
  
  export default TextareaField