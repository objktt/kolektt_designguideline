import Link from "next/link";

export default function SNSPage() {
  return (
    <main className="container" style={{ paddingBottom: "var(--spacing-2xl)" }}>
      {/* Header */}
      <header style={{ padding: "var(--spacing-xl) 0", borderBottom: "1px solid var(--color-border)" }}>
        <div className="flex" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <h1 className="text-h3">Kolektt <span style={{ color: "var(--color-secondary)" }}>Design System</span></h1>
          <nav className="flex">
            <Link href="/" className="text-small" style={{ color: "var(--color-secondary)" }}>Web Identity</Link>
            <Link href="/sns" className="text-small" style={{ fontWeight: 600 }}>SNS Assets</Link>
            <Link href="/sns/visual-guide" className="text-small" style={{ color: "var(--color-secondary)" }}>Image/Illust Guide</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "var(--spacing-2xl) 0", marginBottom: "var(--spacing-xl)" }}>
        <h1 className="text-h1" style={{ marginBottom: "var(--spacing-md)" }}>
          Social.<br />
          Minimal.<br />
          <span style={{ color: "var(--color-accent)" }}>Intentional.</span>
        </h1>
        <p className="text-body" style={{ maxWidth: "600px", color: "var(--color-secondary)" }}>
          SNS 콘텐츠는 브랜드의 철학을 시각적으로 전달합니다. 과하지 않게, 조용하게, 그러나 분명하게.
        </p>
      </section>

      {/* Feed Templates */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>Feed Post Templates</h2>
        <p className="text-body" style={{ marginBottom: "var(--spacing-xl)", color: "var(--color-secondary)" }}>
          4:5 Feed (1080x1350px) — Ivory 배경, 좌측 정렬, 최소한의 블루 포인트
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-xl)" }}>
          
          {/* Template 1: Text-Focused */}
          <div>
            <p className="text-small" style={{ marginBottom: "var(--spacing-sm)", fontWeight: 600 }}>Template 1: Text-Focused</p>
            <div style={{ 
              width: "100%", 
              aspectRatio: "4/5", 
              backgroundColor: "var(--color-background)", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center",
              alignItems: "center",
              padding: "var(--spacing-xl)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)"
            }}>
              <h3 className="text-h1" style={{ fontSize: "2.5rem", marginBottom: "var(--spacing-sm)", textAlign: "center" }}>
                기록은{" "}<span style={{ whiteSpace: "nowrap" }}>취향을</span><br/>선명하게<br/>만든다.
              </h3>
              <p className="text-small" style={{ marginTop: "var(--spacing-md)" }}>— Kolektt</p>
            </div>
            <a 
              href="/assets/templates/instagram_02.psd.zip" 
              download
              className="text-small" 
              style={{ 
                marginTop: "var(--spacing-sm)", 
                display: "inline-block",
                padding: "8px 16px",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-full)",
                textDecoration: "none",
                color: "var(--color-foreground)"
              }}
            >
              ↓ Download PSD
            </a>
          </div>

          {/* Template 2: Product Showcase */}
          <div>
            <p className="text-small" style={{ marginBottom: "var(--spacing-sm)", fontWeight: 600 }}>Template 2: Product Showcase</p>
            <div style={{ 
              width: "100%", 
              aspectRatio: "4/5", 
              backgroundColor: "var(--color-background)", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between",
              padding: "var(--spacing-lg)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              position: "relative"
            }}>
              {/* Header */}
              <div>
                <div style={{ 
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "50%",
                  marginBottom: "var(--spacing-sm)"
                }}></div>
                <h3 className="text-h2" style={{ fontSize: "1.5rem" }}>New Collection</h3>
              </div>

              {/* Decorative Elements */}
              <div style={{ position: "absolute", top: "20px", right: "20px", opacity: 0.15 }}>
                <div style={{ width: "60px", height: "60px", backgroundColor: "var(--color-accent)", borderRadius: "50% 50% 0 0" }}></div>
              </div>

              {/* Footer */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <p className="text-small" style={{ fontWeight: 600 }}>kolektt.kr</p>
                <p className="text-small">2025</p>
              </div>
            </div>
            <a 
              href="/assets/templates/instagram_02.psd.zip" 
              download
              className="text-small" 
              style={{ 
                marginTop: "var(--spacing-sm)", 
                display: "inline-block",
                padding: "8px 16px",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-full)",
                textDecoration: "none",
                color: "var(--color-foreground)"
              }}
            >
              ↓ Download PSD
            </a>
          </div>

          {/* Template 3: Minimal Announcement */}
          <div>
            <p className="text-small" style={{ marginBottom: "var(--spacing-sm)", fontWeight: 600 }}>Template 3: Announcement</p>
            <div style={{ 
              width: "100%", 
              aspectRatio: "4/5", 
              backgroundColor: "var(--color-primary)", 
              color: "var(--color-background)",
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "var(--spacing-xl)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)"
            }}>
              <h3 className="text-h1" style={{ fontSize: "3rem", marginBottom: "var(--spacing-sm)" }}>Objktt</h3>
              <p className="text-body" style={{ opacity: 0.8 }}>
                Coming Soon
              </p>
            </div>
            <a 
              href="/assets/templates/instagram_02.psd.zip" 
              download
              className="text-small" 
              style={{ 
                marginTop: "var(--spacing-sm)", 
                display: "inline-block",
                padding: "8px 16px",
                border: "1px solid #ffffff",
                borderRadius: "var(--radius-full)",
                textDecoration: "none",
                color: "#ffffff"
              }}
            >
              ↓ Download PSD
            </a>
          </div>

          {/* Template 4: Card News */}
          <div>
            <p className="text-small" style={{ marginBottom: "var(--spacing-sm)", fontWeight: 600 }}>Template 4: Card News / Carousel (1080x1350px)</p>
            <div style={{ 
              width: "100%", 
              aspectRatio: "4/5", 
              backgroundColor: "var(--color-background)", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "space-between",
              padding: "var(--spacing-lg)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)"
            }}>
              <div>
                <p className="text-small" style={{ marginBottom: "var(--spacing-md)", opacity: 0.6 }}>01</p>
                <h3 className="text-h3" style={{ fontSize: "1.25rem", marginBottom: "var(--spacing-sm)" }}>레코드를{" "}<span style={{ whiteSpace: "nowrap" }}>촬영하고</span></h3>
                <p className="text-body" style={{ color: "var(--color-secondary)", fontSize: "0.875rem" }}>
                  SNAP 기능으로{" "}<span style={{ whiteSpace: "nowrap" }}>레코드의</span> 정보를{" "}<span style={{ whiteSpace: "nowrap" }}>자동으로</span>{" "}<span style={{ whiteSpace: "nowrap" }}>인식합니다.</span>
                </p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <p className="text-small" style={{ opacity: 0.4 }}>kolektt.kr</p>
                <p className="text-small" style={{ opacity: 0.4 }}>Swipe →</p>
              </div>
            </div>
            <a 
              href="/assets/templates/instagram_02.psd.zip" 
              download
              className="text-small" 
              style={{ 
                marginTop: "var(--spacing-sm)", 
                display: "inline-block",
                padding: "8px 16px",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-full)",
                textDecoration: "none",
                color: "var(--color-foreground)"
              }}
            >
              ↓ Download PSD
            </a>
          </div>

        </div>
      </section>

      {/* Story Templates */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>Story Templates</h2>
        <p className="text-body" style={{ marginBottom: "var(--spacing-xl)", color: "var(--color-secondary)" }}>
          9:16 Story (1080x1920px) — 조용한 톤, 디테일 중심, 과한 이펙트 지양
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--spacing-xl)" }}>
          
          {/* Story 1: Behind the Scenes */}
          <div>
            <p className="text-small" style={{ marginBottom: "var(--spacing-sm)", fontWeight: 600 }}>Story 1: Behind the Scenes</p>
            <div style={{ 
              width: "250px", 
              aspectRatio: "9/16", 
              backgroundColor: "var(--color-background)", 
              display: "flex", 
              flexDirection: "column", 
              padding: "var(--spacing-lg)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              margin: "0 auto"
            }}>
              {/* Header */}
              <div style={{ marginBottom: "var(--spacing-xl)" }}>
                <p className="text-small" style={{ fontWeight: 600 }}>Kolektt</p>
              </div>

              {/* Main Content */}
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p className="text-h3" style={{ lineHeight: "1.2" }}>
                  Collect your<br/>sound story
                </p>
              </div>

              {/* Footer */}
              <div style={{ textAlign: "center" }}>
                <p className="text-small" style={{ opacity: 0.6 }}>Swipe Up</p>
              </div>
            </div>
          </div>

          {/* Story 2: Feature Highlight */}
          <div>
            <p className="text-small" style={{ marginBottom: "var(--spacing-sm)", fontWeight: 600 }}>Story 2: Feature Highlight</p>
            <div style={{ 
              width: "250px", 
              aspectRatio: "9/16", 
              backgroundColor: "var(--color-primary)", 
              color: "var(--color-background)",
              display: "flex", 
              flexDirection: "column", 
              padding: "var(--spacing-lg)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              margin: "0 auto",
              position: "relative"
            }}>
              {/* Header */}
              <div style={{ marginBottom: "var(--spacing-2xl)" }}>
                <p className="text-small" style={{ fontWeight: 600, opacity: 0.8 }}>NEW FEATURE</p>
              </div>

              {/* Main Content */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 className="text-h1" style={{ fontSize: "2.5rem", marginBottom: "var(--spacing-md)" }}>
                  SNAP
                </h3>
                <p className="text-body" style={{ opacity: 0.8 }}>
                  레코드를 촬영하고<br/>자동으로 아카이브
                </p>
              </div>

              {/* Accent Dot */}
              <div style={{ 
                position: "absolute",
                top: "20%",
                right: "10%",
                width: "80px",
                height: "80px",
                backgroundColor: "var(--color-accent)",
                filter: "blur(40px)",
                opacity: 0.3,
                borderRadius: "50%"
              }}></div>
            </div>
          </div>

        </div>
      </section>

      {/* Best Practices */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>Best Practices</h2>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-xl)" }}>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)", color: "var(--color-accent)" }}>Do's ✔</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body">여백을 충분히 확보</li>
              <li className="text-body">타이포그래피를 중심으로</li>
              <li className="text-body">Ivory/Beige 배경 선호</li>
              <li className="text-body">블루는 포인트로만 사용</li>
              <li className="text-body">조용하고 디테일한 영상</li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)", color: "var(--color-secondary)" }}>Don'ts ❌</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body">과한 색보정</li>
              <li className="text-body">채도 높은 배경</li>
              <li className="text-body">빠른 이펙트 남발</li>
              <li className="text-body">블루를 텍스트에 과도하게 사용</li>
              <li className="text-body">복잡한 레이아웃</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}
