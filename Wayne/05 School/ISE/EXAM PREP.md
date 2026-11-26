
## **2. Introduction to Software Development**

- **Definition of Software Development:**
    
    - A systematic process that transforms user needs into software products.
        
    - The process of creating computer programs designed to perform specific tasks to solve problems and make lives easier.
        
- **Software Engineering vs. General Development:**
    
    - _Systematic approach_ to the development, operation, maintenance, and retirement of software.
        
    - Core fundamental question: _"How do we develop industrial-strength software?"_
        
- **Comparison: Student Software vs. Industrial-Strength Software:**
    
    - _Student Software:_ Built primarily for demonstration; bugs/UI/documentation/reliability are tolerable; minimal investment.
        
    - _Industrial-Strength Software:_ Solves critical client problems; used by organizations to operate business functions.
        
        - _Impact of Malfunctioning:_ Financial/business loss, user inconvenience, property and life loss.
            
        - _Key Differences Exam Focus Table:_
            
            - **Bugs:** Tolerable (Student) vs. Not tolerated (Industrial)
                
            - **User Interface (UI):** Not important vs. Very important
                
            - **Documentation:** Not needed vs. Needed for user, organization, and project
                
            - **Reliability & Robustness:** Not important vs. Very important
                
            - **Investment:** None vs. Heavy
                
            - **Portability:** Not necessary vs. Key
                

## **3. Software Quality Attributes (ISO Standard)**

_Know these definitions word-for-word for exam definitions:_

- **Functionality:** Capability to provide functions which meet stated and implied needs for software use.
    
- **Reliability:** Capability to provide failure-free service.
    
- **Usability:** Capability to be understood, learned, and used.
    
- **Efficiency:** Capability to provide appropriate performance relative to the amount of resources used.
    
- **Maintainability:** Capability to be modified for purposes of making corrections, improvements, or adaptation.
    
- **Portability:** Capability to be adapted for different specified environments without applying actions/means other than those provided for the product purpose.
    

## **4. Course Indicative Content Overview (Roadmap for the Semester)**

- **a) Software Life Cycle**
    
- **b) Software Development Process Models**
    
- **c) Requirements**
    
- **d) Software Project Planning**
    
- **e) Design**
    
- **f) Implementation (Coding)**
    
- **g) Testing**
    

### **Exam Tip for Lesson 1:**

Be prepared to write short notes comparing **student software vs. industrial software**, list out the **ISO software quality attributes** and explain the core components of the course assessment and group project structure.


##  Software Development Process Models
### 1. Introduction & Fundamentals of SDLC

- **Definition of SDLC & SDP**
    
    - Software Development Life Cycle (SDLC) vs. Software Development Process (SDP)
        
    - Definition of a software life cycle model
        
- **Why Use a Development Process?**
    
    - Developing software in a systematic and disciplined manner
        
    - Precision and understanding among team members (_when to do what_)
        
    - Importance of documentation at every point
        
    - Identifying entry and exit criteria for each phase
        
- **Structure of Process Models**
    
    - Structured frameworks/abstract representations defining the order of phases, tasks, and criteria
        
    - Universal presence of basic activities across models (ordered differently)
        

### 2. The Waterfall Model

- **Overview & Origins**
    
    - Proposed by Winston W. Royce
        
    - Simplest model, linear sequential order
        
- **Sequential Phases (in order)**
    
    1. Feasibility Analysis
        
    2. Requirements Analysis and Project Planning
        
    3. System Design
        
    4. Coding / Development / Implementation
        
    5. Integration and Testing
        
    6. Installation / Deployment
        
    7. Operation and Maintenance
        
- **Pros, Cons & Applicability**
    
    - _Advantages:_ Simple to implement, systematic/sequential, proper documentation
        
    - _Disadvantages:_ Requirements not all received at once, inflexible to changes, cannot move backward
        
    - _Applicability:_ Well-known requirements with few expected changes; parts of larger systems
        

### 3. The Prototyping Model

- **Overview & Purpose**
    
    - Extension of the waterfall model
        
    - Building a working, crude "toy" implementation with limited capabilities, low reliability, or inefficient performance before actual development
        
- **Why Build a Prototype?**
    
    - Crucial for Graphical User Interface (GUI) development (illustrating inputs, reports, interactive dialogs)
        
    - Useful when technical solutions are unclear
        
    - Acknowledges that it is impossible to "get it right" the first time
        
- **Four Core Steps**
    
    1. Identify basic information requirements
        
    2. Develop initial prototype
        
    3. Use prototype to refine requirements
        
    4. Revise and enhance
        
