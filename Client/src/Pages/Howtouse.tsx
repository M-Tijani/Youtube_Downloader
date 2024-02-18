import { useEffect, useState } from 'react';
import "../Css/howtouse.css"

interface headermodel {
  header: {
    _id: string;
    title: string;
    subtitle: string;
    first_description: string;
    second_description: string;
  };
}

function Howtouse() {
  const [list_header, setheader] = useState<headermodel | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        console.log(result);

        setheader(result);
      } catch (error) {
        console.log('Error fetching data:');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='howtouse'>
      <div className='howtouseheader'>

        {list_header ? (
          list_header.header.map((itm, i) => (
            <>
              <h1 className='title'>1. {itm.title}</h1>
              <h1 className='subtitle'>{itm.subtitle}</h1>
              <h1 className='desc'>{itm.first_description}</h1>
              
              {itm.steps.map((step , i)=>(
                <>
                <h2>Step {i+1} :</h2>
                <ul>
                  <li key={i}>{step}</li>
                </ul>
                </>
                
              ))}
              
              <h1 className='desc'>{itm.second_description}</h1>
            </>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Howtouse;
