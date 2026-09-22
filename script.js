/* =========================================================
   INTELLIMAIL
   COMPLETE FRONTEND JAVASCRIPT
========================================================= */


/* ================= EMAIL DATA ================= */

const emails = [
    {
        id: 1,
        sender: "Acme Corporation",
        email: "client@acme.com",
        subject: "Revised Project Proposal",
        preview: "Please review the revised proposal and confirm whether we can proceed.",
        category: "critical",
        time: "Today, 9:15 AM",
        summary: "The client has requested confirmation of the revised project proposal.",
        why: [
            "Direct request",
            "Deadline detected",
            "External client"
        ],
        deadline: "Friday, 5:00 PM",
        action: "Confirm revised proposal",
        date: "2026-09-25",
        important: true
    },

    {
        id: 2,
        sender: "Project Team",
        email: "team@project.com",
        subject: "Sprint Meeting Confirmation",
        preview: "Can you confirm your availability for tomorrow's sprint meeting?",
        category: "reply",
        time: "Today, 10:30 AM",
        summary: "The project team needs confirmation of your availability for the sprint meeting.",
        why: [
            "Response requested",
            "Meeting detected",
            "Due soon"
        ],
        deadline: "Tomorrow",
        action: "Confirm meeting availability",
        date: "2026-09-21",
        important: false
    },

    {
        id: 3,
        sender: "HR Department",
        email: "hr@company.com",
        subject: "Monthly Newsletter",
        preview: "Here are this month's company announcements and employee updates.",
        category: "fyi",
        time: "Today, 11:20 AM",
        summary: "A monthly company newsletter containing announcements and employee updates.",
        why: [
            "Informational",
            "No urgent deadline",
            "Internal communication"
        ],
        deadline: "No deadline",
        action: "Review when convenient",
        date: "2026-09-20",
        important: false
    },

    {
        id: 4,
        sender: "TechNova Solutions",
        email: "partnership@technova.com",
        subject: "Partnership Discussion",
        preview: "We would like to continue the partnership discussion and hear your thoughts.",
        category: "critical",
        time: "Yesterday",
        summary: "A potential partner is waiting for a response about continuing partnership discussions.",
        why: [
            "External organization",
            "Business opportunity",
            "Response expected"
        ],
        deadline: "Thursday",
        action: "Respond to partnership proposal",
        date: "2026-09-24",
        important: true
    },

    {
        id: 5,
        sender: "College Administration",
        email: "admin@college.edu",
        subject: "Assignment Submission Reminder",
        preview: "Reminder: submit the assignment before the deadline.",
        category: "reply",
        time: "Yesterday",
        summary: "College administration has sent a reminder about an upcoming assignment submission.",
        why: [
            "Deadline detected",
            "Action required",
            "Academic task"
        ],
        deadline: "Friday, 11:59 PM",
        action: "Submit assignment",
        date: "2026-09-25",
        important: false
    },

    {
        id: 6,
        sender: "GitHub",
        email: "notifications@github.com",
        subject: "Pull Request Review Requested",
        preview: "A teammate has requested your review on a pull request.",
        category: "reply",
        time: "Yesterday",
        summary: "A teammate has requested a review of a pull request.",
        why: [
            "Action requested",
            "Development task",
            "Team dependency"
        ],
        deadline: "No deadline",
        action: "Review pull request",
        date: "2026-09-26",
        important: false
    },

    {
        id: 7,
        sender: "Amazon",
        email: "order@amazon.com",
        subject: "Your order has been delivered",
        preview: "Your package has been delivered successfully.",
        category: "fyi",
        time: "2 days ago",
        summary: "Your order has been delivered successfully.",
        why: [
            "Delivery notification",
            "Informational",
            "No action required"
        ],
        deadline: "No deadline",
        action: "No action required",
        date: "2026-09-18",
        important: false
    },

    {
        id: 8,
        sender: "Design Team",
        email: "design@project.com",
        subject: "UI Feedback Required",
        preview: "Please review the latest interface and send your feedback.",
        category: "reply",
        time: "2 days ago",
        summary: "The design team needs feedback on the latest interface.",
        why: [
            "Feedback requested",
            "Design dependency",
            "Action required"
        ],
        deadline: "Wednesday, 6:00 PM",
        action: "Review UI and send feedback",
        date: "2026-09-23",
        important: false
    }
];


/* ================= TASK DATA ================= */

const initialTasks = [
    {
        id: 1,
        title: "Confirm revised proposal",
        source: "Acme Corporation",
        due: "Friday, 5:00 PM",
        date: "2026-09-25",
        type: "critical",
        completed: false
    },

    {
        id: 2,
        title: "Respond to partnership proposal",
        source: "TechNova Solutions",
        due: "Thursday",
        date: "2026-09-24",
        type: "critical",
        completed: false
    },

    {
        id: 3,
        title: "Submit assignment",
        source: "College Administration",
        due: "Friday, 11:59 PM",
        date: "2026-09-25",
        type: "reply",
        completed: false
    },

    {
        id: 4,
        title: "Review UI and send feedback",
        source: "Design Team",
        due: "Wednesday, 6:00 PM",
        date: "2026-09-23",
        type: "reply",
        completed: false
    },

    {
        id: 5,
        title: "Confirm meeting availability",
        source: "Project Team",
        due: "Tomorrow",
        date: "2026-09-21",
        type: "reply",
        completed: false
    }
];


let tasks = loadTasks();

function loadTasks() {

    try {

        const saved =
            localStorage.getItem(
                "intellimail_tasks"
            );

        if (!saved) {
            return initialTasks.map(
                task => ({ ...task })
            );
        }

        const parsed =
            JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed
            : initialTasks.map(
                task => ({ ...task })
            );

    } catch (error) {

        return initialTasks.map(
            task => ({ ...task })
        );
    }
}


function saveTasks() {

    localStorage.setItem(
        "intellimail_tasks",
        JSON.stringify(tasks)
    );
}


/* ================= STATE ================= */

let currentPage = "dashboard";
let currentFilter = "all";
let selectedEmailId = null;
let currentReplyEmail = null;
let selectedTone = "professional";

let calendarDate =
    new Date(
        2026,
        8,
        1
    );

let selectedDate =
    "2026-09-25";


/* ================= START ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupNavigation();

        setupHeatmap();

        setupInbox();

        setupReply();

        setupCalendar();

        setupSearch();

        setupMobilePreview();

        setupMobileMenu();

        renderInbox();

        renderDashboard();

        renderTasks();

        renderCalendar();

        renderActions();

        renderImportant();

        renderArchive();

        updateCounts();

    }
);


/* ================= NAVIGATION ================= */

function setupNavigation() {

    document
        .querySelectorAll(
            "[data-page]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const page =
                        button.dataset.page;

                    if (!page) {
                        return;
                    }

                    showPage(page);

                }
            );

        });
}


function showPage(page) {

    const target =
        document.getElementById(
            page
        );

    if (!target) {
        return;
    }

    currentPage = page;

    document
        .querySelectorAll(".page")
        .forEach(section => {

            section.classList.remove(
                "active"
            );

        });

    target.classList.add(
        "active"
    );


    document
        .querySelectorAll(
            ".nav-item, .mobile-nav button"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.page === page
            );

        });


    if (page === "tasks") {
        renderTasks();
    }

    if (page === "calendar") {
        renderCalendar();
    }

    if (page === "actions") {
        renderActions();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ================= HEATMAP ================= */

function setupHeatmap() {

    document
        .querySelectorAll(
            ".heat-card"
        )
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const page =
                        card.dataset.page;

                    const filter =
                        card.dataset.filter;

                    if (filter) {

                        currentFilter =
                            filter;

                        updateFilters();
                    }

                    showPage(page);

                    renderInbox();

                }
            );

        });
}


/* ================= INBOX ================= */

function setupInbox() {

    document
        .querySelectorAll(
            ".filter"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentFilter =
                        button.dataset.filter;

                    updateFilters();

                    renderInbox();

                }
            );

        });


    const sort =
        document.getElementById(
            "sortEmails"
        );

    if (sort) {

        sort.addEventListener(
            "change",
            renderInbox
        );

    }
}


function updateFilters() {

    document
        .querySelectorAll(
            ".filter"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.filter ===
                currentFilter
            );

        });
}


function getEmails() {

    let result =
        [...emails];


    if (
        currentFilter !==
        "all"
    ) {

        result =
            result.filter(
                email =>
                    email.category ===
                    currentFilter
            );

    }


    const sort =
        document.getElementById(
            "sortEmails"
        );


    if (
        sort &&
        sort.value ===
        "newest"
    ) {

        result.reverse();

    }


    return result;
}


function renderInbox() {

    const list =
        document.getElementById(
            "emailList"
        );

    if (!list) {
        return;
    }


    const result =
        getEmails();


    list.innerHTML =
        result
            .map(
                email =>
                    createEmailCard(email)
            )
            .join("");


    const count =
        document.getElementById(
            "emailCount"
        );


    if (count) {

        count.textContent =
            `${result.length} messages`;

    }


    list
        .querySelectorAll(
            ".email-card"
        )
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    openEmail(
                        Number(
                            card.dataset.id
                        )
                    );

                }
            );

        });
}


function createEmailCard(email) {

    const badge =
        email.category === "critical"
            ? "CRITICAL"
            : email.category === "reply"
                ? "REPLY NOW"
                : "FYI";


    return `
        <button
            class="email-card ${
                selectedEmailId === email.id
                    ? "selected"
                    : ""
            }"
            data-id="${email.id}"
        >

            <div class="email-top">

                <span class="email-sender">
                    ${escapeHTML(email.sender)}
                </span>

                <span class="email-badge badge-${email.category}">
                    ${badge}
                </span>

            </div>

            <div class="email-subject">
                ${escapeHTML(email.subject)}
            </div>

            <div class="email-preview">
                ${escapeHTML(email.preview)}
            </div>

            <div class="email-time">
                ${escapeHTML(email.time)}
            </div>

        </button>
    `;
}


/* ================= EMAIL ANALYSIS ================= */

function openEmail(id) {

    const email =
        emails.find(
            item =>
                item.id === id
        );


    if (!email) {
        return;
    }


    selectedEmailId =
        email.id;


    const analysis =
        document.getElementById(
            "emailAnalysis"
        );


    if (!analysis) {
        return;
    }


    document.getElementById(
        "syncThread"
    ).textContent =
        email.subject;


    const badge =
        email.category === "critical"
            ? "🔴 CRITICAL"
            : email.category === "reply"
                ? "🟡 REPLY NOW"
                : "🟢 FYI";


    analysis.innerHTML = `

        <div class="analysis-top">

            <div>

                <div class="analysis-title">
                    ${escapeHTML(email.subject)}
                </div>

                <div class="analysis-sender">
                    ${escapeHTML(email.sender)}
                    ·
                    ${escapeHTML(email.email)}
                </div>

            </div>

            <span class="
                analysis-badge
                ${email.category}
            ">
                ${badge}
            </span>

        </div>


        <div class="analysis-block">

            <h4>
                AI SUMMARY
            </h4>

            <p>
                ${escapeHTML(email.summary)}
            </p>

        </div>


        <div class="analysis-block">

            <h4>
                WHY IMPORTANT?
            </h4>

            <div class="why-list">

                ${email.why
                    .map(
                        reason => `
                            <div class="why-item">
                                ✓ ${escapeHTML(reason)}
                            </div>
                        `
                    )
                    .join("")}

            </div>

        </div>


        <div class="analysis-block">

            <h4>
                📅 DEADLINE
            </h4>

            <div class="deadline-box">

                <span>📅</span>

                <strong>
                    ${escapeHTML(email.deadline)}
                </strong>

            </div>

        </div>


        <div class="analysis-block">

            <h4>
                ⚡ ACTION
            </h4>

            <div class="analysis-action">
                ${escapeHTML(email.action)}
            </div>

        </div>


        <div class="analysis-actions">

            <button
                class="analysis-btn calendar-btn"
                id="emailCalendarButton"
            >

                <span class="analysis-btn-icon">
                    📅
                </span>

                <span class="analysis-btn-text">

                    <strong>
                        Add to Calendar
                    </strong>

                    <small>
                        Save detected deadline
                    </small>

                </span>

            </button>


            <button
                class="analysis-btn task-btn"
                id="emailTaskButton"
            >

                <span class="analysis-btn-icon">
                    ✓
                </span>

                <span class="analysis-btn-text">

                    <strong>
                        Create Task
                    </strong>

                    <small>
                        Turn email into action
                    </small>

                </span>

            </button>


            <button
                class="analysis-btn reply-btn"
                id="emailReplyButton"
            >

                <span class="analysis-btn-icon">
                    ✦
                </span>

                <span class="analysis-btn-text">

                    <strong>
                        Generate Reply
                    </strong>

                    <small>
                        Create an intelligent response
                    </small>

                </span>

            </button>

        </div>

    `;


    document.getElementById(
        "emailCalendarButton"
    ).addEventListener(
        "click",
        () => addToCalendar(email)
    );


    document.getElementById(
        "emailTaskButton"
    ).addEventListener(
        "click",
        () => createTask(email)
    );


    document.getElementById(
        "emailReplyButton"
    ).addEventListener(
        "click",
        () => openReply(email)
    );


    renderInbox();

}


