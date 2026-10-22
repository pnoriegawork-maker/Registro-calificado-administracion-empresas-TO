// ===================================================================
// SECCIÓN: PRESENTACIÓN INSTITUCIONAL — v2 MEJORADA
// Fuente: Presentación Institucional.pptx (23 slides)
// Con gráficos Chart.js, fotos reales de sedes, estadísticas
// ===================================================================
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.inst = `
<div class="slide-header" style="border-bottom: 3px solid #C8102E; padding-bottom: 15px; margin-bottom: 25px;">
    <div style="display:flex; align-items:center; gap:15px; margin-bottom:10px;">
        <img src="assets/logo_oficial.png" alt="Logo TO" style="height:60px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.12);">
        <div>
            <div class="slide-subtitle" style="color:#C8102E; font-weight:bold; text-transform:uppercase; font-size:1rem; letter-spacing:2px;">Corporación Escuela Tecnológica del Oriente</div>
            <h1 style="color:#1A1A1B; font-size:2.2rem; margin:0; font-weight:800;">Presentación Institucional</h1>
        </div>
    </div>
    <p style="color:#6b7280; font-size:0.95rem; margin:0; font-style:italic;">"Establecer metas es el primer paso para transformar lo invisible en visible." — Tony Robbins</p>
</div>

<!-- ============ NAVEGACIÓN POR PESTAÑAS ============ -->
<div id="instTabBar" style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:25px; border-bottom:2px solid #e5e7eb; padding-bottom:12px;">
    <button class="inst-tab-btn active" onclick="window.switchInstTab('pei')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#1A1A1B; color:white;"><i class="fas fa-book mr-1"></i> PEI</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('evolucion')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-chart-line mr-1"></i> Evolución</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('convenios')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-handshake mr-1"></i> Convenios</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('oferta')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-graduation-cap mr-1"></i> Oferta</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('estudiantes')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-users mr-1"></i> Estudiantes</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('infra')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-building mr-1"></i> Infraestructura</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('retos')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-bullseye mr-1"></i> Retos</button>
</div>

<!-- ==================== TAB: PEI ==================== -->
<div id="instTab_pei" class="inst-tab-content" style="display:block;">
    <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:white; border-radius:16px; padding:30px; margin-bottom:25px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
            <div style="width:50px; height:50px; background:rgba(200,16,46,0.2); border:2px solid #C8102E; border-radius:50%; display:flex; align-items:center; justify-content:center;"><i class="fas fa-book-open" style="color:#C8102E; font-size:1.3rem;"></i></div>
            <div>
                <h3 style="font-weight:800; font-size:1.5rem; margin:0;">Proyecto Educativo Institucional</h3>
                <p style="color:#94a3b8; margin:0; font-size:0.9rem;">Modelo Pedagógico Constructivista</p>
            </div>
        </div>
        <div style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:10px; padding:20px; margin-bottom:20px;">
            <p style="font-size:1.1rem; line-height:1.7; color:#e2e8f0; margin:0; text-align:center;">"<strong style="color:#fbbf24;">Formación en Contextos de Aplicación</strong>" — Transferencia del conocimiento a la solución de problemas reales del entorno, bajo principios humanísticos y de responsabilidad social y ambiental.</p>
        </div>
    </div>

    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:20px; margin-bottom:25px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform=''">
            <div style="width:60px; height:60px; background:linear-gradient(135deg, #fef2f2, #fff); border:2px solid #fecaca; border-radius:50%; margin:0 auto 15px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-eye" style="font-size:1.5rem; color:#C8102E;"></i></div>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:10px;">Visión</h4>
            <p style="color:#4b5563; font-size:0.9rem; line-height:1.6;">Ser referente nacional en formación integral de profesionales competentes con impacto social y ambiental.</p>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform=''">
            <div style="width:60px; height:60px; background:linear-gradient(135deg, #FFF7ED, #fff); border:2px solid #FED7AA; border-radius:50%; margin:0 auto 15px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-bullhorn" style="font-size:1.5rem; color:#1A1A1B;"></i></div>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:10px;">Misión</h4>
            <p style="color:#4b5563; font-size:0.9rem; line-height:1.6;">Contribuir al desarrollo integral mediante transferencia de conocimiento a problemas reales del entorno.</p>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform=''">
            <div style="width:60px; height:60px; background:linear-gradient(135deg, #f0fdf4, #fff); border:2px solid #bbf7d0; border-radius:50%; margin:0 auto 15px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-hands-helping" style="font-size:1.5rem; color:#16a34a;"></i></div>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:10px;">Principios</h4>
            <p style="color:#4b5563; font-size:0.9rem; line-height:1.6;">Humanismo, responsabilidad social y ambiental, excelencia académica e innovación pedagógica.</p>
        </div>
    </div>

    <!-- Gráfico rueda interactiva PEI -->
    <!-- Gráfico rueda interactiva PEI -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; display:grid; grid-template-columns:1fr 1.2fr; gap:25px; align-items:start;">
        <div style="text-align:center;">
            <h3 style="color:#1A1A1B; font-weight:700; font-size:1.2rem; margin-bottom:15px; text-align:left;"><i class="fas fa-puzzle-piece mr-2" style="color:#C8102E;"></i>Ejes del Modelo Pedagógico</h3>
            <div style="background:#fafafa; border:1px solid #cbd5e1; border-radius:12px; padding:15px; box-shadow:0 4px 10px rgba(0,0,0,0.02); display:inline-block;">
                <img src="assets/media__1779920604503.png" alt="Ejes del Modelo Pedagógico - PEI" style="max-width:100%; max-height:360px; border-radius:8px; border:1px solid #cbd5e1; box-shadow: 0 4px 12px rgba(0,0,0,0.05); display:block; margin:0 auto;">
            </div>
        </div>
        
        <div>
            <h3 style="color:#1A1A1B; font-weight:700; font-size:1.2rem; margin-bottom:15px;"><i class="fas fa-hand-pointer mr-2" style="color:#FF6600;"></i>Seleccione un Eje para explorar</h3>
            
            <!-- Listado interactivo de ejes -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:15px;">
                <button onclick="window.showPeiAxisDetail('excelencia', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #4f46e5; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🛡️ Excelencia Académica</button>
                <button onclick="window.showPeiAxisDetail('corporatividad', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #16a34a; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🤝 Corporatividad</button>
                <button onclick="window.showPeiAxisDetail('flexibilidad', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #ca8a04; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🔄 Flexibilidad Curricular</button>
                <button onclick="window.showPeiAxisDetail('formacion', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #ea580c; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🌱 Formación Integral</button>
                <button onclick="window.showPeiAxisDetail('desarrollo', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #dc2626; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🍀 Desarrollo Sostenible</button>
                <button onclick="window.showPeiAxisDetail('coherencia', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #7c3aed; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🧩 Coherencia y Coexistencia</button>
                <button onclick="window.showPeiAxisDetail('pertinencia', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #EA580C; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">🎯 Pertinencia</button>
                <button onclick="window.showPeiAxisDetail('innovacion', this)" class="pei-btn" style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #c084fc; border-radius:6px; padding:10px; text-align:left; font-weight:700; font-size:0.82rem; color:#334155; cursor:pointer; transition:all 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="if(!this.classList.contains('active')) this.style.background='#f8fafc'">💡 Innovación</button>
            </div>

            <!-- Panel de Detalles -->
            <div id="peiAxisDetailPanel" style="background:#f8fafc; border:2px solid #e5e7eb; border-radius:12px; padding:20px; min-height:170px; display:flex; flex-direction:column; justify-content:center; border-left:5px solid #1A1A1B; transition: border-left-color 0.3s;">
                <div id="peiAxisDetailDefault">
                    <h4 style="color:#1A1A1B; font-weight:800; font-size:1.1rem; margin:0 0 10px 0;"><i class="fas fa-info-circle mr-2" style="color:#FF6600;"></i>Ejes del PEI</h4>
                    <p style="color:#475569; font-size:0.85rem; line-height:1.5; margin:0;">Seleccione cualquiera de los ejes del modelo PEI de la lista para ver su descripción conceptual y cómo se articula con nuestro modelo educativo.</p>
                </div>
                <div id="peiAxisDetailActive" style="display:none;">
                    <h4 id="peiAxisActiveTitle" style="color:#1A1A1B; font-weight:800; font-size:1.1rem; margin:0 0 8px 0; text-transform:uppercase;">Eje Seleccionado</h4>
                    <p id="peiAxisActiveDesc" style="color:#475569; font-size:0.85rem; line-height:1.5; margin:0; font-style:italic;">Descripción...</p>
                </div>
            </div>
        </div>
    </div>

    <div class="evidence-box" style="background:#f0fdf4; color:#166534; border-left:5px solid #16a34a; padding:15px; font-weight:bold; font-size:1rem; border-radius:4px; margin-top:20px;">
        <i class="fas fa-folder-open mr-2"></i> Anexo 5: Proyecto Educativo Institucional (PEI) · Anexo 6: Modelo Pedagógico
    </div>
</div>

<!-- ==================== TAB: EVOLUCIÓN ==================== -->
<div id="instTab_evolucion" class="inst-tab-content" style="display:none;">
    <!-- Contenedor Principal de la Línea de Tiempo Oficial (1992 - 2026) -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:16px; padding:25px 20px; margin-bottom:25px; box-shadow:0 8px 25px rgba(0,0,0,0.05);">
        <div style="text-align:center; margin-bottom:20px;">
            <div style="display:inline-flex; align-items:center; justify-content:center; gap:10px;">
                <div style="width:36px; height:36px; border-radius:50%; background:#FEE2E2; border:2px solid #C8102E; display:flex; align-items:center; justify-content:center;">
                    <i class="fas fa-history" style="color:#C8102E; font-size:1.1rem;"></i>
                </div>
                <h3 style="color:#1A1A1B; font-weight:800; font-size:1.6rem; margin:0; font-family:'Montserrat',sans-serif;">Evolución Institucional (1992 – 2026)</h3>
            </div>
            <p style="color:#6b7280; margin:6px 0 0 0; font-size:0.95rem;">Más de 30 años de trayectoria en educación superior y consolidación de la oferta académica oficial</p>
        </div>

        <!-- SVG Infografía S-Curve / Winding Snake Timeline idéntica a la imagen oficial -->
        <div style="width:100%; overflow-x:auto; background:#ffffff; border-radius:12px; padding:10px 0;">
            <svg viewBox="0 0 1260 880" width="100%" height="auto" style="display:block; min-width:980px; font-family:'Montserrat', sans-serif;">
                <defs>
                    <filter id="instDropShadow" x="-10%" y="-10%" width="130%" height="130%">
                        <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000000" flood-opacity="0.18"/>
                    </filter>
                    <linearGradient id="instArrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#EA580C"/>
                        <stop offset="100%" stop-color="#F59E0B"/>
                    </linearGradient>
                    <linearGradient id="instFinishGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#D97706"/>
                        <stop offset="100%" stop-color="#B45309"/>
                    </linearGradient>
                </defs>

                <!-- 1. Flecha Indicadora de Inicio (Top-Left) -->
                <path d="M 25,65 L 210,65 L 235,95 L 210,125 L 25,125 Z" fill="url(#instArrowGrad)" filter="url(#instDropShadow)"/>
                <text x="115" y="88" fill="#ffffff" font-size="14.5" font-weight="800" text-anchor="middle" letter-spacing="0.5">Evolución</text>
                <text x="115" y="108" fill="#ffffff" font-size="13" font-weight="700" text-anchor="middle">de la institución</text>

                <!-- ==================== TIER 1: 1992 -> 1995 -> 1998 (Izquierda a Derecha) ==================== -->
                <!-- Pistas y cintas horizontales -->
                <rect x="235" y="78" width="220" height="34" fill="#7C3AED"/>
                <rect x="455" y="78" width="250" height="34" fill="#4338CA"/>
                <rect x="705" y="78" width="315" height="34" fill="#0284C7"/>

                <!-- Curva U-Turn 1 Derecha (Conector hacia Tier 2) -->
                <path d="M 1020,95 A 75 75 0 0 1 1020,245" fill="none" stroke="#0284C7" stroke-width="34" stroke-dasharray="7,7" stroke-linecap="round"/>

                <!-- Pin 1992 -->
                <g transform="translate(325, 78)">
                    <path d="M 0,-42 C -18,-42 -18,-18 0,0 C 18,-18 18,-42 0,-42 Z" fill="#6D28D9" filter="url(#instDropShadow)"/>
                    <circle cx="0" cy="-24" r="7.5" fill="#ffffff"/>
                </g>
                <text x="325" y="101" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">1992</text>
                <!-- Texto Explicativo 1992 -->
                <text x="325" y="140" fill="#1E293B" font-size="12" font-weight="800" text-anchor="middle">Fundación Institucional</text>
                <text x="325" y="156" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Constitución de Asamblea de</text>
                <text x="325" y="170" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Corporados y primeros Estatutos</text>

                <!-- Pin 1995 -->
                <g transform="translate(565, 78)">
                    <path d="M 0,-42 C -18,-42 -18,-18 0,0 C 18,-18 18,-42 0,-42 Z" fill="#4338CA" filter="url(#instDropShadow)"/>
                    <circle cx="0" cy="-24" r="7.5" fill="#ffffff"/>
                </g>
                <text x="565" y="101" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">1995</text>
                <!-- Texto Explicativo 1995 -->
                <text x="565" y="140" fill="#1E293B" font-size="12" font-weight="800" text-anchor="middle">Consolidación Corporativa</text>
                <text x="565" y="156" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Cambio de Asamblea General</text>
                <text x="565" y="170" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">de Corporados y actualización del PEI</text>

                <!-- Pin 1998 -->
                <g transform="translate(850, 78)">
                    <path d="M 0,-42 C -18,-42 -18,-18 0,0 C 18,-18 18,-42 0,-42 Z" fill="#0284C7" filter="url(#instDropShadow)"/>
                    <circle cx="0" cy="-24" r="7.5" fill="#ffffff"/>
                </g>
                <text x="850" y="101" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">1998</text>
                <!-- Texto Explicativo 1998 -->
                <text x="850" y="140" fill="#1E293B" font-size="12" font-weight="800" text-anchor="middle">Cambio de Denominación</text>
                <text x="850" y="156" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Corporación Escuela Tecnológica del Oriente</text>
                <text x="850" y="170" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">entendiéndose con las siglas TO - PJ</text>

                <!-- ==================== TIER 2: 2004 <- 2007-2009 (Derecha a Izquierda) ==================== -->
                <!-- Pistas y cintas horizontales -->
                <rect x="670" y="228" width="350" height="34" fill="#65A30D"/>
                <rect x="240" y="228" width="430" height="34" fill="#EAB308"/>

                <!-- Curva U-Turn 2 Izquierda (Conector hacia Tier 3) -->
                <path d="M 240,245 A 75 75 0 0 0 240,395" fill="none" stroke="#EAB308" stroke-width="34" stroke-dasharray="7,7" stroke-linecap="round"/>

                <!-- Texto e Hito 2004 -->
                <text x="845" y="215" fill="#1E293B" font-size="12.5" font-weight="800" text-anchor="middle">Creación de Estatutos Generales</text>
                <text x="845" y="251" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">2004</text>
                <text x="845" y="280" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Reforma estatutaria e institucional integral</text>

                <!-- Texto e Hito 2007 - 2009 -->
                <text x="450" y="215" fill="#1E293B" font-size="12.5" font-weight="800" text-anchor="middle">Impacto Social y Alfabetización Nacional</text>
                <text x="450" y="251" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">2007 - 2009</text>
                <text x="450" y="280" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Lidera el Programa Nacional de Erradicación del Analfabetismo · Actualización del PEI</text>

                <!-- ==================== TIER 3: 2012 -> 2014 -> 2017-2019 -> 2021 (Izquierda a Derecha) ==================== -->
                <!-- Pistas y cintas horizontales -->
                <rect x="240" y="378" width="185" height="34" fill="#EA580C"/>
                <rect x="425" y="378" width="195" height="34" fill="#F97316"/>
                <rect x="620" y="378" width="220" height="34" fill="#DC2626"/>
                <rect x="840" y="378" width="180" height="34" fill="#BE185D"/>

                <!-- Curva U-Turn 3 Derecha (Conector hacia Tier 4) -->
                <path d="M 1020,395 A 75 75 0 0 1 1020,545" fill="none" stroke="#BE185D" stroke-width="34" stroke-dasharray="7,7" stroke-linecap="round"/>

                <!-- Pin 2012 -->
                <g transform="translate(325, 378)">
                    <path d="M 0,-42 C -18,-42 -18,-18 0,0 C 18,-18 18,-42 0,-42 Z" fill="#EA580C" filter="url(#instDropShadow)"/>
                    <circle cx="0" cy="-24" r="7.5" fill="#ffffff"/>
                </g>
                <text x="325" y="401" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">2012</text>
                <!-- Texto 2012 -->
                <text x="325" y="440" fill="#1E293B" font-size="12" font-weight="800" text-anchor="middle">Oferta de Posgrados</text>
                <text x="325" y="456" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Inicio Esp. en Pedagogía y</text>
                <text x="325" y="470" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Didácticas Específicas (101639)</text>

                <!-- Pin 2014 -->
                <g transform="translate(520, 378)">
                    <path d="M 0,-42 C -18,-42 -18,-18 0,0 C 18,-18 18,-42 0,-42 Z" fill="#F97316" filter="url(#instDropShadow)"/>
                    <circle cx="0" cy="-24" r="7.5" fill="#ffffff"/>
                </g>
                <text x="520" y="401" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">2014</text>
                <!-- Texto 2014 -->
                <text x="520" y="440" fill="#1E293B" font-size="12" font-weight="800" text-anchor="middle">Técnicas y Posgrados</text>
                <text x="520" y="456" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Esp. Gerencia Proyectos (103745)</text>
                <text x="520" y="470" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">TP Higiene y SST (103527)</text>

                <!-- Pin 2017 - 2019 -->
                <g transform="translate(730, 378)">
                    <path d="M 0,-42 C -18,-42 -18,-18 0,0 C 18,-18 18,-42 0,-42 Z" fill="#DC2626" filter="url(#instDropShadow)"/>
                    <circle cx="0" cy="-24" r="7.5" fill="#ffffff"/>
                </g>
                <text x="730" y="401" fill="#ffffff" font-size="15" font-weight="800" text-anchor="middle">2017 - 2019</text>
                <!-- Texto 2017 - 2019 -->
                <text x="730" y="440" fill="#1E293B" font-size="12" font-weight="800" text-anchor="middle">Pregrado y Expansión</text>
                <text x="730" y="456" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Admon Empresas Presencial (108445)</text>
                <text x="730" y="470" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">SST Presencial (106177) · Esp. GIR SST</text>

                <!-- Pin 2021 -->
                <g transform="translate(930, 378)">
                    <path d="M 0,-42 C -18,-42 -18,-18 0,0 C 18,-18 18,-42 0,-42 Z" fill="#BE185D" filter="url(#instDropShadow)"/>
                    <circle cx="0" cy="-24" r="7.5" fill="#ffffff"/>
                </g>
                <text x="930" y="401" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">2021</text>
                <!-- Texto 2021 -->
                <text x="930" y="440" fill="#1E293B" font-size="12" font-weight="800" text-anchor="middle">Actualización del PEI</text>
                <text x="930" y="456" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">Modelo Pedagógico Institucional:</text>
                <text x="930" y="470" fill="#475569" font-size="10.5" font-weight="600" text-anchor="middle">"Formación en Contextos de Aplicación"</text>

                <!-- ==================== TIER 4: 2022 <- 2023 <- 2024 <- 2025 <- 2026 (Derecha a Izquierda) ==================== -->
                <!-- Pistas y cintas horizontales -->
                <rect x="880" y="528" width="140" height="34" fill="#10B981"/>
                <rect x="710" y="528" width="170" height="34" fill="#EC4899"/>
                <rect x="510" y="528" width="200" height="34" fill="#06B6D4"/>
                <rect x="290" y="528" width="220" height="34" fill="#4F46E5"/>
                <rect x="30" y="528" width="260" height="34" fill="url(#instFinishGrad)" rx="6" filter="url(#instDropShadow)"/>

                <!-- Hito 2022 -->
                <text x="950" y="515" fill="#047857" font-size="11.5" font-weight="800" text-anchor="middle">Evaluación Externa</text>
                <text x="950" y="551" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">2022</text>
                <text x="950" y="580" fill="#1E293B" font-size="11" font-weight="800" text-anchor="middle">Visita Institucional MEN</text>
                <text x="950" y="595" fill="#475569" font-size="10" font-weight="600" text-anchor="middle">Condiciones Institucionales</text>
                <text x="950" y="609" fill="#475569" font-size="10" font-weight="600" text-anchor="middle">de alta calidad</text>

                <!-- Hito 2023 -->
                <text x="795" y="515" fill="#BE185D" font-size="11.5" font-weight="800" text-anchor="middle">Concepto Favorable</text>
                <text x="795" y="551" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">2023</text>
                <text x="795" y="580" fill="#1E293B" font-size="11" font-weight="800" text-anchor="middle">Concepto Favorable MEN</text>
                <text x="795" y="595" fill="#475569" font-size="10" font-weight="600" text-anchor="middle">Condiciones Institucionales</text>
                <text x="795" y="609" fill="#475569" font-size="10" font-weight="600" text-anchor="middle">RC Lic. Educación Infantil (116357)</text>

                <!-- Hito 2024 -->
                <text x="610" y="515" fill="#0E7490" font-size="11.5" font-weight="800" text-anchor="middle">Modelo Virtual &amp; I+D</text>
                <text x="610" y="551" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">2024</text>
                <text x="610" y="580" fill="#1E293B" font-size="11" font-weight="800" text-anchor="middle">Despliegue Modalidad Virtual</text>
                <text x="610" y="595" fill="#475569" font-size="10" font-weight="600" text-anchor="middle">Admon Virtual (115833), LEI (115854)</text>
                <text x="610" y="609" fill="#475569" font-size="10" font-weight="600" text-anchor="middle">Esp. SST (118070), Software (118074)</text>

                <!-- Hito 2025 -->
                <text x="400" y="515" fill="#4338CA" font-size="11.5" font-weight="800" text-anchor="middle">Expansión Nacional</text>
                <text x="400" y="551" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle">2025</text>
                <text x="400" y="580" fill="#1E293B" font-size="11" font-weight="800" text-anchor="middle">Consolidación de Oferta Virtual</text>
                <text x="400" y="595" fill="#475569" font-size="10" font-weight="600" text-anchor="middle">Derecho (119385), SST (118713), Industrial</text>
                <text x="400" y="609" fill="#475569" font-size="10" font-weight="600" text-anchor="middle">Esp. BI (118755), Innovación, Proy. (118858)</text>

                <!-- Hito 2026 (META INSTITUCIONAL Y REGISTRO ÚNICO) -->
                <!-- Pin Dorado 2026 -->
                <g transform="translate(160, 528)">
                    <path d="M 0,-42 C -18,-42 -18,-18 0,0 C 18,-18 18,-42 0,-42 Z" fill="#D97706" filter="url(#instDropShadow)"/>
                    <circle cx="0" cy="-24" r="7.5" fill="#FEF3C7"/>
                </g>
                <text x="160" y="515" fill="#B45309" font-size="12" font-weight="900" text-anchor="middle">⭐ Hito Estratégico 2026</text>
                <text x="160" y="551" fill="#ffffff" font-size="16" font-weight="900" text-anchor="middle">2026</text>
                <text x="160" y="582" fill="#B45309" font-size="12" font-weight="800" text-anchor="middle">Consolidación 17 Programas</text>
                <text x="160" y="598" fill="#1E293B" font-size="10.5" font-weight="700" text-anchor="middle">Renovación hacia REGISTRO ÚNICO</text>
                <text x="160" y="612" fill="#C8102E" font-size="10.5" font-weight="800" text-anchor="middle">Admon Empresas (8 Sem / 144 Cr)</text>

                <!-- Tarjeta Resumen Inferior de Trazabilidad Oficial 1992-2026 -->
                <g transform="translate(30, 660)">
                    <rect x="0" y="0" width="1200" height="175" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
                    <circle cx="45" cy="40" r="22" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
                    <text x="45" y="47" fill="#B45309" font-size="18" font-weight="900" text-anchor="middle">🏆</text>
                    <text x="85" y="36" fill="#1E293B" font-size="14" font-weight="800">Trayectoria Progresiva y Oferta Académica Oficial (Actualizado 2026)</text>
                    <text x="85" y="56" fill="#64748B" font-size="11.5" font-weight="600">Desde su constitución en 1992, la Tecnológica del Oriente ha evolucionado con registros calificados aprobados por el Ministerio de Educación Nacional (MEN):</text>
                    
                    <!-- 4 Columnas Sintéticas -->
                    <rect x="25" y="75" width="270" height="80" rx="8" fill="#ffffff" stroke="#CBD5E1"/>
                    <text x="40" y="96" fill="#C8102E" font-size="12" font-weight="800">Pregrado Presencial (4)</text>
                    <text x="40" y="114" fill="#334155" font-size="10.5" font-weight="600">• Admon Empresas (SNIES 108445)</text>
                    <text x="40" y="128" fill="#334155" font-size="10.5" font-weight="600">• Lic. Educ. Infantil (SNIES 116357)</text>
                    <text x="40" y="142" fill="#334155" font-size="10.5" font-weight="600">• SST (106177) · TP Higiene (103527)</text>

                    <rect x="315" y="75" width="280" height="80" rx="8" fill="#ffffff" stroke="#CBD5E1"/>
                    <text x="330" y="96" fill="#1A1A1B" font-size="12" font-weight="800">Pregrado Virtual (6)</text>
                    <text x="330" y="114" fill="#334155" font-size="10.5" font-weight="600">• Admon Empresas Virtual (115833)</text>
                    <text x="330" y="128" fill="#334155" font-size="10.5" font-weight="600">• Derecho (119385) · Software (118074)</text>
                    <text x="330" y="142" fill="#334155" font-size="10.5" font-weight="600">• LEI (115854) · SST (118713) · Industrial</text>

                    <rect x="615" y="75" width="280" height="80" rx="8" fill="#ffffff" stroke="#CBD5E1"/>
                    <text x="630" y="96" fill="#D97706" font-size="12" font-weight="800">Posgrado Presencial (3)</text>
                    <text x="630" y="114" fill="#334155" font-size="10.5" font-weight="600">• Esp. Pedagogía y Didácticas (101639)</text>
                    <text x="630" y="128" fill="#334155" font-size="10.5" font-weight="600">• Esp. Gerencia Proyectos (103745)</text>
                    <text x="630" y="142" fill="#334155" font-size="10.5" font-weight="600">• Esp. Gerencia Integral SST (110536)</text>

                    <rect x="915" y="75" width="265" height="80" rx="8" fill="#ffffff" stroke="#CBD5E1"/>
                    <text x="930" y="96" fill="#7C3AED" font-size="12" font-weight="800">Posgrado Virtual (4)</text>
                    <text x="930" y="114" fill="#334155" font-size="10.5" font-weight="600">• Esp. BI &amp; Analítica de Datos (118755)</text>
                    <text x="930" y="128" fill="#334155" font-size="10.5" font-weight="600">• Esp. Innovación Educativa (011264)</text>
                    <text x="930" y="142" fill="#334155" font-size="10.5" font-weight="600">• Esp. Proyectos (118858) · Esp. SST (118070)</text>
                </g>
            </svg>
        </div>
    </div>
</div>

<!-- ==================== TAB: CONVENIOS ==================== -->
<div id="instTab_convenios" class="inst-tab-content" style="display:none;">
    <!-- Hero Banner (Uniforme) -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; min-height:220px; background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 60%, #3A3A3B 100%);">
        <div style="position:absolute; top:0; right:0; width:45%; height:100%; opacity:0.15; background:url('assets/inst_slides/inst_slide_7_img_0.png') center/cover;"></div>
        <div style="position:relative; z-index:2; padding:35px 30px; color:white;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                <img src="assets/logo_oficial.png" alt="Logo" style="height:80px; background:white; padding:8px; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.3);">
                <div>
                    <h2 style="font-size:1.8rem; font-weight:800; margin:0; font-family:'Montserrat',sans-serif;">Tecnológica del Oriente</h2>
                    <p style="font-size:1rem; color:#cbd5e1; margin:5px 0 0;">Institución de Educación Superior · Bucaramanga, Santander</p>
                </div>
            </div>
            <p style="font-size:1.05rem; line-height:1.7; color:#ffffff; max-width:95%; text-align:justify; font-family:'Open Sans', sans-serif;">La Corporación Escuela Tecnológica del Oriente promueve activamente la cooperación interinstitucional para enriquecer los procesos de docencia, investigación y proyección social. A través de más de 25 convenios académicos con prestigiosas universidades, más de 100 alianzas estratégicas con el sector público y privado (incluyendo alcaldías, gobernaciones y gremios empresariales), y más de 4 convenios internacionales con instituciones de México, España, Ecuador y Panamá, garantizamos la transferencia efectiva de conocimiento, clases espejo, movilidad académica y espacios idóneos de práctica profesional en contextos reales de aplicación.</p>
        </div>
    </div>

    <!-- Mapa de convenios -->
    <div style="display:grid; grid-template-columns:1fr; gap:20px; margin-bottom:25px;">
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px;">
            <div style="background:linear-gradient(135deg, #1A1A1B, #2D2D2E); color:white; border-radius:12px; padding:20px; text-align:center;">
                <div style="font-size:2.5rem; font-weight:800; font-family:'Montserrat'; color:#fbbf24;">más de 4</div>
                <div style="font-size:0.85rem; font-weight:600; color:#94a3b8;">Convenios Internacionales</div>
                <div style="font-size:0.75rem; color:#64748b; margin-top:5px;">México · España · Ecuador · Panamá</div>
            </div>
            <div style="background:white; border:2px solid #C8102E; border-radius:12px; padding:20px; text-align:center;">
                <div style="font-size:2.5rem; font-weight:800; font-family:'Montserrat'; color:#C8102E;">más de 25</div>
                <div style="font-size:0.85rem; font-weight:600; color:#6b7280;">Convenios Académicos</div>
                <div style="font-size:0.75rem; color:#9ca3af; margin-top:5px;">Universidades y centros de formación</div>
            </div>
            <div style="background:white; border:2px solid #1A1A1B; border-radius:12px; padding:20px; text-align:center;">
                <div style="font-size:2.5rem; font-weight:800; font-family:'Montserrat'; color:#1A1A1B;">más de 100</div>
                <div style="font-size:0.85rem; font-weight:600; color:#6b7280;">Sector Público y Privado</div>
                <div style="font-size:0.75rem; color:#9ca3af; margin-top:5px;">Gobernaciones, alcaldías, empresas</div>
            </div>
        </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px;">
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;"><i class="fas fa-globe mr-2" style="color:#C8102E;"></i>Internacionales</h4>
            <div style="display:grid; gap:8px;">
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #F39200;"><span style="font-size:1.2rem;">🇲🇽</span><div><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;">UNADE de México</div></div></div>
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #C8102E;"><span style="font-size:1.2rem;">🇪🇸</span><div><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;">Universidad de Granada</div></div></div>
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #fbbf24;"><span style="font-size:1.2rem;">🇪🇨</span><div><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;">Universidad de Cuenca</div></div></div>
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #16a34a;"><span style="font-size:1.2rem;">🇵🇦</span><div><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;">UMECIT</div></div></div>
            </div>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px;">
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:15px; border-bottom:2px solid #1A1A1B; padding-bottom:8px;"><i class="fas fa-handshake mr-2" style="color:#1A1A1B;"></i>Nacionales Destacados</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏛️ Gobernación de Santander</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">👮 Policía Nacional</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🎓 SENA</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏢 Fenalco Santander</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏥 Positiva ARL</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏫 Cajasan</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🎓 U. Católica de Colombia</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">📜 Asonal Judicial</div>
            </div>
        </div>
    </div>

    <!-- Gráfico de convenios y galería de alianzas -->
    <div style="display:grid; grid-template-columns:1fr 1.6fr; gap:20px; margin-top:20px; align-items:start;">
        <div style="background:white; border:2px solid #E5E7EB; border-radius:12px; padding:20px;">
            <h3 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin-bottom:15px;"><i class="fas fa-chart-pie mr-2" style="color:#F39200;"></i>Distribución de Convenios</h3>
            <canvas id="instConveniosChart" style="max-height:180px;"></canvas>
            <div style="margin-top:16px; background:#FFF7ED; border:1px solid #FED7AA; border-radius:8px; padding:12px; text-align:center;">
                <div style="font-size:1.6rem; font-weight:900; color:#D97F00; font-family:'Montserrat';">+70 Convenios</div>
                <div style="font-size:0.75rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Activos en el Portal Institucional TO</div>
            </div>
        </div>
        <div style="background:white; border:2px solid #E5E7EB; border-radius:12px; padding:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:2px solid #F39200; padding-bottom:8px;">
                <h3 style="color:#1A1A1B; font-weight:700; font-size:1.15rem; margin:0;"><i class="fas fa-handshake mr-2" style="color:#F39200;"></i>Alianzas Estratégicas y Convenios Oficiales</h3>
                <span style="background:#C8102E; color:white; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:12px;">15 Aliados Clave</span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; max-height:480px; overflow-y:auto; padding-right:5px;">

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/bit_institute.png" alt="BIT Institute" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                BIT Institute
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Privado
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Tecnología y Capacitación Digital
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/strategy_minds.png" alt="Strategy Minds" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Strategy Minds
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Privado
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Consultoría y Estrategia Empresarial
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/ibero.png" alt="Corporación Universitaria Iberoamericana (IBERO)" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Corporación Universitaria Iberoamericana (IBERO)
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Educación Superior
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Cooperación Académica y Movilidad
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/upel.png" alt="UPEL (Univ. Pedagógica Experimental)" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                UPEL (Univ. Pedagógica Experimental)
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Internacional
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Convenio de Posgrados y Doctorado
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/positiva.png" alt="Positiva Compañía de Seguros" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Positiva Compañía de Seguros
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Asegurador / SST
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Prácticas Profesionales y SST
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/u_catolica.png" alt="Universidad Católica" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Universidad Católica
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Educación Superior
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Alianza Académica y Redes de Investigación
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/unigermana.png" alt="Unigermana" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Unigermana
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Educación Superior
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Cooperación Interinstitucional
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/umecit.png" alt="UMECIT Panamá" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                UMECIT Panamá
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Internacional
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Movilidad Internacional y Pasantías
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/prevent_group.png" alt="Prevent Group" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Prevent Group
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Empresarial
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Alianza Productiva y Seguridad Industrial
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/policia_nacional.png" alt="Policía Nacional de Colombia" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Policía Nacional de Colombia
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Público Nacional
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Formación y Bienestar Institucional
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/personeria_bucaramanga.png" alt="Personería de Bucaramanga" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Personería de Bucaramanga
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Público Municipal
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Prácticas Profesionales y Derechos
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/gobernacion_santander.png" alt="Gobernación de Santander" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Gobernación de Santander
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Público Departamental
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Desarrollo Regional y Becas
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/cajasan.png" alt="Cajasan (Caja de Compensación)" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Cajasan (Caja de Compensación)
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Compensación Familiar
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Prácticas, Empleo y Bienestar
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/alcaldia_lebrija.png" alt="Alcaldía Municipal de Lebrija" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Alcaldía Municipal de Lebrija
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Público Municipal
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Impacto Territorial y Extensión
            </div>
        </div>
        

        <div style="background:white; border:1px solid #E5E7EB; border-radius:10px; padding:12px; display:flex; flex-direction:column; align-items:center; text-align:center; transition:transform 0.2s, box-shadow 0.2s; box-shadow:0 2px 6px rgba(0,0,0,0.04);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 18px rgba(243,146,0,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 6px rgba(0,0,0,0.04)';">
            <div style="width:75px; height:75px; border-radius:8px; background:#FAFAFA; border:1px solid #F1F5F9; display:flex; align-items:center; justify-content:center; padding:6px; margin-bottom:8px;">
                <img src="assets/convenios/alcaldia_bucaramanga.png" alt="Alcaldía de Bucaramanga" style="max-width:100%; max-height:100%; object-fit:contain;">
            </div>
            <div style="font-weight:700; font-size:0.78rem; color:#1A1A1B; line-height:1.25; margin-bottom:4px; min-height:32px; display:flex; align-items:center; justify-content:center;">
                Alcaldía de Bucaramanga
            </div>
            <span style="display:inline-block; background:#FFF3E0; color:#D97F00; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:4px; text-transform:uppercase;">
                Público Municipal
            </span>
            <div style="font-size:0.68rem; color:#6B6B6B; margin-top:4px; line-height:1.2;">
                Convenio Marco de Ciudad y Empleabilidad
            </div>
        </div>
        
            </div>
        </div>
    </div>
</div>

<!-- ==================== TAB: OFERTA ==================== -->
<div id="instTab_oferta" class="inst-tab-content" style="display:none;">
    <!-- Encabezado Institucional (Paleta Administración: Carbon y Naranja TO) -->
    <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 50%, #1A1A1B 100%); color:white; border-left:6px solid #F39200; border-radius:14px; padding:24px 28px; margin-bottom:20px; box-shadow:0 8px 25px rgba(26,26,27,0.18);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
            <div>
                <div style="display:inline-flex; align-items:center; gap:8px; background:rgba(243,146,0,0.18); border:1px solid #F39200; border-radius:20px; padding:4px 12px; margin-bottom:8px;">
                    <i class="fas fa-check-circle" style="color:#F39200; font-size:0.85rem;"></i>
                    <span style="font-size:0.75rem; font-weight:700; color:#F39200; text-transform:uppercase; letter-spacing:0.5px;">Información Oficial y Verificable MEN</span>
                </div>
                <h3 style="font-weight:800; font-size:1.55rem; margin:0 0 6px 0; font-family:'Montserrat',sans-serif; color:white;">
                    <i class="fas fa-graduation-cap mr-2" style="color:#F39200;"></i>Oferta Académica Vigente Institucional
                </h3>
                <p style="color:#D1D1D1; margin:0; font-size:0.88rem; max-width:850px; line-height:1.5;">
                    Seleccione cualquier programa para visualizar en ventana emergente sus características sintéticas oficiales (Nivel Académico, Modalidad, Duración en Semestres, Créditos Académicos y Código SNIES). Información sincronizada con el portal oficial: <a href="https://tecnologicadeloriente.edu.co/oferta-academica/" target="_blank" rel="noopener noreferrer" style="color:#F39200; text-decoration:underline; font-weight:700;">tecnologicadeloriente.edu.co/oferta-academica/</a>.
                </p>
            </div>
            <div>
                <a href="https://tecnologicadeloriente.edu.co/oferta-academica/" target="_blank" rel="noopener noreferrer" style="display:inline-flex; align-items:center; gap:8px; background:#F39200; color:#1A1A1B; font-size:0.82rem; font-weight:800; padding:10px 16px; border-radius:8px; text-decoration:none; box-shadow:0 4px 12px rgba(243,146,0,0.3); transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform=''">
                    <i class="fas fa-globe"></i> Portal Institucional TO ↗
                </a>
            </div>
        </div>
    </div>

    <!-- Indicadores Numéricos Consolidados -->
    <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:12px; margin-bottom:20px;">
        <div style="background:white; border:2px solid #E5E7EB; border-radius:10px; padding:12px; text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">17</div>
            <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Total Programas</div>
        </div>
        <div style="background:white; border:2px solid #C8102E; border-radius:10px; padding:12px; text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:#C8102E; font-family:'Montserrat';">4</div>
            <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Pregrados Presenciales</div>
        </div>
        <div style="background:white; border:2px solid #F39200; border-radius:10px; padding:12px; text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:#F39200; font-family:'Montserrat';">6</div>
            <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Pregrados Virtuales</div>
        </div>
        <div style="background:white; border:2px solid #D97F00; border-radius:10px; padding:12px; text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:#D97F00; font-family:'Montserrat';">3</div>
            <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Posgrados Presenciales</div>
        </div>
        <div style="background:white; border:2px solid #EA580C; border-radius:10px; padding:12px; text-align:center;">
            <div style="font-size:1.7rem; font-weight:800; color:#EA580C; font-family:'Montserrat';">4</div>
            <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Posgrados Virtuales</div>
        </div>
    </div>

    <!-- Panel de Selectores Interactivos por Nivel y Modalidad -->
    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:16px; margin-bottom:20px;">

        <div style="background:white; border:2px solid #E5E7EB; border-top:4px solid #C8102E; border-radius:12px; padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-school" style="color:#C8102E; font-size:1.1rem;"></i>
                        <h4 style="color:#1A1A1B; font-weight:800; font-size:0.98rem; margin:0; font-family:'Montserrat';">Pregrado Presencial</h4>
                    </div>
                    <span style="background:#1A1A1B; color:white; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">4 Programas</span>
                </div>
                <div style="display:grid; gap:8px;">

            <div onclick="window.showProgInfoModal('adm_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #C8102E; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-briefcase" style="color:#C8102E; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Administración de Empresas (Presencial)<span style="background:#FEF3C7; color:#92400E; font-size:0.6rem; font-weight:800; padding:1px 5px; border-radius:3px; margin-left:4px;">REGISTRO ÚNICO</span>
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>108445</strong> · 9 semestres (Plan Vigente) / 8 semestres (Propuesto)
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#C8102E; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('lic_infantil_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #C8102E; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-child" style="color:#C8102E; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Licenciatura en Educación Infantil
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>116357</strong> · 9 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#C8102E; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('sst_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #C8102E; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-shield-alt" style="color:#C8102E; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Seguridad y Salud en el Trabajo
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>106177</strong> · 9 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#C8102E; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('tecnica_sst')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #C8102E; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-hard-hat" style="color:#C8102E; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Técnica Profesional en Higiene y Seguridad en el Trabajo
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>103527</strong> · 4 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#C8102E; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            
                </div>
            </div>
        </div>
        

        <div style="background:white; border:2px solid #E5E7EB; border-top:4px solid #F39200; border-radius:12px; padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-laptop" style="color:#F39200; font-size:1.1rem;"></i>
                        <h4 style="color:#1A1A1B; font-weight:800; font-size:0.98rem; margin:0; font-family:'Montserrat';">Pregrado Virtual</h4>
                    </div>
                    <span style="background:#1A1A1B; color:white; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">6 Programas</span>
                </div>
                <div style="display:grid; gap:8px;">

            <div onclick="window.showProgInfoModal('adm_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-chart-line" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Administración de Empresas Virtual<span style="background:#FEF3C7; color:#92400E; font-size:0.6rem; font-weight:800; padding:1px 5px; border-radius:3px; margin-left:4px;">REGISTRO ÚNICO</span>
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>115833</strong> · 9 semestres (Plan Vigente) / 8 semestres (Propuesto)
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('derecho_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-balance-scale" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Derecho Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>119385</strong> · 10 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('software_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-code" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Ingeniería en Desarrollo de Software
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>118074</strong> · 8 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('lic_infantil_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-shapes" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Licenciatura en Educación Infantil Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>115854</strong> · 9 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('sst_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-user-shield" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Seguridad y Salud en el Trabajo Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>118713</strong> · 9 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('ind_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #F39200; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-industry" style="color:#F39200; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Ingeniería Industrial Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>Registro Calificado MEN</strong> · 8 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#F39200; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            
                </div>
            </div>
        </div>
        

        <div style="background:white; border:2px solid #E5E7EB; border-top:4px solid #D97F00; border-radius:12px; padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-award" style="color:#D97F00; font-size:1.1rem;"></i>
                        <h4 style="color:#1A1A1B; font-weight:800; font-size:0.98rem; margin:0; font-family:'Montserrat';">Posgrado Presencial</h4>
                    </div>
                    <span style="background:#1A1A1B; color:white; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">3 Especializaciones</span>
                </div>
                <div style="display:grid; gap:8px;">

            <div onclick="window.showProgInfoModal('esp_riesgo_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #D97F00; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-notes-medical" style="color:#D97F00; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Gerencia Integral del Riesgo, SST
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>110536</strong> · 3 cuatrimestres (1 año)
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#D97F00; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('esp_proyectos_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #D97F00; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-tasks" style="color:#D97F00; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Gerencia de Proyectos
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>103745</strong> · 2 semestres (1 año)
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#D97F00; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('esp_pedagogia_presencial')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #D97F00; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-chalkboard-teacher" style="color:#D97F00; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Pedagogía y Didácticas Específicas
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>101639</strong> · 4 trimestres (1 año)
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#D97F00; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            
                </div>
            </div>
        </div>
        

        <div style="background:white; border:2px solid #E5E7EB; border-top:4px solid #EA580C; border-radius:12px; padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-wifi" style="color:#EA580C; font-size:1.1rem;"></i>
                        <h4 style="color:#1A1A1B; font-weight:800; font-size:0.98rem; margin:0; font-family:'Montserrat';">Posgrado Virtual</h4>
                    </div>
                    <span style="background:#1A1A1B; color:white; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">4 Especializaciones</span>
                </div>
                <div style="display:grid; gap:8px;">

            <div onclick="window.showProgInfoModal('esp_bi_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #EA580C; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-brain" style="color:#EA580C; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Inteligencia de Negocios y Analítica de Datos Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>118755</strong> · 2 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#EA580C; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('esp_innovacion_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #EA580C; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-laptop-code" style="color:#EA580C; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Innovación Educativa en Entornos Virtuales de Aprendizaje Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>Res. 011264</strong> · 2 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#EA580C; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('esp_proyectos_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #EA580C; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-project-diagram" style="color:#EA580C; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Gerencia de Proyectos Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>118858</strong> · 2 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#EA580C; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            

            <div onclick="window.showProgInfoModal('esp_sst_virtual')" style="background:#FAFAFA; border:1px solid #E5E7EB; border-left:4px solid #EA580C; border-radius:8px; padding:10px 12px; cursor:pointer; display:flex; align-items:center; justify-content:space-between; gap:10px; transition:all 0.2s; box-shadow:0 1px 3px rgba(0,0,0,0.02);" onmouseover="this.style.background='#FFF7ED'; this.style.borderColor='#F39200'; this.style.transform='translateX(4px)';" onmouseout="this.style.background='#FAFAFA'; this.style.borderColor='#E5E7EB'; this.style.transform='';">
                <div style="display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-shield-virus" style="color:#EA580C; font-size:1rem; width:18px; text-align:center;"></i>
                    <div>
                        <div style="font-weight:700; color:#1A1A1B; font-size:0.83rem; line-height:1.2;">
                            Especialización en Gestión de la Seguridad y Salud en el Trabajo Virtual
                        </div>
                        <div style="font-size:0.7rem; color:#6B6B6B; margin-top:2px;">
                            SNIES: <strong>118070</strong> · 2 semestres
                        </div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <span style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1A1A1B; font-size:0.68rem; font-weight:700; padding:3px 8px; border-radius:4px; white-space:nowrap;">
                        Ver Ficha <i class="fas fa-eye ml-1" style="color:#EA580C; font-size:0.65rem;"></i>
                    </span>
                </div>
            </div>
            
                </div>
            </div>
        </div>
        
    </div>

    <!-- Nota de Calidad Institucional -->
    <div style="background:#FFF7ED; border:1px solid #FED7AA; border-left:4px solid #F39200; border-radius:8px; padding:14px 18px;">
        <div style="display:flex; align-items:center; gap:12px;">
            <i class="fas fa-info-circle" style="color:#D97F00; font-size:1.2rem;"></i>
            <div style="font-size:0.82rem; color:#7C2D12; line-height:1.45;">
                <strong>Aseguramiento de la Calidad y Registro Único:</strong> Todos los 17 programas institucionales cuentan con Registro Calificado vigente otorgado por el MEN. Para <strong>Administración de Empresas</strong>, la institución defiende la Renovación y Modificación hacia <strong>Registro Único (Presencial y Virtual)</strong> con una estructura curricular consolidada de <strong>8 semestres y 144 créditos académicos</strong>.
            </div>
        </div>
    </div>
</div>

<!-- ==================== MODAL SINTÉTICO DE PROGRAMA ACADÉMICO ==================== -->
<div id="instProgModal" style="display:none; position:fixed; inset:0; background:rgba(26,26,27,0.75); z-index:99999; backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:20px;">
    <div style="background:white; border-radius:14px; max-width:560px; width:100%; box-shadow:0 20px 50px rgba(0,0,0,0.3); border:2px solid #E5E7EB; overflow:hidden; animation:modalFadeIn 0.25s ease-out;">
        <!-- Cabecera del Modal -->
        <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:white; padding:18px 22px; display:flex; justify-content:space-between; align-items:center; border-bottom:3px solid #F39200;">
            <div style="display:flex; align-items:center; gap:10px;">
                <div id="modalProgIconWrap" style="width:36px; height:36px; border-radius:50%; background:rgba(243,146,0,0.2); border:1px solid #F39200; display:flex; align-items:center; justify-content:center;">
                    <i id="modalProgIcon" class="fas fa-graduation-cap" style="color:#F39200;"></i>
                </div>
                <div>
                    <span id="modalProgCat" style="font-size:0.68rem; font-weight:800; color:#F39200; text-transform:uppercase; letter-spacing:0.5px;">PREGRADO PRESENCIAL</span>
                    <h3 id="modalProgTitle" style="font-size:1.15rem; font-weight:800; margin:2px 0 0; color:white; font-family:'Montserrat'; line-height:1.25;">Administración de Empresas</h3>
                </div>
            </div>
            <button onclick="window.closeProgInfoModal()" style="background:transparent; border:none; color:#D1D1D1; font-size:1.3rem; cursor:pointer; padding:4px 8px; border-radius:4px; line-height:1;" onmouseover="this.style.color='#F39200'" onmouseout="this.style.color='#D1D1D1'">&times;</button>
        </div>

        <!-- Cuerpo del Modal: EXCLUSIVAMENTE Características Sintéticas -->
        <div style="padding:22px;">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
                <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px; padding:10px 14px;">
                    <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Nivel Académico</div>
                    <div id="modalProgNivel" style="font-size:0.92rem; font-weight:800; color:#1A1A1B; margin-top:3px;">Profesional Universitario</div>
                </div>
                <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px; padding:10px 14px;">
                    <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Modalidad</div>
                    <div id="modalProgModalidad" style="font-size:0.92rem; font-weight:800; color:#F39200; margin-top:3px;">Presencial (Bucaramanga)</div>
                </div>
                <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px; padding:10px 14px;">
                    <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Duración (Semestres)</div>
                    <div id="modalProgDuracion" style="font-size:0.92rem; font-weight:800; color:#1A1A1B; margin-top:3px;">9 semestres</div>
                </div>
                <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px; padding:10px 14px;">
                    <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Créditos Académicos</div>
                    <div id="modalProgCreditos" style="font-size:0.92rem; font-weight:800; color:#D97F00; margin-top:3px;">158 créditos</div>
                </div>
            </div>

            <!-- Código SNIES y Norma -->
            <div style="background:#F9FAFB; border:1px solid #E5E7EB; border-radius:8px; padding:12px 14px; margin-bottom:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                    <div>
                        <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Código Oficial SNIES</div>
                        <div id="modalProgSnies" style="font-size:1.15rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat'; letter-spacing:0.5px;">108445</div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:0.7rem; font-weight:700; color:#6B6B6B; text-transform:uppercase;">Base Normativa MEN</div>
                        <div id="modalProgNorma" style="font-size:0.8rem; font-weight:700; color:#4B5563;">Resolución MEN / Acuerdo CS</div>
                    </div>
                </div>
            </div>

            <!-- Destacado opcional (para Administración de Empresas) -->
            <div id="modalProgDestacadoWrap" style="display:none; background:#FFFBEB; border:1px solid #FDE68A; border-radius:8px; padding:10px 14px; margin-bottom:16px; font-size:0.78rem; color:#92400E; font-weight:700;">
                <i class="fas fa-certificate mr-1 text-amber-600"></i><span id="modalProgDestacado"></span>
            </div>

            <!-- Botones de Acción -->
            <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:10px;">
                <button onclick="window.closeProgInfoModal()" style="background:#E5E7EB; color:#1A1A1B; border:none; padding:8px 16px; border-radius:6px; font-size:0.82rem; font-weight:700; cursor:pointer; transition:background 0.2s;" onmouseover="this.style.background='#D1D1D1'" onmouseout="this.style.background='#E5E7EB'">
                    Cerrar
                </button>
                <a id="modalProgEnlace" href="#" target="_blank" rel="noopener noreferrer" style="background:#1A1A1B; color:#F39200; border:1px solid #F39200; padding:8px 16px; border-radius:6px; font-size:0.82rem; font-weight:800; text-decoration:none; display:inline-flex; align-items:center; gap:6px; transition:all 0.2s;" onmouseover="this.style.background='#F39200'; this.style.color='#1A1A1B'" onmouseout="this.style.background='#1A1A1B'; this.style.color='#F39200'">
                    Ver en Portal Institucional <i class="fas fa-external-link-alt" style="font-size:0.7rem;"></i>
                </a>
            </div>
        </div>
    </div>
</div>




<!-- ==================== TAB: ESTUDIANTES ==================== -->
<div id="instTab_estudiantes" class="inst-tab-content" style="display:none;">
    <!-- Banner con imagen de estudiantes -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; height:200px;">
        <img src="assets/inst_slides/inst_slide_7_img_0.png" alt="Estudiantes" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.4);">
        <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; flex-direction:column; color:white; text-align:center; padding:20px;">
            <h3 style="font-size:2rem; font-weight:800; margin-bottom:5px; font-family:'Montserrat';">Nuestros Estudiantes</h3>
            <p style="font-size:1.1rem; color:#e2e8f0;">Comunidad estudiantil de la Tecnológica del Oriente</p>
        </div>
    </div>

    <!-- Estadísticas de estudiantes -->
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:15px; margin-bottom:25px;">
        <div style="background:linear-gradient(135deg, #C8102E, #e53e3e); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-user-graduate" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">17</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Programas Activos</div>
        </div>
        <div style="background:linear-gradient(135deg, #1A1A1B, #2D2D2E); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-laptop-code" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">70%</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Modalidad Virtual (30% Pres.)</div>
        </div>
        <div style="background:linear-gradient(135deg, #16a34a, #22c55e); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-map-marker-alt" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">3</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Sedes Físicas</div>
        </div>
        <div style="background:linear-gradient(135deg, #7c3aed, #8b5cf6); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-globe-americas" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">Nacional</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Cobertura</div>
        </div>
    </div>

    <!-- Gráficos de caracterización -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.1rem; margin-bottom:15px;"><i class="fas fa-chart-pie mr-2" style="color:#C8102E;"></i>Distribución por Modalidad</h4>
            <canvas id="instEstModalidadChart"></canvas>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.1rem; margin-bottom:15px;"><i class="fas fa-chart-bar mr-2" style="color:#1A1A1B;"></i>Matrícula por Nivel</h4>
            <canvas id="instEstNivelChart"></canvas>
        </div>
    </div>

    <!-- Características -->
    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px; margin-top:20px;">
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:18px; text-align:center;">
            <i class="fas fa-users" style="font-size:2rem; color:#1A1A1B; margin-bottom:8px;"></i>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:0.95rem; margin-bottom:5px;">Perfil Diverso</h4>
            <p style="color:#6b7280; font-size:0.82rem; line-height:1.5;">Estudiantes de diferentes departamentos, estratos socioeconómicos y edades.</p>
        </div>
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:18px; text-align:center;">
            <i class="fas fa-clock" style="font-size:2rem; color:#C8102E; margin-bottom:8px;"></i>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:0.95rem; margin-bottom:5px;">Horarios Flexibles</h4>
            <p style="color:#6b7280; font-size:0.82rem; line-height:1.5;">Jornada mañana, nocturna y virtual para trabajadores y profesionales activos.</p>
        </div>
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:18px; text-align:center;">
            <i class="fas fa-hand-holding-heart" style="font-size:2rem; color:#16a34a; margin-bottom:8px;"></i>
            <h4 style="color:#1A1A1B; font-weight:700; font-size:0.95rem; margin-bottom:5px;">Bienestar Integral</h4>
            <p style="color:#6b7280; font-size:0.82rem; line-height:1.5;">Estrategias de permanencia, acompañamiento psicosocial y actividades de bienestar.</p>
        </div>
    </div>
</div>

<!-- ==================== TAB: INFRAESTRUCTURA ==================== -->
<div id="instTab_infra" class="inst-tab-content" style="display:none;">
    <!-- Banner Hero de Infraestructura -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; box-shadow:0 8px 30px rgba(26, 26, 27,0.15);">
        <img src="assets/sedes_institucionales.png" alt="Sedes de la Tecnológica del Oriente" style="width:100%; display:block;">
        <div style="position:absolute; bottom:0; left:0; right:0; background:linear-gradient(to top, rgba(26, 26, 27,0.92) 0%, rgba(26, 26, 27,0.5) 60%, transparent 100%); padding:25px 25px 20px;">
            <h3 style="color:white; font-size:1.6rem; font-weight:800; margin:0 0 5px; font-family:'Montserrat',sans-serif; text-shadow:0 2px 8px rgba(0,0,0,0.3);"><i class="fas fa-building mr-2" style="color:#fbbf24;"></i>Infraestructura Física</h3>
            <p style="color:#cbd5e1; margin:0; font-size:0.9rem;">3 sedes estratégicamente ubicadas en el corazón de Bucaramanga · Más de 3.071 m² de área construida</p>
        </div>
    </div>

    <!-- Tarjetas interactivas de Sedes -->
    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:18px; margin-bottom:25px;">
        <!-- SEDE A -->
        <div style="background:white; border-radius:14px; overflow:hidden; border:2px solid #e5e7eb; transition:all 0.35s cubic-bezier(.4,0,.2,1); cursor:pointer; position:relative;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 12px 35px rgba(200,16,46,0.2)'; this.style.borderColor='#C8102E';" onmouseout="this.style.transform=''; this.style.boxShadow=''; this.style.borderColor='#e5e7eb';">
            <div style="background:linear-gradient(135deg, #C8102E, #991b1b); color:white; padding:16px 18px; text-align:center;">
                <div style="font-size:1.6rem; font-weight:800; font-family:'Montserrat';">SEDE A</div>
                <div style="font-size:0.78rem; color:rgba(255,255,255,0.8); margin-top:2px;">📍 Calle 41 # 10-30</div>
            </div>
            <div style="padding:18px;">
                <div style="text-align:center; margin-bottom:14px;">
                    <div style="font-size:2.2rem; font-weight:800; color:#C8102E; font-family:'Montserrat';">1.140</div>
                    <div style="font-size:0.72rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1px;">Metros Cuadrados</div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.78rem;">
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-door-open mr-1" style="font-size:0.65rem;"></i>11 Aulas</div>
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-flask mr-1" style="font-size:0.65rem;"></i>1 Laboratorio</div>
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-laptop mr-1" style="font-size:0.65rem;"></i>1 Sala Inf.</div>
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-briefcase mr-1" style="font-size:0.65rem;"></i>24 Oficinas</div>
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-book mr-1" style="font-size:0.65rem;"></i>1 Biblioteca</div>
                    <div style="background:#fef2f2; padding:6px 8px; border-radius:6px; color:#991b1b; font-weight:600;"><i class="fas fa-restroom mr-1" style="font-size:0.65rem;"></i>14 Bat. Baño</div>
                </div>
            </div>
        </div>
        <!-- SEDE B -->
        <div style="background:white; border-radius:14px; overflow:hidden; border:2px solid #e5e7eb; transition:all 0.35s cubic-bezier(.4,0,.2,1); cursor:pointer; position:relative;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 12px 35px rgba(26, 26, 27,0.2)'; this.style.borderColor='#1A1A1B';" onmouseout="this.style.transform=''; this.style.boxShadow=''; this.style.borderColor='#e5e7eb';">
            <div style="background:linear-gradient(135deg, #1A1A1B, #2D2D2E); color:white; padding:16px 18px; text-align:center;">
                <div style="font-size:1.6rem; font-weight:800; font-family:'Montserrat';">SEDE B</div>
                <div style="font-size:0.78rem; color:rgba(255,255,255,0.8); margin-top:2px;">📍 Cra. 10 No. 35-40</div>
            </div>
            <div style="padding:18px;">
                <div style="text-align:center; margin-bottom:14px;">
                    <div style="font-size:2.2rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">1.527</div>
                    <div style="font-size:0.72rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1px;">Metros Cuadrados</div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.78rem;">
                    <div style="background:#FFF7ED; padding:6px 8px; border-radius:6px; color:#3A3A3B; font-weight:600;"><i class="fas fa-door-open mr-1" style="font-size:0.65rem;"></i>6 Aulas</div>
                    <div style="background:#FFF7ED; padding:6px 8px; border-radius:6px; color:#3A3A3B; font-weight:600;"><i class="fas fa-briefcase mr-1" style="font-size:0.65rem;"></i>1 Oficina</div>
                    <div style="background:#FFF7ED; padding:6px 8px; border-radius:6px; color:#3A3A3B; font-weight:600;"><i class="fas fa-theater-masks mr-1" style="font-size:0.65rem;"></i>1 Auditorio</div>
                    <div style="background:#FFF7ED; padding:6px 8px; border-radius:6px; color:#3A3A3B; font-weight:600;"><i class="fas fa-restroom mr-1" style="font-size:0.65rem;"></i>2 Bat. Baño</div>
                </div>
            </div>
        </div>
        <!-- SEDE C -->
        <div style="background:white; border-radius:14px; overflow:hidden; border:2px solid #e5e7eb; transition:all 0.35s cubic-bezier(.4,0,.2,1); cursor:pointer; position:relative;" onmouseover="this.style.transform='translateY(-8px)'; this.style.boxShadow='0 12px 35px rgba(217,119,6,0.2)'; this.style.borderColor='#d97706';" onmouseout="this.style.transform=''; this.style.boxShadow=''; this.style.borderColor='#e5e7eb';">
            <div style="background:linear-gradient(135deg, #d97706, #b45309); color:white; padding:16px 18px; text-align:center;">
                <div style="font-size:1.6rem; font-weight:800; font-family:'Montserrat';">SEDE C</div>
                <div style="font-size:0.78rem; color:rgba(255,255,255,0.8); margin-top:2px;">📍 Cra 10 # 41-73</div>
            </div>
            <div style="padding:18px;">
                <div style="text-align:center; margin-bottom:14px;">
                    <div style="font-size:2.2rem; font-weight:800; color:#d97706; font-family:'Montserrat';">404</div>
                    <div style="font-size:0.72rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:1px;">Metros Cuadrados</div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; font-size:0.78rem;">
                    <div style="background:#fef3c7; padding:6px 8px; border-radius:6px; color:#92400e; font-weight:600;"><i class="fas fa-door-open mr-1" style="font-size:0.65rem;"></i>8 Aulas</div>
                    <div style="background:#fef3c7; padding:6px 8px; border-radius:6px; color:#92400e; font-weight:600;"><i class="fas fa-briefcase mr-1" style="font-size:0.65rem;"></i>2 Oficinas</div>
                    <div style="background:#fef3c7; padding:6px 8px; border-radius:6px; color:#92400e; font-weight:600;"><i class="fas fa-restroom mr-1" style="font-size:0.65rem;"></i>4 Bat. Baño</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Resumen de Recursos Totales (Ajustado: Aulas 11+6+8=25, Labs 1, Salas Inf 1, Oficinas 24+1+2=27, 3.071 m²) -->
    <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); border-radius:14px; padding:22px 25px; margin-bottom:25px; display:flex; justify-content:space-around; flex-wrap:wrap; gap:12px;">
        <div style="text-align:center; min-width:100px;"><div style="font-size:1.8rem; font-weight:800; color:#fbbf24; font-family:'Montserrat';">25</div><div style="font-size:0.72rem; color:#94a3b8; font-weight:600; text-transform:uppercase;">Aulas de Clase</div></div>
        <div style="width:1px; background:rgba(255,255,255,0.15);"></div>
        <div style="text-align:center; min-width:100px;"><div style="font-size:1.8rem; font-weight:800; color:#fbbf24; font-family:'Montserrat';">1</div><div style="font-size:0.72rem; color:#94a3b8; font-weight:600; text-transform:uppercase;">Laboratorio</div></div>
        <div style="width:1px; background:rgba(255,255,255,0.15);"></div>
        <div style="text-align:center; min-width:100px;"><div style="font-size:1.8rem; font-weight:800; color:#fbbf24; font-family:'Montserrat';">1</div><div style="font-size:0.72rem; color:#94a3b8; font-weight:600; text-transform:uppercase;">Sala Informática</div></div>
        <div style="width:1px; background:rgba(255,255,255,0.15);"></div>
        <div style="text-align:center; min-width:100px;"><div style="font-size:1.8rem; font-weight:800; color:#fbbf24; font-family:'Montserrat';">27</div><div style="font-size:0.72rem; color:#94a3b8; font-weight:600; text-transform:uppercase;">Oficinas Admin.</div></div>
        <div style="width:1px; background:rgba(255,255,255,0.15);"></div>
        <div style="text-align:center; min-width:100px;"><div style="font-size:1.8rem; font-weight:800; color:#fbbf24; font-family:'Montserrat';">3.071</div><div style="font-size:0.72rem; color:#94a3b8; font-weight:600; text-transform:uppercase;">m² Totales</div></div>
    </div>

    <!-- Sedes recreativas -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; overflow:hidden;">
        <div style="background:linear-gradient(135deg, #16a34a, #15803d); color:white; padding:15px 20px;"><h4 style="margin:0; font-weight:700; font-size:1.15rem;"><i class="fas fa-tree mr-2"></i>Sedes Recreativas y Deportivas</h4></div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0;">
            <div style="padding:0;"><img src="assets/inst_slides/inst_slide_18_img_1.png" alt="Instalaciones deportivas" style="width:100%; height:200px; object-fit:cover;"></div>
            <div style="padding:0;"><img src="assets/inst_slides/inst_slide_18_img_2.jpg" alt="Cajasan Campo Alegre" style="width:100%; height:200px; object-fit:cover;"></div>
        </div>
        <div style="padding:15px; display:flex; gap:15px;">
            <div style="flex:1; background:#f0fdf4; padding:12px; border-radius:8px; border-left:3px solid #16a34a; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''"><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;"><i class="fas fa-futbol mr-1" style="color:#16a34a;"></i>Recrear la Victoria</div><div style="font-size:0.8rem; color:#6b7280;">Canchas, piscinas y zonas verdes</div></div>
            <div style="flex:1; background:#f0fdf4; padding:12px; border-radius:8px; border-left:3px solid #16a34a; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''"><div style="font-weight:700; color:#1A1A1B; font-size:0.9rem;"><i class="fas fa-swimming-pool mr-1" style="color:#16a34a;"></i>Cajasan Campo Alegre</div><div style="font-size:0.8rem; color:#6b7280;">Bienestar institucional</div></div>
        </div>
    </div>
</div>

<!-- ==================== TAB: RETOS ==================== -->
<div id="instTab_retos" class="inst-tab-content" style="display:none;">
    <!-- Imagen de retos del PPTX -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; margin-bottom:25px; text-align:center; display:flex; justify-content:center; align-items:center;">
        <img src="assets/inst_slides/inst_slide_19_img_1.png" alt="Retos Estratégicos" style="max-width:450px; width:100%; border-radius:10px; display:block; margin:0 auto;">
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:25px;">
        <!-- Retos 2025 -->
        <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:white; border-radius:12px; padding:25px;">
            <h4 style="font-weight:700; font-size:1.25rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:10px;"><i class="fas fa-flag-checkered mr-2"></i>Retos 2025</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #fbbf24; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">
                    <div style="font-weight:700; font-size:0.88rem; color:#fbbf24;">🌎 Presencia Nacional</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">11 programas nuevos</div>
                </div>
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #10b981;">
                    <div style="font-weight:700; font-size:0.88rem; color:#10b981;">🔬 Investigación</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">Grupo categoría B</div>
                </div>
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #F39200;">
                    <div style="font-weight:700; font-size:0.88rem; color:#F39200;">💙 Bienestar</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">Deserción 9%–11%</div>
                </div>
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #C8102E;">
                    <div style="font-weight:700; font-size:0.88rem; color:#f87171;">💰 Finanzas</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">EBITDA ≥ 15%</div>
                </div>
            </div>
        </div>

        <!-- Retos 2026 -->
        <div style="background:white; border:2px solid #C8102E; border-radius:12px; padding:25px;">
            <h4 style="color:#1A1A1B; font-weight:700; font-size:1.25rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:10px;"><i class="fas fa-chart-line mr-2" style="color:#C8102E;"></i>Retos 2026</h4>
            <div style="display:grid; gap:10px;">
                <div style="background:#f9fafb; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; transition:background 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="this.style.background='#f9fafb'">
                    <i class="fas fa-medal" style="color:#d97706; font-size:1.1rem;"></i>
                    <div><div style="font-weight:700; color:#1A1A1B; font-size:0.88rem;">Acreditación: 2 programas</div><div style="font-size:0.78rem; color:#6b7280;">SST y LEI</div></div>
                </div>
                <div style="background:#f9fafb; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; transition:background 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="this.style.background='#f9fafb'">
                    <i class="fas fa-shield-alt" style="color:#F39200; font-size:1.1rem;"></i>
                    <div><div style="font-weight:700; color:#1A1A1B; font-size:0.88rem;">SIAC</div><div style="font-size:0.78rem; color:#6b7280;">Mejoramiento &gt; 80%</div></div>
                </div>
                <div style="background:#f9fafb; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; transition:background 0.2s;" onmouseover="this.style.background='#FFF7ED'" onmouseout="this.style.background='#f9fafb'">
                    <i class="fas fa-server" style="color:#7c3aed; font-size:1.1rem;"></i>
                    <div><div style="font-weight:700; color:#1A1A1B; font-size:0.88rem;">Infraestructura</div><div style="font-size:0.78rem; color:#6b7280;">Ambientes físicos y virtuales</div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Marco Estratégico 2026-2030 (7 Pilares Estratégicos Oficiales) -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; overflow:hidden; box-shadow:0 6px 20px rgba(0,0,0,0.04);">
        <div style="background:linear-gradient(135deg, #1A1A1B, #2D2D2E, #C8102E); color:white; padding:18px 24px; text-align:center;">
            <h4 style="font-weight:800; font-size:1.35rem; margin:0;"><i class="fas fa-compass mr-2" style="color:#fbbf24;"></i>Marco Estratégico 2026–2030 · 7 Pilares</h4>
            <p style="margin:4px 0 0; font-size:0.85rem; color:#cbd5e1;">Líneas rectoras institucionales para el aseguramiento de la alta calidad y la consolidación educativa</p>
        </div>
        <div style="padding:24px;">
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(270px, 1fr)); gap:18px;">
                
                <!-- PILAR I -->
                <div style="background:#F7FEE7; border:1px solid #D9F99D; border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
                    <div>
                        <div style="font-size:0.75rem; font-weight:800; color:#4D7C0F; text-transform:uppercase; letter-spacing:0.5px;">PILAR I</div>
                        <h5 style="font-size:1.05rem; font-weight:800; color:#1A1A1B; margin:6px 0 8px; line-height:1.3;">Excelencia académica y acreditación CNA</h5>
                        <p style="font-size:0.85rem; color:#4B5563; line-height:1.5; margin:0 0 14px;">Operar los programas nuevos y consolidar la autoevaluación permanente orientada a la acreditación de alta calidad.</p>
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">
                        <span style="background:#DCFCE7; color:#166534; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">CNA</span>
                        <span style="background:#DCFCE7; color:#166534; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">PEP-RA</span>
                        <span style="background:#DCFCE7; color:#166534; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Registros</span>
                    </div>
                </div>

                <!-- PILAR II -->
                <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
                    <div>
                        <div style="font-size:0.75rem; font-weight:800; color:#1D4ED8; text-transform:uppercase; letter-spacing:0.5px;">PILAR II</div>
                        <h5 style="font-size:1.05rem; font-weight:800; color:#1A1A1B; margin:6px 0 8px; line-height:1.3;">Expansión digital y cobertura nacional</h5>
                        <p style="font-size:0.85rem; color:#4B5563; line-height:1.5; margin:0 0 14px;">Consolidar la plataforma virtual TO, expandir el acceso educativo en las regiones y dinamizar la matrícula virtual.</p>
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">
                        <span style="background:#DBEAFE; color:#1E40AF; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">LMS</span>
                        <span style="background:#DBEAFE; color:#1E40AF; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Virtual</span>
                        <span style="background:#DBEAFE; color:#1E40AF; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Mercadeo</span>
                    </div>
                </div>

                <!-- PILAR III -->
                <div style="background:#F5F3FF; border:1px solid #DDD6FE; border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
                    <div>
                        <div style="font-size:0.75rem; font-weight:800; color:#6D28D9; text-transform:uppercase; letter-spacing:0.5px;">PILAR III</div>
                        <h5 style="font-size:1.05rem; font-weight:800; color:#1A1A1B; margin:6px 0 8px; line-height:1.3;">Retención y bienestar estudiantil</h5>
                        <p style="font-size:0.85rem; color:#4B5563; line-height:1.5; margin:0 0 14px;">Consolidar el modelo integral de permanencia y bienestar estudiantil con analítica predictiva y acompañamiento psicosocial.</p>
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">
                        <span style="background:#EDE9FE; color:#5B21B6; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Permanencia</span>
                        <span style="background:#EDE9FE; color:#5B21B6; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Analítica</span>
                        <span style="background:#EDE9FE; color:#5B21B6; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Bienestar</span>
                    </div>
                </div>

                <!-- PILAR IV -->
                <div style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
                    <div>
                        <div style="font-size:0.75rem; font-weight:800; color:#B45309; text-transform:uppercase; letter-spacing:0.5px;">PILAR IV</div>
                        <h5 style="font-size:1.05rem; font-weight:800; color:#1A1A1B; margin:6px 0 8px; line-height:1.3;">Investigación reconocida y de valor</h5>
                        <p style="font-size:0.85rem; color:#4B5563; line-height:1.5; margin:0 0 14px;">Elevar el grupo de investigación en categorización MinCiencias y potenciar la transferencia aplicada I+D+i al sector productivo.</p>
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">
                        <span style="background:#FEF3C7; color:#92400E; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">MinCiencias</span>
                        <span style="background:#FEF3C7; color:#92400E; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Consultoría</span>
                        <span style="background:#FEF3C7; color:#92400E; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Cat. B</span>
                    </div>
                </div>

                <!-- PILAR V -->
                <div style="background:#F0FDFA; border:1px solid #99F6E4; border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
                    <div>
                        <div style="font-size:0.75rem; font-weight:800; color:#0F766E; text-transform:uppercase; letter-spacing:0.5px;">PILAR V</div>
                        <h5 style="font-size:1.05rem; font-weight:800; color:#1A1A1B; margin:6px 0 8px; line-height:1.3;">Gobernanza y transformación digital</h5>
                        <p style="font-size:0.85rem; color:#4B5563; line-height:1.5; margin:0 0 14px;">Implementar soluciones ERP integradas, certificar bajo ISO 9001 y automatizar procesos académicos y administrativos.</p>
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">
                        <span style="background:#CCFBF1; color:#115E59; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">ERP</span>
                        <span style="background:#CCFBF1; color:#115E59; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">ISO 9001</span>
                        <span style="background:#CCFBF1; color:#115E59; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Automatización</span>
                    </div>
                </div>

                <!-- PILAR VI -->
                <div style="background:#FFF7ED; border:1px solid #FFEDD5; border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
                    <div>
                        <div style="font-size:0.75rem; font-weight:800; color:#C2410C; text-transform:uppercase; letter-spacing:0.5px;">PILAR VI</div>
                        <h5 style="font-size:1.05rem; font-weight:800; color:#1A1A1B; margin:6px 0 8px; line-height:1.3;">Sostenibilidad financiera diversificada</h5>
                        <p style="font-size:0.85rem; color:#4B5563; line-height:1.5; margin:0 0 14px;">Diversificar ingresos mediante educación continua, licitaciones públicas, convenios de consultoría y alianzas estratégicas.</p>
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">
                        <span style="background:#FFEDD5; color:#9A3412; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">OPEX</span>
                        <span style="background:#FFEDD5; color:#9A3412; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Licitaciones</span>
                        <span style="background:#FFEDD5; color:#9A3412; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">Ed. Continua</span>
                    </div>
                </div>

                <!-- PILAR VII (Certificaciones Internacionales) -->
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between; transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform=''">
                    <div>
                        <div style="font-size:0.75rem; font-weight:800; color:#475569; text-transform:uppercase; letter-spacing:0.5px;">PILAR VII</div>
                        <h5 style="font-size:1.05rem; font-weight:800; color:#1A1A1B; margin:6px 0 8px; line-height:1.3;">Certificaciones Internacionales</h5>
                        <p style="font-size:0.85rem; color:#4B5563; line-height:1.5; margin:0 0 14px;">Obtener certificaciones y membresías internacionales que consoliden la visibilidad y reputación global de la institución.</p>
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">
                        <span style="background:#F1F5F9; color:#334155; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">ACBSP</span>
                        <span style="background:#F1F5F9; color:#334155; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">QS Stars</span>
                        <span style="background:#F1F5F9; color:#334155; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:12px;">ABET</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
`;

