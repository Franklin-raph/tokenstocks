import React from 'react'
import img1 from '../../assets/images/img1.webp'
import img2 from '../../assets/images/img2.webp'
import img3 from '../../assets/images/img3.webp'
import img4 from '../../assets/images/img1.svg'
import img5 from '../../assets/images/img2.svg'
import img6 from '../../assets/images/img7.svg'
import img7 from '../../assets/images/img3.png'
import img8 from '../../assets/images/img4.svg'
import img9 from '../../assets/images/img5.svg'
import img10 from '../../assets/images/img6.svg'

const Home = () => {
  return (
    <div>
        <div className='bg-img'>
            <div className='absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                <p className='text-[#2998FF]'>TECHNOLOGY AND SERVICE PROVIDER</p>
                <h1 className='text-[3.75rem] text-white leading-[65px] mt-3'>Top-tier turnkey <span className='font-[600]'>tokenization provider</span> </h1>
                <p className='text-[#979fa8] text-[1rem] mt-3'>Stobox is an award-winning tokenization company that provides technology and consulting to help clients leverage digital assets and tokenized securities.</p>
                <button className='bg-[#2998FF] mt-5 py-[0.875rem] px-[1.5rem] w-[11.25rem] rounded-[0.6875rem] text-white'>Learn More</button>
                <div className='flex items-center justify-center gap-[3rem] mt-[4rem] text-[#979fa8]'>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={img1} alt="" className='w-[8.125rem]'/>
                        <p className='text-[.625rem]'>Best STO Platform 2019</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={img2} alt="" className='w-[8.125rem]'/>
                        <p className='text-[.625rem]'>Best STO Platform 2019</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={img3} alt="" className='w-[8.125rem]'/>
                        <p className='text-[.625rem]'>Best STO Platform 2019</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-[3rem] flex items-start justify-between w-[90%] mx-auto'>
            <div className='w-[500px]'>
                <p className='text-[#2998FF] mb-2'>TOKENIZATION WITH STOBOX</p>
                <p className='text-[#20242e] text-[32px]'>
                    Securities <span className='font-[600]'>issuance</span>, <span className='font-[600]'>management</span>, and <span className='font-[600]'>trading</span> on a blockchain
                </p>
                <p className='text-[#979fa8] my-3'>
                    Tokenization as a cutting-edge technology that optimizes and simplifies the process of issuing corporate securities on the blockchain.
                </p>
                <p className='text-[#979fa8]'>
                    Tokenization brings efficiency to the traditionally complex issuance of securities by leveraging blockchain technology, offering a more streamlined and technologically advanced approach to the entire process.
                </p>
            </div>
            <div className='w-[600px] grid grid-cols-2 gap-[24px]'>
                <div>
                    <p className='text-[#456ab8] ml-7 text-[32px] font-medium mb-4'>11</p>
                    <p className='text-[#979fa8] pl-7 text-[13px]' style={{ borderLeft:"1px solid #2998FF" }}>
                        Successfully tokenized enterprises from various jurisdictions: US, Canada, Europe, and the UK.
                    </p>
                </div>
                <div>
                    <p className='text-[#2998ff] ml-7 text-[32px] font-medium mb-4'>61</p>
                    <p className='text-[#979fa8] pl-7 text-[13px]' style={{ borderLeft:"1px solid #2998FF" }}>
                        A growing number of clients are engaging into assets tokenization. From early-stage consulting to STO execution monitoring.
                    </p>
                </div>
                <div>
                    <p className='text-[#456ab8] ml-7 text-[32px] font-medium mb-4'>18,450</p>
                    <p className='text-[#979fa8] pl-7 text-[13px]' style={{ borderLeft:"1px solid #2998FF" }}>
                        A growing community of both accredited and retail registered investors exploring Real World Assets tokenization.
                    </p>
                </div>
                <div>
                    <p className='text-[#2998ff] ml-7 text-[32px] font-medium mb-4'>4</p>
                    <p className='text-[#979fa8] pl-7 text-[13px]' style={{ borderLeft:"1px solid #2998FF" }}>
                        The team has designed, developed, and currently manages a number of blockchain-based products.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between my-[4rem] w-[65%] mx-auto'>
            <img src={img4} className='w-[100px]' alt="" />
            <img src={img5} className='w-[100px]' alt="" />
            <img src={img6} className='w-[100px]' alt="" />
            <img src={img7} className='w-[100px]' alt="" />
            <img src={img8} className='w-[100px]' alt="" />
            <img src={img9} className='w-[100px]' alt="" />
            <img src={img10} className='w-[100px]' alt="" />
        </div>
    </div>
  )
}

export default Home