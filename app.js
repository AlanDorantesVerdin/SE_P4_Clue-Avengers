// --- DATA: 15 ENTIDADES BASE ---
const ENTITIES = {
    characters: [
        { id: 'c1', name: 'Capitán América', icon: 'fa-shield-halved' },
        { id: 'c2', name: 'Iron Man', icon: 'fa-robot' },
        { id: 'c3', name: 'Ant-Man', icon: 'fa-bug' },
        { id: 'c4', name: 'Black Widow', icon: 'fa-spider' },
        { id: 'c5', name: 'Hawkeye', icon: 'fa-bullseye' }
    ],
    weapons: [
        { id: 'w1', name: 'Escudo de Vibranium', icon: 'fa-compact-disc' },
        { id: 'w2', name: 'Cetro de Loki', icon: 'fa-wand-magic-sparkles' },
        { id: 'w3', name: 'Guante Repulsor', icon: 'fa-hand-fist' },
        { id: 'w4', name: 'Discos Pym', icon: 'fa-circle-dot' },
        { id: 'w5', name: 'Widow\'s Bite', icon: 'fa-bolt' }
    ],
    locations: [
        { id: 'l1', name: 'Cuarto de Entrenamiento', icon: 'fa-dumbbell' },    
        { id: 'l2', name: 'Hangar de Aterrizaje', icon: 'fa-plane' },
        { id: 'l3', name: 'Laboratorio Stark', icon: 'fa-microscope' },
        { id: 'l4', name: 'Sala de Juntas', icon: 'fa-handshake' },
        { id: 'l5', name: 'Reactor Arc', icon: 'fa-atom' }
    ]
};

