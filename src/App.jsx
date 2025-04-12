import DrawingArea from "./components/DrawingArea";

const App = () => {
  return (
    <div className="app">
      <h1>Dot-to-Square Drawing</h1>
      <p>Click on the canvas to draw dots. Draw 4 to complete a square.</p>
      <DrawingArea />
    </div>
  );
};

export default App;
