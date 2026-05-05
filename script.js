const COLLOQUIO_STORAGE_KEY = "colloquio_form_state_v1";
const FORMAZIONE_STORAGE_KEY = "formazione_form_state_v1";
const ISTRUTTORI_STORAGE_KEY = "istruttori_reparto_state_v1";

const defaultInstructorsState = {
  schemaVersion: 3,
  eventTitle: 'GESTIONE "EVENTO" ISTRUTTORI',
  eventDate: "2026-04-21",
  cycleLabel: "21/04 - 05/05",
  signature: "<@&1495402199965106227> <@1084580275582931044>\n<@&1071162374591098920> <@936696543241732127>",
  movementSequence: 0,
  archiveSequence: 0,
  cycleArchives: [],
  instructors: [
    { id: "inst-mako", name: "Mako", trainings: 0, warnings: 0, active: false },
    { id: "inst-como", name: "CoMo", trainings: 0, warnings: 0, active: true },
    { id: "inst-los-angeles", name: "Los Angeles", trainings: 0, warnings: 0, active: true },
    { id: "inst-edo", name: "Edo", trainings: 6, warnings: 0, active: true },
    { id: "inst-dublino", name: "Dublino", trainings: 1, warnings: 0, active: true },
    { id: "inst-tropea", name: "Tropea", trainings: 1, warnings: 0, active: true },
    { id: "inst-phoenix", name: "Phoenix", trainings: 5, warnings: 0, active: true },
    { id: "inst-cooper", name: "Cooper", trainings: 1, warnings: 0, active: true },
    { id: "inst-mantova", name: "Mantova", trainings: 4, warnings: 0, active: true },
    { id: "inst-erpupone", name: "ErPupone", trainings: 0, warnings: 0, active: true },
    { id: "inst-esse-ferrari", name: "Esse Ferrari", trainings: 0, warnings: 0, active: true },
    { id: "inst-shadow", name: "Shadow", trainings: 0, warnings: 0, active: false },
    { id: "inst-marke", name: "Marke", trainings: 4, warnings: 0, active: true },
    { id: "inst-sasy-verde", name: "Sasy Verde", trainings: 1, warnings: 0, active: true },
    { id: "inst-price", name: "Price", trainings: 2, warnings: 0, active: true },
    { id: "inst-light", name: "Light", trainings: 1, warnings: 0, active: true },
    { id: "inst-ohio", name: "Ohio", trainings: 1, warnings: 0, active: true }
  ],
  movements: []
};

const questionsData = [
  {
    section: "Pre-check idoneità",
    questions: [
      {
        id: "q1",
        maxPoints: 3,
        title: "Verifica iniziale: fedina penale pulita e porto d'armi valido.",
        answer: "Prima di iniziare il colloquio bisogna controllare fedina penale e porto d'armi. Se uno dei due controlli non è valido, il candidato è non idoneo e il colloquio può essere interrotto."
      }
    ]
  },
  {
    section: "Azioni illegali - DA SAPERE",
    questions: [
      {
        id: "q2",
        maxPoints: 5,
        title: "Rapimento alto comando FDO: numeri di agenti e criminali.",
        answer: "Alto comando: nessun limite di agenti. Criminali: massimo 15."
      },
      {
        id: "q3",
        maxPoints: 5,
        title: "Rapimento agente non alto comando: numeri di agenti e criminali.",
        answer: "Agente non alto comando: massimo 20 agenti. Criminali: massimo 15."
      },
      {
        id: "q4",
        maxPoints: 6,
        title: "10-101: tempo di intervento, numeri e limiti dell'azione.",
        answer: "Nel 10-101 non c'è un tempo massimo di intervento. Possono intervenire massimo 20 agenti e massimo 15 criminali."
      }
    ]
  },
  {
    section: "Azione freeroam - DA SAPERE",
    questions: [
      {
        id: "q5",
        maxPoints: 4,
        title: "Freeroam: numeri massimi e gestione dei partecipanti.",
        answer: "Il candidato deve conoscere i numeri previsti dal regolamento. Riferimento attuale: massimo 10 agenti."
      },
      {
        id: "q6",
        maxPoints: 2,
        title: "Freeroam: gli ostaggi sono consentiti?",
        answer: "No, durante una freeroam non possono essere presenti ostaggi."
      },
      {
        id: "q7",
        maxPoints: 4,
        title: "Freeroam: uso dei tetti e posizionamenti consentiti.",
        answer: "I tetti non sono consentiti, a meno che siano raggiungibili fisicamente tramite scale o scale a pioli."
      },
      {
        id: "q8",
        maxPoints: 3,
        title: "Freeroam: armi autorizzate.",
        answer: "Solo pistole a colpo singolo e giubbotti."
      }
    ]
  },
  {
    section: "Rapine",
    questions: [
      {
        id: "q9",
        maxPoints: 4,
        title: "Rapina Market: numeri, ostaggi e armi consentite.",
        answer: "Market / Negozietto: agenti 2. Criminali massimo 2. Ostaggi 1. Armi: pistole a colpo singolo e giubbotti."
      },
      {
        id: "q10",
        maxPoints: 4,
        title: "Rapina Gabriella: numeri, ostaggi e armi consentite.",
        answer: "Gabriella: agenti 3. Criminali massimo 3. Ostaggi 1. Armi: pistole a colpo singolo e giubbotti."
      },
      {
        id: "q11",
        maxPoints: 6,
        title: "Rapina Fleeca: numeri, caschi e armi consentite.",
        answer: "Fleeca: agenti 4. Criminali minimo 2, massimo 4. Sono consentiti caschetti, giubbotti, pistole a colpo singolo e P90."
      },
      {
        id: "q12",
        maxPoints: 6,
        title: "Rapina Pacific: numeri, ostaggi, caschi e armi consentite.",
        answer: "Pacific: agenti 12. Criminali minimo 6, massimo 10. Ostaggi 4. Sono consentiti caschetti, giubbotti e qualunque arma in dotazione."
      }
    ]
  },
  {
    section: "Codici radio e status",
    questions: [
      {
        id: "q13",
        maxPoints: 12,
        title: "Elenca i principali codici radio e il loro significato.",
        answer: "Codici principali: 10-0 = Muto radio; 10-2 = Ricevuto male; 10-3 = Stop trasmissioni; 10-4 = Ricevuto; 10-5 = Ultimo messaggio; 10-7 = Fuori servizio; 10-8 = In servizio; 10-15 = Trasporto detenuto; 10-17 = Test sul veicolo; 10-19 = Disponibile in centrale; 10-20 = Posizione; 10-25 = Pericolo / urgenza; 10-40 = Ufficiale deceduto; 10-48 = Convergenza immediata; 10-50 = Incidente; 10-55 = Disturbo veicolare; 10-60 = Alterazione del traffico; 10-66 = Posto di blocco; 10-80 = Inseguimento; 10-99 = Ricercato; 10-100 = Richiesta rinforzi; 10-101 = Assalto alla centrale."
      },
      {
        id: "q14",
        maxPoints: 4,
        title: "Elenca i codici status e quando usarli.",
        answer: "Status 1 = pattuglia disponibile per direttive. Status 2 = pattuglia non disponibile per direttive. Status 3 = pattuglia in rifornimento / pausa cibo / riparazione veicolo."
      }
    ]
  },
  {
    section: "Procedure inseguimenti",
    questions: [
      {
        id: "q15",
        maxPoints: 9,
        title: "Procedura inseguimento: ALT, 10-80, comunicazioni e gomme.",
        answer: "Base di riferimento: 3 Alt distanziati di 10 secondi, oppure 5 Alt se il soggetto è in moto. Poi 10-80 con comunicazione in radio di posizione e veicolo. Dopo le manovre consentite e nei casi previsti, dopo 3 PIT è possibile aprire il fuoco alle gomme."
      },
      {
        id: "q16",
        maxPoints: 7,
        title: "Manovre principali: PIT, BOX, T e DOUBLE T.",
        answer: "PIT: urto controllato per far perdere stabilità al veicolo. BOX: chiusura del veicolo tra più pattuglie. T: blocco con posizionamento a T. DOUBLE T: doppio blocco coordinato a T."
      }
    ]
  },
  {
    section: "Miranda Warning - DA SAPERE",
    questions: [
      {
        id: "q17",
        maxPoints: 13,
        title: "Recita correttamente il Miranda Warning.",
        answer: "Formula di riferimento: Lei ha il diritto di rimanere in silenzio. Qualsiasi cosa dirà potrà essere usata contro di lei in tribunale. Ha il diritto di parlare con un avvocato e di averlo presente durante l'interrogatorio. Se non può permettersene uno, gliene sarà assegnato uno d'ufficio. Ha compreso i suoi diritti?"
      }
    ]
  },
  {
    section: "Valutazione generale",
    questions: [
      {
        id: "q18",
        maxPoints: 3,
        title: "Ragionamento sulle procedure LSPD e sicurezza operativa.",
        answer: "Valutare se il candidato ragiona sulle procedure invece di rispondere a caso: deve saper spiegare cosa fare, perché farlo e quando chiedere supporto."
      }
    ]
  }
];

const trainingQuestionsData = [
  {
    section: "Test formativo",
    questions: [
      {
        id: "tq1",
        maxPoints: 9,
        title: "Compilazione moduli arresto, esito rapine e multe.",
        answer: "Verificare che sappia compilare i moduli con dati completi, reati corretti, prove richieste e importi coerenti. Il modulo arresto è il punto più importante."
      },
      {
        id: "tq2",
        maxPoints: 3,
        title: "Utilizzo del canale https://canary.discord.com/channels/959468486504095824/1329182773319307376.",
        answer: "Deve sapere quando usare il canale, cosa inserire e come evitare messaggi incompleti o fuori posto."
      },
      {
        id: "tq3",
        maxPoints: 4,
        title: "Spiegazione dei gradi di allerta.",
        answer: "Chiedere cosa sono, quando cambiano e come influenzano comportamento operativo e priorità."
      },
      {
        id: "tq4",
        maxPoints: 3,
        title: "Costi dei servizi di polizia: documenti e porto d'armi.",
        answer: "Il candidato deve conoscere i costi dei documenti e del porto d'armi, e sapere come comunicarli al cittadino."
      },
      {
        id: "tq5",
        maxPoints: 3,
        title: "Contenuto della dotazione della polizia.",
        answer: "Verificare cosa riceve una recluta e cosa invece richiede autorizzazione superiore."
      },
      {
        id: "tq6",
        maxPoints: 6,
        title: "Arresti in game, fatture e utilizzo del tablet.",
        answer: "Deve saper spiegare arresto pratico, fattura, uso tablet e passaggi essenziali in città."
      },
      {
        id: "tq7",
        maxPoints: 5,
        title: "Differenze tra modulo arresto e modulo richiesta processo.",
        answer: "Deve distinguere quando usare il modulo arresto e quando serve richiesta processo, evitando scambi tra i due."
      },
      {
        id: "tq8",
        maxPoints: 1,
        title: "Test balistico, soldi sporchi e test sostanze stupefacenti. (Facoltativo)",
        answer: "Argomento facoltativo: utile per capire se sa gestire prove e controlli aggiuntivi."
      },
      {
        id: "tq9",
        maxPoints: 4,
        title: "Errori comuni nei moduli arresto, PDA e richieste processo.",
        answer: "Spiegare e far riconoscere gli errori più comuni: mancanza di GoPro, attribuzione errata dei reati, dati incompleti, importi sbagliati o richiesta processo usata male."
      },
      {
        id: "tq10",
        maxPoints: 2,
        title: "Domande finali a discrezione del formatore.",
        answer: "Aggiungere domande pratiche o di ragionamento per capire se ha guardato davvero i video e se sa applicare le procedure."
      }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("questionsContainer")) {
    initColloquio();
  }

  if (document.getElementById("trainingQuestionsContainer")) {
    initFormazione();
  }

  if (document.getElementById("instructorsContainer")) {
    initIstruttori();
  }
});

/* =========================
   COLLOQUIO
========================= */

const colloquioDom = {
  questionsContainer: document.getElementById("questionsContainer"),
  earnedPoints: document.getElementById("earnedPoints"),
  maxPoints: document.getElementById("maxPoints"),
  percentageValue: document.getElementById("percentageValue"),
  resultValue: document.getElementById("resultValue"),
  finalSummary: document.getElementById("finalSummary"),
  progressBar: document.getElementById("colloquioProgressBar"),
  completionValue: document.getElementById("colloquioCompletionValue"),
  missingFields: document.getElementById("colloquioMissingFields"),
  saveStatus: document.getElementById("colloquioSaveStatus"),
  candidateName: document.getElementById("candidateName"),
  candidateDob: document.getElementById("candidateDob"),
  criminalRecordCheck: document.getElementById("criminalRecordCheck"),
  weaponLicenseCheck: document.getElementById("weaponLicenseCheck"),
  startTime: document.getElementById("startTime"),
  endTime: document.getElementById("endTime"),
  discordLink: document.getElementById("discordLink"),
  supervisorId: document.getElementById("supervisorId"),
  copySummaryBtn: document.getElementById("copySummaryBtn"),
  downloadSummaryBtn: document.getElementById("downloadSummaryBtn"),
  resetBtn: document.getElementById("resetBtn")
};

function initColloquio() {
  renderColloquioQuestions();
  loadColloquioSavedState();
  attachColloquioListeners();
  updateColloquioEverything();
}

function renderColloquioQuestions() {
  replaceChildren(colloquioDom.questionsContainer);

  questionsData.forEach(sectionData => {
    const section = createSectionBlock(sectionData);
    const inner = section.querySelector(".section-inner");

    sectionData.questions.forEach(question => {
      inner.appendChild(createQuestionCard({
        question,
        scoreClass: "score-select",
        noteClass: "note-input",
        dataKey: "questionId",
        noteLabel: "Note esaminatore",
        withAnswer: true
      }));
    });

    colloquioDom.questionsContainer.appendChild(section);
  });

  document.querySelectorAll(".score-select, .note-input").forEach(el => {
    el.addEventListener("input", handleColloquioInput);
    el.addEventListener("change", handleColloquioInput);
  });
}

function attachColloquioListeners() {
  [
    colloquioDom.candidateName,
    colloquioDom.candidateDob,
    colloquioDom.criminalRecordCheck,
    colloquioDom.weaponLicenseCheck,
    colloquioDom.startTime,
    colloquioDom.endTime,
    colloquioDom.discordLink,
    colloquioDom.supervisorId
  ].forEach(el => {
    if (!el) return;
    el.addEventListener("input", handleColloquioInput);
    el.addEventListener("change", handleColloquioInput);
  });

  colloquioDom.copySummaryBtn?.addEventListener("click", copyColloquioSummaryToClipboard);
  colloquioDom.downloadSummaryBtn?.addEventListener("click", () => {
    downloadTextFile(colloquioDom.finalSummary?.value || "", buildColloquioFilename());
  });
  colloquioDom.resetBtn?.addEventListener("click", resetColloquio);
}

function handleColloquioInput() {
  updateColloquioEverything();
  saveColloquioState();
}

function updateColloquioEverything() {
  const totals = calculateScoreTotals(".score-select", findColloquioQuestionById, "questionId");
  const evaluation = evaluateColloquioResult(totals);

  setText(colloquioDom.earnedPoints, totals.earned.toString());
  setText(colloquioDom.maxPoints, totals.max.toString());
  setText(colloquioDom.percentageValue, `${totals.percentage}%`);
  setText(colloquioDom.resultValue, evaluation.label);
  setText(colloquioDom.completionValue, `${totals.completed}/${totals.total}`);
  setProgress(colloquioDom.progressBar, totals.completionPercentage);
  setResultClass(colloquioDom.resultValue, evaluation.status);
  setHelperText(colloquioDom.missingFields, describeColloquioMissingFields(totals));

  if (colloquioDom.finalSummary) {
    colloquioDom.finalSummary.value = buildColloquioFinalSummary(totals, evaluation.label);
  }
}

function findColloquioQuestionById(id) {
  return findQuestionById(questionsData, id);
}

function evaluateColloquioResult(totals) {
  const precheckStatus = getColloquioPrecheckStatus();

  if (precheckStatus === "failed") {
    return { label: "Non idoneo - pre-check", status: "negative" };
  }

  if (precheckStatus === "pending") {
    return { label: "Pre-check da completare", status: "pending" };
  }

  if (totals.completed === 0) {
    return { label: "Da calcolare", status: "pending" };
  }

  if (totals.remaining > 0) {
    return { label: "In valutazione", status: "pending" };
  }

  if (totals.percentage > 70) {
    return { label: "Positivo", status: "positive" };
  }

  if (totals.percentage >= 60) {
    return { label: "Negativo - rimandato di 30 minuti", status: "negative" };
  }

  if (totals.percentage >= 50) {
    return { label: "Negativo - rimandato di 45 minuti", status: "negative" };
  }

  if (totals.percentage >= 40) {
    return { label: "Negativo - rimandato di 50 minuti", status: "negative" };
  }

  if (totals.percentage >= 30) {
    return { label: "Negativo - rimandato di 1 ora", status: "negative" };
  }

  if (totals.percentage >= 20) {
    return { label: "Negativo - rimandato di 1,5 ore", status: "negative" };
  }

  if (totals.percentage >= 10) {
    return { label: "Negativo - rimandato di 2,5 ore", status: "negative" };
  }

  return { label: "Negativo - rimandato di 3 ore", status: "negative" };
}

function getColloquioPrecheckStatus() {
  const criminalRecord = getValue(colloquioDom.criminalRecordCheck);
  const weaponLicense = getValue(colloquioDom.weaponLicenseCheck);

  if (criminalRecord === "not_clean" || weaponLicense === "missing") {
    return "failed";
  }

  if (!criminalRecord || !weaponLicense) {
    return "pending";
  }

  return "passed";
}

function describeColloquioMissingFields(totals) {
  const missing = [];

  if (!getValue(colloquioDom.candidateName)) missing.push("nome");
  if (!getValue(colloquioDom.candidateDob)) missing.push("data nascita");
  if (!getValue(colloquioDom.criminalRecordCheck)) missing.push("fedina");
  if (!getValue(colloquioDom.weaponLicenseCheck)) missing.push("porto d'armi");
  if (!getValue(colloquioDom.startTime)) missing.push("inizio");
  if (!getValue(colloquioDom.endTime)) missing.push("fine");
  if (!getValue(colloquioDom.discordLink)) missing.push("link bando");
  if (!getValue(colloquioDom.supervisorId)) missing.push("supervisore");
  if (totals.remaining > 0) missing.push(`${totals.remaining} punteggi`);

  return missing.length
    ? { text: `Da completare: ${missing.join(", ")}.`, complete: false }
    : { text: "Modulo completo.", complete: true };
}

function buildColloquioFinalSummary(totals, resultText) {
  return [
    `Nome e Cognome: ${getValue(colloquioDom.candidateName)}`,
    `Data di nascita: ${formatInputDateToIT(getValue(colloquioDom.candidateDob))}`,
    `Fedina penale: ${describeColloquioPrecheckValue("criminalRecord", getValue(colloquioDom.criminalRecordCheck))}`,
    `Porto d'armi: ${describeColloquioPrecheckValue("weaponLicense", getValue(colloquioDom.weaponLicenseCheck))}`,
    `Orario Inizio Colloquio: ${getValue(colloquioDom.startTime)}`,
    `Orario Fine: ${getValue(colloquioDom.endTime)}`,
    `Giorno Colloquio: ${formatDateIT(new Date())}`,
    `Esito Bando: ${getValue(colloquioDom.discordLink)}`,
    `Esito Colloquio: ${resultText}`,
    `Valutazione: ${totals.percentage}%`,
    `Post esito positivo: inviare Discord LSPD e Governo LS/BC; rinominare [Att. Form.] Nome Cognome; richiedere ruolo <@&1495237445808029746>.`,
    `Firma: <@1084580275582931044>`,
    ``,
    `supervisionato da ${formatDiscordMention(getValue(colloquioDom.supervisorId), "<@id discord di supervisione>")}`
  ].join("\n");
}

function describeColloquioPrecheckValue(kind, value) {
  const labels = {
    criminalRecord: {
      clean: "Pulita",
      not_clean: "Non pulita"
    },
    weaponLicense: {
      valid: "Presente / valido",
      missing: "Assente / non valido"
    }
  };

  return labels[kind]?.[value] || "Da controllare";
}

function copyColloquioSummaryToClipboard() {
  copySummaryText(colloquioDom.finalSummary?.value || "");
}

function buildColloquioFilename() {
  const name = getValue(colloquioDom.candidateName) || "colloquio";
  return `modulo-colloquio-${slugify(name)}.txt`;
}

function saveColloquioState() {
  const payload = {
    schemaVersion: 3,
    candidateName: getValue(colloquioDom.candidateName),
    candidateDob: getValue(colloquioDom.candidateDob),
    criminalRecordCheck: getValue(colloquioDom.criminalRecordCheck),
    weaponLicenseCheck: getValue(colloquioDom.weaponLicenseCheck),
    startTime: getValue(colloquioDom.startTime),
    endTime: getValue(colloquioDom.endTime),
    discordLink: getValue(colloquioDom.discordLink),
    supervisorId: getValue(colloquioDom.supervisorId),
    scores: collectValues(".score-select", "questionId"),
    notes: collectValues(".note-input", "questionId")
  };

  const saved = setStorageItem(COLLOQUIO_STORAGE_KEY, JSON.stringify(payload));
  updateSaveStatus(colloquioDom.saveStatus, saved);
}

function loadColloquioSavedState() {
  const data = readSavedJson(COLLOQUIO_STORAGE_KEY);
  if (!data) return;

  setInputValue(colloquioDom.candidateName, data.candidateName);
  setInputValue(colloquioDom.candidateDob, data.candidateDob);
  setInputValue(colloquioDom.criminalRecordCheck, data.criminalRecordCheck);
  setInputValue(colloquioDom.weaponLicenseCheck, data.weaponLicenseCheck);
  setInputValue(colloquioDom.startTime, data.startTime);
  setInputValue(colloquioDom.endTime, data.endTime);
  setInputValue(colloquioDom.discordLink, data.discordLink);
  setInputValue(colloquioDom.supervisorId, data.supervisorId);
  restoreValues(".score-select", "questionId", data.scores, { blankLegacyZero: Number(data.schemaVersion || 1) < 2 });
  restoreValues(".note-input", "questionId", data.notes);
}

function resetColloquio() {
  const confirmReset = confirm("Vuoi davvero resettare completamente il colloquio?");
  if (!confirmReset) return;

  removeStorageItem(COLLOQUIO_STORAGE_KEY);

  [
    colloquioDom.candidateName,
    colloquioDom.candidateDob,
    colloquioDom.criminalRecordCheck,
    colloquioDom.weaponLicenseCheck,
    colloquioDom.startTime,
    colloquioDom.endTime,
    colloquioDom.discordLink,
    colloquioDom.supervisorId
  ].forEach(el => setInputValue(el, ""));

  document.querySelectorAll(".score-select, .note-input").forEach(el => {
    el.value = "";
  });

  document.querySelectorAll(".answer-box").forEach(box => {
    box.classList.remove("open");
  });

  document.querySelectorAll(".toggle-answer-btn").forEach(btn => {
    btn.textContent = "Mostra risposta";
    btn.setAttribute("aria-expanded", "false");
  });

  updateColloquioEverything();
  updateSaveStatus(colloquioDom.saveStatus, true, "Reset completato");
  showToast("Colloquio resettato.", "success");
}

/* =========================
   FORMAZIONE
========================= */

