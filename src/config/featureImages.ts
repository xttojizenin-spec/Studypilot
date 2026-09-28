/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type FeatureImageKey =
  | 'dashboard'
  | 'planner'
  | 'focus'
  | 'analytics'
  | 'pluto'
  | 'materials';

function svgToDataUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
}

/**
 * High-resolution embedded StudyPilot Android screenshots matching the 6 attached
 * official product screenshots (1000 x 1600 aspect ratio).
 */
const DASHBOARD_SCREENSHOT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1600" width="1000" height="1600" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif">
  <defs>
    <linearGradient id="bgDash" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1c272d"/>
      <stop offset="45%" stop-color="#141e22"/>
      <stop offset="100%" stop-color="#0d1417"/>
    </linearGradient>
    <radialGradient id="mistDash" cx="50%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#3b5259" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#0d1417" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Atmospheric mountain & forest valley background -->
  <rect width="1000" height="1600" fill="url(#bgDash)"/>
  <rect width="1000" height="1600" fill="url(#mistDash)"/>
  <path d="M0 360 L220 140 L430 310 L680 95 L900 280 L1000 190 L1000 600 L0 600 Z" fill="#233238" opacity="0.55"/>
  <path d="M0 440 L160 280 L390 420 L610 240 L840 390 L1000 290 L1000 700 L0 700 Z" fill="#182429" opacity="0.7"/>

  <!-- Android Status Bar -->
  <text x="32" y="34" fill="#f8fafc" font-size="21" font-weight="600">8:35 pm  📶  🔋 98%</text>
  <circle cx="488" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="500" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="512" cy="26" r="3" fill="#cbd5e1"/>

  <!-- Greeting Header -->
  <text x="24" y="88" fill="#eab308" font-size="31" font-weight="700">Good day, <tspan fill="#ffffff">Toji Zenin</tspan></text>
  <text x="24" y="116" fill="#d97706" font-size="18" font-weight="600">"Understand. Practice. Improve. Focus."</text>
  <text x="24" y="154" fill="#cbd5e1" font-size="20">"Let's make today count."</text>

  <!-- Top Right Streak & Profile -->
  <rect x="848" y="66" width="70" height="40" rx="20" fill="#1e2428" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="883" y="92" fill="#facc15" font-size="18" font-weight="700" text-anchor="middle">🔥 0 d</text>
  <circle cx="952" cy="86" r="23" fill="#1e2428" stroke="#ca8a04" stroke-width="1.5"/>
  <circle cx="952" cy="80" r="6" fill="#eab308"/>
  <path d="M940 96 C940 89, 964 89, 964 96" fill="#eab308"/>

  <!-- Card 1: TODAY'S TARGET -->
  <rect x="24" y="178" width="952" height="172" rx="24" fill="#121619" fill-opacity="0.86" stroke="#ffffff" stroke-opacity="0.14" stroke-width="1.5"/>
  <circle cx="48" cy="212" r="5.5" fill="#ffffff"/>
  <text x="62" y="218" fill="#e2e8f0" font-size="15" font-weight="700" letter-spacing="1">TODAY'S TARGET</text>
  <text x="43" y="256" fill="#ffffff" font-size="28" font-weight="700">0 of 8 Tasks Done</text>
  <text x="43" y="286" fill="#94a3b8" font-size="18">Daily Target: 5.0 hours planned</text>
  <text x="43" y="324" fill="#94a3b8" font-size="17">Study Consistency: <tspan fill="#ffffff" font-weight="700">0 Day Streak</tspan> 🔥</text>
  <!-- 0% Ring -->
  <circle cx="906" cy="264" r="44" fill="none" stroke="#272e33" stroke-width="9"/>
  <text x="906" y="272" fill="#ffffff" font-size="22" font-weight="700" text-anchor="middle">0%</text>

  <!-- Card 2: FOCUS GUARDIAN -->
  <rect x="24" y="376" width="952" height="206" rx="24" fill="#0d2118" fill-opacity="0.88" stroke="#166534" stroke-width="1.5"/>
  <circle cx="48" cy="414" r="6.5" fill="#22c55e"/>
  <text x="64" y="420" fill="#f8fafc" font-size="15" font-weight="700" letter-spacing="0.8">FOCUS GUARDIAN</text>
  <rect x="836" y="396" width="118" height="34" rx="17" fill="#062e1e" stroke="#22c55e" stroke-width="1.2"/>
  <text x="895" y="418" fill="#4ade80" font-size="14" font-weight="600" text-anchor="middle">Student Present</text>
  <text x="43" y="464" fill="#ffffff" font-size="23" font-weight="700">Real-Time Attention Sentinel</text>
  <text x="43" y="492" fill="#cbd5e1" font-size="16.5">Visual presence sensor active. Protects uninterrupted study flow and prevents phantom study logging.</text>
  <text x="43" y="546" fill="#f8fafc" font-size="17" font-weight="600">Tap to enter Sanctuary →</text>
  <rect x="785" y="514" width="170" height="50" rx="25" fill="#eab308"/>
  <text x="870" y="545" fill="#0f172a" font-size="18" font-weight="700" text-anchor="middle">⚡ Enter Focus</text>

  <!-- Card 3: NEXT RECOMMENDED FOCUS -->
  <rect x="24" y="608" width="952" height="208" rx="24" fill="#121619" fill-opacity="0.88" stroke="#ffffff" stroke-opacity="0.14" stroke-width="1.5"/>
  <circle cx="56" cy="648" r="14" fill="#262b30"/>
  <text x="80" y="654" fill="#e2e8f0" font-size="14" font-weight="700" letter-spacing="0.8">NEXT RECOMMENDED FOCUS</text>
  <rect x="850" y="632" width="106" height="32" rx="16" fill="#1e2328" stroke="#475569" stroke-width="1"/>
  <text x="903" y="653" fill="#94a3b8" font-size="13.5" font-weight="600" text-anchor="middle">⏳ Not Started</text>
  <text x="43" y="698" fill="#ffffff" font-size="25" font-weight="700">Analytical Problem Solving</text>
  <text x="43" y="726" fill="#94a3b8" font-size="17">Information technology · Recommended Duration: 35 mins</text>
  <rect x="43" y="748" width="146" height="48" rx="24" fill="#181c20" stroke="#ca8a04" stroke-width="1.4"/>
  <text x="116" y="778" fill="#facc15" font-size="16.5" font-weight="700" text-anchor="middle">Topic Overview</text>
  <rect x="775" y="748" width="180" height="48" rx="24" fill="#eab308"/>
  <text x="865" y="778" fill="#0f172a" font-size="17.5" font-weight="700" text-anchor="middle">▶ Start Session</text>

  <!-- Card 4: PLUTO AI INSIGHT -->
  <rect x="24" y="844" width="952" height="162" rx="24" fill="#121619" fill-opacity="0.86" stroke="#ffffff" stroke-opacity="0.14" stroke-width="1.5"/>
  <rect x="43" y="866" width="40" height="40" rx="12" fill="#23292e" stroke="#475569"/>
  <text x="63" y="893" fill="#e2e8f0" font-size="20" text-anchor="middle">💡</text>
  <text x="98" y="886" fill="#cbd5e1" font-size="14.5" font-weight="700" letter-spacing="0.8">PLUTO AI INSIGHT</text>
  <text x="955" y="886" fill="#94a3b8" font-size="13.5" text-anchor="end">Just Now</text>
  <text x="98" y="916" fill="#f1f5f9" font-size="17.5">"You mastered kinematics smoothly, but test evidence shows 3 misconceptions on normal force on inclined planes. A</text>
  <text x="98" y="942" fill="#f1f5f9" font-size="17.5">20m practice set will solidify your mechanics score."</text>
  <text x="98" y="976" fill="#ffffff" font-size="16.5" font-weight="700">Ask Pluto for practice questions →</text>

  <!-- Today's Priorities -->
  <text x="24" y="1046" fill="#ffffff" font-size="22" font-weight="700">Today's Priorities</text>
  <text x="976" y="1046" fill="#e2e8f0" font-size="16.5" font-weight="600" text-anchor="end">View Planner →</text>

  <!-- Priority Item 1 -->
  <rect x="24" y="1064" width="952" height="122" rx="22" fill="#121619" fill-opacity="0.85" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1.2"/>
  <circle cx="54" cy="1104" r="13" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="1098" fill="#ffffff" font-size="19" font-weight="600">First Pass: Analytical Problem Solving</text>
  <text x="80" y="1124" fill="#94a3b8" font-size="16">Information technology · 30 mins</text>
  <rect x="894" y="1086" width="64" height="32" rx="16" fill="#1e2429" stroke="#64748b"/>
  <text x="926" y="1107" fill="#e2e8f0" font-size="13" text-anchor="middle">Maintain</text>
  <rect x="43" y="1140" width="914" height="32" rx="8" fill="#1b2024"/>
  <text x="68" y="1161" fill="#94a3b8" font-size="14.5">⚪ Topic has not been started yet</text>

  <!-- Priority Item 2 -->
  <rect x="24" y="1202" width="952" height="122" rx="22" fill="#121619" fill-opacity="0.85" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1.2"/>
  <circle cx="54" cy="1242" r="13" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="1236" fill="#ffffff" font-size="19" font-weight="600">First Pass: Applications of Extrema &amp; Optimization</text>
  <text x="80" y="1262" fill="#94a3b8" font-size="16">Mathematics · 30 mins</text>
  <rect x="894" y="1224" width="64" height="32" rx="16" fill="#1e2429" stroke="#64748b"/>
  <text x="926" y="1245" fill="#e2e8f0" font-size="13" text-anchor="middle">Maintain</text>
  <rect x="43" y="1278" width="914" height="32" rx="8" fill="#1b2024"/>
  <text x="68" y="1299" fill="#94a3b8" font-size="14.5">⚪ Topic has not been started yet</text>

  <!-- Priority Item 3 -->
  <rect x="24" y="1340" width="952" height="122" rx="22" fill="#121619" fill-opacity="0.85" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1.2"/>
  <circle cx="54" cy="1380" r="13" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="1374" fill="#ffffff" font-size="19" font-weight="600">First Pass: Assessment Drills &amp; Mock Review</text>
  <text x="80" y="1400" fill="#94a3b8" font-size="16">Information technology · 30 mins</text>
  <rect x="894" y="1362" width="64" height="32" rx="16" fill="#1e2429" stroke="#64748b"/>
  <text x="926" y="1383" fill="#e2e8f0" font-size="13" text-anchor="middle">Maintain</text>
  <rect x="43" y="1416" width="914" height="32" rx="8" fill="#1b2024"/>
  <text x="68" y="1437" fill="#94a3b8" font-size="14.5">⚪ Topic has not been started yet</text>

  <!-- Bottom Navigation Dock -->
  <rect x="20" y="1490" width="960" height="82" rx="36" fill="#11161b" fill-opacity="0.95" stroke="#ca8a04" stroke-opacity="0.45" stroke-width="1.5"/>
  <rect x="88" y="1498" width="62" height="66" rx="16" fill="#272315" stroke="#eab308" stroke-width="1.5"/>
  <text x="119" y="1528" fill="#eab308" font-size="22" text-anchor="middle">🏠</text>
  <text x="119" y="1550" fill="#eab308" font-size="13" font-weight="700" text-anchor="middle">Home</text>
  <text x="310" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📚</text>
  <text x="310" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Subjects</text>
  <text x="500" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📅</text>
  <text x="500" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Planner</text>
  <text x="695" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📊</text>
  <text x="695" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Progress</text>
  <text x="885" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">✨</text>
  <text x="885" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Pluto</text>
</svg>`;

const PLANNER_SCREENSHOT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1600" width="1000" height="1600" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif">
  <defs>
    <linearGradient id="bgPlan" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0b1528"/>
      <stop offset="45%" stop-color="#152c44"/>
      <stop offset="100%" stop-color="#0c1824"/>
    </linearGradient>
  </defs>
  <!-- Starry night & snow mountains background -->
  <rect width="1000" height="1600" fill="url(#bgPlan)"/>
  <circle cx="150" cy="90" r="2" fill="#e2e8f0" opacity="0.8"/>
  <circle cx="380" cy="60" r="2.5" fill="#ffffff" opacity="0.9"/>
  <circle cx="620" cy="110" r="3" fill="#bae6fd"/>
  <circle cx="790" cy="165" r="5" fill="#ffffff"/>
  <circle cx="880" cy="80" r="2" fill="#e2e8f0"/>
  <path d="M0 580 L180 470 L350 560 L580 430 L760 510 L920 440 L1000 520 L1000 820 L0 820 Z" fill="#1e3a56" opacity="0.65"/>

  <!-- Android Status Bar -->
  <text x="32" y="34" fill="#f8fafc" font-size="21" font-weight="600">8:36 pm  📶  🔋 98%</text>
  <circle cx="488" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="500" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="512" cy="26" r="3" fill="#cbd5e1"/>

  <!-- Planner Header -->
  <text x="24" y="86" fill="#ffffff" font-size="34" font-weight="700">Planner</text>
  <text x="24" y="114" fill="#94a3b8" font-size="18">Adaptive scheduling &amp; empirical pacing</text>
  <rect x="848" y="66" width="70" height="40" rx="20" fill="#102336" stroke="#0284c7" stroke-width="1.5"/>
  <text x="883" y="92" fill="#38bdf8" font-size="18" font-weight="700" text-anchor="middle">🔥 0 d</text>
  <circle cx="952" cy="86" r="23" fill="#102336" stroke="#0284c7" stroke-width="1.5"/>
  <circle cx="952" cy="80" r="6" fill="#38bdf8"/>
  <path d="M940 96 C940 89, 964 89, 964 96" fill="#38bdf8"/>

  <!-- 7 Day Date Strip -->
  <g transform="translate(24, 136)">
    <!-- Fri 25 -->
    <rect x="0" y="0" width="58" height="86" rx="22" fill="#111822" stroke="#334155"/>
    <text x="29" y="28" fill="#94a3b8" font-size="14" text-anchor="middle">Fri</text>
    <text x="29" y="58" fill="#ffffff" font-size="20" font-weight="700" text-anchor="middle">25</text>
    <!-- Sat 26 -->
    <rect x="70" y="0" width="58" height="86" rx="22" fill="#111822" stroke="#334155"/>
    <text x="99" y="28" fill="#94a3b8" font-size="14" text-anchor="middle">Sat</text>
    <text x="99" y="58" fill="#ffffff" font-size="20" font-weight="700" text-anchor="middle">26</text>
    <!-- Sun 27 (Selected White) -->
    <rect x="140" y="0" width="58" height="86" rx="22" fill="#ffffff"/>
    <text x="169" y="28" fill="#334155" font-size="14" font-weight="600" text-anchor="middle">Sun</text>
    <text x="169" y="58" fill="#0f172a" font-size="20" font-weight="800" text-anchor="middle">27</text>
    <circle cx="169" cy="72" r="3" fill="#0f172a"/>
    <!-- Mon 28 -->
    <rect x="210" y="0" width="58" height="86" rx="22" fill="#111822" stroke="#334155"/>
    <text x="239" y="28" fill="#94a3b8" font-size="14" text-anchor="middle">Mon</text>
    <text x="239" y="58" fill="#ffffff" font-size="20" font-weight="700" text-anchor="middle">28</text>
    <!-- Tue 29 -->
    <rect x="280" y="0" width="58" height="86" rx="22" fill="#111822" stroke="#334155"/>
    <text x="309" y="28" fill="#94a3b8" font-size="14" text-anchor="middle">Tue</text>
    <text x="309" y="58" fill="#ffffff" font-size="20" font-weight="700" text-anchor="middle">29</text>
    <!-- Wed 30 -->
    <rect x="350" y="0" width="58" height="86" rx="22" fill="#111822" stroke="#334155"/>
    <text x="379" y="28" fill="#94a3b8" font-size="14" text-anchor="middle">Wed</text>
    <text x="379" y="58" fill="#ffffff" font-size="20" font-weight="700" text-anchor="middle">30</text>
    <!-- Thu 1 -->
    <rect x="420" y="0" width="58" height="86" rx="22" fill="#111822" stroke="#334155"/>
    <text x="449" y="28" fill="#94a3b8" font-size="14" text-anchor="middle">Thu</text>
    <text x="449" y="58" fill="#ffffff" font-size="20" font-weight="700" text-anchor="middle">1</text>
  </g>

  <!-- 3 Metric Boxes: PLANNED / ACTUAL TIME / REMAINING -->
  <rect x="24" y="244" width="308" height="86" rx="20" fill="#10151c" fill-opacity="0.9" stroke="#334155"/>
  <text x="42" y="276" fill="#94a3b8" font-size="13.5" font-weight="600">PLANNED</text>
  <text x="42" y="310" fill="#ffffff" font-size="26" font-weight="700">240m</text>

  <rect x="346" y="244" width="308" height="86" rx="20" fill="#10151c" fill-opacity="0.9" stroke="#334155"/>
  <text x="364" y="276" fill="#94a3b8" font-size="13.5" font-weight="600">ACTUAL TIME</text>
  <text x="364" y="310" fill="#ffffff" font-size="26" font-weight="700">0m</text>

  <rect x="668" y="244" width="308" height="86" rx="20" fill="#10151c" fill-opacity="0.9" stroke="#334155"/>
  <text x="686" y="276" fill="#94a3b8" font-size="13.5" font-weight="600">REMAINING</text>
  <text x="686" y="310" fill="#ffffff" font-size="26" font-weight="700">240m</text>

  <!-- Adaptive Planner Engine Card -->
  <rect x="24" y="350" width="952" height="142" rx="24" fill="#12171d" fill-opacity="0.9" stroke="#334155"/>
  <circle cx="60" cy="390" r="20" fill="#1e2630"/>
  <text x="60" y="397" fill="#cbd5e1" font-size="18" text-anchor="middle">⚙</text>
  <text x="94" y="384" fill="#ffffff" font-size="18" font-weight="700">Adaptive Planner Engine</text>
  <text x="94" y="408" fill="#94a3b8" font-size="15.5">Schedules weak topics, diagnostic errors &amp; upcoming exams dynamically.</text>
  <rect x="42" y="424" width="916" height="50" rx="25" fill="#0d2238" stroke="#0369a1" stroke-width="1.4"/>
  <text x="500" y="455" fill="#e0f2fe" font-size="17" font-weight="700" text-anchor="middle">⚡ Auto-Rebalance Study Plan</text>

  <!-- Today's Agenda Header -->
  <text x="24" y="538" fill="#ffffff" font-size="22" font-weight="700">Today's Agenda</text>
  <text x="24" y="562" fill="#64748b" font-size="15.5">240 mins planned · 0/8 done</text>
  <rect x="850" y="518" width="126" height="46" rx="23" fill="#0f2942" stroke="#0284c7" stroke-width="1.3"/>
  <text x="913" y="547" fill="#f8fafc" font-size="16" font-weight="700" text-anchor="middle">+ Add Task</text>

  <!-- Agenda Item 1 -->
  <rect x="24" y="584" width="952" height="122" rx="22" fill="#12171e" fill-opacity="0.88" stroke="#ffffff" stroke-opacity="0.12"/>
  <circle cx="54" cy="624" r="13" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="618" fill="#ffffff" font-size="19" font-weight="600">First Pass: Analytical Problem Solving</text>
  <text x="80" y="644" fill="#94a3b8" font-size="16">Information technology · 30 mins</text>
  <rect x="822" y="608" width="64" height="32" rx="16" fill="#1e2630" stroke="#64748b"/>
  <text x="854" y="629" fill="#e2e8f0" font-size="13" text-anchor="middle">Maintain</text>
  <rect x="43" y="660" width="914" height="32" rx="8" fill="#1a2129"/>
  <text x="68" y="681" fill="#94a3b8" font-size="14.5">⚪ Topic has not been started yet</text>

  <!-- Agenda Item 2 -->
  <rect x="24" y="722" width="952" height="122" rx="22" fill="#12171e" fill-opacity="0.88" stroke="#ffffff" stroke-opacity="0.12"/>
  <circle cx="54" cy="762" r="13" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="756" fill="#ffffff" font-size="19" font-weight="600">First Pass: Applications of Extrema &amp; Optimization</text>
  <text x="80" y="782" fill="#94a3b8" font-size="16">Mathematics · 30 mins</text>
  <rect x="822" y="746" width="64" height="32" rx="16" fill="#1e2630" stroke="#64748b"/>
  <text x="854" y="767" fill="#e2e8f0" font-size="13" text-anchor="middle">Maintain</text>
  <rect x="43" y="798" width="914" height="32" rx="8" fill="#1a2129"/>
  <text x="68" y="819" fill="#94a3b8" font-size="14.5">⚪ Topic has not been started yet</text>

  <!-- Agenda Item 3 -->
  <rect x="24" y="860" width="952" height="122" rx="22" fill="#12171e" fill-opacity="0.88" stroke="#ffffff" stroke-opacity="0.12"/>
  <circle cx="54" cy="900" r="13" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="894" fill="#ffffff" font-size="19" font-weight="600">First Pass: Assessment Drills &amp; Mock Review</text>
  <text x="80" y="920" fill="#94a3b8" font-size="16">Information technology · 30 mins</text>
  <rect x="822" y="884" width="64" height="32" rx="16" fill="#1e2630" stroke="#64748b"/>
  <text x="854" y="905" fill="#e2e8f0" font-size="13" text-anchor="middle">Maintain</text>
  <rect x="43" y="936" width="914" height="32" rx="8" fill="#1a2129"/>
  <text x="68" y="957" fill="#94a3b8" font-size="14.5">⚪ Topic has not been started yet</text>

  <!-- Agenda Item 4 -->
  <rect x="24" y="998" width="952" height="122" rx="22" fill="#12171e" fill-opacity="0.88" stroke="#ffffff" stroke-opacity="0.12"/>
  <circle cx="54" cy="1038" r="13" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="1032" fill="#ffffff" font-size="19" font-weight="600">First Pass: Chemical Equilibrium &amp; Kinetics</text>
  <text x="80" y="1058" fill="#94a3b8" font-size="16">chemistry · 30 mins</text>
  <rect x="822" y="1022" width="64" height="32" rx="16" fill="#1e2630" stroke="#64748b"/>
  <text x="854" y="1043" fill="#e2e8f0" font-size="13" text-anchor="middle">Maintain</text>
  <rect x="43" y="1074" width="914" height="32" rx="8" fill="#1a2129"/>
  <text x="68" y="1095" fill="#94a3b8" font-size="14.5">⚪ Topic has not been started yet</text>

  <!-- Agenda Item 5 -->
  <rect x="24" y="1136" width="952" height="122" rx="22" fill="#12171e" fill-opacity="0.88" stroke="#ffffff" stroke-opacity="0.12"/>
  <circle cx="54" cy="1176" r="13" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="1170" fill="#ffffff" font-size="19" font-weight="600">First Pass: Combinatorics &amp; Permutations</text>
  <text x="80" y="1196" fill="#94a3b8" font-size="16">Mathematics · 30 mins</text>
  <rect x="822" y="1160" width="64" height="32" rx="16" fill="#1e2630" stroke="#64748b"/>
  <text x="854" y="1181" fill="#e2e8f0" font-size="13" text-anchor="middle">Maintain</text>
  <rect x="43" y="1212" width="914" height="32" rx="8" fill="#1a2129"/>
  <text x="68" y="1233" fill="#94a3b8" font-size="14.5">⚪ Topic has not been started yet</text>

  <!-- Agenda Item 6 -->
  <rect x="24" y="1274" width="952" height="122" rx="22" fill="#12171e" fill-opacity="0.88" stroke="#ffffff" stroke-opacity="0.12"/>
  <circle cx="54" cy="1314" r="13" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <text x="80" y="1308" fill="#ffffff" font-size="19" font-weight="600">First Pass: Comparative Literary Analysis</text>
  <text x="80" y="1334" fill="#94a3b8" font-size="16">English · 30 mins</text>
  <rect x="822" y="1298" width="64" height="32" rx="16" fill="#1e2630" stroke="#64748b"/>
  <text x="854" y="1319" fill="#e2e8f0" font-size="13" text-anchor="middle">Maintain</text>
  <rect x="43" y="1350" width="914" height="32" rx="8" fill="#1a2129"/>
  <text x="68" y="1371" fill="#94a3b8" font-size="14.5">⚪ Topic has not been started yet</text>

  <!-- Bottom Navigation Dock -->
  <rect x="20" y="1490" width="960" height="82" rx="36" fill="#11161b" fill-opacity="0.95" stroke="#ca8a04" stroke-opacity="0.45" stroke-width="1.5"/>
  <text x="119" y="1528" fill="#94a3b8" font-size="22" text-anchor="middle">🏠</text>
  <text x="119" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Home</text>
  <text x="310" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📚</text>
  <text x="310" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Subjects</text>
  <rect x="472" y="1498" width="62" height="66" rx="16" fill="#272315" stroke="#eab308" stroke-width="1.5"/>
  <text x="503" y="1528" fill="#eab308" font-size="20" text-anchor="middle">📅</text>
  <text x="503" y="1550" fill="#eab308" font-size="13" font-weight="700" text-anchor="middle">Planner</text>
  <text x="695" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📊</text>
  <text x="695" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Progress</text>
  <text x="885" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">✨</text>
  <text x="885" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Pluto</text>
</svg>`;

