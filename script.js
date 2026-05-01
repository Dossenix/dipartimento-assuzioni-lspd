const COLLOQUIO_STORAGE_KEY = "colloquio_form_state_v1";
const FORMAZIONE_STORAGE_KEY = "formazione_form_state_v1";

const questionsData = [
  {
    section: "Azioni Illegali",
    questions: [
      {
        id: "q1",
        title: "Durante un rapimento di un alto comando di una FDO quanti agenti e criminali possono intervenire?",
        maxPoints: 5,
        answer: "Alto comando: nessun limite di agenti. Criminali: massimo 15."
      },
      {
        id: "q2",
        title: "Durante un rapimento di un agente: quanti poliziotti o criminali possono intervenire nell'azione?",
        maxPoints: 5,
        answer: "Agente non alto comando: massimo 20 agenti. Criminali: massimo 15."
      },
      {
        id: "q3",
        title: "Quanto è il tempo massimo per intervenire in un 10-101 e quanti poliziotti e criminali possono intervenire nell'azione?",
        maxPoints: 6,
        answer: "Nel 10-101 non c'è un tempo massimo di intervento. Possono intervenire massimo 20 agenti e massimo 15 criminali."
      }
    ]
  },
  {
    section: "Azioni Freeroam",
    questions: [
      {
        id: "q4",
        title: "Durante una freeroam possono essere presenti ostaggi?",
        maxPoints: 2,
        answer: "No, durante una freeroam non possono essere presenti ostaggi."
      },
      {
        id: "q5",
        title: "Quanto è il numero massimo di agenti che possono intervenire in un'azione freeroam?",
        maxPoints: 3,
        answer: "Massimo 10 agenti."
      },
      {
        id: "q6",
        title: "È concesso l'utilizzo di tetti nelle azioni freeroam?",
        maxPoints: 2,
        answer: "No, i tetti non sono consentiti, a meno che siano raggiungibili fisicamente tramite scale o scale a pioli."
      },
      {
        id: "q7",
        title: "Che tipo di armi sono autorizzate in queste azioni?",
        maxPoints: 3,
        answer: "Solo pistole a colpo singolo e giubbotti."
      }
    ]
  },
  {
    section: "Rapine",
    questions: [
      {
        id: "q8",
        title: "In quanti agenti può essere startata una rapina FLEECA?",
        maxPoints: 3,
        answer: "Fleeca: fino a 4 agenti."
      },
      {
        id: "q9",
        title: "Quanti agenti e criminali possono essere massimi durante una rapina Fleeca?",
        maxPoints: 4,
        answer: "Agenti: 4. Criminali: minimo 2, massimo 4."
      },
      {
        id: "q10",
        title: "Quanti agenti e criminali possono essere massimi durante una rapina al Market?",
        maxPoints: 4,
        answer: "Market / Negozietto: agenti 2. Criminali massimo 2. Ostaggi 1."
      },
      {
        id: "q11",
        title: "Quanti agenti e criminali possono essere massimi durante una Gabriella?",
        maxPoints: 4,
        answer: "Gabriella: agenti 3. Criminali massimo 3. Ostaggi 1."
      },
      {
        id: "q12",
        title: "Quanti agenti e criminali possono essere massimi durante una Pacific?",
        maxPoints: 5,
        answer: "Pacific: agenti 12. Criminali minimo 6, massimo 10. Ostaggi 4."
      },
      {
        id: "q13",
        title: "Si può utilizzare i caschi durante una fleeca?",
        maxPoints: 2,
        answer: "Sì, i caschetti sono consentiti."
      },
      {
        id: "q14",
        title: "È possibile utilizzare i tetti durante una rapina al Market?",
        maxPoints: 2,
        answer: "No, non si possono usare i tetti vicini."
      },
      {
        id: "q15",
        title: "Che tipo di armi sono concesse durante una rapina alla Fleeca?",
        maxPoints: 3,
        answer: "Pistole a colpo singolo, P90, caschetti e giubbotti."
      },
      {
        id: "q16",
        title: "Che tipo di armi sono concesse durante una rapina al Market?",
        maxPoints: 3,
        answer: "Pistole a colpo singolo e giubbotti."
      },
      {
        id: "q17",
        title: "Che tipo di armi sono concesse durante una Gabriella?",
        maxPoints: 3,
        answer: "Pistole a colpo singolo e giubbotti."
      },
      {
        id: "q18",
        title: "Che tipo di armi sono concesse durante una Pacific?",
        maxPoints: 4,
        answer: "Qualunque arma in dotazione, caschetti e giubbotti."
      }
    ]
  },
  {
    section: "Codici Radio",
    questions: [
      {
        id: "q19",
        title: "Codici radio e significato",
        maxPoints: 6,
        answer: "Codici principali: 10-0 = Muto radio; 10-2 = Ricevuto male; 10-3 = Stop trasmissioni; 10-4 = Ricevuto; 10-5 = Ultimo messaggio; 10-7 = Fuori servizio; 10-8 = In servizio; 10-15 = Trasporto detenuto; 10-17 = Test sul veicolo; 10-19 = Disponibile in centrale; 10-20 = Posizione; 10-25 = Pericolo / urgenza; 10-40 = Ufficiale deceduto; 10-48 = Convergenza immediata; 10-50 = Incidente; 10-55 = Disturbo veicolare; 10-60 = Alterazione del traffico; 10-66 = Posto di blocco; 10-80 = Inseguimento; 10-99 = Ricercato; 10-100 = Richiesta rinforzi; 10-101 = Assalto alla centrale."
      }
    ]
  },
  {
    section: "Status",
    questions: [
      {
        id: "q20",
        title: "Mi puoi dire tutti i codici status con il loro significato?",
        maxPoints: 6,
        answer: "Status 1 = pattuglia disponibile per direttive. Status 2 = pattuglia non disponibile per direttive. Status 3 = pattuglia in rifornimento / pausa cibo / riparazione veicolo."
      }
    ]
  },
  {
    section: "Miranda Warning",
    questions: [
      {
        id: "q21",
        title: "Miranda Warning?",
        maxPoints: 8,
        answer: "Formula di riferimento: Lei ha il diritto di rimanere in silenzio. Qualsiasi cosa dirà potrà essere usata contro di lei in tribunale. Ha il diritto di parlare con un avvocato e di averlo presente durante l'interrogatorio. Se non può permettersene uno, gliene sarà assegnato uno d'ufficio. Ha compreso i suoi diritti?"
      }
    ]
  },
  {
    section: "Inseguimento",
    questions: [
      {
        id: "q22",
        title: "Quali sono le procedure da eseguire durante un inseguimento?",
        maxPoints: 6,
        answer: "Base di riferimento: 3 Alt distanziati di 10 secondi, oppure 5 Alt se il soggetto è in moto. Poi 10-80 con comunicazione in radio di posizione e veicolo. Si procede con le manovre consentite. Dopo 3 PIT, nei casi previsti, è possibile aprire il fuoco alle gomme."
      }
    ]
  },
  {
    section: "Manovre",
    questions: [
      {
        id: "q23",
        title: "Quante manovre esistono e in cosa consistono?",
        maxPoints: 8,
        answer: "Le manovre principali sono 4: PIT, BOX, T e DOUBLE T."
      }
    ]
  }
];

