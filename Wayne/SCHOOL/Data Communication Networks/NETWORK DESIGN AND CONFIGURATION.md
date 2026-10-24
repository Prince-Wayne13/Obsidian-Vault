Core Principles of Network Design
#### 1. Hierarchical Design Model
- 3 layers
	->Core Layer 
	 HIgh speed ,availability within core area sof a network.
		No filetering whatsoever 
	->Distribution Layer
		middle man btwn core and access layer
		Trraffic control, policy enforcing and connection control -routing
	->Access Layer
		connect end users to network 
		offers user side security

#### 2. Scalability- Minimize disruption during growth
**Think of  system blocks, IP Addresses, Features, Equipment **
- Modular expansion ->implementing standardized building blocks that can be replicated as the system grows
- Future proofing ...head room is given for additional features
- Addressing schemes...break enough to have extra usable ip addresses
- Upgrade paths - ensure equip supports upgrades


#### 3. Redundancy and High Availability
- Redundant components -  protect against internal failures eg. dual power supplies to ensure that if one fails te other is still operating smoothly , multiple fans, etc
- Redundant paths - Prevent one path failures 
- failover- automatic switch for when compnents fail
- Link aggregation -Combine multiple links  into a  single virtual  interface that sends data simultaneously throuhg all the links.


#### 4. Security by Design
- DEfence in depth-  Adding muliple layers of securty throughout the network
- least Privilege- giving users minimal  network access for specific roles
- Segmentation - dividing netwrok into defence block with diff trust levels.
- Visibility and monitoring- network traffic and activity should be clearly monitored and seen, log 
- Secure management 
	-> Using encryption protocols 
	->Out of band management - managig a network using a separate communication channel so as to isolate the admin from the man network
#### 5. Quality of Service
**Crucial when network is carrying time-sensitive data and less-time critical data **

It involves:
->Traffic classification
	- identify and mark data with corresponding params
	
->Traffic prioritization
	-queuing and scheduling data. HIGH priority first
->Policy enforcing
	-policies that govern classificaton and scheduling
->Congestion management
	-prevent overload
	-reshape traffic 
	-Use policies 


#### 6. Standardization and Documentation
 
*Standard* -Already Set
	establish consistent : Naming, configuration and procedures acrross the network
*Documentation*- Keep track
	Keep record of: Design decisions, configuration and procedures
**But why?**
	 - Reduce troubleshooting time -*system is predictable* 
	 - Easy transfer of network knowledge
	 - Speed in updating or upgrading 
	 - Supports in auditing
	 - *System recovery* ->Helps incase of system or data loss

