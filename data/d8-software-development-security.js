// Domain 8: Software Development Security
// Original practice questions written against the CISSP exam outline topics.
// Format: Q(topic, difficulty 1-3, question, [correct, distractor, distractor, distractor], explanation)
// The correct option is listed first here; the app shuffles options at runtime.
// IDs are assigned by position, so append new questions at the end to keep saved progress stable.
(function () {
  const qs = [];
  const Q = (t, d, q, o, e) => qs.push({ id: "d8-" + String(qs.length + 1).padStart(3, "0"), t, d, q, o, a: 0, e });

  // ---------- SDLC and methodologies ----------
  Q("SDLC", 1,
    "When should security be integrated into the software development lifecycle?",
    ["From the earliest phase (requirements) and throughout every phase", "Only during testing", "Only after deployment", "Only when a breach occurs"],
    "Building security in from the start is cheaper and more effective than bolting it on later.");
  Q("SDLC", 2,
    "Why is it cheaper to fix security defects found during design than those found in production?",
    ["Later fixes require more rework, retesting, redeployment and may involve incident costs",
     "Design defects are always minor",
     "Production defects fix themselves",
     "There is no cost difference"],
    "The cost of fixing defects rises sharply in later phases.");
  Q("Development Methodologies", 2,
    "Which development model is linear and sequential, with each phase completed before the next begins?",
    ["Waterfall", "Agile", "Spiral", "Rapid application development"],
    "Waterfall is predictable but inflexible to changing requirements. A modified waterfall allows returning to the previous phase.");
  Q("Development Methodologies", 2,
    "The spiral model is distinguished by:",
    ["Iterative cycles with an explicit risk analysis in each loop", "No planning", "A single delivery at the end", "No testing"],
    "Each spiral iteration plans, analyzes risk, engineers and evaluates, making it suitable for large, high-risk projects.");
  Q("Development Methodologies", 2,
    "Which Agile framework uses fixed-length iterations called sprints, a product backlog and daily stand-ups?",
    ["Scrum", "Waterfall", "Spiral", "Cleanroom"],
    "Scrum roles include the product owner, scrum master and development team.");
  Q("Development Methodologies", 3,
    "How can security be effectively incorporated into Agile development?",
    ["Include security requirements as user stories or acceptance criteria and automate security testing each sprint",
     "Defer all security to a final phase after the last sprint",
     "Exclude security to maintain velocity",
     "Perform security reviews only every five years"],
    "Security user stories, abuse cases, definition-of-done criteria and automated tests keep security in step with rapid delivery.");
  Q("Development Methodologies", 2,
    "DevSecOps extends DevOps by:",
    ["Integrating security practices and automated checks throughout the CI/CD pipeline as a shared responsibility",
     "Removing operations teams",
     "Adding a security review only before annual releases",
     "Replacing developers with security staff"],
    "DevSecOps 'shifts left' while keeping security continuous in operations.");
  Q("Development Methodologies", 3,
    "An integrated product team (IPT) is BEST described as:",
    ["A multidisciplinary team, including security, that works together through the product lifecycle", "A team of only developers", "An external audit team", "A help desk team"],
    "IPTs bring together stakeholders from development, operations, security, QA and business to improve decisions.");
  Q("Development Methodologies", 2,
    "Prototyping in development is useful because it:",
    ["Allows users to give early feedback on requirements and design", "Eliminates testing", "Is always the final product", "Removes the need for documentation"],
    "Prototypes should not be pushed into production without proper security hardening.");

  // ---------- Maturity models ----------
  Q("Maturity Models", 2,
    "In the Capability Maturity Model Integration (CMMI), which level indicates processes are characterized for the organization and proactive?",
    ["Level 3 (Defined)", "Level 1 (Initial)", "Level 2 (Managed)", "Level 5 (Optimizing)"],
    "Levels: 1 Initial (ad hoc), 2 Managed (project-level), 3 Defined (organization standards), 4 Quantitatively Managed (measured), 5 Optimizing (continuous improvement).");
  Q("Maturity Models", 2,
    "Which CMMI level focuses on continuous process improvement?",
    ["Level 5 (Optimizing)", "Level 4 (Quantitatively Managed)", "Level 2 (Managed)", "Level 1 (Initial)"],
    "Optimizing organizations use quantitative feedback to continually improve processes.");
  Q("Maturity Models", 3,
    "Which open framework from OWASP helps organizations assess and improve their software security practices?",
    ["SAMM (Software Assurance Maturity Model)", "ITIL", "COBIT", "PCI DSS"],
    "OWASP SAMM covers governance, design, implementation, verification and operations. BSIMM is a descriptive model based on observed practices.");
  Q("Maturity Models", 3,
    "BSIMM differs from SAMM because BSIMM:",
    ["Describes what real organizations are observed doing rather than prescribing practices", "Is a coding language", "Is a firewall product", "Applies only to hardware"],
    "BSIMM is descriptive and data-driven; SAMM is prescriptive.");

  // ---------- Change and configuration in development ----------
  Q("Change Management", 2,
    "Why should developers not have direct write access to production systems?",
    ["To enforce separation of duties and ensure changes pass through review and change control",
     "Developers lack technical skills",
     "Production systems are read-only by law",
     "It speeds up deployment"],
    "Unreviewed changes could introduce errors or malicious code.");
  Q("Change Management", 2,
    "Software configuration management (SCM) primarily provides:",
    ["Version control, change tracking and the ability to reproduce builds", "Network routing", "Physical security", "User authentication"],
    "SCM ensures the integrity and traceability of code and configuration.");
  Q("Change Management", 3,
    "Which practice protects the integrity of the source code repository?",
    ["Branch protection, mandatory code reviews, signed commits and least-privilege access",
     "Allowing anonymous pushes",
     "Sharing a single developer account",
     "Disabling audit logs"],
    "Repository controls prevent unauthorized or unreviewed code from reaching release branches.");

  // ---------- Development environment controls ----------
  Q("Development Ecosystem", 2,
    "Hardcoding API keys in source code is risky because:",
    ["Anyone with access to the code or repository history can obtain the secrets",
     "It makes the code run slower",
     "Compilers reject hardcoded strings",
     "It violates the OSI model"],
    "Secrets should be stored in a vault or secret manager and injected at runtime. Secret scanning detects leaks.");
  Q("Development Ecosystem", 2,
    "Code signing provides which assurance to users?",
    ["The code came from the identified publisher and has not been altered since signing",
     "The code is free of bugs",
     "The code is open source",
     "The code runs faster"],
    "Signing provides authenticity and integrity, not quality. Signing keys must be protected (for example, in an HSM).");
  Q("Development Ecosystem", 3,
    "An attacker compromises a build server and inserts malicious code into signed releases. This is an example of:",
    ["A software supply chain attack", "Cross-site scripting", "A race condition", "SQL injection"],
    "Build pipeline compromises (like SolarWinds) affect every downstream customer. Hardened, isolated builds, reproducible builds and provenance (for example, SLSA) help.");
  Q("Development Ecosystem", 2,
    "Which practice reduces risk from vulnerable third-party libraries?",
    ["Maintain an inventory (SBOM), use software composition analysis and update dependencies promptly",
     "Never update libraries once installed",
     "Download libraries from random websites",
     "Copy library code without tracking its version"],
    "Open-source components are a major source of vulnerabilities (for example, Log4Shell).");
  Q("Development Ecosystem", 3,
    "Dependency confusion attacks work by:",
    ["Publishing a malicious public package with the same name as an internal package so build tools fetch it",
     "Overflowing a buffer",
     "Guessing passwords",
     "Exploiting physical locks"],
    "Use scoped namespaces, private registries and pinned versions to prevent package substitution.");
  Q("Development Ecosystem", 2,
    "Which programming language characteristic reduces the likelihood of buffer overflow vulnerabilities?",
    ["Memory safety with automatic bounds checking", "Manual memory management", "Pointer arithmetic", "No type checking"],
    "Memory-safe languages (Rust, Go, Java, C#) prevent many memory corruption bugs common in C and C++.");
  Q("Development Ecosystem", 2,
    "A compiled language differs from an interpreted language in that compiled code:",
    ["Is translated into machine code before execution", "Is executed line by line by an interpreter at runtime", "Cannot be reverse engineered", "Has no security vulnerabilities"],
    "Compiled binaries can still be decompiled. Obfuscation raises the effort but is not a strong control.");
  Q("Development Ecosystem", 3,
    "Runtime application self-protection (RASP) works by:",
    ["Instrumenting the application to detect and block attacks from inside at runtime",
     "Scanning source code before compilation",
     "Filtering traffic at the network perimeter only",
     "Reviewing contracts"],
    "RASP has context about application behavior and can stop exploits such as injection attempts in real time.");

  // ---------- OWASP and common vulnerabilities ----------
  Q("Web Vulnerabilities", 2,
    "Which is the MOST effective defense against SQL injection?",
    ["Parameterized queries (prepared statements)", "Hiding database error messages only", "Using longer table names", "Encrypting the database at rest"],
    "Parameterized queries keep data separate from SQL code. Input validation and least-privilege database accounts add defense in depth.");
  Q("Web Vulnerabilities", 2,
    "Cross-site scripting (XSS) allows an attacker to:",
    ["Execute malicious scripts in other users' browsers in the context of a trusted site",
     "Directly modify the database schema",
     "Crash the network switch",
     "Brute-force SSH passwords"],
    "XSS can steal session cookies, deface pages or perform actions as the victim.");
  Q("Web Vulnerabilities", 2,
    "Which control is the PRIMARY defense against XSS?",
    ["Context-aware output encoding, supported by input validation and a Content Security Policy",
     "Parameterized SQL queries",
     "Disk encryption",
     "Longer passwords"],
    "Encoding output for its context (HTML, attribute, JavaScript, URL) prevents injected scripts from executing.");
  Q("Web Vulnerabilities", 3,
    "Which type of XSS occurs when malicious input is saved by the server and displayed to other users later?",
    ["Stored (persistent) XSS", "Reflected XSS", "DOM-based XSS", "Blind SQL injection"],
    "Stored XSS affects every user who views the content. Reflected XSS requires tricking a user into clicking a crafted link. DOM-based XSS happens entirely in client-side script.");
  Q("Web Vulnerabilities", 2,
    "Cross-site request forgery (CSRF) tricks a user's browser into:",
    ["Sending an unwanted authenticated request to a site where the user is logged in",
     "Running scripts from another origin in the page",
     "Revealing the server's source code",
     "Downloading a virus from a USB drive"],
    "Defenses include anti-CSRF tokens, SameSite cookies and re-authentication for sensitive actions.");
  Q("Web Vulnerabilities", 3,
    "An attacker manipulates a web application into making requests to internal cloud metadata services. This is:",
    ["Server-side request forgery (SSRF)", "Cross-site request forgery", "Clickjacking", "Session fixation"],
    "SSRF can expose internal services and cloud credentials. Defenses include allow lists for outbound requests and metadata service protections such as IMDSv2.");
  Q("Web Vulnerabilities", 2,
    "A user changes the account number in a URL from 1001 to 1002 and sees another customer's data. This vulnerability is:",
    ["Insecure direct object reference (broken access control)", "SQL injection", "XSS", "Buffer overflow"],
    "Authorization must be checked on the server for every object requested, not just whether the user is logged in.");
  Q("Web Vulnerabilities", 2,
    "In recent OWASP Top 10 lists, which category ranks at the top due to its prevalence?",
    ["Broken access control", "Insufficient logging", "XML external entities", "Server-side request forgery"],
    "Broken access control moved to #1 in the 2021 OWASP Top 10 and remains the leading risk.");
  Q("Web Vulnerabilities", 3,
    "Insecure deserialization can lead to:",
    ["Remote code execution when untrusted data is converted back into objects",
     "Faster page loads",
     "Stronger encryption",
     "Better logging"],
    "Avoid deserializing untrusted data, or use safe formats and integrity checks.");
  Q("Web Vulnerabilities", 2,
    "Clickjacking tricks users into:",
    ["Clicking on hidden elements layered over a legitimate page", "Typing passwords into a terminal", "Plugging in USB drives", "Opening email attachments"],
    "The X-Frame-Options header or CSP frame-ancestors directive prevents pages from being framed by other sites.");
  Q("Web Vulnerabilities", 2,
    "Directory traversal attacks use input such as '../../etc/passwd' to:",
    ["Access files outside the intended directory", "Overflow the stack", "Inject SQL", "Forge Kerberos tickets"],
    "Validate and canonicalize file paths, and run applications with least privilege.");
  Q("Web Vulnerabilities", 3,
    "Which vulnerability arises when an XML parser processes external entity references in untrusted input?",
    ["XML external entity (XXE) injection", "Cross-site request forgery", "Race condition", "Integer overflow"],
    "XXE can disclose files or enable SSRF. Disable external entity processing in parsers.");

  // ---------- Secure coding ----------
  Q("Secure Coding", 2,
    "Which input validation approach is MOST secure?",
    ["Allow list (accept only known-good input)", "Block list (reject known-bad input)", "No validation", "Client-side validation only"],
    "Block lists miss new attack patterns. Server-side allow-list validation is preferred; client-side validation is only for usability.");
  Q("Secure Coding", 2,
    "Why should detailed error messages not be shown to end users?",
    ["They can reveal system details such as stack traces, file paths and database structure to attackers",
     "They slow down applications",
     "They violate copyright",
     "Users prefer no feedback at all"],
    "Show generic messages to users and log details securely for developers.");
  Q("Secure Coding", 2,
    "A buffer overflow occurs when:",
    ["A program writes more data to a memory buffer than it can hold, overwriting adjacent memory",
     "A database has too many records",
     "A network link is saturated",
     "A user enters a long password"],
    "Overflows can lead to crashes or code execution. Bounds checking, safe functions, memory-safe languages, ASLR and DEP reduce risk.");
  Q("Secure Coding", 3,
    "An integer overflow vulnerability occurs when:",
    ["An arithmetic result exceeds the range of its data type and wraps around, leading to logic errors or memory corruption",
     "A user enters letters instead of numbers",
     "A database stores negative numbers",
     "A network uses IPv6"],
    "Integer overflows can cause undersized buffer allocations and subsequent overflows.");
  Q("Secure Coding", 2,
    "A race condition vulnerability is BEST mitigated by:",
    ["Proper synchronization and atomic operations on shared resources", "Increasing CPU speed", "Using longer variable names", "Adding comments"],
    "Locks, transactions and atomic checks prevent attackers from exploiting timing windows.");
  Q("Secure Coding", 2,
    "Which practice ensures that an application fails securely?",
    ["Defaulting to deny access and preserving data integrity when errors occur",
     "Granting access when the authorization service is unreachable",
     "Displaying full stack traces",
     "Ignoring exceptions"],
    "Error handling should never leave the system in an insecure state.");
  Q("Secure Coding", 2,
    "Which source provides widely used secure coding guidance for web applications?",
    ["OWASP (for example, the Top 10, ASVS and Cheat Sheets)", "ITIL", "ISO 9001", "COBIT"],
    "OWASP ASVS defines verification requirements; CERT secure coding standards cover languages such as C and Java.");
  Q("Secure Coding", 3,
    "How should passwords be stored by an application?",
    ["As salted hashes using a slow algorithm such as Argon2, bcrypt or PBKDF2",
     "Encrypted with a key stored in the same database",
     "In plaintext for easy recovery",
     "Hashed with unsalted MD5"],
    "Adaptive hashing slows offline cracking. Applications should never be able to recover original passwords.");
  Q("Secure Coding", 2,
    "Which principle is applied when an application's database account can only execute specific stored procedures, not drop tables?",
    ["Least privilege", "Open design", "Security through obscurity", "Fail open"],
    "Limiting database permissions reduces the impact of injection and application compromise.");
  Q("Secure Coding", 3,
    "Why is client-side input validation insufficient as a security control?",
    ["Attackers can bypass the client and send requests directly to the server",
     "Browsers do not support JavaScript",
     "Client validation is always too strict",
     "It encrypts data incorrectly"],
    "All security validation must be enforced on the server.");
  Q("Secure Coding", 2,
    "Which approach BEST protects session cookies from theft via XSS and network sniffing?",
    ["Set the HttpOnly, Secure and SameSite attributes", "Store the session ID in the URL", "Use predictable session IDs", "Disable HTTPS"],
    "HttpOnly blocks script access, Secure forces HTTPS, and SameSite limits cross-site sending.");

  // ---------- API security ----------
  Q("API Security", 2,
    "Which control is MOST important for securing a public REST API?",
    ["Strong authentication and object-level authorization for every request, plus rate limiting",
     "Hiding the API documentation",
     "Using only GET requests",
     "Allowing anonymous write access"],
    "OWASP's API Security Top 10 lists broken object-level authorization as the top API risk.");
  Q("API Security", 2,
    "Rate limiting on an API helps prevent:",
    ["Brute-force attacks, scraping and resource exhaustion", "Cross-site scripting", "SQL injection", "Physical theft"],
    "Throttling limits how many requests a client can make, protecting availability and slowing attacks.");
  Q("API Security", 3,
    "An API returns full user objects, including password hashes, and relies on the mobile app to hide sensitive fields. This is an example of:",
    ["Excessive data exposure", "Proper least privilege", "Rate limiting", "Input validation"],
    "APIs should return only the data the client needs. Filtering on the client provides no protection.");
  Q("API Security", 2,
    "An API gateway can provide which security functions?",
    ["Centralized authentication, rate limiting, logging and request validation", "Physical access control", "Disk encryption", "Wireless authentication"],
    "Gateways enforce consistent policies across many backend services.");

  // ---------- Databases ----------
  Q("Database Security", 2,
    "The ACID properties of database transactions are:",
    ["Atomicity, consistency, isolation, durability", "Authentication, confidentiality, integrity, data", "Access, control, identity, deletion", "Availability, completeness, integrity, design"],
    "ACID ensures reliable transactions: all-or-nothing, valid states, isolation from concurrent transactions, and permanence once committed.");
  Q("Database Security", 2,
    "Database views can enhance security by:",
    ["Restricting users to specific rows or columns of data", "Encrypting the whole database", "Increasing storage", "Speeding up backups"],
    "Views act as a constrained interface, hiding sensitive columns.");
  Q("Database Security", 2,
    "Which database concept prevents two users from updating the same record simultaneously and corrupting it?",
    ["Concurrency control (locking)", "Normalization", "Polyinstantiation", "Aggregation"],
    "Locks ensure transactions don't interfere. Poor locking design can cause deadlocks.");
  Q("Database Security", 3,
    "A database stores both a 'Secret' and an 'Unclassified' version of the same record to prevent lower-cleared users from inferring sensitive facts. This technique is:",
    ["Polyinstantiation", "Normalization", "Denormalization", "Sharding"],
    "Polyinstantiation defends against inference in multilevel databases.");
  Q("Database Security", 2,
    "Normalization in relational databases primarily:",
    ["Reduces redundancy and improves data integrity", "Encrypts data", "Adds duplicate records", "Removes primary keys"],
    "Normal forms organize data to avoid update anomalies.");
  Q("Database Security", 2,
    "A primary key in a relational database:",
    ["Uniquely identifies each row in a table", "Encrypts the table", "Links to a row in another table", "Is optional for every table"],
    "A foreign key references a primary key in another table, enforcing referential integrity.");
  Q("Database Security", 3,
    "Which technique allows a database to remain consistent if a transaction fails midway?",
    ["Rollback to the previous committed state", "Polyinstantiation", "Aggregation", "Shadowing passwords"],
    "Atomicity is implemented through rollback and commit. Savepoints and checkpoints support recovery.");

  // ---------- Object-oriented programming ----------
  Q("Programming Concepts", 2,
    "In object-oriented programming, encapsulation means:",
    ["Hiding an object's internal data and exposing it only through defined methods", "Copying objects", "Inheriting methods from a parent class", "Running code in parallel"],
    "Encapsulation (data hiding) limits how other code can access an object's state.");
  Q("Programming Concepts", 2,
    "Which combination indicates good software design from a security and maintainability perspective?",
    ["High cohesion and low coupling", "Low cohesion and high coupling", "High cohesion and high coupling", "Low cohesion and low coupling"],
    "Modules should do one thing well (high cohesion) and depend little on others (low coupling), limiting the impact of changes and flaws.");
  Q("Programming Concepts", 2,
    "Polymorphism in OOP allows:",
    ["Objects of different classes to respond to the same method call in their own way", "Data to be hidden", "Classes to inherit from parents", "Code to be compiled"],
    "Polymorphism enables flexible interfaces.");
  Q("Programming Concepts", 3,
    "Which statement about inheritance in OOP is MOST relevant to security?",
    ["Subclasses inherit behaviors and flaws from parent classes, so base classes must be secure",
     "Inheritance prevents all vulnerabilities",
     "Inheritance encrypts data",
     "Inheritance is unrelated to code reuse"],
    "Reuse spreads both good and bad design.");

  // ---------- Acquired software ----------
  Q("Acquired Software", 2,
    "Before purchasing commercial off-the-shelf (COTS) software, what should the organization do?",
    ["Assess the vendor's security practices, vulnerability history and support commitments",
     "Assume it is secure because it is commercial",
     "Request the source code for every product",
     "Skip assessment if it is cheap"],
    "Due diligence includes reviewing certifications, SBOMs, patch policies and contract terms.");
  Q("Acquired Software", 2,
    "What is a key security concern when using open-source software?",
    ["Ensuring components are actively maintained and vulnerabilities are tracked and patched", "Open-source software cannot be used commercially", "Open source never has vulnerabilities", "Open source cannot be audited"],
    "Open source is transparent but depends on community maintenance. Organizations must track and update components.");
  Q("Acquired Software", 3,
    "A vendor goes out of business and stops supporting critical custom software. Which contractual provision would have reduced this risk?",
    ["Source code escrow", "Non-compete clause", "Marketing agreement", "Right to publicize"],
    "Escrow releases source code to the customer under defined conditions, such as vendor bankruptcy.");
  Q("Acquired Software", 2,
    "When using a SaaS application, which security assessment evidence is MOST commonly relied upon?",
    ["Independent attestations such as SOC 2 Type 2 reports or ISO 27001 certification", "The vendor's sales presentation", "Penetration testing the vendor's infrastructure without permission", "Asking other customers informally"],
    "Customers usually cannot test SaaS infrastructure directly, so they rely on third-party assurance and contract terms.");
  Q("Acquired Software", 3,
    "Which statement about Platform as a Service (PaaS) is MOST accurate for application security?",
    ["The customer is responsible for securing the application code and data, while the provider secures the platform",
     "The provider is responsible for all application code",
     "No security controls are needed",
     "PaaS removes the need for authentication"],
    "In PaaS, customers deploy their own code and must secure it and its configuration.");

  // ---------- Malware ----------
  Q("Malicious Code", 2,
    "Which type of malware spreads on its own across networks without user interaction?",
    ["Worm", "Virus", "Trojan horse", "Logic bomb"],
    "Viruses require a host file and user action. Worms self-propagate by exploiting vulnerabilities.");
  Q("Malicious Code", 2,
    "Malicious code that appears to be legitimate software but performs hidden harmful functions is a:",
    ["Trojan horse", "Worm", "Logic bomb", "Rootkit"],
    "Trojans rely on deception. Remote access trojans (RATs) give attackers control.");
  Q("Malicious Code", 2,
    "A logic bomb is:",
    ["Malicious code that executes when a specific condition is met, such as a date or an employee's termination",
     "A worm that spreads by email",
     "A physical explosive device",
     "A type of firewall rule"],
    "Logic bombs are often planted by insiders. Code review and change control help detect them.");
  Q("Malicious Code", 2,
    "Which malware type hides its presence by modifying the operating system to conceal files, processes and network connections?",
    ["Rootkit", "Adware", "Worm", "Macro virus"],
    "Rootkits subvert detection tools. Secure boot, integrity checking and offline scanning help.");
  Q("Malicious Code", 2,
    "A polymorphic virus evades signature detection by:",
    ["Changing its code or encryption with each infection", "Infecting only boot sectors", "Using a single fixed signature", "Running only on Linux"],
    "Metamorphic viruses rewrite themselves completely. Behavioral detection is needed for both.");
  Q("Malicious Code", 3,
    "Fileless malware is difficult to detect because it:",
    ["Runs in memory and abuses legitimate tools such as PowerShell instead of writing files to disk",
     "Has no code",
     "Only infects printers",
     "Is always encrypted on disk"],
    "Living-off-the-land techniques blend in. EDR, script logging and application control help.");
  Q("Malicious Code", 2,
    "A macro virus infects:",
    ["Documents that support macros, such as word processing or spreadsheet files", "Boot sectors only", "Network switches", "BIOS chips only"],
    "Block macros from internet-sourced files by default.");
  Q("Malicious Code", 2,
    "Ransomware typically:",
    ["Encrypts or steals data and demands payment for decryption or to prevent publication", "Only displays ads", "Speeds up computers", "Repairs files"],
    "Modern ransomware uses double extortion. Defenses include backups, segmentation, MFA and patching.");

  // ---------- Assessing software security effectiveness ----------
  Q("Software Assurance", 2,
    "Which activity helps verify that security requirements were implemented correctly before release?",
    ["Security testing and code review mapped to the requirements", "Marketing review", "Writing user manuals", "Purchasing licenses"],
    "Traceability from requirements to tests ensures nothing is missed.");
  Q("Software Assurance", 2,
    "A threat model created during design should be:",
    ["Updated as the application changes and used to guide testing", "Discarded after design approval", "Kept secret from developers", "Created only after a breach"],
    "Threat models are living documents.");
  Q("Software Assurance", 3,
    "Which logging practice BEST supports detecting application attacks?",
    ["Log security-relevant events (authentication, access failures, input validation failures) without sensitive data, and send them to a SIEM",
     "Log full passwords for debugging",
     "Disable logs in production",
     "Log only successful transactions"],
    "Useful logs enable detection and investigation without creating new privacy risks.");
  Q("Software Assurance", 2,
    "Which document defines security requirements that an application must meet, often used as a verification checklist?",
    ["OWASP Application Security Verification Standard (ASVS)", "A privacy notice", "A business impact analysis", "A purchase order"],
    "ASVS has three levels of verification rigor depending on application risk.");
  Q("Software Assurance", 3,
    "Software that has passed all tests is deployed. Two weeks later, a vulnerability is found in a library it uses. Which process should handle this?",
    ["Ongoing vulnerability management for the application's components, including monitoring and patching",
     "Nothing, because it passed testing",
     "Rewrite the entire application",
     "Wait for the next major release in two years"],
    "Security is continuous. SCA monitoring and patch processes address newly disclosed issues.");

  // ---------- AI and emerging topics ----------
  Q("Emerging Risks", 3,
    "An attacker embeds instructions in a document that an AI assistant summarizes, causing it to leak data. This is called:",
    ["Prompt injection", "SQL injection", "Buffer overflow", "Clickjacking"],
    "Applications using large language models must treat external content as untrusted and limit what the model can do with tools and data.");
  Q("Emerging Risks", 3,
    "Training data poisoning in machine learning systems refers to:",
    ["Manipulating training data to cause a model to behave incorrectly or include backdoors",
     "Encrypting training data",
     "Deleting old models",
     "Compressing datasets"],
    "Data provenance, validation and monitoring of model behavior reduce this risk.");

  // ---------- Additional mixed ----------
  Q("SDLC", 2,
    "Security requirements should be defined during which phase of the SDLC?",
    ["Requirements gathering (initiation)", "Deployment", "Disposal", "Maintenance"],
    "Early definition lets architecture and design incorporate controls.");
  Q("SDLC", 2,
    "What should happen during the disposal phase of a system's lifecycle?",
    ["Data is archived or securely destroyed and the system is decommissioned with access removed",
     "The system is left running indefinitely",
     "All data is copied to personal devices",
     "Nothing"],
    "Proper disposal prevents data leakage and orphaned access.");
  Q("SDLC", 3,
    "Which activity in the operations and maintenance phase is MOST important for security?",
    ["Patch management, monitoring and change control", "Writing new marketing material", "Removing logging", "Disabling backups"],
    "Systems must be maintained securely throughout their operational life.");
  Q("Development Methodologies", 2,
    "Which model emphasizes building the application quickly using prototypes and user feedback rather than extensive planning?",
    ["Rapid application development (RAD)", "Waterfall", "Spiral", "V-model"],
    "RAD prioritizes speed. Security must not be skipped in the rush to deliver.");
  Q("Development Methodologies", 3,
    "The V-model differs from waterfall because it:",
    ["Pairs each development phase with a corresponding testing phase", "Has no testing", "Uses only Agile sprints", "Skips requirements"],
    "Verification and validation are planned alongside each design stage.");
  Q("Web Vulnerabilities", 2,
    "Command injection occurs when:",
    ["Untrusted input is passed to a system shell and executed as commands", "Users type commands correctly", "SQL queries use parameters", "Firewalls block traffic"],
    "Avoid calling shells with user input; use safe APIs and strict allow-list validation.");
  Q("Web Vulnerabilities", 3,
    "Which HTTP response header helps mitigate XSS by restricting which scripts a browser will execute?",
    ["Content-Security-Policy", "Cache-Control", "Content-Length", "Accept-Encoding"],
    "CSP defines allowed sources for scripts and other resources and can block inline scripts.");
  Q("Secure Coding", 2,
    "Which practice helps prevent sensitive data from being exposed in logs?",
    ["Mask or exclude passwords, tokens and personal data before logging", "Log all request bodies in full", "Disable log access controls", "Store logs on public shares"],
    "Logs are often less protected than production data.");
  Q("Secure Coding", 3,
    "Time-of-check to time-of-use (TOCTOU) flaws in code are BEST addressed by:",
    ["Performing checks and use atomically or locking the resource", "Adding sleep delays", "Logging more", "Using global variables"],
    "Atomic operations eliminate the window an attacker could exploit.");
  Q("Development Ecosystem", 2,
    "Which tool in the development ecosystem scans code commits for accidentally included passwords and keys?",
    ["Secret scanning", "Load balancer", "Packet sniffer", "Defragmenter"],
    "Secret scanning in repositories and pipelines catches leaks before they spread.");
  Q("Development Ecosystem", 3,
    "Which practice increases trust in build outputs by allowing independent parties to produce identical binaries from the same source?",
    ["Reproducible builds", "Obfuscation", "Polymorphism", "Hot patching"],
    "Reproducible builds help detect tampering in the build process.");
  Q("Acquired Software", 2,
    "Which contract clause allows a customer to verify that a software vendor follows secure development practices?",
    ["Right to audit or assess, with security requirements defined", "Exclusivity clause", "Liquidated damages for late delivery only", "Non-solicitation clause"],
    "Contracts should define security obligations, vulnerability notification timelines and assessment rights.");
  Q("Malicious Code", 3,
    "A backdoor inserted by an insider developer that activates when their account is deleted is BEST detected by:",
    ["Peer code review and separation of duties in the release process", "Increasing disk space", "Antivirus on developer laptops only", "Using longer passwords"],
    "Independent review of code changes is the primary control against malicious insiders in development.");
  Q("API Security", 3,
    "GraphQL APIs introduce which specific risk compared with simple REST endpoints?",
    ["Complex nested queries that can cause denial of service or over-fetching without query depth and cost limits",
     "They cannot use authentication",
     "They only run on mainframes",
     "They do not support HTTPS"],
    "Limit query depth and complexity, disable introspection in production where appropriate, and enforce field-level authorization.");
  Q("Database Security", 2,
    "Which control BEST protects sensitive columns, such as national ID numbers, from database administrators who don't need to see them?",
    ["Column-level encryption with keys managed outside the DBA's control, or dynamic data masking",
     "Giving DBAs full access",
     "Removing the column's index",
     "Using longer column names"],
    "Separation of duties between data access and database administration reduces insider risk.");
  Q("Software Assurance", 2,
    "What is the PRIMARY purpose of a security champion program in development teams?",
    ["Embed security knowledge in each team so security practices scale with development", "Replace the security team", "Approve all releases alone", "Write marketing copy"],
    "Champions promote secure practices, triage findings and liaise with the security team.");
  Q("Secure Coding", 2,
    "Which practice BEST prevents an application from trusting data in hidden form fields, such as a product price?",
    ["Recalculate or look up sensitive values on the server instead of trusting client-supplied data",
     "Hide the field with CSS",
     "Encode the price in Base64",
     "Use a longer field name"],
    "Anything sent to the client can be modified. Authoritative values must come from the server.");
  Q("SDLC", 2,
    "Which SDLC activity identifies security-relevant changes before a new version is released?",
    ["A security review as part of the change and release approval process", "Updating the company logo", "Removing all tests", "Skipping documentation"],
    "Release gates ensure security testing and approvals occur for each change.");
  Q("Web Vulnerabilities", 2,
    "Which vulnerability allows an attacker to make a victim's browser load a malicious redirect from a trusted domain, aiding phishing?",
    ["Open redirect", "Integer overflow", "Deadlock", "Race condition"],
    "Validate redirect targets against an allow list rather than accepting arbitrary URLs.");
  Q("Database Security", 3,
    "Which attack infers database content by asking true/false questions and observing differences in responses or timing?",
    ["Blind SQL injection", "Stored XSS", "CSRF", "Clickjacking"],
    "Even when errors are suppressed, blind techniques can extract data. Parameterized queries prevent the underlying injection.");

  window.CISSP = window.CISSP || { questions: {}, flashcards: {} };
  CISSP.questions[8] = qs;

  // ---------- Flashcards ----------
  const cards = [];
  const F = (t, f, b) => cards.push({ id: "d8-c" + String(cards.length + 1).padStart(3, "0"), t, f, b });

  F("SDLC", "SDLC phases", "Initiation/requirements, design, development, testing, implementation, operations and maintenance, disposal.");
  F("SDLC", "Why build security in early?", "Fixing defects later costs far more.");
  F("Development Methodologies", "Waterfall", "Linear and sequential; inflexible to change.");
  F("Development Methodologies", "Spiral", "Iterative with risk analysis in each loop.");
  F("Development Methodologies", "Agile / Scrum", "Short sprints, backlog, daily stand-ups; product owner and scrum master.");
  F("Development Methodologies", "DevSecOps", "Security automated and shared across the CI/CD pipeline.");
  F("Development Methodologies", "V-model", "Each development phase paired with a testing phase.");
  F("Development Methodologies", "RAD", "Rapid application development with prototypes and feedback.");
  F("Development Methodologies", "IPT", "Integrated product team: multidisciplinary, including security.");
  F("Maturity Models", "CMMI levels", "1 Initial, 2 Managed, 3 Defined, 4 Quantitatively Managed, 5 Optimizing.");
  F("Maturity Models", "SAMM vs BSIMM", "SAMM: prescriptive OWASP model. BSIMM: descriptive, based on observed practices.");
  F("Change Management", "Developer access to production", "Not allowed; separation of duties and change control.");
  F("Change Management", "Repository protection", "Branch protection, code review, signed commits, least privilege.");
  F("Development Ecosystem", "Secrets management", "Vaults and runtime injection; never hardcode; use secret scanning.");
  F("Development Ecosystem", "Code signing", "Authenticity and integrity of the publisher's code, not quality.");
  F("Development Ecosystem", "Supply chain attacks", "Compromised builds or dependencies; defend with SBOM, SCA, SLSA provenance, reproducible builds.");
  F("Development Ecosystem", "Dependency confusion", "Malicious public package shadows an internal name.");
  F("Development Ecosystem", "Memory-safe languages", "Rust, Go, Java, C#: prevent many buffer overflows.");
  F("Development Ecosystem", "RASP", "Runtime self-protection inside the application.");
  F("Web Vulnerabilities", "SQL injection defense", "Parameterized queries, input validation, least-privilege database accounts.");
  F("Web Vulnerabilities", "XSS types", "Stored (persistent), reflected, DOM-based.");
  F("Web Vulnerabilities", "XSS defense", "Context-aware output encoding, input validation, Content Security Policy, HttpOnly cookies.");
  F("Web Vulnerabilities", "CSRF", "Forged authenticated request from the victim's browser. Defense: anti-CSRF tokens, SameSite cookies.");
  F("Web Vulnerabilities", "SSRF", "Server tricked into requesting internal resources. Defense: outbound allow lists, IMDSv2.");
  F("Web Vulnerabilities", "IDOR", "Insecure direct object reference: missing per-object authorization.");
  F("Web Vulnerabilities", "OWASP Top 10 (2021) #1", "Broken access control.");
  F("Web Vulnerabilities", "Insecure deserialization", "Untrusted data turned into objects can cause remote code execution.");
  F("Web Vulnerabilities", "Clickjacking defense", "X-Frame-Options or CSP frame-ancestors.");
  F("Web Vulnerabilities", "Directory traversal", "../ sequences to escape directories; canonicalize and validate paths.");
  F("Web Vulnerabilities", "XXE", "XML external entities; disable in parsers.");
  F("Web Vulnerabilities", "Command injection", "User input executed by a shell; avoid shells, use safe APIs.");
  F("Secure Coding", "Allow list vs block list", "Allow list (known good) is stronger than block list (known bad).");
  F("Secure Coding", "Error handling", "Generic messages to users, detailed logs internally, fail secure.");
  F("Secure Coding", "Buffer overflow defenses", "Bounds checking, safe functions, memory-safe languages, ASLR, DEP, stack canaries.");
  F("Secure Coding", "Password storage", "Salted slow hashes: Argon2, bcrypt, scrypt, PBKDF2.");
  F("Secure Coding", "Cookie flags", "HttpOnly, Secure, SameSite.");
  F("Secure Coding", "Client-side validation", "For usability only; security validation must be server-side.");
  F("API Security", "OWASP API #1", "Broken object-level authorization.");
  F("API Security", "API protections", "Authentication, authorization, rate limiting, input validation, gateway, minimal data exposure.");
  F("Database Security", "ACID", "Atomicity, consistency, isolation, durability.");
  F("Database Security", "Views", "Restrict access to specific rows and columns.");
  F("Database Security", "Concurrency control", "Locks prevent conflicting updates; watch for deadlocks.");
  F("Database Security", "Polyinstantiation", "Multiple records at different classification levels to prevent inference.");
  F("Database Security", "Primary vs foreign key", "Primary: unique row ID. Foreign: references another table's primary key (referential integrity).");
  F("Programming Concepts", "Encapsulation", "Hide internal data; access only through methods.");
  F("Programming Concepts", "Cohesion and coupling", "Aim for high cohesion and low coupling.");
  F("Programming Concepts", "Polymorphism and inheritance", "Polymorphism: same call, different behavior. Inheritance: subclasses reuse parent code (and flaws).");
  F("Acquired Software", "Source code escrow", "Third party holds source code, released if the vendor fails.");
  F("Acquired Software", "SaaS assurance", "Rely on SOC 2, ISO 27001 and contracts.");
  F("Acquired Software", "Shared responsibility: PaaS", "Provider secures the platform; customer secures code, data and configuration.");
  F("Malicious Code", "Virus vs worm vs trojan", "Virus: needs a host and user action. Worm: self-propagates. Trojan: disguised as legitimate software.");
  F("Malicious Code", "Logic bomb", "Code triggered by a condition (date or event).");
  F("Malicious Code", "Rootkit", "Hides malicious activity by subverting the OS.");
  F("Malicious Code", "Polymorphic vs metamorphic", "Polymorphic changes its encryption or appearance; metamorphic rewrites its code.");
  F("Malicious Code", "Fileless malware", "Lives in memory and abuses legitimate tools (living off the land).");
  F("Malicious Code", "Ransomware defenses", "Offline or immutable backups, segmentation, MFA, patching, EDR.");
  F("Software Assurance", "OWASP ASVS", "Application Security Verification Standard with three levels.");
  F("Software Assurance", "Security champions", "Developers who promote security within their teams.");
  F("Emerging Risks", "Prompt injection", "Malicious instructions in content processed by an LLM.");
  F("Emerging Risks", "Data poisoning", "Manipulated training data causes incorrect or backdoored models.");

  CISSP.flashcards[8] = cards;
})();
