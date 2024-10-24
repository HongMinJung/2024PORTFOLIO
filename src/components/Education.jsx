import React from 'react';
;
export default function Education() {
  return (
    <div className='education_container'>
        <div className='education_box'>
            {/* left_box */}
            <div className='education_inner'>
                <h4 className='education_title'>[프론트엔드개발]리액트(React. js)프로그래밍&nbsp;|&nbsp;<em>2023.07 - 2023.09</em></h4>
                <div className='education_dec_box'>
                    <p className='education_dec'> - 리액트의 개념 컴포넌트를 이해하고, 함수형 컴포넌트와 클래스형 컴포넌트의 차이점을 배웠습니다.</p>
                    <p className='education_dec'> - useState, useEffect, useContext와 같은 기본 Hooks의 사용법을 배웠습니다.</p>
                    <p className='education_dec'> - 리액트 라우터를 활용하여 라우팅을 구현하고, SPA(Single Page Application)의 구조를 익혔습니다.</p>
                    <p className='education_dec'> - 리액트 프로젝트를 테스트하고, 개선하며, 최종적으로 배포하는 능력을 함양하여 실제 프로젝트에 적용할 수 있는 실무 기술을 배웠습니다.</p>
                </div>
            </div>

            {/* right_box */}
            <div className='education_inner'>
                <h4 className='education_title'>[스마트웹&콘텐츠개발]스마트웹콘텐츠 UI/UX디자인&프론트엔드(React.js)&nbsp;|&nbsp;<em>2021.04 - 2021.09</em></h4>
                <div className='education_dec_box'>
                    <p className='education_dec'> - HTML, CSS, JavaScript 이용하여 웹사이트와 반응형 웹을 기획하고 구현하는 방법과 애니메이션 효과와 이벤트 실행 방법을 배웠습니다.</p>
                    <p className='education_dec'> - jQuery와 React.js를 사용하여 동적인 웹 애플리케이션을 개발하는 기술과 컴포넌트 기반 개발 및 상태 관리를 통해 효율적인 코드 작성을 배웠습니다.</p>
                    <p className='education_dec'> - 실제 서비스에 배포하는 과정을 배우고, 이를 통해 유지보수의 중요성과 실무에 적용할 수 있는 역량을 키웠습니다.</p>
                    <p className='education_dec'> - Photoshop, illustrator, Xd를 활영하여 기본 툴 사용법을 익혀 기초적인 UI/UX 디자인을 배웠습니다.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
