// import React, { useState } from 'react';
// import resume from '../assets/pdf/resume.pdf';
// import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import Header from '../components/Header'
import PDFReader from '../components/PDFReader';



function Resume() {

  return (
    <div>
      <Header />
      <div className="App">
        <PDFReader />
      </div>
    </div>
  );

}

export default Resume;