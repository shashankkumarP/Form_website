/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// MultiStepForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormUploadTrial } from "../redux/action";

const MultiStepForm = ({ setShowform }: { setShowform: any }) => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<any | never>({
    name: "",
    email: "",
    phone: "",
    address: "",
    files: [],
    selectedOptions: [],
  });

  const steps = [
    "Basic Details",
    "Multi-File Upload",
    "Multi-Field Select Dropdown",
  ];

  const handleremoveupload = (i: number) => {
    formData.files.splice(i, 1);

    setFormData({ ...formData });
  };
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleCancel = () => {
    setShowform(false);
  };

  const handleSubmit = () => {
    console.log("Form data:", formData);
    
    
    dispatch(FormUploadTrial(formData) as any )
    setShowform(false);
  };
  const handlemultiselect = (e: any) => {
    if (formData.selectedOptions.includes(e.target.value)) {
      let a = formData.selectedOptions.indexOf(e.target.value);
      formData.selectedOptions.splice(a, 1);
    } else {
      setFormData({
        ...formData,
        selectedOptions: [...formData.selectedOptions, e.target.value],
      });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const fileArray = Array.from(selectedFiles);
      if (formData.files.length >= 3) {
        alert("You can only upload a maximum of 3 files.");

        return;
      } else {
        const filteredFiles = fileArray.filter(
          (file) =>
            file.type == "image/jpeg" ||
            file.type == "application/pdf" ||
            file.type == "image/png"
        );
        console.log(Array.from(filteredFiles), formData.files);
        setFormData({
          ...formData,
          files: [...formData.files, ...Array.from(filteredFiles)],
        });
      }
    }
  };

  return (
    <div className="min-h-max  max-w-xl mx-auto p-6 border rounded shadow-lg bg-white">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{steps[step - 1]}</h2>
      </div>
      {step === 1 && (
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 rounded border border-gray-300 mb-2"
          />
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 rounded border border-gray-300 mb-2"
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full p-2 rounded border border-gray-300 mb-2"
          />
          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className="w-full p-2 rounded border border-gray-300 mb-4"
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="file"
            accept=".pdf, .png, .jpg"
            multiple
            onChange={(e) => handleFileUpload(e)}
            className="mb-4"
          />
          {formData.files.map((el: any, i: number) => (
            <span className=" flex justify-between w-auto" key={i}>
              <p>{el.name}</p>
              <button onClick={() => handleremoveupload(i)}>X</button>
            </span>
          ))}
        </div>
      )}
      {step === 3 && (
        <div>
          <label className="block mb-2">Select Subjects:</label>
          <select
            multiple
            value={formData.selectedOptions}
            onChange={(e) => handlemultiselect(e)}
            className="w-full p-2 rounded border border-gray-300"
          >
            <option value="Math">Math</option>
            <option value="Physics">Physics</option>
            <option value="Science">Science</option>
          </select>
        </div>
      )}
      <div className="mt-6">
        {step > 1 && (
          <button
            className="bg-gray-300 text-gray-700 p-2 rounded mr-4"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        {step < 3 ? (
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
        <button
          className="bg-red-500 text-white p-2 rounded ml-4"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
          {steps.map((s, index) => (
            <div
              key={s}
              className={`rounded-full w-6 h-6 mx-1 ${
                index < step ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
