import { SpeedInsights } from "@vercel/speed-insights/next"

const LEARNSITE_TRACKS = [
    {
        id: "dsa",
        name: "DSA",
        heading: "Data Structures and Algorithms",
        summary: "Build problem-solving intuition, learn repeatable patterns, and practice with a stronger revision loop.",
        accent: "coral",
    },
    {
        id: "rag",
        name: "RAG",
        heading: "Retrieval-Augmented Generation",
        summary: "Move from fundamentals to production thinking across retrieval, evaluation, generation, and systems design.",
        accent: "teal",
    },
    {
        id: "software-engineering",
        name: "Software Engineering",
        heading: "Software Engineering",
        summary: "Review requirements, modeling, process, and documentation topics in a cleaner study flow.",
        accent: "gold",
    },
];

const LEARNSITE_LESSONS = [
    {
        id: "dsa-paradigms",
        title: "DSA Paradigms",
        href: "DSA/paradigms.html",
        track: "dsa",
        level: "Beginner",
        minutes: 25,
        description: "Learn the thinking frameworks behind DSA problems before picking a concrete pattern.",
        tags: ["problem framing", "greedy", "dfs bfs", "dynamic programming"],
    },
    {
        id: "dsa-patterns",
        title: "DSA Patterns",
        href: "DSA/patterns.html",
        track: "dsa",
        level: "Beginner",
        minutes: 60,
        description: "Work through interactive DSA pattern lessons with examples, code, and guided walkthroughs.",
        tags: ["sliding window", "two pointers", "trees", "graphs"],
    },
    {
        id: "dsa-cheat-sheet",
        title: "DSA Cheat Sheet",
        href: "DSA/Sheet.html",
        track: "dsa",
        level: "Intermediate",
        minutes: 45,
        description: "Use a dense review sheet covering major patterns, complexity, signals, and example problems.",
        tags: ["reference", "complexity", "review", "interview prep"],
    },
    {
        id: "dsa-roadmap",
        title: "LeetCode Pattern Roadmap",
        href: "DSA/leetcode-patterns.html",
        track: "dsa",
        level: "Intermediate",
        minutes: 35,
        description: "Jump directly from pattern names to curated LeetCode problem sets for focused drilling.",
        tags: ["leetcode", "practice set", "roadmap", "drills"],
    },
    {
        id: "rag-patterns",
        title: "RAG Patterns",
        href: "Rag/rag.html",
        track: "rag",
        level: "Intermediate",
        minutes: 75,
        description: "Study retrieval, chunking, evaluation, generation, and production patterns for real RAG systems.",
        tags: ["retrieval", "evaluation", "generation", "production"],
    },
    {
        id: "se-unit-1",
        title: "Software Engineering Unit 1",
        href: "Software%20Engineering/unit%201.html",
        track: "software-engineering",
        level: "Beginner",
        minutes: 50,
        description: "Revise software processes, fundamentals, and core concepts with interactive unit notes.",
        tags: ["foundations", "lifecycle", "process", "notes"],
    },
    {
        id: "se-unit-2",
        title: "Software Engineering Unit 2",
        href: "Software%20Engineering/unit%202.html",
        track: "software-engineering",
        level: "Intermediate",
        minutes: 50,
        description: "Review requirements engineering, SRS structure, and system modeling in a guided format.",
        tags: ["requirements", "srs", "uml", "modeling"],
    },
];

const LEARNSITE_TRACK_PATHS = {
    dsa: [
        { lessonId: "dsa-paradigms", label: "Think", title: "Paradigms" },
        { lessonId: "dsa-patterns", label: "Learn", title: "Patterns" },
        { lessonId: "dsa-cheat-sheet", label: "Review", title: "Cheat Sheet" },
        { lessonId: "dsa-roadmap", label: "Drill", title: "Roadmap" },
    ],
};

const LEARNSITE_LABS = {
    "dsa-paradigms": {
        intro: "Use this page to sharpen recognition. The goal is not to memorize names, but to notice the clues that point you toward the right approach.",
        recap: [
            "Paradigms are ways of thinking about a problem before you commit to a concrete pattern or data structure.",
            "Clues such as repeated states, shortest paths, or monotonic feasibility often tell you which approach fits.",
            "A good first question is not “what code do I write?” but “what structure does this problem hide?”",
        ],
        next: "After this, move into DSA Patterns so you can map these mental models to specific implementation techniques.",
        quiz: [
            {
                question: "If a problem asks for the minimum number of moves in an unweighted graph, which paradigm should you test first?",
                options: ["Depth-first search", "Breadth-first search", "Greedy sorting", "Bit manipulation"],
                answer: 1,
                explain: "BFS explores by layers, so in an unweighted graph it naturally gives the shortest number of steps.",
            },
            {
                question: "Which clue most strongly suggests dynamic programming?",
                options: ["A problem about connectivity only", "The same smaller state appears again and again", "You only need the next greater element", "The array is already sorted"],
                answer: 1,
                explain: "DP becomes attractive when subproblems overlap and recomputing the same state wastes work.",
            },
            {
                question: "Binary search on answer is usually valid when:",
                options: ["The answer space is monotonic under a fast check", "The input is a tree", "Every solution must be generated", "The problem mentions recursion"],
                answer: 0,
                explain: "You need a yes/no feasibility check where answers flip once from impossible to possible or the reverse.",
            },
        ],
    },
    "dsa-patterns": {
        intro: "This page is your implementation bridge. Once you know the pattern signals, the goal is to connect them to code templates and common problem families.",
        recap: [
            "Patterns compress many interview problems into a smaller set of reusable solution shapes.",
            "The strongest signal usually comes from the problem structure: contiguous range, sorted scan, hierarchy, repeated extraction, or state reuse.",
            "The real win comes from learning when a pattern does not fit, not just when it does.",
        ],
        next: "Use the cheat sheet for quick review or jump into the LeetCode roadmap when you want deliberate pattern practice.",
        quiz: [
            {
                question: "Which pattern is the best first guess for a substring problem with a moving constraint on unique characters?",
                options: ["Sliding window", "Union find", "K-way merge", "Tree DFS"],
                answer: 0,
                explain: "Sliding window is built for contiguous subarrays or substrings where the range can expand and shrink in one pass.",
            },
            {
                question: "What pattern usually handles “next greater element” style problems most directly?",
                options: ["Prefix sum", "Monotonic stack", "Backtracking", "Two heaps"],
                answer: 1,
                explain: "Monotonic stacks keep candidates in useful order so each item is pushed and popped at most once.",
            },
            {
                question: "If you repeatedly need the smallest current candidate across many sorted sources, which pattern fits?",
                options: ["In-place reversal", "K-way merge", "Fast and slow pointers", "Bitwise XOR"],
                answer: 1,
                explain: "K-way merge uses a heap to track the smallest frontier item across several sorted streams.",
            },
        ],
    },
    "dsa-cheat-sheet": {
        intro: "Treat the cheat sheet as a compression tool, not your first exposure. It is strongest after you already understand the patterns once.",
        recap: [
            "A cheat sheet is best for recall: signals, complexity, template reminders, and pattern-to-problem mapping.",
            "When two patterns seem plausible, the deciding clue is usually the input shape and the kind of answer required.",
            "Use dense review material after guided lessons, then move quickly into active problem solving.",
        ],
        next: "Pair this with the roadmap page and solve two or three problems from the same pattern before switching categories.",
        quiz: [
            {
                question: "What is the best use of a dense DSA cheat sheet?",
                options: ["Replacing all guided learning", "Quick review after you already know the basics", "Learning recursion from zero", "Avoiding practice entirely"],
                answer: 1,
                explain: "Cheat sheets are strongest as review tools because they compress information instead of teaching it from first principles.",
            },
            {
                question: "If you need the shortest path in an unweighted tree or graph, what should you think of first?",
                options: ["BFS", "Backtracking", "Prefix sum", "Bit masking"],
                answer: 0,
                explain: "BFS explores by distance layers, so it is the natural shortest-path tool for unweighted edges.",
            },
            {
                question: "Which bitwise idea relies on pair cancellation in constant space?",
                options: ["Prefix sum", "XOR", "Merge intervals", "Union find"],
                answer: 1,
                explain: "XOR cancels equal pairs, which is why it shows up in single-number style problems.",
            },
        ],
    },
    "dsa-roadmap": {
        intro: "The roadmap is for focused drilling. Stay within one pattern long enough to notice its recurring shape instead of solving random problems back to back.",
        recap: [
            "Pattern practice works best when you keep the signal and the solution shape in your head at the same time.",
            "Solve easier problems first so you can notice the pattern before complexity gets in the way.",
            "Roadmaps are not just lists; they are sequencing tools for deliberate repetition.",
        ],
        next: "Pick one pattern and solve two starter problems plus one stretch problem before switching to another track.",
        quiz: [
            {
                question: "What is the main value of a pattern roadmap?",
                options: ["It removes the need to understand the pattern", "It groups practice around one solution shape", "It replaces all notes", "It guarantees interview questions"],
                answer: 1,
                explain: "The roadmap helps you reinforce one family of ideas repeatedly instead of scattering your practice.",
            },
            {
                question: "Which pattern would you most likely practice through problems like 3Sum?",
                options: ["Two pointers", "Union find", "Tree BFS", "Bitwise XOR"],
                answer: 0,
                explain: "3Sum typically combines sorting with two-pointer scanning inside a fixed outer loop.",
            },
            {
                question: "Coin Change belongs most naturally to which broad pattern family?",
                options: ["Monotonic stack", "Dynamic programming", "In-place reversal", "K-way merge"],
                answer: 1,
                explain: "Coin Change is a classic DP problem because the same smaller amount states repeat across choices.",
            },
        ],
    },
    "rag-patterns": {
        intro: "A good RAG system is not just prompt + vector DB. Retrieval quality, evaluation discipline, and production behavior matter just as much as answer generation.",
        recap: [
            "Retrieval is part of the model behavior: bad chunks or weak ranking often create bad answers before generation even starts.",
            "Chunking, embeddings, reranking, and prompt structure should be treated as connected design decisions.",
            "Evaluation and observability are not optional if you want a RAG system that stays trustworthy in production.",
        ],
        next: "After this page, pick one layer to deepen next: chunking quality, retrieval evaluation, or production monitoring.",
        quiz: [
            {
                question: "If answers are often ungrounded even though the prompt looks fine, what should you inspect first?",
                options: ["Only the button styling", "Retrieval quality and context selection", "The user’s browser cache", "Whether the page title is short"],
                answer: 1,
                explain: "Weak retrieval or irrelevant context often causes hallucination before the generation step even begins.",
            },
            {
                question: "What is chunking trying to balance?",
                options: ["Only color and typography", "Context quality versus retrieval precision and recall", "Database schema versus CSS", "Prompt length versus image size"],
                answer: 1,
                explain: "Chunks that are too small lose context, while chunks that are too large can dilute relevance and hurt retrieval.",
            },
            {
                question: "Which category tells you whether an answer is actually grounded in retrieved evidence?",
                options: ["Faithfulness or evaluation metrics", "Animation timing", "Client-side routing", "Tree traversal order"],
                answer: 0,
                explain: "Groundedness and faithfulness checks help you measure whether the answer is supported by the retrieved material.",
            },
        ],
    },
    "se-unit-1": {
        intro: "Unit 1 is about foundations: why software engineering exists, how disciplined process reduces failure, and how lifecycle models shape real development work.",
        recap: [
            "Software engineering is about systematic development, not just writing code until something works.",
            "Lifecycle models exist because different project conditions need different planning, feedback, and risk handling.",
            "The “software crisis” pushed the discipline toward better process, quality control, and maintainable systems.",
        ],
        next: "Once the process foundations are clear, move into Unit 2 for requirements, SRS structure, and system modeling.",
        quiz: [
            {
                question: "Which model is usually easier to justify when requirements are stable and change is limited?",
                options: ["Waterfall", "Spiral", "Random coding", "Only prototyping"],
                answer: 0,
                explain: "Waterfall is most comfortable when requirements are clear early and the project can move in a structured sequence.",
            },
            {
                question: "Which lifecycle model is especially focused on identifying and reducing risk?",
                options: ["Spiral", "Binary search", "Top-k selection", "Prefix sum"],
                answer: 0,
                explain: "The Spiral model explicitly centers risk analysis and iterative refinement.",
            },
            {
                question: "Why did software engineering become a formal discipline?",
                options: ["Because all software was already easy to maintain", "To address recurring project failure, cost, and quality problems", "Only to make UML diagrams", "To avoid teamwork"],
                answer: 1,
                explain: "The software crisis revealed that ad hoc development led to late, fragile, and expensive systems.",
            },
        ],
    },
    "se-unit-2": {
        intro: "Unit 2 shifts from process into precision. Requirements and models are valuable because they make software behavior communicable, testable, and reviewable.",
        recap: [
            "Requirements must be clear enough to validate and specific enough to guide implementation.",
            "An SRS is a structured agreement about what the system should do and the qualities it must satisfy.",
            "Models such as context, behavioral, and data models make complex systems easier to reason about with stakeholders.",
        ],
        next: "Use this as a base for revision: requirements first, then SRS structure, then the modeling views that make the system easier to explain.",
        quiz: [
            {
                question: "What is the main purpose of an SRS document?",
                options: ["To replace all testing", "To define agreed system requirements precisely", "To store source code", "To avoid discussing users"],
                answer: 1,
                explain: "The SRS exists so stakeholders have a clear, reviewable statement of required behavior and constraints.",
            },
            {
                question: "What does a context model mainly show?",
                options: ["Only the database schema", "The system boundary and external interactions", "The team hierarchy", "The final UI colors"],
                answer: 1,
                explain: "Context models focus on what sits outside the system and how the system interacts with it.",
            },
            {
                question: "A requirement like “the system should respond within two seconds” is primarily:",
                options: ["Functional", "Non-functional", "A use case actor", "A deployment diagram"],
                answer: 1,
                explain: "Response time is a system quality constraint, so it is a non-functional requirement.",
            },
        ],
    },
};

const LEARNSITE_STORAGE_KEY = "learnsite-progress-v1";
const LEARNSITE_DOCK_STORAGE_KEY = "learnsite-dock-collapsed-v1";

function learnsiteGetProgress() {
    try {
        const raw = window.localStorage.getItem(LEARNSITE_STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : {};
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
        return {};
    }
}

function learnsiteSaveProgress(progress) {
    try {
        window.localStorage.setItem(LEARNSITE_STORAGE_KEY, JSON.stringify(progress));
    } catch {
        // Ignore storage failures and keep the experience usable.
    }
}

function learnsiteToggleProgress(lessonId) {
    const progress = learnsiteGetProgress();
    progress[lessonId] = !progress[lessonId];
    learnsiteSaveProgress(progress);
    document.dispatchEvent(new CustomEvent("learnsite:progress-changed", { detail: { lessonId } }));
}

function learnsiteGetDockCollapsed() {
    try {
        const raw = window.localStorage.getItem(LEARNSITE_DOCK_STORAGE_KEY);
        if (raw === null) {
            return window.innerWidth <= 640;
        }
        return raw === "true";
    } catch {
        return false;
    }
}

function learnsiteSaveDockCollapsed(value) {
    try {
        window.localStorage.setItem(LEARNSITE_DOCK_STORAGE_KEY, String(Boolean(value)));
    } catch {
        // Ignore storage failures.
    }
}

function learnsiteTrackById(trackId) {
    return LEARNSITE_TRACKS.find((track) => track.id === trackId);
}

function learnsiteTrackPath(trackId) {
    return LEARNSITE_TRACK_PATHS[trackId] || null;
}

function learnsiteLessonById(lessonId) {
    return LEARNSITE_LESSONS.find((lesson) => lesson.id === lessonId);
}

function learnsiteTrackLessons(trackId) {
    return LEARNSITE_LESSONS.filter((lesson) => lesson.track === trackId);
}

function learnsiteCompletedCount(progress) {
    return LEARNSITE_LESSONS.filter((lesson) => progress[lesson.id]).length;
}

function learnsiteFirstIncomplete(trackId) {
    const progress = learnsiteGetProgress();
    const lessons = trackId ? learnsiteTrackLessons(trackId) : LEARNSITE_LESSONS;
    return lessons.find((lesson) => !progress[lesson.id]) || lessons[0] || null;
}

function learnsiteNextLesson(lessonId) {
    const currentIndex = LEARNSITE_LESSONS.findIndex((lesson) => lesson.id === lessonId);
    if (currentIndex === -1 || currentIndex === LEARNSITE_LESSONS.length - 1) {
        return null;
    }
    return LEARNSITE_LESSONS[currentIndex + 1];
}

function learnsiteProgressPercent(done, total) {
    return total ? Math.round((done / total) * 100) : 0;
}

function learnsiteTrackSummary(trackId, progress) {
    const lessons = learnsiteTrackLessons(trackId);
    const completed = lessons.filter((lesson) => progress[lesson.id]).length;
    return {
        lessons,
        completed,
        percent: learnsiteProgressPercent(completed, lessons.length),
        totalMinutes: lessons.reduce((sum, lesson) => sum + lesson.minutes, 0),
        next: lessons.find((lesson) => !progress[lesson.id]) || null,
    };
}

function learnsiteLibraryMinutes() {
    return LEARNSITE_LESSONS.reduce((sum, lesson) => sum + lesson.minutes, 0);
}

function learnsiteFormatMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    if (!hours) {
        return `${minutes} min`;
    }
    if (!remainder) {
        return `${hours}h`;
    }
    return `${hours}h ${remainder}m`;
}

