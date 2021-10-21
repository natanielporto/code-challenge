import { useEffect, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import beerCollection from './data/beerCollection';

function App() {
  const [beers, setBeers] = useState({});
  
  const tableHeaders = [ 'Product', 'Temperature', 'Status' ];

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
      <Header />
      <Table 
        tableName="Beers" 
        tableHeaders={tableHeaders} 
        beers={beers} 
        averageTDWidth={150}/>
    </div>
  );
}

export default App;
