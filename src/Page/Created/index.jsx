import React, { useContext } from "react";
import Context from "../../Context";
import { SCreated } from "../../Style";

const Created = () => {
  const {
    description,
    setDescription,
    gif,
    setGif,
    module,
    setModule,
    nameProject,
    setNameProject,
    repository,
    setRepository,
    videoPlayer,
    setVideoPlayer,
  } = useContext(Context);

  return (
    <SCreated action="">
      <h1>Feeder</h1>
      <h3>Insira um novo projeto</h3>
      <input
        value={nameProject}
        type="text"
        placeholder="Nome do projeto"
        onChange={(e) => setNameProject(e.target.value)}
      />

      <input
        value={repository}
        type="text"
        placeholder="Link do repositório"
        onChange={(e) => setRepository(e.target.value)}
      />
      <label htmlFor="">
        Selecione um módulo
        <select
          name="module"
          value={module}
          onChange={(e) => setModule(e.target.value)}
          className="input-select"
        >
          <option value="fundamentals">Fundamentos</option>
          <option value="front_end">Front-end</option>
          <option value="back_end">Back-end</option>
          <option value="Computer_science">Ciência da Computação</option>
        </select>
      </label>

      <textarea
        cols="30"
        placeholder="Breve desrição do projeto..."
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="10"
      />

        <span>
          <abbr title="Uso opcional">*</abbr>
        </span>
        <input
          value={videoPlayer}
          type="text"
          placeholder="Link do video"
          onChange={(e) => setVideoPlayer(e.target.value)}
        />

      <label>
        Adicionar um GIF
        <input
          value={gif}
          type="file"
          className="input-gif"
          accept="image/gif, image/jpeg, image/png"
          onChange={(e) => setGif(e.target.value)}
        />
      </label>

      <div className="container-button">
        <button>Enviar</button>
        <button>Limpar</button>
      </div>
    </SCreated>
  );
};

export default Created;
