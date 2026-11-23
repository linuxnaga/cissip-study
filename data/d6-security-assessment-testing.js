// Domain 6: Security Assessment and Testing
// Original practice questions written against the CISSP exam outline topics.
// Format: Q(topic, difficulty 1-3, question, [correct, distractor, distractor, distractor], explanation)
// The correct option is listed first here; the app shuffles options at runtime.
// IDs are assigned by position, so append new questions at the end to keep saved progress stable.
(function () {
  const qs = [];
  const Q = (t, d, q, o, e) => qs.push({ id: "d6-" + String(qs.length + 1).padStart(3, "0"), t, d, q, o, a: 0, e });

  // ---------- Assessment strategy ----------
  Q("Assessment Strategy", 2,
    "What should be defined FIRST when planning a security assessment?",
    ["The objectives and scope, agreed with stakeholders", "Which scanning tool to buy", "The report font", "The list of vulnerabilities to find"],
    "Clear goals and scope determine methods, resources, schedule and the rules of engagement.");
  Q("Assessment Strategy", 2,
    "Which type of audit provides the MOST independence?",
    ["A third-party (external) audit", "An internal audit by the IT team that runs the systems", "A self-assessment", "A vendor's own marketing review"],
    "Third-party auditors have no stake in the outcome. Internal audit provides moderate independence if it reports outside IT.");
  Q("Assessment Strategy", 2,
    "An organization audits its suppliers' security controls. This is known as a:",
    ["Second-party audit", "First-party audit", "Third-party audit", "Self-assessment"],
    "First-party audits are internal, second-party audits are performed on suppliers or partners, and third-party audits are performed by independent organizations.");
  Q("Assessment Strategy", 3,
    "Why should security assessment strategies cover on-premises, cloud and hybrid environments differently?",
    ["Ownership, access rights and testing permissions differ, so methods and contracts must reflect the shared responsibility model",
     "Cloud environments never need testing",
     "Only on-premises systems have vulnerabilities",
     "Hybrid systems cannot be tested"],
    "Cloud providers may restrict testing of their infrastructure; customers test what they control and rely on provider attestations for the rest.");
  Q("Assessment Strategy", 2,
    "Which document gives a penetration tester written authorization and defines what may be tested and how?",
    ["Rules of engagement (with signed authorization)", "Acceptable use policy", "Privacy notice", "Business impact analysis"],
    "Testing without written permission may be illegal. The rules of engagement cover scope, timing, methods, contacts and handling of data.");

  // ---------- Audits and reports ----------
  Q("Audit Reports", 2,
    "A SOC 1 report focuses on controls relevant to:",
    ["Financial reporting", "Security, availability and privacy", "Physical security only", "Software development"],
    "SOC 1 (SSAE 18 / ISAE 3402) addresses internal control over financial reporting. SOC 2 addresses the Trust Services Criteria.");
  Q("Audit Reports", 2,
    "Which report is intended for general public distribution and provides a high-level summary of a service organization's security controls?",
    ["SOC 3", "SOC 2 Type 2", "SOC 1 Type 1", "Penetration test raw output"],
    "SOC 3 is a general-use report. SOC 2 reports are restricted to customers and others with a need to know, typically under NDA.");
  Q("Audit Reports", 2,
    "What is the difference between a SOC 2 Type 1 and Type 2 report?",
    ["Type 1 assesses control design at a point in time; Type 2 also tests operating effectiveness over a period",
     "Type 1 is for financial reporting; Type 2 is for security",
     "Type 2 is shorter",
     "There is no difference"],
    "Type 2 provides stronger assurance because it tests whether controls worked consistently, usually over 6 to 12 months.");
  Q("Audit Reports", 3,
    "A SOC 2 report contains a section listing controls the customer must implement for the vendor's controls to be effective. These are called:",
    ["Complementary user entity controls (CUECs)", "Compensating controls", "Detective controls", "Preventive controls"],
    "Customers must review and implement CUECs, such as managing their own user access to the service.");
  Q("Audit Reports", 2,
    "An auditor finds an exception in a vendor's SOC 2 Type 2 report. What should the customer do?",
    ["Evaluate the exception's impact on their risk and follow up with the vendor on remediation",
     "Ignore it because the report was issued",
     "Cancel the contract immediately in every case",
     "Publish the report online"],
    "Exceptions require risk-based evaluation and may require compensating controls or contract changes.");
  Q("Audit Reports", 2,
    "Which standard governs SOC reports in the United States?",
    ["SSAE 18 (AICPA)", "ISO 9001", "NIST SP 800-115", "PCI PA-DSS"],
    "SSAE 18 is the attestation standard. ISAE 3402 is the international equivalent for service organization controls.");

  // ---------- Vulnerability assessment ----------
  Q("Vulnerability Assessment", 1,
    "What is the PRIMARY goal of a vulnerability assessment?",
    ["Identify and prioritize weaknesses without exploiting them", "Exploit systems to gain access", "Replace firewalls", "Train users"],
    "Vulnerability assessments find and rate weaknesses. Penetration tests go further by attempting exploitation.");
  Q("Vulnerability Assessment", 2,
    "Why are credentialed (authenticated) vulnerability scans more accurate than non-credentialed scans?",
    ["They can inspect installed software, patches and configurations from inside the system",
     "They run faster",
     "They don't need network access",
     "They exploit vulnerabilities"],
    "Authenticated scans reduce false positives and find local issues that external probes cannot see.");
  Q("Vulnerability Assessment", 2,
    "Which system provides a standardized identifier for publicly known vulnerabilities?",
    ["CVE (Common Vulnerabilities and Exposures)", "CVSS", "CWE", "CPE"],
    "CVE identifies specific vulnerabilities. CVSS scores severity, CWE categorizes weakness types, and CPE names platforms.");
  Q("Vulnerability Assessment", 2,
    "CVSS is used to:",
    ["Score the severity of vulnerabilities", "Name software products", "Classify weakness types in code", "Encrypt scan results"],
    "CVSS base scores (0 to 10) consider exploitability and impact. Organizations should also consider environmental factors and threat intelligence.");
  Q("Vulnerability Assessment", 3,
    "Which factor should MOST influence the order in which vulnerabilities are remediated?",
    ["Risk: severity combined with exploitability, asset criticality and exposure",
     "Alphabetical order of hostnames",
     "The age of the scanning tool",
     "The CVSS score alone without context"],
    "Risk-based prioritization (for example, using CISA's Known Exploited Vulnerabilities catalog or EPSS) focuses effort where it matters most.");
  Q("Vulnerability Assessment", 2,
    "A scanner reports a vulnerability that does not actually exist on the system. This is a:",
    ["False positive", "False negative", "True positive", "True negative"],
    "False positives waste time. False negatives (missed vulnerabilities) are more dangerous because they create false confidence.");
  Q("Vulnerability Assessment", 2,
    "Which is the MOST dangerous outcome of a vulnerability scan?",
    ["False negative", "False positive", "True positive", "Long report"],
    "A false negative leaves a real vulnerability undetected.");
  Q("Vulnerability Assessment", 3,
    "SCAP (Security Content Automation Protocol) is used to:",
    ["Standardize the expression and automated checking of configuration and vulnerability data",
     "Encrypt network traffic",
     "Manage passwords",
     "Perform physical penetration tests"],
    "SCAP combines standards such as CVE, CVSS, CPE, XCCDF and OVAL so tools can automate compliance and vulnerability checks.");
  Q("Vulnerability Assessment", 2,
    "Port scanning with a tool such as Nmap is MOSTLY used during which phase?",
    ["Discovery / reconnaissance", "Reporting", "Remediation", "Post-incident review"],
    "Scanning identifies live hosts, open ports and services, which guides further testing.");
  Q("Vulnerability Assessment", 2,
    "An Nmap scan shows a port as 'filtered'. What does this MOST likely mean?",
    ["A firewall or filter is blocking probes, so the scanner can't tell if the port is open",
     "The port is open and accepting connections",
     "The port is closed and responding with RST",
     "The host is offline"],
    "Open means a service responded; closed means the host replied that nothing is listening; filtered means no conclusive response.");
  Q("Vulnerability Assessment", 3,
    "A vulnerability scan of a critical production system must be scheduled carefully because:",
    ["Some scan checks can disrupt fragile services, so timing and safe-check settings should be agreed",
     "Scans always delete data",
     "Scans are illegal on production systems",
     "Scans require rebooting the system"],
    "Coordinating windows and using safe checks reduces operational risk, particularly for ICS and legacy systems.");

  // ---------- Penetration testing ----------
  Q("Penetration Testing", 2,
    "In which type of penetration test does the tester have no prior knowledge of the target environment?",
    ["Black box (zero knowledge)", "White box (full knowledge)", "Gray box (partial knowledge)", "Crystal box"],
    "Black box simulates an outside attacker. White box gives full documentation and code. Gray box provides partial information, such as user credentials.");
  Q("Penetration Testing", 2,
    "What is the typical order of penetration testing phases?",
    ["Planning, discovery, attack (exploitation), reporting", "Attack, planning, reporting, discovery", "Reporting, discovery, attack, planning", "Discovery, reporting, planning, attack"],
    "NIST SP 800-115 describes planning, discovery, attack and reporting, with discovery and attack often iterating.");
  Q("Penetration Testing", 2,
    "A team that simulates real adversaries attacking the organization is called the:",
    ["Red team", "Blue team", "White team", "Purple team"],
    "The red team attacks, the blue team defends, the white team referees, and a purple team collaborates to improve detection.");
  Q("Penetration Testing", 3,
    "What is the PRIMARY benefit of purple teaming?",
    ["Red and blue teams collaborate in real time to improve detection and response capabilities",
     "It replaces all vulnerability scanning",
     "It is always cheaper than any other test",
     "It removes the need for a SOC"],
    "Purple teaming shares attacker techniques with defenders immediately, turning findings into tuned detections.");
  Q("Penetration Testing", 2,
    "During a penetration test, the tester gains access to a server and uses it to attack other internal systems. This is called:",
    ["Pivoting (lateral movement)", "Reconnaissance", "Fuzzing", "Remediation"],
    "Pivoting uses a compromised system as a foothold to reach networks that were not directly accessible.");
  Q("Penetration Testing", 3,
    "A penetration tester unexpectedly discovers evidence of a real, ongoing compromise. What should they do?",
    ["Stop and immediately notify the designated client contact according to the rules of engagement",
     "Continue testing and mention it in the final report",
     "Remove the attacker's tools themselves",
     "Notify the media"],
    "Real incidents take priority. Rules of engagement should define escalation contacts for exactly this situation.");
  Q("Penetration Testing", 2,
    "Which testing method assesses whether employees can be tricked into revealing information or granting access?",
    ["Social engineering testing (for example, phishing simulations)", "Static code analysis", "Load testing", "Regression testing"],
    "Human factors are commonly tested with phishing, pretext calls and physical intrusion attempts, with proper authorization.");
  Q("Penetration Testing", 2,
    "What is the MOST important deliverable of a penetration test?",
    ["A report with findings, risk ratings, evidence and actionable remediation recommendations",
     "A list of the tester's tools",
     "The tester's invoice",
     "Screenshots only"],
    "The value of testing lies in helping the organization fix issues. Reports usually include an executive summary and technical details.");
  Q("Penetration Testing", 3,
    "Which statement about testing cloud-hosted systems is MOST accurate?",
    ["Testers must follow the provider's testing policy and test only resources the customer controls",
     "Customers may test the provider's hypervisors freely",
     "Cloud systems cannot be penetration tested",
     "No authorization is needed in the cloud"],
    "Most providers publish acceptable testing policies. Testing other tenants or the provider's infrastructure is prohibited.");
  Q("Penetration Testing", 2,
    "A bug bounty program:",
    ["Rewards external researchers for responsibly reporting vulnerabilities under defined rules",
     "Pays attackers after breaches",
     "Replaces internal security testing entirely",
     "Is illegal in most countries"],
    "Bug bounties supplement internal testing. Clear scope, safe harbor and disclosure terms are essential.");
  Q("Penetration Testing", 3,
    "Breach and attack simulation (BAS) tools differ from traditional penetration tests because they:",
    ["Continuously and automatically run safe attack scenarios to validate controls",
     "Are performed only once a year by humans",
     "Do not test any security controls",
     "Only check physical security"],
    "BAS provides ongoing validation that controls detect and block known techniques, often mapped to MITRE ATT&CK.");

  // ---------- Log review and monitoring ----------
  Q("Log Review", 2,
    "Why is regular log review considered an assessment activity?",
    ["It verifies that controls are working and reveals policy violations and attacks",
     "It replaces the need for backups",
     "It encrypts data",
     "It is only required for audits"],
    "Logs provide evidence of control operation and are a key detective control.");
  Q("Log Review", 2,
    "Which control ensures that log timestamps from many systems can be correlated accurately?",
    ["Synchronizing clocks with a trusted time source (NTP)", "Using larger log files", "Disabling log rotation", "Storing logs locally only"],
    "Consistent time is essential for reconstructing events across systems.");
  Q("Log Review", 2,
    "Clipping levels in log monitoring are used to:",
    ["Set thresholds so that only activity exceeding a baseline (for example, 5 failed logins) generates alerts",
     "Delete old logs",
     "Encrypt log files",
     "Compress logs"],
    "Clipping levels reduce noise by ignoring routine errors while flagging suspicious volumes.");
  Q("Log Review", 2,
    "Which system aggregates and correlates logs from many sources to detect security incidents?",
    ["SIEM", "DLP", "HSM", "NAC"],
    "Security information and event management systems normalize, correlate and alert on log data.");
  Q("Log Review", 3,
    "A SIEM generates thousands of alerts daily, and analysts ignore most of them. What is the BEST improvement?",
    ["Tune correlation rules, add context, and prioritize alerts based on risk",
     "Turn off the SIEM",
     "Hire analysts to read every alert manually forever",
     "Lower all alert thresholds"],
    "Alert fatigue reduces effectiveness. Tuning, enrichment and automation (SOAR) improve signal-to-noise.");

  // ---------- Synthetic transactions and monitoring ----------
  Q("Synthetic Transactions", 2,
    "Running scripted transactions against an application to verify its availability and performance is called:",
    ["Synthetic monitoring (synthetic transactions)", "Real user monitoring", "Fuzzing", "Static analysis"],
    "Synthetic monitoring is proactive and works even with no real users. Real user monitoring (RUM) observes actual user sessions passively.");
  Q("Synthetic Transactions", 2,
    "Real user monitoring (RUM) is BEST described as:",
    ["Passively capturing actual user interactions to measure performance and errors",
     "Running scripted tests from a robot",
     "Reviewing source code",
     "Interviewing users"],
    "RUM shows real-world experience but depends on actual traffic.");

  // ---------- Code review and testing ----------
  Q("Code Testing", 2,
    "Static application security testing (SAST) analyzes:",
    ["Source code or binaries without executing the program", "A running application from the outside", "Network traffic", "Physical security"],
    "SAST finds issues early in development, such as injection flaws and hardcoded secrets, but may produce false positives.");
  Q("Code Testing", 2,
    "Dynamic application security testing (DAST) evaluates:",
    ["A running application by sending inputs and observing responses", "Source code without running it", "Hardware firmware only", "Database backups"],
    "DAST finds runtime and configuration issues but has no visibility into code paths that it does not reach.");
  Q("Code Testing", 2,
    "Fuzz testing involves:",
    ["Sending large volumes of invalid, unexpected or random input to find crashes and flaws",
     "Reviewing code line by line",
     "Interviewing developers",
     "Checking firewall rules"],
    "Fuzzing is effective at finding input-handling bugs such as buffer overflows.");
  Q("Code Testing", 3,
    "A fuzzer that modifies valid sample inputs to create test cases is called:",
    ["Mutation (dumb) fuzzing", "Generational (intelligent) fuzzing", "Regression testing", "Static analysis"],
    "Mutation fuzzers alter existing inputs. Generational fuzzers build inputs from a model of the protocol or file format.");
  Q("Code Testing", 2,
    "Interactive application security testing (IAST) works by:",
    ["Instrumenting the application to observe code execution during functional or dynamic testing",
     "Reading code on paper",
     "Scanning only network ports",
     "Reviewing contracts"],
    "IAST combines elements of SAST and DAST, reporting vulnerabilities with code-level context.");
  Q("Code Testing", 2,
    "Software composition analysis (SCA) identifies:",
    ["Known vulnerabilities and license issues in third-party and open-source components",
     "Business logic flaws",
     "Physical security weaknesses",
     "Password strength"],
    "Modern applications rely heavily on dependencies. SCA tools often produce or consume SBOMs.");
  Q("Code Testing", 2,
    "Which review method involves developers formally walking through code with peers to find defects?",
    ["Manual code review (for example, a Fagan inspection)", "Penetration testing", "Fuzzing", "Load testing"],
    "Formal inspections with defined roles and steps are effective at finding logic flaws that tools miss.");
  Q("Code Testing", 3,
    "Misuse case testing focuses on:",
    ["How an attacker or user might abuse functionality in unintended ways",
     "Testing only normal user workflows",
     "Measuring server performance",
     "Validating color schemes"],
    "Misuse (abuse) cases are derived from use cases by asking what could go wrong, guiding security test design.");
  Q("Code Testing", 2,
    "Test coverage analysis measures:",
    ["The percentage of code (such as statements, branches or conditions) exercised by tests",
     "How many testers are on the team",
     "The number of servers in production",
     "Network bandwidth"],
    "Coverage metrics show which parts of the code were not tested. Coverage = (items tested / total items) × 100.");
  Q("Code Testing", 2,
    "Interface testing verifies:",
    ["That components, APIs and user interfaces exchange data correctly and securely",
     "Only the visual design of a website",
     "That hardware is plugged in",
     "Physical door locks"],
    "Interfaces include APIs, user interfaces and physical interfaces. Testing should cover valid, invalid and boundary inputs.");
  Q("Code Testing", 2,
    "Regression testing is performed to:",
    ["Ensure that changes have not broken existing functionality or reintroduced old bugs",
     "Test brand new features only",
     "Measure user satisfaction",
     "Train developers"],
    "Automated regression suites are run after every change.");
  Q("Code Testing", 2,
    "Which sequence represents testing from the smallest scope to the largest?",
    ["Unit, integration, system, acceptance", "Acceptance, system, integration, unit", "System, unit, acceptance, integration", "Integration, acceptance, unit, system"],
    "Unit tests check individual components, integration tests check combined components, system tests check the whole system, and acceptance tests confirm it meets user requirements.");
  Q("Code Testing", 3,
    "Boundary value analysis tests:",
    ["Inputs at, just inside and just outside allowed limits",
     "Only typical mid-range values",
     "Random characters only",
     "Network latency"],
    "Errors often occur at edges of ranges (for example, 0, 1, max and max+1).");
  Q("Code Testing", 3,
    "Which testing technique is MOST likely to detect a flaw in business logic, such as applying a discount twice?",
    ["Manual testing by someone who understands the business process", "Automated port scanning", "CVSS scoring", "Network flow analysis"],
    "Automated scanners generally cannot understand intended business rules.");

  // ---------- Security process data / KPIs ----------
  Q("Security Metrics", 2,
    "A key risk indicator (KRI) differs from a key performance indicator (KPI) in that a KRI:",
    ["Signals increasing risk exposure that may require action",
     "Measures how efficiently a process performs",
     "Is only used by finance",
     "Is never reported to management"],
    "KPIs show performance against goals (for example, patching within SLA). KRIs warn of rising risk (for example, growing unpatched critical systems).");
  Q("Security Metrics", 2,
    "Which metric BEST measures the effectiveness of a patch management program?",
    ["Percentage of critical vulnerabilities remediated within the defined SLA", "Number of patches downloaded", "Size of the patch repository", "Number of IT staff"],
    "Outcome-based metrics tied to SLAs show whether the program reduces exposure.");
  Q("Security Metrics", 2,
    "Mean time to detect (MTTD) and mean time to respond (MTTR) are metrics for:",
    ["Incident detection and response effectiveness", "Backup speed", "Password strength", "Network throughput"],
    "Lower MTTD and MTTR reduce attacker dwell time and impact.");
  Q("Security Metrics", 3,
    "Security metrics presented to the board should PRIMARILY:",
    ["Show risk trends and business impact in non-technical terms",
     "List every firewall rule",
     "Include raw log data",
     "Show packet captures"],
    "Executives need concise, risk-oriented information to make decisions about investment and risk acceptance.");
  Q("Security Metrics", 2,
    "Which data source BEST demonstrates that account management processes are working?",
    ["Results of periodic account reviews showing timely removal of terminated users' access",
     "The number of help desk tickets",
     "Firewall uptime",
     "The cost of software licenses"],
    "Comparing HR termination records with account status verifies deprovisioning.");
  Q("Security Metrics", 2,
    "How should an organization verify that backups are effective?",
    ["Perform regular test restores and verify data integrity", "Check that backup jobs report success", "Count the number of tapes", "Assume backups work"],
    "A backup that cannot be restored is useless. Restore tests validate both data and procedures and confirm RTO/RPO can be met.");
  Q("Security Metrics", 2,
    "Which metric BEST shows the effectiveness of security awareness training?",
    ["Trends in phishing simulation click and report rates", "Number of slides in the course", "Training video length", "Number of posters displayed"],
    "Behavioral metrics show whether training changes what people do.");

  // ---------- BC/DR testing ----------
  Q("DR and BC Testing", 2,
    "Which DR test involves team members reviewing the plan document individually for accuracy?",
    ["Read-through (checklist) test", "Full interruption test", "Parallel test", "Simulation test"],
    "Read-throughs are the least disruptive. They check for outdated information and missing steps.");
  Q("DR and BC Testing", 2,
    "A tabletop exercise (structured walkthrough) involves:",
    ["Team members discussing their roles and actions in response to a scenario",
     "Shutting down the primary site",
     "Running systems at the alternate site in parallel",
     "Restoring all data from backups"],
    "Tabletops validate understanding and coordination without affecting operations.");
  Q("DR and BC Testing", 2,
    "Which test activates the alternate site and processes data there while the primary site continues operating?",
    ["Parallel test", "Full interruption test", "Read-through test", "Tabletop exercise"],
    "Parallel tests validate the recovery site without risking production. Full interruption tests shut down the primary site.");
  Q("DR and BC Testing", 2,
    "Which DR test carries the HIGHEST risk to business operations?",
    ["Full interruption test", "Parallel test", "Simulation test", "Checklist review"],
    "Full interruption tests switch operations entirely to the recovery site and can cause real outages if the plan fails.");
  Q("DR and BC Testing", 3,
    "After a DR test reveals that the recovery time exceeded the RTO, what should happen NEXT?",
    ["Analyze the root causes, update the plan and resources, and retest",
     "Increase the RTO without approval",
     "Stop testing to avoid bad results",
     "Fire the DR team"],
    "Lessons learned feed continuous improvement. Any change to RTO must be approved by business owners.");
  Q("DR and BC Testing", 2,
    "A simulation test differs from a tabletop because it:",
    ["Uses a realistic scenario with participants performing actions up to, but not including, actual relocation",
     "Shuts down production systems",
     "Is only a document review",
     "Involves no participants"],
    "Simulations may involve practicing communications and procedures with more realism than tabletops.");

  // ---------- Compliance checks and reporting ----------
  Q("Compliance and Reporting", 2,
    "When an audit finding cannot be remediated immediately, what is the BEST approach?",
    ["Document a formal exception with risk acceptance by an authorized owner, compensating controls and a review date",
     "Hide the finding from management",
     "Mark it as remediated",
     "Delete the audit report"],
    "Exception management ensures risks are visible, approved and revisited.");
  Q("Compliance and Reporting", 2,
    "To whom should an internal audit function report to maintain independence?",
    ["The audit committee of the board", "The IT manager whose systems are audited", "The CIO only", "The vendor"],
    "Reporting to the audit committee prevents management from suppressing findings.");
  Q("Compliance and Reporting", 3,
    "A researcher discovers a vulnerability in a vendor's product. Which approach is generally considered MOST responsible?",
    ["Coordinated disclosure: notify the vendor privately and allow reasonable time to fix before public release",
     "Publish exploit code immediately",
     "Sell the vulnerability to the highest bidder",
     "Never tell anyone"],
    "Coordinated (responsible) disclosure balances user protection with transparency. Many vendors publish a vulnerability disclosure policy.");
  Q("Compliance and Reporting", 2,
    "Which element is essential in an assessment report for management?",
    ["An executive summary describing overall risk and priority actions", "The raw scanner XML output only", "The tester's personal opinions", "A list of all open ports with no context"],
    "Management needs concise risk information. Technical appendices support remediation teams.");
  Q("Compliance and Reporting", 3,
    "Assessment results show the same critical findings across three consecutive annual tests. What does this MOST likely indicate?",
    ["A systemic problem in remediation governance or process, not just technical gaps",
     "The tests are unnecessary",
     "The findings are false positives",
     "The organization is fully secure"],
    "Repeat findings point to accountability, resourcing or process failures that management must address.");

  // ---------- Additional assessment concepts ----------
  Q("Assessment Strategy", 2,
    "Which activity provides independent assurance that controls operate as described?",
    ["An audit", "A policy draft", "A marketing review", "A training session"],
    "Audits verify through evidence (inspection, observation, inquiry, re-performance).");
  Q("Assessment Strategy", 3,
    "Which audit technique provides the STRONGEST evidence that a control is operating effectively?",
    ["Re-performance of the control by the auditor", "Inquiry of staff", "Reading the policy", "Reviewing the org chart"],
    "Re-performance directly confirms results. Inquiry alone is the weakest form of evidence.");
  Q("Assessment Strategy", 2,
    "Sampling in audits is used because:",
    ["Testing every transaction is impractical, so a representative subset is examined",
     "Auditors are not allowed to see all data",
     "It guarantees no errors exist",
     "It removes the need for evidence"],
    "Statistical or judgmental sampling provides reasonable assurance efficiently.");
  Q("Vulnerability Assessment", 2,
    "Which type of scan examines a web application for issues such as SQL injection and XSS?",
    ["Web application vulnerability scan (DAST)", "Network ping sweep", "Wireless site survey", "Port knock"],
    "Web scanners crawl and probe applications for common vulnerabilities.");
  Q("Vulnerability Assessment", 3,
    "An organization continuously discovers and assesses its internet-facing assets, including forgotten subdomains and cloud services. This practice is called:",
    ["External attack surface management (EASM)", "Data loss prevention", "Business impact analysis", "Configuration baselining"],
    "EASM finds unknown or unmanaged exposures that attackers would see.");
  Q("Penetration Testing", 2,
    "Which source of information is used in passive reconnaissance?",
    ["Public records, websites, DNS and social media (OSINT)", "Active port scans", "Exploiting a web server", "Phishing employees"],
    "Passive reconnaissance gathers information without directly interacting with target systems.");
  Q("Penetration Testing", 3,
    "Why do testers often use the MITRE ATT&CK framework?",
    ["To map tests to real adversary tactics and techniques and measure detection coverage",
     "To encrypt reports",
     "To score vulnerabilities",
     "To manage software licenses"],
    "ATT&CK provides a common language for adversary behavior, linking red team activity with blue team detections.");
  Q("Code Testing", 2,
    "Which testing approach examines the internal logic and structure of code?",
    ["White-box testing", "Black-box testing", "Acceptance testing by users", "Usability testing"],
    "White-box testing uses knowledge of the code. Black-box testing evaluates behavior without seeing internals.");
  Q("Code Testing", 2,
    "Positive testing verifies that software:",
    ["Works correctly with valid input", "Handles invalid input gracefully", "Is visually appealing", "Can be fuzzed"],
    "Negative testing checks that invalid input is rejected properly. Both are needed.");
  Q("Code Testing", 3,
    "Use case testing focuses on expected behavior, while misuse case testing focuses on abuse. Which statement is TRUE?",
    ["Both are needed to verify that the system does what it should and resists what it shouldn't do",
     "Only use case testing is necessary",
     "Misuse cases replace all functional tests",
     "Neither applies to security"],
    "Combining both gives better assurance of functionality and security.");
  Q("Log Review", 3,
    "An analyst notices that the audit log on a server stopped recording events for six hours. What is the MOST important concern?",
    ["The gap may hide malicious activity or indicate tampering, so it should be investigated",
     "The server ran faster",
     "Nothing, gaps are normal",
     "The log file needs compression"],
    "Monitoring for logging failures is itself a control. Attackers often disable or clear logs.");
  Q("Security Metrics", 3,
    "Which characteristic makes a security metric MOST useful?",
    ["It is specific, measurable, repeatable and tied to a decision or goal",
     "It is complex and hard to compute",
     "It changes definition every quarter",
     "It is reported only once"],
    "Good metrics inform decisions and allow trends to be tracked consistently.");
  Q("DR and BC Testing", 2,
    "How often should business continuity plans generally be tested?",
    ["At least annually and after significant changes", "Only once when created", "Every ten years", "Only after a disaster"],
    "Regular testing keeps plans current and staff familiar with their roles.");
  Q("Compliance and Reporting", 2,
    "A gap analysis compares:",
    ["Current controls against requirements of a standard or target state",
     "Two different vendors' prices",
     "Old logs with new logs",
     "Employee salaries"],
    "Gap analysis identifies what needs to be implemented to reach compliance or maturity goals.");
  Q("Assessment Strategy", 3,
    "Who should determine the acceptable level of disruption during security testing of production systems?",
    ["The system and business owners, documented in the rules of engagement",
     "The tester alone",
     "Any employee",
     "The ISP"],
    "Owners understand the business impact and must approve testing constraints.");
  Q("Penetration Testing", 2,
    "Which statement BEST describes a vulnerability assessment compared with a penetration test?",
    ["A vulnerability assessment is broad and identifies weaknesses; a penetration test is deeper and attempts exploitation",
     "They are identical",
     "A penetration test only scans ports",
     "A vulnerability assessment always exploits systems"],
    "Both are valuable. Assessments are usually more frequent; penetration tests validate real-world exploitability.");
  Q("Code Testing", 2,
    "Which testing activity checks that an application meets performance requirements under heavy load?",
    ["Load and stress testing", "Static analysis", "Code signing", "Fagan inspection"],
    "Stress testing also reveals how systems fail under overload, which affects availability.");
  Q("Vulnerability Assessment", 2,
    "Which standard enumerates common software weakness types such as 'Improper Input Validation'?",
    ["CWE", "CVE", "CPE", "CCE"],
    "CWE categorizes weakness types. The CWE Top 25 lists the most dangerous weaknesses.");
  Q("Log Review", 2,
    "Why should logs be retained for a defined period?",
    ["To support investigations, compliance requirements and trend analysis", "Because deleting logs is impossible", "To slow down servers", "To fill storage"],
    "Retention periods balance investigative needs, legal requirements and storage costs.");
  Q("Compliance and Reporting", 3,
    "A regulator requests evidence of continuous control monitoring. Which approach BEST provides it?",
    ["Automated control checks with dashboards and retained evidence over time",
     "An annual spreadsheet filled out from memory",
     "Verbal assurances from managers",
     "A single screenshot"],
    "Continuous control monitoring provides ongoing, timestamped evidence of control operation.");
  Q("Penetration Testing", 3,
    "Physical penetration testers are caught inside a client facility. What should they present?",
    ["A signed authorization letter (often called a get-out-of-jail letter) with emergency contacts",
     "Nothing, and attempt to flee",
     "A fake police badge",
     "Their personal ID only"],
    "Authorization letters protect testers and allow staff to verify the engagement with designated contacts.");
  Q("Security Metrics", 2,
    "Which data would BEST support a decision to invest in additional email security?",
    ["Trend data on phishing emails reaching users and resulting incidents", "The number of email servers", "Average email length", "The color of the email client"],
    "Incident and exposure trends tie investment to measurable risk reduction.");
  Q("Assessment Strategy", 2,
    "An organization assesses itself against the NIST Cybersecurity Framework to set a target profile. This is BEST described as:",
    ["A maturity or gap assessment", "A penetration test", "A code review", "A DR test"],
    "Framework-based assessments compare current and target states to guide improvement roadmaps.");
  Q("Vulnerability Assessment", 2,
    "After remediating a vulnerability, what is the BEST way to confirm the fix?",
    ["Rescan or retest the affected system to verify the vulnerability is gone",
     "Close the ticket based on the administrator's word",
     "Wait for the next annual audit",
     "Delete the original scan report"],
    "Validation scanning confirms remediation and prevents tickets from being closed prematurely.");
  Q("Code Testing", 3,
    "Which practice integrates security testing into every build in a CI/CD pipeline?",
    ["Automated SAST, SCA and secret scanning as pipeline gates, with DAST in staging",
     "Manual security review once a year",
     "Testing only after production release",
     "Disabling tests to speed up builds"],
    "Shifting testing left catches issues early when they are cheapest to fix, while gates prevent known-bad builds from shipping.");
  Q("Security Metrics", 2,
    "Which metric indicates whether user accounts are being deprovisioned on time?",
    ["Average time between HR termination date and account disablement", "Number of new accounts created", "Password length", "Number of help desk calls"],
    "This KPI directly measures the leaver process and highlights delays that create risk.");
  Q("Penetration Testing", 2,
    "Which testing approach provides the MOST realistic measure of an organization's ability to detect and respond to a targeted attack?",
    ["A red team exercise with limited prior notice to defenders", "A vulnerability scan", "A policy review", "A tabletop exercise"],
    "Red team operations emulate real adversaries over time and test people, processes and technology together.");
  Q("Log Review", 2,
    "Which log type is MOST useful for detecting unauthorized changes to firewall rules?",
    ["Configuration change and administrative audit logs from the firewall", "Web server access logs", "Printer logs", "DHCP lease logs"],
    "Administrative audit logs record who changed what and when, supporting change control verification.");
  Q("DR and BC Testing", 3,
    "During a tabletop exercise, participants realize nobody knows who can authorize declaring a disaster. What is the MOST valuable outcome?",
    ["The gap is documented and the plan is updated to define declaration authority",
     "The exercise is deemed a failure and discarded",
     "Nothing, because it was only a tabletop",
     "The team guesses a name and moves on"],
    "Finding gaps like unclear authority is exactly the purpose of exercises.");
  Q("Compliance and Reporting", 2,
    "Which practice helps ensure audit findings are actually fixed?",
    ["Tracking findings with owners, due dates and status reporting to management", "Storing findings in a private folder", "Assigning findings to no one", "Discussing findings verbally only"],
    "Formal tracking creates accountability and visibility.");

  window.CISSP = window.CISSP || { questions: {}, flashcards: {} };
  CISSP.questions[6] = qs;

  // ---------- Flashcards ----------
  const cards = [];
  const F = (t, f, b) => cards.push({ id: "d6-c" + String(cards.length + 1).padStart(3, "0"), t, f, b });

  F("Assessment Strategy", "Audit types by party", "First-party: internal. Second-party: of suppliers or partners. Third-party: independent external.");
  F("Assessment Strategy", "Rules of engagement", "Written authorization, scope, timing, methods, contacts, data handling and escalation.");
  F("Assessment Strategy", "Audit evidence strength", "Re-performance > observation > inspection > inquiry (weakest).");
  F("Audit Reports", "SOC 1", "Controls relevant to financial reporting (SSAE 18 / ISAE 3402).");
  F("Audit Reports", "SOC 2", "Trust Services Criteria: security, availability, processing integrity, confidentiality, privacy. Restricted distribution.");
  F("Audit Reports", "SOC 3", "General-use summary report for the public.");
  F("Audit Reports", "Type 1 vs Type 2", "Type 1: design at a point in time. Type 2: design plus operating effectiveness over a period.");
  F("Audit Reports", "CUECs", "Complementary user entity controls the customer must implement.");
  F("Vulnerability Assessment", "Vulnerability assessment vs pen test", "VA: identify and prioritize weaknesses. Pen test: exploit to prove impact.");
  F("Vulnerability Assessment", "Credentialed scan", "Authenticated scan sees patches and configuration; more accurate.");
  F("Vulnerability Assessment", "CVE / CVSS / CWE / CPE", "CVE: vulnerability ID. CVSS: severity score. CWE: weakness type. CPE: platform name.");
  F("Vulnerability Assessment", "SCAP", "Suite of standards (CVE, CVSS, CPE, CCE, XCCDF, OVAL) for automated checks.");
  F("Vulnerability Assessment", "False positive vs false negative", "FP: reported but not real. FN: real but missed (more dangerous).");
  F("Vulnerability Assessment", "Nmap port states", "Open (service responds), closed (no service, host replies), filtered (blocked, no conclusive reply).");
  F("Vulnerability Assessment", "Risk-based prioritization", "Severity + exploitability (KEV, EPSS) + asset criticality + exposure.");
  F("Vulnerability Assessment", "EASM", "External attack surface management: discover internet-facing assets.");
  F("Penetration Testing", "Pen test phases (NIST SP 800-115)", "Planning, discovery, attack, reporting.");
  F("Penetration Testing", "Knowledge levels", "Black box (none), gray box (partial), white box (full).");
  F("Penetration Testing", "Team colors", "Red: attack. Blue: defend. White: referee. Purple: collaborate.");
  F("Penetration Testing", "Pivoting", "Using a compromised host to reach other systems.");
  F("Penetration Testing", "Passive vs active recon", "Passive: OSINT without touching targets. Active: scanning and probing.");
  F("Penetration Testing", "BAS", "Breach and attack simulation: automated, continuous control validation.");
  F("Penetration Testing", "Bug bounty", "Rewards external researchers for reporting vulnerabilities within defined scope.");
  F("Penetration Testing", "Real compromise found during testing", "Stop and notify the designated contact immediately.");
  F("Log Review", "Clipping level", "Threshold that must be exceeded before alerting.");
  F("Log Review", "SIEM", "Collects, normalizes and correlates logs; alerts on incidents.");
  F("Log Review", "Time synchronization", "NTP ensures accurate log correlation.");
  F("Synthetic Transactions", "Synthetic vs real user monitoring", "Synthetic: scripted, proactive. RUM: passive, real user sessions.");
  F("Code Testing", "SAST", "Static analysis of source or binaries without execution.");
  F("Code Testing", "DAST", "Tests a running application from the outside.");
  F("Code Testing", "IAST", "Instrumented app observed during testing; code-level context.");
  F("Code Testing", "SCA", "Software composition analysis: third-party component vulnerabilities and licenses.");
  F("Code Testing", "Fuzzing types", "Mutation (modify valid inputs) vs generational (build from a model).");
  F("Code Testing", "Misuse case testing", "Tests how functionality can be abused.");
  F("Code Testing", "Test coverage", "Percentage of code exercised by tests (statements, branches, conditions).");
  F("Code Testing", "Testing levels", "Unit, integration, system, acceptance.");
  F("Code Testing", "Regression testing", "Verifies changes didn't break existing functionality.");
  F("Code Testing", "Boundary value analysis", "Test at and around input limits.");
  F("Code Testing", "Fagan inspection", "Formal peer code review: planning, overview, preparation, inspection, rework, follow-up.");
  F("Code Testing", "Interface testing", "Tests APIs, UIs and physical interfaces for correct, secure data exchange.");
  F("Security Metrics", "KPI vs KRI", "KPI: performance against goals. KRI: early warning of rising risk.");
  F("Security Metrics", "MTTD / MTTR", "Mean time to detect / respond to incidents.");
  F("Security Metrics", "Backup verification", "Regular test restores, not just job success messages.");
  F("Security Metrics", "Board reporting", "Risk trends and business impact in non-technical terms.");
  F("DR and BC Testing", "DR test types (least to most disruptive)", "Read-through/checklist, tabletop/walkthrough, simulation, parallel, full interruption.");
  F("DR and BC Testing", "Parallel test", "Alternate site processes in parallel with the primary.");
  F("DR and BC Testing", "Full interruption test", "Primary shut down; highest risk and highest assurance.");
  F("Compliance and Reporting", "Exception management", "Documented risk acceptance, compensating controls and review date.");
  F("Compliance and Reporting", "Coordinated disclosure", "Notify the vendor privately; publish after a fix or a reasonable deadline.");
  F("Compliance and Reporting", "Internal audit independence", "Reports to the audit committee of the board.");
  F("Compliance and Reporting", "Gap analysis", "Compare current state with required or target state.");

  CISSP.flashcards[6] = cards;
})();
