// Domain 4: Communication and Network Security
// Original practice questions written against the CISSP exam outline topics.
// Format: Q(topic, difficulty 1-3, question, [correct, distractor, distractor, distractor], explanation)
// The correct option is listed first here; the app shuffles options at runtime.
// IDs are assigned by position, so append new questions at the end to keep saved progress stable.
(function () {
  const qs = [];
  const Q = (t, d, q, o, e) => qs.push({ id: "d4-" + String(qs.length + 1).padStart(3, "0"), t, d, q, o, a: 0, e });

  // ---------- OSI and TCP/IP ----------
  Q("OSI Model", 1,
    "Which OSI layer is responsible for logical addressing and routing?",
    ["Network (Layer 3)", "Data Link (Layer 2)", "Transport (Layer 4)", "Session (Layer 5)"],
    "The Network layer handles IP addressing and routing between networks. Routers operate here.");
  Q("OSI Model", 1,
    "MAC addresses are used at which OSI layer?",
    ["Data Link (Layer 2)", "Network (Layer 3)", "Physical (Layer 1)", "Transport (Layer 4)"],
    "The Data Link layer uses MAC addresses for delivery within a local network segment. Switches and bridges operate here.");
  Q("OSI Model", 2,
    "Which OSI layer handles encryption, compression and data format translation?",
    ["Presentation (Layer 6)", "Application (Layer 7)", "Session (Layer 5)", "Transport (Layer 4)"],
    "The Presentation layer translates data formats such as ASCII and JPEG and handles encryption and compression in the OSI model.");
  Q("OSI Model", 2,
    "Which OSI layer establishes, manages and terminates communication sessions between applications?",
    ["Session (Layer 5)", "Transport (Layer 4)", "Network (Layer 3)", "Presentation (Layer 6)"],
    "The Session layer manages dialog control between hosts, such as RPC sessions and NetBIOS.");
  Q("OSI Model", 2,
    "TCP and UDP operate at which OSI layer?",
    ["Transport (Layer 4)", "Network (Layer 3)", "Session (Layer 5)", "Data Link (Layer 2)"],
    "The Transport layer provides end-to-end delivery. TCP is connection-oriented and reliable; UDP is connectionless and faster.");
  Q("OSI Model", 2,
    "What is the correct order of the TCP three-way handshake?",
    ["SYN, SYN-ACK, ACK", "ACK, SYN, SYN-ACK", "SYN, ACK, FIN", "SYN-ACK, SYN, ACK"],
    "The client sends SYN, the server replies SYN-ACK, and the client confirms with ACK.");
  Q("OSI Model", 2,
    "In the TCP/IP model, which layer corresponds to OSI Layers 5, 6 and 7?",
    ["Application", "Transport", "Internet", "Link (network access)"],
    "The four-layer TCP/IP model has Link, Internet, Transport and Application layers. Application covers OSI Session, Presentation and Application.");
  Q("OSI Model", 2,
    "Encapsulation refers to:",
    ["Adding headers (and trailers) as data moves down the protocol stack",
     "Removing headers as data moves down the stack",
     "Encrypting every packet",
     "Compressing data at Layer 1"],
    "Each layer wraps data from the layer above. On receipt, headers are removed layer by layer (de-encapsulation).");

  // ---------- IP networking ----------
  Q("IP Networking", 2,
    "Which IPv4 address range is reserved for private use under RFC 1918?",
    ["172.16.0.0 to 172.31.255.255", "8.8.8.0 to 8.8.8.255", "169.254.0.0 to 169.254.255.255 only", "224.0.0.0 to 239.255.255.255"],
    "RFC 1918 private ranges are 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16. 169.254.0.0/16 is link-local (APIPA) and 224.0.0.0/4 is multicast.");
  Q("IP Networking", 2,
    "Network address translation (NAT) provides which security benefit?",
    ["It hides internal IP addresses from external networks",
     "It encrypts all traffic",
     "It authenticates users",
     "It prevents malware downloads"],
    "NAT obscures internal addressing and blocks unsolicited inbound connections by default, but it is not a substitute for a firewall.");
  Q("IP Networking", 2,
    "What is the length of an IPv6 address?",
    ["128 bits", "32 bits", "64 bits", "48 bits"],
    "IPv6 uses 128-bit addresses. IPv4 uses 32 bits; MAC addresses are 48 bits.");
  Q("IP Networking", 3,
    "Which IPv6 security consideration is often overlooked in IPv4-only security programs?",
    ["IPv6 may be enabled by default and tunneled, bypassing IPv4-only monitoring and filtering",
     "IPv6 cannot carry TCP traffic",
     "IPv6 does not support encryption",
     "IPv6 traffic cannot be routed"],
    "Dual-stack hosts and tunneling protocols (such as Teredo and 6to4) can create unmonitored paths. Security tools and policies must cover IPv6.");
  Q("IP Networking", 2,
    "Which protocol is used by ping and traceroute?",
    ["ICMP", "ARP", "SNMP", "IGMP"],
    "ICMP carries diagnostic and error messages. Some ICMP should be allowed for network health, but it can be abused for reconnaissance and attacks.");
  Q("IP Networking", 2,
    "ARP is used to:",
    ["Resolve IP addresses to MAC addresses on a local network",
     "Resolve domain names to IP addresses",
     "Assign IP addresses dynamically",
     "Route packets between networks"],
    "ARP maps Layer 3 to Layer 2 addresses. DNS resolves names; DHCP assigns addresses.");

  // ---------- Ports and protocols ----------
  Q("Ports and Protocols", 1,
    "Which port does HTTPS use by default?",
    ["443", "80", "22", "25"],
    "HTTPS uses TCP 443. HTTP uses 80, SSH 22, SMTP 25.");
  Q("Ports and Protocols", 2,
    "Which protocol should replace Telnet for secure remote administration?",
    ["SSH", "FTP", "TFTP", "rlogin"],
    "Telnet sends credentials in cleartext. SSH (TCP 22) encrypts the session.");
  Q("Ports and Protocols", 2,
    "Which port is used by DNS for standard queries?",
    ["53", "67", "161", "389"],
    "DNS uses UDP 53 for most queries and TCP 53 for zone transfers and large responses. DHCP uses 67/68, SNMP 161, LDAP 389.");
  Q("Ports and Protocols", 2,
    "Which version of SNMP adds authentication and encryption?",
    ["SNMPv3", "SNMPv1", "SNMPv2c", "SNMPv0"],
    "SNMPv1 and v2c use cleartext community strings. SNMPv3 supports user-based authentication and privacy (encryption).");
  Q("Ports and Protocols", 2,
    "Which protocol is the secure replacement for LDAP, using TLS on port 636?",
    ["LDAPS", "Kerberos", "RADIUS", "TACACS"],
    "LDAPS wraps LDAP in TLS on TCP 636. StartTLS can also upgrade a connection on port 389.");
  Q("Ports and Protocols", 2,
    "Which file transfer protocol runs over SSH?",
    ["SFTP", "FTPS", "TFTP", "FTP"],
    "SFTP is an SSH subsystem on port 22. FTPS is FTP secured with TLS. TFTP has no authentication.");
  Q("Ports and Protocols", 2,
    "Which port is used by Remote Desktop Protocol (RDP)?",
    ["3389", "445", "1433", "5060"],
    "RDP uses TCP 3389. Exposing RDP directly to the internet is a major ransomware entry point; use a VPN or gateway with MFA.");
  Q("Ports and Protocols", 2,
    "SMB file sharing on modern Windows systems uses which port?",
    ["445", "139 only", "21", "110"],
    "SMB runs directly over TCP 445. Port 139 was used for SMB over NetBIOS. SMB should never be exposed to the internet.");

  // ---------- DNS and email security ----------
  Q("DNS Security", 2,
    "DNSSEC protects DNS by providing:",
    ["Origin authentication and integrity of DNS records through digital signatures",
     "Encryption of DNS queries",
     "Anonymity for DNS users",
     "Faster DNS resolution"],
    "DNSSEC signs records so resolvers can validate them, defeating cache poisoning. It does not encrypt queries; DNS over HTTPS or TLS does.");
  Q("DNS Security", 2,
    "An attacker inserts forged records into a resolver's cache to redirect users to a malicious site. This is:",
    ["DNS cache poisoning", "ARP spoofing", "MAC flooding", "SYN flooding"],
    "Cache poisoning corrupts DNS responses stored by resolvers. DNSSEC validation and source port randomization reduce the risk.");
  Q("DNS Security", 3,
    "Which technique uses DNS queries and responses to smuggle data out of a network?",
    ["DNS tunneling", "DNS zone signing", "Reverse lookup", "Round-robin DNS"],
    "DNS tunneling encodes data in DNS traffic, which is often allowed outbound. Detection uses DNS analytics for unusual query volumes and lengths.");
  Q("DNS Security", 2,
    "Unrestricted DNS zone transfers to any host are a risk because they:",
    ["Reveal the organization's internal hostnames and network structure",
     "Encrypt the DNS zone",
     "Disable DNSSEC",
     "Speed up name resolution"],
    "Zone transfers should be limited to authorized secondary DNS servers.");
  Q("Email Security", 2,
    "Which DNS-based mechanism lists the mail servers authorized to send email for a domain?",
    ["SPF", "DKIM", "DMARC", "S/MIME"],
    "SPF publishes authorized sending IPs. DKIM signs messages. DMARC defines policy and reporting based on SPF and DKIM alignment.");
  Q("Email Security", 2,
    "DKIM helps prevent email spoofing by:",
    ["Adding a domain-level digital signature to message headers verified through DNS",
     "Encrypting email end to end",
     "Blocking all attachments",
     "Listing authorized IP addresses"],
    "Receiving servers verify the DKIM signature with the public key published in the sender's DNS.");
  Q("Email Security", 3,
    "A domain owner wants receivers to reject messages that fail SPF and DKIM alignment and to send aggregate reports. Which record should they publish?",
    ["A DMARC record with p=reject", "An MX record", "A PTR record", "A CNAME record"],
    "DMARC policy can be none, quarantine or reject, and includes reporting addresses.");
  Q("Email Security", 2,
    "Which standard provides end-to-end email encryption and digital signatures using X.509 certificates?",
    ["S/MIME", "SPF", "STARTTLS", "POP3"],
    "S/MIME uses PKI certificates. PGP uses a web of trust. STARTTLS protects only server-to-server hops.");

  // ---------- Network attacks ----------
  Q("Network Attacks", 2,
    "An attacker sends forged ARP replies to associate their MAC address with the default gateway's IP. What attack is this?",
    ["ARP poisoning (ARP spoofing)", "DNS poisoning", "VLAN hopping", "Smurf attack"],
    "ARP poisoning enables man-in-the-middle attacks on a LAN. Dynamic ARP inspection on switches mitigates it.");
  Q("Network Attacks", 2,
    "A SYN flood attack works by:",
    ["Sending many SYN packets without completing the handshake, exhausting server connection resources",
     "Sending oversized ICMP packets",
     "Poisoning DNS caches",
     "Guessing passwords"],
    "Half-open connections fill the server's backlog. SYN cookies and rate limiting help.");
  Q("Network Attacks", 2,
    "A Smurf attack uses:",
    ["ICMP echo requests sent to a broadcast address with a spoofed victim source address",
     "Malformed TCP flags",
     "DNS zone transfers",
     "Bluetooth pairing"],
    "Every host on the broadcast network replies to the victim, amplifying traffic. Disabling directed broadcasts prevents it.");
  Q("Network Attacks", 3,
    "Which attack abuses open DNS or NTP servers to send large responses to a spoofed victim address?",
    ["Reflection/amplification DDoS", "Teardrop", "Pass-the-hash", "Bluejacking"],
    "Small queries trigger much larger responses sent to the victim. Mitigations include closing open resolvers, rate limiting and anti-spoofing filters (BCP 38).");
  Q("Network Attacks", 2,
    "An attacker floods a switch with fake MAC addresses so it starts broadcasting all frames. This is:",
    ["MAC flooding", "ARP poisoning", "DNS hijacking", "Session hijacking"],
    "When the CAM table fills, many switches fail open and act like hubs. Port security limits MAC addresses per port.");
  Q("Network Attacks", 3,
    "An attacker sends frames with two 802.1Q tags to reach a VLAN they are not assigned to. This attack is:",
    ["VLAN hopping via double tagging", "MAC flooding", "Smurf", "Ping of death"],
    "Mitigations include not using the native VLAN for user traffic, disabling auto-trunking (DTP) and setting unused ports to an isolated VLAN.");
  Q("Network Attacks", 2,
    "A teardrop attack exploits:",
    ["Overlapping IP fragment offsets that crash systems during reassembly",
     "Weak Wi-Fi passwords",
     "Open SMTP relays",
     "Unpatched browsers"],
    "Malformed fragments confused older TCP/IP stacks. Modern systems are patched, but fragment-based evasion remains an IDS concern.");
  Q("Network Attacks", 2,
    "Which control BEST prevents IP address spoofing at the network edge?",
    ["Ingress and egress filtering of packets with invalid source addresses",
     "Increasing bandwidth",
     "Using longer passwords",
     "Disabling logging"],
    "Ingress filtering drops inbound packets claiming internal source addresses. Egress filtering drops outbound packets with external source addresses (BCP 38).");
  Q("Network Attacks", 3,
    "An attacker on a public Wi-Fi network sets up an access point with the same SSID as a legitimate one. This is called a(n):",
    ["Evil twin", "Rogue DHCP server", "Bluesnarfing attack", "War dialing"],
    "Users connect to the attacker's AP, enabling interception. 802.1X with server certificate validation and VPNs mitigate the risk.");
  Q("Network Attacks", 2,
    "An attacker takes over an established session by stealing a session token. This is:",
    ["Session hijacking", "Smurf attack", "Teardrop attack", "War driving"],
    "Encrypting sessions, regenerating tokens after login and short timeouts reduce hijacking risk.");

  // ---------- Network devices ----------
  Q("Network Devices", 2,
    "Which firewall type examines only packet headers such as source/destination IP, port and protocol?",
    ["Packet-filtering (static) firewall", "Application-level proxy firewall", "Next-generation firewall", "Web application firewall"],
    "Packet filters are fast but do not track state or inspect payloads.");
  Q("Network Devices", 2,
    "A stateful inspection firewall differs from a packet filter because it:",
    ["Tracks the state of connections and allows return traffic for established sessions",
     "Inspects only MAC addresses",
     "Cannot filter by port",
     "Operates only at Layer 1"],
    "Stateful firewalls maintain a state table, making decisions in the context of the connection.");
  Q("Network Devices", 2,
    "Which firewall operates at Layer 7 and can understand specific protocols, acting as an intermediary for connections?",
    ["Application-level gateway (proxy firewall)", "Packet filter", "Circuit-level gateway", "Layer 2 bridge"],
    "Proxy firewalls terminate and re-create connections, inspecting application content. Circuit-level gateways (such as SOCKS) work at the session layer without inspecting content.");
  Q("Network Devices", 2,
    "A next-generation firewall (NGFW) typically adds which capabilities?",
    ["Application awareness, user identity integration and integrated intrusion prevention",
     "Only port blocking",
     "Wireless access point functions",
     "Hard disk encryption"],
    "NGFWs identify applications regardless of port, enforce user-based policies and often include IPS and threat intelligence.");
  Q("Network Devices", 2,
    "Which device is designed specifically to protect web applications from attacks such as SQL injection and cross-site scripting?",
    ["Web application firewall (WAF)", "Network IDS", "Packet filter", "VPN concentrator"],
    "WAFs inspect HTTP/HTTPS traffic and apply rules (such as OWASP Core Rule Set) to block common web attacks.");
  Q("Network Devices", 2,
    "What is the PRIMARY difference between an IDS and an IPS?",
    ["An IPS sits inline and can block traffic; an IDS monitors and alerts",
     "An IDS encrypts traffic",
     "An IPS works only on wireless networks",
     "There is no difference"],
    "An IDS is passive (often on a SPAN port or tap). An IPS is inline and can drop malicious traffic, so false positives can disrupt business.");
  Q("Network Devices", 2,
    "Which IDS detection method compares traffic against known attack patterns?",
    ["Signature-based", "Anomaly-based", "Heuristic only", "Stateful protocol analysis only"],
    "Signature-based detection is accurate for known attacks but misses new ones. Anomaly-based detection finds deviations from a baseline but has more false positives.");
  Q("Network Devices", 3,
    "In a screened subnet architecture, where should a public web server be placed?",
    ["In the DMZ between the external and internal firewalls",
     "On the internal LAN with the database",
     "Directly on the internet with no firewall",
     "On the same VLAN as workstations"],
    "The DMZ isolates internet-facing systems so a compromise does not provide direct access to the internal network.");
  Q("Network Devices", 2,
    "A forward proxy is typically used to:",
    ["Control and filter outbound user web traffic",
     "Distribute inbound traffic across web servers",
     "Assign IP addresses",
     "Translate domain names"],
    "Forward proxies sit in front of clients. Reverse proxies sit in front of servers, providing load balancing, TLS termination and protection.");
  Q("Network Devices", 2,
    "What is a honeypot used for?",
    ["Luring attackers to study their techniques and detect intrusions",
     "Load balancing web traffic",
     "Encrypting databases",
     "Storing backups"],
    "Honeypots have no legitimate production use, so any interaction is suspicious. Enticement is acceptable; entrapment is not.");
  Q("Network Devices", 3,
    "Which statement about firewall rule bases is a best practice?",
    ["End with an implicit or explicit deny-all rule and place specific rules before general ones",
     "Start with an allow-all rule",
     "Never review rules once created",
     "Place the most general rules first"],
    "Rules are processed top-down. Deny by default and review rules regularly to remove unused or overly permissive entries.");

  // ---------- Segmentation and architecture ----------
  Q("Network Segmentation", 2,
    "What is the PRIMARY security benefit of VLANs?",
    ["Logical segmentation that limits broadcast domains and separates traffic between groups",
     "Encrypting all traffic",
     "Replacing firewalls entirely",
     "Faster internet speeds"],
    "VLANs separate traffic logically. Inter-VLAN traffic should pass through a firewall or ACLs for access control.");
  Q("Network Segmentation", 3,
    "Microsegmentation differs from traditional segmentation because it:",
    ["Applies fine-grained policies down to individual workloads, limiting east-west movement",
     "Uses only physical cabling",
     "Applies only to wireless networks",
     "Removes the need for identity"],
    "Microsegmentation (often software-defined) restricts traffic between workloads even within the same subnet, a key zero trust technique.");
  Q("Network Segmentation", 2,
    "Software-defined networking (SDN) separates which two functions?",
    ["The control plane (decisions) from the data plane (forwarding)",
     "Layer 1 from Layer 2",
     "Encryption from hashing",
     "IPv4 from IPv6"],
    "Centralized controllers program network devices. This enables agility but makes the controller a high-value target.");
  Q("Network Segmentation", 2,
    "Which network design isolates guest Wi-Fi users from corporate resources?",
    ["A separate SSID mapped to an isolated VLAN with internet-only access",
     "The same SSID with a different password",
     "Hiding the SSID",
     "MAC filtering only"],
    "Guest traffic should be segmented and firewalled from internal networks.");
  Q("Network Segmentation", 3,
    "An air-gapped network is BEST described as:",
    ["A network physically isolated from untrusted networks with no direct connections",
     "A network using only wireless",
     "A VLAN on a shared switch",
     "A network protected only by NAT"],
    "Air gaps provide strong isolation, though removable media and insiders can still bridge them (as Stuxnet showed).");

  // ---------- Wireless ----------
  Q("Wireless Security", 2,
    "Which Wi-Fi security protocol uses Simultaneous Authentication of Equals (SAE) to resist offline dictionary attacks?",
    ["WPA3", "WPA2-PSK", "WEP", "WPA (TKIP)"],
    "WPA3-Personal replaces the PSK four-way handshake vulnerability with SAE (Dragonfly), providing forward secrecy.");
  Q("Wireless Security", 2,
    "Why should WEP never be used?",
    ["Its RC4 implementation and short IVs allow keys to be cracked in minutes",
     "It is too slow",
     "It requires certificates",
     "It only works with 5 GHz"],
    "WEP's weak IV handling makes it trivially breakable.");
  Q("Wireless Security", 2,
    "WPA2-Enterprise authenticates each user through:",
    ["802.1X with an authentication server such as RADIUS",
     "A shared passphrase",
     "MAC filtering only",
     "SSID hiding"],
    "Enterprise mode provides per-user credentials and keys, supporting revocation and accountability.");
  Q("Wireless Security", 3,
    "Which EAP method requires both client and server certificates, offering strong mutual authentication?",
    ["EAP-TLS", "PEAP-MSCHAPv2", "LEAP", "EAP-MD5"],
    "EAP-TLS uses certificates on both sides. PEAP and EAP-TTLS use a server certificate with a tunneled inner password method. LEAP and EAP-MD5 are weak.");
  Q("Wireless Security", 2,
    "Which practice provides the LEAST real security for a wireless network?",
    ["Hiding the SSID", "Using WPA3-Enterprise", "Placing access points to limit signal leakage", "Running a wireless IDS"],
    "SSID hiding and MAC filtering are easily bypassed with packet capture tools.");
  Q("Wireless Security", 2,
    "Bluesnarfing is:",
    ["Unauthorized access to data on a Bluetooth device",
     "Sending unsolicited messages to Bluetooth devices",
     "Jamming Wi-Fi signals",
     "Cracking WPA2 passwords"],
    "Bluejacking sends unsolicited messages; bluesnarfing steals data; bluebugging takes control of the device.");
  Q("Wireless Security", 3,
    "A wireless deauthentication attack is commonly used to:",
    ["Force clients to disconnect and reconnect so the attacker can capture handshakes or lure them to an evil twin",
     "Speed up connections",
     "Encrypt traffic",
     "Assign IP addresses"],
    "Management frame protection (802.11w, mandatory in WPA3) defends against forged deauthentication frames.");
  Q("Wireless Security", 2,
    "Which wireless technology is commonly used for contactless payments within a few centimeters?",
    ["NFC (Near Field Communication)", "Zigbee", "LoRaWAN", "Wi-Fi 6"],
    "NFC's very short range reduces but does not eliminate eavesdropping and relay attack risk.");
  Q("Wireless Security", 3,
    "What is a key security concern with 5G and cellular networks for enterprises?",
    ["Devices may bypass corporate network controls by using cellular data directly",
     "Cellular networks cannot be encrypted",
     "5G only works indoors",
     "Cellular networks use WEP"],
    "Cellular connectivity creates paths outside corporate monitoring. Mobile device management and endpoint controls help.");

  // ---------- VPN and remote access ----------
  Q("VPN and Remote Access", 2,
    "In IPsec, which protocol provides confidentiality through encryption?",
    ["Encapsulating Security Payload (ESP)", "Authentication Header (AH)", "IKE", "L2TP"],
    "ESP provides encryption plus optional integrity and authentication. AH provides integrity and authentication only, without encryption.");
  Q("VPN and Remote Access", 2,
    "Which IPsec mode encrypts the entire original IP packet and adds a new IP header, commonly used for site-to-site VPNs?",
    ["Tunnel mode", "Transport mode", "Aggressive mode", "Main mode"],
    "Tunnel mode protects the whole packet. Transport mode protects only the payload and is used host-to-host.");
  Q("VPN and Remote Access", 2,
    "Which protocol negotiates security associations and keys for IPsec?",
    ["IKE (Internet Key Exchange)", "ESP", "GRE", "PPTP"],
    "IKE (v1 or v2) uses Diffie-Hellman to establish keys and security associations.");
  Q("VPN and Remote Access", 2,
    "Split tunneling in a VPN means:",
    ["Only corporate traffic goes through the VPN while other traffic goes directly to the internet",
     "All traffic is encrypted twice",
     "The VPN uses two servers",
     "Users need two passwords"],
    "Split tunneling saves bandwidth but bypasses corporate inspection of internet traffic. Full tunneling routes everything through the corporate network.");
  Q("VPN and Remote Access", 2,
    "Which VPN protocol is considered insecure and should not be used?",
    ["PPTP", "IPsec with IKEv2", "TLS-based VPN", "WireGuard"],
    "PPTP's MS-CHAPv2 authentication and encryption are broken.");
  Q("VPN and Remote Access", 3,
    "Zero trust network access (ZTNA) improves on traditional VPNs by:",
    ["Granting per-application access based on identity and device posture instead of broad network access",
     "Giving users full access to the internal network",
     "Removing authentication",
     "Using only static IP allow lists"],
    "VPNs often place users on the network, enabling lateral movement. ZTNA brokers access only to specific applications.");
  Q("VPN and Remote Access", 2,
    "Which AAA protocol encrypts the entire packet body and separates authentication, authorization and accounting?",
    ["TACACS+", "RADIUS", "LDAP", "Kerberos"],
    "TACACS+ (TCP 49) encrypts the full payload and is favored for device administration. RADIUS (UDP 1812/1813) encrypts only the password and combines authentication and authorization.");
  Q("VPN and Remote Access", 2,
    "A jump box (bastion host) is used to:",
    ["Provide a hardened, monitored single point for administrative access to secure zones",
     "Host public websites",
     "Store backups",
     "Run end-user email"],
    "Jump boxes centralize and log privileged access, reducing direct exposure of sensitive systems.");

  // ---------- NAC and endpoint ----------
  Q("Network Access Control", 2,
    "Network access control (NAC) can:",
    ["Check device health and identity before granting network access, and quarantine non-compliant devices",
     "Encrypt hard drives",
     "Replace antivirus",
     "Translate IP addresses"],
    "NAC enforces policy such as patch level and antivirus status, placing non-compliant devices in a remediation VLAN.");
  Q("Network Access Control", 2,
    "IEEE 802.1X provides:",
    ["Port-based network access control",
     "Wireless encryption only",
     "VLAN tagging",
     "Spanning tree loop prevention"],
    "802.1X uses a supplicant, authenticator (switch or AP) and authentication server (RADIUS) to control access per port.");
  Q("Network Access Control", 3,
    "Which NAC approach evaluates devices before they connect to the network?",
    ["Pre-admission", "Post-admission", "Agentless only", "Out-of-band only"],
    "Pre-admission checks happen before access is granted. Post-admission continuously monitors and enforces after connection.");

  // ---------- Transmission media and topologies ----------
  Q("Transmission Media", 2,
    "Which transmission medium is MOST resistant to electromagnetic interference and tapping?",
    ["Fiber optic cable", "Unshielded twisted pair", "Coaxial cable", "Wireless"],
    "Fiber carries light, so it is immune to EMI and harder to tap without detection.");
  Q("Transmission Media", 2,
    "Crosstalk is a problem MOST associated with:",
    ["Twisted pair copper cabling", "Fiber optic cabling", "Satellite links", "Infrared"],
    "Signals in adjacent wires interfere with each other. Twisting and shielding reduce crosstalk.");
  Q("Network Topologies", 2,
    "Which topology has a single point of failure at the central device?",
    ["Star", "Full mesh", "Ring with dual counter-rotating paths", "Partial mesh with redundant links"],
    "In a star topology, if the central switch fails, all connected devices lose connectivity.");
  Q("Network Topologies", 2,
    "Which topology offers the highest redundancy?",
    ["Full mesh", "Bus", "Star", "Tree"],
    "In a full mesh every node connects to every other node, providing many alternate paths at high cost.");
  Q("Network Topologies", 3,
    "CSMA/CD is used to:",
    ["Detect and recover from collisions on shared Ethernet media",
     "Avoid collisions on wireless networks",
     "Encrypt Ethernet frames",
     "Assign MAC addresses"],
    "CSMA/CD applied to legacy half-duplex Ethernet. Wi-Fi uses CSMA/CA (collision avoidance). Switched full-duplex networks eliminate collisions.");

  // ---------- Converged protocols and voice ----------
  Q("Converged Protocols", 2,
    "Which protocol carries SCSI storage commands over IP networks?",
    ["iSCSI", "FCoE", "MPLS", "VoIP"],
    "iSCSI enables storage over standard IP networks. FCoE carries Fibre Channel over Ethernet frames without IP.");
  Q("Converged Protocols", 3,
    "MPLS forwards traffic based on:",
    ["Short labels rather than long network addresses",
     "MAC addresses only",
     "DNS names",
     "Encryption keys"],
    "MPLS is a label-switching technology used by carriers for performance and traffic engineering. It does not encrypt traffic by itself.");
  Q("Converged Protocols", 2,
    "Which protocol is commonly used to set up and tear down VoIP calls?",
    ["SIP", "SMTP", "SNMP", "NTP"],
    "SIP handles call signaling. RTP carries the media; SRTP encrypts it.");
  Q("Converged Protocols", 2,
    "Which threat is specific to VoIP systems?",
    ["Toll fraud and call eavesdropping on unencrypted RTP streams",
     "SQL injection on spreadsheets",
     "Fire suppression failure",
     "Degaussing"],
    "VoIP risks include eavesdropping, spoofed caller ID (vishing), toll fraud and DoS. Use SRTP, TLS for SIP and separate voice VLANs.");
  Q("Converged Protocols", 3,
    "Industrial networks often use Modbus and DNP3. What is a key security concern with these protocols?",
    ["They were designed without built-in authentication or encryption",
     "They require too much bandwidth",
     "They only run over fiber",
     "They are always encrypted with AES"],
    "Legacy industrial protocols trust any sender. Segmentation, protocol-aware firewalls and newer secure variants help.");

  // ---------- Secure communications ----------
  Q("Secure Communications", 2,
    "Which TLS versions should be enabled on modern servers?",
    ["TLS 1.2 and TLS 1.3", "SSL 3.0 and TLS 1.0", "SSL 2.0 only", "TLS 1.0 and TLS 1.1"],
    "SSL and TLS 1.0/1.1 are deprecated due to vulnerabilities. TLS 1.3 removes weak ciphers and requires forward secrecy.");
  Q("Secure Communications", 3,
    "TLS inspection (SSL decryption) at a corporate proxy creates which trade-off?",
    ["Visibility into encrypted threats versus privacy concerns and the risk of the proxy becoming a target",
     "Faster connections with no downsides",
     "Elimination of certificates",
     "Stronger end-to-end encryption"],
    "Inspection breaks end-to-end encryption. Organizations should exclude sensitive categories such as banking and healthcare, secure the proxy's keys and inform users.");
  Q("Secure Communications", 2,
    "Which technology helps deliver web content faster and absorb DDoS traffic by distributing it across many edge servers?",
    ["Content delivery network (CDN)", "Network tap", "Proxy auto-config", "Loopback interface"],
    "CDNs cache content near users and provide scale to absorb attacks, often combined with WAF services.");
  Q("Secure Communications", 2,
    "Which protocol provides secure time synchronization, important for log correlation and Kerberos?",
    ["NTP with authentication (or NTS)", "TFTP", "Telnet", "ICMP"],
    "Accurate time is essential for logs, certificates and authentication. Network Time Security (NTS) adds cryptographic protection to NTP.");

  // ---------- Monitoring ----------
  Q("Network Monitoring", 2,
    "Which device copies network traffic to a monitoring tool without affecting the network if the tool fails?",
    ["Network tap", "Inline IPS", "Router", "Proxy server"],
    "Passive taps (and switch SPAN ports) provide copies of traffic for IDS and analysis. Taps are more reliable under load than SPAN.");
  Q("Network Monitoring", 2,
    "NetFlow (or IPFIX) data provides:",
    ["Metadata about traffic flows such as source, destination, ports and volume",
     "Full packet payloads",
     "Encryption keys",
     "User passwords"],
    "Flow data is lightweight and useful for detecting anomalies, exfiltration and scanning without storing full packets.");

  // ---------- Additional mixed ----------
  Q("Network Devices", 2,
    "At which OSI layer does a traditional switch operate?",
    ["Layer 2", "Layer 1", "Layer 4", "Layer 7"],
    "Switches forward frames based on MAC addresses. Layer 3 switches also route.");
  Q("Network Devices", 1,
    "Which device operates at Layer 1 and simply repeats signals to all ports?",
    ["Hub", "Router", "Switch", "Firewall"],
    "Hubs broadcast everything to all ports, making sniffing easy. They are obsolete in modern networks.");
  Q("Network Attacks", 3,
    "An attacker sends traffic designed to look legitimate to the firewall but uses fragmentation to hide a malicious payload from the IDS. Which defense helps MOST?",
    ["IDS/IPS normalization and reassembly of fragmented traffic before inspection",
     "Turning off the IDS",
     "Allowing all fragments",
     "Using a hub"],
    "Reassembling and normalizing traffic prevents evasion techniques that exploit differences in how devices handle fragments.");
  Q("Network Segmentation", 2,
    "Where should management interfaces of network devices be accessible from?",
    ["A dedicated, restricted management network (out-of-band management)",
     "The public internet",
     "Any user workstation",
     "The guest Wi-Fi"],
    "Isolating management planes reduces the risk of attackers reconfiguring infrastructure.");
  Q("Wireless Security", 2,
    "A wireless site survey is performed to:",
    ["Determine coverage, interference and optimal access point placement, and detect rogue APs",
     "Encrypt the wireless network",
     "Install VPN clients",
     "Assign IP addresses"],
    "Surveys ensure adequate coverage while limiting signal leakage outside the facility and identifying unauthorized devices.");
  Q("VPN and Remote Access", 2,
    "Which remote access protection BEST reduces the risk of stolen VPN credentials?",
    ["Multifactor authentication", "Longer session timeouts", "Split tunneling", "Disabling logging"],
    "MFA prevents attackers from using stolen passwords alone, which is a common initial access method.");
  Q("Secure Communications", 3,
    "HTTP Strict Transport Security (HSTS) protects users by:",
    ["Instructing browsers to only connect to the site over HTTPS, preventing SSL stripping",
     "Encrypting cookies with AES",
     "Blocking all JavaScript",
     "Providing DNS encryption"],
    "HSTS stops downgrade attacks where an attacker forces HTTP connections.");
  Q("Network Attacks", 2,
    "A rogue DHCP server on a network can:",
    ["Give clients a malicious default gateway or DNS server, enabling man-in-the-middle attacks",
     "Encrypt all traffic",
     "Prevent ARP from working",
     "Improve performance"],
    "DHCP snooping on switches allows DHCP offers only from trusted ports.");
  Q("IP Networking", 3,
    "Which IPv6 mechanism allows hosts to configure their own addresses without a DHCP server?",
    ["Stateless address autoconfiguration (SLAAC)", "ARP", "NAT64 only", "APIPA"],
    "SLAAC uses router advertisements. Rogue router advertisements are a related threat; RA Guard mitigates it.");
  Q("Network Devices", 3,
    "A unified threat management (UTM) appliance is BEST suited for:",
    ["Small to mid-sized organizations wanting firewall, IPS, antivirus and filtering in one device",
     "Replacing all endpoint security in large enterprises",
     "Core data center switching",
     "Storage area networking"],
    "UTMs simplify management but can become a performance bottleneck and single point of failure.");
  Q("Secure Communications", 2,
    "Which approach BEST secures communication between microservices inside a cluster?",
    ["Mutual TLS (mTLS), often managed by a service mesh",
     "Plain HTTP because traffic is internal",
     "Shared static passwords in code",
     "Disabling authentication for speed"],
    "mTLS authenticates both sides and encrypts traffic, supporting zero trust for east-west traffic.");
  Q("Network Monitoring", 3,
    "Encrypted traffic analysis (for example, using JA3/JA4 fingerprints) allows defenders to:",
    ["Identify suspicious clients or malware by TLS handshake characteristics without decrypting traffic",
     "Decrypt all TLS traffic",
     "Bypass certificate validation",
     "Generate encryption keys"],
    "TLS fingerprints and metadata can reveal malicious tools even when payloads remain encrypted.");
  Q("Network Attacks", 3,
    "BGP hijacking occurs when:",
    ["An autonomous system falsely announces IP prefixes, redirecting internet traffic",
     "A user's browser cookies are stolen",
     "An attacker cracks a Wi-Fi password",
     "A DHCP lease expires"],
    "RPKI (Resource Public Key Infrastructure) route origin validation helps prevent prefix hijacking.");
  Q("Converged Protocols", 2,
    "Why should voice traffic be placed on a separate VLAN from data traffic?",
    ["To improve quality of service and limit exposure of voice systems to data network attacks",
     "Because VoIP cannot use Ethernet",
     "To avoid encryption",
     "To remove the need for firewalls"],
    "Voice VLANs support QoS prioritization and segmentation.");
  Q("Network Segmentation", 3,
    "A network designer wants to ensure that a compromised point-of-sale terminal cannot reach HR systems. Which control is MOST effective?",
    ["Segment POS systems into their own zone with firewall rules allowing only required flows",
     "Give POS terminals static IP addresses",
     "Use the same VLAN for all devices",
     "Rely on antivirus only"],
    "Segmentation with least-privilege flow rules limits lateral movement and reduces PCI DSS scope.");
  Q("OSI Model", 3,
    "A protocol analyzer shows a frame with a 802.1Q tag. Which OSI layer is this tag part of?",
    ["Data Link (Layer 2)", "Network (Layer 3)", "Transport (Layer 4)", "Application (Layer 7)"],
    "802.1Q VLAN tags are inserted into the Ethernet frame header.");
  Q("Ports and Protocols", 2,
    "Which protocol and port combination is used by Kerberos?",
    ["TCP/UDP 88", "TCP 443", "UDP 69", "TCP 3389"],
    "Kerberos uses port 88. TFTP uses UDP 69.");
  Q("Ports and Protocols", 2,
    "Which secure email retrieval protocol uses port 993?",
    ["IMAPS", "POP3", "SMTP", "IMAP"],
    "IMAP over TLS uses 993; POP3S uses 995; SMTP submission with STARTTLS uses 587; SMTPS uses 465.");

  window.CISSP = window.CISSP || { questions: {}, flashcards: {} };
  CISSP.questions[4] = qs;

  // ---------- Flashcards ----------
  const cards = [];
  const F = (t, f, b) => cards.push({ id: "d4-c" + String(cards.length + 1).padStart(3, "0"), t, f, b });

  F("OSI Model", "OSI layers (bottom to top)", "1 Physical, 2 Data Link, 3 Network, 4 Transport, 5 Session, 6 Presentation, 7 Application. Mnemonic: Please Do Not Throw Sausage Pizza Away.");
  F("OSI Model", "Devices by layer", "Hub/repeater L1; switch/bridge L2; router L3; stateful firewall L3-4; proxy/WAF L7.");
  F("OSI Model", "Data units by layer", "Bits (L1), frames (L2), packets (L3), segments/datagrams (L4), data (L5-7).");
  F("OSI Model", "TCP/IP model", "Link, Internet, Transport, Application.");
  F("OSI Model", "TCP handshake", "SYN, SYN-ACK, ACK. Teardown uses FIN/ACK; RST aborts.");
  F("OSI Model", "TCP vs UDP", "TCP: connection-oriented, reliable, ordered. UDP: connectionless, fast, no delivery guarantee.");
  F("IP Networking", "RFC 1918 private ranges", "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.");
  F("IP Networking", "Special ranges", "127.0.0.0/8 loopback, 169.254.0.0/16 link-local (APIPA), 224.0.0.0/4 multicast.");
  F("IP Networking", "IPv6", "128-bit addresses; SLAAC; IPsec support built in; watch for unmonitored tunnels.");
  F("IP Networking", "ARP", "Resolves IP addresses to MAC addresses; vulnerable to poisoning.");
  F("Ports and Protocols", "Common ports (1)", "FTP 20/21, SSH/SFTP 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, TFTP 69, HTTP 80, Kerberos 88.");
  F("Ports and Protocols", "Common ports (2)", "POP3 110, NTP 123, NetBIOS 137-139, IMAP 143, SNMP 161/162, LDAP 389, HTTPS 443, SMB 445.");
  F("Ports and Protocols", "Common ports (3)", "SMTPS 465, SMTP submission 587, LDAPS 636, IMAPS 993, POP3S 995, MS SQL 1433, RADIUS 1812/1813, RDP 3389, SIP 5060/5061.");
  F("Ports and Protocols", "Insecure protocols and replacements", "Telnet to SSH, FTP to SFTP/FTPS, HTTP to HTTPS, SNMPv1/2 to SNMPv3, LDAP to LDAPS.");
  F("DNS Security", "DNSSEC", "Signs DNS records for integrity and origin authentication; no confidentiality.");
  F("DNS Security", "DoH / DoT", "DNS over HTTPS / TLS: encrypts DNS queries.");
  F("DNS Security", "DNS attacks", "Cache poisoning, tunneling, zone transfer abuse, domain hijacking, amplification.");
  F("Email Security", "SPF / DKIM / DMARC", "SPF: authorized senders. DKIM: signature. DMARC: policy (none, quarantine, reject) and reporting.");
  F("Email Security", "S/MIME vs PGP", "S/MIME uses X.509 certificates; PGP uses a web of trust.");
  F("Network Attacks", "ARP poisoning", "Forged ARP replies enable a LAN MITM. Defense: dynamic ARP inspection.");
  F("Network Attacks", "SYN flood", "Half-open connections exhaust resources. Defense: SYN cookies, rate limiting.");
  F("Network Attacks", "Smurf / Fraggle", "Spoofed ICMP (Smurf) or UDP (Fraggle) to broadcast addresses amplifies traffic toward the victim.");
  F("Network Attacks", "Teardrop / ping of death", "Malformed or oversized fragments crash reassembly.");
  F("Network Attacks", "MAC flooding", "Overflows the switch CAM table. Defense: port security.");
  F("Network Attacks", "VLAN hopping", "Switch spoofing or double tagging. Defense: disable DTP, don't use the native VLAN.");
  F("Network Attacks", "Evil twin", "Rogue AP impersonating a legitimate SSID.");
  F("Network Attacks", "BGP hijacking", "False route announcements. Defense: RPKI.");
  F("Network Devices", "Firewall types", "Packet filter, stateful inspection, circuit-level (SOCKS), application proxy, NGFW, WAF.");
  F("Network Devices", "IDS vs IPS", "IDS: passive, alerts. IPS: inline, blocks.");
  F("Network Devices", "Signature vs anomaly detection", "Signature: known patterns, low false positives. Anomaly: deviations from baseline, catches new attacks, more false positives.");
  F("Network Devices", "Forward vs reverse proxy", "Forward: in front of clients (outbound filtering). Reverse: in front of servers (load balancing, TLS termination).");
  F("Network Devices", "DMZ / screened subnet", "Network zone for public-facing services between external and internal firewalls.");
  F("Network Devices", "Honeypot / honeynet", "Decoy systems that attract and study attackers. Enticement is OK; entrapment is not.");
  F("Network Segmentation", "Microsegmentation", "Workload-level policies that restrict east-west traffic.");
  F("Network Segmentation", "SDN", "Separates the control plane from the data plane; centralized programmable control.");
  F("Wireless Security", "Wi-Fi security evolution", "WEP (broken) to WPA/TKIP (deprecated) to WPA2/AES-CCMP to WPA3/SAE.");
  F("Wireless Security", "WPA3", "SAE replaces PSK, forward secrecy, mandatory management frame protection; Enterprise 192-bit mode.");
  F("Wireless Security", "EAP methods", "EAP-TLS (mutual certificates, strongest), PEAP and EAP-TTLS (server certificate plus tunnel), LEAP and EAP-MD5 (weak).");
  F("Wireless Security", "Bluetooth attacks", "Bluejacking (messages), bluesnarfing (data theft), bluebugging (control).");
  F("VPN and Remote Access", "IPsec AH vs ESP", "AH: integrity and authentication, no encryption. ESP: encryption plus optional integrity.");
  F("VPN and Remote Access", "IPsec tunnel vs transport", "Tunnel: whole packet encrypted, new header (site-to-site). Transport: payload only (host-to-host).");
  F("VPN and Remote Access", "IKE", "Negotiates IPsec security associations and keys using Diffie-Hellman.");
  F("VPN and Remote Access", "Split vs full tunnel", "Split: only corporate traffic in the VPN. Full: all traffic through corporate.");
  F("VPN and Remote Access", "RADIUS vs TACACS+", "RADIUS: UDP, encrypts password only, combines AuthN and AuthZ. TACACS+: TCP 49, encrypts the entire payload, separates AAA.");
  F("VPN and Remote Access", "ZTNA", "Per-application access based on identity and device posture.");
  F("Network Access Control", "802.1X roles", "Supplicant (client), authenticator (switch or AP), authentication server (RADIUS).");
  F("Network Access Control", "NAC", "Checks device posture and identity; quarantines non-compliant devices.");
  F("Transmission Media", "Fiber vs copper", "Fiber: immune to EMI, hard to tap, long distance. Copper: cheaper, susceptible to EMI and crosstalk.");
  F("Network Topologies", "Topologies", "Bus, star (central point of failure), ring, mesh (highest redundancy), hybrid.");
  F("Network Topologies", "CSMA/CD vs CSMA/CA", "CD: Ethernet collision detection. CA: Wi-Fi collision avoidance.");
  F("Converged Protocols", "iSCSI vs FCoE", "iSCSI: SCSI over IP. FCoE: Fibre Channel over Ethernet (no IP).");
  F("Converged Protocols", "VoIP protocols", "SIP (signaling), RTP (media), SRTP (encrypted media).");
  F("Converged Protocols", "MPLS", "Label switching for carrier networks; no inherent encryption.");
  F("Secure Communications", "TLS versions", "Use TLS 1.2 and 1.3; disable SSL and TLS 1.0/1.1.");
  F("Secure Communications", "HSTS", "Forces browsers to use HTTPS, preventing SSL stripping.");
  F("Secure Communications", "mTLS", "Both client and server authenticate with certificates.");
  F("Network Monitoring", "Tap vs SPAN", "Tap: hardware copy, reliable. SPAN: switch port mirroring, may drop packets under load.");
  F("Network Monitoring", "NetFlow / IPFIX", "Flow metadata (who talked to whom, how much) for anomaly detection.");

  CISSP.flashcards[4] = cards;
})();
