// State Model
const state = {
  baseCapacityHours: 8.0,
  currentWorkloadHours: 8.0,
  completedHours: 0,
  activeDomain: 'all',
  simDuration: 2.0,
  todayDate: '2026-09-11', // Friday, Sep 11, 2026
  activeTimeHorizon: 'today', // 'today' | 'week' | 'month'
  activeCategory: 'all',
  selectedDate: '2026-09-11',
  rescheduleTargetTaskId: null,
  selectedRescheduleDate: null,
  selectedRescheduleTime: null,
  hasActiveCollision: false,
  proposedDates: [],
  activeGroupFilter: 'all',
  selectedAssignmentId: null,
  selectedMemberIndex: 0,
  addAsgFiles: [],
  addAsgMemberCount: 1,
  addAsgInputMode: 'upload',
  addAsgAnalysed: false,
  addAsgTasks: [],
  assignments: [
    {
      id: 'asg-1',
      title: 'Raft Consensus Algorithm & Distributed KV Store',
      course: 'CS301 Distributed Systems',
      courseCode: 'CS301',
      weightage: '35%',
      dueDate: '2026-09-18',
      dueDateLabel: 'Sep 18, 2026',
      status: 'in_progress',
      statusLabel: 'In Progress',
      priority: 'High',
      isGroup: true,
      members: [
        { name: 'You', role: 'State Machine & Protocol Leader', avatar: 'Y', isSelf: true, activeStatus: 'Active today' },
        { name: 'Sarah Chen', role: 'Log Replication & RPC Network', avatar: 'SC', isSelf: false, activeStatus: 'Active 3h ago' },
        { name: 'Marcus Wong', role: 'Chaos Testing & Benchmarking', avatar: 'MW', isSelf: false, activeStatus: 'Active 5h ago' }
      ],
      milestones: [
        { id: 'm1', title: 'Formal Protocol Specification & RPC Schema', description: 'Define state transitions for Follower, Candidate, and Leader. Specify RequestVote and AppendEntries RPC schemas.', assignedTo: 'You', hours: 2.5, completed: false, rawDate: '2026-09-11', startTime: '09:00', time: '09:00 AM – 11:30 AM', dueDate: 'Sep 11' },
        { id: 'm2', title: 'Leader Election & Heartbeat Timers', description: 'Implement randomized election timers (150ms-300ms) and periodic AppendEntries heartbeats from leader.', assignedTo: 'Sarah Chen', hours: 3.0, completed: false, rawDate: '2026-09-13', startTime: '10:00', time: '10:00 AM – 01:00 PM', dueDate: 'Sep 13' },
        { id: 'm3', title: 'Log Replication & Consistency Verification', description: 'Implement log matching invariant, term checks, commit index advance, and RPC retry logic.', assignedTo: 'Marcus Wong', hours: 3.5, completed: false, rawDate: '2026-09-15', startTime: '14:00', time: '02:00 PM – 05:30 PM', dueDate: 'Sep 15' },
        { id: 'm4', title: 'Chaos Monkey Partition & Crash Recovery Tests', description: 'Simulate network drops, minority/majority partitions, and disk persistence recovery benchmarks.', assignedTo: 'Sarah Chen', hours: 2.0, completed: false, rawDate: '2026-09-16', startTime: '15:00', time: '03:00 PM – 05:00 PM', dueDate: 'Sep 16' },
        { id: 'm5', title: 'Technical Report & Benchmark Graphs', description: 'Synthesize latency/throughput graphs across cluster nodes and compile architectural summary report.', assignedTo: 'You', hours: 2.5, completed: false, rawDate: '2026-09-17', startTime: '14:00', time: '02:00 PM – 04:30 PM', dueDate: 'Sep 17' }
      ],
      aiRiskAnalysis: {
        status: 'Workload Warning',
        tone: 'warning',
        text: 'Milestone 1 scheduled today for 2.5h. Cluster benchmarks due Sep 17; keep RPC tests on track to protect study buffers.'
      },
      resources: [
        { title: 'Assignment_Rubric_v2.pdf', type: 'PDF', size: '1.8 MB' },
        { title: 'GitHub: org-uni/cs301-raft-kvstore', type: 'Repo', link: 'github.com/uni/raft' },
        { title: 'Distributed Chaos Test Suite Docs', type: 'Docs', size: '420 KB' }
      ]
    },
    {
      id: 'asg-2',
      title: 'HCI Usability Evaluation & Interactive Mobile Prototype',
      course: 'HCI204 Interaction Design',
      courseCode: 'HCI204',
      weightage: '25%',
      dueDate: '2026-09-24',
      dueDateLabel: 'Sep 24, 2026',
      status: 'in_progress',
      statusLabel: 'In Progress',
      priority: 'Medium',
      isGroup: true,
      members: [
        { name: 'You', role: 'User Research & Wireframes', avatar: 'Y', isSelf: true, activeStatus: 'Active today' },
        { name: 'Chloe Taylor', role: 'Cognitive Walkthrough & Heuristics', avatar: 'CT', isSelf: false, activeStatus: 'Active 2d ago' },
        { name: 'David Kim', role: 'Interactive Figma Component Prototype', avatar: 'DK', isSelf: false, activeStatus: 'Active 4h ago' },
        { name: 'Elena Rostova', role: 'User Testing Lab Moderator', avatar: 'ER', isSelf: false, activeStatus: 'Active yesterday' },
        { name: 'Jordan Patel', role: 'SUS Analysis & Executive Pitch Video', avatar: 'JP', isSelf: false, activeStatus: 'Active 1d ago' }
      ],
      milestones: [
        { id: 'm1', title: 'User Research Synthesis & Journey Mapping', description: 'Conduct contextual inquiry and map user pain points for student cognitive workload management.', assignedTo: 'You', hours: 2.0, completed: false, rawDate: '2026-09-14', startTime: '10:00', time: '10:00 AM – 12:00 PM', dueDate: 'Sep 14' },
        { id: 'm2', title: 'Mid-fidelity Wireframes & Heuristic Audit', description: 'Draft Nielsen Norman 10-heuristic audit and create medium-fidelity component wireframes.', assignedTo: 'Chloe Taylor', hours: 2.5, completed: false, rawDate: '2026-09-16', startTime: '11:00', time: '11:00 AM – 01:30 PM', dueDate: 'Sep 16' },
        { id: 'm3', title: 'Interactive Prototype & Micro-interactions', description: 'Build clickable Figma component kit, fluid screen transitions, and bottom sheet gestures.', assignedTo: 'David Kim', hours: 3.0, completed: false, rawDate: '2026-09-19', startTime: '13:00', time: '01:00 PM – 04:00 PM', dueDate: 'Sep 19' },
        { id: 'm4', title: 'Usability Lab Sessions & Think-Aloud Protocol', description: 'Run moderated usability sessions with 5 participants and collect System Usability Scale (SUS) scores.', assignedTo: 'Elena Rostova', hours: 2.5, completed: false, rawDate: '2026-09-21', startTime: '14:00', time: '02:00 PM – 04:30 PM', dueDate: 'Sep 21' },
        { id: 'm5', title: 'Evaluation Synthesis Video & Executive Summary', description: 'Synthesize video highlight reel of user interactions and compile findings into final PDF deck.', assignedTo: 'Jordan Patel', hours: 2.0, completed: false, rawDate: '2026-09-24', startTime: '15:00', time: '03:00 PM – 05:00 PM', dueDate: 'Sep 24' }
      ],
      aiRiskAnalysis: {
        status: 'On Track',
        tone: 'success',
        text: 'Team pacing is optimal across 5 members. Initial user journey synthesis begins on Monday Sep 14.'
      },
      resources: [
        { title: 'Figma UI Component Kit & Flows', type: 'Figma', link: 'figma.com/@hci_team' },
        { title: 'Interview Audio & Transcripts.zip', type: 'Archive', size: '142 MB' }
      ]
    }
  ],
  categories: [
    { id: 'assignment', label: 'Assignment', class: 'cat-assignment' },
    { id: 'part_time_job', label: 'Part time job', class: 'cat-part_time_job' },
    { id: 'social', label: 'Social', class: 'cat-social' },
    { id: 'errands', label: 'Errands', class: 'cat-errands' }
  ],
  tasks: [
    // Day 1: 2026-09-11 (Friday, Today) — Highest Load Day: 8.0 Hours (4 tasks across all 4 categories)
    {
      id: 'task-asg-1-m1',
      title: '[CS301] Formal Protocol Specification & RPC Schema',
      time: '09:00 AM – 11:30 AM',
      category: 'assignment',
      categoryLabel: 'Assignment',
      date: '2026-09-11',
      hours: 2.5,
      status: 'pending',
      completed: false,
      assignedTo: 'You',
      asgId: 'asg-1',
      milestoneId: 'm1'
    },
    {
      id: 'task-2',
      title: 'Campus Library Information Desk Shift',
      time: '01:00 PM – 04:00 PM',
      category: 'part_time_job',
      categoryLabel: 'Part time job',
      date: '2026-09-11',
      hours: 3.0,
      status: 'pending',
      completed: false
    },
    {
      id: 'task-3',
      title: 'HCI Project Group Dinner & Social Sync',
      time: '05:30 PM – 07:00 PM',
      category: 'social',
      categoryLabel: 'Social',
      date: '2026-09-11',
      hours: 1.5,
      status: 'pending',
      completed: false
    },
    {
      id: 'task-4',
      title: 'Weekly Grocery Run & Meal Prep',
      time: '08:00 PM – 09:00 PM',
      category: 'errands',
      categoryLabel: 'Errands',
      date: '2026-09-11',
      hours: 1.0,
      status: 'pending',
      completed: false,
      isCurrent: true
    },

    // Day 2: 2026-09-14 (Monday) — 4.0 Hours (2 tasks)
    {
      id: 'task-asg-2-m1',
      title: '[HCI204] User Research Synthesis & Journey Mapping',
      time: '10:00 AM – 12:00 PM',
      category: 'assignment',
      categoryLabel: 'Assignment',
      date: '2026-09-14',
      hours: 2.0,
      status: 'pending',
      completed: false,
      assignedTo: 'You',
      asgId: 'asg-2',
      milestoneId: 'm1'
    },
    {
      id: 'task-6',
      title: 'Student Union Barista Training Shift',
      time: '02:00 PM – 04:00 PM',
      category: 'part_time_job',
      categoryLabel: 'Part time job',
      date: '2026-09-14',
      hours: 2.0,
      status: 'pending',
      completed: false
    },

    // Day 3: 2026-09-17 (Thursday) — 3.5 Hours (2 tasks)
    {
      id: 'task-7',
      title: 'Pharmacy & Lab Equipment Pickup',
      time: '11:00 AM – 12:00 PM',
      category: 'errands',
      categoryLabel: 'Errands',
      date: '2026-09-17',
      hours: 1.0,
      status: 'pending',
      completed: false
    },
    {
      id: 'task-asg-1-m5',
      title: '[CS301] Technical Report & Benchmark Graphs',
      time: '02:00 PM – 04:30 PM',
      category: 'assignment',
      categoryLabel: 'Assignment',
      date: '2026-09-17',
      hours: 2.5,
      status: 'pending',
      completed: false,
      assignedTo: 'You',
      asgId: 'asg-1',
      milestoneId: 'm5'
    },

    // Day 4: 2026-09-22 (Tuesday) — 3.0 Hours (2 tasks)
    {
      id: 'task-9',
      title: 'Peer Study Group & Coffee Discussion',
      time: '01:30 PM – 03:00 PM',
      category: 'social',
      categoryLabel: 'Social',
      date: '2026-09-22',
      hours: 1.5,
      status: 'pending',
      completed: false
    },
    {
      id: 'task-10',
      title: 'Dry Cleaning & Package Return',
      time: '04:30 PM – 06:00 PM',
      category: 'errands',
      categoryLabel: 'Errands',
      date: '2026-09-22',
      hours: 1.5,
      status: 'pending',
      completed: false
    }
  ]
};

// Calculate Workload % and Capacity Risk dynamically for the Dashboard
function updateCapacityMetrics() {
  const todayActiveTasks = state.tasks.filter(t => t.date === state.todayDate && t.status !== 'done');
  const remainingHours = todayActiveTasks.reduce((sum, t) => sum + (parseFloat(t.hours) || 0), 0);
  const workloadPct = Math.min(Math.round((remainingHours / state.baseCapacityHours) * 100), 150);

  // UI Elements
  const gaugeCircle = document.getElementById('gaugeCircle');
  if (!gaugeCircle) return;
  const workloadPercentText = document.getElementById('workloadPercentText');
  const hoursText = document.getElementById('hoursText');
  const remainingCapacityText = document.getElementById('remainingCapacityText');
  const statBarFill = document.getElementById('statBarFill');
  const riskLevelText = document.getElementById('riskLevelText');
  const workloadStatusSub = document.getElementById('workloadStatusSub');
  const companionSpeech = document.getElementById('companionSpeech');
  const companionMoodDot = document.getElementById('companionMoodDot');

  // Update hero metrics
  if (workloadPercentText) workloadPercentText.innerText = `${workloadPct}%`;
  if (hoursText) hoursText.innerText = `${remainingHours.toFixed(1)}h`;
  
  const freeHours = Math.max(0, state.baseCapacityHours - remainingHours).toFixed(1);
  if (remainingCapacityText) remainingCapacityText.innerText = `${freeHours}h`;
  if (workloadStatusSub) workloadStatusSub.innerText = `${workloadPct}% Full`;

  // Circular SVG Dashoffset (circumference = 2 * PI * 39 ≈ 245)
  const circumference = 245;
  const offset = circumference - (workloadPct / 100) * circumference;
  gaugeCircle.style.strokeDashoffset = Math.max(0, offset);

  // Progress bar fill width
  if (statBarFill) statBarFill.style.width = `${Math.min(workloadPct, 100)}%`;

  // Capacity Risk pressure meter
  const riskPressureScore = document.getElementById('riskPressureScore');
  const riskPressureFill = document.getElementById('riskPressureFill');
  const riskPressurePin = document.getElementById('riskPressurePin');
  const riskScoreVal = workloadPct >= 100 ? 98 : (workloadPct > 80 ? Math.min(Math.round(workloadPct * 1.14), 99) : workloadPct);

  if (riskPressureScore) riskPressureScore.innerText = `${riskScoreVal}%`;
  if (riskPressureFill) riskPressureFill.style.width = `${Math.min(riskScoreVal, 100)}%`;
  if (riskPressurePin) riskPressurePin.style.left = `${Math.min(riskScoreVal, 100)}%`;

  // Dynamic Today's Backpack Category Breakdown (uses default 4 categories)
  const breakdownList = document.getElementById('backpackBreakdownList');
  if (breakdownList) {
    const catColorClasses = {
      assignment: 'assignment',
      part_time_job: 'part_time_job',
      social: 'social',
      errands: 'errands'
    };

    breakdownList.innerHTML = state.categories.map(cat => {
      const catTasks = todayActiveTasks.filter(t => t.category === cat.id);
      const catHours = catTasks.reduce((sum, t) => sum + (parseFloat(t.hours) || 0), 0);
      const catPct = remainingHours > 0 ? Math.round((catHours / remainingHours) * 100) : 0;
      const catClass = catColorClasses[cat.id] || 'assignment';

      return `
        <div class="breakdown-item">
          <div class="breakdown-label"><span class="breakdown-dot ${catClass}"></span><span>${cat.label}</span></div>
          <div class="breakdown-bar-wrap"><div class="mini-bar-fill ${catClass}" style="width: ${catPct}%;"></div></div>
          <span class="breakdown-val">${catHours.toFixed(1)}h</span>
        </div>
      `;
    }).join('');
  }

  // Companion reactions & Risk level adjustments
  if (workloadPct > 80) {
    if (riskLevelText) {
      riskLevelText.innerText = `HIGH`;
      riskLevelText.style.color = 'var(--color-danger)';
      riskLevelText.style.opacity = '0.9';
    }
    if (statBarFill) statBarFill.style.background = 'var(--primary)';
    
    if (companionMoodDot) {
      companionMoodDot.className = 'companion-mood-dot critical';
      companionMoodDot.title = 'Packy: Busy / High Load';
    }
    if (companionSpeech) {
      companionSpeech.innerText = "Packy says: Your backpack is at maximum capacity (8.0h) today!";
    }
  } else if (workloadPct > 50) {
    if (riskLevelText) {
      riskLevelText.innerText = `MODERATE`;
      riskLevelText.style.color = 'var(--color-warning)';
      riskLevelText.style.opacity = '0.9';
    }
    if (statBarFill) statBarFill.style.background = 'var(--primary)';
    
    if (companionMoodDot) {
      companionMoodDot.className = 'companion-mood-dot busy';
      companionMoodDot.title = 'Packy: Focused';
    }
    if (companionSpeech) {
      companionSpeech.innerText = "Packy says: Focused pace! Remember to take short breaks.";
    }
  } else {
    if (riskLevelText) {
      riskLevelText.innerText = `BALANCED`;
      riskLevelText.style.color = 'var(--color-success)';
      riskLevelText.style.opacity = '0.9';
    }
    if (statBarFill) statBarFill.style.background = 'var(--primary)';
    
    if (companionMoodDot) {
      companionMoodDot.className = 'companion-mood-dot';
      companionMoodDot.title = 'Packy: Relaxed';
    }
    if (companionSpeech) {
      companionSpeech.innerText = "Packy says: Light load today! Great time for deep recovery.";
    }
  }
}

// Micro-Interaction: Tap Companion
function tapCompanion() {
  const companionAvatar = document.getElementById('companionAvatar');
  if (companionAvatar) {
    companionAvatar.style.transform = 'scale(1.15) rotate(-5deg)';
    setTimeout(() => {
      companionAvatar.style.transform = '';
    }, 300);
  }

  const messages = [
    "Packy: Remember, taking a 10-minute walk preserves your afternoon focus!",
    "Packy: You're doing great carrying today's load, Alex!",
    "Packy: Restorative buffers are protected—no guilt allowed!",
    "Packy: I'm keeping an eye on your Friday deadlines."
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  const speechElem = document.getElementById('companionSpeech');
  if (speechElem) {
    speechElem.innerText = randomMsg;
  }
}

// Quick Action Drawer (+ Button) Handlers
function openQuickAddModal() {
  const modal = document.getElementById('quickAddModal');
  if (modal) modal.classList.add('active');
}

function closeQuickAddModal() {
  const modal = document.getElementById('quickAddModal');
  if (modal) modal.classList.remove('active');
}

function handleQuickAction(actionType) {
  closeQuickAddModal();
  if (actionType === 'add_daily_task' || actionType === 'add_task') {
    showAddDailyTaskScreen();
  } else if (actionType === 'upload_assignment') {
    showAddAssignmentScreen();
  }
}

// ==========================================================================
// NEW DAILY TASK SCREEN LOGIC & VOICE ASSISTANT
// ==========================================================================
let dailyTaskSelectedCategoryId = 'assignment';
let selectedNewCatColor = 'purple';
let dailyTaskSpeechRecognition = null;
let isDailyTaskRecording = false;

function showAddDailyTaskScreen(prefilledDate) {
  // Hide all screens
  document.querySelectorAll('.app-screen').forEach(s => {
    s.style.display = 'none';
    s.classList.remove('active');
  });

  const screen = document.getElementById('screenAddDailyTask');
  if (screen) {
    screen.style.display = 'flex';
    screen.classList.add('active');
  }

  // Scroll to top of viewport
  const viewport = document.getElementById('viewportScroll');
  if (viewport) {
    viewport.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Set default date
  const dateInput = document.getElementById('dailyTaskDateInput');
  if (dateInput) {
    dateInput.value = prefilledDate || state.selectedDate || state.todayDate;
  }

  // Set default times (if empty)
  const startTimeInput = document.getElementById('dailyTaskStartTime');
  const endTimeInput = document.getElementById('dailyTaskEndTime');
  if (startTimeInput && !startTimeInput.value) startTimeInput.value = '14:00';
  if (endTimeInput && !endTimeInput.value) endTimeInput.value = '15:30';

  // Render category chips
  renderDailyTaskCategoryChips();

  // Hide inline category form by default
  toggleNewCategoryForm(false);

  // Reset voice state
  resetDailyTaskVoiceState();

  // Update Before/After Impact Preview
  updateDailyTaskImpactPreview();

  showToast('New Daily Task setup');
}

function hideAddDailyTaskScreen() {
  const screen = document.getElementById('screenAddDailyTask');
  if (screen) {
    screen.style.display = 'none';
    screen.classList.remove('active');
  }

  if (isDailyTaskRecording) {
    stopDailyTaskVoiceRecording();
  }

  // Return to Task list screen
  const taskScreen = document.getElementById('screenTaskList');
  if (taskScreen) {
    taskScreen.style.display = 'flex';
    taskScreen.classList.add('active');
  }

  // Update dock tab highlight
  document.querySelectorAll('.dock-tab').forEach(t => t.classList.remove('active'));
  const dockTabs = document.querySelectorAll('.dock-tab');
  if (dockTabs.length >= 2) {
    dockTabs[1]?.classList.add('active');
  }

  renderTasks();
}

// Backward compatibility alias
function openAddDailyTaskModal(prefilledDate) {
  showAddDailyTaskScreen(prefilledDate);
}

function closeAddDailyTaskModal() {
  hideAddDailyTaskScreen();
}

// Render Category Chips for Daily Task
function renderDailyTaskCategoryChips() {
  const container = document.getElementById('dailyTaskCatChips');
  if (!container) return;

  // Make sure a valid category is selected
  if (!state.categories.find(c => c.id === dailyTaskSelectedCategoryId)) {
    dailyTaskSelectedCategoryId = state.categories[0]?.id || 'assignment';
  }

  const colorMap = {
    assignment: '#7A5AF8',
    part_time_job: '#F59E0B',
    social: '#3B82F6',
    errands: '#A855F7',
    exercise: '#10B981',
    gaming: '#F43F5E',
    purple: '#7A5AF8',
    blue: '#3B82F6',
    green: '#10B981',
    amber: '#F59E0B',
    coral: '#F06A6A',
    pink: '#EC4899'
  };

  let html = '';
  state.categories.forEach(cat => {
    const isSelected = cat.id === dailyTaskSelectedCategoryId;
    const dotColor = cat.color || colorMap[cat.id] || '#7A5AF8';
    html += `
      <div class="daily-cat-chip ${isSelected ? 'active' : ''}" onclick="selectDailyTaskCategory('${cat.id}')">
        <span class="cat-dot" style="background: ${dotColor};"></span>
        <span>${cat.label}</span>
      </div>
    `;
  });

  container.innerHTML = html;
}

function selectDailyTaskCategory(catId) {
  dailyTaskSelectedCategoryId = catId;
  renderDailyTaskCategoryChips();
}

// Toggle Inline New Category Form (default hidden)
function toggleNewCategoryForm(forceState) {
  const box = document.getElementById('newCategoryInlineBox');
  if (!box) return;
  const show = typeof forceState === 'boolean' ? forceState : box.style.display === 'none';
  box.style.display = show ? 'block' : 'none';
  if (show) {
    const input = document.getElementById('newCategoryNameInput');
    if (input) {
      input.value = '';
    }
  }
}

// Pick color for new category
function selectCategoryColor(el, colorName) {
  selectedNewCatColor = colorName;
  document.querySelectorAll('#newCatColorPicker .color-dot').forEach(dot => dot.classList.remove('active'));
  if (el) el.classList.add('active');
}

// Save New Custom Category (hides form again after save)
function saveNewCustomCategory() {
  const input = document.getElementById('newCategoryNameInput');
  if (!input) return;
  const name = input.value.trim();
  if (!name) {
    showToast('Please enter a category name');
    return;
  }

  // Create unique slug
  const slug = 'cat_' + name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now().toString().slice(-4);
  const colorMap = {
    purple: '#7A5AF8',
    blue: '#3B82F6',
    green: '#10B981',
    amber: '#F59E0B',
    coral: '#F06A6A',
    pink: '#EC4899'
  };

  const newCat = {
    id: slug,
    label: name,
    class: 'cat-custom',
    color: colorMap[selectedNewCatColor] || '#7A5AF8'
  };

  state.categories.push(newCat);
  dailyTaskSelectedCategoryId = slug;

  // Refresh modal/screen category chips and global category filter chips
  renderDailyTaskCategoryChips();
  renderCategoryFilter();

  // Hide the inline add category form again after adding
  toggleNewCategoryForm(false);
  showToast(`Category "${name}" added!`);
}

// Update Duration calculation
function updateDailyTaskDuration() {
  const startTimeInput = document.getElementById('dailyTaskStartTime');
  const endTimeInput = document.getElementById('dailyTaskEndTime');
  if (!startTimeInput || !endTimeInput) return;

  const startVal = startTimeInput.value;
  const endVal = endTimeInput.value;
  if (!startVal || !endVal) return;

  const [sH, sM] = startVal.split(':').map(Number);
  const [eH, eM] = endVal.split(':').map(Number);
  let diffMins = (eH * 60 + eM) - (sH * 60 + sM);
  if (diffMins < 0) diffMins += 24 * 60; // Cross midnight wrap

  // Recalculate Before/After Impact Preview in real-time
  updateDailyTaskImpactPreview();
}

// Apply Duration Preset (e.g. +30m, +1h)
function applyDailyTaskDurationPreset(minsToAdd) {
  const startTimeInput = document.getElementById('dailyTaskStartTime');
  const endTimeInput = document.getElementById('dailyTaskEndTime');
  if (!startTimeInput || !endTimeInput) return;

  const startVal = startTimeInput.value || '14:00';
  const [sH, sM] = startVal.split(':').map(Number);
  const endTotalMins = (sH * 60 + sM + minsToAdd) % (24 * 60);

  const eH = String(Math.floor(endTotalMins / 60)).padStart(2, '0');
  const eM = String(endTotalMins % 60).padStart(2, '0');
  endTimeInput.value = `${eH}:${eM}`;

  updateDailyTaskDuration();
}

// Real-Time Before/After Impact Preview ("Should I Say Yes?")
function updateDailyTaskImpactPreview() {
  const card = document.getElementById('dailyTaskImpactCard');
  if (!card) return;

  const dateInput = document.getElementById('dailyTaskDateInput');
  const startTimeInput = document.getElementById('dailyTaskStartTime');
  const endTimeInput = document.getElementById('dailyTaskEndTime');

  const targetDate = dateInput?.value || state.selectedDate || state.todayDate;
  const startVal = startTimeInput?.value || '14:00';
  const endVal = endTimeInput?.value || '15:30';

  // Calculate duration of proposed task
  const [sH, sM] = startVal.split(':').map(Number);
  const [eH, eM] = endVal.split(':').map(Number);
  let diffMins = (eH * 60 + eM) - (sH * 60 + sM);
  if (diffMins < 0) diffMins += 24 * 60; // Midnight cross
  const taskHours = Math.max(0.5, parseFloat((diffMins / 60).toFixed(1)));

  // Current day workload baseline (Before)
  const current = calculateDayWorkload(targetDate);
  const beforeHours = current.hours;
  const beforePct = current.pct;
  const beforeBuffer = current.freeHours;

  // Projected day workload (After)
  const afterHours = Number((beforeHours + taskHours).toFixed(1));
  const afterPct = Math.min(Math.round((afterHours / state.baseCapacityHours) * 100), 200);
  const afterBuffer = Number(Math.max(0, state.baseCapacityHours - afterHours).toFixed(1));

  // Delta calculations
  const deltaPct = Math.max(0, afterPct - beforePct);
  const bufferReduction = Number(Math.max(0, beforeBuffer - afterBuffer).toFixed(1));

  // Format date label (e.g. "Fri, Sep 11")
  const dateLabel = formatTaskDateLabel(targetDate) || targetDate;

  // UI Elements
  const capBefore = document.getElementById('dailyImpactCapBefore');
  const capAfter = document.getElementById('dailyImpactCapAfter');
  const deltaPill = document.getElementById('dailyImpactDeltaPill');
  const fillBaseline = document.getElementById('dailyImpactFillBaseline');
  const fillDelta = document.getElementById('dailyImpactFillDelta');
  const bufferBefore = document.getElementById('dailyImpactBufferBefore');
  const bufferAfter = document.getElementById('dailyImpactBufferAfter');
  const bufferPill = document.getElementById('dailyImpactBufferPill');
  const fillBufferRemain = document.getElementById('dailyImpactFillBufferRemain');
  const fillBufferUsed = document.getElementById('dailyImpactFillBufferUsed');
  const bottleneckBox = document.getElementById('dailyImpactBottleneckBox');
  const alertIcon = document.getElementById('dailyImpactAlertIcon');
  const alertTitle = document.getElementById('dailyImpactAlertTitle');
  const alertDesc = document.getElementById('dailyImpactAlertDesc');

  // Update numbers and badges
  if (capBefore) capBefore.innerText = `${beforePct}%`;
  if (capAfter) capAfter.innerText = `${afterPct}%`;
  if (deltaPill) deltaPill.innerText = `[+${deltaPct}% / ${taskHours}h]`;

  if (bufferBefore) bufferBefore.innerText = `${beforeBuffer.toFixed(1)}h`;
  if (bufferAfter) bufferAfter.innerText = `${afterBuffer.toFixed(1)}h`;
  if (bufferPill) bufferPill.innerText = `[-${bufferReduction.toFixed(1)}h]`;

  // Visual Bars
  // 1. Capacity progress bar (Baseline in Indigo + Delta in state color)
  const baseFillPct = Math.min(beforePct, 100);
  const deltaFillPct = Math.min(deltaPct, Math.max(0, 100 - baseFillPct));
  if (fillBaseline) fillBaseline.style.width = `${baseFillPct}%`;
  if (fillDelta) fillDelta.style.width = `${deltaFillPct}%`;

  // 2. Buffer visual bar
  const remainFillPct = Math.min(Math.round((afterBuffer / state.baseCapacityHours) * 100), 100);
  const usedFillPct = Math.min(Math.round((bufferReduction / state.baseCapacityHours) * 100), 100 - remainFillPct);
  if (fillBufferRemain) fillBufferRemain.style.width = `${remainFillPct}%`;
  if (fillBufferUsed) fillBufferUsed.style.width = `${usedFillPct}%`;

  // Evaluate Risk Tiers: Overload (>100%), Warning (>=80%), Safe (<80%)
  if (afterPct > 100) {
    // Critical Overload
    if (deltaPill) deltaPill.className = 'impact-delta-pill font-mono danger';
    if (bufferPill) bufferPill.className = 'impact-reduction-pill font-mono danger';
    if (fillDelta) fillDelta.className = 'daily-impact-fill-delta danger';

    if (bottleneckBox) bottleneckBox.className = 'daily-impact-alert-box danger';
    if (alertIcon) alertIcon.innerText = '⚠️';
    if (alertTitle) alertTitle.innerText = `Critical Capacity Exceeded (${afterPct}%)`;
    if (alertDesc) {
      alertDesc.innerText = `Adding this ${taskHours}h task pushes ${dateLabel} to ${afterHours}h against your ${state.baseCapacityHours.toFixed(1)}h limit (${afterBuffer.toFixed(1)}h buffer). High burnout risk — consider shortening duration or scheduling on another day.`;
    }
  } else if (afterPct >= 80) {
    // High Load / Bottleneck Warning
    if (deltaPill) deltaPill.className = 'impact-delta-pill font-mono warning';
    if (bufferPill) bufferPill.className = 'impact-reduction-pill font-mono warning';
    if (fillDelta) fillDelta.className = 'daily-impact-fill-delta warning';

    if (bottleneckBox) bottleneckBox.className = 'daily-impact-alert-box warning';
    if (alertIcon) alertIcon.innerText = '⚡';
    if (alertTitle) alertTitle.innerText = `Cognitive Bottleneck Warning (${afterPct}%)`;
    if (alertDesc) {
      alertDesc.innerText = `Adding this ${taskHours}h task pushes ${dateLabel} to ${afterHours}h (${afterPct}% capacity). Restorative buffer narrows to ${afterBuffer.toFixed(1)}h. Pace your focus blocks carefully.`;
    }
  } else {
    // Safe Headroom
    if (deltaPill) deltaPill.className = 'impact-delta-pill font-mono safe';
    if (bufferPill) bufferPill.className = 'impact-reduction-pill font-mono safe';
    if (fillDelta) fillDelta.className = 'daily-impact-fill-delta safe';

    if (bottleneckBox) bottleneckBox.className = 'daily-impact-alert-box safe';
    if (alertIcon) alertIcon.innerText = '✓';
    if (alertTitle) alertTitle.innerText = `Sustainable Load (${afterPct}%)`;
    if (alertDesc) {
      alertDesc.innerText = `Adding this ${taskHours}h task keeps ${dateLabel} at ${afterPct}% with a healthy ${afterBuffer.toFixed(1)}h buffer. Safe to accept without fatigue risk.`;
    }
  }
}

// Format 24h time ("14:00") into 12h time string ("02:00 PM")
function format24hTo12h(time24) {
  if (!time24) return '';
  const [hStr, mStr] = time24.split(':');
  let h = parseInt(hStr, 10);
  const m = mStr || '00';
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  if (h === 0) h = 12;
  return `${String(h).padStart(2, '0')}:${m} ${ampm}`;
}

// Voice Recognition & NLP Parser
function resetDailyTaskVoiceState() {
  isDailyTaskRecording = false;
  const bar = document.getElementById('dailyTaskVoiceBar');
  const wave = document.getElementById('voiceWaveAnim');
  const title = document.getElementById('voiceStatusText');
  const hint = document.getElementById('voiceHintText');

  if (bar) bar.classList.remove('is-listening');
  if (wave) wave.style.display = 'none';
  if (title) title.innerText = 'Voice Quick-Fill';
  if (hint) hint.innerText = 'Tap mic to speak (e.g. "Review CS301 from 2pm to 3:30pm")';
}

function toggleDailyTaskVoiceRecording() {
  if (isDailyTaskRecording) {
    stopDailyTaskVoiceRecording();
  } else {
    startDailyTaskVoiceRecording();
  }
}

function startDailyTaskVoiceRecording() {
  const bar = document.getElementById('dailyTaskVoiceBar');
  const wave = document.getElementById('voiceWaveAnim');
  const title = document.getElementById('voiceStatusText');
  const hint = document.getElementById('voiceHintText');

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    try {
      dailyTaskSpeechRecognition = new SpeechRecognition();
      dailyTaskSpeechRecognition.continuous = false;
      dailyTaskSpeechRecognition.interimResults = true;
      dailyTaskSpeechRecognition.lang = 'en-US';

      dailyTaskSpeechRecognition.onstart = function() {
        isDailyTaskRecording = true;
        if (bar) bar.classList.add('is-listening');
        if (wave) wave.style.display = 'flex';
        if (title) title.innerText = 'Listening to your voice...';
        if (hint) hint.innerText = 'Speak task name, category, or time naturally...';
      };

      dailyTaskSpeechRecognition.onresult = function(event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        if (hint) hint.innerText = `"${transcript}"`;
        if (event.results[0].isFinal) {
          parseVoiceTaskInput(transcript);
        }
      };

      dailyTaskSpeechRecognition.onerror = function(err) {
        console.warn('Speech recognition error / not permitted:', err);
        fallbackSimulatedVoiceInput();
      };

      dailyTaskSpeechRecognition.onend = function() {
        stopDailyTaskVoiceRecording();
      };

      dailyTaskSpeechRecognition.start();
      return;
    } catch (e) {
      console.warn('SpeechRecognition start failed:', e);
    }
  }

  // Fallback simulated interactive voice dictation
  fallbackSimulatedVoiceInput();
}

function stopDailyTaskVoiceRecording() {
  if (dailyTaskSpeechRecognition) {
    try { dailyTaskSpeechRecognition.stop(); } catch(e){}
    dailyTaskSpeechRecognition = null;
  }
  resetDailyTaskVoiceState();
}

// Fallback interactive voice simulation
function fallbackSimulatedVoiceInput() {
  const bar = document.getElementById('dailyTaskVoiceBar');
  const wave = document.getElementById('voiceWaveAnim');
  const title = document.getElementById('voiceStatusText');
  const hint = document.getElementById('voiceHintText');

  isDailyTaskRecording = true;
  if (bar) bar.classList.add('is-listening');
  if (wave) wave.style.display = 'flex';
  if (title) title.innerText = 'Listening to your voice...';

  const samples = [
    'Review Distributed Systems slides from 2pm to 3:30pm',
    'Campus library study group assignment at 4pm for 1.5 hours',
    'Evening gym exercise workout from 6pm to 7:15pm',
    'Grocery errands run tomorrow at 11am to 12pm'
  ];
  const chosenSample = samples[Math.floor(Math.random() * samples.length)];

  if (hint) hint.innerText = 'Transcribing...';

  setTimeout(() => {
    if (hint) hint.innerText = `"${chosenSample}"`;
    setTimeout(() => {
      parseVoiceTaskInput(chosenSample);
      stopDailyTaskVoiceRecording();
      showToast('AI Voice Input transcribed & auto-filled!');
    }, 700);
  }, 1100);
}

// Natural Language Parser for Voice Input
function parseVoiceTaskInput(transcript) {
  if (!transcript) return;
  const lower = transcript.toLowerCase();

  // 1. Detect category from keywords
  let matchedCat = null;
  if (lower.includes('assignment') || lower.includes('study') || lower.includes('lecture') || lower.includes('lab') || lower.includes('cs301') || lower.includes('hci') || lower.includes('notes') || lower.includes('exam') || lower.includes('report') || lower.includes('thesis')) {
    matchedCat = state.categories.find(c => c.id === 'assignment');
  } else if (lower.includes('job') || lower.includes('shift') || lower.includes('work') || lower.includes('office') || lower.includes('barista') || lower.includes('desk') || lower.includes('library')) {
    matchedCat = state.categories.find(c => c.id === 'part_time_job');
  } else if (lower.includes('social') || lower.includes('friend') || lower.includes('dinner') || lower.includes('lunch') || lower.includes('meet') || lower.includes('chat') || lower.includes('club') || lower.includes('game') || lower.includes('gaming') || lower.includes('coffee')) {
    matchedCat = state.categories.find(c => c.id === 'social');
  } else if (lower.includes('errand') || lower.includes('grocery') || lower.includes('buy') || lower.includes('clean') || lower.includes('shop') || lower.includes('gym') || lower.includes('exercise') || lower.includes('run') || lower.includes('laundry')) {
    matchedCat = state.categories.find(c => c.id === 'errands');
  } else {
    // Check if custom category matches
    matchedCat = state.categories.find(c => lower.includes(c.label.toLowerCase()));
  }

  if (matchedCat) {
    dailyTaskSelectedCategoryId = matchedCat.id;
    renderDailyTaskCategoryChips();
  }

  // 2. Detect Times: e.g. "from 2pm to 3:30pm" or "at 4pm for 1.5 hours"
  const timeFromToMatch = lower.match(/(?:from\s+)?(\d{1,2})(?::(\d{2}))?\s*(am|pm)\s*(?:to|-)\s*(\d{1,2})(?::(\d{2}))?\s*(am|pm)/i);
  const startTimeInput = document.getElementById('dailyTaskStartTime');
  const endTimeInput = document.getElementById('dailyTaskEndTime');

  if (timeFromToMatch && startTimeInput && endTimeInput) {
    let sH = parseInt(timeFromToMatch[1], 10);
    const sM = timeFromToMatch[2] || '00';
    const sAmpm = timeFromToMatch[3].toLowerCase();
    if (sAmpm === 'pm' && sH !== 12) sH += 12;
    if (sAmpm === 'am' && sH === 12) sH = 0;

    let eH = parseInt(timeFromToMatch[4], 10);
    const eM = timeFromToMatch[5] || '00';
    const eAmpm = timeFromToMatch[6].toLowerCase();
    if (eAmpm === 'pm' && eH !== 12) eH += 12;
    if (eAmpm === 'am' && eH === 12) eH = 0;

    startTimeInput.value = `${String(sH).padStart(2, '0')}:${sM}`;
    endTimeInput.value = `${String(eH).padStart(2, '0')}:${eM}`;
    updateDailyTaskDuration();
  }

  // 3. Extract Clean Title (remove time & filler prefixes)
  let cleanTitle = transcript
    .replace(/(?:from\s+)?\d{1,2}(?::\d{2})?\s*(?:am|pm)\s*(?:to|-)\s*\d{1,2}(?::\d{2})?\s*(?:am|pm)/gi, '')
    .replace(/at\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)/gi, '')
    .replace(/for\s+\d+(?:\.\d+)?\s*(?:hours?|hrs?|mins?|minutes?)/gi, '')
    .replace(/\b(?:today|tomorrow|yesterday)\b/gi, '')
    .trim();

  // Detect "tomorrow" date shift if spoken
  if (lower.includes('tomorrow')) {
    const d = new Date(state.todayDate);
    d.setDate(d.getDate() + 1);
    const dateInput = document.getElementById('dailyTaskDateInput');
    if (dateInput) dateInput.value = d.toISOString().split('T')[0];
  }

  // Capitalize first letter
  if (cleanTitle) {
    cleanTitle = cleanTitle.charAt(0).toUpperCase() + cleanTitle.slice(1);
    const titleInput = document.getElementById('dailyTaskTitleInput');
    if (titleInput) titleInput.value = cleanTitle;
  }

  updateDailyTaskDuration();
  updateDailyTaskImpactPreview();
}

// Handle Create Daily Task Submit
function handleCreateDailyTask(event) {
  if (event) event.preventDefault();

  const titleInput = document.getElementById('dailyTaskTitleInput');
  const dateInput = document.getElementById('dailyTaskDateInput');
  const startTimeInput = document.getElementById('dailyTaskStartTime');
  const endTimeInput = document.getElementById('dailyTaskEndTime');

  if (!titleInput || !titleInput.value.trim()) {
    showToast('Please enter a task name');
    return;
  }

  const title = titleInput.value.trim();
  const dateVal = dateInput?.value || state.selectedDate || state.todayDate;
  const startVal = startTimeInput?.value || '14:00';
  const endVal = endTimeInput?.value || '15:30';

  const [sH, sM] = startVal.split(':').map(Number);
  const [eH, eM] = endVal.split(':').map(Number);
  let diffMins = (eH * 60 + eM) - (sH * 60 + sM);
  if (diffMins < 0) diffMins += 24 * 60;
  const hours = parseFloat((diffMins / 60).toFixed(1));

  const timeStr = `${format24hTo12h(startVal)} – ${format24hTo12h(endVal)}`;

  const catObj = state.categories.find(c => c.id === dailyTaskSelectedCategoryId) || state.categories[0];

  const newTask = {
    id: 'task_' + Date.now(),
    title: title,
    time: timeStr,
    category: catObj.id,
    categoryLabel: catObj.label,
    date: dateVal,
    hours: hours > 0 ? hours : 1.0,
    status: 'pending',
    completed: false
  };

  state.tasks.push(newTask);

  // Update capacity metrics and task screens
  updateCapacityMetrics();
  renderCalendar();
  renderCategoryFilter();

  // Reset form
  titleInput.value = '';
  hideAddDailyTaskScreen();

  showToast(`Daily task added: "${title}" (${catObj.label})`);
}

// AI Rebalance Modal Handlers
function openRebalanceModal() {
  const modal = document.getElementById('rebalanceModal');
  if (modal) modal.classList.add('active');
}

function closeRebalanceModal() {
  const modal = document.getElementById('rebalanceModal');
  if (modal) modal.classList.remove('active');
}

function confirmRebalance() {
  closeRebalanceModal();
  showToast('AI Rebalance applied: Literature Review moved to Saturday. Friday load lowered to 72%!');
}

// Risk Explain Modal Handlers
function openRiskExplainModal() {
  const modal = document.getElementById('riskExplainModal');
  if (modal) modal.classList.add('active');
}

function closeRiskExplainModal() {
  const modal = document.getElementById('riskExplainModal');
  if (modal) modal.classList.remove('active');
}

// Supportive Notifications Modal Handlers
function openNotificationsModal() {
  const modal = document.getElementById('notificationsModal');
  if (modal) modal.classList.add('active');
}

function closeNotificationsModal() {
  const modal = document.getElementById('notificationsModal');
  if (modal) modal.classList.remove('active');
}

// ==========================================================================
// TASK LIST SCREEN LOGIC
// ==========================================================================

// Switch Screen View between Home, Task List, Group Projects, and User Profile
function switchNavTab(tabElem, tabName) {
  document.querySelectorAll('.dock-tab').forEach(t => t.classList.remove('active'));
  if (tabElem && tabElem.classList) {
    tabElem.classList.add('active');
  } else {
    const dockTabs = document.querySelectorAll('.dock-tab');
    if (tabName === 'home' && dockTabs[0]) dockTabs[0].classList.add('active');
    else if (tabName === 'task' && dockTabs[1]) dockTabs[1].classList.add('active');
    else if (tabName === 'group' && dockTabs[2]) dockTabs[2].classList.add('active');
    else if (tabName === 'profile' && dockTabs[3]) dockTabs[3].classList.add('active');
  }

  const screenDashboard = document.getElementById('screenDashboard');
  const screenTaskList = document.getElementById('screenTaskList');
  const screenGroupAssignment = document.getElementById('screenGroupAssignment');
  const screenAssignmentDetail = document.getElementById('screenAssignmentDetail');
  const screenAddAssignment = document.getElementById('screenAddAssignment');
  const screenAddDailyTask = document.getElementById('screenAddDailyTask');
  const screenProfile = document.getElementById('screenProfile');

  if (screenAssignmentDetail) {
    screenAssignmentDetail.style.display = 'none';
    screenAssignmentDetail.classList.remove('active');
  }
  if (screenAddAssignment) {
    screenAddAssignment.style.display = 'none';
    screenAddAssignment.classList.remove('active');
  }
  if (screenAddDailyTask) {
    screenAddDailyTask.style.display = 'none';
    screenAddDailyTask.classList.remove('active');
  }

  if (tabName === 'group') {
    if (screenDashboard) {
      screenDashboard.style.display = 'none';
      screenDashboard.classList.remove('active');
    }
    if (screenTaskList) {
      screenTaskList.style.display = 'none';
      screenTaskList.classList.remove('active');
    }
    if (screenProfile) {
      screenProfile.style.display = 'none';
      screenProfile.classList.remove('active');
    }
    if (screenGroupAssignment) {
      screenGroupAssignment.style.display = 'flex';
      screenGroupAssignment.classList.add('active');
    }
    renderGroupAssignmentScreen();
    showToast('Group & Projects loaded');
  } else if (tabName === 'task') {
    if (screenDashboard) {
      screenDashboard.style.display = 'none';
      screenDashboard.classList.remove('active');
    }
    if (screenGroupAssignment) {
      screenGroupAssignment.style.display = 'none';
      screenGroupAssignment.classList.remove('active');
    }
    if (screenProfile) {
      screenProfile.style.display = 'none';
      screenProfile.classList.remove('active');
    }
    if (screenTaskList) {
      screenTaskList.style.display = 'flex';
      screenTaskList.classList.add('active');
    }
    syncMilestonesToTaskList();
    renderTaskListScreen();
    scrollToCurrentTask();
    showToast('Task list loaded');
  } else if (tabName === 'home') {
    if (screenTaskList) {
      screenTaskList.style.display = 'none';
      screenTaskList.classList.remove('active');
    }
    if (screenGroupAssignment) {
      screenGroupAssignment.style.display = 'none';
      screenGroupAssignment.classList.remove('active');
    }
    if (screenProfile) {
      screenProfile.style.display = 'none';
      screenProfile.classList.remove('active');
    }
    if (screenDashboard) {
      screenDashboard.style.display = 'flex';
      screenDashboard.classList.add('active');
    }
    updateCapacityMetrics();
    showToast('Home dashboard');
  } else if (tabName === 'profile') {
    if (screenDashboard) {
      screenDashboard.style.display = 'none';
      screenDashboard.classList.remove('active');
    }
    if (screenTaskList) {
      screenTaskList.style.display = 'none';
      screenTaskList.classList.remove('active');
    }
    if (screenGroupAssignment) {
      screenGroupAssignment.style.display = 'none';
      screenGroupAssignment.classList.remove('active');
    }
    if (screenProfile) {
      screenProfile.style.display = 'flex';
      screenProfile.classList.add('active');
    }
    renderProfileScreen();
    showToast('User Profile & Pending Tasks loaded');
  } else if (tabName === 'addAssignment') {
    showAddAssignmentScreen();
  } else {
    showToast(`${tabName.charAt(0).toUpperCase() + tabName.slice(1)} selected`);
  }
}

