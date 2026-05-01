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
  candidateName: document.getElementById("candidateName"),
  candidateDob: document.getElementById("candidateDob"),
  startTime: document.getElementById("startTime"),
  endTime: document.getElementById("endTime"),
  discordLink: document.getElementById("discordLink"),
  supervisorId: document.getElementById("supervisorId"),
  copySummaryBtn: document.getElementById("copySummaryBtn"),
  resetBtn: document.getElementById("resetBtn")
};

function initColloquio() {
  renderColloquioQuestions();
  loadColloquioSavedState();
  attachColloquioListeners();
  updateColloquioEverything();
}

function renderColloquioQuestions() {
  colloquioDom.questionsContainer.innerHTML = "";

  questionsData.forEach(sectionData => {
    const section = document.createElement("div");
    section.className = "section-block";

    const header = document.createElement("div");
    header.className = "section-header";
    header.innerHTML = `<h3>${sectionData.section}</h3>`;

    const inner = document.createElement("div");
    inner.className = "section-inner";

    sectionData.questions.forEach(question => {
      const card = document.createElement("div");
      card.className = "question-card";

      card.innerHTML = `
        <div class="question-top">
          <h4 class="question-title">${question.title}</h4>
          <span class="points-badge">Punti max: ${question.maxPoints}</span>
        </div>

        <div class="question-controls">
          <label>
            Punteggio assegnato
            <select class="score-select" data-question-id="${question.id}">
              ${createOptions(question.maxPoints)}
            </select>
          </label>

          <label>
            Note esaminatore
            <input type="text" class="note-input" data-question-id="${question.id}" placeholder="Facoltativo..." />
          </label>

          <button type="button" class="btn btn-secondary toggle-answer-btn" data-target="answer-${question.id}">
            Mostra risposta
          </button>
        </div>

        <div class="answer-box" id="answer-${question.id}">
          ${question.answer}
        </div>
      `;

      inner.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(inner);
    colloquioDom.questionsContainer.appendChild(section);
  });

  document.querySelectorAll(".toggle-answer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;

      target.classList.toggle("open");
      btn.textContent = target.classList.contains("open")
        ? "Nascondi risposta"
        : "Mostra risposta";
    });
  });

  document.querySelectorAll(".score-select, .note-input").forEach(el => {
    el.addEventListener("input", () => {
      updateColloquioEverything();
      saveColloquioState();
    });
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
    el.addEventListener("input", () => {
      updateColloquioEverything();
      saveColloquioState();
    });
  });

  colloquioDom.copySummaryBtn?.addEventListener("click", copyColloquioSummaryToClipboard);
  colloquioDom.resetBtn?.addEventListener("click", resetColloquio);
}

function updateColloquioEverything() {
  const totals = calculateColloquioTotals();
  const evaluation = evaluateColloquioResult(totals.percentage);

  colloquioDom.earnedPoints.textContent = totals.earned.toString();
  colloquioDom.maxPoints.textContent = totals.max.toString();
  colloquioDom.percentageValue.textContent = `${totals.percentage}%`;
  colloquioDom.resultValue.textContent = evaluation.label;

  colloquioDom.resultValue.classList.remove("result-positive", "result-negative");
  colloquioDom.resultValue.classList.add(evaluation.isPassed ? "result-positive" : "result-negative");

  colloquioDom.finalSummary.value = buildColloquioFinalSummary(totals.percentage, evaluation.label);
}

function calculateColloquioTotals() {
  const scoreEls = document.querySelectorAll(".score-select");
  let earned = 0;
  let max = 0;

  scoreEls.forEach(select => {
    const questionId = select.dataset.questionId;
    const q = findColloquioQuestionById(questionId);
    if (!q) return;

    earned += Number(select.value || 0);
    max += Number(q.maxPoints || 0);
  });

  const percentage = max > 0 ? Math.round((earned / max) * 100) : 0;
  return { earned, max, percentage };
}

function findColloquioQuestionById(id) {
  for (const section of questionsData) {
    const found = section.questions.find(q => q.id === id);
    if (found) return found;
  }
  return null;
}

function evaluateColloquioResult(percentage) {
  if (percentage > 70) {
    return { label: "Positivo", isPassed: true };
  }

  if (percentage >= 60) {
    return { label: "Negativo - rimandato di 30 minuti", isPassed: false };
  }

  if (percentage >= 50) {
    return { label: "Negativo - rimandato di 45 minuti", isPassed: false };
  }

  if (percentage >= 40) {
    return { label: "Negativo - rimandato di 50 minuti", isPassed: false };
  }

  if (percentage >= 30) {
    return { label: "Negativo - rimandato di 1 ora", isPassed: false };
  }

  if (percentage >= 20) {
    return { label: "Negativo - rimandato di 1,5 ore", isPassed: false };
  }

  if (percentage >= 10) {
    return { label: "Negativo - rimandato di 2,5 ore", isPassed: false };
  }

  return { label: "Negativo - rimandato di 3 ore", isPassed: false };
}

