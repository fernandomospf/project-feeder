import React , { useContext } from "react";
import Context from "../../Context";

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
    <form action="">
      <label>
        NOME:
        <input 
        value={nameProject}
        type="text" 
        placeholder="nome do projeto" 
        onChange={(e) => setNameProject(e.target.value)}
        />
      </label>

      <label>
        LINK (REPOSITÓRIO):
        <input
        value={repository}
        type="text" 
        placeholder="repositório" 
        onChange={(e) => setRepository(e.target.value)}
        />
      </label>

      <label>
        MODULO:
        <select name="module" value={module} onChange={(e) => setModule(e.target.value)}>
        <option value="fundamentals">Fundamentos</option>
        <option value="front_end">Front-end</option>
        <option value="back_end">Back-end</option>
        <option value="Computer_science">Ciência da Computação</option>
      </select>
      </label>


      <label>
      DESCRIÇÃO:
      <textarea 
      cols="30"
      name="description" 
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      rows="10" 
      />
      </label>

      <label> Vídeo: *
        <input 
        value={videoPlayer}
        type="text" 
        placeholder="link"
        onChange={(e) => setVideoPlayer(e.target.value)}
        />
      </label>

      <label>
        GIF:
        <input 
        value={gif}
        type="file" 
        accept="image/gif, image/jpeg, image/png"
        onChange={(e) => setGif(e.target.value)}
        />
      </label>

      <button>Enviar</button>

    </form>
  );
};

export default Created;
