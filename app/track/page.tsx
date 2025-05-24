const steps = [
  { label: "ثبت سفارش", desc: "سفارش شما با موفقیت ثبت شد." },
  { label: "در حال آماده‌سازی", desc: "سفارش شما توسط آشپزخانه در حال آماده‌سازی است." },
  { label: "آماده تحویل", desc: "سفارش شما آماده تحویل است." },
  { label: "تحویل داده شده", desc: "سفارش به شما تحویل داده شد. نوش جان!" },
];

const currentStep = 2; // مرحله فعلی (۰: ثبت، ۱: آماده‌سازی، ۲: آماده، ۳: تحویل)

export default function TrackPage() {
  return (
    <main className="container py-5">
      <h2 className="mb-4" style={{color: '#1976d2', fontWeight: 700}}>پیگیری وضعیت سفارش</h2>
      <p className="mb-4">در این بخش می‌توانید وضعیت سفارش خود را به صورت مرحله‌ای مشاهده کنید.</p>
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3" style={{maxWidth: 700, margin: '0 auto'}}>
          {steps.map((step, idx) => (
            <div key={step.label} className="flex-fill text-center">
              <div
                className={`rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center ${idx <= currentStep ? 'bg-warning text-white' : 'bg-light text-secondary'}`}
                style={{width: 48, height: 48, fontSize: 22, fontWeight: 700, border: idx === currentStep ? '2px solid #1976d2' : '1px solid #ccc'}}
              >
                {idx + 1}
              </div>
              <div style={{fontWeight: idx === currentStep ? 700 : 400, color: idx === currentStep ? '#1976d2' : '#888'}}>{step.label}</div>
            </div>
          ))}
        </div>
        <div className="progress" style={{height: 8, maxWidth: 700, margin: '0 auto'}}>
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{width: `${(currentStep) * 33.33}%`}}
            aria-valuenow={currentStep}
            aria-valuemin={0}
            aria-valuemax={steps.length - 1}
          ></div>
        </div>
      </div>
      <div className="alert alert-info text-center" style={{maxWidth: 500, margin: '0 auto'}}>
        <strong>{steps[currentStep].label}:</strong> {steps[currentStep].desc}
      </div>
    </main>
  );
} 