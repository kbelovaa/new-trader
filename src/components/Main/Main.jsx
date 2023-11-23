import React from 'react';
import { useOutletContext } from 'react-router-dom';
import devicesImg from '../../images/devices.png';
import chart from '../../images/chart.png';
import './Main.scss';

const Main = () => {
  const { whyRef, lessonsRef, pricingRef } = useOutletContext();

  return (
    <div className='main'>
      <section className="slide-section">
        <div className="container">
          <div className="slide">
            <h1 className="slide__title">New to trading?</h1>
            <img src={devicesImg} alt="Devices" className="slide__image" />
            <button className='slide__btn btn-light'>Book a call</button>
          </div>
        </div>
      </section>
      <section ref={whyRef} className='why-section'>
        <div className="container">
          <div className="why">
            <h2 className="why__title title">Why trading?</h2>
            <p className="why__text text">
              Learning to trade is a journey of self-discovery, financial education, and personal growth. While the path may be challenging, the rewards are significant. If you are willing to invest the time, effort, and dedication required, you will find a world of opportunities awaiting you in the market.
            </p>
          </div>
        </div>
      </section>
      <section className='opportunities-section'>
        <div className="container">
          <div className="opportunities">
            <h2 className="opportunities__title">Learning to trade can empower you in multiple facets of your life</h2>
            <div className="opportunities__list">
              <div className="opportunities__item">
                <h3 className="opportunities__subtitle">Financial</h3>
                <p className="opportunities__text text">
                  When you trade effectively, you generate income, accumulate wealth, and ultimately achieve financial independence. It provides an avenue to leverage capital and investments, with the potential to outperform traditional forms of income.
                </p>
              </div>
              <div className="opportunities__item">
                <h3 className="opportunities__subtitle">Lifestyle</h3>
                <p className="opportunities__text text">
                  Trading provides the flexibility to tailor a lifestyle according to your preferences. The ability<br />to place and manage trades directly from your mobile phone and automate trades for execution at predefined entries offers convenience and eliminates the need to sit in front of a computer.
                </p>
              </div>
              <div className="opportunities__item">
                <h3 className="opportunities__subtitle">Intellectual</h3>
                <p className="opportunities__text text">
                  Trading is an intellectual pursuit that sharpens analytical thinking and decision-making skills, instilling discipline and risk management abilities. It demands continuous learning and adaptability amid market challenges, reflecting dedication and resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={pricingRef} className='pricing-section'>
        <div className="container">
          <div className="pricing">
            <h2 className="pricing__title title">Pricing</h2>
            <p className="pricing__text text">
              This high-impact program is priced at $10,000 and operates on a per-lesson payment structure. It has 40 lessons divided into 4 modules. At the beginning of each day, we will set a target and establish a daily time limit. During each session, you will receive an invoice via email, to be paid using <span className='pricing__payment'>PayPal</span> or <span className='pricing__payment'>Revolut</span>. After each payment, you will receive a receipt.
            </p>
          </div>
        </div>
      </section>
      <section ref={lessonsRef} className='lessons-section'>
        <div className="container">
          <div className="lessons">
            <h2 className="lessons__title title">The lessons</h2>
            <p className="lessons__text text">
              Each lesson covers 1-3 topics based on material complexity and comprehension
            </p>
            <ul className="lessons__list">
              <li className='lessons__item'>
                <h4 className="lessons__subtitle">1. Teaching Format</h4>
                <p className="lessons__text text">
                  Teaching occurs individually via Zoom or Teams
                </p>
              </li>
              <li className='lessons__item'>
                <h4 className="lessons__subtitle">2. Module Structure</h4>
                <p className="lessons__text text">
                  The program comprises 4 modules, each containing 10 lessons
                </p>
              </li>
              <li className='lessons__item'>
                <h4 className="lessons__subtitle">3. Lesson Content</h4>
                <p className="lessons__text text">
                  Each lesson covers 1-3 topics based on material complexity and comprehension
                </p>
              </li>
              <li className='lessons__item'>
                <h4 className="lessons__subtitle">4. Lesson Sequence</h4>
                <p className="lessons__text text">
                  The lesson begins with outlining objectives for clear learning goals<br />
                  Systematic navigation through material using visual aids like illustrations or charts<br />
                  Recap of key points and their significance<br />
                  A Q&A session concludes the lesson
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='learning-section'>
        <div className="learning-wrap">
          <div className="container">
            <div className="learning-intro">
              <h2 className="learning-intro__title title">
                Learning to trade
              </h2>
              <p className="learning-intro__text text">
                Starting as a new trader presents challenges with information overload and selecting the right learning path. This personalized, high-impact program filters the noise, helps you avoid mistakes that cost both time and money, and accelerates your journey toward profitable trading.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="learning">
            <div className="learning__part">
              <h3 className="learning__subtitle">The challenge</h3>
              <p className="learning__text text">
                The reason it is so hard starting out as a new trader is that there is just so much noise. And as a beginner you do not have the skill to know what to filter out and what to listen to. You do not know what is right and what is wrong and are getting different opinions from all angles. Between YouTube, Instagram, forums, books - the amount of trading information is endless. But how much of it is trustworthy? Without experience, it is nearly impossible to identify quality advice from empty promises. Some of the advice might even come with good intentions, but are just plain wrong. And so, it is very hard to get through this phase and chose a learning path where you in essence not just are wasting time and money.
              </p>
            </div>
            <div className="learning__part">
              <h3 className="learning__subtitle">Solution</h3>
              <p className="learning__text text">
                With 25 years of trading experience across various market conditions, I offer a personalized program that teach you to navigate the noise, avoid common mistakes, and develop the knowledge and skills to trade profitably. This comprehensive and immersive program leverages time-tested methods that dramatically shorten your learning curve. Slick salespeople on social media are entertaining, but real trading is serious business. There are no shortcuts or black box but the correct approach makes time to value (TTV) shorter. This program is only for those committed and willing to do the necessary work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='journey-section'>
        <div className="container">
          <div className="journey">
            <h2 className="journey__title title">The journey</h2>
            <p className="journey__text text">
              Before we start trading, before we look at a chart and well before we even implement a strategy, it is critical to understand what it really takes to become a consistently profitable trader. If we do not prepare ourselves properly, then we really are decreasing our probability for success well before we even click a buy or sell button. The journey of a new trader often unfolds through these five stages.
            </p>
            {/* <img src={chart} alt="Chart" className='journey__chart' /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