/* ================= CALENDAR ACTION ================= */

function addToCalendar(email) {

    selectedDate =
        email.date;


    const parts =
        email.date.split("-");


    calendarDate =
        new Date(
            Number(parts[0]),
            Number(parts[1]) - 1,
            1
        );


    showPage(
        "calendar"
    );


    renderCalendar();


    toast(
        "Deadline added to calendar ✓"
    );
}


/* ================= CREATE TASK ================= */

function createTask(email) {

    const exists =
        tasks.some(
            task =>
                task.title ===
                email.action &&
                !task.completed
        );


    if (exists) {

        toast(
            "Task already exists"
        );

        return;
    }


    tasks.push({

        id: Date.now(),

        title:
            email.action,

        source:
            email.sender,

        due:
            email.deadline,

        date:
            email.date,

        type:
            email.category ===
            "critical"
                ? "critical"
                : "reply",

        completed:
            false

    });


    saveTasks();

    renderTasks();

    renderActions();

    renderDashboard();

    renderCalendar();


    toast(
        "Task created ✓"
    );
}


/* ================= TASKS ================= */

function renderTasks() {

    const board =
        document.getElementById(
            "taskBoard"
        );

    if (!board) {
        return;
    }


    const critical =
        tasks.filter(
            task =>
                !task.completed &&
                task.type ===
                "critical"
        );


    const reply =
        tasks.filter(
            task =>
                !task.completed &&
                task.type !==
                "critical"
        );


    const completed =
        tasks.filter(
            task =>
                task.completed
        );


    board.innerHTML = `

        ${taskColumn(
            "critical",
            "🔴 Critical",
            critical
        )}

        ${taskColumn(
            "reply",
            "🟡 Reply / Follow Up",
            reply
        )}

        ${taskColumn(
            "completed",
            "🟢 Completed",
            completed
        )}

    `;


    board
        .querySelectorAll(
            ".task-check"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    toggleTask(
                        Number(
                            button.dataset.id
                        )
                    );

                }
            );

        });
}


function taskColumn(
    type,
    title,
    list
) {

    return `

        <div class="
            task-column
            ${type}
        ">

            <div class="task-column-head">

                <strong>
                    ${title}
                </strong>

                <span>
                    ${list.length}
                </span>

            </div>


            ${
                list.length === 0

                ? `
                    <div class="no-tasks">
                        ${
                            type === "completed"
                                ? "Completed tasks will appear here"
                                : "No pending tasks"
                        }
                    </div>
                `

                : list
                    .map(
                        task =>
                            taskHTML(
                                task
                            )
                    )
                    .join("")
            }

        </div>

    `;
}


function taskHTML(task) {

    return `

        <div class="
            task-card
            ${task.completed ? "completed" : ""}
        ">

            <button
                class="
                    task-check
                    ${task.completed ? "done" : ""}
                "
                data-id="${task.id}"
            >
                ${task.completed ? "✓" : ""}
            </button>


            <strong>
                ${escapeHTML(task.title)}
            </strong>

            <small>
                ${escapeHTML(task.source)}
            </small>

            <small>
                📅 ${escapeHTML(task.due)}
            </small>

        </div>

    `;
}


function toggleTask(id) {

    const task =
        tasks.find(
            item =>
                item.id === id
        );


    if (!task) {
        return;
    }


    task.completed =
        !task.completed;


    saveTasks();

    renderTasks();

    renderActions();

    renderDashboard();

    renderCalendar();


    toast(
        task.completed
            ? "Task completed ✓"
            : "Task restored ↩"
    );
}


/* ================= ACTION QUEUE ================= */

function renderActions() {

    const dashboard =
        document.getElementById(
            "dashboardActions"
        );


    const full =
        document.getElementById(
            "fullActionQueue"
        );


    const active =
        tasks.filter(
            task =>
                !task.completed
        );


    const create =
        task =>
            `
                <div class="action-item">

                    <span class="
                        action-dot
                        ${
                            task.type ===
                            "critical"
                                ? "red"
                                : "yellow"
                        }
                    "></span>

                    <div>

                        <strong>
                            ${escapeHTML(task.title)}
                        </strong>

                        <small>
                            ${escapeHTML(task.source)}
                            ·
                            ${escapeHTML(task.due)}
                        </small>

                    </div>

                </div>
            `;


    if (dashboard) {

        dashboard.innerHTML =
            active
                .slice(0,4)
                .map(create)
                .join("");

    }


    if (full) {

        full.innerHTML =
            active
                .map(
                    task => `
                        <div class="
                            action-large
                            ${task.type}
                        ">

                            <strong>
                                ${
                                    task.type ===
                                    "critical"
                                        ? "🔴"
                                        : "🟡"
                                }
                                ${escapeHTML(task.title)}
                            </strong>

                            <small>
                                ${escapeHTML(task.source)}
                                · Due
                                ${escapeHTML(task.due)}
                            </small>

                        </div>
                    `
                )
                .join("");

    }
}


