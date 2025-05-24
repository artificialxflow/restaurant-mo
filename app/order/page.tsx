'use client';
import { useState } from "react";

const initialOrder = [
  { name: "کباب کوبیده", price: 120000, qty: 1 },
  { name: "دوغ محلی", price: 15000, qty: 2 },
];

export default function OrderPage() {
  const [order, setOrder] = useState(initialOrder);

  const handleQtyChange = (idx: number, delta: number) => {
    setOrder(order =>
      order.map((item, i) =>
        i === idx ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const handleRemove = (idx: number) => {
    setOrder(order => order.filter((_, i) => i !== idx));
  };

  const total = order.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main className="container py-5">
      <h2 className="mb-4" style={{color: '#1976d2', fontWeight: 700}}>ثبت سفارش</h2>
      <p className="mb-4">آیتم‌های انتخاب‌شده خود را بررسی و نهایی کنید.</p>
      {order.length === 0 ? (
        <div className="alert alert-info">هیچ آیتمی انتخاب نشده است.</div>
      ) : (
        <div className="table-responsive mb-4">
          <table className="table align-middle text-center">
            <thead>
              <tr>
                <th>نام غذا</th>
                <th>تعداد</th>
                <th>قیمت واحد</th>
                <th>قیمت کل</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {order.map((item, idx) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <button className="btn btn-outline-secondary btn-sm" onClick={() => handleQtyChange(idx, -1)} disabled={item.qty === 1}>-</button>
                      <span>{item.qty}</span>
                      <button className="btn btn-outline-secondary btn-sm" onClick={() => handleQtyChange(idx, 1)}>+</button>
                    </div>
                  </td>
                  <td>{item.price.toLocaleString()} تومان</td>
                  <td>{(item.price * item.qty).toLocaleString()} تومان</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => handleRemove(idx)}>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="fw-bold">جمع کل:</span>
        <span className="fw-bold" style={{color: '#eab308', fontSize: 20}}>{total.toLocaleString()} تومان</span>
      </div>
      <button className="btn btn-success btn-lg px-5" disabled={order.length === 0}>ثبت نهایی سفارش</button>
    </main>
  );
} 