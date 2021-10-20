import { useEffect, useState } from 'react';
import beerCollection from './beerCollection';

function App() {
  const [beers, setBeers] = useState({});
  
  const tableHeaders = [ 'Product', 'Temperature', 'Status'];

  const checkTemperatures = (temperature, minimumTemperature) => {
    if (temperature < minimumTemperature) return <span>Too cold</span>;
    if (temperature > minimumTemperature) return <span>Too hot</span>;
    return <span>All good</span>;
  }
  
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

  console.log(beers)
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
              <td width={150}>{beers[itemKey].name}</td>
              <td width={150}>{beers[itemKey].temperature}</td>
              <td width={150}>
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
