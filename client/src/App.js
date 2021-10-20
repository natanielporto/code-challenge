import { useEffect, useState } from 'react';
import beerCollection from './beerCollection';
import checkTemperatures from './helpers/checkTemperature';

function App() {
  const [beers, setBeers] = useState({});
  
  const tableHeaders = [ 'Product', 'Temperature', 'Status'];

  const averageTDWidth = 150;
  
  const request = () =>
    beerCollection.forEach((product) => {
      fetch(`http://localhost:8081/temperature/${product.id}`)
        .then((response) => response.json())
        .then((response) =>
          setBeers((prevBeers) => ({
            ...prevBeers,
            [product.id]: {
              ...product,
              ...response,
            },
          }))
        );
    });
  
  useEffect(() => {
    setInterval(request, 5000);

    request();
  }, []);

  return (
    <div className="App">
      <h2>Beers</h2>
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
            <tr key={beers[itemKey].id}>
              <td width={averageTDWidth}>{beers[itemKey].name}</td>
              <td width={averageTDWidth}>{beers[itemKey].temperature}</td>
              <td width={averageTDWidth}>
                {checkTemperatures(beers[itemKey].temperature, beers[itemKey].minimumTemperature)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
