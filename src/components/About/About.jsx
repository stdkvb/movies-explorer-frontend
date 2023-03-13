import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="main__container">
        <h2 className="main__title">О проекте</h2>
        <div className="about__text">
          <div>
            <p className="about__subtitle">Дипломный проект включал 5 этапов</p>
            <p className="about__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div>
            <p className="about__subtitle">На выполнение диплома ушло 5 недель</p>
            <p className="about__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about__timeline">
          <div className="about__timeline-column">
            <p className="about__timeline-top about__timeline-top_colored">1 неделя</p>
            <p className="about__timeline-bottom">Back-end</p>
          </div>
          <div className="about__timeline-column">
            <p className="about__timeline-top">4 недели</p>
            <p className="about__timeline-bottom">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