const formazioneDom = {
  trainingQuestionsContainer: document.getElementById("trainingQuestionsContainer"),
  trainingEarnedPoints: document.getElementById("trainingEarnedPoints"),
  trainingMaxPoints: document.getElementById("trainingMaxPoints"),
  trainingPercentageValue: document.getElementById("trainingPercentageValue"),
  trainingCompletionValue: document.getElementById("trainingCompletionValue"),
  trainingProgressBar: document.getElementById("trainingProgressBar"),
  trainingMissingFields: document.getElementById("trainingMissingFields"),
  trainingSaveStatus: document.getElementById("trainingSaveStatus"),
  trainingFinalSummary: document.getElementById("trainingFinalSummary"),
  trainingDate: document.getElementById("trainingDate"),
  trainingStartTime: document.getElementById("trainingStartTime"),
  trainingEndTime: document.getElementById("trainingEndTime"),
  trainingSupervisorId: document.getElementById("trainingSupervisorId"),
  trainingVideosStatus: document.getElementById("trainingVideosStatus"),
  trainingRoom: document.getElementById("trainingRoom"),
  trainingRecordStatus: document.getElementById("trainingRecordStatus"),
  trainingReportStatus: document.getElementById("trainingReportStatus"),
  trainingParticipants: document.getElementById("trainingParticipants"),
  copyTrainingSummaryBtn: document.getElementById("copyTrainingSummaryBtn"),
  downloadTrainingSummaryBtn: document.getElementById("downloadTrainingSummaryBtn"),
  resetTrainingBtn: document.getElementById("resetTrainingBtn")
};

function initFormazione() {
  renderTrainingQuestions();
  loadTrainingSavedState();
  attachTrainingListeners();
  updateTrainingEverything();
}

function renderTrainingQuestions() {
  replaceChildren(formazioneDom.trainingQuestionsContainer);

  trainingQuestionsData.forEach(sectionData => {
    const section = createSectionBlock(sectionData);
    const inner = section.querySelector(".section-inner");

    sectionData.questions.forEach(question => {
      inner.appendChild(createQuestionCard({
        question,
        scoreClass: "training-score-select",
        noteClass: "training-note-input",
        dataKey: "trainingQuestionId",
        noteLabel: "Note formatore",
        withAnswer: true
      }));
    });

    formazioneDom.trainingQuestionsContainer.appendChild(section);
  });

  document.querySelectorAll(".training-score-select, .training-note-input").forEach(el => {
    el.addEventListener("input", handleTrainingInput);
    el.addEventListener("change", handleTrainingInput);
  });
}

function attachTrainingListeners() {
  [
    formazioneDom.trainingDate,
    formazioneDom.trainingStartTime,
    formazioneDom.trainingEndTime,
    formazioneDom.trainingSupervisorId,
    formazioneDom.trainingVideosStatus,
    formazioneDom.trainingRoom,
    formazioneDom.trainingRecordStatus,
    formazioneDom.trainingReportStatus,
    formazioneDom.trainingParticipants
  ].forEach(el => {
    if (!el) return;
    el.addEventListener("input", handleTrainingInput);
    el.addEventListener("change", handleTrainingInput);
  });

  formazioneDom.copyTrainingSummaryBtn?.addEventListener("click", copyTrainingSummaryToClipboard);
  formazioneDom.downloadTrainingSummaryBtn?.addEventListener("click", () => {
    downloadTextFile(formazioneDom.trainingFinalSummary?.value || "", buildTrainingFilename());
  });
  formazioneDom.resetTrainingBtn?.addEventListener("click", resetTraining);
}

function handleTrainingInput() {
  updateTrainingEverything();
  saveTrainingState();
}

function updateTrainingEverything() {
  const totals = calculateScoreTotals(".training-score-select", findTrainingQuestionById, "trainingQuestionId");

  setText(formazioneDom.trainingEarnedPoints, totals.earned.toString());
  setText(formazioneDom.trainingMaxPoints, totals.max.toString());
  setText(formazioneDom.trainingPercentageValue, `${totals.percentage}%`);
  setText(formazioneDom.trainingCompletionValue, `${totals.completed}/${totals.total}`);
  setProgress(formazioneDom.trainingProgressBar, totals.completionPercentage);
  setHelperText(formazioneDom.trainingMissingFields, describeTrainingMissingFields(totals));

  if (formazioneDom.trainingFinalSummary) {
    formazioneDom.trainingFinalSummary.value = buildTrainingFinalSummary(totals);
  }
}

function findTrainingQuestionById(id) {
  return findQuestionById(trainingQuestionsData, id);
}

function describeTrainingMissingFields(totals) {
  const missing = [];

  if (!getValue(formazioneDom.trainingDate)) missing.push("data");
  if (!getValue(formazioneDom.trainingStartTime)) missing.push("inizio");
  if (!getValue(formazioneDom.trainingEndTime)) missing.push("fine");
  if (!getValue(formazioneDom.trainingSupervisorId)) missing.push("supervisore");
  if (getValue(formazioneDom.trainingVideosStatus) !== "completed") missing.push("video formazione");
  if (!["formazione_1", "formazione_2"].includes(getValue(formazioneDom.trainingRoom))) missing.push("stanza formazione");
  if (getValue(formazioneDom.trainingRecordStatus) !== "completed") missing.push("schedatura");
  if (getValue(formazioneDom.trainingReportStatus) !== "completed") missing.push("rapporto formazione");
  if (!getValue(formazioneDom.trainingParticipants)) missing.push("partecipanti");
  if (totals.remaining > 0) missing.push(`${totals.remaining} punteggi`);

  return missing.length
    ? { text: `Da completare: ${missing.join(", ")}.`, complete: false }
    : { text: "Modulo completo.", complete: true };
}

function buildTrainingFinalSummary(totals) {
  const dateValue = getValue(formazioneDom.trainingDate)
    ? formatInputDateToIT(getValue(formazioneDom.trainingDate))
    : formatDateIT(new Date());

  return [
    `Data: ${dateValue}`,
    `Orario inizio Formazione: ${getValue(formazioneDom.trainingStartTime)}`,
    `Orario fine Formazione: ${getValue(formazioneDom.trainingEndTime)}`,
    `Relatori: <@1084580275582931044>`,
    `Supervisionato da (Istruttore/Gestore): ${formatDiscordMention(getValue(formazioneDom.trainingSupervisorId), "<@id discord>")}`,
    `Video formazione: ${describeTrainingStatus("videos", getValue(formazioneDom.trainingVideosStatus))}`,
    `Canale vocale: ${describeTrainingStatus("room", getValue(formazioneDom.trainingRoom))}`,
    `Schedatura: ${describeTrainingStatus("record", getValue(formazioneDom.trainingRecordStatus))}`,
    `Rapporto formazione: ${describeTrainingStatus("report", getValue(formazioneDom.trainingReportStatus))}`,
    `Punteggio formazione: ${totals.earned}/${totals.max}`,
    `Valutazione formazione: ${totals.percentage}%`,
    `Nome cittadini partecipanti: ${normalizeParticipants(getValue(formazioneDom.trainingParticipants))}`,
    `Chiusura: richiedere ruolo <@&1495239424722735336>; rinominare [Recluta] Nome Cognome; assegnare matricola nel canale https://discord.com/channels/959468486504095824/996518318439682078; dare dotazione in game. Per pistola, taser e colpi attendere un sotto-ufficiale in su.`
  ].join("\n");
}

function describeTrainingStatus(kind, value) {
  const labels = {
    videos: {
      completed: "Video 1, 2 e 3 completati",
      missing: "Non completati"
    },
    room: {
      waiting: "Attesa formazione",
      formazione_1: "Formazione 1",
      formazione_2: "Formazione 2"
    },
    record: {
      completed: "Completata",
      missing: "Da completare"
    },
    report: {
      completed: "Compilato",
      missing: "Da compilare"
    }
  };

  return labels[kind]?.[value] || "Da verificare";
}

function normalizeParticipants(value) {
  return value
    .split(/[\n,]+/)
    .map(item => item.trim())
    .filter(Boolean)
    .join("\n");
}

function copyTrainingSummaryToClipboard() {
  copySummaryText(formazioneDom.trainingFinalSummary?.value || "");
}

function buildTrainingFilename() {
  const date = getValue(formazioneDom.trainingDate) || formatDateFilePart(new Date());
  return `modulo-formazione-${date}.txt`;
}

function saveTrainingState() {
  const payload = {
    schemaVersion: 3,
    trainingDate: getValue(formazioneDom.trainingDate),
    trainingStartTime: getValue(formazioneDom.trainingStartTime),
    trainingEndTime: getValue(formazioneDom.trainingEndTime),
    trainingSupervisorId: getValue(formazioneDom.trainingSupervisorId),
    trainingVideosStatus: getValue(formazioneDom.trainingVideosStatus),
    trainingRoom: getValue(formazioneDom.trainingRoom),
    trainingRecordStatus: getValue(formazioneDom.trainingRecordStatus),
    trainingReportStatus: getValue(formazioneDom.trainingReportStatus),
    trainingParticipants: getValue(formazioneDom.trainingParticipants),
    scores: collectValues(".training-score-select", "trainingQuestionId"),
    notes: collectValues(".training-note-input", "trainingQuestionId")
  };

  const saved = setStorageItem(FORMAZIONE_STORAGE_KEY, JSON.stringify(payload));
  updateSaveStatus(formazioneDom.trainingSaveStatus, saved);
}

function loadTrainingSavedState() {
  const data = readSavedJson(FORMAZIONE_STORAGE_KEY);
  if (!data) return;

  setInputValue(formazioneDom.trainingDate, data.trainingDate);
  setInputValue(formazioneDom.trainingStartTime, data.trainingStartTime);
  setInputValue(formazioneDom.trainingEndTime, data.trainingEndTime);
  setInputValue(formazioneDom.trainingSupervisorId, data.trainingSupervisorId);
  setInputValue(formazioneDom.trainingVideosStatus, data.trainingVideosStatus);
  setInputValue(formazioneDom.trainingRoom, data.trainingRoom);
  setInputValue(formazioneDom.trainingRecordStatus, data.trainingRecordStatus);
  setInputValue(formazioneDom.trainingReportStatus, data.trainingReportStatus);
  setInputValue(formazioneDom.trainingParticipants, data.trainingParticipants);
  restoreValues(".training-score-select", "trainingQuestionId", data.scores, { blankLegacyZero: Number(data.schemaVersion || 1) < 2 });
  restoreValues(".training-note-input", "trainingQuestionId", data.notes);
}

function resetTraining() {
  const confirmReset = confirm("Vuoi davvero resettare completamente la formazione?");
  if (!confirmReset) return;

  removeStorageItem(FORMAZIONE_STORAGE_KEY);

  [
    formazioneDom.trainingDate,
    formazioneDom.trainingStartTime,
    formazioneDom.trainingEndTime,
    formazioneDom.trainingSupervisorId,
    formazioneDom.trainingVideosStatus,
    formazioneDom.trainingRoom,
    formazioneDom.trainingRecordStatus,
    formazioneDom.trainingReportStatus,
    formazioneDom.trainingParticipants
  ].forEach(el => setInputValue(el, ""));

  document.querySelectorAll(".training-score-select, .training-note-input").forEach(el => {
    el.value = "";
  });

  updateTrainingEverything();
  updateSaveStatus(formazioneDom.trainingSaveStatus, true, "Reset completato");
  showToast("Formazione resettata.", "success");
}

/* =========================
   ISTRUTTORI
========================= */

let instructorsState = null;
let selectedCycleArchiveId = "";
const MAX_INSTRUCTOR_MOVEMENTS = 40;
const RECENT_MOVEMENT_LIMIT = 10;
const MAX_CYCLE_ARCHIVES = 18;
const MAX_ARCHIVE_CHART_ROWS = 12;

