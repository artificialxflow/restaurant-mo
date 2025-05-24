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

const bannerStyles = [
  {
    background: "linear-gradient(90deg,#22c55e 60%,#16a34a 100%)",
    color: "#fff",
    iconColor: "#fff",
    boxShadow: "0 2px 12px 0 rgba(34,197,94,0.15)",
  },
  {
    background: "linear-gradient(90deg,#38bdf8 60%,#2563eb 100%)",
    color: "#fff",
    iconColor: "#fff",
    boxShadow: "0 2px 12px 0 rgba(59,130,246,0.15)",
  },
  {
    background: "linear-gradient(90deg,#facc15 60%,#eab308 100%)",
    color: "#222",
    iconColor: "#b45309",
    boxShadow: "0 2px 12px 0 rgba(234,179,8,0.15)",
  },
];

export default function MenuPage() {
  return (
    <main className="container py-5">
      {/* Incentive banners */}
      <div className="mb-4">
        <div
          className="d-flex align-items-center justify-content-between mb-2"
          style={{
            ...bannerStyles[0],
            borderRadius: 16,
            padding: '0.75rem 1.25rem',
            marginBottom: 12,
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <span style={{fontSize: 24, color: bannerStyles[0].iconColor}} role="img" aria-label="تخفیف">🎁</span>
            <span className="fw-bold">سفارش آنلاین = تخفیف ویژه!</span>
          </div>
          <span className="fw-bold">۱۰٪ تخفیف برای اولین سفارش آنلاین شما</span>
        </div>
        <div
          className="d-flex align-items-center justify-content-between mb-2"
          style={{
            ...bannerStyles[1],
            borderRadius: 16,
            padding: '0.75rem 1.25rem',
            marginBottom: 12,
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <span style={{fontSize: 22, color: bannerStyles[1].iconColor}} role="img" aria-label="باشگاه مشتریان">💎</span>
            <span className="fw-bold">عضو باشگاه مشتریان شوید</span>
          </div>
          <span>امتیاز بگیرید و از جوایز و تخفیف‌های ویژه بهره‌مند شوید</span>
        </div>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{
            ...bannerStyles[2],
            borderRadius: 16,
            padding: '0.75rem 1.25rem',
            marginBottom: 12,
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <span style={{fontSize: 22, color: bannerStyles[2].iconColor}} role="img" aria-label="شبکه اجتماعی">📱</span>
            <span className="fw-bold">ما را در اینستاگرام دنبال کنید</span>
          </div>
          <a href="#" className="btn btn-outline-dark btn-sm fw-bold px-3" style={{fontSize: 15, background: '#fff', color: '#eab308', border: 'none'}}>aftab_restaurant@</a>
        </div>
      </div>
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
                          background: "rgba(255,255,255,0.18)", // lighter for better readability
                          color: '#fff',
                          backdropFilter: "blur(8px)",
                          borderRadius: 18,
                        }}
                      >
                        <div className="card-body d-flex flex-column justify-content-between">
                          <div>
                            <h5 className="card-title mb-2" style={{color: '#fff', fontWeight: 700}}>{item.name}</h5>
                            <p className="card-text mb-2" style={{minHeight: 32, color: '#f3f3f3'}}>{item.desc}</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <span className="fw-bold" style={{color: '#ffe066', fontSize: 18}}>{item.price.toLocaleString()} <span style={{fontSize: 15}}>تومان</span></span>
                            <button className="btn btn-warning btn-sm fw-bold text-dark" style={{fontSize: 16, background: '#ffe066', border: 'none'}}>افزودن به سفارش</button>
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