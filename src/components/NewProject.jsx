import { useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onAdd }) {

const titolo = useRef();
const descrizone = useRef();
const scadenza = useRef();

function handleSave(){
  const titoloInserito = titolo.current.value;
  const descrizioneInserita = descrizone.current.value;
  const scadenzaInserita = scadenza.current.value;

  //valdiazione...
  onAdd({
    titolo: titoloInserito,
    descrizone: descrizioneInserita,
    scadenza: scadenzaInserita
  });
}

  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Elimina</button>
        </li>
        <li>
          <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={handleSave}>Salva</button>
        </li>
      </menu>
      <div>
        <Input type="text" label="Titolo" ref={titolo}/>
        <Input label="Descrizione" textarea ref={descrizone}/>
        <Input type="date" label="Scadenza" ref={scadenza}/>
      </div>
    </div>
  );
}
