import React, { useEffect, useState } from 'react';

// This component displays the required bowler information in a table [cite: 3514]
function BowlerTable() {
  const [bowlers, setBowlers] = useState([]);

  useEffect(() => {
    // UPDATE THIS URL with the port number from your running API browser window
    fetch('https://localhost:44398/api/bowlers') 
      .then((response) => response.json())
      .then((data) => setBowlers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              {/* Displays Name (First, Middle Initial, Last) [cite: 3504] */}
              <td>
                {b.bowlerFirstName} {b.bowlerMiddleInit ? `${b.bowlerMiddleInit}. ` : ''} {b.bowlerLastName}
              </td>
              <td>{b.team.teamName}</td> {/* Displays Team Name [cite: 3508] */}
              <td>{b.bowlerAddress}</td> {/* Displays Address [cite: 3510] */}
              <td>{b.bowlerCity}</td> {/* Displays City [cite: 3505] */}
              <td>{b.bowlerState}</td> {/* Displays State [cite: 3507] */}
              <td>{b.bowlerZip}</td> {/* Displays Zip [cite: 3509] */}
              <td>{b.bowlerPhoneNumber}</td> {/* Displays Phone Number [cite: 3512] */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlerTable;