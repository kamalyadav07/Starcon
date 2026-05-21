function ProjectsTable({ projects }) {
  return (
    <div className="overflow-x-auto">

      <table className="min-w-full border border-gray-300 text-sm">

        <thead className="bg-[#1b365d] text-white">

          <tr>

            <th className="border p-3 text-left whitespace-nowrap">
              S.No
            </th>

            <th className="border p-3 text-left whitespace-nowrap">
              Name of Work
            </th>

            <th className="border p-3 text-left whitespace-nowrap">
              Principal Client
            </th>

            <th className="border p-3 text-left whitespace-nowrap">
              Location
            </th>

          </tr>

        </thead>

        <tbody>

          {projects.map((project, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100"
            >

              <td className="border p-3 whitespace-nowrap">
                {index + 1}
              </td>

              <td className="border p-3 min-w-[250px]">
                {project.name}
              </td>

              <td className="border p-3 whitespace-nowrap">
                {project.client}
              </td>

              <td className="border p-3 whitespace-nowrap">
                {project.location}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProjectsTable;