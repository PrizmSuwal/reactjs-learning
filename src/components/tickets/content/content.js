import React, { useEffect, useState } from 'react';
import 'components/tickets/content/content.css';

function DashboardContent() {
  const [data, setData] = useState();
  const initialPagination = {
    limit: 6
  };
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/ability/?limit=${initialPagination.limit}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.results);
      });
  }, []);
  return (
    <div className="dashboard-content-heading">
      <h1 className="dashboard-content-subheading"> All tickets</h1>
      <table>
        <thead className="table-heading">
          <th className="desc">Name</th>
          <th className="customername">URL</th>
        </thead>
        <tbody className="table-body">
          {data &&
            data.map((item) => (
              <React.Fragment key={item.id} className="content">
                <tr className="body-content">
                  <td className="desc">{item.name.toUpperCase()}</td>
                  <td className="customername">{item.url}</td>
                </tr>
                <tr>
                  <td colSpan="4" className="dashbord-content-divider"></td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardContent;
