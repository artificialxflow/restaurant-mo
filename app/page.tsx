import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container py-5 text-center">
      <section
        className="my-5 p-4 rounded shadow-lg border mx-auto"
        style={{
          maxWidth: 600,
          background: "rgba(30, 30, 30, 0.7)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
          border: "1.5px solid #eab30833",
        }}
      >
        {/* Persian food illustration */}
        <div className="mb-4">
          <span style={{fontSize: 64}} role="img" aria-label="چلوکباب">🍚🍢</span>
        </div>
        <h1 className="display-4 mb-3" style={{color: '#4fc3f7', fontWeight: 700}}>رستوران ایرانی آفتاب</h1>
        <p className="lead mb-4" style={{fontWeight: 400, color: '#f3f3f3'}}>
          به سامانه سفارش آنلاین و مدیریت رستوران آفتاب خوش آمدید.<br />
          تجربه‌ای مدرن، سریع و آسان برای ثبت سفارش و پیگیری وضعیت غذا.
        </p>
        <Link
          href="/menu"
          className="btn btn-warning btn-lg px-5 text-white shadow"
          style={{fontWeight: 700, background: "linear-gradient(90deg,#eab308 60%,#f59e42 100%)", border: 'none', fontSize: 22}}
        >
          مشاهده منو
        </Link>
        <div className="mt-4 text-warning fw-bold" style={{fontSize: 18}}>
          <span role="img" aria-label="quote">❝</span>
          مهمان‌نوازی ایرانی، طعمی به یادماندنی
          <span role="img" aria-label="quote">❞</span>
        </div>
      </section>
    </main>
  );
}
