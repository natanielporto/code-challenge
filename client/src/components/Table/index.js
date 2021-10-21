import checkTemperatures from "../../helpers/checkTemperature";

const Table = ({ 
        tableName,
        tableHeaders,
        beers,
        averageTDWidth }) => (
  <>
    <h2>{tableName}</h2>

    <table>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header} align="left">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(beers).map((itemKey) => (
          <tr key={beers[itemKey].id} className={`test-id-${beers[itemKey].id}`}>
            <td width={averageTDWidth}>{beers[itemKey].name}</td>
            <td width={averageTDWidth}>{beers[itemKey].temperature}</td>
            <td width={averageTDWidth}>
              {checkTemperatures(beers[itemKey].temperature, beers[itemKey].minimumTemperature)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
 );

export default Table;