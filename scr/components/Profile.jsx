// ProfileCard.js

import React from 'react';

const ProfileCard = () => {
  return (
    <div className='wrapperr'>
      <div className="card-container">
      <span className="pro">PRO</span>
      <img className="round" src="https://avatars.githubusercontent.com/u/129921012?v=4" alt="user" />
      <h3>Vansh Sharma</h3>
      <h6>Muzaffarnagar</h6>
      <p>User interface designer and <br/> front-end developer</p>
      <div className="buttons">
        <button className="primary">
          Message
        </button>
        <button className="primary ghost">
          Following
        </button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          <li>UI / UX</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default ProfileCard;
