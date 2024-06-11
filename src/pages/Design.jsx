import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.webp";
import t5 from "../assets/t5.jpg";
import t6 from "../assets/t6.jpg";
import t7 from "../assets/t7.jpg";
import t8 from "../assets/t8.webp";
import t9 from "../assets/t9.avif";
import t10 from "../assets/t10.jpg";
import t11 from "../assets/t11.jpg";
import t12 from "../assets/t12.jpg";
import t13 from "../assets/t13.jpg";
import t14 from "../assets/t14.jpg";
import { useRef } from "react";

const Design = () => {
  const modal = useRef(null);
  const modalImg = useRef(null);
  const captionText = useRef(null);
  function onOpen(e) {
    modal.current.style.display = "flex";
    modalImg.current.src = e.target.src;
    captionText.current.innerHTML = e.target.alt;
  }
  function closeFunc() {
    modal.current.style.display = "none";
  }
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-24">
        <h1 className="common_title">Qurilish materiallar namunalari</h1>

        <div className="design_wrapper">
          <div className="d1">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t1}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d2">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t2}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d3">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t3}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d4">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t4}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d5">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t5}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d6">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t6}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d7">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t7}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d8">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t8}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d9">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t9}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d10">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t10}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d11">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t11}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d12">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t12}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d13">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t13}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d14">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={t14}
              id="myImg"
              alt="Qurilish materiallari to'plami"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>

          {/* <img className="d1" src={i1} alt="" /> */}
          {/* <img className="d2" src={i2} alt="" />
          <img className="d3" src={i3} alt="" />
          <img className="d4" src={i4} alt="" />
          <img className="d5" src={i5} alt="" />
          <img className="d6" src={i6} alt="" />
          <img className="d7" src={i7} alt="" />
          <img className="d8" src={i8} alt="" />
          <img className="d9" src={i9} alt="" />
          <img className="d10" src={i10} alt="" />
          <img className="d11" src={i11} alt="" />
          <img className="d12" src={i12} alt="" />
          <img className="d13" src={i13} alt="" />
          <img className="d14" src={i14} alt="" /> */}
          {/* <img className="d15" src={i15} alt="" />
          <img className="d16" src={i16} alt="" />
          <img className="d17 sm:block hidden" src={i17} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Design;
