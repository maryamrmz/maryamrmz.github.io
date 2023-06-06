import Image from 'next/image';

export default function Home() {
  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible' />
        <meta
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
          name='viewport'
        />
        <title>Portfolio | Maryam Ramezanpoor</title>
        <meta property='og:title' content='Portfolio | Maryam Ramezanpoor' />
        <meta property='og:locale' content='en_US' />
        <link rel='canonical' href='//' />
        <meta property='og:url' content='//' />
        <meta name='description' content='This is a portfolio' />
        <link rel='icon' type='image/png' href='/assets/img/favicon.png' />
        <meta name='theme-color' content='#5540af' />
        <meta property='og:image' content='//assets/img/social.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@tailwindmade' />
        <link
          crossOrigin='anonymous'
          href='https://fonts.gstatic.com'
          rel='preconnect'
        />

        <script
          defer
          src='https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js'
        ></script>
        <script
          defer
          src='https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js'
        ></script>
      </head>
      <body className='relative '>
        <div id='main' className='relative'>
          <div>
            <div
              className='relative bg-cover bg-center bg-no-repeat py-8'
              // style="background-image: url(/assets/img/bg-hero.jpg)"
            >
              <div className='absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat'></div>

              <div className='container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48'>
                <div className='flex flex-col items-center justify-center lg:flex-row'>
                  <div className='rounded-full border-8 border-primary shadow-xl'>
                    <Image
                      src='/assets/img/me.jpeg'
                      className='h-48 rounded-full sm:h-56'
                      alt='author'
                    />
                  </div>
                  <div className='pt-8 sm:pt-10 lg:pl-8 lg:pt-0'>
                    <h1 className='text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl'>
                      Hello I&rsquo;m Maryam!
                    </h1>
                    <div className='flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start'>
                      <div className='flex items-center justify-center pl-0 sm:justify-start md:pl-1'>
                        <p className='font-body text-lg uppercase text-white'>
                          Let`s connect
                        </p>
                        <div className='hidden sm:block'>
                          <i className='bx bx-chevron-right text-3xl text-yellow'></i>
                        </div>
                      </div>
                      <div className='flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0'>
                        <a
                          href='https://www.linkedin.com/in/maryamrmz/'
                          className='pl-4'
                        >
                          <i className='bx bxl-linkedin text-2xl text-white hover:text-yellow'></i>
                        </a>
                        <a href='https://github.com/maryamrmz'>
                          <i className='bx bxl-github-square text-2xl text-white hover:text-yellow'></i>
                        </a>
                        <a
                          href='https://twitter.com/rmz_maryam'
                          className='pl-4'
                        >
                          <i className='bx bxl-twitter text-2xl text-white hover:text-yellow'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-grey-50' id='about'>
              <div className='container flex flex-col items-center py-16 md:py-20 lg:flex-row'>
                <div className='w-full text-center'>
                  <h2 className='font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl'>
                    Who am I?
                  </h2>
                  <h4 className='pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl'>
                    I&apos; Maryam Ramezanpoor, a Frontend Developer
                  </h4>
                  <p className='pt-6 font-body leading-relaxed text-grey-20'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <div className='flex flex-col justify-center pt-6 sm:flex-row lg:justify-start'>
                    <div className='flex items-center justify-center sm:justify-start'>
                      <p className='font-body text-lg font-semibold uppercase text-grey-20'>
                        Connect with me
                      </p>
                      <div className='hidden sm:block'>
                        <i className='bx bx-chevron-right text-2xl text-primary'></i>
                      </div>
                    </div>
                    <div className='flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0'>
                      <a
                        href='https://www.linkedin.com/in/maryamrmz/'
                        className='pl-4'
                      >
                        <i className='bx bxl-linkedin text-2xl text-white hover:text-yellow'></i>
                      </a>
                      <a href='https://github.com/maryamrmz'>
                        <i className='bx bxl-github-square text-2xl text-white hover:text-yellow'></i>
                      </a>
                      <a href='https://twitter.com/rmz_maryam' className='pl-4'>
                        <i className='bx bxl-twitter text-2xl text-white hover:text-yellow'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='container py-16 md:py-20' id='services'>
              <div className='grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3'>
                <div className='group rounded px-8 py-12 shadow hover:bg-primary'>
                  <div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
                    <div className='hidden group-hover:block'>
                      <Image
                        src='/assets/img/icon-email-white.svg'
                        alt='Email Marketing icon'
                      />
                    </div>
                    <div className='block group-hover:hidden'>
                      <Image
                        src='/assets/img/icon-email-black.svg'
                        alt='Email Marketing icon'
                      />
                    </div>
                  </div>
                  <div className='text-center'>
                    <h3 className='pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl'>
                      Email Development
                    </h3>
                    <p className='text-grey pt-4 text-sm group-hover:text-white md:text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className='group rounded px-8 py-12 shadow hover:bg-primary'>
                  <div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
                    <div className='hidden group-hover:block'>
                      <Image
                        src='/assets/img/icon-design-white.svg'
                        alt='Theme Design icon'
                      />
                    </div>
                    <div className='block group-hover:hidden'>
                      <Image
                        src='/assets/img/icon-design-black.svg'
                        alt='Theme Design icon'
                      />
                    </div>
                  </div>
                  <div className='text-center'>
                    <h3 className='pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl'>
                      Graphic Design
                    </h3>
                    <p className='text-grey pt-4 text-sm group-hover:text-white md:text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className='group rounded px-8 py-12 shadow hover:bg-primary'>
                  <div className='mx-auto h-24 w-24 text-center xl:h-28 xl:w-28'>
                    <div className='hidden group-hover:block'>
                      <Image
                        src='/assets/img/icon-graphics-white.svg'
                        alt='Graphic Design icon'
                      />
                    </div>
                    <div className='block group-hover:hidden'>
                      <Image
                        src='/assets/img/icon-graphics-black.svg'
                        alt='Graphic Design icon'
                      />
                    </div>
                  </div>
                  <div className='text-center'>
                    <h3 className='pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl'>
                      Web Design
                    </h3>
                    <p className='text-grey pt-4 text-sm group-hover:text-white md:text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className='container py-16 md:py-20' id='work'>
              <h2 className='text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl'>
                My work experience
              </h2>
              <h3 className='pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl'>
                Here`s what I did before freelancing
              </h3>

              <div className='relative mx-auto mt-12 flex w-full flex-col lg:w-2/3'>
                <span className='left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block'></span>

                <div className='mt-8 flex flex-col text-center md:flex-row md:text-left'>
                  <div className='md:w-2/5'>
                    <div className='flex justify-center md:justify-start'>
                      <span className='shrink-0'>
                        <Image
                          src='/assets/img/logo-spotify.svg'
                          className='h-auto w-32'
                          alt='company logo'
                        />
                      </span>
                      <div className='relative ml-3 hidden w-full md:block'>
                        <span className='absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70'></span>
                      </div>
                    </div>
                  </div>
                  <div className='md:w-3/5'>
                    <div className='relative flex md:pl-18'>
                      <span className='absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block'></span>

                      <div className='mt-1 flex'>
                        <i className='bx bxs-right-arrow hidden text-primary md:block'></i>
                        <div className='md:-mt-1 md:pl-8'>
                          <span className='block font-body font-bold text-grey-40'>
                            Apr 2015 - Mar 2018
                          </span>
                          <span className='block pt-2 font-header text-xl font-bold uppercase text-primary'>
                            Frontend Developer
                          </span>
                          <div className='pt-2'>
                            <span className='block font-body text-black'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum mattis felis vitae risus pulvinar
                              tincidunt. Nam ac venenatis enim.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-8 flex flex-col text-center md:flex-row md:text-left'>
                  <div className='md:w-2/5'>
                    <div className='flex justify-center md:justify-start'>
                      <span className='shrink-0'>
                        <Image
                          src='/assets/img/logo-microsoft.svg'
                          className='h-auto w-32'
                          alt='company logo'
                        />
                      </span>
                      <div className='relative ml-3 hidden w-full md:block'>
                        <span className='absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70'></span>
                      </div>
                    </div>
                  </div>
                  <div className='md:w-3/5'>
                    <div className='relative flex md:pl-18'>
                      <span className='absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block'></span>

                      <div className='mt-1 flex'>
                        <i className='bx bxs-right-arrow hidden text-primary md:block'></i>
                        <div className='md:-mt-1 md:pl-8'>
                          <span className='block font-body font-bold text-grey-40'>
                            Mar 2018 - September 2019
                          </span>
                          <span className='block pt-2 font-header text-xl font-bold uppercase text-primary'>
                            Software Engineer
                          </span>
                          <div className='pt-2'>
                            <span className='block font-body text-black'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum mattis felis vitae risus pulvinar
                              tincidunt. Nam ac venenatis enim.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mt-8 flex flex-col text-center md:flex-row md:text-left'>
                  <div className='md:w-2/5'>
                    <div className='flex justify-center md:justify-start'>
                      <span className='shrink-0'>
                        <Image
                          src='/assets/img/logo-fedex.svg'
                          className='h-auto w-32'
                          alt='company logo'
                        />
                      </span>
                      <div className='relative ml-3 hidden w-full md:block'>
                        <span className='absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70'></span>
                      </div>
                    </div>
                  </div>
                  <div className='md:w-3/5'>
                    <div className='relative flex md:pl-18'>
                      <span className='absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block'></span>

                      <div className='mt-1 flex'>
                        <i className='bx bxs-right-arrow hidden text-primary md:block'></i>
                        <div className='md:-mt-1 md:pl-8'>
                          <span className='block font-body font-bold text-grey-40'>
                            October 2019 - Feb 2021
                          </span>
                          <span className='block pt-2 font-header text-xl font-bold uppercase text-primary'>
                            DevOps Engineer
                          </span>
                          <div className='pt-2'>
                            <span className='block font-body text-black'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Vestibulum mattis felis vitae risus pulvinar
                              tincidunt. Nam ac venenatis enim.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div
              className='bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24'
              // style="background-image: url(/assets/img/experience-figure.png)"
              id='statistics'
            >
              <div className='container'>
                <div className='mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full'>
                  <div className='grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5'>
                    <div className='flex flex-col items-center justify-center text-center md:flex-row md:text-left'>
                      <div>
                        <Image
                          src='/assets/img/icon-project.svg'
                          className='mx-auto h-12 w-auto md:h-20'
                          alt='icon project'
                        />
                      </div>
                      <div className='pt-5 md:pl-5 md:pt-0'>
                        <h1 className='font-body text-2xl font-bold text-primary md:text-4xl'>
                          12
                        </h1>
                        <h4 className='text-grey-dark font-header text-base font-medium leading-loose md:text-xl'>
                          Finished Projects
                        </h4>
                      </div>
                    </div>

                    <div className='flex flex-col items-center justify-center text-center md:flex-row md:text-left'>
                      <div>
                        <Image
                          src='/assets/img/icon-award.svg'
                          className='mx-auto h-12 w-auto md:h-20'
                          alt='icon award'
                        />
                      </div>
                      <div className='pt-5 md:pl-5 md:pt-0'>
                        <h1 className='font-body text-2xl font-bold text-primary md:text-4xl'>
                          3
                        </h1>
                        <h4 className='text-grey-dark font-header text-base font-medium leading-loose md:text-xl'>
                          Awards Won
                        </h4>
                      </div>
                    </div>

                    <div className='mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0'>
                      <div>
                        <Image
                          src='/assets/img/icon-happy.svg'
                          className='mx-auto h-12 w-auto md:h-20'
                          alt='icon happy clients'
                        />
                      </div>
                      <div className='pt-5 md:pl-5 md:pt-0'>
                        <h1 className='font-body text-2xl font-bold text-primary md:text-4xl'>
                          8
                        </h1>
                        <h4 className='text-grey-dark font-header text-base font-medium leading-loose md:text-xl'>
                          Happy Clients
                        </h4>
                      </div>
                    </div>

                    <div className='mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0'>
                      <div>
                        <Image
                          src='/assets/img/icon-puzzle.svg'
                          className='mx-auto h-12 w-auto md:h-20'
                          alt='icon puzzle'
                        />
                      </div>
                      <div className='pt-5 md:pl-5 md:pt-0'>
                        <h1 className='font-body text-2xl font-bold text-primary md:text-4xl'>
                          99
                        </h1>
                        <h4 className='text-grey-dark font-header text-base font-medium leading-loose md:text-xl'>
                          Bugs Fixed
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className='bg-primary'>
            <div className='container flex flex-col justify-between py-6 sm:flex-row'>
              <p className='text-center font-body text-white md:text-left'>
                © Copyright 2023. All right reserved, Maryam.
              </p>
              <div className='flex items-center justify-center pt-5 sm:justify-start sm:pt-0'>
                <a
                  href='https://www.linkedin.com/in/maryamrmz/'
                  className='pl-4'
                >
                  <i className='bx bxl-linkedin text-2xl text-white hover:text-yellow'></i>
                </a>
                <a href='https://github.com/maryamrmz'>
                  <i className='bx bxl-github-square text-2xl text-white hover:text-yellow'></i>
                </a>
                <a href='https://twitter.com/rmz_maryam' className='pl-4'>
                  <i className='bx bxl-twitter text-2xl text-white hover:text-yellow'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <script src='/assets/js/main.js'></script> */}
      </body>
    </>
  );
}
