import axios from 'axios';
import React, {useEffect} from 'react';
import './App.css';

function App() {
  //ссылка на которой тестил
  //const url = 'https://webhook.site/705780f9-a2c7-4d76-a7c0-1ae9d29dc30c'
  //твоя ссылка
  const url = 'https://webhook.site/faba4487-58e2-4918-beae-95e8f36bfc22'
  const exmFormData = new FormData();
  exmFormData.set("user", "1");

  useEffect(() => {
    axios({
      method: 'post',
      url: url,
      data: exmFormData
    })
  }, [])

  return (
    <div className="App">
      <h1>Axios Test</h1>
    </div>
  );
}

export default App;
