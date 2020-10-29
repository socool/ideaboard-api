import React from "react";

function Board() {
  const canvasRef = React.useRef(null);
  return (
    <div className="board">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Board;