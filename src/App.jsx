import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';

import mixpanel from './lib/mixpanel';

function App() {
  const jsConfetti = new JSConfetti();
  const [randomValor, setRandomValor] = useState({});

  const [valueSi, setValueSi] = useState(false);

  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [position, setPosition] = useState('relative');

  let random = [
    {
      id: 1,
      description: 'Chinita dime si por favor',
      img: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGR3bDZ4bjV6ZWx3M3N2cHQ2dXdkMnJtcTF2N2JpcW04eTc1OGp3ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yZOpxRV6alQGc/giphy.gif',
    },
    {
      id: 1,
      description: 'Te vas a quedar sin pokes.',
      img: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXNtdmEzODU0MWRqZWxvaDIxMmZ4NGhjbmNvOXdpZzh0d2h4cjNocyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SQQZhdNAcqNFu/giphy.gif',
    },
    {
      id: 2,
      description: 'Ya te doy un oportunidad más.',
      img: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDUxNDl4Nm1wOGExMjU4dHZodWd4cWF6ZnQxN2JkOHRuM3dqdmE2YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12Yai4F4pZpfdS/giphy.gif',
    },
    {
      id: 3,
      description: 'Ya esta si es tu última oportunidad.',
      img: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjVpMW42OWNkczlrdTNpM3B2cWI5dGF2bTV5MG5vdnU5NndhNjF6eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6rQAkBvurR6CI/giphy.gif',
    },
    {
      id: 4,
      description: 'Enserio? ya no jueges mi amor.',
      img: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWUxcTNiamJoNG5zeWExOGFkbTNza3EzcnMzN282d2llZWRpZWRsbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/43HKwx3jV6kyQ/giphy.gif',
    },
    {
      id: 5,
      description: 'Que no es gracioso ¬¬.',
      img: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGd2ZXZ2cnk5bWNkOXF0bmNwMmJmM25uczBlZHdlODljMHB0am9kdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rNmaq6keJtYNa/giphy.gif',
    },
    {
      id: 6,
      description: 'Oe que fue, ya hice la reserva.',
      img: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW9qb3Fna3l5cDJweXEzM3ZobXE3Zm1qOGtkNTN0Nzl0bXB2dzFybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1332tmUf9Myo4o/giphy.gif',
    },
    {
      id: 7,
      description: 'Esto no parará hasta que digas que si.',
      img: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnR5dWV2amdpODc2bXhrOG55eWFyeTJiYTV1a294anQ0NndmZHR2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/A8BNLzYs1QI7K/giphy.gif',
    },
    {
      id: 8,
      description: 'Le voy a contar a todos que no te bañas eh.',
      img: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3h2bnBsdmNjaHhhaTdocXZwc3hzNjdsNHdzdWM0aXp1dDdpYTBjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6cyM6ErehxET6/giphy.gif',
    },
    {
      id: 9,
      description: 'Chavita no sé cuantas más podré darte.',
      img: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDBtZGduY2ttaXVyN2NvN3Y1NnVjdjBkbXpndmZoY3F2NHczdDRtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kDXta0GrB9wx9EeaDO/giphy.gif',
    },
    {
      id: 10,
      description: 'Se te van a acabar enserio.',
      img: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWlvbGRqanJzZGY2ZXZtMHg4ZnJld2NsZ3g2ZHk0aHo3aGNnYjlrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i0lZAPw40F212/giphy.gif',
    },
    {
      id: 11,
      description: 'No me da para codificar más',
      img: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Qwd2o1MHNobm4ydmg5YXY2dTVpeGo5eW1mMHZjeXIxdDgxZXc5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OOezqqxPB8aJ2/giphy.gif',
    },
    {
      id: 12,
      description: 'Mentiraaa, podemos estar aquí todo el día muahahaha',
      img: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWtrNmNoOHdzaHFiZmhhcm5haHV3cGt4NGI3Y2I4Z25peTYwYmU1bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QgawLg4F0hJJe/giphy.gif',
    },
  ];

  const randomResponse = () => {
    mixpanel.track('Boton No Clickeado');

    let randX = Math.random() * 70;
    let randY = Math.random() * 80;

    let index = Math.floor(Math.random() * random.length);
    setPosition('absolute');
    setButtonPosition({ top: randY, left: randX });
    setRandomValor(random[index]);
  };

  useEffect(() => {
    mixpanel.track('Pagina Cargada');
  }, []);

  return (
    <main
      id="canvas"
      className="w-screen relative h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center "
    >
      {!valueSi ? (
        <div className="p-5">
          <h1 className="font-bold text-5xl text-center">
            Mi princesa, ¿Quieres ser mi San Valentin?
          </h1>
          <img
            src={
              Object.keys(randomValor).length === 0
                ? 'https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif'
                : randomValor.img
            }
            alt="San Valentin"
            className="mx-auto object-cover h-[200px]"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
            <button
              onClick={() => {
                mixpanel.track('Boton Si Clickeado');

                setValueSi(true);

                jsConfetti.addConfetti({
                  emojis: ['😍', '🥰', '❤️', '😘'],
                  emojiSize: 70,
                  confettiNumber: 200,
                });
              }}
              className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl`}
            >
              Si
            </button>
            <button
              className="bg-red-500 text-white min-w-48 font-bold p-2 rounded-md text-xl"
              onMouseOver={randomResponse}
              style={{
                position: position,
                top: `${buttonPosition.top}%`,
                left: `${buttonPosition.left}%`,
              }}
            >
              {Object.keys(randomValor).length === 0
                ? 'No'
                : randomValor.description}
              <span hidden>
                {
                  (document.title =
                    Object.keys(randomValor).length === 0
                      ? '¿Quieres ser mi San Valentin?'
                      : randomValor.description)
                }
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col space-y-10">
          <h1 className="text-4xl font-bold">
            Sabia que dirias que si ❤️!
          </h1>
          <img
            src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif"
            alt=""
            className="mx-auto"
          />
          <span hidden>{(document.title = 'Sabia que dirias que si ❤️!')}</span>
        </div>
      )}
    </main>
  );
}

export default App;

