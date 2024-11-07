import { useContext } from "react";
import { PropertiesContext } from "../App";

function NumberProperties() {
  const { properties } = useContext(PropertiesContext);
  return <span>({properties.length})</span>;
}

export default NumberProperties;
