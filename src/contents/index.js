import project01 from '../assets/images/project01.jpg';
import project02 from '../assets/images/project02.jpg';
import project03 from '../assets/images/project03.jpg';
import project04 from '../assets/images/project04.jpg';


// Gnb 메뉴
export const headerNav = [
    {
      title: 'HOME',
      url: '#intro'
    },

    {
      title: 'PROFLIE',
      url: '#proflie'
    },

    {
      title: 'PROJECT',
      url: '#project'
    },

    {
      title: 'CONTACT',
      url: '#contact'
    }
];

// Main Text
export const introText = {
  title:'PORTFOLIO',
  desc: ['앞으로의 성장이 기대되는','WEB PUBLISHER','HONG MIN JUNG']
}


// Project
export const siteText = [
  // #01
  {
    title: '2024 PORTFOLIO WEB SITE',
    day: '참여도 100% | 기간 5일',
    desc: 'React기반으로 제작된 2024 개인 포트폴리오 사이트입니다. 프로필 영역, 프로젝트 영역, 컨택 영역을 배치하였으며 스크롤 위치에 따라 이동하는 애니메이션을 적용하여 제작하였습니다.',
    img: project01,
    code: 'https://github.com/HongMinJung/2024PORTFOLIO',
    view: 'https://2024portfoliosite.netlify.app/',
    name: '24포트폴리로 개인 사이트'
  },
  // #02
  {
    title: 'HONG TUBE',
    day: '참여도 100% | 기간 3일',
    desc: 'React와 YouTube API를 사용하여 제작한 개인 유튜브 사이트입니다. 유명 패션 유튜버를 한눈에 볼 수 있도록 유튜버 Category를 배치하였습니다. ',
    img: project02,
    code: 'https://github.com/HongMinJung/HONGTUBE-YouTubeAPI',
    view: 'https://hongtube.netlify.app/',
    name: '24포트폴리로 개인 사이트'
  },
  // #03
  {
    title: 'HOTEL TWELVE',
    day: '참여도 100% | 기간 7일',
    desc: '가상의 호텔 사이트입니다. 바쁜 일상 속 힐링이 필요한 사람들에게 중점을 둔 사이트로 제이쿼리 스와이퍼 슬라이드를 이용하여 제작하였습니다.',
    img: project03,
    code: 'https://github.com/HongMinJung/TWELVE-Hotel',
    view: 'https://hoteltwelve.netlify.app/',
    name: '투엘브 호텔 사이트'
  },
  // #01
  {
    title: '지겨줄개',
    day: '참여도 100% | 기간 2일',
    desc: '유기견 보호소 홍보 사이트입니다. 브라우저 크기에 따라 달라지는 반응형 웹 사이트를 제작하였습니다.',
    img: project04,
    code: 'https://github.com/HongMinJung/SUPPORT-Page',
    view: 'https://supportdog.netlify.app/',
    name: '지겨줄개 홀보 페이지'
  }
]

// contact
export const contactText = [
  {
    link: 'mailto:hminjung99@gmail.com',
    title: 'E-Mail'
  },
  {
    link: 'https://github.com/HongMinJung',
    title: 'GitHub'
  },
  {
    link: 'https://drive.google.com/file/d/1dbcfg57JLk6pO3ayp9XTLmY4fzKLuUEs/view?usp=sharing',
    title: 'Resume'
  }
]
