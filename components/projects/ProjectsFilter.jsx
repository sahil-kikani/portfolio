const selectOptions = [
	'All projects',
	'Web Application',
	'Web Tool',
	'Admin Panel'
];

function ProjectsFilter({ setSelectProject }) {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			<option value={setSelectProject} className="text-sm sm:text-md">
				All Projects
			</option>

			{selectOptions.map((option, i) => (
				<option className="text-normal sm:text-md" key={i}>
					{option}
				</option>
			))}
		</select>
	);
}

export default ProjectsFilter;
