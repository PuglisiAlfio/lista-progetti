import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject }) {
  return (
    <aside className="bg-stone-900 text-stone-50 w-1/3 px-8 py-16 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        I tuoi Progetti
      </h2>
      <div>
        <Button onClick={onStartAddProject}>
          + Nuovo Progetto
        </Button>
      </div>
    </aside>
  );
}
