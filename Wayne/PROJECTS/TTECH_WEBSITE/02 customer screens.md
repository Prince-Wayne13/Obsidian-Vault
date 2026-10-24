# T-Tech Website: Customer Screens

How a signed-in customer moves around. Each arrow says what the customer presses and where it goes.

**How to read the drawings:** a plain box is a screen. A box with a dashed border is a pop-up, with the page behind it blurred. A grey diamond is a decision. A thick border is where something finishes.

_Tip: these drawings use a white background. Use Obsidian's light theme, or the lines may be hard to see in dark mode._

Part of [[00 Page map]].

## 1. Moving between screens

My orders is not a shopping cart. There is no cart at launch. An order only appears after a quote has been accepted and the 50% is paid, so it is a list of jobs. Every order is tied to the quote it came from.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":65,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    SI["&nbsp;&nbsp;&nbsp;Register and sign in&nbsp;&nbsp;&nbsp;"] -- "&nbsp;&nbsp;&nbsp;After signing in&nbsp;&nbsp;&nbsp;" --> AC["&nbsp;&nbsp;&nbsp;My account&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;home of the customer area&nbsp;&nbsp;&nbsp;"]
    AC -- "&nbsp;&nbsp;&nbsp;Press Get a quote&nbsp;&nbsp;&nbsp;" --> GQ["&nbsp;&nbsp;&nbsp;Get a quote&nbsp;&nbsp;&nbsp;"]
    AC -- "&nbsp;&nbsp;&nbsp;Press My quotes&nbsp;&nbsp;&nbsp;" --> MQ["&nbsp;&nbsp;&nbsp;My quotes&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;a list of all quotes&nbsp;&nbsp;&nbsp;"]
    AC -- "&nbsp;&nbsp;&nbsp;Press My orders&nbsp;&nbsp;&nbsp;" --> MO["&nbsp;&nbsp;&nbsp;My orders&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;a list of all orders&nbsp;&nbsp;&nbsp;"]
    GQ -- "&nbsp;&nbsp;&nbsp;Press Send request&nbsp;&nbsp;&nbsp;" --> MQ
    MQ -- "&nbsp;&nbsp;&nbsp;Press one quote in the list&nbsp;&nbsp;&nbsp;" --> OQ["&nbsp;&nbsp;&nbsp;One quote&nbsp;&nbsp;&nbsp;"]
    MO -- "&nbsp;&nbsp;&nbsp;Press one order in the list&nbsp;&nbsp;&nbsp;" --> OO["&nbsp;&nbsp;&nbsp;One order&nbsp;&nbsp;&nbsp;"]
    OQ -- "&nbsp;&nbsp;&nbsp;Press View order&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;shown after the quote is accepted&nbsp;&nbsp;&nbsp;" --> OO
    OO -- "&nbsp;&nbsp;&nbsp;Press View the quote&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;this order came from&nbsp;&nbsp;&nbsp;" --> OQ
    OQ -- "&nbsp;&nbsp;&nbsp;Press Something is wrong&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;or needs changing&nbsp;&nbsp;&nbsp;" --> POP(["&nbsp;&nbsp;&nbsp;Pop-up: Message the shop&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;page behind is blurred&nbsp;&nbsp;&nbsp;"])
    OO -- "&nbsp;&nbsp;&nbsp;Press Something is wrong&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;or needs changing&nbsp;&nbsp;&nbsp;" --> POP
    POP -- "&nbsp;&nbsp;&nbsp;Press Send&nbsp;&nbsp;&nbsp;" --> BACK["&nbsp;&nbsp;&nbsp;Back on the same page&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;the reply appears under it&nbsp;&nbsp;&nbsp;"]
    class POP popup
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef popup fill:#FFFFFF,stroke:#111111,stroke-width:3px,stroke-dasharray:6 4,color:#111111,font-weight:bold
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 2. The quote form, step by step

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":65,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    S1["&nbsp;&nbsp;&nbsp;Step 1: Pick a product&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;banners, stickers, T-shirts...&nbsp;&nbsp;&nbsp;"] -- "&nbsp;&nbsp;&nbsp;Press a product&nbsp;&nbsp;&nbsp;" --> SL(["&nbsp;&nbsp;&nbsp;Pop-up: slideshow of past work&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;page behind is blurred&nbsp;&nbsp;&nbsp;"])
    SL -- "&nbsp;&nbsp;&nbsp;Tick the ones you like,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;press Done&nbsp;&nbsp;&nbsp;" --> S2["&nbsp;&nbsp;&nbsp;Step 2: Guided questions&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;main colour, side colour, size...&nbsp;&nbsp;&nbsp;"]
    SL -- "&nbsp;&nbsp;&nbsp;Press Skip&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;if nothing fits&nbsp;&nbsp;&nbsp;" --> S2
    S2 -- "&nbsp;&nbsp;&nbsp;Press Next&nbsp;&nbsp;&nbsp;" --> S3["&nbsp;&nbsp;&nbsp;Step 3: Your own design,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;your own description,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;or a voice note&nbsp;&nbsp;&nbsp;"]
    S3 --> ADD{"&nbsp;&nbsp;&nbsp;Add another&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;product?&nbsp;&nbsp;&nbsp;"}
    ADD -- "&nbsp;&nbsp;&nbsp;Yes, press Add another product&nbsp;&nbsp;&nbsp;" --> S1
    ADD -- "&nbsp;&nbsp;&nbsp;No, press Next&nbsp;&nbsp;&nbsp;" --> S4["&nbsp;&nbsp;&nbsp;Step 4: Review everything&nbsp;&nbsp;&nbsp;"]
    S4 -- "&nbsp;&nbsp;&nbsp;Press Send request&nbsp;&nbsp;&nbsp;" --> DONE["&nbsp;&nbsp;&nbsp;Request sent&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;My quotes shows: Waiting for quote&nbsp;&nbsp;&nbsp;"]
    S1 -- "&nbsp;&nbsp;&nbsp;Press Talk to staff&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;available on every step&nbsp;&nbsp;&nbsp;" --> TS(["&nbsp;&nbsp;&nbsp;Pop-up: Talk to staff&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;WhatsApp with the product filled in,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;or Please call me&nbsp;&nbsp;&nbsp;"])
    S3 -- "&nbsp;&nbsp;&nbsp;Press Save and finish later&nbsp;&nbsp;&nbsp;" --> DR["&nbsp;&nbsp;&nbsp;Saved&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;My quotes shows: Draft&nbsp;&nbsp;&nbsp;"]
    class ADD decide
    class SL,TS popup
    class DONE final
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef popup fill:#FFFFFF,stroke:#111111,stroke-width:3px,stroke-dasharray:6 4,color:#111111,font-weight:bold
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 3. From request to finished order

