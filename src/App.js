import './App.css';
import React, { useState, useEffect} from 'react';

import axios from 'axios';

// Name app: searchimg
// ACCESS_KEY: irCZM-4JHDCM-WqlguSykBh6tKkOJMI17LAL-AacwxI
// SECRET_KEY: KHSvmiR-yMq5fkaJ8zjbANIMebye9sb-fbqhjm0Widc
// Link: https://api.unsplash.com/photos/?client_id=irCZM-4JHDCM-WqlguSykBh6tKkOJMI17LAL-AacwxI

function SearchBar({onSearch}) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  }

  return (
    <div className='search-bar'>
      <input className='search-input'
        type="text"
        value={query}
        onChange={(e) => 
        {
          console.log("e.target.value: ", e.target.value)
          setQuery(e.target.value)
        }}
        placeholder="Search for photos"
      />
      <button className='search-btn' onClick={handleSearch}>Search</button>
    </div>
  );
}
function Gallery({ images }){
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => {
    setSelectedImage(image);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    
    <>
      {images.map(image => (
        <div key={image.id} className="gallery-item">
          <img src={image.urls.thumb} alt={image.alt_description} onClick={() => openModal(image)} />
        </div>
      ))}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />} 
    </>
    
  );

}

function Modal({ image, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.urls.full} alt={image.alt_description} />
      </div>
    </div>
  );
}


export default function App() {

  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [page, setPage] = useState(1); // TRang kết quả tìm kiếm
  const [loading, setLoading] = useState(false);
  const [moreResult, setMoreResult] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const isScrolledToBottom = (element) => {
    return window.scrollY + 800 >= element.scrollHeight ;//Khi thanh cuộn tới cuối danh sách
  }
  
  const handleScroll = () => {

    const gallery = document.querySelector('.gallery');
    if (gallery && isScrolledToBottom(gallery) && !loading && moreResult && window.scrollY > prevScrollY) {
      // Đã cuộn xuống cuối danh sách hình ảnh, chưa tải hết, không trong quá trình tải, không tải lại
      setPage(prevPage => prevPage + 1);
    }
    setPrevScrollY(window.scrollY); 
  };
  useEffect(() => {// mounted Scroll
    window.addEventListener('scroll', handleScroll);
    return () => { //unmounted Scroll
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    if (query) {
      setLoading(true);
      // tạo thời gian chờ 1 giây trước khi gọi API để chờ loading
      setTimeout(() => {
      axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query,
          client_id: 'irCZM-4JHDCM-WqlguSykBh6tKkOJMI17LAL-AacwxI',
          page, 
        },
      })
      .then(response => {
        const newResults = response.data.results;
        if (page === 1) {
          setSearchResult(newResults); // kết quả đầu tiên
        } else {
          setSearchResult(prevResults => [...prevResults, ...newResults]); //nối kết quả cũ
        }
        setLoading(false);
        if (newResults.length === 0) {
          // không còn hình ảnh nào mới thì dừng tải thêm
          setMoreResult(false);
        }
      })
      .catch(error => {
        console.error('Error searching for images:', error);
        setMoreResult(false);
        setLoading(false);
      });
      }, 1000); 
    }
  }, [query, page, moreResult]);

  const handleSearch = (value) => {
    setQuery(value);
    setPage(1); // Reset số trang về 1 khi tìm kiếm của từ khóa mới
    setMoreResult(true); // Reset trạng thái tìm kiếm mới
  };


  return (
  <div className='App'>  
    <SearchBar onSearch={handleSearch} />
    <div className='gallery'>
    <Gallery  images={searchResult} />
    {loading && (
      <div className="overlay">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading...</p>
        </div>
      </div>
    )}
    {!moreResult && <strong>* No more result *</strong>}
    </div>
    
  </div>);
}

