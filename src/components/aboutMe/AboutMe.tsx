import { observer } from 'mobx-react';
import React from 'react';

import './about-me.scss';

export const AboutMe: React.FC = observer(({}) => {
  return (
    <div className={'about-me'}>
      <h2 className={'about-me-title'}>ABOUT ME.</h2>
      <div className={'about-me-text-container'}>
        <div>
          <h3>Background</h3>
          <p>
            Originally from Finland, I moved to Scoland nearly a decade ago. First, I got my
            bachelor's in Earth Science and then moved onto studying Environmental Entrepreneurship.
            I got a 1st in my master's degree and after a bit of relocation across the country, I
            got a job in the customer care department of a tech company working in sustainable
            transport alternatives.
          </p>
          <h3>Journey into Web Developent</h3>
          <p>
            I am a creative person and spend most of my free time learning new things or putting old
            skills into practise. The idea of coding seemed a little daunting at first. I loved the
            idea of it, I come from a family of developers and share my life with another so the
            life of a developer didn't seem too alien to me. But would I be able to do it?
          </p>
          <p>
            I started doing online lessons on Codecademy in the evenings after work and soon
            realised that coding is like any craft: you learn the rules, techniques and then apply
            those and use your creativity to solve problems. After a couple of months of doing
            classes in the evenings I realised it was time to start studying full time. So I left my
            job and started studying on my own. I began by following Codecademy courses but soon
            enough started to work on my own projects. My partner is a Lead Developer and his
            support and insights have been invaluable
          </p>
          <h3>Work Experience</h3>
          <p>
            Having worked for a tech company's customer care team primarily remotely for 2.5 years,
            I gained good understanding of working for a tech company in general. My
            responsibilities included answering customer queries and helping them solve any
            technical difficulties with the mobile app we were making. I would also occasionally do
            light testing to verify customers' issues and submit bug reports to our QA department.
          </p>
          <p>
            When not answering customer queries, I was responsible for taking care of a test user
            group. This involved maintaining a good relationship with our test users, gathering
            feedback from them in regular basis as well as processing the feedback data and
            reporting any insights and findings to country management and the global tech team. I
            was also responsible for improving ways of communication and knowledge sharing within
            our team as well as ensuring that our customer facing help centre articles were clear
            and relevant.
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <h4>Technical Skills</h4>
        <ul>
          <li>HTML, CSS, Sass</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>MobX</li>
          <li>GitHub</li>
          <li>Visual Studio Code</li>
          <li>Jira, Confluence</li>
        </ul>
        <h4>Soft Skills</h4>
        <ul>
          <li>Communication</li>
          <li>Organisation</li>
          <li>Team Player</li>
          <li>Initiative</li>
          <li>Self-driven</li>
          <li>Problem solving</li>
        </ul>
      </div>
    </div>
  );
});
