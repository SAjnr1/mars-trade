import { useEffect, useRef, useState } from "react";
import { supabase } from "../../supabaseClient";
import "./Gallery.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";

export default function PublicMedia() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [openIndex, setOpenIndex] = useState(null);
  const closeRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const { data, error } = await supabase
        .from("media")
        .select("*")
        .order("created_at", { ascending: false });

      if (cancelled) return;

      if (error) {
        setStatus("error");
        return;
      }
      setItems(data || []);
      setStatus("ready");
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const isOpen = openIndex !== null;

  // While the viewer is open: Escape closes it, the arrow keys move between
  // pictures, and the page behind it doesn't scroll.
  useEffect(() => {
    if (!isOpen) return;

    const total = items.length;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % total);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (closeRef.current) closeRef.current.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, items.length]);

  const close = () => setOpenIndex(null);
  const showPrev = () => setOpenIndex((i) => (i - 1 + items.length) % items.length);
  const showNext = () => setOpenIndex((i) => (i + 1) % items.length);

  return (
    <div className="gallery">
      <Navbar/>
      <div className="gallery-content">
        <header className="gallery-header">
          <h1>My Crochet <span>Collection</span></h1>
          <p>A collection of handmade pieces, custom creations, and little moments of creativity.</p>
        </header>

        {status === "loading" && <p className="gallery-load-muted">Loading pictures...</p>}

        {status === "error" && (
          <p className="gallery-stat">We couldn't load the pictures. Please try again later.</p>
        )}

        {status === "ready" && items.length === 0 && (
          <p className="gallery-stat">No pictures have been posted yet.</p>
        )}

        {status === "ready" && items.length > 0 && (
          <div className="gallery-grid gallery-grid--media" >
            {items.map((m, index) => (
              <div
                key={m.id}
                role="button"
                tabIndex={0}
                data-aos="fade-up"
                className="gallery-media__item"
                onClick={() => setOpenIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIndex(index);
                  }
                }}
                aria-label={`View picture ${index + 1} of ${items.length}`}
              >
                <img src={m.image_url} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>

      {openIndex !== null && items[openIndex] && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Picture viewer"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            className="gallery-lightbox__close"
            onClick={close}
            aria-label="Close"
          >
            ×
          </button>

          <img
            className="gallery-lightbox__img"
            src={items[openIndex].image_url}
            alt={`Picture ${openIndex + 1} of ${items.length}`}
            onClick={(e) => e.stopPropagation()}
          />

          {items.length > 1 && (
            <div className="gallery-lightbox__bar" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="gallery-lightbox__btn" onClick={showPrev}>
                Previous
              </button>
              <span>
                {openIndex + 1} / {items.length}
              </span>
              <button type="button" className="gallery-lightbox__btn" onClick={showNext}>
                Next
              </button>
            </div>
          )}
        </div>
      )}

      <Footer/>
    </div>
  );
}