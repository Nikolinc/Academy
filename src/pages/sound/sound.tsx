import './sound.css'
import ArrowNext from "../../assets/Next.svg";
import ArrowPrev from "../../assets/Prev.svg"

function Sound() {

  const $ = (selector: string) => {
    return document.querySelector(selector);
  };

  const next = () => {

    let removeItem = "item_5";

    const hide = $(".hide");
    if (hide) {
      removeItem = (hide.classList[0] === ".hide" ? hide.classList[1] : hide.classList[0]);
      hide.remove();
    }

    const prevElement = $(".prev");
    if (prevElement) {
      const item = (prevElement.classList[0] === ".prev" ? prevElement.classList[1] : prevElement.classList[0]);
      prevElement.classList.add("hide", item);
      prevElement.classList.remove("prev");
    }

    const act = $(".act");
    if (act) {
      const item = (act.classList[0] === ".act" ? act.classList[1] : act.classList[0]);
      act.classList.add("prev", item);
      act.classList.remove("act");
    }

    const nextElement = $(".next");
    if (nextElement) {
      const arr = Array.from(nextElement.classList);
      let item;
      arr.forEach((itemClass) => { if (itemClass.indexOf("item") !== -1) item = itemClass });
      nextElement.classList.add("act", `${item}`);
      nextElement.classList.remove("next");
    }

    const newNext = $(".new-next");
    if (newNext) {
      const arr = Array.from(newNext.classList);
      let item;
      arr.forEach((itemClass) => { if (itemClass.indexOf("item") !== -1) item = itemClass });
      newNext.classList.add("next", `${item}`);
      newNext.classList.remove("new-next");
    }

    const addedEl = document.createElement('li');
    addedEl.classList.add("next", "new-next", removeItem);

    const list = $(".list");
    if (list) {
      list.appendChild(addedEl);
    }
  };

  const prev = () => {

    let removeItem = "item_5";

    const newNext = $(".new-next");
    if (newNext) {
      const arr = Array.from(newNext.classList);
      arr.forEach((itemClass) => { if (itemClass.indexOf("item") !== -1) removeItem = itemClass });
      newNext.remove();
    }

    const nextElement = $(".next");
    if (nextElement) {
      const arr = Array.from(nextElement.classList);
      let item;
      arr.forEach((itemClass) => { if (itemClass.indexOf("item") !== -1) item = itemClass });
      nextElement.classList.add("new-next", `${item}`);
    }

    const act = $(".act");
    if (act) {
      const item = (act.classList[0] === ".act" ? act.classList[1] : act.classList[0]);
      act.classList.add("next", item);
      act.classList.remove("act");
    }

    const prevElement = $(".prev");
    if (prevElement) {
      const item = (prevElement.classList[0] === ".prev" ? prevElement.classList[1] : prevElement.classList[0]);
      prevElement.classList.add("act", item);
      prevElement.classList.remove("prev");
    }

    const hide = $(".hide");
    if (hide) {
      const item = (hide.classList[0] === ".hide" ? hide.classList[1] : hide.classList[0]);
      hide.classList.add("prev", item);
      hide.classList.remove("hide");
    }

    const addedEl = document.createElement('li');
    addedEl.classList.add("hide", removeItem);

    const list = $(".list");
    if (list) {
      list.insertBefore(addedEl, list.firstChild);
    }
  };

  const handleSwipeLeft = () => {
    next();
  };

  const handleSwipeRight = () => {
    prev();
  };

  return (
    <div className="sound-page">
      <ul className="list">
        <li className="prev item_1"></li>
        <li className="act item_2"></li>
        <li className="next item_3"></li>
        <li className="next new-next item_4"></li>
      </ul>
      <div className="button-list">
        <button onClick={handleSwipeRight}><img src={ArrowPrev} /></button>
        <button onClick={handleSwipeLeft}><img src={ArrowNext} /></button>
      </div>
      <div
        className="swipe"
        onTouchStart={(e) => {
          const touch = e.touches[0];
          const startX = touch.clientX;

          const onTouchMove = (e: TouchEvent) => {
            const touchMove = e.touches[0];
            const dist = touchMove.clientX - startX;

            if (dist > 50) {
              handleSwipeRight();
            } else if (dist < -50) {
              handleSwipeLeft();
            }

            document.removeEventListener('touchmove', onTouchMove);
          };

          document.addEventListener('touchmove', onTouchMove);
        }}
      ></div>
    </div>
  );
}


export default Sound;