function learnsiteLessonHref(siteRoot, lesson) {
    return `${siteRoot}/${lesson.href}`;
}

function learnsiteStatMarkup(value, label) {
    return `
        <article class="hub-stat">
            <strong>${value}</strong>
            <span class="hub-stat-label">${label}</span>
        </article>
    `;
}

function learnsitePathMarkup(trackId, currentLessonId, siteRoot, progress, eyebrow) {
    const path = learnsiteTrackPath(trackId);
    if (!path || !path.length) {
        return "";
    }

    return `
        <div class="hub-path">
            ${eyebrow ? `<span class="hub-path-eyebrow">${eyebrow}</span>` : ""}
            <div class="hub-path-steps">
                ${path.map((step, index) => {
                    const lesson = learnsiteLessonById(step.lessonId);
                    const isCurrent = currentLessonId === step.lessonId;
                    const isDone = lesson ? Boolean(progress[lesson.id]) : false;
                    const href = lesson ? learnsiteLessonHref(siteRoot, lesson) : "#";
                    return `
                        <a class="hub-path-step ${isCurrent ? "is-current" : ""} ${isDone ? "is-done" : ""}" href="${href}">
                            <span class="hub-path-order">${String(index + 1).padStart(2, "0")}</span>
                            <div class="hub-path-copy">
                                <strong>${step.label}</strong>
                                <span>${step.title}</span>
                            </div>
                        </a>
                    `;
                }).join("")}
            </div>
        </div>
    `;
}

function learnsiteModeCardMarkup(mode, siteRoot) {
    const lesson = learnsiteLessonById(mode.lessonId);
    const href = lesson ? learnsiteLessonHref(siteRoot, lesson) : "#tracks";
    const label = mode.buttonLabel || "Open";
    return `
        <article class="hub-study-card">
            <span class="hub-study-eyebrow">${mode.eyebrow}</span>
            <h3>${mode.title}</h3>
            <p>${mode.description}</p>
            <div class="hub-tags">${mode.tags.map((tag) => `<span class="hub-tag">${tag}</span>`).join("")}</div>
            <div class="hub-card-actions">
                <a class="hub-btn hub-btn-primary" href="${href}">${label}</a>
                ${lesson ? `<button class="hub-btn hub-btn-ghost hub-btn-complete ${mode.done ? "is-done" : ""}" type="button" data-toggle-complete="${lesson.id}">${mode.done ? "Completed" : "Mark complete"}</button>` : ""}
            </div>
        </article>
    `;
}

function learnsiteLessonCardMarkup(lesson, siteRoot, progress) {
    const done = Boolean(progress[lesson.id]);
    return `
        <article class="hub-card">
            <div class="hub-card-top">
                <span class="hub-level" data-level="${lesson.level}">${lesson.level}</span>
                <span class="hub-time">${lesson.minutes} min</span>
            </div>
            <h4>${lesson.title}</h4>
            <p>${lesson.description}</p>
            <div class="hub-tags">${lesson.tags.map((tag) => `<span class="hub-tag">${tag}</span>`).join("")}</div>
            <div class="hub-card-actions">
                <a class="hub-btn hub-btn-primary" href="${learnsiteLessonHref(siteRoot, lesson)}">Open lesson</a>
                <button class="hub-btn hub-btn-ghost hub-btn-complete ${done ? "is-done" : ""}" type="button" data-toggle-complete="${lesson.id}">
                    ${done ? "Completed" : "Mark complete"}
                </button>
            </div>
        </article>
    `;
}

function learnsiteTrackMarkup(track, lessons, siteRoot, progress) {
    const summary = learnsiteTrackSummary(track.id, progress);
    const shownMinutes = lessons.reduce((sum, lesson) => sum + lesson.minutes, 0);
    return `
        <section class="hub-track" data-accent="${track.accent}">
            <div class="hub-track-head">
                <div class="hub-track-title">
                    <span class="hub-track-pill">${track.name}</span>
                    <h3>${track.heading}</h3>
                    <p>${track.summary}</p>
                    <div class="hub-track-meta">
                        <span class="hub-track-chip">${lessons.length} lesson${lessons.length === 1 ? "" : "s"} shown</span>
                        <span class="hub-track-chip">${learnsiteFormatMinutes(shownMinutes)}</span>
                        <span class="hub-track-chip">${summary.next ? `Next: ${summary.next.title}` : "Track complete"}</span>
                    </div>
                </div>
                <div class="hub-track-progress">
                    <div class="hub-progress-meta">
                        <span>${summary.completed}/${summary.lessons.length} complete</span>
                        <span>${summary.percent}%</span>
                    </div>
                    <div class="hub-progress-bar"><span style="width:${summary.percent}%"></span></div>
                </div>
            </div>
            ${learnsitePathMarkup(track.id, null, siteRoot, progress, track.id === "dsa" ? "Recommended DSA flow" : "")}
            <div class="hub-card-grid">${lessons.map((lesson) => learnsiteLessonCardMarkup(lesson, siteRoot, progress)).join("")}</div>
        </section>
    `;
}

function learnsiteProgressBoardMarkup(siteRoot, progress) {
    return LEARNSITE_TRACKS.map((track) => {
        const summary = learnsiteTrackSummary(track.id, progress);
        const href = summary.next ? learnsiteLessonHref(siteRoot, summary.next) : "#tracks";
        const label = summary.next ? `Continue with ${summary.next.title}` : "Review this track";
        return `
            <article class="hub-progress-card">
                <span class="hub-study-eyebrow">${track.name}</span>
                <h3>${track.heading}</h3>
                <p>${summary.completed} of ${summary.lessons.length} lessons completed. Total track time: ${learnsiteFormatMinutes(summary.totalMinutes)}.</p>
                <div class="hub-progress-bar"><span style="width:${summary.percent}%"></span></div>
                <a class="hub-progress-link" href="${href}">${label}</a>
            </article>
        `;
    }).join("");
}

function learnsiteCommandMarkup(siteRoot, progress) {
    const completed = learnsiteCompletedCount(progress);
    const percent = learnsiteProgressPercent(completed, LEARNSITE_LESSONS.length);
    const focus = learnsiteFirstIncomplete();
    const focusTrack = focus ? learnsiteTrackById(focus.track) : null;

    return `
        <div class="hub-command-card">
            <div class="hub-command-head">
                <div>
                    <span class="hub-command-kicker">${focus ? "Resume from here" : "Library complete"}</span>
                    <h2>${focus ? focus.title : "You finished the full library"}</h2>
                </div>
                <span class="hub-command-badge">${focusTrack ? focusTrack.name : "Review"}</span>
            </div>
            <p>${focus ? focus.description : "Everything is marked complete. Reopen any lesson below when you want to review."}</p>
            <div class="hub-command-metrics">
                ${focus ? `<span class="hub-level" data-level="${focus.level}">${focus.level}</span>` : ""}
                ${focus ? `<span class="hub-time">${focus.minutes} min</span>` : ""}
                <span class="hub-time">${completed}/${LEARNSITE_LESSONS.length} complete</span>
            </div>
            <div class="hub-progress-meta">
                <span>Library completion</span>
                <span>${percent}%</span>
            </div>
            <div class="hub-progress-bar"><span style="width:${percent}%"></span></div>
            <div class="hub-command-actions">
                <a class="hub-btn hub-btn-primary" href="${focus ? learnsiteLessonHref(siteRoot, focus) : "#tracks"}">${focus ? "Open next lesson" : "Browse tracks"}</a>
                <a class="hub-btn hub-btn-ghost" href="#progress">See progress board</a>
            </div>
            <div class="hub-command-tracklist">
                ${LEARNSITE_TRACKS.map((track) => {
                    const summary = learnsiteTrackSummary(track.id, progress);
                    return `
                        <article class="hub-track-mini">
                            <div class="hub-track-mini-top">
                                <strong>${track.name}</strong>
                                <span>${summary.percent}%</span>
                            </div>
                            <div class="hub-mini-bar"><span style="width:${summary.percent}%"></span></div>
                            <div class="hub-track-mini-note">${summary.next ? summary.next.title : "Track complete"}</div>
                        </article>
                    `;
                }).join("")}
            </div>
        </div>
    `;
}

function learnsiteStudyModes(progress) {
    const focus = learnsiteFirstIncomplete();
    const patternLesson = ["dsa-roadmap", "dsa-cheat-sheet", "dsa-patterns"].map(learnsiteLessonById).find((lesson) => lesson && !progress[lesson.id]) || learnsiteLessonById("dsa-roadmap");
    const systemsLesson = ["rag-patterns", "se-unit-2", "se-unit-1"].map(learnsiteLessonById).find((lesson) => lesson && !progress[lesson.id]) || learnsiteLessonById("rag-patterns");

    return [
        {
            eyebrow: "Continue path",
            title: focus ? focus.title : "Library complete",
            description: focus
                ? "Pick up exactly where your study flow left off and keep momentum without deciding from scratch."
                : "You have finished everything once. Reopen the track you want to reinforce next.",
            tags: focus ? [learnsiteTrackById(focus.track)?.name || "Track", focus.level, `${focus.minutes} min`] : ["Review", "Completed", "Revision mode"],
            lessonId: focus ? focus.id : "dsa-paradigms",
            buttonLabel: focus ? "Resume lesson" : "Review library",
            done: focus ? Boolean(progress[focus.id]) : true,
        },
        {
            eyebrow: "Pattern practice",
            title: patternLesson.title,
            description: "Switch from understanding to repetition. These pages are best when you want sharper recall and faster pattern recognition.",
            tags: ["drills", "revision", patternLesson.level],
            lessonId: patternLesson.id,
            buttonLabel: "Practice now",
            done: Boolean(progress[patternLesson.id]),
        },
        {
            eyebrow: "Systems deep dive",
            title: systemsLesson.title,
            description: "Balance algorithms with architecture and systems thinking by rotating into RAG or software engineering study.",
            tags: ["systems", "conceptual depth", systemsLesson.level],
            lessonId: systemsLesson.id,
            buttonLabel: "Open deep dive",
            done: Boolean(progress[systemsLesson.id]),
        },
    ];
}

function learnsiteRenderHome() {
    const siteRoot = document.body.dataset.siteRoot || ".";
    const search = (document.getElementById("hub-search")?.value || "").trim().toLowerCase();
    const activeTrack = document.querySelector(".hub-chip.is-active")?.dataset.trackFilter || "all";
    const activeLevel = document.getElementById("hub-level-filter")?.value || "all";
    const progress = learnsiteGetProgress();

    const filteredLessons = LEARNSITE_LESSONS.filter((lesson) => {
        const trackMatch = activeTrack === "all" || lesson.track === activeTrack;
        const levelMatch = activeLevel === "all" || lesson.level === activeLevel;
        const haystack = [lesson.title, lesson.description, lesson.tags.join(" ")].join(" ").toLowerCase();
        const searchMatch = !search || haystack.includes(search);
        return trackMatch && levelMatch && searchMatch;
    });

    const groupedMarkup = LEARNSITE_TRACKS.map((track) => {
        const lessons = filteredLessons.filter((lesson) => lesson.track === track.id);
        return lessons.length ? learnsiteTrackMarkup(track, lessons, siteRoot, progress) : "";
    }).join("");

    const completed = learnsiteCompletedCount(progress);
    const stats = document.getElementById("hub-library-stats");
    if (stats) {
        stats.innerHTML = [
            learnsiteStatMarkup(LEARNSITE_LESSONS.length, "lessons"),
            learnsiteStatMarkup(`${completed}/${LEARNSITE_LESSONS.length}`, "completed"),
            learnsiteStatMarkup(learnsiteFormatMinutes(learnsiteLibraryMinutes()), "total study time"),
        ].join("");
    }

    const next = learnsiteFirstIncomplete();
    const continueButton = document.getElementById("hub-continue");
    if (continueButton) {
        continueButton.href = next ? learnsiteLessonHref(siteRoot, next) : "#tracks";
        continueButton.textContent = next ? `Continue with ${next.title}` : "Browse tracks";
    }

    const command = document.getElementById("hub-command");
    if (command) {
        command.innerHTML = learnsiteCommandMarkup(siteRoot, progress);
    }

    const studyGrid = document.getElementById("hub-study-grid");
    if (studyGrid) {
        studyGrid.innerHTML = learnsiteStudyModes(progress).map((mode) => learnsiteModeCardMarkup(mode, siteRoot)).join("");
    }

    const resultCount = document.getElementById("hub-result-count");
    if (resultCount) {
        const tracksShown = new Set(filteredLessons.map((lesson) => lesson.track)).size;
        resultCount.textContent = `Showing ${filteredLessons.length} lesson${filteredLessons.length === 1 ? "" : "s"} across ${tracksShown || 0} track${tracksShown === 1 ? "" : "s"}`;
    }

    const catalog = document.getElementById("hub-catalog");
    if (catalog) {
        catalog.innerHTML = groupedMarkup || `<div class="hub-empty">No lessons match that search and filter combination yet. Try a broader keyword or switch the level filter back to "All levels."</div>`;
    }

    const progressBoard = document.getElementById("hub-progress-board");
    if (progressBoard) {
        progressBoard.innerHTML = learnsiteProgressBoardMarkup(siteRoot, progress);
    }
}

function learnsiteSetupHome() {
    const filters = document.getElementById("hub-track-filters");
    if (filters) {
        filters.innerHTML = [
            `<button class="hub-chip is-active" type="button" data-track-filter="all">All tracks</button>`,
            ...LEARNSITE_TRACKS.map((track) => `<button class="hub-chip" type="button" data-track-filter="${track.id}">${track.name}</button>`),
        ].join("");
    }

    document.body.addEventListener("click", (event) => {
        const toggleButton = event.target.closest("[data-toggle-complete]");
        if (toggleButton) {
            learnsiteToggleProgress(toggleButton.dataset.toggleComplete);
            learnsiteRenderHome();
            return;
        }

        const filterButton = event.target.closest("[data-track-filter]");
        if (filterButton) {
            document.querySelectorAll("[data-track-filter]").forEach((button) => {
                button.classList.toggle("is-active", button === filterButton);
            });
            learnsiteRenderHome();
        }
    });

    ["hub-search", "hub-level-filter"].forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
            return;
        }
        element.addEventListener("input", learnsiteRenderHome);
        element.addEventListener("change", learnsiteRenderHome);
    });

    document.addEventListener("learnsite:progress-changed", learnsiteRenderHome);
    window.addEventListener("storage", learnsiteRenderHome);
    learnsiteRenderHome();
}

function learnsiteSetupDock() {
    const lesson = learnsiteLessonById(document.body.dataset.lessonId);
    const siteRoot = document.body.dataset.siteRoot || ".";
    if (!lesson) {
        return;
    }

    const track = learnsiteTrackById(lesson.track);
    const dock = document.createElement("aside");
    dock.className = "learn-dock";
    dock.innerHTML = `
        <div class="learn-dock-shell">
            <div class="learn-dock-head">
                <div class="learn-dock-head-copy">
                    <span class="learn-dock-eyebrow">Learning hub</span>
                    <div class="learn-dock-title">${lesson.title}</div>
                    <div class="learn-dock-summary" id="learn-dock-summary"></div>
                </div>
                <button class="learn-dock-icon" type="button" data-dock-collapse>Hide</button>
            </div>
            <div class="learn-dock-body">
                <div class="learn-dock-meta">
                    <span class="hub-level" data-level="${lesson.level}">${lesson.level}</span>
                    <span class="hub-time">${lesson.minutes} min</span>
                    <span class="learn-dock-track">${track ? track.name : "Lesson"}</span>
                </div>
                <p class="learn-dock-copy">${lesson.description}</p>
                <div class="learn-dock-progress" id="learn-dock-progress"></div>
                <div class="learn-dock-bar"><span id="learn-dock-bar"></span></div>
                <div class="learn-dock-links" id="learn-dock-links"></div>
            </div>
        </div>
    `;
    document.body.appendChild(dock);

    function renderDock() {
        const progress = learnsiteGetProgress();
        const completed = learnsiteCompletedCount(progress);
        const currentIndex = LEARNSITE_LESSONS.findIndex((item) => item.id === lesson.id);
        const next = learnsiteNextLesson(lesson.id);
        const done = Boolean(progress[lesson.id]);
        const percent = learnsiteProgressPercent(completed, LEARNSITE_LESSONS.length);
        const collapsed = learnsiteGetDockCollapsed();

        dock.classList.toggle("is-collapsed", collapsed);
        dock.querySelector("[data-dock-collapse]").textContent = collapsed ? "Open" : "Hide";
        dock.querySelector("#learn-dock-summary").textContent = `${track ? track.name : "Track"} | ${currentIndex + 1}/${LEARNSITE_LESSONS.length} in library`;
        dock.querySelector("#learn-dock-progress").textContent = `${completed}/${LEARNSITE_LESSONS.length} lessons complete`;
        dock.querySelector("#learn-dock-bar").style.width = `${percent}%`;
        dock.querySelector("#learn-dock-links").innerHTML = [
            `<a class="learn-dock-action" href="${siteRoot}/index.html">Home</a>`,
            next
                ? `<a class="learn-dock-action" href="${learnsiteLessonHref(siteRoot, next)}">Next lesson</a>`
                : `<a class="learn-dock-action" href="${siteRoot}/index.html#tracks">Browse lessons</a>`,
            `<button class="learn-dock-toggle ${done ? "is-done" : ""}" type="button" data-dock-toggle="${lesson.id}">${done ? "Completed" : "Mark complete"}</button>`,
        ].join("");
    }

    dock.addEventListener("click", (event) => {
        const collapseButton = event.target.closest("[data-dock-collapse]");
        if (collapseButton) {
            learnsiteSaveDockCollapsed(!learnsiteGetDockCollapsed());
            renderDock();
            return;
        }

        const toggleButton = event.target.closest("[data-dock-toggle]");
        if (toggleButton) {
            learnsiteToggleProgress(toggleButton.dataset.dockToggle);
            renderDock();
        }
    });

    document.addEventListener("learnsite:progress-changed", renderDock);
    window.addEventListener("storage", renderDock);
    renderDock();
}

