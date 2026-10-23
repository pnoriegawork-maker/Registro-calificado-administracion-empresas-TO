/* =========================================================
   BIENESTAR INSTITUCIONAL – MODELO INTEGRAL
   Corporación Escuela Tecnológica del Oriente (TO)
   Vigencia 2026 · Coordinación de Bienestar Institucional
   Coordinadora: Laura Juliana Suárez (Psicóloga Especialista)
   ========================================================= */

window.SECTIONS = window.SECTIONS || {};

window.SECTIONS['bienestar'] = `
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D3748 100%); color:#fff; border-left:6px solid #F39200; padding:22px 24px; border-radius:12px; margin-bottom:20px; box-shadow:0 8px 24px rgba(0,0,0,0.12);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div style="max-width:850px;">
            <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1.5px; color:#F39200; font-weight:800; margin-bottom:6px;">
                <i class="fas fa-heartbeat"></i> Estrategia Articulada para la Permanencia y Formación Integral
            </div>
            <h3 style="font-family:var(--font-heading); font-size:1.35rem; font-weight:800; color:#fff; margin:0 0 8px;">
                Modelo Integral de Bienestar Institucional (Vigencia 2026)
            </h3>
            <p style="color:#E2E8F0; font-size:0.88rem; line-height:1.6; margin:0;">
                Sistema de acompañamiento transversal bimodal (Presencial y Virtual) fundamentado en la caracterización estudiantil, la prevención de la deserción, el seguimiento continuo y la formación en cuatro dimensiones: Emocional, Física, Social y Académica. Coordinación liderada por <strong>Laura Juliana Suárez</strong> (Psicóloga Especialista).
            </p>
        </div>
        <div>
            <span style="background:rgba(243,146,0,0.18); border:1px solid #F39200; color:#F39200; padding:8px 16px; border-radius:20px; font-weight:800; font-size:0.82rem; display:inline-flex; align-items:center; gap:8px;">
                <i class="fas fa-file-pdf"></i> 15 Diapositivas Oficiales PPT
            </span>
        </div>
    </div>
</div>

<!-- =========================================================
     BARRA DE NAVEGACIÓN POR EJES TEMÁTICOS (PRIMER PLANO)
     ========================================================= -->
<div id="bienestar-ejes-bar" class="c2-subtabs-bar" style="margin-bottom:20px; display:flex; gap:8px; overflow-x:auto; padding-bottom:6px;">
    <button class="c2-subtab-btn active" onclick="switchBienestarEje(1, this)">
        <i class="fas fa-compass"></i> 1. Marco & Dimensiones
    </button>
    <button class="c2-subtab-btn" onclick="switchBienestarEje(2, this)">
        <i class="fas fa-route"></i> 2. Ruta de Permanencia
    </button>
    <button class="c2-subtab-btn" onclick="switchBienestarEje(3, this)">
        <i class="fas fa-clock"></i> 3. Horas & 5 Áreas
    </button>
    <button class="c2-subtab-btn" onclick="switchBienestarEje(4, this)">
        <i class="fas fa-users-cog"></i> 4. Presencial Mañana/Noche
    </button>
    <button class="c2-subtab-btn" onclick="switchBienestarEje(5, this)">
        <i class="fas fa-laptop-house"></i> 5. Ruta Virtual 3 Fases
    </button>
    <button class="c2-subtab-btn" onclick="switchBienestarEje(6, this)">
        <i class="fas fa-cogs"></i> 6. Modelo Sistémico
    </button>
    <button class="c2-subtab-btn" onclick="switchBienestarEje(7, this)">
        <i class="fas fa-camera"></i> 7. Galería de Evidencias
    </button>
</div>

<!-- =========================================================
     SELECTOR RÁPIDO DE DIAPOSITIVAS (PÍLDORAS 1 A 15)
     ========================================================= -->
<div id="bienestar-pills-bar" style="background:#F8FAFC; border:1px solid #E2E8F0; padding:12px 16px; border-radius:10px; margin-bottom:22px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
    <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:0.8rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; letter-spacing:0.5px;">
            <i class="fas fa-layer-group" style="color:#F39200;"></i> Diapositiva:
        </span>
        <div style="display:flex; gap:5px; flex-wrap:wrap;" id="bienestar-pills-container">
            <button class="c5-pill-btn active" id="bienestar-pill-1" onclick="goToBienestarSlide(1)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #F39200; background:#F39200; color:#fff; cursor:pointer;">1</button>
            <button class="c5-pill-btn" id="bienestar-pill-2" onclick="goToBienestarSlide(2)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">2</button>
            <button class="c5-pill-btn" id="bienestar-pill-3" onclick="goToBienestarSlide(3)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">3</button>
            <button class="c5-pill-btn" id="bienestar-pill-4" onclick="goToBienestarSlide(4)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">4</button>
            <button class="c5-pill-btn" id="bienestar-pill-5" onclick="goToBienestarSlide(5)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">5</button>
            <button class="c5-pill-btn" id="bienestar-pill-6" onclick="goToBienestarSlide(6)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">6</button>
            <button class="c5-pill-btn" id="bienestar-pill-7" onclick="goToBienestarSlide(7)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">7</button>
            <button class="c5-pill-btn" id="bienestar-pill-8" onclick="goToBienestarSlide(8)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">8</button>
            <button class="c5-pill-btn" id="bienestar-pill-9" onclick="goToBienestarSlide(9)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">9</button>
            <button class="c5-pill-btn" id="bienestar-pill-10" onclick="goToBienestarSlide(10)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">10</button>
            <button class="c5-pill-btn" id="bienestar-pill-11" onclick="goToBienestarSlide(11)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">11</button>
            <button class="c5-pill-btn" id="bienestar-pill-12" onclick="goToBienestarSlide(12)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">12</button>
            <button class="c5-pill-btn" id="bienestar-pill-13" onclick="goToBienestarSlide(13)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">13</button>
            <button class="c5-pill-btn" id="bienestar-pill-14" onclick="goToBienestarSlide(14)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">14</button>
            <button class="c5-pill-btn" id="bienestar-pill-15" onclick="goToBienestarSlide(15)" style="padding:4px 10px; font-size:0.78rem; font-weight:700; border-radius:6px; border:1px solid #CBD5E1; background:#fff; color:#1A1A1B; cursor:pointer;">15</button>
        </div>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
        <button onclick="prevBienestarSlide()" class="btn-sm" style="background:#1A1A1B; color:#fff; border:none; padding:6px 14px; border-radius:6px; font-weight:700; font-size:0.8rem; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
            <i class="fas fa-chevron-left"></i> Anterior
        </button>
        <span id="bienestar-slide-num-label" style="font-size:0.84rem; font-weight:800; color:#1A1A1B; min-width:85px; text-align:center;">
            1 / 15
        </span>
        <button onclick="nextBienestarSlide()" class="btn-sm" style="background:#F39200; color:#fff; border:none; padding:6px 14px; border-radius:6px; font-weight:700; font-size:0.8rem; cursor:pointer; display:inline-flex; align-items:center; gap:6px;">
            Siguiente <i class="fas fa-chevron-right"></i>
        </button>
    </div>
</div>

<!-- =========================================================
     CONTENEDOR PRINCIPAL DE DIAPOSITIVAS (SLIDES 1 A 15)
     ========================================================= -->
<div id="bienestar-slides-container">

    <!-- SLIDE 1: PORTADA INSTITUCIONAL -->
    <div class="bienestar-slide-panel active" id="bienestar-slide-1" data-eje="1" style="display:block;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #F39200;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-id-card-alt" style="color:#F39200;"></i> Diapositiva 1: Modelo Integral de Bienestar Institucional
                </h4>
                <span class="badge" style="background:#F39200; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    PORTADA OFICIAL
                </span>
            </div>
            
            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_1.png" alt="Bienestar Slide 1" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición (Full HD)
                </div>
            </div>

            <div class="grid-3" style="margin-top:14px; gap:12px;">
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:14px;">
                    <div style="font-size:0.72rem; text-transform:uppercase; color:#64748B; font-weight:800; margin-bottom:4px;">Dependencia Responsable</div>
                    <div style="font-size:0.92rem; font-weight:800; color:#1A1A1B;">Coordinación de Bienestar Institucional</div>
                    <p style="font-size:0.8rem; color:#475569; margin:4px 0 0;">Liderazgo institucional transversal adscrito a la Vicerrectoría Académica.</p>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:14px;">
                    <div style="font-size:0.72rem; text-transform:uppercase; color:#64748B; font-weight:800; margin-bottom:4px;">Liderazgo Especializado</div>
                    <div style="font-size:0.92rem; font-weight:800; color:#1A1A1B;">Laura Juliana Suárez</div>
                    <p style="font-size:0.8rem; color:#475569; margin:4px 0 0;">Psicóloga Especialista · Coordinadora de Bienestar Institucional.</p>
                </div>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:8px; padding:14px;">
                    <div style="font-size:0.72rem; text-transform:uppercase; color:#16A34A; font-weight:800; margin-bottom:4px;">Objetivo Superior</div>
                    <div style="font-size:0.92rem; font-weight:800; color:#14532D;">Permanencia & Formación Integral</div>
                    <p style="font-size:0.8rem; color:#166534; margin:4px 0 0;">Articulación directa con el éxito estudiantil y los RAPs en ambas modalidades.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 2: ¿QUÉ ES BIENESTAR? (MARCO CONCEPTUAL & 4 DIMENSIONES) -->
    <div class="bienestar-slide-panel" id="bienestar-slide-2" data-eje="1" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #16A34A;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-brain" style="color:#16A34A;"></i> Diapositiva 2: ¿Qué es Bienestar Institucional? Marco Conceptual
                </h4>
                <span class="badge" style="background:#16A34A; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    MARCO CONCEPTUAL
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_2.png" alt="Bienestar Slide 2" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <div class="grid-2" style="gap:16px;">
                <div style="background:#FFF7ED; border:1px solid #FFEDD5; border-radius:10px; padding:16px;">
                    <h5 style="font-size:0.92rem; font-weight:800; color:#C2410C; margin:0 0 10px;">
                        <i class="fas fa-bullseye"></i> 3 Propósitos Esenciales
                    </h5>
                    <ul style="font-size:0.83rem; color:#431407; line-height:1.7; padding-left:20px; margin:0;">
                        <li><strong>Formación Integral:</strong> Desarrollo holístico de conocimientos, habilidades socioemocionales y ciudadanía activa.</li>
                        <li><strong>Mejora de Calidad de Vida:</strong> Creación de condiciones de salud mental, convivencia y ergonomía en el entorno universitario.</li>
                        <li><strong>Construcción de Comunidad:</strong> Identidad institucional, sentido de pertenencia y tejido social interconectado.</li>
                    </ul>
                </div>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:10px; padding:16px;">
                    <h5 style="font-size:0.92rem; font-weight:800; color:#15803D; margin:0 0 10px;">
                        <i class="fas fa-user-graduate"></i> 4 Dimensiones Centradas en el Estudiante
                    </h5>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <div style="background:#fff; border:1px solid #DCFCE7; padding:8px 10px; border-radius:6px;">
                            <div style="font-size:0.8rem; font-weight:800; color:#15803D;"><i class="fas fa-heart"></i> Emocional</div>
                            <div style="font-size:0.72rem; color:#475569;">Salud mental, escucha activa y resiliencia</div>
                        </div>
                        <div style="background:#fff; border:1px solid #DCFCE7; padding:8px 10px; border-radius:6px;">
                            <div style="font-size:0.8rem; font-weight:800; color:#15803D;"><i class="fas fa-running"></i> Física</div>
                            <div style="font-size:0.72rem; color:#475569;">Deporte formativo y pausas activas</div>
                        </div>
                        <div style="background:#fff; border:1px solid #DCFCE7; padding:8px 10px; border-radius:6px;">
                            <div style="font-size:0.8rem; font-weight:800; color:#15803D;"><i class="fas fa-users"></i> Social</div>
                            <div style="font-size:0.72rem; color:#475569;">Integración comunitaria y cultura</div>
                        </div>
                        <div style="background:#fff; border:1px solid #DCFCE7; padding:8px 10px; border-radius:6px;">
                            <div style="font-size:0.8rem; font-weight:800; color:#15803D;"><i class="fas fa-book-reader"></i> Académica</div>
                            <div style="font-size:0.72rem; color:#475569;">Éxito formativo y tutorías entre pares</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 3: ¿CÓMO APORTA BIENESTAR? (CICLO DE PERMANENCIA) -->
    <div class="bienestar-slide-panel" id="bienestar-slide-3" data-eje="1" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #0284C7;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-chart-line" style="color:#0284C7;"></i> Diapositiva 3: ¿Cómo Aporta Bienestar a la Institución? Ciclo de Permanencia
                </h4>
                <span class="badge" style="background:#0284C7; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    IMPACTO Y CICLO DE VIDA
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_3.png" alt="Bienestar Slide 3" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <!-- Pipeline 5 Hitos -->
            <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-radius:10px; padding:16px; margin-bottom:14px;">
                <div style="font-size:0.8rem; font-weight:800; color:#1E293B; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:12px; text-align:center;">
                    <i class="fas fa-stream" style="color:#F39200;"></i> Flujo Continuo del Estudiante en la TO (5 Momentos Clave)
                </div>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:10px; text-align:center;">
                    <div style="background:#fff; border:1px solid #E2E8F0; padding:10px; border-radius:8px; border-top:3px solid #16A34A;">
                        <div style="font-size:1.1rem; color:#16A34A; margin-bottom:4px;"><i class="fas fa-door-open"></i></div>
                        <div style="font-size:0.78rem; font-weight:800; color:#1A1A1B;">1. INGRESO</div>
                        <div style="font-size:0.7rem; color:#64748B;">Inducción y caracterización censal</div>
                    </div>
                    <div style="background:#fff; border:1px solid #E2E8F0; padding:10px; border-radius:8px; border-top:3px solid #F39200;">
                        <div style="font-size:1.1rem; color:#F39200; margin-bottom:4px;"><i class="fas fa-comments"></i></div>
                        <div style="font-size:0.78rem; font-weight:800; color:#1A1A1B;">2. ACOMPAÑAMIENTO</div>
                        <div style="font-size:0.7rem; color:#64748B;">Apoyo socioemocional y talleres</div>
                    </div>
                    <div style="background:#fff; border:1px solid #E2E8F0; padding:10px; border-radius:8px; border-top:3px solid #0284C7;">
                        <div style="font-size:1.1rem; color:#0284C7; margin-bottom:4px;"><i class="fas fa-clipboard-check"></i></div>
                        <div style="font-size:0.78rem; font-weight:800; color:#1A1A1B;">3. SEGUIMIENTO</div>
                        <div style="font-size:0.7rem; color:#64748B;">Alertas tempranas SAT y notas</div>
                    </div>
                    <div style="background:#fff; border:1px solid #E2E8F0; padding:10px; border-radius:8px; border-top:3px solid #EA580C;">
                        <div style="font-size:1.1rem; color:#EA580C; margin-bottom:4px;"><i class="fas fa-shield-alt"></i></div>
                        <div style="font-size:0.78rem; font-weight:800; color:#1A1A1B;">4. PERMANENCIA</div>
                        <div style="font-size:0.7rem; color:#64748B;">Contención ante riesgo de deserción</div>
                    </div>
                    <div style="background:#fff; border:1px solid #E2E8F0; padding:10px; border-radius:8px; border-top:3px solid #8B5CF6;">
                        <div style="font-size:1.1rem; color:#8B5CF6; margin-bottom:4px;"><i class="fas fa-graduation-cap"></i></div>
                        <div style="font-size:0.78rem; font-weight:800; color:#1A1A1B;">5. GRADUACIÓN</div>
                        <div style="font-size:0.7rem; color:#64748B;">Éxito formativo y vinculación OLE</div>
                    </div>
                </div>
            </div>

            <!-- Banner Lema -->
            <div style="background:linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%); border-left:5px solid #F39200; border-radius:8px; padding:14px; display:flex; align-items:center; gap:12px;">
                <div style="font-size:1.6rem; color:#F39200;"><i class="fas fa-heart"></i></div>
                <div style="font-size:0.86rem; color:#7C2D12; font-weight:700; line-height:1.5;">
                    «Bienestar no solo acompaña, previene el abandono y sostiene la trayectoria académica.»
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 4: RUTA DE PERMANENCIA ESTUDIANTIL (PRESENCIAL VS VIRTUAL) -->
    <div class="bienestar-slide-panel" id="bienestar-slide-4" data-eje="2" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #EA580C;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-route" style="color:#EA580C;"></i> Diapositiva 4: Ruta de Permanencia Estudiantil Diferenciada (Presencial & Virtual)
                </h4>
                <span class="badge" style="background:#EA580C; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    RUTAS MODALES SAT
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_4.png" alt="Bienestar Slide 4" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <!-- Comparativo de Rutas -->
            <div class="grid-2" style="gap:16px; margin-bottom:16px;">
                <!-- RUTA PRESENCIAL -->
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:10px; padding:16px;">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                        <span style="background:#16A34A; color:#fff; padding:3px 10px; border-radius:12px; font-weight:800; font-size:0.75rem;">
                            <i class="fas fa-chalkboard-teacher"></i> RUTA PRESENCIAL
                        </span>
                        <span style="font-size:0.78rem; font-weight:700; color:#15803D;">4 Fases de Intervención Directa</span>
                    </div>
                    <ol style="font-size:0.82rem; color:#14532D; line-height:1.6; padding-left:18px; margin:0;">
                        <li style="margin-bottom:6px;"><strong>Alertas Tempranas:</strong> Detección de inasistencias reiteradas, bajo rendimiento en cortes sumativos y cambios actitudinales detectados por el docente.</li>
                        <li style="margin-bottom:6px;"><strong>Seguimiento Docente-Coordinación:</strong> Reporte formal en comités curriculares y activación de canales directos de apoyo.</li>
                        <li style="margin-bottom:6px;"><strong>Bienestar Institucional:</strong> Remisión psicológica especializada y diagnóstico de causas sociofamiliares.</li>
                        <li><strong>Estrategias Académicas:</strong> Asignación de Consejero Académico, tutorías entre pares y plan de recuperación guiado.</li>
                    </ol>
                </div>

                <!-- RUTA VIRTUAL -->
                <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:10px; padding:16px;">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                        <span style="background:#0284C7; color:#fff; padding:3px 10px; border-radius:12px; font-weight:800; font-size:0.75rem;">
                            <i class="fas fa-laptop"></i> RUTA VIRTUAL
                        </span>
                        <span style="font-size:0.78rem; font-weight:700; color:#0369A1;">3 Fases Mediadas por Moodle LMS</span>
                    </div>
                    <ol style="font-size:0.82rem; color:#1E3A8A; line-height:1.6; padding-left:18px; margin:0;">
                        <li style="margin-bottom:6px;"><strong>Alertas Tempranas Digitales:</strong> Monitoreo analítico de acceso al Campus Virtual, estudiantes sin ingreso mayor a 5 días y entregas no realizadas.</li>
                        <li style="margin-bottom:6px;"><strong>Reporte de Docentes a Coordinación:</strong> Dinamización por foros y escalamiento a la Coordinación del Programa y Educación Virtual.</li>
                        <li><strong>Reporte a Bienestar para Seguimiento Remoto:</strong> Acompañamiento telefónico, Teams, WhatsApp institucional y correo para orientación oportuna.</li>
                    </ol>
                </div>
            </div>

            <!-- 3 Pilares -->
            <div class="grid-3" style="gap:12px;">
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-left:4px solid #16A34A;">
                    <div style="font-weight:800; font-size:0.82rem; color:#1A1A1B;"><i class="fas fa-search" style="color:#16A34A;"></i> DIAGNÓSTICO</div>
                    <p style="font-size:0.78rem; color:#475569; margin:4px 0 0;">Identificamos y analizamos de raíz las situaciones personales, académicas o socioeconómicas que puedan detonar la deserción.</p>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-left:4px solid #F39200;">
                    <div style="font-weight:800; font-size:0.82rem; color:#1A1A1B;"><i class="fas fa-tasks" style="color:#F39200;"></i> SEGUIMIENTO</div>
                    <p style="font-size:0.78rem; color:#475569; margin:4px 0 0;">Monitoreamos permanentemente los avances de los planes de mejora concertados con el estudiante y sus profesores.</p>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-left:4px solid #0284C7;">
                    <div style="font-weight:800; font-size:0.82rem; color:#1A1A1B;"><i class="fas fa-hands-helping" style="color:#0284C7;"></i> APOYO INTEGRAL</div>
                    <p style="font-size:0.78rem; color:#475569; margin:4px 0 0;">Brindamos orientación psicológica, subsidios socioeconómicos y tutorías académicas para salvaguardar la culminación de estudios.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 5: HORAS DE BIENESTAR (16H SEMESTRALES) -->
    <div class="bienestar-slide-panel" id="bienestar-slide-5" data-eje="3" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #10B981;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-hourglass-half" style="color:#10B981;"></i> Diapositiva 5: Horas de Bienestar Institucional (16 Horas por Semestre)
                </h4>
                <span class="badge" style="background:#10B981; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    REQUISITO DE FORMACIÓN INTEGRAL
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_5.png" alt="Bienestar Slide 5" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <!-- Destacado 16 Horas -->
            <div style="background:#ECFDF5; border:1px solid #A7F3D0; border-radius:10px; padding:16px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div>
                    <span style="background:#059669; color:#fff; font-size:0.74rem; font-weight:800; padding:3px 10px; border-radius:12px;">
                        REGLAMENTO ESTUDIANTIL
                    </span>
                    <h5 style="font-size:1rem; font-weight:800; color:#065F46; margin:6px 0 2px;">
                        «No es nota académica -> es requisito formal de formación integral»
                    </h5>
                    <p style="font-size:0.82rem; color:#047857; margin:0;">Todos los estudiantes de Administración de Empresas cumplen 16 horas semestrales de actividades formativas transversales.</p>
                </div>
                <div style="text-align:center; background:#fff; border:2px dashed #059669; padding:10px 18px; border-radius:10px;">
                    <div style="font-size:1.8rem; font-weight:900; color:#059669; line-height:1;">16 h</div>
                    <div style="font-size:0.72rem; font-weight:800; color:#1E293B; text-transform:uppercase;">Por Semestre</div>
                </div>
            </div>

            <!-- 4 Ejes -->
            <div class="grid-4" style="gap:12px;">
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #EA580C; text-align:center;">
                    <div style="font-size:1.4rem; color:#EA580C; margin-bottom:6px;"><i class="fas fa-heartbeat"></i></div>
                    <div style="font-weight:800; font-size:0.84rem; color:#1A1A1B;">SALUD</div>
                    <p style="font-size:0.76rem; color:#64748B; margin:4px 0 0;">Promoción de hábitos saludables, salud mental y nutrición.</p>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #16A34A; text-align:center;">
                    <div style="font-size:1.4rem; color:#16A34A; margin-bottom:6px;"><i class="fas fa-theater-masks"></i></div>
                    <div style="font-weight:800; font-size:0.84rem; color:#1A1A1B;">CULTURA</div>
                    <p style="font-size:0.76rem; color:#64748B; margin:4px 0 0;">Creación, expresión artística y apreciación del patrimonio regional.</p>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #F39200; text-align:center;">
                    <div style="font-size:1.4rem; color:#F39200; margin-bottom:6px;"><i class="fas fa-futbol"></i></div>
                    <div style="font-weight:800; font-size:0.84rem; color:#1A1A1B;">DEPORTE</div>
                    <p style="font-size:0.76rem; color:#64748B; margin:4px 0 0;">Actividad física, torneos interfacultades y trabajo en equipo.</p>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #6366F1; text-align:center;">
                    <div style="font-size:1.4rem; color:#6366F1; margin-bottom:6px;"><i class="fas fa-hands"></i></div>
                    <div style="font-weight:800; font-size:0.84rem; color:#1A1A1B;">DESARROLLO HUMANO</div>
                    <p style="font-size:0.76rem; color:#64748B; margin:4px 0 0;">Habilidades blandas, liderazgo gerencial, resiliencia y convivencia.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 6: ÁREAS DE BIENESTAR = ACTIVIDADES CON BASE EN CARACTERIZACIÓN -->
    <div class="bienestar-slide-panel" id="bienestar-slide-6" data-eje="3" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #8B5CF6;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-th-list" style="color:#8B5CF6;"></i> Diapositiva 6: Áreas de Bienestar = Portafolio de Actividades Pertinentes
                </h4>
                <span class="badge" style="background:#8B5CF6; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    PORTAFOLIO BASADO EN DATOS
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_6.png" alt="Bienestar Slide 6" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <div style="background:#FAF5FF; border:1px solid #E9D5FF; border-radius:8px; padding:12px 16px; margin-bottom:16px;">
                <div style="font-weight:800; font-size:0.86rem; color:#6B21A8;">
                    <i class="fas fa-check-circle"></i> «Las actividades NO son aleatorias: se diseñan a partir de la caracterización censal del estudiante.»
                </div>
            </div>

            <div class="grid-5" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px;">
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #EA580C;">
                    <div style="font-weight:800; font-size:0.82rem; color:#EA580C; margin-bottom:6px;"><i class="fas fa-heartbeat"></i> 1. SALUD</div>
                    <div style="font-size:0.78rem; color:#475569; line-height:1.5;">• Talleres de salud mental<br>• Campañas de autocuidado<br>• Orientación psicológica personalizada</div>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #16A34A;">
                    <div style="font-weight:800; font-size:0.82rem; color:#16A34A; margin-bottom:6px;"><i class="fas fa-user-friends"></i> 2. DES. HUMANO</div>
                    <div style="font-size:0.78rem; color:#475569; line-height:1.5;">• Habilidades para la vida<br>• Orientación vocacional<br>• Resolución de conflictos</div>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #F39200;">
                    <div style="font-weight:800; font-size:0.82rem; color:#F39200; margin-bottom:6px;"><i class="fas fa-palette"></i> 3. CULTURA</div>
                    <div style="font-size:0.78rem; color:#475569; line-height:1.5;">• Expresión y talleres de arte<br>• Celebración de fechas cívicas<br>• Identidad institucional TO</div>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #0284C7;">
                    <div style="font-weight:800; font-size:0.82rem; color:#0284C7; margin-bottom:6px;"><i class="fas fa-running"></i> 4. DEPORTE</div>
                    <div style="font-size:0.78rem; color:#475569; line-height:1.5;">• Recreación activa y pausas<br>• Torneos de Futsal y voleibol<br>• Alianzas de esparcimiento</div>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #10B981;">
                    <div style="font-weight:800; font-size:0.82rem; color:#10B981; margin-bottom:6px;"><i class="fas fa-hand-holding-usd"></i> 5. SOCIOECONÓMICO</div>
                    <div style="font-size:0.78rem; color:#475569; line-height:1.5;">• Apoyos para matrícula<br>• Descuentos por convenios<br>• Asesoría financiera estudiantil</div>
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 7: LECTURA ESTRATÉGICA DE LA CARACTERIZACIÓN (PRESENCIAL) -->
    <div class="bienestar-slide-panel" id="bienestar-slide-7" data-eje="4" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #F39200;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-balance-scale" style="color:#F39200;"></i> Diapositiva 7: Lectura Estratégica de la Caracterización (Presencial)
                </h4>
                <span class="badge" style="background:#F39200; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    CARACTERIZACIÓN MAÑANA VS. NOCHE
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_7.png" alt="Bienestar Slide 7" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <div class="grid-2" style="gap:16px; margin-bottom:16px;">
                <!-- JORNADA MAÑANA -->
                <div style="background:#FFF7ED; border:2px solid #FDBA74; border-radius:10px; padding:16px;">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                        <span style="font-size:1.2rem; color:#EA580C;"><i class="fas fa-sun"></i></span>
                        <h5 style="font-size:0.95rem; font-weight:800; color:#9A3412; margin:0;">JORNADA MAÑANA (Jóvenes recién egresados)</h5>
                    </div>
                    <div style="font-size:0.82rem; color:#7C2D12; line-height:1.6;">
                        <p style="margin:0 0 6px;"><strong>• Problema Central:</strong> Mala gestión del tiempo y dispersión digital.</p>
                        <p style="margin:0 0 6px;"><strong>• Enfoque de Bienestar:</strong> Disciplina, hábitos de estudio y construcción de metas.</p>
                        <p style="margin:0 0 6px;"><strong>• Riesgo Principal:</strong> Bajo rendimiento académico por procrastinación.</p>
                        <div style="background:#fff; border:1px solid #FFEDD5; padding:8px 10px; border-radius:6px; margin-top:10px; font-weight:700;">
                            <i class="fas fa-lightbulb" style="color:#EA580C;"></i> Necesidad Institucional: <strong>Estructuración y autorregulación.</strong>
                        </div>
                    </div>
                </div>

                <!-- JORNADA NOCHE -->
                <div style="background:#F0FDF4; border:2px solid #86EFAC; border-radius:10px; padding:16px;">
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                        <span style="font-size:1.2rem; color:#16A34A;"><i class="fas fa-moon"></i></span>
                        <h5 style="font-size:0.95rem; font-weight:800; color:#14532D; margin:0;">JORNADA NOCHE (Adultos que trabajan)</h5>
                    </div>
                    <div style="font-size:0.82rem; color:#166534; line-height:1.6;">
                        <p style="margin:0 0 6px;"><strong>• Problema Central:</strong> Falta de tiempo real por jornadas laborales de 8+ horas.</p>
                        <p style="margin:0 0 6px;"><strong>• Enfoque de Bienestar:</strong> Supervivencia académica, contención emocional y flexibilidad.</p>
                        <p style="margin:0 0 6px;"><strong>• Riesgo Principal:</strong> Deserción forzada por sobrecarga laboral y familiar.</p>
                        <div style="background:#fff; border:1px solid #DCFCE7; padding:8px 10px; border-radius:6px; margin-top:10px; font-weight:700;">
                            <i class="fas fa-lightbulb" style="color:#16A34A;"></i> Necesidad Institucional: <strong>Flexibilización y contención psicoemocional.</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div style="text-align:center; background:#F8FAFC; border:1px solid #CBD5E1; padding:12px; border-radius:8px; font-size:0.84rem; font-weight:700; color:#1E293B;">
                «Comprender las diferencias nos permite diseñar estrategias pertinentes, no soluciones genéricas.»
            </div>
        </div>
    </div>

    <!-- SLIDE 8: RESPUESTA DE BIENESTAR (ESTRATEGIAS DIFERENCIADAS) -->
    <div class="bienestar-slide-panel" id="bienestar-slide-8" data-eje="4" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #059669;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-tasks" style="color:#059669;"></i> Diapositiva 8: Respuesta Diferenciada de Bienestar Institucional
                </h4>
                <span class="badge" style="background:#059669; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    ESTRATEGIAS POR JORNADA
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_8.png" alt="Bienestar Slide 8" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <div class="grid-2" style="gap:16px; margin-bottom:16px;">
                <!-- RESPUESTA MAÑANA -->
                <div style="background:#fff; border:1px solid #E2E8F0; border-radius:10px; padding:16px; border-left:5px solid #F39200;">
                    <h5 style="font-size:0.92rem; font-weight:800; color:#1A1A1B; margin:0 0 10px;">
                        <i class="fas fa-sun" style="color:#F39200;"></i> Para Jornada Mañana:
                    </h5>
                    <ul style="font-size:0.83rem; color:#475569; line-height:1.7; padding-left:18px; margin:0;">
                        <li><strong>Fortalecimiento de hábitos de estudio:</strong> Talleres de técnicas de lectura crítica, mapas conceptuales y preparación para exámenes.</li>
                        <li><strong>Gestión del tiempo:</strong> Matrices de Eisenhower, bloques de productividad y mitigación de distractores digitales.</li>
                        <li><strong>Técnicas de autorregulación:</strong> Manejo de la tolerancia a la frustración y compromiso con el proyecto de vida.</li>
                    </ul>
                </div>

                <!-- RESPUESTA NOCHE -->
                <div style="background:#fff; border:1px solid #E2E8F0; border-radius:10px; padding:16px; border-left:5px solid #16A34A;">
                    <h5 style="font-size:0.92rem; font-weight:800; color:#1A1A1B; margin:0 0 10px;">
                        <i class="fas fa-moon" style="color:#16A34A;"></i> Para Jornada Noche:
                    </h5>
                    <ul style="font-size:0.83rem; color:#475569; line-height:1.7; padding-left:18px; margin:0;">
                        <li><strong>Optimización del tiempo:</strong> Métodos ágiles de estudio y condensación de entregables con apoyo digital.</li>
                        <li><strong>Acompañamiento psicoemocional:</strong> Descarga de estrés laboral, contención psicológica y apoyo familiar.</li>
                        <li><strong>Flexibilidad y permanencia:</strong> Coordinación de horarios de asesoría y acuerdos académicos de entrega justificada.</li>
                    </ul>
                </div>
            </div>

            <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:8px; padding:12px; text-align:center; font-weight:800; color:#15803D; font-size:0.84rem;">
                «Misma misión institucional, respuestas contextuales para realidades distintas.»
            </div>
        </div>
    </div>

    <!-- SLIDE 9: RESPUESTA DE BIENESTAR EN VIRTUALIDAD (CAMPUS VIRTUAL MOODLE) -->
    <div class="bienestar-slide-panel" id="bienestar-slide-9" data-eje="5" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #0284C7;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-laptop-code" style="color:#0284C7;"></i> Diapositiva 9: Respuesta de Bienestar en Modalidad Virtual (Campus Virtual)
                </h4>
                <span class="badge" style="background:#0284C7; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    AULAS VIRTUALES DE BIENESTAR
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_9.png" alt="Bienestar Slide 9" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <div style="background:#F0F9FF; border:1px solid #BAE6FD; border-radius:8px; padding:12px 16px; margin-bottom:16px;">
                <div style="font-weight:800; font-size:0.86rem; color:#0369A1;">
                    «En virtualidad, el bienestar NO es presencial ni reactivo; es estructurado, progresivo y orientado a la autorregulación del estudiante.»
                </div>
            </div>

            <!-- Las 3 Aulas de Bienestar en Moodle -->
            <div class="grid-3" style="gap:14px; margin-bottom:16px;">
                <div style="background:#fff; border:1px solid #CBD5E1; border-radius:10px; padding:16px; border-top:4px solid #10B981;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span style="background:#10B981; color:#fff; font-size:0.72rem; font-weight:800; padding:2px 8px; border-radius:10px;">FASE 1</span>
                        <i class="fas fa-heart" style="color:#10B981;"></i>
                    </div>
                    <h5 style="font-size:0.9rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">Adaptación Inicial</h5>
                    <div style="font-size:0.8rem; font-weight:700; color:#059669; margin-bottom:6px;">Aula de Salud Mental</div>
                    <p style="font-size:0.78rem; color:#475569; margin:0; line-height:1.5;">Enfoque en inducción a la cultura digital, transición a la vida universitaria y gestión del aislamiento formativo.</p>
                </div>

                <div style="background:#fff; border:1px solid #CBD5E1; border-radius:10px; padding:16px; border-top:4px solid #F39200;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span style="background:#F39200; color:#fff; font-size:0.72rem; font-weight:800; padding:2px 8px; border-radius:10px;">FASE 2</span>
                        <i class="fas fa-tools" style="color:#F39200;"></i>
                    </div>
                    <h5 style="font-size:0.9rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">Desarrollo de Competencias</h5>
                    <div style="font-size:0.8rem; font-weight:700; color:#D97706; margin-bottom:6px;">Aula de Habilidades Blandas</div>
                    <p style="font-size:0.78rem; color:#475569; margin:0; line-height:1.5;">Enfoque en herramientas para el aprendizaje autónomo, disciplina de autoestudio y comunicación asertiva en foros.</p>
                </div>

                <div style="background:#fff; border:1px solid #CBD5E1; border-radius:10px; padding:16px; border-top:4px solid #0284C7;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span style="background:#0284C7; color:#fff; font-size:0.72rem; font-weight:800; padding:2px 8px; border-radius:10px;">FASE 3</span>
                        <i class="fas fa-shield-alt" style="color:#0284C7;"></i>
                    </div>
                    <h5 style="font-size:0.9rem; font-weight:800; color:#1A1A1B; margin:0 0 6px;">Sostenimiento Académico</h5>
                    <div style="font-size:0.8rem; font-weight:700; color:#0284C7; margin-bottom:6px;">Aula de Manejo del Estrés</div>
                    <p style="font-size:0.78rem; color:#475569; margin:0; line-height:1.5;">Enfoque en permanencia, regulación emocional, afrontamiento del cansancio cognitivo y culminación del semestre.</p>
                </div>
            </div>

            <div class="grid-4" style="gap:10px; text-align:center;">
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px; border-radius:8px;">
                    <div style="font-size:1.1rem; color:#0284C7; margin-bottom:4px;"><i class="fas fa-headset"></i></div>
                    <div style="font-size:0.76rem; font-weight:700; color:#1A1A1B;">Cercanía sin presencialidad</div>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px; border-radius:8px;">
                    <div style="font-size:1.1rem; color:#16A34A; margin-bottom:4px;"><i class="fas fa-chart-line"></i></div>
                    <div style="font-size:0.76rem; font-weight:700; color:#1A1A1B;">Promoción de autonomía</div>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px; border-radius:8px;">
                    <div style="font-size:1.1rem; color:#F39200; margin-bottom:4px;"><i class="fas fa-user-shield"></i></div>
                    <div style="font-size:0.76rem; font-weight:700; color:#1A1A1B;">Prevención del abandono</div>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:10px; border-radius:8px;">
                    <div style="font-size:1.1rem; color:#8B5CF6; margin-bottom:4px;"><i class="fas fa-magic"></i></div>
                    <div style="font-size:0.76rem; font-weight:700; color:#1A1A1B;">Anticipación y transformación</div>
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 10: MODELO INTEGRAL DE BIENESTAR INSTITUCIONAL (5 ENGRANAJES) -->
    <div class="bienestar-slide-panel" id="bienestar-slide-10" data-eje="6" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #6366F1;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-cogs" style="color:#6366F1;"></i> Diapositiva 10: Modelo Integral Articulado (5 Engranajes Sistémicos)
                </h4>
                <span class="badge" style="background:#6366F1; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    ENGRANAJES SISTÉMICOS
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_10.png" alt="Bienestar Slide 10" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <!-- 5 Engranajes -->
            <div class="grid-5" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px; margin-bottom:16px;">
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #16A34A;">
                    <div style="font-size:0.75rem; font-weight:800; color:#16A34A; margin-bottom:4px;">ENGRANAJE 1</div>
                    <div style="font-weight:800; font-size:0.84rem; color:#1A1A1B; margin-bottom:6px;">Caracterización</div>
                    <div style="font-size:0.76rem; color:#475569; line-height:1.5;">Diagnóstico censal de necesidades, lectura modal y mapa de riesgos individuales.</div>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #EA580C;">
                    <div style="font-size:0.75rem; font-weight:800; color:#EA580C; margin-bottom:4px;">ENGRANAJE 2</div>
                    <div style="font-weight:800; font-size:0.84rem; color:#1A1A1B; margin-bottom:6px;">Respuesta Contextual</div>
                    <div style="font-size:0.76rem; color:#475569; line-height:1.5;">Estrategias presenciales diferenciadas (Mañana/Noche) y ruta progresiva virtual.</div>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #10B981;">
                    <div style="font-size:0.75rem; font-weight:800; color:#10B981; margin-bottom:4px;">ENGRANAJE 3</div>
                    <div style="font-weight:800; font-size:0.84rem; color:#1A1A1B; margin-bottom:6px;">Áreas de Bienestar</div>
                    <div style="font-size:0.76rem; color:#475569; line-height:1.5;">Salud, Deporte, Cultura, Desarrollo Humano y Apoyos Socioeconómicos.</div>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #0284C7;">
                    <div style="font-size:0.75rem; font-weight:800; color:#0284C7; margin-bottom:4px;">ENGRANAJE 4</div>
                    <div style="font-weight:800; font-size:0.84rem; color:#1A1A1B; margin-bottom:6px;">Trabajo Institucional</div>
                    <div style="font-size:0.76rem; color:#475569; line-height:1.5;">Articulación sinérgica entre Bienestar, Coordinaciones Académicas y Docentes.</div>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; border-top:3px solid #8B5CF6;">
                    <div style="font-size:0.75rem; font-weight:800; color:#8B5CF6; margin-bottom:4px;">ENGRANAJE 5</div>
                    <div style="font-weight:800; font-size:0.84rem; color:#1A1A1B; margin-bottom:6px;">Impacto Verificable</div>
                    <div style="font-size:0.76rem; color:#475569; line-height:1.5;">Permanencia >94%, graduación oportuna y transformación integral del proyecto de vida.</div>
                </div>
            </div>

            <div style="background:linear-gradient(135deg, #F8FAFC 0%, #EEF2F6 100%); border:1px solid #CBD5E1; border-radius:8px; padding:14px; text-align:center;">
                <div style="font-weight:800; font-size:0.86rem; color:#1E293B;">
                    «Un sistema articulado que parte de las realidades del estudiante y transforma vidas a través de estrategias pertinentes, integrales y sostenibles.»
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 11: DECLARACIÓN DE ENFOQUE INSTITUCIONAL -->
    <div class="bienestar-slide-panel" id="bienestar-slide-11" data-eje="6" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #16A34A;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-bullhorn" style="color:#16A34A;"></i> Diapositiva 11: Enfoque Estratégico y Propósito de Bienestar
                </h4>
                <span class="badge" style="background:#16A34A; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    DECLARACIÓN ESTRATÉGICA
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_11.png" alt="Bienestar Slide 11" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <!-- Manifiesto de Bienestar -->
            <div style="background:#F0FDF4; border-left:6px solid #16A34A; border-radius:8px; padding:16px; margin-bottom:16px;">
                <div style="font-size:0.92rem; font-weight:800; color:#14532D; line-height:1.6;">
                    «Bienestar institucional no ejecuta actividades generales; diseña intervenciones diferenciadas según las condiciones reales del estudiante, en articulación con las coordinaciones académicas, para fortalecer la permanencia y el éxito académico.»
                </div>
            </div>

            <div class="grid-4" style="gap:12px;">
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; text-align:center;">
                    <div style="font-size:1.3rem; color:#EA580C; margin-bottom:6px;"><i class="fas fa-user-check"></i></div>
                    <div style="font-weight:800; font-size:0.8rem; color:#1A1A1B;">Centrado en el Estudiante</div>
                    <p style="font-size:0.74rem; color:#64748B; margin:4px 0 0;">Cada estudiante posee trayectorias, ritmos y realidades individuales.</p>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; text-align:center;">
                    <div style="font-size:1.3rem; color:#0284C7; margin-bottom:6px;"><i class="fas fa-hands-helping"></i></div>
                    <div style="font-weight:800; font-size:0.8rem; color:#1A1A1B;">Trabajo en Articulación</div>
                    <p style="font-size:0.74rem; color:#64748B; margin:4px 0 0;">Sinergia continua con directores de programa, coordinadores y docentes.</p>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; text-align:center;">
                    <div style="font-size:1.3rem; color:#F39200; margin-bottom:6px;"><i class="fas fa-chart-pie"></i></div>
                    <div style="font-weight:800; font-size:0.8rem; color:#1A1A1B;">Sentido Estratégico</div>
                    <p style="font-size:0.74rem; color:#64748B; margin:4px 0 0;">Decisiones fundamentadas en datos censales, no en suposiciones.</p>
                </div>
                <div style="background:#fff; border:1px solid #E2E8F0; padding:12px; border-radius:8px; text-align:center;">
                    <div style="font-size:1.3rem; color:#16A34A; margin-bottom:6px;"><i class="fas fa-graduation-cap"></i></div>
                    <div style="font-weight:800; font-size:0.8rem; color:#1A1A1B;">Compromiso Futuro</div>
                    <p style="font-size:0.74rem; color:#64748B; margin:4px 0 0;">Acompañamos vidas para entregar graduados íntegros a la sociedad.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 12: EVIDENCIAS REALES – INTEGRACIÓN EN AULA Y TALLERES LÚDICOS -->
    <div class="bienestar-slide-panel" id="bienestar-slide-12" data-eje="7" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #F39200;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-camera" style="color:#F39200;"></i> Diapositiva 12: Evidencias Fotográficas Reales – Integración en Aula
                </h4>
                <span class="badge" style="background:#F39200; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    REGISTRO FOTOGRÁFICO VERIFICABLE
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_12.png" alt="Bienestar Slide 12" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <div class="grid-3" style="gap:12px;">
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:12px; border-radius:8px;">
                    <div style="font-weight:800; font-size:0.82rem; color:#1A1A1B;"><i class="fas fa-users" style="color:#F39200;"></i> Dinámicas de Grupo en Aula</div>
                    <p style="font-size:0.78rem; color:#64748B; margin:4px 0 0;">Círculos de escucha, integración de cohortes y fortalecimiento de relaciones interpersonales.</p>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:12px; border-radius:8px;">
                    <div style="font-weight:800; font-size:0.82rem; color:#1A1A1B;"><i class="fas fa-smile-beam" style="color:#16A34A;"></i> Actividades Lúdicas con Globos</div>
                    <p style="font-size:0.78rem; color:#64748B; margin:4px 0 0;">Juegos de confianza, descarga de tensión académica y desarrollo de habilidades colaborativas.</p>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:12px; border-radius:8px;">
                    <div style="font-weight:800; font-size:0.82rem; color:#1A1A1B;"><i class="fas fa-chalkboard-teacher" style="color:#0284C7;"></i> Acompañamiento en Salón</div>
                    <p style="font-size:0.78rem; color:#64748B; margin:4px 0 0;">Intervenciones directas del equipo de psicólogos en las aulas de clase de Sede A y Sede B.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 13: EVIDENCIAS REALES – TORNEOS DEPORTIVOS Y RECREACIÓN -->
    <div class="bienestar-slide-panel" id="bienestar-slide-13" data-eje="7" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #16A34A;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-trophy" style="color:#16A34A;"></i> Diapositiva 13: Evidencias Fotográficas Reales – Torneos Deportivos y Deporte Formativo
                </h4>
                <span class="badge" style="background:#16A34A; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    DEPORTE Y COMPETICIÓN SANA
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_13.png" alt="Bienestar Slide 13" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <div class="grid-2" style="gap:16px;">
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:10px; padding:16px;">
                    <h5 style="font-size:0.92rem; font-weight:800; color:#15803D; margin:0 0 8px;">
                        <i class="fas fa-medal"></i> Torneos de Futsal Femenino y Masculino
                    </h5>
                    <p style="font-size:0.82rem; color:#166534; line-height:1.6; margin:0;">
                        Participación masiva de estudiantes de Administración de Empresas en copas institucionales, premiaciones con trofeos y medallas oficiales, promoviendo hábitos saludables y sentido de comunidad universitaria.
                    </p>
                </div>
                <div style="background:#FFF7ED; border:1px solid #FFEDD5; border-radius:10px; padding:16px;">
                    <h5 style="font-size:0.92rem; font-weight:800; color:#C2410C; margin:0 0 8px;">
                        <i class="fas fa-swimming-pool"></i> Convenios de Esparcimiento (Cajasan Campo Alegre)
                    </h5>
                    <p style="font-size:0.82rem; color:#9A3412; line-height:1.6; margin:0;">
                        Acceso a canchas múltiples, zonas húmedas y áreas campestres a través del convenio formal con la Caja de Compensación Familiar Cajasan para toda la comunidad académica.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 14: EVIDENCIAS REALES – PAUSAS ACTIVAS, SALUD MENTAL E INCLUSIÓN -->
    <div class="bienestar-slide-panel" id="bienestar-slide-14" data-eje="7" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #0284C7;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-universal-access" style="color:#0284C7;"></i> Diapositiva 14: Pausas Activas, Salud Mental e Inclusión Real
                </h4>
                <span class="badge" style="background:#0284C7; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    INCLUSIÓN & ERGONOMÍA (DTO. 1421)
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_14.png" alt="Bienestar Slide 14" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <div class="grid-3" style="gap:12px;">
                <div style="background:#F8FAFC; border:1px solid #CBD5E1; padding:14px; border-radius:8px; border-left:4px solid #0284C7;">
                    <div style="font-weight:800; font-size:0.84rem; color:#1E293B;"><i class="fas fa-child"></i> Pausas Activas y Estiramiento</div>
                    <p style="font-size:0.78rem; color:#475569; margin:4px 0 0;">Sesiones guiadas de higiene postural y reducción de fatiga física tanto en jornadas diurnas como nocturnas.</p>
                </div>
                <div style="background:#F8FAFC; border:1px solid #CBD5E1; padding:14px; border-radius:8px; border-left:4px solid #16A34A;">
                    <div style="font-weight:800; font-size:0.84rem; color:#1E293B;"><i class="fas fa-wheelchair"></i> Inclusión Real y Accesibilidad</div>
                    <p style="font-size:0.78rem; color:#475569; margin:4px 0 0;">Evidencia verificable de estudiantes en silla de ruedas integrados plenamente al aula bajo el Decreto 1421 de 2017.</p>
                </div>
                <div style="background:#F8FAFC; border:1px solid #CBD5E1; padding:14px; border-radius:8px; border-left:4px solid #F39200;">
                    <div style="font-weight:800; font-size:0.84rem; color:#1E293B;"><i class="fas fa-spa"></i> Salud Mental & Bienestar</div>
                    <p style="font-size:0.78rem; color:#475569; margin:4px 0 0;">Talleres de manejo de ansiedad ante evaluaciones parciales y técnicas de respiración consciente.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- SLIDE 15: DIAPOSITIVA DE CIERRE INSTITUCIONAL -->
    <div class="bienestar-slide-panel" id="bienestar-slide-15" data-eje="7" style="display:none;">
        <div class="card" style="margin-bottom:16px; border-top:4px solid #F39200;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
                <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:800; color:#1A1A1B; margin:0;">
                    <i class="fas fa-check-circle" style="color:#F39200;"></i> Diapositiva 15: Cierre Institucional – Compromiso con la Excelencia
                </h4>
                <span class="badge" style="background:#F39200; color:#fff; font-size:0.75rem; font-weight:800; padding:4px 10px; border-radius:12px;">
                    CIERRE OFICIAL
                </span>
            </div>

            <div style="text-align:center; background:#0F172A; border-radius:10px; padding:12px; margin-bottom:16px; box-shadow:inset 0 2px 10px rgba(0,0,0,0.4);">
                <img src="assets/bienestar/slide_15.png" alt="Bienestar Slide 15" style="max-width:100%; max-height:480px; width:auto; border-radius:6px; cursor:zoom-in; box-shadow:0 6px 18px rgba(0,0,0,0.3);" onclick="window.open(this.src, '_blank')">
                <div style="color:#94A3B8; font-size:0.75rem; margin-top:8px;">
                    <i class="fas fa-search-plus"></i> Clic sobre la diapositiva para ampliar en alta definición
                </div>
            </div>

            <div style="background:#FFF7ED; border:1px solid #FFEDD5; border-radius:10px; padding:16px; text-align:center;">
                <div style="font-size:1.1rem; font-weight:800; color:#C2410C; margin-bottom:6px;">
                    Corporación Escuela Tecnológica del Oriente
                </div>
                <div style="font-size:0.84rem; color:#475569; margin-bottom:12px;">
                    Institución de Educación Superior · Bucaramanga, Santander · Sede Principal: Calle 41 # 10 - 30 Centro
                </div>
                <div style="display:inline-flex; gap:12px; flex-wrap:wrap; justify-content:center;">
                    <a href="https://tecnologicadeloriente.edu.co" target="_blank" style="background:#1A1A1B; color:#fff; padding:8px 18px; border-radius:6px; font-weight:700; font-size:0.8rem; text-decoration:none;">
                        <i class="fas fa-globe"></i> Portal Institucional
                    </a>
                    <button onclick="goToBienestarSlide(1)" style="background:#F39200; color:#fff; padding:8px 18px; border-radius:6px; font-weight:700; font-size:0.8rem; border:none; cursor:pointer;">
                        <i class="fas fa-redo"></i> Volver al Inicio de la Presentación
                    </button>
                </div>
            </div>
        </div>
    </div>

</div>
`;

