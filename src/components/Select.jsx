export default function Select({
  children: options = [
    { id: "1", description: "option01" },
    { id: "2", description: "option02" },
  ],
  selectedValue = options[0].id,
  labelDescription = "Selecione uma opção:",
  selectId = "Combo",
  onSelectChange = null,
}) {
  
  return (
    <>
    <label htmlFor={selectId}>{labelDescription}</label>
    <select id={selectId}  value={selectedValue} className="border" onChange={onSelectChange}>
      <option value="" disabled>Select</option>
      {options.map(({id, description}) => (
        <option key={id} value={id}>{description}</option>
      ))}
    </select>
    </>
  );
}
