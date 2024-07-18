function MyComponent() {
    const htmlString = "<p>This is <strong>dangerous</strong> HTML content.</p>";
  
    return (
      <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
    );
  }
  

  //Check in code sandbox



// Alternative for dangerouslySetInnerHTML 


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


//Beter to use react components