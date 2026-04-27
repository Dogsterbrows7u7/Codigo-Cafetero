const map = L.map('map').setView([4.75, -75.65], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

    // ICONOS
    function crearIcono(color) {
      return L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker-pin" style="background:${color};"></div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 22]
      });
    }

    const iconos = {
      cafe: crearIcono('#6f4e37'),
      cultura: crearIcono('#8e24aa'),
      natural: crearIcono('#43a047')
    };

    // FUNCIÓN WIKI
    function wikiLink(nombre) {
      return `https://es.wikipedia.org/wiki/Especial:Buscar?search=${encodeURIComponent(nombre)}`;
    }

    // LUGARES DEL CAFÉ
    const lugares = [
      {
        nombre: "Salento",
        coords: [4.6376, -75.5709],
        categoria: "cafe",
        wiki: wikiLink("Salento Quindío"),
        descripcion: `
      Salento es uno de los lugares más importantes del Eje Cafetero.<br><br>
      <b>Aprende:</b> Aquí puedes entender cómo el café forma parte de la cultura,
      la arquitectura y la vida diaria de las personas.<br><br>
      <b>Recomendación:</b> Observa más allá del turismo y valora el trabajo cafetero.
    `
      },
      {
        nombre: "Valle del Cocora",
        coords: [4.6370, -75.5000],
        categoria: "natural",
        wiki: wikiLink("Valle de Cocora"),
        descripcion: `
      Este paisaje representa el entorno natural donde se desarrolla la cultura cafetera.<br><br>
      <b>Aprende:</b> El café depende del clima, la tierra y la biodiversidad.<br><br>
      <b>Recomendación:</b> Cuida el entorno natural.
    `
      },
      {
        nombre: "Santa Rosa de Cabal",
        coords: [4.8686, -75.6214],
        categoria: "cafe",
        wiki: wikiLink("Santa Rosa de Cabal"),
        descripcion: `
      Municipio donde la tradición cafetera sigue viva.<br><br>
      <b>Aprende:</b> El café está ligado a la vida cotidiana de las familias.<br><br>
      <b>Recomendación:</b> Respeta las tradiciones locales.
    `
      },
      {
        nombre: "Pereira",
        coords: [4.8143, -75.6946],
        categoria: "cultura",
        wiki: wikiLink("Pereira"),
        descripcion: `
      Ciudad clave en el desarrollo del café.<br><br>
      <b>Aprende:</b> El café impulsó la economía y el crecimiento urbano.<br><br>
      <b>Recomendación:</b> Observa cómo la ciudad refleja esa historia.
    `
      }
    ];

    // POPUPS
    function crearPopup(lugar) {
      return `
    <div class="popup-card">
      <h3>${lugar.nombre}</h3>
      <div class="popup-text">${lugar.descripcion}</div>
      <div class="popup-buttons">
        <a href="${lugar.wiki}" target="_blank" class="btn-popup wiki">Wikipedia</a>
        <a href="https://www.google.com/maps/search/?api=1&query=${lugar.coords[0]},${lugar.coords[1]}"
        target="_blank" class="btn-popup ruta">Cómo llegar</a>
      </div>
    </div>
  `;
    }

    // MARCADORES
    lugares.forEach(lugar => {
      const marker = L.marker(lugar.coords, {
        icon: iconos[lugar.categoria]
      }).addTo(map);

      marker.bindPopup(crearPopup(lugar));
    });