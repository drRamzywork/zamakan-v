import { Container, Typography, } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'
import { imgs } from '@/assets/constants'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { motion } from 'framer-motion';
const Verses = ({ dataCityPoetry, dataCityData }) => {
  const { ra3y } = imgs;
  const [expandedStates, setExpandedStates] = useState({});

  const adjustImageUrl = (imageUrl) => {
    if (imageUrl?.startsWith('https')) {
      return imageUrl;
    } else {
      return `https://zamakan.suwa.io${imageUrl}`;
    }
  };


  const toggleExpanded = (index) => {
    setExpandedStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };




  return (
    <>
      <section id='Verses' className={styles.Verses} dir='rtl' >
        <div className={styles.sec_container}>
          <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >

            <div className={styles.info_sec}>
              <div className={styles.sec_title}>
                <Typography variant='h3'>عن المكان</Typography>
              </div>
              <div className={styles.boxes_container}>

                {/* <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography >الاسم السابق</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>
                      {
                        dataCityData.otherNames === null || dataCityData.otherNames === "" ? "------" : dataCityData.otherNames
                      }
                    </Typography>
                  </div>
                </div> */}
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>الاسم الحالي</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>
                      {
                        dataCityData.name === null ? "------" : dataCityData.name
                      }
                    </Typography>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>أسماء أخرى</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>
                      {
                        dataCityData.otherNames === null || dataCityData.otherNames === "" ? "------" : dataCityData.otherNames
                      }
                    </Typography>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>المنطقة الإدراية</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>
                      {
                        dataCityData.parentName6 === null || dataCityData.parentName6 === "" ? "------" : dataCityData.parentName6
                      }

                    </Typography>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>قيمة المكان</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>
                      {
                        dataCityData.qema === null ? "------" : dataCityData.qema
                      }

                    </Typography>
                  </div>
                </div>

                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>وصف المكان قديمًا</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>
                      {
                        dataCityData.wasfOld === null ? "------" : dataCityData.wasfOld
                      }


                    </Typography>
                  </div>
                </div>

                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>وصف المكان حديثًا</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>
                      {
                        dataCityData.wasfNew === null ? "------" : dataCityData.wasfNew
                      }

                    </Typography>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.title}>
                    <Typography>الموقع</Typography>
                  </div>
                  <div className={styles.name}>
                    <Typography>
                      {
                        dataCityData.site === null ? "------" : dataCityData.site
                      }
                    </Typography>
                  </div>
                </div>

              </div>
            </div>
          </Container>



          <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className='disable_container_mobile'>

            <Container sx={{ maxWidth: "1400px" }} maxWidth={false} >
              <div className={styles.sec_title}>
                <Typography variant='h3'>أبيات قيلت في {dataCityData.name}</Typography>
              </div>
            </Container>
            <Container sx={{ maxWidth: "1400px" }} maxWidth={false} className={styles.slider_container}>
              <div className={styles.slider_sec}>
                <Swiper
                  breakpoints={{
                    300: {
                      slidesPerView: 1.2,
                      spaceBetween: 16,
                    },
                    400: {
                      slidesPerView: 1.2,
                      spaceBetween: 16,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    768: {
                      slidesPerView: 2.5,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 24,

                    },
                  }}

                  spaceBetween={24}
                  slidesPerView={3}
                  pagination={{ clickable: true }}
                  className={styles.swiper}
                >
                  {Array.isArray(dataCityPoetry) ? dataCityPoetry.map((poet, index) => {
                    const [beforeDots, afterDots] = poet.poetryParts.split('...');

                    return (
                      <SwiperSlide key={poet.id}>
                        <div className={styles.box}>
                          <div className={styles.box_container}>
                            <Link href={`/poet/${poet.poetId}`} className={styles.info}>
                              <div className={styles.img_container}>
                                <img src={adjustImageUrl(poet.poetIcon)} alt={poet.poetName} />
                              </div>

                              <div className={styles.text_container}>
                                <div className={styles.name}>
                                  <Typography>{poet.poetName}</Typography>
                                </div>
                                <div className={styles.type}>
                                  <Typography>{poet.placeName}</Typography>
                                </div>
                              </div>
                            </Link>

                            <motion.div
                              className={`${styles.desc_container} ${expandedStates[index] ? styles.expanded : ''}`}
                              initial={{ height: '70px' }}
                              animate={{ height: expandedStates[index] ? 'auto' : '70px' }}
                              transition={{ duration: 0.5 }}
                            >
                              <Typography >{poet.entrance}</Typography>
                            </motion.div>
                            <div className={styles.more_btn} onClick={() => toggleExpanded(index)}>
                              <Typography>{expandedStates[index] ? 'أقل' : 'المزيد'}</Typography>
                            </div>


                            <Link href={`/poetry/${poet.id}`} className={styles.said}>
                              {/* <div className={styles.title}>
                              <Typography>يقول</Typography>
                            </div> */}
                              <div className={styles.desc}>
                                <Typography>
                                  {beforeDots}
                                </Typography>
                                <br />
                                <Typography>
                                  {afterDots}
                                </Typography>

                              </div>
                            </Link>

                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  }) : null}

                </Swiper>
              </div>

            </Container>

          </Container>

        </div >
      </section >

    </>
  )
}

export default Verses