- **Pros & Cons**
    
    - _Advantages:_ Fast functioning system in user's hands early, early visibility, periodic feedback preventing last-minute shocks
        
    - _Disadvantages:_ Not suitable for large applications, risk of leaving systems unfinished or implemented prematurely
        

### 4. Rational Unified Process (RUP)

- **Overview**
    
    - Iterative process model designed by Rational (IBM)
        
    - Tailored for object-oriented development using UML
        
- **Structure: Cycles & Phases**
    
    - Divided into cycles (each delivering a fully working system / additional capability)
        
    - Each cycle broken into four consecutive phases:
        
        1. **Inception Phase** (Milestone: _Lifecycle Objectives_) – Establish goals and scope
            
        2. **Elaboration Phase** (Milestone: _Lifecycle Architecture_) – Design architecture based on detailed requirements
            
        3. **Construction Phase** (Milestone: _Initial Operational Capability_) – Build and test software, user manuals
            
        4. **Transition Phase** (Milestone: _Product Release_) – Move software to client environment
            
- **Core Process Workflows (Subprocesses)**
    
    - Requirements, Analysis & Design, Implementation, Test, Deployment, Project Management, Configuration Management
        
    - _Exam focus:_ Know how activity levels fluctuate across phases (e.g., Requirements and Analysis are high in Inception/Elaboration and low/nil in Transition; Implementation and Test peak in Construction).
        

### 5. Boehm's Spiral Model

- **Overview & Origins**
    
    - Defined by Barry Boehm (1985)
        
    - Combines best features of waterfall and prototyping + introduces **risk assessment**
        
- **Structure of the Spiral (Four Quadrants per Cycle)**
    
    1. _Quadrant 1:_ Determine objectives, alternatives, constraints
        
    2. _Quadrant 2:_ Evaluate alternatives, identify and resolve risks
        
    3. _Quadrant 3:_ Develop and verify next level of software (Prototype/Implementation)
        
    4. _Quadrant 4:_ Review results with customer and plan next iteration
        
- **Pros & Cons**
    
    - _Advantages:_ Excellent for high-risk, large-scale systems; continuous risk handling via evolutionary prototyping
        
    - _Disadvantages:_ Requires high expertise in risk evaluation; not cost- or time-effective for small projects
        

### 6. Time-Boxing Model

- **Overview**
    
    - Employs parallelism between iterations to speed up delivery
        
    - Development of a new release happens in parallel with the current release
        
- **Key Concepts**
    
    - **Time Box:** Fixed duration unit of development; features are selected based on what fits into the time box
        
    - **Pipeline Structure:** Divided into fixed-duration stages (e.g., Requirements $\rightarrow$ Build $\rightarrow$ Deployment)
        
    - **Dedicated Teams:** Unlike other models where one team does everything, time-boxing requires dedicated teams for each stage operating concurrently
        
- **Math / Scheduling Example to Review**
    
    - If a time box is size $T$ (e.g., 9 weeks total with 3 stages of 3 weeks each), the first delivery is at $T$ weeks, but subsequent deliveries occur every $T/3$ weeks (e.g., every 3 weeks instead of waiting a full 9 weeks for the next linear cycle).
        

### 7. Extreme Programming (XP)

- **Overview & Philosophy**
    
    - Proposed by Kent Beck (1999); part of the agile umbrella
        
    - Philosophy: _"If something is known to be beneficial, why not put it to constant use to the extreme?"_
        
- **Core Extreme Practices**
    
    - _Code Review:_ Pair programming (one codes, one reviews concurrently)
        
    - _Testing:_ Test-Driven Development (TDD) – writing test cases _before_ writing code
        
    - _Incremental Development:_ New increments delivered every few days
        
    - _Simplicity:_ Keeping code simple for easy testing and debugging
        
    - _Design:_ Daily refactoring to improve efficiency/maintainability
        
    - _Integration Testing:_ Continuous integration (system builds and tests run several times a day)
        
- **Workflow Mechanisms**
    
    - _User Stories:_ Informal, conversational descriptions of features by users
        
    - _Metaphors:_ Common architectural vision of how the system works
        
- **Applicability:** Small projects, face-to-face communication, or research/new technology projects.
    

### 8. Agility & Scrum

- **The Agile Philosophy**
    
    - Self-organizing teams with control over work
        
    - Intense communication/collaboration (developers + customers)
        
    - Embracing change as an opportunity
        
    - Rapid delivery of valuable software
        
