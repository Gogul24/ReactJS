import React, { useState } from 'react';
import './style.css'

const ModernElectronics = ({ Components = [
  { id: '1', name: 'TV', price: '1,00,000'},
  { id: '2', name: 'Monitor', price: '9,000'},
  { id: '3', name: 'Fridge', price: '1,00,000'},
  { id: '4', name: 'Iron box', price: '5,000' },
] }) => {

  const [msg, setMsg] = useState('Modern-Electronics');
  const [content, setContent] = useState('');

  const renderContent = () => {
    return (
     <div className='center'>
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Components.map((component, index) => (
            <tr key={index}>
              <td>{component.id}</td>
              <td>{component.name}</td>
              <td>{component.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };

  const handleClick = () => {
    setMsg('Modern Electronics');
    setContent(renderContent());
  };

  return (
    <div>
      <h2>Message:</h2>
      <p>{msg}</p>
      <div>{content}</div>
      <button onClick={handleClick}>
        Click Here
      </button>
    </div>
  );
};

export default ModernElectronics;