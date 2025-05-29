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
  { text: 'La cabeza', x: 30, y: 10, w: 15, h: 7 },
  { text: 'El ojo', x: 83, y: 13, w: 10, h: 6 },
  { text: 'La oreja', x: 30, y: 21.5, w: 13, h: 6 },
  { text: 'La nariz', x: 82, y: 21.5, w: 12, h: 7 },
  { text: 'La boca', x: 75.5, y: 31.5, w: 13, h: 7 },
  { text: 'El cuello', x: 32, y: 31.5, w: 13, h: 7 },
  { text: 'El pecho', x: 35, y: 40, w: 13, h: 7 },
  { text: 'El brazo', x: 83, y: 40, w: 12, h: 7 },
  { text: 'La mano', x: 88, y: 51, w: 12, h: 7 },
  { text: 'La espalda', x: 25, y: 51, w: 15, h: 8 },
  { text: 'El dedo', x: 27, y: 66, w: 12, h: 6 },
  { text: 'El Estómago', x: 76, y: 67, w: 17, h: 8 },
  { text: 'La pierna', x: 35.5, y: 72.5, w: 13, h: 6 },
  { text: 'La rodilla', x: 76, y: 80, w: 13, h: 7 },
  { text: 'El pie', x: 39, y: 89, w: 10, h: 7 },
  { text: 'Me duele', x: 3, y: 14, w: 19, h: 34 },
  { text: 'Tengo rasquera en', x: 1.3, y: 57, w: 23, h: 31 }
];

// Word positions for diagram 2
const wordsDiagram2 = [
  { text: 'Tengo sed', x: 9.5, y: 3, w: 14, h: 36 },
  { text: 'Tengo hambre', x: 40, y: 3, w: 20, h: 36 },
  { text: 'Quiero cepillarme los dientes.', x: 70, y: 3, w: 25, h: 41 },
  { text: 'Quiero usar el baño', x: 2, y: 51, w: 30, h: 38 },
  { text: 'Quiero bañarme', x: 35, y: 51, w: 23, h: 38 },
  { text: 'Tengo frío', x: 62.5, y: 51, w: 15, h: 38 },
  { text: 'Tengo calor', x: 82, y: 51, w: 17, h: 38 }
];

const wordsDiagram3 = [
  { text: 'Necesito una enfermera', x: 1, y: 5, w: 33, h: 42 },
  { text: 'Me siento mal', x: 41.5, y: 5, w: 19.5, h: 42 },
  { text: 'Me falta la respiración', x: 69, y: 5, w: 30, h: 42 },
  { text: 'Tengo náuseas', x: 4, y: 52, w: 20.5, h: 42 },
  { text: 'Me siento mareado', x: 36.5, y: 52, w: 27, h: 42 },
  { text: 'Me siento débil', x: 75, y: 52, w: 21, h: 42 }
];

const wordsDiagram4 = [
  { text: 'Sí', x: 9, y: 5, w: 11, h: 34 },
  { text: 'No', x: 27, y: 5, w: 10, h: 34 },
  { text: 'Te quiero', x: 46, y: 5, w: 14, h: 34 },
  { text: '¡Jajajaja!', x: 68, y: 5, w: 20, h: 34 },
  { text: 'Hola', x: 9, y: 48, w: 10, h: 36 },
  { text: 'Adiós', x: 30, y: 48, w: 18, h: 36 },
  { text: 'Por Favor', x: 57.5, y: 48, w: 13, h: 36 },
  { text: 'Gracias', x: 79, y: 48, w: 18, h: 36 }
];

const wordsDiagram5 = [
  { text: 'Quiero ver a', x: 29, y: 5, w: 15, h: 24 },
  { text: 'Quiero hablar con', x: 53.5, y: 5, w: 20, h: 24},
  { text: 'Marta', x: 4, y: 30.5, w: 12.5, h: 20 },
  { text: 'Juan Carlos', x: 20, y: 30.5, w: 12, h: 20 },
  { text: 'Mila', x: 35.7, y: 30.5, w: 12.3, h: 20 },
  { text: 'Camila', x: 51.7, y: 30.5, w: 13, h: 20.5 },
  { text: 'Ninin', x: 68, y: 30.5, w: 12, h: 20.5 },
  { text: 'Lizzet', x: 84, y: 30.5, w: 12.5, h: 20.5 },
  { text: 'Clarissa', x: 4, y: 54, w: 12, h: 21 },
  { text: 'Celeste', x: 19.5, y: 54, w: 12.5, h: 21 },
  { text: 'Claudia', x: 35.5, y: 54, w: 12, h: 21 },
  { text: 'sky', x: 51, y: 54, w: 12, h: 21 },
  { text: 'Alfonso', x: 66.5, y: 54, w: 12.5, h: 21},
  { text: 'Temo', x: 82, y: 54, w: 13, h: 21 },
  { text: 'Irma', x: 3.5, y: 78, w: 12, h: 20 },
  { text: 'Pocho', x: 19, y: 78, w: 12, h: 20 },
  { text: 'Mundo', x: 34, y: 78, w: 11, h: 20 },
  { text: 'Martín', x: 48, y: 78, w: 12, h: 20 }
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
