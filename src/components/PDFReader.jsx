import React, { useState } from 'react';
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
    <div>
      <Loader isLoading={isLoading} />
      <section id="pdf-section" className="d-flex flex-column align-items-center">
        <ControlPanel scale={scale} setScale={setScale} numPages={numPages} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        <Document
          // file='/assets/docs/resume.pdf'
          file={resume}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </section>
    </div>
  )
}

export default PDFReader