// --- DATA: 5 CASOS MAESTROS DEFINIDOS (Lógica de Contradicción) ---
const MASTER_CASES = [
    // CASO 1: Skrull es Cap (c1), con Escudo (w1), en Hangar (l2).
    {
        id: 1, truth: { char: 'Capitán América', weapon: 'Escudo de Vibranium', loc: 'Hangar de Aterrizaje' },
        clues: {
             /* Personajes */
             'c1': "DECLARACIÓN CA: 'No vi nada. Estaba en la Sala de Juntas analizando el Cetro de Loki.'", 
             'c2': "DECLARACIÓN IM: 'Estuve toda la noche en el Laboratorio probando mis Repulsores. Nadie me molestó.'",
             'c3': "DECLARACIÓN AM: 'No me moví del Cuarto de Entrenamiento, estuve probando los Discos Pym.'",
             'c4': "DECLARACIÓN BW: 'Hice guardia en el Reactor Arc verificando que mis Bite estuvieran cargados.'",
             'c5': "DECLARACIÓN HW: 'Protegí la Sala de Juntas toda la noche junto al Cetro de Loki. No hubo intrusos.'",
             /* Localizaciones */
             'l1': "CÁMARAS ENTRENAMIENTO: Visión limpia. Ant-Man estuvo solo probando tecnología reductora todo el tiempo.",
             'l2': "CÁMARAS HANGAR: ¡APAGADAS! Pero los sensores térmicos muestran rastros bio-energéticos del Capitán América.",
             'l3': "CÁMARAS LABORATORIO: Iron Man aparece trabajando sin interrupción. Ninguna anomalía detectada.",
             'l4': "CÁMARAS JUNTAS: Hawkeye permanece sentado haciendo guardia en solitario al Cetro.",
             'l5': "CÁMARAS REACTOR ARC: Black Widow estuvo haciendo patrullaje sola frente al reactor.",
             /* Armas */
             'w1': "ESCÁNER ESCUDO: Se halló tirado en el Hangar. El mango biológico identifica únicamente al Cap.",
             'w2': "ESCÁNER CETRO: Intacto. Asegurado bajo llave en la Sala de Juntas.",
             'w3': "ESCÁNER REPULSORES: Estado normal. Sincronizados a la armadura activa de Iron Man en Lab.",
             'w4': "ESCÁNER DISCOS PYM: En poder de Ant-Man. Partículas residuales medidas en Cuarto Entrenamiento.",
             'w5': "ESCÁNER W. BITE: Baterías completas, adheridas al traje de Widow en el área del Reactor Arc."
        }
    },
    // CASO 2: Skrull es Iron Man (c2), con Repulsor (w3), en Laboratorio (l3).
    {
        id: 2, truth: { char: 'Iron Man', weapon: 'Guantelete Repulsor', loc: 'Laboratorio Stark' },
        clues: {
             /* Personajes */
             'c1': "DECLARACIÓN CA: 'Vigilé los Discos Pym de Hank en la Sala de Juntas.'",
             'c2': "DECLARACIÓN IM: 'Fui al Cuarto de Entrenamiento a estirar las piernas y practicar con el Escudo.'", 
             'c3': "DECLARACIÓN AM: 'Estaba en el Hangar revisando los sistemas eléctricos por encima, sin armas.'",
             'c4': "DECLARACIÓN BW: 'Yo estuve entrenando duro en el Cuarto de Entrenamiento usando el Escudo de Steve para un drill.'",
             'c5': "DECLARACIÓN HW: 'Hice mi ronda de vigilancia en el Reactor Arc asegurando el Cetro.'",
             /* Localizaciones */
             'l1': "CÁMARAS ENTRENAMIENTO: Black Widow dominó la pista usando un Escudo militar. Iron Man nunca ingresó.",
             'l2': "CÁMARAS HANGAR: Todo tranquilo, se observa un leve resplandor de Ant-Man colándose.",
             'l3': "CÁMARAS LABORATORIO: Archivos corruptos intencionales. Olor a quemadura por haz de repulsión muy alto.",
             'l4': "CÁMARAS JUNTAS: El Capitán América estuvo parado como estatua custodiando discos.",
             'l5': "CÁMARAS REACTOR ARC: Hawkeye sentado resguardando el artefacto místico Cetro.",
             /* Armas */
             'w1': "ESCÁNER ESCUDO: Prestado a Widow para entrenamiento de resistencia en L1.",
             'w2': "ESCÁNER CETRO: Aislado térmicamente en el Reactor Arc.",
             'w3': "ESCÁNER REPULSORES: Sobrecalentamiento crítico. Rastros de uso bélico severo hallados en el Lab.",
             'w4': "ESCÁNER DISCOS PYM: Sellados bajo custodia del Capitán en Sala Juntas.",
             'w5': "ESCÁNER W. BITE: Guardados en la armería general, inactivos."
        }
    },
    // CASO 3: Skrull es Ant-Man (c3), con Discos Pym (w4), en Reactor Arc (l5).
    {
        id: 3, truth: { char: 'Ant-Man', weapon: 'Discos Pym', loc: 'Reactor Arc' },
        clues: {
             'c1': "DECLARACIÓN CA: 'Asignado a vigilancia en Hangar, junto con el control de las armas de Widow.'",
             'c2': "DECLARACIÓN IM: 'Pasé el rato calibrando mis Repulsores en el Laboratorio Stark.'",
             'c3': "DECLARACIÓN AM: 'Estuve ayudando a Iron Man en el Lab, sólo estaba viendo mis Discos...'", 
             'c4': "DECLARACIÓN BW: 'Inspeccionaba el armamento alienígena (Cetro) en Entrenamiento.'",
             'c5': "DECLARACIÓN HW: 'Preparé mis puntas de flecha en la Sala de Juntas, junto al Escudo del Cap.'",
             'l1': "CÁMARAS ENTRENAMIENTO: Confirman actividad de Natasha asegurando reliquias alienígenas.",
             'l2': "CÁMARAS HANGAR: El Capitán mantuvo ronda estricta portando el equipo de Viuda Negra para auditoría.",
             'l3': "CÁMARAS LABORATORIO: Iron Man está solo operando maquinaria pesada. Ant-Man brilla por su ausencia.",
             'l4': "CÁMARAS JUNTAS: Hawkeye tallando flechas, el Escudo circular reposa en la mesa central.",
             'l5': "CÁMARAS REACTOR ARC: Sistema de micro-óptica saboteado. Hay partes atómicas de traje encogido cerca del núcleo.",
             'w1': "ESCÁNER ESCUDO: Reposando como pieza central en la Sala de Juntas.",
             'w2': "ESCÁNER CETRO: Actividad inerte bajo escrutinio de Widow en Entrenamiento.",
             'w3': "ESCÁNER REPULSORES: Firmas calóricas normales por soldadura de Iron Man en Lab Stark.",
             'w4': "ESCÁNER DISCOS PYM: Lectura residual de encogimiento biológico agresivo en zona de Reactor Arc.",
             'w5': "ESCÁNER W. BITE: Selladas momentáneamente en contenedores auditados por Steve Rogers en el Hangar."
        }
    },
    // CASO 4: Skrull es Black Widow (c4), con Widow's Bite (w5), en Sala de Juntas (l4).
    {
        id: 4, truth: { char: 'Black Widow', weapon: 'Widow\'s Bite', loc: 'Sala de Juntas' },
        clues: {
             'c1': "DECLARACIÓN CA: 'Realicé guardia preventiva en Reactores, portando mis herramientas de siempre.'",
             'c2': "DECLARACIÓN IM: 'El Hangar requería revisión. Dejé los discos pym organizados allí.'",
             'c3': "DECLARACIÓN AM: 'Mantuve el Cetro vigilado en el laboratorio como me pidieron.'",
             'c4': "DECLARACIÓN BW: 'Puse a cargar mis brazaletes en Área de Entrenamiento todo este rato.'", 
             'c5': "DECLARACIÓN HW: 'Verificaba mis repulsores (prestados) en Área de Entrenamiento por seguridad.'",
             'l1': "CÁMARAS ENTRENAMIENTO: Se observa a Clint Barton manipulando extrañamente tecnología de Stark. Nadie más a cuadro.",
             'l2': "CÁMARAS HANGAR: Tony Stark está verificando manifiestos de vuelo con una caja de discos.",
             'l3': "CÁMARAS LABORATORIO: Scott Lang aburrido pero cumpliendo su labor observando una vitrina brillante.",
             'l4': "CÁMARAS JUNTAS: Falla total en el segmento de red 5. Las alfombras muestran indicios de alto voltaje.",
             'l5': "CÁMARAS REACTOR ARC: Steve Rogers firma reportes sin mayor alteración.",
             'w1': "ESCÁNER ESCUDO: Portado firmemente en la espalda de Steve Rogers en l5.",
             'w2': "ESCÁNER CETRO: Lecturas frías, resguardado cautelosamente por Ant-Man en l3.",
             'w3': "ESCÁNER REPULSORES: Disparos accidentales causados por Hawkeye en Entrenamiento.",
             'w4': "ESCÁNER DISCOS PYM: Contabilizados por Tony Stark en área de desembarque aéreo.",
             'w5': "ESCÁNER W. BITE: Batería vaciada súbitamente a máximo poder en la Sala de Juntas. Muerte eléctrica inducida."
        }
    },
    // CASO 5: Skrull es Hawkeye (c5), con Cetro de Loki (w2), en Cuarto de Entrenamiento (l1).
    {
        id: 5, truth: { char: 'Hawkeye', weapon: 'Cetro de Loki', loc: 'Cuarto de Entrenamiento' },
        clues: {
             'c1': "DECLARACIÓN CA: 'Me ocupé de asegurar que nadie tocara los Discos Pym en el Laboratorio Stark.'",
             'c2': "DECLARACIÓN IM: 'Revisé la red de la Sala de Juntas mientas reparaba mis repulsores.'",
             'c3': "DECLARACIÓN AM: 'Mi tarea fue mantener seguro el Escudo de Vibranium dentro del Reactor Arc.'",
             'c4': "DECLARACIÓN BW: 'Hice patrulla pasiva en el Hangar resguardando los Widow Bites.'",
             'c5': "DECLARACIÓN HW: 'Fui comisionado al Laboratorio Stark para echarle un ojo a los discos mientras Cap dormía.'", 
             'l1': "CÁMARAS ENTRENAMIENTO: Circuito cerrado bloqueado por magia azul persistente. Una mente fue quebrada aquí.",
             'l2': "CÁMARAS HANGAR: Silueta de espía confirmada en la pasarela portando arsenal eléctrico. Todo calmo.",
             'l3': "CÁMARAS LABORATORIO: El Capitán América parado en una esquina mirando fíjamente un cajón sin compañía. C5 miente.",
             'l4': "CÁMARAS JUNTAS: F.R.I.D.A.Y confirma a Mr. Stark trabajando solo.",
             'l5': "CÁMARAS REACTOR ARC: Scott Lang haciendo trucos tontos con un disco estrellado con rebotes.",
             'w1': "ESCÁNER ESCUDO: Ruido de rebotes captado claramente en nivel de generación atómica l5.",
             'w2': "ESCÁNER CETRO: Rastro místico abrumador encontrado sobre un cadáver fresco en la Arena de Combate.",
             'w3': "ESCÁNER REPULSORES: Diagnostic loops running in Juntas by Stark.",
             'w4': "ESCÁNER DISCOS PYM: Caja sellada biométricamente por C1 en laboratorio l3.",
             'w5': "ESCÁNER W. BITE: Sensores confirman proximidad geográfica general al aeropuerto de la torre."
        }
    }
];

