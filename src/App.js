import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const App = () => {

  //style for the button and the table
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor:'#3ABEF9',
    width:'200px',
    height:'25px',
    margin:'auto', 
    borderRadius: '20px',
  };
  const tableStyle = {
    marginTop: '20px',
    borderCollapse: 'collapse',
    width: '80%',
    margin: 'auto',
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#3ABEF9',
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };




  // head and body data
  const tableHead = ['Name', 'Email', 'Country'];
  const tableBody = [
    ['Kasun', 'kasun@example.com', 'Sri Lanka'],
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
  ];


  //Method to generate the PDF using jsPDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [tableHead],
      body: tableBody,
    });
    doc.save('table.pdf');
  };


  return (

    
    <div align='center'>
        <h1>Table PDF Generator</h1>
        <table style={tableStyle}>
        <thead>
          <tr>
            {tableHead.map((head, index) => (
              <th key={index} style={thStyle}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} style={tdStyle}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button style={buttonStyle} onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default App;
