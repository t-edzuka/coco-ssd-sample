export const drawRect = (predictions, ctx) =>{
  // Loop through each prediction
  // CanvasRenderingContext2D
  predictions.forEach(prediction => {

    // Extract boxes and classes
    const [x, y, width, height] = prediction['bbox']; 
    const text = prediction['class'];
    const score = prediction['score']; // number
    const format_score = `score: ${score.toFixed(3)}`;

    // Set styling
    const color = "fbeafe";
    ctx.strokeStyle = '#' + color
    ctx.font = '18px Arial';

    // Draw rectangles and text
    ctx.beginPath();   
    ctx.fillStyle = '#' + color
    ctx.fillText(text, x, y);
    ctx.fillText(format_score, x, y + 20);
    ctx.rect(x, y, width, height); 
    ctx.stroke();
  });
}
