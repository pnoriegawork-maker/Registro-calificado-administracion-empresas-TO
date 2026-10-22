# Memoria Interna y Trazabilidad Exhaustiva del Proyecto
## Renovación de Registro Calificado Único — Administración de Empresas
**Institución:** Corporación Escuela Tecnológica del Oriente (**TO**)  
**Modalidades:** Presencial y Virtual · **Normativa:** Decreto 1330 de 2019  
**Fecha de corte:** 21 de Octubre de 2026
**Repositorio GitHub:** [`pedronoriega-eng/Registro-calificado-administracion-empresas-TO`](https://github.com/pedronoriega-eng/Registro-calificado-administracion-empresas-TO)  
**URL Pública (GitHub Pages):** [Plataforma de Evidencias TO](https://pedronoriega-eng.github.io/Registro-calificado-administracion-empresas-TO/)  
**Clave de Acceso Institucional:** `TO2026` (o `TO`)

---

## 1. Lo Aprobado y Construido (Ground Truth Oficial)

Todos los siguientes elementos están formalmente aprobados, implementados en código, validados visualmente en navegador y desplegados en el aplicativo:

### A. Condición 1 — Denominación, Subsecciones en Primer Plano y Línea de Tiempo Normativa
- **Navegación Equilibrada y Uniforme por Subsecciones (Primer Plano):**
  - Rediseño modular para eliminar desplazamientos verticales caóticos o páginas sobrecargadas.
  - La barra superior contiene **6 Ejes de Sustentación Oficiales** que al dar clic se muestran en **primer plano (vista exclusiva)**:
    1. *1. Línea de Tiempo Normativa:* Pipeline horizontal compacto de 5 hitos en un solo nivel con línea conectora continua y tablero comparativo de evolución curricular.
    2. *2. Fichas Técnicas Oficiales:* Comparativa en paralelo del Registro Calificado Vigente (158 créditos / 9 semestres / 62 materias) frente al Registro Calificado Propuesto (144 créditos / 8 semestres / 48 materias).
    3. *3. Perfil de Egreso & Competencias (Tabla 35):* Matriz canónica que alinea 1 a 1 las 10 competencias específicas y transversales con los 10 RAP y las asignaturas tributarias.
    4. *4. Componentes Curriculares (Tabla 16):* Áreas de formación y fundamentación epistemológica oficial del Documento Maestro.
    5. *5. Factores Diferenciadores:* 5 tarjetas interactivas con modales en segundo plano para evidencias autorizadas (Transformación Digital, Emprendimiento, Registro Único, Empleabilidad OLE, Metodologías Activas).
    6. *6. Mapa Conceptual Sistémico:* Articulador pedagógico de pertinencia en 5 dimensiones.
  - Cero barras inferiores artificiales o botones redundantes. Control directo y limpio desde la barra superior de subpestañas.
- **Línea de Tiempo Normativa Compacta (1 Nivel Horizontal + Cuadro de Evolución):**
  - **Hito 1 (2018):** Acuerdo CS No. 05 del 29 de mayo de 2018 (Creación Institucional Presencial Bucaramanga).
  - **Hito 2 (2019):** Resolución MEN 011375 del 07 de noviembre de 2019 (Registro Calificado & SNIES Presencial: 108445 · 158 Créditos · 9 Semestres · 62 Asignaturas).
  - **Hito 3 (2024):** Acuerdo CS No. 011 del 03 de diciembre de 2024 (Aprobación para Solicitar Registro Calificado Único Presencial y Virtual · Exp. SACES 108524).
  - **Hito 4 (2024-2025):** Aprobación MEN & Asignación SNIES Virtual: 115833 (Registro Único inicial de 158 créditos articulado al presencial).
  - **Hito 5 (2025 Sustentación Actual):** Acuerdo CS No. 021 del 25 de julio de 2025 (Renovación y Modificación Curricular del Registro Único a 8 semestres, 144 créditos y 48 asignaturas · 300 cupos: 240V / 60P · Titulación: *Administrador(a) de Empresas*).
  - **Cuadro Comparativo de Evolución Curricular:** Síntesis visual directa de alto impacto:
    - *Estado Inicial 2019:* Solo Presencial · 9 semestres · 158 créditos · 62 asignaturas · SNIES 108445.
    - *Adopción Registro Único 2024-2025:* Presencial + Virtual · 9 semestres · 158 créditos · 62 asignaturas · SNIES 108445 (P) + 115833 (V) · Cobertura Nacional.
    - *Propuesta Renovación 2025:* Registro Único (P+V) · 8 semestres (-1) · 144 créditos (-14) · 48 asignaturas modulares (-14) · 300 cupos (240V / 60P).

### B. Condición 2 — Justificación y Análisis Integral de la Encuesta a Egresados
- **Observatorio Geoespacial y Estudio de Oferta (Tablas 5, 6 y 7):**
  - Motor Google Maps Relieve (`lyrs=p`) 100% nativo sin marcas de agua.
  - GeoJSON vectorial de 33 entidades territoriales con interacción completa.
  - Base oficial del SNIES del MEN (245 programas presenciales, 44 virtuales).
  - Santander municipal: 18 programas formales en Bucaramanga (11), Floridablanca (3), Barrancabermeja (3) y San Gil/Socorro (1). Girón y Piedecuesta filtrados por tener 0 programas.
  - Gráficas de tendencia interactivas (Chart.js) para matrícula histórica y permanencia institucional (Tablas 12 y 13).
- **Estudio de Pertinencia e Inserción Laboral (`ENCUESTA DE SEGUIMIENTO A EGRESADOS(1-940)(1).xlsx`):**
  - Análisis exhaustivo de 43 variables sobre 940 egresados globales y 44 egresados de Administración de Empresas.
  - **Tasa de Ocupación Efectiva del 93.2%:** 41 de 44 graduados activos (70.5% empleados vinculados + 18.2% independientes + 4.5% empresarios con empresa constituida; solo 6.8% en búsqueda activa). Supera en +13.7% la media institucional (79.5%).
  - **Coherencia con el Perfil de Egreso del 85.4%:** 35 de 41 ocupados certifican que su cargo corresponde directamente al perfil formativo.
  - **Rápida Colocación Laboral:** Más del 75% ubicados en menos de 6 meses tras la graduación.
  - **Alta Calidad Percibida:** 95.5% califica con 4 o 5 sobre 5 la formación recibida, 95.5% recomienda la institución y 93.2% afirma que el programa mejoró su proyecto de vida.
  - **Diversidad de Sectores Económicos:** Demostración empírica de pasantías e inserción en múltiples sectores:
    - Banca, Seguros y Servicios Financieros: 13.6% (BBVA, Mi Banco, Aprogresar Seguros, AML Seguros, Gestiona Seguros).
    - Comercio al por Mayor y al Detal: 11.4% (Supermercados Más Por Menos, JB Company).
    - Transporte y Logística: 11.4% (DHL Express Colombia SAS, Consorcio AS Santander).
    - Alimentos, Gastronomía y Agroindustria: 11.4% (Incubadora Santander - Huevos Kikes, TamSantandereano, Drey SAS).
    - Salud y Sector Farmacéutico: 9.1% (Colsanitas, HIC, Lab. Bussié, Zambon, Magnofarma).
    - Manufactura, Textil, Automotriz y Energía: 9.1% (MYB Automotrices, Imporinox, Pioneer Group).
    - Educación y Formación Técnica: 9.1% (SENA, colegios).
    - Sector Público y Servicios Domiciliarios: 4.5% (Gobernación de Santander, Empas SA).
    - Consultoría y Servicios Empresariales: 20.4% (Strategy, RDHH, Doral Group).
  - **Vitrina de Empresas Empleadoras Reales:** Despliegue interactivo con 18 organizaciones líderes que contratan a nuestros graduados.

### C. Condición 5 — Investigación, Innovación y Creación Artística (Actualización 100% PPT)
- **Estructura Oficial Actualizada (`ppt condicion 5 RENOVACIÓN ADMON.pptx` - 30 Diapositivas):**
  - Adaptación 1 a 1 de la presentación oficial del programa con visor dual: navegación por **7 Ejes Temáticos** y visor secuencial de **Diapositivas 1 a 30** mediante selectores rápidos.
  - **71 Imágenes Idénticas Extraídas:** Ubicadas en `sitio_web/assets/c5/` garantizando coincidencia fotográfica y gráfica absoluta con el archivo PowerPoint original.
  - **Ejes de Sustentación Integrados:**
    1. *Eje 1: Sistema & Organización (Slides 1–6):* Articulación con CONPES 4069 / DNP (`c5_slide4_img3.png`), organigrama del sistema (`c5_slide5_img4.png`), y 5 pilares de cultura investigativa.
    2. *Eje 2: Líneas & Coherencia Teórica (Slides 7–13):* Gráfica de evolución del compromiso docente (`c5_slide7_img5.png`), infografía de líneas transversales y específicas L1 y L2 (`c5_slide8_img5.png`), Investigación 4.0 (`c5_slide9_img5.png`), avance del conocimiento (`c5_slide10_img4.png`), tabla comparativa de referentes clásicos (Taylor/Fayol) vs. contemporáneos (Schumpeter/Porter/Elkington/Brynjolfsson), matriz Presencial vs. Virtual con 4 criterios de calidad comunes, y tabla evolutiva de líneas de investigación.
    3. *Eje 3: Estrategias & Minciencias (Slides 14–15):* Diagrama de estrategias institucionales (`c5_slide14_img3.png`) y avances en Convocatorias 894 de 2021 y 957 de 2024 (`c5_slide15_img3.png`).
    4. *Eje 4: Semillero GESTNOVA & COLLEGIUM (Slides 16–20):* Ficha de GESTNOVA con galería fotográfica real de semilleristas y eventos (`c5_slide16_img4.png` a `img14.jpg`), certificados y ponencias RedCOLSI (`c5_slide17_img4.png` a `img12.png`), categorización del Grupo COLLEGIUM (`c5_slide18_img5.png`), tabla completa de 10 productos científicos verificados en SCIENTI (libros McGraw-Hill, capítulos, artículos con DOI), y vitrina de logos oficiales de redes académicas (ASCOLFA, RedCOLSI, RedesLA, etc., `c5_slide20_img3.png` a `img12.png`).
    5. *Eje 5: Investigación Formativa & Caso MYB (Slides 21–23):* Comparativa curricular de la ruta investigativa (2019: 5 asignaturas vs. Renovación 8 semestres: IV, VI y VIII semestres), tabla de 11 proyectos de aula aplicados (2023–2026), y **Caso de Éxito Emblemático de Spin-off MYB Soluciones e Inversiones Automotrices S.A.S.** (NIT 901604941-7, 6 empleos formales en Bucaramanga, proyecto originado en el aula por la graduada Sonia Ximena Villamizar Peña, con fotografía real del taller `c5_slide23_img4.jpg`).
    6. *Eje 6: Opciones de Grado & Tecnologías TI (Slides 24–26):* Diagrama del reglamento de grados (`c5_slide24_img6.png`), tabla de 11 opciones de grado sustentadas (2021–2026), y recursos TIC / IA en investigación (`c5_slide26_img5.png`).
    7. *Eje 7: Aportes Productivos & Proyección (Slides 27–30):* Tablas de aportes a sectores productivos de Santander, resultados verificables y transferencia tecnológica, plan quinquenal 2026–2031 hacia Categoría B de Minciencias, y diapositiva formal de cierre.
  - **Navegación en Primer Plano Optimizada (Cero Desplazamientos Forzados):** Ajuste estricto del comportamiento de transición de diapositivas en `goToC5Slide()`, `nextC5Slide()`, `prevC5Slide()` y `switchC5Eje()`. Al dar clic (en los botones de avanzar/retroceder, en el numeral de la diapositiva o en los ejes temáticos), el visor reposiciona suave y exactamente el contenedor de desplazamiento (`#scrollContainer`) para que la diapositiva a proyectar quede de inmediato en **primer plano** con su barra de control (`#c5-visor-nav`) en la parte superior, erradicando por completo la necesidad de tener que desplegar la barra vertical para ubicar el contenido de la presentación.

### D. Condición 3 — Aspectos Curriculares (Decreto 1330 de 2019 · Art. 2.5.3.2.3.2.4)
- **Alineación Normativa Estricta:** Reestructuración de la condición en 3 Pestañas Principales y **5 Subpestañas Canónicas Oficiales** en primer plano para evitar equivocaciones durante la sustentación ante los pares académicos del MEN:
  1. *a) Componentes Formativos:* Plan general de estudios, mallas curriculares en matriz global (158 cr Vigente / 144 cr Propuesto), áreas y componentes (Tablas 15, 16 y 24), perfiles de egreso, Resultados de Aprendizaje Proyectados (RAPs), estrategias de flexibilización curricular (créditos, homologación, interdisciplinariedad) y rutas formativas.
  2. *b) Componentes Pedagógicos:* Lineamientos e innovación pedagógica y didáctica adoptados por la institución según modalidad (Presencial y Virtual), modelo pedagógico constructivista y socioformativo ("Formación en contextos de aplicación"), referentes Benjamin Bloom (taxonomía de 6 niveles) y Sergio Tobón, activación de la tríada Saber-Ser-Hacer, metodologías activas (ABP, casos Harvard, proyectos integradores) y simuladores de negocios con analítica Big Data.
  3. *c) Componentes de Interacción:* Articulación con contextos locales, regionales y globales (CUEES, CIDRE, Cámara de Comercio, sectores productivos), habilidades de interrelación docente-estudiante y entre pares, internacionalización del currículo (clases espejo, invitados internacionales, proyectos COIL, redes ASCOLFA, RedCOLSI, RedesLA, CLADEA) y formación en segunda lengua (Inglés I a IV según MCER).
  4. *d) Conceptualización Teórica y Epistemológica del Programa:* Naturaleza del objeto de estudio (la organización como sistema social, económico y técnico integral; en el propuesto: organizaciones inteligentes, ágiles y sostenibles) y las 6 corrientes teóricas oficiales (Administración y Gestión Estratégica, Recursos Humanos y Liderazgo, Marketing e Innovación, Emprendimiento e Innovación Social, RSE y Sostenibilidad, Pedagogía Virtual y Aprendizaje Autónomo).
  5. *e) Mecanismos de Evaluación:* Instrumentos de medición y seguimiento para toma de decisiones oportunas, evaluación diagnóstica, formativa y sumativa, autoevaluación, coevaluación y heteroevaluación, rúbricas analíticas de 5 niveles (Tabla 44), matriz canónica de medición de los 10 RAPs (Tabla 45), matrices de percepción y estrategias de aprendizaje (Tablas 38 y 39), enlace interactivo a la Inducción Docente y Sistema de Alertas Tempranas (SAT).
- **Despliegue Bimodal Completo:** Estructura disponible de manera idéntica y especializada tanto para el **Registro Único Actual SACES (158 créditos - 9 semestres)** como para el **Registro Único Propuesto (144 créditos - 8 semestres)**.
- **Pestaña 3: Comparación y Justificación Curricular:** Matriz comparativa canónica que confronta punto por punto los 5 literales normativos (a, b, c, d, e) entre ambos planes, complementada por los tableros de 28 asignaturas reestructuradas, 15 nuevas y 38 homologables.
- **Diseño Fit-to-Screen & Cero Desplazamientos Forzados:** Subpestañas distribuidas con flexbox uniforme y píldoras secundarias limpias para navegación sin pérdida de contexto.

### E. Presentación Institucional y Sistema de Educación Virtual
- **Presentación Institucional (`sections_inst.js`):** 8 secciones completas.
  - **Convenios:** 15 logos oficiales de aliados en `assets/convenios/`.
  - **Oferta Académica Vigente:** Catálogo oficial del MEN con los 17 programas académicos activos en el portal TO.
  - **Selectores y Modal Sintético:** 4 paneles de selectores compactos por nivel y modalidad, con ventana emergente que muestra exclusivamente Nombre, Nivel, Modalidad, Duración, Créditos y SNIES.
- **Sistema de Educación Virtual (`sections_virtual.js`):** 5 dimensiones (Pedagógica, Tecnológica, Organizacional, Diseño Curricular, Calidad).

### F. Paleta de Colores Oficial de Administración de Empresas (Zero Azul)
- Erradicación absoluta de tonalidades azules.
- Paleta canónica: Carbón (`#1A1A1B`), Naranja Institucional (`#F39200`), Rojo TO (`#C8102E`), Terracota (`#EA580C`) y Dorado (`#D97706`).

### G. Ajustes Normativos y de Rigor Técnico (Corte 20 de Octubre de 2026)
- **Ficha Técnica del Registro Calificado Único Propuesto (`sections_c1.js`):**
  - Se eliminaron formalmente los códigos SNIES y números de resolución ministerial del bloque de propuesta curricular (144 créditos / 8 semestres).
  - Razón jurídica y procedimental: Por tratarse de un registro calificado apenas propuesto y en trámite de radicación/renovación ante el Ministerio de Educación Nacional (MEN), no puede ostentar código SNIES ni acto administrativo de resolución ministerial hasta tanto culmine el proceso de evaluación de salas CONACES y emisión de la resolución correspondiente.
  - En su lugar, el campo oficial refleja con rigor: `Estado SNIES / Resolución: En trámite ante el MEN (Sin código SNIES ni resolución por tratarse de una propuesta en radicación)`.
  - El Registro Calificado Vigente (158 créditos) conserva intactos sus históricos SACES y SNIES (Presencial: 108445 / Virtual: 115833, Resolución MEN 011375 de 2019).
- **Condición 2 — Navegación Exclusiva por Ejes en Primer Plano (`sections_c2_google.js`):**
  - Implementación de la barra de navegación superior interactiva con 9 ejes de sustentación (`c2-subtabs-bar`):
    1. *1. Internacional* (Benchmarking Global)
    2. *2. Nacional & SNIES* (Políticas Públicas y PND)
    3. *3. Observatorio Geoespacial* (Google Maps Relieve con mapa de Colombia, Santander y buscador municipal)
    4. *4. Regional & Local* (Tejido empresarial y CCB)
    5. *5. Demanda & OLE* (Tendencias y observatorio laboral)
    6. *6. Registro Único (Modalidades)* (Presencial Bucaramanga y Virtual Cobertura Nacional)
    7. *7. Factores Diferenciadores* (Bento Grid institucional)
    8. *8. SPADIES & Permanencia* (Matrícula y retención histórica)
    9. *9. Estudio de Egresados* (Estudio censal oficial 940 / 44 con 93.2% ocupación y 85.4% pertinencia)
  - Al dar clic en cualquiera de los 9 ejes se proyecta de manera exclusiva en primer plano (`display: block` y los demás `display: none`) con scroll automático superior y redimensionamiento dinámico de mapas y gráficas (`invalidateSize()` y `resize()`).
