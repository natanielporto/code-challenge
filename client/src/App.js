import { useEffect, useState } from 'react';
import beerCollection from './beerCollection';

function App() {
  const [items, setItems] = useState({});
  
  const request = () =>
    beerCollection.forEach((product) => {
      fetch(`http://localhost:8081/temperature/${product.id}`)
        .then((response) => response.json())
        .then((response) =>
          setItems((prevItems) => ({
            ...prevItems,
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
            <th align="left">Product</th>
            <th align="left">Temperature</th>
            <th align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((itemKey) => (
            <tr key={items[itemKey].id}>
              <td width={150}>{items[itemKey].name}</td>
              <td width={150}>{items[itemKey].temperature}</td>
              <td width={150}>
                {items[itemKey].temperature <
                  items[itemKey].minimumTemperature && <span>too low</span>}
                {items[itemKey].temperature >
                  items[itemKey].maximumTemperature && <span>too high</span>}
                {items[itemKey].temperature <=
                  items[itemKey].maximumTemperature &&
                  items[itemKey].temperature >=
                    items[itemKey].minimumTemperature && <span>all good</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
