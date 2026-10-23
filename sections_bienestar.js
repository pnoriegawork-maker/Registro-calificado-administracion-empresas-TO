/* =========================================================
   BIENESTAR INSTITUCIONAL – MODELO INTEGRAL
   Corporación Escuela Tecnológica del Oriente (TO)
   Vigencia 2026 · Coordinación de Bienestar Institucional
   Coordinadora: Laura Juliana Suárez (Psicóloga Especialista)
   Diseño Homogéneo y Canónico basado en Condición 8 y Condición 9:
   - Diapositiva en PRIMER PLANO ABSOLUTO (sin banners que la desplacen hacia abajo)
   - Toolbar compacta integrada (Ejes + Píldoras 1..15 + Ant/Sig)
   - Transiciones inmediatas en el mismo plano sin saltos de scroll
   ========================================================= */

window.SECTIONS = window.SECTIONS || {};

window.SECTIONS['bienestar'] = `
<!-- =========================================================
     TOOLBAR INTEGRADA DE CONTROL COMPACTA (PRIMER PLANO)
     Ocupa solo 45px, dejando la presentación inmediatamente visible
     ========================================================= -->
<div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:6px 12px; margin-bottom:10px; box-shadow:0 2px 8px rgba(0,0,0,0.04); position:sticky; top:0; z-index:90; backdrop-filter:blur(8px);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
        <!-- Ejes Temáticos -->
        <div style="display:flex; align-items:center; gap:4px; flex-wrap:wrap;" id="bienestar-ejes-bar">
            <span style="font-size:0.68rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; margin-right:4px;">
                <i class="fas fa-layer-group" style="color:#F39200;"></i> Ejes:
            </span>
            <button onclick="switchBienestarEje(1)" data-bienestar-eje="1" class="bienestar-eje-btn active" style="background:#1A1A1B; color:#FFFFFF; border:1.5px solid #F39200; padding:4px 10px; border-radius:16px; font-size:0.68rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s;">
                <i class="fas fa-compass" style="color:#F39200;"></i> 1. Marco & Dimensiones
            </button>
            <button onclick="switchBienestarEje(2)" data-bienestar-eje="2" class="bienestar-eje-btn " style="background:#FFFFFF; color:#4A4A4A; border:1px solid #E2E8F0; padding:4px 10px; border-radius:16px; font-size:0.68rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s;">
                <i class="fas fa-route" style="color:#F39200;"></i> 2. Ruta de Permanencia
            </button>
            <button onclick="switchBienestarEje(3)" data-bienestar-eje="3" class="bienestar-eje-btn " style="background:#FFFFFF; color:#4A4A4A; border:1px solid #E2E8F0; padding:4px 10px; border-radius:16px; font-size:0.68rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s;">
                <i class="fas fa-clock" style="color:#F39200;"></i> 3. Horas & 5 Áreas
            </button>
            <button onclick="switchBienestarEje(4)" data-bienestar-eje="4" class="bienestar-eje-btn " style="background:#FFFFFF; color:#4A4A4A; border:1px solid #E2E8F0; padding:4px 10px; border-radius:16px; font-size:0.68rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s;">
                <i class="fas fa-users-cog" style="color:#F39200;"></i> 4. Presencial Mañana/Noche
            </button>
            <button onclick="switchBienestarEje(5)" data-bienestar-eje="5" class="bienestar-eje-btn " style="background:#FFFFFF; color:#4A4A4A; border:1px solid #E2E8F0; padding:4px 10px; border-radius:16px; font-size:0.68rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s;">
                <i class="fas fa-laptop-house" style="color:#F39200;"></i> 5. Ruta Virtual 3 Fases
            </button>
            <button onclick="switchBienestarEje(6)" data-bienestar-eje="6" class="bienestar-eje-btn " style="background:#FFFFFF; color:#4A4A4A; border:1px solid #E2E8F0; padding:4px 10px; border-radius:16px; font-size:0.68rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s;">
                <i class="fas fa-cogs" style="color:#F39200;"></i> 6. Modelo Sistémico
            </button>
            <button onclick="switchBienestarEje(7)" data-bienestar-eje="7" class="bienestar-eje-btn " style="background:#FFFFFF; color:#4A4A4A; border:1px solid #E2E8F0; padding:4px 10px; border-radius:16px; font-size:0.68rem; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s;">
                <i class="fas fa-camera-retro" style="color:#F39200;"></i> 7. Galería de Evidencias
            </button>
        </div>

        <!-- Píldoras 1..15 + Botones Ant / Sig + Contador -->
        <div style="display:flex; align-items:center; gap:4px; flex-wrap:wrap;">
            <button onclick="prevBienestarSlide()" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1E293B; border-radius:6px; padding:2px 8px; font-size:0.68rem; font-weight:700; cursor:pointer;" title="Diapositiva Anterior">
                <i class="fas fa-chevron-left"></i> Ant.
            </button>
            <div style="display:flex; align-items:center; gap:3px;" id="bienestar-pills-container">
                <button onclick="goToBienestarSlide(1)" class="bienestar-pill-btn active" data-bienestar-slide="1" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #F39200; background:#F39200; color:#FFFFFF; transition:all 0.15s; padding:0 4px;">
                    1
                </button>
                <button onclick="goToBienestarSlide(2)" class="bienestar-pill-btn " data-bienestar-slide="2" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    2
                </button>
                <button onclick="goToBienestarSlide(3)" class="bienestar-pill-btn " data-bienestar-slide="3" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    3
                </button>
                <button onclick="goToBienestarSlide(4)" class="bienestar-pill-btn " data-bienestar-slide="4" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    4
                </button>
                <button onclick="goToBienestarSlide(5)" class="bienestar-pill-btn " data-bienestar-slide="5" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    5
                </button>
                <button onclick="goToBienestarSlide(6)" class="bienestar-pill-btn " data-bienestar-slide="6" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    6
                </button>
                <button onclick="goToBienestarSlide(7)" class="bienestar-pill-btn " data-bienestar-slide="7" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    7
                </button>
                <button onclick="goToBienestarSlide(8)" class="bienestar-pill-btn " data-bienestar-slide="8" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    8
                </button>
                <button onclick="goToBienestarSlide(9)" class="bienestar-pill-btn " data-bienestar-slide="9" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    9
                </button>
                <button onclick="goToBienestarSlide(10)" class="bienestar-pill-btn " data-bienestar-slide="10" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    10
                </button>
                <button onclick="goToBienestarSlide(11)" class="bienestar-pill-btn " data-bienestar-slide="11" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    11
                </button>
                <button onclick="goToBienestarSlide(12)" class="bienestar-pill-btn " data-bienestar-slide="12" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    12
                </button>
                <button onclick="goToBienestarSlide(13)" class="bienestar-pill-btn " data-bienestar-slide="13" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    13
                </button>
                <button onclick="goToBienestarSlide(14)" class="bienestar-pill-btn " data-bienestar-slide="14" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    14
                </button>
                <button onclick="goToBienestarSlide(15)" class="bienestar-pill-btn " data-bienestar-slide="15" style="min-width:26px; height:24px; border-radius:12px; font-size:0.68rem; font-weight:700; cursor:pointer; border:1px solid #CBD5E1; background:#FFFFFF; color:#1A1A1B; transition:all 0.15s; padding:0 4px;">
                    15
                </button>
            </div>
            <button onclick="nextBienestarSlide()" style="background:#FFFFFF; border:1px solid #CBD5E1; color:#1E293B; border-radius:6px; padding:2px 8px; font-size:0.68rem; font-weight:700; cursor:pointer;" title="Siguiente Diapositiva">
                Sig. <i class="fas fa-chevron-right"></i>
            </button>
            <span id="bienestar-slide-num-label" style="background:#F39200; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px; margin-left:4px;">
                1 / 15
            </span>
        </div>
    </div>
</div>

<!-- =========================================================
     CONTENEDOR DE PANELES DE DIAPOSITIVAS (SLIDES 1 A 15)
     CADA DIAPOSITIVA APARECE DE INMEDIATO EN PRIMER PLANO
     ========================================================= -->
<div id="bienestar-panels-wrapper">
    <!-- DIAPOSITIVA 1 -->
    <div id="bienestar-slide-panel-1" class="bienestar-slide-panel active" data-bienestar-slide="1" data-eje="1" style="display:block;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_1.png" alt="Diapositiva 1" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 1 de 15 · PORTADA OFICIAL</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            1. Marco & Dimensiones
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 1 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Modelo Integral de Bienestar Institucional (Vigencia 2026)
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Estrategia Articulada para la Permanencia y Formación Integral · Administración de Empresas TO</p>
                </div>
                <span style="background:#F39200; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    PORTADA OFICIAL
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Dependencia Responsable</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Coordinación de Bienestar</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Liderazgo transversal articulado con la Vicerrectoría Académica y la Dirección de Programa.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Liderazgo Especializado</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Laura Juliana Suárez</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Psicóloga Especialista · Coordinadora de Bienestar Institucional TO.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Objetivo Superior</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Permanencia & Éxito Estudiantil</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Acompañamiento holístico bimodal orientado a mitigar la deserción y fortalecer los RAPs.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Alcance de Modalidades</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Bimodal Presencial & Virtual</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Cobertura unificada adaptada a las características psicopedagógicas de cada jornada y entorno digital.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                La Corporación Escuela Tecnológica del Oriente (<strong>TO</strong>) presenta el <strong>Modelo Integral de Bienestar Institucional</strong> como eje articulador de la formación integral del estudiante de <strong>Administración de Empresas</strong> en sus modalidades Presencial y Virtual, con directrices claras de acompañamiento psicosocial, permanencia con calidad y desarrollo de competencias para la vida.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 2 -->
    <div id="bienestar-slide-panel-2" class="bienestar-slide-panel " data-bienestar-slide="2" data-eje="1" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_2.png" alt="Diapositiva 2" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 2 de 15 · MARCO CONCEPTUAL</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            1. Marco & Dimensiones
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 2 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        ¿Qué es Bienestar Institucional? Propósitos y Dimensiones
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Formación Integral, Calidad de Vida y Construcción de Comunidad Universitaria</p>
                </div>
                <span style="background:#16A34A; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    MARCO CONCEPTUAL
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Dimensión 1</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Emocional</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Salud mental, escucha activa, resiliencia y asesoría psicológica individual y grupal.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Dimensión 2</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Física</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Deporte formativo, torneos polideportivos, hábitos saludables y pausas activas laborales.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Dimensión 3</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Social</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Integración comunitaria, expresiones culturales, tejido social y sentido de pertenencia TO.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Dimensión 4</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Académica</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Tutorías entre pares, refuerzo en competencias genéricas/específicas y hábitos de estudio.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                El bienestar en la TO trasciende el concepto asistencialista: se concibe como un <strong>ecosistema dinámico de desarrollo humano</strong> fundamentado en 3 propósitos esenciales: 1) Formación integral holística, 2) Mejoramiento continuo de la calidad de vida y 3) Construcción activa de tejido comunitario.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 3 -->
    <div id="bienestar-slide-panel-3" class="bienestar-slide-panel " data-bienestar-slide="3" data-eje="1" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_3.png" alt="Diapositiva 3" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 3 de 15 · CICLO DE VIDA</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            1. Marco & Dimensiones
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 3 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        ¿Cómo Aporta Bienestar a la Institución? Ciclo de Permanencia
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Flujo Continuo del Estudiante en la TO en 5 Momentos Estratégicos</p>
                </div>
                <span style="background:#0284C7; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    CICLO DE VIDA
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Hito 1</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">1. Ingreso & Acogida</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Inducción integral, prueba diagnóstica inicial y caracterización socioeconómica censal.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Hito 2</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">2. Acompañamiento</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Talleres psicopedagógicos, adaptación a la vida universitaria y monitorías formativas.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Hito 3</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">3. Seguimiento</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Monitoreo temprano de notas del primer corte y alertas tempranas en aula física y Moodle.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Hito 4</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">4. Permanencia</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Intervención oportuna ante riesgo de deserción por factores económicos, académicos o emocionales.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                El aporte estratégico de Bienestar radica en su <strong>ciclo cerrado de permanencia</strong> que acompaña al estudiante desde el primer día de inducción hasta su graduación e inserción laboral (OLE), garantizando tasas de retención superiores a los promedios nacionales del sistema SPADIES.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 4 -->
    <div id="bienestar-slide-panel-4" class="bienestar-slide-panel " data-bienestar-slide="4" data-eje="2" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_4.png" alt="Diapositiva 4" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 4 de 15 · ALERTAS TEMPRANAS</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            2. Ruta de Permanencia
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 4 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Ruta de Permanencia y Alertas Tempranas (Presencial vs. Virtual)
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Detección, Diagnóstico, Intervención y Seguimiento Diferenciado por Modalidad</p>
                </div>
                <span style="background:#EA580C; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    ALERTAS TEMPRANAS
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Ruta Presencial (4 Fases)</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Intervención en Sede</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">1. Detección docente en aula → 2. Tamizaje psicoeducativo en Bienestar → 3. Plan de acción individual → 4. Monitoreo semestral.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Ruta Virtual (3 Fases)</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Intervención Digital</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">1. Analítica de Moodle (>5 días sin ingresar) → 2. Contacto multicanal (WhatsApp/llamada) → 3. Tele-asesoría psicopedagógica sincrónica.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Articulación Docente</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Red de Alertas SAT</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">El docente reporta de forma temprana fallas de asistencia, desmotivación o bajo rendimiento en primer corte.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Indicador Clave</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Resolución < 48 Horas</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Protocolo de contacto inmediato y activación de acompañamiento familiar o económico en menos de 2 días.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                El sistema articula dos rutas rigurosas: la <strong>Ruta Presencial</strong>, apoyada en el contacto directo y observación del docente en aula; y la <strong>Ruta Virtual</strong>, basada en minería de datos de actividad en plataforma Moodle AWS y contacto empático personalizado.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 5 -->
    <div id="bienestar-slide-panel-5" class="bienestar-slide-panel " data-bienestar-slide="5" data-eje="3" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_5.png" alt="Diapositiva 5" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 5 de 15 · NORMATIVA INSTITUCIONAL</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            3. Horas & 5 Áreas
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 5 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Horas de Bienestar: Requisito Formativo Reglamentario
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Cumplimiento de 16 Horas Semestrales por Estudiante según Reglamento</p>
                </div>
                <span style="background:#F39200; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    NORMATIVA INSTITUCIONAL
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Norma Reglamentaria</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">16 Horas Semestrales</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Estipulado en el Reglamento Estudiantil TO como requisito formativo de permanencia con calidad.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Enfoque No Punitivo</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Formación para la Vida</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">No constituye una nota numérica sancionatoria, sino una vivencia integral para el crecimiento personal.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Flexibilidad de Registro</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Modalidades Mixtas</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Válido mediante asistencia a talleres presenciales, eventos deportivos, culturales o aulas Moodle.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Monitoreo SIGA</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Trazabilidad Digital</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Registro automatizado en la plataforma académica SIGA para certificación y paz y salvo de grado.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                El cumplimiento de las <strong>16 horas de bienestar por semestre</strong> asegura que ningún estudiante egrese sin haber enriquecido sus dimensiones socioafectiva, cultural y física, consolidando un perfil gerencial humanista con equilibrio emocional y liderazgo social.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 6 -->
    <div id="bienestar-slide-panel-6" class="bienestar-slide-panel " data-bienestar-slide="6" data-eje="3" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_6.png" alt="Diapositiva 6" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 6 de 15 · ÁREAS FUNCIONALES</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            3. Horas & 5 Áreas
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 6 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Las 5 Áreas de Despliegue de Bienestar Institucional
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Salud, Deporte, Cultura, Desarrollo Humano y Acompañamiento Socioeconómico</p>
                </div>
                <span style="background:#16A34A; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    ÁREAS FUNCIONALES
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Área 1</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Salud Integral</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Atención preventiva en enfermería, jornadas de salud visual, tamizaje cardiovascular y salud mental.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Área 2</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Deporte y Recreación</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Torneos interprogramas de futsal, voleibol, tenis de mesa, acondicionamiento y pausas activas.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Área 3</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Arte y Cultura</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Grupos de danzas, música, teatro, concursos de talento y semanas culturales multidisciplinarias.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Áreas 4 y 5</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Desarrollo & Socioeconómico</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Crecimiento personal, orientación vocacional, subsidios de alimentación y auxilio de transporte.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                La oferta de Bienestar se estructura en <strong>cinco líneas de acción programática</strong> que garantizan respuesta oportuna a las necesidades biopsicosociales y socioeconómicas del estudiantado de Administración de Empresas.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 7 -->
    <div id="bienestar-slide-panel-7" class="bienestar-slide-panel " data-bienestar-slide="7" data-eje="4" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_7.png" alt="Diapositiva 7" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 7 de 15 · CARACTERIZACIÓN PSICOSOCIAL</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            4. Presencial Mañana/Noche
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 7 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Caracterización Estudiantil Presencial: Mañana vs. Noche
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Diagnóstico Diferenciado de Necesidades, Hábitos y Factores de Riesgo</p>
                </div>
                <span style="background:#0284C7; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    CARACTERIZACIÓN PSICOSOCIAL
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Jornada Diurna (Mañana)</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Mala Gestión del Tiempo</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Estudiantes con tiempo disponible pero con hábitos de procrastinación, desorganización y dispersión digital.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Jornada Nocturna (Noche)</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Falta de Tiempo Real</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Estudiantes trabajadores activos, padres/madres de familia con sobrecarga laboral y fatiga física.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Riesgo Diurno</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Pérdida por Desinterés</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Requiere fortalecimiento en motivación vocacional, disciplina de estudio y acompañamiento tutorial.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Riesgo Nocturno</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Deserción por Sobrecarga</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Requiere flexibilización en entregas, pausas activas nocturnas y soporte asincrónico digital.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                La investigación empírica de Bienestar TO reveló una divergencia crítica: mientras en la jornada de la mañana la causa primaria es la <strong>mala gestión del tiempo</strong> (teniendo el tiempo pero usándolo ineficientemente), en la noche es la <strong>falta real de tiempo</strong> por jornada laboral completa de 8 horas.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 8 -->
    <div id="bienestar-slide-panel-8" class="bienestar-slide-panel " data-bienestar-slide="8" data-eje="4" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_8.png" alt="Diapositiva 8" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 8 de 15 · INTERVENCIÓN DIFERENCIADA</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            4. Presencial Mañana/Noche
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 8 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Estrategias de Intervención: Diurna vs. Nocturna
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Estructuración de Agendas para el Día y Flexibilización Empática para la Noche</p>
                </div>
                <span style="background:#EA580C; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    INTERVENCIÓN DIFERENCIADA
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Estrategia Mañana</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Estructuración & Hábitos</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Talleres de bloques de tiempo (Técnica Pomodoro), agendas semanales obligatorias y grupos de estudio dirigidos.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Estrategia Noche</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Flexibilización & Alivio</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Cápsulas virtuales asincrónicas, pausas activas desestresantes a las 8:00 PM y canales ágiles por WhatsApp.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Acompañamiento Psicológico</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Horarios Extendidos</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Consultorio de Bienestar disponible hasta las 9:30 PM en Sede A para atención directa de estudiantes nocturnos.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Impacto Evaluado</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Reducción de Deserción</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Aumento del 18% en permanencia nocturna al adaptar los tiempos de evaluación y asesoría.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                La TO no aplica fórmulas genéricas: las intervenciones de Bienestar se adaptan quirúrgicamente a la realidad laboral de la noche y al perfil juvenil de la mañana, logrando una equidad sustantiva en las oportunidades de culminación académica.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 9 -->
    <div id="bienestar-slide-panel-9" class="bienestar-slide-panel " data-bienestar-slide="9" data-eje="5" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_9.png" alt="Diapositiva 9" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 9 de 15 · MODALIDAD VIRTUAL</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            5. Ruta Virtual 3 Fases
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 9 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Ruta de Acompañamiento en Modalidad Virtual en 3 Fases
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Detección Temprana por Analítica de Aprendizaje, Aulas de Bienestar y Tele-Orientación</p>
                </div>
                <span style="background:#0284C7; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    MODALIDAD VIRTUAL
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Fase 1: Detección</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Monitoreo Moodle AWS</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Detección automática de estudiantes con inactividad superior a 5 días o sin entrega de primera tarea.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Fase 2: Psicoeducación</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Aula Virtual de Bienestar</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Cápsulas interactivas 24/7 sobre Salud Mental, Manejo del Estrés, Resiliencia y Habilidades Blandas.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Fase 3: Apoyo Individual</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Tele-Psicología Sincrónica</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Sesiones personalizadas por Google Meet / Teams con la psicóloga especialista para contención emocional.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Canales Ágiles</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Línea WhatsApp Bienestar</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Canal institucional directo de atención y resolución ágil de inquietudes para estudiantes de todo el país.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                Para la modalidad 100% Virtual, Bienestar despliega una <strong>estrategia no invasiva pero altamente protectora</strong> que combina alertas predictivas en Moodle, contenidos modulares de auto-cuidado y citas sincrónicas de tele-orientación con la psicóloga coordinadora.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 10 -->
    <div id="bienestar-slide-panel-10" class="bienestar-slide-panel " data-bienestar-slide="10" data-eje="6" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_10.png" alt="Diapositiva 10" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 10 de 15 · ENGRANAJES ARTICULADOS</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            6. Modelo Sistémico
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 10 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        El Modelo Sistémico de Bienestar TO: 5 Engranajes
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Articulación entre Estudiante, Docente, Coordinación, Bienestar y Familia</p>
                </div>
                <span style="background:#16A34A; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    ENGRANAJES ARTICULADOS
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Engranaje 1 y 2</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Estudiante & Docente</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">El estudiante como centro activo y el docente tutor como sensor primario de alertas en el aula.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Engranaje 3 y 4</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Coordinación & Bienestar</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Dirección de Programa canaliza necesidades curriculares y Bienestar despliega la intervención clínica y social.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Engranaje 5</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Familia & Entorno</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Vinculación de la red familiar como soporte de permanencia en situaciones de vulnerabilidad socioeconómica.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Sinergia Total</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Comité de Permanencia</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Reuniones quincenales para evaluación colegiada de casos críticos y seguimiento a acuerdos.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                El modelo no opera como un departamento aislado: funciona como un <strong>engranaje institucional continuo</strong> donde ninguna alarma se pierde y cada caso recibe respaldo coordinado de las instancias académicas, administrativas y psicosociales.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 11 -->
    <div id="bienestar-slide-panel-11" class="bienestar-slide-panel " data-bienestar-slide="11" data-eje="6" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_11.png" alt="Diapositiva 11" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 11 de 15 · ENFOQUE PEDAGÓGICO</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            6. Modelo Sistémico
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 11 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Enfoque de Intervención: De lo Reactivo a lo Preventivo
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Cultura de Autocuidado, Diagnóstico Temprano y Formación Socioemocional</p>
                </div>
                <span style="background:#F39200; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    ENFOQUE PEDAGÓGICO
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Paradigma Tradicional</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Intervención Reactiva</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Esperar a que el estudiante repruebe o abandone la universidad para intentar una acción de salvamento tardía.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Paradigma TO Vigente</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Prevención Proactiva</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Tamizaje censal de ingreso, alerta temprana al primer síntoma y desarrollo preventivo de resiliencia.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Formación en Habilidades</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Inteligencia Emocional</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Talleres obligatorios de liderazgo, manejo de la frustración, comunicación asertiva y empatía gerencial.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Impacto Medible</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Cultura de Salud Mental</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Desestigmatización de la consulta psicológica, logrando más de 450 atenciones preventivas al año.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                El manifiesto formativo de Bienestar TO prioriza la <strong>intervención temprana y preventiva</strong>: cuando un estudiante de Administración de Empresas manifiesta dificultades, la institución ya cuenta con un mapa de factores de riesgo y una respuesta estructurada antes de que ocurra la pérdida académica.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 12 -->
    <div id="bienestar-slide-panel-12" class="bienestar-slide-panel " data-bienestar-slide="12" data-eje="7" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_12.png" alt="Diapositiva 12" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 12 de 15 · EVIDENCIA FOTOGRÁFICA</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            7. Galería de Evidencias
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 12 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Evidencias Reales de Acompañamiento y Vida Universitaria
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Integración en Aula, Torneos Deportivos y Actividades Psicoeducativas</p>
                </div>
                <span style="background:#0284C7; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    EVIDENCIA FOTOGRÁFICA
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Fotografía 1</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Talleres de Aula</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Talleres lúdico-formativos de manejo del estrés y trabajo en equipo impartidos directamente en los salones de clase.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Fotografía 2</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Deporte Formativo</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Torneos relámpago de futsal masculino y femenino en canchas polideportivas con alta participación estudiantil.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Fotografía 3</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Pausas Activas</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Jornadas de desconexión física y estiramiento ergonómico tanto en aulas diurnas como nocturnas y personal docente.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Fotografía 4</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Jornadas de Salud</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Brigadas de tamizaje de salud visual, odontología preventiva y apoyo en vacunación para toda la comunidad.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                El registro fotográfico auténtico de la diapositiva 12 evidencia la <strong>dinámica viva y cotidiana de Bienestar TO</strong>: actividades que impactan el aula, la cancha deportiva y los espacios de descanso institucional.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 13 -->
    <div id="bienestar-slide-panel-13" class="bienestar-slide-panel " data-bienestar-slide="13" data-eje="7" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_13.png" alt="Diapositiva 13" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 13 de 15 · VIDA ESTUDIANTIL</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            7. Galería de Evidencias
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 13 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Deporte, Convivencia y Tejido Comunitario TO
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Participación Activa de Estudiantes de Administración de Empresas en Eventos</p>
                </div>
                <span style="background:#16A34A; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    VIDA ESTUDIANTIL
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Sentido de Pertenencia</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Identidad Deportiva</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Conformación de equipos del programa en torneos interuniversitarios de Bucaramanga y el área metropolitana.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Salud Emocional</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Canalización del Estrés</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">El deporte como herramienta metódica para reducir los niveles de ansiedad y promover el juego limpio.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Integración Bimodal</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Encuentros Deportivos</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Invitación a estudiantes virtuales radicados en Santander para integrarse a las jornadas presenciales de convivencia.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Reconocimiento</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Premiación & Mérito</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Estímulos institucionales y reconocimiento público en los actos de clausura de semestre de la institución.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                La diapositiva 13 documenta la energía y fraternidad de los torneos de futsal y voleibol, espacios fundamentales donde se fortalecen las habilidades de liderazgo gerencial, negociación y trabajo en equipo.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 14 -->
    <div id="bienestar-slide-panel-14" class="bienestar-slide-panel " data-bienestar-slide="14" data-eje="7" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_14.png" alt="Diapositiva 14" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 14 de 15 · INCLUSIÓN DECRETO 1421</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            7. Galería de Evidencias
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 14 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Inclusión, Equidad y Protocolos de Diversidad (Decreto 1421)
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Acompañamiento a Estudiantes con Discapacidad, Enfoque Diferencial y PIAR</p>
                </div>
                <span style="background:#EA580C; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    INCLUSIÓN DECRETO 1421
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Marco Normativo</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Decreto 1421 de 2017</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Protocolo institucional de educación inclusiva, ajustes razonables y diseño universal de aprendizaje (DUA).</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Herramienta PIAR</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Planes Individuales</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Formulación concertada del Plan Individual de Ajustes Razonables (PIAR) entre Bienestar y cada docente.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Accesibilidad Física</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Rampas y Ergonomía</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Sedes A, B y C acondicionadas con rampas de acceso, baños adaptados y señalética inclusiva en braille.</div>
                </div>
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Accesibilidad Digital</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Moodle Accesible</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Plataforma virtual compatible con lectores de pantalla (NVDA, JAWS) y materiales transcritos con alto contraste.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                En cumplimiento estricto del <strong>Decreto 1421 de 2017</strong>, la TO garantiza una política integral de inclusión que asegura ajustes curriculares (PIAR), adaptaciones de medios educativos y contención psicológica personalizada para todo estudiante con capacidades diversas.
            </p>
        </div>

    </div>
    <!-- DIAPOSITIVA 15 -->
    <div id="bienestar-slide-panel-15" class="bienestar-slide-panel " data-bienestar-slide="15" data-eje="7" style="display:none;">
        
        <!-- =========================================================
             PRESENTACIÓN EN PRIMER PLANO ABSOLUTO (CINE-FRAME)
             Ubicada directamente en la parte superior sin desplazamientos
             ========================================================= -->
        <div style="background:#0F172A; border-radius:10px; padding:6px; margin-bottom:12px; box-shadow:0 6px 20px rgba(0,0,0,0.16); text-align:center;">
            <img src="assets/bienestar/slide_15.png" alt="Diapositiva 15" style="max-width:100%; height:auto; max-height:calc(100vh - 170px); object-fit:contain; border-radius:6px; display:inline-block; cursor:zoom-in; transition:transform 0.2s; box-shadow:0 4px 14px rgba(0,0,0,0.4);" onclick="window.open(this.src, '_blank')" title="Clic para ampliar en resolución original (3000x1688 Ultra HD)">
            <div style="font-size:0.68rem; color:#94A3B8; margin-top:4px; display:flex; justify-content:center; align-items:center; gap:8px;">
                <span><i class="fas fa-search-plus" style="color:#F39200;"></i> Clic sobre la diapositiva para ampliar en alta definición (3000 × 1688)</span>
                <span>•</span>
                <span><i class="fas fa-check-circle" style="color:#10B981;"></i> Diapositiva 15 de 15 · CIERRE INSTITUCIONAL</span>
            </div>
        </div>

        <!-- =========================================================
             CONTENIDO INTERACTIVO Y ENRIQUECIDO DEBAJO DE LA PRESENTACIÓN
             ========================================================= -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:16px 18px; margin-top:10px; box-shadow:0 3px 12px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px; flex-wrap:wrap; gap:8px;">
                <div>
                    <div style="display:flex; align-items:center; gap:6px; margin-bottom:2px;">
                        <span style="background:rgba(243,146,0,0.15); color:#F39200; font-size:0.66rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase;">
                            7. Galería de Evidencias
                        </span>
                        <span style="color:#64748B; font-size:0.7rem; font-weight:700;">Diapositiva 15 de 15</span>
                    </div>
                    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.02rem; font-weight:800; color:#1A1A1B; margin:0;">
                        Acreditación Institucional y Canales Oficiales de Bienestar
                    </h4>
                    <p style="font-size:0.74rem; color:#64748B; margin:2px 0 0;">Compromiso de Calidad con la Renovación del Registro Calificado Único</p>
                </div>
                <span style="background:#F39200; color:#FFFFFF; font-size:0.66rem; font-weight:800; padding:3px 10px; border-radius:10px;">
                    CIERRE INSTITUCIONAL
                </span>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:10px; margin-bottom:12px;">
                <div style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-radius:8px; padding:12px; border-left:4px solid #F39200;">
                    <div style="font-size:0.66rem; color:#F39200; font-weight:800; text-transform:uppercase;">Sede Principal</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#FFFFFF; margin:2px 0;">Sede A Bucaramanga</div>
                    <div style="font-size:0.73rem; color:#D1D1D1; line-height:1.4;">Calle 41 N.° 10 - 30 Centro · Consultorio de Bienestar Institucional (Piso 2).</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #FED7AA; border-radius:8px; padding:12px; border-left:4px solid #EA580C;">
                    <div style="font-size:0.66rem; color:#EA580C; font-weight:800; text-transform:uppercase;">Atención Digital</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Línea Directa & Moodle</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Portal institucional Moodle: Aula 'Bienestar Estudiantil TO' disponible 24/7.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BBF7D0; border-radius:8px; padding:12px; border-left:4px solid #16A34A;">
                    <div style="font-size:0.66rem; color:#16A34A; font-weight:800; text-transform:uppercase;">Garantía de Calidad</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Decreto 1330 de 2019</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">Evidencia plena de suficiencia y madurez institucional para la renovación del registro por 7 años.</div>
                </div>
                <div style="background:#FFFFFF; border:1px solid #BAE6FD; border-radius:8px; padding:12px; border-left:4px solid #0284C7;">
                    <div style="font-size:0.66rem; color:#0284C7; font-weight:800; text-transform:uppercase;">Contacto de Coordinación</div>
                    <div style="font-size:0.92rem; font-weight:800; font-family:'Montserrat',sans-serif; color:#1A1A1B; margin:2px 0;">Psic. Laura Juliana Suárez</div>
                    <div style="font-size:0.73rem; color:#64748B; line-height:1.4;">bienestar@tecnologicadeloriente.edu.co · PBX: (607) 670 6000 Bucaramanga.</div>
                </div>
            </div>
            <p style="font-size:0.81rem; color:#475569; line-height:1.5; margin:0;">
                La diapositiva de cierre formaliza el compromiso irrestricto de la <strong>Corporación Escuela Tecnológica del Oriente</strong> con el bienestar integral de la comunidad universitaria de Administración de Empresas, sustentando con evidencias plenas el cumplimiento de las condiciones de calidad.
            </p>
        </div>

    </div>
</div>
`;