// Set Time Horizon: 'today' | 'week' | 'month'
function setTimeHorizon(horizon) {
  state.activeTimeHorizon = horizon;

  document.getElementById('horizonBtnToday').classList.toggle('active', horizon === 'today');
  document.getElementById('horizonBtnWeek').classList.toggle('active', horizon === 'week');
  document.getElementById('horizonBtnMonth').classList.toggle('active', horizon === 'month');

  if (horizon === 'today') {
    state.selectedDate = state.todayDate;
  } else {
    // When switching to week or month, view all items within the horizon by default
    state.selectedDate = null;
  }

  renderCalendar();
  renderCategoryFilter();
  renderTasks();
}

// 7-day week dates helper (Sep 7 – Sep 13, 2026)
const weekDaysData = [
  { name: 'Mon', date: '2026-09-07', num: 7 },
  { name: 'Tue', date: '2026-09-08', num: 8 },
  { name: 'Wed', date: '2026-09-09', num: 9 },
  { name: 'Thu', date: '2026-09-10', num: 10 },
  { name: 'Fri', date: '2026-09-11', num: 11, isToday: true },
  { name: 'Sat', date: '2026-09-12', num: 12 },
  { name: 'Sun', date: '2026-09-13', num: 13 }
];

// Render Calendar View (7-Day Week Strip or Month Grid)
function renderCalendar() {
  const calSection = document.getElementById('calendarSection');
  const mount = document.getElementById('calendarViewMount');
  const titleElem = document.getElementById('calendarMonthTitle');
  const labelElem = document.getElementById('calendarScopeLabel');

  // For Today view: Do not show the calendar view
  if (state.activeTimeHorizon === 'today') {
    if (calSection) calSection.style.display = 'none';
    return;
  }

  // Show calendar section for week and month views
  if (calSection) calSection.style.display = 'flex';
  if (!mount) return;

  if (state.activeTimeHorizon === 'month') {
    if (labelElem) labelElem.innerText = 'Month View';
    if (titleElem) titleElem.innerText = 'September 2026';

    // September 2026: 30 days, starting on Tuesday (1 empty slot for Mon)
    const weekdayHeaders = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    let html = '<div class="calendar-month-grid">';
    
    // Header row
    weekdayHeaders.forEach(h => {
      html += `<div class="cal-month-header">${h}</div>`;
    });

    // 1 empty cell before Sep 1 (starts on Tuesday)
    html += '<div class="cal-month-day empty"></div>';

    for (let day = 1; day <= 30; day++) {
      const dateStr = `2026-09-${day.toString().padStart(2, '0')}`;
      const isToday = dateStr === state.todayDate;
      const isActive = state.selectedDate === dateStr;
      const hasTask = state.tasks.some(t => t.date === dateStr);

      const classes = [
        'cal-month-day',
        isToday ? 'is-today' : '',
        isActive ? 'active' : '',
        hasTask ? 'cal-month-has-task' : ''
      ].filter(Boolean).join(' ');

      html += `<div class="${classes}" onclick="selectCalendarDate('${dateStr}')" title="${dateStr}">
        <span>${day}</span>
      </div>`;
    }

    html += '</div>';
    mount.innerHTML = html;

  } else {
    // Week view: Display 7-day strip
    if (labelElem) labelElem.innerText = '7-Day Week View';
    if (titleElem) titleElem.innerText = 'Sep 7 – Sep 13, 2026';

    let html = '<div class="calendar-week-strip">';
    weekDaysData.forEach(day => {
      const isSelected = state.selectedDate === day.date;
      const dayTasks = state.tasks.filter(t => t.date === day.date);
      const hasTasks = dayTasks.length > 0;

      const classes = [
        'cal-day-cell',
        day.isToday ? 'is-today' : '',
        isSelected ? 'active' : ''
      ].filter(Boolean).join(' ');

      html += `
        <div class="${classes}" onclick="selectCalendarDate('${day.date}')" title="${day.date}">
          <span class="cal-day-name">${day.name}</span>
          <span class="cal-day-num">${day.num}</span>
          <div class="cal-day-indicators">
            ${hasTasks ? '<span class="cal-day-dot"></span>' : ''}
          </div>
        </div>
      `;
    });
    html += '</div>';
    mount.innerHTML = html;
  }
}

// Select a date on the calendar
function selectCalendarDate(dateStr) {
  if (state.selectedDate === dateStr) {
    // Deselect if already active -> show all in horizon
    state.selectedDate = null;
  } else {
    state.selectedDate = dateStr;
  }
  renderCalendar();
  renderCategoryFilter();
  renderTasks();
}

// Reset calendar filter to show all tasks in the active horizon
function resetCalendarFilter() {
  state.selectedDate = null;
  renderCalendar();
  renderCategoryFilter();
  renderTasks();
}

