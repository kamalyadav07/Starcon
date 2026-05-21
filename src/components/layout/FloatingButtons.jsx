function FloatingButtons() {
  return (
    <div className="fixed right-[14px] top-[92px] z-[60] hidden flex-col gap-[8px] md:flex">
      <a
        href="https://www.youtube.com/watch?v=_oxwJgb1Tn8"
        target="_blank"
        rel="noreferrer"
        className="group flex h-[52px] w-[66px] flex-col items-center justify-center gap-[2px] rounded-[6px] border border-white/70 bg-white text-center text-[10px] font-extrabold text-[#1b1b1b] shadow-[0_8px_18px_rgba(0,0,0,.18)] transition hover:-translate-x-1 hover:shadow-[0_12px_24px_rgba(0,0,0,.26)]"
        aria-label="YouTube"
      >
        <span className="flex h-[24px] w-[34px] items-center justify-center rounded-[6px] bg-[#e62117] text-[14px] text-white transition group-hover:scale-110">▶</span>
        <span>YouTube</span>
      </a>

      {[
        ["/images/Company-Profile-StarCon-Infra.pdf", "Profile"],
        ["/pdfs/CSR-Annexure-III.pdf", "CSR"],
        ["/pdfs/MGT-7-AB9618382-Signed.pdf", "MGT-7"],
      ].map(([href, label]) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group flex h-[52px] w-[66px] flex-col items-center justify-center gap-[2px] rounded-[6px] border border-white/70 bg-white text-center text-[10px] font-extrabold text-[#1b1b1b] shadow-[0_8px_18px_rgba(0,0,0,.18)] transition hover:-translate-x-1 hover:shadow-[0_12px_24px_rgba(0,0,0,.26)]"
          aria-label={`${label} PDF`}
        >
          <span className="rounded-[4px] bg-[#d71920] px-[6px] py-[3px] text-[11px] leading-none text-white transition group-hover:scale-110">
            PDF
          </span>
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}

export default FloatingButtons;
