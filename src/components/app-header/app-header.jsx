// import React from 'react';

import './app-header.css';

// class AppHeader extends React.Component {
//   constructor() {

//   }
// }

const AppHeader = ({ toDo, done }) => {
  // if (toDo === 0 & done === 0) {}
  return (
    <div className="header">
      <h1>
        Do not put off until tomorrow what you can do the day after tomorrow
      </h1>
      <h2 className='todos-counter'>{toDo} to do, {done} done</h2>
    </div>
  )
}

export default AppHeader;