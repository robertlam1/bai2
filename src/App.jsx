import './App.css';
import Welcome from './welcome.jsx';

function App() {
  return (
    <>
      <div className="app-container">
        <div className="card">
          <h1>Demo Component</h1>
        </div>
        <div className="card-title">
          <Welcome name="Bạch Dương"/>
        </div>
        <div className="card-title">
          <p>Lớp: CD24TW</p>
        </div>
        <div className="card-title">
          <p>Sở thích: Ngủ</p>
          </div>
      </div>
    </>
  )
}

export default App
