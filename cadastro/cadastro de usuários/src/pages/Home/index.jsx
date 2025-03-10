import { useEffect, useRef, useState } from "react";
import "./style.css";
import UserCard from "./UserCard";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const getUsers = async () => {
    const usersFromApi = await api.get("/usuarios");
    setUsers(usersFromApi.data);
  };

  const createUser = async () => {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers();
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/usuarios/${id}`, { data: { id } });
      getUsers();
    } catch (error) {
      console.error("Erro ao deletar:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form className="form">
        <h1 className="form__title">Cadastro de Usuários</h1>
        <input
          className="form__input"
          placeholder="Nome"
          name="nome"
          type="text"
          ref={inputName}
        />
        <input
          className="form__input"
          placeholder="Idade"
          name="idade"
          type="number"
          ref={inputAge}
        />
        <input
          className="form__input"
          placeholder="E-mail"
          name="email"
          type="email"
          ref={inputEmail}
        />
        <button className="form__button" onClick={createUser} type="button">
          Cadastrar
        </button>
      </form>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} onDelete={deleteUser} />
        ))}
      </div>
    </div>
  );
}

export default Home;