// =========================================================
// SCRIPTS DE CONTROL Y NAVEGACIÓN EN PRIMER PLANO
// SIN SALTOS NI DESPLAZAMIENTOS BRUSCOS
// =========================================================
window.currentBienestarSlide = 1;
window.totalBienestarSlides = 15;

window.goToBienestarSlide = function(num) {
    if (num < 1 || num > window.totalBienestarSlides) return;
    window.currentBienestarSlide = num;

    // 1. Alternar visualización de paneles inmediatamente sin scroll
    for (let i = 1; i <= window.totalBienestarSlides; i++) {
        const p = document.getElementById('bienestar-slide-panel-' + i);
        if (p) {
            p.style.display = (i === num) ? 'block' : 'none';
        }
    }

    // 2. Actualizar píldoras numeradas
    document.querySelectorAll('.bienestar-pill-btn').forEach(pill => {
        const sNum = parseInt(pill.getAttribute('data-bienestar-slide'));
        if (sNum === num) {
            pill.style.background = '#F39200';
            pill.style.color = '#FFFFFF';
            pill.style.borderColor = '#F39200';
        } else {
            pill.style.background = '#FFFFFF';
            pill.style.color = '#1A1A1B';
            pill.style.borderColor = '#CBD5E1';
        }
    });

    // 3. Sincronizar etiqueta de contador
    const lbl = document.getElementById('bienestar-slide-num-label');
    if (lbl) lbl.textContent = num + ' / 15';

    // 4. Sincronizar botón de Eje activo
    const currentPanel = document.getElementById('bienestar-slide-panel-' + num);
    if (currentPanel) {
        const ejeId = currentPanel.getAttribute('data-eje');
        document.querySelectorAll('.bienestar-eje-btn').forEach(btn => {
            const bEje = btn.getAttribute('data-bienestar-eje');
            if (bEje === ejeId) {
                btn.style.background = '#1A1A1B';
                btn.style.color = '#FFFFFF';
                btn.style.borderColor = '#F39200';
            } else {
                btn.style.background = '#FFFFFF';
                btn.style.color = '#4A4A4A';
                btn.style.borderColor = '#E2E8F0';
            }
        });
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

window.switchBienestarEje = function(ejeNum) {
    const ejeStarts = { 1: 1, 2: 4, 3: 5, 4: 7, 5: 9, 6: 10, 7: 12 };
    const target = ejeStarts[ejeNum] || 1;
    window.goToBienestarSlide(target);
};

window.bienestarInit = function() {
    window.goToBienestarSlide(1);
};
