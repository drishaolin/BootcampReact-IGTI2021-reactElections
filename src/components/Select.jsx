export default function Select({
  children: options = [
    { id: "1", name: "option01" },
    { id: "2", name: "option02" },
  ],
  selectedValue = options[0].id,
  labelDescription = "Selecione uma opção:",
  selectId = "Combo"
}) {
  return (
    <>
    <label htmlFor={selectId}>{labelDescription}</label>
    <select id={selectId}  value={selectedValue} className="border">
      {options.map(({id, name}) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
    </>
  );
}
