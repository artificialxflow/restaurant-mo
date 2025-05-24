"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [dark]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-2" dir="rtl">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white ms-4" href="/" style={{letterSpacing: '1px', fontSize: '1.3rem'}}>رستوران آفتاب</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="تغییر منو"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" href="/">خانه</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" href="/menu">منو</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" href="/order">ثبت سفارش</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" href="/track">پیگیری سفارش</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" href="/history">تاریخچه سفارشات</Link>
            </li>
          </ul>
          <button
            className="btn btn-outline-light ms-3 d-flex align-items-center"
            style={{fontWeight: 700, fontSize: '1rem'}}
            onClick={() => setDark(d => !d)}
            title="تغییر تم"
            type="button"
          >
            {dark ? (
              <span className="ms-2" role="img" aria-label="تم روشن">☀️</span>
            ) : (
              <span className="ms-2" role="img" aria-label="تم تاریک">🌙</span>
            )}
            {dark ? "تم روشن" : "تم تاریک"}
          </button>
        </div>
      </div>
    </nav>
  );
}