// =========================================================
// SCRIPTS DE CONTROL Y NAVEGACIÓN EN PRIMER PLANO
// =========================================================
window.currentBienestarSlide = 1;
window.totalBienestarSlides = 15;

window.goToBienestarSlide = function(num) {
    if (num < 1 || num > window.totalBienestarSlides) return;
    window.currentBienestarSlide = num;

    // Ocultar todos los paneles y mostrar el activo
    for (let i = 1; i <= window.totalBienestarSlides; i++) {
        const p = document.getElementById('bienestar-slide-' + i);
        if (p) p.style.display = (i === num) ? 'block' : 'none';
        
        const pill = document.getElementById('bienestar-pill-' + i);
        if (pill) {
            if (i === num) {
                pill.style.background = '#F39200';
                pill.style.color = '#fff';
                pill.style.borderColor = '#F39200';
            } else {
                pill.style.background = '#fff';
                pill.style.color = '#1A1A1B';
                pill.style.borderColor = '#CBD5E1';
            }
        }
    }

    // Actualizar etiqueta
    const lbl = document.getElementById('bienestar-slide-num-label');
    if (lbl) lbl.textContent = num + ' / ' + window.totalBienestarSlides;

    // Sincronizar subtab eje
    const activePanel = document.getElementById('bienestar-slide-' + num);
    if (activePanel) {
        const ejeId = activePanel.getAttribute('data-eje');
        const ejeBtns = document.querySelectorAll('#bienestar-ejes-bar .c2-subtab-btn');
        ejeBtns.forEach((btn, idx) => {
            if (idx + 1 === parseInt(ejeId)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Reposicionamiento suave al contenedor
    const scrollCont = document.getElementById('scrollContainer');
    if (scrollCont) {
        scrollCont.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

window.nextBienestarSlide = function() {
    if (window.currentBienestarSlide < window.totalBienestarSlides) {
        window.goToBienestarSlide(window.currentBienestarSlide + 1);
    }
};

window.prevBienestarSlide = function() {
    if (window.currentBienestarSlide > 1) {
        window.goToBienestarSlide(window.currentBienestarSlide - 1);
    }
};

window.switchBienestarEje = function(ejeNum, btn) {
    const ejeBtns = document.querySelectorAll('#bienestar-ejes-bar .c2-subtab-btn');
    ejeBtns.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    // Mapeo eje a primera slide
    const ejeStarts = { 1: 1, 2: 4, 3: 5, 4: 7, 5: 9, 6: 10, 7: 12 };
    const targetSlide = ejeStarts[ejeNum] || 1;
    window.goToBienestarSlide(targetSlide);
};

window.bienestarInit = function() {
    window.goToBienestarSlide(1);
};