This shows the tags a customer sees on each quote and order.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":65,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    R["&nbsp;&nbsp;&nbsp;Request sent&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tag: Waiting for quote&nbsp;&nbsp;&nbsp;"] -- "&nbsp;&nbsp;&nbsp;Staff write the quote&nbsp;&nbsp;&nbsp;" --> Q["&nbsp;&nbsp;&nbsp;Quote sent&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tag: Sent&nbsp;&nbsp;&nbsp;"]
    Q -- "&nbsp;&nbsp;&nbsp;Customer ticks the terms&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;and pays 50%&nbsp;&nbsp;&nbsp;" --> ACC["&nbsp;&nbsp;&nbsp;Quote accepted&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tag: Accepted&nbsp;&nbsp;&nbsp;"]
    Q -- "&nbsp;&nbsp;&nbsp;14 days pass&nbsp;&nbsp;&nbsp;" --> EXP["&nbsp;&nbsp;&nbsp;Tag: Expired&nbsp;&nbsp;&nbsp;"]
    EXP -- "&nbsp;&nbsp;&nbsp;Press Revive&nbsp;&nbsp;&nbsp;" --> RC["&nbsp;&nbsp;&nbsp;Tag: Checking&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Not active yet, cannot be accepted&nbsp;&nbsp;&nbsp;"]
    RC -- "&nbsp;&nbsp;&nbsp;Staff check the price&nbsp;&nbsp;&nbsp;" --> RD{"&nbsp;&nbsp;&nbsp;Is the price&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;still right?&nbsp;&nbsp;&nbsp;"}
    RD -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> Q2["&nbsp;&nbsp;&nbsp;New 14 days start&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tag: Sent&nbsp;&nbsp;&nbsp;"]
    RD -- "&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;" --> RN["&nbsp;&nbsp;&nbsp;Staff write an updated quote&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;with the new price&nbsp;&nbsp;&nbsp;"]
    RN --> Q2
    Q2 -- "&nbsp;&nbsp;&nbsp;Same steps as any sent quote&nbsp;&nbsp;&nbsp;" --> ACC
    ACC -- "&nbsp;&nbsp;&nbsp;Staff approve the 50%&nbsp;&nbsp;&nbsp;" --> ORD["&nbsp;&nbsp;&nbsp;Order created with its own number&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;and tied to this quote&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Work starts&nbsp;&nbsp;&nbsp;"]
    ORD -- "&nbsp;&nbsp;&nbsp;Job finished&nbsp;&nbsp;&nbsp;" --> FIN["&nbsp;&nbsp;&nbsp;Tag: Ready&nbsp;&nbsp;&nbsp;"]
    FIN --> GATE{"&nbsp;&nbsp;&nbsp;Paid in full?&nbsp;&nbsp;&nbsp;"}
    GATE -- "&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;" --> WAIT["&nbsp;&nbsp;&nbsp;Customer pays the other 50%&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;at any time, staff approve it&nbsp;&nbsp;&nbsp;"]
    WAIT --> GATE
    GATE -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> COL["&nbsp;&nbsp;&nbsp;Customer collects,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;or delivery goes out&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tag: Completed&nbsp;&nbsp;&nbsp;"]
    class GATE,RD decide
    class COL final
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef popup fill:#FFFFFF,stroke:#111111,stroke-width:3px,stroke-dasharray:6 4,color:#111111,font-weight:bold
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 2. The quote form, step by step

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":65,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    S1["&nbsp;&nbsp;&nbsp;Step 1: Pick a product&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;banners, stickers, T-shirts...&nbsp;&nbsp;&nbsp;"] -- "&nbsp;&nbsp;&nbsp;Press a product&nbsp;&nbsp;&nbsp;" --> SL(["&nbsp;&nbsp;&nbsp;Pop-up: slideshow of past work&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;page behind is blurred&nbsp;&nbsp;&nbsp;"])
    SL -- "&nbsp;&nbsp;&nbsp;Tick the ones you like,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;press Done&nbsp;&nbsp;&nbsp;" --> S2["&nbsp;&nbsp;&nbsp;Step 2: Guided questions&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;main colour, side colour, size...&nbsp;&nbsp;&nbsp;"]
    SL -- "&nbsp;&nbsp;&nbsp;Press Skip&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;if nothing fits&nbsp;&nbsp;&nbsp;" --> S2
    S2 -- "&nbsp;&nbsp;&nbsp;Press Next&nbsp;&nbsp;&nbsp;" --> S3["&nbsp;&nbsp;&nbsp;Step 3: Your own design,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;your own description,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;or a voice note&nbsp;&nbsp;&nbsp;"]
    S3 --> ADD{"&nbsp;&nbsp;&nbsp;Add another&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;product?&nbsp;&nbsp;&nbsp;"}
    ADD -- "&nbsp;&nbsp;&nbsp;Yes, press Add another product&nbsp;&nbsp;&nbsp;" --> S1
    ADD -- "&nbsp;&nbsp;&nbsp;No, press Next&nbsp;&nbsp;&nbsp;" --> S4["&nbsp;&nbsp;&nbsp;Step 4: Review everything&nbsp;&nbsp;&nbsp;"]
    S4 -- "&nbsp;&nbsp;&nbsp;Press Send request&nbsp;&nbsp;&nbsp;" --> DONE["&nbsp;&nbsp;&nbsp;Request sent&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;My quotes shows: Waiting for quote&nbsp;&nbsp;&nbsp;"]
    S1 -- "&nbsp;&nbsp;&nbsp;Press Talk to staff&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;available on every step&nbsp;&nbsp;&nbsp;" --> TS(["&nbsp;&nbsp;&nbsp;Pop-up: Talk to staff&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;WhatsApp with the product filled in,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;or Please call me&nbsp;&nbsp;&nbsp;"])
    S3 -- "&nbsp;&nbsp;&nbsp;Press Save and finish later&nbsp;&nbsp;&nbsp;" --> DR["&nbsp;&nbsp;&nbsp;Saved&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;My quotes shows: Draft&nbsp;&nbsp;&nbsp;"]
    class ADD decide
    class SL,TS popup
    class DONE final
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef popup fill:#FFFFFF,stroke:#111111,stroke-width:3px,stroke-dasharray:6 4,color:#111111,font-weight:bold
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 3. From request to finished order