const trainingQuestionsData = [
  {
    section: "Argomenti Obbligatori",
    questions: [
      {
        id: "tq1",
        title: "Compilazione dei vari moduli arresto, esito rapine, multe.",
        maxPoints: 5
      },
      {
        id: "tq2",
        title: "Come utilizzare il canale #info.",
        maxPoints: 3
      },
      {
        id: "tq3",
        title: "Cosa sono i gradi di allerta.",
        maxPoints: 4
      },
      {
        id: "tq4",
        title: "Quanto costano i vari servizi della polizia (Documenti e porto d'armi).",
        maxPoints: 4
      },
      {
        id: "tq5",
        title: "Cosa contiene la dotazione della polizia.",
        maxPoints: 4
      },
      {
        id: "tq6",
        title: "Come effettuare arresti in game, fatture e come utilizzare il tablet.",
        maxPoints: 6
      },
      {
        id: "tq7",
        title: "Cosa cambia tra modulo arresto e modulo richiesta processo.",
        maxPoints: 5
      },
      {
        id: "tq8",
        title: "Come si effettua un test balistico, soldi sporchi e test sostanze stupefacenti. (Facoltativo)",
        maxPoints: 3
      },
      {
        id: "tq9",
        title: "Domande finali a discrezione del formatore.",
        maxPoints: 4
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

function describeColloquioMissingFields(totals) {
  const missing = [];

  if (!getValue(colloquioDom.candidateName)) missing.push("nome");
  if (!getValue(colloquioDom.candidateDob)) missing.push("data nascita");
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
    `Orario Inizio Colloquio: ${getValue(colloquioDom.startTime)}`,
    `Orario Fine: ${getValue(colloquioDom.endTime)}`,
    `Giorno Colloquio: ${formatDateIT(new Date())}`,
    `Esito Bando: ${getValue(colloquioDom.discordLink)}`,
    `Esito Colloquio: ${resultText}`,
    `Valutazione: ${totals.percentage}%`,
    `Firma: <@1084580275582931044>`,
    ``,
    `supervisionato da ${formatDiscordMention(getValue(colloquioDom.supervisorId), "<@id discord di supervisione>")}`
  ].join("\n");
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
    schemaVersion: 2,
    candidateName: getValue(colloquioDom.candidateName),
    candidateDob: getValue(colloquioDom.candidateDob),
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
  setInputValue(colloquioDom.startTime, data.startTime);
  setInputValue(colloquioDom.endTime, data.endTime);
  setInputValue(colloquioDom.discordLink, data.discordLink);
  setInputValue(colloquioDom.supervisorId, data.supervisorId);
  restoreValues(".score-select", "questionId", data.scores, { blankLegacyZero: data.schemaVersion !== 2 });
  restoreValues(".note-input", "questionId", data.notes);
}

function resetColloquio() {
  const confirmReset = confirm("Vuoi davvero resettare completamente il colloquio?");
  if (!confirmReset) return;

  removeStorageItem(COLLOQUIO_STORAGE_KEY);

  [
    colloquioDom.candidateName,
    colloquioDom.candidateDob,
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
        withAnswer: false
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
    `Punteggio formazione: ${totals.earned}/${totals.max}`,
    `Valutazione formazione: ${totals.percentage}%`,
    `Nome cittadini partecipanti: ${normalizeParticipants(getValue(formazioneDom.trainingParticipants))}`
  ].join("\n");
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
    schemaVersion: 2,
    trainingDate: getValue(formazioneDom.trainingDate),
    trainingStartTime: getValue(formazioneDom.trainingStartTime),
    trainingEndTime: getValue(formazioneDom.trainingEndTime),
    trainingSupervisorId: getValue(formazioneDom.trainingSupervisorId),
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
  setInputValue(formazioneDom.trainingParticipants, data.trainingParticipants);
  restoreValues(".training-score-select", "trainingQuestionId", data.scores, { blankLegacyZero: data.schemaVersion !== 2 });
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
