import React, { useState } from "react";
import css from "./CallBack.module.css";
import image from "./1.png";

const CallBack = () => {
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  console.log(file);

  return (
    <div className={css.container}>
      <h2>Реализуем ваши идеи</h2>
      <div className={css.formWrapper}>
        <p>
          Пришлите нам свой эскиз или опишите задумку и мы воплотим ее в жизнь в
          самые кратчайшие сроки
        </p>
        <input
          type="tel"
          placeholder="☎ +7 (___) ___ - __ - __"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={css.input}
        />
        <textarea
          placeholder="✏️ Ваш комментарий"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={css.textarea}
        />
        <label className={css.fileLabel}>
          📎 Прикрепить файл
          <input
            type="file"
            className={css.fileInput}
            onChange={handleFileChange}
          />
        </label>
        <button className={css.button}>Отправить</button>
      </div>
      <div className={css.imageWrapper}>
        <div className={css.imageBorder}></div>
        <img src={image} alt="Картинка" className={css.image} />
      </div>
    </div>
  );
};

export default CallBack;
