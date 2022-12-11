import './About.css';

function About() {
  return (
    <section className='about'>
      <div className='about__container'>
        <h2 className='about__title'>О проекте</h2>
        <div className='about__text'>
          <div>
            <span className='about__subtitle'>Дипломный проект включал 5 этапов</span>
            <span className='about__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</span>
          </div>
          <div>
            <span className='about__subtitle'>На выполнение диплома ушло 5 недель</span>
            <span className='about__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</span>
          </div>
        </div>
        <div className='about__timeline'>
          <div className='about__timeline-column'>
            <div className='about__timeline-top about__timeline-top_colored'>1 неделя</div>
            <span className='about__timeline-bottom'>backend</span>
          </div>
          <div className='about__timeline-column'>
            <span className='about__timeline-top'>4 недели</span>
            <span className='about__timeline-bottom'>frontend</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
