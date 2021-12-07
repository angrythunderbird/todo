// import React from 'react';

import './app-header.css';

// class AppHeader extends React.Component {
//   constructor() {

//   }
// }

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="header">
      <h1>
        Do not put off until tomorrow what you can do the day after tomorrow
      </h1>
      <h2>{toDo} to do, {done} done</h2>
    </div>
  )
}

export default AppHeader;