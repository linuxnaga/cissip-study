// Domain 2: Asset Security
// Original practice questions written against the CISSP exam outline topics.
// Format: Q(topic, difficulty 1-3, question, [correct, distractor, distractor, distractor], explanation)
// The correct option is listed first here; the app shuffles options at runtime.
// IDs are assigned by position, so append new questions at the end to keep saved progress stable.
(function () {
  const qs = [];
  const Q = (t, d, q, o, e) => qs.push({ id: "d2-" + String(qs.length + 1).padStart(3, "0"), t, d, q, o, a: 0, e });

  // ---------- Classification ----------
  Q("Data Classification", 1,
    "What is the PRIMARY purpose of data classification?",
    ["To apply protection proportional to the value and sensitivity of the data",
     "To reduce the number of files stored",
     "To make data easier to search",
     "To decide which employees get raises"],
    "Classification groups data by sensitivity and value so the organization can apply appropriate, cost-effective controls rather than protecting everything at the highest level.");
  Q("Data Classification", 1,
    "In the U.S. government classification scheme, which level applies to information whose unauthorized disclosure could cause exceptionally grave damage to national security?",
    ["Top Secret", "Secret", "Confidential", "Unclassified"],
    "Top Secret: exceptionally grave damage. Secret: serious damage. Confidential: damage. Unclassified: no damage to national security.");
  Q("Data Classification", 1,
    "Unauthorized disclosure of information classified as Secret could reasonably be expected to cause:",
    ["Serious damage to national security", "Exceptionally grave damage", "Damage", "No damage"],
    "The three classified levels map to damage, serious damage and exceptionally grave damage for Confidential, Secret and Top Secret respectively.");
  Q("Data Classification", 2,
    "Which is a typical commercial (private sector) classification scheme from highest to lowest sensitivity?",
    ["Confidential (proprietary), Private, Sensitive, Public",
     "Top Secret, Secret, Confidential, Unclassified",
     "Public, Sensitive, Private, Confidential",
     "Critical, High, Medium, Low"],
    "Common commercial labels are Confidential/Proprietary, Private, Sensitive and Public. Labels vary by organization; what matters is that they are defined and consistently applied.");
  Q("Data Classification", 2,
    "Who should determine the classification level of a dataset?",
    ["The data owner", "The data custodian", "The help desk", "The end user who created a copy"],
    "The data owner is accountable for the data and assigns its classification. Custodians implement the controls the classification requires.");
  Q("Data Classification", 2,
    "Which criterion is LEAST relevant when deciding how to classify data?",
    ["The file format the data is stored in",
     "The impact on the organization if the data were disclosed",
     "Legal and regulatory requirements",
     "The value of the data to the organization and competitors"],
    "Classification criteria include value, sensitivity, impact of loss or disclosure, legal and regulatory obligations, and age or useful life. File format does not change sensitivity.");
  Q("Data Classification", 2,
    "A report combines several individually unclassified facts and the result reveals sensitive information. This problem is known as:",
    ["Aggregation", "Polyinstantiation", "Data remanence", "Declassification"],
    "Aggregation occurs when combining less sensitive items produces information of higher sensitivity. Classification must consider the combined dataset.");
  Q("Data Classification", 3,
    "Why should data classifications be periodically reviewed?",
    ["The value and sensitivity of data change over time, so over- or under-classification can occur",
     "Labels fade from media after a year",
     "Regulations require all data to be reclassified monthly",
     "Classification is only needed during audits"],
    "A product plan may be highly confidential before launch and public afterward. Reviews reduce the cost of over-protecting stale data and the risk of under-protecting sensitive data.");
  Q("Data Classification", 2,
    "Which statement about over-classifying data is TRUE?",
    ["It wastes resources and can reduce usability and compliance with handling rules",
     "It has no downside because more protection is always better",
     "It is required by GDPR",
     "It eliminates the need for access control"],
    "Over-classification raises costs, slows business, and leads users to ignore or work around controls. Classification should be accurate, not maximal.");
  Q("Asset Classification", 2,
    "Assets such as servers and laptops should generally be classified based on:",
    ["The highest classification of data they store or process",
     "Their purchase price only",
     "Their physical size",
     "The department that bought them"],
    "An asset inherits the classification of the most sensitive data it handles, which determines the controls it needs.");

  // ---------- Labeling and marking ----------
  Q("Labeling and Handling", 1,
    "What is the purpose of labeling (marking) data and media?",
    ["To make the classification visible so people and systems handle it correctly",
     "To encrypt the data",
     "To compress the data",
     "To track the purchase date of media"],
    "Labels communicate classification to humans (physical or visual marks) and systems (metadata), enabling correct handling, storage and DLP enforcement.");
  Q("Labeling and Handling", 2,
    "A backup tape containing confidential data has no label. What is the BEST assumption when handling it?",
    ["Treat it at the highest classification level until it is verified",
     "Treat it as public data",
     "Reuse it immediately for new backups",
     "Discard it in normal trash"],
    "Unlabeled media should be handled as if it contains the most sensitive data the organization holds until its contents are confirmed.");
  Q("Labeling and Handling", 2,
    "Which control BEST supports automated enforcement of data handling rules in email and file transfers?",
    ["Metadata classification labels read by a data loss prevention system",
     "Colored stickers on laptops",
     "A written policy only",
     "Changing file names to uppercase"],
    "Digital labels embedded in metadata let DLP, email gateways and rights management tools enforce handling automatically.");
  Q("Labeling and Handling", 3,
    "Sensitive printed reports are left in an unlocked bin awaiting pickup by a shredding vendor. Which data handling control is MOST lacking?",
    ["Secure storage and chain of custody for media pending destruction",
     "Data classification",
     "Encryption in transit",
     "Tokenization"],
    "Media awaiting destruction remains sensitive. It should be stored securely (locked bins) and tracked through destruction, ideally with a certificate of destruction from the vendor.");

  // ---------- Data roles ----------
  Q("Data Roles", 1,
    "Which role is responsible for the day-to-day protection of data, such as backups and applying controls?",
    ["Custodian", "Owner", "Data subject", "Regulator"],
    "Custodians handle the hands-on tasks of protecting data as directed by the owner.");
  Q("Data Roles", 2,
    "A data steward is BEST described as someone who:",
    ["Ensures data quality, metadata and proper use according to governance policies",
     "Owns the data legally",
     "Is the person the data is about",
     "Physically destroys media"],
    "Data stewards focus on data quality, definitions and correct business use. They work with owners and custodians.");
  Q("Data Roles", 2,
    "Under privacy law, the individual to whom personal data relates is called the:",
    ["Data subject", "Data controller", "Data processor", "Data custodian"],
    "The data subject is the identified or identifiable natural person the data describes.");
  Q("Data Roles", 2,
    "A cloud payroll provider processes employee data strictly on instructions from a company. Under GDPR, the provider is the:",
    ["Processor", "Controller", "Data subject", "Supervisory authority"],
    "The company decides why and how data is processed (controller); the provider acts on its behalf (processor), bound by a data processing agreement.");
  Q("Data Roles", 3,
    "Which role is MOST likely to define the business rules for who may access customer records in a CRM system?",
    ["The business data owner (for example, the head of sales)",
     "The database administrator",
     "The network engineer",
     "The external auditor"],
    "Owners set access requirements based on business need. Administrators (custodians) implement them.");
  Q("Data Roles", 2,
    "A system owner differs from a data owner in that the system owner is responsible for:",
    ["The system that processes the data, including ensuring it has adequate security controls",
     "Classifying all data in the organization",
     "Being the subject of the data",
     "Approving privacy notices"],
    "The system owner is accountable for a system's security, configuration and operation, which may process data owned by others.");
  Q("Data Roles", 2,
    "Who is ultimately accountable for ensuring data owners carry out their responsibilities?",
    ["Senior management", "Data custodians", "End users", "The data protection authority"],
    "Senior management holds overall accountability and delegates ownership of specific data to business managers.");

  // ---------- Data lifecycle ----------
  Q("Data Lifecycle", 1,
    "Which sequence represents a common data lifecycle?",
    ["Create, store, use, share, archive, destroy",
     "Destroy, create, archive, use",
     "Use, create, destroy, store",
     "Share, destroy, create, archive"],
    "Data is created or collected, stored, used, shared, archived and eventually destroyed. Security controls apply at every phase.");
  Q("Data Lifecycle", 2,
    "At which point in the data lifecycle should classification be assigned?",
    ["At or as close as possible to creation or collection",
     "Only when the data is archived",
     "Only before destruction",
     "Classification is not part of the lifecycle"],
    "Classifying data at creation ensures appropriate controls protect it throughout its life.");
  Q("Data Collection", 2,
    "Which practice BEST reduces privacy risk at the data collection stage?",
    ["Collect only the data needed for the stated purpose",
     "Collect as much data as possible in case it is useful later",
     "Store collected data indefinitely",
     "Avoid telling users what is collected"],
    "Collection limitation and data minimization reduce the amount of data that could be breached, and are required by many privacy laws.");
  Q("Data Retention", 2,
    "What should PRIMARILY drive an organization's data retention periods?",
    ["Legal, regulatory and business requirements",
     "Available storage capacity",
     "The preferences of the IT department",
     "The cost of backup tapes"],
    "Retention schedules are based on laws, regulations, contracts and business need. Keeping data longer than required increases risk and discovery exposure.");
  Q("Data Retention", 2,
    "An organization keeps all email forever 'just in case'. What is the MAIN risk of this practice?",
    ["Increased liability and breach exposure, including during legal discovery",
     "Email will become corrupted",
     "It violates the CIA triad's availability principle",
     "It is impossible to back up email"],
    "Data that should have been destroyed under a retention policy can still be subject to e-discovery and breaches, increasing cost and legal exposure.");
  Q("Data Retention", 3,
    "A company receives notice of pending litigation. What must happen to relevant records scheduled for routine deletion?",
    ["They must be preserved under a legal hold until released by counsel",
     "They should be deleted on schedule to reduce liability",
     "They should be moved to a public file share",
     "They should be anonymized immediately"],
    "A legal hold suspends normal retention and destruction for relevant information. Destroying it could be considered spoliation of evidence.");
  Q("Data Archiving", 2,
    "Which consideration is MOST important when archiving data for long-term retention?",
    ["Ensuring it remains readable and retrievable for the full retention period",
     "Deleting the encryption keys to save space",
     "Using the cheapest media regardless of durability",
     "Removing all labels"],
    "Archives must remain accessible: media durability, format obsolescence and key management must all be planned for the full retention period.");

  // ---------- Data states ----------
  Q("Data States", 1,
    "Full-disk encryption on a laptop primarily protects data in which state?",
    ["At rest", "In transit", "In use", "In process"],
    "Full-disk encryption protects stored data if the device is lost or stolen while powered off.");
  Q("Data States", 1,
    "TLS protects data in which state?",
    ["In transit (in motion)", "At rest", "In use", "Archived"],
    "TLS encrypts data moving across networks.");
  Q("Data States", 3,
    "Which technology is designed to protect data while it is being processed in memory?",
    ["Confidential computing using trusted execution environments (secure enclaves)",
     "Full-disk encryption",
     "IPsec tunnels",
     "Backup encryption"],
    "Data in use is the hardest state to protect. Trusted execution environments and homomorphic encryption are approaches to protecting it during processing.");
  Q("Data States", 2,
    "A laptop with full-disk encryption is stolen while powered on and unlocked. Why might the data still be at risk?",
    ["The decryption key is in memory and the volume is mounted, so data is accessible",
     "Full-disk encryption only protects network traffic",
     "Full-disk encryption does not encrypt user files",
     "The attacker can reset the TPM remotely"],
    "When the system is running and unlocked, the volume is decrypted for use. FDE protects mainly when the device is powered off or locked with pre-boot authentication.");

  // ---------- Data remanence and sanitization ----------
  Q("Data Remanence", 1,
    "Data remanence refers to:",
    ["Residual data that remains on media after an attempt to erase it",
     "Data copied to a remote site",
     "Data that is encrypted",
     "Data stored in the cloud"],
    "Remanence is the leftover data that can be recovered after deletion or formatting. Sanitization methods are designed to defeat it.");
  Q("Data Sanitization", 2,
    "Overwriting media so the data cannot be recovered using standard operating system or file recovery tools, while allowing the media to be reused internally, is called:",
    ["Clearing", "Purging", "Destruction", "Degaussing"],
    "NIST SP 800-88 defines Clear (protects against simple, non-invasive recovery), Purge (protects against laboratory recovery) and Destroy (media cannot be reused).");
  Q("Data Sanitization", 2,
    "Which NIST SP 800-88 sanitization category protects against laboratory recovery techniques while still allowing media to be reused?",
    ["Purge", "Clear", "Destroy", "Erase"],
    "Purging uses methods such as cryptographic erase, block erase or degaussing (for magnetic media) to defeat state-of-the-art laboratory recovery.");
  Q("Data Sanitization", 2,
    "Why is degaussing NOT effective for sanitizing solid-state drives (SSDs)?",
    ["SSDs store data in flash memory cells, not magnetic domains",
     "SSDs are too small to fit in a degausser",
     "Degaussing only works on optical media",
     "SSDs are always encrypted"],
    "Degaussing uses a strong magnetic field to disrupt magnetic media. Flash memory is not magnetic, so other methods (crypto erase, vendor secure erase, or physical destruction) are required.");
  Q("Data Sanitization", 3,
    "Why is overwriting an SSD's files a poor sanitization method?",
    ["Wear leveling and over-provisioning mean overwrites may not reach all physical cells",
     "SSDs cannot be written to more than once",
     "Overwriting an SSD destroys it",
     "SSDs automatically encrypt overwritten data"],
    "SSD controllers remap writes across cells, leaving old data in blocks the OS cannot address. Use built-in sanitize commands, cryptographic erase or physical destruction.");
  Q("Data Sanitization", 2,
    "A self-encrypting drive is sanitized by securely deleting its media encryption key. This method is called:",
    ["Cryptographic erase (crypto-shredding)", "Degaussing", "Formatting", "Clearing by overwriting"],
    "Without the key, the encrypted data is unreadable. Cryptographic erase is fast and is an accepted purge technique when encryption was strong and properly implemented.");
  Q("Data Sanitization", 1,
    "What is the MOST secure method for sanitizing media that will not be reused and contains Top Secret data?",
    ["Physical destruction such as shredding, disintegration or incineration",
     "Deleting the files",
     "Quick formatting the drive",
     "Moving the files to the recycle bin"],
    "Physical destruction offers the highest assurance and is often required for the most sensitive data.");
  Q("Data Sanitization", 2,
    "Which action does NOT reliably remove data from a hard drive?",
    ["Deleting files and emptying the recycle bin",
     "Degaussing the drive",
     "Shredding the drive",
     "Overwriting all sectors with a verified pattern"],
    "Deleting files typically removes only directory pointers; the data remains until overwritten and can be recovered with simple tools.");
  Q("Data Sanitization", 2,
    "In a public cloud, the customer usually cannot physically destroy disks. Which approach BEST addresses remanence for sensitive cloud data?",
    ["Encrypt data with customer-managed keys and destroy the keys when the data is retired",
     "Ask the provider to mail the disks",
     "Delete the virtual machine and assume it is safe",
     "Rename the storage bucket"],
    "Crypto-shredding is the practical sanitization method in multi-tenant cloud environments, supported by the provider's contractual media-handling commitments.");
  Q("Data Sanitization", 3,
    "After sanitizing media, what step provides assurance that the process worked?",
    ["Verification of a sample (or all) of the sanitized media and documenting the result",
     "Labeling the media as public without checking",
     "Re-installing the old operating system",
     "Waiting 30 days"],
    "NIST SP 800-88 recommends verification and documentation (for example, a certificate of sanitization) as part of the process.");
  Q("Data Sanitization", 2,
    "Which term describes removing classification labels and markings after sanitization so media can be used at a lower classification level?",
    ["Declassification", "Purging", "Degaussing", "Tokenization"],
    "Declassification is the formal process of releasing sanitized media for use at a lower classification level or outside a controlled environment. It requires assurance the data cannot be recovered.");

  // ---------- Asset inventory and management ----------
  Q("Asset Management", 1,
    "Why is an accurate asset inventory foundational to security?",
    ["You cannot protect what you do not know you have",
     "It replaces the need for vulnerability scanning",
     "It is only needed for tax purposes",
     "It guarantees compliance"],
    "Inventories of hardware, software and data drive risk assessment, patching, licensing, monitoring and incident response.");
  Q("Asset Management", 2,
    "Which practice BEST helps detect unauthorized devices connected to the corporate network?",
    ["Automated discovery compared against the authorized asset inventory",
     "Annual manual counts of laptops",
     "Relying on users to report new devices",
     "Disabling DHCP"],
    "Continuous automated discovery (network scans, NAC, DHCP logs) compared to the inventory reveals rogue or unmanaged devices.");
  Q("Asset Management", 2,
    "Tracking an asset from procurement through deployment, maintenance and disposal is known as:",
    ["Asset lifecycle management", "Data classification", "Configuration drift", "Scoping"],
    "Asset lifecycle management ensures assets are tracked, maintained, secured and properly disposed of.");
  Q("Asset Management", 2,
    "A vendor announces end-of-support (EOS) for an operating system used in production. What is the PRIMARY security concern?",
    ["No further security patches will be released",
     "The OS will immediately stop working",
     "Licenses become invalid instantly",
     "Users will lose their files"],
    "After end of support, newly discovered vulnerabilities remain unpatched. Organizations should plan migration or apply compensating controls such as isolation.");
  Q("Asset Management", 2,
    "What is the difference between end-of-life (EOL) and end-of-support (EOS)?",
    ["EOL means the product is no longer sold; EOS means the vendor stops providing updates and support",
     "They mean exactly the same thing in every case",
     "EOS happens before a product is released",
     "EOL means security patches increase"],
    "Typically a product reaches end of sale or life first and support continues for a period, after which patches stop. Vendors define the exact terms.");
  Q("Asset Management", 2,
    "Which source is MOST useful for identifying unlicensed or unauthorized software on endpoints?",
    ["A software inventory from endpoint management tools compared to an approved software list",
     "The firewall rule base",
     "The organization chart",
     "Physical security logs"],
    "Software inventories combined with allow lists help detect shadow IT, unlicensed software and potentially malicious programs.");
  Q("Asset Management", 3,
    "Which item is an intangible asset that must still be inventoried and protected?",
    ["Intellectual property such as source code and trade secrets",
     "Office chairs",
     "Network cables",
     "Server racks"],
    "Information assets, intellectual property and reputation are intangible yet often the most valuable assets an organization holds.");
  Q("Asset Management", 2,
    "Who should be assigned as the owner of each asset in the inventory?",
    ["An accountable individual or role responsible for the asset's protection",
     "No one, to avoid conflicts",
     "The vendor who sold it",
     "The newest employee"],
    "Each asset needs an owner who is accountable for its classification, protection and lifecycle.");

  // ---------- Security controls: baselines, scoping, tailoring ----------
  Q("Baselines, Scoping and Tailoring", 2,
    "Selecting only the controls from a baseline that apply to a particular system is called:",
    ["Scoping", "Tailoring", "Hardening", "Aggregating"],
    "Scoping removes baseline controls that do not apply (for example, wireless controls for a system without wireless).");
  Q("Baselines, Scoping and Tailoring", 2,
    "Modifying baseline controls, such as adjusting parameters or adding compensating controls, to align with an organization's mission is called:",
    ["Tailoring", "Scoping", "Degaussing", "Inventorying"],
    "Tailoring adjusts controls to fit the organization's specific needs, including setting parameter values and adding or substituting controls.");
  Q("Baselines, Scoping and Tailoring", 2,
    "An organization uses the CIS Benchmarks as a starting point for server configurations. What are these BEST described as?",
    ["Industry security configuration baselines that can be tailored",
     "Mandatory laws",
     "Penetration test reports",
     "Risk registers"],
    "CIS Benchmarks are consensus-based configuration guides. Organizations adopt and tailor them into their own baselines.");
  Q("Baselines, Scoping and Tailoring", 3,
    "In NIST SP 800-53B, control baselines are selected based on:",
    ["The system's security categorization (low, moderate or high impact)",
     "The number of users",
     "The age of the hardware",
     "The vendor of the operating system"],
    "FIPS 199 categorization of impact on confidentiality, integrity and availability determines whether the low, moderate or high baseline applies; it is then tailored.");
  Q("Baselines, Scoping and Tailoring", 2,
    "Which standard specifies security requirements for a security management system and includes Annex A controls that organizations select from?",
    ["ISO/IEC 27001", "PCI DSS", "FIPS 140-3", "SOC 2"],
    "ISO/IEC 27001 Annex A lists reference controls. Organizations document which apply in a Statement of Applicability, which is a form of scoping and tailoring.");

  // ---------- Data protection methods ----------
  Q("Data Protection Methods", 2,
    "Which technology monitors and blocks sensitive data from leaving an organization through email, web uploads or removable media?",
    ["Data loss prevention (DLP)", "Intrusion detection system", "Load balancer", "Proxy auto-config"],
    "DLP inspects content and context to detect and prevent unauthorized transfer of sensitive data.");
  Q("Data Protection Methods", 2,
    "A DLP solution that inspects traffic at the network egress point is BEST suited to detect:",
    ["Sensitive data sent over unencrypted or inspected network channels",
     "Data copied to a USB drive on a laptop that is offline",
     "Data printed on a local printer",
     "Screenshots taken on a phone"],
    "Network DLP sees traffic passing the inspection point. Endpoint DLP is required for removable media, printing and offline activity.");
  Q("Data Protection Methods", 2,
    "Which control continues to protect a document and enforce usage restrictions (such as no printing or forwarding) after it leaves the organization?",
    ["Digital rights management (DRM) / information rights management (IRM)",
     "Firewall rules",
     "Full-disk encryption",
     "Network segmentation"],
    "DRM/IRM attaches persistent protection and policy to the content itself, enforcing restrictions wherever the file goes.");
  Q("Data Protection Methods", 2,
    "Which tool provides visibility and control over the use of cloud services, including shadow IT and data uploads to SaaS applications?",
    ["Cloud access security broker (CASB)", "Hardware security module", "Network tap", "Honeypot"],
    "A CASB sits between users and cloud services to discover cloud usage, enforce policy, apply DLP and detect threats.");
  Q("Data Protection Methods", 2,
    "Replacing a credit card number with a random surrogate value that maps back to the original only through a secure vault is called:",
    ["Tokenization", "Hashing", "Masking", "Steganography"],
    "Tokenization removes sensitive values from systems that do not need them. The token has no mathematical relationship to the original, unlike encryption.");
  Q("Data Protection Methods", 2,
    "Displaying only the last four digits of a Social Security number on a customer service screen is an example of:",
    ["Data masking", "Tokenization", "Encryption", "Anonymization"],
    "Masking hides part of a value from view while leaving enough information for the task.");
  Q("Data Protection Methods", 3,
    "A development team needs realistic test data but must not use real customer records. Which approach is BEST?",
    ["Use static data masking or synthetic data to generate non-identifying test datasets",
     "Copy production data to the test environment unchanged",
     "Encrypt production data and give testers the key",
     "Delete half the production fields and use the rest"],
    "Non-production environments usually have weaker controls. Masked or synthetic data preserves realism without exposing real personal data.");
  Q("Data Protection Methods", 2,
    "Which statement about anonymization is TRUE?",
    ["Properly anonymized data cannot reasonably be linked back to an individual",
     "Anonymized data can always be reversed with a key",
     "Anonymization and pseudonymization are identical",
     "Anonymized data is still regulated as personal data under GDPR"],
    "True anonymization is irreversible. Pseudonymized data can be re-identified with additional information and remains personal data.");
  Q("Data Protection Methods", 3,
    "Researchers removed names from a dataset but individuals were re-identified by combining ZIP code, birth date and gender with public records. This shows that:",
    ["Removing direct identifiers alone does not guarantee anonymity because of quasi-identifiers",
     "Hashing names would have prevented this",
     "The dataset was properly anonymized",
     "Data minimization does not apply to research"],
    "Quasi-identifiers can be combined to re-identify people. Techniques such as generalization, k-anonymity and differential privacy reduce this risk.");
  Q("Data Protection Methods", 2,
    "Which control BEST protects sensitive data stored in a database against a stolen backup file?",
    ["Encrypting the database or backups with keys stored separately",
     "Changing the database port",
     "Using a longer table name",
     "Disabling logging"],
    "Encryption at rest with proper key management makes stolen backups unreadable. Keys must not be stored alongside the backups.");
  Q("Data Protection Methods", 3,
    "What is the MOST important consideration when encrypting data at rest?",
    ["Key management, including protection, rotation and separation of keys from the data",
     "Choosing the longest possible file names",
     "Encrypting only file names",
     "Using a proprietary unpublished algorithm"],
    "Encryption is only as strong as its key management. Use vetted algorithms and protect keys, for example in an HSM or key management service.");

  // ---------- Privacy and data location ----------
  Q("Data Location", 2,
    "A company must ensure customer data stays within a specific country to comply with law. Which cloud configuration is MOST relevant?",
    ["Restricting storage and backups to approved regions (data residency)",
     "Using a content delivery network everywhere",
     "Disabling encryption",
     "Using public IP addresses"],
    "Data residency or localization requirements are met by choosing approved regions and verifying that backups, replicas and support access comply.");
  Q("Data Location", 3,
    "When data is stored with a cloud provider in another country, which question is MOST important from a legal perspective?",
    ["Which jurisdictions' laws can compel access to or govern the data",
     "How many data centers the provider has worldwide",
     "Whether the provider uses SSDs or HDDs",
     "The provider's marketing slogan"],
    "Data sovereignty means foreign laws may apply, including government access requests. Contracts, encryption and region choice help manage this risk.");
  Q("Privacy", 2,
    "Which document informs individuals about how their personal data is collected, used and shared?",
    ["Privacy notice (privacy policy)", "Acceptable use policy", "Business impact analysis", "Service level agreement"],
    "Privacy notices provide transparency, a core principle of privacy frameworks and laws.");
  Q("Privacy", 2,
    "Which set of principles, published in 1980 and still influential, includes collection limitation, purpose specification and use limitation?",
    ["OECD Privacy Guidelines", "ITIL", "COBIT", "Common Criteria"],
    "The OECD Guidelines on the Protection of Privacy and Transborder Flows of Personal Data established principles that underlie many modern privacy laws.");
  Q("Privacy", 3,
    "Personal data originally collected for order fulfillment is now proposed for an unrelated marketing analytics project. Which privacy principle is MOST at risk?",
    ["Purpose limitation", "Availability", "Accuracy", "Non-repudiation"],
    "Purpose limitation means data collected for one specified purpose should not be used for incompatible purposes without a lawful basis such as consent.");

  // ---------- Media handling ----------
  Q("Media Handling", 2,
    "Backup tapes are transported offsite by a courier. Which control BEST protects their confidentiality?",
    ["Encrypt the backups and use locked containers with documented chain of custody",
     "Label the tapes clearly with the word 'Confidential' only",
     "Send them by regular mail",
     "Store the encryption key in the same box"],
    "Encryption protects data if media is lost or stolen. Locked containers and custody records reduce the chance of loss and support accountability.");
  Q("Media Handling", 2,
    "Which control BEST reduces the risk of data leakage through removable USB drives?",
    ["Endpoint device control policies combined with encryption for approved devices",
     "Asking users not to use USB drives",
     "Disabling the monitor",
     "Using longer passwords"],
    "Technical controls can block unapproved devices, enforce encryption on approved ones and log transfers. Policy alone is not enough.");
  Q("Media Handling", 2,
    "A leased copier is being returned to the vendor. What is the PRIMARY data security concern?",
    ["The internal hard drive may contain images of scanned and printed documents",
     "The copier's toner may be refilled",
     "The vendor may change the copier's color",
     "The copier's network cable may be lost"],
    "Many multifunction printers and copiers store document images. Drives should be sanitized or retained before return.");
  Q("Media Handling", 3,
    "Which practice BEST ensures a third-party destruction vendor actually destroyed sensitive media?",
    ["Require a certificate of destruction and periodically audit or witness the process",
     "Trust the vendor's website claims",
     "Ask the vendor to send photos of empty trucks",
     "Destroy only half of the media"],
    "Certificates of destruction, witnessing and audits provide evidence. Contracts should define methods, timelines and liability.");

  // ---------- Information handling requirements ----------
  Q("Information Handling", 2,
    "Which document specifies how each classification level must be stored, transmitted, labeled and destroyed?",
    ["Data handling standard or procedure", "Business continuity plan", "Network diagram", "Risk register"],
    "Handling requirements turn classification into concrete rules, such as 'Confidential data must be encrypted in transit and at rest'.");
  Q("Information Handling", 2,
    "An employee wants to email a confidential file to a partner. According to typical handling requirements, what should happen FIRST?",
    ["Confirm the partner is authorized (for example, under an NDA) and use an approved secure method",
     "Send it from a personal email account to avoid filters",
     "Rename the file to hide its contents",
     "Post it on a public file-sharing site"],
    "Sharing must respect authorization and approved channels. Encryption or secure file transfer protects data in transit.");
  Q("Information Handling", 3,
    "Why might a single control set for 'Confidential' data be insufficient for a multinational company?",
    ["Different jurisdictions impose different legal requirements on the same data types",
     "Confidential data does not need controls",
     "Encryption works differently in each country",
     "Classification labels are illegal outside the U.S."],
    "Handling requirements must account for local law (for example, health data, employee data and data transfer rules), which may require additional controls.");

  // ---------- Ownership and privacy scenarios ----------
  Q("Data Ownership", 2,
    "After a merger, two systems hold overlapping customer records with conflicting classifications. What should be done FIRST?",
    ["Have the data owners agree on and apply a single classification",
     "Use the lower classification to save money",
     "Delete one system",
     "Let each user decide"],
    "Owners must resolve classification conflicts. Usually the more protective classification applies until the review is complete.");
  Q("Data Ownership", 2,
    "Which task is the data owner LEAST likely to perform directly?",
    ["Performing nightly backups",
     "Approving access requests",
     "Assigning classification",
     "Defining retention requirements"],
    "Owners decide; custodians perform operational tasks like backups.");

  // ---------- Additional concepts ----------
  Q("Data Classification", 3,
    "A database stores records at different classification levels. To prevent lower-cleared users from inferring the existence of higher-classified records, the database creates multiple records with the same key at different levels. This is called:",
    ["Polyinstantiation", "Aggregation", "Normalization", "Tokenization"],
    "Polyinstantiation creates different versions of data for different clearance levels, defending against inference attacks in multilevel secure databases.");
  Q("Data Classification", 2,
    "Information is said to be 'declassified' when:",
    ["It is formally reviewed and its classification is removed or lowered",
     "It is encrypted",
     "It is stored in the cloud",
     "It is copied to a new server"],
    "Declassification is a formal process, often triggered by time or events, that lowers or removes classification.");
  Q("Asset Management", 3,
    "Which configuration management practice MOST directly helps ensure that assets remain in an approved secure state?",
    ["Maintaining baseline configurations and monitoring for unauthorized changes (drift)",
     "Allowing administrators to change settings freely",
     "Reimaging systems only after a breach",
     "Disabling logging to save space"],
    "Configuration baselines and drift detection identify unauthorized or accidental changes that weaken security.");
  Q("Data Protection Methods", 2,
    "Which encryption-related standard specifies security requirements for cryptographic modules used to protect sensitive data in U.S. federal systems?",
    ["FIPS 140-3", "ISO 9001", "ITIL 4", "PCI PIN"],
    "FIPS 140-3 (successor to FIPS 140-2) defines requirements and validation levels for cryptographic modules.");
  Q("Data Protection Methods", 3,
    "An organization wants to detect when sensitive documents are leaked by tracing which copy was shared. Which technique supports this?",
    ["Digital watermarking or fingerprinting of documents",
     "Data deduplication",
     "File compression",
     "Disk defragmentation"],
    "Watermarks (visible or invisible) embed identifying marks that can trace a leaked copy back to a recipient.");
  Q("Data Remanence", 2,
    "Which media type is MOST susceptible to remanence after a standard 'delete' operation?",
    ["Magnetic hard disk drives", "Paper that has been cross-cut shredded", "Incinerated optical discs", "Pulverized flash chips"],
    "Deleting files on an HDD leaves the data on the platters until it is overwritten, making recovery straightforward.");
  Q("Data Remanence", 3,
    "RAM content can sometimes be recovered for a short time after power loss, especially when chilled. This is known as a:",
    ["Cold boot attack", "Replay attack", "Birthday attack", "Side-loading attack"],
    "Cold boot attacks exploit DRAM data remanence to recover encryption keys and other secrets from memory.");
  Q("Data Retention", 2,
    "Which statement about backups and retention is MOST accurate?",
    ["Backups must also follow retention and destruction policies",
     "Backups are exempt from retention policies",
     "Backups should always be kept forever",
     "Retention applies only to paper records"],
    "Data deleted from production but retained in backups is still held by the organization and remains subject to discovery, breach and privacy obligations.");
  Q("Data Lifecycle", 2,
    "A document's classification should change when it is shared outside the organization. Which statement is MOST accurate?",
    ["Sharing does not lower classification; recipients must protect it according to agreements",
     "Shared data automatically becomes public",
     "Classification only applies inside the company firewall",
     "Recipients may reclassify it as they wish"],
    "Classification stays with the data. Agreements such as NDAs or data sharing agreements extend handling obligations to recipients.");
  Q("Data Protection Methods", 2,
    "Which statement BEST describes the difference between hashing and encryption?",
    ["Hashing is one-way and used for integrity; encryption is reversible with a key and used for confidentiality",
     "Hashing is reversible; encryption is not",
     "They are the same thing",
     "Hashing requires a public key"],
    "Hash functions produce a fixed-length digest that cannot be reversed. Encryption transforms data so it can be decrypted with the correct key.");
  Q("Data Classification", 2,
    "Which group should be involved in defining an organization's classification scheme?",
    ["Business owners, legal/compliance, and security, with senior management approval",
     "Only the network team",
     "Only external auditors",
     "Only end users"],
    "Classification affects the whole business, so it must reflect business value, legal obligations and security capabilities, and be approved by management.");
  Q("Asset Management", 2,
    "Which practice addresses the risk of employees using unsanctioned cloud applications to store company data?",
    ["Shadow IT discovery (for example, CASB or proxy logs) plus clear policy and approved alternatives",
     "Blocking all internet access permanently",
     "Ignoring the issue because cloud is secure",
     "Removing all laptops"],
    "Discovery reveals unsanctioned services, and providing approved tools reduces the incentive for users to work around controls.");
  Q("Data Protection Methods", 3,
    "Endpoint DLP flags an employee copying thousands of customer records to a personal cloud drive the day after resigning. Which type of threat does this MOST likely indicate?",
    ["Insider data exfiltration", "Distributed denial of service", "Ransomware encryption", "SQL injection"],
    "Departing employees taking data is a common insider threat. DLP, user behavior analytics and prompt deprovisioning help detect and prevent it.");
  Q("Information Handling", 2,
    "Which control BEST ensures sensitive paper documents are protected after business hours?",
    ["A clean desk policy with locked storage", "Labeling documents in red ink", "Faxing documents to the office", "Leaving documents face down"],
    "Clean desk policies require sensitive materials to be secured when not in use, reducing exposure to cleaners, visitors and opportunistic theft.");
  Q("Data Lifecycle", 3,
    "Which phase of the data lifecycle is MOST often overlooked, leaving sensitive data in old file shares and decommissioned systems?",
    ["Destruction (secure disposal)", "Creation", "Use", "Classification at creation"],
    "Organizations frequently fail to dispose of data at the end of its retention period, which increases breach impact and storage costs.");
  Q("Data Roles", 3,
    "A data processor wants to engage a sub-processor to handle personal data. Under GDPR, what is generally required?",
    ["Prior authorization from the controller and a contract imposing the same data protection obligations",
     "Nothing; processors may subcontract freely",
     "Approval from the data subject only",
     "Publishing the sub-processor's name in a newspaper"],
    "GDPR Article 28 requires controller authorization (specific or general) and flows down data protection obligations to sub-processors.");
  Q("Data States", 3,
    "Which approach allows computations on encrypted data without decrypting it first?",
    ["Homomorphic encryption", "Steganography", "Symmetric block ciphers in ECB mode", "Hashing with salt"],
    "Homomorphic encryption enables operations on ciphertext that, when decrypted, match the results of operations on the plaintext. It protects data in use, though it is computationally expensive.");
  Q("Asset Management", 2,
    "Which document records the hardware, software and configuration items and their relationships within an IT environment?",
    ["Configuration management database (CMDB)", "Privacy notice", "Incident report", "Acceptable use policy"],
    "A CMDB stores configuration items and relationships, supporting change, incident and asset management.");
  Q("Data Sanitization", 3,
    "An organization donates old laptops to a school. Which sanitization level is MOST appropriate if the laptops held confidential data?",
    ["Purge, with verification, before the devices leave organizational control",
     "Clear only, since the school is trustworthy",
     "No sanitization because the laptops are old",
     "Delete user profiles only"],
    "Media leaving organizational control should be purged (or destroyed if purge is not possible) and verified, per NIST SP 800-88 guidance.");
  Q("Data Protection Methods", 2,
    "What is the PRIMARY benefit of tokenizing payment card data for PCI DSS compliance?",
    ["Systems that store only tokens can be removed from PCI DSS scope",
     "Tokens make transactions faster",
     "Tokens replace the need for any security controls",
     "Tokens are required by GDPR"],
    "Reducing where cardholder data exists reduces the number of systems that must meet PCI DSS requirements.");
  Q("Privacy", 3,
    "Which privacy-enhancing technique adds carefully calibrated statistical noise to query results so individuals cannot be identified, while preserving aggregate accuracy?",
    ["Differential privacy", "Tokenization", "Data masking", "Symmetric encryption"],
    "Differential privacy provides mathematical guarantees that the presence or absence of an individual does not significantly affect results.");
  Q("Media Handling", 2,
    "Which type of media is MOST appropriately destroyed by pulverizing or shredding to particles of a specified size?",
    ["Solid-state and flash media", "Cloud storage buckets", "Virtual disks", "Encrypted email"],
    "Physical destruction of flash media requires shredding or disintegration into small particles because data may remain in individual chips.");
  Q("Data Classification", 1,
    "Which classification would MOST likely apply to a company's published press release?",
    ["Public", "Confidential", "Private", "Sensitive"],
    "Information intended for public release carries no confidentiality requirement, though its integrity should still be protected.");
  Q("Data Classification", 3,
    "Information about employees' medical conditions held by HR would MOST likely be classified as:",
    ["Private (personal) or the highest internal sensitivity level, due to legal obligations",
     "Public",
     "Unclassified",
     "Proprietary marketing data"],
    "Health and personal data is legally protected in most jurisdictions and must be handled with strict controls.");
  Q("Asset Management", 2,
    "What is the PRIMARY reason to record the location of assets in an inventory?",
    ["To support physical security, incident response and recovery planning",
     "To calculate office rent",
     "To decide employee seating",
     "To track coffee machine usage"],
    "Knowing where assets are supports investigations, patching, physical protection and disaster recovery.");
  Q("Data Protection Methods", 2,
    "Which practice BEST protects encryption keys used for data at rest in a large enterprise?",
    ["Store keys in a hardware security module or managed key service with access controls and logging",
     "Store keys in the same folder as encrypted files",
     "Email keys to administrators",
     "Hardcode keys in application source code"],
    "Dedicated key management systems protect keys from extraction and record their use, supporting separation of duties.");
  Q("Data Remanence", 2,
    "Formatting a hard drive with a quick format:",
    ["Typically rebuilds the file system structures but leaves most data recoverable",
     "Permanently destroys all data",
     "Physically damages the platters",
     "Meets NIST purge requirements"],
    "Quick format rewrites file system metadata. The underlying data remains and can be recovered with forensic tools.");
  Q("Data Lifecycle", 2,
    "Which control is MOST relevant during the 'share' phase of the data lifecycle?",
    ["Access controls, encryption in transit and data sharing agreements",
     "Degaussing",
     "Archival storage",
     "Physical shredding"],
    "Sharing exposes data to new parties and networks, so authorization, encryption and contractual obligations are key.");
  Q("Information Handling", 3,
    "A U.S. defense contractor receives Controlled Unclassified Information (CUI). Which framework MOST directly defines the controls it must apply?",
    ["NIST SP 800-171 (and CMMC where required)", "PCI DSS", "HIPAA", "ISO 9001"],
    "NIST SP 800-171 specifies requirements for protecting CUI in non-federal systems. The CMMC program assesses compliance for defense contractors.");

  window.CISSP = window.CISSP || { questions: {}, flashcards: {} };
  CISSP.questions[2] = qs;

  // ---------- Flashcards ----------
  const cards = [];
  const F = (t, f, b) => cards.push({ id: "d2-c" + String(cards.length + 1).padStart(3, "0"), t, f, b });

  F("Data Classification", "Purpose of classification", "Apply protection proportional to the data's value and sensitivity.");
  F("Data Classification", "Government classification levels", "Top Secret (exceptionally grave damage), Secret (serious damage), Confidential (damage), Unclassified.");
  F("Data Classification", "Commercial classification levels", "Confidential/Proprietary, Private, Sensitive, Public (labels vary by organization).");
  F("Data Classification", "Who classifies data?", "The data owner.");
  F("Data Classification", "Classification criteria", "Value, sensitivity, impact of disclosure or loss, legal and regulatory requirements, age and useful life.");
  F("Data Classification", "Aggregation", "Combining less sensitive items produces more sensitive information.");
  F("Data Classification", "Polyinstantiation", "Multiple versions of a record at different classification levels to prevent inference.");
  F("Data Classification", "Declassification", "Formal process to remove or lower a classification, often after sanitization or the passage of time.");
  F("Data Classification", "Asset classification rule", "An asset takes the classification of the most sensitive data it stores or processes.");
  F("Labeling and Handling", "Labeling vs marking", "Labels identify classification on media or in metadata so people and systems handle data correctly.");
  F("Labeling and Handling", "Unlabeled media", "Treat as the highest classification until verified.");
  F("Data Roles", "Data owner", "Accountable business manager: classifies data, approves access, sets requirements.");
  F("Data Roles", "Data custodian", "Performs day-to-day protection: backups, patching, access configuration.");
  F("Data Roles", "Data steward", "Ensures data quality, definitions, metadata and proper business use.");
  F("Data Roles", "System owner", "Accountable for a system's security and operation.");
  F("Data Roles", "Data subject", "The individual the personal data is about.");
  F("Data Roles", "Controller vs processor", "Controller determines purposes and means; processor processes on the controller's behalf.");
  F("Data Lifecycle", "Data lifecycle", "Create, store, use, share, archive, destroy.");
  F("Data Lifecycle", "When to classify", "At or near creation or collection.");
  F("Data Retention", "Retention drivers", "Legal, regulatory, contractual and business requirements.");
  F("Data Retention", "Legal hold", "Suspends normal deletion for records relevant to litigation or investigation.");
  F("Data Retention", "Risk of over-retention", "More data exposed in breaches and e-discovery; higher cost.");
  F("Data States", "Data at rest", "Stored data. Protect with encryption, access control, and physical security.");
  F("Data States", "Data in transit", "Moving across networks. Protect with TLS, IPsec, VPNs and SSH.");
  F("Data States", "Data in use", "Being processed in memory. Protect with trusted execution environments and homomorphic encryption.");
  F("Data Remanence", "Data remanence", "Residual data left on media after deletion.");
  F("Data Sanitization", "NIST SP 800-88 Clear", "Overwrite using standard read/write commands; protects against simple recovery; media reusable.");
  F("Data Sanitization", "NIST SP 800-88 Purge", "Protects against laboratory recovery (crypto erase, block erase, degauss); media may be reused.");
  F("Data Sanitization", "NIST SP 800-88 Destroy", "Physical destruction (shred, disintegrate, incinerate, pulverize); media cannot be reused.");
  F("Data Sanitization", "Degaussing", "Strong magnetic field erases magnetic media; ineffective on SSDs and optical media.");
  F("Data Sanitization", "Cryptographic erase", "Destroy the encryption key so encrypted data becomes unreadable; key method for SSDs and cloud.");
  F("Data Sanitization", "SSD sanitization challenge", "Wear leveling and over-provisioning prevent reliable overwriting. Use secure erase, crypto erase or destruction.");
  F("Data Sanitization", "Verification", "Check and document sanitization results (certificate of sanitization or destruction).");
  F("Data Remanence", "Cold boot attack", "Recovering secrets from DRAM remanence after power loss.");
  F("Asset Management", "Why asset inventory?", "You cannot protect what you don't know you have.");
  F("Asset Management", "EOL vs EOS", "EOL: no longer sold. EOS: no more patches or support. EOS is the security risk.");
  F("Asset Management", "CMDB", "Configuration management database of configuration items and their relationships.");
  F("Asset Management", "Configuration drift", "Unauthorized or gradual divergence from an approved baseline.");
  F("Asset Management", "Shadow IT", "Unsanctioned technology or cloud services used without IT approval.");
  F("Baselines, Scoping and Tailoring", "Baseline", "Minimum set of security controls or configurations for a system type.");
  F("Baselines, Scoping and Tailoring", "Scoping", "Removing baseline controls that don't apply to the system.");
  F("Baselines, Scoping and Tailoring", "Tailoring", "Adjusting controls (parameters, compensating controls) to fit the organization.");
  F("Baselines, Scoping and Tailoring", "Statement of Applicability", "ISO 27001 document listing which Annex A controls apply and why.");
  F("Baselines, Scoping and Tailoring", "FIPS 199", "Categorizes federal systems as low, moderate or high impact for C, I and A.");
  F("Data Protection Methods", "DLP", "Data loss prevention: detects and blocks sensitive data leaving via network, endpoint or cloud.");
  F("Data Protection Methods", "Network DLP vs endpoint DLP", "Network DLP sees traffic at egress points. Endpoint DLP covers USB, printing, clipboard and offline activity.");
  F("Data Protection Methods", "DRM / IRM", "Persistent protection and usage rights that travel with the content.");
  F("Data Protection Methods", "CASB", "Cloud access security broker: visibility, DLP and policy enforcement for cloud services.");
  F("Data Protection Methods", "Tokenization", "Replaces sensitive values with random tokens; mapping kept in a secure vault.");
  F("Data Protection Methods", "Data masking", "Hides part or all of a value (for example, ****1234), often for display or test data.");
  F("Data Protection Methods", "Anonymization vs pseudonymization", "Anonymization is irreversible. Pseudonymization is reversible with separately held data.");
  F("Data Protection Methods", "Quasi-identifiers", "Attributes like ZIP code, birth date and gender that can be combined to re-identify people.");
  F("Data Protection Methods", "FIPS 140-3", "U.S. standard for validating cryptographic modules.");
  F("Data Protection Methods", "Watermarking", "Embedding identifying marks to trace leaked documents.");
  F("Privacy", "Differential privacy", "Adds calibrated noise to protect individuals in aggregate data.");
  F("Privacy", "Purpose limitation", "Use personal data only for the purposes for which it was collected.");
  F("Privacy", "OECD Privacy Guidelines", "1980 principles: collection limitation, data quality, purpose specification, use limitation, security, openness, individual participation, accountability.");
  F("Data Location", "Data residency", "Requirement or choice to store data in a specific geographic location.");
  F("Media Handling", "Copier and printer drives", "Multifunction devices can store document images; sanitize before return or disposal.");
  F("Media Handling", "Certificate of destruction", "Vendor evidence that media was destroyed per contract.");
  F("Information Handling", "Clean desk policy", "Secure sensitive materials when unattended.");
  F("Information Handling", "NIST SP 800-171", "Requirements for protecting Controlled Unclassified Information (CUI) in non-federal systems.");
  F("Data States", "Homomorphic encryption", "Compute on encrypted data without decrypting it.");

  CISSP.flashcards[2] = cards;
})();