// --- JUEGO ESTADO ---
let currentCase = null;
let pointsLeft = 7
let queriedElements = []; // para evitar doble gasto en el mismo

// DOM
const ui = {
    screenLore: document.getElementById('screen-lore'),
    screenGame: document.getElementById('screen-game'),
    screenAccuse: document.getElementById('screen-accuse'),
    btnStart: document.getElementById('btn-start'),
    queriesCounter: document.getElementById('queries-counter'),
    clueLog: document.getElementById('clue-log'),
    btnGotoAccuse: document.getElementById('btn-goto-accuse'),
    
    charGrid: document.getElementById('characters-grid'),
    weapGrid: document.getElementById('weapons-grid'),
    locGrid: document.getElementById('locations-grid'),
    
    selectChar: document.getElementById('select-character'),
    selectWeap: document.getElementById('select-weapon'),
    selectLoc: document.getElementById('select-location'),
    btnSubmitAccuse: document.getElementById('btn-submit-accuse'),
    
    resultBox: document.getElementById('result-box'),
    resultTitle: document.getElementById('result-title'),
    resultDesc: document.getElementById('result-desc'),
    btnRestart: document.getElementById('btn-restart')
};

// --- INIT LORE ---
function startIntro() {
    ui.btnGotoAccuse.addEventListener('click', showAccuseScreen);
    ui.btnStart.addEventListener('click', startGameplay);
    ui.btnSubmitAccuse.addEventListener('click', checkAccusation);
    ui.btnRestart.addEventListener('click', () => location.reload());

    [ui.selectChar, ui.selectWeap, ui.selectLoc].forEach(el => {
        el.addEventListener('change', checkSelectsCompletion);
    });

    const loreText = "INFORME CONFIDENCIAL DE JARVIS:<br><br>Wasp ha sido encontrada sin vida en la Torre. Nuestros protocolos de seguridad concluyen la infiltración SKRULL, capaz de evitar la seguridad de la Torre asumiendo la forma de un Vengador.<br><br>Hay 5 Vengadores atrapados bajo confinamiento, pero uno de ellos es el invasor, quien además ha hurtado un arma y eliminado los rastros en un cuarto específico.<br><br>INSTRUCCIONES: Interroga o escanea 5 sistemas para cruzar testimonios con los registros de cámara y descubrir la verdad. Un inocente siempre estará respaldado por los registros de cámara. El mentiroso caerá en contradicciones.";
    
    let i = 0;
    const container = document.getElementById('typewriter-container');
    container.innerHTML = "";
    // Typewriter effect disabled for speed, injected directly.
    container.innerHTML = `<p>${loreText}</p>`;
    ui.btnStart.classList.remove('hidden');
}