This shows the tags a customer sees on each quote and order.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":65,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    R["&nbsp;&nbsp;&nbsp;Request sent&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tag: Waiting for quote&nbsp;&nbsp;&nbsp;"] -- "&nbsp;&nbsp;&nbsp;Staff write the quote&nbsp;&nbsp;&nbsp;" --> Q["&nbsp;&nbsp;&nbsp;Quote sent&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tag: Sent&nbsp;&nbsp;&nbsp;"]
    Q -- "&nbsp;&nbsp;&nbsp;Customer ticks the terms&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;and pays 50%&nbsp;&nbsp;&nbsp;" --> ACC["&nbsp;&nbsp;&nbsp;Quote accepted&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tag: Accepted&nbsp;&nbsp;&nbsp;"]
    Q -- "&nbsp;&nbsp;&nbsp;14 days pass&nbsp;&nbsp;&nbsp;" --> EXP["&nbsp;&nbsp;&nbsp;Tag: Expired&nbsp;&nbsp;&nbsp;"]
    EXP -- "&nbsp;&nbsp;&nbsp;Press Revive&nbsp;&nbsp;&nbsp;" --> Q2["&nbsp;&nbsp;&nbsp;New 14 days start&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tag: Sent&nbsp;&nbsp;&nbsp;"]
    Q2 -- "&nbsp;&nbsp;&nbsp;Same steps as any sent quote&nbsp;&nbsp;&nbsp;" --> ACC
    ACC -- "&nbsp;&nbsp;&nbsp;Staff approve the 50%&nbsp;&nbsp;&nbsp;" --> ORD["&nbsp;&nbsp;&nbsp;Order created with its own number&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;and tied to this quote&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Work starts&nbsp;&nbsp;&nbsp;"]
    ORD -- "&nbsp;&nbsp;&nbsp;Job finished&nbsp;&nbsp;&nbsp;" --> FIN["&nbsp;&nbsp;&nbsp;Tag: Ready&nbsp;&nbsp;&nbsp;"]
    FIN --> GATE{"&nbsp;&nbsp;&nbsp;Paid in full?&nbsp;&nbsp;&nbsp;"}
    GATE -- "&nbsp;&nbsp;&nbsp;No&nbsp;&nbsp;&nbsp;" --> WAIT["&nbsp;&nbsp;&nbsp;Customer pays the other 50%&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;at any time, staff approve it&nbsp;&nbsp;&nbsp;"]
    WAIT --> GATE
    GATE -- "&nbsp;&nbsp;&nbsp;Yes&nbsp;&nbsp;&nbsp;" --> COL["&nbsp;&nbsp;&nbsp;Customer collects,&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;or delivery goes out&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tag: Completed&nbsp;&nbsp;&nbsp;"]
    class GATE decide
    class COL final
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef popup fill:#FFFFFF,stroke:#111111,stroke-width:3px,stroke-dasharray:6 4,color:#111111,font-weight:bold
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 4. Something is wrong or needs changing

