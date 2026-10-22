/* =========================================================
   CONDICIÓN 6 – RELACIÓN CON EL SECTOR EXTERNO
   Administración de Empresas · Registro Calificado Único (Presencial & Virtual) · TO
   Marco Normativo: Decreto 1330 de 2019
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c6'] = `
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-left:5px solid #F39200; padding:18px 22px; border-radius:12px; margin-bottom:20px; box-shadow:0 4px 18px rgba(0,0,0,0.12);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <span style="background:#F39200; color:#FFFFFF; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">
                    Condición de Programa 6
                </span>
                <span style="color:#D1D1D1; font-size:0.75rem;">Decreto 1330 de 2019 · Articulación Universidad - Empresa - Estado - Sociedad</span>
            </div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.26rem; font-weight:800; color:#FFFFFF; margin:0 0 4px; display:flex; align-items:center; gap:10px;">
                <i class="fas fa-handshake" style="color:#F39200;"></i> Relación con el Sector Externo y Proyección Social
            </h4>
            <p style="color:#D1D1D1; font-size:0.86rem; margin:0; line-height:1.45; max-width:950px;">
                Materialización integral del relacionamiento con el entorno productivo y social: alianza CUEES Santander (Tabla 48), oferta de Educación Continua (Tabla 49), Proyección Social en ambas modalidades (Numeral 6.7), indicadores de impacto a 7 años (Tabla 51), visión prospectiva del CIDRE y red de convenios estratégicos.
            </p>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span style="background:rgba(243,146,0,0.22); color:#F39200; border:1px solid #F39200; font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-briefcase mr-1"></i> Consultorio CIDRE
            </span>
            <span style="background:rgba(255,255,255,0.1); color:#FFFFFF; border:1px solid rgba(255,255,255,0.3); font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-network-wired mr-1"></i> Alianza CUEES
            </span>
            <span style="background:rgba(22,163,74,0.2); color:#4ADE80; border:1px solid #22C55E; font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-graduation-cap mr-1"></i> Educación Continua
            </span>
        </div>
    </div>
</div>

<!-- BARRA DE SUBSECCIONES EN PRIMER PLANO -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:10px 14px; margin-bottom:20px; box-shadow:0 3px 12px rgba(0,0,0,0.04); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
    <span style="font-size:0.74rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:flex; align-items:center; gap:6px;">
        <i class="fas fa-sitemap" style="color:#F39200;"></i> Ejes de Sustentación C6:
    </span>
    <div style="display:flex; flex-wrap:wrap; gap:6px;">
        <button class="c6-pill-btn active" onclick="switchC6Sub('c6-sec-cuees', this)" style="background:#1A1A1B; color:#FFFFFF; border:1px solid #F39200; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer; transition:all 0.2s;">
            1. Articulación CUEES (Tabla 48)
        </button>
        <button class="c6-pill-btn" onclick="switchC6Sub('c6-sec-edu-continua', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer; transition:all 0.2s;">
            2. Educación Continua (Tabla 49)
        </button>
        <button class="c6-pill-btn" onclick="switchC6Sub('c6-sec-proyeccion', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer; transition:all 0.2s;">
            3. Proyección Social (Num. 6.7)
        </button>
        <button class="c6-pill-btn" onclick="switchC6Sub('c6-sec-indicadores', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer; transition:all 0.2s;">
            4. Indicadores a 7 Años (Tabla 51)
        </button>
        <button class="c6-pill-btn" onclick="switchC6Sub('c6-sec-cidre', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer; transition:all 0.2s;">
            5. Prospectiva CIDRE &amp; Sinergia CUEES
        </button>
        <button class="c6-pill-btn" onclick="switchC6Sub('c6-sec-convenios', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer; transition:all 0.2s;">
            6. Convenios y Redes Estratégicas
        </button>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 1: ARTICULACIÓN CUEES (TABLA 48 & ESTADÍSTICA DESCRIPTIVA)
     ========================================================= -->
<div id="c6-sec-cuees" class="c6-sub-panel" style="display:block;">
    <!-- Encabezado y Contexto CUEES -->
    <div style="background:linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 100%); border:1.5px solid #FED7AA; border-left:5px solid #EA580C; border-radius:10px; padding:16px 20px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:8px;">
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#9A3412; margin:0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-network-wired" style="color:#EA580C;"></i> 6.5. Articulación Universidad – Empresa – Estado (CUEES Santander)
            </h4>
            <span style="font-size:0.72rem; color:#9A3412; font-weight:800; background:#FFEDD5; padding:3px 10px; border-radius:4px; text-transform:uppercase;">
                Ecosistema Regional de Innovación
            </span>
        </div>
        <p style="font-size:0.82rem; color:#4B5563; line-height:1.5; margin:0;">
            A través del <strong>Comité Universidad-Empresa-Estado (CUEES Santander)</strong>, la Corporación Escuela Tecnológica del Oriente fomenta el encuentro sistemático entre el tejido empresarial, la academia y los entes gubernamentales. Mediante relaciones de confianza y el aprovechamiento de las capacidades científicas y tecnológicas institucionales, el programa de Administración de Empresas ejecuta proyectos y talleres concretos para resolver problemáticas reales del sector productivo.
        </p>
    </div>

    <!-- Bloque de Estadística Descriptiva de Impacto Positivo -->
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:20px;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #EA580C; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:1.85rem; font-weight:900; color:#EA580C; font-family:'Montserrat',sans-serif;">537</div>
            <div style="font-size:0.72rem; color:#1E293B; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-top:2px;">Beneficiarios Directos</div>
            <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Estudiantes, emprendedores y empresarios</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #16A34A; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:1.85rem; font-weight:900; color:#16A34A; font-family:'Montserrat',sans-serif;">10</div>
            <div style="font-size:0.72rem; color:#1E293B; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-top:2px;">Actividades Articuladas</div>
            <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Talleres, mesas sectoriales y cursos</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #0284C7; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:1.85rem; font-weight:900; color:#0284C7; font-family:'Montserrat',sans-serif;">9</div>
            <div style="font-size:0.72rem; color:#1E293B; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-top:2px;">Actores Productivos</div>
            <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Fondo Emprender, iNNpulsa, Fenalco, Cajasan, etc.</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #7C3AED; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:1.85rem; font-weight:900; color:#7C3AED; font-family:'Montserrat',sans-serif;">53.7</div>
            <div style="font-size:0.72rem; color:#1E293B; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-top:2px;">Promedio Asistentes</div>
            <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Alta densidad participativa por evento</div>
        </div>
    </div>

    <!-- Gráfica Chart.js y Análisis Estadístico Descriptivo -->
    <div style="display:grid; grid-template-columns:1.3fr 1fr; gap:16px; margin-bottom:20px; align-items:start;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                <h5 style="margin:0; font-family:'Montserrat',sans-serif; font-size:0.88rem; font-weight:800; color:#1A1A1B;">
                    <i class="fas fa-chart-bar" style="color:#EA580C; margin-right:6px;"></i> Cobertura de Beneficiarios por Actividad Articulada (CUEES)
                </h5>
                <span style="font-size:0.68rem; font-weight:700; color:#64748B;">Fuente: Documento Maestro · Tabla 48</span>
            </div>
            <div style="max-height:240px; position:relative;">
                <canvas id="c6CueesChart" style="max-height:240px;"></canvas>
            </div>
        </div>

        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <h5 style="margin:0 0 10px; font-family:'Montserrat',sans-serif; font-size:0.88rem; font-weight:800; color:#1A1A1B;">
                    <i class="fas fa-microscope" style="color:#16A34A; margin-right:6px;"></i> Estadística Descriptiva &amp; Hallazgos Clave
                </h5>
                <ul style="margin:0; padding-left:18px; font-size:0.76rem; color:#475569; line-height:1.55;">
                    <li><strong>Alta Tasa de Participación en Emprendimiento (27.9%):</strong> 150 beneficiarios en talleres metodológicos clave (Lean Canvas, Design Thinking con <em>iNNpulsa</em> y Fondo Emprender).</li>
                    <li><strong>Fortalecimiento a Microempresas (28.9%):</strong> 155 participantes articulados con <em>IMEBU</em>, <em>COOPFUTURO</em> y el programa de Ángeles Inversionistas.</li>
                    <li><strong>Sostenibilidad y Economía Circular (14.7%):</strong> 79 beneficiarios en iniciativas con <em>Pacto Global</em>, <em>Cajasan</em> y la <em>Cámara de Comercio de Bucaramanga</em>.</li>
                    <li><strong>Articulación Sectorial y Gremial (28.5%):</strong> 153 participantes en mesas sectoriales de educación (Fenalco), habilidades empresariales (FEDECACAO) y desarrollo cultural.</li>
                </ul>
            </div>
            <div style="margin-top:12px; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:6px; padding:10px; font-size:0.72rem; color:#334155;">
                <i class="fas fa-check-circle" style="color:#16A34A; margin-right:4px;"></i> <strong>Impacto Demostrado:</strong> Evidencia empírica de relacionamiento dinámico, continuo y verificable durante la vigencia del registro calificado.
            </div>
        </div>
    </div>

    <!-- Tabla 48 Oficial Canónica -->
    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
            <h4 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0;">
                <i class="fas fa-table" style="color:#EA580C; margin-right:6px;"></i> Tabla 48. Actividades articuladas con el CUUES (CUEES Santander)
            </h4>
            <span style="font-size:0.7rem; color:#64748B; font-weight:700;">Fuente: Construcción del Programa · Anexo 2 Documento Maestro</span>
        </div>
        <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; font-size:0.76rem;">
                <thead>
                    <tr style="background:#1A1A1B; color:#FFFFFF;">
                        <th style="padding:10px 12px; text-align:center; border:1px solid #334155; width:80px;">Periodo</th>
                        <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Actividad o Proyecto</th>
                        <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Sector Externo Participante</th>
                        <th style="padding:10px 12px; text-align:center; border:1px solid #334155; width:100px;">Beneficiarios</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#EA580C; background:#FFF7ED;">2021-2</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Taller Lean Canvas</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;"><span style="background:#EFF6FF; color:#1D4ED8; font-weight:700; padding:2px 8px; border-radius:4px;">Fondo Emprender</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">40</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#EA580C; background:#FFF7ED;">2021-2</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Conferencia: del Aula al Trabajo</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;"><span style="background:#FEF3C7; color:#B45309; font-weight:700; padding:2px 8px; border-radius:4px;">Protección</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">35</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#EA580C; background:#FFF7ED;">2021-2</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Taller Herramientas de Innovación para Emprendedores Design Thinking</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;"><span style="background:#EFF6FF; color:#1D4ED8; font-weight:700; padding:2px 8px; border-radius:4px;">iNNpulsa Colombia</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">25</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#0284C7; background:#F0F9FF;">2022-1</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Mesa Sectorial de Educación</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;"><span style="background:#F3E8FF; color:#7E22CE; font-weight:700; padding:2px 8px; border-radius:4px;">Fenalco Santander</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">55</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#0284C7; background:#F0F9FF;">2022-1</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Talleres de Fortalecimiento Empresarial</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">IMEBU - COOPFUTURO</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">80</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#7C3AED; background:#FAF5FF;">2022-2</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Muestra de Emprendimientos: Unidades productivas</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">IMEBU - Fondo Emprender - Ángeles Inversionistas</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">75</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#7C3AED; background:#FAF5FF;">2022-2</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Taller "VIVIENDO CAMBIOS - ASUMIENDO RETOS"</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;"><span style="background:#FEE2E2; color:#B91C1C; font-weight:700; padding:2px 8px; border-radius:4px;">Centro Cultural del Oriente</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">80</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#7C3AED; background:#FAF5FF;">2022-2</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Curso de Economía Circular</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;"><span style="background:#E0E7FF; color:#3730A3; font-weight:700; padding:2px 8px; border-radius:4px;">Cajasan - Cámara de Comercio de Bucaramanga - Pacto Global</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">35</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#7C3AED; background:#FAF5FF;">2022-2</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Taller Lean Canvas y la Importancia de las Habilidades Blandas y Empresariales</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;"><span style="background:#FEF3C7; color:#92400E; font-weight:700; padding:2px 8px; border-radius:4px;">FEDECACAO</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">68</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">2023-1</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Proyecto Pacto Global Escuela de Pymes Sostenibles</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;"><span style="background:#E0E7FF; color:#3730A3; font-weight:700; padding:2px 8px; border-radius:4px;">Cajasan</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">44</td>
                    </tr>
                    <!-- Total Consolidado -->
                    <tr style="background:#1A1A1B; color:#FFFFFF; font-weight:800;">
                        <td colspan="3" style="padding:10px 12px; text-align:right; border:1px solid #334155; font-family:'Montserrat'; letter-spacing:0.5px;">TOTAL BENEFICIARIOS ARTICULADOS CUEES:</td>
                        <td style="padding:10px 12px; text-align:center; border:1px solid #334155; font-size:0.95rem; color:#FBBF24; font-family:'Montserrat';">537</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 2: EDUCACIÓN CONTINUA (NUMERAL 6.6.1 & TABLA 49)
     ========================================================= -->
<div id="c6-sec-edu-continua" class="c6-sub-panel" style="display:none;">
    <!-- Encabezado y Descripción Conceptual Numeral 6.6.1 -->
    <div style="background:linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%); border:1.5px solid #BBF7D0; border-left:5px solid #16A34A; border-radius:10px; padding:16px 20px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:8px;">
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#14532D; margin:0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-graduation-cap" style="color:#16A34A;"></i> 6.6.1. Educación Continua · Marco Institucional TO
            </h4>
            <span style="font-size:0.72rem; color:#14532D; font-weight:800; background:#DCFCE7; padding:3px 10px; border-radius:4px; text-transform:uppercase;">
                Actualización y Cualificación Permanente
            </span>
        </div>
        <p style="font-size:0.82rem; color:#4B5563; line-height:1.55; margin:0 0 10px;">
            La Educación Continua en la <strong>Corporación Escuela Tecnológica del Oriente</strong> se concibe como el conjunto de procesos formativos flexibles y dinámicos que posibilitan la actualización, profundización y adquisición de competencias en áreas científicas, tecnológicas y de gestión administrativa. No otorga títulos académicos formales conducentes a grado, pero entrega <strong>certificados de aprobación y asistencia con rigor académico institucional</strong>.
        </p>
        <div style="display:flex; flex-wrap:wrap; gap:8px; font-size:0.72rem;">
            <span style="background:#FFFFFF; border:1px solid #86EFAC; color:#166534; font-weight:700; padding:3px 8px; border-radius:4px;"><i class="fas fa-certificate mr-1"></i>Diplomados (80–120 h)</span>
            <span style="background:#FFFFFF; border:1px solid #86EFAC; color:#166534; font-weight:700; padding:3px 8px; border-radius:4px;"><i class="fas fa-book-reader mr-1"></i>Cursos de Actualización (20–40 h)</span>
            <span style="background:#FFFFFF; border:1px solid #86EFAC; color:#166534; font-weight:700; padding:3px 8px; border-radius:4px;"><i class="fas fa-users-cog mr-1"></i>Seminarios &amp; Talleres (8–16 h)</span>
            <span style="background:#FFFFFF; border:1px solid #86EFAC; color:#166534; font-weight:700; padding:3px 8px; border-radius:4px;"><i class="fas fa-globe mr-1"></i>Congresos &amp; Simposios (2–5 días)</span>
        </div>
    </div>

    <!-- Indicadores de Impacto y Alineación Estándares -->
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:20px;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #16A34A; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:1.85rem; font-weight:900; color:#16A34A; font-family:'Montserrat',sans-serif;">128</div>
            <div style="font-size:0.72rem; color:#1E293B; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-top:2px;">Participantes Programa</div>
            <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Estudiantes Admon. de Empresas</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #0284C7; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:1.85rem; font-weight:900; color:#0284C7; font-family:'Montserrat',sans-serif;">1.628</div>
            <div style="font-size:0.72rem; color:#1E293B; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-top:2px;">Asistentes Congresos</div>
            <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Eventos masivos sector externo</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #F59E0B; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:1.85rem; font-weight:900; color:#D97706; font-family:'Montserrat',sans-serif;">100%</div>
            <div style="font-size:0.72rem; color:#1E293B; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-top:2px;">Estándares Globales</div>
            <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">PMI, PMBOK, SCRUM, ISO 21502</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #7C3AED; border-radius:10px; padding:14px; text-align:center; box-shadow:0 2px 6px rgba(0,0,0,0.03);">
            <div style="font-size:1.85rem; font-weight:900; color:#7C3AED; font-family:'Montserrat',sans-serif;">8</div>
            <div style="font-size:0.72rem; color:#1E293B; font-weight:800; text-transform:uppercase; letter-spacing:0.5px; margin-top:2px;">Ofertas Concluidas</div>
            <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Cohortes ejecutadas 2021–2024</div>
        </div>
    </div>

    <!-- Gráfica de Tendencia y Aspectos Positivos -->
    <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:16px; margin-bottom:20px; align-items:start;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
                <h5 style="margin:0; font-family:'Montserrat',sans-serif; font-size:0.88rem; font-weight:800; color:#1A1A1B;">
                    <i class="fas fa-chart-line" style="color:#16A34A; margin-right:6px;"></i> Tendencia y Progresión de Participantes en Educación Continua
                </h5>
                <span style="font-size:0.68rem; font-weight:700; color:#64748B;">Fuente: Tabla 49 DM</span>
            </div>
            <div style="max-height:220px; position:relative;">
                <canvas id="c6EduContinuaChart" style="max-height:220px;"></canvas>
            </div>
        </div>

        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px;">
            <h5 style="margin:0 0 10px; font-family:'Montserrat',sans-serif; font-size:0.88rem; font-weight:800; color:#1A1A1B;">
                <i class="fas fa-award" style="color:#F59E0B; margin-right:6px;"></i> Aspectos Positivos &amp; Diferenciadores
            </h5>
            <div style="display:grid; gap:8px; font-size:0.76rem; color:#475569;">
                <div style="background:#F8FAFC; border-left:3px solid #16A34A; padding:8px 10px; border-radius:4px;">
                    <strong style="color:#1E293B;">Articulación con Posgrados:</strong> La formación continua en gerencia de proyectos conecta directamente con la <em>Especialización en Gerencia de Proyectos</em> (Presencial y Virtual).
                </div>
                <div style="background:#F8FAFC; border-left:3px solid #0284C7; padding:8px 10px; border-radius:4px;">
                    <strong style="color:#1E293B;">Alianza con el Sector Social:</strong> El Diplomado <em>Social Project Management</em> forma a líderes comunitarios y estudiantes en metodologías de impacto social medible.
                </div>
                <div style="background:#F8FAFC; border-left:3px solid #7C3AED; padding:8px 10px; border-radius:4px;">
                    <strong style="color:#1E293B;">Grandes Congresos Internacionales:</strong> Congreso <em>Liderazgo y Estrategia en la Era Digital</em> (658 participantes con Fundación de la Mujer) y I Congreso Multidisciplinario (970 asistentes).
                </div>
            </div>
        </div>
    </div>

    <!-- Tabla 49 Oficial Canónica -->
    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
            <h4 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0;">
                <i class="fas fa-table" style="color:#16A34A; margin-right:6px;"></i> Tabla 49. Oferta de educación continua
            </h4>
            <span style="font-size:0.7rem; color:#64748B; font-weight:700;">Fuente: Construcción del Programa · Anexo 2 Documento Maestro</span>
        </div>
        <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; font-size:0.76rem;">
                <thead>
                    <tr style="background:#1A1A1B; color:#FFFFFF;">
                        <th style="padding:10px 12px; text-align:center; border:1px solid #334155; width:70px;">Año</th>
                        <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Título del Programa de Educación Continua</th>
                        <th style="padding:10px 12px; text-align:center; border:1px solid #334155; width:130px;">Tipo de Formación</th>
                        <th style="padding:10px 12px; text-align:center; border:1px solid #334155; width:180px;">Participantes Admon. Empresas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1A1A1B; background:#F8FAFC;">2021</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Seminario PMI</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#EFF6FF; color:#1D4ED8; font-weight:700; padding:2px 8px; border-radius:4px;">Seminario</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">21</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1A1A1B; background:#F8FAFC;">2021</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Seminario en fundamentos básicos del estándar de gestión de proyectos PMBOK de PMI</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#EFF6FF; color:#1D4ED8; font-weight:700; padding:2px 8px; border-radius:4px;">Seminario</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">14</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1A1A1B; background:#F8FAFC;">2022</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Fundamentos básicos del estándar de gestión de proyectos PMP - Project Management Professional</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#EFF6FF; color:#1D4ED8; font-weight:700; padding:2px 8px; border-radius:4px;">Seminario</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">14</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1A1A1B; background:#F8FAFC;">2023</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Seminario SCRUM</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#B45309; font-weight:700; padding:2px 8px; border-radius:4px;">Seminario Ágil</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">34</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1A1A1B; background:#F8FAFC;">2024</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Fundamentos básicos del estándar de gestión de proyectos PMP - Project Management Professional</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#EFF6FF; color:#1D4ED8; font-weight:700; padding:2px 8px; border-radius:4px;">Seminario</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">10</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1A1A1B; background:#F8FAFC;">2024</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Diplomado Social Project Management (Cohorte I)</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#F3E8FF; color:#7E22CE; font-weight:700; padding:2px 8px; border-radius:4px;">Diplomado (120 h)</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">18</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1A1A1B; background:#F8FAFC;">2024</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Diplomado Social Project Management (Cohorte II)</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#F3E8FF; color:#7E22CE; font-weight:700; padding:2px 8px; border-radius:4px;">Diplomado (120 h)</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">2</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1A1A1B; background:#F8FAFC;">2024</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Diplomado en Dirección y Gestión de Proyectos bajo lineamientos de PMI y la norma ISO 21502:2020</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#F3E8FF; color:#7E22CE; font-weight:700; padding:2px 8px; border-radius:4px;">Diplomado (120 h)</span></td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">15</td>
                    </tr>
                    <!-- Total Consolidado -->
                    <tr style="background:#1A1A1B; color:#FFFFFF; font-weight:800;">
                        <td colspan="3" style="padding:10px 12px; text-align:right; border:1px solid #334155; font-family:'Montserrat'; letter-spacing:0.5px;">TOTAL PARTICIPANTES ADMINISTRACIÓN DE EMPRESAS:</td>
                        <td style="padding:10px 12px; text-align:center; border:1px solid #334155; font-size:0.95rem; color:#4ADE80; font-family:'Montserrat';">128</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 3: PROYECCIÓN SOCIAL EN EL PROGRAMA (NUMERAL 6.7)
     ========================================================= -->
<div id="c6-sec-proyeccion" class="c6-sub-panel" style="display:none;">
    <!-- Encabezado Numeral 6.7 -->
    <div style="background:linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%); border:1.5px solid #BFDBFE; border-left:5px solid #2563EB; border-radius:10px; padding:16px 20px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:8px;">
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#1E40AF; margin:0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-hand-holding-heart" style="color:#2563EB;"></i> 6.7. Proyección Social en el Programa de Administración de Empresas
            </h4>
            <span style="font-size:0.72rem; color:#1E40AF; font-weight:800; background:#DBEAFE; padding:3px 10px; border-radius:4px; text-transform:uppercase;">
                Impacto Territorial Sostenible
            </span>
        </div>
        <p style="font-size:0.82rem; color:#4B5563; line-height:1.55; margin:0;">
            Alineado con el Proyecto Educativo Institucional (PEI) y el modelo <em>"Formación en Contextos de Aplicación"</em>, el programa consolida acciones que impactan directamente el desarrollo socioeconómico del país y fortalecen la formación ética y humana de estudiantes y egresados.
        </p>
    </div>

    <!-- Objetivos General y Específicos (Numeral 6.7.1) -->
    <div style="display:grid; grid-template-columns:1fr 1.5fr; gap:16px; margin-bottom:20px; align-items:start;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px;">
            <h5 style="margin:0 0 10px; font-family:'Montserrat',sans-serif; font-size:0.88rem; font-weight:800; color:#1A1A1B;">
                <i class="fas fa-bullseye" style="color:#2563EB; margin-right:6px;"></i> 6.7.1.1. Objetivo General
            </h5>
            <p style="font-size:0.8rem; color:#334155; line-height:1.6; margin:0; text-align:justify; background:#F8FAFC; padding:12px; border-radius:6px; border-left:3px solid #2563EB;">
                "Vincular el programa con el sector externo mediante acciones de proyección social alineadas con el modelo institucional de la Corporación, enfocadas en <strong>generar un impacto positivo en las regiones de influencia</strong>, resolviendo problemas sociales, económicos y empresariales mediante enfoques éticos, creativos e innovadores."
            </p>
        </div>

        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px;">
            <h5 style="margin:0 0 10px; font-family:'Montserrat',sans-serif; font-size:0.88rem; font-weight:800; color:#1A1A1B;">
                <i class="fas fa-tasks" style="color:#16A34A; margin-right:6px;"></i> 6.7.1.2. Objetivos Específicos
            </h5>
            <div style="display:grid; gap:8px; font-size:0.76rem; color:#475569;">
                <div style="background:#F8FAFC; padding:8px 10px; border-radius:6px; display:flex; gap:8px;">
                    <i class="fas fa-check-circle" style="color:#16A34A; margin-top:2px;"></i>
                    <span><strong>Liderazgo y Transformación Social:</strong> Contribuir a la formación de estudiantes como líderes capaces de analizar, evaluar y proponer soluciones innovadoras a problemas del entorno.</span>
                </div>
                <div style="background:#F8FAFC; padding:8px 10px; border-radius:6px; display:flex; gap:8px;">
                    <i class="fas fa-check-circle" style="color:#16A34A; margin-top:2px;"></i>
                    <span><strong>Herramientas para la Acción:</strong> Proporcionar a estudiantes y egresados competencias para ejecutar capacitación, consultoría y asesoría a microempresas y comunidades.</span>
                </div>
                <div style="background:#F8FAFC; padding:8px 10px; border-radius:6px; display:flex; gap:8px;">
                    <i class="fas fa-check-circle" style="color:#16A34A; margin-top:2px;"></i>
                    <span><strong>Articulación con Investigación:</strong> Brindar espacios para que los estudiantes se integren a proyectos de vinculación y al semillero <em>GESTNOVA</em>.</span>
                </div>
                <div style="background:#F8FAFC; padding:8px 10px; border-radius:6px; display:flex; gap:8px;">
                    <i class="fas fa-check-circle" style="color:#16A34A; margin-top:2px;"></i>
                    <span><strong>Sostenibilidad y Ética:</strong> Formar líderes profesionales comprometidos con la responsabilidad social empresarial y el desarrollo sostenible.</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Diferenciación Canónica por Modalidad (Numeral 6.9 del Documento Maestro) -->
    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px; margin-bottom:18px;">
        <div style="margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
            <h5 style="margin:0; font-family:'Montserrat',sans-serif; font-size:0.92rem; font-weight:800; color:#1A1A1B;">
                <i class="fas fa-balance-scale" style="color:#F39200; margin-right:6px;"></i> 6.9. Diferenciación de la Relación con el Sector Externo por Modalidad (Registro Único)
            </h5>
            <p style="font-size:0.75rem; color:#64748B; margin:4px 0 0;">Garantiza en ambas modalidades la aplicación del conocimiento en contextos reales según el Decreto 1330 de 2019</p>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <!-- Modalidad Presencial -->
            <div style="background:#FAFAFA; border:1px solid #E2E8F0; border-top:3px solid #C8102E; border-radius:8px; padding:14px;">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <i class="fas fa-school" style="color:#C8102E; font-size:1.1rem;"></i>
                    <h6 style="margin:0; font-size:0.85rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">Modalidad Presencial (Sede Bucaramanga)</h6>
                </div>
                <ul style="margin:0; padding-left:16px; font-size:0.75rem; color:#475569; line-height:1.55;">
                    <li><strong>Prácticas Empresariales Directas:</strong> Inmersión física en organizaciones y empresas de Santander.</li>
                    <li><strong>Visitas Técnicas y de Campo:</strong> Salidas académicas guiadas a plantas de producción y entidades del entorno.</li>
                    <li><strong>Consultorio Presencial CIDRE:</strong> Atención cara a cara a Mipymes en la Sede A (Calle 41 N° 10-30).</li>
                    <li><strong>Ferias y Congresos:</strong> Participación activa en ferias de emprendimiento, ruedas de negocio y eventos gremiales.</li>
                    <li><strong>Encuentros con Líderes:</strong> Interacción directa con gerentes, funcionarios y líderes del sector productivo.</li>
                </ul>
            </div>

            <!-- Modalidad Virtual -->
            <div style="background:#FAFAFA; border:1px solid #E2E8F0; border-top:3px solid #F39200; border-radius:8px; padding:14px;">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <i class="fas fa-laptop" style="color:#F39200; font-size:1.1rem;"></i>
                    <h6 style="margin:0; font-size:0.85rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">Modalidad Virtual (Cobertura Nacional)</h6>
                </div>
                <ul style="margin:0; padding-left:16px; font-size:0.75rem; color:#475569; line-height:1.55;">
                    <li><strong>Prácticas Remotas (Teletrabajo):</strong> Con seguimiento y tutoría sincrónica por parte del docente asignado.</li>
                    <li><strong>Masterclasses Virtuales:</strong> Sesiones sincrónicas magistrales con expertos nacionales e internacionales.</li>
                    <li><strong>Encuentros Sincrónicos Productivos:</strong> Diálogos mediados por videoconferencia con empresarios de diversas regiones.</li>
                    <li><strong>Proyectos Aplicados Mediados por TIC:</strong> Formulación y seguimiento virtual de soluciones a empresas reales del país.</li>
                    <li><strong>Plataformas Colaborativas:</strong> Participación en comunidades de práctica digital y networking empresarial online.</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 4: INDICADORES A 7 AÑOS (TABLA 51 CANÓNICA)
     ========================================================= -->
<div id="c6-sec-indicadores" class="c6-sub-panel" style="display:none;">
    <div style="background:linear-gradient(135deg, #FFFBEB 0%, #FFFFFF 100%); border:1.5px solid #FDE68A; border-left:5px solid #D97706; border-radius:10px; padding:16px 20px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:8px;">
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#92400E; margin:0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-chart-line" style="color:#D97706;"></i> 6.10. Indicadores de la Relación con el Sector Externo (Tabla 51)
            </h4>
            <span style="font-size:0.72rem; color:#92400E; font-weight:800; background:#FEF3C7; padding:3px 10px; border-radius:4px; text-transform:uppercase;">
                Plan de Desarrollo a 7 Años
            </span>
        </div>
        <p style="font-size:0.82rem; color:#4B5563; line-height:1.55; margin:0;">
            Metas oficiales alcanzadas durante la vigencia del registro calificado y proyectadas para el siguiente septenio, diferenciadas por modalidad para el programa <strong>Administración de Empresas (Presencial – Virtual)</strong>:
        </p>
    </div>

    <!-- Gráfica Comparativa Línea Base vs Meta 7 Años -->
    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px; margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #F1F5F9; padding-bottom:8px;">
            <h5 style="margin:0; font-family:'Montserrat',sans-serif; font-size:0.88rem; font-weight:800; color:#1A1A1B;">
                <i class="fas fa-tachometer-alt" style="color:#D97706; margin-right:6px;"></i> Crecimiento Proyectado: Línea Base vs. Meta a 7 Años
            </h5>
            <span style="font-size:0.68rem; font-weight:700; color:#64748B;">Escala de Crecimiento del 200% al 433%</span>
        </div>
        <div style="max-height:220px; position:relative;">
            <canvas id="c6IndicadoresChart" style="max-height:220px;"></canvas>
        </div>
    </div>

    <!-- Tabla 51 Oficial Canónica -->
    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:16px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
            <h4 style="font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B; margin:0;">
                <i class="fas fa-table" style="color:#D97706; margin-right:6px;"></i> Tabla 51. Indicadores de relación con el sector externo – Programa Administración de Empresas (Presencial – Virtual)
            </h4>
            <span style="font-size:0.7rem; color:#64748B; font-weight:700;">Fuente: Construcción del Programa · Anexo 2 Documento Maestro</span>
        </div>
        <div style="overflow-x:auto;">
            <table style="width:100%; border-collapse:collapse; font-size:0.75rem;">
                <thead>
                    <tr style="background:#1A1A1B; color:#FFFFFF;">
                        <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Indicador Oficial</th>
                        <th style="padding:10px 12px; text-align:center; border:1px solid #334155; width:80px;">Línea Base</th>
                        <th style="padding:10px 12px; text-align:center; border:1px solid #334155; width:90px;">Meta 7 Años</th>
                        <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Modalidad Presencial</th>
                        <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Modalidad Virtual</th>
                        <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Fuente de Verificación</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Convenios activos con sector productivo vinculados al programa</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#475569;">5</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">20</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Convenios con empresas de la región de influencia</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Acuerdos para prácticas remotas y masterclasses</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#64748B;">Registro de convenios institucionales</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Mipymes atendidas anualmente en consultoría y asesoría</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#475569;">20</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">80</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Consultorio empresarial presencial (CIDRE)</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Consultoría virtual empresarial con mediación tecnológica</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#64748B;">Informes CIDRE / registros de atención</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Estudiantes participantes en prácticas empresariales</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#475569;">15</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">80</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Prácticas empresariales presenciales en organizaciones</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Prácticas remotas (teletrabajo) con seguimiento virtual</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#64748B;">Actas de inicio y finalización de prácticas</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Actividades anuales con actores externos del sector productivo</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#475569;">5</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">20</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Visitas técnicas, ferias, congresos presenciales</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Masterclasses virtuales, encuentros sincrónicos con expertos</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#64748B;">Certificados, listas de asistencia, registros</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Expertos externos participantes en eventos académicos del programa</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#475569;">3</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">12</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Conferencias, mesas de trabajo en sede institucional</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Webinars, paneles virtuales con expertos intl.</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#64748B;">Registros de eventos, listas de participantes</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Estudiantes vinculados a proyectos con enfoque aplicado al entorno empresarial</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#475569;">10</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">50</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Proyectos de aula en contextos empresariales reales</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Proyectos aplicados con seguimiento virtual</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#64748B;">Informes de asignatura, informes de proyecto</td>
                    </tr>
                    <tr>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Articulación con Comité Universidad-Empresa-Estado (CUEES)</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#475569;">1 part/año</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">4 part/año</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Participación en ruedas de negocios y mesas presenciales</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Participación en CUEES con modalidad virtual/híbrida</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#64748B;">Actas, certificados de participación</td>
                    </tr>
                    <tr style="background:#F8FAFC;">
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Egresados con seguimiento activo y vinculación al sector externo</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#475569;">20%</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#16A34A; background:#F0FDF4;">60%</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Encuentros presenciales de egresados, bolsa de empleo</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0;">Seguimiento virtual, red de egresados digital</td>
                        <td style="padding:8px 10px; border:1px solid #E2E8F0; color:#64748B;">Base de datos de egresados / informes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 5: VISIÓN PROSPECTIVA DEL CIDRE & SINERGIA CUEES
     ========================================================= -->
<div id="c6-sec-cidre" class="c6-sub-panel" style="display:none;">
    <!-- Encabezado CIDRE (Numeral 6.4) -->
    <div style="background:linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 100%); border:1.5px solid #FED7AA; border-left:5px solid #C2410C; border-radius:10px; padding:16px 20px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:8px;">
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#9A3412; margin:0; display:flex; align-items:center; gap:8px;">
                <i class="fas fa-building" style="color:#C2410C;"></i> 6.4. Centro de Investigación y Consultoría para la Innovación y el Desarrollo Regional (CIDRE)
            </h4>
            <span style="font-size:0.72rem; color:#9A3412; font-weight:800; background:#FFEDD5; padding:3px 10px; border-radius:4px; text-transform:uppercase;">
                Eje Articulador I+D+i y Extensión
            </span>
        </div>
        <p style="font-size:0.82rem; color:#4B5563; line-height:1.55; margin:0;">
            Ofertar un servicio de consultoría especializado en articulación con la investigación, para atender las necesidades reales de la región en el sector educativo, empresarial, ambiental y social, como una acción que posibilita desarrollar la función sustantiva de extensión y proyección social de la institución, es el objeto de trabajo del <strong>CIDRE</strong>.
        </p>
    </div>

    <!-- Los 4 Pilares de la Visión Prospectiva 2026-2032 -->
    <h5 style="margin:0 0 12px; font-family:'Montserrat',sans-serif; font-size:0.95rem; font-weight:800; color:#1A1A1B;">
        <i class="fas fa-compass" style="color:#EA580C; margin-right:6px;"></i> Visión Prospectiva del CIDRE &amp; Articulación Estratégica con CUEES (2026 – 2032)
    </h5>
    <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:14px; margin-bottom:20px;">
        <!-- Eje 1 -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:3px solid #EA580C; border-radius:8px; padding:16px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                <div style="width:32px; height:32px; border-radius:50%; background:#FFF7ED; color:#EA580C; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.85rem;">1</div>
                <h6 style="margin:0; font-size:0.88rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">Consultorio Empresarial Digital e Híbrido</h6>
            </div>
            <p style="font-size:0.76rem; color:#475569; line-height:1.5; margin:0 0 8px;">
                Evolución del consultorio presencial hacia una plataforma nacional de <strong>Tele-consultoría Empresarial</strong> que atiende Mipymes en los 32 departamentos del país y el Distrito Capital mediante docentes expertos y estudiantes practicantes virtuales.
            </p>
            <div style="font-size:0.7rem; color:#EA580C; font-weight:700;"><i class="fas fa-check mr-1"></i> Meta: 80 Mipymes anuales asesoradas con actas de validación.</div>
        </div>

        <!-- Eje 2 -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:3px solid #16A34A; border-radius:8px; padding:16px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                <div style="width:32px; height:32px; border-radius:50%; background:#F0FDF4; color:#16A34A; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.85rem;">2</div>
                <h6 style="margin:0; font-size:0.88rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">Incubación de Spin-offs y Emprendimiento</h6>
            </div>
            <p style="font-size:0.76rem; color:#475569; line-height:1.5; margin:0 0 8px;">
                Escalamiento del modelo de éxito demostrado por la spin-off institucional <strong>MYB S.A.S.</strong> (6 empleos directos generados desde el aula), articulando ideas de semilleristas GESTNOVA con capital semilla de <em>Fondo Emprender</em> y Ángeles Inversionistas.
            </p>
            <div style="font-size:0.7rem; color:#16A34A; font-weight:700;"><i class="fas fa-check mr-1"></i> Modelo probado en Diapositiva 21 de Investigación.</div>
        </div>

        <!-- Eje 3 -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:3px solid #0284C7; border-radius:8px; padding:16px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                <div style="width:32px; height:32px; border-radius:50%; background:#F0F9FF; color:#0284C7; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.85rem;">3</div>
                <h6 style="margin:0; font-size:0.88rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">Sinergia Estratégica Permanente con CUEES</h6>
            </div>
            <p style="font-size:0.76rem; color:#475569; line-height:1.5; margin:0 0 8px;">
                Participación activa en las 4 mesas temáticas del CUEES Santander: <em>Mesa de Productividad y Transformación Digital</em>, <em>Mesa de Talento Humano</em>, <em>Mesa de Emprendimiento</em> y ruedas de negocios Universidad-Empresa.
            </p>
            <div style="font-size:0.7rem; color:#0284C7; font-weight:700;"><i class="fas fa-check mr-1"></i> 4 participaciones anuales institucionales en CUEES.</div>
        </div>

        <!-- Eje 4 -->
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:3px solid #7C3AED; border-radius:8px; padding:16px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                <div style="width:32px; height:32px; border-radius:50%; background:#FAF5FF; color:#7C3AED; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:0.85rem;">4</div>
                <h6 style="margin:0; font-size:0.88rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">Servicios de Consultoría Especializada y Convenios</h6>
            </div>
            <p style="font-size:0.76rem; color:#475569; line-height:1.5; margin:0 0 8px;">
                Oferta de diagnósticos de madurez digital, estructuración de proyectos bajo metodología MGA/PMI, formulación de planes estratégicos corporativos y asesoría en economía circular para gremios (Fenalco, FEDECACAO, Acopi).
            </p>
            <div style="font-size:0.7rem; color:#7C3AED; font-weight:700;"><i class="fas fa-check mr-1"></i> Prestación de servicios conforme a los criterios del CIDRE.</div>
        </div>
    </div>

    <!-- Metodología de Intervención del CIDRE -->
    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:10px; padding:16px; margin-bottom:18px;">
        <h5 style="margin:0 0 12px; font-family:'Montserrat',sans-serif; font-size:0.88rem; font-weight:800; color:#1A1A1B; text-align:center;">
            <i class="fas fa-project-diagram" style="color:#C2410C; margin-right:6px;"></i> Ciclo Canónico de Intervención y Acompañamiento Empresarial CIDRE
        </h5>
        <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:8px; text-align:center;">
            <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-radius:6px; padding:10px 8px;">
                <div style="font-size:0.72rem; font-weight:800; color:#C2410C;">PASO 1</div>
                <div style="font-size:0.74rem; font-weight:700; color:#1E293B; margin-top:2px;">Solicitud y Caracterización</div>
                <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Recepción de Mipyme física o virtual</div>
            </div>
            <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-radius:6px; padding:10px 8px;">
                <div style="font-size:0.72rem; font-weight:800; color:#C2410C;">PASO 2</div>
                <div style="font-size:0.74rem; font-weight:700; color:#1E293B; margin-top:2px;">Diagnóstico DOFA / Digital</div>
                <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Evaluación de capacidades internas</div>
            </div>
            <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-radius:6px; padding:10px 8px;">
                <div style="font-size:0.72rem; font-weight:800; color:#C2410C;">PASO 3</div>
                <div style="font-size:0.74rem; font-weight:700; color:#1E293B; margin-top:2px;">Plan de Intervención</div>
                <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Asignación docente tutor y estudiantes</div>
            </div>
            <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-radius:6px; padding:10px 8px;">
                <div style="font-size:0.72rem; font-weight:800; color:#C2410C;">PASO 4</div>
                <div style="font-size:0.74rem; font-weight:700; color:#1E293B; margin-top:2px;">Implementación Práctica</div>
                <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Costos, finanzas, marketing, e-commerce</div>
            </div>
            <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-radius:6px; padding:10px 8px;">
                <div style="font-size:0.72rem; font-weight:800; color:#16A34A;">PASO 5</div>
                <div style="font-size:0.74rem; font-weight:700; color:#1E293B; margin-top:2px;">Acta de Entrega</div>
                <div style="font-size:0.68rem; color:#64748B; margin-top:2px;">Validación de impacto y cierre formal</div>
            </div>
        </div>
    </div>
</div>

<!-- =========================================================
     SUBSECCIÓN 6: CONVENIOS Y REDES ESTRATÉGICAS
     ========================================================= -->
<div id="c6-sec-convenios" class="c6-sub-panel" style="display:none;">
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:20px;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #F39200; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">25+</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Convenios Vigentes</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #16A34A; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">100%</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Cupos de Práctica Asegurados</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #2563EB; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">120+</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Mipymes Asesoradas</div>
        </div>
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:4px solid #7C3AED; border-radius:8px; padding:14px; text-align:center;">
            <div style="font-size:1.6rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat',sans-serif;">4</div>
            <div style="font-size:0.72rem; color:#64748B; font-weight:700; text-transform:uppercase;">Convenios Internacionales</div>
        </div>
    </div>

    <h4 style="font-family:'Montserrat',sans-serif; font-size:1.05rem; font-weight:800; color:#1A1A1B; margin-bottom:12px;">
        <i class="fas fa-file-contract" style="color:#F39200;"></i> Matriz de Convenios y Aliados Estratégicos del Programa
    </h4>
    <div style="overflow-x:auto; border:1px solid #E2E8F0; border-radius:8px; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; font-size:0.76rem; background:#FFFFFF;">
            <thead>
                <tr style="background:#1A1A1B; color:#FFFFFF;">
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Sector Externo / Entidad</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Actividad Desarrollada con el Programa</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Modalidad</th>
                    <th style="padding:10px 12px; text-align:left; border:1px solid #334155;">Beneficiarios e Impacto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Área Metropolitana de Bucaramanga (AMB)</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Diagnóstico de movilidad empresarial y planes de contingencia operativa</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">Presencial</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Estudiantes de 7° y 8° semestre · Impacto en políticas metropolitanas</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Cuerpo de Bomberos de Floridablanca</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Reestructuración administrativa, presupuesto participativo y optimización de compras</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">Presencial</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Organización institucional interna y gestión de recursos públicos</td>
                </tr>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Caja de Compensación Familiar CAJASAN</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Prácticas empresariales formativas en mercadeo, finanzas y talento humano</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;"><span style="background:#EEF2FF; color:#4338CA; font-weight:700; padding:2px 8px; border-radius:4px;">Presencial y Virtual</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Estudiantes practicantes con vinculación directa y proyección laboral</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Alcaldía Municipal de Bucaramanga e IMEBU</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Censo socioeconómico, formalización empresarial y muestra de unidades productivas</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;"><span style="background:#DCFCE7; color:#15803D; font-weight:700; padding:2px 8px; border-radius:4px;">Presencial</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Más de 155 microempresarios asesorados en finanzas y costos</td>
                </tr>
                <tr>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">FENALCO Santander</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Participación en mesas sectoriales, ruedas de negocio y observatorio comercial</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;"><span style="background:#EEF2FF; color:#4338CA; font-weight:700; padding:2px 8px; border-radius:4px;">Presencial y Virtual</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Docentes y estudiantes con acceso a información económica gremial</td>
                </tr>
                <tr style="background:#F8FAFC;">
                    <td style="padding:9px 12px; border:1px solid #E2E8F0; font-weight:700; color:#0F172A;">Convenios Internacionales (UNADE México · UMECIT Panamá · U. Cuenca)</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Clases espejo, cátedra internacional abierta y movilidad académica docente</td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;"><span style="background:#F3E8FF; color:#7E22CE; font-weight:700; padding:2px 8px; border-radius:4px;">Virtual (Internacional)</span></td>
                    <td style="padding:9px 12px; border:1px solid #E2E8F0;">Internacionalización del currículo para estudiantes de ambas modalidades</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="evidence-box" style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #16A34A; border-radius:8px; padding:12px 16px;">
        <i class="fas fa-folder-open" style="color:#16A34A; margin-right:8px;"></i>
        <strong>Soportes Oficiales de la Condición:</strong> Anexo 2: Documento Maestro (Cap. 6) · Tabla 48 (CUEES) · Tabla 49 (Educación Continua) · Numeral 6.7 (Proyección Social) · Tabla 51 (Indicadores 7 Años) · Lineamiento de Relacionamiento Externo · Actas CUEES Santander.
    </div>
</div>
`;

window.switchC6Sub = function(targetId, btn) {
    document.querySelectorAll('.c6-sub-panel').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.c6-pill-btn').forEach(b => {
        b.classList.remove('active');
        b.style.background = '#F8FAFC';
        b.style.color = '#334155';
        b.style.borderColor = '#CBD5E1';
    });
    const panel = document.getElementById(targetId);
    if (panel) panel.style.display = 'block';
    if (btn) {
        btn.classList.add('active');
        btn.style.background = '#1A1A1B';
        btn.style.color = '#FFFFFF';
        btn.style.borderColor = '#F39200';
    }
    setTimeout(window.initC6Charts, 150);
};

window._c6Charts = window._c6Charts || {};

window.initC6Charts = function() {
    // 1. Chart CUEES Beneficiarios
    const ctxCuees = document.getElementById('c6CueesChart');
    if (ctxCuees && !window._c6Charts.cuees) {
        window._c6Charts.cuees = new Chart(ctxCuees, {
            type: 'bar',
            data: {
                labels: [
                    'Talleres IMEBU-Coopfuturo',
                    'Centro Cultural Oriente',
                    'Muestra Ángeles Inversionistas',
                    'Lean Canvas FEDECACAO',
                    'Mesa Educación Fenalco',
                    'Pacto Global Cajasan',
                    'Taller Lean Canvas Fondo Emp.',
                    'Conferencia Protección',
                    'Curso Economía Circular CCB',
                    'Design Thinking iNNpulsa'
                ],
                datasets: [{
                    label: 'Beneficiarios',
                    data: [80, 80, 75, 68, 55, 44, 40, 35, 35, 25],
                    backgroundColor: [
                        '#EA580C', '#C2410C', '#D97706', '#F59E0B',
                        '#16A34A', '#0D9488', '#0284C7', '#2563EB',
                        '#4F46E5', '#7C3AED'
                    ],
                    borderRadius: 6
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(c) { return ' ' + c.raw + ' beneficiarios directos'; }
                        }
                    }
                },
                scales: {
                    x: { beginAtZero: true, max: 90, grid: { color: '#F1F5F9' }, ticks: { font: { size: 10 } } },
                    y: { grid: { display: false }, ticks: { font: { size: 9.5, weight: 'bold' }, color: '#1E293B' } }
                }
            }
        });
    }

    // 2. Chart Educación Continua Tendencia
    const ctxEdu = document.getElementById('c6EduContinuaChart');
    if (ctxEdu && !window._c6Charts.edu) {
        window._c6Charts.edu = new Chart(ctxEdu, {
            type: 'line',
            data: {
                labels: ['2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Participantes Admon. Empresas',
                    data: [35, 14, 34, 45],
                    borderColor: '#16A34A',
                    backgroundColor: 'rgba(22,163,74,0.12)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.35,
                    pointBackgroundColor: '#16A34A',
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(c) { return ' ' + c.raw + ' participantes formados'; }
                        }
                    }
                },
                scales: {
                    y: { beginAtZero: true, max: 55, grid: { color: '#F1F5F9' }, ticks: { font: { size: 10 } } },
                    x: { grid: { display: false }, ticks: { font: { size: 11, weight: 'bold' }, color: '#1E293B' } }
                }
            }
        });
    }

    // 3. Chart Indicadores Tabla 51 Línea Base vs Meta 7 Años
    const ctxInd = document.getElementById('c6IndicadoresChart');
    if (ctxInd && !window._c6Charts.ind) {
        window._c6Charts.ind = new Chart(ctxInd, {
            type: 'bar',
            data: {
                labels: [
                    'Convenios Activos',
                    'Mipymes Atendidas',
                    'Estudiantes en Prácticas',
                    'Actividades Sector Externo',
                    'Expertos Externos Eventos',
                    'Estudiantes Proyectos Aplicados',
                    'Articulación CUEES / año',
                    '% Egresados con Seguimiento'
                ],
                datasets: [
                    {
                        label: 'Línea Base',
                        data: [5, 20, 15, 5, 3, 10, 1, 20],
                        backgroundColor: '#94A3B8',
                        borderRadius: 4
                    },
                    {
                        label: 'Meta a 7 Años',
                        data: [20, 80, 80, 20, 12, 50, 4, 60],
                        backgroundColor: '#D97706',
                        borderRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { font: { size: 11, weight: 'bold' }, color: '#1E293B' }
                    }
                },
                scales: {
                    y: { beginAtZero: true, max: 90, grid: { color: '#F1F5F9' }, ticks: { font: { size: 10 } } },
                    x: { grid: { display: false }, ticks: { font: { size: 9 }, color: '#1E293B' } }
                }
            }
        });
    }
};

window.c6Init = function() {
    window._c6Charts = {};
    setTimeout(window.initC6Charts, 200);
};
