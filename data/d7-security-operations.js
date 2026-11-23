// Domain 7: Security Operations
// Original practice questions written against the CISSP exam outline topics.
// Format: Q(topic, difficulty 1-3, question, [correct, distractor, distractor, distractor], explanation)
// The correct option is listed first here; the app shuffles options at runtime.
// IDs are assigned by position, so append new questions at the end to keep saved progress stable.
(function () {
  const qs = [];
  const Q = (t, d, q, o, e) => qs.push({ id: "d7-" + String(qs.length + 1).padStart(3, "0"), t, d, q, o, a: 0, e });

  // ---------- Investigations and forensics ----------
  Q("Digital Forensics", 2,
    "When collecting digital evidence, which should be captured FIRST according to the order of volatility?",
    ["CPU registers and cache, then RAM", "Hard disk contents", "Archived backup tapes", "Printed documents"],
    "Collect the most volatile data first: registers and cache, routing and ARP tables, RAM, temporary files, disk, remote logs, then archival media.");
  Q("Digital Forensics", 2,
    "Why do forensic investigators create a bit-for-bit image of a drive and work on the copy?",
    ["To preserve the original evidence unchanged for admissibility",
     "Because copies are faster to search",
     "To delete irrelevant files",
     "To encrypt the evidence"],
    "Analyzing copies prevents altering the original. Hashes verify that the image matches the source.");
  Q("Digital Forensics", 2,
    "How does an investigator demonstrate that a forensic image is identical to the original drive?",
    ["By comparing cryptographic hashes of the original and the image", "By comparing file counts", "By checking the drive's label", "By opening a few files"],
    "Matching hashes (for example, SHA-256) prove integrity at acquisition and at later stages.");
  Q("Digital Forensics", 2,
    "Which device prevents any data from being written to a suspect drive during acquisition?",
    ["Write blocker", "Degausser", "Network tap", "Hardware security module"],
    "Write blockers allow read-only access, preserving evidence integrity.");
  Q("Digital Forensics", 2,
    "For evidence to be admissible in court, it generally must be:",
    ["Relevant, material and competent (legally obtained and reliable)",
     "Collected by the IT help desk",
     "Printed on paper",
     "Approved by the defendant"],
    "Admissible evidence must relate to the case, matter to its outcome, and be obtained legally with integrity preserved.");
  Q("Digital Forensics", 2,
    "Which type of evidence consists of tangible objects, such as a seized hard drive?",
    ["Real evidence", "Documentary evidence", "Testimonial evidence", "Hearsay"],
    "Real (object) evidence is physical. Documentary evidence includes written items and logs; testimonial evidence comes from witnesses.");
  Q("Digital Forensics", 3,
    "The best evidence rule states that:",
    ["The original document should be presented rather than a copy, unless an exception applies",
     "Only digital evidence is acceptable",
     "Witnesses must be experts",
     "Evidence must be encrypted"],
    "Courts prefer originals. Properly authenticated copies (for example, verified forensic images) are often accepted.");
  Q("Digital Forensics", 3,
    "The parol evidence rule applies to:",
    ["Written agreements, presuming the written contract contains the complete agreement",
     "Network logs",
     "Forensic images",
     "Expert testimony"],
    "Oral statements generally cannot change the terms of a complete written contract.");
  Q("Digital Forensics", 2,
    "Which principle, often summarized as 'every contact leaves a trace', underlies forensic investigation?",
    ["Locard's exchange principle", "Kerckhoffs's principle", "The prudent person rule", "The principle of least privilege"],
    "Locard's principle applies to digital crimes as well: attackers leave artifacts in logs, memory and file systems.");
  Q("Digital Forensics", 2,
    "When should an organization involve law enforcement in an incident?",
    ["When a crime is suspected and management, with legal counsel, decides to report it",
     "Never, under any circumstances",
     "For every minor policy violation",
     "Only after evidence is destroyed"],
    "Involving law enforcement can bring resources but may mean loss of control over the investigation and public disclosure. Legal counsel should guide the decision.");
  Q("Digital Forensics", 3,
    "The Electronic Discovery Reference Model (EDRM) describes:",
    ["Stages of handling electronically stored information for litigation, from identification to presentation",
     "Network routing protocols",
     "Encryption key lengths",
     "Fire suppression methods"],
    "EDRM stages include information governance, identification, preservation, collection, processing, review, analysis, production and presentation.");
  Q("Digital Forensics", 2,
    "A live system is suspected of being compromised. Why might an investigator capture memory before shutting it down?",
    ["RAM may contain running malware, encryption keys and network connections that are lost at shutdown",
     "Shutting down is always illegal",
     "Memory capture repairs the system",
     "Disk data disappears at shutdown"],
    "Volatile evidence such as fileless malware may exist only in memory.");
  Q("Digital Forensics", 3,
    "Which type of investigation requires the strictest adherence to evidence handling procedures?",
    ["Criminal", "Administrative", "Operational", "Root cause analysis for an outage"],
    "Criminal cases face the highest legal scrutiny and burden of proof.");

  // ---------- Logging and monitoring ----------
  Q("Logging and Monitoring", 2,
    "Security orchestration, automation and response (SOAR) platforms primarily help by:",
    ["Automating repetitive response tasks through playbooks and integrating security tools",
     "Replacing all security analysts",
     "Encrypting endpoints",
     "Providing wireless access"],
    "SOAR speeds up triage and containment and ensures consistent response.");
  Q("Logging and Monitoring", 2,
    "User and entity behavior analytics (UEBA) detects threats by:",
    ["Establishing baselines of normal behavior and flagging anomalies",
     "Matching known virus signatures only",
     "Blocking all USB devices",
     "Scanning source code"],
    "UEBA can detect insider threats and compromised accounts that signature-based tools miss.");
  Q("Logging and Monitoring", 2,
    "Threat hunting is BEST described as:",
    ["Proactively searching for undetected threats based on hypotheses and threat intelligence",
     "Waiting for alerts to arrive",
     "Running antivirus scans weekly",
     "Writing security policies"],
    "Hunting assumes compromise may already exist and looks for indicators that automated tools missed.");
  Q("Logging and Monitoring", 2,
    "Monitoring outbound traffic to detect data exfiltration is known as:",
    ["Egress monitoring", "Ingress filtering", "Port knocking", "Load balancing"],
    "Egress monitoring uses DLP, proxy logs, NetFlow and DNS analysis to detect unusual outbound data flows.");
  Q("Logging and Monitoring", 2,
    "Which of the following is an indicator of compromise (IOC)?",
    ["A known malicious file hash found on an endpoint", "A new employee's first login", "A scheduled backup", "A software license renewal"],
    "IOCs include malicious hashes, IP addresses, domains and registry keys associated with attacks.");
  Q("Logging and Monitoring", 3,
    "Which threat intelligence standard defines a structured format for sharing cyber threat information, often transported with TAXII?",
    ["STIX", "SAML", "SNMP", "SCIM"],
    "STIX describes threat data such as indicators and campaigns; TAXII is the transport protocol.");
  Q("Logging and Monitoring", 2,
    "Endpoint detection and response (EDR) tools provide:",
    ["Continuous endpoint telemetry, detection of suspicious behavior and response actions such as isolation",
     "Only signature-based virus scanning",
     "Network routing",
     "Physical access control"],
    "EDR (and XDR across multiple sources) enables investigation and containment at the host level.");
  Q("Logging and Monitoring", 3,
    "Which type of threat intelligence is MOST useful for executives making strategic decisions?",
    ["Strategic intelligence about threat trends, actors' motivations and business risk",
     "Raw IP address blocklists",
     "Malware hashes",
     "Packet captures"],
    "Strategic intelligence is high-level. Operational and tactical intelligence support SOC teams with TTPs and IOCs.");
  Q("Logging and Monitoring", 2,
    "Continuous monitoring is important because:",
    ["Threats and configurations change constantly, so point-in-time assessments quickly become outdated",
     "It replaces incident response",
     "It eliminates the need for logs",
     "Auditors forbid periodic reviews"],
    "Continuous monitoring provides near real-time awareness of security posture.");

  // ---------- Foundational security operations concepts ----------
  Q("Security Operations Concepts", 2,
    "Two-person integrity for opening a vault containing cryptographic material is an example of:",
    ["Dual control", "Job rotation", "Mandatory vacation", "Least functionality"],
    "Dual control requires two authorized people to be present to perform a sensitive action.");
  Q("Security Operations Concepts", 2,
    "Which practice helps detect fraud by requiring someone else to perform an employee's duties periodically?",
    ["Job rotation and mandatory vacations", "Least privilege", "Need to know", "Defense in depth"],
    "When another person takes over, irregularities are more likely to be discovered.");
  Q("Security Operations Concepts", 2,
    "A service level agreement (SLA) with a managed security provider should define:",
    ["Measurable service expectations such as response times, availability and penalties",
     "The provider's employee salaries",
     "The customer's marketing strategy",
     "Only the provider's logo usage"],
    "SLAs set clear expectations and remedies. Operational level agreements (OLAs) define internal team commitments.");
  Q("Security Operations Concepts", 2,
    "Monitoring privileged account activity is important because:",
    ["Privileged users can bypass controls and cause significant damage if accounts are misused or compromised",
     "Privileged accounts never have passwords",
     "Regular users cannot be monitored",
     "Privileged activity is always legitimate"],
    "Privileged accounts are top targets for attackers and potential insider abuse.");
  Q("Security Operations Concepts", 3,
    "Information lifecycle management in security operations ensures that:",
    ["Data is protected appropriately from creation to secure disposal", "Data is never deleted", "All data is public", "Only backups are protected"],
    "Operations teams apply handling, retention and destruction requirements throughout the lifecycle.");

  // ---------- Configuration and change management ----------
  Q("Configuration Management", 2,
    "What is the PRIMARY purpose of change management?",
    ["Ensure changes are reviewed, approved, tested and documented to avoid unintended outages and security issues",
     "Prevent all changes",
     "Speed up changes by skipping testing",
     "Allow developers to deploy directly to production at will"],
    "Change management reduces risk and provides an audit trail.");
  Q("Configuration Management", 2,
    "Which step should occur BEFORE a change is implemented in production?",
    ["Testing and approval, including a rollback plan", "Closing the change ticket", "Post-implementation review", "Updating the CMDB after the fact only"],
    "Change requests are evaluated by a change advisory board (CAB), tested, scheduled and accompanied by back-out plans.");
  Q("Configuration Management", 2,
    "An emergency patch must be applied immediately to stop an active attack. How should change management handle it?",
    ["Use an emergency change process with expedited approval and document it afterward",
     "Skip all documentation permanently",
     "Wait for the monthly CAB meeting",
     "Refuse the change"],
    "Emergency changes still need authorization and documentation, even if formal review happens retroactively.");
  Q("Configuration Management", 2,
    "A baseline configuration is:",
    ["An approved, documented configuration used as a reference for builds and audits",
     "The default vendor configuration",
     "A list of users",
     "A backup schedule"],
    "Baselines support consistent hardening and drift detection.");
  Q("Configuration Management", 3,
    "Infrastructure as code (IaC) improves configuration management by:",
    ["Defining infrastructure in version-controlled templates that can be reviewed, tested and reproduced",
     "Removing all need for change control",
     "Eliminating the need for security reviews",
     "Requiring manual server builds"],
    "IaC enables peer review, automated policy checks and rapid rebuilds, though templates themselves must be secured.");

  // ---------- Patch and vulnerability management ----------
  Q("Patch Management", 2,
    "What is the BEST practice before deploying a patch to all production systems?",
    ["Test the patch in a representative environment and deploy in stages",
     "Deploy immediately everywhere without testing",
     "Never apply patches",
     "Wait until a breach occurs"],
    "Testing reduces the risk of patches breaking critical applications. Critical exploited vulnerabilities may justify faster deployment.");
  Q("Patch Management", 2,
    "A zero-day vulnerability is one that:",
    ["Is unknown to the vendor or has no patch available", "Was patched on the first day", "Affects zero systems", "Is only theoretical"],
    "Defenses against zero-days rely on layered controls, behavioral detection and rapid response.");
  Q("Patch Management", 3,
    "A critical system cannot be patched because the vendor no longer supports it. Which approach is BEST?",
    ["Apply compensating controls such as isolation and monitoring, document the risk, and plan replacement",
     "Ignore the issue",
     "Disable all logging",
     "Connect it directly to the internet"],
    "Risk acceptance must be formal and temporary, with mitigation until the system is replaced.");
  Q("Patch Management", 2,
    "Which source helps prioritize vulnerabilities that attackers are actively exploiting?",
    ["CISA's Known Exploited Vulnerabilities (KEV) catalog", "The vendor's marketing brochure", "The office floor plan", "The password policy"],
    "KEV lists vulnerabilities with confirmed exploitation, a strong signal for urgent remediation.");

  // ---------- Incident management ----------
  Q("Incident Management", 2,
    "According to NIST SP 800-61, what is the FIRST phase of the incident response lifecycle?",
    ["Preparation", "Detection and analysis", "Containment", "Post-incident activity"],
    "Preparation (plans, tools, training) comes before incidents occur. Then detection and analysis; containment, eradication and recovery; and post-incident activity.");
  Q("Incident Management", 2,
    "In the incident response process commonly taught for CISSP, which step comes immediately after detection?",
    ["Response", "Recovery", "Lessons learned", "Remediation"],
    "A common sequence is detection, response, mitigation, reporting, recovery, remediation and lessons learned.");
  Q("Incident Management", 2,
    "What is the PRIMARY goal of containment?",
    ["Limit the scope and damage of the incident", "Identify the attacker's name", "Restore from backup immediately", "Write the final report"],
    "Containment stops the spread, for example by isolating hosts or disabling compromised accounts, while preserving evidence.");
  Q("Incident Management", 2,
    "Which activity is part of eradication?",
    ["Removing malware and closing the vulnerability that was exploited", "Disconnecting the network cable", "Notifying customers", "Holding the lessons learned meeting"],
    "Eradication eliminates the root cause and attacker artifacts so systems can be safely restored.");
  Q("Incident Management", 2,
    "What is the PRIMARY purpose of the lessons learned phase?",
    ["Improve future response and prevent recurrence", "Assign blame to individuals", "Delete incident records", "Close tickets quickly"],
    "Post-incident reviews update plans, controls and training. They should be blameless and fact-based.");
  Q("Incident Management", 2,
    "An event differs from an incident in that:",
    ["An event is any observable occurrence; an incident is an event that negatively affects or threatens security",
     "They are the same",
     "Incidents are always harmless",
     "Events only occur on firewalls"],
    "Most events are benign. Triage identifies which events are incidents.");
  Q("Incident Management", 3,
    "A ransomware outbreak is spreading through file shares. What should the incident response team do FIRST?",
    ["Contain the spread by isolating affected systems and network segments",
     "Pay the ransom",
     "Wipe all servers immediately without investigation",
     "Wait for the weekly team meeting"],
    "Rapid containment limits damage. Evidence preservation, eradication and recovery from clean backups follow.");
  Q("Incident Management", 2,
    "Who should typically communicate with the media during a major security incident?",
    ["A designated spokesperson following the communication plan", "Any employee who is asked", "The IT technician handling the incident", "Nobody, under any circumstances"],
    "Controlled communication prevents misinformation and legal exposure.");
  Q("Incident Management", 3,
    "Which incident response metric measures how long attackers were present before being discovered?",
    ["Dwell time", "Mean time between failures", "Recovery point objective", "Annualized rate of occurrence"],
    "Reducing dwell time limits the damage attackers can do.");
  Q("Incident Management", 2,
    "What is a computer security incident response team (CSIRT)?",
    ["A designated group responsible for handling security incidents", "A help desk queue", "A software testing team", "A marketing department"],
    "CSIRTs include technical, legal, HR, communications and management representatives as needed.");
  Q("Incident Management", 3,
    "An incident involves personal data of EU residents. Which consideration is MOST time-sensitive?",
    ["Regulatory notification deadlines such as the GDPR's 72-hour requirement",
     "Updating the website design",
     "Ordering new hardware",
     "Scheduling annual training"],
    "Legal and regulatory reporting obligations must be built into the incident response plan.");
  Q("Incident Management", 2,
    "Which document defines steps to handle a specific type of incident, such as phishing or ransomware?",
    ["A playbook (runbook)", "A privacy notice", "A business impact analysis", "A purchase order"],
    "Playbooks provide consistent, repeatable procedures and can be automated with SOAR.");

  // ---------- Detective and preventive measures ----------
  Q("Preventive and Detective Measures", 2,
    "Application allow listing (whitelisting) prevents malware by:",
    ["Allowing only approved applications to run", "Blocking only known malware signatures", "Encrypting files", "Monitoring network traffic"],
    "Allow listing is very effective against unknown malware but requires maintenance as software changes.");
  Q("Preventive and Detective Measures", 2,
    "Sandboxing suspicious email attachments helps by:",
    ["Executing them in an isolated environment to observe malicious behavior before delivery",
     "Encrypting them",
     "Deleting all attachments",
     "Sending them to all users"],
    "Sandboxes detect zero-day malware through behavior rather than signatures.");
  Q("Preventive and Detective Measures", 2,
    "A honeynet is:",
    ["A network of decoy systems designed to attract and study attackers", "A wireless mesh network", "A load-balanced web farm", "A backup network"],
    "Honeynets gather intelligence and provide early warning. They must be isolated from production.");
  Q("Preventive and Detective Measures", 3,
    "Which statement about using honeypots is MOST accurate legally?",
    ["Enticement (making a target available) is generally acceptable, while entrapment (inducing someone to commit a crime) is not",
     "Honeypots are illegal everywhere",
     "Entrapment is always acceptable",
     "Honeypots require attacker consent"],
    "Legal counsel should review honeypot use, especially if evidence may be used in prosecution.");
  Q("Preventive and Detective Measures", 2,
    "Which anti-malware approach can detect previously unseen malware by analyzing behavior?",
    ["Heuristic and behavioral analysis", "Signature matching only", "File name filtering", "Port blocking"],
    "Machine learning and behavior-based techniques complement signatures.");
  Q("Preventive and Detective Measures", 2,
    "Which control BEST prevents users from running malware from removable media?",
    ["Disable autorun and enforce device control and application allow listing", "Increase screen brightness", "Use larger USB drives", "Disable firewalls"],
    "Layered endpoint controls reduce removable media risks.");

  // ---------- Recovery strategies ----------
  Q("Backup Strategies", 2,
    "Which backup type copies all files changed since the last FULL backup and does not reset the archive bit?",
    ["Differential", "Incremental", "Full", "Copy"],
    "Restoring requires the last full plus the latest differential. Differentials grow each day until the next full backup.");
  Q("Backup Strategies", 2,
    "Which backup type copies only files changed since the last backup of any kind and clears the archive bit?",
    ["Incremental", "Differential", "Full", "Mirror"],
    "Incrementals are fast to create, but restoring requires the last full plus every incremental since.");
  Q("Backup Strategies", 3,
    "A company does a full backup on Sunday and differential backups Monday through Saturday. A failure occurs Thursday morning. Which backups are needed to restore?",
    ["Sunday's full and Wednesday's differential", "Sunday's full and every differential from Monday to Wednesday", "Only Wednesday's differential", "Only Sunday's full"],
    "Each differential contains all changes since the last full backup.");
  Q("Backup Strategies", 3,
    "A company does a full backup on Sunday and incremental backups Monday through Saturday. A failure occurs Thursday morning. Which backups are needed?",
    ["Sunday's full plus Monday's, Tuesday's and Wednesday's incrementals", "Sunday's full and Wednesday's incremental only", "Wednesday's incremental only", "Sunday's full only"],
    "Each incremental contains only changes since the previous backup, so all are needed in order.");
  Q("Backup Strategies", 2,
    "The 3-2-1 backup rule recommends:",
    ["Three copies of data, on two different media types, with one copy offsite",
     "Three backups per day, two per week, one per month",
     "Three administrators, two passwords, one key",
     "Three servers, two sites, one cloud"],
    "Many organizations extend it to 3-2-1-1-0: one immutable or offline copy and zero errors after verification.");
  Q("Backup Strategies", 2,
    "Why are immutable or offline backups important against ransomware?",
    ["Attackers cannot encrypt or delete backups they cannot modify or reach", "They are cheaper", "They restore faster than any other backup", "They require no testing"],
    "Ransomware operators target backups to force payment.");

  Q("Recovery Sites", 2,
    "Which recovery site is fully equipped with hardware, software and near-current data, enabling recovery within hours?",
    ["Hot site", "Warm site", "Cold site", "Mobile site"],
    "Hot sites are expensive but provide the fastest recovery.");
  Q("Recovery Sites", 2,
    "A cold site provides:",
    ["Basic facilities such as space, power and cooling, but little or no equipment", "Fully mirrored systems", "Real-time data replication", "Staff ready to work immediately"],
    "Cold sites are cheapest but take the longest (often weeks) to bring online.");
  Q("Recovery Sites", 2,
    "A warm site typically has:",
    ["Equipment and connectivity in place, but data must be restored before operations resume",
     "Nothing but an empty room",
     "Fully synchronized real-time data",
     "No power or cooling"],
    "Warm sites balance cost and recovery time, often recovering in days.");
  Q("Recovery Sites", 3,
    "What is the MAIN drawback of a reciprocal (mutual assistance) agreement with another company?",
    ["It is hard to enforce, and the partner may lack capacity or be affected by the same disaster",
     "It is the most expensive option",
     "It requires a hot site",
     "It eliminates confidentiality concerns"],
    "Reciprocal agreements are cheap but unreliable, and they raise confidentiality and compatibility issues.");
  Q("Recovery Sites", 2,
    "Why should an alternate recovery site be geographically distant from the primary site?",
    ["So a regional disaster does not affect both sites", "To reduce latency", "To lower rent", "To simplify staff commutes"],
    "Distance protects against shared risks such as earthquakes, floods and power grid failures.");

  Q("Resilience", 2,
    "RAID 1 provides fault tolerance through:",
    ["Disk mirroring", "Striping without parity", "Striping with parity", "Tape rotation"],
    "RAID 0 stripes (no fault tolerance), RAID 1 mirrors, RAID 5 stripes with distributed parity (survives one disk failure), and RAID 6 survives two.");
  Q("Resilience", 2,
    "Which RAID level provides NO fault tolerance?",
    ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
    "RAID 0 improves performance by striping, but a single disk failure loses all data.");
  Q("Resilience", 2,
    "Mean time between failures (MTBF) measures:",
    ["The expected operating time between failures of a component", "The time to repair a component", "The time to restore data", "The maximum tolerable downtime"],
    "MTBF indicates reliability. MTTR (mean time to repair) indicates how quickly service is restored.");
  Q("Resilience", 2,
    "A cluster of servers where another node automatically takes over if one fails provides:",
    ["High availability through failover", "Data classification", "Encryption", "Data minimization"],
    "Clustering and load balancing remove single points of failure.");
  Q("Resilience", 3,
    "Which strategy BEST supports availability for a globally used web application?",
    ["Active-active deployment across multiple regions with load balancing and data replication",
     "A single server in one data center",
     "Weekly tape backups only",
     "Manual failover documented on paper"],
    "Multi-region active-active designs survive regional failures with minimal disruption.");

  // ---------- DR process ----------
  Q("Disaster Recovery", 2,
    "During a disaster, what should be restored FIRST at the recovery site?",
    ["The most critical business functions as prioritized by the BIA", "The least critical systems to test the process", "Systems in alphabetical order", "Email for all users"],
    "Recovery priorities come from the BIA and RTOs.");
  Q("Disaster Recovery", 3,
    "When returning operations from the alternate site to the primary site, which functions should be moved back FIRST?",
    ["The least critical functions", "The most critical functions", "All functions at the same time", "Only the network"],
    "Moving less critical functions first verifies the primary site is stable before critical operations return.");
  Q("Disaster Recovery", 2,
    "Who should have authority to declare a disaster and activate the DR plan?",
    ["Designated senior personnel defined in the plan", "Any employee", "The external auditor", "The ISP"],
    "Clear declaration authority avoids delays and confusion.");
  Q("Disaster Recovery", 2,
    "Which item is MOST important to include in a DR communication plan?",
    ["Up-to-date contact lists and alternate communication methods", "Company history", "Marketing slogans", "Office decoration plans"],
    "Normal communication systems may be unavailable during a disaster.");

  // ---------- Physical security operations ----------
  Q("Physical Security Operations", 2,
    "Which control provides both deterrence and the ability to make judgment-based decisions?",
    ["Security guards", "CCTV cameras", "Motion sensors", "Locks"],
    "Guards can respond to unusual situations, but they are costly and subject to human error.");
  Q("Physical Security Operations", 2,
    "Guard dogs are effective for perimeter security but have which limitation?",
    ["They cannot distinguish authorized from unauthorized people and create liability concerns",
     "They are invisible to intruders",
     "They can verify badges",
     "They are cheaper than locks"],
    "Dogs deter and detect but require handlers and carry legal risk.");
  Q("Physical Security Operations", 2,
    "What is the PRIMARY purpose of security lighting?",
    ["Deter intruders and support surveillance", "Reduce electricity costs", "Improve aesthetics", "Replace cameras"],
    "Lighting removes hiding places and enables guards and cameras to see.");
  Q("Physical Security Operations", 3,
    "Which practice BEST ensures that physical access logs are useful?",
    ["Regularly reviewing logs and correlating them with logical access and HR data",
     "Storing logs without review",
     "Deleting logs weekly",
     "Allowing anyone to edit logs"],
    "Correlation can reveal anomalies, such as a user logging in remotely while badged into the building.");

  // ---------- Personnel safety ----------
  Q("Personnel Safety", 2,
    "A duress code allows an employee to:",
    ["Signal that they are being forced to act against their will without alerting the attacker",
     "Reset their password",
     "Open all doors",
     "Disable alarms permanently"],
    "Duress systems (codes, alternate PINs) silently alert security.");
  Q("Personnel Safety", 2,
    "Which travel security practice is BEST for employees visiting high-risk countries?",
    ["Use loaner devices with minimal data and assume they may be inspected or compromised",
     "Bring all corporate data on a personal laptop",
     "Disable encryption to avoid customs issues in every case",
     "Use public Wi-Fi without a VPN"],
    "Clean devices limit exposure. Some countries restrict encryption, so legal guidance is needed.");
  Q("Personnel Safety", 2,
    "In any emergency plan, what is the top priority?",
    ["Human life and safety", "Data integrity", "System availability", "Protecting equipment"],
    "People always come first.");
  Q("Personnel Safety", 2,
    "Which activity BEST prepares employees to respond safely to a fire?",
    ["Regular evacuation drills with designated assembly points and floor wardens", "Reading the policy once", "Posting a single sign", "Disabling alarms during drills"],
    "Drills build familiarity and identify problems with routes and procedures.");

  // ---------- Additional mixed ----------
  Q("Incident Management", 3,
    "Which is the BEST reason to preserve evidence even when the organization does not plan to prosecute?",
    ["Circumstances may change, and evidence supports root cause analysis, insurance and legal defense",
     "It is never useful",
     "Evidence speeds up recovery",
     "It increases storage costs"],
    "Decisions about legal action often come later. Destroyed evidence cannot be recovered.");
  Q("Logging and Monitoring", 2,
    "Which practice protects the integrity of collected logs?",
    ["Forwarding logs to a centralized, access-controlled, write-once store with hashing", "Keeping logs only on the source system", "Letting administrators edit logs", "Disabling log rotation"],
    "Central, tamper-evident storage preserves log integrity and availability.");
  Q("Configuration Management", 2,
    "Unauthorized software is discovered on several servers. Which process failed?",
    ["Configuration and change management", "Business impact analysis", "Data classification", "Awareness training"],
    "Configuration monitoring and change control should prevent and detect unauthorized changes.");
  Q("Security Operations Concepts", 2,
    "Which practice limits the damage a single compromised administrator account can cause?",
    ["Least privilege with role separation and just-in-time elevation", "Shared administrator accounts", "Granting all admins domain-wide rights", "Disabling MFA"],
    "Limiting scope of privileges contains breaches.");
  Q("Incident Management", 2,
    "A user reports a suspicious email. The SOC determines it was a phishing attempt and nobody clicked. How should this be classified?",
    ["A security event or attempted incident to log and use for awareness, possibly blocking the sender",
     "A major breach requiring regulator notification",
     "Not worth recording",
     "A disaster requiring DR activation"],
    "Even unsuccessful attempts provide intelligence and should be tracked.");
  Q("Disaster Recovery", 3,
    "Which factor MOST influences the choice between a hot, warm or cold site?",
    ["The RTO and MTD of critical functions balanced against cost", "The color of the building", "The number of employees' parking spaces", "The CEO's preference"],
    "Short RTOs require hot sites or active-active designs; longer RTOs allow cheaper options.");
  Q("Backup Strategies", 2,
    "What is the PRIMARY purpose of storing backups offsite?",
    ["Protect against loss of the primary site", "Speed up restores", "Reduce encryption needs", "Simplify licensing"],
    "Offsite or cloud backups ensure recoverability after site-level disasters.");
  Q("Patch Management", 2,
    "Which metric BEST indicates patch management effectiveness?",
    ["Percentage of systems patched within the SLA for each severity", "Number of patches released by vendors", "Size of patch files", "Number of reboots"],
    "SLA compliance shows whether exposure windows are controlled.");
  Q("Preventive and Detective Measures", 3,
    "Which technique uses machine learning to establish normal network behavior and alert on deviations such as unusual data volumes at odd hours?",
    ["Network detection and response (NDR) with anomaly detection", "Static code analysis", "Tokenization", "Degaussing"],
    "NDR tools analyze traffic patterns to detect lateral movement and exfiltration.");
  Q("Digital Forensics", 2,
    "Why should investigators document every action taken during evidence collection?",
    ["To support the chain of custody and demonstrate that evidence was handled properly", "To slow down the investigation", "Because documentation replaces hashing", "To share it on social media"],
    "Detailed notes support admissibility and allow others to reproduce findings.");
  Q("Incident Management", 2,
    "Which team member is MOST important to involve when an incident may involve an employee's misconduct?",
    ["Human resources and legal counsel", "The marketing team", "The facilities manager", "External customers"],
    "HR and legal ensure employee rights and policies are respected and evidence is handled appropriately.");
  Q("Resilience", 2,
    "Which practice ensures that a recovery site can actually support operations?",
    ["Regular testing of failover and restoration procedures", "Signing the contract", "Visiting once during setup", "Assuming the vendor is ready"],
    "Testing reveals capacity, compatibility and process gaps.");
  Q("Configuration Management", 3,
    "Which practice reduces the attack surface of servers by removing unnecessary services, accounts and software?",
    ["System hardening", "Data classification", "Job rotation", "Tokenization"],
    "Hardening applies secure baselines and disables unused features.");
  Q("Logging and Monitoring", 2,
    "A security operations center (SOC) primarily:",
    ["Monitors, detects, analyzes and responds to security events continuously", "Develops software", "Manages payroll", "Designs office layouts"],
    "SOCs operate around the clock or with defined coverage to handle security monitoring and response.");
  Q("Incident Management", 3,
    "After recovering from an incident, monitoring of affected systems should be increased because:",
    ["Attackers may attempt to return using persistence or other access paths",
     "Systems run faster after incidents",
     "Monitoring is no longer needed",
     "Regulations forbid monitoring before incidents"],
    "Heightened monitoring validates that eradication was complete.");
  Q("Security Operations Concepts", 2,
    "Which control ensures employees acknowledge security responsibilities annually?",
    ["Signed acknowledgment of policies such as the acceptable use policy", "Badge photos", "Parking permits", "Desk assignments"],
    "Annual acknowledgment reinforces expectations and supports enforcement.");
  Q("Backup Strategies", 2,
    "What is the PRIMARY difference between backup and replication?",
    ["Replication copies changes immediately (including corruption or deletion); backups provide point-in-time copies for recovery",
     "They are the same",
     "Backups are always real-time",
     "Replication is only for paper records"],
    "Replication supports availability but does not protect against logical corruption or ransomware without versioning.");
  Q("Digital Forensics", 2,
    "Which practice helps an organization be ready for forensic investigations before incidents occur?",
    ["Forensic readiness: centralized logging, retention, time sync and trained staff with tools",
     "Waiting until an incident to decide what to log",
     "Deleting logs to save space",
     "Relying solely on the vendor"],
    "Forensic readiness reduces investigation costs and improves the quality of evidence.");
  Q("Incident Management", 2,
    "Which tabletop exercise outcome is MOST valuable for an incident response team?",
    ["Identifying gaps in roles, communications and procedures before a real incident", "Confirming the plan is perfect", "Avoiding any discussion of failures", "Testing the fire alarm"],
    "Exercises surface weaknesses safely so they can be fixed.");
  Q("Recovery Sites", 3,
    "Which cloud-based recovery option replicates workloads to a provider that can spin them up on demand?",
    ["Disaster recovery as a service (DRaaS)", "A cold site", "A reciprocal agreement", "Tape vaulting only"],
    "DRaaS can offer hot-site-like recovery times at lower cost, but contracts must address capacity, security and testing.");
  Q("Security Operations Concepts", 3,
    "An operator needs to restore a file for a user but must not be able to read sensitive file contents. Which concept supports this?",
    ["Separation of backup/restore privileges from data access, often using encrypted backups",
     "Granting the operator full data owner rights",
     "Sharing the user's password",
     "Disabling encryption"],
    "Operators can perform their function without unnecessary access to the data's content, supporting least privilege.");

  window.CISSP = window.CISSP || { questions: {}, flashcards: {} };
  CISSP.questions[7] = qs;

  // ---------- Flashcards ----------
  const cards = [];
  const F = (t, f, b) => cards.push({ id: "d7-c" + String(cards.length + 1).padStart(3, "0"), t, f, b });

  F("Digital Forensics", "Order of volatility", "Registers and cache, routing and ARP tables, RAM, temp files, disk, remote logs, archival media.");
  F("Digital Forensics", "Forensic imaging", "Bit-for-bit copy with a write blocker; verify with hashes; analyze the copy.");
  F("Digital Forensics", "Chain of custody", "Documented who, what, when, where and why for every evidence transfer.");
  F("Digital Forensics", "Admissible evidence", "Relevant, material, competent (legally obtained and reliable).");
  F("Digital Forensics", "Evidence types", "Real (physical), documentary (records), testimonial (witness), demonstrative (charts, models).");
  F("Digital Forensics", "Best evidence rule", "Present originals rather than copies when possible.");
  F("Digital Forensics", "Parol evidence rule", "A written contract is presumed to be the complete agreement.");
  F("Digital Forensics", "Hearsay", "Second-hand evidence; business records may qualify under exceptions.");
  F("Digital Forensics", "Locard's exchange principle", "Every contact leaves a trace.");
  F("Digital Forensics", "EDRM", "E-discovery stages: identify, preserve, collect, process, review, analyze, produce, present.");
  F("Logging and Monitoring", "SIEM vs SOAR", "SIEM: collect and correlate. SOAR: automate response with playbooks.");
  F("Logging and Monitoring", "UEBA", "Behavioral baselines to detect anomalies and insider threats.");
  F("Logging and Monitoring", "Threat hunting", "Proactive, hypothesis-driven search for undetected threats.");
  F("Logging and Monitoring", "IOC vs IOA", "IOC: artifact of compromise (hash, IP). IOA: behavior indicating an attack in progress.");
  F("Logging and Monitoring", "STIX / TAXII", "STIX: threat intel format. TAXII: transport protocol.");
  F("Logging and Monitoring", "Threat intelligence levels", "Strategic (executives), operational (campaigns), tactical (TTPs and IOCs).");
  F("Logging and Monitoring", "EDR / XDR / NDR", "EDR: endpoint telemetry and response. XDR: extended across sources. NDR: network detection.");
  F("Logging and Monitoring", "Egress monitoring", "Watching outbound traffic for exfiltration (DLP, proxy, DNS, NetFlow).");
  F("Security Operations Concepts", "Dual control vs split knowledge", "Dual control: two people present. Split knowledge: each holds part of the secret.");
  F("Security Operations Concepts", "SLA vs OLA", "SLA: commitments to customers or with providers. OLA: internal team commitments.");
  F("Configuration Management", "Change management steps", "Request, review/CAB approval, test, schedule, implement with rollback plan, document, post-review.");
  F("Configuration Management", "Emergency change", "Expedited approval, documented and reviewed afterward.");
  F("Configuration Management", "Hardening", "Remove unnecessary services, accounts and software; apply secure baselines.");
  F("Configuration Management", "Infrastructure as code", "Version-controlled, reviewable, reproducible infrastructure definitions.");
  F("Patch Management", "Patch process", "Identify, evaluate, test, approve, deploy in stages, verify.");
  F("Patch Management", "Zero-day", "Vulnerability with no available patch or unknown to the vendor.");
  F("Patch Management", "CISA KEV", "Catalog of vulnerabilities known to be exploited; prioritize these.");
  F("Incident Management", "NIST SP 800-61 phases", "Preparation; detection and analysis; containment, eradication and recovery; post-incident activity.");
  F("Incident Management", "CISSP incident steps", "Detection, response, mitigation, reporting, recovery, remediation, lessons learned.");
  F("Incident Management", "Event vs incident", "Event: any observable occurrence. Incident: an event that harms or threatens security.");
  F("Incident Management", "Containment", "Limit spread and damage (isolate hosts, disable accounts) while preserving evidence.");
  F("Incident Management", "Eradication", "Remove malware and fix the root cause.");
  F("Incident Management", "Lessons learned", "Blameless review to improve plans and controls.");
  F("Incident Management", "Dwell time", "Time an attacker is present before detection.");
  F("Incident Management", "Playbook", "Step-by-step procedure for a specific incident type.");
  F("Preventive and Detective Measures", "Allow listing", "Only approved applications run; strong against unknown malware.");
  F("Preventive and Detective Measures", "Sandboxing", "Run suspicious code in isolation to observe behavior.");
  F("Preventive and Detective Measures", "Honeypot legal issue", "Enticement OK; entrapment not OK.");
  F("Backup Strategies", "Full backup", "All data; resets archive bit; slowest to create, simplest to restore.");
  F("Backup Strategies", "Incremental backup", "Changes since last backup; clears archive bit; restore = full + all incrementals.");
  F("Backup Strategies", "Differential backup", "Changes since last full; doesn't clear archive bit; restore = full + latest differential.");
  F("Backup Strategies", "3-2-1 rule", "3 copies, 2 media types, 1 offsite (plus 1 immutable or offline, 0 errors).");
  F("Backup Strategies", "Backup vs replication", "Replication copies changes instantly, including corruption. Backups give point-in-time recovery.");
  F("Recovery Sites", "Hot site", "Fully equipped with current data; recovery in hours; most expensive.");
  F("Recovery Sites", "Warm site", "Equipment in place, data must be restored; recovery in days.");
  F("Recovery Sites", "Cold site", "Space, power and cooling only; recovery in weeks; cheapest.");
  F("Recovery Sites", "Other site options", "Mobile site, reciprocal agreement (hard to enforce), cloud DR (DRaaS), redundant/mirrored site.");
  F("Resilience", "RAID levels", "0 striping (no fault tolerance), 1 mirroring, 5 striping with parity (1 disk), 6 dual parity (2 disks), 10 mirror plus stripe.");
  F("Resilience", "MTBF vs MTTR", "MTBF: time between failures (reliability). MTTR: time to repair.");
  F("Resilience", "High availability", "Clustering, load balancing, failover, redundancy, multi-region.");
  F("Disaster Recovery", "Recovery order", "Restore the most critical functions first at the alternate site.");
  F("Disaster Recovery", "Return to primary", "Move least critical functions back first to verify stability.");
  F("Physical Security Operations", "Guards vs cameras", "Guards use judgment and respond; cameras detect and record.");
  F("Personnel Safety", "Duress code", "Silent signal that a person is under coercion.");
  F("Personnel Safety", "Travel security", "Loaner devices, minimal data, VPN, assume inspection in high-risk locations.");
  F("Personnel Safety", "Top priority", "Human life and safety.");

  CISSP.flashcards[7] = cards;
})();
