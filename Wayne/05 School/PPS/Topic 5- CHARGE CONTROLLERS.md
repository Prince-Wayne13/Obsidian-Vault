What is a charge controller
-- 
Why have a charge controller
-- 

1. Pv votlage and current vary withn irradiance
2. battery voltage changes with SOC and temperature
3. a BAttery should not be exposed to uncontrolled charging current
4. Excessive cgarging can accelerate batter degradation
5. deep Dischrge shortens battery life
6. 

Effects of not using a charge controller and benefits of using
-- 
**NOT USING**
- Battery overcharge and over discharge
- Gassing
- Risk of reverse current in low solar resource periods like at night
- Risk of overheating
- accelerated battery degradation
- Unstable load operation
**USING**
- Regulates charging voltage and current to recommended ranges
- Maintains battery in safe operating limits or behaviour
- imporve battery life
- Provide PV, battery and Load control logic


CHARGE CONTROLLER INTERFACES
--
**PV SIDE MEASUREMENTS**
- Voltage
- Current
- Power
**BATTERY SIDE**
- Charging Voltage
- Charging current- Charge rate
- Battery Temperature
- State - DOD/SOC
**LOAD SIDE**
- Battery voltage
	- disconnect when battery falls to low voltges avoid deep cycling
- Load current 
	- monitor load power consumption 
	- Protect against high current draws  leading to low voltage - disconnect

CHARGING STAGES
--
**1. BULK**
- Controller charges with its full power 
	- PWM means Ipv * Vb 
		-->Full duty
	- MPPT means Vpv * Ipv * n 
		-> the values of voltage and current are discussed below [[Topic 5- CHARGE CONTROLLERS#MPPT]]
		-->Tracks max power
- HIGH CHARGING CURRENT
**2. ABSORPTION**
- Voltage is held at specified upper level.
- Charging current decreases
- PWM ->Reduces duty cycle
**3. FLOAT**
- Maintain charge at a reduced voltage level
- Just enough to keep charge appr for bater chemistry
**4. EQUALIZATION**
- Controlled high voltage charging.
		-> Higher voltage than in absorption and float. 
		->Some batteries have cells in series that with time have unequal voltges ue to age, temperature etc
		->the Voltage equalizes these cells

Batter state variables
--
1. Batter voltage- load disconnect decisions and voltage regualated charging
2. Charge current- Inidicates charging intensity and chargins sate transition
3. Battery temp - Affects battery voltage
4. SOC estimate -Charge/ discharge decisions
5. Time in Charging state - for timing stages of charging especially low current stages
6. PV availability - check is charging is possible 

PWM vs MPPT ARCHITECTURE
--
##### PWM
Duty cycle = Ton/Ts
- acts  as a fast switch that modulates electrical pulses to regulate energy sent to the battery
- Only changes voltage but not current
- It usually lowers panels voltage to match match battery charging voltage
- When the battery voltage approaches regulation voltage, the controller reduces  charging current (absorption), then further reduces current and voltage to enough to just keep the battery not overcharge 
- Leads to power loss if PV voltage >> Battery Voltage
##### MPPT
- Acts as a DC-DC converter that combines power conversion and control so that Batteries are charged near Pmp (optimum operating panel )
- Tracks panels Pmp 
- Uses DC-DC conversion
	- 1. It caps Vmp to Vbattery
	- 2. It regulates Charging current to level that produces Pmp
	- Conversion percent is usually around 93-97%


| Advantages                                                                                       | Disadvantages                                                 |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| High energy harvest                                                                              | Higher cost                                                   |
| Allows flexibilty of Battery voltage and PV operatirng voltage without worrying about power loss | conversional losses                                           |
|                                                                                                  | control perfomance can be affected by poor weather condiiotns |
|                                                                                                  |                                                               |
|                                                                                                  |                                                               |
MPPT solves two problems
	-> Track max useful power
	-> Keep battery within recommended charging state

### Hysteresis
1. Voltage Reconnect thresholds
2. Voltage Disconnect Threshold
3. the difference in the two thresholds prevents the load from rapidly turning off and on
4. Low voltage disconnect
		- Disconnects load when battery drops below low threshold
		- Prevents over discharging battery
		- Preserves energy for high priority loads
		
### Battery Temperature Compesation
	Vt = Vref + B(T-Tref)