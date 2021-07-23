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