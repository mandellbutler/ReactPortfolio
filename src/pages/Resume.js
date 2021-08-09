// import React, { useState } from 'react';
// import resume from '../assets/pdf/resume.pdf';
// import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import PDFReader from '../components/PDFReader';



function Resume() {

  return (
    <div>
      <Navbar />
      <Header />
      <div className="App">
        <PDFReader />
      </div>
      <Footer />
    </div>
  );

}

export default Resume;