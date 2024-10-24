import React from 'react'
import proflieImg from '../assets/images/proflie_img.jpg';



export default function Aboutme() {
  return (
    <>
        <img className='img' src={proflieImg} alt="프로필이미지" />

        <div className='text'>
            <p className='info_title'>✋🏻처음 뵙겠습니다. | <em>개발자로서 성장이 기대되는 신입 홍민정입니다.</em></p>
            <p className='dec' >끊임없이 도전하고 배움을 두려워하지 않는 성격을 가지고 있습니다.</p>
            <p className='dec'>어려움에 직면할 때 포기하지 않고 해결책을 찾아내는 과정에서 큰 성취감을 느끼며</p>
            <p className='dec'>그 과정에서 얻은 지식을 바탕으로 더 좋은 결과를 만들어내고자 합니다.</p>
            <p className='dec'>또한, 다양한 경험을 통해 쌓은 지식을 동료들과 나누며</p>
            <p className='dec'>팀의 성공에 보탬이 되는 것을 중요하게 생각합니다.</p>
            <div className='info'>
                <p>📇 &nbsp;|&nbsp; <span className='info_dec'>홍 민 정 (Hong Min Jung)</span></p>
                <p>🎂 &nbsp;|&nbsp; <span className='info_dec'>1999.04.15 (만 25세)</span></p>
                <p>📞 &nbsp;|&nbsp; <span className='info_dec'>010.9974.9518</span></p>
                <p>📧 &nbsp;|&nbsp; <span className='info_dec'>hminjung99@gmail.com</span></p>
            </div>
        </div>
    </>
  )
}
