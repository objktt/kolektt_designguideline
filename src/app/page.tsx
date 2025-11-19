import Link from "next/link";
import Image from "next/image";
import ColorSwatch from "../components/ColorSwatch";

export default function Home() {
  return (
    <main className="container" style={{ paddingBottom: "var(--spacing-2xl)" }}>
      {/* Header */}
      <header style={{ padding: "var(--spacing-xl) 0", borderBottom: "1px solid var(--color-border)" }}>
        <div className="flex" style={{ justifyContent: "space-between", alignItems: "center" }}>
          <h1 className="text-h3">Kolektt <span style={{ color: "var(--color-secondary)" }}>Design System</span></h1>
          <nav className="flex">
            <Link href="/" className="text-small" style={{ fontWeight: 600 }}>Web Identity</Link>
            <Link href="/sns" className="text-small" style={{ color: "var(--color-secondary)" }}>SNS Assets</Link>
            <Link href="/sns/visual-guide" className="text-small" style={{ color: "var(--color-secondary)" }}>Image/Illust Guide</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "var(--spacing-2xl) 0" }}>
        <h1 className="text-h1" style={{ marginBottom: "var(--spacing-md)" }}>
          Minimalist.<br />
          Premium.<br />
          <span style={{ color: "var(--color-accent)" }}>Digital.</span>
        </h1>
        <p className="text-body" style={{ maxWidth: "600px", color: "var(--color-secondary)" }}>
          The official design language for Kolektt. This guide ensures consistency across all digital touchpoints, from web interfaces to social media content.
        </p>
      </section>

      {/* 1. Brand Core */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>1. Brand Core</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-xl)" }}>
          
          {/* Mission & Vision */}
          <div className="flex" style={{ flexDirection: "column", gap: "var(--spacing-lg)" }}>
            <div>
              <h3 className="text-h3" style={{ marginBottom: "var(--spacing-sm)", color: "var(--color-accent)" }}>Mission</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
                <li className="text-body">기록되는 음악 취향, 연결되는 음악 경험</li>
                <li className="text-body">아날로그 감성과 디지털 아카이브의 자연스러운 조화</li>
              </ul>
            </div>
            <div>
              <h3 className="text-h3" style={{ marginBottom: "var(--spacing-sm)", color: "var(--color-accent)" }}>Vision</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
                <li className="text-body">전 세계 레코드 컬렉터를 위한 가장 아름다운 취향 기록 플랫폼</li>
                <li className="text-body">취향을 통해 사람과 사람을 연결하는 음악 커뮤니티</li>
              </ul>
            </div>
          </div>

          {/* Slogan & Tone */}
          <div className="flex" style={{ flexDirection: "column", gap: "var(--spacing-lg)" }}>
            <div>
              <h3 className="text-h3" style={{ marginBottom: "var(--spacing-sm)", color: "var(--color-accent)" }}>Slogan</h3>
              <p className="text-h3" style={{ fontStyle: "italic", marginBottom: "var(--spacing-xs)" }}>"Collect your sound story."</p>
              <p className="text-body" style={{ color: "var(--color-secondary)" }}>당신의 음악 취향이 기록되고 연결되는 곳, Kolektt.</p>
            </div>
            <div>
              <h3 className="text-h3" style={{ marginBottom: "var(--spacing-sm)", color: "var(--color-accent)" }}>Tone & Personality</h3>
              <div className="flex" style={{ gap: "var(--spacing-sm)", flexWrap: "wrap" }}>
                {["Minimal", "Warm", "Refined", "Functional", "Emotional"].map(tag => (
                  <span key={tag} style={{ padding: "4px 12px", borderRadius: "100px", border: "1px solid var(--color-border)", fontSize: "0.875rem" }}>{tag}</span>
                ))}
              </div>
              <p className="text-body" style={{ marginTop: "var(--spacing-sm)", color: "var(--color-secondary)" }}>
                A24, Letterboxd, Discogs 감성의 균형.<br/>
                과하게 상업적이지 않고, 취향 중심 커뮤니티다운 분위기.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Logo & Signature */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>2. Logo & Signature</h2>
        
        {/* Logos Grid */}
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginBottom: "var(--spacing-xl)" }}>
           {/* Logo Text Black -> On Light Background */}
           <div style={{ backgroundColor: "#f6f6ed", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "var(--spacing-lg)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-md)" }}>
              <div style={{ position: "relative", width: "100%", height: "220px" }}>
                <Image src="/assets/logo/logo-text-black.png" alt="Kolektt Text Logo Black" fill style={{ objectFit: "contain" }} />
              </div>
              <p className="text-small" style={{ color: "#1e1e1d" }}>Text Logo (Black)</p>
           </div>
           {/* Logo Symbol Blue -> On Light Background */}
           <div style={{ backgroundColor: "#f6f6ed", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "var(--spacing-lg)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-md)" }}>
              <div style={{ position: "relative", width: "100%", height: "220px" }}>
                <Image src="/assets/logo/logo-symbol-blue.png" alt="Kolektt Symbol Logo Blue" fill style={{ objectFit: "contain" }} />
              </div>
              <p className="text-small" style={{ color: "#1e1e1d" }}>Symbol Logo (Blue)</p>
           </div>
           {/* Logo Text White -> On Dark Background */}
           <div style={{ backgroundColor: "#1e1e1d", borderRadius: "var(--radius-md)", padding: "var(--spacing-lg)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-md)" }}>
              <div style={{ position: "relative", width: "100%", height: "220px" }}>
                <Image src="/assets/logo/logo-symbol-white.png" alt="Kolektt Text Logo White" fill style={{ objectFit: "contain" }} />
              </div>
              <p className="text-small" style={{ color: "#f6f6ed" }}>Text Logo (White)</p>
           </div>
           {/* Logo Symbol White -> On Dark Background */}
           <div style={{ backgroundColor: "#1e1e1d", borderRadius: "var(--radius-md)", padding: "var(--spacing-lg)", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--spacing-md)" }}>
              <div style={{ position: "relative", width: "100%", height: "220px" }}>
                <Image src="/assets/logo/logo-text-white.png" alt="Kolektt Symbol Logo White" fill style={{ objectFit: "contain" }} />
              </div>
              <p className="text-small" style={{ color: "#f6f6ed" }}>Symbol Logo (White)</p>
           </div>
        </div>

        {/* Logo Rules */}
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-xl)" }}>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Main Logo & Lockup</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body"><strong>Main:</strong> Kolektt 워드마크 로고</li>
              <li className="text-body"><strong>Lockup:</strong> 로고 + 슬로건 조합 (우측/하단 배치 허용)</li>
              <li className="text-body"><strong>Clear Space:</strong> 로고 높이의 0.5배 이상 확보</li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Restrictions</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body"><strong>Minimum Size:</strong> 앱 내 48px / 인스타 120px 이상</li>
              <li className="text-body"><strong>Don'ts:</strong> 그림자, 외곽선, 왜곡, 컬러 변형 금지</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Color System */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>3. Color System</h2>
        
        {/* Primary Colors */}
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginBottom: "var(--spacing-xl)" }}>
          <ColorSwatch label="Primary" colorCode="#1E1E1D" variableName="var(--color-primary)" backgroundColor="var(--color-primary)" />
          <ColorSwatch label="Accent" colorCode="#2452FF" variableName="var(--color-accent)" backgroundColor="var(--color-accent)" />
          <ColorSwatch label="Background" colorCode="#F6F6ED" variableName="var(--color-background)" backgroundColor="var(--color-background)" />
        </div>

        {/* Expanded Scales */}
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-xl)" }}>
          
          {/* White/Beige Scale */}
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>White / Beige Scale</h3>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "var(--spacing-md)" }}>
              {[100, 200, 300, 400, 500].map((step) => (
                <ColorSwatch 
                  key={`white-${step}`}
                  label={`White ${step}`}
                  colorCode={`var(--color-white-${step})`}
                  variableName={`--color-white-${step}`}
                  backgroundColor={`var(--color-white-${step})`}
                  height="80px"
                />
              ))}
            </div>
          </div>

          {/* Gray Scale */}
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Gray Scale</h3>
            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "var(--spacing-md)" }}>
              {[100, 200, 300, 400, 500].map((step) => (
                <ColorSwatch 
                  key={`gray-${step}`}
                  label={`Gray ${step}`}
                  colorCode={`var(--color-gray-${step})`}
                  variableName={`--color-gray-${step}`}
                  backgroundColor={`var(--color-gray-${step})`}
                  height="80px"
                />
              ))}
            </div>
          </div>

        </div>

        {/* Color Usage Rules */}
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-xl)", marginTop: "var(--spacing-xl)" }}>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Usage Ratio</h3>
            <div className="flex" style={{ height: "24px", borderRadius: "100px", overflow: "hidden", marginBottom: "var(--spacing-sm)" }}>
              <div style={{ width: "70%", backgroundColor: "var(--color-background)" }}></div>
              <div style={{ width: "20%", backgroundColor: "var(--color-primary)" }}></div>
              <div style={{ width: "10%", backgroundColor: "var(--color-accent)" }}></div>
            </div>
            <div className="flex" style={{ gap: "var(--spacing-lg)" }}>
              <div className="flex" style={{ alignItems: "center", gap: "8px" }}><div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--color-background)", border: "1px solid var(--color-border)" }}></div><span className="text-small">70% Ivory</span></div>
              <div className="flex" style={{ alignItems: "center", gap: "8px" }}><div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--color-primary)" }}></div><span className="text-small">20% Black/White</span></div>
              <div className="flex" style={{ alignItems: "center", gap: "8px" }}><div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "var(--color-accent)" }}></div><span className="text-small">10% Blue</span></div>
            </div>
          </div>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Blue Accent Rules</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body">텍스트에 과도하게 사용 금지</li>
              <li className="text-body">버튼, 아이콘, 하이라이트 등 "의도된 포인트"에만 사용</li>
              <li className="text-body">한 화면 내 1~2회 이하 사용 권장</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Typography */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>4. Typography</h2>
        
        {/* Font Families */}
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", marginBottom: "var(--spacing-xl)" }}>
          <div>
            <p className="text-small" style={{ marginBottom: "var(--spacing-sm)" }}>Title Font</p>
            <h3 className="text-h2" style={{ fontFamily: "var(--font-title)" }}>Plus Jakarta Sans</h3>
            <p className="text-body" style={{ color: "var(--color-secondary)" }}>Used for all headings and display text. Geometric, modern, and bold.</p>
          </div>
          <div>
            <p className="text-small" style={{ marginBottom: "var(--spacing-sm)" }}>Body Font</p>
            <h3 className="text-h2" style={{ fontFamily: "var(--font-body)" }}>Pretendard</h3>
            <p className="text-body" style={{ color: "var(--color-secondary)" }}>Used for body text, descriptions, and UI elements. Excellent legibility for both English and Korean.</p>
          </div>
        </div>

        {/* Type Scale */}
        <div className="grid" style={{ gap: "var(--spacing-lg)" }}>
          <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--spacing-md)" }}>
            <div className="flex" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
              <p className="text-small">Display / H1</p>
              <p className="text-small">Plus Jakarta Sans Bold (800) / 3.5rem</p>
            </div>
            <h1 className="text-h1">The quick brown fox</h1>
          </div>
          
          <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--spacing-md)" }}>
            <div className="flex" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
              <p className="text-small">Heading / H2</p>
              <p className="text-small">Plus Jakarta Sans Bold (700) / 2.5rem</p>
            </div>
            <h2 className="text-h2">Jumps over the lazy dog</h2>
          </div>

          <div style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "var(--spacing-md)" }}>
            <div className="flex" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
              <p className="text-small">Subheading / H3</p>
              <p className="text-small">Plus Jakarta Sans SemiBold (600) / 1.75rem</p>
            </div>
            <h3 className="text-h3">Pack my box with five dozen liquor jugs</h3>
          </div>

          <div>
            <div className="flex" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
              <p className="text-small">Body / Regular</p>
              <p className="text-small">Pretendard Regular (400) / 1rem</p>
            </div>
            <p className="text-body" style={{ maxWidth: "600px" }}>
              Kolektt is a premium digital platform. Our typography is designed to be clean, legible, and modern. We use Pretendard for body text to ensure readability across all devices while maintaining a sleek aesthetic.
            </p>
          </div>
        </div>

        {/* Text Tone */}
        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Text Tone</h3>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-lg)" }}>
            <div style={{ padding: "var(--spacing-lg)", backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-md)" }}>
              <p className="text-body" style={{ fontWeight: 600, marginBottom: "var(--spacing-sm)" }}>Principles</p>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
                <li className="text-small">짧고 정확하게</li>
                <li className="text-small">설명보다 의미 강조</li>
                <li className="text-small">불필요한 수식어 지양</li>
              </ul>
            </div>
            <div style={{ padding: "var(--spacing-lg)", backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-md)" }}>
              <p className="text-body" style={{ fontWeight: 600, marginBottom: "var(--spacing-sm)" }}>Examples</p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                <li className="text-h3">"기록은 취향을 선명하게 만든다."</li>
                <li className="text-h3">"Snap. Collect. Trade."</li>
                <li className="text-h3">"당신의 음악은 이야기다."</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Layout & Composition */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>5. Layout & Composition</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-xl)" }}>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Key Principles</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body"><strong>Whitespace:</strong> 기능과 감성 모두에 필요</li>
              <li className="text-body"><strong>Alignment:</strong> 중심 정렬, 좌측 정렬 둘 다 허용 (일관성 필수)</li>
              <li className="text-body"><strong>Structure:</strong> 타이포 + 단색 배경 = 브랜드의 기본 틀</li>
              <li className="text-body"><strong>Tone:</strong> 이미지·영상은 깨끗하고 조용한 톤 유지</li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Grid</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body"><strong>4:5 인스타 기준:</strong> 안전 여백 확보</li>
              <li className="text-body"><strong>Margin:</strong> 최소 120px</li>
              <li className="text-body"><strong>UI:</strong> 상단 가득 채우기보다 여백 두는 방식 선호</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Imagery */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>6. Imagery</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-xl)" }}>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Tone & Style</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body"><strong>배경:</strong> 아이보리 / 크림 톤 (미세한 Grain 허용)</li>
              <li className="text-body"><strong>촬영톤:</strong> 어둡기보단 은은한 따뜻함, 잡지(Magazine) 스타일</li>
              <li className="text-body"><strong>내러티브:</strong> 손·레코드·턴테이블 중심</li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Don'ts</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body">과한 색보정</li>
              <li className="text-body">채도 높은 배경</li>
              <li className="text-body">포토샵 느낌의 과한 합성</li>
              <li className="text-body">과한 일러스트 사용</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Motion & Reels Guide */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>7. Motion & Reels Guide</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--spacing-xl)" }}>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>General Tone</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body">빠름 ❌, 과한 이펙트 ❌</li>
              <li className="text-body">조용하고 디테일 있는 샷 ✔</li>
              <li className="text-body">공간의 공기, 손의 움직임, 레코드의 재질감 ✔</li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Grid Content</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body"><strong>7번:</strong> Baxa 인터뷰 (정중앙, 미니멀 톤)</li>
              <li className="text-body"><strong>8번:</strong> 인플루언서 SNAP 기능 시연</li>
              <li className="text-body"><strong>9번:</strong> 인플루언서 COLLECT 감성 영상</li>
            </ul>
          </div>
          <div>
            <h3 className="text-h3" style={{ marginBottom: "var(--spacing-md)" }}>Subtitles</h3>
            <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
              <li className="text-body">화이트 or 블랙</li>
              <li className="text-body">최대 1줄, 2초 이상 유지</li>
              <li className="text-body">타이틀은 Plus Jakarta Sans Bold</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Iconography */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>8. Iconography</h2>
        <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
          <li className="text-body">Plus Jakarta Sans와 조합되는 단순한 outline 스타일</li>
          <li className="text-body">둥근 모서리 금지</li>
          <li className="text-body">블루 아이콘은 "기능 강조"에만 사용</li>
        </ul>
      </section>

      {/* 9. Design Elements */}
      <section style={{ marginBottom: "var(--spacing-2xl)" }}>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>9. Design Elements</h2>
        <p className="text-body" style={{ marginBottom: "var(--spacing-xl)", color: "var(--color-secondary)" }}>
          Kolektt의 공식 도형 엘리먼트. 심볼을 구성하는 기본 형태입니다.
        </p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--spacing-xl)" }}>
          {/* Square */}
          <div>
            <div style={{ 
              width: "100%", 
              aspectRatio: "1/1", 
              backgroundColor: "var(--color-accent)",
              borderRadius: "0",
              marginBottom: "var(--spacing-md)"
            }}></div>
            <p className="text-body" style={{ fontWeight: 600 }}>사각형</p>
            <p className="text-small" style={{ color: "var(--color-secondary)" }}>기본 형태, 안정감</p>
          </div>

          {/* Semicircle + Rectangle */}
          <div>
            <div style={{ 
              width: "100%", 
              aspectRatio: "1/1", 
              backgroundColor: "var(--color-accent)",
              borderRadius: "50% 50% 0 0",
              marginBottom: "var(--spacing-md)"
            }}></div>
            <p className="text-body" style={{ fontWeight: 600 }}>반원 + 직사각형</p>
            <p className="text-small" style={{ color: "var(--color-secondary)" }}>전환, 연결</p>
          </div>

          {/* Circle */}
          <div>
            <div style={{ 
              width: "100%", 
              aspectRatio: "1/1", 
              backgroundColor: "var(--color-accent)",
              borderRadius: "50%",
              marginBottom: "var(--spacing-md)"
            }}></div>
            <p className="text-body" style={{ fontWeight: 600 }}>원형</p>
            <p className="text-small" style={{ color: "var(--color-secondary)" }}>완전성, 순환</p>
          </div>
        </div>

        <div style={{ marginTop: "var(--spacing-xl)", padding: "var(--spacing-lg)", backgroundColor: "var(--color-surface)", borderRadius: "var(--radius-md)" }}>
          <p className="text-body" style={{ fontWeight: 600, marginBottom: "var(--spacing-sm)" }}>사용 가이드</p>
          <ul style={{ listStyle: "disc", paddingLeft: "20px", color: "var(--color-secondary)" }}>
            <li className="text-body">세 가지 도형을 조합하여 심볼 구성</li>
            <li className="text-body">블루 액센트 컬러로 사용 권장</li>
            <li className="text-body">배경 장식 요소로 활용 가능 (투명도 10-20%)</li>
          </ul>
        </div>
      </section>

      {/* Components */}
      <section>
        <h2 className="text-h2" style={{ marginBottom: "var(--spacing-lg)" }}>Components</h2>
        <div className="flex" style={{ alignItems: "center" }}>
          <button className="btn btn-primary">Primary Button</button>
          <button className="btn btn-outline">Secondary Button</button>
        </div>
      </section>

    </main>
  );
}
