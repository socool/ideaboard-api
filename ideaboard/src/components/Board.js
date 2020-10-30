import React,{useEffect, useState} from "react";

function Board() {
  const canvasRef = React.useRef(null);
  const [ctx,setCtx] = useState({});
  const [drawing, setDrawing] = useState(false);
  const [position,setPosition] = useState({x:0,y:0});
  const [canvasOffset,setCanvasOffset] = useState({x:0,y:0})
  function handleMouseDown(e){
      setDrawing(true);
      setPosition({
          x: parseInt(e.clientX - canvasOffset.x),
          y: parseInt(e.clientY - canvasOffset.y)
      })
  }
  function handleMouseUp(){
      setDrawing(false);
  }
  function handleMouseMove(e){
      let mousex = e.clientX - canvasOffset.x;
      let mousey = e.clientY - canvasOffset.y;

      if(drawing){
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(position.x,position.y);
        ctx.lineTo(mousex,mousey);
        ctx.stroke();
      }
      setPosition({x:mousex,y:mousey});
  }
  useEffect(() => {
      let canv = canvasRef.current;

      let canvCtx = canv.getContext("2d");
      canvCtx.lineJoin = "round";
      canvCtx.lineCap = "round";
      canvCtx.lineWidth = 5;
      setCtx(canvCtx);

      let offset = canv.getBoundingClientRect();
      setCanvasOffset({x:parseInt(offset.left),y:parseInt(offset.top)})
  },[ctx])
  return (
    <div className="board">
      <canvas ref={canvasRef} 
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}/>
    </div>
  );
}

export default Board;