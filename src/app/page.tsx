'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.125,
  });

  const fadeInClass = 'fade-in';
  const fadeInVisibleClass = 'visible';

  useEffect(() => {
    // Set isVisible to true after the component has mounted
    setIsVisible(true);
  }, []);

  return (
    <main className='flex flex-col'>
      <section className='header h-[calc(100vh-200px)]' ref={ref}>
        <div
          className={`flex sticky top-0 z-10 ${fadeInClass} ${
            isVisible ? fadeInVisibleClass : ''
          }`}
        >
          <div className='flex flex-col profile sm:p-8 md:p-16'>
            <h2 className='profile-name font-semibold text-2xl'>
              Tedane Blake
            </h2>
            <p className='text-2xl'>Software Developer, Father, Learner</p>

            <h2 id='fixed-profile-name' className='fixed bg-red-500 z-20'>
              {inView ? '' : 'Tedane Blake'}
            </h2>
          </div>
          <div className='nav sm:p-8 md:p-16'>
            <ul className='nav-list flex'>
              <li className='nav-item'>Home</li>
              <li className='nav-item'>About</li>
              <li className='nav-item'>
                <a href='#section-1'>Open</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        id='section-1'
        className={`min-h-screen border border-red-400 bg-white sticky top-[15rem] z-10 rounded-t-3xl h-[calc(100vh-200px)]  ${fadeInClass} ${
          isVisible ? fadeInVisibleClass : ''
        }`}
      >
        <div className='content '></div>
      </section>
      <section className='min-h-screen border border-blue-400 bg-white sticky top-0 z-10'></section>
    </main>
  );
}