- **The 12 Principles Behind the Agile Manifesto** _(Memorize core concepts for essay/matching questions)_:
    
    1. Customer satisfaction through early/continuous delivery
        
    2. Welcoming changing requirements late in development
        
    3. Frequent delivery of working software (weeks to months)
        
    4. Daily cooperation between business people and developers
        
    5. Motivated individuals trusted to get the job done
        
    6. Face-to-face conversation as the most efficient communication
        
    7. Working software as the primary measure of progress
        
    8. Sustainable development (maintaining a constant pace)
        
    9. Technical excellence and good design
        
    10. Simplicity (maximizing work not done)
        
    11. Self-organizing teams for best architectures/designs
        
    12. Regular team reflection and behavior tuning
        
- **Scrum Framework**
    
    - _Product Backlog:_ Prioritized master list of customer-desired features
        
    - _Sprint Backlog:_ Subset of high-priority features committed to for a sprint
        
    - _Sprint:_ Fixed time-box cycle (historically 30 days, often 1–2 weeks now)
        
    - _Daily Scrum (Stand-up):_ 15-minute daily meeting answering 3 questions:
        
        1. What did I do yesterday?
            
        2. What will I do today?
            
        3. What is blocking me?
            
    - _Sprint Review/Demo:_ Delivering and demonstrating new working functionality at the end of the sprint





##  Lesson 3: Software Requirements

### 1. Introduction to Software Requirements

- **Definition of a Requirement (IEEE)**:
    
    1. A condition or capability needed by a user to solve a problem or achieve an objective.
        
    2. A condition or capability that must be met or possessed by a system to satisfy a contract, standard, specification, or other formally imposed document.
        
- **The Problem of Scale**:
    
    - **Small-scale systems**: Understanding and specifying requirements is relatively easy.
        
    - **Large-scale systems**: Very hard, highly problematic, and error-prone (often considered the hardest part of software engineering).
        
    - **Input**: User needs existing in the minds of people.
        
    - **Output**: A precise statement of what the future system will do.
        

### 2. The Need for Software Requirements & Specification (SRS)

- **Bridging the Communication Gap**:
    
    - Establishes a basis of agreement between the user and the supplier.
        
    - Users understand their needs (though sometimes unclearly) but may not understand software.
        
    - Developers know how to build software but may not know the problem domain.
        
- **Clarifying User Needs**:
    
    - Helps users understand their own needs (the goal is not just automating manual systems, but adding value through IT).
        
- **Validation and Quality Control**:
    
    - Provides a reference for product validation (ensuring the software satisfies the SRS).
        
    - High-quality SRS is essential for high-quality software, as requirement errors manifest directly in the final product.
        
- **Cost Reduction**:
    
    - Fixing requirement errors and requirement changes later in development is extremely expensive (changes can cost up to 40%). A good SRS minimizes changes and errors.
        

### 3. The Requirements Process

- **Basic Activities**:
    
    1. **Problem Analysis (Elicitation)**: The hardest activity; involves understanding desired systems and needs.
        
    2. **Requirement Specification**: Documenting the findings into an SRS.
        
    3. **Validation**: Checking the SRS and final product for correctness and completeness.
        
- **Iterative Nature**:
    
    - The process is **not linear—it is iterative**. Phases overlap, specification helps analysis, and validation uncovers gaps leading to further analysis.
        
- **Analysis Strategies**:
    
    - _Divide and Conquer_: Decomposing large problems into smaller, manageable parts.
        
    - Organizing large volumes of data using techniques like **Data Flow Diagrams (DFDs)**, **Object Diagrams**, and **Use Cases**.
        

### 4. Problem Analysis

- **Aim**: Gaining an understanding of needs, requirements, and constraints.
    
- **Activities Involved**:
    
    - Interviewing clients and users, reading manuals, studying current systems, and helping clients understand new possibilities (acting like a consultant).
        
- **Key Issues to Manage**:
    
    - Obtaining necessary information and brainstorming.
        
    - Organizing large amounts of information.
        
    - Ensuring **completeness** and **consistency**.
        
    - Avoiding internal design details prematurely.
        
    - **Interpersonal and communication skills** (fundamental principle: problem partitioning via Work Breakdown Structures / **WBS**).
        

### 5. Requirements Specification & Characteristics of a Good SRS

- **Why Models (DFDs, OO models) aren't SRSs**: SRS focuses on _external behavior_, whereas modeling focuses on _problem structure_. UIs, error handling, and constraints must also be in the SRS.
    
- **Core Characteristics of a Good SRS**:
    
    - **Correct**: Accurately represents desired features.
        
    - **Complete**: All desired features included (the hardest to satisfy).
        
    - **Unambiguous**: Each requirement has exactly one meaning.
        
    - **Consistent**: Requirements do not contradict each other.
        
    - **Verifiable**: Cost-effective way exists to check if the software satisfies the requirement.
        
    - **Traceable**: Origin of requirement and relation to software elements can be tracked.
        
    - **Modifiable**: Easy to change when needed.
        
    - **Ranked for importance and/or stability**: Helps prioritize construction and manage risk.
        

### 6. Components of an SRS

An SRS must specify requirements across four main areas:

1. **Functional Requirements** (The heart/bulk of the SRS):
    
    - Specifies all functionality, inputs, outputs, relationships between them, and behavior for invalid inputs.
        
2. **Performance Requirements**:
    
    - Dynamic constraints (response time, throughput).
        
    - Static capacity constraints (number of terminals, simultaneous users, storage sizes). Must be in measurable terms.
        
3. **Design Constraints**:
    
    - Standards compliance, hardware limitations, reliability, fault tolerance, backup requirements, and security.
        
4. **External Interfaces**:
    
    - Interactions with people (User Interfaces), hardware, software, and communication interfaces. (Avoid vague terms like "friendliness").
        

### 7. Structure of an SRS (IEEE Recommendation)

- **General 3-Section Structure**:
    
    1. **Introduction**: Purpose, scope, definitions/acronyms, references, overview (motivation and business objectives).
        
    2. **Overall Description**: Product perspective (relationship to other products), product functions, user characteristics, general constraints, assumptions, and dependencies.
        
    3. **Specific Requirements**: Detailed requirements organized using one of the IEEE approaches:
        
        - _Organized by User Class_ (e.g., User Class 1, User Class 2).
            
        - _Organized by System Feature_ (Introduction/purpose, stimulus-response sequence, and associated functional requirements).
            

### 8. Functional Specification with Use Cases

- **Basics of Use Cases**:
    
    - A newer textual technique for specifying external behavior and functionality, well-suited for interactive systems. Captures a contract between a user and the system.
        
- **Key Concepts**:
    
    - **Actor**: A person or system that interacts with the proposed system to achieve a goal. Can be primary (initiates the use case) or secondary.
        
    - **Scenario**: A set of actions performed to achieve a goal under specific conditions.
        
    - **Main Success Scenario**: When things go normally and the goal is achieved.
        
    - **Alternate / Exception Scenarios**: When things go wrong and goals cannot be achieved.
        
- **Advanced Use Case Relationships (UML Diagrams)**:
    
    - **Include Relationship (`<<include>>`)**: Mandatory behavior that is part of the base use case (represented by a dashed arrow pointing to the included use case).
        
    - **Extend Relationship (`<<extend>>`)**: Optional behavior that comes after the base use case under certain conditions (represented by a dashed arrow pointing from the extension back to the base use case).
        
- **Developing Use Cases Step-by-Step**:
    
    1. Identify actors and goals (actor-goal list).
        
    2. Expand main success scenarios.
        
    3. Identify failure conditions step-by-step.
        
    4. Specify failure handling behavior.
        

### 9. Requirements Validation

- **Why Validate?** Requirements defects are expensive to fix later.
    
- **Most Common Errors**:
    
    - Omission (30%)
        
    - Inconsistency (10–30%)
        
    - Incorrect facts (10–30%)
        
    - Ambiguity (5–20%)
        
- **Requirements Review**:
    
    - Conducted by a review group including the author, client, users, and development team representatives. Standard inspections catch **40% to 80%** of requirement errors.
        

### Suggested Exam Prep Next Steps

1. **Focus on Definitions**: Be ready to write out the IEEE definition of a requirement and list the key characteristics of a good SRS (Correct, Complete, Unambiguous, etc.).
    
2. **Practice Use Cases**: Review the lecture examples (e.g., buying stocks, buying a product, online auction system) and practice drafting a main success scenario and alternative/exception scenarios for a hypothetical system.
    
3. **Understand Relationships**: Know the visual notation and behavioral difference between `<<include>>` and `<<extend>>` use case relationships for exam diagrams.

## Lesson 5: Project Planning — Exam Study Guide

### 1. Introduction to Software Project Planning

- **Definition & Objective:** Software project planning involves deciding what tasks need to be done, in what order to do them, and what resources are needed to accomplish the tasks.
    
- **Core Requirements:** Successful software development requires careful planning to achieve the best time, least cost, and least risk.
    

### 2. Work Breakdown Structure (WBS)

- **Definition:** A hierarchical depiction of the project in terms of discrete pieces of work needed to complete it and their ordering.
    
- **Key Characteristics:**
    
    - Uses a decimal numbering system (e.g., `3.1.5`, where `0` is typically the top level).
        
    - Includes development, management, and project support tasks.
        
    - Shows "is contained in" (hierarchical) relationships.
        
    - **Important Limitation:** Does **not** show task dependencies or durations.
        
- **Two Main Formats:**
    
    1. _Outline_ (indented format)
        
    2. _Graphical Tree_ (organizational chart)
        
- **WBS Types:**
    
    - **Process WBS (Activity-oriented):** e.g., Requirements, Analysis, Design, Testing. Typically used by project managers.
        
    - **Product WBS (Entity-oriented):** e.g., Financial engine, Interface system, Database. Typically used by engineering managers.
        
    - **Hybrid WBS:** Combining lifecycle phases at the high level with component/feature specifics within phases.
        
- **Work Packages:**
    
    - Generic term for discrete tasks with definable end results (typically the "leaves" on the tree).
        
    - **The "One-to-Two Rule":** Ideally sized for 1–2 persons for 1–2 weeks (2–3 weeks maximum, 1 day minimum for software projects).
        
    - Forms the basis for monitoring, reporting, and assigning resources.
        
- **WBS Guidelines:**
    
    - Keep it easy to understand and ensure each element corresponds to a deliverable.
        
    - Break down tasks until you can generate accurate time and cost estimates.
        
    - Rule of thumb: Each level should have no more than 7 items.
        

### 3. Scheduling Concepts & Terminology

- **Primary Objectives:** Best time, least cost, least risk.
    
- **Secondary Objectives:** Evaluation of schedule alternatives, effective use of resources, and communication.
    
- **Key Scheduling Terminology:**
    
    - **Precedence:** A task that must occur before another.
        
    - **Concurrence:** Concurrent tasks occur at the same time (in parallel).
        
    - **Lead Time:** Starting a dependent task slightly early before its predecessor fully finishes (early overlap).
        
    - **Lag Time:** The minimum required waiting time between finishing one activity and starting the next (e.g., waiting for paint to dry).
        
    - **Milestones:** Zero-duration points identifying critical review/delivery events (e.g., SRR, PDR, CDR, ATR).
        
    - **Slack & Float Time:**
        
        - _Free Slack:_ Time an activity has before it delays the next task.
            
        - _Total Slack:_ Slack an activity has before delaying the entire project ($T_S = T_L - T_E$, where $T_E$ is earliest time and $T_L$ is latest time).
            

### 4. Scheduling Techniques: Network Diagrams & PERT

- **Network Diagrams:** Graphical representations of project tasks, flow, and relationships developed in the 1950s.
    
- **Two Classic Formats:**
    
    - **AOA (Activity on Arrow):** Circles represent events; arrows represent tasks (also known as Arrow Diagramming Method / ADM).
        
    - **AON (Activity on Node):** Nodes (rectangles/circles) contain task info; arrows represent dependencies (also known as Precedence Diagramming Method / PDM).
        
- **Four Task Dependency Types:**
    
    1. **Finish-to-Start (FS):** B cannot start until A finishes.
        
    2. **Start-to-Start (SS):** B cannot start until A starts.
        
    3. **Finish-to-Finish (FF):** B cannot finish until A finishes.
        
    4. **Start-to-Finish (SF):** B cannot finish until A starts (rare).
        
- **PERT (Program Evaluation and Review Technique):**
    
    - Models task dependencies and time estimates to calculate completion times and find the critical path.
        
    - **Forward Pass Algorithm (Completion Times):** For each node, if predecessors are completed, take the latest completion time of the predecessors and add the required time for the current node. The latest node determines the earliest project completion time.
        
    - **Backward Pass Algorithm (Slack Time):** Determines how much flexibility non-critical tasks have without delaying the project.
        
- **Critical Path:**
    
    - The longest full path and the specific set of sequential tasks upon which the project completion date depends.
        
    - **Critical Path Algorithm:** Start with the node(s) with the latest completion time and work backward by picking predecessors with the latest completion times until reaching the start node.
        
    - _Note:_ Tasks on the critical path have zero slack.
        

### 5. Gantt Charts

- **Definition:** A special type of bar chart where each bar represents an activity plotted along a timeline, with bar lengths proportional to activity durations.
    
- **Usage:** Helpful for planning and visualizing the utilization of resources (whereas PERT is primarily useful for monitoring timely progress).
    