// --- START SCENARIO ---
function startGameplay() {
    // Escoger escenario azar
    currentCase = MASTER_CASES[Math.floor(Math.random() * MASTER_CASES.length)];
    console.log("DEBUG = LA VERDAD ES: ", currentCase.truth);

    ui.screenLore.classList.add('hidden');
    ui.screenGame.classList.remove('hidden');

    renderGrid(ENTITIES.characters, ui.charGrid, 'personaje');
    renderGrid(ENTITIES.weapons, ui.weapGrid, 'arma');
    renderGrid(ENTITIES.locations, ui.locGrid, 'locacion');
}

function renderGrid(dataset, container, typeLabel) {
    container.innerHTML = '';
    dataset.forEach(item => {
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `
            <div class="card-bg card-bg-${typeLabel}"></div>
            <div class="card-content">
                <i class="fa-solid ${item.icon} card-icon"></i>
                <div class="card-title">${item.name}</div>
            </div>
        `;
        card.addEventListener('click', () => queryEntity(item.id, card));
        container.appendChild(card);
    });
}

// --- QUERY SYSTEM ---
function queryEntity(id, htmlElement) {
    if (pointsLeft <= 0 || queriedElements.includes(id)) return;

    // Expend point
    pointsLeft--;
    ui.queriesCounter.textContent = pointsLeft;
    queriedElements.push(id);
    htmlElement.classList.add('queried');

    // Make UI alert if out of points
    if (pointsLeft === 0) {
        ui.btnGotoAccuse.classList.remove('hidden');
        ui.queriesCounter.classList.remove('neon-green');
        ui.queriesCounter.classList.add('critical');
    }

    // Get the clue from the current truth table
    const clueText = currentCase.clues[id];
    
    // Publish in the Log
    if(queriedElements.length === 1) {
        ui.clueLog.innerHTML = ""; // clean placeholder msg
    }

    const li = document.createElement('li');
    li.innerHTML = `<strong>DATO OBTENIDO:</strong> ${clueText}`;
    ui.clueLog.appendChild(li);
}