const istruttoriDom = {
  eventTitle: document.getElementById("instructorsEventTitle"),
  eventDate: document.getElementById("instructorsEventDate"),
  cycleLabel: document.getElementById("instructorsCycleLabel"),
  signature: document.getElementById("instructorsSignature"),
  activeCount: document.getElementById("instructorsActiveCount"),
  trainingCount: document.getElementById("instructorsTrainingCount"),
  warningCount: document.getElementById("instructorsWarningCount"),
  attentionCount: document.getElementById("instructorsAttentionCount"),
  movementCount: document.getElementById("instructorsMovementCount"),
  topValue: document.getElementById("instructorsTopValue"),
  helperText: document.getElementById("instructorsHelperText"),
  saveStatus: document.getElementById("instructorsSaveStatus"),
  movementType: document.getElementById("movementType"),
  movementInstructor: document.getElementById("movementInstructor"),
  movementName: document.getElementById("movementName"),
  movementReason: document.getElementById("movementReason"),
  registerMovementBtn: document.getElementById("registerMovementBtn"),
  newInstructorName: document.getElementById("newInstructorName"),
  searchInput: document.getElementById("instructorSearch"),
  addInstructorBtn: document.getElementById("addInstructorBtn"),
  instructorsContainer: document.getElementById("instructorsContainer"),
  finalReport: document.getElementById("instructorsFinalReport"),
  reportStatusBadge: document.getElementById("reportStatusBadge"),
  reportCycleMeta: document.getElementById("reportCycleMeta"),
  reportLineCount: document.getElementById("reportLineCount"),
  reportMovementMeta: document.getElementById("reportMovementMeta"),
  recentMovementsList: document.getElementById("recentMovementsList"),
  archiveCountBadge: document.getElementById("archiveCountBadge"),
  archiveEmpty: document.getElementById("cycleArchiveEmpty"),
  archiveWorkspace: document.getElementById("cycleArchiveWorkspace"),
  archiveTabs: document.getElementById("cycleArchiveTabs"),
  archiveChartKicker: document.getElementById("archiveChartKicker"),
  archiveChartTitle: document.getElementById("archiveChartTitle"),
  archiveChartMeta: document.getElementById("archiveChartMeta"),
  archiveChart: document.getElementById("cycleArchiveChart"),
  importLegacyReportFileBtn: document.getElementById("importLegacyReportFileBtn"),
  legacyReportFile: document.getElementById("legacyReportFile"),
  toggleLegacyReportPasteBtn: document.getElementById("toggleLegacyReportPasteBtn"),
  legacyReportPastePanel: document.getElementById("legacyReportPastePanel"),
  legacyReportText: document.getElementById("legacyReportText"),
  importLegacyReportTextBtn: document.getElementById("importLegacyReportTextBtn"),
  copyReportBtn: document.getElementById("copyInstructorsReportBtn"),
  copyReportInlineBtn: document.getElementById("copyInstructorsReportInlineBtn"),
  downloadReportBtn: document.getElementById("downloadInstructorsReportBtn"),
  downloadReportInlineBtn: document.getElementById("downloadInstructorsReportInlineBtn"),
  exportDataBtn: document.getElementById("exportInstructorsDataBtn"),
  importDataBtn: document.getElementById("importInstructorsDataBtn"),
  importFile: document.getElementById("importInstructorsFile"),
  newCycleBtn: document.getElementById("newCycleInstructorsBtn"),
  resetBtn: document.getElementById("resetInstructorsBtn")
};

function initIstruttori() {
  instructorsState = loadInstructorsState();
  hydrateIstruttoriForm();
  renderInstructors();
  renderMovementInstructorOptions();
  attachIstruttoriListeners();
  updateIstruttoriEverything();
}

function loadInstructorsState() {
  const saved = readSavedJson(ISTRUTTORI_STORAGE_KEY);
  if (!saved) return cloneDefaultInstructorsState();

  const savedState = { ...saved };
  delete savedState.weekOneLabel;
  delete savedState.weekTwoLabel;
  const defaults = cloneDefaultInstructorsState();

  return {
    ...defaults,
    ...savedState,
    schemaVersion: defaults.schemaVersion,
    cycleLabel: resolveInstructorCycleLabel(saved),
    instructors: Array.isArray(saved.instructors)
      ? saved.instructors.map(normalizeInstructorRecord)
      : defaults.instructors,
    movementSequence: resolveMovementSequence(saved),
    movements: Array.isArray(saved.movements)
      ? saved.movements.map(normalizeMovementRecord)
      : [],
    archiveSequence: resolveArchiveSequence(saved),
    cycleArchives: Array.isArray(saved.cycleArchives)
      ? saved.cycleArchives.map(normalizeCycleArchiveRecord).filter(Boolean)
      : []
  };
}

function cloneDefaultInstructorsState() {
  return JSON.parse(JSON.stringify(defaultInstructorsState));
}

function resolveInstructorCycleLabel(source) {
  if (source.cycleLabel) return source.cycleLabel;

  const weekOne = source.weekOneLabel || "";
  const weekTwo = source.weekTwoLabel || "";
  const cycleStart = String(weekOne).split("-")[0]?.trim();
  const cycleEnd = String(weekTwo).split("-").pop()?.trim();

  if (cycleStart && cycleEnd) return `${cycleStart} - ${cycleEnd}`;
  return [weekOne, weekTwo].filter(Boolean).join(" - ") || cloneDefaultInstructorsState().cycleLabel;
}

function normalizeInstructorRecord(record) {
  const trainings = record.trainings === undefined
    ? toNonNegativeInt(record.weekOneTrainings) + toNonNegativeInt(record.weekTwoTrainings)
    : toNonNegativeInt(record.trainings);

  return {
    id: record.id || buildInstructorId(record.name || "istruttore"),
    name: record.name || "Istruttore",
    trainings,
    warnings: toNonNegativeInt(record.warnings),
    active: record.active !== false
  };
}

function normalizeMovementRecord(record, index = 0) {
  return {
    id: record.id || `MOV-${String(index + 1).padStart(3, "0")}`,
    type: record.type || "addestramento",
    instructorId: record.instructorId || "",
    instructorName: record.instructorName || "Istruttore",
    reason: record.reason || "",
    date: record.date || formatDateFilePart(new Date()),
    createdInstructor: Boolean(record.createdInstructor),
    beforeState: normalizeMovementSnapshot(record.beforeState),
    afterState: normalizeMovementSnapshot(record.afterState)
  };
}

function normalizeMovementSnapshot(snapshot) {
  if (!snapshot) return null;

  return {
    trainings: toNonNegativeInt(snapshot.trainings),
    warnings: toNonNegativeInt(snapshot.warnings),
    active: snapshot.active !== false
  };
}

function resolveMovementSequence(source) {
  const movements = Array.isArray(source.movements) ? source.movements : [];
  const maxFromIds = movements.reduce((max, movement) => {
    const match = String(movement.id || "").match(/^MOV-(\d+)$/i);
    return match ? Math.max(max, Number.parseInt(match[1], 10)) : max;
  }, 0);

  return Math.max(toNonNegativeInt(source.movementSequence), maxFromIds, movements.length);
}

function normalizeCycleArchiveRecord(record, index = 0) {
  if (!record) return null;

  const instructors = Array.isArray(record.instructors)
    ? record.instructors.map(normalizeArchiveInstructorRecord).filter(Boolean)
    : [];
  const totals = record.totals || {};

  return {
    id: record.id || `CYC-${String(index + 1).padStart(3, "0")}`,
    cycleLabel: record.cycleLabel || "Ciclo salvato",
    closedAt: record.closedAt || formatDateFilePart(new Date()),
    eventDate: record.eventDate || "",
    source: record.source || "",
    totals: {
      trainings: toNonNegativeInt(totals.trainings),
      warnings: toNonNegativeInt(totals.warnings),
      active: toNonNegativeInt(totals.active),
      inactive: toNonNegativeInt(totals.inactive),
      movements: toNonNegativeInt(totals.movements)
    },
    instructors
  };
}

function normalizeArchiveInstructorRecord(record) {
  if (!record) return null;

  const trainings = toNonNegativeInt(record.trainings);
  const warnings = toNonNegativeInt(record.warnings);

  return {
    name: record.name || "Istruttore",
    trainings,
    warnings,
    points: Number.isFinite(Number(record.points)) ? Number(record.points) : trainings - (warnings * 2),
    active: record.active !== false,
    importedScore: Boolean(record.importedScore)
  };
}

function resolveArchiveSequence(source) {
  const archives = Array.isArray(source.cycleArchives) ? source.cycleArchives : [];
  const maxFromIds = archives.reduce((max, archive) => {
    const match = String(archive.id || "").match(/^CYC-(\d+)$/i);
    return match ? Math.max(max, Number.parseInt(match[1], 10)) : max;
  }, 0);

  return Math.max(toNonNegativeInt(source.archiveSequence), maxFromIds, archives.length);
}

function hydrateIstruttoriForm() {
  setInputValue(istruttoriDom.eventTitle, instructorsState.eventTitle);
  setInputValue(istruttoriDom.eventDate, instructorsState.eventDate);
  setInputValue(istruttoriDom.cycleLabel, instructorsState.cycleLabel);
  setInputValue(istruttoriDom.signature, instructorsState.signature);
}

function attachIstruttoriListeners() {
  [
    istruttoriDom.eventTitle,
    istruttoriDom.eventDate,
    istruttoriDom.cycleLabel,
    istruttoriDom.signature
  ].forEach(el => {
    if (!el) return;
    el.addEventListener("input", handleIstruttoriSettingsInput);
    el.addEventListener("change", handleIstruttoriSettingsInput);
  });

  istruttoriDom.addInstructorBtn?.addEventListener("click", addInstructorFromInput);
  istruttoriDom.newInstructorName?.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    addInstructorFromInput();
  });
  istruttoriDom.registerMovementBtn?.addEventListener("click", registerInstructorMovement);
  istruttoriDom.searchInput?.addEventListener("input", renderInstructors);
  istruttoriDom.copyReportBtn?.addEventListener("click", () => copySummaryText(istruttoriDom.finalReport?.value || ""));
  istruttoriDom.copyReportInlineBtn?.addEventListener("click", () => copySummaryText(istruttoriDom.finalReport?.value || ""));
  istruttoriDom.downloadReportBtn?.addEventListener("click", () => {
    downloadTextFile(istruttoriDom.finalReport?.value || "", buildInstructorsFilename());
  });
  istruttoriDom.downloadReportInlineBtn?.addEventListener("click", () => {
    downloadTextFile(istruttoriDom.finalReport?.value || "", buildInstructorsFilename());
  });
  istruttoriDom.exportDataBtn?.addEventListener("click", exportInstructorsData);
  istruttoriDom.importDataBtn?.addEventListener("click", () => istruttoriDom.importFile?.click());
  istruttoriDom.importFile?.addEventListener("change", importInstructorsData);
  istruttoriDom.newCycleBtn?.addEventListener("click", startNewInstructorsCycle);
  istruttoriDom.resetBtn?.addEventListener("click", resetInstructorsState);
  istruttoriDom.recentMovementsList?.addEventListener("click", handleRecentMovementClick);
  istruttoriDom.archiveTabs?.addEventListener("click", handleArchiveTabClick);
  istruttoriDom.importLegacyReportFileBtn?.addEventListener("click", () => {
    if (istruttoriDom.legacyReportFile) istruttoriDom.legacyReportFile.value = "";
    istruttoriDom.legacyReportFile?.click();
  });
  istruttoriDom.legacyReportFile?.addEventListener("change", importLegacyReportFile);
  istruttoriDom.toggleLegacyReportPasteBtn?.addEventListener("click", toggleLegacyReportPastePanel);
  istruttoriDom.importLegacyReportTextBtn?.addEventListener("click", importLegacyReportFromTextarea);

  istruttoriDom.instructorsContainer?.addEventListener("input", handleInstructorRowInput);
  istruttoriDom.instructorsContainer?.addEventListener("change", handleInstructorRowInput);
  istruttoriDom.instructorsContainer?.addEventListener("click", handleInstructorRowClick);
}

function handleIstruttoriSettingsInput() {
  instructorsState.eventTitle = getValue(istruttoriDom.eventTitle);
  instructorsState.eventDate = getValue(istruttoriDom.eventDate);
  instructorsState.cycleLabel = getValue(istruttoriDom.cycleLabel);
  instructorsState.signature = getValue(istruttoriDom.signature);

  updateIstruttoriEverything();
  saveInstructorsState();
}

function addInstructorFromInput() {
  const name = getValue(istruttoriDom.newInstructorName);
  if (!name) {
    showToast("Inserisci il nome dell'istruttore.", "warning");
    return;
  }

  upsertInstructorByName(name, { active: true });
  setInputValue(istruttoriDom.newInstructorName, "");
  renderInstructors();
  renderMovementInstructorOptions();
  updateIstruttoriEverything();
  saveInstructorsState();
  showToast("Istruttore aggiunto.", "success");
}

