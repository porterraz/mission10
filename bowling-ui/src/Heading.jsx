import React from 'react';

// This component describes what the page is about [cite: 3513]
function Heading() {
  return (
    <header className="text-center mt-4 mb-4">
      <h1 className="display-4">Bowling League Roster</h1>
      <p className="lead">
        A directory of elite bowlers currently playing for the Marlins and Sharks teams.
      </p>
    </header>
  );
}

export default Heading;