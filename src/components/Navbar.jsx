import React from 'react'


function Navbar() {
    const tv={

        color: "#0000FF",
        position:"relative",
        left:"680px",
        fontFamily:"Cursive", 
    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav" >
          <a className="nav-link active" aria-current="page" href="https://www.bursa.bel.tr/haber/buyuksehirden-kablosuz-guvenli-internet-erisimi-20807"  style={tv}>Wifi Ağına bağlanmak için ne yapmalıyım?</a>
          <a className="nav-link" href="https://bursabuyuksehir.tv/" style={tv}>Büyükşehir TV</a>
          <a className="nav-link" href="https://www.bursa.bel.tr/sayfa/tarihce-10"  style={tv}>Tarihçemiz</a>
          <a className="nav-link" href="https://www.bursa.bel.tr/sayfa/vizyon-misyon-8"  style={tv}>Vizyon Ve Misyonumuz</a>
          <a className="nav-link" href="https://www.bursa.bel.tr/iletisim"  style={tv}>İletişim</a>
          
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar