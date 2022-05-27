import React, { useState } from "react";

function Search() {
  const [dataProjects, setDataProjects] = useState({
    idProject: "",
  });

  function handleInputChange(id, value) {
    return setDataProjects({
      [id]: value,
    });
  }

  function handleButton() {
    console.log('teste');
  }

  return (
    <>
      <input
        name="idProject"
        onChange={({ target: { name, value } }) =>
          handleInputChange(name, value)
        }
        placeholder="Project id"
        type="text"
        value={dataProjects.idProject}
      />
      <button onClick={handleButton}></button>
    </>
  );
}

export default Search;
