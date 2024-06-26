import Button from "./Button.jsx";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="bg-stone-900 text-stone-50 w-1/3 px-8 py-16 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        I tuoi Progetti
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Nuovo Progetto</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let classiCSS = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

          if(project.id === selectedProjectId) {
            classiCSS += " bg-stone-800 text-stone-200"
          } else {
            classiCSS += " text-stone-400"
          }

          return (
            <li key={project.id}>
              <button
                className={classiCSS}
                onClick={() => onSelectProject(project.id)}
              >
                {project.titolo}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
