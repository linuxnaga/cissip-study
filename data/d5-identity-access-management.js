// Domain 5: Identity and Access Management (IAM)
// Original practice questions written against the CISSP exam outline topics.
// Format: Q(topic, difficulty 1-3, question, [correct, distractor, distractor, distractor], explanation)
// The correct option is listed first here; the app shuffles options at runtime.
// IDs are assigned by position, so append new questions at the end to keep saved progress stable.
(function () {
  const qs = [];
  const Q = (t, d, q, o, e) => qs.push({ id: "d5-" + String(qs.length + 1).padStart(3, "0"), t, d, q, o, a: 0, e });

  // ---------- Identification and authentication ----------
  Q("Authentication Factors", 1,
    "A smart card is an example of which authentication factor?",
    ["Something you have", "Something you know", "Something you are", "Somewhere you are"],
    "Possession factors include smart cards, hardware tokens and phones. Knowledge factors are passwords and PINs; inherence factors are biometrics.");
  Q("Authentication Factors", 1,
    "Which combination represents true multifactor authentication?",
    ["A password and a fingerprint", "A password and a PIN", "Two different passwords", "A security question and a password"],
    "MFA requires factors from different categories. A password and PIN are both something you know.");
  Q("Authentication Factors", 2,
    "A user logs in from an unfamiliar country and is prompted for additional verification. Which factor or attribute is being considered?",
    ["Somewhere you are (location)", "Something you know", "Something you are", "Something you have"],
    "Location (geolocation, IP reputation) is a contextual attribute often used in risk-based or adaptive authentication.");
  Q("Authentication Factors", 2,
    "Keystroke dynamics and signature dynamics are examples of:",
    ["Behavioral biometrics (something you do)", "Physiological biometrics", "Knowledge factors", "Possession factors"],
    "Behavioral biometrics measure how a person acts. Physiological biometrics measure physical traits like fingerprints, iris patterns and facial geometry.");
  Q("Authentication Factors", 2,
    "Identification differs from authentication in that identification:",
    ["Is the claim of an identity, while authentication proves it",
     "Proves the identity, while authentication claims it",
     "Grants permissions",
     "Records user actions"],
    "Typing a username is identification. Supplying a password or other factor is authentication.");

  // ---------- Biometrics ----------
  Q("Biometrics", 2,
    "A biometric system rejects an authorized user. What type of error is this?",
    ["False rejection (Type I error)", "False acceptance (Type II error)", "Crossover error", "Enrollment error"],
    "False rejection rate (FRR) measures Type I errors. False acceptance (FAR, Type II) lets impostors in and is the more serious security failure.");
  Q("Biometrics", 2,
    "Which biometric error is generally considered MORE dangerous from a security perspective?",
    ["False acceptance (Type II)", "False rejection (Type I)", "Failure to enroll", "Throughput delay"],
    "False acceptance grants access to an unauthorized person. False rejection mainly affects user convenience.");
  Q("Biometrics", 2,
    "The crossover error rate (CER) is the point where:",
    ["The false acceptance rate equals the false rejection rate",
     "The system accepts all users",
     "Enrollment time equals authentication time",
     "The biometric reader fails"],
    "A lower CER (also called equal error rate) indicates a more accurate biometric system and is useful for comparing products.");
  Q("Biometrics", 2,
    "Increasing a biometric system's sensitivity will typically:",
    ["Decrease false acceptances and increase false rejections",
     "Increase false acceptances and decrease false rejections",
     "Decrease both error types equally",
     "Have no effect on error rates"],
    "Tighter matching thresholds reject more impostors but also more legitimate users. Tuning balances security and usability.");
  Q("Biometrics", 2,
    "Which biometric is generally considered among the MOST accurate?",
    ["Iris scan", "Voice pattern", "Signature dynamics", "Hand geometry"],
    "Iris and retina patterns are highly unique and stable. Retina scans are more intrusive and can reveal medical information.");
  Q("Biometrics", 3,
    "A major drawback of biometric authentication compared with passwords is that:",
    ["Biometric traits cannot be changed if the template is compromised",
     "Biometrics are always slower than any password",
     "Biometrics cannot be used for MFA",
     "Biometrics require internet access"],
    "If a fingerprint template is stolen, you cannot issue a new finger. Templates must be protected and liveness detection used to resist spoofing.");

  // ---------- Passwords and credentials ----------
  Q("Password Management", 2,
    "According to NIST SP 800-63B, which password practice is recommended?",
    ["Screen new passwords against lists of known compromised passwords",
     "Force password changes every 30 days",
     "Require complex composition rules like special characters",
     "Use password hints and security questions"],
    "NIST recommends length, blocklist checks, and changing passwords only upon evidence of compromise. Arbitrary complexity and periodic changes lead to weaker, predictable passwords.");
  Q("Password Management", 2,
    "Account lockout after several failed login attempts primarily defends against:",
    ["Online brute-force password guessing", "Phishing", "Offline hash cracking", "Shoulder surfing"],
    "Lockout and throttling limit online guessing. Offline cracking of stolen hashes is defended by strong hashing with salt and key stretching.");
  Q("Password Management", 2,
    "An attacker tries one common password against thousands of accounts to avoid lockouts. This is called:",
    ["Password spraying", "Credential stuffing", "Brute force against a single account", "Rainbow table attack"],
    "Spraying spreads attempts across accounts. Detection requires looking at failures across many accounts from common sources.");
  Q("Password Management", 2,
    "Attackers use username and password pairs leaked from one site to log in to other sites. This is:",
    ["Credential stuffing", "Password spraying", "Pass-the-ticket", "Kerberoasting"],
    "Credential stuffing exploits password reuse. MFA and breached-password detection are key defenses.");
  Q("Password Management", 2,
    "Which tool BEST helps users create and use unique strong passwords for every site?",
    ["A password manager", "Writing passwords on sticky notes", "Using the same complex password everywhere", "Browser autocomplete on shared computers"],
    "Password managers generate and store unique passwords, reducing reuse.");
  Q("Password Management", 3,
    "What makes FIDO2/WebAuthn passkeys resistant to phishing?",
    ["The credential is bound to the site's origin and uses public key cryptography, so nothing reusable is sent to a fake site",
     "They use longer passwords",
     "They send a one-time code by SMS",
     "They store passwords in the cloud in plaintext"],
    "The authenticator signs a challenge only for the registered origin. A phishing site cannot obtain a usable credential.");
  Q("Password Management", 2,
    "Why is SMS-based one-time passcode delivery considered weaker than other second factors?",
    ["SMS can be intercepted through SIM swapping or SS7 attacks",
     "SMS codes are too long",
     "SMS cannot be used on smartphones",
     "SMS requires biometrics"],
    "NIST considers SMS a restricted authenticator. App-based TOTP, push with number matching, or FIDO2 hardware keys are stronger.");
  Q("Password Management", 2,
    "A TOTP authenticator app generates codes based on:",
    ["A shared secret and the current time", "A counter only", "The user's password", "The phone's IMEI"],
    "TOTP (RFC 6238) derives codes from a shared secret and time steps (often 30 seconds). HOTP uses a counter.");
  Q("Password Management", 3,
    "Attackers send repeated MFA push notifications hoping the user approves one. Which control BEST mitigates this?",
    ["Number matching and rate limiting of push requests",
     "Disabling MFA",
     "Using longer passwords only",
     "Sending more push notifications"],
    "MFA fatigue (prompt bombing) is countered by number matching, context display, limits and user training to report unexpected prompts.");

  // ---------- Access control models ----------
  Q("Access Control Models", 2,
    "In discretionary access control (DAC), who determines access to an object?",
    ["The object's owner", "A central security administrator using labels", "The operating system kernel based on clearance", "A rule set that applies equally to all"],
    "DAC lets owners grant or revoke access, as with NTFS permissions. It is flexible but prone to inconsistent access.");
  Q("Access Control Models", 2,
    "Mandatory access control (MAC) makes access decisions based on:",
    ["Security labels (classification of objects and clearance of subjects)",
     "The owner's discretion",
     "Job roles only",
     "Time of day only"],
    "MAC is enforced by the system and cannot be changed by users. It is common in military and high-security environments (for example, SELinux).");
  Q("Access Control Models", 2,
    "Assigning permissions to job functions and placing users in those functions is:",
    ["Role-based access control (RBAC)", "Discretionary access control", "Mandatory access control", "Rule-based access control"],
    "RBAC simplifies administration and supports least privilege as users change roles.");
  Q("Access Control Models", 2,
    "A firewall that allows or denies traffic according to a list of conditions that apply to everyone is an example of:",
    ["Rule-based access control", "Role-based access control", "Discretionary access control", "Identity-based access control"],
    "Rule-based access control applies global rules (for example, ACLs or time restrictions) regardless of identity.");
  Q("Access Control Models", 3,
    "A policy grants access only if the user is in Finance, the document is tagged 'Budget', the device is managed and the time is during business hours. Which model is this?",
    ["Attribute-based access control (ABAC)", "Role-based access control", "Mandatory access control", "Discretionary access control"],
    "ABAC evaluates attributes of the subject, object, action and environment, enabling fine-grained, context-aware decisions.");
  Q("Access Control Models", 3,
    "Which model adjusts access requirements dynamically based on real-time risk signals such as unusual location or device health?",
    ["Risk-based (adaptive) access control", "Mandatory access control", "Static role-based access control", "Lattice-based access control"],
    "Risk-based access may require step-up authentication or block access when risk is high.");
  Q("Access Control Models", 2,
    "An access control list (ACL) is associated with:",
    ["An object, listing the subjects and their permissions",
     "A subject, listing the objects they can access",
     "A network cable",
     "A biometric template"],
    "ACLs are object-centric (columns of the access matrix). Capability lists are subject-centric (rows).");
  Q("Access Control Models", 3,
    "In a nondiscretionary access control model, which statement is TRUE?",
    ["A central authority defines access, and users cannot change permissions on objects they create",
     "Each user controls access to their own files",
     "Access is granted to everyone by default",
     "There are no administrators"],
    "MAC, RBAC and rule-based models are nondiscretionary because central policy, not owners, governs access.");
  Q("Access Control Models", 2,
    "Which access control model is MOST appropriate for an organization with high employee turnover and well-defined job functions?",
    ["Role-based access control", "Discretionary access control", "Mandatory access control", "No access control"],
    "Roles can be reused as employees join, move and leave, reducing administrative effort and errors.");
  Q("Access Control Models", 3,
    "Constrained interfaces (restricted interfaces) limit access by:",
    ["Hiding or disabling functions the user is not authorized to use",
     "Encrypting the database",
     "Locking the screen after inactivity",
     "Requiring biometrics"],
    "Menus, views and shells can be restricted so users see only permitted functions, such as a database view with limited columns.");
  Q("Access Control Models", 2,
    "Content-dependent access control grants access based on:",
    ["The data contained in the object (for example, salary values above a threshold)",
     "The time of day",
     "The user's location",
     "The device type"],
    "Content-dependent controls inspect the data itself. Context-dependent controls consider circumstances such as time, location or sequence of actions.");

  // ---------- Identity lifecycle ----------
  Q("Identity Lifecycle", 2,
    "Which step is MOST important when an employee changes roles within the organization?",
    ["Remove access no longer required for the new role and grant only what the new role needs",
     "Keep all old access in case they help their former team",
     "Disable the account permanently",
     "Reset their password only"],
    "Transfers are a common source of privilege creep. Access should be adjusted, not only added.");
  Q("Identity Lifecycle", 2,
    "What is the PRIMARY purpose of periodic user access reviews (recertification)?",
    ["To confirm users still need their access and remove excess or orphaned permissions",
     "To change everyone's password",
     "To count licenses",
     "To test backup restoration"],
    "Managers and data owners attest to access appropriateness, supporting least privilege and compliance.");
  Q("Identity Lifecycle", 2,
    "An account belonging to an employee who left six months ago is still active. This is called a(n):",
    ["Orphaned (dormant) account", "Service account", "Shared account", "Guest account"],
    "Orphaned accounts are prime targets. Integration between HR and IAM systems helps ensure timely deprovisioning.");
  Q("Identity Lifecycle", 2,
    "Which process verifies a person's real-world identity before creating their digital identity?",
    ["Identity proofing", "Authorization", "Federation", "Accounting"],
    "Identity proofing (NIST SP 800-63A, IAL levels) checks evidence such as government ID before enrollment.");
  Q("Identity Lifecycle", 3,
    "Which practice BEST automates consistent provisioning and deprovisioning across many applications?",
    ["An identity governance system connected to HR as the source of truth, using standards like SCIM",
     "Emailing each application owner manually",
     "Letting users request access on sticky notes",
     "Sharing one administrator account"],
    "Automated joiner-mover-leaver workflows reduce errors and delays. SCIM is a standard for provisioning identities to cloud apps.");
  Q("Identity Lifecycle", 2,
    "Which account type should be avoided because it prevents individual accountability?",
    ["Shared generic accounts", "Individual named accounts", "Privileged accounts with MFA", "Service accounts managed in a vault"],
    "When multiple people use one account, actions cannot be attributed to an individual.");
  Q("Identity Lifecycle", 3,
    "How should service accounts used by applications be managed?",
    ["Least privilege, no interactive logon, managed credentials with rotation, and an assigned owner",
     "Domain administrator rights for convenience",
     "Passwords that never change and are hardcoded in scripts",
     "Shared with all developers"],
    "Service accounts are frequently over-privileged and forgotten. Managed service accounts or secret vaults help rotate credentials.");

  // ---------- Privileged access ----------
  Q("Privileged Access Management", 2,
    "Which control provides temporary elevated access only when needed and removes it afterward?",
    ["Just-in-time (JIT) privileged access", "Permanent administrator rights", "Shared root passwords", "Guest accounts"],
    "JIT reduces standing privileges, shrinking the window for misuse or compromise.");
  Q("Privileged Access Management", 2,
    "A privileged access management (PAM) solution typically provides:",
    ["Credential vaulting, session recording and approval workflows for privileged accounts",
     "Email filtering",
     "Wireless encryption",
     "Load balancing"],
    "PAM controls, monitors and audits the use of high-risk accounts.");
  Q("Privileged Access Management", 2,
    "Why should administrators use separate accounts for administrative and everyday tasks?",
    ["To limit exposure of privileged credentials to phishing and malware during normal activity",
     "To double their email storage",
     "Because regulations require two usernames",
     "To make auditing harder"],
    "Browsing and email with an admin account lets malware run with high privileges.");
  Q("Privileged Access Management", 3,
    "Which practice BEST protects highly privileged directory administrator accounts?",
    ["Use dedicated hardened privileged access workstations, MFA and a tiered administration model",
     "Log in from any shared kiosk",
     "Use them for daily email",
     "Disable logging for these accounts"],
    "Tiered models prevent high-privilege credentials from being exposed on lower-trust systems where they could be harvested.");
  Q("Privileged Access Management", 2,
    "A break-glass (emergency) account should be:",
    ["Tightly controlled, monitored, tested periodically and used only in emergencies",
     "Used daily by the help desk",
     "Shared openly on the intranet",
     "Never documented"],
    "Emergency access accounts ensure availability during outages but must be protected, alerted on and reviewed after use.");

  // ---------- SSO and federation ----------
  Q("Federation and SSO", 2,
    "What is a key security risk of single sign-on (SSO)?",
    ["Compromise of one credential can grant access to many systems",
     "Users must remember more passwords",
     "It eliminates all logging",
     "It cannot support MFA"],
    "SSO concentrates risk, so strong authentication (MFA) on the SSO identity provider is essential.");
  Q("Federation and SSO", 2,
    "In SAML, which entity authenticates the user and issues assertions?",
    ["Identity provider (IdP)", "Service provider (SP)", "Relying party's database", "Certificate revocation list"],
    "The IdP authenticates the principal and sends a signed assertion to the SP, which grants access.");
  Q("Federation and SSO", 2,
    "SAML assertions are formatted in:",
    ["XML", "JSON", "CSV", "YAML"],
    "SAML 2.0 uses XML assertions, typically signed. OpenID Connect uses JSON Web Tokens.");
  Q("Federation and SSO", 2,
    "OAuth 2.0 is primarily designed for:",
    ["Delegated authorization: letting an app access resources on a user's behalf without sharing their password",
     "User authentication only",
     "Encrypting email",
     "Network access control"],
    "OAuth issues access tokens for APIs. OpenID Connect adds an identity layer (ID token) for authentication on top of OAuth 2.0.");
  Q("Federation and SSO", 2,
    "Which protocol adds authentication to OAuth 2.0 by providing an ID token?",
    ["OpenID Connect (OIDC)", "SAML 1.1", "Kerberos", "RADIUS"],
    "OIDC returns an ID token (a JWT) with claims about the authenticated user.");
  Q("Federation and SSO", 3,
    "A mobile app should use which OAuth 2.0 flow to obtain tokens securely?",
    ["Authorization code flow with PKCE", "Implicit flow", "Resource owner password credentials flow", "Client credentials flow with an embedded secret"],
    "PKCE protects the authorization code from interception in public clients that cannot keep a secret. The implicit and password flows are discouraged.");
  Q("Federation and SSO", 2,
    "Federated identity management allows:",
    ["Users to use one organization's identity to access resources in another trusted organization",
     "Each application to maintain separate passwords",
     "Users to bypass authentication",
     "Passwords to be shared between users"],
    "Federation relies on trust relationships and standards like SAML and OIDC between identity providers and service providers.");
  Q("Federation and SSO", 3,
    "Which JSON Web Token (JWT) validation step is MOST critical to prevent token forgery?",
    ["Verify the signature with the expected algorithm and key, and reject 'alg: none'",
     "Check that the token is base64-encoded",
     "Verify the token's length",
     "Accept any token from the same domain"],
    "Attackers have exploited libraries that accept unsigned tokens or algorithm confusion. Also validate issuer, audience and expiry.");
  Q("Federation and SSO", 2,
    "Identity as a Service (IDaaS) provides:",
    ["Cloud-based identity management such as SSO, MFA and lifecycle management",
     "On-premises firewalls",
     "Physical access badges",
     "Backup storage"],
    "IDaaS platforms centralize identity for cloud and on-premises applications.");
  Q("Federation and SSO", 3,
    "An organization uses a SaaS application federated with its IdP. An employee is terminated and disabled in the IdP. What risk may remain?",
    ["Active sessions or locally created accounts and API tokens in the SaaS app may still work",
     "The employee can no longer access anything anywhere",
     "The IdP will be deleted",
     "The SaaS provider will be notified by law"],
    "Disabling the IdP account prevents new SSO logins, but existing sessions, local accounts and tokens must also be revoked, ideally through automated deprovisioning.");

  // ---------- Kerberos ----------
  Q("Kerberos", 2,
    "In Kerberos, which component issues the ticket-granting ticket (TGT)?",
    ["The Authentication Service (AS) of the KDC", "The Ticket Granting Service", "The application server", "The client"],
    "The AS authenticates the user and issues a TGT. The TGS issues service tickets when presented with a valid TGT.");
  Q("Kerberos", 2,
    "Kerberos relies heavily on which condition to function correctly?",
    ["Synchronized clocks between clients and servers", "Public key certificates for every user", "Unencrypted network traffic", "Static IP addresses"],
    "Tickets contain timestamps to prevent replay. Clock skew beyond a small tolerance (often 5 minutes) causes authentication failures.");
  Q("Kerberos", 2,
    "What is the MAIN single point of failure in a Kerberos environment?",
    ["The Key Distribution Center (KDC)", "The client workstation", "The network switch", "The user's password manager"],
    "If the KDC is unavailable or compromised, authentication fails or all secrets are exposed. Redundancy and strong protection are required.");
  Q("Kerberos", 3,
    "An attacker who obtains the KRBTGT account hash can forge TGTs for any user. This is called a:",
    ["Golden ticket attack", "Silver ticket attack", "Kerberoasting", "Pass-the-hash"],
    "Golden tickets grant domain-wide access. Silver tickets forge service tickets for a specific service using that service account's hash.");
  Q("Kerberos", 3,
    "Kerberoasting targets:",
    ["Service accounts with SPNs, by requesting service tickets and cracking them offline",
     "The KDC's physical hardware",
     "Wireless networks",
     "Biometric templates"],
    "Service tickets are encrypted with the service account's password hash. Long random passwords or managed service accounts defend against it.");
  Q("Kerberos", 2,
    "Kerberos primarily uses which type of cryptography?",
    ["Symmetric key cryptography", "Asymmetric key cryptography only", "Hashing only", "No cryptography"],
    "Kerberos uses shared secret keys (such as AES). Extensions like PKINIT add public key support for initial authentication.");

  // ---------- Credential attacks ----------
  Q("Credential Attacks", 2,
    "An attacker uses a captured NTLM hash to authenticate without knowing the plaintext password. This is called:",
    ["Pass-the-hash", "Password spraying", "Rainbow table attack", "Dictionary attack"],
    "Pass-the-hash abuses protocols that accept the hash as proof. Credential Guard, limiting admin reuse and disabling NTLM help.");
  Q("Credential Attacks", 2,
    "Rainbow table attacks are made ineffective by:",
    ["Using unique salts for each password hash", "Using MD5 hashing", "Shorter passwords", "Storing passwords in plaintext"],
    "Salts mean precomputed tables would have to be generated for every salt value, which is impractical.");
  Q("Credential Attacks", 2,
    "An attacker watches a user type their PIN at an ATM. This is:",
    ["Shoulder surfing", "Phishing", "Tailgating", "Vishing"],
    "Privacy screens, shielded keypads and awareness reduce shoulder surfing.");
  Q("Credential Attacks", 3,
    "An adversary-in-the-middle phishing kit proxies the real login page and steals the session cookie after MFA. Which control BEST defeats this?",
    ["Phishing-resistant MFA such as FIDO2/WebAuthn bound to the legitimate origin",
     "SMS one-time passcodes",
     "Longer passwords",
     "Security questions"],
    "Origin-bound authenticators will not sign for the proxy's domain, so the attacker cannot complete authentication. Token binding and conditional access also help.");

  // ---------- Session management and accountability ----------
  Q("Session Management", 2,
    "Which control reduces the risk of an unattended logged-in workstation being misused?",
    ["Automatic screen lock after a period of inactivity", "Longer passwords", "Disabling antivirus", "Larger monitors"],
    "Session timeouts and screen locks limit opportunistic access.");
  Q("Session Management", 3,
    "After a successful login, a web application should:",
    ["Issue a new session identifier to prevent session fixation",
     "Keep the same session ID used before login",
     "Put the session ID in the URL",
     "Disable cookies"],
    "Regenerating session IDs at privilege changes prevents attackers from planting a known session ID.");
  Q("Accountability", 2,
    "Which element is REQUIRED for accountability?",
    ["Unique identification of users combined with audit logging",
     "Shared accounts",
     "Anonymous access",
     "Disabled logging"],
    "Accountability requires that actions be traced to an individual, which depends on unique IDs and reliable logs.");
  Q("Accountability", 2,
    "Why should audit logs be protected from modification by administrators of the systems they monitor?",
    ["To preserve integrity and prevent insiders from covering their tracks",
     "To save disk space",
     "To speed up the system",
     "Because logs are encrypted by default"],
    "Forwarding logs to a central, write-once or separately administered system (such as a SIEM) supports separation of duties.");

  // ---------- Authorization mechanisms ----------
  Q("Authorization", 2,
    "The principle of implicit deny means:",
    ["Anything not explicitly allowed is denied", "Everything is allowed unless denied", "Users can grant themselves access", "Access is granted after three failures"],
    "Implicit deny is a foundation of firewalls, ACLs and secure defaults.");
  Q("Authorization", 3,
    "Which statement BEST describes the access control matrix?",
    ["A table of subjects and objects showing each subject's permissions on each object",
     "A list of firewall ports",
     "A biometric enrollment database",
     "A network diagram"],
    "Columns form ACLs (per object) and rows form capability lists (per subject).");
  Q("Authorization", 2,
    "Which concept limits what a user can do based on the time of day or location?",
    ["Context-dependent access control", "Discretionary access control", "Content-dependent access control", "Mandatory access control"],
    "Context such as time, location or transaction sequence can restrict access.");
  Q("Authorization", 3,
    "In a policy-based architecture (such as XACML), which component evaluates requests against policy and returns permit or deny?",
    ["Policy decision point (PDP)", "Policy enforcement point (PEP)", "Policy information point (PIP)", "Policy administration point (PAP)"],
    "The PEP intercepts the request, the PDP decides, the PIP supplies attributes, and the PAP manages policies.");

  // ---------- Physical and logical access ----------
  Q("Physical Access", 2,
    "Which control BEST prevents tailgating into a secure area?",
    ["An access control vestibule (mantrap) or turnstile with one-person passage",
     "A sign asking people not to tailgate",
     "A camera alone",
     "A badge reader on the exit"],
    "Physical barriers that allow one person per authentication prevent piggybacking. Awareness and guards add support.");
  Q("Physical Access", 2,
    "Proximity cards that can be easily cloned are an example of which weakness?",
    ["Lack of cryptographic authentication in legacy 125 kHz cards", "Too much encryption", "Biometric false acceptance", "Kerberos clock skew"],
    "Modern smart cards use mutual authentication and encryption, resisting cloning.");
  Q("Physical Access", 3,
    "A user badges into a building but the system shows they never badged out of their previous session. Which control would have prevented the same badge from being used to let a second person in?",
    ["Anti-passback", "Two-person integrity", "Mandatory vacation", "Job rotation"],
    "Anti-passback requires entry and exit in sequence, preventing a badge from being passed back to someone else.");
  Q("Logical Access", 2,
    "Which is an example of a logical access control?",
    ["A password policy enforced by the operating system", "A security guard", "A fence", "A locked server rack"],
    "Logical (technical) controls are implemented in software or hardware, such as authentication and ACLs.");
  Q("Logical Access", 2,
    "Which directory protocol is commonly used to query and modify identity information such as users and groups?",
    ["LDAP", "SMTP", "SNMP", "SIP"],
    "LDAP is used by directories like Active Directory and OpenLDAP. LDAPS or StartTLS should protect it.");

  // ---------- Assurance levels ----------
  Q("Assurance Levels", 3,
    "In NIST SP 800-63, which authenticator assurance level (AAL) requires a hardware-based, phishing-resistant authenticator with verifier impersonation resistance?",
    ["AAL3", "AAL1", "AAL2", "IAL1"],
    "AAL1 allows single-factor; AAL2 requires two factors; AAL3 requires hardware-based cryptographic authenticators with phishing resistance.");
  Q("Assurance Levels", 3,
    "NIST SP 800-63 separates identity assurance into which components?",
    ["Identity assurance level (IAL), authenticator assurance level (AAL) and federation assurance level (FAL)",
     "Confidentiality, integrity and availability",
     "Low, moderate and high impact only",
     "Prevent, detect and correct"],
    "Separating proofing, authentication and federation strength lets organizations choose appropriate levels for each.");

  // ---------- Additional mixed ----------
  Q("Access Control Models", 3,
    "In a hospital, a nurse can view a patient's record only while assigned to that patient. Which concept is MOST directly applied?",
    ["Need to know enforced with attribute- or context-based access", "Mandatory vacation", "Separation of duties", "Discretionary access by the patient"],
    "Access tied to care relationships enforces need to know and is typically implemented with ABAC or context rules.");
  Q("Identity Lifecycle", 2,
    "Which should trigger immediate account deprovisioning?",
    ["Termination of employment or contract end", "A password reset request", "Completing training", "A change of desk"],
    "Access should be removed promptly when the business relationship ends.");
  Q("Federation and SSO", 3,
    "Which statement about trust in federation is MOST accurate?",
    ["The service provider trusts the IdP's assertions, so the IdP's security and proofing practices directly affect the SP's risk",
     "Federation removes the need for trust",
     "Each SP re-authenticates users with their own passwords",
     "Federation only works within a single company"],
    "Federation agreements should define assurance levels, attribute release and incident responsibilities.");
  Q("Credential Attacks", 2,
    "Which practice reduces the impact of stolen password hashes?",
    ["Using slow, salted hashing algorithms like bcrypt, scrypt or Argon2",
     "Storing passwords with reversible encryption",
     "Using unsalted SHA-1",
     "Emailing passwords to users"],
    "Key-stretching algorithms make offline cracking expensive.");
  Q("Authentication Factors", 3,
    "Which statement about passwordless authentication is MOST accurate?",
    ["It replaces shared secrets with possession and inherence factors, such as a device-bound key unlocked by a biometric",
     "It means no authentication is performed",
     "It always uses SMS codes",
     "It is less secure than passwords"],
    "Passwordless methods (passkeys, Windows Hello, smart cards) reduce phishing and credential reuse risks.");
  Q("Privileged Access Management", 3,
    "Which control helps detect misuse by privileged users?",
    ["Session recording and monitoring of privileged activity, reviewed independently",
     "Allowing admins to disable logging",
     "Shared admin passwords",
     "Removing all alerts"],
    "Independent review of privileged sessions provides deterrence and detection.");
  Q("Access Control Models", 2,
    "Which access control model is MOST likely used by a standard home computer's file system?",
    ["Discretionary access control", "Mandatory access control", "Lattice-based access control", "Brewer-Nash"],
    "Owners set permissions on their files in typical operating systems.");
  Q("Identity Lifecycle", 3,
    "Which problem arises when users accumulate many entitlements that together allow fraud, such as creating and approving vendors?",
    ["Toxic combinations violating separation of duties", "Clock skew", "Data remanence", "Polyinstantiation"],
    "Identity governance tools detect SoD conflicts in role design and access requests.");
  Q("Authorization", 2,
    "Which statement BEST describes 'authorization creep'?",
    ["Gradual accumulation of permissions beyond what a user needs", "Expanding the password length", "Faster authentication", "Increasing biometric accuracy"],
    "Also called privilege creep, it is corrected by access reviews and role-based provisioning.");
  Q("Session Management", 2,
    "Single logout (SLO) in federated environments aims to:",
    ["Terminate sessions across all connected service providers when the user logs out",
     "Log the user out of only the current tab",
     "Disable the user's account",
     "Reset the user's password"],
    "SLO reduces the risk of lingering sessions, though support varies between applications.");
  Q("Credential Attacks", 3,
    "A help desk agent resets a password after a caller provides publicly available information. Which control would BEST prevent this social engineering?",
    ["Strong identity verification procedures, such as callback or verified MFA, before resets",
     "Faster password resets",
     "Allowing resets via email from any address",
     "Publishing employee birthdays"],
    "Help desks are frequent social engineering targets. Verification must not rely on easily discovered information.");
  Q("Logical Access", 2,
    "What is the BEST way to manage access for hundreds of users needing the same permissions?",
    ["Assign permissions to groups and add users to the groups", "Assign permissions to each user individually", "Give everyone admin rights", "Use one shared account"],
    "Group-based assignment simplifies administration and reduces errors.");
  Q("Biometrics", 2,
    "Liveness detection in biometric systems helps prevent:",
    ["Spoofing with fake fingers, photos or masks", "False rejections due to dry skin", "Enrollment delays", "Network attacks"],
    "Presentation attack detection checks for signs of a live person.");
  Q("Accountability", 3,
    "Which combination BEST supports non-repudiation of user actions in an application?",
    ["Strong authentication, unique accounts, and tamper-evident logs or digital signatures",
     "Shared accounts and local logs",
     "Anonymous access with no logs",
     "Password-only authentication with deletable logs"],
    "Users cannot plausibly deny actions when identity is strongly established and records are protected from alteration.");
  Q("Federation and SSO", 2,
    "In OAuth 2.0, what does a 'scope' define?",
    ["The specific permissions an access token grants", "The user's password", "The certificate chain", "The token's encryption algorithm"],
    "Scopes limit what the client application can do with the token, supporting least privilege.");
  Q("Identity Lifecycle", 2,
    "Who should approve a user's request for access to a sensitive application?",
    ["The data or application owner (often with the user's manager)", "The user themselves", "Any IT staff member", "No approval is needed"],
    "Owners understand who needs access. Managers confirm job need.");
  Q("Password Management", 3,
    "Which statement about password length versus complexity is MOST accurate according to current guidance?",
    ["Length contributes more to strength; long passphrases are encouraged",
     "Complexity rules always produce stronger passwords than length",
     "Eight characters is sufficient for all accounts",
     "Passwords should be changed weekly"],
    "NIST supports passphrases up to at least 64 characters and discourages composition rules that lead to predictable patterns.");
  Q("Access Control Models", 3,
    "A lattice-based access control model is MOST closely associated with:",
    ["Mandatory access control with defined upper and lower bounds of access", "Discretionary access control", "Role-based access control", "Rule-based firewalls"],
    "Lattices define the greatest lower bound and least upper bound of access for subject-object pairs, as in MAC systems.");

  window.CISSP = window.CISSP || { questions: {}, flashcards: {} };
  CISSP.questions[5] = qs;

  // ---------- Flashcards ----------
  const cards = [];
  const F = (t, f, b) => cards.push({ id: "d5-c" + String(cards.length + 1).padStart(3, "0"), t, f, b });

  F("Authentication Factors", "Authentication factor types", "Type 1 something you know; Type 2 something you have; Type 3 something you are. Also somewhere you are and something you do.");
  F("Authentication Factors", "Identification vs authentication vs authorization", "Claim identity; prove identity; grant permissions.");
  F("Authentication Factors", "True MFA", "Factors from different categories (for example, password plus token).");
  F("Biometrics", "Type I error", "False rejection (FRR): an authorized user is denied.");
  F("Biometrics", "Type II error", "False acceptance (FAR): an impostor is accepted. More dangerous.");
  F("Biometrics", "CER / EER", "Crossover error rate where FAR = FRR; lower is better.");
  F("Biometrics", "Physiological vs behavioral", "Physiological: fingerprint, iris, retina, face, hand. Behavioral: voice, signature, keystroke dynamics, gait.");
  F("Biometrics", "Biometric drawbacks", "Can't be changed if compromised; privacy concerns; spoofing (use liveness detection).");
  F("Password Management", "NIST SP 800-63B password guidance", "Favor length, blocklist compromised passwords, no forced periodic changes, no composition rules, allow paste and managers.");
  F("Password Management", "Password spraying", "One common password tried across many accounts.");
  F("Password Management", "Credential stuffing", "Leaked username and password pairs reused on other sites.");
  F("Password Management", "TOTP vs HOTP", "TOTP: time-based codes. HOTP: counter-based codes.");
  F("Password Management", "Phishing-resistant MFA", "FIDO2/WebAuthn passkeys and smart cards (PIV); bound to origin.");
  F("Password Management", "MFA fatigue", "Push bombing. Defense: number matching, rate limits.");
  F("Access Control Models", "DAC", "Owner decides access (for example, NTFS permissions).");
  F("Access Control Models", "MAC", "System enforces labels (clearance and classification); users can't change them.");
  F("Access Control Models", "RBAC", "Permissions assigned to roles; users assigned to roles.");
  F("Access Control Models", "Rule-based AC", "Global rules apply to all subjects (firewall ACLs).");
  F("Access Control Models", "ABAC", "Decisions from subject, object, action and environment attributes.");
  F("Access Control Models", "Risk-based AC", "Adaptive decisions from real-time risk signals; step-up authentication.");
  F("Access Control Models", "ACL vs capability list", "ACL: per object (column of the matrix). Capability: per subject (row).");
  F("Access Control Models", "Content- vs context-dependent", "Content: based on data values. Context: based on time, location or sequence.");
  F("Access Control Models", "Constrained interface", "Restrict menus and views to authorized functions.");
  F("Identity Lifecycle", "Joiner-mover-leaver", "Provision on hire, adjust on transfer, deprovision on exit.");
  F("Identity Lifecycle", "Access review / recertification", "Owners and managers periodically confirm access is still needed.");
  F("Identity Lifecycle", "Orphaned account", "Active account with no current owner (for example, a former employee).");
  F("Identity Lifecycle", "Identity proofing", "Verifying real-world identity before enrollment (IAL).");
  F("Identity Lifecycle", "SCIM", "Standard for automated provisioning of identities to cloud apps.");
  F("Identity Lifecycle", "Toxic combination", "Entitlements that together violate separation of duties.");
  F("Privileged Access Management", "PAM capabilities", "Vaulting, rotation, JIT access, approval workflows, session recording.");
  F("Privileged Access Management", "Just-in-time access", "Temporary elevation only when needed; no standing privileges.");
  F("Privileged Access Management", "Break-glass account", "Emergency account: tightly protected, alerted on, reviewed after use.");
  F("Privileged Access Management", "Tiered admin model", "Keep high-tier credentials off lower-trust systems; use privileged access workstations.");
  F("Federation and SSO", "SSO risk", "One credential unlocks many systems; protect with MFA.");
  F("Federation and SSO", "SAML roles", "Principal (user), identity provider (asserts), service provider (relies). XML assertions.");
  F("Federation and SSO", "OAuth 2.0", "Delegated authorization with access tokens and scopes.");
  F("Federation and SSO", "OpenID Connect", "Authentication layer on OAuth 2.0; ID token (JWT).");
  F("Federation and SSO", "PKCE", "Proof Key for Code Exchange: protects the authorization code flow for public clients.");
  F("Federation and SSO", "JWT validation", "Verify signature and algorithm, issuer, audience and expiry; reject alg none.");
  F("Federation and SSO", "Single logout", "Ends sessions across federated apps.");
  F("Kerberos", "Kerberos components", "KDC = Authentication Service (issues TGT) + Ticket Granting Service (issues service tickets).");
  F("Kerberos", "Kerberos requirements", "Symmetric crypto, synchronized time (about 5-minute skew), KDC is a single point of failure.");
  F("Kerberos", "Golden ticket", "Forged TGT using the KRBTGT hash; domain-wide access.");
  F("Kerberos", "Silver ticket", "Forged service ticket using a service account hash.");
  F("Kerberos", "Kerberoasting", "Request service tickets and crack service account passwords offline.");
  F("Credential Attacks", "Pass-the-hash", "Authenticate with a stolen NTLM hash.");
  F("Credential Attacks", "Rainbow tables", "Precomputed hash lookups, defeated by salting.");
  F("Credential Attacks", "AitM phishing", "Proxy steals session cookies after MFA; defeated by FIDO2.");
  F("Session Management", "Session fixation defense", "Regenerate the session ID after login.");
  F("Accountability", "Accountability requirements", "Unique IDs, authentication and protected audit logs.");
  F("Authorization", "Implicit deny", "Anything not explicitly allowed is denied.");
  F("Authorization", "XACML components", "PEP (enforces), PDP (decides), PIP (attributes), PAP (administers policy).");
  F("Physical Access", "Anti-passback", "Requires entry and exit in sequence; prevents badge sharing.");
  F("Assurance Levels", "NIST 800-63 levels", "IAL (proofing), AAL (authentication strength), FAL (federation).");
  F("Assurance Levels", "AAL1 / AAL2 / AAL3", "AAL1 single factor; AAL2 two factors; AAL3 hardware-based, phishing-resistant.");
  F("Federation and SSO", "IDaaS", "Cloud identity services: SSO, MFA, lifecycle, directory.");

  CISSP.flashcards[5] = cards;
})();
