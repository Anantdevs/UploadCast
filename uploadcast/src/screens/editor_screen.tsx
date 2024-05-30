import React from "react";
import Column2 from "../components/columns/column2";
import Column1 from "../components/columns/column1";
import Column3 from "../components/columns/column3";
import TimeLine from "../components/Resizable/resizable_div";
function EditScreen({ audioFile, callback }) {
  const callThisFromColumnComponent = (file: File) => {
    callback(file);
  };

  return (
    <div className="Edit_column">
      <Column1 />
      <Column2 callback={callThisFromColumnComponent} />
      <Column3 />
      <TimeLine audioFile={audioFile} />
    </div>
  );
}

export default EditScreen;