The customer presses one button on any quote or order, picks a card, writes or records a message, and sends it. Staff can also still be reached directly on WhatsApp or by phone call.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":65,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    BTN["&nbsp;&nbsp;&nbsp;On a quote or an order:&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Press Something is wrong&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;or needs changing&nbsp;&nbsp;&nbsp;"] --> POP(["&nbsp;&nbsp;&nbsp;Pop-up: What is this about?&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;page behind is blurred&nbsp;&nbsp;&nbsp;"])
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C1["&nbsp;&nbsp;&nbsp;<b>Change my order or quote</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tell us what to change&nbsp;&nbsp;&nbsp;"]
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C2["&nbsp;&nbsp;&nbsp;<b>Report a mistake</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Something is wrong with my job&nbsp;&nbsp;&nbsp;"]
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C3["&nbsp;&nbsp;&nbsp;<b>Complaint</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;I am not happy&nbsp;&nbsp;&nbsp;"]
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C4["&nbsp;&nbsp;&nbsp;<b>Suggestion</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;An idea to improve&nbsp;&nbsp;&nbsp;"]
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C5["&nbsp;&nbsp;&nbsp;<b>Question</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;I need an answer&nbsp;&nbsp;&nbsp;"]
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C6["&nbsp;&nbsp;&nbsp;<b>Other</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Something else&nbsp;&nbsp;&nbsp;"]
    C1 & C2 & C3 & C4 & C5 & C6 --> F["&nbsp;&nbsp;&nbsp;Write your message, or record a voice note&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;You can add a picture&nbsp;&nbsp;&nbsp;"]
    F -- "&nbsp;&nbsp;&nbsp;Press Send&nbsp;&nbsp;&nbsp;" --> ST["&nbsp;&nbsp;&nbsp;Staff see it in their Messages list&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;tied to this quote or order&nbsp;&nbsp;&nbsp;"]
    ST -- "&nbsp;&nbsp;&nbsp;Staff reply&nbsp;&nbsp;&nbsp;" --> RP["&nbsp;&nbsp;&nbsp;Customer is told by email and WhatsApp&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;The reply shows under the quote or order&nbsp;&nbsp;&nbsp;"]
    class POP popup
    class RP final
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef popup fill:#FFFFFF,stroke:#111111,stroke-width:3px,stroke-dasharray:6 4,color:#111111,font-weight:bold
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## 4. Something is wrong or needs changing