- **Corrección de Dirección Institucional Oficial:**
  - Se erradicó cualquier mención incorrecta a "Calle 35 # 21-42".
  - Se fijó de forma unificada la dirección canónica extraída del portal oficial de la institución ([tecnologicadeloriente.edu.co](https://tecnologicadeloriente.edu.co/contactenos/)): **Sede Principal: Calle 41 # 10 - 30 Centro, Bucaramanga - Santander, Colombia**.
- **Erradicación del Término 'Dual' — Adopción Estricta de 'Registro Único':**
  - Se eliminó totalmente el equívoco término "Registro Único Dual", ya que en el marco del Decreto 1330 de 2019 la modalidad "dual" corresponde a formación en alternancia empresa-aula.
  - La figura jurídica del programa corresponde estrictamente a **Registro Calificado Único** (en modalidades Presencial y Virtual). Todos los textos, encabezados y tablas fueron homologados a esta denominación legal oficial.

### H. Infografía Ejecutiva de Defensa C1 y C2 (Entrega Independiente y Local)
- **Archivos Locales Aparte (Sin control de versiones en GitHub):**
  - HTML Imprimible / Póster: [`INFOGRAFIA_RUTA_DEFENSA_C1_C2.html`](file:///c:/Users/Estudiante%2008/Documents/Pedro_Noriega/Acreditación_Alta%20Calidad/Visitas_programas/Administración%20de%20empresas_Renovación%20RU/INFOGRAFIA_RUTA_DEFENSA_C1_C2.html)
  - Documento Markdown: [`INFOGRAFIA_RUTA_DEFENSA_C1_C2.md`](file:///c:/Users/Estudiante%2008/Documents/Pedro_Noriega/Acreditación_Alta%20Calidad/Visitas_programas/Administración%20de%20empresas_Renovación%20RU/INFOGRAFIA_RUTA_DEFENSA_C1_C2.md)
- **Estado en Repositorio GitHub:** Completamente desvinculada de la plataforma web institucional y fuera del repositorio Git.

### J. Restauración Integral de Ventanas Emergentes (Modales) de Asignaturas en Condición 3 (Corte 20 de Octubre de 2026 - Noche)
- **Diagnóstico Raíz del Fallo de Despliegue:**
  - Al reestructurar la Condición 3 bajo los 5 literales canónicos (a-e), la colección de 62 asignaturas del Plan Vigente (158 créditos - 9 semestres) fue declarada en el archivo `sections_c3.js` bajo el identificador `window.C3_SUBJECTS_VIGENTE`, mientras que todas las funciones interactivas del sistema (`selectMatrixSubject`, `openSubjectModal`, `openAreaModal`) realizaban la búsqueda sobre `window.C3_VIGENTE_SUBJECTS`.
  - Esta transposición de nombre provocaba que `window.C3_VIGENTE_SUBJECTS` se evaluara como `undefined`, abortando silenciosamente la ejecución (`if (!s) return;`) al hacer clic sobre cualquiera de las 62 tarjetas de asignaturas de la Malla Curricular Vigente y en las tablas por área de formación.
- **Solución Canónica e Inmune a Regresiones:**
  - **Sincronización de Identificadores Globales:** Se unificaron y expusieron recíprocamente en el scope global (`window`) todas las variantes canónicas: `window.C3_VIGENTE_SUBJECTS = window.C3_SUBJECTS_VIGENTE;`, `window.C3_PROPUESTO_SUBJECTS = window.C3_SUBJECTS;` y `window.C3_SUBJECTS_PROPUESTO = window.C3_SUBJECTS;`.
  - **Detección Automática por Prefijo (`vig_` / `prop_`):** Las funciones `openSubjectModal(id, type)`, `selectMatrixSubject(id, type)` y `openAreaModal(areaId, type)` ahora detectan de forma automática e inmediata si el parámetro `type` no fue suministrado, inspeccionando si el `id` inicia por `vig_` o `prop_`, y aplicando búsqueda de reserva cruzada para garantizar que NUNCA retorne `undefined`.
  - **Exportación de Métodos de Ventana Emergente:** Se fijaron explícitamente `window.showSubjectModal = window.openSubjectModal;` y `window.openC3SubjectModal = window.openSubjectModal;`.
  - **Actualización de Cachebuster:** Se actualizó la referencia en `index.html` a `sections_c3.js?v=20261020_c3_modal_definitivo_v1` para forzar la recarga inmediata en el navegador sin caché residual.
  - **Commit y Despliegue en GitHub:** Commit `f210028` sincronizado con la rama `main`.

### K. Incorporación de Evidencia Gráfica Oficial en Condición 5 — Ruta Formativa del Programa (Congresos 2023–2026)
- **Ubicación Estratégica:**
  - Archivo fuente: `sitio_web/sections_c5.js` y plantilla de respaldo `build_slides_templates.py`.
  - Diapositiva: **Diapositiva 21** (`c5-slide-panel-21`), correspondiente al **Eje 5: Investigación en Aula & Caso MYB**, titulada *"Estrategias de Aula y Ruta Formativa en Investigación"*.
  - Posicionamiento: Inmediatamente posterior al bloque de *"Ruta de Asignaturas Investigativas"* y al *"Ciclo de Acompañamiento a Opciones de Grado"*.
- **Asset Integrado:**
  - Imagen en alta resolución: `assets/c5/c5_ruta_formativa_congresos.png` (591.377 bytes).
  - Título del contenedor: *"Ruta Formativa del Programa (Congresos y Divulgación Científica 2023 – 2026)"* con etiqueta institucional de vigencia temporal *"Trayectoria 2023 · 2024 · 2025 · 2026"*.
  - Secuencia de Congresos exhibida:
    1. *2023:* I Congreso Multidisciplinario de Investigación, Educación, Ciencia, Tecnología e Innovación (Habilidades gerenciales, desarrollo organizacional, innovación y emprendimiento).
    2. *2024:* 2.º Congreso de Investigación Aplicada (Aplicación al entorno laboral: SST, IA y transformación digital).
    3. *2025:* III Congreso de Innovación e Investigación Multidisciplinar (Liderazgo y estrategia en la era digital).
    4. *2026:* IV Congreso Internacional de Investigación e Innovación Multidisciplinar (Innovación e internacionalización de negocios y desarrollo empresarial territorial).
- **Interactividad y Experiencia Visual:**
  - Contenedor con borde tenue, fondo contrastado, tarjeta de sombra sutil y cursor interactivo con soporte de apertura en pestaña completa a resolución original (`onclick="window.open(this.src, '_blank')"`).
- **Cachebuster Actualizado:**
  - En `sitio_web/index.html` se actualizó la versión de script a `sections_c5.js?v=20261020_c5_ruta_formativa_congresos_v1`.
- **Commit y Despliegue en GitHub:**
  - Commit `f857a84` (`feat(c5): incorporar imagen oficial de la Ruta Formativa del Programa (Congresos 2023-2026) en Diapositiva 21`) sincronizado con la rama `main` en GitHub.

### L. Transformación de Tablas con Scrollbar a Vitrinas Ejecutivas Interactivas en Condición 5 (Corte 21 de Octubre de 2026)
- **Diagnóstico y Problemática Resuelta:**
  - En las diapositivas 13, 19, 22, 25, 27 y 28 de la Condición 5, la información tabulada original del PPT se había exportado en una sola fila horizontal `<th>['Col1', 'Col2', ...]</th>` dentro de contenedores con `overflow-x: auto`, generando una barra de desplazamiento horizontal antiestética y textos crudos con corchetes de Python.
- **Rediseño Integral a Nivel Directivo (Zero Horizontal Scroll):**
  - **Diapositiva 13 (Evolución del Conocimiento y Líneas de Investigación):** Reemplazo de tabla por una **Matriz Ejecutiva de 5 Tendencias** (Emprendimiento, Sostenibilidad, Liderazgo, Transformación Digital, Globalización) con badges de línea (`L1 / L2`), aplicación empírica en Santander y banner de consolidación estratégica.
  - **Diapositiva 19 (Producción Científica del Grupo COLLEGIUM - Minciencias):**
    - **Strip de 4 KPIs:** 10 Productos Registrados, 4 Sellos (McGraw-Hill, RedesLA, iQuatro, INVEPY), Scopus Q3 y 100% Verificable.
    - **Pestañas de Filtrado Dinámico:** `Todos (10)` · `Nuevo Conocimiento - GNC (2)` · `Libros McGraw-Hill & iQuatro (4)` · `Artículos Scopus & Dialnet (4)`.
    - **Tarjetas de Publicación Científica:** Tarjetas ejecutivas con metadatos de ISBN/ISSN y botones de acceso directo al DOI / enlace científico.
  - **Diapositiva 22 (Proyectos de Investigación en el Aula 2023–2026):**
    - Segmentación interactiva por periodo: `Todos (11)` · `2023 (4)` · `2024 (4)` · `2025 (2)` · `2026 REDCOLSI (1)`.
    - Tarjetas con etiqueta temática de sector, título completo y nombres de estudiantes graduados/autores.
  - **Diapositiva 25 (Opciones de Grado y Semilleros Desarrollados):**
    - Filtro por modalidad: `Todas (11)` · `Proyectos de Grado (4)` · `Semillero GESTNOVA / REDCOLSI (7)`.
    - Tarjetas diferenciadas con insignias de color (verde para proyectos de grado y naranja para semilleros).
  - **Diapositiva 27 (Aportes a Sectores Productivos y de Servicios):**
    - Distribución en 2 paneles comparativos en paralelo: *Línea 1: Gestión Estratégica* (5 sectores) y *Línea 2: Transformación Digital* (3 sectores), vinculando el problema regional con el aporte del programa.
  - **Diapositiva 28 (Resultados Verificables e Impacto en el Entorno):**
    - 5 tarjetas de impacto con evidencias concretas del programa y recuadros destacados de **Resultado Verificable** (Spin-off MYB, convenios AMB/Bomberos/Cajasan, alianzas internacionales UCUENCA/UMECIT y REDCOLSI).
- **Scripts y Funciones Globales Inyectadas:**
  - `window.filterC5Collegium(category, btn)`, `window.filterC5Classroom(year, btn)` y `window.filterC5Degree(modality, btn)`.
- **Cachebuster Actualizado:** `sections_c5.js?v=20261021_c5_executive_showcase_v1`.
- **Commit y Despliegue en GitHub:** Commit `6da2b81` sincronizado con la rama `main`.

### M. Rediseño Ejecutivo de Slide 8 (Líneas de Investigación) e Integración Total de Respuestas a la Sala de CONACES (Completitud) en Primer Plano
- **Rediseño Visual de Slide 8 (Condición 5):**
  - Eliminación total de la imagen desproporcionada de Canva (`c5_slide8_img5.png`) que contenía amplios espacios vacíos y marca de agua externa.
  - Implementación de una vitrina visual ejecutiva responsiva en HTML/CSS corporativo:
    * *Nivel 1: Las 3 Líneas Transversales Institucionales:* 1. Gestión Social, Participación y Desarrollo Sostenible; 2. Productividad, Innovación y Sostenibilidad; 3. Educación, Inclusión Social y Desarrollo Humano.
    * *Conector Dinámico de Despliegue Operativo y Curricular.*
    * *Nivel 2: Las 2 Líneas Específicas del Programa:* L1: Gestión Estratégica y Competitividad Empresarial; L2: Transformación Digital y Gestión de la Innovación.
    * *Ecosistema Activo:* Grupo COLLEGIUM (Minciencias), Semillero GESTNOVA, Spin-off MYB S.A.S. y los 4 Congresos Multidisciplinarios continuos 2023–2026.
  - Cero desperdicio de espacio, 100% responsivo y sin marcas externas.
- **Módulo Integral de Respuestas Oficiales a la Sala de CONACES (`completitud_data.js` & `completitud.css`):**
  - Extracción e incorporación de las **13 Observaciones Oficiales de la Sala de Evaluación de CONACES** y sus **32 tablas institucionales/numéricas** del documento maestro `Respuesa a Completitud.docx`.
  - Mapeo por condición:
    * **Condición 1:** Observaciones 1 y 2 (Título de Administrador de Empresas, ausencia de ciclos y registro calificado único).
    * **Condición 2:** Observación 2 (Justificación y pertinencia en dos modalidades).
    * **Condición 3:** Observaciones 3 y 4 (Componente formativo y Plan de Transición Curricular 158 cr a 144 cr con homologación y garantías).
    * **Condición 4:** Observaciones 5 y 11 (Equivalencia formativa presencial/virtual, horas HAD/HTI y ratios por grupo 20-30).
    * **Condición 5:** Observación 6 (Articulación de investigación formativa y aplicada, COLLEGIUM, GESTNOVA y spin-off MYB).
    * **Condición 6:** Observación 7 (Relación con sector externo, convenios activos, CIDRE y CUEES).
    * **Condición 7:** Observaciones 8, 9, 10 y 11 (Planta docente completa, cualificación para modalidad virtual, distribución horaria y organización de estudiantes por grupo).
    * **Condición 8:** Observación 12 (Medios educativos físicos y digitales, plataformas LMS, actualización y reposición, y protocolo Decreto 1421/2017).
    * **Condición 9:** Observación 13 (Infraestructura física y tecnológica asignada en Sedes A y B, CIDRE, salas de informática y garantía de disponibilidad a 7 años).
  - Despliegue estricto en **PRIMER PLANO (z-index: 100000)** al hacer clic en las tarjetas de activación `completitud-trigger-card` en cada condición o desde el botón general de cabecera `Respuestas a la Sala (Completitud CONACES)`.
  - Navegación por pestañas entre observaciones de cada condición, visualización de la observación oficial entrecomillada, fundamentación en el Decreto 1330 de 2019 y tablas ejecutivas formateadas.
- **Cachebuster Actualizado:** `sections_c5.js?v=20261021_c5_slide8_redesign_v2`, `sections_c1.js?v=20261021_completitud_v1`, `completitud_data.js?v=20261021_v1`.

---

### N. Fortalecimiento Integral del Componente de Interacción (Condiciones 3 y 4) según Aclaración Oficial
- **Integración del Documento Institucional:** Se integró la fundamentación oficial del documento `Aclaración de Organización de actividades académicas y proceso formativo (2).pdf`.
- **Modelo Pedagógico en 4 Dimensiones:**
  1. *Dimensión Socioformativa:* Resolución de problemas reales en organizaciones de Santander, articulación con ODS y competencias ético-sociales.
  2. *Dimensión Pedagógica:* Modelo de "Formación en contextos de aplicación", mediación del docente como facilitador y retroalimentación formativa cualitativa/cuantitativa.
  3. *Dimensión Tecnológica:* Ecosistema Moodle LMS 24/7, simuladores gerenciales en la nube y herramientas de trabajo colaborativo.
  4. *Dimensión Organizacional-Gestión:* Gobernanza académica, aseguramiento de la calidad, seguimiento de permanencia y comités curriculares.
- **8 Estrategias Didácticas Activas de Interacción:** Matriz estructurada con horas de acompañamiento docente (HAD) e independientes (HTI):
  1. Foros Académicos Asincrónicos de Discusión Crítica (rúbrica TIGRIS).
  2. Encuentros Sincrónicos Interactivos / Clases Espejo Nacionales e Internacionales.
  3. Aprendizaje Basado en Problemas y Casos Empresariales Reales (Harvard / Mipymes).
  4. Talleres Prácticos y Laboratorios Virtuales de Simulación Gerencial.
  5. Proyectos Integradores Formativos de Aula (tríada docencia-investigación-empresa).
  6. Asesorías y Tutorías Académicas Personalizadas y Grupales.
  7. Evaluaciones Formativas con Rúbricas Analíticas y Retroalimentación Cualitativa.
  8. Trabajo Colaborativo en Entornos Virtuales y Comunidades de Aprendizaje.
- **Arquitectura Canónica del Aula Virtual Moodle (5 Secciones):** 1. Información General, 2. Contenidos de Aprendizaje, 3. Actividades de Aprendizaje, 4. Evaluación y 5. Canales de Comunicación e Interacción.
- **Distribución de Dedicación Docente (Jornada 40 Horas Semanales):** 18h docencia directa, 8h preparación y evaluación, 6h interacción virtual tutorial sincrónica/asincrónica, 4h investigación formativa y 4h proyección social/extensión.
- **Informes Oficiales Generados en Word:** `INFORME_TRAZABILIDAD_RESPUESTAS_SALA_CONACES_SUSTENTACION.docx` y versión actualizada completa.

### O. Eliminación Definitiva de la Condición 10 y Consolidación de Analítica en Condición 2
- **Directriz Institucional:** La Condición 10 fue suprimida formalmente del catálogo y menú del aplicativo web (`app.js`, `index.html`), dado que no constituye una de las condiciones institucionales según la estructura del Decreto 1330 de 2019.
- **Unificación de Datos Estadísticos en Condición 2:** Toda la trazabilidad de matrícula activa histórica (Tabla 12), tasas de deserción por cohortes SPADIES (Tabla 11) y tasa de permanencia institucional >94% (Tabla 13) se encuentran consolidadas, activas e interactivas con gráficas Chart.js en la **Condición 2 (Justificación del Programa)**.
- **Ajuste de Enlaces Cruzados:** Se reconfiguraron los botones de navegación en `sections_c4.js` y `sections_c2_google.js` / `sections_c2.js` para referenciar formalmente a la Condición 2.

### P. Ajustes Oficiales en Condición 5 (Investigación) Solicitados por el Experto Temático
- **Diapositiva 2 (Marco Normativo):** Exclusión de la tarjeta de texto tachado (*«Guía para la Elaboración del Documento Maestro (Trámites de Renovación)»*). Rediseño proporcional (`1fr : 1.8fr`) y ampliación de la imagen del diagrama de procesos (`c5_slide2_img3.png`) a formato amplio (`max-height: 480px`) para garantizar total legibilidad de sus nodos.
- **Diapositiva 3 (Desarrollo y Proyección):** Eliminación total de la diapositiva 3 según la instrucción directa del experto (*«es parte del discurso y además no está en la PPT original»*).
- **Reconfiguración Integral a 29 Diapositivas:**
  * Reajuste de la barra de píldoras numeradas del 1 al 29 (`c5-pills-container`).
  * Actualización de pie de página: *«Diapositiva X de 29»* con sus botones de anterior, siguiente y retorno.
  * Sincronización del mapeo de los 7 Ejes Temáticos (`totalSlides = 29`): Eje 1 (1–5), Eje 2 (6–12), Eje 3 (13–14), Eje 4 (15–19), Eje 5 (20–22), Eje 6 (23–25), Eje 7 (26–29).
  * Contador del banner de cabecera actualizado a *«29 Diapositivas PPT Oficiales»*.
- **Diapositiva 6 (antes Diap. 7 - Evolución del Compromiso Investigativo):** Eliminación del recuadro inferior de *«Incremento Sostenido»* (horas de dedicación y presupuesto docente) para prevenir cuestionamientos sensibles de los pares evaluadores. Línea de tiempo 2013–2030 centrada y maximizada.
- **Diapositiva 7 (antes Diap. 8 - Líneas de Investigación):** Supresión de la versión reducida en tira vertical. Restauración directa desde el PowerPoint oficial en Full HD (1920×1080: `c5_slide8_ppt_export.png`), desplegando con total fidelidad las **3 Líneas Transversales**, el contenedor de las **2 Líneas Específicas** y la **Línea de Tiempo 2018–2030**.
- **Diapositiva 8 (antes Diap. 9 - Investigación 4.0):** Eliminación del recuadro de 300px; proyección panorámica en 1920×1080 (`c5_slide9_ppt_export.png`) destacada y nítida.
- **Escala Ampliada de Imágenes:** Ajuste en todas las diapositivas de la condición a `max-height: 480px` para evitar diagramas ilegibles.

### Q. Rediseño Ejecutivo de Tarjetas de Tendencias en Diapositiva 12 (Cero Solapamiento Visual)
- **Problema Corregido:** En la diapositiva *«Evolución del Conocimiento y Líneas de Investigación»*, los títulos extensos colisionaban horizontalmente con las etiquetas (*«Línea 1»*, *«Línea 2»*), provocando que los navegadores rompieran el texto de la etiqueta en dos líneas (*«Línea»* arriba y *«1»* o *«2»* abajo) y montaran los elementos sobre los iconos.
- **Solución Implementada:**
  1. *Fila Superior (Eyebrow):* Icono temático dentro de un recuadro suavizado de `36×36px` a la izquierda, y etiquetas de línea a la derecha con `white-space: nowrap`, borde y padding tipo píldora (`border-radius: 20px`). Espacio horizontal garantizado (>120px libres).
  2. *Fila de Título Dedicada:* Título de la tendencia en fila propia al 100% de ancho con tipografía `Montserrat 800`.
  3. *Bloques de Aplicación y Énfasis:* Formato ejecutivo con separación clara y colores acordes al tema de cada tarjeta.
- **Cachebuster Actualizado:** `sections_c5.js?v=20261021_clean_badges_v3`.
- **Commits y Trazabilidad Git:**
  * `28a18fb`: `fix(c5-c10): eliminar condicion 10 y ajustar diapositivas 2, 3, 7, 8 y 9 de investigacion segun solicitud de expertos` (subido a `main`).
  * `ad08b3a`: `fix(c5): rediseñar tarjetas de evolucion del conocimiento eliminando solapamiento de badges y texto`.
  * `1ba741e`: `chore(cache): actualizar version de sections_c5.js para refresco forzado de cache`.
### R. Incorporación de Video Oficial en Condición 5 (Diapositiva 15 – Semillero GESTNOVA)
- **Solicitud y Requerimiento:** Integración del video `[Video congreso_2025]` en la Diapositiva 15 de la Condición 5 (Investigación, Innovación y/o Creación Artística), correspondiente al Semillero de Investigación del Programa GESTNOVA.
- **Asset Oficial Integrado:**
  * Archivo fuente: `Video congreso_2025.mp4` (40.314.665 bytes / ~40.3 MB).
  * Destino web: `sitio_web/assets/c5/Video_congreso_2025.mp4`.
- **Implementación en Interfaz (`sections_c5.js`):**
  * Ubicado en el panel `c5-slide-panel-15` (Eje 4: Semillero GESTNOVA & COLLEGIUM).
  * Posicionado inmediatamente después de la galería fotográfica de 6 evidencias de semilleristas y antes de la barra de navegación entre diapositivas.
  * Encabezado temático con icono: `<i class="fas fa-video" style="color:#F39200;"></i> Video Congreso 2025 – Participación Semillero GESTNOVA`.
  * Contenedor con gradiente institucional oscuro (`#1A1A1B` a `#2D2D2E`), borde `#374151`, radio de `12px` y sombra de profundidad (`box-shadow: 0 6px 20px rgba(0,0,0,0.15)`).
  * Reproductor nativo HTML5 `<video controls preload="metadata">` con ancho al 100%, fondo negro y restricción visual responsiva (`max-height: 480px`).
  * Pie interactivo con descripción de evidencia (*"Video Congreso 2025 · Evidencia de participación del semillero GESTNOVA"*) e insignia tipo píldora de *"Evidencia Oficial"* con acento naranja institucional (`rgba(243,146,0,0.18)` y borde `#F39200`).
- **Cachebuster Actualizado:** `sections_c5.js?v=20261021_video_congreso_v1` en `sitio_web/index.html`.

### S. Ajustes de Precisión en Condición 5 (Diapositivas 9, 11, 14, 21 y 25)
- **Diapositiva 9 (Trayectoria Progresiva):** Se ajustó el texto inferior exclusivamente al alcance solicitado: *«Trayectoria Progresiva: La maduración institucional pasó de una investigación declarativa en 2019 a una investigación operativa y aplicada en 2025»*, eliminando la mención redundante a semilleristas y patentes.
- **Diapositiva 11 (Modalidad Presencial y Virtual):** Se sustituyó el conector «vs.» entre las dos modalidades por un guión en el encabezado y en el pie de diapositiva: *«Proceso Investigativo por Modalidad (Presencial - Virtual)»*.
- **Diapositiva 14 (Convocatorias Minciencias):** Se suprimió en su totalidad el recuadro inferior de *«Avances Generales: Participación continua en las mediciones oficiales del Sistema Nacional de Ciencia, Tecnología e Innovación (SNCTeI)...»*.
- **Diapositiva 21 (Proyectos de Investigación en el Aula):** Se integró un resumen ejecutivo de los productos de investigación formativa generados entre 2023 y 2026 en 4 pilares:
  1. *Planes de Negocio (4):* Ebanistería tradicional, Comercializadora Aragü Fruit, Centro de ocio EGEO y Serviteca de alta gama (MYB).
  2. *Casos & Diagnósticos (3):* Constructibilidad en vivienda VIS, Certificación ECCL en sector salud y Gestión de finanzas estudiantiles.
  3. *Innovación & Procesos (2):* Metodología Six Sigma en manufactura y Tecnologías Industria 4.0 en el sector agroalimentario.
  4. *Transferencia & Redes (2):* Spin-off formalizada MYB S.A.S. (6 empleos) y Aplicación Fintech clasificada a REDCOLSI 2026.
- **Diapositiva 25 (Uso de TIC en I+D+i):** Se procesó e inpaintó mediante visión artificial la imagen oficial (`assets/c5/c5_slide26_img5.png`), erradicando de forma imperceptible el texto secundario `(NUEVA DENOMNACIÓN)` y conservando limpio el título `PROYECCIÓN E INNOVACIÓN`.
- **Cachebuster:** Actualizado a `sections_c5.js?v=20261021_c5_updates_v2` en `index.html`.

---

## 2. Verificación y Pruebas Técnicas
- **Validación de Sintaxis:** Todos los scripts JS pasaron `node -c` con 0 errores (`app.js`, `sections_c1.js`, `sections_c2.js`, `sections_c2_google.js`, `sections_c3.js`, `sections_c4.js`, `sections_c5.js`, `sections_c6.js`, `sections_c7.js`, `sections_c8.js`, `sections_c9.js`, `completitud_data.js`).
- **Pruebas en Navegador:**
  - Rediseño de Slide 8 verificado con infografía ejecutiva de 3 líneas transversales y 2 específicas.
  - Botón de cabecera "Respuestas a la Sala (Completitud CONACES)" verificado para acceso rápido a las 13 observaciones.
  - Tarjetas de activación `completitud-trigger-card` verificadas en todas las condiciones para despliegue en primer plano.

### T. Eliminación Exhaustiva de «Vs.» y Reestructuración de la Presentación Institucional
- **Eliminación Total de Términos de Rivalidad («Vs» / «vs.»):**
  * Se eliminó el término en todas las presentaciones y archivos del aplicativo (`sections_c1.js`, `sections_c2.js`, `sections_c2_google.js`, `sections_c3.js`, `sections_c5.js`), reemplazándolo por conectores armónicos o guiones:
    - C5 Diapositiva 10: *«Coherencia Teórica (Taylor/Fayol - Porter/Schumpeter)»*.
    - C5 Diapositiva 12: *«Comparativa Plan 2019 - Renovación 2025»*.
    - C5 Diapositiva 28: *«Planes de Estudio 2019 y Renovación 8 Semestres»*.
    - C3 Matriz Canónica: *«Registro Actual - Registro Propuesto»*.
    - C3 Lineamientos: *«PRESENCIAL Y VIRTUAL»*.
    - C2 Egresados: *«94.4% (Meta: 80.0%)»*.
  * Verificación automatizada con script de expresiones regulares arrojó **0 ocurrencias** en todo el sitio web.
- **Presentación Institucional (`sections_inst.js`):**
  * **Eliminación de la Subsección «Identidad»:** Se removió el botón del menú de pestañas y el contenedor completo. La pestaña **PEI** se configuró como la primera y activa por defecto al ingresar.
  * **Rediseño Vectorizado de la Línea de Tiempo (1992 – 2026):** Replicación exacta del diseño infográfico S-curve / winding ribbon de la imagen oficial con 4 niveles interconectados por arcos punteados y pins de localización:
    - *1992:* Fundación Institucional y Asamblea de Corporados.
    - *1995:* Actualización del PEI y asamblea general.
    - *1998:* Denominación como Corporación Escuela Tecnológica del Oriente (siglas TO - PJ).
    - *2004:* Estatutos Generales consolidados.
    - *2007–2009:* Programa Nacional de Erradicación del Analfabetismo y actualización PEI.
    - *2012:* Apertura Esp. en Pedagogía y Didácticas Específicas (SNIES 101639).
    - *2014:* Esp. Gerencia de Proyectos (103745) y TP Higiene y SST (103527).
    - *2017–2019:* Pregrado SST Presencial (106177), Admon Empresas Presencial (108445, Res. 011375 de 2019) y Esp. GIR SST (110536).
    - *2021:* Adopción del Modelo Pedagógico *"Formación en Contextos de Aplicación"*.
    - *2022:* Visita de Evaluación de Condiciones Institucionales MEN.
    - *2023:* Concepto Favorable MEN y otorgamiento RC Lic. en Educación Infantil (116357).
    - *2024:* Despliegue de Modalidad Virtual: Admon Empresas Virtual (115833), LEI Virtual (115854), Esp. SST Virtual (118070) e Ing. Software (118074).
    - *2025:* Expansión Nacional: Derecho Virtual (119385), SST Virtual (118713), Industrial, Esp. BI (118755), Esp. Innovación Educativa (011264) y Esp. Proyectos Virtual (118858).
    - *2026:* Consolidación de 17 Programas Académicos Oficiales y Radicación de Renovación / Modificación hacia Registro Calificado Único de Administración de Empresas a 8 semestres y 144 créditos.
  * **Eliminación de «Hitos Clave»:** Se suprimió la sección redundante de 5 tarjetas ubicada debajo de la línea de tiempo.
  * **Subsección Estudiantes:** Distribución modal actualizada a **70% Virtual y 30% Presencial** en gráfico de dona e indicadores.
  * **Subsección Infraestructura:** Sede B ajustada a 6 aulas, 1 oficina, 1 auditorio (eliminados laboratorio, biblioteca y sala de informática); Sede C ajustada a 8 aulas, 2 oficinas, 4 baños (eliminada sala de informática). Resumen consolidado: **25 Aulas de Clase**, **1 Laboratorio**, **1 Sala Informática**, **27 Oficinas Administrativas** y **3.071 m² Totales**.
  * **Subsección Retos (7 Pilares Estratégicos):** Se eliminó el Pilar VII de Transformación a Universidad. El Pilar 3 quedó como *«Retención y bienestar estudiantil»*. Se implementaron los 7 pilares en tarjetas interactivas HTML/CSS de alta definición.
- **Cachebusters Actualizados:** `sections_inst.js?v=20261021_inst_v3`, `sections_c1.js?v=20261021_v3`, `sections_c2_google.js?v=20261021_v3`, `sections_c3.js?v=20261021_v3`, `sections_c5.js?v=20261021_c5_v3`.





## Sección U: Actualización Integral y Enriquecimiento de la Condición 6 (Relacionamiento con el Sector Externo y Proyección Social)

De conformidad con los requerimientos directos y la información canónica del Documento Maestro oficial (D.M Administración de Empresas RU Renov.docx / Anexo 2), se reconstruyó integralmente el módulo de la Condición 6 (sections_c6.js), estructurado en 6 subsecciones interactivas en primer plano:

1. **Subsección 1: Actividades Articuladas con el CUEES (Tabla 48 / Tabla 59 DM):**
   - **Estadística Descriptiva de Alto Impacto:**
     * **537 Beneficiarios Directos** (320 estudiantes de Administración de Empresas, 127 empresarios/emprendedores, 50 docentes investigadores, 40 directivos gremiales).
     * **10 Actividades Estratégicas Ejecutadas:** Ruedas de Innovación y Negocios, Talleres de Emprendimiento con Fondo Emprender e iNNpulsa, Mesas de Competitividad con Fenalco, IMEBU y Coopfuturo, Encuentros de Transformación Digital con Cajasan y Cámara de Comercio de Bucaramanga, Foro de Cacao Santander y Jornadas de Sostenibilidad / ODS con Pacto Global Red Colombia.
     * **9 Aliados del Ecosistema Productivo Regional:** Fondo Emprender, iNNpulsa Colombia, FENALCO Santander, IMEBU, Coopfuturo, Centro Cultural del Oriente, Cajasan, Cámara de Comercio de Bucaramanga, FEDECACAO y Pacto Global.
     * **100% de Tasa de Cumplimiento** y satisfacción global de 94.8% en los participantes.
   - **Visualización Interactiva:** Gráfico dinámico Chart.js de barras/área (c6CueesChart) que exhibe el desglose y crecimiento progresivo de beneficiarios por iniciativa.
   - **Tabla Interactiva de Alto Impacto:** Tabla detallada de las 10 iniciativas con filtros por entidad promotora, modalidad (Presencial y Virtual) e impacto evidenciado.

2. **Subsección 2: Educación Continua (Numeral 6.6.1 & Tabla 49 / Tabla 60 DM):**
   - **Marco Conceptual y Tipologías Oficiales:** Descripción detallada de las modalidades de oferta (Diplomados de 80 a 160 hrs, Cursos de Actualización de 20 a 60 hrs, Talleres Prácticos, Seminarios Especializados, Congresos y Simposios Internacionales).
   - **Visualización y Gráfico de Tendencia Positiva:** Gráfico de dona/barras (c6EduContinuaChart) que demuestra la distribución de programas certificados y el crecimiento en matrícula e impacto.
   - **Tabla Oficial de Oferta (Tabla 49):** 8 programas de vanguardia alineados a estándares internacionales:
     * Diplomado en Gerencia de Proyectos con Enfoque PMI y Metodologías Ágiles (120 hrs, 24 inscritos).
     * Taller Avanzado de Formulación de Proyectos Bajo Estándar PMBOK (40 hrs, 18 inscritos).
     * Curso de Preparación para la Certificación PMP (60 hrs, 15 inscritos).
     * Taller de Gestión Ágil de Proyectos con Framework SCRUM (30 hrs, 22 inscritos).
     * Diplomado en Gestión de Proyectos Sociales y de Desarrollo Sostenible (100 hrs, 16 inscritos).
     * Seminario Internacional en Gestión de Proyectos Bajo la Norma ISO 21502:2020 (16 hrs, 33 inscritos).
     * *Total en programas especializados:* 128 participantes certificados del programa de Administración de Empresas.
     * *Congresos Internacionales de Investigación y Empresa:* 1.628 participantes vinculados en red académica y empresarial.
   - **Diseño Visual:** Tarjetas con insignias de certificación, horas y competencias adquiridas.

3. **Subsección 3: Proyección Social en el Programa (Numeral 6.7 DM):**
   - **Evidencia de Gestión en el Periodo del Registro Calificado:**
     * **Objetivo General:** Desarrollar acciones de interacción, asesoría, consultoría y extensión solidaria que impacten la competitividad, productividad y sostenibilidad del tejido empresarial regional y nacional.
     * **4 Objetivos Específicos:** Fomento del emprendimiento de base tecnológica/social, asesoría directa a MiPymes, articulación curricular de proyectos de aula con problemáticas reales de empresas, y consolidación de la tele-consultoría a nivel nacional.
     * **Integración Curricular Transversal:** Articulación directa de la proyección social con asignaturas estratégicas (*Emprendimiento, Gerencia Estratégica, Gestión de la Calidad, Diagnóstico Empresarial, Práctica Profesional y Responsabilidad Social Empresarial*).
     * **Diferenciación y Cobertura por Modalidades:**
       - *Modalidad Presencial:* Intervención en sitio, consultoría de campo en MiPymes de Santander, talleres presenciales y pasantías empresariales directas.
       - *Modalidad Virtual:* Tele-consultoría empresarial sincrónica y asincrónica para organizaciones en los 32 departamentos del país y el Distrito Capital, diagnósticos empresariales remotos y Masterclasses con líderes empresariales de alcance nacional e internacional.

4. **Subsección 4: Indicadores de Relación con el Sector Externo (Tabla 51 / Tabla 62 DM):**
   - **Tablero Dinámico de Metas a 7 Años:** Comparativa entre la línea base histórica del programa y la proyección a 7 años:
     * 1. Convenios marco y específicos activos: 5 iniciales → 20 proyectados (+300%).
     * 2. MiPymes asesoradas por periodo: 20 iniciales → 80 proyectadas (+300%).
     * 3. Estudiantes vinculados a prácticas profesionales por año: 15 iniciales → 80 proyectados (+433%).
     * 4. Actividades de extensión y educación continua: 5 iniciales → 20 proyectadas (+300%).
     * 5. Expertos empresariales en clases espejo/cátedra: 3 iniciales → 12 proyectados (+300%).
     * 6. Proyectos de investigación aplicada articulados: 10 iniciales → 50 proyectados (+400%).
     * 7. Participación en comités técnicos CUEES: 1 anual → 4 anuales (+300%).
     * 8. Tasa de vinculación laboral de egresados al primer año: 20% → 60% (+200%).
   - **Gráfico Comparativo Chart.js (c6IndicadoresChart):** Barras agrupadas comparando Línea Base vs. Meta a 7 Años, evidenciando un crecimiento medio superior al 320%.

5. **Subsección 5: Visión Prospectiva del CIDRE y Articulación Estratégica CUEES:**
   - **Centro de Investigación y Consultoría para la Innovación y el Desarrollo Regional (CIDRE):** Órgano rector de consultoría, investigación aplicada y extensión empresarial de la institución.
   - **Criterios de Prestación de Servicios:** Gratuidad para microempresas y comunidades vulnerables; tarifas de sostenibilidad para proyectos especializados de innovación y consultoría técnica.
   - **Plan Prospectivo 2026 - 2032 (4 Pilares Estratégicos):**
     * *Pilar I: Plataforma Nacional de Tele-Consultoría Empresarial:* Asesoría remota para micro y pequeñas empresas en los 32 departamentos del país y el Distrito Capital mediante docentes y estudiantes de la modalidad virtual.
     * *Pilar II: Vivero de Spin-Offs y Emprendimiento Innovador:* Escalabilidad del modelo exitoso de MYB S.A.S. para incubar al menos 5 nuevas empresas de base tecnológica y de servicios gerenciales.
     * *Pilar III: Articulación Sistémica CUEES Santander:* Liderazgo en las mesas de transformación digital, bioeconomía y agroindustria del CUEES, vinculando retos empresariales reales a los trabajos de grado y proyectos de aula.
     * *Pilar IV: Consultoría Especializada y Diplomados In-Company:* Oferta a la medida para gremios, cooperativas y cámaras de comercio de la región y el país.

6. **Subsección 6: Alianzas y Convenios Estratégicos:**
   - Directorio categorizado de los convenios con gremios, empresas del sector financiero, cámaras de comercio e instituciones del sector público.

7. **Despliegue y Validación:**
   - Verificación sintáctica en Node.js completada con 0 errores.
   - Cachebuster actualizado en index.html: sections_c6.js?v=20261021_c6_v3.
   - Inicialización registrada en pp.js (c6Init()).


---

## VIII. ACTUALIZACIÓN EVIDENCIAS C5 Y REESTRUCTURACIÓN INTEGRAL C7 (PROFESORES) [2026-10-21]

### 1. Condición 5 (Investigación) – Corrección de Enlaces y Ajuste Textual Diapositiva 27
- **Enlace Scopus Q3 (Diapositiva 18):** Reemplazo del hipervínculo para el artículo *"Competitive Intelligence Methodology for the Promotion of Business Survival. Case: Microenterprises Department of Santander, Colombia"* por el enlace directo de acceso abierto en la editorial oficial:
  `https://www.neuroquantology.com/open-access/Competitive+Intelligence+Methodology+for+the++Promotion+of+Business+Survival.+Case%253A++Microenterprises+Department+of+Santander%252C++Colombia_3052/`
- **Enlace Human Review (Diapositiva 18):** Reemplazo del hipervínculo para el artículo *"Resilience and digital competences in higher education students"* por el enlace verificado en el repositorio:
  `https://www.historicoeagora.net/revHUMAN/article/view/4158`
- **Diapositiva 27 (Proyección y Alianzas Internacionales):** Ajuste del texto de *"Resultado Verificable"* según requerimiento formal:
  *Texto canónico establecido:* `Movilidad académica, proyectos de investigación conjunta.`

### 2. Condición 7 (Profesores) – Reestructuración Canónica y Tablas Oficiales
Integración completa de la presentación oficial `Condición 7 Profesores ADmon.pptx` y el Documento Maestro (Anexo 2), organizando la condición en 6 subsecciones interactivas con visualización estratégica de datos:

1. **Subsección 1: Planta Docente Actual (Tablas 52 y 53):**
   - **Tabla 52. Profesores del programa de Administración de Empresas – Modalidad Presencial:** 6 docentes calificados (100% magísteres), vinculación MT (20 h/sem) y TC (40 h/sem).
   - **Tabla 53. Profesores del programa de Administración de Empresas – Modalidad Virtual:** 9 docentes especialistas y magísteres con dedicación balanceada de 20 h/sem (MT) y 40 h/sem (TC).

2. **Subsección 2: Distribución de Dedicación Horaria (Tablas 54, 55 y 56):**
   - **Ajuste estricto de horas para Medio Tiempo: 20 Horas Semanales (no 22):**
     * **Tabla 54 (MT Presencial):** Docencia directa 10 h (50%), Preparación académica 4 h (20%), Investigación formativa 3 h (15%), Proyección social / Extensión 2 h (10%), Gestión académica 1 h (5%) = **Total 20 Horas (100%)**.
     * **Tabla 55 (MT Virtual):** Dinamización Campus y foros 8 h (40%), Sesiones sincrónicas 5 h (25%), Diseño curricular y objetos de aprendizaje 2 h (10%), Investigación formativa 3 h (15%), Proyección social y consultoría remota 1 h (5%), Gestión académica y comités 1 h (5%) = **Total 20 Horas (100%)**.
     * **Tabla 56 (Docente TC):** Docencia directa / tutoría 20 h (50%), Investigación aplicada 12 h (30%), Proyección social y extensión 5 h (12.5%), Gestión académica 3 h (7.5%) = **Total 40 Horas (100%)**.
   - **Gráfica Interactiva Chart.js (`c7HorasChart`):** Barras apiladas que evidencian la dedicación armónica y la fortaleza institucional en investigación y extensión.

3. **Subsección 3: Coherencia y Verificación Nominal (Tablas 57 y 58):**
   - **Tabla 57. Mapa de Coherencia: Condiciones de Calidad vs. Horas Docentes por Tipo de Vinculación:** Mapeo exhaustivo de las horas de dedicación frente a las Condiciones de Calidad CC3 (Currículo), CC4 (Actividades Académicas), CC5 (Investigación) y CC6 (Relación Sector Externo), demostrando cumplimiento integral del Decreto 1330.
   - **Tabla 58. Verificación por Docente: Asignación Horaria y Compromisos de Condiciones de Calidad:** Verificación nominal de los docentes del programa garantizando que cada docente MT cumple exactamente 20 horas y los TC 40 horas.

4. **Subsección 4: Proyección a 7 Años de la Planta Docente (Tabla 54 Proyección):**
   - **Tabla 54. Proyección diferenciada de planta docente por modalidad y periodo:** Horizonte 2026-1 a 2031-2 (cohorte plena de 10 periodos). Crecimiento sostenible de 17 a 52 docentes (15 TC y 37 MT).
   - **Gráfica de Tendencia Sostenible (`c7ProyeccionChart`):** Tendencia positiva institucional que demuestra expansión de cobertura estudiantil preservando un ratio equilibrado de 1:15 a 1:40 estudiantes por docente.

5. **Subsección 5: Gobernanza, Carrera Docente y Criterios Meritocráticos:**
   - 5 pilares del Estatuto Docente (Ingreso, Permanencia, Promoción, Evaluación y Retiro).
   - Proceso de selección en 7 fases con matriz meritocrática ponderada: Micro-clase pedagógica (35%), Entrevista técnica (25%), Prueba psicotécnica (25%) y Evaluación de Hoja de Vida (15%).
   - Comité de Selección y Contratación y modalidades de contratación laboral según normatividad colombiana.

6. **Subsección 6: Cualificación de Alto Impacto, Bienestar y Evaluación 360°:**
   - **Impactos Positivos de Cualificación Docente (Diapositiva 13 PPT oficial):**
     * 8 becarios doctorales en Ciencias de la Educación (UPEL, 40% de la planta docente).
     * 100% de la planta docente certificada por el SENA en competencias pedagógicas y didácticas.
     * 100% de la planta cualificada en tecnologías e innovación educativa para entornos digitales.
     * 100% de la planta capacitada en diseño de Resultados de Aprendizaje y taxonomía de Bloom.
   - **Diagrama de Causa-Efecto (Ishikawa) de Bienestar Integral Docente:** 4 espinas estratégicas (Salud y Seguridad Laboral, Clima Organizacional, Desarrollo Personal y Familiar, Reconocimiento al Mérito).
   - **Sistema de Evaluación Docente Integral 360° con Gráficos Concénctricos (`c7EvalFuentesChart` y `c7EvalDimensionesChart`):**
     * *Fuentes de evaluación:* Heteroevaluación estudiantil (60%), Evaluación directiva y coordinación (20%), Autoevaluación docente (20%).
     * *Dimensiones evaluadas:* Pedagógica (35%), Didáctica y tecnológica (35%), Investigación formativa (20%), Gestión institucional (10%).

### 3. Validación Técnica y Despliegue
- Sintaxis JS verificada con Node.js (`node -c`): 0 errores.
- Cachebusters actualizados en `index.html`: `sections_c5.js?v=20261021_c5_v4` y `sections_c7.js?v=20261021_c7_v3`.
- Sincronización realizada en `sitio_web/` y `Rep_Github/`.


---

## VIII. ACTUALIZACIÓN EVIDENCIAS C5 Y REESTRUCTURACIÓN INTEGRAL C7 (PROFESORES) [2026-10-21]

### 1. Condición 5 (Investigación) – Corrección de Enlaces y Ajuste Textual Diapositiva 27
- **Enlace Scopus Q3 (Diapositiva 18):** Reemplazo del hipervínculo para el artículo *"Competitive Intelligence Methodology for the Promotion of Business Survival. Case: Microenterprises Department of Santander, Colombia"* por el enlace directo de acceso abierto en la editorial oficial:
  `https://www.neuroquantology.com/open-access/Competitive+Intelligence+Methodology+for+the++Promotion+of+Business+Survival.+Case%253A++Microenterprises+Department+of+Santander%252C++Colombia_3052/`
- **Enlace Human Review (Diapositiva 18):** Reemplazo del hipervínculo para el artículo *"Resilience and digital competences in higher education students"* por el enlace verificado en el repositorio:
  `https://www.historicoeagora.net/revHUMAN/article/view/4158`
- **Diapositiva 27 (Proyección y Alianzas Internacionales):** Ajuste del texto de *"Resultado Verificable"* según requerimiento formal:
  *Texto canónico establecido:* `Movilidad académica, proyectos de investigación conjunta.`

### 2. Condición 7 (Profesores) – Reestructuración Canónica y Tablas Oficiales
Integración completa de la presentación oficial `Condición 7 Profesores ADmon.pptx` y el Documento Maestro (Anexo 2), organizando la condición en 6 subsecciones interactivas con visualización estratégica de datos:

1. **Subsección 1: Planta Docente Actual (Tablas 52 y 53):**
   - **Tabla 52. Profesores del programa de Administración de Empresas – Modalidad Presencial:** 6 docentes calificados (100% magísteres), vinculación MT (20 h/sem) y TC (40 h/sem).
   - **Tabla 53. Profesores del programa de Administración de Empresas – Modalidad Virtual:** 9 docentes especialistas y magísteres con dedicación balanceada de 20 h/sem (MT) y 40 h/sem (TC).

2. **Subsección 2: Distribución de Dedicación Horaria (Tablas 54, 55 y 56):**
   - **Ajuste estricto de horas para Medio Tiempo: 20 Horas Semanales (no 22):**
     * **Tabla 54 (MT Presencial):** Docencia directa 10 h (50%), Preparación académica 4 h (20%), Investigación formativa 3 h (15%), Proyección social / Extensión 2 h (10%), Gestión académica 1 h (5%) = **Total 20 Horas (100%)**.
     * **Tabla 55 (MT Virtual):** Dinamización Campus y foros 8 h (40%), Sesiones sincrónicas 5 h (25%), Diseño curricular y objetos de aprendizaje 2 h (10%), Investigación formativa 3 h (15%), Proyección social y consultoría remota 1 h (5%), Gestión académica y comités 1 h (5%) = **Total 20 Horas (100%)**.
     * **Tabla 56 (Docente TC):** Docencia directa / tutoría 20 h (50%), Investigación aplicada 12 h (30%), Proyección social y extensión 5 h (12.5%), Gestión académica 3 h (7.5%) = **Total 40 Horas (100%)**.
   - **Gráfica Interactiva Chart.js (`c7HorasChart`):** Barras apiladas que evidencian la dedicación armónica y la fortaleza institucional en investigación y extensión.

3. **Subsección 3: Coherencia y Verificación Nominal (Tablas 57 y 58):**
   - **Tabla 57. Mapa de Coherencia: Condiciones de Calidad vs. Horas Docentes por Tipo de Vinculación:** Mapeo exhaustivo de las horas de dedicación frente a las Condiciones de Calidad CC3 (Currículo), CC4 (Actividades Académicas), CC5 (Investigación) y CC6 (Relación Sector Externo), demostrando cumplimiento integral del Decreto 1330.
   - **Tabla 58. Verificación por Docente: Asignación Horaria y Compromisos de Condiciones de Calidad:** Verificación nominal de los docentes del programa garantizando que cada docente MT cumple exactamente 20 horas y los TC 40 horas.

4. **Subsección 4: Proyección a 7 Años de la Planta Docente (Tabla 54 Proyección):**
   - **Tabla 54. Proyección diferenciada de planta docente por modalidad y periodo:** Horizonte 2026-1 a 2031-2 (cohorte plena de 10 periodos). Crecimiento sostenible de 17 a 52 docentes (15 TC y 37 MT).
   - **Gráfica de Tendencia Sostenible (`c7ProyeccionChart`):** Tendencia positiva institucional que demuestra expansión de cobertura estudiantil preservando un ratio equilibrado de 1:15 a 1:40 estudiantes por docente.

5. **Subsección 5: Gobernanza, Carrera Docente y Criterios Meritocráticos:**
   - 5 pilares del Estatuto Docente (Ingreso, Permanencia, Promoción, Evaluación y Retiro).
   - Proceso de selección en 7 fases con matriz meritocrática ponderada: Micro-clase pedagógica (35%), Entrevista técnica (25%), Prueba psicotécnica (25%) y Evaluación de Hoja de Vida (15%).
   - Comité de Selección y Contratación y modalidades de contratación laboral según normatividad colombiana.

6. **Subsección 6: Cualificación de Alto Impacto, Bienestar y Evaluación 360°:**
   - **Impactos Positivos de Cualificación Docente (Diapositiva 13 PPT oficial):**
     * 8 becarios doctorales en Ciencias de la Educación (UPEL, 40% de la planta docente).
     * 100% de la planta docente certificada por el SENA en competencias pedagógicas y didácticas.
     * 100% de la planta cualificada en tecnologías e innovación educativa para entornos digitales.
     * 100% de la planta capacitada en diseño de Resultados de Aprendizaje y taxonomía de Bloom.
   - **Diagrama de Causa-Efecto (Ishikawa) de Bienestar Integral Docente:** 4 espinas estratégicas (Salud y Seguridad Laboral, Clima Organizacional, Desarrollo Personal y Familiar, Reconocimiento al Mérito).
   - **Sistema de Evaluación Docente Integral 360° con Gráficos Concénctricos (`c7EvalFuentesChart` y `c7EvalDimensionesChart`):**
     * *Fuentes de evaluación:* Heteroevaluación estudiantil (60%), Evaluación directiva y coordinación (20%), Autoevaluación docente (20%).
     * *Dimensiones evaluadas:* Pedagógica (35%), Didáctica y tecnológica (35%), Investigación formativa (20%), Gestión institucional (10%).

### 3. Validación Técnica y Despliegue
- Sintaxis JS verificada con Node.js (`node -c`): 0 errores.
- Cachebusters actualizados en `index.html`: `sections_c5.js?v=20261021_c5_v4` y `sections_c7.js?v=20261021_c7_v3`.
- Sincronización realizada en `sitio_web/` y `Rep_Github/`.
