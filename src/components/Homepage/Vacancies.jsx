import React, { useEffect, useState, useRef } from "react";
import "../../styles/Vacancies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { motion } from "framer-motion";

const baseURL = import.meta.env.VITE_API_URL;

const Vacancies = () => {
  const [jobs, setJobs] = useState([]);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/user/jobs/getall`);
        if (res.data && res.data.error === false) {
          setJobs(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, [jobs]);

  return (
    <section className="vacancies-section">
      <p className="vacancies-label">
        <span className="vacancies-thread"></span>VANCANCIES
      </p>
      <div className="vacancies-header">
        <h2>Latest Job Openings</h2>
        <div className="vacancies-nav-buttons">
          <button ref={prevRef}>
            <FaChevronLeft />
          </button>
          <button ref={nextRef}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      {loading ? (
        <div className="vancancies-loader-container">
          <div className="vancancies-spinner" />
        </div>
      ) : (
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            1025: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          className="vacancies-swiper"
        >
          {jobs.map((job, index) => (
            <SwiperSlide key={job._id}>
              <motion.div
                className="vacancy-card"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <div className="vacancy-card-content">
                  <h3>{job.jobtitle}</h3>
                  <div className="vacancy-details">
                    <span>
                      <FaBriefcase /> {job.experience}
                    </span>
                    <span>
                      <FaLocationDot /> {job.location}
                    </span>
                  </div>
                  <Link
                    to={`/job/${job.jobtitle
                      .replace(/\s+/g, "-")
                      .toLowerCase()}/${job._id}`}
                    className="vacancy-view-btn"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Vacancies;
