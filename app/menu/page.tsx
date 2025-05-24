import React from "react";

const menuData = [
  {
    category: "غذاهای ایرانی",
    emoji: "🍢",
    items: [
      { name: "کباب کوبیده", price: 120000, desc: "دو سیخ گوشت گوسفندی با برنج ایرانی" },
      { name: "جوجه کباب", price: 110000, desc: "سینه مرغ زعفرانی با برنج ایرانی" },
      { name: "زرشک پلو با مرغ", price: 95000, desc: "مرغ زعفرانی با برنج و زرشک" },
    ],
  },
  {
    category: "پیش‌غذا",
    emoji: "🥗",
    items: [
      { name: "سوپ جو", price: 35000, desc: "سوپ جو تازه و خوشمزه" },
      { name: "سالاد شیرازی", price: 25000, desc: "خیار، گوجه، پیاز و آبغوره" },
    ],
  },
  {
    category: "نوشیدنی",
    emoji: "🥤",
    items: [
      { name: "دوغ محلی", price: 15000, desc: "دوغ سنتی و خنک" },
      { name: "نوشابه قوطی", price: 12000, desc: "انواع نوشابه قوطی" },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="container py-5">
      <div className="text-center mb-4">
        <span className="fw-bold text-warning" style={{fontSize: 20}}>
          <span role="img" aria-label="quote">❝</span> انتخاب غذای ایرانی، انتخاب سلامتی و اصالت <span role="img" aria-label="quote">❞</span>
        </span>
      </div>
      <h2 className="mb-4 text-center" style={{color: '#4fc3f7', fontWeight: 700}}>منوی رستوران</h2>
      <p className="mb-4 text-center" style={{color: '#f3f3f3'}}>لطفاً از میان دسته‌بندی‌های زیر غذای مورد نظر خود را انتخاب کنید.</p>
      <div
        className="accordion mb-4 mx-auto shadow-lg rounded"
        id="menuAccordion"
        style={{
          maxWidth: 900,
          background: "rgba(30, 30, 30, 0.7)",
          backdropFilter: "blur(8px)",
          border: "1.5px solid #eab30833",
        }}
      >
        {menuData.map((cat, idx) => (
          <div className="accordion-item border-0" key={cat.category} style={{background: "transparent"}}>
            <h2 className="accordion-header" id={`heading${idx}`}>
              <button
                className={`accordion-button${idx !== 0 ? ' collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${idx}`}
                aria-expanded={idx === 0}
                aria-controls={`collapse${idx}`}
                style={{fontWeight: 700, color: '#eab308', background: "rgba(255,255,255,0.08)", fontSize: 20}}
              >
                <span style={{fontSize: 28, marginLeft: 8}}>{cat.emoji}</span>
                {cat.category}
              </button>
            </h2>
            <div
              id={`collapse${idx}`}
              className={`accordion-collapse collapse${idx === 0 ? ' show' : ''}`}
              aria-labelledby={`heading${idx}`}
              data-bs-parent="#menuAccordion"
            >
              <div className="accordion-body" style={{background: "transparent"}}>
                <div className="row g-4">
                  {cat.items.map(item => (
                    <div className="col-12 col-md-6" key={item.name}>
                      <div
                        className="card h-100 shadow border-0"
                        style={{
                          background: "rgba(255,255,255,0.10)",
                          backdropFilter: "blur(4px)",
                          borderRadius: 18,
                        }}
                      >
                        <div className="card-body d-flex flex-column justify-content-between">
                          <div>
                            <h5 className="card-title mb-2" style={{color: '#4fc3f7', fontWeight: 700}}>{item.name}</h5>
                            <p className="card-text mb-2 text-light" style={{minHeight: 32}}>{item.desc}</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <span className="fw-bold" style={{color: '#eab308', fontSize: 18}}>{item.price.toLocaleString()} <span style={{fontSize: 15}}>تومان</span></span>
                            <button className="btn btn-outline-warning btn-sm fw-bold" style={{fontSize: 16}}>افزودن به سفارش</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 