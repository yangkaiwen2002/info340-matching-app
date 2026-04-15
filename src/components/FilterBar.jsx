export default function FilterBar(props){

  function handleChange(e){

    props.onFilter(e.target.value)

  }

  return(

    <select onChange={handleChange}>

      <option value="all">All</option>

      <option value="study">Study</option>

      <option value="mentor">Mentor</option>

      <option value="hobby">Hobby</option>

      <option value="carpool">Carpool</option>

    </select>

  )

}