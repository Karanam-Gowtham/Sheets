const LEARNSITE_TRACKS = [
    {
        id: "dsa",
        name: "DSA",
        heading: "Data Structures and Algorithms",
        summary: "Build pattern recognition, problem framing, and practice momentum from concept to drills.",
        accent: "coral",
    },
    {
        id: "rag",
        name: "RAG",
        heading: "Retrieval-Augmented Generation",
        summary: "Learn the full RAG pipeline from foundations and retrieval choices to evaluation and production thinking.",
        accent: "teal",
    },
    {
        id: "software-engineering",
        name: "Software Engineering",
        heading: "Software Engineering",
        summary: "Review requirements, modeling, software process, and documentation topics in one place.",
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
        description: "Learn the decision-making lenses behind DSA problems before committing to a specific pattern.",
        tags: ["problem framing", "greedy", "dfs bfs", "dynamic programming"],
    },
    {
        id: "dsa-patterns",
        title: "DSA Patterns",
        href: "DSA/patterns.html",
        track: "dsa",
        level: "Beginner",
        minutes: 60,
        description: "Step through interactive DSA pattern lessons with examples, code, and practice prompts.",
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
        description: "Revise software processes, fundamentals, and key concepts with interactive unit notes.",
        tags: ["foundations", "lifecycle", "process", "notes"],
    },
    {
        id: "se-unit-2",
        title: "Software Engineering Unit 2",
        href: "Software%20Engineering/unit%202.html",
        track: "software-engineering",
        level: "Intermediate",
        minutes: 50,
        description: "Review requirements engineering, SRS structure, and system modeling topics in a guided format.",
        tags: ["requirements", "srs", "uml", "modeling"],
    },
];

const LEARNSITE_STORAGE_KEY = "learnsite-progress-v1";

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
        // Ignore storage failures and keep the page usable.
    }
}

function learnsiteToggleProgress(lessonId) {
    const progress = learnsiteGetProgress();
    progress[lessonId] = !progress[lessonId];
    learnsiteSaveProgress(progress);
    document.dispatchEvent(new CustomEvent("learnsite:progress-changed", { detail: { lessonId } }));
}

function learnsiteTrackById(trackId) {
    return LEARNSITE_TRACKS.find((track) => track.id === trackId);
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

function learnsiteStatMarkup(value, label) {
    return `<article class="hub-stat"><strong>${value}</strong><span class="hub-stat-label">${label}</span></article>`;
}

function learnsiteCardMarkup(lesson, siteRoot, progress) {
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
                <a class="hub-btn hub-btn-primary" href="${siteRoot}/${lesson.href}">Open lesson</a>
                <button class="hub-btn hub-btn-ghost hub-btn-complete ${done ? "is-done" : ""}" type="button" data-toggle-complete="${lesson.id}">
                    ${done ? "Completed" : "Mark complete"}
                </button>
            </div>
        </article>
    `;
}

function learnsiteTrackMarkup(track, lessons, siteRoot, progress) {
    const done = lessons.filter((lesson) => progress[lesson.id]).length;
    const percent = learnsiteProgressPercent(done, lessons.length);
    return `
        <section class="hub-track" data-accent="${track.accent}">
            <div class="hub-track-head">
                <div class="hub-track-title">
                    <span class="hub-track-pill">${track.name}</span>
                    <h3>${track.heading}</h3>
                    <p>${track.summary}</p>
                </div>
                <div class="hub-track-progress">
                    <div class="hub-progress-meta">
                        <span>${done}/${lessons.length} complete</span>
                        <span>${percent}%</span>
                    </div>
                    <div class="hub-progress-bar"><span style="width:${percent}%"></span></div>
                </div>
            </div>
            <div class="hub-card-grid">${lessons.map((lesson) => learnsiteCardMarkup(lesson, siteRoot, progress)).join("")}</div>
        </section>
    `;
}

function learnsiteProgressBoardMarkup(siteRoot, progress) {
    return LEARNSITE_TRACKS.map((track) => {
        const lessons = learnsiteTrackLessons(track.id);
        const done = lessons.filter((lesson) => progress[lesson.id]).length;
        const percent = learnsiteProgressPercent(done, lessons.length);
        const next = learnsiteFirstIncomplete(track.id);
        const nextLabel = next ? `Next: ${next.title}` : "Everything in this track is complete.";
        const nextHref = next ? `${siteRoot}/${next.href}` : "#catalog";
        return `
            <article class="hub-progress-card">
                <h3>${track.heading}</h3>
                <p>${done} of ${lessons.length} lessons completed in this track.</p>
                <div class="hub-progress-bar"><span style="width:${percent}%"></span></div>
                <a href="${nextHref}">${nextLabel}</a>
            </article>
        `;
    }).join("");
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
    const stats = document.getElementById("hub-hero-stats");
    if (stats) {
        stats.innerHTML = [
            learnsiteStatMarkup(LEARNSITE_LESSONS.length, "lessons"),
            learnsiteStatMarkup(`${completed}/${LEARNSITE_LESSONS.length}`, "completed"),
            learnsiteStatMarkup(`${LEARNSITE_LESSONS.reduce((sum, lesson) => sum + lesson.minutes, 0)} min`, "study library"),
        ].join("");
    }

    const next = learnsiteFirstIncomplete();
    const continueButton = document.getElementById("hub-continue");
    if (continueButton) {
        continueButton.href = next ? `${siteRoot}/${next.href}` : `${siteRoot}/${LEARNSITE_LESSONS[0].href}`;
        continueButton.textContent = next ? `Continue with ${next.title}` : "Review from the top";
    }

    const topProgress = document.getElementById("hub-top-progress");
    if (topProgress) {
        topProgress.textContent = `${completed}/${LEARNSITE_LESSONS.length} lessons completed locally`;
    }

    const miniProgress = document.getElementById("hub-mini-progress");
    if (miniProgress) {
        miniProgress.innerHTML = completed === LEARNSITE_LESSONS.length
            ? `<strong>All lessons completed</strong><p>You have worked through the full library. Use the catalog below to review anything again.</p>`
            : `<strong>${completed} of ${LEARNSITE_LESSONS.length} lessons completed</strong><p>Best next step: ${next ? next.title : "Browse the catalog below"}.</p>`;
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
        <div class="learn-dock-main">
            <div class="learn-dock-top">
                <div>
                    <span class="learn-dock-eyebrow">Learning hub</span>
                    <div class="learn-dock-title">${lesson.title}</div>
                </div>
                <span class="learn-dock-track">${track ? track.name : "Lesson"}</span>
            </div>
            <div class="learn-dock-progress" id="learn-dock-progress"></div>
            <div class="learn-dock-bar"><span id="learn-dock-bar"></span></div>
            <div class="learn-dock-links" id="learn-dock-links"></div>
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

        dock.querySelector("#learn-dock-progress").textContent = `${completed}/${LEARNSITE_LESSONS.length} lessons complete | ${currentIndex + 1}/${LEARNSITE_LESSONS.length} in library`;
        dock.querySelector("#learn-dock-bar").style.width = `${percent}%`;
        dock.querySelector("#learn-dock-links").innerHTML = [
            `<a class="learn-dock-action" href="${siteRoot}/index.html">Home</a>`,
            next
                ? `<a class="learn-dock-action" href="${siteRoot}/${next.href}">Next lesson</a>`
                : `<a class="learn-dock-action" href="${siteRoot}/index.html#catalog">Browse lessons</a>`,
            `<button class="learn-dock-toggle ${done ? "is-done" : ""}" type="button" data-dock-toggle="${lesson.id}">${done ? "Completed" : "Mark complete"}</button>`,
        ].join("");
    }

    dock.addEventListener("click", (event) => {
        const button = event.target.closest("[data-dock-toggle]");
        if (!button) {
            return;
        }
        learnsiteToggleProgress(button.dataset.dockToggle);
        renderDock();
    });

    document.addEventListener("learnsite:progress-changed", renderDock);
    window.addEventListener("storage", renderDock);
    renderDock();
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("hub-home")) {
        learnsiteSetupHome();
        return;
    }

    if (document.body.dataset.lessonId) {
        learnsiteSetupDock();
    }
});
