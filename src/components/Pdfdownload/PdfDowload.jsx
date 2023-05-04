import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import Blogs from "../Blogs/Blogs";

const PdfDowload = () => {
   return (
      <div className="pt-32">
         <div>
            <button className="btn btn-primary">
               <PDFDownloadLink document={<Blogs></Blogs>} fileName="form">
                  {(loading) => (loading ? "Loading" : "download")}
               </PDFDownloadLink>
            </button>
         </div>
         <Blogs></Blogs>
      </div>
   );
};

export default PdfDowload;
