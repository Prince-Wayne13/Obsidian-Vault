# Software Projects
Why this method: [[Method]]

## The method

Plan the whole system thinly up front.
Define the contract before building.
Prototype the UI before building the backend.
Build in slices: backend first, UI against a stub, then swap the stub for the real backend. Testing happens inside every slice, not as a separate phase.

## Phases and exit checks

| Phase | Exit check |
|---|---|
| Requirements | The SRS done check is all ticked. |
| Design | Every requirement R1..Rn appears in an Architecture, Data model, API contract, or Screen spec note, and every design piece satisfies at least one requirement. |
| Build | All slices are done. |
| Release | The project is live and the hub says so. |

## Project folder structure

Create a phase's folder only when I enter that phase.

```text
Project name/
  Project name.md (the hub)
  Requirements/SRS.md
  Design/Architecture.md, Data model.md, API contract.md, Screens/
  Build/Slices/
```

The hub and `Requirements` exist at the start. The other folders and notes appear later, when their phase begins.

## Which template for what

| Template | When to use it | Folder |
|---|---|---|
| Software project hub | At project start; control information and current state | Project root |
| SRS | To define users, requirements, journeys, and scope | Requirements/ |
| Architecture | To describe system parts and communication | Design/ |
| Data model | To define entities, relationships, and rules | Design/ |
| API contract | Before backend or UI work; shared agreement between them | Design/ |
| Screen spec | Before building a screen; define data, actions, and states | Design/Screens/ |
| Slice | To plan and track one end-to-end journey | Build/Slices/ |

## How to use a template

Create a new note in the right folder. Press `Ctrl+P`, type `insert template`, and pick the template.

## Rules

- The hub holds control information only, never long documents.
- Every choice goes in the Decisions log.
- Contract changes happen in the contract first.
- If unsure, put it in `00 Inbox`.

## Worked example — Fuel crisis app

This is an example, not a decision.

### Hub status

```text
phase:: Requirements
next:: Write the manager and driver journeys, then identify the first slice.
```

### Sample requirements

- **R1:** A station manager can post fuel status for their station.
- **R2:** A driver can see which stations currently have fuel.

### Journey 1: station manager posts status

**Who:** Station manager

**Steps and backend needs:**

1. Manager signs in. The backend authenticates the manager and checks station access.
2. Manager selects their station. The backend returns stations they manage.
3. Manager chooses fuel type and availability. The backend validates the allowed values.
4. Manager submits the status. The backend saves it with station, fuel type, timestamp, and author.
5. Manager sees confirmation. The backend returns the saved status.

Requirements covered: R1

### API contract example

`POST /stations/{id}/status`

- Purpose: Save the current fuel status for a station.
- Satisfies: R1
- Auth required: Yes; manager must manage the station.
- Request: `{ "fuelType": "petrol", "available": true }`
- Response: saved status with station ID and timestamp.
- Stub example:

```json
{
  "stationId": "station-12",
  "fuelType": "petrol",
  "available": true,
  "updatedAt": "2026-11-25T10:00:00Z"
}
```

### Screen spec example — Driver: station list

- Shows: station name, distance, fuel types, availability, and last updated time.
- Calls: `GET /stations?fuel=petrol&available=true`
- States: loading, no stations found, server error, and no permission where relevant.
- Backend impact check:
  - [x] Every data item maps to a field in the data model.
  - [x] Every action maps to an endpoint in the API contract.
  - [x] Anything new was added to the contract before building.

### Slice 1

Station manager posts petrol availability, and a driver sees that station in the filtered station list. Build and test the posting backend first, build the UI against fake contract data, then swap in the real backend and test the journey end to end.

## Hardware

The hardware method will be added later.
