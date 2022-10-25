import React from "react";
import { Color } from "three0135";
import { IfcViewerAPI } from "web-ifc-viewer";

const Viewer = () => {
  const container = document.getElementById("viewer-container");
  const viewer = new IfcViewerAPI({
    container,
    backgroundColor: new Color(0xffffff),
  });

  viewer.axes.setAxes();
  viewer.grid.setGrid();

  return <></>;
};

export default Viewer;
