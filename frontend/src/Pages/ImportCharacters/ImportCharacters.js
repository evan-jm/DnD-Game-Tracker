import { useState } from "react";

import "./ImportCharacters.css";

const ImportCharacters = () => {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {};

  return (
    <div className="import-characters">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={() => handleFile} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ImportCharacters;
