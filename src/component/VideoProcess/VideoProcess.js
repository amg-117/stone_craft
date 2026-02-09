import css from "./VideoProcess.module.css";
import Video from "./Video.mp4";

const VideoProcess = () => {
  return (
    <div className={css.video_container}>
      <div className={css.video_title}>
        <h2>Как мы производим камень</h2>
        <div className={css.video_title_comments}>
          <div></div>
          <p>
            Производственный цех расположен в Кстовском районе, Нижегородской
            области и занимает более 6000 м2.
          </p>
          <p>
            Наличие многофункционального современного оборудования и хорошо
            развитой логистической сети позволяет минимизировать человеческий
            фактор при выпуске продукции, и осуществлять отгрузки нашим
            партнерам и клиентам точно в указанные сроки.
          </p>
        </div>
      </div>
      <video controls autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className={css.video_footer}></div>
    </div>
  );
};

export default VideoProcess;
