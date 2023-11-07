import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

class App extends React.Component {
  generatePDF = () => {
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

  render() {
    return (
      <div>
        <button onClick={this.generatePDF}>Generate PDF</button>
      </div>
    );
  }
}

export default App;