/* ================= DASHBOARD ================= */

function renderDashboard() {

    document.getElementById(
        "organizedCount"
    ).textContent =
        emails.length;


    document.getElementById(
        "inboxNavCount"
    ).textContent =
        emails.length;


    renderActions();


    const deadlines =
        document.getElementById(
            "dashboardDeadlines"
        );


    if (!deadlines) {
        return;
    }


    deadlines.innerHTML =
        emails
            .filter(
                email =>
                    email.deadline !==
                    "No deadline"
            )
            .slice(0,4)
            .map(
                email => `

                    <div class="deadline-item">

                        <div>

                            <strong>
                                ${escapeHTML(
                                    email.action
                                )}
                            </strong>

                            <span>
                                ${escapeHTML(
                                    email.sender
                                )}
                            </span>

                        </div>

                        <span class="deadline-time">
                            ${escapeHTML(
                                email.deadline
                            )}
                        </span>

                    </div>

                `
            )
            .join("");
}


function updateCounts() {

    document.getElementById(
        "organizedCount"
    ).textContent =
        emails.length;

    document.getElementById(
        "inboxNavCount"
    ).textContent =
        emails.length;
}


/* ================= CALENDAR ================= */

function setupCalendar() {

    document.getElementById(
        "prevMonth"
    ).addEventListener(
        "click",
        () => {

            calendarDate.setMonth(
                calendarDate.getMonth() - 1
            );

            renderCalendar();

        }
    );


    document.getElementById(
        "nextMonth"
    ).addEventListener(
        "click",
        () => {

            calendarDate.setMonth(
                calendarDate.getMonth() + 1
            );

            renderCalendar();

        }
    );
}


function renderCalendar() {

    const grid =
        document.getElementById(
            "calendarGrid"
        );


    const title =
        document.getElementById(
            "calendarTitle"
        );


    if (!grid || !title) {
        return;
    }


    const year =
        calendarDate.getFullYear();


    const month =
        calendarDate.getMonth();


    title.textContent =
        new Date(
            year,
            month,
            1
        ).toLocaleDateString(
            "en-US",
            {
                month: "long",
                year: "numeric"
            }
        );


    let start =
        new Date(
            year,
            month,
            1
        ).getDay();


    start =
        start === 0
            ? 6
            : start - 1;


    const days =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    const previous =
        new Date(
            year,
            month,
            0
        ).getDate();


    let html = "";


    for (
        let i = start - 1;
        i >= 0;
        i--
    ) {

        const day =
            previous - i;


        const date =
            makeDate(
                new Date(
                    year,
                    month - 1,
                    day
                )
            );


        html +=
            calendarDay(
                day,
                date,
                true
            );
    }


    for (
        let day = 1;
        day <= days;
        day++
    ) {

        const date =
            makeDate(
                new Date(
                    year,
                    month,
                    day
                )
            );


        html +=
            calendarDay(
                day,
                date,
                false
            );
    }


    let nextDay = 1;


    while (
        html.split(
            'class="calendar-day'
        ).length - 1 < 42
    ) {

        const date =
            makeDate(
                new Date(
                    year,
                    month + 1,
                    nextDay
                )
            );


        html +=
            calendarDay(
                nextDay,
                date,
                true
            );


        nextDay++;
    }


    grid.innerHTML =
        html;


    grid
        .querySelectorAll(
            ".calendar-day"
        )
        .forEach(day => {

            day.addEventListener(
                "click",
                () => {

                    selectedDate =
                        day.dataset.date;

                    renderCalendar();

                }
            );

        });


    renderSelectedDate();
}


