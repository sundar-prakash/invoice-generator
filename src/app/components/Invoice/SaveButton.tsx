import { useReactToPrint } from "react-to-print";

const SaveButton = (props: any) => {
  const formData = props.formData;
  const PdfRef = props.eleRef;

  //   const handleSave = () => {
  //     const input = PdfRef.current;

  //     html2canvas(input).then((canvas) => {
  //       const imgData = canvas.toDataURL("image/png");
  //       console.log(ImageData);
  //       const doc = new jsPDF('p', 'mm', 'a4');
  //       const componentWidth = doc.internal.pageSize.getWidth();
  //       const componentHeight = doc.internal.pageSize.getHeight();
  //       doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
  //       doc.save(`${formData.details.invoiceNumber}.pdf`);
  //     });
  //   };
  const handlePrint = useReactToPrint({
    content: () => PdfRef.current,
  });

  return (
    <div className="relative inline-block">
      <button
        onClick={handlePrint}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center"
      >
        <span className="mr-2">Save as PDF</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SaveButton;
