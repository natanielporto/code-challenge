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
            <th key={Math.floor(Math.random() * 10000) + 1} align="left">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.keys(beers).map((itemKey) => (
          <tr key={Number(beers[itemKey].id) + Math.floor(Math.random() * 10000) + 1} className={`test-id-${beers[itemKey].id}`}>
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