// =====================================================
// LÓGICA DE PESTAÑAS
// =====================================================
window.switchInstTab = function(tabId) {
    document.querySelectorAll('.inst-tab-content').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.inst-tab-btn').forEach(function(btn) {
        btn.style.background = '#e5e7eb';
        btn.style.color = '#374151';
    });
    var tab = document.getElementById('instTab_' + tabId);
    if (tab) tab.style.display = 'block';
    var buttons = document.querySelectorAll('.inst-tab-btn');
    var tabNames = ['pei','evolucion','convenios','oferta','estudiantes','infra','retos'];
    var idx = tabNames.indexOf(tabId);
    if (idx >= 0 && buttons[idx]) {
        buttons[idx].style.background = '#1A1A1B';
        buttons[idx].style.color = 'white';
    }
    // Inicializar gráficos de la pestaña
    setTimeout(function() { window._initInstCharts(tabId); }, 200);
};

// =====================================================
// GRÁFICOS CHART.JS
// =====================================================
window._instCharts = {};

window._initInstCharts = function(tabId) {
    // Identidad - Oferta
    if (tabId === 'identidad') {
        var ctx = document.getElementById('instOfertaChart');
        if (ctx && !window._instCharts.oferta) {
            window._instCharts.oferta = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Pregrado Presencial (4)', 'Pregrado Virtual (6)', 'Posgrado Presencial (3)', 'Posgrado Virtual (4)'],
                    datasets: [{
                        data: [4, 6, 3, 4],
                        backgroundColor: ['#C8102E', '#1A1A1B', '#d97706', '#7c3aed'],
                        borderWidth: 3,
                        borderColor: '#fff'
                    }]
                },
                options: { responsive: true, cutout: '55%', plugins: { legend: { position: 'bottom', labels: { color: '#374151', font: { size: 12, weight: 'bold' }, padding: 15 } } } }
            });
        }
    }

    // PEI (Inicialización Rueda)
    if (tabId === 'pei') {
        setTimeout(function() {
            if (typeof window.showPeiAxisDetail === 'function') {
                window.showPeiAxisDetail('excelencia');
            }
        }, 100);
    }

    // Convenios
    if (tabId === 'convenios') {
        var ctx3 = document.getElementById('instConveniosChart');
        if (ctx3 && !window._instCharts.conv) {
            window._instCharts.conv = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ['Internacionales', 'Académicos', 'Sector Público y Privado'],
                    datasets: [{
                        label: 'Convenios',
                        data: [4, 25, 100],
                        backgroundColor: ['#1A1A1B', '#C8102E', '#F39200'],
                        borderRadius: 8,
                        barThickness: 30
                    }]
                },
                options: { responsive: true, indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, grid: { color: '#e5e7eb' }, ticks: { color: '#374151' } }, y: { grid: { display: false }, ticks: { color: '#374151', font: { size: 11, weight: 'bold' } } } } }
            });
        }
    }

    // Estudiantes
    if (tabId === 'estudiantes') {
        var ctx4 = document.getElementById('instEstModalidadChart');
        if (ctx4 && !window._instCharts.estMod) {
            window._instCharts.estMod = new Chart(ctx4, {
                type: 'doughnut',
                data: {
                    labels: ['Virtual (70%)', 'Presencial (30%)'],
                    datasets: [{
                        data: [70, 30],
                        backgroundColor: ['#1A1A1B', '#C8102E'],
                        borderWidth: 3, borderColor: '#fff'
                    }]
                },
                options: { responsive: true, cutout: '60%', plugins: { legend: { position: 'bottom', labels: { color: '#374151', font: { size: 12, weight: 'bold' } } } } }
            });
        }
        var ctx5 = document.getElementById('instEstNivelChart');
        if (ctx5 && !window._instCharts.estNiv) {
            window._instCharts.estNiv = new Chart(ctx5, {
                type: 'bar',
                data: {
                    labels: ['Técnico', 'Profesional', 'Especialización'],
                    datasets: [{
                        label: 'Estudiantes (%)',
                        data: [15, 60, 25],
                        backgroundColor: ['#d97706', '#1A1A1B', '#C8102E'],
                        borderRadius: 8,
                        barThickness: 35
                    }]
                },
                options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 70, grid: { color: '#e5e7eb' }, ticks: { color: '#374151', callback: function(v) { return v + '%'; } } }, x: { grid: { display: false }, ticks: { color: '#374151', font: { weight: 'bold' } } } } }
            });
        }
    }

    // Infraestructura - no charts needed, pure interactive HTML cards
};

