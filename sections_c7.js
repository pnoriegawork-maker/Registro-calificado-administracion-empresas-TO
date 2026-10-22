/* =========================================================
   CONDICIÓN 7 – PERSONAL DOCENTE Y DESARROLLO PROFESORAL
   Administración de Empresas – Registro Calificado Único (Presencial & Virtual) – TO
   Marco Normativo: Decreto 1330 de 2019 / Acuerdo CS 011 de 2024
   ========================================================= */
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS['c7'] = `
<div class="info-banner" style="background:linear-gradient(135deg, #1A1A1B 0%, #2D2D2E 100%); color:#FFFFFF; border-left:5px solid #F39200; padding:18px 22px; border-radius:12px; margin-bottom:20px; box-shadow:0 4px 18px rgba(0,0,0,0.12);">
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                <span style="background:#F39200; color:#FFFFFF; font-size:0.7rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">
                    Condición de Programa 7
                </span>
                <span style="color:#D1D1D1; font-size:0.75rem;">Decreto 1330 de 2019 · Planta Docente Integral, Dedicación y Desarrollo Profesoral</span>
            </div>
            <h4 style="font-family:'Montserrat',sans-serif; font-size:1.26rem; font-weight:800; color:#FFFFFF; margin:0 0 4px; display:flex; align-items:center; gap:10px;">
                <i class="fas fa-chalkboard-teacher" style="color:#F39200;"></i> Personal Docente y Desarrollo Profesoral
            </h4>
            <p style="color:#D1D1D1; font-size:0.86rem; margin:0; line-height:1.45;">
                Cuerpo profesoral de excelencia asignado a las modalidades <strong>Presencial y Virtual</strong>: 100% con formación posgradual, asignación balanceada de <strong>20 h semanales para Medio Tiempo</strong> y <strong>40 h semanales para Tiempo Completo</strong>, mapa de coherencia misional, proyección a 52 docentes y modelo de evaluación 360°.
            </p>
        </div>
        <div style="display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
            <span style="background:rgba(243,146,0,0.22); color:#F39200; border:1px solid #F39200; font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-graduation-cap"></i> 100% Posgrado
            </span>
            <span style="background:rgba(34,197,94,0.22); color:#4ADE80; border:1px solid #22c55e; font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                <i class="fas fa-clock"></i> MT: 20 h / TC: 40 h
            </span>
            <span style="background:rgba(255,255,255,0.1); color:#FFFFFF; border:1px solid rgba(255,255,255,0.3); font-weight:700; padding:5px 12px; border-radius:20px; font-size:0.76rem;">
                Ratio 1:15 a 1:34
            </span>
        </div>
    </div>
</div>

<!-- BARRA DE SUBSECCIONES EN PRIMER PLANO -->
<div style="background:#FFFFFF; border:1px solid #E8E8E8; border-radius:12px; padding:10px 14px; margin-bottom:20px; box-shadow:0 3px 12px rgba(0,0,0,0.04); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
    <span style="font-size:0.74rem; font-weight:800; color:#1A1A1B; text-transform:uppercase; display:flex; align-items:center; gap:6px;">
        <i class="fas fa-sitemap" style="color:#F39200;"></i> Subsecciones de Sustentación:
    </span>
    <div style="display:flex; flex-wrap:wrap; gap:6px;">
        <button class="c7-pill-btn active" onclick="switchC7Sub('c7-sec-planta', this)" style="background:#1A1A1B; color:#FFFFFF; border:1px solid #F39200; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            1. Planta por Modalidad (Tablas 52 y 53)
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-horas', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            2. Dedicación Horaria (20h MT / 40h TC)
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-coherencia', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            3. Coherencia & Verificación (Tablas 57 y 58)
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-proyeccion', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            4. Proyección a 7 Años (Tabla 54)
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-seleccion', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            5. Estatuto, Selección & Vinculación
        </button>
        <button class="c7-pill-btn" onclick="switchC7Sub('c7-sec-desarrollo', this)" style="background:#F8FAFC; color:#334155; border:1px solid #CBD5E1; font-size:0.74rem; font-weight:800; padding:6px 12px; border-radius:6px; cursor:pointer;">
            6. Cualificación, Bienestar & Evaluación 360°
        </button>
    </div>
</div>

<div id="c7-content-container">
    <!-- SUBSECCIÓN 1: PLANTA DOCENTE POR MODALIDAD -->
    <div id="c7-sec-planta" class="c7-sub-panel">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px;">
                <div>
                    <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                        <i class="fas fa-users-cog" style="color:#F39200;"></i> Planta Profesoral Oficial del Programa
                    </h5>
                    <p style="margin:0; font-size:0.78rem; color:#64748B;">
                        Información canónica de las Tablas 52 (Modalidad Presencial) y 53 (Modalidad Virtual). Ajuste estricto de dedicación a 20 h/sem para docentes de Medio Tiempo.
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <button id="btnFilterPresencial" onclick="filterC7Planta('presencial')" style="background:#F39200; color:#FFFFFF; border:none; padding:6px 14px; border-radius:6px; font-size:0.76rem; font-weight:800; cursor:pointer;">
                        <i class="fas fa-chalkboard-teacher mr-1"></i> Presencial (6 Docentes)
                    </button>
                    <button id="btnFilterVirtual" onclick="filterC7Planta('virtual')" style="background:#F1F5F9; color:#475569; border:1px solid #CBD5E1; padding:6px 14px; border-radius:6px; font-size:0.76rem; font-weight:800; cursor:pointer;">
                        <i class="fas fa-laptop-code mr-1"></i> Virtual (9 Docentes)
                    </button>
                    <button id="btnFilterAll" onclick="filterC7Planta('all')" style="background:#F1F5F9; color:#475569; border:1px solid #CBD5E1; padding:6px 14px; border-radius:6px; font-size:0.76rem; font-weight:800; cursor:pointer;">
                        <i class="fas fa-globe mr-1"></i> Ver Todos (15 Docentes)
                    </button>
                </div>
            </div>

            <!-- TARJETAS DE INDICADORES CLAVE DE LA PLANTA -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(210px, 1fr)); gap:12px; margin-bottom:16px;">
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #F39200; border-radius:8px; padding:12px;">
                    <div style="font-size:0.68rem; font-weight:800; color:#64748B; text-transform:uppercase;">Nivel Académico</div>
                    <div style="font-size:1.3rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat';">100% Posgrado</div>
                    <div style="font-size:0.7rem; color:#16A34A; font-weight:700;"><i class="fas fa-check-circle"></i> Especialistas, Magísteres y Doctores</div>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #16A34A; border-radius:8px; padding:12px;">
                    <div style="font-size:0.68rem; font-weight:800; color:#64748B; text-transform:uppercase;">Experiencia Profesional</div>
                    <div style="font-size:1.3rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat';">12.8 Años Prom.</div>
                    <div style="font-size:0.7rem; color:#475569; font-weight:600;"><i class="fas fa-briefcase"></i> Alta vinculación con el sector real</div>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #2563EB; border-radius:8px; padding:12px;">
                    <div style="font-size:0.68rem; font-weight:800; color:#64748B; text-transform:uppercase;">Experiencia Docente</div>
                    <div style="font-size:1.3rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat';">8.1 Años Prom.</div>
                    <div style="font-size:0.7rem; color:#2563EB; font-weight:700;"><i class="fas fa-university"></i> Trayectoria en educación superior</div>
                </div>
                <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-left:4px solid #9333EA; border-radius:8px; padding:12px;">
                    <div style="font-size:0.68rem; font-weight:800; color:#64748B; text-transform:uppercase;">Dedicación Normativa</div>
                    <div style="font-size:1.3rem; font-weight:900; color:#1A1A1B; font-family:'Montserrat';">20 h MT / 40 h TC</div>
                    <div style="font-size:0.7rem; color:#9333EA; font-weight:700;"><i class="fas fa-balance-scale"></i> Estricto cumplimiento institucional</div>
                </div>
            </div>

            <!-- CONTENEDOR TABLA 52 (PRESENCIAL) -->
            <div id="c7-tabla52-container" style="margin-bottom:20px;">
                <div style="background:#FFF7ED; border:1px solid #FED7AA; border-radius:6px; padding:8px 12px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:800; font-size:0.82rem; color:#C2410C;">
                        <i class="fas fa-chalkboard mr-1"></i> Tabla 52. Profesores del programa de Administración de Empresas – Modalidad Presencial
                    </span>
                    <span style="background:#C2410C; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">6 Docentes Asignados</span>
                </div>
                <div style="overflow-x:auto; border:1px solid #CBD5E1; border-radius:8px;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.75rem; background:#FFFFFF;">
                        <thead>
                            <tr style="background:#1A1A1B; color:#FFFFFF;">
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Nombre del Profesor</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Formación Académica</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:130px;">Tipo Vinculación</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Áreas que Atiende</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:70px;">Exp. Prof.</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:70px;">Exp. Doc.</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:90px;">Dedicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Jean Margareth Correa Gustines</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Maestría en Educación · Esp. en Gerencia en Riesgos Laborales y SST · Esp. en Gerencia de Proyectos · Administradora de Empresas y Negocios</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Fundamentos de Adm. / Procesos Adm. / Teoría Organizacional</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">10 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">6 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Cristian Pérez Chaparro</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Candidato a Magíster en Gerencia de las Organizaciones · Especialista en Finanzas · Administrador de Empresas</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Análisis Financiero / Adm. Financiera / Costos y Presupuesto</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">12 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">7 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Orlando de Jesús Marín Lorduy</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Ingeniero Industrial · Especialista en Gerencia del Marketing · Magíster en Estadística Aplicada</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Fundamentos de Mercadeo / Gerencia de Marketing / Ventas y Canales</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">8 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">5 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Julián Andrés Estebam Angarita</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Abogado · Especialista en Derecho Civil y Comercial</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Legislación Comercial / Derecho Laboral / Legislación Tributaria</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">10 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">4 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Andrea Suárez Suárez</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Magíster en Educación · Especialista en Gerencia de Proyectos · Administradora</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DBEAFE; color:#1E40AF; font-weight:800; padding:2px 8px; border-radius:4px;">TC Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Microeconomía / Macroeconomía / Economía Colombiana e Internacional</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">9 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">6 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#E0E7FF; color:#3730A3; font-weight:800; padding:2px 8px; border-radius:4px;">40 h/sem.</span></td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">David Suárez Suárez</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Doctorado en Ciencias Económicas y Administrativas · MBA · Esp. Docencia Universitaria, Gerencia Logística, Planeación e Investigación de Mercados · Administrador e Ingeniero Industrial</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DBEAFE; color:#1E40AF; font-weight:800; padding:2px 8px; border-radius:4px;">TC Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Competencias Investigativas / Semilleros / Proyecto de Grado</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">11 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">8 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#E0E7FF; color:#3730A3; font-weight:800; padding:2px 8px; border-radius:4px;">40 h/sem.</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- CONTENEDOR TABLA 53 (VIRTUAL) -->
            <div id="c7-tabla53-container">
                <div style="background:#EFF6FF; border:1px solid #BFDBFE; border-radius:6px; padding:8px 12px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:800; font-size:0.82rem; color:#1E40AF;">
                        <i class="fas fa-laptop-code mr-1"></i> Tabla 53. Profesores del programa de Administración de Empresas – Modalidad Virtual
                    </span>
                    <span style="background:#1E40AF; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">9 Docentes Asignados</span>
                </div>
                <div style="overflow-x:auto; border:1px solid #CBD5E1; border-radius:8px;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.75rem; background:#FFFFFF;">
                        <thead>
                            <tr style="background:#1A1A1B; color:#FFFFFF;">
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Nombre del Profesor</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Formación Académica</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:130px;">Tipo Vinculación</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Áreas que Atiende (Semestres)</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:70px;">Exp. Prof.</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:70px;">Exp. Doc.</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:90px;">Dedicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Andrea Katherine Hernández</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Magíster en Administración · Especialista en Gestión y Seguridad en BD · Ingeniera Industrial</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Big Data y Analítica / Sistemas Integrados de Gestión / TICs aplicadas (Sems. 1–4)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">15 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">10 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Diana Catalina Santamaría Ortiz</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Magíster en Administración de Empresas (Finanzas Corporativas) · Esp. Gerencia Pública · Ingeniera Financiera</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Análisis Financiero / Adm. Financiera / Matemática Financiera (Sems. 3–6)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">15 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">10 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Iván Leonidas Mantilla Jaimes</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Magíster en Innovación Social y Territorio · Magíster en Adm. Gerencial · Esp. Gerencia Pública, Mercadeo y Gestión · Ingeniero Industrial</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Modelos de Emprendimiento / Lab. Innovación / Gerencia de Marketing (Sems. 4–7)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">10 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">8 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Yolanda Sofía Quintero</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Doctoranda en Administración · Magíster en Adm. de Organizaciones · Esp. Gerencia de Empresas · Esp. Gestión de Empresas · Administradora de Empresas y de Sistemas</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Gestión del Talento Humano / Habilidades Gerenciales / Formulación y Evaluación de Proyectos (Sems. 4–7)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">25 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">18 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Leonardo Fabio Pérez Vega</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Máster en Finanzas · Magíster en Adm. y Dirección de Empresas · Esp. Evaluación y Gerencia de Proyectos · Ingeniero Industrial</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Costos y Presupuesto / Gerencia de Operaciones / Pensamiento Estratégico (Sems. 3–8)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">15 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">8 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Alejandro Almeyda Camargo</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Magíster en Gerencia de Negocios · Especialista en Gerencia Comercial y Estratégica · Ingeniero de Mercados</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Negocios e Internacionalización / E-commerce / Investigación de Mercados (Sems. 5–8)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">20 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">12 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Pablo Andrés Pérez Gutiérrez</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Maestría en Administración con énfasis en Marketing · Ingeniero Industrial</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Fundamentos de Adm. / Procesos Adm. / Teoría Organizacional (Sems. 1–3)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">8 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">5 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">María del Pilar Rodríguez</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Especialista en Gerencia Pública · Economista</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Microeconomía / Macroeconomía / Economía Colombiana e Intl. (Sems. 2–4)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">9 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">5 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#FEF3C7; color:#92400E; font-weight:800; padding:2px 8px; border-radius:4px;">20 h/sem.</span></td>
                            </tr>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Brayan Felipe Caro Arias</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Ingeniero Industrial · Esp. Gerencia de Proyectos · Esp. SST · MBA + Experto en Datos y Tecnología</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DBEAFE; color:#1E40AF; font-weight:800; padding:2px 8px; border-radius:4px;">TC Académico</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Competencias Investigativas / Semilleros / Proyecto de Grado (Sems. 4–8)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">10 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">6 años</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#E0E7FF; color:#3730A3; font-weight:800; padding:2px 8px; border-radius:4px;">40 h/sem.</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- SUBSECCIÓN 2: DEDICACIÓN HORARIA COHERENTE (20H MT / 40H TC) -->
    <div id="c7-sec-horas" class="c7-sub-panel" style="display:none;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px;">
                <div>
                    <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                        <i class="fas fa-business-time" style="color:#16A34A;"></i> Distribución Equilibrada de Horas de Dedicación
                    </h5>
                    <p style="margin:0; font-size:0.78rem; color:#64748B;">
                        Tablas 54 (MT Presencial), 55 (MT Virtual) y 56 (Tiempo Completo). <strong>Ajuste estricto: Medio Tiempo estipulado a exactamente 20 horas semanales.</strong>
                    </p>
                </div>
                <div style="background:#DCFCE7; border:1px solid #86EFAC; border-radius:6px; padding:6px 12px; font-size:0.75rem; font-weight:800; color:#15803D;">
                    <i class="fas fa-check-double mr-1"></i> Balance 100% Armónico con Decreto 1330
                </div>
            </div>

            <!-- COMPARATIVA EN GRÁFICO DE BARRAS / DEDICACIÓN -->
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:16px; margin-bottom:20px;">
                <div style="font-size:0.8rem; font-weight:800; color:#1E293B; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span><i class="fas fa-chart-bar" style="color:#F39200;"></i> Comparativa de Carga Horaria por Misiones Sustantivas (Horas Semanales)</span>
                    <span style="font-size:0.7rem; color:#64748B;">Medio Tiempo (20h) vs. Tiempo Completo (40h)</span>
                </div>
                <canvas id="c7HorasChart" style="max-height:220px;"></canvas>
            </div>

            <!-- TRES TABLAS DE DEDICACIÓN HORARIA -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:16px;">
                <!-- TABLA 54: MT PRESENCIAL -->
                <div style="border:1px solid #FED7AA; border-radius:8px; overflow:hidden; background:#FFFFFF;">
                    <div style="background:#FFF7ED; padding:10px 14px; border-bottom:1px solid #FED7AA;">
                        <h6 style="margin:0; font-size:0.82rem; font-weight:800; color:#C2410C; font-family:'Montserrat';">
                            Tabla 54. Distribución de Horas – Docente MT Presencial
                        </h6>
                        <span style="font-size:0.7rem; color:#9A3412; font-weight:600;">Total Semanal: 20 Horas (100%)</span>
                    </div>
                    <table style="width:100%; border-collapse:collapse; font-size:0.73rem;">
                        <thead>
                            <tr style="background:#F8FAFC; color:#334155; border-bottom:1px solid #E2E8F0;">
                                <th style="padding:8px 10px; text-align:left;">Actividad Misional</th>
                                <th style="padding:8px 10px; text-align:center; width:65px;">Horas</th>
                                <th style="padding:8px 10px; text-align:center; width:60px;">%</th>
                                <th style="padding:8px 10px; text-align:left;">Descripción Operativa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Docencia directa</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#C2410C;">10 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">50%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Clases presenciales, talleres, laboratorios y seminarios</td>
                            </tr>
                            <tr style="background:#FAFAFA;">
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Preparación y asesoría</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#C2410C;">4 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">20%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Preparación de clases, diseño de evaluaciones y tutorías</td>
                            </tr>
                            <tr>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Investigación / semilleros</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#C2410C;">3 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">15%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Semillero GESTNOVA, codirección de grado y productos</td>
                            </tr>
                            <tr style="background:#FAFAFA;">
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Proyección social / CIDRE</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#C2410C;">2 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">10%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Consultoría a Mipymes, actividades CUEES y extensión</td>
                            </tr>
                            <tr>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Gestión académico-admin.</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#C2410C;">1 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">5%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Reuniones de coordinación, comités e informes</td>
                            </tr>
                            <tr style="background:#1A1A1B; color:#FFFFFF; font-weight:800;">
                                <td style="padding:8px 10px;">TOTAL DOCENTE MT</td>
                                <td style="padding:8px 10px; text-align:center; color:#FBBF24; font-size:0.85rem;">20 h</td>
                                <td style="padding:8px 10px; text-align:center; color:#FBBF24;">100%</td>
                                <td style="padding:8px 10px; font-size:0.68rem; color:#E2E8F0;">Cumplimiento canónico Documento Maestro</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- TABLA 55: MT VIRTUAL -->
                <div style="border:1px solid #BFDBFE; border-radius:8px; overflow:hidden; background:#FFFFFF;">
                    <div style="background:#EFF6FF; padding:10px 14px; border-bottom:1px solid #BFDBFE;">
                        <h6 style="margin:0; font-size:0.82rem; font-weight:800; color:#1E40AF; font-family:'Montserrat';">
                            Tabla 55. Distribución de Horas – Docente MT Virtual
                        </h6>
                        <span style="font-size:0.7rem; color:#1E3A8A; font-weight:600;">Total Semanal: 20 Horas (100%)</span>
                    </div>
                    <table style="width:100%; border-collapse:collapse; font-size:0.73rem;">
                        <thead>
                            <tr style="background:#F8FAFC; color:#334155; border-bottom:1px solid #E2E8F0;">
                                <th style="padding:8px 10px; text-align:left;">Actividad Misional</th>
                                <th style="padding:8px 10px; text-align:center; width:65px;">Horas</th>
                                <th style="padding:8px 10px; text-align:center; width:60px;">%</th>
                                <th style="padding:8px 10px; text-align:left;">Descripción Operativa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Dinamización Campus LMS</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#1E40AF;">8 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">40%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Retroalimentación continua, foros, calificación y recursos</td>
                            </tr>
                            <tr style="background:#FAFAFA;">
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Sesiones sincrónicas & tutoría</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#1E40AF;">5 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">25%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Encuentros virtuales sincrónicos y asesorías grupales</td>
                            </tr>
                            <tr>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Diseño instruccional / OVAs</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#1E40AF;">2 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">10%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Creación y adaptación de contenidos, rúbricas y guías</td>
                            </tr>
                            <tr style="background:#FAFAFA;">
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Investigación formativa virtual</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#1E40AF;">3 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">15%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Semilleros mediados por TIC y producción académica</td>
                            </tr>
                            <tr>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Proyección / Tele-consultoría</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#1E40AF;">1 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">5%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Masterclasses virtuales y tele-consultoría a Mipymes</td>
                            </tr>
                            <tr style="background:#FAFAFA;">
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Gestión académico-admin.</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#1E40AF;">1 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">5%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Reuniones virtuales de coordinación e informes</td>
                            </tr>
                            <tr style="background:#1A1A1B; color:#FFFFFF; font-weight:800;">
                                <td style="padding:8px 10px;">TOTAL DOCENTE MT</td>
                                <td style="padding:8px 10px; text-align:center; color:#60A5FA; font-size:0.85rem;">20 h</td>
                                <td style="padding:8px 10px; text-align:center; color:#60A5FA;">100%</td>
                                <td style="padding:8px 10px; font-size:0.68rem; color:#E2E8F0;">Cumplimiento canónico Documento Maestro</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- TABLA 56: DOCENTE TIEMPO COMPLETO -->
                <div style="border:1px solid #DDD6FE; border-radius:8px; overflow:hidden; background:#FFFFFF;">
                    <div style="background:#F5F3FF; padding:10px 14px; border-bottom:1px solid #DDD6FE;">
                        <h6 style="margin:0; font-size:0.82rem; font-weight:800; color:#6D28D9; font-family:'Montserrat';">
                            Tabla 56. Distribución de Horas – Docente TC
                        </h6>
                        <span style="font-size:0.7rem; color:#5B21B6; font-weight:600;">Total Semanal: 40 Horas (100%)</span>
                    </div>
                    <table style="width:100%; border-collapse:collapse; font-size:0.73rem;">
                        <thead>
                            <tr style="background:#F8FAFC; color:#334155; border-bottom:1px solid #E2E8F0;">
                                <th style="padding:8px 10px; text-align:left;">Actividad Misional</th>
                                <th style="padding:8px 10px; text-align:center; width:65px;">Horas</th>
                                <th style="padding:8px 10px; text-align:center; width:60px;">%</th>
                                <th style="padding:8px 10px; text-align:left;">Descripción Operativa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Docencia / tutoría especializada</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#6D28D9;">20 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">50%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Clases presenciales o dinamización virtual según asignación</td>
                            </tr>
                            <tr style="background:#FAFAFA;">
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Investigación & semilleros</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#6D28D9;">12 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">30%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Liderazgo de proyectos, dirección de grado y publicaciones</td>
                            </tr>
                            <tr>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Proyección social / extensión</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#6D28D9;">5 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">12.5%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Coordinación CIDRE, CUEES, consultoría y diplomados</td>
                            </tr>
                            <tr style="background:#FAFAFA;">
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Gestión académico-admin.</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#6D28D9;">3 h</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:700;">7.5%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Coordinación de área, comités curriculares y seguimiento</td>
                            </tr>
                            <tr style="background:#1A1A1B; color:#FFFFFF; font-weight:800;">
                                <td style="padding:8px 10px;">TOTAL DOCENTE TC</td>
                                <td style="padding:8px 10px; text-align:center; color:#C084FC; font-size:0.85rem;">40 h</td>
                                <td style="padding:8px 10px; text-align:center; color:#C084FC;">100%</td>
                                <td style="padding:8px 10px; font-size:0.68rem; color:#E2E8F0;">Dedicación completa a las 4 misiones</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- SUBSECCIÓN 3: MAPA DE COHERENCIA Y VERIFICACIÓN POR DOCENTE -->
    <div id="c7-sec-coherencia" class="c7-sub-panel" style="display:none;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="margin-bottom:14px;">
                <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                    <i class="fas fa-sitemap" style="color:#2563EB;"></i> Coherencia Curricular y Verificación de Compromisos
                </h5>
                <p style="margin:0; font-size:0.78rem; color:#64748B;">
                    Alineación integral entre las Condiciones de Calidad del Decreto 1330 y las horas asignadas por tipo de vinculación (Tabla 57), con verificación nominal por docente (Tabla 58).
                </p>
            </div>

            <!-- TABLA 57: MAPA DE COHERENCIA -->
            <div style="margin-bottom:20px;">
                <div style="background:#EEF2FF; border:1px solid #C7D2FE; border-radius:6px; padding:8px 12px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:800; font-size:0.82rem; color:#3730A3;">
                        <i class="fas fa-project-diagram mr-1"></i> Tabla 57. Mapa de Coherencia: Condiciones de Calidad vs. Horas Docentes por Tipo de Vinculación
                    </span>
                    <span style="background:#3730A3; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">Articulación Misional</span>
                </div>
                <div style="overflow-x:auto; border:1px solid #CBD5E1; border-radius:8px;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.75rem; background:#FFFFFF;">
                        <thead>
                            <tr style="background:#1A1A1B; color:#FFFFFF;">
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155; width:220px;">Condición de Calidad (CC)</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:130px;">Horas MT Presencial</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:130px;">Horas MT Virtual</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:110px;">Horas TC</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Actividades Específicas del Programa que se Materializan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1E293B;">
                                    <i class="fas fa-book-open" style="color:#F39200; margin-right:4px;"></i> CC3 – Aspectos Curriculares
                                </td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#C2410C;">10 h docencia + 4 h prep. (14 h)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1E40AF;">8 h campus + 2 h instruc. (10 h)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#6D28D9;">20 h docencia / tutoría</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569; line-height:1.45;">
                                    Ejecución del plan de estudios único (144 créditos, 8 semestres); aplicación de metodologías activas (ABP, método de casos, proyectos de aula en contexto); cobertura articulada de las 3 áreas curriculares (transversal, disciplinar y electiva).
                                </td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1E293B;">
                                    <i class="fas fa-tasks" style="color:#2563EB; margin-right:4px;"></i> CC4 – Organización de Actividades
                                </td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#C2410C;">4 h asesoría + 1 h gestión</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1E40AF;">5 h sesiones + 1 h gestión (6 h)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#6D28D9;">3 h gestión académica</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569; line-height:1.45;">
                                    Acompañamiento tutorial continuo al trabajo autónomo del estudiante (relación 1:2 presencial y 1:3 virtual); evaluación formativa mediante rúbricas; seguimiento a Syllabus y resultados de aprendizaje; intervención preventiva contra la deserción.
                                </td>
                            </tr>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1E293B;">
                                    <i class="fas fa-flask" style="color:#16A34A; margin-right:4px;"></i> CC5 – Investigación
                                </td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#C2410C;">3 h investigación</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1E40AF;">3 h investigación</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#6D28D9;">12 h invest. & semilleros</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569; line-height:1.45;">
                                    Participación activa en el Semillero GESTNOVA; desarrollo de la ruta de investigación formativa (Sems. IV–VIII); codirección de proyectos de grado aplicados; generación de productos de nuevo conocimiento para el grupo COLLEGIUM (Minciencias).
                                </td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#1E293B;">
                                    <i class="fas fa-handshake" style="color:#9333EA; margin-right:4px;"></i> CC6 – Sector Externo & Proyección
                                </td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#C2410C;">2 h extensión</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#1E40AF;">1 h tele-consultoría</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#6D28D9;">5 h sector externo</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569; line-height:1.45;">
                                    Consultorio empresarial CIDRE presencial y tele-consultoría nacional en los 32 departamentos y Bogotá D.C.; participación en mesas CUEES Santander; supervisión de prácticas empresariales y remotas; oferta de educación continua.
                                </td>
                            </tr>
                            <tr style="background:#1A1A1B; color:#FFFFFF; font-weight:800;">
                                <td style="padding:9px 12px;">TOTAL HORAS POR VINCULACIÓN</td>
                                <td style="padding:9px 12px; text-align:center; color:#FBBF24; font-size:0.85rem;">20 h Semanales</td>
                                <td style="padding:9px 12px; text-align:center; color:#60A5FA; font-size:0.85rem;">20 h Semanales</td>
                                <td style="padding:9px 12px; text-align:center; color:#C084FC; font-size:0.85rem;">40 h Semanales</td>
                                <td style="padding:9px 12px; color:#E2E8F0; font-size:0.7rem;">Cobertura integral y equilibrada de las 4 condiciones en ambas modalidades.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- TABLA 58: VERIFICACIÓN POR DOCENTE -->
            <div>
                <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:8px 12px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:800; font-size:0.82rem; color:#15803D;">
                        <i class="fas fa-user-check mr-1"></i> Tabla 58. Verificación por Docente: Asignación Horaria y Compromisos de Condiciones de Calidad
                    </span>
                    <span style="background:#15803D; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">Evidencia Nominal</span>
                </div>
                <div style="overflow-x:auto; border:1px solid #CBD5E1; border-radius:8px;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.74rem; background:#FFFFFF;">
                        <thead>
                            <tr style="background:#1A1A1B; color:#FFFFFF;">
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155; width:200px;">Docente</th>
                                <th style="padding:9px 12px; text-align:center; border:1px solid #334155; width:110px;">Tipo Vínculo</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Actividades Concretas Asignadas (Semestres del Plan)</th>
                                <th style="padding:9px 12px; text-align:left; border:1px solid #334155;">Compromisos de Condiciones de Calidad Materializados</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Andrea Katherine Hernández</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT 20 h</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Asignaturas: Big Data y Analítica / Sistemas Integrados de Gestión / TICs aplicadas (Sems. 1–4). Apoyo a semillero GESTNOVA. Consultoría virtual Mipymes (CIDRE).</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> herramientas digitales aplicadas. <strong>CC4:</strong> dinamización LMS. <strong>CC5:</strong> analítica de datos. <strong>CC6:</strong> consultoría virtual empresarial.</td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Cristian Pérez Chaparro</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT 20 h</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Asignaturas: Análisis Financiero / Adm. Financiera / Matemática Financiera (Sems. 3–6). Apoyo a semillero. Consultoría financiera a Mipymes.</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> área financiera del plan. <strong>CC4:</strong> asesoría y retroalimentación formativa. <strong>CC5:</strong> finanzas empresariales. <strong>CC6:</strong> consultoría financiera aplicada.</td>
                            </tr>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Iván Leonidas Mantilla Jaimes</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT 20 h</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Asignaturas: Modelos de Emprendimiento / Lab. Innovación / Gerencia de Marketing (Sems. 4–7). Semillero. Participación activa CUEES Santander.</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> emprendimiento e innovación. <strong>CC4:</strong> metodologías activas (Lean Canvas). <strong>CC5:</strong> innovación social. <strong>CC6:</strong> articulación CUEES y Fondo Emprender.</td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Jean Margareth Correa Gustines</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT 20 h</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Asignaturas: Gestión del Talento Humano / Habilidades Gerenciales / Formulación y Evaluación de Proyectos (Sems. 4–7). Semillero. Educación continua.</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> gestión humana y proyectos. <strong>CC4:</strong> evaluación por competencias y rúbricas. <strong>CC5:</strong> gestión organizacional. <strong>CC6:</strong> educación continua con el sector.</td>
                            </tr>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Leonardo Fabio Pérez Vega</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT 20 h</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Asignaturas: Costos y Presupuesto / Gerencia de Operaciones / Pensamiento Estratégico (Sems. 3–8). Semillero. Diplomados de extensión.</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> operaciones y estrategia. <strong>CC4:</strong> proyectos de aula en empresas reales. <strong>CC5:</strong> gestión de operaciones. <strong>CC6:</strong> diplomados en gerencia de proyectos.</td>
                            </tr>
                            <tr style="background:#F8FAFC;">
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Alejandro Almeyda Camargo</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DCFCE7; color:#15803D; font-weight:800; padding:2px 8px; border-radius:4px;">MT 20 h</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Asignaturas: Negocios e Internacionalización / E-commerce / Investigación de Mercados (Sems. 5–8). Semillero. Red de egresados.</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> negocios internacionales y mercadeo. <strong>CC4:</strong> laboratorios de e-commerce real. <strong>CC5:</strong> negocios globales. <strong>CC6:</strong> vinculación con actores de comercio exterior.</td>
                            </tr>
                            <tr>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; font-weight:800; color:#0F172A;">Docente TC (Líder Coordinación & GESTNOVA)</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; text-align:center;"><span style="background:#DBEAFE; color:#1E40AF; font-weight:800; padding:2px 8px; border-radius:4px;">TC 40 h</span></td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0;">Asignaturas: Competencias Investigativas / Proyectos de Grado (Sems. 4–8, ambas modalidades). Dirección GESTNOVA. Coordinación CIDRE y CUEES.</td>
                                <td style="padding:8px 12px; border:1px solid #E2E8F0; color:#475569;"><strong>CC3:</strong> transversalidad investigativa. <strong>CC4:</strong> articulación curricular. <strong>CC5:</strong> liderazgo del sistema de investigación. <strong>CC6:</strong> enlace estratégico CIDRE y CUEES.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- SUBSECCIÓN 4: PROYECCIÓN A 7 AÑOS (TABLA 54 PROYECCIÓN) -->
    <div id="c7-sec-proyeccion" class="c7-sub-panel" style="display:none;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:14px;">
                <div>
                    <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                        <i class="fas fa-chart-line" style="color:#F39200;"></i> Proyección Diferenciada de Planta Docente a 7 Años
                    </h5>
                    <p style="margin:0; font-size:0.78rem; color:#64748B;">
                        Tabla 54 del Documento Maestro: Horizonte 2026-1 a 2031-2 (cohorte plena). Crecimiento escalonado y sostenible de 17 a 52 docentes manteniendo ratios estudiante/docente óptimos.
                    </p>
                </div>
                <div style="display:flex; gap:8px;">
                    <span style="background:#FFF7ED; color:#EA580C; border:1px solid #FDBA74; font-weight:800; font-size:0.73rem; padding:4px 10px; border-radius:16px;">
                        Ratio Presencial: 1:15 a 1:22
                    </span>
                    <span style="background:#EFF6FF; color:#2563EB; border:1px solid #93C5FD; font-weight:800; font-size:0.73rem; padding:4px 10px; border-radius:16px;">
                        Ratio Virtual: 1:27 a 1:40
                    </span>
                </div>
            </div>

            <!-- GRÁFICO DE TENDENCIA PROSPECTIVA -->
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:16px; margin-bottom:18px;">
                <div style="font-size:0.8rem; font-weight:800; color:#1E293B; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                    <span><i class="fas fa-project-diagram" style="color:#F39200;"></i> Crecimiento Armónico: Población Estudiantil vs. Planta Profesoral (Cohorte Plena)</span>
                    <span style="font-size:0.7rem; color:#16A34A; font-weight:700;"><i class="fas fa-arrow-up"></i> Sostenibilidad Garantizada</span>
                </div>
                <canvas id="c7ProyeccionChart" style="max-height:230px;"></canvas>
            </div>

            <!-- TABLA 54 PROYECCIÓN COMPLETA -->
            <div style="overflow-x:auto; border:1px solid #CBD5E1; border-radius:8px;">
                <table style="width:100%; border-collapse:collapse; font-size:0.74rem; background:#FFFFFF;">
                    <thead>
                        <tr style="background:#1A1A1B; color:#FFFFFF;">
                            <th rowspan="2" style="padding:10px 12px; text-align:center; border:1px solid #334155; width:90px;">Periodo</th>
                            <th colspan="3" style="padding:6px 12px; text-align:center; border:1px solid #334155; background:#C2410C;">Modalidad Presencial</th>
                            <th colspan="3" style="padding:6px 12px; text-align:center; border:1px solid #334155; background:#1D4ED8;">Modalidad Virtual</th>
                            <th colspan="3" style="padding:6px 12px; text-align:center; border:1px solid #334155; background:#15803D;">Total Programa (RU)</th>
                        </tr>
                        <tr style="background:#334155; color:#FFFFFF;">
                            <th style="padding:6px 8px; text-align:center; border:1px solid #475569;">Estudiantes</th>
                            <th style="padding:6px 8px; text-align:center; border:1px solid #475569;">Docentes (MT/TC)</th>
                            <th style="padding:6px 8px; text-align:center; border:1px solid #475569;">Ratio</th>
                            <th style="padding:6px 8px; text-align:center; border:1px solid #475569;">Estudiantes</th>
                            <th style="padding:6px 8px; text-align:center; border:1px solid #475569;">Docentes (MT/TC)</th>
                            <th style="padding:6px 8px; text-align:center; border:1px solid #475569;">Ratio</th>
                            <th style="padding:6px 8px; text-align:center; border:1px solid #475569;">Estudiantes</th>
                            <th style="padding:6px 8px; text-align:center; border:1px solid #475569;">Docentes</th>
                            <th style="padding:6px 8px; text-align:center; border:1px solid #475569;">Ratio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">2026-1</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">60</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">4 MT + 2 TC = 6</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#C2410C; font-weight:800;">1:15</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">240</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">8 MT + 3 TC = 11</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:800;">1:27</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">300</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">17</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1:23</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">2026-2</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">90</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">4 MT + 2 TC = 6</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#C2410C; font-weight:800;">1:15</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">360</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">10 MT + 3 TC = 13</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:800;">1:30</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">450</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">19</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1:25</td>
                        </tr>
                        <tr>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">2027-1</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">120</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">5 MT + 2 TC = 7</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#C2410C; font-weight:800;">1:17</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">480</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">12 MT + 3 TC = 15</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:800;">1:32</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">600</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">22</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1:27</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">2027-2</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">150</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">6 MT + 2 TC = 8</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#C2410C; font-weight:800;">1:19</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">600</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">15 MT + 3 TC = 18</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:800;">1:33</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">750</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">26</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1:29</td>
                        </tr>
                        <tr>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">2028-1</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">180</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">7 MT + 2 TC = 9</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#C2410C; font-weight:800;">1:20</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">720</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">18 MT + 4 TC = 22</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:800;">1:33</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">900</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">31</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1:29</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">2028-2</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">210</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">8 MT + 2 TC = 10</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#C2410C; font-weight:800;">1:21</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">840</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">20 MT + 4 TC = 24</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:800;">1:35</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1050</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">34</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1:31</td>
                        </tr>
                        <tr>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">2029-1</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">240</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">9 MT + 3 TC = 12</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#C2410C; font-weight:800;">1:20</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">960</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">22 MT + 5 TC = 27</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:800;">1:36</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1200</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">39</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1:31</td>
                        </tr>
                        <tr style="background:#F8FAFC;">
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">2029-2</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">270</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">10 MT + 3 TC = 13</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#C2410C; font-weight:800;">1:21</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">1080</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">24 MT + 5 TC = 29</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:800;">1:37</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1350</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">42</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1:32</td>
                        </tr>
                        <tr>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">2030-1</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">300</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">11 MT + 3 TC = 14</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#C2410C; font-weight:800;">1:21</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center;">1200</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:700;">25 MT + 6 TC = 31</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; color:#1D4ED8; font-weight:800;">1:39</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1500</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800; color:#15803D;">45</td>
                            <td style="padding:7px 10px; border:1px solid #E2E8F0; text-align:center; font-weight:800;">1:33</td>
                        </tr>
                        <tr style="background:#FFFBEB; font-weight:800; border-top:2px solid #F59E0B;">
                            <td style="padding:8px 10px; border:1px solid #FDE68A; text-align:center; color:#B45309;">2031-2 (Cohorte Plena)</td>
                            <td style="padding:8px 10px; border:1px solid #FDE68A; text-align:center;">360</td>
                            <td style="padding:8px 10px; border:1px solid #FDE68A; text-align:center; color:#B45309;">12 MT + 4 TC = 16</td>
                            <td style="padding:8px 10px; border:1px solid #FDE68A; text-align:center; color:#C2410C;">1:22</td>
                            <td style="padding:8px 10px; border:1px solid #FDE68A; text-align:center;">1440</td>
                            <td style="padding:8px 10px; border:1px solid #FDE68A; text-align:center; color:#1E40AF;">28 MT + 8 TC = 36</td>
                            <td style="padding:8px 10px; border:1px solid #FDE68A; text-align:center; color:#1D4ED8;">1:40</td>
                            <td style="padding:8px 10px; border:1px solid #FDE68A; text-align:center; color:#15803D; font-size:0.85rem;">1.800</td>
                            <td style="padding:8px 10px; border:1px solid #FDE68A; text-align:center; color:#15803D; font-size:0.85rem;">52 Docentes</td>
                            <td style="padding:8px 10px; border:1px solid #FDE68A; text-align:center; color:#15803D; font-size:0.85rem;">1:34</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- SUBSECCIÓN 5: ESTATUTO, SELECCIÓN & VINCULACIÓN (PPTX SLIDES 2 A 8) -->
    <div id="c7-sec-seleccion" class="c7-sub-panel" style="display:none;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="margin-bottom:14px;">
                <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                    <i class="fas fa-file-contract" style="color:#C2410C;"></i> Gobernanza Docente: Estatuto, Selección Meritocrática & Vinculación
                </h5>
                <p style="margin:0; font-size:0.78rem; color:#64748B;">
                    Estructura formal de gestión profesoral sustentada en el Estatuto Docente institucional y acuerdos reglamentarios de la Corporación Escuela Tecnológica del Oriente.
                </p>
            </div>

            <!-- 5 PILARES DEL ESTATUTO DOCENTE (SLIDE 2) -->
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:16px; margin-bottom:18px;">
                <h6 style="margin:0 0 12px; font-size:0.85rem; font-weight:800; color:#1E293B; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-landmark" style="color:#F39200;"></i> Los 5 Pilares del Estatuto Docente Institucional
                </h6>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(190px, 1fr)); gap:10px;">
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:3px solid #10B981; border-radius:8px; padding:12px; text-align:center;">
                        <div style="width:36px; height:36px; background:#D1FAE5; color:#059669; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:1.1rem;"><i class="fas fa-balance-scale"></i></div>
                        <h6 style="margin:0 0 4px; font-size:0.8rem; font-weight:800; color:#065F46;">Derechos y Deberes</h6>
                        <p style="margin:0; font-size:0.72rem; color:#64748B; line-height:1.4;">Define claramente las libertades académicas, derechos y responsabilidades de los profesores.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:3px solid #84CC16; border-radius:8px; padding:12px; text-align:center;">
                        <div style="width:36px; height:36px; background:#ECFCCB; color:#65A30D; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:1.1rem;"><i class="fas fa-users"></i></div>
                        <h6 style="margin:0 0 4px; font-size:0.8rem; font-weight:800; color:#4D7C0F;">Gobierno Institucional</h6>
                        <p style="margin:0; font-size:0.72rem; color:#64748B; line-height:1.4;">Garantiza la participación profesoral en Consejos Directivos, Académicos y Comités Curriculares.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:3px solid #0EA5E9; border-radius:8px; padding:12px; text-align:center;">
                        <div style="width:36px; height:36px; background:#E0F2FE; color:#0284C7; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:1.1rem;"><i class="fas fa-user-plus"></i></div>
                        <h6 style="margin:0 0 4px; font-size:0.8rem; font-weight:800; color:#0369A1;">Selección y Vinculación</h6>
                        <p style="margin:0; font-size:0.72rem; color:#64748B; line-height:1.4;">Procedimiento meritocrático y transparente para atraer y contratar el mejor talento docente.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:3px solid #EAB308; border-radius:8px; padding:12px; text-align:center;">
                        <div style="width:36px; height:36px; background:#FEF9C3; color:#CA8A04; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:1.1rem;"><i class="fas fa-file-signature"></i></div>
                        <h6 style="margin:0 0 4px; font-size:0.8rem; font-weight:800; color:#A16207;">Funciones y Contratación</h6>
                        <p style="margin:0; font-size:0.72rem; color:#64748B; line-height:1.4;">Estipula tipos de contrato (Indefinido, Fijo, Ocasional) y asignación horaria equilibrada.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-top:3px solid #F97316; border-radius:8px; padding:12px; text-align:center;">
                        <div style="width:36px; height:36px; background:#FFEDD5; color:#EA580C; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 8px; font-size:1.1rem;"><i class="fas fa-chart-pie"></i></div>
                        <h6 style="margin:0 0 4px; font-size:0.8rem; font-weight:800; color:#C2410C;">Evaluación y Formación</h6>
                        <p style="margin:0; font-size:0.72rem; color:#64748B; line-height:1.4;">Evalúa el desempeño integral mediante modelo 360° y fomenta el plan de cualificación.</p>
                    </div>
                </div>
            </div>

            <!-- PROCESO DE SELECCIÓN EN 7 FASES (SLIDE 4) -->
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:16px; margin-bottom:18px;">
                <h6 style="margin:0 0 12px; font-size:0.85rem; font-weight:800; color:#1E293B; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-route" style="color:#2563EB;"></i> Ruta Metodológica del Proceso de Selección Docente (7 Fases)
                </h6>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(135px, 1fr)); gap:8px; position:relative;">
                    <div style="background:#FEFCE8; border:1px solid #FEF08A; border-radius:6px; padding:10px; text-align:center;">
                        <span style="background:#CA8A04; color:#FFFFFF; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:800; margin-bottom:4px;">1</span>
                        <div style="font-size:0.75rem; font-weight:800; color:#854D0E;">Requisición de Perfil</div>
                        <div style="font-size:0.67rem; color:#713F12; margin-top:2px;">Criterios específicos por escuela</div>
                    </div>
                    <div style="background:#FFF7ED; border:1px solid #FED7AA; border-radius:6px; padding:10px; text-align:center;">
                        <span style="background:#EA580C; color:#FFFFFF; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:800; margin-bottom:4px;">2</span>
                        <div style="font-size:0.75rem; font-weight:800; color:#9A3412;">Publicación Convocatoria</div>
                        <div style="font-size:0.67rem; color:#7C2D12; margin-top:2px;">Difusión pública de vacantes</div>
                    </div>
                    <div style="background:#FEF2F2; border:1px solid #FECACA; border-radius:6px; padding:10px; text-align:center;">
                        <span style="background:#DC2626; color:#FFFFFF; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:800; margin-bottom:4px;">3</span>
                        <div style="font-size:0.75rem; font-weight:800; color:#991B1B;">Filtro de Hoja de Vida</div>
                        <div style="font-size:0.67rem; color:#7F1D1D; margin-top:2px;">Validación títulos y experiencia</div>
                    </div>
                    <div style="background:#FDF2F8; border:1px solid #FBCFE8; border-radius:6px; padding:10px; text-align:center;">
                        <span style="background:#DB2777; color:#FFFFFF; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:800; margin-bottom:4px;">4</span>
                        <div style="font-size:0.75rem; font-weight:800; color:#9D174D;">Micro-Clase</div>
                        <div style="font-size:0.67rem; color:#831843; margin-top:2px;">Demostración pedagógica</div>
                    </div>
                    <div style="background:#FAF5FF; border:1px solid #E9D5FF; border-radius:6px; padding:10px; text-align:center;">
                        <span style="background:#9333EA; color:#FFFFFF; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:800; margin-bottom:4px;">5</span>
                        <div style="font-size:0.75rem; font-weight:800; color:#6B21A8;">Pruebas Psicotécnicas</div>
                        <div style="font-size:0.67rem; color:#581C87; margin-top:2px;">Evaluación conductual</div>
                    </div>
                    <div style="background:#EEF2FF; border:1px solid #C7D2FE; border-radius:6px; padding:10px; text-align:center;">
                        <span style="background:#4F46E5; color:#FFFFFF; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:800; margin-bottom:4px;">6</span>
                        <div style="font-size:0.75rem; font-weight:800; color:#3730A3;">Aprobación Contratación</div>
                        <div style="font-size:0.67rem; color:#312E81; margin-top:2px;">Comité de Talento Humano</div>
                    </div>
                    <div style="background:#F0FDF4; border:1px solid #BBF7D0; border-radius:6px; padding:10px; text-align:center;">
                        <span style="background:#16A34A; color:#FFFFFF; width:22px; height:22px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; font-weight:800; margin-bottom:4px;">7</span>
                        <div style="font-size:0.75rem; font-weight:800; color:#166534;">Vinculación Definitiva</div>
                        <div style="font-size:0.67rem; color:#14532D; margin-top:2px;">Inducción y asignación carga</div>
                    </div>
                </div>
            </div>

            <!-- CRITERIOS DE SELECCIÓN DOCENTE (SLIDE 7) -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:16px;">
                <div style="border:1px solid #E2E8F0; border-radius:8px; overflow:hidden;">
                    <div style="background:#1A1A1B; color:#FFFFFF; padding:10px 14px; display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:800; font-size:0.82rem;">Criterios de Ponderación para Selección (100%)</span>
                        <span style="background:#F39200; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">Slide 7 PPT</span>
                    </div>
                    <table style="width:100%; border-collapse:collapse; font-size:0.74rem;">
                        <thead>
                            <tr style="background:#F8FAFC; color:#334155; border-bottom:1px solid #E2E8F0;">
                                <th style="padding:8px 10px; text-align:center; width:65px;">%</th>
                                <th style="padding:8px 10px; text-align:left; width:120px;">Concepto</th>
                                <th style="padding:8px 10px; text-align:left;">Detalle Evaluativo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#C2410C;">15%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Análisis de Hoja de Vida</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Educación formal (3%), Formación continua (3%), Experiencia profesional (3%), Experiencia docente/investigativa (3%), Publicaciones (3%).</td>
                            </tr>
                            <tr style="background:#FAFAFA;">
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#2563EB;">25%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Entrevista Personal</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Conocimientos específicos (7%), Dominio técnico (7%), Trayectoria investigativa (7%), Competencias pedagógicas (4%).</td>
                            </tr>
                            <tr>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#16A34A;">35%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Micro-Clase Demostrativa</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Evaluación de habilidades pedagógicas en vivo aplicando las fases del modelo institucional "Formación en Contextos de Aplicación".</td>
                            </tr>
                            <tr style="background:#FAFAFA;">
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#9333EA;">25%</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Evaluación Psicotécnica</td>
                                <td style="padding:8px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Competencias institucionales y conductuales asignadas por el área de Talento Humano (Elegible 25% / No Elegible 0%).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style="border:1px solid #E2E8F0; border-radius:8px; padding:14px; background:#F8FAFC; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <h6 style="margin:0 0 8px; font-size:0.85rem; font-weight:800; color:#1E293B; display:flex; align-items:center; gap:6px;">
                            <i class="fas fa-hand-holding-usd" style="color:#16A34A;"></i> Tipología y Régimen de Vinculación
                        </h6>
                        <p style="font-size:0.75rem; color:#475569; line-height:1.45; margin:0 0 10px;">
                            La contratación profesoral se rige por la legislación laboral colombiana y el Estatuto Docente, garantizando estabilidad y carrera académica:
                        </p>
                        <ul style="margin:0; padding-left:18px; font-size:0.74rem; color:#475569; line-height:1.5;">
                            <li><strong>Contrato a Término Indefinido:</strong> Para profesores de planta permanente y líderes de investigación/coordinación.</li>
                            <li><strong>Contrato a Término Fijo:</strong> Vinculación anual o semestral renovable según evaluaciones de desempeño docente.</li>
                            <li><strong>Contrato Ocasional o Temporal:</strong> Cátedras especializadas o módulos de profundización y educación continua.</li>
                            <li><strong>Comité de Contratación (Slide 6):</strong> Sesiona antes de cada periodo para analizar resultados de evaluación docente, requerimientos por escuela y validar las nuevas contrataciones.</li>
                        </ul>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:10px; margin-top:12px;">
                        <span style="font-size:0.72rem; font-weight:700; color:#16A34A;"><i class="fas fa-shield-alt mr-1"></i> Garantía Jurídica y Prestacional:</span>
                        <div style="font-size:0.7rem; color:#64748B; margin-top:2px;">100% de los docentes vinculados cuentan con afiliación plena al Sistema General de Seguridad Social (Salud, Pensión, ARL Riesgo I y Caja de Compensación Comfenalco/Cajasan).</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SUBSECCIÓN 6: CUALIFICACIÓN, BIENESTAR Y EVALUACIÓN 360° -->
    <div id="c7-sec-desarrollo" class="c7-sub-panel" style="display:none;">
        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:10px; padding:18px; margin-bottom:18px; box-shadow:0 2px 8px rgba(0,0,0,0.03);">
            <div style="margin-bottom:14px;">
                <h5 style="margin:0 0 4px; font-size:1.05rem; font-weight:800; color:#1A1A1B; font-family:'Montserrat';">
                    <i class="fas fa-award" style="color:#F39200;"></i> Plan de Cualificación, Bienestar y Evaluación del Desempeño
                </h5>
                <p style="margin:0; font-size:0.78rem; color:#64748B;">
                    Evidencias de impacto positivo institucional (Slide 13 PPT), dimensiones de bienestar integral y modelo de evaluación docente triádico (Autoevaluación, Heteroevaluación y Coevaluación).
                </p>
            </div>

            <!-- TARJETAS DE IMPACTOS POSITIVOS DE LA DIAPOSITIVA 13 -->
            <div style="background:linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%); border:1.5px solid #FDE68A; border-radius:10px; padding:16px; margin-bottom:18px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span style="font-weight:900; font-size:0.85rem; color:#92400E; text-transform:uppercase; letter-spacing:0.5px; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-star" style="color:#D97706;"></i> Impactos Positivos de la Cualificación Docente (Diapositiva 13 Oficial)
                    </span>
                    <span style="background:#D97706; color:#FFFFFF; font-size:0.68rem; font-weight:800; padding:2px 8px; border-radius:10px;">Evidencias Verificadas</span>
                </div>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(230px, 1fr)); gap:10px;">
                    <div style="background:#FFFFFF; border:1px solid #FDE68A; border-radius:8px; padding:12px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
                        <div style="font-size:1.2rem; font-weight:900; color:#B45309; font-family:'Montserrat'; margin-bottom:2px;">8 Docentes Becados</div>
                        <div style="font-size:0.74rem; font-weight:700; color:#1E293B; margin-bottom:3px;">Doctorado en Educación – UPEL</div>
                        <p style="margin:0; font-size:0.7rem; color:#64748B; line-height:1.4;">Becas institucionales del 40% para cursar estudios doctorales, elevando la masa crítica investigativa del programa.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #FDE68A; border-radius:8px; padding:12px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
                        <div style="font-size:1.2rem; font-weight:900; color:#15803D; font-family:'Montserrat'; margin-bottom:2px;">100% Certificados</div>
                        <div style="font-size:0.74rem; font-weight:700; color:#1E293B; margin-bottom:3px;">Formación SENA Presencial y Virtual</div>
                        <p style="margin:0; font-size:0.7rem; color:#64748B; line-height:1.4;">Certificación oficial en la competencia de *"Orientar procesos formativos en modalidad virtual y presencial"*.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #FDE68A; border-radius:8px; padding:12px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
                        <div style="font-size:1.2rem; font-weight:900; color:#2563EB; font-family:'Montserrat'; margin-bottom:2px;">100% Capacitados</div>
                        <div style="font-size:0.74rem; font-weight:700; color:#1E293B; margin-bottom:3px;">Nuevas Tecnologías e Innovación</div>
                        <p style="margin:0; font-size:0.7rem; color:#64748B; line-height:1.4;">Procesos continuos de cualificación en herramientas digitales, analítica educativa y plataformas LMS avanzadas.</p>
                    </div>
                    <div style="background:#FFFFFF; border:1px solid #FDE68A; border-radius:8px; padding:12px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
                        <div style="font-size:1.2rem; font-weight:900; color:#9333EA; font-family:'Montserrat'; margin-bottom:2px;">100% Actualizados</div>
                        <div style="font-size:0.74rem; font-weight:700; color:#1E293B; margin-bottom:3px;">Resultados de Aprendizaje & Bloom</div>
                        <p style="margin:0; font-size:0.7rem; color:#64748B; line-height:1.4;">Alineación pedagógica rigurosa con el Decreto 1330 y formulación de rúbricas por resultados de aprendizaje.</p>
                    </div>
                </div>
            </div>

            <!-- PLAN DE CUALIFICACIÓN (6 COMPONENTES) Y BIENESTAR (ISHIKAWA) -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:16px; margin-bottom:20px;">
                <!-- 6 COMPONENTES DE CUALIFICACIÓN -->
                <div style="border:1px solid #E2E8F0; border-radius:8px; padding:14px; background:#F8FAFC;">
                    <h6 style="margin:0 0 10px; font-size:0.84rem; font-weight:800; color:#1E293B; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-lightbulb" style="color:#CA8A04;"></i> Plan de Cualificación: 6 Componentes Formativos (Slide 11)
                    </h6>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:8px;">
                            <div style="font-weight:800; font-size:0.74rem; color:#059669;">1. Pedagógico & Didáctico</div>
                            <div style="font-size:0.68rem; color:#64748B;">Metodologías activas, ABP y rúbricas.</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:8px;">
                            <div style="font-weight:800; font-size:0.74rem; color:#65A30D;">2. Disciplinar</div>
                            <div style="font-size:0.68rem; color:#64748B;">Finanzas, mercadeo y estrategia digital.</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:8px;">
                            <div style="font-weight:800; font-size:0.74rem; color:#0284C7;">3. Investigativo</div>
                            <div style="font-size:0.68rem; color:#64748B;">Semilleros, artículos y Minciencias.</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:8px;">
                            <div style="font-weight:800; font-size:0.74rem; color:#4F46E5;">4. Institucional</div>
                            <div style="font-size:0.68rem; color:#64748B;">Cultura organizacional y modelo TO.</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:8px;">
                            <div style="font-weight:800; font-size:0.74rem; color:#9333EA;">5. Tecnológico</div>
                            <div style="font-size:0.68rem; color:#64748B;">LMS Moodle, Big Data y analítica.</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:8px;">
                            <div style="font-weight:800; font-size:0.74rem; color:#DB2777;">6. Interacción Social</div>
                            <div style="font-size:0.68rem; color:#64748B;">Consultoría CIDRE y CUEES.</div>
                        </div>
                    </div>
                </div>

                <!-- BIENESTAR INTEGRAL DOCENTE (ISHIKAWA) -->
                <div style="border:1px solid #E2E8F0; border-radius:8px; padding:14px; background:#F8FAFC;">
                    <h6 style="margin:0 0 10px; font-size:0.84rem; font-weight:800; color:#1E293B; display:flex; align-items:center; gap:6px;">
                        <i class="fas fa-heartbeat" style="color:#DC2626;"></i> Bienestar Integral Docente (Modelo Ishikawa - Slide 15)
                    </h6>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:8px;">
                            <div style="font-weight:800; font-size:0.74rem; color:#16A34A;">Bienestar Físico</div>
                            <div style="font-size:0.68rem; color:#64748B;">Pausas activas, ergonomía y salud ocupacional.</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:8px;">
                            <div style="font-weight:800; font-size:0.74rem; color:#2563EB;">Desarrollo Profesional</div>
                            <div style="font-size:0.68rem; color:#64748B;">Becas UPEL, ascensos en escalafón y eventos.</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:8px;">
                            <div style="font-weight:800; font-size:0.74rem; color:#0284C7;">Bienestar Emocional</div>
                            <div style="font-size:0.68rem; color:#64748B;">Apoyo psicosocial y equilibrio vida-trabajo.</div>
                        </div>
                        <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:6px; padding:8px;">
                            <div style="font-weight:800; font-size:0.74rem; color:#D97706;">Cohesión de Equipo</div>
                            <div style="font-size:0.68rem; color:#64748B;">Jornadas de integración y distinciones al mérito.</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SISTEMA DE EVALUACIÓN DOCENTE TRIÁDICO 360° (SLIDES 18, 19 Y 20) -->
            <div style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:8px; padding:16px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
                    <div>
                        <h6 style="margin:0 0 2px; font-size:0.86rem; font-weight:800; color:#1E293B; display:flex; align-items:center; gap:6px;">
                            <i class="fas fa-sync-alt" style="color:#4F46E5;"></i> Sistema Triádico de Evaluación Docente (Estatuto Docente Art. 16)
                        </h6>
                        <span style="font-size:0.72rem; color:#64748B;">Modelo 360° articulado con planes de mejoramiento individual y colectivo</span>
                    </div>
                    <span style="background:#EEF2FF; color:#4338CA; font-size:0.7rem; font-weight:800; padding:3px 10px; border-radius:12px;">
                        Autoevaluación (20%) · Estudiantes (60%) · Coordinación (20%)
                    </span>
                </div>

                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; align-items:center;">
                    <!-- GRÁFICO DONA 1: FUENTES -->
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px; text-align:center;">
                        <div style="font-size:0.76rem; font-weight:800; color:#334155; margin-bottom:6px;">Ponderación por Fuentes de Información (Slide 20)</div>
                        <canvas id="c7EvalFuentesChart" style="max-height:180px;"></canvas>
                        <div style="font-size:0.68rem; color:#64748B; margin-top:6px;">Estudiantes (60%) garantizan la centralidad en el aprendizaje</div>
                    </div>

                    <!-- GRÁFICO DONA 2: DIMENSIONES -->
                    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:12px; text-align:center;">
                        <div style="font-size:0.76rem; font-weight:800; color:#334155; margin-bottom:6px;">Ponderación por Dimensión Docente (Slide 19)</div>
                        <canvas id="c7EvalDimensionesChart" style="max-height:180px;"></canvas>
                        <div style="font-size:0.68rem; color:#64748B; margin-top:6px;">70% enfocado en competencias pedagógicas y didácticas</div>
                    </div>

                    <!-- TABLA SÍNTESIS EVALUACIÓN -->
                    <div style="border:1px solid #E2E8F0; border-radius:8px; overflow:hidden;">
                        <table style="width:100%; border-collapse:collapse; font-size:0.72rem;">
                            <thead>
                                <tr style="background:#1A1A1B; color:#FFFFFF;">
                                    <th style="padding:6px 10px; text-align:left;">Dimensión</th>
                                    <th style="padding:6px 10px; text-align:center; width:50px;">%</th>
                                    <th style="padding:6px 10px; text-align:left;">Fuentes que Evalúan</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Pedagógico</td>
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#C2410C;">35%</td>
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Estudiante, Docente (Auto)</td>
                                </tr>
                                <tr style="background:#FAFAFA;">
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Didáctico</td>
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#C2410C;">35%</td>
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Estudiante, Docente (Auto)</td>
                                </tr>
                                <tr>
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Investigativo & Proyección</td>
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#2563EB;">20%</td>
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Coordinador, Docente (Auto)</td>
                                </tr>
                                <tr style="background:#FAFAFA;">
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; font-weight:700;">Administrativo</td>
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; text-align:center; font-weight:800; color:#16A34A;">10%</td>
                                    <td style="padding:6px 10px; border-bottom:1px solid #F1F5F9; color:#64748B;">Coordinador, Docente (Auto)</td>
                                </tr>
                            </tbody>
                        </table>
                        <div style="background:#FFFBEB; border-top:1px solid #FDE68A; padding:8px 10px; font-size:0.68rem; color:#92400E; font-weight:700;">
                            <i class="fas fa-arrow-circle-right mr-1"></i> Resultado: Plan de Mejoramiento Individual y Colectivo por Periodo.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

/* CONTROLADOR DE PESTAÑAS SUBSECCIONES C7 */
window.switchC7Sub = function(panelId, btn) {
    document.querySelectorAll('.c7-sub-panel').forEach(p => p.style.display = 'none');
    const target = document.getElementById(panelId);
    if (target) target.style.display = 'block';

    document.querySelectorAll('.c7-pill-btn').forEach(b => {
        b.classList.remove('active');
        b.style.background = '#F8FAFC';
        b.style.color = '#334155';
        b.style.border = '1px solid #CBD5E1';
    });
    if (btn) {
        btn.classList.add('active');
        btn.style.background = '#1A1A1B';
        btn.style.color = '#FFFFFF';
        btn.style.border = '1px solid #F39200';
    }

    if (panelId === 'c7-sec-horas' && window.initC7HorasChart) setTimeout(window.initC7HorasChart, 100);
    if (panelId === 'c7-sec-proyeccion' && window.initC7ProyeccionChart) setTimeout(window.initC7ProyeccionChart, 100);
    if (panelId === 'c7-sec-desarrollo' && window.initC7EvalCharts) setTimeout(window.initC7EvalCharts, 100);
};

/* FILTRO DE TABLAS EN SUBSECCIÓN 1 */
window.filterC7Planta = function(type) {
    const t52 = document.getElementById('c7-tabla52-container');
    const t53 = document.getElementById('c7-tabla53-container');
    const bPres = document.getElementById('btnFilterPresencial');
    const bVirt = document.getElementById('btnFilterVirtual');
    const bAll = document.getElementById('btnFilterAll');

    [bPres, bVirt, bAll].forEach(b => {
        if (b) {
            b.style.background = '#F1F5F9';
            b.style.color = '#475569';
            b.style.border = '1px solid #CBD5E1';
        }
    });

    if (type === 'presencial') {
        if (t52) t52.style.display = 'block';
        if (t53) t53.style.display = 'none';
        if (bPres) { bPres.style.background = '#F39200'; bPres.style.color = '#FFFFFF'; bPres.style.border = 'none'; }
    } else if (type === 'virtual') {
        if (t52) t52.style.display = 'none';
        if (t53) t53.style.display = 'block';
        if (bVirt) { bVirt.style.background = '#2563EB'; bVirt.style.color = '#FFFFFF'; bVirt.style.border = 'none'; }
    } else {
        if (t52) t52.style.display = 'block';
        if (t53) t53.style.display = 'block';
        if (bAll) { bAll.style.background = '#1A1A1B'; bAll.style.color = '#FFFFFF'; bAll.style.border = 'none'; }
    }
};

/* INICIALIZADOR DE GRÁFICOS CHART.JS C7 */
window._c7Charts = window._c7Charts || {};

window.initC7HorasChart = function() {
    const ctx = document.getElementById('c7HorasChart');
    if (!ctx || typeof Chart === 'undefined') return;
    if (window._c7Charts.horas) window._c7Charts.horas.destroy();

    window._c7Charts.horas = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Docencia / Tutoría',
                'Investigación & Semilleros',
                'Proyección Social / Extensión',
                'Gestión Académico-Admin.'
            ],
            datasets: [
                {
                    label: 'Medio Tiempo Presencial (20 h)',
                    data: [14, 3, 2, 1], // 10h docencia + 4h prep = 14h
                    backgroundColor: 'rgba(243, 146, 0, 0.85)',
                    borderColor: '#F39200',
                    borderWidth: 1.5
                },
                {
                    label: 'Medio Tiempo Virtual (20 h)',
                    data: [15, 3, 1, 1], // 8h campus + 5h sincrónicas + 2h diseño = 15h
                    backgroundColor: 'rgba(37, 99, 235, 0.85)',
                    borderColor: '#2563EB',
                    borderWidth: 1.5
                },
                {
                    label: 'Tiempo Completo (40 h)',
                    data: [20, 12, 5, 3],
                    backgroundColor: 'rgba(109, 40, 217, 0.85)',
                    borderColor: '#6D28D9',
                    borderWidth: 1.5
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10, weight: 'bold' } } },
                tooltip: {
                    callbacks: {
                        label: function(c) { return `${c.dataset.label}: ${c.raw} h semanales (${Math.round(c.raw / (c.datasetIndex === 2 ? 40 : 20) * 100)}%)`; }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 24,
                    title: { display: true, text: 'Horas Semanales Dedicadas', font: { size: 10, weight: 'bold' } },
                    grid: { color: '#E2E8F0' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
};

window.initC7ProyeccionChart = function() {
    const ctx = document.getElementById('c7ProyeccionChart');
    if (!ctx || typeof Chart === 'undefined') return;
    if (window._c7Charts.proyeccion) window._c7Charts.proyeccion.destroy();

    const periodos = ['2026-1', '2026-2', '2027-1', '2027-2', '2028-1', '2028-2', '2029-1', '2029-2', '2030-1', '2031-2'];
    const totalEstudiantes = [300, 450, 600, 750, 900, 1050, 1200, 1350, 1500, 1800];
    const totalDocentes = [17, 19, 22, 26, 31, 34, 39, 42, 45, 52];
    const ratioGlobal = [23, 25, 27, 29, 29, 31, 31, 32, 33, 34];

    window._c7Charts.proyeccion = new Chart(ctx, {
        type: 'line',
        data: {
            labels: periodos,
            datasets: [
                {
                    label: 'Total Docentes (MT + TC)',
                    data: totalDocentes,
                    borderColor: '#F39200',
                    backgroundColor: 'rgba(243, 146, 0, 0.15)',
                    borderWidth: 2.5,
                    fill: true,
                    tension: 0.3,
                    yAxisID: 'yDocentes',
                    pointRadius: 4,
                    pointHoverRadius: 6
                },
                {
                    label: 'Ratio Estudiante / Docente (1:N)',
                    data: ratioGlobal,
                    borderColor: '#16A34A',
                    backgroundColor: '#16A34A',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.2,
                    yAxisID: 'yRatio',
                    pointRadius: 3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10, weight: 'bold' } } },
                tooltip: {
                    callbacks: {
                        afterBody: function(items) {
                            const idx = items[0].dataIndex;
                            return `Estudiantes Totales: ${totalEstudiantes[idx]} | Docentes: ${totalDocentes[idx]}`;
                        }
                    }
                }
            },
            scales: {
                yDocentes: {
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                    max: 60,
                    title: { display: true, text: 'Número Total de Docentes', font: { size: 10, weight: 'bold' } },
                    grid: { color: '#E2E8F0' }
                },
                yRatio: {
                    type: 'linear',
                    position: 'right',
                    beginAtZero: true,
                    max: 50,
                    title: { display: true, text: 'Ratio Estudiantes por Docente', font: { size: 10, weight: 'bold' } },
                    grid: { display: false }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
};

window.initC7EvalCharts = function() {
    const ctxFuentes = document.getElementById('c7EvalFuentesChart');
    const ctxDims = document.getElementById('c7EvalDimensionesChart');
    if (typeof Chart === 'undefined') return;

    if (ctxFuentes) {
        if (window._c7Charts.fuentes) window._c7Charts.fuentes.destroy();
        window._c7Charts.fuentes = new Chart(ctxFuentes, {
            type: 'doughnut',
            data: {
                labels: ['Heteroevaluación (Estudiante)', 'Coevaluación (Coordinador)', 'Autoevaluación (Docente)'],
                datasets: [{
                    data: [60, 20, 20],
                    backgroundColor: ['#2563EB', '#F39200', '#16A34A'],
                    borderWidth: 2,
                    borderColor: '#FFFFFF'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 9 } } }
                },
                cutout: '62%'
            }
        });
    }

    if (ctxDims) {
        if (window._c7Charts.dims) window._c7Charts.dims.destroy();
        window._c7Charts.dims = new Chart(ctxDims, {
            type: 'doughnut',
            data: {
                labels: ['Pedagógico', 'Didáctico', 'Investigación & Proyección', 'Administrativo'],
                datasets: [{
                    data: [35, 35, 20, 10],
                    backgroundColor: ['#F39200', '#EA580C', '#2563EB', '#16A34A'],
                    borderWidth: 2,
                    borderColor: '#FFFFFF'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 9 } } }
                },
                cutout: '62%'
            }
        });
    }
};

window.c7Init = function() {
    setTimeout(function() {
        if (window.switchC7Sub) {
            const firstBtn = document.querySelector('.c7-pill-btn');
            if (firstBtn) window.switchC7Sub('c7-sec-planta', firstBtn);
        }
    }, 150);
};
