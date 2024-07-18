import "./styles.css";
import DOMPurify from "dompurify";

export default function App() {
  const htmlString = "<p>This is <strong>dangerous</strong> HTML content.</p>";
  const sanitizedHtmlString = DOMPurify.sanitize(htmlString);

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlString }}></div>
    </div>
  );
}
