import { useState } from "react";
import "./FileCard.css";

export default function FileCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="header">Title</div>
        <div className="date">12.12.2022</div>
        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque blanditiis eos asperiores ad culpa! Perspiciatis reiciendis dolor illum, non magnam exercitationem tempore asperiores eum laborum iste quia impedit excepturi voluptatem?</div>
        <div className="row">
        <button className="btn btn-primary">
          <a
            href="https://drive.google.com/file/d/1YZCXksJWrsGvvCPHWTDz4Y8CeWFA1BAM/view"
            target="_blank"
            rel="noreferrer"
            >
            Download
          </a>
        </button>
        <button className="btn btn-primary" onClick={handleExpandClick}>
            Expand
        </button>
        </div>
      </div>
      {isExpanded && (
        <div className="card-body">
          <iframe
            src="https://drive.google.com/file/d/1YZCXksJWrsGvvCPHWTDz4Y8CeWFA1BAM/preview"
            width="100%"
            height="700px"
          ></iframe>
        </div>
      )}
    </div>
  );
}