function registerInstructorMovement() {
  const type = getValue(istruttoriDom.movementType) || "addestramento";
  const selectedId = getValue(istruttoriDom.movementInstructor);
  const typedName = getValue(istruttoriDom.movementName);
  const reason = getValue(istruttoriDom.movementReason);
  let instructor = selectedId ? findInstructorById(selectedId) : null;
  let createdInstructor = false;

  if (!instructor && typedName) {
    instructor = upsertInstructorByName(typedName, { active: true });
    createdInstructor = true;
  }

  if (!instructor) {
    showToast("Seleziona o scrivi un istruttore.", "warning");
    return;
  }

  const beforeState = createdInstructor ? null : captureInstructorMovementState(instructor);
  applyMovementEffect(type, instructor);
  addInstructorMovementRecord(type, instructor, reason, {
    beforeState,
    afterState: captureInstructorMovementState(instructor),
    createdInstructor
  });
  setInputValue(istruttoriDom.movementName, "");
  setInputValue(istruttoriDom.movementReason, "");
  renderInstructors();
  renderMovementInstructorOptions();
  updateIstruttoriEverything();
  saveInstructorsState();
  showToast("Movimento registrato.", "success");
}

function handleInstructorRowInput(event) {
  const target = event.target;
  const instructor = findInstructorById(target.dataset.instructorId);
  if (!instructor) return;

  if (target.classList.contains("instructor-name-input")) {
    instructor.name = target.value;
    renderMovementInstructorOptions();
  }

  if (target.classList.contains("instructor-training-input")) {
    instructor.trainings = toNonNegativeInt(target.value);
  }

  if (target.classList.contains("instructor-warning-input")) {
    instructor.warnings = toNonNegativeInt(target.value);
  }

  if (target.classList.contains("instructor-active-input")) {
    instructor.active = target.checked;
    const row = target.closest(".instructor-row");
    row?.classList.toggle("is-inactive", !instructor.active);
  }

  updateInstructorScoreChip(instructor.id);
  updateIstruttoriEverything();
  saveInstructorsState();
}

function handleInstructorRowClick(event) {
  const quickButton = event.target.closest("[data-quick-action]");
  if (quickButton) {
    applyInstructorQuickAction(quickButton.dataset.instructorId, quickButton.dataset.quickAction);
    return;
  }

  const button = event.target.closest("[data-remove-instructor-id]");
  if (!button) return;

  const instructor = findInstructorById(button.dataset.removeInstructorId);
  if (!instructor) return;

  const confirmRemove = confirm(`Vuoi rimuovere ${instructor.name} dal registro?`);
  if (!confirmRemove) return;

  instructorsState.instructors = instructorsState.instructors.filter(item => item.id !== instructor.id);
  renderInstructors();
  renderMovementInstructorOptions();
  updateIstruttoriEverything();
  saveInstructorsState();
  showToast("Istruttore rimosso dal registro.", "success");
}

function renderInstructors() {
  replaceChildren(istruttoriDom.instructorsContainer);
  if (!istruttoriDom.instructorsContainer) return;

  const instructors = getFilteredSortedInstructors();

  if (!instructors.length) {
    istruttoriDom.instructorsContainer.appendChild(createTextElement("p", "helper-text", "Nessun istruttore inserito."));
    return;
  }

  instructors.forEach(instructor => {
    istruttoriDom.instructorsContainer.appendChild(createInstructorRow(instructor));
  });
}

function getFilteredSortedInstructors() {
  const query = getValue(istruttoriDom.searchInput).toLowerCase();

  return [...instructorsState.instructors]
    .filter(instructor => !query || instructor.name.toLowerCase().includes(query))
    .sort((a, b) => {
      if (a.active !== b.active) return a.active ? -1 : 1;
      return calculateInstructorPoints(b) - calculateInstructorPoints(a) || a.name.localeCompare(b.name);
    });
}

function createInstructorRow(instructor) {
  const row = document.createElement("article");
  row.className = `instructor-row${instructor.active ? "" : " is-inactive"}`;

  const activeInput = document.createElement("input");
  activeInput.type = "checkbox";
  activeInput.checked = Boolean(instructor.active);
  activeInput.className = "instructor-active-input";
  activeInput.dataset.instructorId = instructor.id;
  const activeLabel = createFieldLabel("Attivo", activeInput);
  activeLabel.className = "check-row";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = instructor.name;
  nameInput.className = "instructor-name-input";
  nameInput.dataset.instructorId = instructor.id;
  nameInput.maxLength = 80;

  const trainingInput = createInstructorNumberInput(instructor, "trainings", "instructor-training-input");
  const warningInput = createInstructorNumberInput(instructor, "warnings", "instructor-warning-input");
  const score = createTextElement("strong", "score-chip", `${calculateInstructorPoints(instructor)} pp`);
  score.dataset.scoreInstructorId = instructor.id;
  const quickActions = createInstructorQuickActions(instructor);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "btn btn-danger btn-small";
  removeButton.dataset.removeInstructorId = instructor.id;
  removeButton.textContent = "Elimina";

  row.append(
    activeLabel,
    createFieldLabel("Nome", nameInput),
    createFieldLabel("Add.", trainingInput),
    createFieldLabel("Amm.", warningInput),
    score,
    quickActions,
    removeButton
  );

  return row;
}

function createInstructorQuickActions(instructor) {
  const wrapper = document.createElement("div");
  wrapper.className = "quick-actions";
  wrapper.append(
    createQuickActionButton(instructor.id, "training", "+1"),
    createQuickActionButton(instructor.id, "warning", "-2")
  );
  return wrapper;
}

function createQuickActionButton(instructorId, action, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = action === "warning" ? "btn btn-danger btn-small" : "btn btn-secondary btn-small";
  button.dataset.instructorId = instructorId;
  button.dataset.quickAction = action;
  button.textContent = label;
  return button;
}

function applyInstructorQuickAction(instructorId, action) {
  const instructor = findInstructorById(instructorId);
  if (!instructor) return;

  const type = action === "warning" ? "ammonimento" : "addestramento";
  const beforeState = captureInstructorMovementState(instructor);
  applyMovementEffect(type, instructor);
  addInstructorMovementRecord(type, instructor, "Azione rapida", {
    beforeState,
    afterState: captureInstructorMovementState(instructor)
  });

  renderInstructors();
  renderMovementInstructorOptions();
  updateIstruttoriEverything();
  saveInstructorsState();
  showToast("Registro aggiornato.", "success");
}

function createInstructorNumberInput(instructor, key, className) {
  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.step = "1";
  input.value = String(toNonNegativeInt(instructor[key]));
  input.className = className;
  input.dataset.instructorId = instructor.id;
  return input;
}

function captureInstructorMovementState(instructor) {
  return {
    trainings: toNonNegativeInt(instructor.trainings),
    warnings: toNonNegativeInt(instructor.warnings),
    active: instructor.active !== false
  };
}

function applyInstructorMovementState(instructor, state) {
  if (!state) return;

  instructor.trainings = toNonNegativeInt(state.trainings);
  instructor.warnings = toNonNegativeInt(state.warnings);
  instructor.active = state.active !== false;
}

function applyMovementEffect(type, instructor) {
  if (type === "addestramento") {
    instructor.trainings = toNonNegativeInt(instructor.trainings) + 1;
  }

  if (type === "ammonimento") {
    instructor.warnings = toNonNegativeInt(instructor.warnings) + 1;
  }

  if (type === "assunzione") {
    instructor.active = true;
  }

  if (type === "rimozione") {
    instructor.active = false;
  }
}

function addInstructorMovementRecord(type, instructor, reason = "", meta = {}) {
  instructorsState.movements.unshift({
    id: buildMovementId(),
    type,
    instructorId: instructor.id,
    instructorName: instructor.name,
    reason,
    date: formatDateFilePart(new Date()),
    createdInstructor: Boolean(meta.createdInstructor),
    beforeState: meta.beforeState || null,
    afterState: meta.afterState || null
  });
  instructorsState.movements = instructorsState.movements.slice(0, MAX_INSTRUCTOR_MOVEMENTS);
}

function handleRecentMovementClick(event) {
  const deleteButton = event.target.closest("[data-delete-movement-id]");
  if (!deleteButton) return;

  deleteInstructorMovement(deleteButton.dataset.deleteMovementId);
}

function deleteInstructorMovement(movementId) {
  const movement = instructorsState.movements.find(item => item.id === movementId);
  if (!movement) {
    showToast("Movimento non trovato.", "warning");
    return;
  }

  const confirmDelete = confirm(`Eliminare il movimento ${formatMovementDisplayId(movement)}? Verrà annullato anche il suo effetto diretto sul registro.`);
  if (!confirmDelete) return;

  revertMovementEffect(movement);
  instructorsState.movements = instructorsState.movements.filter(item => item.id !== movement.id);

  renderInstructors();
  renderMovementInstructorOptions();
  updateIstruttoriEverything();
  saveInstructorsState();
  showToast("Movimento eliminato.", "success");
}

function revertMovementEffect(movement) {
  const instructor = findInstructorById(movement.instructorId)
    || instructorsState.instructors.find(item => item.name === movement.instructorName);
  if (!instructor) return;

  const hasOtherMovements = instructorsState.movements.some(item => item.id !== movement.id && item.instructorId === instructor.id);
  if (movement.createdInstructor && !hasOtherMovements) {
    instructorsState.instructors = instructorsState.instructors.filter(item => item.id !== instructor.id);
    return;
  }

  if (movement.beforeState) {
    applyInstructorMovementState(instructor, movement.beforeState);
    return;
  }

  if (movement.type === "addestramento") {
    instructor.trainings = Math.max(0, toNonNegativeInt(instructor.trainings) - 1);
  }

  if (movement.type === "ammonimento") {
    instructor.warnings = Math.max(0, toNonNegativeInt(instructor.warnings) - 1);
  }

  if (movement.type === "assunzione") {
    instructor.active = false;
  }

  if (movement.type === "rimozione") {
    instructor.active = true;
  }
}

function renderMovementInstructorOptions() {
  if (!istruttoriDom.movementInstructor) return;

  const previous = istruttoriDom.movementInstructor.value;
  replaceChildren(istruttoriDom.movementInstructor);
  istruttoriDom.movementInstructor.appendChild(createOption("", "Seleziona istruttore"));

  instructorsState.instructors.forEach(instructor => {
    istruttoriDom.movementInstructor.appendChild(createOption(instructor.id, instructor.name));
  });

  if (findInstructorById(previous)) {
    istruttoriDom.movementInstructor.value = previous;
  }
}

function updateInstructorScoreChip(instructorId) {
  const instructor = findInstructorById(instructorId);
  const chip = document.querySelector(`[data-score-instructor-id="${instructorId}"]`);
  if (instructor && chip) chip.textContent = `${calculateInstructorPoints(instructor)} pp`;
}

function updateIstruttoriEverything() {
  const stats = calculateInstructorsStats();
  setText(istruttoriDom.activeCount, `${stats.activeCount} attivi`);
  setText(istruttoriDom.trainingCount, String(stats.trainings));
  setText(istruttoriDom.warningCount, String(stats.warnings));
  setText(istruttoriDom.attentionCount, String(stats.attentionCount));
  setText(istruttoriDom.movementCount, String(stats.movementCount));
  setText(istruttoriDom.topValue, stats.topLabel);
  setHelperText(istruttoriDom.helperText, stats.helper);
  renderRecentMovements();
  renderCycleArchives();

  const reportText = buildInstructorsReport();
  if (istruttoriDom.finalReport) {
    istruttoriDom.finalReport.value = reportText;
  }
  updateReportModuleMeta(reportText, stats);
}

function updateReportModuleMeta(reportText, stats) {
  const lineCount = reportText ? reportText.split("\n").length : 0;
  setText(istruttoriDom.reportCycleMeta, formatCycleLabel());
  setText(istruttoriDom.reportLineCount, `${lineCount} righe`);
  setText(istruttoriDom.reportMovementMeta, `${stats.movementCount} movimenti`);
  setText(istruttoriDom.reportStatusBadge, stats.movementCount ? "Aggiornato" : "Auto-generato");
}

