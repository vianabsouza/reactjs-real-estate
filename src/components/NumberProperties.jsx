import { useProperties } from "../providers/PropertyProvider";

function NumberProperties() {
  const properties = useProperties;
  return <span>({properties.length})</span>;
}

export default NumberProperties;
