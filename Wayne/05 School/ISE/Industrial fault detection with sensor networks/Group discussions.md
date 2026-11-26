### 16september
### **Zilpa**
FR-11 → Remote monitoring & Connectivity

- Wi-Fi will be used to get server information from the simulation to the computers (used when not in range).
- Bluetooth → for near range connectivity.
- It will automatically switch from WiFi to Bluetooth or Bluetooth to WiFi depending on the area.

Inactive - grey
Active - Blue

FR-12
Local storage (Hard drive - 500gb)will collect, evaluate, display

FR-13 

- Pop-up for errors

Our system will have two detectors

First → sanity checks
2nd - comparing model

FR-20 fix FR-12
### **Steve**
DISPLAY/DASHBOARD 
- design the use case for each user dashboard 
- design the main dashboard for each user

REMOTE MONITORING AND CONNECTIVITY 
. Changing colors to the most active Bluetooth and wifi icons .. 
 

STORAGE 
. FR 12 .. To be revised... Be specific on the point ( connection between system components interrupted)
. Local storage should be a hard drive..... This should be a direct back up storage for the cloud storage 
- cloud storage and local storage storing data at the same time compensates for the 1% data loss
- 
FAULT HANDLING 
. Update fr 13
. Notifications for faults must pop up on screen 
. Question???? ...how should the system behave/ resolve more than one notification at the same time 
. fR 14 ....needs to be fixed...interms of the system checking for the invalid readings 
. ( Show this in the design step)

......Revise user roles 

MAINTENANCE 
.FR 14...
.. include a button for maintenance mode for each machine... ON  & OFF ..also have a system wide maintance button...you can specify what the system will do on maintainace wichi is a temoral shutdown i guess


STORAGE AND RECOVERY 
.FR20 Fixes fr 12

ADMINISTRATION AND TRACEABILITY 
. include an FR that has a sync function for the storage 

.FR 26 - fixed 
...ie each user will configure their own expire session time.....


INDIVIDUAL TASKS 
. study Frameworks
. Backend
. Should the dashboard have html, CSS or any other

### 26 Octomber

- [ ] Choose colour palette
##### Over view
- All equipments should be on the db to see -
	- card -live readings , status -> mark 
- a person shpuld choose motor 1 --> detail : readings , staus, history of that motor ... fault
- Sh0w the name...top right -> Name  side bar --> show full name and role
- a mark if on maintaince mode


topbar -search bar ... name...notifiation icon

side bar---> 

#### Machine detail

a registry of all machines - filter per machine ---when you clic the machine you open the same page that opens when you click that machies card
that pae now:
- Be able to generate report  & graph -> daily graph, aweek , month , year
- live readign sand status
- Show History
- toggle maintance
- toggle reolvedfault 



a notification bell modal - sowing un resolved but acknowledgsed faults ....when you click it also goes to the actual machine  detail page...when resolved the badge on the not bell decrements...when a faul comes a pop up sticks on the engineers and operators screen until acknowldged...if an operator acknowleded doesnt mean the engineer as...he also has to acknowldged


no an admin cant reset a passwrd .....can see the overview but no pop ups
full name is perfect