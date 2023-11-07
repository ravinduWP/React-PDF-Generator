import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const App = () => {

  //style for the button
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    backgroundColor:'lightblue',
    width:'100px',
    height:'50px',
    margin:'auto',
    
  };

  //Method to generate the PDF using jsPDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Name', 'Email', 'Country']],
      body: [
        ['David', 'david@example.com', 'Sweden'],
        ['Castille', 'castille@example.com', 'Spain'],
      ],
    });
    doc.save('table.pdf');
  };


  return (

    
    <div>
      <button style={buttonStyle} onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default App;