window.showPeiAxisDetail = function(axisId, btnEl) {
    // Quitar clase activa y resetear estilos de todos los botones de ejes
    document.querySelectorAll('.pei-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = '#f8fafc';
        btn.style.boxShadow = 'none';
        btn.style.color = '#334155';
    });

    const axisData = {
        excelencia: {
            title: "Excelencia Académica",
            desc: "Compromiso institucional constante con la calidad educativa, procesos de autoevaluación, mejoramiento de mallas curriculares y cualificación de primer nivel para la planta docente.",
            color: "#4f46e5"
        },
        corporatividad: {
            title: "Corporatividad",
            desc: "Articulación institucional, identidad corporativa y sentido de pertenencia. Promueve el trabajo en equipo interdisciplinar alineado a metas colectivas y de responsabilidad social.",
            color: "#16a34a"
        },
        flexibilidad: {
            title: "Flexibilidad Curricular",
            desc: "Rutas de aprendizaje adaptables y personalizadas, opciones de doble titulación, homologación ágil y múltiples alternativas de trabajo de grado acordes con el perfil profesional.",
            color: "#ca8a04"
        },
        formacion: {
            title: "Formación Integral",
            desc: "Equilibrio formativo entre el ser, el saber y el hacer. Integramos competencias técnicas de ingeniería con un fuerte sentido ético, humanístico e integral de la persona.",
            color: "#ea580c"
        },
        desarrollo: {
            title: "Desarrollo Sostenible",
            desc: "Promoción de prácticas ambientales responsables, economía circular y uso eficiente de los recursos en la cadena de suministros para un desarrollo socialmente responsable.",
            color: "#dc2626"
        },
        coherencia: {
            title: "Coherencia y Coexistencia",
            desc: "Garantía de sintonía absoluta entre las intenciones del Proyecto Educativo Institucional (PEI), los planes de estudio prácticos y las demandas socioeconómicas externas.",
            color: "#7c3aed"
        },
        pertinencia: {
            title: "Pertinencia",
            desc: "Enfoque en la solución directa de problemas reales y urgentes del entorno, transfiriendo activamente los saberes de la ingeniería a las necesidades de la región y el país.",
            color: "#EA580C"
        },
        innovacion: {
            title: "Innovación",
            desc: "Fomento de una cultura emprendedora de base tecnológica, metodologías de enseñanza activa e incorporación de tendencias de vanguardia digital como la Inteligencia Artificial.",
            color: "#c084fc"
        }
    };

    const data = axisData[axisId];
    if (data) {
        const def = document.getElementById('peiAxisDetailDefault');
        const act = document.getElementById('peiAxisDetailActive');
        const tit = document.getElementById('peiAxisActiveTitle');
        const dsc = document.getElementById('peiAxisActiveDesc');
        const pnl = document.getElementById('peiAxisDetailPanel');
        
        if (def) def.style.display = 'none';
        if (act) act.style.display = 'block';
        if (tit) {
            tit.innerText = data.title;
            tit.style.color = data.color;
        }
        if (dsc) dsc.innerText = data.desc;
        if (pnl) pnl.style.borderLeftColor = data.color;

        if (btnEl) {
            btnEl.classList.add('active');
            btnEl.style.background = '#FFF7ED';
            btnEl.style.boxShadow = '0 0 0 1px ' + data.color + ' inset, 0 2px 8px rgba(0,0,0,0.05)';
            btnEl.style.color = '#1A1A1B';
        } else {
            // Highlight programmatically on init
            const btns = document.querySelectorAll('.pei-btn');
            btns.forEach(btn => {
                if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes("'" + axisId + "'")) {
                    btn.classList.add('active');
                    btn.style.background = '#FFF7ED';
                    btn.style.boxShadow = '0 0 0 1px ' + data.color + ' inset, 0 2px 8px rgba(0,0,0,0.05)';
                    btn.style.color = '#1A1A1B';
                }
            });
        }
    }
};

