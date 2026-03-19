import React, { useEffect, useState } from 'react';

function BowlerTable() {
  const [bowlers, setBowlers] = useState([]);

  useEffect(() => {
    // This fetches data from your API. Ensure Visual Studio is running.
    fetch('https://localhost:44398/api/bowlers')
      .then((response) => response.json())
      .then((data) => setBowlers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-4">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            {/* These column headers match the assignment requirements exactly */}
            <th>Bowler Name (First, Middle, Last)</th>
            <th>City</th>
            <th>State</th>
            <th>Team Name</th>
            <th>Zip</th>
            <th>Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit ? `${b.bowlerMiddleInit} ` : ''}{b.bowlerLastName}
              </td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.team?.teamName}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlerTable;