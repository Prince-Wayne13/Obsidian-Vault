Extreme Programming
- **Per story** (not once per metaphor, not once per release) — every story selected in Release Planning gets its own test-first treatment
- This happens **inside Iteration**, repeated for each story
- It runs **alongside**, not before/separate from, Pair Programming (someone else watching as you write both the tests and the code) and Continuous Integration (as soon as the story's code+tests pass, it's integrated into the whole system immediately)
- Refactoring then continuously cleans up that code afterward — without changing the behavior the tests are locking in

	==Iteration stage==
		Iteration (the actual building)For each selected story, INSIDE this phase: (1) Test-Driven Development — tests are written FIRST, before any production code. (2) Code is written to pass those tests, done via Pair Programming (one codes, one continuously reviews — XP's substitute for formal code review). (3) Continuous Integration — as soon as a piece is done it's integrated into the whole system and tested immediately, many times a day, not saved for later. (4) Refactoring happens continuously and in parallel throughout — improving code structure/quality without changing behavior.