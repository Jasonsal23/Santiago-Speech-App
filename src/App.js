import React from 'react';
import diagram1 from './images/diagram.jpg';
import diagram2 from './images/diagram2.jpg';
import diagram3 from './images/diagram3.jpg';
import diagram4 from './images/diagram4.jpg';
import diagram5 from './images/diagram5.jpg';
import './App.css';

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-MX';
  const preferredVoices = ['Google español', 'Paulina', 'Monica', 'Jorge'];
  const voices = speechSynthesis.getVoices();
  const selectedVoice = voices.find(v => preferredVoices.includes(v.name));

  if (selectedVoice) utterance.voice = selectedVoice;

  speechSynthesis.speak(utterance);
};

// Word positions for diagram 1
const wordsDiagram1 = [
  { text: 'La cabeza', x: 31.5, y: 11, w: 12, h: 4 },
  { text: 'El ojo', x: 84.3, y: 13.6, w: 6.4, h: 4 },
  { text: 'La oreja', x: 31.5, y: 22, w: 10, h: 4 },
  { text: 'La nariz', x: 83.5, y: 22.5, w: 9, h: 4 },
  { text: 'La boca', x: 77, y: 33, w: 10, h: 4 },
  { text: 'El cuello', x: 33, y: 33, w: 11, h: 4 },
  { text: 'El pecho', x: 36, y: 41.5, w: 11, h: 4 },
  { text: 'El brazo', x: 84, y: 41.5, w: 10, h: 4 },
  { text: 'La mano', x: 89, y: 52.5, w: 10.5, h: 4 },
  { text: 'La espalda', x: 26, y: 52.5, w: 12.5, h: 4 },
  { text: 'El dedo', x: 28.5, y: 67, w: 9, h: 4 },
  { text: 'El Estómago', x: 77, y: 68.5, w: 15, h: 4 },
  { text: 'La pierna', x: 36.5, y: 73.3, w: 11, h: 4 },
  { text: 'La rodilla', x: 77, y: 81.5, w: 11.5, h: 4 },
  { text: 'El pie', x: 40, y: 90, w: 7.4, h: 4 },
  { text: 'Me duele', x: 6.8, y: 43, w: 11, h: 4 },
  { text: 'Tengo rasquera en', x: 1.3, y: 83, w: 22, h: 4 }
];

// Word positions for diagram 2
const wordsDiagram2 = [
  { text: 'Tengo sed', x: 9.5, y: 33, w: 14, h: 5 },
  { text: 'Tengo hambre', x: 40, y: 34, w: 20, h: 5 },
  { text: 'Quiero cepillarme los dientes.', x: 70, y: 33, w: 25, h: 11 },
  { text: 'Quiero usar el baño', x: 3, y: 83.5, w: 27, h: 5 },
  { text: 'Quiero bañarme', x: 35, y: 83.5, w: 23, h: 5 },
  { text: 'Tengo frío', x: 62.5, y: 83.5, w: 15, h: 5 },
  { text: 'Tengo calor', x: 82, y: 83.5, w: 17, h: 5 }
];

const wordsDiagram3 = [
  { text: 'Necesito una enfermera', x: 1, y: 42, w: 33, h: 5 },
  { text: 'Me siento mal', x: 41.5, y: 41.5, w: 19.5, h: 5 },
  { text: 'Me falta la respiración', x: 69, y: 41.5, w: 30, h: 5 },
  { text: 'Tengo náuseas', x: 4, y: 89, w: 20.5, h: 5 },
  { text: 'Me siento mareado', x: 36.5, y: 89, w: 27, h: 5 },
  { text: 'Me siento débil', x: 75, y: 89.5, w: 21, h: 5 }
];

const wordsDiagram4 = [
  { text: 'Sí', x: 11.5, y: 34, w: 5, h: 5 },
  { text: 'No', x: 28.5, y: 34, w: 5, h: 5 },
  { text: 'Te quiero', x: 46, y: 34, w: 14, h: 5 },
  { text: '¡Jajajaja!', x: 71, y: 34, w: 15, h: 5 },
  { text: 'Hola', x: 10.5, y: 79, w: 7, h: 5 },
  { text: 'Adiós', x: 33, y: 79, w: 8, h: 5 },
  { text: 'Por Favor', x: 57.5, y: 79, w: 13, h: 5 },
  { text: 'Gracias', x: 85.5, y: 79, w: 11, h: 5 }
];

const wordsDiagram5 = [
  { text: 'Quiero ver a', x: 29, y: 20, w: 14, h: 5 },
  { text: 'Quiero hablar con', x: 53.5, y: 20, w: 20, h: 5 },
  { text: 'Marta', x: 4, y: 26.5, w: 12.5, h: 20 },
  { text: 'Juan Carlos', x: 20, y: 26.5, w: 12, h: 20 },
  { text: 'Mila', x: 35.7, y: 26.5, w: 12.3, h: 20 },
  { text: 'Camila', x: 51.7, y: 26.5, w: 12.4, h: 20.5 },
  { text: 'Ninin', x: 68, y: 26.5, w: 12, h: 20.5 },
  { text: 'Lizzet', x: 84, y: 26.5, w: 12, h: 20.5 },
  { text: 'Clarissa', x: 4, y: 51, w: 12, h: 21 },
  { text: 'Celeste', x: 19.5, y: 51, w: 12, h: 21 },
  { text: 'Claudia', x: 35.5, y: 51, w: 12, h: 21 },
  { text: 'sky', x: 51, y: 51, w: 12, h: 21 },
  { text: 'Alfonso', x: 66.5, y: 51, w: 12, h: 21},
  { text: 'Temo', x: 82, y: 51, w: 13, h: 21 },
  { text: 'Irma', x: 3.5, y: 76, w: 12, h: 20 },
  { text: 'Pocho', x: 19, y: 76, w: 12, h: 20 },
  { text: 'Mundo', x: 34, y: 76, w: 11, h: 20 },
  { text: 'Martín', x: 48, y: 76, w: 12, h: 20 }
];

const DiagramWithWords = ({ image, words }) => (
  <div className="diagram-container">
    <img src={image} alt="Diagram" className="Diagram" />
    <div className="words-layer">
      {words.map((word, index) => (
        <button
          key={index}
          className="word-button"
          style={{
            left: `${word.x}%`,
            top: `${word.y}%`,
            width: `${word.w}%`,
            height: `${word.h}%`
          }}
          onClick={() => speak(word.text)}
        >
          {word.text}
        </button>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <h1>Santiago</h1>
      <DiagramWithWords image={diagram1} words={wordsDiagram1} />
      <DiagramWithWords image={diagram2} words={wordsDiagram2} />
      <DiagramWithWords image={diagram3} words={wordsDiagram3} />
      <DiagramWithWords image={diagram4} words={wordsDiagram4} />
      <DiagramWithWords image={diagram5} words={wordsDiagram5} />
    </div>
  );
}

export default App;
