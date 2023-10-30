import React, { useState } from 'react';

const FileUploadPreview: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewURL(e.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />
      <label
        htmlFor="fileInput"
        className="border border-violet-600 text-purple-600 bg-white px-4 py-2 rounded-lg hover:bg-violet-600 hover:text-white transition duration-300"
      >
        Select File
      </label>
      {selectedFile && (
        <div className="mt-4">
          <p>Selected File: {selectedFile.name}</p>
          {previewURL && (
            <img
              src={previewURL}
              alt="Preview"
              className="mt-4 max-w-xs"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FileUploadPreview;