// =====================================================
// INICIALIZACIÓN
// =====================================================
window.instInit = function() {
    // Reset all chart refs
    window._instCharts = {};
    // Activar primera pestaña con gráficos
    window.switchInstTab('pei');
};


// =====================================================
// SELECTORES Y MODAL DE OFERTA ACADÉMICA (SINTÉTICO)
// =====================================================
window._programasDetalle = {"adm_presencial": {"id": "adm_presencial", "nombre": "Administración de Empresas (Presencial)", "nivel": "Profesional Universitario", "modalidad": "Presencial (Sede Bucaramanga)", "duracion": "9 semestres (Plan Vigente) / 8 semestres (Propuesto)", "creditos": "158 créditos (Plan Vigente) / 144 créditos (Propuesto RU)", "snies": "108445", "norma": "Resolución MEN 011375 de 2019 / Acuerdo CS 011 de 2024", "icono": "fa-briefcase", "color": "#F39200", "categoria": "Pregrado Presencial", "destacado": "⭐ Programa en proceso de Acreditación / Renovación hacia Registro Calificado Único (Presencial y Virtual) de 8 semestres y 144 créditos académicos.", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/administracion-de-empresas/"}, "lic_infantil_presencial": {"id": "lic_infantil_presencial", "nombre": "Licenciatura en Educación Infantil", "nivel": "Profesional Universitario", "modalidad": "Presencial (Sede Bucaramanga)", "duracion": "9 semestres", "creditos": "158 créditos académicos", "snies": "116357", "norma": "Resolución Registro Calificado MEN", "icono": "fa-child", "color": "#EA580C", "categoria": "Pregrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/licenciatura-en-educacion-infantil/"}, "sst_presencial": {"id": "sst_presencial", "nombre": "Seguridad y Salud en el Trabajo", "nivel": "Profesional Universitario", "modalidad": "Presencial (Sede Bucaramanga)", "duracion": "9 semestres", "creditos": "155 créditos académicos", "snies": "106177", "norma": "Resolución Registro Calificado MEN", "icono": "fa-shield-alt", "color": "#16A34A", "categoria": "Pregrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/seguridad-y-salud-en-el-trabajo/"}, "tecnica_sst": {"id": "tecnica_sst", "nombre": "Técnica Profesional en Higiene y Seguridad en el Trabajo", "nivel": "Técnico Profesional", "modalidad": "Presencial (Sede Bucaramanga)", "duracion": "4 semestres", "creditos": "64 créditos académicos", "snies": "103527", "norma": "Resolución Registro Calificado MEN", "icono": "fa-hard-hat", "color": "#D97706", "categoria": "Pregrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/tecnica-profesional-en-higiene-y-seguridad-en-el-trabajo/"}, "adm_virtual": {"id": "adm_virtual", "nombre": "Administración de Empresas Virtual", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "9 semestres (Plan Vigente) / 8 semestres (Propuesto)", "creditos": "158 créditos (Plan Vigente) / 144 créditos (Propuesto RU)", "snies": "115833", "norma": "Resolución Registro Calificado MEN / Acuerdo CS 011 de 2024", "icono": "fa-chart-line", "color": "#F39200", "categoria": "Pregrado Virtual", "destacado": "⭐ Integrado con la modalidad presencial bajo la figura de Registro Calificado Único (8 semestres / 144 créditos / 1:3 horas virtuales).", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/administracion-de-empresas-virtual/"}, "derecho_virtual": {"id": "derecho_virtual", "nombre": "Derecho Virtual", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "10 semestres", "creditos": "160 créditos académicos", "snies": "119385", "norma": "Resolución Registro Calificado MEN", "icono": "fa-balance-scale", "color": "#C8102E", "categoria": "Pregrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/derecho-virtual/"}, "software_virtual": {"id": "software_virtual", "nombre": "Ingeniería en Desarrollo de Software", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "8 semestres", "creditos": "144 créditos académicos", "snies": "118074", "norma": "Resolución Registro Calificado MEN", "icono": "fa-code", "color": "#7C3AED", "categoria": "Pregrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/ingenieria-de-software-virtual/"}, "lic_infantil_virtual": {"id": "lic_infantil_virtual", "nombre": "Licenciatura en Educación Infantil Virtual", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "9 semestres", "creditos": "158 créditos académicos", "snies": "115854", "norma": "Resolución Registro Calificado MEN", "icono": "fa-shapes", "color": "#EA580C", "categoria": "Pregrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/licenciatura-en-educacion-infantil-virtual/"}, "sst_virtual": {"id": "sst_virtual", "nombre": "Seguridad y Salud en el Trabajo Virtual", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "9 semestres", "creditos": "155 créditos académicos", "snies": "118713", "norma": "Resolución Registro Calificado MEN", "icono": "fa-user-shield", "color": "#16A34A", "categoria": "Pregrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/seguridad-y-salud-en-el-trabajo-virtual/"}, "ind_virtual": {"id": "ind_virtual", "nombre": "Ingeniería Industrial Virtual", "nivel": "Profesional Universitario", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "8 semestres", "creditos": "144 créditos académicos", "snies": "Registro Calificado MEN", "norma": "Resolución Registro Calificado MEN", "icono": "fa-industry", "color": "#D97706", "categoria": "Pregrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/ingenieria-industrial-virtual/"}, "esp_riesgo_presencial": {"id": "esp_riesgo_presencial", "nombre": "Especialización en Gerencia Integral del Riesgo, SST", "nivel": "Posgrado (Especialización)", "modalidad": "Presencial (Sábados)", "duracion": "3 cuatrimestres (1 año)", "creditos": "30 créditos académicos", "snies": "110536", "norma": "Resolución Registro Calificado MEN", "icono": "fa-notes-medical", "color": "#C8102E", "categoria": "Posgrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-gerencia-integral-del-riesgo-seguridad-y-salud-en-el-trabajo/"}, "esp_proyectos_presencial": {"id": "esp_proyectos_presencial", "nombre": "Especialización en Gerencia de Proyectos", "nivel": "Posgrado (Especialización)", "modalidad": "Presencial (Sábados)", "duracion": "2 semestres (1 año)", "creditos": "28 créditos académicos", "snies": "103745", "norma": "Resolución Registro Calificado MEN", "icono": "fa-tasks", "color": "#F39200", "categoria": "Posgrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-gerencia-de-proyectos/"}, "esp_pedagogia_presencial": {"id": "esp_pedagogia_presencial", "nombre": "Especialización en Pedagogía y Didácticas Específicas", "nivel": "Posgrado (Especialización)", "modalidad": "Presencial (Sábados)", "duracion": "4 trimestres (1 año)", "creditos": "35 créditos académicos", "snies": "101639", "norma": "Resolución Registro Calificado MEN", "icono": "fa-chalkboard-teacher", "color": "#EA580C", "categoria": "Posgrado Presencial", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-pedagogia-y-didacticas-especificas/"}, "esp_bi_virtual": {"id": "esp_bi_virtual", "nombre": "Especialización en Inteligencia de Negocios y Analítica de Datos Virtual", "nivel": "Posgrado (Especialización)", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "2 semestres", "creditos": "24 créditos académicos", "snies": "118755", "norma": "Resolución MEN N° 005278", "icono": "fa-brain", "color": "#7C3AED", "categoria": "Posgrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-inteligencia-de-negocios-y-analitica-de-datos/"}, "esp_innovacion_virtual": {"id": "esp_innovacion_virtual", "nombre": "Especialización en Innovación Educativa en Entornos Virtuales de Aprendizaje Virtual", "nivel": "Posgrado (Especialización)", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "2 semestres", "creditos": "24 créditos académicos", "snies": "Res. 011264", "norma": "Resolución MEN N° 011264", "icono": "fa-laptop-code", "color": "#F39200", "categoria": "Posgrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-innovacion-educativa-en-entornos-virtuales-de-aprendizaje-virtual/"}, "esp_proyectos_virtual": {"id": "esp_proyectos_virtual", "nombre": "Especialización en Gerencia de Proyectos Virtual", "nivel": "Posgrado (Especialización)", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "2 semestres", "creditos": "28 créditos académicos", "snies": "118858", "norma": "Resolución MEN N° 010313", "icono": "fa-project-diagram", "color": "#D97706", "categoria": "Posgrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-gerencia-de-proyectos-virtual/"}, "esp_sst_virtual": {"id": "esp_sst_virtual", "nombre": "Especialización en Gestión de la Seguridad y Salud en el Trabajo Virtual", "nivel": "Posgrado (Especialización)", "modalidad": "100% Virtual (Campus Digital TO)", "duracion": "2 semestres", "creditos": "24 créditos académicos", "snies": "118070", "norma": "Resolución Registro Calificado MEN", "icono": "fa-shield-virus", "color": "#16A34A", "categoria": "Posgrado Virtual", "destacado": "", "enlace": "https://tecnologicadeloriente.edu.co/oferta-academica/especializacion-en-gestion-de-la-seguridad-y-salud-en-el-trabajo/"}};

window.showProgInfoModal = function(progId) {
    var p = window._programasDetalle[progId];
    if (!p) return;
    
    // Ensure modal element exists
    var m = document.getElementById('instProgModal');
    if (!m) return;
    
    // Set synthetic fields requested by user
    var titleEl = document.getElementById('modalProgTitle');
    if (titleEl) titleEl.textContent = p.nombre;
    
    var catEl = document.getElementById('modalProgCat');
    if (catEl) catEl.textContent = p.categoria;
    
    var nivelEl = document.getElementById('modalProgNivel');
    if (nivelEl) nivelEl.textContent = p.nivel;
    
    var modEl = document.getElementById('modalProgModalidad');
    if (modEl) modEl.textContent = p.modalidad;
    
    var durEl = document.getElementById('modalProgDuracion');
    if (durEl) durEl.textContent = p.duracion;
    
    var credEl = document.getElementById('modalProgCreditos');
    if (credEl) credEl.textContent = p.creditos;
    
    var sniesEl = document.getElementById('modalProgSnies');
    if (sniesEl) sniesEl.textContent = p.snies;
    
    var normaEl = document.getElementById('modalProgNorma');
    if (normaEl) normaEl.textContent = p.norma;
    
    var linkEl = document.getElementById('modalProgEnlace');
    if (linkEl) linkEl.href = p.enlace;
    
    var iconEl = document.getElementById('modalProgIcon');
    if (iconEl) {
        iconEl.className = 'fas ' + p.icono;
        iconEl.style.color = p.color;
    }
    
    var wrapEl = document.getElementById('modalProgIconWrap');
    if (wrapEl) wrapEl.style.borderColor = p.color;
    
    var destWrap = document.getElementById('modalProgDestacadoWrap');
    var destEl = document.getElementById('modalProgDestacado');
    if (destWrap && destEl) {
        if (p.destacado) {
            destWrap.style.display = 'block';
            destEl.textContent = p.destacado;
        } else {
            destWrap.style.display = 'none';
        }
    }
    
    // Move modal to body if inside relative container to ensure absolute viewport center
    if (m.parentElement !== document.body) {
        document.body.appendChild(m);
    }
    
    m.style.display = 'flex';
};

window.closeProgInfoModal = function() {
    var m = document.getElementById('instProgModal');
    if (m) m.style.display = 'none';
};

// Global listeners for closing modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        window.closeProgInfoModal();
    }
});

document.addEventListener('click', function(e) {
    var m = document.getElementById('instProgModal');
    if (m && m.style.display === 'flex' && e.target === m) {
        window.closeProgInfoModal();
    }
});
