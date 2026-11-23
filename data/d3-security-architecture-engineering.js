// Domain 3: Security Architecture and Engineering
// Original practice questions written against the CISSP exam outline topics.
// Format: Q(topic, difficulty 1-3, question, [correct, distractor, distractor, distractor], explanation)
// The correct option is listed first here; the app shuffles options at runtime.
// IDs are assigned by position, so append new questions at the end to keep saved progress stable.
(function () {
  const qs = [];
  const Q = (t, d, q, o, e) => qs.push({ id: "d3-" + String(qs.length + 1).padStart(3, "0"), t, d, q, o, a: 0, e });

  // ---------- Secure design principles ----------
  Q("Secure Design Principles", 2,
    "Which design principle states that a system should deny access by default and require explicit permission to allow it?",
    ["Secure defaults (default deny)", "Open design", "Psychological acceptability", "Economy of mechanism"],
    "Secure defaults mean systems ship and run in the most secure configuration, granting access only when explicitly allowed.");
  Q("Secure Design Principles", 2,
    "The principle that security should not depend on the secrecy of the design, only on the secrecy of keys, is known as:",
    ["Kerckhoffs's principle (open design)", "Security through obscurity", "Least common mechanism", "Complete mediation"],
    "Kerckhoffs's principle holds that a cryptosystem should remain secure even if everything except the key is public. Obscurity alone is not a reliable control.");
  Q("Secure Design Principles", 2,
    "Keeping security mechanisms as small and simple as possible to make them easier to verify reflects which principle?",
    ["Keep it simple (economy of mechanism)", "Defense in depth", "Fail open", "Separation of privilege"],
    "Complexity is the enemy of security. Simple designs have fewer flaws and are easier to analyze and test.");
  Q("Secure Design Principles", 3,
    "Checking authorization on every access to an object, rather than only the first time, is the principle of:",
    ["Complete mediation", "Least common mechanism", "Open design", "Psychological acceptability"],
    "Complete mediation ensures every access request is checked so that changes in permissions take effect immediately and cached decisions cannot be abused.");
  Q("Secure Design Principles", 2,
    "Which model assumes no implicit trust based on network location and requires continuous verification of every request?",
    ["Zero trust", "Perimeter security", "Castle-and-moat", "Implicit allow"],
    "Zero trust (NIST SP 800-207) treats every access request as untrusted, verifying identity, device posture and context and enforcing least privilege per session.");
  Q("Secure Design Principles", 3,
    "In a zero trust architecture (NIST SP 800-207), which component makes the decision to grant, deny or revoke access to a resource?",
    ["Policy engine (within the policy decision point)", "Policy enforcement point", "Data plane switch", "Certificate revocation list"],
    "The policy engine decides, the policy administrator executes the decision, and the policy enforcement point allows or blocks the connection.");
  Q("Secure Design Principles", 2,
    "Under the cloud shared responsibility model for Infrastructure as a Service (IaaS), who is typically responsible for patching the guest operating system?",
    ["The customer", "The cloud provider", "The hypervisor vendor", "Nobody"],
    "In IaaS, the provider secures the physical infrastructure and hypervisor, while the customer manages the guest OS, applications, data and identity configuration.");
  Q("Secure Design Principles", 2,
    "In a Software as a Service (SaaS) model, which responsibility almost always remains with the customer?",
    ["Managing user access and protecting their own data", "Patching the application code", "Physical data center security", "Hypervisor hardening"],
    "Even in SaaS, customers are responsible for their data, user accounts, access permissions and configuration choices.");
  Q("Secure Design Principles", 3,
    "Secure Access Service Edge (SASE) is BEST described as:",
    ["A cloud-delivered combination of networking (SD-WAN) and security services such as SWG, CASB, ZTNA and FWaaS",
     "A type of hardware security module",
     "A symmetric encryption algorithm",
     "A physical perimeter fence design"],
    "SASE converges network and security services into a cloud-delivered model, enforcing policy close to users wherever they are.");
  Q("Secure Design Principles", 2,
    "Designing a system so that a single component failure does not cause a complete security failure is BEST supported by:",
    ["Defense in depth and avoiding single points of failure", "Security through obscurity", "Implicit trust", "Monolithic design"],
    "Layered, redundant controls ensure that one failure does not lead to compromise.");

  // ---------- Security models ----------
  Q("Security Models", 2,
    "The Bell-LaPadula model is primarily concerned with:",
    ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
    "Bell-LaPadula was developed for the U.S. military to prevent unauthorized disclosure of classified information.");
  Q("Security Models", 2,
    "Which Bell-LaPadula rule states that a subject cannot read data at a higher classification level?",
    ["Simple security property (no read up)", "Star property (no write down)", "Simple integrity axiom (no read down)", "Discretionary security property"],
    "No read up prevents subjects from reading information above their clearance.");
  Q("Security Models", 2,
    "The Bell-LaPadula * (star) property prevents:",
    ["Writing information to a lower classification level", "Reading information at a higher level", "Reading information at a lower level", "Writing information to a higher level"],
    "No write down stops a subject from leaking classified information into lower-level objects.");
  Q("Security Models", 2,
    "The Biba model is designed to protect:",
    ["Integrity", "Confidentiality", "Availability", "Accountability"],
    "Biba reverses Bell-LaPadula's rules to prevent corruption of higher-integrity data.");
  Q("Security Models", 2,
    "Under the Biba model, the star integrity axiom states:",
    ["No write up", "No read up", "No write down", "No read down"],
    "Biba: simple integrity axiom is no read down; star integrity axiom is no write up. Lower-integrity subjects cannot contaminate higher-integrity objects.");
  Q("Security Models", 3,
    "Which integrity model uses well-formed transactions, constrained data items, and the access triple (subject, program, object) to enforce separation of duties?",
    ["Clark-Wilson", "Biba", "Bell-LaPadula", "Take-Grant"],
    "Clark-Wilson requires subjects to access constrained data items only through transformation procedures, with integrity verification procedures and separation of duties.");
  Q("Security Models", 2,
    "A consulting firm prevents an analyst who has worked on Bank A's account from accessing data about competitor Bank B. Which model is this?",
    ["Brewer-Nash (Chinese Wall)", "Bell-LaPadula", "Biba", "Graham-Denning"],
    "Brewer-Nash dynamically changes access permissions based on a user's previous access to prevent conflicts of interest.");
  Q("Security Models", 3,
    "Which model defines eight primitive protection rules for securely creating and deleting subjects and objects and granting or transferring rights?",
    ["Graham-Denning", "Brewer-Nash", "Clark-Wilson", "Lipner"],
    "Graham-Denning specifies rules for how subjects and objects are created, deleted and how access rights are assigned and transferred.");
  Q("Security Models", 3,
    "Which model uses a directed graph to show how rights can be passed between subjects and objects?",
    ["Take-Grant", "Bell-LaPadula", "Biba", "Information flow"],
    "Take-Grant uses take, grant, create and remove rules on a graph to analyze how rights can propagate.");
  Q("Security Models", 3,
    "A model that ensures a system always starts, operates and shuts down in a secure state by validating every transition is called a:",
    ["State machine model", "Lattice model", "Non-interference model", "Chinese Wall model"],
    "State machine models (which underlie Bell-LaPadula and Biba) require all state transitions to preserve security.");
  Q("Security Models", 3,
    "A model that ensures actions at a higher security level do not affect or become visible to subjects at a lower level, preventing covert inference, is the:",
    ["Non-interference model", "Take-Grant model", "Graham-Denning model", "Clark-Wilson model"],
    "Non-interference (Goguen-Meseguer) prevents high-level activity from influencing what low-level users observe.");

  // ---------- Evaluation criteria ----------
  Q("Evaluation Criteria", 2,
    "The Common Criteria (ISO/IEC 15408) uses which term to describe the set of security requirements for a category of products, such as firewalls?",
    ["Protection Profile", "Security Target", "Target of Evaluation", "Evaluation Assurance Level"],
    "A Protection Profile states implementation-independent requirements for a product type. A vendor's Security Target describes the claims for its specific product (the Target of Evaluation).");
  Q("Evaluation Criteria", 2,
    "In Common Criteria, which Evaluation Assurance Level represents formally verified design and testing?",
    ["EAL7", "EAL1", "EAL4", "EAL3"],
    "EAL1 is functionally tested; EAL4 is methodically designed, tested and reviewed; EAL7 is formally verified design and tested.");
  Q("Evaluation Criteria", 3,
    "What does a Common Criteria certification tell a buyer?",
    ["The product was evaluated against stated security claims at a given assurance level",
     "The product is free of all vulnerabilities",
     "The product will be secure in any configuration",
     "The product is approved for all classified data"],
    "Certification provides assurance that the product meets its Security Target claims in the evaluated configuration. It does not guarantee the product is free of flaws.");
  Q("Evaluation Criteria", 2,
    "Formal acceptance by a management official of the risk of operating a system, after reviewing its evaluation results, is called:",
    ["Accreditation (authorization)", "Certification", "Evaluation", "Validation"],
    "Certification is the technical evaluation of controls; accreditation (authorization to operate) is management's formal acceptance of residual risk.");

  // ---------- System security capabilities ----------
  Q("System Capabilities", 2,
    "A Trusted Platform Module (TPM) is commonly used to:",
    ["Store keys securely and measure boot integrity on a device",
     "Accelerate graphics rendering",
     "Provide wireless connectivity",
     "Replace the operating system kernel"],
    "The TPM is a hardware chip providing secure key storage, sealing, attestation and platform configuration registers for measured boot.");
  Q("System Capabilities", 2,
    "Which device is a dedicated, tamper-resistant appliance that generates, stores and uses cryptographic keys for many applications in a data center?",
    ["Hardware security module (HSM)", "TPM", "Network switch", "Load balancer"],
    "HSMs provide high-assurance key management and cryptographic operations for servers and applications, often validated to FIPS 140-3.");
  Q("System Capabilities", 2,
    "What is the purpose of the reference monitor concept?",
    ["To mediate all access by subjects to objects in a tamperproof, always-invoked, verifiable way",
     "To monitor network bandwidth",
     "To log user keystrokes",
     "To provide a backup of system files"],
    "The reference monitor is an abstract machine enforcing access control. Its implementation is the security kernel within the trusted computing base.");
  Q("System Capabilities", 2,
    "The trusted computing base (TCB) is:",
    ["The combination of hardware, firmware and software components that enforce the security policy",
     "The list of trusted vendors",
     "A database of trusted users",
     "The set of all applications on a system"],
    "The TCB includes all components critical to security. The security perimeter separates the TCB from the rest of the system.");
  Q("System Capabilities", 2,
    "Process isolation in an operating system primarily ensures that:",
    ["One process cannot access the memory of another process",
     "Processes run faster",
     "All processes share the same memory space",
     "Users cannot start processes"],
    "Memory isolation prevents processes from reading or altering each other's data, a key protection against malware and bugs.");
  Q("System Capabilities", 3,
    "Which CPU protection ring model places the operating system kernel at the MOST privileged level?",
    ["Ring 0", "Ring 3", "Ring 1", "Ring 2"],
    "Ring 0 is the most privileged (kernel mode). User applications run in Ring 3 (user mode).");
  Q("System Capabilities", 3,
    "Address space layout randomization (ASLR) is designed to mitigate:",
    ["Memory corruption exploits that rely on predictable memory addresses",
     "Phishing attacks",
     "Brute-force password attacks",
     "Physical theft of servers"],
    "ASLR randomizes where code and data are loaded, making it harder for attackers to reliably jump to known locations.");
  Q("System Capabilities", 2,
    "Data execution prevention (DEP) protects systems by:",
    ["Marking memory regions as non-executable so injected code in data areas cannot run",
     "Encrypting all memory",
     "Preventing users from running any programs",
     "Blocking network connections"],
    "DEP (NX bit) stops many buffer overflow attacks that place shellcode on the stack or heap.");
  Q("System Capabilities", 3,
    "Secure boot helps protect systems by:",
    ["Verifying digital signatures of firmware, bootloaders and the kernel before they execute",
     "Encrypting the hard drive",
     "Requiring two passwords at login",
     "Scanning email attachments"],
    "UEFI Secure Boot allows only trusted, signed code to load during startup, defending against bootkits and rootkits.");

  // ---------- Vulnerabilities in architectures ----------
  Q("Architecture Vulnerabilities", 2,
    "What is the PRIMARY security risk unique to virtualized environments?",
    ["VM escape, where an attacker breaks out of a guest to the hypervisor or other guests",
     "Faster CPU performance",
     "Lower electricity bills",
     "Simplified patching"],
    "If a guest can compromise the hypervisor, every VM on the host is at risk. Keep hypervisors patched and minimize their attack surface.");
  Q("Architecture Vulnerabilities", 2,
    "The uncontrolled growth of virtual machines that are poorly tracked and patched is called:",
    ["VM sprawl", "VM escape", "Hyperjacking", "Containerization"],
    "VM sprawl leads to forgotten, unpatched systems. Lifecycle management and inventory help control it.");
  Q("Architecture Vulnerabilities", 2,
    "Containers differ from virtual machines in that containers:",
    ["Share the host operating system kernel",
     "Each include a full guest operating system",
     "Cannot run on Linux",
     "Are immune to vulnerabilities"],
    "Containers isolate processes using kernel features such as namespaces and cgroups. Sharing the kernel makes them lightweight, but a kernel flaw can affect all containers.");
  Q("Architecture Vulnerabilities", 3,
    "Which practice BEST improves the security of container images?",
    ["Use minimal trusted base images, scan for vulnerabilities and sign images",
     "Run all containers as root",
     "Download images from any public repository",
     "Embed secrets in the image"],
    "Minimal, scanned and signed images reduce attack surface and supply chain risk. Secrets should be injected at runtime from a vault.");
  Q("Architecture Vulnerabilities", 2,
    "Industrial control systems (ICS) and SCADA environments often prioritize which security objective above the others?",
    ["Availability and safety", "Confidentiality", "Non-repudiation", "Anonymity"],
    "Disruption of physical processes can endanger lives. These systems often can't be patched or rebooted easily, so availability and safety dominate.");
  Q("Architecture Vulnerabilities", 3,
    "What is the BEST way to protect legacy SCADA devices that cannot be patched?",
    ["Network segmentation and isolation, with tightly controlled and monitored access",
     "Connect them directly to the internet for remote updates",
     "Replace passwords with default credentials",
     "Disable all logging to improve performance"],
    "Compensating controls such as segmentation (for example, following the Purdue model or ISA/IEC 62443 zones and conduits), firewalls and monitoring reduce exposure.");
  Q("Architecture Vulnerabilities", 2,
    "Which is a common weakness of many IoT devices?",
    ["Default credentials and lack of timely firmware updates",
     "Overly complex encryption",
     "Too much memory",
     "Mandatory multifactor authentication"],
    "IoT devices often ship with weak defaults, limited update mechanisms and minimal security features, making them attractive targets for botnets.");
  Q("Architecture Vulnerabilities", 2,
    "In serverless computing (Function as a Service), which security responsibility remains with the customer?",
    ["Securing function code, its permissions and its dependencies",
     "Patching the underlying servers",
     "Physical security of the data center",
     "Hypervisor configuration"],
    "The provider manages infrastructure, but the customer must write secure code, apply least privilege to function roles and manage third-party libraries.");
  Q("Architecture Vulnerabilities", 3,
    "A microservices architecture increases the attack surface PRIMARILY because:",
    ["Many services communicate over the network through APIs that must each be authenticated and authorized",
     "Microservices cannot be encrypted",
     "They always run on mainframes",
     "They do not support logging"],
    "Each service and API is a potential entry point. Service meshes, mutual TLS and API gateways help secure service-to-service communication.");
  Q("Architecture Vulnerabilities", 2,
    "A database attack where a user deduces sensitive information from non-sensitive query results is called:",
    ["Inference", "Aggregation", "Polyinstantiation", "Normalization"],
    "Inference attacks derive restricted information from available data. Countermeasures include polyinstantiation, cell suppression and noise.");
  Q("Architecture Vulnerabilities", 3,
    "Which attack exploits the time gap between checking a resource's state and using it?",
    ["Time-of-check to time-of-use (TOCTOU) race condition",
     "Buffer overflow",
     "Cross-site scripting",
     "Pass-the-hash"],
    "If an attacker changes the resource between the check and the use (for example, swapping a file for a symbolic link), the security decision becomes invalid.");
  Q("Architecture Vulnerabilities", 3,
    "A covert channel that conveys information by modulating the use of system resources over time, such as CPU load, is a:",
    ["Covert timing channel", "Covert storage channel", "Overt channel", "Side door"],
    "Timing channels signal through the timing of events. Storage channels write to shared storage locations, such as file attributes, that another process can read.");
  Q("Architecture Vulnerabilities", 3,
    "Spectre and Meltdown are examples of which class of vulnerability?",
    ["Side-channel attacks exploiting speculative execution in CPUs",
     "SQL injection",
     "Social engineering",
     "Buffer overflows in web browsers only"],
    "These hardware flaws let attackers infer protected memory contents by measuring cache timing effects of speculative execution.");
  Q("Architecture Vulnerabilities", 2,
    "A developer leaves an undocumented access method in software that bypasses normal authentication. This is called a:",
    ["Maintenance hook (backdoor)", "Logic bomb", "Rootkit", "Honeypot"],
    "Maintenance hooks may be convenient during development, but they must be removed before release because attackers can abuse them.");
  Q("Architecture Vulnerabilities", 2,
    "Edge computing introduces which security challenge?",
    ["Many distributed devices in less physically secure locations that must be managed and patched",
     "All data is processed in a single central data center",
     "No need for authentication",
     "Reduced attack surface in every case"],
    "Edge nodes push processing closer to data sources, increasing the number of locations and devices to secure.");
  Q("Architecture Vulnerabilities", 3,
    "In a high-performance computing or grid environment, what is a key security concern?",
    ["Trust and integrity of results from many distributed nodes and protection of shared resources",
     "Too few processors",
     "The inability to run Linux",
     "Excessive use of paper records"],
    "Distributed systems must validate nodes, protect data across many systems, and guard against compromised participants altering results.");
  Q("Architecture Vulnerabilities", 2,
    "Embedded systems in medical devices are difficult to secure MAINLY because:",
    ["They have limited resources, long lifecycles and regulatory constraints on updates",
     "They always run the latest operating systems",
     "They never connect to networks",
     "They have unlimited processing power"],
    "Resource constraints and certification requirements make patching slow, so network isolation and vendor coordination are critical.");

  // ---------- Cryptography fundamentals ----------
  Q("Cryptography", 1,
    "Symmetric encryption uses:",
    ["The same secret key to encrypt and decrypt", "A public key to encrypt and a private key to decrypt", "No key at all", "A hash to encrypt"],
    "Symmetric algorithms (such as AES) are fast and suited to bulk data but require secure key distribution.");
  Q("Cryptography", 2,
    "How many keys are needed for 50 users to communicate privately in pairs using only symmetric encryption?",
    ["1,225", "50", "100", "2,500"],
    "n(n − 1)/2 = 50 × 49 / 2 = 1,225 keys. Asymmetric cryptography needs only 2 keys per user (100 keys).");
  Q("Cryptography", 2,
    "Which algorithm is the current U.S. standard for symmetric encryption?",
    ["AES (Rijndael)", "DES", "RSA", "MD5"],
    "AES (FIPS 197) supports 128-, 192- and 256-bit keys with a 128-bit block size. DES is obsolete due to its 56-bit key.");
  Q("Cryptography", 2,
    "When Alice wants to send Bob a confidential message using asymmetric encryption, which key does she use to encrypt it?",
    ["Bob's public key", "Alice's private key", "Alice's public key", "Bob's private key"],
    "Encrypting with the recipient's public key ensures only the recipient's private key can decrypt it.");
  Q("Cryptography", 2,
    "To create a digital signature, the sender:",
    ["Hashes the message and encrypts the hash with the sender's private key",
     "Encrypts the message with the recipient's public key",
     "Hashes the message with the recipient's private key",
     "Encrypts the hash with the sender's public key"],
    "Anyone can verify the signature with the sender's public key, which provides integrity, authentication of origin and non-repudiation.");
  Q("Cryptography", 2,
    "Which cryptographic service does a hash function alone provide?",
    ["Integrity", "Confidentiality", "Non-repudiation", "Authentication of the sender"],
    "A hash detects changes. To authenticate the sender as well, use an HMAC (shared key) or a digital signature (private key).");
  Q("Cryptography", 2,
    "An HMAC provides which combination of services?",
    ["Integrity and authentication of the message origin using a shared secret",
     "Confidentiality only",
     "Non-repudiation",
     "Key exchange"],
    "HMAC combines a hash function with a secret key. Because both parties share the key, it cannot provide non-repudiation.");
  Q("Cryptography", 2,
    "Which algorithm is used for key agreement, allowing two parties to establish a shared secret over an insecure channel?",
    ["Diffie-Hellman", "AES", "SHA-256", "RC4"],
    "Diffie-Hellman (and its elliptic curve variant ECDH) lets parties derive a shared key without transmitting it. On its own, it does not authenticate the parties.");
  Q("Cryptography", 3,
    "Why is elliptic curve cryptography (ECC) attractive for mobile and IoT devices?",
    ["It provides equivalent security to RSA with much smaller keys, saving computation and power",
     "It is a symmetric algorithm",
     "It requires no keys",
     "It is immune to all quantum attacks"],
    "A 256-bit ECC key offers security roughly comparable to a 3,072-bit RSA key, reducing processing and bandwidth.");
  Q("Cryptography", 3,
    "Which block cipher mode should be AVOIDED because identical plaintext blocks produce identical ciphertext blocks?",
    ["Electronic Codebook (ECB)", "Galois/Counter Mode (GCM)", "Cipher Block Chaining (CBC)", "Counter (CTR)"],
    "ECB leaks patterns in the data. GCM is widely preferred because it provides both confidentiality and authentication (AEAD).");
  Q("Cryptography", 3,
    "What does perfect forward secrecy (PFS) provide in protocols such as TLS?",
    ["Compromise of a long-term private key does not expose past session keys",
     "Encryption never needs keys",
     "Sessions never expire",
     "Certificates never need renewal"],
    "PFS uses ephemeral key exchanges (such as ECDHE) so each session key is independent and cannot be derived later from the server's long-term key.");
  Q("Cryptography", 2,
    "Which hash algorithm is considered broken for collision resistance and should not be used for digital signatures?",
    ["MD5", "SHA-256", "SHA-3", "SHA-512"],
    "Practical collisions have been demonstrated for MD5 and SHA-1. Use SHA-2 or SHA-3 family hashes.");
  Q("Cryptography", 3,
    "A one-time pad is theoretically unbreakable ONLY if:",
    ["The key is truly random, at least as long as the message, used once and kept secret",
     "The key is shorter than the message",
     "The key is reused for efficiency",
     "The key is generated from a password"],
    "Violating any of these conditions (for example, reusing a pad) makes it vulnerable. Key distribution makes it impractical for most uses.");
  Q("Cryptography", 2,
    "Adding a random value to a password before hashing it, so identical passwords produce different hashes, is called:",
    ["Salting", "Peppering only", "Key stretching only", "Padding"],
    "Salts defeat precomputed rainbow tables. Key stretching algorithms such as bcrypt, scrypt, Argon2 or PBKDF2 also slow brute-force attacks.");
  Q("Cryptography", 3,
    "Which cryptographic approach is being standardized to resist attacks from large-scale quantum computers?",
    ["Post-quantum cryptography such as lattice-based algorithms (for example, ML-KEM)",
     "Increasing DES key length to 64 bits",
     "Using MD5 twice",
     "Switching from AES to RC4"],
    "NIST published post-quantum standards in 2024 (FIPS 203 ML-KEM, FIPS 204 ML-DSA, FIPS 205 SLH-DSA). Shor's algorithm threatens RSA and ECC.");
  Q("Cryptography", 2,
    "What is the BEST description of 'key escrow'?",
    ["A trusted third party holds copies of keys so they can be recovered under defined conditions",
     "Destroying keys after use",
     "Using the same key for every user",
     "Publishing private keys online"],
    "Escrow supports recovery (for example, when an employee leaves) but must be tightly controlled because the escrow agent becomes a high-value target.");
  Q("Cryptography", 3,
    "Requiring multiple custodians to each supply part of a key before it can be used is called:",
    ["Split knowledge (M of N control)", "Key stretching", "Key wrapping", "Key clustering"],
    "Split knowledge and dual control prevent any single person from accessing a critical key, such as an HSM master key.");

  // ---------- PKI ----------
  Q("PKI", 2,
    "In a public key infrastructure, what entity issues and signs digital certificates?",
    ["Certificate authority (CA)", "Registration authority (RA)", "Relying party", "Key escrow agent"],
    "The CA signs certificates binding a public key to an identity. An RA verifies identity on the CA's behalf but does not sign certificates.");
  Q("PKI", 2,
    "Which standard defines the format of digital certificates used in TLS?",
    ["X.509", "X.500", "802.1X", "PKCS #12 only"],
    "X.509 defines certificate fields such as subject, issuer, validity period, public key and extensions.");
  Q("PKI", 2,
    "Which mechanism allows a client to check the revocation status of a single certificate in real time?",
    ["Online Certificate Status Protocol (OCSP)", "Certificate signing request", "X.509 extensions", "Key escrow"],
    "OCSP queries a responder for the status of one certificate. CRLs are periodically published lists of revoked certificates. OCSP stapling lets the server provide a signed status response.");
  Q("PKI", 3,
    "Why is an offline root CA a best practice?",
    ["Compromise of the root would undermine trust in every certificate under it, so it is kept offline and used only to sign subordinate CAs",
     "Root CAs cannot be connected to networks for technical reasons",
     "Offline CAs issue certificates faster",
     "It eliminates the need for revocation"],
    "Keeping the root offline (often in an HSM in a vault) minimizes exposure. Issuing CAs handle day-to-day certificate requests.");
  Q("PKI", 3,
    "Certificate pinning in a mobile app helps defend against:",
    ["Man-in-the-middle attacks using fraudulent but trusted certificates",
     "SQL injection",
     "Brute-force password guessing",
     "Physical theft of servers"],
    "Pinning restricts which certificates or public keys the app accepts, so an attacker with a certificate from another CA cannot intercept traffic. It must be managed carefully to avoid outages.");

  // ---------- Cryptanalytic attacks ----------
  Q("Cryptanalytic Attacks", 2,
    "An attacker has access to several plaintext messages and their corresponding ciphertext. Which attack is this?",
    ["Known-plaintext attack", "Ciphertext-only attack", "Chosen-ciphertext attack", "Birthday attack"],
    "In a known-plaintext attack, the attacker has plaintext-ciphertext pairs and tries to derive the key.");
  Q("Cryptanalytic Attacks", 2,
    "The birthday attack targets which property of hash functions?",
    ["Collision resistance", "Confidentiality", "Key length", "Availability"],
    "Due to the birthday paradox, finding any two inputs with the same hash takes about 2^(n/2) attempts for an n-bit hash.");
  Q("Cryptanalytic Attacks", 3,
    "An attacker measures how long a smart card takes to perform cryptographic operations to deduce the key. This is a:",
    ["Side-channel (timing) attack", "Brute-force attack", "Dictionary attack", "Replay attack"],
    "Side-channel attacks exploit physical leakage such as timing, power consumption or electromagnetic emissions rather than weaknesses in the algorithm itself.");
  Q("Cryptanalytic Attacks", 2,
    "Which attack is defeated by including timestamps or nonces in authentication messages?",
    ["Replay attack", "Birthday attack", "Frequency analysis", "Meet-in-the-middle"],
    "Replay attacks resend captured valid messages. Nonces, timestamps and sequence numbers make each message unique.");
  Q("Cryptanalytic Attacks", 3,
    "Why was Double DES not adopted as a stronger replacement for DES?",
    ["A meet-in-the-middle attack reduces its effective strength to about that of single DES",
     "It was too fast",
     "It used public keys",
     "It required quantum computers"],
    "Meet-in-the-middle attacks make 2DES only marginally stronger than DES. 3DES was used instead until it, too, was deprecated.");
  Q("Cryptanalytic Attacks", 2,
    "Analyzing the frequency of letters in ciphertext to break a substitution cipher is known as:",
    ["Frequency analysis", "Brute force", "Pass-the-hash", "Rainbow table attack"],
    "Simple substitution ciphers preserve letter frequency patterns, which reveal the mapping.");
  Q("Cryptanalytic Attacks", 3,
    "An attacker forces an employee to reveal an encryption key through threats. This is informally called a:",
    ["Rubber-hose (coercion) attack", "Birthday attack", "Chosen-plaintext attack", "Fault injection"],
    "Attacks on people often bypass strong cryptography. Controls include split knowledge and duress procedures.");
  Q("Cryptanalytic Attacks", 3,
    "Fault injection attacks against cryptographic hardware work by:",
    ["Inducing errors (for example, via voltage glitches or lasers) and analyzing faulty outputs to recover secrets",
     "Guessing passwords from a dictionary",
     "Intercepting network packets",
     "Sending phishing emails"],
    "Faults can cause devices to leak key material. Tamper-resistant hardware detects and responds to abnormal conditions.");

  // ---------- Site and facility design ----------
  Q("Site and Facility Security", 2,
    "Crime Prevention Through Environmental Design (CPTED) relies on which strategies?",
    ["Natural access control, natural surveillance and territorial reinforcement",
     "Armed guards at every door",
     "Encryption of all data",
     "Biometric locks only"],
    "CPTED uses landscaping, lighting, sightlines and layout to deter crime and guide people naturally.");
  Q("Site and Facility Security", 2,
    "What is the PRIMARY purpose of a mantrap (access control vestibule)?",
    ["Prevent tailgating and piggybacking by allowing only one person through at a time",
     "Store backup tapes",
     "Reduce heating costs",
     "Display visitor badges"],
    "A vestibule has two interlocking doors; the second opens only after the first closes and the person is authenticated.");
  Q("Site and Facility Security", 2,
    "Where should a data center ideally be located within a multi-story building?",
    ["In the core of the building, away from exterior walls and not on the top floor or basement",
     "On the top floor near the roof",
     "In the basement near water pipes",
     "Next to the lobby for easy access"],
    "Central locations reduce exposure to external threats, flooding (basements) and roof leaks or weather (top floors).");
  Q("Site and Facility Security", 2,
    "Which fire suppression system is BEST suited for a data center because it releases water only after a fire is detected and the pipe fills?",
    ["Pre-action system", "Wet pipe system", "Deluge system", "Dry chemical extinguisher in every rack"],
    "Pre-action systems require two triggers, reducing the risk of accidental discharge. Wet pipe systems hold water in the pipes at all times.");
  Q("Site and Facility Security", 2,
    "A Class C fire involves:",
    ["Energized electrical equipment", "Ordinary combustibles like paper", "Flammable liquids", "Combustible metals"],
    "In the U.S. classification: A is common combustibles, B is liquids and gases, C is electrical, D is metals, and K is cooking oils. Use non-conductive agents on Class C fires.");
  Q("Site and Facility Security", 2,
    "Which gas-based suppression agent is commonly used in data centers as a replacement for Halon?",
    ["FM-200 (HFC-227ea) or inert gases such as Inergen",
     "Carbon dioxide in occupied rooms",
     "Water mist only",
     "Soda acid"],
    "Halon production was banned due to ozone depletion. Clean agents suppress fire without damaging equipment. CO2 can be lethal in occupied spaces.");
  Q("Site and Facility Security", 2,
    "A prolonged period of low voltage on the power supply is called a:",
    ["Brownout", "Blackout", "Spike", "Surge"],
    "Sag: momentary low voltage. Brownout: prolonged low voltage. Spike: momentary high voltage. Surge: prolonged high voltage. Fault: momentary power loss. Blackout: prolonged loss.");
  Q("Site and Facility Security", 2,
    "Which device provides short-term power to allow systems to shut down gracefully or for a generator to start?",
    ["Uninterruptible power supply (UPS)", "Surge protector only", "Power strip", "Voltage meter"],
    "A UPS bridges power outages with batteries. Generators provide longer-term power.");
  Q("Site and Facility Security", 2,
    "What is the recommended relative humidity range for a data center to avoid static electricity and condensation?",
    ["Roughly 40% to 60%", "0% to 10%", "80% to 95%", "Humidity does not matter"],
    "Low humidity increases static discharge; high humidity causes condensation and corrosion. ASHRAE guidelines give detailed ranges.");
  Q("Site and Facility Security", 3,
    "Data centers use a hot aisle/cold aisle layout to:",
    ["Improve cooling efficiency by separating intake and exhaust air",
     "Prevent tailgating",
     "Reduce cabling costs",
     "Increase humidity"],
    "Racks face each other so cool air enters from the cold aisle and hot exhaust is collected from the hot aisle, improving efficiency.");
  Q("Site and Facility Security", 2,
    "Which physical control is BEST at deterring and delaying intruders at the outer perimeter?",
    ["Fencing (for example, 8 feet with barbed wire) and lighting",
     "Badge readers on the server room",
     "Encrypted hard drives",
     "Screen privacy filters"],
    "Perimeter fencing of 6 to 7 feet deters climbing, and 8 feet with barbed wire deters determined intruders. Lighting supports surveillance.");
  Q("Site and Facility Security", 2,
    "Electronic doors in a building's emergency exit path should typically be configured to:",
    ["Fail safe (unlock) on power failure to protect life",
     "Fail secure (lock) on power failure",
     "Stay locked during fire alarms",
     "Require two badges to exit"],
    "Life safety comes first. Exit doors fail safe so people can evacuate. Doors protecting critical assets (with no egress role) may fail secure.");
  Q("Site and Facility Security", 3,
    "Which type of intrusion detection sensor detects changes in the heat signature of a monitored area?",
    ["Passive infrared (PIR)", "Photoelectric beam", "Ultrasonic", "Magnetic door contact"],
    "PIR sensors detect infrared energy changes caused by people moving. Other sensors detect broken beams, wave changes or door openings.");
  Q("Site and Facility Security", 2,
    "In a wiring closet, which control is MOST important?",
    ["Restricting and logging physical access", "Painting the door", "Storing cleaning supplies inside", "Leaving it unlocked for convenience"],
    "Physical access to network equipment enables tapping, rogue devices and disruption, so closets must be secured like other sensitive spaces.");
  Q("Site and Facility Security", 3,
    "Shielding equipment to prevent the interception of electromagnetic emanations is known as:",
    ["TEMPEST", "CPTED", "Faraday encoding", "RAID"],
    "TEMPEST standards address compromising emanations. Faraday cages, white noise and control zones are related countermeasures.");

  // ---------- Additional mixed ----------
  Q("Secure Design Principles", 3,
    "An architect designs a payment system so that two independent administrators must approve production configuration changes. Which principle applies?",
    ["Separation of privilege (separation of duties)", "Least common mechanism", "Open design", "Psychological acceptability"],
    "Requiring multiple conditions or people for a sensitive action reduces the risk of abuse or error by a single individual.");
  Q("Secure Design Principles", 2,
    "Designing security controls so users can easily follow them, reducing workarounds, reflects:",
    ["Psychological acceptability (usable security)", "Security through obscurity", "Fail open", "Complete mediation"],
    "Controls that are too cumbersome encourage users to bypass them. Usable security improves compliance.");
  Q("Cryptography", 2,
    "Which statement about block and stream ciphers is TRUE?",
    ["Block ciphers encrypt fixed-size blocks; stream ciphers encrypt data one bit or byte at a time using a keystream",
     "Stream ciphers always use public keys",
     "Block ciphers cannot use keys",
     "Stream ciphers encrypt data in 128-bit blocks only"],
    "AES is a block cipher; ChaCha20 is a modern stream cipher. Block ciphers in counter mode behave like stream ciphers.");
  Q("Cryptography", 3,
    "Which property of a cryptographic algorithm means a small change in the plaintext produces a significantly different ciphertext?",
    ["Avalanche effect (diffusion)", "Key clustering", "Work factor", "Non-repudiation"],
    "Strong algorithms exhibit the avalanche effect. Confusion hides the relationship between key and ciphertext; diffusion spreads plaintext influence across the ciphertext.");
  Q("Cryptography", 2,
    "The time and effort required to break a cryptosystem is called its:",
    ["Work factor", "Key space", "Initialization vector", "Nonce"],
    "A high work factor makes attacks impractical. Key length strongly influences it.");
  Q("System Capabilities", 3,
    "Which technology provides hardware-isolated regions of memory where code and data are protected even from a compromised operating system?",
    ["Trusted execution environment (for example, Intel SGX, AMD SEV, ARM TrustZone)",
     "Virtual LAN",
     "RAID 5",
     "Swap file"],
    "TEEs enable confidential computing by isolating sensitive workloads from the host OS and hypervisor.");
  Q("Architecture Vulnerabilities", 2,
    "Which risk is MOST associated with multitenancy in public cloud environments?",
    ["Data leakage between tenants due to misconfiguration or isolation failures",
     "Unlimited physical access for customers",
     "No need for encryption",
     "Inability to scale"],
    "Shared infrastructure requires strong logical isolation. Customers should encrypt data and configure access carefully.");
  Q("Architecture Vulnerabilities", 3,
    "A misconfigured cloud storage bucket exposed customer data publicly. Under the shared responsibility model, who is MOST likely responsible?",
    ["The customer, because they control storage access configuration",
     "The cloud provider",
     "The internet service provider",
     "The certificate authority"],
    "Configuration of access policies is a customer responsibility. Cloud security posture management tools help detect such misconfigurations.");
  Q("Evaluation Criteria", 3,
    "Which historical evaluation standard, known as the 'Orange Book', focused mainly on confidentiality in stand-alone systems?",
    ["TCSEC", "ITSEC", "Common Criteria", "FIPS 140"],
    "TCSEC (Trusted Computer System Evaluation Criteria) rated systems from D to A1. It was superseded by the Common Criteria.");
  Q("Site and Facility Security", 2,
    "Which control BEST verifies a visitor's identity and tracks their presence in a facility?",
    ["Visitor sign-in with ID check, badges and escort", "Open lobby with no reception", "Allowing visitors to tailgate", "Posting a welcome sign"],
    "Visitor management ensures accountability and limits unescorted access.");
  Q("Cryptography", 3,
    "Which mechanism BEST provides integrity, authenticity and confidentiality in a single operation?",
    ["Authenticated encryption such as AES-GCM", "AES in ECB mode", "MD5 hashing", "Base64 encoding"],
    "AEAD modes (such as GCM or ChaCha20-Poly1305) encrypt data and produce an authentication tag that detects tampering.");
  Q("PKI", 2,
    "A user's private key has been compromised. What should happen to the associated certificate?",
    ["It should be revoked and published on the CRL/OCSP responder",
     "Nothing until it expires",
     "It should be renewed with the same key",
     "It should be emailed to all contacts"],
    "Revocation tells relying parties not to trust the certificate. A new key pair and certificate should then be issued.");
  Q("Cryptography", 2,
    "Steganography is BEST described as:",
    ["Hiding the existence of a message within another medium, such as an image",
     "Encrypting data with a public key",
     "Hashing a message",
     "Compressing files"],
    "Steganography conceals that communication is happening. It can be combined with encryption for confidentiality.");
  Q("System Capabilities", 2,
    "Which feature of virtualization helps contain malware by running untrusted code in an isolated environment?",
    ["Sandboxing", "Load balancing", "Thin provisioning", "Port mirroring"],
    "Sandboxes restrict what code can access, limiting damage if it is malicious.");
  Q("Secure Design Principles", 3,
    "Which statement BEST describes 'trust but verify' in architecture?",
    ["Grant access as needed but continuously monitor and validate behavior and controls",
     "Trust all internal users permanently",
     "Never grant any access",
     "Verify only during annual audits"],
    "Verification through monitoring, logging and periodic review ensures trust is warranted. Zero trust takes this further by not assuming trust at all.");
  Q("Architecture Vulnerabilities", 2,
    "Firmware on network devices should be:",
    ["Kept updated from authenticated vendor sources and verified with signatures",
     "Never updated once installed",
     "Downloaded from any website",
     "Modified by users for performance"],
    "Firmware vulnerabilities can give attackers persistent, low-level control. Signed updates and integrity checks are essential.");

  window.CISSP = window.CISSP || { questions: {}, flashcards: {} };
  CISSP.questions[3] = qs;

  // ---------- Flashcards ----------
  const cards = [];
  const F = (t, f, b) => cards.push({ id: "d3-c" + String(cards.length + 1).padStart(3, "0"), t, f, b });

  F("Secure Design Principles", "Saltzer and Schroeder principles", "Economy of mechanism, fail-safe defaults, complete mediation, open design, separation of privilege, least privilege, least common mechanism, psychological acceptability.");
  F("Secure Design Principles", "Kerckhoffs's principle", "A system should be secure even if everything except the key is public.");
  F("Secure Design Principles", "Complete mediation", "Check authorization on every access.");
  F("Secure Design Principles", "Zero trust", "Never trust, always verify; no implicit trust from network location (NIST SP 800-207).");
  F("Secure Design Principles", "Zero trust components", "Policy engine (decides), policy administrator (executes), policy enforcement point (allows or blocks).");
  F("Secure Design Principles", "Shared responsibility: IaaS", "Provider: physical, network, hypervisor. Customer: OS, apps, data, identity.");
  F("Secure Design Principles", "Shared responsibility: SaaS", "Provider runs the application. Customer: data, users, access and configuration.");
  F("Secure Design Principles", "SASE", "Cloud-delivered SD-WAN plus security (SWG, CASB, ZTNA, FWaaS).");
  F("Security Models", "Bell-LaPadula", "Confidentiality. Simple security: no read up. * property: no write down. Strong star: read and write at same level only.");
  F("Security Models", "Biba", "Integrity. Simple integrity: no read down. * integrity: no write up.");
  F("Security Models", "Clark-Wilson", "Integrity via well-formed transactions: access triple (subject, program, object), CDIs, UDIs, TPs, IVPs, separation of duties.");
  F("Security Models", "Brewer-Nash", "Chinese Wall: dynamic access to prevent conflicts of interest.");
  F("Security Models", "Graham-Denning", "Eight rules for creating and deleting subjects and objects and assigning rights.");
  F("Security Models", "Take-Grant", "Directed graph showing how rights pass between subjects (take, grant, create, remove).");
  F("Security Models", "State machine model", "The system is secure in every state and every transition.");
  F("Security Models", "Non-interference", "High-level actions don't affect what low-level users see.");
  F("Evaluation Criteria", "Common Criteria terms", "Protection Profile (requirements for a product type), Security Target (vendor claims), Target of Evaluation (the product), EAL (assurance level).");
  F("Evaluation Criteria", "EAL levels", "EAL1 functionally tested, EAL2 structurally, EAL3 methodically tested and checked, EAL4 methodically designed, tested and reviewed, EAL5 semiformally designed, EAL6 semiformally verified, EAL7 formally verified.");
  F("Evaluation Criteria", "Certification vs accreditation", "Certification: technical evaluation. Accreditation (ATO): management accepts the risk.");
  F("Evaluation Criteria", "TCSEC", "'Orange Book': confidentiality-focused ratings D to A1; replaced by Common Criteria.");
  F("System Capabilities", "TPM", "Chip on the motherboard: secure key storage, measured boot, attestation, sealing.");
  F("System Capabilities", "HSM", "Dedicated tamper-resistant appliance for key generation, storage and crypto operations.");
  F("System Capabilities", "Reference monitor", "Concept that mediates all access: tamperproof, always invoked, verifiable. Implemented by the security kernel.");
  F("System Capabilities", "Trusted computing base", "All hardware, firmware and software that enforce the security policy.");
  F("System Capabilities", "Protection rings", "Ring 0 kernel (most privileged) to Ring 3 user applications.");
  F("System Capabilities", "ASLR and DEP", "ASLR randomizes memory addresses. DEP/NX marks data memory non-executable.");
  F("System Capabilities", "Secure boot", "Verifies signatures of boot components before execution.");
  F("System Capabilities", "Trusted execution environment", "Hardware-isolated enclave protecting code and data in use (SGX, SEV, TrustZone).");
  F("Architecture Vulnerabilities", "VM escape", "Breaking out of a guest VM to the hypervisor or other guests.");
  F("Architecture Vulnerabilities", "VM sprawl", "Uncontrolled growth of poorly managed VMs.");
  F("Architecture Vulnerabilities", "Containers vs VMs", "Containers share the host kernel; VMs include full guest OSes on a hypervisor.");
  F("Architecture Vulnerabilities", "ICS/SCADA priority", "Availability and safety; protect legacy devices with segmentation (Purdue model, ISA/IEC 62443).");
  F("Architecture Vulnerabilities", "IoT weaknesses", "Default credentials, no updates, weak encryption, insecure interfaces.");
  F("Architecture Vulnerabilities", "TOCTOU", "Race condition between checking and using a resource.");
  F("Architecture Vulnerabilities", "Covert channels", "Timing (modulating resource use over time) and storage (writing to shared storage).");
  F("Architecture Vulnerabilities", "Inference vs aggregation", "Inference: deducing restricted info. Aggregation: combining data raises sensitivity.");
  F("Architecture Vulnerabilities", "Maintenance hook", "Undocumented backdoor left by developers.");
  F("Cryptography", "Symmetric keys needed", "n(n − 1)/2 keys for n users.");
  F("Cryptography", "Asymmetric keys needed", "2n keys (one key pair per user).");
  F("Cryptography", "Symmetric algorithms", "AES (128/192/256-bit), ChaCha20, 3DES (deprecated), DES (broken), Blowfish, Twofish.");
  F("Cryptography", "Asymmetric algorithms", "RSA (factoring), Diffie-Hellman (key agreement), ECC (elliptic curves), ElGamal, DSA.");
  F("Cryptography", "Confidentiality with public keys", "Encrypt with the recipient's public key; recipient decrypts with their private key.");
  F("Cryptography", "Digital signature", "Hash the message, encrypt the hash with the sender's private key; verify with the sender's public key. Gives integrity, authenticity and non-repudiation.");
  F("Cryptography", "HMAC", "Hash plus shared secret: integrity and authenticity, no non-repudiation.");
  F("Cryptography", "Hash algorithms", "SHA-2 and SHA-3 are recommended. MD5 and SHA-1 are broken for collisions.");
  F("Cryptography", "Block cipher modes", "ECB (avoid, leaks patterns), CBC (chaining with IV), CTR (counter, parallel), GCM (authenticated encryption).");
  F("Cryptography", "Perfect forward secrecy", "Ephemeral keys per session; a later key compromise doesn't expose past sessions.");
  F("Cryptography", "Salting and key stretching", "Random salt defeats rainbow tables; bcrypt, scrypt, PBKDF2 and Argon2 slow brute force.");
  F("Cryptography", "One-time pad requirements", "Truly random, as long as the message, used once, kept secret.");
  F("Cryptography", "Post-quantum standards", "NIST FIPS 203 (ML-KEM), 204 (ML-DSA), 205 (SLH-DSA), published 2024.");
  F("Cryptography", "Split knowledge / M of N", "Multiple custodians must combine their parts to use a key.");
  F("Cryptography", "Confusion vs diffusion", "Confusion hides the key's relationship to the ciphertext; diffusion spreads plaintext changes across the ciphertext (avalanche effect).");
  F("PKI", "CA vs RA", "The CA signs certificates. The RA verifies identities for the CA.");
  F("PKI", "X.509", "Standard certificate format.");
  F("PKI", "CRL vs OCSP", "CRL: periodically published list of revoked certificates. OCSP: real-time status of one certificate (stapling improves privacy and performance).");
  F("PKI", "Offline root CA", "Root kept offline to protect the trust anchor; subordinate CAs issue certificates.");
  F("PKI", "Certificate pinning", "App accepts only specific certificates or keys, defeating rogue CA MITM.");
  F("Cryptanalytic Attacks", "Attack types by attacker knowledge", "Ciphertext-only, known-plaintext, chosen-plaintext, chosen-ciphertext.");
  F("Cryptanalytic Attacks", "Birthday attack", "Finds hash collisions in about 2^(n/2) tries.");
  F("Cryptanalytic Attacks", "Meet-in-the-middle", "Defeats double encryption (why 2DES failed).");
  F("Cryptanalytic Attacks", "Side-channel attacks", "Exploit timing, power, EM emissions or acoustic leakage.");
  F("Cryptanalytic Attacks", "Replay attack defense", "Nonces, timestamps and sequence numbers.");
  F("Site and Facility Security", "CPTED", "Natural access control, natural surveillance, territorial reinforcement.");
  F("Site and Facility Security", "Mantrap / access control vestibule", "Two interlocking doors that prevent tailgating.");
  F("Site and Facility Security", "Fire classes (U.S.)", "A ordinary combustibles, B liquids and gases, C electrical, D metals, K cooking oils.");
  F("Site and Facility Security", "Sprinkler types", "Wet pipe (always full), dry pipe (air until triggered), pre-action (two-stage, best for data centers), deluge (massive volume).");
  F("Site and Facility Security", "Power problems", "Fault/blackout (loss), sag/brownout (low), spike/surge (high), noise (EMI/RFI), inrush (initial surge).");
  F("Site and Facility Security", "Data center humidity", "About 40% to 60%; too low causes static, too high causes condensation.");
  F("Site and Facility Security", "Fence heights", "3 to 4 ft deters casual trespassers; 6 to 7 ft is hard to climb; 8 ft with barbed wire deters determined intruders.");
  F("Site and Facility Security", "Fail safe vs fail secure doors", "Fail safe unlocks on power loss (life safety). Fail secure stays locked (asset protection).");
  F("Site and Facility Security", "TEMPEST", "Standards for controlling compromising electromagnetic emanations.");

  CISSP.flashcards[3] = cards;
})();
