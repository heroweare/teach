import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabase = createClient('https://hridnqpjrggmqwhcpcyd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyaWRucXBqcmdnbXF3aGNwY3lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDE5MjQsImV4cCI6MjAxMjAxNzkyNH0.Bh3RIb46ucFwf1WuXCaG4ATvRFM95oXflO9CbV8WsXI');

async function fetchData() {
  let { data, error } = await supabase
    .from('9B')
    .select('*');
  
  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }
  
  return data;
}

function Grade9secA() {
  const [data, setData] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    async function getData() {
      const result = await fetchData();
      setData(result);
    }

    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }


  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={`bg-${darkTheme ? 'gray-900' : 'facebook-theme'} p-4`}>
      <div className="flex justify-end mb-4">
      </div>
      <div className="flex items-center justify-center bit-black-and-white">
      GRADE9SECA
    </div>
      <table className={`w-full bg-white rounded-lg overflow-hidden ${darkTheme ? 'text-white' : 'text-gray-900'}`}>
        <thead className={`shadow-red-500 bg-${darkTheme ? 'gray-800' : 'gray-100'}`}>
          <tr>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Period 1</th>
            <th className="py-2 px-4">Period 2</th>
            <th className="py-2 px-4">Period 3</th>
            <th className="py-2 px-4">Period 4</th>
            <th className="py-2 px-4">Period 5</th>
            <th className="py-2 px-4">Period 6</th>
            <th className="py-2 px-4">Period 7</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="py-2 px-4">{row.date}</td>
              <td className="py-2 px-4">{row.period1}</td>
              <td className="py-2 px-4">{row.period2}</td>
              <td className="py-2 px-4">{row.period3}</td>
              <td className="py-2 px-4">{row.period4}</td>
              <td className="py-2 px-4">{row.period5}</td>
              <td className="py-2 px-4">{row.period6}</td>
              <td className="py-2 px-4">{row.period7}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grade9secA;