function calendarDay(
    number,
    date,
    other
) {

    const related =
        emails.filter(
            email =>
                email.date === date
        );


    const relatedTasks =
        tasks.filter(
            task =>
                task.date === date
        );


    const hasEvent =
        related.length ||
        relatedTasks.length;


    let eventClass = "";


    if (
        related.some(
            email =>
                email.category ===
                "critical"
        )
    ) {

        eventClass = "";

    } else if (
        related.some(
            email =>
                email.category ===
                "reply"
        )
    ) {

        eventClass = "reply";

    } else {

        eventClass = "fyi";

    }


    const today =
        date === "2026-09-20";


    const selected =
        date === selectedDate;


    return `

        <button
            class="
                calendar-day
                ${other ? "other" : ""}
                ${today ? "today" : ""}
                ${selected ? "selected" : ""}
            "
            data-date="${date}"
        >

            <span class="day-number">
                ${number}
            </span>

            ${
                hasEvent
                    ? `
                        <span class="
                            event-dot
                            ${eventClass}
                        "></span>
                    `
                    : ""
            }

        </button>

    `;
}


function renderSelectedDate() {

    const title =
        document.getElementById(
            "selectedDateTitle"
        );


    const container =
        document.getElementById(
            "selectedDateTasks"
        );


    if (!title || !container) {
        return;
    }


    const date =
        new Date(
            selectedDate +
            "T00:00:00"
        );


    title.textContent =
        date.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                month: "long",
                day: "numeric"
            }
        );


    const emailsForDate =
        emails.filter(
            email =>
                email.date ===
                selectedDate
        );


    const tasksForDate =
        tasks.filter(
            task =>
                task.date ===
                selectedDate
        );


    const items = [];


    emailsForDate.forEach(
        email => {

            items.push({
                title: email.action,
                source: email.sender,
                due: email.deadline
            });

        }
    );


    tasksForDate.forEach(
        task => {

            const exists =
                items.some(
                    item =>
                        item.title ===
                        task.title
                );


            if (!exists) {

                items.push({
                    title: task.title,
                    source: task.source,
                    due: task.due
                });

            }

        }
    );


    if (!items.length) {

        container.innerHTML = `
            <div class="empty-selected">
                No tasks or deadlines
                scheduled for this date.
            </div>
        `;

        return;
    }


    container.innerHTML =
        items
            .map(
                item => `

                    <div class="selected-task">

                        <strong>
                            ${escapeHTML(
                                item.title
                            )}
                        </strong>

                        <span>
                            ${escapeHTML(
                                item.source
                            )}
                        </span>

                        <span>
                            ⏰
                            ${escapeHTML(
                                item.due
                            )}
                        </span>

                    </div>

                `
            )
            .join("");
}


/* ================= IMPORTANT ================= */

function renderImportant() {

    const container =
        document.getElementById(
            "importantList"
        );


    const list =
        emails.filter(
            email =>
                email.important
        );


    container.innerHTML =
        list
            .map(
                messageCard
            )
            .join("");
}


/* ================= ARCHIVE ================= */

function renderArchive() {

    const container =
        document.getElementById(
            "archiveList"
        );


    const list =
        emails.filter(
            email =>
                email.category ===
                "fyi"
        );


    container.innerHTML =
        list
            .map(
                messageCard
            )
            .join("");
}


function messageCard(email) {

    return `

        <div class="message-card">

            <strong>
                ${escapeHTML(
                    email.subject
                )}
            </strong>

            <span>
                ${escapeHTML(
                    email.sender
                )}
            </span>

            <p>
                ${escapeHTML(
                    email.preview
                )}
            </p>

        </div>

    `;
}


/* ================= REPLY ================= */

function setupReply() {

    document
        .querySelectorAll(
            ".tone"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    selectedTone =
                        button.dataset.tone;


                    document
                        .querySelectorAll(
                            ".tone"
                        )
                        .forEach(
                            item =>
                                item.classList
                                    .remove(
                                        "active"
                                    )
                        );


                    button.classList.add(
                        "active"
                    );

                }
            );

        });


    document.getElementById(
        "generateReplyButton"
    ).addEventListener(
        "click",
        generateReply
    );


    document.getElementById(
        "closeReplyModal"
    ).addEventListener(
        "click",
        closeReply
    );


    document
        .querySelector(
            ".reply-backdrop"
        )
        .addEventListener(
            "click",
            closeReply
        );


    document.getElementById(
        "copyReplyButton"
    ).addEventListener(
        "click",
        copyReply
    );


    setupVoice();

}


function openReply(email) {

    currentReplyEmail =
        email;


    document.getElementById(
        "replyRecipient"
    ).textContent =
        email.sender;


    document.getElementById(
        "replyInstruction"
    ).value = "";


    document.getElementById(
        "generatedReplyArea"
    ).classList.remove(
        "active"
    );


    document.getElementById(
        "replyModal"
    ).classList.add(
        "active"
    );


    document.getElementById(
        "replyInstruction"
    ).focus();
}


