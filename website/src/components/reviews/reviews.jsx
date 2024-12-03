import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Filter, 
  SortDesc 
} from 'lucide-react';

const ReviewsPage = () => {
  // Comprehensive reviews data with more details
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Simbarashe Mutombe",
      avatar: "/s.jpg",
      rating: 5,
      date: "2024-01-15",
      text: "Absolutely incredible work! My vintage Mustang looked completely destroyed after an accident, but Wonderland Panel Beating restored it to its former glory. Their attention to detail is unmatched.",
      service: "Classic Car Restoration",
      likes: 24,
      dislikes: 2,
      verified: true
    },
    {
      id: 2,
      name: "Sarah Smith",
      avatar: "/re.jpg",
      rating: 5,
      date: "2024-02-22",
      text: "Professional, quick, and their customer service is exceptional. They explained every step of the repair process and kept me informed throughout.",
      service: "Collision Repair",
      likes: 18,
      dislikes: 1,
      verified: true
    },
    {
      id: 3,
      name: "Tanyaradzwa Matarutse",
      avatar: "/t1.jpg",
      rating: 4,
      date: "2024-03-10",
      text: "Great service and reasonable pricing. Repaired my daily driver after a minor fender bender. The finish is flawless!",
      service: "Minor Dent Repair",
      likes: 12,
      dislikes: 3,
      verified: false
    },
    // Add more reviews...
  ]);

  // State for filtering and sorting
  const [filter, setFilter] = useState({
    rating: null,
    service: null,
    sortBy: 'recent'
  });

  // Render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 inline-block ${
          index < rating ? 'text-yellow-500' : 'text-gray-300'
        }`} 
      />
    ));
  };

  // Filter and sort reviews
  const processedReviews = reviews
    .filter(review => 
      (filter.rating ? review.rating === filter.rating : true) &&
      (filter.service ? review.service === filter.service : true)
    )
    .sort((a, b) => {
      switch(filter.sortBy) {
        case 'likes':
          return b.likes - a.likes;
        case 'rating':
          return b.rating - a.rating;
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

  // Interaction for helpful votes
  const handleHelpfulVote = (reviewId, type) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, 
            likes: type === 'like' ? review.likes + 1 : review.likes,
            dislikes: type === 'dislike' ? review.dislikes + 1 : review.dislikes
          }
        : review
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 sm:py-40">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Customer Reviews
        </motion.h1>

        {/* Filters and Sorting */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {/* Rating Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="text-blue-600" />
            <select 
              value={filter.rating || ''}
              onChange={(e) => setFilter(prev => ({
                ...prev, 
                rating: e.target.value ? parseInt(e.target.value) : null
              }))}
              className="rounded-lg border-gray-300 focus:ring-blue-500"
            >
              <option value="">All Ratings</option>
              {[5, 4, 3, 2, 1].map(rating => (
                <option key={rating} value={rating}>
                  {rating} Stars
                </option>
              ))}
            </select>
          </div>

          {/* Service Filter */}
          <div className="flex items-center space-x-2">
            <SortDesc className="text-blue-600" />
            <select 
              value={filter.service || ''}
              onChange={(e) => setFilter(prev => ({
                ...prev, 
                service: e.target.value || null
              }))}
              className="rounded-lg border-gray-300 focus:ring-blue-500"
            >
              <option value="">All Services</option>
              <option value="Classic Car Restoration">Classic Car Restoration</option>
              <option value="Collision Repair">Collision Repair</option>
              <option value="Minor Dent Repair">Minor Dent Repair</option>
            </select>
          </div>

          {/* Sorting */}
          <div className="flex items-center space-x-2">
            <SortDesc className="text-blue-600" />
            <select 
              value={filter.sortBy}
              onChange={(e) => setFilter(prev => ({
                ...prev, 
                sortBy: e.target.value
              }))}
              className="rounded-lg border-gray-300 focus:ring-blue-500"
            >
              <option value="recent">Most Recent</option>
              <option value="rating">Highest Rated</option>
              <option value="likes">Most Helpful</option>
            </select>
          </div>
        </div>

        {/* Reviews Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {processedReviews.map((review) => (
            <motion.div
              key={review.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100 
                  }
                }
              }}
              className="
                bg-white rounded-xl shadow-lg 
                p-6 relative overflow-hidden
                transform transition-all 
                hover:scale-105 hover:shadow-xl
              "
            >
              {/* Verified Badge */}
              {review.verified && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                  Verified
                </div>
              )}

              {/* Review Header */}
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <div>{renderStars(review.rating)}</div>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-gray-600 mb-4 italic">
                "{review.text}"
              </p>

              {/* Review Metadata */}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{review.service}</span>
                <span>{new Date(review.date).toLocaleDateString()}</span>
              </div>

              {/* Helpful Votes */}
              <div className="flex justify-center space-x-4 mt-4">
                <button 
                  onClick={() => handleHelpfulVote(review.id, 'like')}
                  className="flex items-center space-x-2 text-green-600 hover:text-green-800"
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span>{review.likes}</span>
                </button>
                <button 
                  onClick={() => handleHelpfulVote(review.id, 'dislike')}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-800"
                >
                  <ThumbsDown className="w-5 h-5" />
                  <span>{review.dislikes}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Reviews Message */}
        {processedReviews.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            No reviews match your current filters.
          </div>
        )}

        {/* Write a Review CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button 
            className="
              bg-blue-600 text-white 
              px-8 py-3 rounded-full 
              hover:bg-blue-700 
              transition-colors
              shadow-lg
            "
          >
            Write a Review
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsPage;