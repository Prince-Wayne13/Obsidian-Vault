# T-Tech Website: Quote Journey

Plain white boxes, dark text. The journey is split into short drawings so each one stays readable.

_Tip: these drawings use a white background. Use Obsidian's light theme, or the lines may be hard to see in dark mode._

## 1. The customer asks for a quote

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":55,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    A["&nbsp;&nbsp;&nbsp;Customer registers&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;and signs in&nbsp;&nbsp;&nbsp;"] --> B["&nbsp;&nbsp;&nbsp;Customer sends quote request:&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;details, description, questions,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;voice note, files&nbsp;&nbsp;&nbsp;"]
    B --> E["&nbsp;&nbsp;&nbsp;Website emails the customer:&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;your request arrived&nbsp;&nbsp;&nbsp;"]
    E --> S1["&nbsp;&nbsp;&nbsp;Staff get a notice&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;of the new request&nbsp;&nbsp;&nbsp;"]
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 2. Staff write the quote

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":55,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    S1["&nbsp;&nbsp;&nbsp;Staff read the description&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;and questions, play the voice note&nbsp;&nbsp;&nbsp;"] --> S3{"&nbsp;&nbsp;&nbsp;Is the file and&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;the information&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;good enough?&nbsp;&nbsp;&nbsp;"}
    S3 -- "&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;" --> S4["&nbsp;&nbsp;&nbsp;Staff ask the customer directly&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;on WhatsApp or by phone call&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;for a better file or more details&nbsp;&nbsp;&nbsp;"]
    S4 --> S1
    S3 -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> S5["&nbsp;&nbsp;&nbsp;Staff write the quote once&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;on the website and&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;answer the questions&nbsp;&nbsp;&nbsp;"]
    S5 --> QS["&nbsp;&nbsp;&nbsp;Website emails the quote&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;to the customer as a link&nbsp;&nbsp;&nbsp;"]
    S5 --> S6["&nbsp;&nbsp;&nbsp;Staff send the same link&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;on WhatsApp&nbsp;&nbsp;&nbsp;"]
    class S3 decide
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 3. The customer accepts and pays the 50% deposit

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":55,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    L["&nbsp;&nbsp;&nbsp;Customer opens the quote link&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;from email or WhatsApp&nbsp;&nbsp;&nbsp;"] --> V["&nbsp;&nbsp;&nbsp;Customer reads the quote&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;on the website&nbsp;&nbsp;&nbsp;"]
    V --> F{"&nbsp;&nbsp;&nbsp;Accepted within&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;14 days?&nbsp;&nbsp;&nbsp;"}
    F -- "&nbsp;&nbsp;&nbsp;No answer&nbsp;&nbsp;&nbsp;" --> X["&nbsp;&nbsp;&nbsp;Quote shows an Expired tag&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;on the customer's page&nbsp;&nbsp;&nbsp;"]
    X --> R["&nbsp;&nbsp;&nbsp;Customer presses Revive&nbsp;&nbsp;&nbsp;"]
    R --> RC["&nbsp;&nbsp;&nbsp;Quote shows: Checking&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;It is not active yet&nbsp;&nbsp;&nbsp;"]
    RC --> RD{"&nbsp;&nbsp;&nbsp;Staff check:&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;is the price still right?&nbsp;&nbsp;&nbsp;"}
    RD -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> RA["&nbsp;&nbsp;&nbsp;New 14 days start&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Quote is active again&nbsp;&nbsp;&nbsp;"]
    RD -- "&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;" --> RN["&nbsp;&nbsp;&nbsp;Staff write an updated quote&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;with the new price&nbsp;&nbsp;&nbsp;"]
    RN --> RA
    RA --> V
    F -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> T["&nbsp;&nbsp;&nbsp;Customer ticks the&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;agreement to the terms&nbsp;&nbsp;&nbsp;"]
    T --> PM{"&nbsp;&nbsp;&nbsp;How is the&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;50% paid?&nbsp;&nbsp;&nbsp;"}
    PM -- "&nbsp;&nbsp;&nbsp;Bank transfer or mobile money&nbsp;&nbsp;&nbsp;" --> U["&nbsp;&nbsp;&nbsp;Customer uploads&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;proof of payment&nbsp;&nbsp;&nbsp;"]
    U --> OK["&nbsp;&nbsp;&nbsp;Customer presses OK&nbsp;&nbsp;&nbsp;"]
    OK --> C1{"&nbsp;&nbsp;&nbsp;Staff check:&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;is the proof correct?&nbsp;&nbsp;&nbsp;"}
    C1 -- "&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;" --> C2["&nbsp;&nbsp;&nbsp;Staff ask the customer&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;to send proof again&nbsp;&nbsp;&nbsp;"]
    C2 --> U
    C1 -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> ORD["&nbsp;&nbsp;&nbsp;Website creates the order number&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;and sends the order to T-Tech Studio&nbsp;&nbsp;&nbsp;"]
    PM -- "&nbsp;&nbsp;&nbsp;Cash&nbsp;&nbsp;&nbsp;" --> CA["&nbsp;&nbsp;&nbsp;Customer pays cash&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;at the shop&nbsp;&nbsp;&nbsp;"]
    CA --> CB["&nbsp;&nbsp;&nbsp;Staff approve&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;the cash payment&nbsp;&nbsp;&nbsp;"]
    CB --> ORD
    ORD --> DONE["&nbsp;&nbsp;&nbsp;Artwork review,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;then production&nbsp;&nbsp;&nbsp;"]
    class F,PM,C1,RD decide
    class DONE final
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 2. Staff write the quote

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":55,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    S1["&nbsp;&nbsp;&nbsp;Staff read the description&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;and questions, play the voice note&nbsp;&nbsp;&nbsp;"] --> S3{"&nbsp;&nbsp;&nbsp;Is the file and&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;the information&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;good enough?&nbsp;&nbsp;&nbsp;"}
    S3 -- "&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;" --> S4["&nbsp;&nbsp;&nbsp;Staff ask the customer directly&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;on WhatsApp or by phone call&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;for a better file or more details&nbsp;&nbsp;&nbsp;"]
    S4 --> S1
    S3 -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> S5["&nbsp;&nbsp;&nbsp;Staff write the quote once&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;on the website and&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;answer the questions&nbsp;&nbsp;&nbsp;"]
    S5 --> QS["&nbsp;&nbsp;&nbsp;Website emails the quote&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;to the customer as a link&nbsp;&nbsp;&nbsp;"]
    S5 --> S6["&nbsp;&nbsp;&nbsp;Staff send the same link&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;on WhatsApp&nbsp;&nbsp;&nbsp;"]
    class S3 decide
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 3. The customer accepts and pays the 50% deposit

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":55,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    L["&nbsp;&nbsp;&nbsp;Customer opens the quote link&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;from email or WhatsApp&nbsp;&nbsp;&nbsp;"] --> V["&nbsp;&nbsp;&nbsp;Customer reads the quote&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;on the website&nbsp;&nbsp;&nbsp;"]
    V --> F{"&nbsp;&nbsp;&nbsp;Accepted within&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;14 days?&nbsp;&nbsp;&nbsp;"}
    F -- "&nbsp;&nbsp;&nbsp;No answer&nbsp;&nbsp;&nbsp;" --> X["&nbsp;&nbsp;&nbsp;Quote shows an Expired tag&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;on the customer's page&nbsp;&nbsp;&nbsp;"]
    X --> R["&nbsp;&nbsp;&nbsp;Customer presses Revive&nbsp;&nbsp;&nbsp;"]
    R --> V
    F -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> T["&nbsp;&nbsp;&nbsp;Customer ticks the&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;agreement to the terms&nbsp;&nbsp;&nbsp;"]
    T --> PM{"&nbsp;&nbsp;&nbsp;How is the&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;50% paid?&nbsp;&nbsp;&nbsp;"}
    PM -- "&nbsp;&nbsp;&nbsp;Bank transfer or mobile money&nbsp;&nbsp;&nbsp;" --> U["&nbsp;&nbsp;&nbsp;Customer uploads&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;proof of payment&nbsp;&nbsp;&nbsp;"]
    U --> OK["&nbsp;&nbsp;&nbsp;Customer presses OK&nbsp;&nbsp;&nbsp;"]
    OK --> C1{"&nbsp;&nbsp;&nbsp;Staff check:&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;is the proof correct?&nbsp;&nbsp;&nbsp;"}
    C1 -- "&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;" --> C2["&nbsp;&nbsp;&nbsp;Staff ask the customer&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;to send proof again&nbsp;&nbsp;&nbsp;"]
    C2 --> U
    C1 -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> ORD["&nbsp;&nbsp;&nbsp;Website creates the order number&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;and sends the order to T-Tech Studio&nbsp;&nbsp;&nbsp;"]
    PM -- "&nbsp;&nbsp;&nbsp;Cash&nbsp;&nbsp;&nbsp;" --> CA["&nbsp;&nbsp;&nbsp;Customer pays cash&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;at the shop&nbsp;&nbsp;&nbsp;"]
    CA --> CB["&nbsp;&nbsp;&nbsp;Staff approve&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;the cash payment&nbsp;&nbsp;&nbsp;"]
    CB --> ORD
    ORD --> DONE["&nbsp;&nbsp;&nbsp;Artwork review,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;then production&nbsp;&nbsp;&nbsp;"]
    class F,PM,C1 decide
    class DONE final
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 4. The customer pays the other 50%

The customer can do this at any time.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":55,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    R1["&nbsp;&nbsp;&nbsp;Order shows: Partly paid&nbsp;&nbsp;&nbsp;"] --> R2["&nbsp;&nbsp;&nbsp;Customer decides to pay&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;the other 50%&nbsp;&nbsp;&nbsp;"]
    R2 --> R3{"&nbsp;&nbsp;&nbsp;How is it paid?&nbsp;&nbsp;&nbsp;"}
    R3 -- "&nbsp;&nbsp;&nbsp;Bank transfer or mobile money&nbsp;&nbsp;&nbsp;" --> R4["&nbsp;&nbsp;&nbsp;Customer uploads&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;proof of payment&nbsp;&nbsp;&nbsp;"]
    R4 --> R5{"&nbsp;&nbsp;&nbsp;Staff check:&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;is the proof correct?&nbsp;&nbsp;&nbsp;"}
    R5 -- "&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;" --> R6["&nbsp;&nbsp;&nbsp;Staff ask the customer&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;to send proof again&nbsp;&nbsp;&nbsp;"]
    R6 --> R4
    R5 -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> R9["&nbsp;&nbsp;&nbsp;Order shows: Paid&nbsp;&nbsp;&nbsp;"]
    R3 -- "&nbsp;&nbsp;&nbsp;Cash&nbsp;&nbsp;&nbsp;" --> R7["&nbsp;&nbsp;&nbsp;Customer pays cash&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;at the shop&nbsp;&nbsp;&nbsp;"]
    R7 --> R8["&nbsp;&nbsp;&nbsp;Staff approve&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;the cash payment&nbsp;&nbsp;&nbsp;"]
    R8 --> R9
    class R3,R5 decide
    class R9 final
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 4. The customer pays the other 50%

The customer can do this at any time.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":55,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    R1["&nbsp;&nbsp;&nbsp;Order shows: Partly paid&nbsp;&nbsp;&nbsp;"] --> R2["&nbsp;&nbsp;&nbsp;Customer decides to pay&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;the other 50%&nbsp;&nbsp;&nbsp;"]
    R2 --> R3{"&nbsp;&nbsp;&nbsp;How is it paid?&nbsp;&nbsp;&nbsp;"}
    R3 -- "&nbsp;&nbsp;&nbsp;Bank transfer or mobile money&nbsp;&nbsp;&nbsp;" --> R4["&nbsp;&nbsp;&nbsp;Customer uploads&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;proof of payment&nbsp;&nbsp;&nbsp;"]
    R4 --> R5{"&nbsp;&nbsp;&nbsp;Staff check:&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;is the proof correct?&nbsp;&nbsp;&nbsp;"}
    R5 -- "&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;" --> R6["&nbsp;&nbsp;&nbsp;Staff ask the customer&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;to send proof again&nbsp;&nbsp;&nbsp;"]
    R6 --> R4
    R5 -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> R9["&nbsp;&nbsp;&nbsp;Order shows: Paid&nbsp;&nbsp;&nbsp;"]
    R3 -- "&nbsp;&nbsp;&nbsp;Cash&nbsp;&nbsp;&nbsp;" --> R7["&nbsp;&nbsp;&nbsp;Customer pays cash&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;at the shop&nbsp;&nbsp;&nbsp;"]
    R7 --> R8["&nbsp;&nbsp;&nbsp;Staff approve&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;the cash payment&nbsp;&nbsp;&nbsp;"]
    R8 --> R9
    class R3,R5 decide
    class R9 final
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 5. Questions to check

- When a customer presses Revive, does the quote get a new 14 days? Do staff check the price again before it becomes active?
- Can the customer collect the finished job before the other 50% is paid?