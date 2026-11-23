// Domain 1: Security and Risk Management
// Original practice questions written against the CISSP exam outline topics.
// Format: Q(topic, difficulty 1-3, question, [correct, distractor, distractor, distractor], explanation)
// The correct option is listed first here; the app shuffles options at runtime.
// IDs are assigned by position, so append new questions at the end to keep saved progress stable.
(function () {
  const qs = [];
  const Q = (t, d, q, o, e) => qs.push({ id: "d1-" + String(qs.length + 1).padStart(3, "0"), t, d, q, o, a: 0, e });

  // ---------- Professional ethics ----------
  Q("Professional Ethics", 1,
    "Which of the following is the FIRST canon of the ISC2 Code of Ethics?",
    ["Protect society, the common good, necessary public trust and confidence, and the infrastructure",
     "Act honorably, honestly, justly, responsibly, and legally",
     "Provide diligent and competent service to principals",
     "Advance and protect the profession"],
    "The canons are applied in order of priority: (1) protect society and the infrastructure, (2) act honorably, honestly, justly, responsibly and legally, (3) provide diligent and competent service to principals, (4) advance and protect the profession.");
  Q("Professional Ethics", 2,
    "Your employer asks you to quietly disable logging on a system that processes public safety data so that a missed patch is not discovered by auditors. Based on the ISC2 Code of Ethics, what should guide your response?",
    ["Protecting society and public trust takes priority over service to your employer",
     "Service to principals takes priority because your employer pays you",
     "Advancing the profession requires avoiding conflict with management",
     "The Code of Ethics only applies to actions taken outside of employment"],
    "When canons conflict, they are applied in order. Protecting society, the common good and public trust (canon 1) and acting legally and honestly (canon 2) outrank providing service to principals (canon 3).");
  Q("Professional Ethics", 1,
    "A CISSP becomes aware that another certified member has knowingly violated the ISC2 Code of Ethics. What is the expected action?",
    ["File a formal ethics complaint with ISC2, supported by evidence",
     "Publicly post the details on social media to warn others",
     "Ignore it, because only ISC2 staff may raise complaints",
     "Confront the member privately and take no further action"],
    "Members who observe a breach of the Code are expected to report it through ISC2's formal ethics complaint process. Complaints must be made in writing and supported by evidence; public shaming is not the prescribed route.");
  Q("Professional Ethics", 2,
    "RFC 1087, 'Ethics and the Internet', considers which of the following activities unethical?",
    ["Wasting resources such as people, capacity, and computers through purposeful actions",
     "Using encryption to protect personal email",
     "Publishing vulnerability research after coordinated disclosure",
     "Monitoring your own organization's network with authorization"],
    "RFC 1087 (Internet Activities Board) lists as unethical: seeking unauthorized access, disrupting intended use of the Internet, wasting resources, destroying the integrity of computer-based information, and compromising user privacy.");
  Q("Professional Ethics", 2,
    "Which statement BEST describes the relationship between an organizational code of ethics and the ISC2 Code of Ethics for a certified professional?",
    ["The professional should follow both; the ISC2 Code applies as a condition of certification",
     "The organizational code always overrides the ISC2 Code",
     "The ISC2 Code only applies when working as an independent consultant",
     "The professional should pick whichever code is less restrictive"],
    "Certified members agree to uphold the ISC2 Code as a condition of certification, regardless of employer. Organizational codes apply as well; a good security professional complies with both and escalates genuine conflicts.");

  // ---------- Security concepts ----------
  Q("Security Concepts", 1,
    "A hospital's patient records are accessible but an attacker has altered several medication dosages. Which security principle has been violated?",
    ["Integrity", "Confidentiality", "Availability", "Non-repudiation"],
    "Integrity protects information from unauthorized or improper modification. The records are still available and may not have been disclosed, but their accuracy has been compromised.");
  Q("Security Concepts", 1,
    "A distributed denial-of-service attack primarily targets which element of the CIA triad?",
    ["Availability", "Confidentiality", "Integrity", "Authenticity"],
    "DDoS attacks aim to make systems or services unavailable to legitimate users by exhausting bandwidth, compute or application resources.");
  Q("Security Concepts", 2,
    "Which control MOST directly provides non-repudiation for an electronic purchase order?",
    ["A digital signature created with the sender's private key",
     "Symmetric encryption with a shared secret key",
     "A cyclic redundancy check (CRC) on the message",
     "Transport Layer Security between the two web servers"],
    "Non-repudiation requires proof that only the sender could have produced the message. A digital signature uses the sender's private key, which no one else holds. A shared symmetric key cannot prove which party created the message, and a CRC offers no authentication at all.");
  Q("Security Concepts", 2,
    "The DAD triad describes the opposite of the CIA triad. Which pairing is correct?",
    ["Disclosure is the opposite of confidentiality",
     "Destruction is the opposite of integrity",
     "Alteration is the opposite of availability",
     "Denial is the opposite of confidentiality"],
    "DAD = Disclosure (vs. confidentiality), Alteration (vs. integrity), and Destruction/Denial (vs. availability).");
  Q("Security Concepts", 1,
    "Verifying that a message genuinely came from the claimed source and has not been forged is BEST described as:",
    ["Authenticity", "Availability", "Confidentiality", "Accountability"],
    "Authenticity is the property of being genuine and verifiable, confirming the origin of data or the identity of a party. It is often listed alongside CIA and non-repudiation as a core security concept.");
  Q("Security Concepts", 2,
    "Which sequence correctly represents the steps a subject goes through to gain and be held responsible for access?",
    ["Identification, authentication, authorization, accounting",
     "Authentication, identification, accounting, authorization",
     "Authorization, identification, authentication, accounting",
     "Identification, authorization, authentication, accounting"],
    "A subject first claims an identity (identification), proves it (authentication), is granted permissions (authorization), and has actions recorded so they can be held responsible (accounting/auditing). This is often called IAAA.");
  Q("Security Concepts", 2,
    "Requiring two different employees to approve wire transfers over a threshold is an example of:",
    ["Separation of duties and dual control",
     "Least privilege",
     "Job rotation",
     "Need to know"],
    "Splitting a sensitive task so that one person cannot complete it alone is separation of duties; requiring two people together to authorize it is dual control. Both reduce fraud and error by requiring collusion.");
  Q("Security Concepts", 1,
    "Giving a user only the permissions required to perform their job, and nothing more, implements which principle?",
    ["Least privilege", "Defense in depth", "Separation of duties", "Fail secure"],
    "Least privilege limits each subject to the minimum access needed. Need to know is a related concept focused on access to specific information within a clearance level.");
  Q("Security Concepts", 2,
    "An organization protects its data center with fences, badge readers, firewalls, endpoint protection and encryption. This layered approach is called:",
    ["Defense in depth", "Security through obscurity", "Implicit deny", "Zero knowledge"],
    "Defense in depth (layering) uses multiple, diverse controls so that the failure of one control does not result in compromise.");
  Q("Security Concepts", 3,
    "A government analyst holds a Top Secret clearance but is denied access to a Top Secret file about a project unrelated to their work. Which principle is being enforced?",
    ["Need to know", "Least privilege", "Separation of duties", "Clearance reciprocity"],
    "Clearance establishes the maximum sensitivity level a person may access; need to know restricts access within that level to information required for assigned duties.");

  // ---------- Security governance ----------
  Q("Security Governance", 1,
    "Who holds ultimate responsibility for the security of an organization's information assets?",
    ["Senior management", "The CISO", "The security administrator", "Data custodians"],
    "Senior management (e.g., the board and executives) is ultimately accountable for security. They may delegate tasks to the CISO and staff, but they cannot delegate ultimate responsibility.");
  Q("Security Governance", 2,
    "What is the PRIMARY purpose of aligning the security function to business strategy, goals, mission and objectives?",
    ["To ensure security investments support and enable the organization's objectives",
     "To ensure the security team reports directly to the CIO",
     "To minimize the number of security controls deployed",
     "To guarantee compliance with every applicable regulation"],
    "Security exists to support the business. Alignment ensures that security priorities, budgets and controls enable the mission and are justified by business value and risk.");
  Q("Security Governance", 2,
    "Which planning horizon is a strategic security plan typically intended to cover?",
    ["Roughly three to five years", "One week", "One quarter", "Indefinitely without review"],
    "Strategic plans are long-term (about 3 to 5 years) and should be reviewed annually. Tactical plans cover about a year, and operational plans cover short-term, detailed activities.");
  Q("Security Governance", 2,
    "During a merger, which security concern should be addressed FIRST?",
    ["Understanding the acquired company's risks, controls and obligations through due diligence",
     "Immediately connecting both networks to speed integration",
     "Standardizing desktop wallpapers and branding",
     "Terminating the acquired company's security staff"],
    "Acquisitions and mergers bring inherited risk. Due diligence on the other organization's security posture, data, contracts and compliance obligations should precede integration, including network interconnection.");
  Q("Security Governance", 2,
    "Which role is responsible for classifying data and determining who may access it?",
    ["Data owner", "Data custodian", "Data processor", "End user"],
    "The data owner (typically a senior business manager) is accountable for the data, sets its classification and approves access. Custodians implement and maintain the protections the owner specifies.");
  Q("Security Governance", 1,
    "Which role performs day-to-day tasks such as backups, patching and implementing access controls as directed by the data owner?",
    ["Custodian", "Data owner", "Auditor", "Senior management"],
    "Custodians (often IT staff) are delegated the hands-on responsibility of protecting data according to the owner's requirements.");
  Q("Security Governance", 2,
    "What is the PRIMARY role of an auditor with respect to security controls?",
    ["Provide independent assurance that controls are designed and operating effectively",
     "Design and implement security controls",
     "Own and classify sensitive data",
     "Approve the organization's security budget"],
    "Auditors review and report on whether controls exist and work as intended. To remain independent, they should not design or operate the controls they assess.");
  Q("Security Governance", 2,
    "Which framework was developed specifically for IT governance and management, aligning IT goals with business goals?",
    ["COBIT", "ITIL", "ISO/IEC 27002", "OCTAVE"],
    "COBIT (ISACA) is a governance and management framework for enterprise IT. ITIL focuses on IT service management, ISO 27002 provides control guidance, and OCTAVE is a risk assessment method.");
  Q("Security Control Frameworks", 2,
    "An organization wants to become certified against an internationally recognized information security management system standard. Which should it choose?",
    ["ISO/IEC 27001", "ISO/IEC 27002", "NIST SP 800-53", "COBIT"],
    "ISO/IEC 27001 specifies requirements for an ISMS and is the standard organizations certify against. ISO/IEC 27002 provides supporting control guidance but is not certifiable itself.");
  Q("Security Control Frameworks", 2,
    "The NIST Cybersecurity Framework (CSF) 2.0 organizes outcomes into which set of functions?",
    ["Govern, Identify, Protect, Detect, Respond, Recover",
     "Plan, Do, Check, Act",
     "Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor",
     "Identify, Contain, Eradicate, Recover"],
    "CSF 2.0 (2024) added Govern to the original five functions: Identify, Protect, Detect, Respond and Recover. The seven steps listed in another option are from the NIST Risk Management Framework (SP 800-37).");
  Q("Security Control Frameworks", 3,
    "Which framework is designed for enterprise security architecture and derives security requirements from business requirements using a layered matrix of questions (what, why, how, who, where, when)?",
    ["SABSA", "PCI DSS", "NIST SP 800-30", "ITIL"],
    "SABSA (Sherwood Applied Business Security Architecture) is a business-driven, risk-based architecture framework modeled on the Zachman matrix.");
  Q("Security Control Frameworks", 2,
    "A company that stores, processes or transmits cardholder data must comply with which standard?",
    ["PCI DSS", "HIPAA", "SOX", "FISMA"],
    "The Payment Card Industry Data Security Standard is a contractual standard enforced by card brands for any entity that handles cardholder data.");

  // ---------- Due care / due diligence ----------
  Q("Due Care and Due Diligence", 2,
    "Which statement BEST distinguishes due diligence from due care?",
    ["Due diligence is investigating and understanding risks; due care is acting to address them",
     "Due care is research; due diligence is implementing controls",
     "They are synonyms used interchangeably by regulators",
     "Due diligence applies only to mergers; due care applies only to employees"],
    "Due diligence is the knowledge-gathering effort (assessments, research, planning). Due care is doing what a reasonable person would do, such as implementing and maintaining controls. A common mnemonic: diligence is 'do detect', care is 'do correct'.");
  Q("Due Care and Due Diligence", 2,
    "An organization failed to patch a well-known vulnerability for two years and suffered a breach. Plaintiffs argue the organization was negligent. Which concept is MOST relevant?",
    ["Failure to exercise due care, measured by the prudent person rule",
     "Separation of duties",
     "The principle of least privilege",
     "Data minimization"],
    "Negligence claims hinge on whether the organization exercised the care a reasonable, prudent person would in similar circumstances. Leaving a widely known flaw unpatched for years suggests a failure of due care.");
  Q("Due Care and Due Diligence", 1,
    "Performing a security assessment of a vendor before signing a contract is an example of:",
    ["Due diligence", "Due care", "Risk transference", "Job rotation"],
    "Researching and evaluating a vendor's risks before engaging them is due diligence. Enforcing contract security requirements once engaged is due care.");

  // ---------- Legal, regulatory, compliance ----------
  Q("Legal and Regulatory", 2,
    "Under the GDPR, an organization that determines the purposes and means of processing personal data is known as the:",
    ["Controller", "Processor", "Data subject", "Supervisory authority"],
    "The controller decides why and how personal data is processed. A processor processes data on behalf of the controller. The data subject is the individual the data is about.");
  Q("Legal and Regulatory", 2,
    "Under the GDPR, what is the maximum time a controller generally has to notify the supervisory authority after becoming aware of a personal data breach?",
    ["72 hours", "24 hours", "30 days", "There is no time limit"],
    "GDPR Article 33 requires notification without undue delay and, where feasible, within 72 hours of becoming aware of a breach likely to result in a risk to individuals' rights and freedoms.");
  Q("Legal and Regulatory", 2,
    "Which GDPR principle requires that organizations collect only the personal data necessary for a specified purpose?",
    ["Data minimization", "Storage limitation", "Accountability", "Lawfulness"],
    "Data minimization requires personal data to be adequate, relevant and limited to what is necessary. Storage limitation addresses how long data is kept.");
  Q("Legal and Regulatory", 3,
    "A European company wants to transfer customer personal data to a service provider in a country without an adequacy decision. Which mechanism is MOST commonly used to make this transfer lawful?",
    ["Standard Contractual Clauses (SCCs) approved by the European Commission",
     "A non-disclosure agreement with the provider",
     "Encrypting the data at rest only",
     "Posting a privacy notice on the website"],
    "For transfers to countries without adequacy, GDPR allows appropriate safeguards such as Standard Contractual Clauses or Binding Corporate Rules, typically supported by a transfer impact assessment.");
  Q("Legal and Regulatory", 2,
    "Which type of law governs disputes between individuals or organizations, such as breach of contract, where the remedy is usually financial?",
    ["Civil law", "Criminal law", "Administrative law", "Military law"],
    "Civil (tort and contract) law handles disputes between private parties, with remedies like damages. Criminal law involves the government prosecuting offenses against society, with penalties that can include imprisonment.");
  Q("Legal and Regulatory", 2,
    "Regulations published by government agencies, such as rules issued to implement a statute, are classified as:",
    ["Administrative law", "Criminal law", "Common law", "Religious law"],
    "Administrative (regulatory) law consists of rules created by executive agencies under authority granted by legislation, for example HHS rules implementing HIPAA.");
  Q("Legal and Regulatory", 2,
    "In the United States, which law establishes privacy and security requirements for protected health information held by covered entities and business associates?",
    ["HIPAA, as amended by HITECH", "Gramm-Leach-Bliley Act", "FERPA", "Sarbanes-Oxley Act"],
    "HIPAA and its Privacy and Security Rules govern PHI. The HITECH Act extended requirements to business associates and added breach notification obligations.");
  Q("Legal and Regulatory", 2,
    "Which U.S. law requires financial institutions to explain their information-sharing practices to customers and to safeguard sensitive data?",
    ["Gramm-Leach-Bliley Act (GLBA)", "HIPAA", "COPPA", "FISMA"],
    "GLBA's Financial Privacy Rule requires privacy notices, and its Safeguards Rule requires a security program to protect customer information.");
  Q("Legal and Regulatory", 2,
    "The Sarbanes-Oxley Act (SOX) primarily drives security controls related to:",
    ["The integrity and accuracy of financial reporting at public companies",
     "The privacy of children online",
     "Protecting student education records",
     "Securing federal government information systems"],
    "SOX, passed after major accounting scandals, requires public companies to maintain internal controls over financial reporting, which includes IT general controls over financial systems.");
  Q("Legal and Regulatory", 2,
    "A company invents a new manufacturing process and wants to protect it indefinitely without public disclosure. Which form of intellectual property protection is MOST appropriate?",
    ["Trade secret", "Patent", "Copyright", "Trademark"],
    "Trade secrets can last indefinitely as long as reasonable steps are taken to keep them secret (for example, NDAs and access controls). Patents require public disclosure and expire, typically after 20 years.");
  Q("Legal and Regulatory", 1,
    "A company's logo and product name are BEST protected by:",
    ["Trademark", "Patent", "Trade secret", "Copyright"],
    "Trademarks protect words, names, symbols and logos that identify the source of goods or services.");
  Q("Legal and Regulatory", 2,
    "Which form of intellectual property protects the expression of an idea, such as source code, but not the underlying idea itself?",
    ["Copyright", "Patent", "Trademark", "Trade secret"],
    "Copyright protects original works of authorship, including software code, from the moment of creation. It does not protect ideas, procedures or methods, which may be patentable.");
  Q("Legal and Regulatory", 2,
    "A software license that users accept by opening the product packaging is known as a:",
    ["Shrink-wrap license", "Click-through license", "Contractual license", "Cloud service agreement"],
    "Shrink-wrap licenses are accepted by breaking the seal on packaging. Click-through (click-wrap) licenses are accepted by clicking 'I agree' during installation or sign-up.");
  Q("Legal and Regulatory", 3,
    "A U.S. company wants to export strong encryption software to customers in several foreign countries. Which regulations should it review?",
    ["The Export Administration Regulations (EAR) and any applicable Wassenaar Arrangement controls",
     "The Digital Millennium Copyright Act",
     "The Family Educational Rights and Privacy Act",
     "The Computer Fraud and Abuse Act only"],
    "Encryption products are dual-use items controlled under the Commerce Department's EAR, which reflects commitments under the multilateral Wassenaar Arrangement. ITAR covers defense articles.");
  Q("Legal and Regulatory", 2,
    "Which U.S. law is the primary federal statute criminalizing unauthorized access to protected computers?",
    ["Computer Fraud and Abuse Act (CFAA)", "Electronic Communications Privacy Act", "Digital Millennium Copyright Act", "Privacy Act of 1974"],
    "The CFAA (1986, amended several times) makes it a crime to access a protected computer without authorization or to exceed authorized access.");
  Q("Legal and Regulatory", 3,
    "Data about EU residents is stored on servers in another country, and the data is subject to the laws of the country where it is physically located. This concept is called:",
    ["Data sovereignty", "Data minimization", "Data remanence", "Data classification"],
    "Data sovereignty (closely related to data localization) means data is subject to the laws of the jurisdiction in which it resides. This drives decisions about transborder data flow and cloud region selection.");
  Q("Privacy", 2,
    "Which of the following is the BEST example of personally identifiable information (PII)?",
    ["A full name combined with a date of birth",
     "The total number of employees in a company",
     "A company's public stock ticker symbol",
     "The average salary of a department"],
    "PII is information that can identify a specific individual, alone or in combination with other data. A name plus date of birth can uniquely identify a person; aggregate statistics generally cannot.");
  Q("Privacy", 3,
    "A privacy program wants to embed privacy protections into systems from the earliest design stage and make privacy the default setting. This approach is called:",
    ["Privacy by design", "Privacy shield", "Security through obscurity", "Data masking"],
    "Privacy by design (Ann Cavoukian's seven principles, codified in GDPR Article 25 as data protection by design and by default) builds privacy into systems proactively rather than adding it later.");
  Q("Privacy", 2,
    "When is a Data Protection Impact Assessment (DPIA) required under the GDPR?",
    ["When processing is likely to result in a high risk to the rights and freedoms of individuals",
     "Only after a data breach has occurred",
     "For every single database query",
     "Only when data is transferred outside the EU"],
    "GDPR Article 35 requires a DPIA before processing likely to result in high risk, such as large-scale processing of special-category data or systematic monitoring of public areas.");

  // ---------- Investigations ----------
  Q("Investigations", 2,
    "Which type of investigation typically requires the HIGHEST standard of proof?",
    ["Criminal", "Civil", "Administrative", "Regulatory"],
    "Criminal cases require proof beyond a reasonable doubt. Civil cases generally require a preponderance of the evidence. Administrative investigations are internal and have the lowest evidentiary bar.");
  Q("Investigations", 2,
    "An internal investigation into an employee's violation of the acceptable use policy, with no indication of a crime, is BEST classified as:",
    ["Administrative", "Criminal", "Civil", "Regulatory"],
    "Administrative (operational) investigations address internal policy issues. If evidence of a crime emerges, the investigation may need to be escalated and handled with stricter evidence procedures.");
  Q("Investigations", 3,
    "An industry body investigates whether a member organization violated a mandatory standard. Which investigation type is this?",
    ["Regulatory", "Administrative", "Criminal", "Industry-agnostic"],
    "Regulatory investigations are conducted by government agencies or industry bodies with authority to enforce rules and standards, and can result in fines or sanctions.");
  Q("Investigations", 2,
    "An investigator wants to ensure evidence will be admissible in court. Which practice is MOST important?",
    ["Maintaining a documented chain of custody",
     "Analyzing the original drive directly to save time",
     "Allowing the system owner to collect the evidence",
     "Deleting irrelevant files before imaging"],
    "A chain of custody documents who handled evidence, when, and what was done, demonstrating it was not altered. Investigators should work on verified forensic copies, not originals.");

  // ---------- Policies, standards, procedures, guidelines ----------
  Q("Security Policy", 1,
    "Which document is a high-level statement of management intent that defines the organization's security goals and assigns responsibilities?",
    ["Policy", "Procedure", "Guideline", "Baseline"],
    "Policies are high-level, mandatory statements of management intent. Standards and baselines specify required configurations or technologies, procedures give step-by-step instructions, and guidelines are recommendations.");
  Q("Security Policy", 1,
    "Step-by-step instructions for securely onboarding a new server are an example of a:",
    ["Procedure", "Policy", "Guideline", "Standard"],
    "Procedures are detailed, mandatory, step-by-step instructions for performing a specific task.");
  Q("Security Policy", 2,
    "Which type of document is NOT mandatory and offers recommended practices?",
    ["Guideline", "Standard", "Policy", "Baseline"],
    "Guidelines are discretionary recommendations. Policies, standards, baselines and procedures are compulsory.");
  Q("Security Policy", 2,
    "A document stating that 'all laptops must use AES-256 full-disk encryption' is BEST classified as a:",
    ["Standard", "Policy", "Guideline", "Procedure"],
    "Standards specify mandatory uses of particular technologies, configurations or methods that support a policy.");
  Q("Security Policy", 2,
    "A minimum security configuration that all Windows servers must meet, such as a CIS benchmark, is called a:",
    ["Baseline", "Guideline", "Policy", "Procedure"],
    "A baseline defines a minimum level of security that every system of a given type must meet. Organizations often tailor industry benchmarks into their baselines.");
  Q("Security Policy", 3,
    "Which statement about policy review is MOST accurate?",
    ["Policies should be reviewed periodically and when significant business, technology or regulatory changes occur",
     "Policies should never change once approved, to provide stability",
     "Policies should be rewritten by IT staff whenever a new tool is purchased",
     "Policies only need review after a breach"],
    "Policies must stay aligned with the business and the threat landscape. They are usually reviewed on a regular schedule (for example, annually) and when major changes occur, and changes require management approval.");

  // ---------- Business continuity ----------
  Q("Business Continuity", 1,
    "What is the FIRST step in developing a business continuity plan?",
    ["Project scope and planning, including gaining senior management support",
     "Testing the plan",
     "Purchasing a hot site",
     "Writing recovery procedures"],
    "BCP begins with project scope and planning: obtaining management support, defining scope, forming the BCP team and assessing resources. The business impact analysis follows.");
  Q("Business Continuity", 2,
    "What is the PRIMARY purpose of a business impact analysis (BIA)?",
    ["Identify critical business functions and the impact of their disruption over time",
     "Identify every vulnerability on the network",
     "Calculate the cost of insurance premiums",
     "Select the alternate processing site vendor"],
    "The BIA identifies critical processes and resources, quantifies operational and financial impacts of disruption, and establishes recovery priorities and targets such as MTD, RTO and RPO.");
  Q("Business Continuity", 2,
    "The longest time a business function can be unavailable before the organization suffers irreparable harm is the:",
    ["Maximum tolerable downtime (MTD)", "Recovery point objective (RPO)", "Mean time between failures (MTBF)", "Work recovery time (WRT)"],
    "MTD (also called maximum tolerable period of disruption) is the outer limit. The RTO must be set shorter than the MTD.");
  Q("Business Continuity", 2,
    "A company can tolerate losing at most 4 hours of transaction data. This value is the:",
    ["Recovery point objective (RPO)", "Recovery time objective (RTO)", "Maximum tolerable downtime (MTD)", "Service level agreement (SLA)"],
    "RPO measures acceptable data loss expressed as time; it drives backup and replication frequency. RTO is the target time to restore the function.");
  Q("Business Continuity", 3,
    "A function's MTD is 24 hours. The work recovery time (WRT) needed to verify data and resume operations is 6 hours. What is the MAXIMUM recovery time objective (RTO) the team can set for restoring the systems?",
    ["18 hours", "24 hours", "30 hours", "6 hours"],
    "RTO + WRT must not exceed MTD. With an MTD of 24 hours and a WRT of 6 hours, systems must be restored within 18 hours.");
  Q("Business Continuity", 2,
    "During a disaster, what should ALWAYS be the top priority of a business continuity or disaster recovery plan?",
    ["The safety of people", "Restoring the most profitable systems", "Protecting the data center hardware", "Notifying shareholders"],
    "Human life and safety always come first. Recovery of systems and processes follows.");
  Q("Business Continuity", 2,
    "Which statement BEST describes the relationship between BCP and DRP?",
    ["BCP keeps critical business functions running; DRP focuses on restoring IT systems and facilities",
     "They are the same plan with different names",
     "DRP is strategic, BCP is technical",
     "BCP only applies to natural disasters"],
    "Business continuity planning is broader and business-focused. Disaster recovery planning is a subset that addresses recovering technology and facilities after a disruption.");
  Q("Business Continuity", 3,
    "In the BCP process, which phase determines the specific strategies and resources that will be used to mitigate the risks identified in the BIA?",
    ["Continuity planning (strategy development and provisions)",
     "Project scope and planning",
     "Plan approval",
     "Training and awareness"],
    "After the BIA, continuity planning develops strategies, provisions and processes to protect critical functions. The plan is then approved, implemented, trained and maintained.");
  Q("Business Continuity", 2,
    "Who should formally approve the business continuity plan?",
    ["Senior management", "The IT help desk manager", "The external auditor", "The BCP team's most junior member"],
    "Senior management approval demonstrates commitment, authorizes resources and confirms that the plan supports business priorities.");
  Q("Business Continuity", 2,
    "Why should a BCP be reviewed and updated regularly?",
    ["Business processes, personnel, technology and threats change over time",
     "Regulators require a new plan every month",
     "Plans expire legally after one year",
     "To increase the number of pages in the plan"],
    "An outdated plan may reference systems, contacts or processes that no longer exist. Regular maintenance, plus updates after major changes and tests, keeps the plan usable.");

  // ---------- Personnel security ----------
  Q("Personnel Security", 1,
    "Which control is MOST effective at reducing the risk of hiring an individual with a history of fraud?",
    ["Pre-employment background checks", "Mandatory vacations", "Security awareness training", "Exit interviews"],
    "Background screening (employment history, references, criminal checks where lawful) is a preventive control that helps identify risky candidates before they gain access.");
  Q("Personnel Security", 2,
    "Requiring employees in sensitive financial roles to take at least one week of consecutive leave each year primarily helps to:",
    ["Detect fraud, because someone else performs the duties while they are away",
     "Improve employee morale",
     "Reduce payroll costs",
     "Satisfy GDPR requirements"],
    "Mandatory vacations are a detective control. Schemes that require continuous manipulation are likely to be uncovered when another person handles the role.");
  Q("Personnel Security", 2,
    "Job rotation provides which security benefits?",
    ["It deters and detects fraud and provides cross-training for continuity",
     "It eliminates the need for separation of duties",
     "It guarantees least privilege",
     "It replaces the need for background checks"],
    "Rotating staff through roles means others review each person's work (detecting fraud) and ensures multiple people can perform critical tasks (supporting continuity).");
  Q("Personnel Security", 2,
    "When an employee is involuntarily terminated, when should their system access be disabled?",
    ["At the same time as, or immediately before, they are notified",
     "One week after notification",
     "After their final paycheck is issued",
     "Only after HR completes the exit interview"],
    "To prevent retaliation or data theft, access should be revoked concurrently with notification. Termination is typically conducted with HR and security present.");
  Q("Personnel Security", 2,
    "Which agreement is MOST appropriate to protect a company's confidential information when sharing it with a prospective business partner?",
    ["Non-disclosure agreement (NDA)", "Service level agreement (SLA)", "Acceptable use policy", "Interconnection security agreement"],
    "An NDA legally binds the parties to keep shared confidential information private and is used with employees, contractors and partners.");
  Q("Personnel Security", 3,
    "An employee moves from the accounting department to marketing. Six months later, they still have access to accounting systems. This issue is known as:",
    ["Privilege creep (aggregation of privileges)", "Separation of duties", "Need to know", "Role-based access control"],
    "Privilege creep occurs when users accumulate access as they change roles. Regular access reviews and removing old rights during transfers prevent it.");
  Q("Personnel Security", 2,
    "Which document defines what users are and are not permitted to do with organizational IT resources and is typically signed at onboarding?",
    ["Acceptable use policy (AUP)", "Business impact analysis", "Disaster recovery plan", "Memorandum of understanding"],
    "The AUP sets expectations for appropriate use of systems and data. Signing it establishes that users were informed, which supports enforcement.");
  Q("Personnel Security", 2,
    "Your organization relies on a third-party contractor for system administration. Which control BEST ensures the contractor adheres to your security requirements?",
    ["Contractual clauses with security requirements, right-to-audit and monitoring",
     "A verbal agreement with the contractor's manager",
     "Giving the contractor domain administrator rights to avoid delays",
     "Excluding the contractor from security training"],
    "Third-party personnel should be bound by contracts that define security obligations, SLAs, confidentiality, and the right to audit, and their access should be monitored and limited to least privilege.");

  // ---------- Risk management ----------
  Q("Risk Management", 1,
    "Risk is BEST described as the combination of:",
    ["The likelihood of a threat exploiting a vulnerability and the resulting impact",
     "The number of vulnerabilities and the number of firewalls",
     "The asset value and the cost of controls",
     "Threats and countermeasures"],
    "Risk = likelihood × impact, arising when a threat agent can exploit a vulnerability to harm an asset.");
  Q("Risk Management", 2,
    "A server is valued at $50,000. A fire would destroy 40% of it. A fire is expected once every 10 years. What is the annualized loss expectancy (ALE)?",
    ["$2,000", "$20,000", "$5,000", "$200,000"],
    "SLE = AV × EF = $50,000 × 0.40 = $20,000. ARO = 1/10 = 0.1. ALE = SLE × ARO = $20,000 × 0.1 = $2,000.");
  Q("Risk Management", 2,
    "In quantitative risk analysis, the exposure factor (EF) represents:",
    ["The percentage of an asset's value lost in a single occurrence of a threat",
     "The number of times per year a threat occurs",
     "The total annual cost of a control",
     "The number of vulnerabilities on an asset"],
    "EF is the percentage of loss from one realized threat. SLE = asset value × EF.");
  Q("Risk Management", 3,
    "A risk has an ALE of $30,000 before a control. After implementing the control, the ALE drops to $8,000. The control costs $15,000 per year. What is the annual value of the safeguard to the organization?",
    ["$7,000", "$22,000", "$15,000", "-$7,000"],
    "Safeguard value = (ALE before − ALE after) − annual cost of the safeguard = ($30,000 − $8,000) − $15,000 = $7,000. A positive value means the control is cost-justified.");
  Q("Risk Management", 2,
    "Which statement BEST describes qualitative risk analysis?",
    ["It uses subjective ratings such as high, medium and low based on judgment and experience",
     "It requires precise monetary values for every asset",
     "It is always more accurate than quantitative analysis",
     "It cannot be used together with quantitative analysis"],
    "Qualitative analysis relies on scenarios, expert judgment and relative scales (for example, with the Delphi technique). Most organizations use a hybrid of qualitative and quantitative methods.");
  Q("Risk Management", 2,
    "An organization purchases cyber insurance to cover potential breach losses. Which risk response is this?",
    ["Transference (sharing)", "Avoidance", "Mitigation", "Acceptance"],
    "Transferring risk shifts some of the financial impact to another party, such as an insurer or vendor. Accountability for the data and the risk remains with the organization.");
  Q("Risk Management", 2,
    "A company decides to stop offering a high-risk online service entirely because the risk outweighs the benefit. Which risk response is this?",
    ["Avoidance", "Acceptance", "Transference", "Deterrence"],
    "Risk avoidance eliminates the risk by discontinuing or never starting the risky activity.");
  Q("Risk Management", 2,
    "Who should formally accept residual risk?",
    ["Senior management or the designated risk owner with appropriate authority",
     "The security analyst who identified the risk",
     "The vendor that supplied the system",
     "Any end user of the system"],
    "Risk acceptance is a business decision. It must be made and documented by a manager with the authority to accept the potential loss, typically the risk owner or senior management.");
  Q("Risk Management", 3,
    "Total risk minus the effect of controls (the controls gap) equals:",
    ["Residual risk", "Inherent risk", "Risk appetite", "Exposure factor"],
    "Total risk is threats × vulnerabilities × asset value before controls. Residual risk is what remains after controls are applied; it should be within the organization's risk appetite.");
  Q("Risk Management", 2,
    "Which of the following is an example of a deterrent control?",
    ["A warning banner stating that activity is monitored and violators will be prosecuted",
     "An intrusion detection system",
     "Data backups",
     "A fire suppression system"],
    "Deterrent controls discourage violations. They are often confused with preventive controls, which actually stop the action. IDS is detective, backups are recovery, and fire suppression is corrective.");
  Q("Risk Management", 2,
    "Security cameras recording a parking lot primarily serve as which type of control?",
    ["Detective (and also deterrent)", "Corrective", "Recovery", "Directive"],
    "Cameras detect and record activity for later review. Visible cameras also deter. They do not stop or correct an incident.");
  Q("Risk Management", 2,
    "An organization cannot meet a requirement for multi-factor authentication on a legacy system, so it adds network isolation and enhanced monitoring instead. This is an example of a:",
    ["Compensating control", "Directive control", "Recovery control", "Deterrent control"],
    "Compensating controls provide an alternative way to achieve a control objective when the primary control cannot be implemented.");
  Q("Risk Management", 1,
    "Security awareness training and policies are examples of which control category?",
    ["Administrative (managerial)", "Technical (logical)", "Physical", "Corrective"],
    "Administrative controls are policies, procedures, training and personnel practices. Technical controls use technology (firewalls, encryption), and physical controls protect facilities (locks, guards).");
  Q("Risk Management", 3,
    "Which NIST Risk Management Framework (SP 800-37 Rev. 2) step involves a senior official deciding whether the residual risk to operations is acceptable before a system goes into production?",
    ["Authorize", "Categorize", "Select", "Monitor"],
    "The RMF steps are Prepare, Categorize, Select, Implement, Assess, Authorize and Monitor. In Authorize, the authorizing official reviews the risk and grants or denies an authorization to operate (ATO).");
  Q("Risk Management", 3,
    "Which framework provides a quantitative model for information risk by breaking risk into loss event frequency and loss magnitude?",
    ["FAIR (Factor Analysis of Information Risk)", "STRIDE", "COBIT", "ITIL"],
    "FAIR is a quantitative risk analysis model that decomposes risk into factors such as threat event frequency, vulnerability and loss magnitude, producing financial estimates.");
  Q("Risk Management", 2,
    "The amount of risk an organization is willing to pursue or retain in pursuit of its objectives is its:",
    ["Risk appetite", "Residual risk", "Inherent risk", "Risk register"],
    "Risk appetite is a broad statement of acceptable risk. Risk tolerance describes acceptable variation around specific objectives. Residual risk should fall within appetite.");
  Q("Risk Management", 2,
    "What is the PRIMARY purpose of a risk register?",
    ["To document identified risks, their owners, ratings, responses and status",
     "To list all software licenses",
     "To record visitor sign-ins",
     "To track employee overtime"],
    "A risk register (risk log) is the central record used to track and communicate risks and their treatment over time.");
  Q("Risk Management", 3,
    "A security manager must determine whether a proposed control is cost-effective. What should be compared?",
    ["The annual cost of the control against the reduction in annualized loss expectancy it provides",
     "The control's purchase price against the asset's replacement cost only",
     "The number of vulnerabilities before and after the control",
     "The vendor's market share against competitors"],
    "A control is generally justified when the reduction in ALE exceeds its total annual cost (including purchase, maintenance and operation). The control should not cost more than the asset it protects.");
  Q("Risk Management", 2,
    "Continuous monitoring of controls and periodic risk reassessment are important because:",
    ["Threats, vulnerabilities and business conditions change, so risk changes over time",
     "Controls never fail once implemented",
     "Regulators require daily reassessment of every risk",
     "Risk assessments are only valid for one week"],
    "Risk management is a cycle. Monitoring confirms controls remain effective and identifies new risks, triggering updates to assessments and treatments.");

  // ---------- Threat modeling ----------
  Q("Threat Modeling", 2,
    "In the STRIDE model, which threat category is addressed primarily by authentication controls?",
    ["Spoofing", "Tampering", "Repudiation", "Elevation of privilege"],
    "STRIDE: Spoofing (authentication), Tampering (integrity), Repudiation (non-repudiation/logging), Information disclosure (confidentiality), Denial of service (availability), Elevation of privilege (authorization).");
  Q("Threat Modeling", 2,
    "An attacker modifies data in transit between a client and server. Which STRIDE category does this represent?",
    ["Tampering", "Spoofing", "Information disclosure", "Repudiation"],
    "Tampering is unauthorized modification of data or code, which violates integrity.");
  Q("Threat Modeling", 3,
    "Which threat modeling methodology is a seven-stage, risk-centric process that aligns business objectives with technical requirements and attack simulation?",
    ["PASTA", "STRIDE", "DREAD", "VAST"],
    "PASTA (Process for Attack Simulation and Threat Analysis) has seven stages from defining objectives to risk and impact analysis. VAST is designed to scale with Agile and DevOps; DREAD is a risk-rating scheme.");
  Q("Threat Modeling", 2,
    "When is the BEST time to perform threat modeling for a new application?",
    ["Early in the design phase, and revisited as the design changes",
     "Only after the application is deployed to production",
     "Only after a breach",
     "Threat modeling is only for network infrastructure"],
    "Threat modeling is most valuable early, when design flaws are cheapest to fix. It should be revisited throughout the development life cycle as features change.");
  Q("Threat Modeling", 3,
    "In threat modeling, the process of identifying where untrusted data or users cross into a more trusted part of the system is called identifying:",
    ["Trust boundaries", "Single points of failure", "Recovery objectives", "Baselines"],
    "Trust boundaries are points where the level of trust changes, such as between the internet and a web tier. Data flow diagrams highlight these boundaries, where controls are often needed.");
  Q("Threat Modeling", 2,
    "A diagram that starts with an attacker's goal at the root and breaks it into the different ways it could be achieved is called a(n):",
    ["Attack tree", "Fishbone diagram", "Gantt chart", "Network topology map"],
    "Attack trees (popularized by Bruce Schneier) decompose a goal into sub-goals and methods, helping analysts identify paths and prioritize defenses.");

  // ---------- Supply chain risk management ----------
  Q("Supply Chain Risk", 2,
    "Which is the BEST way to reduce the risk of counterfeit or tampered hardware entering an organization?",
    ["Purchase from authorized vendors and verify the integrity and provenance of components",
     "Buy from the lowest-cost reseller online",
     "Rely solely on the vendor's marketing materials",
     "Skip inspection to speed deployment"],
    "Supply chain risk management includes buying through trusted channels, verifying authenticity, inspecting for tampering and requiring vendors to demonstrate secure manufacturing practices.");
  Q("Supply Chain Risk", 3,
    "A software vendor provides a machine-readable inventory of all components and libraries included in its product. This document is called a:",
    ["Software bill of materials (SBOM)", "Service level agreement", "Statement of work", "Memorandum of understanding"],
    "An SBOM lists the components in software, helping customers identify exposure to vulnerable third-party libraries.");
  Q("Supply Chain Risk", 2,
    "Which report provides independent assurance about a service organization's controls relevant to security, availability, processing integrity, confidentiality or privacy?",
    ["SOC 2 report", "SOC 1 report", "Penetration test executive summary written by the vendor", "Marketing white paper"],
    "SOC 2 reports address the Trust Services Criteria. SOC 1 focuses on controls relevant to financial reporting. A Type 2 report tests operating effectiveness over a period of time.");
  Q("Supply Chain Risk", 2,
    "An organization outsources payroll processing to a cloud provider. Who remains accountable for protecting employees' personal data?",
    ["The organization that outsourced the service",
     "Only the cloud provider",
     "The employees themselves",
     "No one, once a contract is signed"],
    "Responsibility for tasks can be delegated, but accountability for data stays with the organization (the data controller). Contracts, assessments and monitoring are needed to manage third-party risk.");
  Q("Supply Chain Risk", 3,
    "Which contractual element is MOST important for verifying a vendor's ongoing compliance with security requirements?",
    ["A right-to-audit clause", "A non-compete clause", "A force majeure clause", "An exclusivity clause"],
    "A right-to-audit clause lets the customer (or an agreed third party) assess the vendor's controls. It is often supplemented by independent reports such as SOC 2 or ISO 27001 certificates.");

  // ---------- Awareness, education, training ----------
  Q("Security Awareness", 1,
    "Which activity is MOST effective at reducing successful phishing attacks over time?",
    ["Ongoing awareness training combined with simulated phishing exercises",
     "A one-time presentation during onboarding",
     "Publishing the security policy on the intranet only",
     "Blocking all external email"],
    "Behavior change requires ongoing reinforcement. Regular, engaging training and realistic phishing simulations with feedback measurably reduce click rates.");
  Q("Security Awareness", 2,
    "What is the difference between security awareness and security training?",
    ["Awareness builds general recognition of security issues; training teaches specific skills to perform tasks",
     "They are identical",
     "Training is for all staff; awareness is only for IT",
     "Awareness requires certification; training does not"],
    "Awareness changes attitudes and helps people recognize risks. Training teaches job-specific skills. Education goes deeper, building understanding (for example, degree programs or certifications).");
  Q("Security Awareness", 2,
    "How should an organization BEST measure the effectiveness of its security awareness program?",
    ["Track metrics such as phishing simulation results, incident reporting rates and post-training assessments",
     "Count the number of slides in the training deck",
     "Measure how long the training video is",
     "Assume the program is effective if no one complains"],
    "Effectiveness is measured through outcomes: changes in behavior, reporting of suspicious activity, test scores, and trends in human-caused incidents.");

  // ---------- Additional mixed scenarios ----------
  Q("Security Governance", 3,
    "A security steering committee is BEST suited to:",
    ["Provide cross-functional oversight, prioritize initiatives and align security with business units",
     "Configure firewall rules",
     "Perform penetration tests",
     "Approve individual password resets"],
    "A steering committee with representatives from business units, legal, HR, IT and security provides governance, resolves conflicts and ensures security priorities reflect organizational needs.");
  Q("Risk Management", 3,
    "You are a new CISO. What should you do FIRST before recommending major security investments?",
    ["Understand the business objectives and perform a risk assessment",
     "Buy the latest next-generation firewall",
     "Rewrite all security policies from scratch",
     "Hire additional penetration testers"],
    "On the CISSP exam, think like a manager: understand the business and its risks first. Investments should be prioritized based on risk and business value.");
  Q("Legal and Regulatory", 3,
    "A multinational company discovers a breach affecting customers in several countries. What should guide its notification obligations?",
    ["The breach notification laws of each jurisdiction where affected individuals reside",
     "Only the laws of the company's headquarters country",
     "Only the terms of its cyber insurance policy",
     "Notification is optional if data was encrypted with a weak key"],
    "Breach notification requirements are generally based on where affected individuals reside, so multinational incidents may trigger many different laws, deadlines and regulators. Legal counsel should be involved.");
  Q("Business Continuity", 3,
    "During a BIA, a business unit manager claims every process they own is 'critical'. What is the BEST approach for the BCP coordinator?",
    ["Use objective impact criteria (financial, operational, legal, reputational over time) to rank processes",
     "Accept the manager's assessment to avoid conflict",
     "Mark all processes as non-critical to reduce cost",
     "Let the IT department decide alone"],
    "Consistent, objective criteria such as financial loss, regulatory exposure and customer impact over time allow processes to be compared and prioritized across the organization.");
  Q("Security Concepts", 3,
    "A security architect designs a system so that if the access control component fails, all access is denied. This is called:",
    ["Fail secure (fail closed)", "Fail open", "Fail soft", "Graceful degradation"],
    "Fail secure means the system defaults to a secure state on failure. Fail open (often preferred for life safety, such as emergency exit doors) allows access when a failure occurs.");
  Q("Privacy", 2,
    "Replacing direct identifiers in a dataset with a reversible token, so the data can be re-linked to individuals using a separately held key, is called:",
    ["Pseudonymization", "Anonymization", "Hashing for integrity", "Data minimization"],
    "Pseudonymized data can be re-identified with additional information, so it is still personal data under GDPR. Truly anonymized data cannot reasonably be re-identified and falls outside GDPR.");
  Q("Personnel Security", 3,
    "Which practice BEST supports the security of the hiring process for highly sensitive positions?",
    ["Define clear job descriptions with security responsibilities and screen candidates commensurate with the role's sensitivity",
     "Use the same minimal screening for all roles to save time",
     "Grant full access on day one so new hires can be productive",
     "Skip reference checks for internal referrals"],
    "Job descriptions should include security roles and responsibilities, and the depth of screening should match the role's risk level. Access should then be provisioned according to least privilege.");
  Q("Risk Management", 3,
    "A risk assessment uses a panel of experts who anonymously submit their opinions in multiple rounds until a consensus is reached. This technique is called:",
    ["The Delphi technique", "Monte Carlo simulation", "Fault tree analysis", "Attack tree analysis"],
    "The Delphi technique is an anonymous, iterative feedback method used in qualitative analysis to reduce groupthink and the influence of dominant personalities.");

  window.CISSP = window.CISSP || { questions: {}, flashcards: {} };
  CISSP.questions[1] = qs;

  // ---------- Flashcards ----------
  const cards = [];
  const F = (t, f, b) => cards.push({ id: "d1-c" + String(cards.length + 1).padStart(3, "0"), t, f, b });

  F("Security Concepts", "CIA triad", "Confidentiality (prevent unauthorized disclosure), Integrity (prevent unauthorized modification), Availability (timely, reliable access for authorized users).");
  F("Security Concepts", "DAD triad", "Disclosure, Alteration, Destruction/Denial: the opposites of confidentiality, integrity and availability.");
  F("Security Concepts", "Non-repudiation", "Assurance that a party cannot deny an action, such as sending a message. Achieved with digital signatures and strong audit trails.");
  F("Security Concepts", "Authenticity", "The property of being genuine and verifiable: confirms the origin of data or identity of a party.");
  F("Security Concepts", "IAAA", "Identification (claim), Authentication (prove), Authorization (permit), Accounting/Auditing (record and hold responsible).");
  F("Security Concepts", "Least privilege", "Grant only the minimum access needed to perform a job function.");
  F("Security Concepts", "Need to know", "Access to specific information is limited to what is required for assigned duties, even within a clearance level.");
  F("Security Concepts", "Separation of duties", "Split critical tasks so no single person can complete them alone; forces collusion for fraud.");
  F("Security Concepts", "Defense in depth", "Multiple, diverse, layered controls so the failure of one does not cause compromise.");
  F("Security Concepts", "Fail secure vs. fail open", "Fail secure: deny access on failure (protects assets). Fail open: allow access on failure (protects people, such as emergency exits).");
  F("Professional Ethics", "ISC2 Code of Ethics canons (in order)", "1. Protect society, the common good, public trust and infrastructure. 2. Act honorably, honestly, justly, responsibly and legally. 3. Provide diligent and competent service to principals. 4. Advance and protect the profession.");
  F("Professional Ethics", "RFC 1087", "'Ethics and the Internet': unethical to gain unauthorized access, disrupt intended use, waste resources, destroy data integrity, or compromise privacy.");
  F("Security Governance", "Who is ultimately responsible for security?", "Senior management. Tasks can be delegated; ultimate responsibility cannot.");
  F("Security Governance", "Data owner", "Senior business role accountable for data: classifies it, approves access and defines protection requirements.");
  F("Security Governance", "Data custodian", "Implements and maintains protections as directed by the owner: backups, patching, access configuration.");
  F("Security Governance", "Strategic / tactical / operational plans", "Strategic: about 3 to 5 years, long-term goals. Tactical: about 1 year, specific projects. Operational: short-term, detailed, day-to-day.");
  F("Security Control Frameworks", "ISO/IEC 27001 vs 27002", "27001: ISMS requirements, certifiable. 27002: code of practice with control guidance, not certifiable.");
  F("Security Control Frameworks", "COBIT", "ISACA framework for governance and management of enterprise IT; aligns IT with business goals.");
  F("Security Control Frameworks", "NIST CSF 2.0 functions", "Govern, Identify, Protect, Detect, Respond, Recover.");
  F("Security Control Frameworks", "NIST RMF steps (SP 800-37)", "Prepare, Categorize, Select, Implement, Assess, Authorize, Monitor.");
  F("Security Control Frameworks", "SABSA", "Business-driven, risk-based enterprise security architecture framework built on a Zachman-like matrix.");
  F("Due Care and Due Diligence", "Due diligence", "Investigating and understanding risks (research, assessments, planning). 'Do detect.'");
  F("Due Care and Due Diligence", "Due care", "Taking reasonable actions to protect assets, as a prudent person would. 'Do correct.'");
  F("Due Care and Due Diligence", "Prudent person rule", "Standard for negligence: did the organization act as a reasonable person would in similar circumstances?");
  F("Legal and Regulatory", "Criminal vs civil law", "Criminal: government prosecutes, beyond a reasonable doubt, prison or fines. Civil: disputes between parties, preponderance of evidence, damages.");
  F("Legal and Regulatory", "Administrative law", "Regulations issued by government agencies under authority of a statute.");
  F("Legal and Regulatory", "GDPR controller vs processor", "Controller decides purposes and means of processing. Processor processes on the controller's behalf.");
  F("Legal and Regulatory", "GDPR breach notification", "Notify the supervisory authority within 72 hours of becoming aware, where feasible.");
  F("Legal and Regulatory", "GDPR transfer mechanisms", "Adequacy decisions, Standard Contractual Clauses (SCCs), Binding Corporate Rules (BCRs), and limited derogations.");
  F("Legal and Regulatory", "HIPAA / HITECH", "U.S. protection of health information (PHI). HITECH extended obligations to business associates and added breach notification.");
  F("Legal and Regulatory", "GLBA", "U.S. financial institutions: privacy notices and the Safeguards Rule for customer information.");
  F("Legal and Regulatory", "SOX", "U.S. public companies: internal controls over financial reporting integrity.");
  F("Legal and Regulatory", "CFAA", "U.S. federal law criminalizing unauthorized access to protected computers.");
  F("Legal and Regulatory", "Patent", "Protects inventions; requires public disclosure; generally lasts 20 years from filing.");
  F("Legal and Regulatory", "Copyright", "Protects the expression of original works (including code), not ideas.");
  F("Legal and Regulatory", "Trademark", "Protects names, logos and symbols that identify a source of goods or services.");
  F("Legal and Regulatory", "Trade secret", "Confidential business information protected indefinitely through secrecy measures like NDAs.");
  F("Legal and Regulatory", "Export controls for encryption", "U.S. EAR (Commerce) for dual-use items like encryption; ITAR for defense articles; Wassenaar Arrangement internationally.");
  F("Legal and Regulatory", "Data sovereignty", "Data is subject to the laws of the country where it is located.");
  F("Privacy", "PII", "Information that can identify an individual alone or combined with other data.");
  F("Privacy", "Privacy by design", "Build privacy into systems from the start and make it the default (GDPR Article 25).");
  F("Privacy", "Pseudonymization vs anonymization", "Pseudonymized data can be re-identified with a separate key (still personal data). Anonymized data cannot reasonably be re-identified.");
  F("Privacy", "DPIA", "Data Protection Impact Assessment, required by GDPR before high-risk processing.");
  F("Investigations", "Investigation types", "Administrative (internal policy), Criminal (beyond reasonable doubt), Civil (preponderance of evidence), Regulatory (agency or industry body).");
  F("Investigations", "Chain of custody", "Documented record of who handled evidence, when and why, proving it was not altered.");
  F("Security Policy", "Policy", "High-level, mandatory statement of management intent and responsibilities.");
  F("Security Policy", "Standard", "Mandatory requirement for a specific technology, method or configuration.");
  F("Security Policy", "Baseline", "Minimum security configuration all systems of a type must meet.");
  F("Security Policy", "Guideline", "Recommended, non-mandatory practice.");
  F("Security Policy", "Procedure", "Mandatory, detailed, step-by-step instructions for a task.");
  F("Business Continuity", "BCP phases", "Project scope and planning, business impact analysis, continuity planning, approval and implementation (plus training, testing and maintenance).");
  F("Business Continuity", "Business impact analysis (BIA)", "Identifies critical functions, impacts of disruption over time, and sets MTD, RTO and RPO.");
  F("Business Continuity", "MTD", "Maximum tolerable downtime: the longest a function can be down before irreparable harm.");
  F("Business Continuity", "RTO", "Recovery time objective: target time to restore a function. RTO + WRT must not exceed MTD.");
  F("Business Continuity", "RPO", "Recovery point objective: maximum acceptable data loss, measured in time. Drives backup frequency.");
  F("Business Continuity", "Top priority in any disaster", "The safety of people.");
  F("Personnel Security", "Mandatory vacation", "Detective control: someone else performs the job, exposing ongoing fraud.");
  F("Personnel Security", "Job rotation", "Deters and detects fraud; provides cross-training and continuity.");
  F("Personnel Security", "Privilege creep", "Accumulation of access as users change roles. Prevent with access reviews and deprovisioning on transfer.");
  F("Personnel Security", "Termination best practice", "Disable access at or before notification; collect assets; conduct exit interview; remind of NDA obligations.");
  F("Risk Management", "Risk formula", "Risk = Likelihood × Impact (a threat exploiting a vulnerability against an asset).");
  F("Risk Management", "SLE", "Single loss expectancy = Asset value (AV) × Exposure factor (EF).");
  F("Risk Management", "ALE", "Annualized loss expectancy = SLE × ARO (annualized rate of occurrence).");
  F("Risk Management", "Safeguard value", "(ALE before − ALE after) − annual cost of safeguard.");
  F("Risk Management", "Risk responses", "Mitigate (reduce), Transfer/Share (insurance, outsourcing), Avoid (stop the activity), Accept (document and approve). Ignoring or rejecting risk is not acceptable.");
  F("Risk Management", "Residual risk", "Risk remaining after controls. Total risk − controls gap = residual risk.");
  F("Risk Management", "Control types (function)", "Preventive, Detective, Corrective, Deterrent, Recovery, Directive, Compensating.");
  F("Risk Management", "Control categories (implementation)", "Administrative/managerial, Technical/logical, Physical.");
  F("Risk Management", "Compensating control", "Alternative control that meets the objective when the primary control is not feasible.");
  F("Risk Management", "Delphi technique", "Anonymous, iterative expert feedback used in qualitative risk analysis to reach consensus.");
  F("Risk Management", "FAIR", "Quantitative risk model: loss event frequency × loss magnitude.");
  F("Risk Management", "Risk appetite vs tolerance", "Appetite: overall amount of risk the organization will accept. Tolerance: acceptable deviation for a specific objective.");
  F("Threat Modeling", "STRIDE", "Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege.");
  F("Threat Modeling", "PASTA", "Process for Attack Simulation and Threat Analysis: seven-stage, risk-centric methodology.");
  F("Threat Modeling", "DREAD", "Risk rating: Damage, Reproducibility, Exploitability, Affected users, Discoverability.");
  F("Threat Modeling", "Trust boundary", "A point where data or control passes between areas of different trust levels.");
  F("Supply Chain Risk", "SBOM", "Software bill of materials: inventory of components and libraries in a software product.");
  F("Supply Chain Risk", "SOC 1 vs SOC 2", "SOC 1: controls relevant to financial reporting. SOC 2: Trust Services Criteria (security, availability, processing integrity, confidentiality, privacy).");
  F("Supply Chain Risk", "SOC Type 1 vs Type 2", "Type 1: design of controls at a point in time. Type 2: design and operating effectiveness over a period (usually 6 to 12 months).");
  F("Supply Chain Risk", "Right to audit", "Contract clause allowing the customer to assess a vendor's security controls.");
  F("Security Awareness", "Awareness vs training vs education", "Awareness: recognize issues (all staff). Training: job-specific skills. Education: deep understanding (degrees, certifications).");

  CISSP.flashcards[1] = cards;
})();