function closeReply() {

    document.getElementById(
        "replyModal"
    ).classList.remove(
        "active"
    );
}


/* ================= VOICE ================= */

function setupVoice() {

    const button =
        document.getElementById(
            "voiceButton"
        );


    const textarea =
        document.getElementById(
            "replyInstruction"
        );


    const status =
        document.getElementById(
            "voiceStatus"
        );


    const Recognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!Recognition) {

        button.addEventListener(
            "click",
            () => {

                status.textContent =
                    "Voice input is not supported in this browser.";

            }
        );

        return;
    }


    const recognition =
        new Recognition();


    recognition.lang =
        "en-US";


    recognition.continuous =
        false;


    recognition.interimResults =
        false;


    button.addEventListener(
        "click",
        () => {

            try {

                recognition.start();

                button.classList.add(
                    "listening"
                );

                status.textContent =
                    "Listening... speak now.";

            } catch (error) {

                status.textContent =
                    "Voice input is already active.";

            }

        }
    );


    recognition.onresult =
        event => {

            const text =
                event.results[0][0]
                    .transcript;


            textarea.value =
                text;


            status.textContent =
                "Instruction captured ✓";

        };


    recognition.onend =
        () => {

            button.classList.remove(
                "listening"
            );

        };


    recognition.onerror =
        () => {

            button.classList.remove(
                "listening"
            );

            status.textContent =
                "Voice input could not be captured.";

        };

}


/* ================= GENERATE REPLY ================= */

function generateReply() {

    const instruction =
        document.getElementById(
            "replyInstruction"
        ).value.trim();


    if (!instruction) {

        toast(
            "Tell IntelliMail what the reply should communicate."
        );

        return;
    }


    if (!currentReplyEmail) {
        return;
    }


    const button =
        document.getElementById(
            "generateReplyButton"
        );


    button.disabled =
        true;


    button.textContent =
        "✦ Generating...";


    setTimeout(
        () => {

            const reply =
                createReply(
                    currentReplyEmail,
                    instruction,
                    selectedTone
                );


            document.getElementById(
                "generatedReply"
            ).textContent =
                reply;


            document.getElementById(
                "generatedReplyArea"
            ).classList.add(
                "active"
            );


            button.disabled =
                false;


            button.textContent =
                "✦ Generate Reply";

        },
        500
    );
}


/* ================= DEMO AI ================= */

function createReply(
    email,
    instruction,
    tone
) {

    const text =
        instruction.toLowerCase();


    const sender =
        email.sender;


    const interested =
        text.includes(
            "interested"
        );


    const needsTime =
        text.includes(
            "until"
        ) ||
        text.includes(
            "more time"
        ) ||
        text.includes(
            "later"
        ) ||
        text.includes(
            "tuesday"
        );


    const confirm =
        text.includes(
            "confirm"
        ) ||
        text.includes(
            "yes"
        );


    const meeting =
        text.includes(
            "meeting"
        ) ||
        text.includes(
            "available"
        );


    const decline =
        text.includes(
            "decline"
        ) ||
        text.includes(
            "not interested"
        ) ||
        text.includes(
            "cannot"
        ) ||
        text.includes(
            "can't"
        );


    if (
        interested &&
        needsTime
    ) {

        if (
            tone ===
            "concise"
        ) {

            return `
Hi ${sender},

Thank you for sharing the proposal. I'm interested in moving forward and need some additional time to review the details.

I should be able to confirm by Tuesday.

Best regards,
            `.trim();

        }


        return `
Hi ${sender},

Thank you for sharing the revised proposal.

I'm interested in moving forward and would appreciate some additional time to review everything carefully.

I should be able to provide my confirmation by Tuesday.

Thank you for your patience and understanding.

Best regards,
        `.trim();

    }


    if (confirm) {

        return `
Hi ${sender},

Thank you for the update.

I have reviewed the details and can confirm that we can proceed.

Please let me know if anything else is needed from my side.

Best regards,
        `.trim();

    }


    if (meeting) {

        return `
Hi ${sender},

Thank you for reaching out.

I can confirm my availability for the meeting. Please share the final meeting details when convenient.

Best regards,
        `.trim();

    }


    if (decline) {

        return `
Hi ${sender},

Thank you for reaching out and for sharing the details.

After reviewing the situation, I will not be able to proceed at this time.

I appreciate your understanding and hope we can connect again in the future.

Best regards,
        `.trim();

    }


    if (
        tone ===
        "concise"
    ) {

        return `
Hi ${sender},

Thank you for your message.

I have noted the details and will review them shortly. I'll follow up with the next steps soon.

Best regards,
        `.trim();

    }


    if (
        tone ===
        "polite"
    ) {

        return `
Hi ${sender},

Thank you for reaching out and for sharing the details.

I appreciate the opportunity. After reviewing the current situation, I may not be able to proceed at this time.

Thank you for your understanding.

Best regards,
        `.trim();

    }


    return `
Hi ${sender},

Thank you for your message and for sharing the details.

I have noted the information and will review everything carefully. I will get back to you with an update and the next steps shortly.

Best regards,
    `.trim();

}


