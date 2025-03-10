import Trash from "../../assets/trash.svg";

function UserCard({ user, onDelete }) {
  return (
    <div className="card">
      <div className="card__info">
        <p className="card__text">
          Nome: <span>{user.name}</span>
        </p>
        <p className="card__text">
          Idade: <span>{user.age}</span>
        </p>
        <p className="card__text">
          Email: <span>{user.email}</span>
        </p>
      </div>
      <div className="card__actions">
        <button
          className="card__button card__button--delete"
          onClick={() => onDelete(user.id)}
        >
          <img src={Trash} alt="Deletar" />
        </button>
      </div>
    </div>
  );
}

export default UserCard;
