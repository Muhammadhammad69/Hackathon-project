declare const domtoimage: {
  toCanvas: (node: HTMLElement) => Promise<HTMLCanvasElement>;
  toPng: (node: HTMLElement) => Promise<string>;
  toJpeg: (node: HTMLElement, options?: any) => Promise<string>;
  toSvg: (node: HTMLElement) => Promise<string>;
};

// Global class declaration for html2pdf.js
// / Declare the global `html2pdf` function
declare function html2pdf(): Html2Pdf;

// Define the `Html2Pdf` class for method chaining
declare class Html2Pdf {
  from(element: HTMLElement): Html2Pdf; // Start with an element
  set(options: Html2PdfOptions): Html2Pdf; // Configure options
  toPdf(): Html2Pdf; // Convert to PDF (optional before save)
  save(): Promise<void>; // Save the PDF
}

// Define the interface for configuration options
interface Html2PdfOptions {
  margin?: number | [number, number, number, number]; // Margin settings
  filename?: string; // Name of the PDF file
  image?: { type?: string; quality?: number }; // Image type and quality
  html2canvas?: { scale?: number; [key: string]: any }; // Html2Canvas options
  jsPDF?: { unit?: string; format?: string | number[]; orientation?: string }; // jsPDF options
}
