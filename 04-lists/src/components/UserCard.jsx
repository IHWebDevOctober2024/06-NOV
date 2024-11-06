function UserCard({ user: { name, imageUrl, isAdmin, description } }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={name + " profile image"} />
      <h4>{name}</h4>
      <p>{description}</p>
      <p>Is admin: {isAdmin ? "✅" : "❌"}</p>
    </div>
  );
}

export default UserCard;