// --- ACCUSATION SYSTEM ---
function showAccuseScreen() {
    ui.screenGame.classList.add('hidden');
    ui.screenAccuse.classList.remove('hidden');
}

function checkSelectsCompletion() {
    if (ui.selectChar.value && ui.selectWeap.value && ui.selectLoc.value) {
        ui.btnSubmitAccuse.disabled = false;
        ui.btnSubmitAccuse.classList.remove('disabled');
    }
}

function checkAccusation() {
    const isCharCor = ui.selectChar.value === currentCase.truth.char;
    const isWeapCor = ui.selectWeap.value === currentCase.truth.weapon;
    const isLocCor = ui.selectLoc.value === currentCase.truth.loc;

    ui.btnSubmitAccuse.classList.add('hidden'); // hide after pressing
    ui.resultBox.classList.remove('hidden');

    if (isCharCor && isWeapCor && isLocCor) {
        ui.resultBox.style.borderColor = "var(--neon-green)";
        ui.resultTitle.innerHTML = "<span style='color:var(--neon-green)'>¡SKRULL ELIMINADO!</span>";
        ui.resultDesc.innerHTML = `Tu deducción fue impecable. Descubriste que <b>${currentCase.truth.char}</b> era el impostor, asesinando a Wasp usando el <b>${currentCase.truth.weapon}</b> en el área de <b>${currentCase.truth.loc}</b>.<br><br>La Torre de los Vengadores vuelve a estar bajo nuestro control.`;
    } else {
        ui.resultBox.style.borderColor = "var(--neon-red)";
        ui.resultTitle.innerHTML = "<span style='color:var(--neon-red)'>SIMULACIÓN FALLIDA: IMPERIO KREE</span>";
        ui.resultDesc.innerHTML = `Te has equivocado y acusado a un inocente. El verdadero Skrull aprovechó la confusión para detonar la Torre.<br><br><b>La Verdad era:</b><br>Imputado: ${currentCase.truth.char}<br>Arma: ${currentCase.truth.weapon}<br>Lugar: ${currentCase.truth.loc}`;
    }
}

document.addEventListener('DOMContentLoaded', startIntro);
