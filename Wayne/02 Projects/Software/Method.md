# Software method

## 1. The problems this method solves

This method addresses two problems that appeared in past projects:

- A major backend flow was forgotten, so it had to be added later.
- UI features were designed first and their backend impact was discovered too late.

I also test a lot and use stubs a lot. This method makes both habits part of the workflow instead of treating them as afterthoughts.

## 2. Why not pure waterfall or pure agile

Pure waterfall plans everything in detail before building, but it cannot absorb change easily.

Pure agile makes change easy, but it can let me forget large pieces of the system.

This method plans the whole system thinly up front, then builds it in complete slices. I get the coverage of planning with the flexibility of iterative building.

## 3. How each part answers a problem

| Part | Problem it prevents | Where it lives |
|---|---|---|
| Journeys in the SRS | Forgetting a major backend flow | `SRS` template |
| API contract first | Backend and UI disagreeing about what exists | `API contract` template |
| UI prototype before backend | Building the wrong interaction or discovering design problems too late | `Screen spec` template and UI mockup |
| Screen backend-impact check | UI data or actions having no backend support | `Screen spec` template |
| Slices | Building disconnected parts that do not produce a working result | `Slice` template |
| Stubs | Waiting for the real backend before testing the UI | `API contract` template and slice workflow |

## 4. A slice, explained

A slice is one user journey from beginning to end.

1. Define the journey and requirements.
2. Define or update the API contract.
3. Build the backend first against that contract, with tests.
4. Build the UI against a stub: the contract filled with fake data.
5. Review the UI and test the journey.
6. Swap the stub for the real backend.
7. Check the journey end to end.

My stubbing habit is the method itself. The stub lets the UI move forward while the backend is being built, while the contract keeps both sides aligned.

## 5. When to bend the rules

A small bug fix or tiny feature does not need the full process. Write it as a task in the project hub.

Anything that adds a new endpoint or changes the data model goes back through the API contract first.

## 6. Change rule

If I discover a missing requirement during a build:

1. Add it to the SRS with a new ID.
2. Update the API contract.
3. Log the change in the hub's Decisions log.
4. Build it.

Never build the change first and document it afterward.