// Render Category Filter Chips with task counts
function renderCategoryFilter() {
  const container = document.getElementById('categoryChipsContainer');
  if (!container) return;

  // Compute tasks in the active horizon / selected date
  const horizonTasks = state.tasks.filter(task => {
    if (state.selectedDate) {
      return task.date === state.selectedDate;
    }
    if (state.activeTimeHorizon === 'today') {
      return task.date === state.todayDate;
    }
    if (state.activeTimeHorizon === 'week') {
      return task.date >= '2026-09-07' && task.date <= '2026-09-13';
    }
    if (state.activeTimeHorizon === 'month') {
      return task.date.startsWith('2026-09');
    }
    return true;
  });

  const totalCount = horizonTasks.length;

  let html = `
    <button class="category-chip ${state.activeCategory === 'all' ? 'active' : ''}" onclick="filterByCategory('all')">
      <span>All</span>
      <span class="category-chip-count">${totalCount}</span>
    </button>
  `;

  state.categories.forEach(cat => {
    const isActive = state.activeCategory === cat.id;
    const catCount = horizonTasks.filter(t => t.category === cat.id).length;
    html += `
      <button class="category-chip ${isActive ? 'active' : ''}" onclick="filterByCategory('${cat.id}')">
        <span>${cat.label}</span>
        <span class="category-chip-count">${catCount}</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

// Filter tasks by category
function filterByCategory(catId) {
  state.activeCategory = catId;
  renderCategoryFilter();
  renderTasks();
  if (catId === 'all') {
    scrollToCurrentTask();
  }
  const catObj = state.categories.find(c => c.id === catId);
  const label = catObj ? catObj.label : 'All';
  showToast(`Category: ${label}`);
}

// Helper to parse start time into minutes for chronological sorting
function parseTimeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const startPart = timeStr.split('–')[0].split('-')[0].trim();
  const match = startPart.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return 0;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const meridian = match[3].toUpperCase();
  if (meridian === 'PM' && hours !== 12) hours += 12;
  if (meridian === 'AM' && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

// Helper to format date label for week/month view (e.g. "Fri, Sep 11")
function formatTaskDateLabel(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${days[dateObj.getDay()]}, ${months[m - 1]} ${d}`;
}

// Helper to identify if a task is the current time task
function isCurrentTimeTask(task) {
  if (task.isCurrent) return true;
  if (task.date === state.todayDate) {
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const startMins = parseTimeToMinutes(task.time.split('–')[0]);
    const endMins = parseTimeToMinutes(task.time.split('–')[1] || task.time.split('–')[0]);
    if (currentMins >= startMins && currentMins <= endMins) return true;
  }
  return false;
}

// Render Tasks matching current filters
function renderTasks() {
  const container = document.getElementById('taskListContainer');
  const countBadge = document.getElementById('taskCountBadge');
  const subTitle = document.getElementById('taskSubtitle');
  if (!container) return;

  // Filter by Time Horizon & Selected Date
  let filtered = state.tasks.filter(task => {
    if (state.selectedDate) {
      return task.date === state.selectedDate;
    }
    if (state.activeTimeHorizon === 'today') {
      return task.date === state.todayDate;
    }
    if (state.activeTimeHorizon === 'week') {
      // Mon Sep 7 to Sun Sep 13
      return task.date >= '2026-09-07' && task.date <= '2026-09-13';
    }
    if (state.activeTimeHorizon === 'month') {
      // Entire September 2026
      return task.date.startsWith('2026-09');
    }
    return true;
  });

  // Filter by Category
  if (state.activeCategory !== 'all') {
    filtered = filtered.filter(task => task.category === state.activeCategory);
  }

  // 1. Arrange tasks in descending order (latest at top, earliest at bottom)
  filtered.sort((a, b) => {
    if (a.date !== b.date) {
      return b.date.localeCompare(a.date);
    }
    return parseTimeToMinutes(b.time) - parseTimeToMinutes(a.time);
  });

  // 2. Identify the current time task
  let currentTask = filtered.find(t => isCurrentTimeTask(t) && t.status !== 'done');
  if (!currentTask) {
    currentTask = filtered.find(t => t.isCurrent);
  }
  if (!currentTask && filtered.length > 0) {
    currentTask = filtered.find(t => t.status !== 'done') || filtered[0];
  }

  // Update counts
  if (countBadge) {
    countBadge.innerText = `${filtered.length} ${filtered.length === 1 ? 'task' : 'tasks'}`;
  }
  if (subTitle) {
    let scopeText = state.activeTimeHorizon === 'today' ? 'Today' : state.activeTimeHorizon === 'week' ? 'This Week' : 'This Month';
    if (state.selectedDate) {
      scopeText = state.selectedDate === state.todayDate ? 'Today' : `Sep ${parseInt(state.selectedDate.split('-')[2], 10)}`;
    }
    subTitle.innerText = `${scopeText} · ${filtered.length} ${filtered.length === 1 ? 'task' : 'tasks'}`;
  }

  // Render empty state if no tasks
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="task-empty-state">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.6;">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <h4 class="task-empty-title">No tasks found</h4>
        <p class="task-empty-sub">Relax and recharge or adjust your time horizon and category filters.</p>
      </div>
    `;
    return;
  }

  // Date label is added on week or month view at the left side of the time
  const showDateLabel = state.activeTimeHorizon === 'week' || state.activeTimeHorizon === 'month';

  // Render cards
  let cardsHtml = '';
  filtered.forEach(task => {
    const isCurrent = task === currentTask;
    const isDone = task.status === 'done';
    const isRescheduled = task.status === 'rescheduled';
    const catClass = `cat-${task.category}`;

    const isMilestoneTask = !!task.asgId;
    cardsHtml += `
      <div class="task-card ${isCurrent ? 'is-current' : ''} ${isDone ? 'is-done' : ''} ${isRescheduled ? 'is-rescheduled' : ''}" id="taskCard_${task.id}" ${isMilestoneTask ? `onclick="openMilestoneDetailFromTask('${task.asgId}', '${task.milestoneId}')" style="cursor: pointer;" title="Tap to view milestone details and assigned peer"` : ''}>
        <div class="task-card-header">
          <h4 class="task-card-title">${task.title}</h4>
          <span class="task-category-tag ${catClass}">${task.categoryLabel}</span>
        </div>
        <div class="task-card-time-row">
          ${showDateLabel ? `<span class="task-card-date-badge">${formatTaskDateLabel(task.date)}</span>` : ''}
          <span class="task-card-time">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${task.time}</span>
          </span>
          ${isMilestoneTask ? `
            <span class="milestone-assignee-tag ${task.assignedTo === 'You' ? 'self' : ''}" style="margin-left: auto;">
              <span>${task.assignedTo || 'Unassigned'}</span>
            </span>
          ` : isCurrent ? `<span class="current-task-pill"><span class="current-task-dot"></span> Current</span>` : ''}
        </div>
        <div class="task-card-actions ${isDone ? 'only-done' : ''} ${isRescheduled ? 'only-rescheduled' : ''}">
          ${!isRescheduled ? `
            <button class="task-action-btn btn-done ${isDone ? 'active' : ''}" onclick="event.stopPropagation(); toggleTaskStatus('${task.id}', 'done')" title="Mark as Done">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Done</span>
            </button>
          ` : ''}
          ${!isDone ? `
            <button class="task-action-btn btn-reschedule ${isRescheduled ? 'active' : ''}" onclick="event.stopPropagation(); openRescheduleModal('${task.id}')" title="Reschedule with AI">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>${isRescheduled ? 'Rescheduled' : 'Reschedule'}</span>
            </button>
          ` : ''}
          <button class="task-action-btn btn-delete-task" onclick="event.stopPropagation(); openDeleteTaskModal('${task.id}')" title="Delete Task" aria-label="Delete task">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            <span>Delete</span>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = cardsHtml;
}

// Auto-scroll smoothly to the current task in the viewport
function scrollToCurrentTask() {
  setTimeout(() => {
    const currentElem = document.querySelector('.task-card.is-current');
    const viewport = document.getElementById('viewportScroll');
    if (currentElem && viewport) {
      const viewportRect = viewport.getBoundingClientRect();
      const elemRect = currentElem.getBoundingClientRect();
      const relativeTop = elemRect.top - viewportRect.top + viewport.scrollTop;
      const targetScroll = relativeTop - (viewport.clientHeight / 2) + (elemRect.height / 2);

      viewport.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    }
  }, 120);
}

// Toggle Task Status (done / pending)
function toggleTaskStatus(taskId, targetStatus) {
  const task = state.tasks.find(t => t.id === taskId);
  if (!task) return;

  if (task.status === targetStatus) {
    task.status = 'pending';
    task.completed = false;
    showToast(`Reset: "${task.title.substring(0, 20)}..." marked pending`);
  } else {
    task.status = targetStatus;
    task.completed = (targetStatus === 'done');
    if (targetStatus === 'done') {
      showToast(`Completed! Workload capacity updated.`);
    }
  }

  renderTasks();
  updateCapacityMetrics();
}

// ==========================================================================
// AI SMART RESCHEDULE ENGINE
// ==========================================================================

// ==========================================================================
// TIME CONVERSION & COLLISION DETECTION HELPERS
// ==========================================================================

// Convert minutes from midnight (0..1439) to "HH:MM AM/PM"
function minutesToTimeStr(totalMins) {
  totalMins = (totalMins % 1440 + 1440) % 1440;
  let hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  const meridian = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')} ${meridian}`;
}

// Convert minutes from midnight to "HH:MM" (24h format for input[type=time])
function minutesTo24hInput(totalMins) {
  totalMins = (totalMins % 1440 + 1440) % 1440;
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

// Convert "HH:MM" string from input[type=time] to minutes from midnight
function timeInput24hToMinutes(timeVal) {
  if (!timeVal) return 540;
  const [h, m] = timeVal.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}

// Extract [start, end] minutes from a time range string (e.g. "09:00 AM – 11:00 AM")
function getTaskIntervalMinutes(timeStr) {
  if (!timeStr) return { start: 540, end: 600 };
  const parts = timeStr.split(/[–-]/);
  const start = parseTimeToMinutes(parts[0]);
  let end = parts[1] ? parseTimeToMinutes(parts[1]) : start + 60;
  if (end <= start) end = start + 60;
  return { start, end };
}

// Detect if a candidate time range collides with existing scheduled tasks on targetDate
function detectTimeCollisions(task, targetDate, startMins, endMins) {
  const sameDayTasks = state.tasks.filter(t => t.date === targetDate && t.id !== task.id && t.status !== 'done');
  const colliding = [];
  sameDayTasks.forEach(t => {
    const interval = getTaskIntervalMinutes(t.time);
    // Overlap condition: startA < endB && endA > startB
    if (Math.max(startMins, interval.start) < Math.min(endMins, interval.end)) {
      colliding.push(t);
    }
  });
  return colliding;
}

// Find next conflict-free time window on targetDate for given task duration
function findNextConflictFreeSlot(targetDate, durationMins, taskId) {
  const dayTasks = state.tasks.filter(t => t.date === targetDate && t.id !== taskId && t.status !== 'done');
  // Check slots from 09:00 AM (540) to 08:30 PM (1230)
  for (let start = 540; start + durationMins <= 1260; start += 30) {
    const end = start + durationMins;
    const hasOverlap = dayTasks.some(t => {
      const interval = getTaskIntervalMinutes(t.time);
      return Math.max(start, interval.start) < Math.min(end, interval.end);
    });
    if (!hasOverlap) {
      return {
        start,
        end,
        timeStr: `${minutesToTimeStr(start)} – ${minutesToTimeStr(end)}`,
        start24: minutesTo24hInput(start),
        end24: minutesTo24hInput(end)
      };
    }
  }
  // Fallback
  return {
    start: 540,
    end: 540 + durationMins,
    timeStr: `${minutesToTimeStr(540)} – ${minutesToTimeStr(540 + durationMins)}`,
    start24: minutesTo24hInput(540),
    end24: minutesTo24hInput(540 + durationMins)
  };
}

// Calculate existing workload (hours & pct) for any given date
function calculateDayWorkload(dateStr, excludeTaskId = null) {
  const dayTasks = state.tasks.filter(t => t.date === dateStr && t.status !== 'done' && t.id !== excludeTaskId);
  const totalHours = dayTasks.reduce((sum, t) => sum + (t.hours || 0), 0);
  const pct = Math.round((totalHours / state.baseCapacityHours) * 100);
  return {
    hours: Number(totalHours.toFixed(1)),
    pct,
    count: dayTasks.length,
    freeHours: Number(Math.max(0, state.baseCapacityHours - totalHours).toFixed(1))
  };
}

// AI algorithm to find 3 optimal dates with lowest cognitive load and conflict-free times
function getThreeBestDates(task) {
  const candidateDates = [
    '2026-09-12', // Sat (light)
    '2026-09-13', // Sun (balanced)
    '2026-09-14', // Mon (light)
    '2026-09-15', // Tue
    '2026-09-17', // Thu
    '2026-09-19', // Sat
    '2026-09-20'  // Sun
  ];

  const durationMins = Math.round((task.hours || 1.0) * 60);

  const analyzed = candidateDates.map(dateStr => {
    const current = calculateDayWorkload(dateStr, task.id);
    const projHours = Number((current.hours + task.hours).toFixed(1));
    const projPct = Math.round((projHours / state.baseCapacityHours) * 100);
    const freeSlot = findNextConflictFreeSlot(dateStr, durationMins, task.id);
    return {
      date: dateStr,
      currentHours: current.hours,
      projHours,
      projPct,
      freeHours: current.freeHours,
      freeSlot
    };
  });

  // Sort by lowest projected workload percentage
  analyzed.sort((a, b) => a.projPct - b.projPct);

  const top3 = analyzed.slice(0, 3);

  const badges = [
    { badgeClass: 'best', badgeText: 'Best Match · Light Load' },
    { badgeClass: 'light', badgeText: 'Optimal Buffer' },
    { badgeClass: 'balanced', badgeText: 'Balanced Pace' }
  ];

  return top3.map((item, idx) => {
    return {
      ...item,
      badgeClass: badges[idx].badgeClass,
      badgeText: badges[idx].badgeText,
      timeSlot: item.freeSlot.timeStr,
      start24: item.freeSlot.start24,
      end24: item.freeSlot.end24
    };
  });
}

// Open AI Reschedule Bottom Sheet Modal
function openRescheduleModal(taskId) {
  const task = state.tasks.find(t => t.id === taskId);
  if (!task) return;

  state.rescheduleTargetTaskId = taskId;

  // Render Task Preview inside modal
  const preview = document.getElementById('rescheduleTaskPreview');
  if (preview) {
    preview.innerHTML = `
      <div class="reschedule-task-info">
        <h4 class="reschedule-task-title">${task.title}</h4>
        <div class="reschedule-task-meta">
          <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${formatTaskDateLabel(task.date)}</span>
          <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${task.time}</span>
          <span><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg> ${task.hours}h load</span>
        </div>
      </div>
      <span class="task-category-tag cat-${task.category}">${task.categoryLabel}</span>
    `;
  }

  // Generate 3 best dates with AI
  state.proposedDates = getThreeBestDates(task);
  const bestProposal = state.proposedDates[0];
  state.selectedRescheduleDate = bestProposal.date;
  state.selectedRescheduleTime = bestProposal.timeSlot;

  // Render 3 AI Proposed Date Cards
  const container = document.getElementById('aiProposedDatesContainer');
  if (container) {
    container.innerHTML = state.proposedDates.map(item => {
      const isSelected = item.date === state.selectedRescheduleDate;
      return `
        <div class="reschedule-option-card ${isSelected ? 'selected' : ''}" id="rescheduleCard_${item.date}" onclick="selectProposedDate('${item.date}')">
          <div class="reschedule-option-left">
            <span class="reschedule-option-date">
              ${formatTaskDateLabel(item.date)}
            </span>
            <span class="reschedule-option-time"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${item.timeSlot} · Projected ${item.projPct}% load</span>
          </div>
          <div class="reschedule-option-right">
            <span class="reschedule-badge ${item.badgeClass}">${item.badgeText}</span>
            <div class="reschedule-radio-indicator"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Update Custom Date & Time Inputs
  const dateInput = document.getElementById('rescheduleCustomDateInput');
  const startInput = document.getElementById('rescheduleCustomStartTime');
  const endInput = document.getElementById('rescheduleCustomEndTime');

  if (dateInput) {
    dateInput.value = bestProposal.date;
    dateInput.min = '2026-09-12';
    dateInput.max = '2026-09-30';
  }

  if (startInput) startInput.value = bestProposal.start24;
  if (endInput) endInput.value = bestProposal.end24;

  // Reset collision & impact boxes
  const collisionBox = document.getElementById('rescheduleCollisionBox');
  const impactBox = document.getElementById('rescheduleImpactBox');
  if (collisionBox) collisionBox.style.display = 'none';
  if (impactBox) impactBox.style.display = 'none';
  resetConfirmButtonState();

  // Open bottom sheet
  const modal = document.getElementById('rescheduleModal');
  if (modal) modal.classList.add('active');
}

// Close AI Reschedule Bottom Sheet Modal
function closeRescheduleModal() {
  const modal = document.getElementById('rescheduleModal');
  if (modal) modal.classList.remove('active');
  state.rescheduleTargetTaskId = null;
  resetConfirmButtonState();
}

// Select one of the 3 AI Proposed Dates
function selectProposedDate(dateStr) {
  const proposed = state.proposedDates.find(p => p.date === dateStr);
  if (!proposed) return;

  state.selectedRescheduleDate = dateStr;
  state.selectedRescheduleTime = proposed.timeSlot;

  // Highlight selected card
  document.querySelectorAll('.reschedule-option-card').forEach(card => {
    card.classList.toggle('selected', card.id === `rescheduleCard_${dateStr}`);
  });

  // Sync date & time inputs
  const dateInput = document.getElementById('rescheduleCustomDateInput');
  const startInput = document.getElementById('rescheduleCustomStartTime');
  const endInput = document.getElementById('rescheduleCustomEndTime');
  if (dateInput) dateInput.value = dateStr;
  if (startInput) startInput.value = proposed.start24;
  if (endInput) endInput.value = proposed.end24;

  // Clear collision box & impact box
  const collisionBox = document.getElementById('rescheduleCollisionBox');
  const impactBox = document.getElementById('rescheduleImpactBox');
  if (collisionBox) collisionBox.style.display = 'none';
  if (impactBox) impactBox.style.display = 'none';

  resetConfirmButtonState();
}

// Handle change in Start Time input
function onCustomStartTimeChanged() {
  const task = state.tasks.find(t => t.id === state.rescheduleTargetTaskId);
  const startInput = document.getElementById('rescheduleCustomStartTime');
  const endInput = document.getElementById('rescheduleCustomEndTime');
  if (task && startInput && endInput) {
    const startMins = timeInput24hToMinutes(startInput.value);
    const durationMins = Math.round((task.hours || 1.0) * 60);
    const endMins = startMins + durationMins;
    endInput.value = minutesTo24hInput(endMins);
  }
  onCustomDateTimeChanged();
}

// Handle change in Custom Date or End Time
function onCustomDateTimeChanged() {
  const task = state.tasks.find(t => t.id === state.rescheduleTargetTaskId);
  if (!task) return;

  const dateInput = document.getElementById('rescheduleCustomDateInput');
  const startInput = document.getElementById('rescheduleCustomStartTime');
  const endInput = document.getElementById('rescheduleCustomEndTime');
  if (!dateInput || !startInput || !endInput) return;

  const dateVal = dateInput.value;
  const startMins = timeInput24hToMinutes(startInput.value);
  let endMins = timeInput24hToMinutes(endInput.value);

  if (endMins <= startMins) {
    endMins = startMins + Math.round((task.hours || 1.0) * 60);
    endInput.value = minutesTo24hInput(endMins);
  }

  state.selectedRescheduleDate = dateVal;
  state.selectedRescheduleTime = `${minutesToTimeStr(startMins)} – ${minutesToTimeStr(endMins)}`;

  // Highlight matching proposed card if exact date and start time match
  const matchingProposed = state.proposedDates.find(p => p.date === dateVal && p.start24 === startInput.value);
  document.querySelectorAll('.reschedule-option-card').forEach(card => {
    card.classList.toggle('selected', card.id === `rescheduleCard_${dateVal}` && !!matchingProposed);
  });

  // Check for time collisions on target date
  const collisions = detectTimeCollisions(task, dateVal, startMins, endMins);
  const collisionBox = document.getElementById('rescheduleCollisionBox');
  const impactBox = document.getElementById('rescheduleImpactBox');
  const btnConfirm = document.getElementById('btnConfirmReschedule');

  if (collisions.length > 0) {
    state.hasActiveCollision = true;
    const durationMins = endMins - startMins;
    const freeSlot = findNextConflictFreeSlot(dateVal, durationMins, task.id);
    const collidingTask = collisions[0];

    if (collisionBox) {
      collisionBox.innerHTML = `
        <div class="collision-header">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <span>Schedule Collision Detected!</span>
        </div>
        <p class="collision-text">
          Conflicts with: <strong>${collidingTask.title}</strong> (${collidingTask.time}). Two tasks cannot be done simultaneously.
        </p>
        <button class="btn-apply-free-slot" onclick="applyConflictFreeSlot('${dateVal}', ${durationMins})">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline>
          </svg>
          <span>Auto-Shift to Free Slot (${freeSlot.timeStr})</span>
        </button>
      `;
      collisionBox.style.display = 'flex';
    }

    if (impactBox) impactBox.style.display = 'none';

    if (btnConfirm) {
      btnConfirm.disabled = true;
      btnConfirm.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Resolve Time Collision First';
      btnConfirm.classList.add('disabled-collision');
    }
  } else {
    state.hasActiveCollision = false;
    if (collisionBox) collisionBox.style.display = 'none';
    resetConfirmButtonState();

    if (matchingProposed) {
      if (impactBox) impactBox.style.display = 'none';
    } else {
      evaluateCustomDateImpact(task, dateVal);
    }
  }
}

// Auto-apply suggested conflict-free slot
function applyConflictFreeSlot(targetDate, durationMins) {
  const task = state.tasks.find(t => t.id === state.rescheduleTargetTaskId);
  if (!task) return;

  const freeSlot = findNextConflictFreeSlot(targetDate, durationMins, task.id);
  const startInput = document.getElementById('rescheduleCustomStartTime');
  const endInput = document.getElementById('rescheduleCustomEndTime');

  if (startInput) startInput.value = freeSlot.start24;
  if (endInput) endInput.value = freeSlot.end24;

  showToast(`Conflict resolved! Shifted to ${freeSlot.timeStr}`);
  onCustomDateTimeChanged();
}

// Reset confirm reschedule button to ready state
function resetConfirmButtonState() {
  state.hasActiveCollision = false;
  const btnConfirm = document.getElementById('btnConfirmReschedule');
  if (btnConfirm) {
    btnConfirm.disabled = false;
    btnConfirm.innerText = 'Confirm Reschedule';
    btnConfirm.classList.remove('disabled-collision');
  }
}

// Dynamic Real-Time AI Impact Analysis for custom date
function evaluateCustomDateImpact(task, targetDate) {
  const impactBox = document.getElementById('rescheduleImpactBox');
  if (!impactBox) return;

  const current = calculateDayWorkload(targetDate, task.id);
  const projHours = Number((current.hours + task.hours).toFixed(1));
  const projPct = Math.min(Math.round((projHours / state.baseCapacityHours) * 100), 150);
  const dateLabel = formatTaskDateLabel(targetDate) || targetDate;

  let tier = 'minimal';
  let title = '';
  let badge = '';
  let desc = '';

  if (projPct <= 55) {
    tier = 'minimal';
    title = `Minimal Load Impact (${projPct}%)`;
    badge = 'Safe Headroom';
    desc = `${dateLabel} has ample available buffer (${current.freeHours}h free). Adding this ${task.hours}h task preserves healthy restorative capacity without deadline pressure.`;
  } else if (projPct <= 75) {
    tier = 'moderate';
    title = `Moderate Workload Increase (${projPct}%)`;
    badge = 'Focused Load';
    desc = `${dateLabel} load will increase from ${current.pct}% to ${projPct}% (${projHours}h / 8.0h). Restorative buffer will narrow to ${(state.baseCapacityHours - projHours).toFixed(1)}h. Pace yourself with short intervals.`;
  } else {
    tier = 'high';
    title = `High Bottleneck Risk (${projPct}%)`;
    badge = 'Overload Warning';
    desc = `Critical load: Shifting here drives ${dateLabel} capacity to ${projPct}% (${projHours}h scheduled against 8.0h). High vulnerability for burnout and potential conflict with existing academic deadlines.`;
  }

  impactBox.className = `reschedule-impact-box ${tier}`;
  impactBox.innerHTML = `
    <div class="impact-header">
      <span>${title}</span>
      <span class="impact-badge">${badge}</span>
    </div>
    <div class="impact-meter-bar">
      <div class="impact-meter-fill" style="width: ${Math.min(projPct, 100)}%;"></div>
    </div>
    <p class="impact-details">${desc}</p>
  `;
  impactBox.style.display = 'flex';
}

// Confirm Reschedule Action
function confirmReschedule() {
  if (state.hasActiveCollision) {
    showToast('Please resolve the time collision before rescheduling');
    return;
  }

  const task = state.tasks.find(t => t.id === state.rescheduleTargetTaskId);
  if (!task || !state.selectedRescheduleDate) {
    showToast('Please select a date to reschedule');
    return;
  }

  const newDate = state.selectedRescheduleDate;
  const newTime = state.selectedRescheduleTime || task.time;

  task.date = newDate;
  task.time = newTime;
  task.status = 'rescheduled';
  task.completed = false;

  // If this was marked isCurrent but rescheduled to another day or time, remove isCurrent
  if (task.isCurrent && (newDate !== state.todayDate || newTime !== task.time)) {
    task.isCurrent = false;
  }

  closeRescheduleModal();
  renderCalendar();
  renderCategoryFilter();
  renderTasks();
  updateCapacityMetrics();

  showToast(`Rescheduled "${task.title.substring(0, 18)}..." to ${formatTaskDateLabel(newDate)} (${newTime})`);
}

// Main initial render for Task List Screen
function renderTaskListScreen() {
  renderCalendar();
  renderCategoryFilter();
  renderTasks();
}

// ==========================================================================
// GROUP & ASSIGNMENT SCREEN LOGIC
// ==========================================================================

// Helper: Calculate days between two date strings (YYYY-MM-DD)
function calculateDaysRemaining(targetDateStr) {
  const today = new Date(state.todayDate);
  const target = new Date(targetDateStr);
  const diffTime = target.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Render the Group & Assignment Screen
function renderGroupAssignmentScreen() {
  const mount = document.getElementById('assignmentListMount');
  if (!mount) return;

  // Update Bento box metrics
  const totalProjects = state.assignments.length;
  const activeProjects = state.assignments.filter(a => a.status !== 'completed');
  const inProgressProjects = activeProjects.length;
  
  // Count unique collaborators
  const memberSet = new Set();
  state.assignments.forEach(a => {
    if (a.members) {
      a.members.forEach(m => memberSet.add(m.name));
    }
  });
  const totalCollaborators = memberSet.size;

  // Count due soon (< 7 days)
  const dueSoonCount = state.assignments.filter(a => {
    if (a.status === 'completed') return false;
    const days = calculateDaysRemaining(a.dueDate);
    return days >= 0 && days <= 7;
  }).length;

  // Earliest deadline in days
  let minDaysLeft = 3;
  if (activeProjects.length > 0) {
    const daysArr = activeProjects.map(a => calculateDaysRemaining(a.dueDate)).filter(d => d >= 0);
    if (daysArr.length > 0) minDaysLeft = Math.min(...daysArr);
  }

  // Update Bento stat elements
  const bentoDays = document.getElementById('bentoDaysVal');
  if (bentoDays) bentoDays.innerText = minDaysLeft > 0 ? `${minDaysLeft} Days` : 'Due Today';
  const statMembers = document.getElementById('groupStatMembers');
  if (statMembers) statMembers.innerText = `${totalCollaborators} Peers`;
  const statUpcoming = document.getElementById('groupStatUpcoming');
  if (statUpcoming) statUpcoming.innerText = `${dueSoonCount} Urgent`;

  const subtitle = document.getElementById('groupSubtitle');
  if (subtitle) {
    subtitle.innerText = `${inProgressProjects} Active Projects · ${dueSoonCount} Due Soon`;
  }

  // Filter list
  let filtered = state.assignments;
  if (state.activeGroupFilter === 'in_progress') {
    filtered = state.assignments.filter(a => a.status === 'in_progress');
  } else if (state.activeGroupFilter === 'review') {
    filtered = state.assignments.filter(a => a.status === 'review');
  } else if (state.activeGroupFilter === 'completed') {
    filtered = state.assignments.filter(a => a.status === 'completed');
  }

  if (filtered.length === 0) {
    mount.innerHTML = `
      <div style="text-align: center; padding: 36px 16px; background: var(--bg-surface); border-radius: var(--radius-lg); border: 1.5px dashed var(--border-subtle);">
        <p style="font-size: 14px; font-weight: 800; color: var(--text-primary); margin-bottom: 6px;">No projects found in this view</p>
        <p style="font-size: 11.5px; color: var(--text-muted); margin-bottom: 16px;">Create a new study project or assignment below.</p>
        <button class="btn-add-assignment-pill" onclick="openAddAssignmentModal()" type="button">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>Create Assignment</span>
        </button>
      </div>
    `;
    return;
  }

  // Build card markup with all details restored, using clean SVG icons instead of emojis
  mount.innerHTML = filtered.map(asg => {
    const totalM = asg.milestones ? asg.milestones.length : 0;
    const doneM = asg.milestones ? asg.milestones.filter(m => m.completed).length : 0;
    const pct = totalM > 0 ? Math.round((doneM / totalM) * 100) : 0;
    const daysLeft = calculateDaysRemaining(asg.dueDate);

    // Status pill
    let pillClass = asg.status;
    let pillLabel = asg.statusLabel || (asg.status === 'in_progress' ? 'In Progress' : asg.status === 'review' ? 'Needs Review' : 'Completed');
    const isUrgent = daysLeft <= 4 && asg.status !== 'completed';
    if (isUrgent) {
      pillClass = 'urgent';
      pillLabel = 'Due Soon';
    }

    // Formatted days left
    let daysLeftText = '';
    if (asg.status === 'completed') {
      daysLeftText = 'Completed';
    } else if (daysLeft < 0) {
      daysLeftText = `Overdue by ${Math.abs(daysLeft)}d`;
    } else if (daysLeft === 0) {
      daysLeftText = 'Due today';
    } else if (daysLeft === 1) {
      daysLeftText = '1 day left';
    } else {
      daysLeftText = `${daysLeft} days left`;
    }

    // Next pending milestone
    let nextMilestone = null;
    if (asg.milestones) {
      nextMilestone = asg.milestones.find(m => !m.completed);
    }

    // Member avatar cluster with SVG user icon
    let membersHtml = '';
    if (asg.members && asg.members.length > 0) {
      const displayMembers = asg.members.slice(0, 3);
      const moreCount = asg.members.length - 3;
      membersHtml = `
        <div class="avatar-cluster">
          ${displayMembers.map(m => `
            <div class="avatar-chip ${m.isSelf ? 'avatar-self' : ''}" title="${m.name} (${m.role})">
              ${m.avatar}
            </div>
          `).join('')}
          ${moreCount > 0 ? `<div class="avatar-chip avatar-more">+${moreCount}</div>` : ''}
        </div>
      `;
    } else {
      membersHtml = `
        <div class="avatar-cluster">
          <div class="avatar-chip avatar-self">You</div>
        </div>
        <span class="asg-members-count">Solo Project</span>
      `;
    }

    return `
      <div class="assignment-card" onclick="openAssignmentDetailScreen('${asg.id}')">
        <div class="asg-header-row">
          <div class="asg-tags-group">
            <span class="asg-course-badge">${asg.courseCode || asg.course}</span>
          </div>
          <span class="asg-status-pill ${pillClass}">
            ${isUrgent ? `
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            ` : ''}
            <span>${pillLabel}</span>
          </span>
        </div>

        <h3 class="asg-title">${asg.title}</h3>

        <div class="asg-team-section">
          ${membersHtml}
        </div>

        <div class="asg-progress-wrap">
          <div class="asg-progress-info">
            <span class="asg-progress-pct">${pct}% Completed</span>
            <span class="asg-progress-milestones">${doneM}/${totalM} steps</span>
          </div>
          <div class="asg-progress-track">
            <div class="asg-progress-fill ${pct === 100 ? 'done' : ''}" style="width: ${pct}%;"></div>
          </div>
        </div>

        ${nextMilestone ? `
          <div class="asg-next-ticker">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Next: <strong>${nextMilestone.title}</strong> (${nextMilestone.dueDate})</span>
          </div>
        ` : ''}

        <div class="asg-footer-row">
          <div class="asg-due-chip-wrap">
            <span class="asg-due-chip ${isUrgent ? 'urgent' : ''}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>${daysLeftText}</span>
            </span>
          </div>
          <div class="asg-footer-actions">
            <button class="asg-delete-btn" type="button" aria-label="Delete project" title="Delete Project" onclick="event.stopPropagation(); openDeleteAssignmentModal('${asg.id}')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
            <button class="asg-view-details-btn" type="button" aria-label="View project details" onclick="event.stopPropagation(); openAssignmentDetailScreen('${asg.id}')">
              <span>View Details</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Filter Group Assignments by Tab Pill
function filterGroupAssignments(filterKey, buttonElem) {
  state.activeGroupFilter = filterKey;
  document.querySelectorAll('.group-tab-pill').forEach(btn => btn.classList.remove('active'));
  if (buttonElem) buttonElem.classList.add('active');
  renderGroupAssignmentScreen();
}

// Open Add Assignment Modal (Redirects to Dedicated Screen)
function openAddAssignmentModal() {
  showAddAssignmentScreen();
}

// Close Add Assignment Modal (kept for legacy modal if ever triggered)
function closeAddAssignmentModal() {
  const modal = document.getElementById('addAssignmentModal');
  if (modal) modal.classList.remove('active');
}

// Show Add Assignment Screen (Dedicated Mobile Screen)
function showAddAssignmentScreen() {
  // Hide all screens
  document.querySelectorAll('.app-screen').forEach(s => {
    s.style.display = 'none';
    s.classList.remove('active');
  });

  const screen = document.getElementById('screenAddAssignment');
  if (screen) {
    screen.style.display = 'flex';
    screen.classList.add('active');
  }

  // Scroll to top of viewport
  const viewport = document.getElementById('viewportScroll');
  if (viewport) {
    viewport.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update initial UI state
  setAsgInputMode(state.addAsgInputMode || 'upload');
  updateMemberCount(0);
  checkAnalyseReady();
  renderUploadedFilesTray();

  showToast('New Project / Assignment setup');
}

// Hide Add Assignment Screen (Return to Group tab)
function hideAddAssignmentScreen() {
  const screen = document.getElementById('screenAddAssignment');
  if (screen) {
    screen.style.display = 'none';
    screen.classList.remove('active');
  }

  const groupScreen = document.getElementById('screenGroupAssignment');
  if (groupScreen) {
    groupScreen.style.display = 'flex';
    groupScreen.classList.add('active');
  }

  // Ensure Group tab is highlighted in bottom dock
  document.querySelectorAll('.dock-tab').forEach(t => t.classList.remove('active'));
  const dockTabs = document.querySelectorAll('.dock-tab');
  if (dockTabs.length >= 3) {
    dockTabs[2]?.classList.add('active');
  }

  renderGroupAssignmentScreen();
}

// Back Button Handler with Discard Check
function handleAddAsgBack() {
  const title = document.getElementById('addAsgTitleInput')?.value.trim();
  const question = document.getElementById('addAsgQuestionInput')?.value.trim();
  const isDirty = (state.addAsgFiles && state.addAsgFiles.length > 0) ||
                  state.addAsgAnalysed ||
                  (state.addAsgTasks && state.addAsgTasks.length > 0) ||
                  title || question;

  if (isDirty) {
    openCancelConfirmModal();
  } else {
    hideAddAssignmentScreen();
  }
}

// Cancel Confirmation Bottom Sheet
function openCancelConfirmModal() {
  const modal = document.getElementById('cancelConfirmModal');
  if (modal) modal.classList.add('active');
}

function closeCancelConfirmModal() {
  const modal = document.getElementById('cancelConfirmModal');
  if (modal) modal.classList.remove('active');
}

function discardAddAssignment() {
  closeCancelConfirmModal();
  resetAddAssignmentForm();
  hideAddAssignmentScreen();
  showToast('Assignment setup discarded');
}

function resetAddAssignmentForm() {
  state.addAsgFiles = [];
  state.addAsgMemberCount = 1;
  state.addAsgInputMode = 'upload';
  state.addAsgAnalysed = false;
  state.addAsgTasks = [];

  const qInput = document.getElementById('addAsgQuestionInput');
  if (qInput) qInput.value = '';
  const titleInput = document.getElementById('addAsgTitleInput');
  if (titleInput) titleInput.value = '';
  const dueInput = document.getElementById('addAsgDueDateInput');
  if (dueInput) dueInput.value = '';
  const fileInput = document.getElementById('asgFileInput');
  if (fileInput) fileInput.value = '';

  const breakdownSec = document.getElementById('taskBreakdownSection');
  if (breakdownSec) breakdownSec.style.display = 'none';

  const btnAnalyse = document.getElementById('btnAnalyseAi');
  const btnText = document.getElementById('btnAnalyseText');
  if (btnAnalyse) {
    btnAnalyse.classList.remove('analysing');
    btnAnalyse.disabled = true;
  }
  if (btnText) btnText.innerHTML = 'Analyse with AI';

  setAsgInputMode('upload');
  renderUploadedFilesTray();
  updateMemberCount(0);
  checkAnalyseReady();
}

// Input Mode Switcher (Upload PDF Document vs Text Brief)
function setAsgInputMode(mode) {
  state.addAsgInputMode = mode;
  const btnUpload = document.getElementById('asgModeBtnUpload');
  const btnText = document.getElementById('asgModeBtnText');
  const panelUpload = document.getElementById('asgPanelUpload');
  const panelText = document.getElementById('asgPanelText');

  if (btnUpload) btnUpload.classList.toggle('active', mode === 'upload');
  if (btnText) btnText.classList.toggle('active', mode === 'text');
  if (panelUpload) panelUpload.style.display = mode === 'upload' ? 'flex' : 'none';
  if (panelText) panelText.style.display = mode === 'text' ? 'flex' : 'none';

  checkAnalyseReady();
}

function handleAsgTextInput() {
  checkAnalyseReady();
}

// File Upload Handlers (Max 3 files)
function triggerAsgFileUpload() {
  if (state.addAsgFiles && state.addAsgFiles.length >= 3) {
    showToast('Maximum 3 PDF documents reached');
    return;
  }
  document.getElementById('asgFileInput')?.click();
}

function handleAsgFileUpload(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  if (!state.addAsgFiles) state.addAsgFiles = [];

  if (state.addAsgFiles.length >= 3) {
    showToast('Maximum 3 PDF documents allowed');
    event.target.value = '';
    return;
  }

  const availableSlots = 3 - state.addAsgFiles.length;
  const filesToAdd = Math.min(files.length, availableSlots);

  for (let i = 0; i < filesToAdd; i++) {
    const f = files[i];
    const sizeMb = (f.size / (1024 * 1024)).toFixed(1);
    state.addAsgFiles.push({
      name: f.name,
      size: `${parseFloat(sizeMb) > 0 ? sizeMb : '0.5'} MB`,
      type: 'PDF'
    });
  }

  // Clear input so same file can be re-selected if removed
  event.target.value = '';

  renderUploadedFilesTray();
  checkAnalyseReady();

  if (files.length > availableSlots) {
    showToast(`Added ${filesToAdd} document(s). Maximum 3 reached.`);
  } else {
    showToast(`Added ${filesToAdd} document brief(s)`);
  }
}

function renderUploadedFilesTray() {
  const tray = document.getElementById('asgUploadedFilesTray');
  const zone = document.getElementById('asgUploadZone');
  const sub = document.getElementById('asgUploadSubtitle');
  if (!tray || !zone) return;

  if (!state.addAsgFiles || state.addAsgFiles.length === 0) {
    tray.style.display = 'none';
    tray.innerHTML = '';
    zone.classList.remove('has-files');
    if (sub) sub.textContent = 'Tap to select coursework PDF (max 3)';
    return;
  }

  zone.classList.add('has-files');
  if (sub) {
    if (state.addAsgFiles.length >= 3) {
      sub.textContent = '3/3 maximum PDFs uploaded';
    } else {
      sub.textContent = `${state.addAsgFiles.length}/3 PDFs uploaded · Tap to add more`;
    }
  }

  tray.style.display = 'flex';
  tray.innerHTML = state.addAsgFiles.map((file, idx) => `
    <div class="upload-file-chip">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
      <span title="${file.name}">${file.name}</span>
      <button type="button" class="remove-chip-btn" onclick="removeAsgFile(${idx})" aria-label="Remove ${file.name}">×</button>
    </div>
  `).join('');
}

function removeAsgFile(idx) {
  if (state.addAsgFiles && state.addAsgFiles[idx] !== undefined) {
    state.addAsgFiles.splice(idx, 1);
    renderUploadedFilesTray();
    checkAnalyseReady();
    showToast('Document removed');
  }
}

// Member Counter Handler
function updateMemberCount(delta) {
  if (typeof state.addAsgMemberCount !== 'number') {
    state.addAsgMemberCount = 1;
  }
  state.addAsgMemberCount = Math.max(1, Math.min(10, state.addAsgMemberCount + delta));

  const display = document.getElementById('asgMemberCountDisplay');
  if (display) display.textContent = state.addAsgMemberCount;

  // If already analysed, re-render task breakdown with updated member options
  if (state.addAsgAnalysed && state.addAsgTasks && state.addAsgTasks.length > 0) {
    renderTaskBreakdown();
  }

  checkAnalyseReady();
}

// Check readiness of Analyse button
function checkAnalyseReady() {
  const btn = document.getElementById('btnAnalyseAi');
  const note = document.getElementById('analyseHelperNote');
  if (!btn || !note) return;

  const mode = state.addAsgInputMode || 'upload';
  let hasSource = false;
  if (mode === 'upload') {
    hasSource = state.addAsgFiles && state.addAsgFiles.length > 0;
  } else {
    const text = document.getElementById('addAsgQuestionInput')?.value.trim() || '';
    hasSource = text.length > 0;
  }

  const hasMembers = (state.addAsgMemberCount || 1) >= 1;
  const ready = hasSource && hasMembers;

  btn.disabled = !ready;
  if (ready) {
    note.textContent = 'Ready for AI analysis. Tap button to decompose brief!';
    note.style.color = 'var(--primary)';
  } else {
    note.textContent = mode === 'upload'
      ? 'Upload a PDF brief to unlock AI analysis'
      : 'Enter or paste assignment brief to unlock AI analysis';
    note.style.color = 'var(--text-muted)';
  }
}

// Helper: generate list of member names based on count
function getAddAsgMemberList() {
  const count = state.addAsgMemberCount || 1;
  const list = ['You'];
  const potentialNames = ['Sarah Chen', 'Marcus Wong', 'Alex Rivera', 'Elena Rostova', 'David Kim', 'Maya Patel'];
  for (let i = 1; i < count; i++) {
    if (potentialNames[i - 1]) {
      list.push(potentialNames[i - 1]);
    } else {
      list.push(`Collaborator ${i + 1}`);
    }
  }
  return list;
}

// Helper: Format time range string from start time and hours duration
function formatTimeRange(startTimeStr, hours) {
  if (!startTimeStr) return '02:00 PM – 04:00 PM';
  const parts = startTimeStr.split(':');
  let h = parseInt(parts[0], 10);
  if (isNaN(h)) h = 14;
  let m = parseInt(parts[1], 10);
  if (isNaN(m)) m = 0;

  const startPeriod = h >= 12 ? 'PM' : 'AM';
  const displayStartH = h % 12 === 0 ? 12 : h % 12;
  const startStr = `${String(displayStartH).padStart(2, '0')}:${String(m).padStart(2, '0')} ${startPeriod}`;

  const durationMinutes = Math.round((parseFloat(hours) || 2.0) * 60);
  const totalMinutes = h * 60 + m + durationMinutes;
  const endH = Math.floor((totalMinutes / 60) % 24);
  const endM = totalMinutes % 60;
  const endPeriod = endH >= 12 ? 'PM' : 'AM';
  const displayEndH = endH % 12 === 0 ? 12 : endH % 12;
  const endStr = `${String(displayEndH).padStart(2, '0')}:${String(endM).padStart(2, '0')} ${endPeriod}`;

  return `${startStr} – ${endStr}`;
}

// Helper: Parse milestone date into standard YYYY-MM-DD
function parseMilestoneDate(m, asg) {
  if (m.rawDate && m.rawDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return m.rawDate;
  }
  if (m.dueDate && m.dueDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return m.dueDate;
  }
  if (m.dueDate) {
    const monthMap = { 'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12' };
    const match = m.dueDate.match(/([A-Za-z]{3})\s+(\d{1,2})/);
    if (match) {
      const month = monthMap[match[1]] || '09';
      const day = String(match[2]).padStart(2, '0');
      return `2026-${month}-${day}`;
    }
  }
  if (asg && asg.dueDate && asg.dueDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return asg.dueDate;
  }
  return state.todayDate;
}

// Run AI Analyse
function runAiAnalyse() {
  const btn = document.getElementById('btnAnalyseAi');
  const btnText = document.getElementById('btnAnalyseText');
  if (!btn) return;

  btn.classList.add('analysing');
  btn.disabled = true;
  if (btnText) btnText.innerHTML = 'Parsing Brief &amp; Rubrics...';

  setTimeout(() => {
    btn.classList.remove('analysing');
    btn.disabled = false;
    if (btnText) btnText.innerHTML = 'Re-Analyse with AI';

    // Auto-fill Title if blank
    const titleInput = document.getElementById('addAsgTitleInput');
    if (titleInput && !titleInput.value.trim()) {
      const mode = state.addAsgInputMode || 'upload';
      if (mode === 'upload' && state.addAsgFiles && state.addAsgFiles.length > 0) {
        const firstFile = state.addAsgFiles[0]?.name || '';
        if (firstFile.toLowerCase().includes('raft') || firstFile.toLowerCase().includes('distrib')) {
          titleInput.value = 'Raft Consensus Algorithm & Distributed KV Store';
        } else if (firstFile.toLowerCase().includes('ml') || firstFile.toLowerCase().includes('ai')) {
          titleInput.value = 'Neural Architecture Search & Latency Benchmarking';
        } else {
          const cleanName = firstFile.replace(/\.pdf$/i, '').replace(/[-_]/g, ' ');
          titleInput.value = cleanName.length > 5
            ? cleanName.charAt(0).toUpperCase() + cleanName.slice(1)
            : 'High-Throughput Distributed Storage Protocol';
        }
      } else {
        const text = document.getElementById('addAsgQuestionInput')?.value.trim() || '';
        if (text.length > 0) {
          const firstLine = text.split('\n')[0].trim().replace(/^[#*\-•\d.]+\s*/, '');
          titleInput.value = firstLine.length > 5 && firstLine.length < 50
            ? firstLine
            : 'Distributed Systems & Cloud Architecture Project';
        } else {
          titleInput.value = 'Distributed Systems & Cloud Architecture Project';
        }
      }
    }

    // Auto-fill Due Date if blank (14 days from today)
    const dueInput = document.getElementById('addAsgDueDateInput');
    if (dueInput && !dueInput.value) {
      const d = new Date(state.todayDate);
      d.setDate(d.getDate() + 14);
      dueInput.value = d.toISOString().split('T')[0];
    }

    // Generate AI task breakdown based on member count
    const members = getAddAsgMemberList();
    const tasks = [
      {
        title: 'Requirement & Protocol Specification',
        assignedTo: members[0],
        hours: 3.5,
        dueDate: '2026-09-15',
        startTime: '09:00'
      },
      {
        title: 'Core Engine State Machine Implementation',
        assignedTo: members.length > 1 ? members[1] : members[0],
        hours: 5.0,
        dueDate: '2026-09-18',
        startTime: '10:00'
      },
      {
        title: 'Network RPC Handlers & Replication Tests',
        assignedTo: members.length > 2 ? members[2] : (members.length > 1 ? members[1] : members[0]),
        hours: 4.0,
        dueDate: '2026-09-21',
        startTime: '14:00'
      },
      {
        title: 'Failure Recovery & Chaos Fault Injection',
        assignedTo: members.length > 3 ? members[3] : members[0],
        hours: 3.0,
        dueDate: '2026-09-23',
        startTime: '13:30'
      },
      {
        title: 'Technical Evaluation Report & Slide Deck',
        assignedTo: members[0],
        hours: 2.5,
        dueDate: '2026-09-25',
        startTime: '15:00'
      }
    ];

    state.addAsgTasks = tasks;
    state.addAsgAnalysed = true;

    renderTaskBreakdown();

    const breakdownSec = document.getElementById('taskBreakdownSection');
    if (breakdownSec) {
      breakdownSec.style.display = 'flex';
      const viewport = document.getElementById('viewportScroll');
      if (viewport) {
        const viewportRect = viewport.getBoundingClientRect();
        const breakdownRect = breakdownSec.getBoundingClientRect();
        const targetScroll = viewport.scrollTop + (breakdownRect.top - viewportRect.top) - 15;
        viewport.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    }

    showToast('AI analysis complete! 5 milestones extracted.');
  }, 1400);
}

// Render Task Breakdown List
function renderTaskBreakdown() {
  const mount = document.getElementById('breakdownTaskList');
  if (!mount) return;

  const members = getAddAsgMemberList();

  if (!state.addAsgTasks || state.addAsgTasks.length === 0) {
    mount.innerHTML = '<div style="font-size:12px; color:var(--text-muted); text-align:center; padding:10px 0;">No milestones yet. Tap "+ Add Task" to create one.</div>';
    return;
  }

  mount.innerHTML = state.addAsgTasks.map((t, idx) => {
    const currentAssignee = members.includes(t.assignedTo) ? t.assignedTo : members[0];

    const memberOptions = members.map(m => `
      <option value="${m}" ${m === currentAssignee ? 'selected' : ''}>${m}</option>
    `).join('');

    return `
      <div class="breakdown-task-item" data-task-idx="${idx}">
        <div class="breakdown-task-main-row">
          <div class="breakdown-task-bullet"></div>
          <input type="text" class="breakdown-task-input" value="${t.title}" placeholder="Milestone task name..." oninput="updateBreakdownTaskTitle(${idx}, this.value)">
          <button type="button" class="breakdown-task-delete-btn" onclick="removeBreakdownTask(${idx})" title="Remove milestone">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="breakdown-task-meta-row">
          <div class="breakdown-meta-group">
            <select class="breakdown-assignee-select" onchange="updateBreakdownTaskMember(${idx}, this.value)" title="Assigned Member">
              ${memberOptions}
            </select>
            <div class="breakdown-hours-wrap" title="Estimated hours">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <input type="number" step="0.5" min="0.5" max="30" class="breakdown-hours-input" value="${t.hours || 2}" oninput="updateBreakdownTaskHours(${idx}, this.value)">
              <span>h</span>
            </div>
          </div>
          <div class="breakdown-schedule-group">
            <div class="breakdown-date-wrap" title="Milestone Target Date">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <input type="date" class="breakdown-date-input" value="${t.dueDate || '2026-09-18'}" onchange="updateBreakdownTaskDate(${idx}, this.value)">
            </div>
            <div class="breakdown-time-wrap" title="Scheduled Start Time">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <input type="time" class="breakdown-time-input" value="${t.startTime || '14:00'}" onchange="updateBreakdownTaskTime(${idx}, this.value)">
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Update task values on user edit
function updateBreakdownTaskTitle(idx, val) {
  if (state.addAsgTasks && state.addAsgTasks[idx]) {
    state.addAsgTasks[idx].title = val;
  }
}

function updateBreakdownTaskMember(idx, val) {
  if (state.addAsgTasks && state.addAsgTasks[idx]) {
    state.addAsgTasks[idx].assignedTo = val;
  }
}

function updateBreakdownTaskHours(idx, val) {
  if (state.addAsgTasks && state.addAsgTasks[idx]) {
    state.addAsgTasks[idx].hours = parseFloat(val) || 1.0;
  }
}

function updateBreakdownTaskDate(idx, val) {
  if (state.addAsgTasks && state.addAsgTasks[idx]) {
    state.addAsgTasks[idx].dueDate = val;
  }
}

function updateBreakdownTaskTime(idx, val) {
  if (state.addAsgTasks && state.addAsgTasks[idx]) {
    state.addAsgTasks[idx].startTime = val;
  }
}

// Add Breakdown Task
function addBreakdownTask() {
  if (!state.addAsgTasks) state.addAsgTasks = [];
  const members = getAddAsgMemberList();
  const d = new Date(state.todayDate);
  d.setDate(d.getDate() + 7);
  const defaultDate = d.toISOString().split('T')[0];
  state.addAsgTasks.push({
    title: 'New Milestone Task',
    assignedTo: members[0],
    hours: 2.5,
    dueDate: defaultDate,
    startTime: '14:00'
  });
  renderTaskBreakdown();
  showToast('New milestone added');

  // Focus new task input
  const inputs = document.querySelectorAll('.breakdown-task-input');
  if (inputs.length > 0) {
    const lastInput = inputs[inputs.length - 1];
    lastInput.focus();
    lastInput.select();
  }
}

// Remove Breakdown Task
function removeBreakdownTask(idx) {
  if (state.addAsgTasks && state.addAsgTasks[idx] !== undefined) {
    state.addAsgTasks.splice(idx, 1);
    renderTaskBreakdown();
    showToast('Milestone removed');
  }
}

// Create Assignment from Screen
function handleCreateAssignmentFromScreen() {
  const titleInput = document.getElementById('addAsgTitleInput');
  const dueDateInput = document.getElementById('addAsgDueDateInput');

  let title = titleInput ? titleInput.value.trim() : '';
  let course = 'CS301 Distributed Systems';
  let dueDate = dueDateInput ? dueDateInput.value : '';

  if (!title) {
    title = 'Distributed Consensus & Storage Project';
  }
  if (!dueDate) {
    const d = new Date(state.todayDate);
    d.setDate(d.getDate() + 14);
    dueDate = d.toISOString().split('T')[0];
  }

  // Course code extraction
  const codeParts = course.split(' ');
  const courseCode = codeParts[0] || course.substring(0, 6);

  // Due Date Label formatting
  const dueObj = new Date(dueDate + 'T00:00:00');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dueDateLabel = `${monthNames[dueObj.getMonth()]} ${String(dueObj.getDate()).padStart(2, '0')}, ${dueObj.getFullYear()}`;

  // Member objects
  const memberNames = getAddAsgMemberList();
  const members = memberNames.map((name, idx) => {
    const isSelf = idx === 0;
    const initials = isSelf ? 'Y' : name.split(' ').map(p => p.charAt(0).toUpperCase()).join('').substring(0, 2);
    return {
      name: isSelf ? 'You' : name,
      role: isSelf ? 'Project Lead' : 'Collaborator',
      avatar: initials || 'MB',
      isSelf: isSelf,
      activeStatus: isSelf ? 'Active today' : 'Invited'
    };
  });

  // Milestones from breakdown
  let milestones = [];
  if (state.addAsgTasks && state.addAsgTasks.length > 0) {
    milestones = state.addAsgTasks.map((t, idx) => {
      let mDueDate = t.dueDate;
      if (mDueDate && mDueDate.includes('-')) {
        const mObj = new Date(mDueDate + 'T00:00:00');
        if (!isNaN(mObj.getTime())) {
          mDueDate = `${monthNames[mObj.getMonth()]} ${String(mObj.getDate()).padStart(2, '0')}`;
        }
      }
      const timeFormatted = formatTimeRange(t.startTime || '14:00', t.hours || 2.5);
      return {
        id: 'm' + (idx + 1),
        title: t.title || `Milestone ${idx + 1}`,
        description: `Structured milestone assigned to ${t.assignedTo}.`,
        assignedTo: t.assignedTo || 'You',
        hours: parseFloat(t.hours) || 2.5,
        completed: false,
        rawDate: t.dueDate || dueDate,
        startTime: t.startTime || '14:00',
        time: timeFormatted,
        dueDate: mDueDate || dueDateLabel
      };
    });
  } else {
    milestones = [
      { id: 'm1', title: 'System Architecture & Protocol Spec', description: 'Specification draft', assignedTo: 'You', hours: 3.0, completed: false, rawDate: state.todayDate, startTime: '09:00', time: '09:00 AM – 12:00 PM', dueDate: 'Sprint 1' },
      { id: 'm2', title: 'Core Implementation & Benchmarks', description: 'Module build', assignedTo: 'You', hours: 4.5, completed: false, rawDate: state.todayDate, startTime: '13:00', time: '01:00 PM – 05:30 PM', dueDate: 'Sprint 2' },
      { id: 'm3', title: 'Final Report & Submission', description: 'Documentation', assignedTo: 'You', hours: 2.0, completed: false, rawDate: dueDate, startTime: '14:00', time: '02:00 PM – 04:00 PM', dueDate: dueDateLabel }
    ];
  }

  // Resources from uploaded files
  const resources = [];
  if (state.addAsgFiles && state.addAsgFiles.length > 0) {
    state.addAsgFiles.forEach(f => {
      resources.push({
        title: f.name,
        type: 'PDF',
        size: f.size
      });
    });
  } else {
    resources.push({
      title: 'Coursework Guidelines & Rubric.pdf',
      type: 'PDF',
      size: '1.4 MB'
    });
  }
  resources.push({
    title: 'Shared Team Workspace & Notes',
    type: 'Link',
    link: 'docs.workspace.internal'
  });

  const newAssignment = {
    id: 'asg-' + Date.now(),
    title: title,
    course: course,
    courseCode: courseCode,
    weightage: '30%',
    dueDate: dueDate,
    dueDateLabel: dueDateLabel,
    status: 'in_progress',
    statusLabel: 'In Progress',
    priority: 'Medium',
    isGroup: members.length > 1,
    members: members,
    milestones: milestones,
    aiRiskAnalysis: {
      status: 'On Track',
      tone: 'success',
      text: `AI-structured coursework created with ${milestones.length} milestones across ${members.length} team members.`
    },
    resources: resources
  };

  state.assignments.unshift(newAssignment);

  // Sync new milestones into task list & re-render
  syncMilestonesToTaskList();
  renderTaskListScreen();
  renderGroupAssignmentScreen();

  resetAddAssignmentForm();
  hideAddAssignmentScreen();
  showToast(`Assignment created & added to Task List!`);
}

// Handle Form Submission for Adding Assignment
function handleCreateAssignment(event) {
  event.preventDefault();
  const title = document.getElementById('assignTitleInput').value.trim();
  const course = document.getElementById('assignCourseInput').value.trim();
  const weight = document.getElementById('assignWeightInput').value || 30;
  const dueDate = document.getElementById('assignDueDateInput').value;
  const priority = document.getElementById('assignPrioritySelect').value;
  const membersRaw = document.getElementById('assignMembersInput').value.trim();
  const milestonesRaw = document.getElementById('assignMilestonesInput').value.trim();

  if (!title || !course || !dueDate) {
    showToast('Please fill in required fields');
    return;
  }

  // Parse course code
  const codeParts = course.split(' ');
  const courseCode = codeParts[0] || course.substring(0, 6);

  // Format Due Date Label
  const dueObj = new Date(dueDate + 'T00:00:00');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dueDateLabel = `${monthNames[dueObj.getMonth()]} ${String(dueObj.getDate()).padStart(2, '0')}, ${dueObj.getFullYear()}`;

  // Parse members
  const members = [{ name: 'You', role: 'Team Lead / Contributor', avatar: 'Y', isSelf: true, activeStatus: 'Active today' }];
  if (membersRaw && membersRaw.toLowerCase() !== 'solo') {
    const rawNames = membersRaw.split(',').map(n => n.trim()).filter(n => n.length > 0 && n.toLowerCase() !== 'you');
    rawNames.forEach(name => {
      const initials = name.split(' ').map(p => p.charAt(0).toUpperCase()).join('').substring(0, 2);
      members.push({
        name: name,
        role: 'Collaborator',
        avatar: initials || 'MB',
        isSelf: false,
        activeStatus: 'Invited'
      });
    });
  }

  // Parse milestones
  let milestones = [];
  if (milestonesRaw) {
    const lines = milestonesRaw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    milestones = lines.map((mTitle, idx) => ({
      id: 'm' + (idx + 1),
      title: mTitle,
      completed: false,
      dueDate: `${monthNames[dueObj.getMonth()]} ${Math.max(1, dueObj.getDate() - (lines.length - 1 - idx) * 3)}`
    }));
  } else {
    milestones = [
      { id: 'm1', title: 'Scope Definition & Literature Review', completed: false, dueDate: 'Sprint 1' },
      { id: 'm2', title: 'System Implementation & Testing', completed: false, dueDate: 'Sprint 2' },
      { id: 'm3', title: 'Final Report & Submission', completed: false, dueDate: dueDateLabel }
    ];
  }

  const newAssignment = {
    id: 'asg-' + Date.now(),
    title: title,
    course: course,
    courseCode: courseCode,
    weightage: weight + '%',
    dueDate: dueDate,
    dueDateLabel: dueDateLabel,
    status: 'in_progress',
    statusLabel: 'In Progress',
    priority: priority,
    isGroup: members.length > 1,
    members: members,
    milestones: milestones,
    aiRiskAnalysis: {
      status: priority === 'High' ? 'Attention Needed' : 'On Track',
      tone: priority === 'High' ? 'warning' : 'success',
      text: `Newly configured project for ${course}. Initial timeline established with ${milestones.length} milestones.`
    },
    resources: [
      { title: 'Project Rubric & Guidelines.pdf', type: 'PDF', size: '1.2 MB' },
      { title: 'Shared Group Notes & Workspace', type: 'Link', link: 'docs.workspace.internal' }
    ]
  };

  state.assignments.unshift(newAssignment);
  closeAddAssignmentModal();
  renderGroupAssignmentScreen();
  showToast(`Assignment "${title.substring(0, 18)}..." created!`);
}

// Open Assignment Detail Screen (Dedicated Mobile Screen)
function openAssignmentDetailScreen(assignmentId) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  if (!asg) return;

  state.selectedAssignmentId = assignmentId;
  state.selectedMemberIndex = null; // Default to unselected: y x x x

  // Hide all screens
  document.querySelectorAll('.app-screen').forEach(s => {
    s.style.display = 'none';
    s.classList.remove('active');
  });

  // Display detail screen
  const screen = document.getElementById('screenAssignmentDetail');
  if (screen) {
    screen.style.display = 'flex';
    screen.classList.add('active');
  }

  // Scroll to top of viewport
  const viewport = document.getElementById('viewportScroll');
  if (viewport) {
    viewport.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderAssignmentDetailPage(assignmentId);
}

// Close Assignment Detail Screen (Back to Group Projects screen)
function closeAssignmentDetailScreen() {
  state.selectedMemberIndex = null;
  const screen = document.getElementById('screenAssignmentDetail');
  if (screen) {
    screen.style.display = 'none';
    screen.classList.remove('active');
  }

  const groupScreen = document.getElementById('screenGroupAssignment');
  if (groupScreen) {
    groupScreen.style.display = 'flex';
    groupScreen.classList.add('active');
  }

  renderGroupAssignmentScreen();
}

// Backward compatibility alias for modal calls
function openAssignmentDetailModal(assignmentId) {
  openAssignmentDetailScreen(assignmentId);
}
function closeAssignmentDetailModal() {
  closeAssignmentDetailScreen();
}

// Render Team Collaboration Section (32x32px avatars drifted left, borderless info on right)
function renderAssignmentDetailTeam(assignmentId) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  if (!asg) return;

  const mount = document.getElementById('teamCollabMount');
  if (!mount) return;

  const members = (asg.members && asg.members.length > 0) ? asg.members : [
    { name: 'You', role: 'Project Lead', avatar: 'Y', isSelf: true, activeStatus: 'Active today' }
  ];

  const selectedIdx = state.selectedMemberIndex;
  const isSelected = selectedIdx !== null && selectedIdx !== undefined && members[selectedIdx];
  const chosenMember = isSelected ? members[selectedIdx] : null;

  mount.innerHTML = `
    <div class="team-collab-row ${isSelected ? 'has-selection' : ''}" id="teamAvatarRow">
      <!-- All icons drifted to the left (32x32px) -->
      <div class="team-avatars-group">
        ${members.map((m, idx) => `
          <div class="team-avatar-chip ${m.isSelf ? 'self' : ''} ${selectedIdx === idx ? 'selected' : ''}"
               onclick="selectTeamMember('${asg.id}', ${idx})"
               title="${m.name} (${m.role})">
            ${m.avatar}
          </div>
        `).join('')}
      </div>

      <!-- Borderless info shown to the right of all icons when selected -->
      ${chosenMember ? `
        <div class="team-member-info-side" onclick="selectTeamMember('${asg.id}', ${selectedIdx})" title="Tap to collapse">
          <div class="chosen-member-name">
            ${chosenMember.name} ${chosenMember.isSelf ? '<span class="self-tag">(You)</span>' : ''}
          </div>
          <div class="chosen-status-role-col">
            <span class="chosen-member-status">${chosenMember.activeStatus || 'Active today'}</span>
            <span class="chosen-member-role">${chosenMember.role}</span>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// Select or Toggle Team Member
function selectTeamMember(assignmentId, memberIdx) {
  if (state.selectedMemberIndex === memberIdx) {
    state.selectedMemberIndex = null;
  } else {
    state.selectedMemberIndex = memberIdx;
  }
  renderAssignmentDetailTeam(assignmentId);
}

// Render Assignment Detail Page
function renderAssignmentDetailPage(assignmentId) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  if (!asg) return;

  // Header status pill
  const isUrgent = asg.priority === 'High';
  let pillClass = asg.status;
  let pillLabel = asg.statusLabel || asg.status;
  if (asg.status === 'completed') {
    pillClass = 'completed';
    pillLabel = 'Completed';
  } else if (isUrgent) {
    pillClass = 'urgent';
    pillLabel = 'Priority';
  }

  const headerActions = document.getElementById('detailPageHeaderActions');
  if (headerActions) {
    headerActions.innerHTML = `
      <span class="asg-status-pill ${pillClass}">
        ${isUrgent ? `
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        ` : ''}
        <span>${pillLabel}</span>
      </span>
    `;
  }

  // Calculations
  const totalM = asg.milestones ? asg.milestones.length : 0;
  const doneM = asg.milestones ? asg.milestones.filter(m => m.completed).length : 0;
  const pct = totalM > 0 ? Math.round((doneM / totalM) * 100) : 0;
  const daysLeft = calculateDaysRemaining(asg.dueDate);
  const members = (asg.members && asg.members.length > 0) ? asg.members : [
    { name: 'You', role: 'Project Lead', avatar: 'Y', isSelf: true, activeStatus: 'Active today' }
  ];

  const content = document.getElementById('assignmentDetailPageContent');
  if (!content) return;

  content.innerHTML = `
    <!-- 1. Title & Course Card -->
    <div class="detail-title-card">
      <div class="asg-header-row">
        <span class="asg-course-badge">${asg.courseCode || asg.course}</span>
        <span class="asg-due-chip ${daysLeft <= 5 && asg.status !== 'completed' ? 'urgent' : ''}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>Due ${asg.dueDateLabel || asg.dueDate}</span>
        </span>
      </div>
      <h2 class="detail-page-main-title">${asg.title}</h2>
    </div>

    <!-- 2. Progress & Health Overview Gauge -->
    <div class="detail-gauge-card">
      <div class="detail-gauge-stats">
        <div class="detail-gauge-item">
          <span class="detail-gauge-num">${pct}%</span>
          <span class="detail-gauge-lbl">Completed</span>
        </div>
        <div class="group-stat-divider"></div>
        <div class="detail-gauge-item">
          <span class="detail-gauge-num" style="color: ${daysLeft <= 5 && asg.status !== 'completed' ? 'var(--color-danger)' : 'var(--primary)'};">${daysLeft > 0 ? daysLeft + 'd' : 'Today'}</span>
          <span class="detail-gauge-lbl">Remaining</span>
        </div>
        <div class="group-stat-divider"></div>
        <div class="detail-gauge-item">
          <span class="detail-gauge-num">${doneM}/${totalM}</span>
          <span class="detail-gauge-lbl">Milestones</span>
        </div>
      </div>

      <div class="asg-progress-track" style="margin-top: 8px; height: 11px;">
        <div class="asg-progress-fill ${pct === 100 ? 'done' : ''}" style="width: ${pct}%;"></div>
      </div>
    </div>

    <!-- 3. Team Collaboration (y x x x -> xxx y (name (status role))) -->
    <div class="detail-team-section">
      <div class="detail-section-title">
        <span>Team Collaboration (${members.length})</span>
        <button class="link-action-btn" type="button" onclick="showToast('Invite link copied to clipboard!')">+ Invite Peer</button>
      </div>

      <!-- Mount for y x x x or xxx y (name (status role)) -->
      <div id="teamCollabMount"></div>
    </div>

    <!-- 4. Interactive Milestones Checklist -->
    <div>
      <div class="detail-section-title">
        <span>Milestones Checklist (${doneM}/${totalM})</span>
        <span style="font-size: 10px; color: var(--text-muted); font-weight: 600;">Tap to inspect & assign</span>
      </div>
      <div class="detail-milestones-list">
        ${(asg.milestones || []).map((m, idx) => {
          const assignedMember = (asg.members || []).find(mem => mem.name === m.assignedTo) || { name: m.assignedTo || 'Unassigned', avatar: (m.assignedTo ? m.assignedTo.charAt(0) : '?') };
          return `
            <div class="milestone-item ${m.completed ? 'done' : ''}" onclick="openMilestoneDetailModal('${asg.id}', ${idx})" title="Tap to inspect sub-task breakdown and assigned peer">
              <div class="milestone-checkbox" onclick="event.stopPropagation(); toggleMilestone('${asg.id}', ${idx})" title="Toggle complete">
                ${m.completed ? `
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ` : ''}
              </div>
              <div class="milestone-info">
                <div class="milestone-title">${m.title}</div>
                <div class="milestone-meta-row">
                  <span class="milestone-due">Target: ${m.dueDate} · ${m.completed ? 'Completed' : 'Pending'}</span>
                  <span class="milestone-assignee-tag ${m.assignedTo === 'You' ? 'self' : ''}">
                    <span class="assignee-avatar-mini">${assignedMember.avatar || 'U'}</span>
                    <span>${m.assignedTo || 'Unassigned'}</span>
                  </span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- 5. Attached Resources & Deliverables -->
    <div>
      <div class="detail-section-title">
        <span>Resources &amp; Deliverables (${asg.resources ? asg.resources.length : 0})</span>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button class="btn-icon-add-resource" type="button" onclick="triggerResourceUpload('${asg.id}')" title="Upload file from device" aria-label="Upload file from device">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <input type="file" id="resourceDeviceFileInput" style="display: none;" onchange="handleResourceUpload(event, '${asg.id}')" multiple>
        </div>
      </div>
      <div class="detail-resources-list">
        ${(asg.resources || []).map(r => `
          <div class="resource-item" onclick="showToast('Opening resource: ${r.title}')">
            <div class="resource-item-left">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <span>${r.title}</span>
            </div>
            <span class="resource-item-meta">${r.size || r.type}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 6. Reassignment History Audit Trail (Transparency & Accountability) -->
    <div class="detail-history-section">
      <div class="detail-section-title" onclick="toggleReassignmentHistory('${asg.id}')" style="cursor: pointer; user-select: none;">
        <div style="display: flex; align-items: center; gap: 6px;">
          <span>Reassignment History (${(asg.reassignmentHistory || []).length})</span>
          <span class="history-collapse-arrow" id="histCollapseArrow_${asg.id}">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </div>
        <span style="font-size: 10px; color: var(--text-muted); font-weight: 600;">
          ${(asg.reassignmentHistory && asg.reassignmentHistory.length > 0) ? 'Tap to toggle log' : 'No prior adjustments'}
        </span>
      </div>

      <div class="reassignment-history-drawer" id="histDrawer_${asg.id}" style="${(asg.reassignmentHistory && asg.reassignmentHistory.length > 0) ? 'display: block;' : 'display: none;'}">
        ${(asg.reassignmentHistory && asg.reassignmentHistory.length > 0) ? `
          <div class="history-timeline-list">
            ${asg.reassignmentHistory.map(h => `
              <div class="history-timeline-item">
                <div class="history-item-header">
                  <div class="history-item-badge">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>${h.timestamp}</span>
                  </div>
                  <span class="history-progress-pill">${h.progressPct} · ${h.mode || 'AI Plan'}</span>
                </div>
                <div class="history-changes-wrap">
                  ${(h.changes || []).map(c => `
                    <div class="history-change-line">
                      <span class="history-task-title">${c.title}</span>
                      <span class="history-arrow">&rarr;</span>
                      <span class="history-assignee-shift">${c.shiftText}</span>
                    </div>
                  `).join('')}
                </div>
                <div class="history-fairness-note">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>${h.fairnessSummary}</span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="history-empty-card">
            <span>No task reassignments recorded. Re-planning history is preserved here for team transparency and accountability.</span>
          </div>
        `}
      </div>
    </div>

    <!-- 7. AI Progress-Adaptive Task Reorganiser Section (At the most bottom) -->
    <div class="detail-ai-reorganise-section">
      <div class="detail-ai-reorganise-card">
        <div class="ai-reorganise-card-header">
          <div class="ai-reorganise-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>AI Progress-Adaptive Planner</span>
          </div>
          <span class="ai-reorganise-status-pill">${pct}% done · ${totalM - doneM} remaining</span>
        </div>

        <h4 class="ai-reorganise-card-title">Dynamic Task Reorganisation</h4>
        <p class="ai-reorganise-card-desc">
          Milestones half completed or team pace fluctuating? Ask Packy AI anytime to analyse member workloads, detect bottlenecks, and generate a fairness-prioritised reorganisation plan.
        </p>

        <button class="btn-ai-reorganise-cta" type="button" onclick="openAiReorganiseModal('${asg.id}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
          <span>Ask AI to Reorganise Tasks</span>
        </button>
      </div>
    </div>

    <!-- 8. Delete Project / Assignment Action -->
    <div class="detail-delete-wrap" style="margin-top: 10px; margin-bottom: 20px;">
      <button type="button" class="btn-delete-project-cta" onclick="openDeleteAssignmentModal('${asg.id}')">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
        <span>Delete Project</span>
      </button>
    </div>
  `;

  // Render initial team collaboration mount (default: y x x x)
  renderAssignmentDetailTeam(assignmentId);
}

// Toggle Reassignment History Drawer
function toggleReassignmentHistory(assignmentId) {
  const drawer = document.getElementById(`histDrawer_${assignmentId}`);
  const arrow = document.getElementById(`histCollapseArrow_${assignmentId}`);
  if (!drawer) return;
  const isHidden = drawer.style.display === 'none';
  drawer.style.display = isHidden ? 'block' : 'none';
  if (arrow) {
    arrow.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

// ==========================================================================
// DYNAMIC TASK REORGANISATION & FAIRNESS PIPELINE
// ==========================================================================

// Step 1: Separate Completed & Remaining Work & Calculate Effort
function analyzeAssignmentTasks(asg) {
  const milestones = asg.milestones || [];
  const completedTasks = milestones.filter(m => m.completed);
  const remainingTasks = milestones.filter(m => !m.completed);

  const completedEffortHours = completedTasks.reduce((sum, m) => sum + (Number(m.hours) || 2.0), 0);
  const remainingEffortHours = remainingTasks.reduce((sum, m) => sum + (Number(m.hours) || 2.0), 0);
  const totalEffortHours = completedEffortHours + remainingEffortHours;
  const progressPct = totalEffortHours > 0 ? Math.round((completedEffortHours / totalEffortHours) * 100) : 0;

  return {
    totalTasks: milestones.length,
    completedTasks,
    remainingTasks,
    completedEffortHours: Number(completedEffortHours.toFixed(1)),
    remainingEffortHours: Number(remainingEffortHours.toFixed(1)),
    totalEffortHours: Number(totalEffortHours.toFixed(1)),
    progressPct
  };
}

// Step 2: Analyse Each Member (Contribution, Workload, Capacity, Deadlines, Behaviour)
function analyzeTeamMembers(asg, taskAnalysis) {
  const members = (asg.members && asg.members.length > 0) ? asg.members : [
    { name: 'You', role: 'Project Lead', avatar: 'Y', isSelf: true, activeStatus: 'Active today' }
  ];

  return members.map(member => {
    // Actual contribution (hours completed by this member)
    const memberCompletedTasks = taskAnalysis.completedTasks.filter(m => m.assignedTo === member.name);
    const actualContributionHours = memberCompletedTasks.reduce((sum, m) => sum + (Number(m.hours) || 2.0), 0);

    // Current assigned workload (hours remaining assigned to this member)
    const memberRemainingTasks = taskAnalysis.remainingTasks.filter(m => m.assignedTo === member.name);
    const currentAssignedWorkloadHours = memberRemainingTasks.reduce((sum, m) => sum + (Number(m.hours) || 2.0), 0);

    // Capacity & Behaviour classifications
    const isHighContributor = actualContributionHours >= 2.5;
    const isOverloaded = currentAssignedWorkloadHours >= 3.5;
    const isInactive = (member.activeStatus && (member.activeStatus.includes('yesterday') || member.activeStatus.includes('2d'))) && actualContributionHours === 0;

    let behaviourTag = 'Paced Contributor';
    let behaviourTone = 'info';
    let availableCapacity = 'Normal Bandwidth';

    if (isOverloaded) {
      behaviourTag = 'Workload Bottleneck';
      behaviourTone = 'danger';
      availableCapacity = 'Overloaded (Critical Path)';
    } else if (isInactive) {
      behaviourTag = 'Inactive / At-Risk';
      behaviourTone = 'warning';
      availableCapacity = 'Underutilized (0h delivered)';
    } else if (isHighContributor && currentAssignedWorkloadHours === 0) {
      behaviourTag = 'High Contributor (Free)';
      behaviourTone = 'success';
      availableCapacity = 'Available for Pair Support';
    } else if (isHighContributor) {
      behaviourTag = 'High Contributor';
      behaviourTone = 'success';
      availableCapacity = 'Moderate (Protect from overload)';
    }

    return {
      name: member.name,
      avatar: member.avatar,
      isSelf: member.isSelf,
      role: member.role,
      activeStatus: member.activeStatus || 'Active recently',
      completedCount: memberCompletedTasks.length,
      actualContributionHours: Number(actualContributionHours.toFixed(1)),
      remainingCount: memberRemainingTasks.length,
      currentAssignedWorkloadHours: Number(currentAssignedWorkloadHours.toFixed(1)),
      behaviourTag,
      behaviourTone,
      availableCapacity,
      isHighContributor,
      isOverloaded,
      isInactive
    };
  });
}

// Step 3: Detect Problems (Overloaded member, Inactive member, Delayed task, Deadline conflict)
function detectAssignmentProblems(asg, memberProfiles, taskAnalysis) {
  const problems = [];
  const daysLeft = calculateDaysRemaining(asg.dueDate);

  // 1. Overloaded member
  const overloaded = memberProfiles.filter(m => m.isOverloaded);
  overloaded.forEach(m => {
    problems.push({
      type: 'overloaded',
      title: `Overloaded Member: ${m.name}`,
      desc: `${m.name} has ${m.currentAssignedWorkloadHours}h remaining tasks on critical path with high complexity.`,
      severity: 'danger'
    });
  });

  // 2. Inactive member
  const inactive = memberProfiles.filter(m => m.isInactive);
  inactive.forEach(m => {
    problems.push({
      type: 'inactive',
      title: `Inactive / At-Risk: ${m.name}`,
      desc: `${m.name} (${m.activeStatus}) has not delivered any milestones yet. Risk of last-minute blocker.`,
      severity: 'warning'
    });
  });

  // 3. Delayed task
  const delayedTasks = taskAnalysis.remainingTasks.filter(t => t.dueDate && (t.dueDate.includes('Sep 10') || t.dueDate.includes('Sep 12') || t.dueDate.includes('Sprint 1')));
  if (delayedTasks.length > 0) {
    problems.push({
      type: 'delayed',
      title: `Delayed Task Invariant: ${delayedTasks[0].title}`,
      desc: `Scheduled timeline is lagging behind. Needs pair assistance to catch up.`,
      severity: 'warning'
    });
  }

  // 4. Deadline conflict
  if (daysLeft <= 7) {
    problems.push({
      type: 'deadline',
      title: `Deadline Proximity Conflict (${daysLeft > 0 ? daysLeft + ' days remaining' : 'Due today'})`,
      desc: `Submission deadline approaches with zero recovery buffer before Midterms week.`,
      severity: 'danger'
    });
  }

  return problems;
}

// Step 4: AI Generates Reorganisation Plan (Prioritising Fairness)
function generateFairnessPlan(asg, memberProfiles, taskAnalysis) {
  const pending = taskAnalysis.remainingTasks;
  const highContributors = memberProfiles.filter(m => m.isHighContributor);

  return pending.map((task, idx) => {
    const currentAssignee = task.assignedTo;
    const currentMemberProfile = memberProfiles.find(m => m.name === currentAssignee);

    let proposedPrimary = currentAssignee;
    let proposedHelper = 'None';
    let transferNote = '';
    let fairnessRule = '';
    let proposedDueDate = task.dueDate;

    if (idx === 0) {
      // First remaining task (e.g. Marcus's RPC tests)
      // Rule 1 & 3: Do not overload high contributors; Keep low contributors responsible!
      // Transfer only necessary remaining work (pair review 1.0h)
      const availableHelper = highContributors.find(h => h.name !== currentAssignee) || memberProfiles[0];
      proposedPrimary = currentAssignee; // Marcus stays primary lead!
      proposedHelper = availableHelper ? availableHelper.name : 'None';
      transferNote = proposedHelper !== 'None' ? 
        `Pair assistance: ${proposedHelper} provides 1.0h RPC schema verification; ${currentAssignee} retains 2.5h primary implementation.` : 
        'Paced schedule with intermediate milestones.';
      fairnessRule = 'Fairness Rule 1 & 3: Low contributor remains primary owner; high contributor co-pilots without absorbing full load.';
      proposedDueDate = 'Sep 15 (+1d buffer)';
    } else if (idx === 1) {
      // Second remaining task (e.g. Alex's chaos tests)
      // Rule 2 & 4: Keep responsibility visible; transfer only necessary review work
      const helper = memberProfiles.find(m => m.name === 'You') || memberProfiles[0];
      proposedPrimary = currentAssignee;
      proposedHelper = (currentMemberProfile && currentMemberProfile.isInactive) ? helper.name : 'None';
      transferNote = proposedHelper !== 'None' ? 
        `Checkpoint pairing: ${currentAssignee} conducts chaos tests; ${proposedHelper} validates test harness (0.5h review).` : 
        'Paced buffer';
      fairnessRule = 'Fairness Rule 2 & 4: Responsibility remains visible; shifts only 0.5h review checkpoint.';
      proposedDueDate = 'Sep 17 (Paced)';
    } else {
      // Final synthesis task
      proposedPrimary = currentAssignee;
      proposedHelper = 'None';
      transferNote = 'Synthesis sprint: Lead compiles benchmark graphs; peers provide module metrics.';
      fairnessRule = 'Fairness Rule 4: Shared team review buffer 24h prior to final portal upload.';
      proposedDueDate = 'Sep 18 (Final Portal)';
    }

    return {
      taskId: task.id,
      title: task.title,
      hours: task.hours || 2.0,
      originalAssignee: currentAssignee,
      proposedPrimary: proposedPrimary,
      proposedHelper: proposedHelper,
      transferNote: transferNote,
      fairnessRule: fairnessRule,
      originalDueDate: task.dueDate,
      proposedDueDate: proposedDueDate
    };
  });
}

// Open AI Dynamic Reorganiser Modal (Progress-Adaptive Recovery Pipeline)
function openAiReorganiseModal(assignmentId) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  if (!asg) return;

  const modal = document.getElementById('aiReorganiseModal');
  if (!modal) return;

  // Header Badges (Header section remains as it is)
  const badgeRow = document.getElementById('aiReorganiseBadgeRow');
  if (badgeRow) {
    badgeRow.innerHTML = `
      <span class="asg-course-badge">${asg.courseCode || asg.course}</span>
      <span class="ai-pace-badge">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>68% Actual · 12% Behind</span>
      </span>
    `;
  }

  // Render Modal Body with the 7 Sections + Action Buttons
  const body = document.getElementById('aiReorganiseModalBody');
  if (body) {
    body.innerHTML = `
      <!-- S1: PROGRESS ALIGNMENT -->
      <div class="ai-reorganise-card">
        <div class="ai-section-title-row">
          <span class="ai-section-title-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </span>
          <h4 class="ai-section-title">PROGRESS ALIGNMENT</h4>
        </div>

        <div class="ai-progress-alignment-block">
          <div class="ai-progress-metric">
            <div class="ai-metric-label-row">
              <span class="ai-metric-label">Planned Progress</span>
              <span class="ai-metric-val">80%</span>
            </div>
            <div class="ai-progress-bar-track">
              <div class="ai-progress-bar-fill fill-planned" style="width: 80%;"></div>
            </div>
          </div>

          <div class="ai-progress-metric">
            <div class="ai-metric-label-row">
              <span class="ai-metric-label">Actual Progress</span>
              <span class="ai-metric-val">68%</span>
            </div>
            <div class="ai-progress-bar-track">
              <div class="ai-progress-bar-fill fill-actual" style="width: 68%;"></div>
            </div>
          </div>

          <div class="ai-behind-alert-box">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>12% Behind the Original Plan</span>
          </div>

          <p class="ai-section-desc">
            Current task progress no longer matches the original AI-generated schedule. Packy AI will analyse the remaining milestones and recommend a recovery plan.
          </p>
        </div>
      </div>

      <!-- S3: TASKS REQUIRING ATTENTION -->
      <div class="ai-reorganise-card">
        <div class="ai-section-title-row">
          <span class="ai-section-title-icon" style="color: var(--color-warning-dark);">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </span>
          <h4 class="ai-section-title">TASKS REQUIRING ATTENTION</h4>
        </div>

        <div class="ai-attention-flow">
          <!-- Delayed Task Card -->
          <div class="ai-task-card card-delayed">
            <div class="ai-task-card-header">
              <span class="ai-task-card-title">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-warning-dark);">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Professor Office Hours Feedback Integration</span>
              </span>
              <span class="ai-mono-chip chip-amber">Delayed</span>
            </div>

            <div class="ai-meta-list">
              <div class="ai-meta-row">
                <span class="ai-meta-label">Assigned to</span>
                <span class="ai-meta-val">Elena Rostova</span>
              </div>
              <div class="ai-meta-row">
                <span class="ai-meta-label">Original target</span>
                <span class="ai-meta-val font-mono">Sep 18</span>
              </div>
              <div class="ai-meta-row">
                <span class="ai-meta-label">Current status</span>
                <span class="ai-meta-val">Pending</span>
              </div>
              <div class="ai-meta-row">
                <span class="ai-meta-label">Impact</span>
                <span class="ai-meta-val text-warning">6 days behind schedule</span>
              </div>
            </div>
          </div>

          <!-- Vertical Dependency Connector -->
          <div class="ai-dep-connector">
            <div class="ai-dep-chip">Affects</div>
            <div class="ai-dep-arrow">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          <!-- At Risk Task Card -->
          <div class="ai-task-card card-at-risk">
            <div class="ai-task-card-header">
              <span class="ai-task-card-title">Final Pitch Video &amp; Slide Submission</span>
              <span class="ai-mono-chip chip-red-soft">At Risk</span>
            </div>

            <div class="ai-meta-list">
              <div class="ai-meta-row">
                <span class="ai-meta-label">Assigned to</span>
                <span class="ai-meta-val">Jordan Patel</span>
              </div>
              <div class="ai-meta-row full-width">
                <span class="ai-meta-label">Reason</span>
                <span class="ai-meta-val">Cannot proceed on original schedule &mdash; depends on the delayed milestone above.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- S4: AI RECOMMENDED RECOVERY PLAN -->
      <div class="ai-reorganise-card">
        <div class="ai-section-title-row ai-section-title-between">
          <div class="ai-section-title-left">
            <span class="ai-section-title-icon">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </span>
            <h4 class="ai-section-title">AI RECOMMENDED RECOVERY PLAN</h4>
          </div>
          <button type="button" class="ai-plan-edit-pill" onclick="openAndScrollToModifySchedule('${asg.id}')">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>Edit</span>
          </button>
        </div>

        <div class="ai-recovery-list">
          <!-- Item 1: Elena -->
          <div class="ai-recovery-item-card">
            <div class="ai-recovery-item-title">Professor Office Hours Feedback Integration</div>
            <div class="ai-date-flow-column">
              <div class="ai-flow-stage original">
                <span class="ai-flow-stage-tag">ORIGINAL</span>
                <span class="ai-flow-stage-date font-mono">Sep 18 &ndash; Sep 24</span>
              </div>
              <div class="ai-flow-mid-row">
                <div class="ai-flow-arrow">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
                <span class="ai-mono-chip chip-amber" id="recChipM4">+2 Days</span>
              </div>
              <div class="ai-flow-stage recommended">
                <span class="ai-flow-stage-tag">RECOMMENDED</span>
                <span class="ai-flow-stage-date rec-bold font-mono" id="recDateLabelM4">Sep 21 &ndash; Sep 26</span>
              </div>
            </div>
            <div class="ai-reason-note-box">
              <em>Reason: additional time required &mdash; milestone is behind original schedule</em>
            </div>
          </div>

          <!-- Item 2: Jordan -->
          <div class="ai-recovery-item-card">
            <div class="ai-recovery-item-title">Final Pitch Video &amp; Slide Submission</div>
            <div class="ai-date-flow-column">
              <div class="ai-flow-stage original">
                <span class="ai-flow-stage-tag">ORIGINAL</span>
                <span class="ai-flow-stage-date font-mono">Sep 25 &ndash; Oct 02</span>
              </div>
              <div class="ai-flow-mid-row">
                <div class="ai-flow-arrow">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </div>
                <span class="ai-mono-chip chip-blue" id="recChipM5">Schedule Compressed</span>
              </div>
              <div class="ai-flow-stage recommended">
                <span class="ai-flow-stage-tag">RECOMMENDED</span>
                <span class="ai-flow-stage-date rec-bold font-mono" id="recDateLabelM5">Sep 27 &ndash; Oct 02</span>
              </div>
            </div>
            <div class="ai-reason-note-box">
              <em>Reason: start date updated &mdash; depends on delayed feedback integration</em>
            </div>
          </div>
        </div>

        <!-- Inline Modify Schedule Drawer -->
        <div id="aiModifyScheduleDrawer" class="ai-modify-schedule-drawer" style="display: none;">
          <div class="ai-modify-header">
            <div class="ai-modify-title-group">
              <span class="ai-modify-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14"></line>
                  <line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line>
                  <line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line>
                  <line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
              </span>
              <span>Fine-Tune Milestones</span>
            </div>
            <span class="ai-modify-hint">Custom Start & Duration</span>
          </div>

          <p class="ai-modify-intro-text">
            Directly adjust when each milestone starts and how many days are required. The overall plan timeline, recovery impact, and deadline status will recalculate dynamically.
          </p>

          <div class="ai-modify-cards-stack">
            <!-- Milestone 1: Elena Rostova -->
            <div class="ai-modify-milestone-card">
              <div class="ai-modify-card-top">
                <div class="ai-modify-card-identity">
                  <span class="ai-modify-task-name">Professor Office Hours Feedback Integration</span>
                  <div class="ai-modify-assignee-row">
                    <span class="ai-cap-avatar-sm">ER</span>
                    <span class="ai-modify-assignee-name">Elena Rostova</span>
                    <span class="ai-modify-role-dot">&bull;</span>
                    <span class="ai-modify-role-text">Primary Owner</span>
                  </div>
                </div>
                <span class="ai-mono-chip chip-amber" id="modBadgeM4">+2 Days</span>
              </div>

              <div class="ai-modify-card-desc">
                Incorporate faculty guidance into Slide 14 payback model and defend market pricing tier assumptions following the rescheduled consultation.
              </div>

              <div class="ai-modify-inputs-grid">
                <div class="ai-modify-field">
                  <label for="modStartM4">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Start Date</span>
                  </label>
                  <input type="date" id="modStartM4" class="rec-modify-date-input font-mono" value="2026-09-21" min="2026-09-18" max="2026-10-10" onchange="handleModifyDateChange('${asg.id}')">
                </div>
                <div class="ai-modify-field">
                  <label for="modDaysM4">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Days Needed</span>
                  </label>
                  <div class="ai-num-input-wrap">
                    <input type="number" id="modDaysM4" class="rec-modify-num-input font-mono" value="6" min="1" max="25" oninput="handleModifyDateChange('${asg.id}')">
                    <span class="ai-input-unit">days</span>
                  </div>
                </div>
              </div>

              <div class="ai-modify-calc-footer">
                <span class="ai-calc-lbl">Calculated Window:</span>
                <span class="ai-calc-val font-mono" id="modCalcWindowM4">Sep 21 – Sep 26 (6 days)</span>
              </div>
            </div>

            <!-- Milestone 2: Jordan Patel -->
            <div class="ai-modify-milestone-card">
              <div class="ai-modify-card-top">
                <div class="ai-modify-card-identity">
                  <span class="ai-modify-task-name">Final Pitch Video & Slide Submission</span>
                  <div class="ai-modify-assignee-row">
                    <span class="ai-cap-avatar-sm">JP</span>
                    <span class="ai-modify-assignee-name">Jordan Patel</span>
                    <span class="ai-modify-role-dot">&bull;</span>
                    <span class="ai-modify-role-text">Downstream Task</span>
                  </div>
                </div>
                <span class="ai-mono-chip chip-blue" id="modBadgeM5">Schedule Compressed</span>
              </div>

              <div class="ai-modify-card-desc">
                Record 7-minute pitch walkthrough, compile final deck appendix, and submit to portal. Depends directly on feedback integration.
              </div>

              <div class="ai-modify-inputs-grid">
                <div class="ai-modify-field">
                  <label for="modStartM5">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Start Date</span>
                  </label>
                  <input type="date" id="modStartM5" class="rec-modify-date-input font-mono" value="2026-09-27" min="2026-09-20" max="2026-10-15" onchange="handleModifyDateChange('${asg.id}')">
                </div>
                <div class="ai-modify-field">
                  <label for="modDaysM5">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Days Needed</span>
                  </label>
                  <div class="ai-num-input-wrap">
                    <input type="number" id="modDaysM5" class="rec-modify-num-input font-mono" value="6" min="1" max="25" oninput="handleModifyDateChange('${asg.id}')">
                    <span class="ai-input-unit">days</span>
                  </div>
                </div>
              </div>

              <div class="ai-modify-calc-footer">
                <span class="ai-calc-lbl">Calculated Window:</span>
                <span class="ai-calc-val font-mono" id="modCalcWindowM5">Sep 27 – Oct 02 (6 days)</span>
              </div>
              <div id="aiDependencyAlert" class="ai-dep-overlap-alert" style="display: none;">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Overlap Warning: Jordan starts before Elena completes feedback integration.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- S5: RECOVERY IMPACT -->
      <div class="ai-reorganise-card">
        <div class="ai-section-title-row">
          <span class="ai-section-title-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </span>
          <h4 class="ai-section-title">RECOVERY IMPACT</h4>
        </div>

        <div class="ai-impact-mini-grid">
          <div class="ai-impact-mini-card">
            <div class="ai-impact-mini-header">
              <span class="ai-impact-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </span>
              <span class="ai-impact-label">Schedule</span>
            </div>
            <div class="ai-impact-val">2 milestones updated</div>
          </div>

          <div class="ai-impact-mini-card">
            <div class="ai-impact-mini-header">
              <span class="ai-impact-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </span>
              <span class="ai-impact-label">Dependencies</span>
            </div>
            <div class="ai-impact-val">1 milestone affected</div>
          </div>

          <div class="ai-impact-mini-card">
            <div class="ai-impact-mini-header">
              <span class="ai-impact-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </span>
              <span class="ai-impact-label">Deadline</span>
            </div>
            <div class="ai-impact-val text-success" id="impactDeadlineVal">Still achievable</div>
          </div>

          <div class="ai-impact-mini-card">
            <div class="ai-impact-mini-header">
              <span class="ai-impact-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </span>
              <span class="ai-impact-label">Capacity</span>
            </div>
            <div class="ai-impact-val text-warning">1 member near limit</div>
          </div>
        </div>
      </div>

      <!-- S6: DEADLINE STATUS -->
      <div class="ai-reorganise-card ai-deadline-card achievable" id="aiDeadlineStatusCard">
        <div class="ai-deadline-status-header">
          <span class="ai-deadline-dot-indicator green" id="aiDeadlineDot"></span>
          <span class="ai-deadline-heading" id="aiDeadlineStatusHeading">Deadline Still Achievable</span>
        </div>

        <div class="ai-deadline-stats-panel green-tint" id="aiDeadlineStatsPanel">
          <div class="ai-deadline-col">
            <span class="ai-dl-lbl">FINAL DEADLINE</span>
            <span class="ai-dl-val font-mono">Oct 02, 2026</span>
          </div>
          <div class="ai-dl-divider"></div>
          <div class="ai-deadline-col">
            <span class="ai-dl-lbl">PROJECTED</span>
            <span class="ai-dl-val font-mono">Sep 30, 2026</span>
          </div>
          <div class="ai-dl-divider"></div>
          <div class="ai-deadline-col">
            <span class="ai-dl-lbl">BUFFER</span>
            <span class="ai-dl-val font-mono">2 days</span>
          </div>
        </div>

        <div class="ai-deadline-desc" id="aiDeadlineStatusDesc">
          The revised schedule can still meet the assignment deadline, but the available schedule buffer has been reduced.
        </div>
      </div>

      <!-- S7: MEMBER CAPACITY AFTER REORGANISATION -->
      <div class="ai-reorganise-card">
        <div class="ai-section-title-row">
          <span class="ai-section-title-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </span>
          <h4 class="ai-section-title">MEMBER CAPACITY AFTER REORGANISATION</h4>
        </div>

        <div class="ai-capacity-list">
          <!-- You -->
          <div class="ai-capacity-member-card">
            <div class="ai-cap-top-row">
              <div class="ai-cap-user">
                <span class="ai-cap-avatar self">Y</span>
                <span class="ai-cap-name">You</span>
              </div>
              <span class="ai-mono-chip chip-green">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Within Capacity</span>
              </span>
            </div>
            <div class="ai-cap-bar-row">
              <div class="ai-cap-track">
                <div class="ai-cap-fill fill-normal" style="width: 80%;"></div>
              </div>
              <span class="ai-cap-hours font-mono">4h / 5h</span>
            </div>
          </div>

          <!-- Elena Rostova -->
          <div class="ai-capacity-member-card">
            <div class="ai-cap-top-row">
              <div class="ai-cap-user">
                <span class="ai-cap-avatar">ER</span>
                <span class="ai-cap-name">Elena Rostova</span>
              </div>
              <span class="ai-mono-chip chip-amber">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Over Capacity</span>
              </span>
            </div>
            <div class="ai-cap-bar-row">
              <div class="ai-cap-track">
                <div class="ai-cap-fill fill-warning" style="width: 100%;"></div>
              </div>
              <span class="ai-cap-hours font-mono text-warning">5.5h / 5h</span>
            </div>
          </div>

          <!-- Jordan Patel -->
          <div class="ai-capacity-member-card">
            <div class="ai-cap-top-row">
              <div class="ai-cap-user">
                <span class="ai-cap-avatar">JP</span>
                <span class="ai-cap-name">Jordan Patel</span>
              </div>
              <span class="ai-mono-chip chip-green-soft">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Available Cap.</span>
              </span>
            </div>
            <div class="ai-cap-bar-row">
              <div class="ai-cap-track">
                <div class="ai-cap-fill fill-normal" style="width: 60%;"></div>
              </div>
              <span class="ai-cap-hours font-mono">3h / 5h</span>
            </div>
          </div>
        </div>
      </div>

      <!-- S8: ACTION BUTTONS -->
      <div class="ai-modal-action-bar">
        <button type="button" class="btn-action-primary" onclick="acceptRecoveryPlan('${asg.id}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Accept Recovery Plan</span>
        </button>

        <button type="button" class="btn-action-modify" onclick="toggleModifySchedule('${asg.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
          <span id="btnModifyText">Edit Schedule</span>
        </button>

        <button type="button" class="btn-action-secondary" onclick="keepCurrentPlan()">
          <span>Keep Current Plan</span>
        </button>
      </div>
    `;
  }

  modal.classList.add('active');
}

// Close AI Dynamic Reorganiser Modal
function closeAiReorganiseModal() {
  const modal = document.getElementById('aiReorganiseModal');
  if (modal) modal.classList.remove('active');
  state.activeReorganiseState = null;
}

// Toggle Modify Schedule Drawer
function toggleModifySchedule(assignmentId) {
  const drawer = document.getElementById('aiModifyScheduleDrawer');
  const btnText = document.getElementById('btnModifyText');
  if (!drawer) return;
  const isOpening = drawer.style.display === 'none';
  drawer.style.display = isOpening ? 'block' : 'none';
  if (btnText) {
    btnText.textContent = isOpening ? 'Hide Adjustments' : 'Edit Schedule';
  }
  if (isOpening) {
    scrollToModifyDrawer();
  }
}

// Open and Scroll directly to Fine-Tune Milestones Drawer
function openAndScrollToModifySchedule(assignmentId) {
  const drawer = document.getElementById('aiModifyScheduleDrawer');
  const btnText = document.getElementById('btnModifyText');
  if (!drawer) return;
  drawer.style.display = 'block';
  if (btnText) {
    btnText.textContent = 'Hide Adjustments';
  }
  scrollToModifyDrawer();
}

// Smoothly scroll the modal container directly to the drawer
function scrollToModifyDrawer() {
  const drawer = document.getElementById('aiModifyScheduleDrawer');
  const body = document.getElementById('aiReorganiseModalBody');
  if (!drawer) return;

  setTimeout(() => {
    if (body) {
      const drawerRect = drawer.getBoundingClientRect();
      const bodyRect = body.getBoundingClientRect();
      const targetScrollTop = body.scrollTop + (drawerRect.top - bodyRect.top) - 10;
      body.scrollTo({ top: Math.max(0, targetScrollTop), behavior: 'smooth' });
    } else {
      drawer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Gentle focus pulse highlight on the drawer
    drawer.classList.add('ai-drawer-highlight');
    setTimeout(() => {
      drawer.classList.remove('ai-drawer-highlight');
    }, 1200);
  }, 40);
}

// Interactive Date Modification Handler
function handleModifyDateChange(assignmentId) {
  const startInputM4 = document.getElementById('modStartM4');
  const daysInputM4 = document.getElementById('modDaysM4');
  const startInputM5 = document.getElementById('modStartM5');
  const daysInputM5 = document.getElementById('modDaysM5');

  const recDateLabelM4 = document.getElementById('recDateLabelM4');
  const recChipM4 = document.getElementById('recChipM4');
  const recDateLabelM5 = document.getElementById('recDateLabelM5');
  const recChipM5 = document.getElementById('recChipM5');

  const modBadgeM4 = document.getElementById('modBadgeM4');
  const modBadgeM5 = document.getElementById('modBadgeM5');
  const modCalcWindowM4 = document.getElementById('modCalcWindowM4');
  const modCalcWindowM5 = document.getElementById('modCalcWindowM5');
  const aiDependencyAlert = document.getElementById('aiDependencyAlert');

  const impactDeadlineVal = document.getElementById('impactDeadlineVal');
  const aiDeadlineDot = document.getElementById('aiDeadlineDot');
  const aiDeadlineHeading = document.getElementById('aiDeadlineStatusHeading');
  const aiDeadlineStatsPanel = document.getElementById('aiDeadlineStatsPanel');
  const aiDeadlineStatusDesc = document.getElementById('aiDeadlineStatusDesc');

  if (!startInputM4 || !daysInputM4 || !startInputM5 || !daysInputM5) return;

  const parseInputDate = (str) => {
    if (!str) return null;
    const parts = str.split('-').map(Number);
    if (parts.length !== 3) return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const formatShort = (d) => `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}`;
  const formatFull = (d) => `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`;

  const startM4 = parseInputDate(startInputM4.value) || new Date(2026, 8, 21);
  const daysM4 = Math.max(1, parseInt(daysInputM4.value, 10) || 1);
  const endM4 = new Date(startM4);
  endM4.setDate(startM4.getDate() + daysM4 - 1);

  const startM5 = parseInputDate(startInputM5.value) || new Date(2026, 8, 27);
  const daysM5 = Math.max(1, parseInt(daysInputM5.value, 10) || 1);
  const endM5 = new Date(startM5);
  endM5.setDate(startM5.getDate() + daysM5 - 1);

  // Update Elena (M4)
  const origEndM4 = new Date(2026, 8, 24); // Sep 24
  const diffDaysM4 = Math.round((endM4 - origEndM4) / 86400000);
  const labelM4 = `${formatShort(startM4)} – ${formatShort(endM4)}`;

  if (recDateLabelM4) recDateLabelM4.textContent = labelM4;
  if (modCalcWindowM4) modCalcWindowM4.textContent = `${labelM4} (${daysM4} day${daysM4 > 1 ? 's' : ''})`;

  let chipTextM4 = '+2 Days';
  let chipClassM4 = 'ai-mono-chip chip-amber';
  if (diffDaysM4 === 0) {
    chipTextM4 = 'On Schedule';
    chipClassM4 = 'ai-mono-chip chip-blue';
  } else if (diffDaysM4 > 0) {
    chipTextM4 = `+${diffDaysM4} Day${diffDaysM4 > 1 ? 's' : ''}`;
    chipClassM4 = diffDaysM4 >= 3 ? 'ai-mono-chip chip-amber' : 'ai-mono-chip chip-blue';
  } else {
    chipTextM4 = `${Math.abs(diffDaysM4)}d Ahead`;
    chipClassM4 = 'ai-mono-chip chip-green-soft';
  }
  if (recChipM4) {
    recChipM4.textContent = chipTextM4;
    recChipM4.className = chipClassM4;
  }
  if (modBadgeM4) {
    modBadgeM4.textContent = chipTextM4;
    modBadgeM4.className = chipClassM4;
  }

  // Check dependency overlap between M4 and M5
  if (aiDependencyAlert) {
    if (endM4 > startM5) {
      aiDependencyAlert.style.display = 'flex';
    } else {
      aiDependencyAlert.style.display = 'none';
    }
  }

  // Update Jordan (M5)
  const finalDeadline = new Date(2026, 9, 2); // Oct 02, 2026
  const diffDaysWithDeadline = Math.round((endM5 - finalDeadline) / 86400000);
  const labelM5 = `${formatShort(startM5)} – ${formatShort(endM5)}`;

  if (recDateLabelM5) recDateLabelM5.textContent = labelM5;
  if (modCalcWindowM5) modCalcWindowM5.textContent = `${labelM5} (${daysM5} day${daysM5 > 1 ? 's' : ''})`;

  if (diffDaysWithDeadline > 0) {
    // Overrun
    const overrunText = `+${diffDaysWithDeadline} day${diffDaysWithDeadline > 1 ? 's' : ''}`;
    if (recChipM5) {
      recChipM5.textContent = 'Deadline At Risk';
      recChipM5.className = 'ai-mono-chip chip-red-soft';
    }
    if (modBadgeM5) {
      modBadgeM5.textContent = 'Deadline At Risk';
      modBadgeM5.className = 'ai-mono-chip chip-red-soft';
    }
    if (impactDeadlineVal) {
      impactDeadlineVal.textContent = `Overrun (${overrunText})`;
      impactDeadlineVal.className = 'ai-impact-val text-danger';
    }
    if (aiDeadlineDot) aiDeadlineDot.className = 'ai-deadline-dot-indicator red';
    if (aiDeadlineHeading) aiDeadlineHeading.textContent = 'Deadline At Risk';
    if (aiDeadlineStatsPanel) {
      aiDeadlineStatsPanel.className = 'ai-deadline-stats-panel red-tint';
      aiDeadlineStatsPanel.innerHTML = `
        <div class="ai-deadline-col">
          <span class="ai-dl-lbl">PROJECTED</span>
          <span class="ai-dl-val font-mono">${formatFull(endM5)}</span>
        </div>
        <div class="ai-dl-divider"></div>
        <div class="ai-deadline-col">
          <span class="ai-dl-lbl">FINAL DEADLINE</span>
          <span class="ai-dl-val font-mono">Oct 02, 2026</span>
        </div>
        <div class="ai-dl-divider"></div>
        <div class="ai-deadline-col">
          <span class="ai-dl-lbl">OVERRUN</span>
          <span class="ai-dl-val font-mono text-danger">${overrunText}</span>
        </div>
      `;
    }
    if (aiDeadlineStatusDesc) {
      aiDeadlineStatusDesc.textContent = 'The chosen milestone dates extend past the course submission deadline. Reduce task duration or adjust start dates to ensure delivery.';
    }
  } else {
    // Within deadline
    const bufferDays = Math.abs(diffDaysWithDeadline);
    const chipTextM5 = bufferDays > 0 ? `Buffer +${bufferDays}d` : 'Schedule Compressed';
    if (recChipM5) {
      recChipM5.textContent = chipTextM5;
      recChipM5.className = 'ai-mono-chip chip-blue';
    }
    if (modBadgeM5) {
      modBadgeM5.textContent = chipTextM5;
      modBadgeM5.className = 'ai-mono-chip chip-blue';
    }
    if (impactDeadlineVal) {
      impactDeadlineVal.textContent = 'Still achievable';
      impactDeadlineVal.className = 'ai-impact-val text-success';
    }
    if (aiDeadlineDot) aiDeadlineDot.className = 'ai-deadline-dot-indicator green';
    if (aiDeadlineHeading) aiDeadlineHeading.textContent = 'Deadline Still Achievable';
    if (aiDeadlineStatsPanel) {
      aiDeadlineStatsPanel.className = 'ai-deadline-stats-panel green-tint';
      aiDeadlineStatsPanel.innerHTML = `
        <div class="ai-deadline-col">
          <span class="ai-dl-lbl">FINAL DEADLINE</span>
          <span class="ai-dl-val font-mono">Oct 02, 2026</span>
        </div>
        <div class="ai-dl-divider"></div>
        <div class="ai-deadline-col">
          <span class="ai-dl-lbl">PROJECTED</span>
          <span class="ai-dl-val font-mono">${formatFull(endM5)}</span>
        </div>
        <div class="ai-dl-divider"></div>
        <div class="ai-deadline-col">
          <span class="ai-dl-lbl">BUFFER</span>
          <span class="ai-dl-val font-mono">${bufferDays} day${bufferDays === 1 ? '' : 's'}</span>
        </div>
      `;
    }
    if (aiDeadlineStatusDesc) {
      aiDeadlineStatusDesc.textContent = bufferDays > 0
        ? `The revised schedule completes ${bufferDays} day${bufferDays > 1 ? 's' : ''} ahead of the hard deadline.`
        : 'The revised schedule completes on the final deadline, keeping the project on track.';
    }
  }
}

// Keep Current Plan action
function keepCurrentPlan() {
  closeAiReorganiseModal();
  showToast('Current schedule kept unchanged.');
}

// Accept Recovery Plan action
function acceptRecoveryPlan(assignmentId) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  if (!asg || !asg.milestones) return;

  const startInputM4 = document.getElementById('modStartM4');
  const daysInputM4 = document.getElementById('modDaysM4');
  const startInputM5 = document.getElementById('modStartM5');
  const daysInputM5 = document.getElementById('modDaysM5');

  const parseInputDate = (str) => {
    if (!str) return null;
    const parts = str.split('-').map(Number);
    if (parts.length !== 3) return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const formatShort = (d) => `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}`;

  let targetDueDateM4 = 'Sep 26';
  let targetDueDateM5 = 'Oct 02';
  let shiftDescM4 = 'Target extended to Sep 26 (+2 Days)';
  let shiftDescM5 = 'Schedule compressed: Sep 27 – Oct 02';

  if (startInputM4 && daysInputM4) {
    const startM4 = parseInputDate(startInputM4.value) || new Date(2026, 8, 21);
    const daysM4 = Math.max(1, parseInt(daysInputM4.value, 10) || 1);
    const endM4 = new Date(startM4);
    endM4.setDate(startM4.getDate() + daysM4 - 1);
    targetDueDateM4 = formatShort(endM4);
    const diffDaysM4 = Math.round((endM4 - new Date(2026, 8, 24)) / 86400000);
    const shiftStr = diffDaysM4 > 0 ? `+${diffDaysM4} Days` : (diffDaysM4 === 0 ? 'On Schedule' : `${Math.abs(diffDaysM4)} Days Ahead`);
    shiftDescM4 = `Custom: ${formatShort(startM4)} – ${targetDueDateM4} (${shiftStr})`;
  }

  if (startInputM5 && daysInputM5) {
    const startM5 = parseInputDate(startInputM5.value) || new Date(2026, 8, 27);
    const daysM5 = Math.max(1, parseInt(daysInputM5.value, 10) || 1);
    const endM5 = new Date(startM5);
    endM5.setDate(startM5.getDate() + daysM5 - 1);
    targetDueDateM5 = formatShort(endM5);
    shiftDescM5 = `Custom: ${formatShort(startM5)} – ${targetDueDateM5} (${daysM5} days)`;
  }

  const m4 = asg.milestones.find(m => m.id === 'm4');
  const m5 = asg.milestones.find(m => m.id === 'm5');
  if (m4) m4.dueDate = targetDueDateM4;
  if (m5) m5.dueDate = targetDueDateM5;

  // Preserve Reassignment & Recovery History
  if (!asg.reassignmentHistory) asg.reassignmentHistory = [];
  const now = new Date();
  const timeStr = `${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`;

  asg.reassignmentHistory.unshift({
    id: 'hist-' + Date.now(),
    timestamp: timeStr,
    progressPct: '68%',
    mode: 'AI Dynamic Recovery Plan',
    changes: [
      {
        taskId: 'm4',
        title: 'Professor Office Hours Feedback Integration',
        shiftText: shiftDescM4,
        primary: 'Elena Rostova',
        helper: 'None'
      },
      {
        taskId: 'm5',
        title: 'Final Pitch Video & Slide Submission',
        shiftText: shiftDescM5,
        primary: 'Jordan Patel',
        helper: 'None'
      }
    ],
    fairnessSummary: `Schedule recovery plan accepted with fine-tuned milestones: Elena (${shiftDescM4}) and Jordan (${shiftDescM5}).`
  });

  // Update AI Risk Assessment
  asg.aiRiskAnalysis = {
    status: 'Recovery Plan Active',
    tone: 'success',
    text: `Recovery plan adopted at 68% progress. Schedule adjusted: Elena due ${targetDueDateM4}, Jordan due ${targetDueDateM5}.`
  };

  // Sync to Tasks Tab
  syncMilestonesToTaskList();

  // Re-render UI
  renderAssignmentDetailPage(assignmentId);
  renderGroupAssignmentScreen();

  closeAiReorganiseModal();
  showToast('Recovery plan accepted! Milestones updated.');
}

// Backward compatibility alias
function applyAiReorganisePlan(assignmentId, mode) {
  acceptRecoveryPlan(assignmentId);
}

// Sync Assignment Milestones into Task List (state.tasks) - only user's assigned subtasks
function syncMilestonesToTaskList() {
  if (!state.assignments) return;
  state.assignments.forEach(asg => {
    if (!asg.milestones) return;
    asg.milestones.forEach((m) => {
      const taskId = `task-${asg.id}-${m.id}`;
      const existingTaskIdx = state.tasks.findIndex(t => t.id === taskId);
      const isUserTask = (m.assignedTo === 'You');

      if (!isUserTask) {
        // If milestone is assigned to a peer, ensure it is NOT shown in user's task list
        if (existingTaskIdx !== -1) {
          state.tasks.splice(existingTaskIdx, 1);
        }
        return;
      }

      // Determine date and time
      const taskDate = parseMilestoneDate(m, asg);
      const taskTime = m.time || formatTimeRange(m.startTime || '14:00', m.hours || 2.0);

      if (existingTaskIdx !== -1) {
        const existingTask = state.tasks[existingTaskIdx];
        existingTask.completed = m.completed;
        existingTask.status = m.completed ? 'done' : 'pending';
        existingTask.assignedTo = 'You';
        existingTask.title = `[${asg.courseCode}] ${m.title}`;
        existingTask.description = m.description || `Milestone for ${asg.title}`;
        existingTask.date = taskDate;
        existingTask.time = taskTime;
        existingTask.hours = m.hours || 2.0;
      } else {
        state.tasks.push({
          id: taskId,
          title: `[${asg.courseCode}] ${m.title}`,
          time: taskTime,
          category: 'assignment',
          categoryLabel: 'Assignment',
          date: taskDate,
          hours: m.hours || 2.0,
          status: m.completed ? 'done' : 'pending',
          completed: m.completed,
          assignedTo: 'You',
          description: m.description || `Milestone for ${asg.title}`,
          asgId: asg.id,
          milestoneId: m.id
        });
      }
    });
  });
}

// Open Milestone Detail Modal
function openMilestoneDetailModal(assignmentId, milestoneIdx) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  if (!asg || !asg.milestones || !asg.milestones[milestoneIdx]) return;

  const m = asg.milestones[milestoneIdx];
  state.activeMilestoneModal = { assignmentId, milestoneIdx };

  const modal = document.getElementById('milestoneDetailModal');
  if (!modal) return;

  // Header badges
  const badgeRow = document.getElementById('milestoneModalBadgeRow');
  if (badgeRow) {
    badgeRow.innerHTML = `
      <span class="asg-course-badge">${asg.courseCode || asg.course}</span>
      <span class="milestone-time-pill">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>Est. ${m.hours || 2.0}h</span>
      </span>
      <span class="milestone-sync-pill">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </svg>
        <span>Task Tab Synced</span>
      </span>
    `;
  }

  // Header Title & Subtitle
  const titleElem = document.getElementById('milestoneModalTitle');
  if (titleElem) titleElem.innerText = m.title;

  const subtitleElem = document.getElementById('milestoneModalSubtitle');
  if (subtitleElem) {
    subtitleElem.innerText = `Milestone Question Breakdown · ${asg.title}`;
  }

  // Assigned Member
  const assignedMember = (asg.members || []).find(mem => mem.name === m.assignedTo) || {
    name: m.assignedTo || 'Unassigned',
    role: 'Collaborator',
    avatar: (m.assignedTo ? m.assignedTo.charAt(0) : '?'),
    activeStatus: 'Active today'
  };

  // Body content
  const body = document.getElementById('milestoneModalBody');
  if (body) {
    body.innerHTML = `
      <!-- 1. What Needs To Be Done (Breakdown Details) -->
      <div class="milestone-modal-card">
        <div class="modal-card-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
          <span>What Needs To Be Done</span>
        </div>
        <p class="milestone-breakdown-desc">${m.description || 'Breakdown task derived from project questions and rubric specification.'}</p>
      </div>

      <!-- 2. Assigned Team Member & Reassign Selector -->
      <div class="milestone-modal-card">
        <div class="modal-card-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span>Assigned Member</span>
        </div>

        <div class="milestone-current-assignee">
          <div class="current-assignee-avatar ${assignedMember.isSelf ? 'self' : ''}">
            ${assignedMember.avatar || 'U'}
          </div>
          <div class="current-assignee-info">
            <div class="current-assignee-name">${assignedMember.name} ${assignedMember.isSelf ? '(You)' : ''}</div>
            <div class="current-assignee-role">
              <span>${assignedMember.role || 'Contributor'}</span>
              <span>•</span>
              <span>${assignedMember.activeStatus || 'Active today'}</span>
            </div>
          </div>
        </div>

        <div class="reassign-row-label">Reassign to team member:</div>
        <div class="reassign-chips-row">
          ${(asg.members || []).map(mem => `
            <button type="button" class="reassign-pill-btn ${m.assignedTo === mem.name ? 'active' : ''}" onclick="reassignMilestone('${asg.id}', ${milestoneIdx}, '${mem.name}')">
              <span class="reassign-avatar-mini ${mem.isSelf ? 'self' : ''}">${mem.avatar}</span>
              <span>${mem.name}</span>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- 3. Schedule & Details -->
      <div class="milestone-modal-card meta-card">
        <div class="modal-meta-item">
          <span class="modal-meta-label">Target Due</span>
          <span class="modal-meta-val">${m.dueDate}</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Est. Effort</span>
          <span class="modal-meta-val">${m.hours || 2.0}h</span>
        </div>
        <div class="modal-meta-item">
          <span class="modal-meta-label">Task Status</span>
          <span class="modal-meta-val ${m.completed ? 'status-done' : 'status-pending'}">${m.completed ? 'Completed' : 'Pending'}</span>
        </div>
      </div>

      <!-- 4. Actions -->
      <div class="milestone-modal-actions">
        <button type="button" class="btn-milestone-toggle ${m.completed ? 'btn-mark-reopen' : 'btn-mark-done'}" onclick="toggleMilestoneFromModal('${asg.id}', ${milestoneIdx})">
          ${m.completed ? `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="1 4 1 10 7 10"></polyline>
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
            </svg>
            <span>Reopen Milestone</span>
          ` : `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Mark as Completed</span>
          `}
        </button>
        <button type="button" class="btn-milestone-task-link" onclick="viewMilestoneInTaskTab('${asg.id}', '${m.id}')">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          <span>View in Task Tab</span>
        </button>
      </div>
    `;
  }

  modal.classList.add('active');
}

// Close Milestone Detail Modal
function closeMilestoneDetailModal() {
  const modal = document.getElementById('milestoneDetailModal');
  if (modal) modal.classList.remove('active');
  state.activeMilestoneModal = null;
}

// Reassign Milestone to another team member
function reassignMilestone(assignmentId, milestoneIdx, newAssignee) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  if (!asg || !asg.milestones || !asg.milestones[milestoneIdx]) return;

  const m = asg.milestones[milestoneIdx];
  m.assignedTo = newAssignee;

  // Sync to task tab list
  syncMilestonesToTaskList();

  // Refresh modal and detail page
  openMilestoneDetailModal(assignmentId, milestoneIdx);
  const detailScreen = document.getElementById('screenAssignmentDetail');
  if (detailScreen && detailScreen.style.display !== 'none') {
    renderAssignmentDetailPage(assignmentId);
  }

  showToast(`Reassigned "${m.title.substring(0, 18)}..." to ${newAssignee}!`);
}

// Toggle Milestone completion from Modal
function toggleMilestoneFromModal(assignmentId, milestoneIdx) {
  toggleMilestone(assignmentId, milestoneIdx);
  openMilestoneDetailModal(assignmentId, milestoneIdx);
}

// Open Milestone Detail directly when clicking a milestone task in the Task tab
function openMilestoneDetailFromTask(assignmentId, milestoneId) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  if (!asg || !asg.milestones) return;
  const idx = asg.milestones.findIndex(m => m.id === milestoneId);
  if (idx !== -1) {
    openMilestoneDetailModal(assignmentId, idx);
  }
}

// View Milestone Task in the Task Tab
function viewMilestoneInTaskTab(assignmentId, milestoneId) {
  closeMilestoneDetailModal();
  closeAssignmentDetailScreen();

  const taskTab = document.querySelectorAll('.dock-tab')[1];
  if (taskTab) {
    switchNavTab(taskTab, 'task');
  }

  // Scroll to task card
  setTimeout(() => {
    const card = document.getElementById(`taskCard_task-${assignmentId}-${milestoneId}`);
    if (card) {
      const viewport = document.getElementById('viewportScroll');
      if (viewport) {
        const viewportRect = viewport.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const targetScroll = viewport.scrollTop + (cardRect.top - viewportRect.top) - (viewportRect.height / 2) + (cardRect.height / 2);
        viewport.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
      }
      card.style.transition = 'all 0.4s ease';
      card.style.borderColor = 'var(--primary)';
      card.style.boxShadow = '0 0 0 3px var(--primary-light)';
      setTimeout(() => {
        card.style.borderColor = '';
        card.style.boxShadow = '';
      }, 2000);
    }
  }, 250);

  showToast('Task focused in Task list');
}

// Trigger Resource Upload (Click hidden file input)
function triggerResourceUpload(assignmentId) {
  const input = document.getElementById('resourceDeviceFileInput');
  if (input) {
    input.click();
  }
}

// Handle Resource File Upload from Device
function handleResourceUpload(event, assignmentId) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  if (!asg || !event.target || !event.target.files) return;

  const files = Array.from(event.target.files);
  if (files.length === 0) return;

  if (!asg.resources) asg.resources = [];

  files.forEach(file => {
    // Format size
    let sizeStr = '';
    if (file.size < 1024 * 1024) {
      sizeStr = Math.max(1, Math.round(file.size / 1024)) + ' KB';
    } else {
      sizeStr = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
    }

    // Determine type from extension
    const ext = file.name.split('.').pop().toUpperCase();
    let type = ext || 'File';
    if (['JPG', 'JPEG', 'PNG', 'WEBP', 'SVG'].includes(ext)) type = 'Image';
    else if (['ZIP', 'RAR', 'TAR', 'GZ', '7Z'].includes(ext)) type = 'Archive';
    else if (['DOC', 'DOCX'].includes(ext)) type = 'Word';
    else if (['PPT', 'PPTX'].includes(ext)) type = 'Slides';
    else if (['XLS', 'XLSX', 'CSV'].includes(ext)) type = 'Spreadsheet';
    else if (['JS', 'PY', 'JAVA', 'CPP', 'HTML', 'CSS', 'GO'].includes(ext)) type = 'Code';

    asg.resources.unshift({
      title: file.name,
      type: type,
      size: sizeStr,
      isUploaded: true
    });
  });

  renderAssignmentDetailPage(assignmentId);
  showToast(files.length === 1 ? `Uploaded "${files[0].name}"!` : `Uploaded ${files.length} files from device!`);
  event.target.value = '';
}

// Toggle Milestone completion
function toggleMilestone(assignmentId, milestoneIdx) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  if (!asg || !asg.milestones || !asg.milestones[milestoneIdx]) return;

  const m = asg.milestones[milestoneIdx];
  m.completed = !m.completed;

  // Check if all completed
  const allDone = asg.milestones.every(item => item.completed);
  if (allDone) {
    asg.status = 'completed';
    asg.statusLabel = 'Completed';
  } else if (asg.status === 'completed') {
    asg.status = 'in_progress';
    asg.statusLabel = 'In Progress';
  }

  // Synchronize to Task Tab list
  syncMilestonesToTaskList();

  // Refresh page if detail screen is currently open
  const detailScreen = document.getElementById('screenAssignmentDetail');
  if (detailScreen && detailScreen.style.display !== 'none') {
    renderAssignmentDetailPage(assignmentId);
  }
  renderGroupAssignmentScreen();

  showToast(m.completed ? `Completed: "${m.title.substring(0, 20)}..."` : `Reopened: "${m.title.substring(0, 20)}..."`);
}

// Toast Utility
// Toast messages disabled per user request
function showToast(msg) {
  // no-op: all toast notifications removed
}

// ==========================================================================
// DELETE / REMOVE HANDLERS (TASKS & PROJECTS)
// ==========================================================================
let pendingDeleteTarget = null; // { type: 'task' | 'assignment', id: string | number }

function openDeleteTaskModal(taskId) {
  const task = state.tasks.find(t => String(t.id) === String(taskId));
  const taskName = task ? task.title : 'this task';
  pendingDeleteTarget = { type: 'task', id: taskId };

  const title = document.getElementById('deleteConfirmTitle');
  const sub = document.getElementById('deleteConfirmSubtitle');
  const btn = document.getElementById('btnConfirmDeleteAction');

  if (title) title.innerText = 'Delete Task?';
  if (sub) sub.innerText = `Are you sure you want to remove "${taskName}" from your task list?`;
  if (btn) {
    btn.onclick = () => executeDelete();
  }

  const modal = document.getElementById('deleteConfirmModal');
  if (modal) modal.classList.add('active');
}

function openDeleteAssignmentModal(assignmentId) {
  const asg = state.assignments.find(a => a.id === assignmentId);
  const asgName = asg ? asg.title : 'this project';
  pendingDeleteTarget = { type: 'assignment', id: assignmentId };

  const title = document.getElementById('deleteConfirmTitle');
  const sub = document.getElementById('deleteConfirmSubtitle');
  const btn = document.getElementById('btnConfirmDeleteAction');

  if (title) title.innerText = 'Delete Project?';
  if (sub) sub.innerText = `Are you sure you want to delete "${asgName}"? All milestones and associated tasks will be removed.`;
  if (btn) {
    btn.onclick = () => executeDelete();
  }

  const modal = document.getElementById('deleteConfirmModal');
  if (modal) modal.classList.add('active');
}

function closeDeleteConfirmModal() {
  const modal = document.getElementById('deleteConfirmModal');
  if (modal) modal.classList.remove('active');
  pendingDeleteTarget = null;
}

function executeDelete() {
  if (!pendingDeleteTarget) return;

  if (pendingDeleteTarget.type === 'task') {
    const taskId = pendingDeleteTarget.id;
    state.tasks = state.tasks.filter(t => String(t.id) !== String(taskId));
    renderTaskListScreen();
    showToast('Task removed from list');
  } else if (pendingDeleteTarget.type === 'assignment') {
    const asgId = pendingDeleteTarget.id;
    state.assignments = state.assignments.filter(a => a.id !== asgId);
    // Remove linked tasks from task list
    state.tasks = state.tasks.filter(t => t.asgId !== asgId);

    // If currently inside detail screen, go back
    const detailScreen = document.getElementById('screenAssignmentDetail');
    if (detailScreen && (detailScreen.style.display !== 'none' || detailScreen.classList.contains('active'))) {
      handleDetailBack();
    }

    renderGroupAssignmentScreen();
    renderTaskListScreen();
    showToast('Project & linked tasks removed');
  }

  closeDeleteConfirmModal();
}

// Close modals when clicking the blank backdrop overlay
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
    }
  });
});


// ==========================================================================
// USER PROFILE & PENDING TASKS LOGIC
// ==========================================================================

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderProfileScreen() {
  const mount = document.getElementById('profilePendingListMount');
  const countNum = document.getElementById('profilePendingCountNum');
  const hoursNum = document.getElementById('profilePendingHoursNum');
  const capNum = document.getElementById('profileDailyCapNum');
  const badge = document.getElementById('profilePendingBadge');

  if (capNum) {
    capNum.textContent = `${(state.baseCapacityHours || 8.0).toFixed(1)}h`;
  }

  // Filter pending tasks (not completed and status not 'done')
  const pendingTasks = (state.tasks || []).filter(t => !t.completed && t.status !== 'done');

  // Calculate total pending hours
  const totalPendingHours = pendingTasks.reduce((acc, t) => acc + (parseFloat(t.hours) || 0), 0);

  if (countNum) {
    countNum.textContent = pendingTasks.length;
  }
  if (hoursNum) {
    hoursNum.textContent = `${totalPendingHours.toFixed(1)}h`;
  }
  if (badge) {
    badge.textContent = `${pendingTasks.length} ${pendingTasks.length === 1 ? 'Task' : 'Tasks'}`;
  }

  if (!mount) return;

  if (pendingTasks.length === 0) {
    mount.innerHTML = `
      <div class="profile-pending-empty">
        <div class="profile-empty-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-success)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h5>All Caught Up! 🎉</h5>
        <p>You have no pending tasks right now. Great job keeping your workload balanced!</p>
      </div>
    `;
    return;
  }

  // Sort pending tasks: today first, then by date, then by time
  const sorted = [...pendingTasks].sort((a, b) => {
    if (a.date !== b.date) {
      return a.date.localeCompare(b.date);
    }
    return parseTimeToMinutes(a.time) - parseTimeToMinutes(b.time);
  });

  let html = '';
  sorted.forEach(t => {
    const isToday = t.date === state.todayDate;
    const dateDisplay = isToday ? 'Today' : formatTaskDateLabel(t.date);
    const catClass = t.category ? `cat-${t.category}` : 'cat-assignment';
    const catLabel = t.categoryLabel || (t.category ? t.category.replace('_', ' ') : 'Task');
    const isRescheduled = t.status === 'rescheduled';
    const durationHours = parseFloat(t.hours) || 1.0;

    html += `
      <div class="profile-pending-card" id="profileTask_${t.id}">
        <div class="profile-task-top">
          <div class="profile-task-title-group">
            <h5 class="profile-task-title">${escapeHtml(t.title)}</h5>
            <div class="profile-task-meta">
              <span class="profile-task-date">${dateDisplay}</span>
              <span class="profile-task-hours font-mono">${durationHours.toFixed(1)}h</span>
              <span class="task-category-tag ${catClass}">${escapeHtml(catLabel)}</span>
            </div>
          </div>
          <button class="profile-task-done-btn" type="button" onclick="toggleTaskFromProfile('${t.id}')" title="Mark Task as Done">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Done</span>
          </button>
        </div>
        <div class="profile-task-footer">
          <div class="profile-task-time">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${escapeHtml(t.time || 'Scheduled')}</span>
          </div>
          <span class="profile-task-status-pill ${isRescheduled ? 'rescheduled' : 'pending'}">
            ${isRescheduled ? 'Rescheduled' : (isToday ? 'Due Today' : 'Pending')}
          </span>
        </div>
      </div>
    `;
  });

  mount.innerHTML = html;
}

function toggleTaskFromProfile(taskId) {
  const task = state.tasks.find(t => String(t.id) === String(taskId));
  if (!task) return;

  task.completed = true;
  task.status = 'done';

  // If this task was tied to an assignment milestone, mark the milestone complete too
  if (task.asgId && task.milestoneId) {
    const asg = state.assignments.find(a => a.id === task.asgId);
    if (asg && asg.milestones) {
      const m = asg.milestones.find(item => item.id === task.milestoneId);
      if (m) m.completed = true;
      if (asg.milestones.every(item => item.completed)) {
        asg.status = 'completed';
        asg.statusLabel = 'Completed';
      }
    }
  }

  renderProfileScreen();
  updateCapacityMetrics();
  showToast(`Completed "${task.title.substring(0, 20)}..."`);
}

// Initialize on page load
syncMilestonesToTaskList();
updateCapacityMetrics();
