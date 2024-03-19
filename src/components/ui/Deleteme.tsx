//delete me
import React, { useState } from 'react';

const Deleteme: React.FC = () => {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const files: File[] = Array.from(event.dataTransfer.files);
    setDroppedFiles(prevFiles => [...prevFiles, ...files]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        width: '100%',
        height: '200px',
        border: '2px dashed #ccc',
        borderRadius: '5px',
        textAlign: 'center',
        paddingTop: '80px',
        boxSizing: 'border-box',
      }}
    >
      <p>Drag and drop files here</p>
      {droppedFiles.length > 0 && (
        <ul>
          {droppedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Deleteme;