/* ================= COPY ================= */

function copyReply() {

    const text =
        document.getElementById(
            "generatedReply"
        ).textContent;


    navigator.clipboard
        .writeText(
            text
        )
        .then(
            () =>
                toast(
                    "Reply copied ✓"
                )
        )
        .catch(
            () =>
                toast(
                    "Copy unavailable"
                )
        );
}


/* ================= SEARCH ================= */

function setupSearch() {

    const search =
        document.getElementById(
            "globalSearch"
        );


    search.addEventListener(
        "input",
        () => {

            const query =
                search.value
                    .trim()
                    .toLowerCase();


            if (!query) {

                renderInbox();

                return;
            }


            const results =
                emails.filter(
                    email =>
                        email.sender
                            .toLowerCase()
                            .includes(query) ||

                        email.subject
                            .toLowerCase()
                            .includes(query) ||

                        email.preview
                            .toLowerCase()
                            .includes(query)
                );


            const list =
                document.getElementById(
                    "emailList"
                );


            const count =
                document.getElementById(
                    "emailCount"
                );


            count.textContent =
                `${results.length} messages`;


            list.innerHTML =
                results
                    .map(
                        createEmailCard
                    )
                    .join("");


            list
                .querySelectorAll(
                    ".email-card"
                )
                .forEach(
                    card =>
                        card.addEventListener(
                            "click",
                            () =>
                                openEmail(
                                    Number(
                                        card.dataset.id
                                    )
                                )
                        )
                );


            showPage(
                "inbox"
            );

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.ctrlKey &&
                event.key.toLowerCase() ===
                "k"
            ) {

                event.preventDefault();

                search.focus();

            }

        }
    );
}


/* ================= MOBILE PREVIEW ================= */

function setupMobilePreview() {

    const open =
        document.getElementById(
            "openPreview"
        );


    const close =
        document.getElementById(
            "closeMobilePreview"
        );


    const modal =
        document.getElementById(
            "mobileModal"
        );


    const backdrop =
        document.querySelector(
            ".mobile-modal-backdrop"
        );


    open.addEventListener(
        "click",
        openMobilePreview
    );


    close.addEventListener(
        "click",
        closeMobilePreview
    );


    backdrop.addEventListener(
        "click",
        closeMobilePreview
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape" &&
                modal.classList.contains(
                    "active"
                )
            ) {

                closeMobilePreview();

            }

        }
    );
}


function openMobilePreview() {

    const modal =
        document.getElementById(
            "mobileModal"
        );


    const iframe =
        document.getElementById(
            "mobilePreviewFrame"
        );


    let url =
        window.location.href;


    if (
        url.includes("#")
    ) {

        url =
            url.split("#")[0];

    }


    if (
        url.includes("?")
    ) {

        url =
            url.split("?")[0];

    }


    iframe.src =
        url +
        "?mobilePreview=true";


    modal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";
}


function closeMobilePreview() {

    const modal =
        document.getElementById(
            "mobileModal"
        );


    const iframe =
        document.getElementById(
            "mobilePreviewFrame"
        );


    modal.classList.remove(
        "active"
    );


    iframe.src =
        "about:blank";


    document.body.style.overflow =
        "";
}


/* ================= MOBILE MENU ================= */

function setupMobileMenu() {

    const button =
        document.getElementById(
            "mobileMenu"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            toast(
                "Use the bottom navigation to move around IntelliMail."
            );

        }
    );
}


/* ================= TOAST ================= */

let toastTimer;


function toast(message) {

    const element =
        document.getElementById(
            "toast"
        );


    const text =
        document.getElementById(
            "toastMessage"
        );


    text.textContent =
        message;


    element.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                element.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* ================= UTILITIES ================= */

function makeDate(date) {

    const year =
        date.getFullYear();


    const month =
        String(
            date.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            date.getDate()
        ).padStart(
            2,
            "0"
        );


    return (
        `${year}-${month}-${day}`
    );
}


function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}