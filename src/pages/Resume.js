// import React, { useState } from 'react';
// import resume from '../assets/pdf/resume.pdf';
// import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import PDFReader from '../components/PDFReader';



function Resume() {

  return (
    <div className="App">
      <PDFReader />
    </div>
  );

}




export default Resume;

// function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1);
//   }

//   function changePage(offset) {
//     setPageNumber(prevPageNumber => prevPageNumber + offset);
//   }

//   function previousPage() {
//     changePage(-1);
//   }

//   function nextPage() {
//     changePage(1);
//   }

//   return (
//     <div className="container d-flex justify-content-center column">
//       <div>
//         <Document
//           file={resume}
//           onLoadSuccess={onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//       </div>
//       <div>
//         <div>
//           <p>
//             Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
//           </p>
//           <button
//             type="button"
//             disabled={pageNumber <= 1}
//             onClick={previousPage}
//           >
//             Previous
//           </button>
//           <button
//             type="button"
//             disabled={pageNumber >= numPages}
//             onClick={nextPage}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default Resume;