import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function TitleCards({ title, category }) {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjI0YWJkY2ZlYmZjZDRlNThmNGE2MDA1ZWJkNGQyZSIsIm5iZiI6MTc1MzM3NzYwOC4zNDA5OTk4LCJzdWIiOiI2ODgyNmI0ODY5MmI5NzU3NmUzOGVkNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cXaOiGMJW7qQ7USMJ3J7fr6feTa-sB5P0aLMaSd7wSw'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  return (
    <div className='max-w-full overflow-hidden px-4 sm:px-8 mb-16'>
      <h2 className='text-2xl sm:text-3xl font-bold mb-5 text-white'>{title ? title : "Popular on Netflix"}</h2>

      {/* Scrollable card container */}
      <div 
        ref={cardsRef}
        className='flex space-x-4 overflow-x-auto lg:overflow-x-hidden scrollbar-hide py-2 '
        tabIndex={0} // Makes it focusable for accessibility & keyboard scrolling
        role="list"
        aria-label={title ?? "Movie Titles"}
      >
        {apiData.map((card, index) => (
          <Link 
            to={`/player/${card.id}`} 
            key={card.id || index}
            className='min-w-[160px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px] flex-shrink-0 flex flex-col cursor-pointer'
            role="listitem"
          >
            <img 
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title}
              className='rounded-md w-full h-[100px] sm:h-[130px] md:h-[150px] lg:h-[160px] object-cover mb-2 transition-transform duration-300 hover:scale-105'
            />
            <p className='text-xs sm:text-sm md:text-base font-semibold text-white truncate'>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
