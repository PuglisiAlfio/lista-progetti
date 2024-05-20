import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProject({ onStartAddProject }) {
  return (
    <div className="mt-2 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="lista vuota"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        Nessun progetto selezionato
      </h2>
      <p className="text-stone-400 mb-4">Seleziona un progetto o creane uno</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Crea nuovo progetto</Button>
      </p>
    </div>
  );
}
