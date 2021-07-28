import React, { useState } from 'react';
import Button from '../components/Navbar/Button'
import resume from '../assets/docs/resume.pdf'
import Loader from './Loader';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



export const PDFReader = () => {
  const [scale, setScale] = useState(1.3);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div className="pdf-container">
      <div className="mobile-inactive">
        <Loader isLoading={isLoading} />
        <section id="pdf-section" className="d-flex flex-column align-items-center">
          <ControlPanel scale={scale} setScale={setScale} numPages={numPages} pageNumber={pageNumber} setPageNumber={setPageNumber} />
          <Document className="pdf-document"
            file={resume}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        </section>
      </div>
      <section className="mobile-btn">
        <Button buttonSize="btn--large" onClick={(event) => {
          window.location = "https://docs.google.com/document/d/13qikw68VjrDF5uUYBSEDjC86f0lfPko3o7i_EZmVE6o/edit?usp=sharing";
        }}>
          Resume
        </Button>
      </section>
    </div>
  )
}

export default PDFReader