### 6. Reducing Project Duration (Schedule Compression)

- How to shorten a project schedule:
    
    - Reducing scope or quality.
        
    - Adding resources.
        
    - Concurrency (performing tasks in parallel).
        
    - Substitution of activities.
        





## Exam Study Guide & Topic Checklist: Lesson 6 - Design

### Phase 1: Software Design Fundamentals

- **1. Definition and Nature of Design**
    
    - Noun vs. Verb definitions (abstract entity/plan vs. process of creation)
        
    - Position in the lifecycle: Intermediate language between requirements and code
        
    - Moving from the problem domain to the solution domain
        
    - Importance: Critical creative activity, impact on testing, maintenance, and major system characteristics
        
- **2. Levels in the Design Process**
    
    - **Architectural Design:** Identifying system components, their behaviors, and relationships (module-level view)
        
    - **High-Level Design:** Organizing module structures
        
    - **Logic Design:** Designing internal component mechanics and algorithms
        
- **3. Evaluation Criteria (Design Objectives)**
    
    - **Correctness:** Satisfying requirements and constraints (most fundamental)
        
    - **Efficiency:** Proper resource utilization (processor and memory)
        
    - **Maintainability:** Facilitating testing, debugging, and modifications (most important quality criteria)
        
    - **Cost:** Minimizing development and long-term maintenance costs
        

### Phase 2: Fundamental Design Principles

- **1. Problem Partitioning ("Divide and Conquer")**
    
    - Splitting problems into manageable pieces
        
    - Balancing communication complexity vs. component independence
        
- **2. Abstraction**
    
    - Treating components as black boxes to hide internal details
        
    - Gradual transition from abstract to concrete representations
        
- **3. Modularity**
    
    - Supporting hierarchical program structures and design clarity
        
    - **Cohesion:** Intra-module functional strength (aim for high cohesion)
        
    - **Coupling:** Inter-module interaction and dependence (aim for low coupling)
        
        - _Coupling Levels (Low to High):_ Data $\rightarrow$ Stamp $\rightarrow$ Control $\rightarrow$ Common $\rightarrow$ Content
            
        - _Cohesion Levels (Low to High):_ Coincidental $\rightarrow$ Logical $\rightarrow$ Temporal $\rightarrow$ Procedural $\rightarrow$ Communicational $\rightarrow$ Sequential $\rightarrow$ Functional
            

### Phase 3: Function-Oriented Design (FOD)

- **1. Core Concepts**
    
    - Breaking a system down into interacting functions or modules
        
    - Centralized system state representation
        
    - Top-down refinement / decomposition (e.g., Library Management System example: `assign-membership-number`, `create-member-record`, `print-bill`)
        
- **2. Characteristics & Limitations**
    
    - Relies heavily on global data sharing and parameter passing
        
    - Functions modify program state during execution
        

### Phase 4: Object-Oriented Design (OOD) & OOP Concepts

- **1. Fundamentals vs. Functional Approach**
    
    - Combining data and behavior into single entities (Objects/Classes)
        
- **2. Core Object-Oriented Principles**
    
    - **Encapsulation:** Grouping state and behavior into a single unit
        
    - **Information Hiding:** Restricting external visibility through access specifiers (`public`, `private`, `protected`)
        
    - **State Retention & Identity:** Objects maintain past state and possess distinct identities
        
    - **Classes vs. Objects:** Class as a template/stencil vs. Object as an instance
        
- **3. Inheritance & Polymorphism**
    
    - Base classes (superclasses) vs. Derived classes (subclasses)
        
    - "Is-a" relationship hierarchies (Generalization vs. Specialization)
        
    - Strict vs. Non-strict inheritance
        
    - Single, Multiple, and Repeated inheritance
        
- **4. OOD Module-Level Quality Metrics**
    
    - **Interaction Coupling:** Method invocation patterns and parameter passing
        
    - **Component Coupling:** Instance variables and object dependencies
        
    - **Inheritance Coupling:** Subclass modifications to parent signatures/implementations
        
    - **Method, Class, and Inheritance Cohesion**
        
    - **Open-Closed Principle:** Classes open for extension, closed for modification
        

### Phase 5: Unified Modeling Language (UML) & Modeling

- **1. Purpose of Modeling**
    
    - Visualization, specification, template generation, and documentation
        
- **2. UML Diagrams**
    
    - **Class Diagrams:** Static structure, classes, attributes, methods, visibility tags, associations, and aggregations (part-whole relationships)
        
    - **Sequence Diagrams:** Behavioral dynamic view, objects, lifelines, message passing, and chronological ordering
        

