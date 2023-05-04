import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import Blogs from "../Blogs/Blogs";

const PdfDowload = () => {
   return (
      <div>
         {/* <PDFDownloadLink document={<Blogs></Blogs>} fileName="form">
            {({ loading }) =>
               loading ? <button>Loading</button> : <button>download</button>
            }
         </PDFDownloadLink>
         <Blogs></Blogs> */}
      </div>
   );
};

export default PdfDowload;
