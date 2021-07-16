import { useState, useEffect } from "react";
import { getCities } from "../api/apiElections";
import Header from "../components/Header";
import Main from "../components/Main";
import Select from "../components/Select";

export default function ElectionsPage() {
  const [cities, setCities] = useState([]); 
  
  return (
    <div>
      <Header>React Elections</Header>

      <Main>
        <div className="flex flex-col items-center">
          <Select></Select>
        </div>
      </Main>
    </div>
  );
}