### Exam Prep Study Checklists

- **Review Questions to Practice:**
    
    - [ ] Compare and contrast Function-Oriented Design and Object-Oriented Design.
        
    - [ ] Draw and explain the hierarchies of Coupling and Cohesion.
        
    - [ ] Explain the Open-Closed Principle and how OOD satisfies it using inheritance.
        
    - [ ] Interpret or sketch a basic UML class diagram (including public/private notations, associations, and aggregations).
        
    - [ ] Trace a sequence diagram for a use case scenario (e.g., restaurant ordering system).

# ISE321: Lesson 7 — Implementation and Testing Study Guide

## 1. Implementation (Coding)

- **Goal of Coding:**
    
    - Code is read far more often than it is written (by authors during debugging/enhancement and by maintainers).
        
    - Ease of understanding and modification are the basic goals (write code for the reader, not just the compiler).
        
    - _The Weinberg Experiment:_ Minimizing effort or tight code without regard for clarity leads to poor readability; when readability is a stated goal, programmers achieve it.
        

### A. Programming Principles and Guidelines

- **Structured Programming:**
    
    - **Static vs. Dynamic Structure:** Static is text sequence; dynamic is execution sequence (goal is to align them/linearize control flow).
        
    - **Structured Constructs:** Selection (`if-then-else`), Iteration (`while`, `repeat-until`), and Sequencing (`S1; S2; S3`). Single-entry, single-exit rule. Avoid unstructured constructs (`break`, `continue`, `goto`) unless necessary.
        
    - **Hoare's Notation:** $P \{S\} Q$ (Pre-condition $P$, Statement $S$, Post-condition $Q$).
        
- **Information Hiding:**
    
    - Hide internal data structures and expose only defined access functions (reduces coupling, improves maintainability).
        
- **Key Programming Practices & Defensive Coding:**
    
    - **Avoid Deep Nesting:** Flatten nested `if-else` blocks if conditions are disjoint.
        
    - **Module Interfaces & Side Effects:** Keep module parameters $\le 5$; avoid hidden state changes (globals).
        
    - **Robustness & Error Handling:** Handle bad inputs, overflows, and missing defaults in switch statements. Never leave empty catch blocks or empty loops. Check read returns and validate correlated parameters (e.g., length vs. buffer size).
        

### B. Coding Standards

- **Purpose:** Ensure consistent readability across team projects. Covers four key areas:
    
    - **Naming Conventions (Java context):**
        
        - _Packages:_ All lowercase (`mypackage`)
            
        - _Types/Classes:_ Noun, starts with uppercase (`Day`, `EventHandler`)
            
        - _Variables:_ Noun, starts with lowercase (`name`, `amount`)
            
        - _Constants:_ All uppercase (`PI`, `MAX_ITERATIONS`)
            
        - _Methods:_ Verb, starts with lowercase (`getValue()`)
            
        - _Booleans:_ Prefix `is` (`isStatus`); avoid negatives
            
        - _Exceptions:_ Suffix `Exception` (`OutOfBoundException`)
            
    - **Files:** One outer class per file (`.java`), class name matches file name, keep lines under 80 columns.
        
    - **Statements:** Initialize variables where declared, smallest scope possible, no executable statements inside conditionals.
        
    - **Comments & Layout:** Module prologues (Javadoc format specifying purpose, parameters, return values, side effects), clear indentation, and consistent whitespace.
        

## 2. Incrementally Developing Code

- **Incremental Coding:** Code a bit, test a bit with quick tests; makes debugging significantly easier because errors can be isolated to recently added code.
    
- **Test-Driven Development (TDD):**
    
    - **Process:** Write test scripts _first_, write just enough code to pass them, refactor if needed, repeat.
        
    - **Benefits:** Usage-driven interfaces, natural prioritization of features, always-up-to-date test suite.
        
    - **Drawbacks:** Heavily reliant on test thoroughness; un-tested edge cases might be neglected.
        
- **Pair Programming:**
    
    - **Roles:** _Driver_ (types the code) and _Navigator_ (actively reviews as it is typed); roles rotate frequently.
        
    - **Trade-offs:** Better design decisions and defect catch rates vs. potential productivity overhead and code ownership concerns.
        

## 3. Managing Evolving Code

- **Source Code Control:**
    
    - Uses repositories (e.g., Git, SVN, historical CVS/Visual SourceSafe) to track revision history via deltas.
        
    - **Core Operations:** Checkout, Commit (check-in), Update, and getting reports (`diff`, `log`).
        
    - Resolving merge conflicts when multiple developers modify the same lines.
        