const FOCUS_SCREENSHOT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1600" width="1000" height="1600" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif">
  <defs>
    <linearGradient id="bgFocus" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b2840"/>
      <stop offset="50%" stop-color="#17243b"/>
      <stop offset="100%" stop-color="#091526"/>
    </linearGradient>
    <linearGradient id="neonCyan" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
  </defs>
  <!-- Cyberpunk Neon Cityscape Background -->
  <rect width="1000" height="1600" fill="url(#bgFocus)"/>
  <!-- Perspective Neon Buildings & DISCIPLINE sign -->
  <rect x="60" y="880" width="240" height="620" fill="#0d1b2e" stroke="#22d3ee" stroke-width="2" opacity="0.8"/>
  <rect x="520" y="860" width="360" height="640" fill="#131c31" stroke="#38bdf8" stroke-width="2" opacity="0.85"/>
  <rect x="535" y="980" width="310" height="90" rx="8" fill="#082f49" stroke="#22d3ee" stroke-width="3"/>
  <text x="690" y="1042" fill="#67e8f9" font-size="46" font-weight="800" letter-spacing="4" text-anchor="middle">DISCIPLINE</text>
  <path d="M180 1480 L980 960" stroke="#f472b6" stroke-width="8" opacity="0.5"/>
  <path d="M220 1480 L980 1010" stroke="#22d3ee" stroke-width="6" opacity="0.6"/>

  <!-- Android Status Bar -->
  <text x="32" y="34" fill="#f8fafc" font-size="21" font-weight="600">8:36 pm  📶  🔋 98%</text>
  <circle cx="488" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="500" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="512" cy="26" r="3" fill="#cbd5e1"/>

  <!-- Focus Sanctuary Header -->
  <text x="24" y="86" fill="#ffffff" font-size="33" font-weight="700">Focus Sanctuary</text>
  <text x="24" y="114" fill="#38bdf8" font-size="18">Camera Presence Guardian.</text>
  <rect x="848" y="66" width="70" height="40" rx="20" fill="#102336" stroke="#0284c7" stroke-width="1.5"/>
  <text x="883" y="92" fill="#facc15" font-size="18" font-weight="700" text-anchor="middle">🔥 0 d</text>
  <circle cx="952" cy="86" r="23" fill="#102336" stroke="#0284c7" stroke-width="1.5"/>

  <!-- Physics Subject Banner -->
  <rect x="24" y="138" width="952" height="106" rx="22" fill="#0d1e2d" fill-opacity="0.9" stroke="#1e3a5f" stroke-width="1.5"/>
  <text x="500" y="168" fill="#eab308" font-size="14" font-weight="700" letter-spacing="1.2" text-anchor="middle">PHYSICS</text>
  <text x="500" y="198" fill="#ffffff" font-size="23" font-weight="700" text-anchor="middle">Kinematics &amp; Dynamics</text>
  <text x="500" y="224" fill="#22d3ee" font-size="16" text-anchor="middle">Objective: Core concept mastery and numericals</text>

  <!-- Camera Permission Required Card -->
  <rect x="24" y="266" width="952" height="266" rx="24" fill="#0c0e11" stroke="#ffffff" stroke-width="2.5"/>
  <rect x="42" y="284" width="180" height="34" rx="17" fill="#14181d" stroke="#334155"/>
  <text x="132" y="306" fill="#f8fafc" font-size="14" font-weight="600" text-anchor="middle">⚡ Calibrating Sensor...</text>
  <text x="500" y="346" fill="#ffffff" font-size="34" text-anchor="middle">📷</text>
  <text x="500" y="384" fill="#ffffff" font-size="20" font-weight="700" text-anchor="middle">Camera Permission Required</text>
  <text x="500" y="412" fill="#94a3b8" font-size="15.5" text-anchor="middle">Focus Guardian uses your front camera to detect study presence on-device. Frames are never stored or uploaded.</text>
  <rect x="418" y="432" width="164" height="52" rx="26" fill="#eab308"/>
  <text x="500" y="464" fill="#0f172a" font-size="18" font-weight="700" text-anchor="middle">Enable Camera</text>

  <!-- Focus Timer Card -->
  <rect x="24" y="556" width="952" height="240" rx="24" fill="#121417" fill-opacity="0.96" stroke="#334155"/>
  <text x="44" y="590" fill="#f8fafc" font-size="16" font-weight="700" letter-spacing="0.8">FOCUS GUARDIAN</text>
  <text x="956" y="590" fill="#f8fafc" font-size="15" font-weight="700" text-anchor="end">EFFICIENCY: 100.0%</text>
  <text x="500" y="662" fill="#ffffff" font-size="56" font-weight="800" letter-spacing="2" text-anchor="middle">00:00:00</text>
  <text x="500" y="692" fill="#94a3b8" font-size="16" text-anchor="middle">Focused Study Time</text>
  <text x="156" y="736" fill="#94a3b8" font-size="14" text-anchor="middle">Presence</text>
  <text x="156" y="762" fill="#ffffff" font-size="16" font-weight="700" text-anchor="middle">CALIBRATING</text>
  <text x="385" y="736" fill="#94a3b8" font-size="14" text-anchor="middle">Study</text>
  <text x="385" y="762" fill="#ffffff" font-size="16" font-weight="700" text-anchor="middle">0m 0s</text>
  <text x="614" y="736" fill="#94a3b8" font-size="14" text-anchor="middle">Paused</text>
  <text x="614" y="762" fill="#ffffff" font-size="16" font-weight="700" text-anchor="middle">0m</text>
  <text x="842" y="736" fill="#94a3b8" font-size="14" text-anchor="middle">Absences</text>
  <text x="842" y="762" fill="#ffffff" font-size="16" font-weight="700" text-anchor="middle">0</text>

  <!-- 3 Action Controls: Resume / Take Break / Finish Session -->
  <rect x="24" y="816" width="290" height="52" rx="18" fill="#14181d" stroke="#334155"/>
  <text x="169" y="848" fill="#ffffff" font-size="17" font-weight="700" text-anchor="middle">▶ Resume</text>

  <rect x="326" y="816" width="290" height="52" rx="18" fill="#14181d" stroke="#334155"/>
  <text x="471" y="848" fill="#ffffff" font-size="17" font-weight="700" text-anchor="middle">⏸ Take Break</text>

  <rect x="628" y="816" width="348" height="52" rx="18" fill="#ffffff"/>
  <text x="802" y="848" fill="#0f172a" font-size="17" font-weight="700" text-anchor="middle">⏹ Finish Session</text>

  <!-- Bottom Navigation Dock -->
  <rect x="20" y="1490" width="960" height="82" rx="36" fill="#11161b" fill-opacity="0.95" stroke="#ca8a04" stroke-opacity="0.45" stroke-width="1.5"/>
  <text x="119" y="1528" fill="#94a3b8" font-size="22" text-anchor="middle">🏠</text>
  <text x="119" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Home</text>
  <text x="310" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📚</text>
  <text x="310" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Subjects</text>
  <text x="503" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📅</text>
  <text x="503" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Planner</text>
  <text x="695" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📊</text>
  <text x="695" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Progress</text>
  <text x="885" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">✨</text>
  <text x="885" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Pluto</text>
</svg>`;

const ANALYTICS_SCREENSHOT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1600" width="1000" height="1600" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif">
  <defs>
    <linearGradient id="bgAnalytic" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#19162b"/>
      <stop offset="60%" stop-color="#281826"/>
      <stop offset="100%" stop-color="#3a1618"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1600" fill="url(#bgAnalytic)"/>

  <!-- Android Status Bar -->
  <text x="32" y="34" fill="#f8fafc" font-size="21" font-weight="600">8:36 pm  📶  🔋 98%</text>
  <circle cx="488" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="500" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="512" cy="26" r="3" fill="#cbd5e1"/>

  <!-- Analytics Header -->
  <text x="24" y="86" fill="#ffffff" font-size="34" font-weight="700">Analytics</text>
  <text x="24" y="114" fill="#eab308" font-size="18">Empirical telemetry &amp; mastery progression</text>
  <rect x="848" y="66" width="70" height="40" rx="20" fill="#1e1b2e" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="883" y="92" fill="#facc15" font-size="18" font-weight="700" text-anchor="middle">🔥 0 d</text>
  <circle cx="952" cy="86" r="23" fill="#1e1b2e" stroke="#ca8a04" stroke-width="1.5"/>

  <!-- 2x2 Summary Cards -->
  <rect x="24" y="136" width="468" height="126" rx="22" fill="#1a162b" fill-opacity="0.9" stroke="#854d0e" stroke-width="1.3"/>
  <text x="42" y="168" fill="#eab308" font-size="14" font-weight="700">TOTAL FOCUSED</text>
  <text x="42" y="210" fill="#ffffff" font-size="32" font-weight="800">0m</text>
  <text x="42" y="240" fill="#cbd5e1" font-size="15">No sessions yet</text>

  <rect x="508" y="136" width="468" height="126" rx="22" fill="#1a162b" fill-opacity="0.9" stroke="#854d0e" stroke-width="1.3"/>
  <text x="526" y="168" fill="#eab308" font-size="14" font-weight="700">ACTIVE STREAK</text>
  <text x="526" y="210" fill="#ffffff" font-size="32" font-weight="800">0 Days</text>
  <text x="526" y="240" fill="#cbd5e1" font-size="15">Study today to begin</text>

  <rect x="24" y="278" width="468" height="126" rx="22" fill="#1a162b" fill-opacity="0.9" stroke="#854d0e" stroke-width="1.3"/>
  <text x="42" y="310" fill="#eab308" font-size="14" font-weight="700">AVG FOCUS</text>
  <text x="42" y="352" fill="#ffffff" font-size="32" font-weight="800">N/A</text>
  <text x="42" y="382" fill="#cbd5e1" font-size="15">Awaiting focus session</text>

  <rect x="508" y="278" width="468" height="126" rx="22" fill="#1a162b" fill-opacity="0.9" stroke="#854d0e" stroke-width="1.3"/>
  <text x="526" y="310" fill="#eab308" font-size="14" font-weight="700">AVG TEST SCORE</text>
  <text x="526" y="352" fill="#ffffff" font-size="32" font-weight="800">N/A</text>
  <text x="526" y="382" fill="#cbd5e1" font-size="15">No tests taken yet</text>

  <!-- Weekly Activity (Past 7 Days) -->
  <rect x="24" y="428" width="952" height="236" rx="24" fill="#121317" fill-opacity="0.95" stroke="#ffffff" stroke-opacity="0.1"/>
  <text x="44" y="466" fill="#ffffff" font-size="20" font-weight="700">Weekly Activity (Past 7 Days)</text>
  <text x="956" y="466" fill="#94a3b8" font-size="15" text-anchor="end">0 mins total</text>
  <g transform="translate(58, 586)" fill="#94a3b8" font-size="14" text-anchor="middle">
    <text x="0" y="0">0m</text><text x="0" y="48">Mon</text>
    <text x="147" y="0">0m</text><text x="147" y="48">Tue</text>
    <text x="294" y="0">0m</text><text x="294" y="48">Wed</text>
    <text x="441" y="0">0m</text><text x="441" y="48">Thu</text>
    <text x="588" y="0">0m</text><text x="588" y="48">Fri</text>
    <text x="735" y="0">0m</text><text x="735" y="48">Sat</text>
    <text x="882" y="0" fill="#ffffff" font-weight="700">0m</text><text x="882" y="48" fill="#ffffff" font-weight="700">Sun</text>
  </g>

  <!-- Topic Mastery Breakdown -->
  <rect x="24" y="688" width="952" height="328" rx="24" fill="#121317" fill-opacity="0.95" stroke="#ffffff" stroke-opacity="0.1"/>
  <text x="44" y="726" fill="#ffffff" font-size="20" font-weight="700">Topic Mastery Breakdown</text>
  <text x="44" y="772" fill="#f8fafc" font-size="16">✨ Mastered</text>
  <text x="956" y="772" fill="#94a3b8" font-size="15" text-anchor="end">0 topics (0%)</text>
  <rect x="44" y="784" width="912" height="8" rx="4" fill="#262930"/>

  <text x="44" y="822" fill="#f8fafc" font-size="16">⚡ Strong</text>
  <text x="956" y="822" fill="#94a3b8" font-size="15" text-anchor="end">0 topics (0%)</text>
  <rect x="44" y="834" width="912" height="8" rx="4" fill="#262930"/>

  <text x="44" y="872" fill="#f8fafc" font-size="16">📈 Developing</text>
  <text x="956" y="872" fill="#94a3b8" font-size="15" text-anchor="end">0 topics (0%)</text>
  <rect x="44" y="884" width="912" height="8" rx="4" fill="#262930"/>

  <text x="44" y="922" fill="#f8fafc" font-size="16">📖 Familiar</text>
  <text x="956" y="922" fill="#94a3b8" font-size="15" text-anchor="end">0 topics (0%)</text>
  <rect x="44" y="934" width="912" height="8" rx="4" fill="#262930"/>

  <text x="44" y="972" fill="#f8fafc" font-size="16">⚪ Not Started</text>
  <text x="956" y="972" fill="#94a3b8" font-size="15" text-anchor="end">35 topics (100%)</text>
  <rect x="44" y="984" width="912" height="8" rx="4" fill="#64748b"/>

  <!-- Subject Mastery Progress -->
  <text x="24" y="1060" fill="#ffffff" font-size="21" font-weight="700">Subject Mastery Progress</text>
  <rect x="24" y="1078" width="952" height="96" rx="20" fill="#121317" fill-opacity="0.94" stroke="#ffffff" stroke-opacity="0.1"/>
  <text x="44" y="1114" fill="#ffffff" font-size="18" font-weight="700"><tspan fill="#c084fc">●</tspan> English</text>
  <text x="956" y="1114" fill="#c084fc" font-size="17" font-weight="700" text-anchor="end">0%</text>
  <rect x="44" y="1128" width="912" height="7" rx="3.5" fill="#262930"/>
  <text x="44" y="1156" fill="#94a3b8" font-size="14">0 Mastered · 0 In Progress</text>
  <text x="956" y="1156" fill="#94a3b8" font-size="14" text-anchor="end">0m studied</text>

  <rect x="24" y="1192" width="952" height="96" rx="20" fill="#121317" fill-opacity="0.94" stroke="#ffffff" stroke-opacity="0.1"/>
  <text x="44" y="1228" fill="#ffffff" font-size="18" font-weight="700"><tspan fill="#fb7185">●</tspan> Information technology</text>
  <text x="956" y="1228" fill="#fb7185" font-size="17" font-weight="700" text-anchor="end">0%</text>
  <rect x="44" y="1242" width="912" height="7" rx="3.5" fill="#262930"/>
  <text x="44" y="1270" fill="#94a3b8" font-size="14">0 Mastered · 0 In Progress</text>
  <text x="956" y="1270" fill="#94a3b8" font-size="14" text-anchor="end">0m studied</text>

  <rect x="24" y="1306" width="952" height="96" rx="20" fill="#121317" fill-opacity="0.94" stroke="#ffffff" stroke-opacity="0.1"/>
  <text x="44" y="1342" fill="#ffffff" font-size="18" font-weight="700"><tspan fill="#38bdf8">●</tspan> Mathematics</text>
  <text x="956" y="1342" fill="#38bdf8" font-size="17" font-weight="700" text-anchor="end">0%</text>
  <rect x="44" y="1356" width="912" height="7" rx="3.5" fill="#262930"/>
  <text x="44" y="1384" fill="#94a3b8" font-size="14">0 Mastered · 0 In Progress</text>
  <text x="956" y="1384" fill="#94a3b8" font-size="14" text-anchor="end">0m studied</text>

  <!-- Bottom Navigation Dock -->
  <rect x="20" y="1490" width="960" height="82" rx="36" fill="#11161b" fill-opacity="0.95" stroke="#ca8a04" stroke-opacity="0.45" stroke-width="1.5"/>
  <text x="119" y="1528" fill="#94a3b8" font-size="22" text-anchor="middle">🏠</text>
  <text x="119" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Home</text>
  <text x="310" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📚</text>
  <text x="310" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Subjects</text>
  <text x="503" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📅</text>
  <text x="503" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Planner</text>
  <rect x="664" y="1498" width="62" height="66" rx="16" fill="#272315" stroke="#eab308" stroke-width="1.5"/>
  <text x="695" y="1528" fill="#eab308" font-size="20" text-anchor="middle">📊</text>
  <text x="695" y="1550" fill="#eab308" font-size="13" font-weight="700" text-anchor="middle">Progress</text>
  <text x="885" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">✨</text>
  <text x="885" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Pluto</text>
</svg>`;