The customer presses one button on any quote or order, picks a card, writes or records a message, and sends it. Staff can also still be reached directly on WhatsApp or by phone call.

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":65,"padding":24,"htmlLabels":true}}}%%
flowchart TD
    BTN["&nbsp;&nbsp;&nbsp;On a quote or an order:&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Press Something is wrong&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;or needs changing&nbsp;&nbsp;&nbsp;"] --> POP(["&nbsp;&nbsp;&nbsp;Pop-up: What is this about?&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;page behind is blurred&nbsp;&nbsp;&nbsp;"])
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C1["&nbsp;&nbsp;&nbsp;<b>Change my order or quote</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Tell us what to change&nbsp;&nbsp;&nbsp;"]
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C2["&nbsp;&nbsp;&nbsp;<b>Report a mistake</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Something is wrong with my job&nbsp;&nbsp;&nbsp;"]
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C3["&nbsp;&nbsp;&nbsp;<b>Complaint</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;I am not happy&nbsp;&nbsp;&nbsp;"]
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C4["&nbsp;&nbsp;&nbsp;<b>Suggestion</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;An idea to improve&nbsp;&nbsp;&nbsp;"]
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C5["&nbsp;&nbsp;&nbsp;<b>Question</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;I need an answer&nbsp;&nbsp;&nbsp;"]
    POP -- "&nbsp;&nbsp;&nbsp;Press a card&nbsp;&nbsp;&nbsp;" --> C6["&nbsp;&nbsp;&nbsp;<b>Other</b>&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;Something else&nbsp;&nbsp;&nbsp;"]
    C1 & C2 & C3 & C4 & C5 & C6 --> F["&nbsp;&nbsp;&nbsp;Write your message, or record a voice note&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;You can add a picture&nbsp;&nbsp;&nbsp;"]
    F -- "&nbsp;&nbsp;&nbsp;Press Send&nbsp;&nbsp;&nbsp;" --> ST["&nbsp;&nbsp;&nbsp;Staff see it in their Messages list&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;tied to this quote or order&nbsp;&nbsp;&nbsp;"]
    ST -- "&nbsp;&nbsp;&nbsp;Staff reply&nbsp;&nbsp;&nbsp;" --> RP["&nbsp;&nbsp;&nbsp;Customer is told by email and WhatsApp&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;The reply shows under the quote or order&nbsp;&nbsp;&nbsp;"]
    class POP popup
    class RP final
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef popup fill:#FFFFFF,stroke:#111111,stroke-width:3px,stroke-dasharray:6 4,color:#111111,font-weight:bold
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```

## Notes to check

- The customer cannot add or change the price from this message box. If a change affects the price, staff send a new quote.
- Which tags should My quotes and My orders show? The ones in the drawings are my first list.