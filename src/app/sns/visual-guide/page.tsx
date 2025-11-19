import Link from "next/link";

export default function VisualGuidePage() {
  return (
    <main className="container" style={{ paddingBottom: "var(--spacing-2xl)" }}>
      {/* Header */}
      <header style={{ padding: "var(--spacing-xl) 0", borderBottom: "1px solid var(--color-border)" }}>
        <div className="flex" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <h1 className="text-h3">Kolektt <span style={{ color: "var(--color-secondary)" }}>Design System</span></h1>
          <nav className="flex">
            <Link href="/" className="text-small" style={{ color: "var(--color-secondary)" }}>Web Identity</Link>
            <Link href="/sns" className="text-small" style={{ color: "var(--color-secondary)" }}>SNS Assets</Link>
            <Link href="/sns/visual-guide" className="text-small" style={{ fontWeight: 600 }}>Image/Illust Guide</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "var(--spacing-2xl) 0", marginBottom: "var(--spacing-xl)" }}>
        <h1 className="text-h1" style={{ marginBottom: "var(--spacing-md)" }}>
          Visual.<br />
          Minimal.<br />
          <span style={{ color: "var(--color-accent)" }}>Intentional.</span>
        </h1>
        <p className="text-body" style={{ maxWidth: "600px", color: "var(--color-secondary)" }}>
          이미지와 일러스트를 사용하는 방법에 대한 가이드라인
        </p>
      </section>

      {/* Tone & Style */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>Tone & Style</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--spacing-md)" }}>
          <div style={{ padding: "var(--spacing-md)", backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-md)" }}>
            <p className="text-body" style={{ fontWeight: 600, marginBottom: "var(--spacing-xs)" }}>배경</p>
            <p className="text-small" style={{ color: "var(--color-secondary)" }}>흰 배경 또는 아이보리 톤의 단색 배경 권장</p>
          </div>
          <div style={{ padding: "var(--spacing-md)", backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-md)" }}>
            <p className="text-body" style={{ fontWeight: 600, marginBottom: "var(--spacing-xs)" }}>촬영 톤</p>
            <p className="text-small" style={{ color: "var(--color-secondary)" }}>조용하고 디테일한 느낌, 과도한 보정 지양</p>
          </div>
          <div style={{ padding: "var(--spacing-md)", backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-md)" }}>
            <p className="text-body" style={{ fontWeight: 600, marginBottom: "var(--spacing-xs)" }}>내러티브 중심</p>
            <p className="text-small" style={{ color: "var(--color-secondary)" }}>사람의 이야기와 경험을 담은 사진</p>
          </div>
        </div>
      </section>

      {/* Image Direction */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>이미지 방향</h2>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-xl)" }}>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)", color: "var(--color-accent)" }}>Do's ✔</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body">단일 객체 중심 촬영</li>
              <li className="text-body">흰 배경 / 아이보리 톤</li>
              <li className="text-body">스튜디오 조명 스타일</li>
              <li className="text-body">미니멀하고 프리미엄한 느낌</li>
              <li className="text-body">사람이 기록하는 순간 포착</li>
              <li className="text-body">손, 실루엣 등 부분 촬영</li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)", color: "var(--color-secondary)" }}>Don'ts ❌</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body">레코드만 잔뜩 쌓인 사진</li>
              <li className="text-body">복고/빈티지 필터</li>
              <li className="text-body">과도한 색보정</li>
              <li className="text-body">높은 채도의 배경</li>
              <li className="text-body">포토샵 과다 이펙트</li>
              <li className="text-body">일러스트레이션 스타일</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Photography Style */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>사진 스타일</h2>
        <div className="grid" style={{ gridTemplateColumns: "1fr", gap: "var(--spacing-md)" }}>
          <div style={{ padding: "var(--spacing-md)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)" }}>
            <p className="text-body" style={{ fontWeight: 600, marginBottom: "var(--spacing-xs)" }}>오브제 기반 이미지</p>
            <p className="text-small" style={{ color: "var(--color-secondary)" }}>턴테이블, 헤드폰, 오디오 인터페이스, 빈 레코드 슬리브, 책상 위 음악적 오브제</p>
          </div>
          <div style={{ padding: "var(--spacing-md)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)" }}>
            <p className="text-body" style={{ fontWeight: 600, marginBottom: "var(--spacing-xs)" }}>사람 중심 컷</p>
            <p className="text-small" style={{ color: "var(--color-secondary)" }}>손이 레코드를 꺼내는 장면, 친구끼리 음악 듣는 모습, Objktt 공간에서의 실루엣, 디제잉 준비하는 손</p>
          </div>
          <div style={{ padding: "var(--spacing-md)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)" }}>
            <p className="text-body" style={{ fontWeight: 600, marginBottom: "var(--spacing-xs)" }}>공간 디테일</p>
            <p className="text-small" style={{ color: "var(--color-secondary)" }}>Objktt 공간의 디테일 컷, 우드톤 테이블 + 레코드 세팅, 현대적인 사운드 라이프스타일</p>
          </div>
        </div>
      </section>

      {/* Video Guidelines */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>Motion & Reels Guide</h2>
        <div style={{ padding: "var(--spacing-lg)", backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-md)", marginBottom: "var(--spacing-md)" }}>
          <p className="text-body" style={{ marginBottom: "var(--spacing-md)", fontWeight: 600 }}>General Tone</p>
          <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
            <li className="text-body">느린 템포, 디테일한 촬영</li>
            <li className="text-body">빠른 이펙트 남발 지양</li>
            <li className="text-body">조용하고 집중된 분위기</li>
          </ul>
        </div>
        <div style={{ padding: "var(--spacing-lg)", backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-md)" }}>
          <p className="text-body" style={{ marginBottom: "var(--spacing-md)", fontWeight: 600 }}>자막 규칙</p>
          <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
            <li className="text-body">색상: 흰색 (어두운 배경) 또는 검정 (밝은 배경)</li>
            <li className="text-body">지속시간: 3~5초 권장</li>
            <li className="text-body">폰트: Pretendard (한글), Plus Jakarta Sans (영문)</li>
          </ul>
        </div>
      </section>

    </main>
  );
}