const PLUTO_SCREENSHOT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1600" width="1000" height="1600" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif">
  <defs>
    <linearGradient id="bgPluto" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#141829"/>
      <stop offset="50%" stop-color="#1e1b36"/>
      <stop offset="100%" stop-color="#121324"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1600" fill="url(#bgPluto)"/>

  <!-- Atmospheric Rainy Neon Ramen Alley Artwork -->
  <rect x="0" y="140" width="460" height="1180" fill="#241c29" opacity="0.85"/>
  <rect x="680" y="140" width="320" height="1180" fill="#191c2e" opacity="0.85"/>

  <!-- Neon Signs -->
  <rect x="480" y="340" width="96" height="220" rx="12" fill="#2e1065" stroke="#f472b6" stroke-width="4"/>
  <text x="528" y="410" fill="#f472b6" font-size="44" font-weight="800" text-anchor="middle">拉</text>
  <text x="528" y="468" fill="#f472b6" font-size="44" font-weight="800" text-anchor="middle">麵</text>
  <text x="528" y="528" fill="#f472b6" font-size="44" font-weight="800" text-anchor="middle">館</text>

  <!-- Warm Amber Lanterns & Ramen Noren -->
  <rect x="218" y="68" width="80" height="156" rx="38" fill="#f59e0b" stroke="#fef08a" stroke-width="3"/>
  <rect x="136" y="660" width="84" height="164" rx="40" fill="#f59e0b" stroke="#fef08a" stroke-width="3"/>
  <rect x="838" y="680" width="86" height="172" rx="40" fill="#f59e0b" stroke="#fef08a" stroke-width="3"/>

  <rect x="250" y="410" width="214" height="240" rx="10" fill="#451a03" stroke="#f59e0b" stroke-width="3"/>
  <text x="357" y="555" fill="#fde047" font-size="52" font-weight="800" text-anchor="middle">🍜</text>

  <rect x="230" y="710" width="216" height="160" fill="#ea580c"/>
  <text x="338" y="810" fill="#fef08a" font-size="48" font-weight="800" letter-spacing="4" text-anchor="middle">RAMEN</text>

  <!-- Standing Neon Sign: OPEN -->
  <rect x="200" y="1060" width="128" height="280" rx="14" fill="#1e1b4b" stroke="#a855f7" stroke-width="4"/>
  <text x="264" y="1135" fill="#e879f9" font-size="44" font-weight="800" text-anchor="middle">い</text>
  <text x="264" y="1190" fill="#e879f9" font-size="44" font-weight="800" text-anchor="middle">ら</text>
  <text x="264" y="1245" fill="#e879f9" font-size="44" font-weight="800" text-anchor="middle">っ</text>
  <text x="264" y="1312" fill="#fb7185" font-size="32" font-weight="800" text-anchor="middle">OPEN</text>

  <!-- Wet Street Neon Reflections -->
  <ellipse cx="640" cy="1320" rx="180" ry="45" fill="#ec4899" opacity="0.35"/>
  <ellipse cx="520" cy="1410" rx="220" ry="50" fill="#a855f7" opacity="0.3"/>

  <!-- Android Status Bar -->
  <text x="32" y="34" fill="#f8fafc" font-size="21" font-weight="600">8:36 pm  📶  🔋 98%</text>
  <circle cx="488" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="500" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="512" cy="26" r="3" fill="#cbd5e1"/>

  <!-- Pluto AI Top Header -->
  <circle cx="48" cy="86" r="28" fill="#1a1630" stroke="#9333ea" stroke-width="2"/>
  <text x="48" y="95" fill="#c084fc" font-size="24" font-weight="700" text-anchor="middle">🪐</text>
  <circle cx="110" cy="86" r="22" fill="#1e1b2e" stroke="#64748b" stroke-width="1.5"/>
  <text x="110" y="94" fill="#ffffff" font-size="19" text-anchor="middle">←</text>
  <text x="144" y="82" fill="#ffffff" font-size="22" font-weight="700">Pluto AI</text>
  <rect x="225" y="62" width="76" height="26" rx="13" fill="#2e1065" stroke="#a855f7"/>
  <text x="263" y="79" fill="#e9d5ff" font-size="12" font-weight="700" text-anchor="middle">Companion</text>
  <text x="144" y="106" fill="#cbd5e1" font-size="14">General Chat Mode</text>
  <circle cx="952" cy="86" r="28" fill="#1a1630" stroke="#9333ea" stroke-width="2"/>
  <text x="952" y="95" fill="#c084fc" font-size="22" text-anchor="middle">⋮</text>

  <!-- Bottom Suggestion Chips -->
  <rect x="20" y="1448" width="196" height="42" rx="21" fill="#111318" fill-opacity="0.92" stroke="#334155"/>
  <text x="118" y="1474" fill="#f8fafc" font-size="14" font-weight="600" text-anchor="middle">Tell me an interesting fact</text>

  <rect x="228" y="1448" width="168" height="42" rx="21" fill="#111318" fill-opacity="0.92" stroke="#334155"/>
  <text x="312" y="1474" fill="#f8fafc" font-size="14" font-weight="600" text-anchor="middle">How do airplanes fly?</text>

  <rect x="408" y="1448" width="258" height="42" rx="21" fill="#111318" fill-opacity="0.92" stroke="#334155"/>
  <text x="537" y="1474" fill="#f8fafc" font-size="14" font-weight="600" text-anchor="middle">Explain quantum computing simply</text>

  <rect x="678" y="1448" width="116" height="42" rx="21" fill="#111318" fill-opacity="0.92" stroke="#334155"/>
  <text x="736" y="1474" fill="#f8fafc" font-size="14" font-weight="600" text-anchor="middle">Tell me a joke</text>

  <rect x="806" y="1448" width="174" height="42" rx="21" fill="#111318" fill-opacity="0.92" stroke="#334155"/>
  <text x="893" y="1474" fill="#f8fafc" font-size="14" font-weight="600" text-anchor="middle">Give me a productivity tip</text>

  <!-- Bottom Chat Input Bar -->
  <circle cx="44" cy="1536" r="26" fill="#111318" stroke="#334155"/>
  <text x="44" y="1544" fill="#cbd5e1" font-size="20" text-anchor="middle">📎</text>
  <rect x="82" y="1506" width="836" height="60" rx="30" fill="#111318" fill-opacity="0.95" stroke="#334155"/>
  <text x="112" y="1542" fill="#94a3b8" font-size="16">Ask Pluto anything, or type 'Focus on &lt;topic&gt;'...</text>
  <circle cx="956" cy="1536" r="26" fill="#1e242d" stroke="#334155"/>
  <text x="956" y="1544" fill="#94a3b8" font-size="20" text-anchor="middle">🎙</text>
</svg>`;

const MATERIALS_SCREENSHOT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1600" width="1000" height="1600" font-family="system-ui, -apple-system, 'Plus Jakarta Sans', sans-serif">
  <defs>
    <linearGradient id="bgMat" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#132a38"/>
      <stop offset="50%" stop-color="#283d3b"/>
      <stop offset="100%" stop-color="#1d2d24"/>
    </linearGradient>
  </defs>
  <rect width="1000" height="1600" fill="url(#bgMat)"/>

  <!-- Enchanted Treehouse Village Background Elements -->
  <path d="M320 540 C340 700, 260 920, 180 1050 L820 1050 C730 900, 650 700, 670 540 Z" fill="#2d3a24" opacity="0.85"/>
  <circle cx="410" cy="650" r="28" fill="#fef08a" opacity="0.45"/>
  <circle cx="610" cy="790" r="36" fill="#fde047" opacity="0.45"/>
  <circle cx="220" cy="1180" r="42" fill="#f59e0b" opacity="0.4"/>
  <circle cx="840" cy="1220" r="42" fill="#f59e0b" opacity="0.4"/>

  <!-- Android Status Bar -->
  <text x="32" y="34" fill="#f8fafc" font-size="21" font-weight="600">12:13 am  📶  🔋 17%</text>
  <circle cx="488" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="500" cy="26" r="3" fill="#cbd5e1"/>
  <circle cx="512" cy="26" r="3" fill="#cbd5e1"/>

  <!-- Materials & Notes Header -->
  <text x="24" y="86" fill="#ffffff" font-size="33" font-weight="700">Materials &amp; Notes</text>
  <text x="24" y="114" fill="#e2e8f0" font-size="17.5">Formula handbooks, PDFs &amp; syntheses</text>
  <rect x="854" y="66" width="64" height="40" rx="20" fill="#2a161d" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="886" y="92" fill="#fb7185" font-size="17" font-weight="700" text-anchor="middle">🔥 1 d</text>
  <circle cx="952" cy="86" r="23" fill="#2a161d" stroke="#f43f5e" stroke-width="1.5"/>

  <!-- Search Input Bar -->
  <rect x="24" y="136" width="952" height="60" rx="20" fill="#111317" fill-opacity="0.95" stroke="#334155"/>
  <text x="52" y="173" fill="#94a3b8" font-size="18">🔍  Search materials, formulas, summaries...</text>

  <!-- Mode Switcher: Syllabus Tree | Materials & Formulas -->
  <rect x="24" y="214" width="290" height="44" rx="22" fill="#111317" stroke="#334155"/>
  <text x="86" y="241" fill="#cbd5e1" font-size="14.5" font-weight="600" text-anchor="middle">Syllabus Tree</text>
  <rect x="146" y="216" width="166" height="40" rx="20" fill="#ffffff"/>
  <text x="229" y="241" fill="#0f172a" font-size="14.5" font-weight="700" text-anchor="middle">Materials &amp; Formulas</text>

  <!-- Subject Filter Row -->
  <g transform="translate(24, 274)">
    <rect x="0" y="0" width="98" height="38" rx="19" fill="#334155" stroke="#ffffff" stroke-width="1.5"/>
    <text x="49" y="24" fill="#ffffff" font-size="13.5" font-weight="700" text-anchor="middle">All Subjects</text>
    <rect x="108" y="0" width="70" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="143" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">English</text>
    <rect x="188" y="0" width="174" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="275" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">Information technology</text>
    <rect x="372" y="0" width="104" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="424" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">Mathematics</text>
    <rect x="486" y="0" width="74" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="523" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">Physics</text>
    <rect x="570" y="0" width="86" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="613" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">chemistry</text>
  </g>

  <!-- Material Type Filter Row -->
  <g transform="translate(24, 326)">
    <rect x="0" y="0" width="48" height="38" rx="19" fill="#ffffff"/>
    <text x="24" y="24" fill="#0f172a" font-size="13.5" font-weight="700" text-anchor="middle">All</text>
    <rect x="58" y="0" width="66" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="91" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">Notes</text>
    <rect x="134" y="0" width="120" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="194" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">PDF Document</text>
    <rect x="264" y="0" width="116" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="322" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">Formula Sheet</text>
    <rect x="390" y="0" width="126" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="453" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">Diagram / Chart</text>
    <rect x="526" y="0" width="114" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="583" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">Video Lecture</text>
    <rect x="650" y="0" width="118" height="38" rx="19" fill="#16222f" fill-opacity="0.8" stroke="#475569"/>
    <text x="709" y="24" fill="#e2e8f0" font-size="13.5" text-anchor="middle">Interactive Lab</text>
    <circle cx="932" cy="19" r="20" fill="#1e293b" stroke="#64748b"/>
    <text x="932" y="26" fill="#ffffff" font-size="22" text-anchor="middle">+</text>
  </g>

  <!-- Main Empty State Card -->
  <rect x="24" y="388" width="952" height="156" rx="22" fill="#121417" fill-opacity="0.96" stroke="#334155"/>
  <text x="500" y="444" fill="#64748b" font-size="34" text-anchor="middle">📁</text>
  <text x="500" y="484" fill="#ffffff" font-size="19" font-weight="700" text-anchor="middle">No study materials found</text>
  <text x="500" y="512" fill="#94a3b8" font-size="15.5" text-anchor="middle">Upload or add your formula sheets and notes.</text>

  <!-- Watermark -->
  <text x="500" y="590" fill="#cbd5e1" font-size="14" letter-spacing="1.5" opacity="0.75" text-anchor="middle">STUDYPILOT · MATERIALS</text>
  <text x="500" y="614" fill="#94a3b8" font-size="13" opacity="0.7" text-anchor="middle">Created by Mohammad Fahad</text>

  <!-- Bottom Navigation Dock -->
  <rect x="20" y="1490" width="960" height="82" rx="36" fill="#11161b" fill-opacity="0.95" stroke="#ca8a04" stroke-opacity="0.45" stroke-width="1.5"/>
  <text x="119" y="1528" fill="#94a3b8" font-size="22" text-anchor="middle">🏠</text>
  <text x="119" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Home</text>
  <text x="310" y="1528" fill="#eab308" font-size="20" text-anchor="middle">📚</text>
  <text x="310" y="1550" fill="#eab308" font-size="13" font-weight="700" text-anchor="middle">Subjects</text>
  <text x="503" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📅</text>
  <text x="503" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Planner</text>
  <text x="695" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">📊</text>
  <text x="695" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Progress</text>
  <text x="885" y="1528" fill="#94a3b8" font-size="20" text-anchor="middle">✨</text>
  <text x="885" y="1550" fill="#94a3b8" font-size="13" text-anchor="middle">Pluto</text>
</svg>`;

export const featureImages: Record<FeatureImageKey, string> = {
  dashboard: svgToDataUri(DASHBOARD_SCREENSHOT_SVG),
  planner: svgToDataUri(PLANNER_SCREENSHOT_SVG),
  focus: svgToDataUri(FOCUS_SCREENSHOT_SVG),
  analytics: svgToDataUri(ANALYTICS_SCREENSHOT_SVG),
  pluto: svgToDataUri(PLUTO_SCREENSHOT_SVG),
  materials: svgToDataUri(MATERIALS_SCREENSHOT_SVG),
};

export const featureImageAltText: Record<FeatureImageKey, string> = {
  dashboard: "StudyPilot dashboard showing today's study target and Focus Guardian",
  planner: 'StudyPilot adaptive study planner',
  focus: 'StudyPilot Focus Guardian study session',
  analytics: 'StudyPilot analytics and mastery progress',
  pluto: 'StudyPilot Pluto AI companion',
  materials: 'StudyPilot study materials and notes',
};
