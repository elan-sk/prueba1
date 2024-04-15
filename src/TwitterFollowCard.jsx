import { useState } from "react";

export function TwitterFollowCard({children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard d-flex justify-content-between w-100">
      <header className="tw-followCard-header d-flex align-items-center">
        <figure style={{ width: "70px" }} className="m-0">
          <img
            className="rounded-circle img-fluid "
            src={`https://unavatar.io/${userName}`}
          />
        </figure>
        <div className="tw-followCard-info d-flex flex-column mx-1">
          <strong className="tw-followCard-infoUserName">{children}</strong>
          <span className="tw-followCard-info">@{userName}</span>
        </div>
      </header>
      <aside className="tw-followCard-contentButton d-flex align-items-center">
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
