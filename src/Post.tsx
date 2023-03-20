import React from "react";
import { useTelegram } from "./hooks/useTelegram";
import s from "./Page.module.css";

function Post() {
  const { user } = useTelegram();

  return (
    <div className={s.post}>
      <img
        className={s.image}
        src="https://artpostergallery.ru/userdata/image/thumbs/12/76/1276d540c94d37c5d0d95df24513d30f_2.jpg"
        alt="photo post"
      />
      <div className={s.content}>
        <div className={s.title}>
          <span>Lorem ipsum dolor sit amet, consectetur</span>
        </div>
        <div className={s.userBlock}>
          <img
            className={s.userPhoto}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII9U5dLvAgc70-YWpb-YbiGVvP4ptKjPekg&usqp=CAU"
            alt="user photo"
          />
          <div className={s.infoUser}>
            <span className={s.userName}>{user?.username}</span>
            <span className={s.time}>2m ago</span>
          </div>
        </div>
        <article className={s.article}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          consectetur maximus magna, quis porta turpis venenatis consectetur.
          Aliquam erat volutpat. Vivamus porttitor eros vel purus cursus semper.
          Quisque ac justo dignissim, tempus leo at, consectetur ligula.
          Praesent pulvinar urna sagittis consectetur posuere. Curabitur semper
          metus sed elit vestibulum suscipit. Aenean vel odio urna. Quisque
          gravida, felis nec laoreet elementum, risus diam commodo lacus, sed
          fermentum felis dui at justo. Ut et erat posuere, consequat enim sit
          amet, hendrerit elit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae;
        </article>
      </div>
    </div>
  );
}

export default Post;