function renderRecentMovements() {
  replaceChildren(istruttoriDom.recentMovementsList);
  if (!istruttoriDom.recentMovementsList) return;

  const movements = instructorsState.movements.slice(0, RECENT_MOVEMENT_LIMIT);
  if (!movements.length) {
    istruttoriDom.recentMovementsList.appendChild(createTextElement("p", "helper-text", "Nessun movimento registrato."));
    return;
  }

  movements.forEach(movement => {
    istruttoriDom.recentMovementsList.appendChild(createRecentMovementItem(movement));
  });
}

function createRecentMovementItem(movement) {
  const item = document.createElement("article");
  item.className = "movement-log-item";

  const content = document.createElement("div");
  content.className = "movement-log-copy";

  const top = document.createElement("div");
  top.className = "movement-log-top";
  top.append(
    createTextElement("strong", "movement-id-chip", formatMovementDisplayId(movement)),
    createTextElement("span", "movement-type-chip", formatMovementTypeLabel(movement.type))
  );

  const detail = createTextElement("p", "", `${movement.instructorName || "Istruttore"} - ${formatMovementImpact(movement)}`);
  const meta = createTextElement("small", "", formatRecentMovementMeta(movement));
  content.append(top, detail, meta);

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "btn btn-danger btn-small";
  deleteButton.dataset.deleteMovementId = movement.id;
  deleteButton.textContent = "Elimina";
  deleteButton.setAttribute("aria-label", `Elimina movimento ${formatMovementDisplayId(movement)}`);

  item.append(content, deleteButton);
  return item;
}

function handleArchiveTabClick(event) {
  const tab = event.target.closest("[data-cycle-archive-id]");
  if (!tab) return;

  selectedCycleArchiveId = tab.dataset.cycleArchiveId;
  renderCycleArchives();
}

function renderCycleArchives() {
  const archives = instructorsState.cycleArchives || [];
  setText(istruttoriDom.archiveCountBadge, `${archives.length} cicli`);

  if (istruttoriDom.archiveEmpty) istruttoriDom.archiveEmpty.hidden = archives.length > 0;
  if (istruttoriDom.archiveWorkspace) istruttoriDom.archiveWorkspace.hidden = archives.length === 0;

  if (!archives.length) {
    replaceChildren(istruttoriDom.archiveTabs);
    replaceChildren(istruttoriDom.archiveChart);
    replaceChildren(istruttoriDom.archiveChartMeta);
    return;
  }

  if (!archives.some(archive => archive.id === selectedCycleArchiveId)) {
    selectedCycleArchiveId = archives[0].id;
  }

  renderArchiveTabs(archives);
  renderArchiveChart(archives.find(archive => archive.id === selectedCycleArchiveId) || archives[0]);
}

function renderArchiveTabs(archives) {
  replaceChildren(istruttoriDom.archiveTabs);
  if (!istruttoriDom.archiveTabs) return;

  archives.forEach(archive => {
    const tab = document.createElement("button");
    const selected = archive.id === selectedCycleArchiveId;
    tab.type = "button";
    tab.className = `archive-tab${selected ? " is-active" : ""}`;
    tab.dataset.cycleArchiveId = archive.id;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    tab.textContent = `${archive.id} - ${archive.cycleLabel}`;
    istruttoriDom.archiveTabs.appendChild(tab);
  });
}

function renderArchiveChart(archive) {
  setText(istruttoriDom.archiveChartKicker, formatInputDateToIT(archive.closedAt) || archive.closedAt);
  setText(istruttoriDom.archiveChartTitle, archive.cycleLabel);
  renderArchiveMetrics(archive);

  replaceChildren(istruttoriDom.archiveChart);
  if (!istruttoriDom.archiveChart) return;

  const rows = getArchiveChartRows(archive);
  if (!rows.length) {
    istruttoriDom.archiveChart.appendChild(createTextElement("p", "helper-text", "Nessun dato disponibile per questo ciclo."));
    return;
  }

  const maxAbsPoints = Math.max(...rows.map(row => Math.abs(row.points)), 1);
  rows.forEach(row => {
    istruttoriDom.archiveChart.appendChild(createArchiveChartRow(row, maxAbsPoints));
  });
}

function renderArchiveMetrics(archive) {
  replaceChildren(istruttoriDom.archiveChartMeta);
  if (!istruttoriDom.archiveChartMeta) return;

  [
    `${archive.totals.trainings} add.`,
    `${archive.totals.warnings} amm.`,
    `${archive.totals.inactive} inattivi`,
    `${archive.totals.movements} mov.`
  ].forEach(text => {
    istruttoriDom.archiveChartMeta.appendChild(createTextElement("span", "", text));
  });
}

function getArchiveChartRows(archive) {
  return [...archive.instructors]
    .sort((a, b) => b.points - a.points || a.name.localeCompare(b.name))
    .slice(0, MAX_ARCHIVE_CHART_ROWS);
}

function createArchiveChartRow(row, maxAbsPoints) {
  const item = document.createElement("article");
  item.className = `archive-chart-row${row.points < 0 ? " is-negative" : ""}${row.points === 0 ? " is-zero" : ""}`;

  const name = createTextElement("strong", "", row.active ? row.name : `${row.name} (rimosso)`);
  const track = document.createElement("div");
  track.className = "archive-chart-track";

  const bar = document.createElement("span");
  bar.style.width = `${Math.max(6, Math.round((Math.abs(row.points) / maxAbsPoints) * 100))}%`;
  track.appendChild(bar);

  const points = createTextElement("span", "archive-points", `${row.points} pp`);
  const detailText = row.importedScore
    ? "punteggio importato"
    : `${row.trainings} add. / ${row.warnings} amm.`;
  const detail = createTextElement("small", "", detailText);

  item.append(name, track, points, detail);
  return item;
}

function calculateInstructorsStats() {
  const instructors = instructorsState.instructors;
  const trainings = instructors.reduce((total, instructor) => total + getInstructorTrainingTotal(instructor), 0);
  const warnings = instructors.reduce((total, instructor) => total + toNonNegativeInt(instructor.warnings), 0);
  const activeCount = instructors.filter(instructor => instructor.active).length;
  const attentionCount = getCycleInactiveInstructors().length;
  const movementCount = instructorsState.movements.length;
  const topGroups = getInstructorTopGroups();
  const topLabel = topGroups.length
    ? topGroups.map((group, index) => `${index + 1}° ${group.names.join(", ")} (${group.points} pp)`).join(" | ")
    : "Da definire";

  return {
    trainings,
    warnings,
    activeCount,
    attentionCount,
    movementCount,
    topLabel,
    helper: instructors.length
      ? { text: "Ciclo da 2 settimane: entra in inattività chi chiude il ciclo a 0 addestramenti.", complete: true }
      : { text: "Aggiungi almeno un istruttore per generare il report.", complete: false }
  };
}

function buildInstructorsReport() {
  const title = (instructorsState.eventTitle || 'GESTIONE "EVENTO" ISTRUTTORI').toUpperCase();
  const eventDate = instructorsState.eventDate
    ? formatInputDateToIT(instructorsState.eventDate)
    : formatDateIT(new Date());
  const cycleLabel = formatCycleLabel();
  const lines = [
    `# ${title} ANNUNCIATO IL GIORNO ${eventDate}`,
    "",
    "**Lista agenti Istruttori:**",
    ""
  ];

  if (!instructorsState.instructors.length) {
    lines.push("> Nessun istruttore inserito.");
  } else {
    getReportOrderedInstructors().forEach(instructor => {
      lines.push(`> ${formatInstructorReportLine(instructor)}`);
    });
  }

  lines.push("", `**Classifica attuale - ciclo ${cycleLabel}:**`);
  const topGroups = getInstructorTopGroups();
  if (!topGroups.length) {
    lines.push("> Da definire");
  } else {
    lines.push(...formatWinnerReportLines(topGroups));
  }

  lines.push(
    "",
    "**Recap operativo:**",
    `> Ciclo: ${cycleLabel}`,
    "> Regola punteggio: +1 per ogni addestramento, -2 per ogni ammonimento",
    `> Istruttori attivi: ${instructorsState.instructors.filter(instructor => instructor.active).length}`,
    `> Addestramenti svolti: ${instructorsState.instructors.reduce((total, instructor) => total + getInstructorTrainingTotal(instructor), 0)}`,
    `> Ammonimenti assegnati: ${instructorsState.instructors.reduce((total, instructor) => total + toNonNegativeInt(instructor.warnings), 0)}`,
    `> Inattivi ciclo 2 settimane: ${formatCycleInactiveList()}`,
    "",
    `**Inattività da attenzionare (${cycleLabel}):**`,
    `> ${formatCycleInactiveList()}`,
    "",
    "**Movimenti reparto - Assunzioni:**",
    formatMovementGroup("assunzione"),
    "",
    "**Movimenti reparto - Rimozioni:**",
    formatMovementGroup("rimozione"),
    "",
    "**Movimenti reparto - Ammonimenti:**",
    formatMovementGroup("ammonimento"),
    "",
    "**Movimenti reparto - Addestramenti:**",
    formatMovementGroup("addestramento")
  );

  lines.push(
    "",
    "***Non svolgere addestramenti comporterà il <@&959468486571216988> interno al dipartimento.***",
    "***A seguito del <@&959468486571216986> procederemo con l'estromissione dal reparto se non sono inoltrate motivazioni valide.***",
    "",
    "*In fede,*",
    instructorsState.signature || "<@&1495402199965106227>"
  );

  return lines.join("\n");
}

function getReportOrderedInstructors() {
  return [...instructorsState.instructors].sort((a, b) => {
    if (a.active !== b.active) return a.active ? -1 : 1;
    return calculateInstructorPoints(b) - calculateInstructorPoints(a) || a.name.localeCompare(b.name);
  });
}

function formatWinnerReportLines(topGroups) {
  const labels = ["Primo Classificato", "Secondo Classificato", "Terzo Classificato"];
  return topGroups.slice(0, 3).map((group, index) => {
    return `> ${labels[index]}: ${group.names.join(", ")} - ${group.points} pp`;
  });
}

function formatInstructorReportLine(instructor) {
  const text = `${instructor.name || "Istruttore"} - ${calculateInstructorPoints(instructor)} pp`;
  return instructor.active ? text : `~~${text}~~`;
}

function formatCycleInactiveList() {
  const names = getCycleInactiveInstructors()
    .map(instructor => instructor.active ? instructor.name : `~~${instructor.name}~~`);
  return names.length ? names.join(", ") : "\\";
}

function getCycleInactiveInstructors() {
  return instructorsState.instructors
    .filter(instructor => getInstructorTrainingTotal(instructor) === 0);
}

function formatCycleLabel() {
  return instructorsState.cycleLabel || "ciclo corrente";
}

function formatMovementGroup(type) {
  const movements = instructorsState.movements.filter(movement => movement.type === type);
  if (!movements.length) return "> \\";

  return movements
    .map(movement => `> ${formatMovementReportLine(movement)}`)
    .join("\n");
}

function formatMovementReportLine(movement) {
  const date = movement.date ? formatInputDateToIT(movement.date) : formatDateIT(new Date());
  const name = movement.instructorName || "Istruttore";
  const reason = movement.reason ? ` - ${movement.reason}` : "";
  const id = `[${formatMovementDisplayId(movement)}]`;

  if (movement.type === "assunzione") return `${id} ${date} - Assunzione: ${name}${reason}`;
  if (movement.type === "rimozione") return `${id} ${date} - Rimozione: ${name}${reason}`;
  if (movement.type === "ammonimento") return `${id} ${date} - Ammonimento: ${name} (-2 pp)${reason}`;

  return `${id} ${date} - Addestramento svolto: ${name} (+1 pp)${reason}`;
}

function formatMovementDisplayId(movement) {
  return String(movement.id || "MOV-000").toUpperCase();
}

function formatMovementTypeLabel(type) {
  const labels = {
    addestramento: "Addestramento",
    ammonimento: "Ammonimento",
    assunzione: "Assunzione",
    rimozione: "Rimozione"
  };
  return labels[type] || "Movimento";
}

function formatMovementImpact(movement) {
  if (movement.type === "addestramento") return "+1 pp";
  if (movement.type === "ammonimento") return "-2 pp";
  if (movement.type === "assunzione") return "ingresso reparto";
  if (movement.type === "rimozione") return "uscita reparto";
  return "movimento";
}

function formatRecentMovementMeta(movement) {
  const date = movement.date ? formatInputDateToIT(movement.date) : formatDateIT(new Date());
  return movement.reason ? `${date} - ${movement.reason}` : date;
}

function getInstructorTopGroups() {
  const sorted = instructorsState.instructors
    .filter(instructor => instructor.active)
    .map(instructor => ({ name: instructor.name, points: calculateInstructorPoints(instructor) }))
    .filter(item => item.points > 0)
    .sort((a, b) => b.points - a.points || a.name.localeCompare(b.name));

  const groups = [];
  sorted.forEach(item => {
    let group = groups.find(existing => existing.points === item.points);
    if (!group) {
      group = { points: item.points, names: [] };
      groups.push(group);
    }
    group.names.push(item.name);
  });

  return groups.slice(0, 3);
}

function upsertInstructorByName(name, defaults = {}) {
  const normalizedName = name.trim();
  const existing = instructorsState.instructors.find(instructor => instructor.name.toLowerCase() === normalizedName.toLowerCase());
  if (existing) {
    Object.assign(existing, defaults);
    return existing;
  }

  const instructor = normalizeInstructorRecord({
    id: buildInstructorId(normalizedName),
    name: normalizedName,
    ...defaults
  });
  instructorsState.instructors.push(instructor);
  return instructor;
}

function findInstructorById(id) {
  return instructorsState?.instructors.find(instructor => instructor.id === id) || null;
}

function calculateInstructorPoints(instructor) {
  return getInstructorTrainingTotal(instructor) - (toNonNegativeInt(instructor.warnings) * 2);
}

function getInstructorTrainingTotal(instructor) {
  return toNonNegativeInt(instructor.trainings);
}

function createCycleArchiveFromCurrentState() {
  const instructors = instructorsState.instructors.map(instructor => {
    const trainings = getInstructorTrainingTotal(instructor);
    const warnings = toNonNegativeInt(instructor.warnings);
    return {
      name: instructor.name || "Istruttore",
      trainings,
      warnings,
      points: trainings - (warnings * 2),
      active: instructor.active !== false
    };
  });

  const totals = {
    trainings: instructors.reduce((total, instructor) => total + instructor.trainings, 0),
    warnings: instructors.reduce((total, instructor) => total + instructor.warnings, 0),
    active: instructors.filter(instructor => instructor.active).length,
    inactive: instructors.filter(instructor => instructor.trainings === 0).length,
    movements: instructorsState.movements.length
  };

  return {
    id: buildArchiveId(),
    cycleLabel: formatCycleLabel(),
    closedAt: formatDateFilePart(new Date()),
    eventDate: instructorsState.eventDate || "",
    totals,
    instructors
  };
}

function toNonNegativeInt(value) {
  const number = Number.parseInt(value, 10);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function buildInstructorId(name) {
  return `inst-${slugify(name)}-${Date.now().toString(36)}`;
}

function buildMovementId() {
  const nextSequence = toNonNegativeInt(instructorsState?.movementSequence) + 1;
  if (instructorsState) instructorsState.movementSequence = nextSequence;
  return `MOV-${String(nextSequence).padStart(3, "0")}`;
}

function buildArchiveId() {
  const nextSequence = toNonNegativeInt(instructorsState?.archiveSequence) + 1;
  if (instructorsState) instructorsState.archiveSequence = nextSequence;
  return `CYC-${String(nextSequence).padStart(3, "0")}`;
}

function buildInstructorsFilename() {
  const date = instructorsState.eventDate || formatDateFilePart(new Date());
  return `report-istruttori-${date}.txt`;
}

function exportInstructorsData() {
  const payload = JSON.stringify(instructorsState, null, 2);
  downloadTextFile(payload, buildInstructorsDataFilename());
}

function buildInstructorsDataFilename() {
  const date = instructorsState.eventDate || formatDateFilePart(new Date());
  return `dati-istruttori-${date}.json`;
}

function importInstructorsData(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result || ""));
      if (!Array.isArray(parsed.instructors)) {
        throw new Error("Il file non contiene un registro istruttori valido.");
      }

      const parsedState = { ...parsed };
      delete parsedState.weekOneLabel;
      delete parsedState.weekTwoLabel;
      const defaults = cloneDefaultInstructorsState();
      instructorsState = {
        ...defaults,
        ...parsedState,
        schemaVersion: defaults.schemaVersion,
        cycleLabel: resolveInstructorCycleLabel(parsed),
        instructors: parsed.instructors.map(normalizeInstructorRecord),
        movementSequence: resolveMovementSequence(parsed),
        movements: Array.isArray(parsed.movements)
          ? parsed.movements.map(normalizeMovementRecord)
          : [],
        archiveSequence: resolveArchiveSequence(parsed),
        cycleArchives: Array.isArray(parsed.cycleArchives)
          ? parsed.cycleArchives.map(normalizeCycleArchiveRecord).filter(Boolean)
          : []
      };
      selectedCycleArchiveId = instructorsState.cycleArchives[0]?.id || "";
      hydrateIstruttoriForm();
      renderInstructors();
      renderMovementInstructorOptions();
      updateIstruttoriEverything();
      saveInstructorsState();
      showToast("Dati istruttori importati.", "success");
    } catch (error) {
      console.error("Import istruttori non riuscito:", error);
      showToast("File dati non valido.", "error");
    } finally {
      event.target.value = "";
    }
  });
  reader.readAsText(file);
}

function importLegacyReportFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    importLegacyReportArchive(String(reader.result || ""), file.name);
    event.target.value = "";
  });
  reader.addEventListener("error", () => {
    showToast("Impossibile leggere il report.", "error");
  });
  reader.readAsText(file);
}

function toggleLegacyReportPastePanel() {
  if (!istruttoriDom.legacyReportPastePanel) return;

  const isOpening = istruttoriDom.legacyReportPastePanel.hidden;
  istruttoriDom.legacyReportPastePanel.hidden = !isOpening;
  setText(istruttoriDom.toggleLegacyReportPasteBtn, isOpening ? "Chiudi incolla" : "Incolla report");

  if (isOpening) {
    window.setTimeout(() => istruttoriDom.legacyReportText?.focus(), 40);
  }
}

function importLegacyReportFromTextarea() {
  const text = getValue(istruttoriDom.legacyReportText);
  if (!text.trim()) {
    showToast("Incolla un report prima di importarlo.", "error");
    return;
  }

  importLegacyReportArchive(text, "report incollato");
}

function importLegacyReportArchive(text, sourceName = "report") {
  try {
    const archive = parseLegacyInstructorsReport(text, sourceName);
    const exists = (instructorsState.cycleArchives || []).some(item => {
      return item.cycleLabel === archive.cycleLabel && item.eventDate === archive.eventDate;
    });

    if (exists && !confirm("Esiste gia un ciclo con stessa data/report. Vuoi importarlo comunque?")) {
      return;
    }

    archive.id = buildArchiveId();
    const normalizedArchive = normalizeCycleArchiveRecord(archive);
    instructorsState.cycleArchives = [normalizedArchive, ...(instructorsState.cycleArchives || [])].slice(0, MAX_CYCLE_ARCHIVES);
    selectedCycleArchiveId = normalizedArchive.id;

    updateIstruttoriEverything();
    saveInstructorsState();

    if (istruttoriDom.legacyReportText) istruttoriDom.legacyReportText.value = "";
    if (istruttoriDom.legacyReportPastePanel) istruttoriDom.legacyReportPastePanel.hidden = true;
    setText(istruttoriDom.toggleLegacyReportPasteBtn, "Incolla report");
    showToast(`Report importato nello storico: ${normalizedArchive.cycleLabel}.`, "success");
  } catch (error) {
    console.error("Errore import report storico:", error);
    showToast(error.message || "Report non riconosciuto.", "error");
  }
}

function parseLegacyInstructorsReport(text, sourceName = "report") {
  const cleaned = normalizeLegacyReportText(text);
  if (!cleaned.trim()) throw new Error("Report vuoto.");

  const lines = cleaned.split("\n");
  const instructors = extractLegacyReportInstructors(lines);
  if (!instructors.length) {
    throw new Error("Non ho trovato la lista istruttori con punteggi nel report.");
  }

  const eventDate = extractLegacyReportEventDate(cleaned);
  const cycleLabel = extractLegacyReportCycleLabel(cleaned, eventDate);
  const closedAt = inferLegacyReportClosedAt(cycleLabel, eventDate);
  const inactiveNames = extractLegacyReportInactiveNames(cleaned);
  const explicitTrainings = extractLegacyReportMetric(cleaned, [
    /Addestramenti svolti\s*:?\s*(-?\d+)/i
  ]);
  const explicitWarnings = extractLegacyReportMetric(cleaned, [
    /Ammonimenti assegnati\s*:?\s*(-?\d+)/i
  ]);
  const explicitMovements = extractLegacyReportMetric(cleaned, [
    /Movimenti\s*:?\s*(-?\d+)/i,
    /(\d+)\s+movimenti/i
  ]);

  return {
    id: "",
    cycleLabel,
    closedAt,
    eventDate,
    source: "legacy-report",
    sourceName,
    totals: {
      trainings: explicitTrainings ?? instructors.reduce((total, instructor) => total + Math.max(0, instructor.points), 0),
      warnings: explicitWarnings ?? 0,
      active: instructors.filter(instructor => instructor.active).length,
      inactive: inactiveNames.length || instructors.filter(instructor => instructor.points === 0).length,
      movements: explicitMovements ?? 0
    },
    instructors
  };
}

