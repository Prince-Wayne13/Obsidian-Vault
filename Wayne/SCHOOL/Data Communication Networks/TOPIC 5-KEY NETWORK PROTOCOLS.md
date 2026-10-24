### 1. Address Resolution Protocol (ARP)

- maps IP addresses to Host Mac address
- Allows devices in LAN to locate and Xchange data
- Bridges network layer to data link layer 
- Used for *Troubleshooting connectivity failures*
- insights on **ARP spoofing** - Man in the middle
		```a person can trick the network by giving his PCs mac address 
		 the ipaddress of a persons PC then route to the persons PC ..acting as the Host to the router and acting like a router to the Host```

### 2. Spanning Tree Protocol (STP)

- In most large networks - one design feature utilised is path redundancy
- These multiple paths result in looping
	**LOOPING**
		- multiple active paths connecting two or more devices on a network
		Create a closed loop
		Data ends up circulating  indefinitely -usually in switches that send data to every device in its network
		- Can eventually lead to CPU overload, MAC address table instability
		
- STP identifies the best paths for data to travel and disables the other redundant links - *preventing looping*
- When *failure occurs* -Reconfigures the best path and uses any present alternative link.
- It operates at layer 2 (**DATA LINK**) 
	-> Switches automatically broadcasts frames to every active port
	-> higher layers are optimized for multiple routes

### 3. Hypertext Transfer Protocol (HTTP)

- Governs how web pages are requested and served over the internet
- Facilitate Xchange of data btwn Browser and Server
- HTTP/2 - Fast page loading : Request multiplexing
- HTTP/3 - uses Quick UDP Internet Connections (QUIC) :perfomance , security and latency

	<u>SYNTAX</u>
	**request**
		method -> Request URL -> HTTP Version ->Header Name: Header Value .... ->Header Name: Header Value -> Optional Body

	**Response**
		HTTP version -> Status code -> Reason Phrase -> Header Value

### 4. Mail Protocols

1. Simple Mail Transfer Protocol (SMTP) -> Sending emails from sender server to recipient server
2. Internet Mail Access Protocol (IMAP)
	-  Used by email clients (Gmail, Outlook, etc) to retrieve emails from centrl mail server
	- Stores emails on mail server
	- Allows synchronization of multiple mail clients or devices.
3. Post Office Protocol(POP)
	- Downloads emails from server to device
	- Once downloaded email is deleted
	- No cross device syncing -mail change in one device doesnt reflect on another device.

**TLS** -> Transport Layer Security  Encrypts email communication during transmission 

### 5. File Transfer Protocol
- Used for file transfers btwn client and server on a *computer network*
- Established 2 connection channels:
	-Command channel -> instructions
	-Data channel -> actual data
- No encryption
- could use FTPS, SFTP, HTTPS instead
### 6. Telnet

- It allows users to remotely access and control another computer using a CLI
- Transmits data in plain text, making it vulnerable 


### 7. Secure Shell (SSH)
- Secure access and manageent of remote computers/ servers over an unsecured network
- Has encryption
- Main functions : Remote login, command execution and file transfers
### 8. Domain Name System (DNS)

- Translates human-readable domain names into machine readable Ip addresses
- Stores domain name data and IP addresses 
- Manages that information
	 User types in Domain --*request sent to resolve DN to IP add* -> Domain Name System resolver 
	 DNS resolver (*asks other DNS servers*) --> Finds/ not IP address corr to the DN
	 use ipconfig/all 

### 9. Dynamic Host Configuration Protocol
- Automatic IP address assigning to devices connected to a network
- Assigns IP addresses for a specific period - Lease
	- timed stage 1 checks if device  asks for a renewal  at 50 % of lease time - will get and reset its lease time
	- then checks if answered at 87.5 % - if not it checks other DHCP servers on te network for renewal of lease time ,if successful LT resets..if not
	- if 100% with no response from DHCP server the IP address is returned into the queue
- Prevents IP exhaustion
- Automated IP management - less manual routing, Managing (Adding and deleting devices)
- Flexibilty and efficiency in large dynamic networks.

### 10. Simple Network Management Protocol (SNMP)

- Application Layer
- Monitors and manages network devices
- Tasks : Seeing device data , remotely configure and control devices, identify problems

	**Manager** - Central system for network management across network devices - *GET* statistics from Agents and *SET* settings on the Agent e.g disable port 4
	**Agent** - software on network devices that collects data and sends them over to the manager
	 - stores the data /variables in a local database - Management Info Base (MIB)
	 - Send alert messae to manager (*TRAP*)
### 11. Internet Protocol Security
- Set ofprotocols for setting up secure connections over the internet
- Encrypts data
- Authenticate data source
		<u>PROTOCOLS</u>
- Authentication Header Protocol - adds header to data - sender info and protects data from un auth access
- Encapsulatins security Protocol - encrypts payload or packet
- Internet Key Exchange - Establishes a conection between two devices by setting up encryption keys and algorithms to TX and RX data 
- VPN - creates safe tunnels over the internet to transmit data
### 12. Radius and Diameter

- Authentication, Authorization and Acounting in *computer networks*
- AAA provides a framework for managing  a Network *Access* Server
- key word is access
- so verify identity of who wants access
- determine what the user wants and authorise the service
- Track resource usage
**Radius**->not flexible to scaling, client to server. encrypts password only, UDP
**Diameter** -> flexible to scale, peer-peer , uses TLS to secure entire comm channel, TCP