function learnsiteLessonLabMarkup(lesson, lab, siteRoot, progress) {
    const next = learnsiteNextLesson(lesson.id);
    const done = Boolean(progress[lesson.id]);
    const pathMarkup = learnsitePathMarkup(lesson.track, lesson.id, siteRoot, progress, lesson.track === "dsa" ? "Where this page fits" : "");
    return `
        <div class="lesson-lab-shell">
            <div class="lesson-lab-head">
                <div>
                    <span class="lesson-lab-kicker">Review and quiz</span>
                    <h2>Lock in this lesson before you move on</h2>
                    <p>${lab.intro}</p>
                </div>
                <span class="lesson-lab-badge">${lesson.title}</span>
            </div>

            <div class="lesson-lab-grid">
                <article class="lesson-lab-card">
                    <h3>Quick recap</h3>
                    <ul class="lesson-lab-list">
                        ${lab.recap.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                </article>

                ${pathMarkup ? `
                    <article class="lesson-lab-card">
                        <h3>Page role</h3>
                        <p>This lesson is one stop inside the broader study flow for this track.</p>
                        ${pathMarkup}
                    </article>
                ` : ""}

                <article class="lesson-lab-card">
                    <h3>Best next step</h3>
                    <p>${lab.next}</p>
                    <div class="lesson-lab-actions">
                        <a class="lesson-lab-action is-primary" href="${siteRoot}/index.html">Back to hub</a>
                        ${next ? `<a class="lesson-lab-action" href="${learnsiteLessonHref(siteRoot, next)}">Next lesson</a>` : `<a class="lesson-lab-action" href="${siteRoot}/index.html#tracks">Browse tracks</a>`}
                        <button class="lesson-lab-action ${done ? "is-done" : ""}" type="button" data-lab-complete="${lesson.id}">
                            ${done ? "Completed" : "Mark lesson complete"}
                        </button>
                    </div>
                </article>
            </div>

            <div class="lesson-quiz-grid">
                ${lab.quiz.map((item, index) => `
                    <article class="lesson-quiz-card" data-question-index="${index}">
                        <span class="lesson-quiz-count">Question ${index + 1}</span>
                        <h3>${item.question}</h3>
                        <div class="lesson-quiz-options">
                            ${item.options.map((option, optionIndex) => `
                                <button class="lesson-quiz-option" type="button" data-quiz-option="${optionIndex}">
                                    ${option}
                                </button>
                            `).join("")}
                        </div>
                        <div class="lesson-quiz-feedback" hidden></div>
                    </article>
                `).join("")}
            </div>
        </div>
    `;
}

function learnsiteResolveLessonHost() {
    return document.querySelector("main#main")
        || document.getElementById("home")
        || document.querySelector(".wrap")
        || document.querySelector("main")
        || document.body;
}

function learnsiteSetupLessonLab() {
    const lesson = learnsiteLessonById(document.body.dataset.lessonId);
    const lab = lesson ? LEARNSITE_LABS[lesson.id] : null;
    const siteRoot = document.body.dataset.siteRoot || ".";

    if (!lesson || !lab || document.querySelector(".lesson-lab")) {
        return;
    }

    const host = learnsiteResolveLessonHost();
    if (!host) {
        return;
    }

    const section = document.createElement("section");
    section.className = "lesson-lab";
    host.appendChild(section);

    function renderLab() {
        section.innerHTML = learnsiteLessonLabMarkup(lesson, lab, siteRoot, learnsiteGetProgress());
    }

    section.addEventListener("click", (event) => {
        const completeButton = event.target.closest("[data-lab-complete]");
        if (completeButton) {
            learnsiteToggleProgress(completeButton.dataset.labComplete);
            renderLab();
            return;
        }

        const optionButton = event.target.closest("[data-quiz-option]");
        if (!optionButton) {
            return;
        }

        const card = optionButton.closest(".lesson-quiz-card");
        if (!card || card.dataset.answered === "true") {
            return;
        }

        const question = lab.quiz[Number(card.dataset.questionIndex)];
        const selectedIndex = Number(optionButton.dataset.quizOption);
        const correctIndex = question.answer;

        card.dataset.answered = "true";
        card.querySelectorAll(".lesson-quiz-option").forEach((button) => {
            const optionIndex = Number(button.dataset.quizOption);
            button.disabled = true;
            button.classList.toggle("is-correct", optionIndex === correctIndex);
            button.classList.toggle("is-wrong", optionIndex === selectedIndex && optionIndex !== correctIndex);
        });

        const feedback = card.querySelector(".lesson-quiz-feedback");
        if (feedback) {
            const label = selectedIndex === correctIndex ? "Correct" : "Not quite";
            feedback.hidden = false;
            feedback.innerHTML = `<strong>${label}.</strong> ${question.explain}`;
        }
    });

    document.addEventListener("learnsite:progress-changed", renderLab);
    window.addEventListener("storage", renderLab);
    renderLab();
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("hub-home")) {
        learnsiteSetupHome();
        return;
    }

    if (document.body.dataset.lessonId) {
        learnsiteSetupDock();
        learnsiteSetupLessonLab();
    }
});