- **Build Tools:** Automate compilation by tracking dependencies (e.g., Makefiles re-compiling only changed files).
    
- **Refactoring:**
    
    - **Definition:** Changing internal software structure to improve understanding and modification _without altering observable behavior_.
        
    - **Goals:** Reduce coupling, increase cohesion, follow the open-closed principle.
        
    - **Golden Rules:** Refactor in small steps and always have automated test scripts running to verify behavior.
        
    - **Bad Smells (Signs refactoring is needed):** Duplicate code, long methods, long classes, long parameter lists, switch statements (instead of polymorphism), speculative generality, and excessive communication/message chaining.
        

## 4. Testing Concepts and Process

- **Error, Fault, and Failure:**
    
    - _Error:_ Human action introducing a defect (or gap between actual/correct output).
        
    - _Fault (Bug/Defect):_ A condition in the code that may cause a system failure.
        
    - _Failure:_ Inability of the system to perform a required function according to specifications.
        
- **Core Philosophy:** Testing can only reveal the presence of faults, never prove their absence.
    
- **Psychology of Testing:** Execute the program with the _intent of finding errors_ (treat it as an adversary, rather than trying to prove it works).
    
- **Levels of Testing:**
    
    - **Unit Testing:** Individual modules/classes tested by their developer.
        
    - **Integration Testing:** Combined unit-tested modules tested for interface/design defects.
        
    - **System Testing:** Entire software system checked against the requirements document.
        
    - **Acceptance Testing:** Entire system tested with client's realistic data on-site to prove it solves their problem.
        
    - **Regression Testing:** Re-running earlier test cases on a modified system to ensure old services didn't break.
        
- **The Testing Process:**
    
    - **Test Planning:** Defines scope, approach, units, and schedule.
        
    - **Test Case Design:** Specifies inputs, execution conditions, and expected outputs.
        
    - **Test Case Execution & Defect Tracking:** Running tests, logging bugs through their lifecycle (Submitted $\rightarrow$ Fixed $\rightarrow$ Verified $\rightarrow$ Closed).
        

## 5. Verification Techniques: Unit Testing & Code Inspection

- **Unit Testing Details:**
    
    - Uses **Drivers** (call the unit, feed test data, report results) and **Stubs** (dummies for unwritten called modules).
        
    - Automated frameworks (e.g., JUnit, CUnit) utilize assertion methods (`assertTrue`, `assertEquals`) to structure test suites.
        
- **Code Inspection (Static Testing):**
    
    - Manual peer review process (Fagan's inspection).
        
    - **Four Stages:** Planning, Self-Review, Group Review Meeting (with defined roles: Moderator, Author, Reader, Scribe), and Rework/Follow-up. Focus strictly on finding defects, not fixing them.
        

## 6. Black-Box (Functional) Testing Techniques

_Test cases derived entirely from requirements/specifications, ignoring internal code structure._

- **Equivalence Class Partitioning:** Divide input domains into valid and invalid classes; select one representative value per class.
    
- **Boundary Value Analysis:** Test high-yield edge cases at the absolute edges of equivalence classes (e.g., `min`, `min+1`, `max-1`, `max`).
    
- **Pairwise Testing:** Test every pair of input parameter values to catch multi-mode faults efficiently without running full combinatorics ($m^n$).
    
- **Special Cases (Error Guessing):** Relying on intuition and experience to test overlooked edge cases (e.g., empty files, zero divisors, blank inputs).
    
- **State-Based (Gray-Box) Testing:** Modeled on states, transitions, events, and actions.
    
    - _Coverage criteria:_ All transitions (AT), All transition pairs (ATP), and Transition tree (TT).
        

## 7. White-Box (Structural) Testing Techniques

_Test cases derived from analyzing the internal control flow and structure of the code._

- **Control Flow Graph (CFG):** Composed of nodes (statement blocks) and edges (transfer of control).
    
- **Coverage Criteria (Ordered from weakest to strongest):**
    
    1. **Statement Coverage (All-Nodes):** Every statement executed at least once.
        
    2. **Branch Coverage (All-Edges):** Every decision takes both true and false outcomes at least once (implies statement coverage).
        
    3. **Decision/Condition Coverage:** Every individual condition inside a decision is evaluated for both true and false.
        
    4. **Path Coverage (All-Paths):** Every possible path through the graph is executed (often impractical due to loops and infeasible paths).