function buildColloquioFinalSummary(percentage, resultText) {
  const now = new Date();
  const giornoColloquio = formatDateIT(now);

  const supervisorRaw = (colloquioDom.supervisorId?.value || "").trim();
  const supervisorFormatted = supervisorRaw
    ? `<@${supervisorRaw.replace(/[<@>]/g, "").trim()}>`
    : "<@id discord di supervisione>";

  return [
    `Nome e Cognome: ${colloquioDom.candidateName?.value?.trim() || ""}`,
    `Data di nascita: ${formatInputDateToIT(colloquioDom.candidateDob?.value || "")}`,
    `Orario Inizio Colloquio: ${colloquioDom.startTime?.value || ""}`,
    `Orario Fine: ${colloquioDom.endTime?.value || ""}`,
    `Giorno Colloquio: ${giornoColloquio}`,
    `Esito Bando: ${colloquioDom.discordLink?.value?.trim() || ""}`,
    `Esito Colloquio: ${resultText}`,
    `Valutazione: ${percentage}%`,
    `Firma: <@1084580275582931044>`,
    ``,
    `supervisionato da ${supervisorFormatted}`
  ].join("\n");
}

function copyColloquioSummaryToClipboard() {
  const text = colloquioDom.finalSummary?.value || "";
  if (!text.trim()) {
    alert("Nessun modulo da copiare.");
    return;
  }

  copyTextToClipboard(text)
    .then(() => alert("Modulo finale copiato negli appunti."))
    .catch(() => alert("Impossibile copiare automaticamente. Copialo manualmente dal riquadro."));
}

function saveColloquioState() {
  const payload = {
    candidateName: colloquioDom.candidateName?.value || "",
    candidateDob: colloquioDom.candidateDob?.value || "",
    startTime: colloquioDom.startTime?.value || "",
    endTime: colloquioDom.endTime?.value || "",
    discordLink: colloquioDom.discordLink?.value || "",
    supervisorId: colloquioDom.supervisorId?.value || "",
    scores: {},
    notes: {}
  };

  document.querySelectorAll(".score-select").forEach(select => {
    payload.scores[select.dataset.questionId] = select.value;
  });

  document.querySelectorAll(".note-input").forEach(input => {
    payload.notes[input.dataset.questionId] = input.value;
  });

  localStorage.setItem(COLLOQUIO_STORAGE_KEY, JSON.stringify(payload));
}

function loadColloquioSavedState() {
  const raw = localStorage.getItem(COLLOQUIO_STORAGE_KEY);
  if (!raw) return;

  try {
    const data = JSON.parse(raw);

    if (colloquioDom.candidateName) colloquioDom.candidateName.value = data.candidateName || "";
    if (colloquioDom.candidateDob) colloquioDom.candidateDob.value = data.candidateDob || "";
    if (colloquioDom.startTime) colloquioDom.startTime.value = data.startTime || "";
    if (colloquioDom.endTime) colloquioDom.endTime.value = data.endTime || "";
    if (colloquioDom.discordLink) colloquioDom.discordLink.value = data.discordLink || "";
    if (colloquioDom.supervisorId) colloquioDom.supervisorId.value = data.supervisorId || "";

    document.querySelectorAll(".score-select").forEach(select => {
      const saved = data.scores?.[select.dataset.questionId];
      if (saved !== undefined) select.value = saved;
    });

    document.querySelectorAll(".note-input").forEach(input => {
      const saved = data.notes?.[input.dataset.questionId];
      if (saved !== undefined) input.value = saved;
    });
  } catch (error) {
    console.error("Errore nel caricamento del salvataggio colloquio:", error);
  }
}

function resetColloquio() {
  const confirmReset = confirm("Vuoi davvero resettare completamente il colloquio?");
  if (!confirmReset) return;

  localStorage.removeItem(COLLOQUIO_STORAGE_KEY);

  if (colloquioDom.candidateName) colloquioDom.candidateName.value = "";
  if (colloquioDom.candidateDob) colloquioDom.candidateDob.value = "";
  if (colloquioDom.startTime) colloquioDom.startTime.value = "";
  if (colloquioDom.endTime) colloquioDom.endTime.value = "";
  if (colloquioDom.discordLink) colloquioDom.discordLink.value = "";
  if (colloquioDom.supervisorId) colloquioDom.supervisorId.value = "";

  document.querySelectorAll(".score-select").forEach(select => {
    select.value = "0";
  });

  document.querySelectorAll(".note-input").forEach(input => {
    input.value = "";
  });

  document.querySelectorAll(".answer-box").forEach(box => {
    box.classList.remove("open");
  });

  document.querySelectorAll(".toggle-answer-btn").forEach(btn => {
    btn.textContent = "Mostra risposta";
  });

  updateColloquioEverything();
}

