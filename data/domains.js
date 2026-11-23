// CISSP domain catalog. Weights follow the ISC2 CISSP exam outline (effective April 2024).
// Question and flashcard banks register themselves into CISSP.questions[id] / CISSP.flashcards[id].
window.CISSP = window.CISSP || { questions: {}, flashcards: {} };

CISSP.domains = [
  { id: 1, code: "D1", name: "Security and Risk Management", short: "Risk", weight: 16, icon: "⚖️", color: "#38bdf8" },
  { id: 2, code: "D2", name: "Asset Security", short: "Assets", weight: 10, icon: "🗄️", color: "#a78bfa" },
  { id: 3, code: "D3", name: "Security Architecture and Engineering", short: "Architecture", weight: 13, icon: "🏛️", color: "#f472b6" },
  { id: 4, code: "D4", name: "Communication and Network Security", short: "Network", weight: 13, icon: "🌐", color: "#34d399" },
  { id: 5, code: "D5", name: "Identity and Access Management", short: "IAM", weight: 13, icon: "🔑", color: "#fbbf24" },
  { id: 6, code: "D6", name: "Security Assessment and Testing", short: "Testing", weight: 12, icon: "🧪", color: "#fb923c" },
  { id: 7, code: "D7", name: "Security Operations", short: "SecOps", weight: 13, icon: "🛡️", color: "#f87171" },
  { id: 8, code: "D8", name: "Software Development Security", short: "AppSec", weight: 10, icon: "💻", color: "#2dd4bf" }
];
