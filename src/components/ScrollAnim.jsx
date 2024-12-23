import { useEffect, useRef, useState } from 'react';

function ScrollAnim() {
  const canvasRef = useRef(null);
  const ref = useRef(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const images = [];
      for (let i = 1; i <= 252; i++) {
        const img = new Image();
        img.src = `/animimage/${i}.webp`;
        await img.decode();
        images.push(img);
      }
      setLoadedImages(images);
    };
    loadImages();
  }, []);

  // Handle scrolling
  const handleScroll = () => {
    if (loadedImages.length && isInView) {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const index = Math.min(
        Math.floor((scrollPosition / totalHeight) * (loadedImages.length - 1)),
        loadedImages.length - 1
      );
      setCurrentIndex(index);
    }
  };

  // Render current frame
  useEffect(() => {
    if (canvasRef.current && loadedImages.length) {
      const context = canvasRef.current.getContext('2d');
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      context.drawImage(loadedImages[currentIndex], 0, 0);
    }
  }, [currentIndex, loadedImages]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Scroll event listener
  useEffect(() => {
    if (isInView) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView, loadedImages]);

  return (
    <div className="scroll-anim-container">
      <div ref={ref}>
        <canvas ref={canvasRef}  width={1000} height={500} 
        />
      

      </div>
    </div>
  );
}

export default ScrollAnim;