/* =========================
   FORMAZIONE
========================= */

const formazioneDom = {
  trainingQuestionsContainer: document.getElementById("trainingQuestionsContainer"),
  trainingEarnedPoints: document.getElementById("trainingEarnedPoints"),
  trainingMaxPoints: document.getElementById("trainingMaxPoints"),
  trainingPercentageValue: document.getElementById("trainingPercentageValue"),
  trainingFinalSummary: document.getElementById("trainingFinalSummary"),
  trainingDate: document.getElementById("trainingDate"),
  trainingStartTime: document.getElementById("trainingStartTime"),
  trainingEndTime: document.getElementById("trainingEndTime"),
  trainingSupervisorId: document.getElementById("trainingSupervisorId"),
  trainingParticipants: document.getElementById("trainingParticipants"),
  copyTrainingSummaryBtn: document.getElementById("copyTrainingSummaryBtn"),
  resetTrainingBtn: document.getElementById("resetTrainingBtn")
};

function initFormazione() {
  renderTrainingQuestions();
  loadTrainingSavedState();
  attachTrainingListeners();
  updateTrainingEverything();
}

function renderTrainingQuestions() {
  formazioneDom.trainingQuestionsContainer.innerHTML = "";

  trainingQuestionsData.forEach(sectionData => {
    const section = document.createElement("div");
    section.className = "section-block";

    const header = document.createElement("div");
    header.className = "section-header";
    header.innerHTML = `<h3>${sectionData.section}</h3>`;

    const inner = document.createElement("div");
    inner.className = "section-inner";

    sectionData.questions.forEach(question => {
      const card = document.createElement("div");
      card.className = "question-card";

      card.innerHTML = `
        <div class="question-top">
          <h4 class="question-title">${question.title}</h4>
          <span class="points-badge">Punti max: ${question.maxPoints}</span>
        </div>

        <div class="question-controls">
          <label>
            Punteggio assegnato
            <select class="training-score-select" data-training-question-id="${question.id}">
              ${createOptions(question.maxPoints)}
            </select>
          </label>

          <label>
            Note formatore
            <input type="text" class="training-note-input" data-training-question-id="${question.id}" placeholder="Facoltativo..." />
          </label>

          <div></div>
        </div>
      `;

      inner.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(inner);
    formazioneDom.trainingQuestionsContainer.appendChild(section);
  });

  document.querySelectorAll(".training-score-select, .training-note-input").forEach(el => {
    el.addEventListener("input", () => {
      updateTrainingEverything();
      saveTrainingState();
    });
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
    el.addEventListener("input", () => {
      updateTrainingEverything();
      saveTrainingState();
    });
  });

  formazioneDom.copyTrainingSummaryBtn?.addEventListener("click", copyTrainingSummaryToClipboard);
  formazioneDom.resetTrainingBtn?.addEventListener("click", resetTraining);
}

function updateTrainingEverything() {
  const totals = calculateTrainingTotals();

  formazioneDom.trainingEarnedPoints.textContent = totals.earned.toString();
  formazioneDom.trainingMaxPoints.textContent = totals.max.toString();
  formazioneDom.trainingPercentageValue.textContent = `${totals.percentage}%`;
  formazioneDom.trainingFinalSummary.value = buildTrainingFinalSummary();
}

function calculateTrainingTotals() {
  const scoreEls = document.querySelectorAll(".training-score-select");
  let earned = 0;
  let max = 0;

  scoreEls.forEach(select => {
    const questionId = select.dataset.trainingQuestionId;
    const q = findTrainingQuestionById(questionId);
    if (!q) return;

    earned += Number(select.value || 0);
    max += Number(q.maxPoints || 0);
  });

  const percentage = max > 0 ? Math.round((earned / max) * 100) : 0;
  return { earned, max, percentage };
}

function findTrainingQuestionById(id) {
  for (const section of trainingQuestionsData) {
    const found = section.questions.find(q => q.id === id);
    if (found) return found;
  }
  return null;
}

function buildTrainingFinalSummary() {
  const dateValue = formazioneDom.trainingDate?.value
    ? formatInputDateToIT(formazioneDom.trainingDate.value)
    : formatDateIT(new Date());

  const supervisorRaw = (formazioneDom.trainingSupervisorId?.value || "").trim();
  const supervisorFormatted = supervisorRaw
    ? `<@${supervisorRaw.replace(/[<@>]/g, "").trim()}>`
    : "<@id discord>";

  return [
    `Data: ${dateValue}`,
    `Orario inizio Formazione: ${formazioneDom.trainingStartTime?.value || ""}`,
    `Orario fine Formazione: ${formazioneDom.trainingEndTime?.value || ""}`,
    `Relatori: <@1084580275582931044>`,
    `Supervisionato da (Istruttore/Gestore): ${supervisorFormatted}`,
    `Nome cittadini partecipanti: ${normalizeParticipants(formazioneDom.trainingParticipants?.value || "")}`
  ].join("\n");
}

function normalizeParticipants(value) {
  return value.trim();
}

function copyTrainingSummaryToClipboard() {
  const text = formazioneDom.trainingFinalSummary?.value || "";
  if (!text.trim()) {
    alert("Nessun modulo da copiare.");
    return;
  }

  copyTextToClipboard(text)
    .then(() => alert("Modulo finale copiato negli appunti."))
    .catch(() => alert("Impossibile copiare automaticamente. Copialo manualmente dal riquadro."));
}

function saveTrainingState() {
  const payload = {
    trainingDate: formazioneDom.trainingDate?.value || "",
    trainingStartTime: formazioneDom.trainingStartTime?.value || "",
    trainingEndTime: formazioneDom.trainingEndTime?.value || "",
    trainingSupervisorId: formazioneDom.trainingSupervisorId?.value || "",
    trainingParticipants: formazioneDom.trainingParticipants?.value || "",
    scores: {},
    notes: {}
  };

  document.querySelectorAll(".training-score-select").forEach(select => {
    payload.scores[select.dataset.trainingQuestionId] = select.value;
  });

  document.querySelectorAll(".training-note-input").forEach(input => {
    payload.notes[input.dataset.trainingQuestionId] = input.value;
  });

  localStorage.setItem(FORMAZIONE_STORAGE_KEY, JSON.stringify(payload));
}

function loadTrainingSavedState() {
  const raw = localStorage.getItem(FORMAZIONE_STORAGE_KEY);
  if (!raw) return;

  try {
    const data = JSON.parse(raw);

    if (formazioneDom.trainingDate) formazioneDom.trainingDate.value = data.trainingDate || "";
    if (formazioneDom.trainingStartTime) formazioneDom.trainingStartTime.value = data.trainingStartTime || "";
    if (formazioneDom.trainingEndTime) formazioneDom.trainingEndTime.value = data.trainingEndTime || "";
    if (formazioneDom.trainingSupervisorId) formazioneDom.trainingSupervisorId.value = data.trainingSupervisorId || "";
    if (formazioneDom.trainingParticipants) formazioneDom.trainingParticipants.value = data.trainingParticipants || "";

    document.querySelectorAll(".training-score-select").forEach(select => {
      const saved = data.scores?.[select.dataset.trainingQuestionId];
      if (saved !== undefined) select.value = saved;
    });

    document.querySelectorAll(".training-note-input").forEach(input => {
      const saved = data.notes?.[input.dataset.trainingQuestionId];
      if (saved !== undefined) input.value = saved;
    });
  } catch (error) {
    console.error("Errore nel caricamento del salvataggio formazione:", error);
  }
}

function resetTraining() {
  const confirmReset = confirm("Vuoi davvero resettare completamente la formazione?");
  if (!confirmReset) return;

  localStorage.removeItem(FORMAZIONE_STORAGE_KEY);

  if (formazioneDom.trainingDate) formazioneDom.trainingDate.value = "";
  if (formazioneDom.trainingStartTime) formazioneDom.trainingStartTime.value = "";
  if (formazioneDom.trainingEndTime) formazioneDom.trainingEndTime.value = "";
  if (formazioneDom.trainingSupervisorId) formazioneDom.trainingSupervisorId.value = "";
  if (formazioneDom.trainingParticipants) formazioneDom.trainingParticipants.value = "";

  document.querySelectorAll(".training-score-select").forEach(select => {
    select.value = "0";
  });

  document.querySelectorAll(".training-note-input").forEach(input => {
    input.value = "";
  });

  updateTrainingEverything();
}

/* =========================
   UTILS
========================= */

function createOptions(max) {
  let html = "";
  for (let i = 0; i <= max; i++) {
    html += `<option value="${i}">${i}</option>`;
  }
  return html;
}

function formatDateIT(date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function formatInputDateToIT(value) {
  if (!value) return "";
  const [yyyy, mm, dd] = value.split("-");
  if (!yyyy || !mm || !dd) return value;
  return `${dd}/${mm}/${yyyy}`;
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
