import Item from "./Item";

export default function Country({
  children: country = null,
  onCountryClick = null,
  isVisited = false,
}) {
  if (!country) {
    return <div>"Não foi possível renderizar dados"</div>;
  }

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(country.id);
    }
  }

  const { name, capital, region, population, area } = country;
  const demographicDensity = population / area;

  const isVisitedClassName = isVisited ? "bg-green-100" : "";

  return (
    <div
      className={`border p-2 m-2 ${isVisitedClassName} cursor-pointer`}
      onClick={handleCountryClick}
    >
      <ul>
        <li>
          <Item label="Nome: ">{name}</Item>
        </li>
        <li>
          <Item label="Capital: ">{capital}</Item>
        </li>
        <li>
          <Item label="Região: ">{region}</Item>
        </li>
        <li>
          <Item label="População: ">{population}</Item>
        </li>
        <li>
          <Item label="Área: ">{area}</Item>
        </li>
        <li>
          <Item label="Densidade demográfica: ">{demographicDensity}</Item>
        </li>
      </ul>
    </div>
  );
}
