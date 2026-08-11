import './App.css'

const featuredMenu = [
  {
    name: 'Honey Latte',
    price: '95฿',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cinnamon Croissant',
    price: '75฿',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Matcha Cream',
    price: '110฿',
    image:
      'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">My Favorite Cafe</a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Coffee • Bakery • Chill</p>
            <h1>Amazon Cafe</h1>
            <p className="hero-text">
              คาเฟ่เล็ก ๆ บรรยากาศดี กาแฟอร่อย พร้อมขนมหวานสุดน่าหลงใหล
            </p>
            <a className="button-primary" href="#menu">
              ดูเมนูแนะนำ
            </a>
          </div>
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
            alt="Amazon Cafe interior"
          />
        </section>

        <section id="about" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">About Cafe</p>
            <h2>Amazon Cafe</h2>
          </div>
          <div className="about-grid">
            <div>
              <p>
                Amazon Cafe เป็นคาเฟ่ที่ตั้งอยู่ใจกลางเมือง พร้อมบรรยากาศอบอุ่นและ
                เหมาะสำหรับนั่งชิลด้วยกาแฟหอม ๆ และขนมที่ชวนให้ยิ้ม
              </p>
              <p>
                จุดเด่นของร้านคือกาแฟคั่วสดจากเมล็ดคุณภาพดี, แซนวิชแสนอร่อย
                และเจ้าของร้านที่ให้บริการด้วยความอบอุ่น
              </p>
            </div>
            <div className="about-details">
              <h3>ที่ตั้ง</h3>
              <p>123 ถนนชิดลม แขวงสีลม กรุงเทพฯ</p>
              <h3>จุดเด่น</h3>
              <ul>
                <li>บรรยากาศนั่งชิลและเงียบสงบ</li>
                <li>เมนูกาแฟและขนมหลากหลาย</li>
                <li>กาแฟสดใหม่ทุกวัน</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="menu" className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Menu</p>
            <h2>เมนูแนะนำ</h2>
          </div>
          <div className="menu-grid">
            {featuredMenu.map((item) => (
              <article className="menu-card" key={item.name}>
                <img src={item.image} alt={item.name} />
                <div className="menu-info">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>ติดต่อเรา</h2>
          </div>
          <div className="contact-grid">
            <div>
              <h3>ที่อยู่</h3>
              <p>123 ถนนชิดลม แขวงสีลม กรุงเทพฯ</p>
            </div>
            <div>
              <h3>เวลาเปิด–ปิด</h3>
              <p>เปิดทุกวัน 08:00 – 22:00 น.</p>
            </div>
            <div>
              <h3>ติดต่อ</h3>
              <p>Tel: 02-123-4567</p>
              <p>Facebook: Amazon Cafe</p>
              <p>Instagram: @amazon.cafe</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 My Favorite Cafe</p>
        <p>Created by</p>
        <p>นายพัทธดนย์ ผ่องอารมย์</p>
        <p>009 สทส1/1</p>
      </footer>
    </div>
  )
}

export default App
