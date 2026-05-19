const scenarios = [
    // --- STUDENT ---
    {
        id: 1,
        title: "Scenario 1 — College Lab",
        text: "A senior asks you to stay late alone in the lab to 'help' with a project, but you feel uncomfortable with the atmosphere.",
        fields: ["Student", "General"],
        choices: [
            { text: "Agree quietly to avoid conflict", score: 0, feedback: "Don't ignore discomfort. Safety first.", type: "bad" },
            { text: "Suggest finishing it tomorrow", score: 2, feedback: "Good boundary setting.", type: "good" },
            { text: "Inform your supervisor/teacher", score: 3, feedback: "Excellent. Seeking oversight is best.", type: "good" }
        ]
    },
    {
        id: 2,
        title: "Scenario 2 — Coaching Center",
        text: "Your tutor suggests an individual session at their home instead of the coaching center.",
        fields: ["Student"],
        choices: [
            { text: "Go alone to get the help", score: 0, feedback: "Private home sessions can be risky. Prioritize public spaces.", type: "bad" },
            { text: "Ask if a friend can join you", score: 2, feedback: "Better, but maintaining professional spaces is safer.", type: "neutral" },
            { text: "Insist on meeting at the center or a public library", score: 3, feedback: "Perfect. Keep academic work in academic spaces.", type: "good" }
        ]
    },
    {
        id: 3,
        title: "Scenario 3 — hostel Life",
        text: "A senior enters your room without knocking and starts looking through your personal belongings.",
        fields: ["Student"],
        choices: [
            { text: "Let them do it to stay in their good books", score: 0, feedback: "Your personal space is yours. Respect is earned, not taken.", type: "bad" },
            { text: "Ask them to stop politely", score: 2, feedback: "Good. Identifying the boundary is the first step.", type: "good" },
            { text: "Firmly state that your belongings are private and report if it continues", score: 3, feedback: "Excellent. Privacy must be respected.", type: "good" }
        ]
    },
    {
        id: 4,
        title: "Scenario 4 — Professor's Joking",
        text: "A professor consistently makes personal or suggestive jokes about you during class.",
        fields: ["Student"],
        choices: [
            { text: "Laugh along to avoid bad grades", score: 0, feedback: "Academic power shouldn't be used for harassment.", type: "bad" },
            { text: "Avoid eye contact and stay silent", score: 1, feedback: "Discomfort is real, but silence may let it continue.", type: "neutral" },
            { text: "Report the behavior to the Internal Complaints Committee (ICC)", score: 3, feedback: "Most effective. Use the official safety channels provided by institutions.", type: "good" }
        ]
    },
    {
        id: 5,
        title: "Scenario 5 — Group Study",
        text: "During a late-night group study, a peer starts touching your hand or shoulder unnecessarily.",
        fields: ["Student", "General"],
        choices: [
            { text: "Ignore it to avoid making things awkward", score: 0, feedback: "Your physical comfort matters more than avoiding 'awkwardness'.", type: "bad" },
            { text: "Shift your position to create distance", score: 2, feedback: "A good non-verbal boundary.", type: "good" },
            { text: "Clear state: 'I'm not comfortable with being touched'", score: 3, feedback: "Strong and clear. Direct communication is powerful.", type: "good" }
        ]
    },

    // --- CORPORATE ---
    {
        id: 6,
        title: "Scenario 6 — Workplace Review",
        text: "During a performance review, your manager makes an inappropriate comment about your appearance.",
        fields: ["Corporate", "General"],
        choices: [
            { text: "Laugh it off to stay 'on their good side'", score: 0, feedback: "Harassment normalized is harassment empowered.", type: "bad" },
            { text: "Redirect to professional topics", score: 2, feedback: "Good redirection.", type: "good" },
            { text: "Document the comment and contact HR", score: 3, feedback: "Smart choice. Paper trails matter.", type: "good" }
        ]
    },
    {
        id: 7,
        title: "Scenario 7 — Mentorship",
        text: "An older colleague offers to 'mentor' you but insists it only happens over drinks late at night.",
        fields: ["Corporate"],
        choices: [
            { text: "Go, as it's good for your career", score: 0, feedback: "True mentorship can happen during work hours or in professional settings.", type: "bad" },
            { text: "Suggest coffee during lunch break instead", score: 3, feedback: "Perfect. Keeps the relationship professional.", type: "good" },
            { text: "Decline without giving a reason", score: 2, feedback: "Your 'No' is enough.", type: "good" }
        ]
    },
    {
        id: 8,
        title: "Scenario 8 — Carpooling",
        text: "A colleagues offers you a ride home but keeps asking intrusive questions about your relationship status.",
        fields: ["Corporate", "General"],
        choices: [
            { text: "Answer to be polite", score: 0, feedback: "You don't owe anyone personal details for a ride.", type: "bad" },
            { text: "Change the subject to work or traffic", score: 2, feedback: "A polite way to set a boundary.", type: "good" },
            { text: "Politely decline future rides and use your own transport", score: 3, feedback: "Best for long-term safety and peace.", type: "good" }
        ]
    },
    {
        id: 9,
        title: "Scenario 9 — Office Party",
        text: "At a team outing, colleagues are pressuring you to drink more than you want to.",
        fields: ["Corporate", "General"],
        choices: [
            { text: "Drink to fit in", score: 0, feedback: "Never compromise your limits for peer pressure.", type: "bad" },
            { text: "Hold a drink but don't sip it", score: 1, feedback: "A temporary fix, but doesn't address the pressure.", type: "neutral" },
            { text: "Firmly state your limit and stick to it", score: 3, feedback: "Excellent. Integrity over peer pressure.", type: "good" }
        ]
    },
    {
        id: 10,
        title: "Scenario 10 — Slack/Teams DMs",
        text: "A colleague sends you 'friendly' but flirtatious GIFs and jokes on official chat late at night.",
        fields: ["Corporate", "Remote"],
        choices: [
            { text: "Reply with similar energy to be 'cool'", score: 0, feedback: "This can be used against you later. Keep chats professional.", type: "bad" },
            { text: "Read and don't reply until morning", score: 2, feedback: "Good digital distancing.", type: "good" },
            { text: "Remind them that this is a professional channel", score: 3, feedback: "Perfect. Re-establishing professional norms is key.", type: "good" }
        ]
    },

    // --- HEALTHCARE ---
    {
        id: 11,
        title: "Scenario 11 — Bedside Manners",
        text: "A patient starts asking very personal questions about your dating life during a consultation.",
        fields: ["Healthcare"],
        choices: [
            { text: "Answer briefly to keep them happy", score: 0, feedback: "Maintain the professional-patient boundary.", type: "bad" },
            { text: "Redirect to their health concerns", score: 2, feedback: "Standard and effective.", type: "good" },
            { text: "State: 'I prefer to focus on your care today'", score: 3, feedback: "The professional gold standard.", type: "good" }
        ]
    },
    {
        id: 12,
        title: "Scenario 12 — Night Shift",
        text: "A senior doctor asks you to do their personal paperwork in a secluded room during your night shift break.",
        fields: ["Healthcare"],
        choices: [
            { text: "Do it to avoid being blacklisted", score: 0, feedback: "Hierarchy shouldn't be used for personal errands or isolation.", type: "bad" },
            { text: "Say you have patient rounds to attend to", score: 2, feedback: "A safe professional excuse.", type: "good" },
            { text: "Politely decline and stay in the staff room", score: 3, feedback: "Best. Stay in well-lit, populated areas during breaks.", type: "good" }
        ]
    },
    {
        id: 13,
        title: "Scenario 13 — Patient Gifts",
        text: "A patient insists on giving you an expensive jewelry gift to show 'appreciation'.",
        fields: ["Healthcare"],
        choices: [
            { text: "Accept it to keep them happy", score: 0, feedback: "Expensive gifts create ethical conflicts and blur boundaries.", type: "bad" },
            { text: "Explain the hospital policy against gifts", score: 3, feedback: "Best approach. Use policy as your shield.", type: "good" },
            { text: "Tell them to give it to the hospital instead", score: 2, feedback: "Good redirection.", type: "good" }
        ]
    },
    {
        id: 14,
        title: "Scenario 14 — Bedside Exams",
        text: "A colleague insists on performing a sensitive physical exam on a patient without a proper chaperone present.",
        fields: ["Healthcare"],
        choices: [
            { text: "Stay silent as they are senior", score: 0, feedback: "Chaperone policies protect both patients and staff.", type: "bad" },
            { text: "Volunteer to be the chaperone yourself", score: 3, feedback: "Excellent. You are ensuring safety and protocol.", type: "good" },
            { text: "Remind them of the protocol", score: 2, feedback: "Good, but ensure the chaperone is actually present.", type: "good" }
        ]
    },

    // --- RETAIL ---
    {
        id: 15,
        title: "Scenario 15 — Hand Touching",
        text: "A customer touches your hand unnecessarily every time you hand them their change.",
        fields: ["Retail"],
        choices: [
            { text: "Say nothing", score: 0, feedback: "Your personal space is valid.", type: "bad" },
            { text: "Place change on the counter", score: 2, feedback: "Good environmental modification.", type: "good" },
            { text: "Firmly request contactless transaction", score: 3, feedback: "Strongest boundary.", type: "good" }
        ]
    },
    {
        id: 16,
        title: "Scenario 16 — Closing Shift",
        text: "A customer lingers in the store after closing time and starts asking what time you walk to the station.",
        fields: ["Retail", "General"],
        choices: [
            { text: "Tell them the truth to be helpful", score: 0, feedback: "Never share your travel schedule with strangers.", type: "bad" },
            { text: "Say 'I'm not sure' and move to a back room", score: 2, feedback: "Good, but alert security or a coworker.", type: "neutral" },
            { text: "Inform them the store is closed and alert floor security immediately", score: 3, feedback: "Safety first. Don't handle suspicious lingering alone.", type: "good" }
        ]
    },
    {
        id: 17,
        title: "Scenario 17 — Inventory Check",
        text: "Your manager asks you to check inventory in a poorly lit, remote basement alone at night.",
        fields: ["Retail"],
        choices: [
            { text: "Go to show you're a hard worker", score: 0, feedback: "Hazardous or isolated tasks should not be done alone.", type: "bad" },
            { text: "Ask a coworker to come with you", score: 3, feedback: "Safety in numbers is a smart rule.", type: "good" },
            { text: "Suggest doing it during daylight/morning hours", score: 2, feedback: "Good logical boundary.", type: "good" }
        ]
    },

    // --- FREELANCER & REMOTE ---
    {
        id: 18,
        title: "Scenario 18 — Client Meetings",
        text: "A potential client insists on meeting at their private apartment to discuss the project.",
        fields: ["Freelancer"],
        choices: [
            { text: "Go, you need the contract", score: 0, feedback: "Always meet in public spaces (cafes, libraries) for first meetings.", type: "bad" },
            { text: "Suggest a Zoom or Teams call instead", score: 3, feedback: "Modern and safe. Perfect.", type: "good" },
            { text: "Ask if you can bring a partner along", score: 2, feedback: "Better, but public spaces are still preferred.", type: "good" }
        ]
    },
    {
        id: 19,
        title: "Scenario 19 — Scope Creep",
        text: "A client asks for your personal WhatsApp number for 'faster updates' then starts sending personal messages.",
        fields: ["Freelancer", "Remote", "RemoteWork"],
        choices: [
            { text: "Reply to keep the client happy", score: 0, feedback: "Boundaries prevent burnout and harassment.", type: "bad" },
            { text: "Mute them and only reply on email", score: 2, feedback: "Effective distancing.", type: "good" },
            { text: "State: 'I use this number for family only, let's stick to our project portal'", score: 3, feedback: "Perfect professional boundary.", type: "good" }
        ]
    },
    {
        id: 20,
        title: "Scenario 20 — Camera Privacy",
        text: "During a remote call, your manager asks you to show them around your room to 'see your living space'.",
        fields: ["Remote", "RemoteWork"],
        choices: [
            { text: "Oblige to be friendly", score: 0, feedback: "Your home is your sanctuary. You don't owe anyone a tour.", type: "bad" },
            { text: "Say your room is a mess and laugh it off", score: 1, feedback: "A soft decline, but might not stop them next time.", type: "neutral" },
            { text: "State: 'I prefer to keep my private living space private'", score: 3, feedback: "Excellent. Use a background blur or filter instead.", type: "good" }
        ]
    },

    // --- HOME BASED / HOMEMAKER (NEW) ---
    {
        id: 21,
        title: "Scenario 21 — Delivery Boundary",
        text: "A delivery person lingers at your door and starts asking if you live alone or if your husband is home.",
        fields: ["HomeBased", "General"],
        choices: [
            { text: "Answer truthfully to be polite", score: 0, feedback: "Never share occupancy details with strangers at your door.", type: "bad" },
            { text: "Say 'Everyone is busy inside' and close the door", score: 3, feedback: "Perfect. Implies you are not alone and ends interaction.", type: "good" },
            { text: "Report the behavior to the delivery app", score: 3, feedback: "Accountability is vital for community safety.", type: "good" }
        ]
    },
    {
        id: 22,
        title: "Scenario 22 — Neighborhood Gossip",
        text: "A group of neighbors consistently questions you about why you don't go out and who visits your home.",
        fields: ["HomeBased"],
        choices: [
            { text: "Explain your life in detail to satisfy them", score: 0, feedback: "You don't owe anyone an explanation for your lifestyle.", type: "bad" },
            { text: "Smile and stay silent", score: 1, feedback: "Sometimes necessary, but doesn't stop the intrusion.", type: "neutral" },
            { text: "Politely state: 'I value my privacy, thank you'", score: 3, feedback: "Direct and dignified. Sets a clear line.", type: "good" }
        ]
    },
    {
        id: 23,
        title: "Scenario 23 — Family Privacy",
        text: "A relative or in-law habitually goes through your phone without asking.",
        fields: ["HomeBased", "General"],
        choices: [
            { text: "Let them do it to avoid family drama", score: 0, feedback: "Privacy is a fundamental right, even within families.", type: "bad" },
            { text: "Set a password and don't share it", score: 3, feedback: "Technical boundaries are the most effective.", type: "good" },
            { text: "Explain that your phone contains private messages", score: 2, feedback: "Communication is good, but back it up with a lock.", type: "good" }
        ]
    },
    {
        id: 24,
        title: "Scenario 24 — Financial Control",
        text: "A family member demands that you hand over all your savings or gifts 'for safekeeping'.",
        fields: ["HomeBased", "General"],
        choices: [
            { text: "Give it all to show you trust them", score: 0, feedback: "Financial independence is a key part of personal safety.", type: "bad" },
            { text: "Offer a small portion but keep the rest", score: 1, feedback: "Might lead to more demands.", type: "neutral" },
            { text: "Keep your finances in a personal account only you can access", score: 3, feedback: "Essential. Your money, your choice.", type: "good" }
        ]
    },
    {
        id: 25,
        title: "Scenario 25 — Restricted Outing",
        text: "You want to visit a friend, but you are told you cannot leave without someone accompanying you.",
        fields: ["HomeBased"],
        choices: [
            { text: "Accept it as 'care'", score: 0, feedback: "Forced accompaniment can be a form of control, not care.", type: "bad" },
            { text: "Try to negotiate staying on the phone while you travel", score: 2, feedback: "A compromise for safety, but autonomy is the goal.", type: "neutral" },
            { text: "Express your need for autonomy and independent movement", score: 3, feedback: "The right and vital step towards independence.", type: "good" }
        ]
    }
];

let currentUser = { age: null, field: "General" };
let activeScenarios = [];
let current = 0;
let totalScore = 0;

// HELPERS
const getEl = (id) => document.getElementById(id);

function startExperience() {
    const age = getEl("user-age").value;
    const field = getEl("user-field").value;

    if (!age || age < 1) {
        alert("Please enter a valid age.");
        return;
    }

    currentUser = { age: parseInt(age), field: field };

    // Filter scenarios based on field
    activeScenarios = scenarios.filter(s => s.fields.includes(field) || s.fields.includes("General"));

    // Sort to prioritize specific field matches over general
    activeScenarios.sort((a, b) => b.fields.includes(field) - a.fields.includes(field));

    getEl("onboarding").classList.add("hidden");
    getEl("about-us").classList.add("hidden");
    getEl("visual-showcase").classList.add("hidden");
    getEl("revolt-section").classList.add("hidden");
    getEl("sidebar").classList.add("hidden");
    document.querySelector(".team-involvement-container").classList.add("hidden");
    document.querySelector(".main-layout").style.gridTemplateColumns = "1fr";

    getEl("progress-bar-container").classList.remove("hidden");
    getEl("scenario-box").classList.remove("hidden");

    current = 0;
    totalScore = 0;
    loadScenario();
}

function updateProgress() {
    const percent = ((current + 1) / activeScenarios.length) * 100;
    getEl("progress-bar").style.width = `${percent}%`;
}

function loadScenario() {
    const s = activeScenarios[current];
    getEl("scenario-title").innerText = `Scenario ${current + 1} of ${activeScenarios.length}`;
    getEl("scenario-text").innerText = s.text;
    getEl("feedback").innerText = "";
    getEl("feedback").className = "";
    getEl("feedback").classList.remove("show");

    getEl("next-btn").disabled = true;
    updateProgress();

    getEl("choices").innerHTML = "";
    s.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.onclick = () => selectChoice(index, btn);
        getEl("choices").appendChild(btn);
    });

    if (window.lucide) lucide.createIcons();
}

function selectChoice(index, selectedBtn) {
    const s = activeScenarios[current];
    const choice = s.choices[index];

    totalScore += choice.score;
    const feedbackEl = getEl("feedback");
    feedbackEl.innerText = choice.feedback;
    feedbackEl.className = "show";

    if (choice.type === "good") feedbackEl.classList.add("feedback-good");
    else if (choice.type === "neutral") feedbackEl.classList.add("feedback-neutral");
    else feedbackEl.classList.add("feedback-bad");

    const buttons = getEl("choices").querySelectorAll("button");
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.6";
        btn.style.cursor = "default";
    });

    selectedBtn.classList.add("selected");
    selectedBtn.style.opacity = "1";
    getEl("next-btn").disabled = false;
}

function nextScenario() {
    current++;
    if (current < activeScenarios.length) {
        loadScenario();
    } else {
        showResult();
    }
}

// --- PERSISTENCE ---
function saveResult(score, max) {
    const results = JSON.parse(localStorage.getItem("awareness_results") || "[]");
    results.push({
        date: new Date().toLocaleDateString(),
        score: score,
        max: max,
        field: currentUser.field
    });
    localStorage.setItem("awareness_results", JSON.stringify(results.slice(-5))); // Keep last 5
}

function showResult() {
    getEl("scenario-box").classList.add("hidden");
    getEl("progress-bar-container").classList.add("hidden");
    getEl("result").classList.remove("hidden");

    const maxScore = activeScenarios.length * 3;
    saveResult(totalScore, maxScore);

    let evalMsg = "";
    let colorClass = "";

    if (totalScore >= (maxScore * 0.8)) {
        evalMsg = "Excellent awareness! You have a profound understanding of personal boundaries and safety. Your intuition is a powerful shield.";
        colorClass = "result-excellent";
    } else if (totalScore >= (maxScore * 0.5)) {
        evalMsg = "Good awareness! You're clearly conscious of your safety, though there's room to be even more assertive in high-pressure situations.";
        colorClass = "result-good";
    } else {
        evalMsg = "It sounds like you're still learning to navigate complex boundaries. That's okay—every step you take here is a step toward greater safety and confidence.";
        colorClass = "result-learning";
    }

    const resultHTML = `
        <div class="result-card-premium ${colorClass}">
            <div class="result-score">
                <span class="big-score">${totalScore}</span>
                <span class="max-score">/ ${maxScore}</span>
            </div>
            <h3>Your Personalized Summary</h3>
            <p class="result-intro">Hello there, as a <strong>${currentUser.age}</strong> year old in the <strong>${currentUser.field}</strong> field, here is our assessment of your journey:</p>
            <div class="result-message">${evalMsg}</div>
            
            <div class="result-advice">
                <h4>Next Steps for You:</h4>
                <ul>
                    <li>Trust your gut—it's usually right.</li>
                    <li>Document any discomfort in professional settings.</li>
                    <li>Keep our helpline (9341-854-494) saved.</li>
                </ul>
            </div>
        </div>
    `;

    getEl("score-text").innerHTML = resultHTML;
}

function openConsultation() {
    getEl("result").classList.add("hidden");
    getEl("consultation").classList.remove("hidden");
}

function backToResult() {
    getEl("consultation").classList.add("hidden");
    getEl("result").classList.remove("hidden");
}

function getFrontHelp() {
    const problem = getEl("front-issue").value;
    const responseEl = getEl("front-guidance");

    if (!problem.trim()) {
        alert("Please describe your worry first. We are here to listen.");
        return;
    }

    responseEl.classList.remove("hidden");
    responseEl.innerHTML = '<div class="typing-loader">Gathering guidance...</div>';

    setTimeout(() => {
        let advice = "";
        const p = problem.toLowerCase();

        if (p.includes("touch") || p.includes("physical") || p.includes("grab")) {
            advice = "Immediate Safety Action: Physical boundaries are non-negotiable. If you feel unsafe, remove yourself from the environment immediately. Your safety is a fundamental right, never a favor to be traded.";
        } else if (p.includes("money") || p.includes("pay") || p.includes("loan") || p.includes("salary")) {
            advice = "Financial Boundary Advice: You have absolute right to your earnings and savings. Any pressure to 'hand over' money is a form of control. Document these requests and seek independent financial advice.";
        } else if (p.includes("phone") || p.includes("spy") || p.includes("watch") || p.includes("password")) {
            advice = "Digital Privacy Alert: Unsolicited surveillance is a violation. Secure your devices with new passwords. If you suspect tracking apps, please use a secure device to call our helpline.";
        } else if (p.includes("home") || p.includes("leave") || p.includes("lock")) {
            advice = "Movement Alert: Forced isolation is a serious red flag. If your movement is being restricted, please reach out to local authorities or our 24/7 helpline at 9341-854-494 for a safe exit plan.";
        } else {
            advice = "Trust your intuition. If a situation feels 'off', it likely is. We suggest documenting specific incidents (dates, times, words used) and calling our helpline for a confidential, structured talk.";
        }

        responseEl.innerHTML = `
            <div class="guidance-content-premium fade-in">
                <p><strong>Heartfelt Guidance:</strong> ${advice}</p>
                <div class="guidance-footer">
                    <span>Our help desk is open 24/7 for you.</span>
                    <a href="tel:9341854494" class="call-btn-mini">Call 9341-854-494</a>
                </div>
            </div>
        `;
    }, 800);
}

function restart() {
    currentUser = { age: null, field: "General" };
    getEl("onboarding").classList.remove("hidden");
    getEl("about-us").classList.remove("hidden");
    getEl("visual-showcase").classList.remove("hidden");
    getEl("revolt-section").classList.remove("hidden");
    getEl("sidebar").classList.remove("hidden");
    document.querySelector(".team-involvement-container").classList.remove("hidden");
    document.querySelector(".main-layout").style.gridTemplateColumns = "";

    getEl("result").classList.add("hidden");
    getEl("scenario-box").classList.add("hidden");
    getEl("progress-bar-container").classList.add("hidden");
    getEl("front-issue").value = "";
    getEl("front-guidance").classList.add("hidden");

    // Smooth scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

