import React, { Component } from "react";
import { Document, Page, pdfjs } from 'react-pdf';


import lwh from '../images/lwh.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// function Resume () {
//     return (
//         <div>
//           <h2>Resume</h2>
//         </div>
//     );
// }

// export default Resume;

export default class Resume extends Component {
  render() {
    return (
      <Document className="resumePDF"
        file={lwh}
        onLoadSuccess={this.onDocumentLoadSuccess}
      >
     <Page  pageNumber={1} />
      </Document>
    );
  }
}