function normalizeLegacyReportText(text) {
  return String(text || "")
    .replace(/\uFEFF/g, "")
    .replace(/[\u200B-\u200D]/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n");
}

function extractLegacyReportInstructors(lines) {
  const instructors = [];
  let inList = false;

  lines.forEach(rawLine => {
    const line = rawLine.trim();

    if (/lista\s+agenti\s+istruttori/i.test(line)) {
      inList = true;
      return;
    }

    if (!inList) return;
    if ((/^\*\*/.test(line) || /^#/.test(line)) && instructors.length) {
      inList = false;
      return;
    }

    const instructor = parseLegacyInstructorScoreLine(line);
    if (instructor) instructors.push(instructor);
  });

  return dedupeLegacyInstructors(instructors);
}

function parseLegacyInstructorScoreLine(line) {
  const body = line
    .replace(/^>\s*/, "")
    .replace(/^[-*•]\s*/, "")
    .trim();

  if (!body || /nessun istruttore/i.test(body)) return null;

  const active = !body.includes("~~");
  const clean = body
    .replace(/~~/g, "")
    .replace(/[`*_]/g, "")
    .trim();
  const match = clean.match(/^(.+?)\s*[-–—]\s*(-?\d+)\s*p{1,2}\b/i);
  if (!match) return null;

  const name = match[1].trim();
  if (!name || name.includes(":")) return null;

  const points = Number.parseInt(match[2], 10);
  if (!Number.isFinite(points)) return null;

  return {
    name,
    trainings: Math.max(0, points),
    warnings: 0,
    points,
    active,
    importedScore: true
  };
}

function dedupeLegacyInstructors(instructors) {
  const seen = new Set();
  return instructors.filter(instructor => {
    const key = instructor.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function extractLegacyReportEventDate(text) {
  const match = text.match(/ANNUNCIAT[OA]\s+IL\s+GIORNO\s+(\d{1,2}\/\d{1,2}\/\d{2,4})/i);
  return match ? parseITDateToInput(match[1]) : "";
}

function extractLegacyReportCycleLabel(text, eventDate) {
  const directMatch = text.match(/ciclo\s*:?\s*(\d{1,2}\/\d{1,2})\s*[-–—]\s*(\d{1,2}\/\d{1,2})/i);
  if (directMatch) return normalizeLegacyCycleRange(directMatch[1], directMatch[2]);

  const ranges = [...text.matchAll(/(\d{1,2}\/\d{1,2})\s*[-–—]\s*(\d{1,2}\/\d{1,2})/g)]
    .map(match => ({ start: match[1], end: match[2] }));

  if (ranges.length) {
    return normalizeLegacyCycleRange(ranges[0].start, ranges[ranges.length - 1].end);
  }

  return eventDate ? `Report ${formatInputDateToIT(eventDate)}` : "Report importato";
}

function normalizeLegacyCycleRange(start, end) {
  return `${normalizeLegacyShortDate(start)} - ${normalizeLegacyShortDate(end)}`;
}

function normalizeLegacyShortDate(value) {
  const [dd, mm] = String(value || "").split("/");
  return `${String(dd || "").padStart(2, "0")}/${String(mm || "").padStart(2, "0")}`;
}

function inferLegacyReportClosedAt(cycleLabel, eventDate) {
  const match = String(cycleLabel || "").match(/(\d{1,2})\/(\d{1,2})\s*-\s*(\d{1,2})\/(\d{1,2})/);
  if (!match) return eventDate || formatDateFilePart(new Date());

  const startMonth = Number.parseInt(match[2], 10);
  const endDay = match[3];
  const endMonth = Number.parseInt(match[4], 10);
  let year = eventDate ? Number.parseInt(eventDate.split("-")[0], 10) : new Date().getFullYear();
  if (Number.isFinite(startMonth) && Number.isFinite(endMonth) && endMonth < startMonth) year += 1;

  return parseITDateToInput(`${endDay}/${endMonth}/${year}`) || eventDate || formatDateFilePart(new Date());
}

function extractLegacyReportInactiveNames(text) {
  const names = [];
  const inlineMatch = text.match(/Inattivi ciclo(?: 2 settimane)?\s*:?\s*([^\n]+)/i);
  if (inlineMatch) names.push(...parseLegacyNameList(inlineMatch[1]));

  const sectionPatterns = [
    /\*\*Inattivit[^\n]*:\*\*\s*\n\s*>\s*([^\n]+)/gi,
    /\*\*Persone che non hanno svolto[^\n]*:\*\*\s*\n\s*>\s*([^\n]+)/gi
  ];

  sectionPatterns.forEach(pattern => {
    [...text.matchAll(pattern)].forEach(match => {
      names.push(...parseLegacyNameList(match[1]));
    });
  });

  return [...new Set(names.map(name => name.toLowerCase()))];
}

function parseLegacyNameList(value) {
  return String(value || "")
    .split(",")
    .map(name => name.replace(/^>\s*/, "").replace(/~~/g, "").trim())
    .filter(name => name && name !== "\\" && !/^nessun/i.test(name));
}

function extractLegacyReportMetric(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return toNonNegativeInt(match[1]);
  }

  return null;
}

function startNewInstructorsCycle() {
  const confirmReset = confirm("Vuoi iniziare un nuovo ciclo da 2 settimane? Il ciclo attuale verrà salvato nello storico grafici, poi verranno azzerati addestramenti, ammonimenti e movimenti.");
  if (!confirmReset) return;

  const archive = createCycleArchiveFromCurrentState();
  instructorsState.cycleArchives = [archive, ...(instructorsState.cycleArchives || [])].slice(0, MAX_CYCLE_ARCHIVES);
  selectedCycleArchiveId = archive.id;
  instructorsState.eventDate = formatDateFilePart(new Date());
  instructorsState.instructors = instructorsState.instructors.map(instructor => ({
    ...instructor,
    trainings: 0,
    warnings: 0
  }));
  instructorsState.movements = [];
  instructorsState.movementSequence = 0;

  hydrateIstruttoriForm();
  renderInstructors();
  renderMovementInstructorOptions();
  updateIstruttoriEverything();
  saveInstructorsState();
  showToast("Nuovo ciclo da 2 settimane avviato.", "success");
}

function saveInstructorsState() {
  const saved = setStorageItem(ISTRUTTORI_STORAGE_KEY, JSON.stringify(instructorsState));
  updateSaveStatus(istruttoriDom.saveStatus, saved);
}

function resetInstructorsState() {
  const confirmReset = confirm("Vuoi ripristinare il registro esempio degli istruttori?");
  if (!confirmReset) return;

  instructorsState = cloneDefaultInstructorsState();
  selectedCycleArchiveId = "";
  removeStorageItem(ISTRUTTORI_STORAGE_KEY);
  hydrateIstruttoriForm();
  renderInstructors();
  renderMovementInstructorOptions();
  updateIstruttoriEverything();
  updateSaveStatus(istruttoriDom.saveStatus, true, "Reset completato");
  showToast("Registro esempio ripristinato.", "success");
}

function createOption(value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
}

/* =========================
   RENDER HELPERS
========================= */

function createSectionBlock(sectionData) {
  const section = document.createElement("section");
  section.className = "section-block";

  const header = document.createElement("div");
  header.className = "section-header";

  const title = createTextElement("h3", "", sectionData.section);
  const counter = createTextElement("span", "section-counter", `${sectionData.questions.length} voci`);
  header.append(title, counter);

  const inner = document.createElement("div");
  inner.className = "section-inner";

  section.append(header, inner);
  return section;
}

function createQuestionCard({ question, scoreClass, noteClass, dataKey, noteLabel, withAnswer }) {
  const card = document.createElement("article");
  card.className = "question-card";

  const titleId = `${scoreClass}-title-${question.id}`;
  const top = document.createElement("div");
  top.className = "question-top";

  const title = createTextElement("h4", "question-title", question.title);
  title.id = titleId;
  const points = createTextElement("span", "points-badge", `Max ${question.maxPoints}`);
  top.append(title, points);

  const controls = document.createElement("div");
  controls.className = "question-controls";

  const select = createScoreSelect({
    className: scoreClass,
    dataKey,
    question,
    ariaLabel: `Punteggio per ${question.title}`
  });
  controls.appendChild(createFieldLabel("Punteggio assegnato", select));

  const note = document.createElement("input");
  note.type = "text";
  note.className = noteClass;
  note.placeholder = "Facoltativo...";
  note.maxLength = 220;
  note.dataset[dataKey] = question.id;
  note.setAttribute("aria-label", `${noteLabel} per ${question.title}`);
  controls.appendChild(createFieldLabel(noteLabel, note));

  if (withAnswer) {
    const answerId = `answer-${question.id}`;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-secondary toggle-answer-btn";
    button.textContent = "Mostra risposta";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", answerId);

    const answer = createTextElement("div", "answer-box", question.answer || "");
    answer.id = answerId;

    button.addEventListener("click", () => {
      const isOpen = answer.classList.toggle("open");
      button.textContent = isOpen ? "Nascondi risposta" : "Mostra risposta";
      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    controls.appendChild(button);
    card.append(top, controls, answer);
  } else {
    const spacer = document.createElement("span");
    spacer.setAttribute("aria-hidden", "true");
    controls.appendChild(spacer);
    card.append(top, controls);
  }

  card.setAttribute("aria-labelledby", titleId);
  return card;
}

function createScoreSelect({ className, dataKey, question, ariaLabel }) {
  const select = document.createElement("select");
  select.className = className;
  select.dataset[dataKey] = question.id;
  select.setAttribute("aria-label", ariaLabel);

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Da assegnare";
  select.appendChild(placeholder);

  for (let i = 0; i <= question.maxPoints; i++) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = String(i);
    select.appendChild(option);
  }

  return select;
}

function createFieldLabel(text, control) {
  const label = document.createElement("label");
  label.append(document.createTextNode(text), control);
  return label;
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function replaceChildren(parent, ...children) {
  if (!parent) return;
  parent.replaceChildren(...children);
}

/* =========================
   UTILS
========================= */

function calculateScoreTotals(selector, finder, dataKey) {
  const scoreEls = document.querySelectorAll(selector);
  let earned = 0;
  let max = 0;
  let completed = 0;

  scoreEls.forEach(select => {
    const question = finder(select.dataset[dataKey]);
    if (!question) return;

    max += Number(question.maxPoints || 0);

    if (select.value !== "") {
      completed += 1;
      earned += Number(select.value || 0);
    }
  });

  const total = scoreEls.length;
  const remaining = Math.max(total - completed, 0);
  const percentage = max > 0 ? Math.round((earned / max) * 100) : 0;
  const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { earned, max, completed, total, remaining, percentage, completionPercentage };
}

function findQuestionById(data, id) {
  for (const section of data) {
    const found = section.questions.find(q => q.id === id);
    if (found) return found;
  }
  return null;
}

function collectValues(selector, dataKey) {
  const values = {};
  document.querySelectorAll(selector).forEach(el => {
    values[el.dataset[dataKey]] = el.value;
  });
  return values;
}

function restoreValues(selector, dataKey, values = {}, options = {}) {
  document.querySelectorAll(selector).forEach(el => {
    const saved = values?.[el.dataset[dataKey]];
    if (saved === undefined) return;
    el.value = options.blankLegacyZero && saved === "0" ? "" : saved;
  });
}

function getValue(element) {
  return (element?.value || "").trim();
}

function setInputValue(element, value = "") {
  if (element) element.value = value || "";
}

function setText(element, text) {
  if (element) element.textContent = text;
}

function setProgress(element, value) {
  if (element) element.style.width = `${Math.max(0, Math.min(value, 100))}%`;
}

function setResultClass(element, status) {
  if (!element) return;
  element.classList.remove("result-positive", "result-negative", "result-pending");
  element.classList.add(`result-${status}`);
}

function setHelperText(element, result) {
  if (!element) return;
  element.textContent = result.text;
  element.classList.toggle("is-complete", Boolean(result.complete));
}

function updateSaveStatus(element, saved, overrideText = "") {
  if (!element) return;
  element.classList.toggle("is-ok", Boolean(saved));
  element.classList.toggle("is-error", !saved);
  element.textContent = overrideText || (saved ? `Salvato alle ${formatTimeIT(new Date())}` : "Salvataggio non disponibile");
}

function readSavedJson(key) {
  const raw = getStorageItem(key);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error("Errore nel caricamento del salvataggio:", error);
    return null;
  }
}

function getStorageItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("LocalStorage non disponibile:", error);
    return null;
  }
}

function setStorageItem(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error("LocalStorage non disponibile:", error);
    return false;
  }
}

function removeStorageItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("LocalStorage non disponibile:", error);
  }
}

function formatDateIT(date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function formatTimeIT(date) {
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

function formatDateFilePart(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function formatInputDateToIT(value) {
  if (!value) return "";
  const [yyyy, mm, dd] = value.split("-");
  if (!yyyy || !mm || !dd) return value;
  return `${dd}/${mm}/${yyyy}`;
}

function parseITDateToInput(value, fallbackYear = "") {
  const match = String(value || "").trim().match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?$/);
  if (!match) return "";

  const dd = match[1].padStart(2, "0");
  const mm = match[2].padStart(2, "0");
  let yyyy = match[3] || fallbackYear;
  if (!yyyy) return "";
  if (String(yyyy).length === 2) yyyy = `20${yyyy}`;

  const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  if (
    Number.isNaN(date.getTime())
    || date.getFullYear() !== Number(yyyy)
    || date.getMonth() !== Number(mm) - 1
    || date.getDate() !== Number(dd)
  ) {
    return "";
  }

  return `${yyyy}-${mm}-${dd}`;
}

function formatDiscordMention(value, placeholder) {
  const id = value.replace(/\D/g, "");
  return id ? `<@${id}>` : placeholder;
}

function slugify(value) {
  const slug = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "modulo";
}

function copySummaryText(text) {
  if (!text.trim()) {
    showToast("Nessun modulo da copiare.", "warning");
    return;
  }

  copyTextToClipboard(text)
    .then(() => showToast("Modulo copiato negli appunti.", "success"))
    .catch(() => showToast("Copia automatica non riuscita. Usa il riquadro del modulo.", "error"));
}

function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);
    textarea.select();

    try {
      const copied = document.execCommand("copy");
      document.body.removeChild(textarea);
      copied ? resolve() : reject(new Error("Copy command was not accepted."));
    } catch (error) {
      document.body.removeChild(textarea);
      reject(error);
    }
  });
}

function downloadTextFile(text, filename) {
  if (!text.trim()) {
    showToast("Nessun modulo da scaricare.", "warning");
    return;
  }

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast("File TXT generato.", "success");
}

function showToast(message, type = "success") {
  const region = document.getElementById("toastRegion");
  if (!region) return;

  const toast = createTextElement("div", `toast is-${type}`, message);
  region.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 3200);
}
