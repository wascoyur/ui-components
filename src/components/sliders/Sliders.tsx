import styles from "./Sliders.module.css";

export const Sliders = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>CSS без JS — коллекция приёмов</h1>
      <div className={styles.grid}>
        {/* Scroll-snap */}
        <section className={styles.block}>
          <h2>Scroll-snap</h2>
          <div className={styles.slider}>
            <div className={styles.slide}>Слайд 1</div>
            <div className={styles.slide}>Слайд 2</div>
            <div className={styles.slide}>Слайд 3</div>
          </div>
        </section>

        {/* Smooth scroll */}
        <section className={styles.block}>
          <h2>Плавная прокрутка</h2>
          <nav className={styles.toc}>
            <a href="#one">Раздел 1</a>
            <a href="#two">Раздел 2</a>
            <a href="#three">Раздел 3</a>
          </nav>
          <div id="one" className={styles.section}>
            Раздел 1
          </div>
          <div id="two" className={styles.section}>
            Раздел 2
          </div>
          <div id="three" className={styles.section}>
            Раздел 3
          </div>
        </section>

        {/* Lightbox */}
        <section className={styles.block}>
          <h2>Лайтбокс :target</h2>
          <a href="#img1">
            <img
              className={styles.thumb}
              src="https://picsum.photos/id/40/300/200"
              alt="preview"
            />
          </a>
          <div id="img1" className={styles.lightbox}>
            <a href="#" className={styles.close}></a>
            <img src="https://picsum.photos/id/40/1200/800" alt="full" />
          </div>
        </section>

        {/* Accordion */}
        <section className={styles.block}>
          <h2>Аккордеон details/summary</h2>
          <details className={styles.item}>
            <summary>Вопрос 1</summary>
            <div className={styles.content}>Ответ 1</div>
          </details>
          <details className={styles.item}>
            <summary>Вопрос 2</summary>
            <div className={styles.content}>Ответ 2</div>
          </details>
        </section>

        {/* Parallax */}
        <section className={styles.block}>
          <h2>Параллакс</h2>
          <div className={styles.hero}>
            <h3>Фон фиксирован</h3>
          </div>
          <div className={styles.content}>Содержимое...</div>
        </section>

        {/* Prefers-reduced-motion */}
        <section className={styles.block}>
          <h2>Prefers-reduced-motion</h2>
          <button className={styles.pulse}>Кнопка</button>
        </section>

        {/* Inert modal */}
        <section className={styles.block}>
          <h2>Инертный фон</h2>
          <a href="#m">Открыть модалку</a>
          <div id="m" className={styles.modal}>
            <a href="#" className={styles.back}></a>
            <div className={styles.box}>Модалка</div>
          </div>
        </section>

        {/* Lazy images */}
        <section className={styles.block}>
          <h2>Lazy images</h2>
          <article className={styles.card}>
            <img
              loading="lazy"
              src="https://picsum.photos/id/200/600/400"
              alt="lazy"
            />
            <h3>Заголовок</h3>
            <p>Описание...</p>
          </article>
        </section>

        {/* Fluid typography */}
        <section className={styles.block}>
          <h2>Жидкая типографика</h2>
          <h1 className={styles.fluidH1}>Заголовок H1</h1>
          <p className={styles.fluidP}>Текст параграфа...</p>
        </section>
      </div>
    </div>
  );
};
